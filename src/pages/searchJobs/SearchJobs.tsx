import { useEffect } from "react";
import JobCard from "../../common/components/jobCard/JobCard";
import fetchJobList from "../../services/fetchJobs";
import { useDispatch, useSelector } from "react-redux";
import { addJobs } from "../../reducerSlices/jobListingSlice";
import { updateIsLoading } from "../../reducerSlices/loaderSlice";
import { Grid } from "@mui/material";
import './SearchJobsStyles.css';
const SearchJobs = () => {
  const dispatch = useDispatch();
  const { currentJobs, limit,currentOffset } = useSelector((state: any) => state.jobs);
  useEffect(() => {
    dispatch(updateIsLoading(true));
    fetchJobList(limit, currentOffset)
      .then((res: any) => {
        dispatch(addJobs(res));
      })
      .catch((err) => {
        console.log("err--", err);
      });
    dispatch(updateIsLoading(false));
  }, [limit,currentOffset,dispatch]);
  return (
    <section  className="jobslist-section"> 
      {
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {currentJobs.map((job:any) => (
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
      }
    </section>
  );
};

export default SearchJobs;
