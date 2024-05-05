
import JobCard from "../../common/components/jobCard/JobCard";
import { Grid } from "@mui/material";
import './SearchJobsStyles.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateIsLoading } from "../../reducerSlices/loaderSlice";
import { constants } from "../../common/constants/constants";
import { addJobs } from "../../reducerSlices/jobListingSlice";

const SearchJobs = () => {

  const {currentJobs} = useSelector((state:any)=> state.jobs);
  const dispatch = useDispatch();
  const [offset, setOffset] = useState<number>(0);
  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        "limit": constants.limit,
        "offset": offset
       });
       const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
       }
      try {
        dispatch(updateIsLoading(true));
        const response = await fetch(
          constants.url, requestOptions
        );
        const result = await response.json();
        dispatch(addJobs({currentJobs:result.jdList}));
      } catch (error) {
        console.log("error:",error);
      }
      finally{
        dispatch(updateIsLoading(false));
      }
    };
    fetchData();

    const handleScroll = (e:any) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 >= scrollHeight) {
        setOffset(offset + constants.limit);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, offset]);
  return (
    <section className="jobslist-section">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {currentJobs.map((job: any) => (
          <Grid item xs={2} sm={4} md={4} key={job.jdUid}>
            <JobCard
              jobId={job.jdUid}
              companyLogo={job.logoUrl}
              companyName={job.companyName}
              jobTitle={job.jobRole}
              jobDescription={job.jobDetailsFromCompany}
              jobLink={job.jdLink}
              maxSalary={job.maxJdSalary}
              minSalary={job.minJdSalary}
              currencyCode={job.salaryCurrencyCode}
              location={job.location}
              minExperience={job.minExp}
              maxExperience={job.maxExp}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default SearchJobs;
