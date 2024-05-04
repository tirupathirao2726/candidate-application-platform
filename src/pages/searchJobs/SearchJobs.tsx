import { useEffect } from "react";
import JobCard from "../../common/components/jobCard/JobCard";
import fetchJobList from "../../services/fetchJobs";
import { useDispatch, useSelector } from "react-redux";
import { addJobs } from "../../reducerSlices/jobListingSlice";
import { updateIsLoading } from "../../reducerSlices/loaderSlice";
const SearchJobs = () => {
  const dispatch = useDispatch();
  const { currentJobs } = useSelector((state: any) => state.jobs);
  console.log("jobss",currentJobs);
  useEffect(() => {
    dispatch(updateIsLoading(true));
    fetchJobList(10, 0)
      .then((res: any) => {
        console.log("result", res);
        dispatch(addJobs(res));
      })
      .catch((err) => {
        console.log("err--", err);
      });
    dispatch(updateIsLoading(false));
  }, []);
  return (
    <div>
      <h2>hii</h2>
      {currentJobs && currentJobs?.length > 0 && 
        currentJobs?.map((job: any) => (
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
        ))}
    </div>
  );
};

export default SearchJobs;
