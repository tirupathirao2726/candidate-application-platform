import Paper from "@mui/material/Paper";
import { IJobCard } from "../../models/IJobCard";

const JobCard = ({
  jobId,
  companyLogo,
  companyName,
  jobTitle,
  jobDescription,
  jobLink,
  maxSalary,
  minSalary,
  currencyCode,
  location,
  minExperience,
  maxExperience,
}: IJobCard) => {
  return <Paper elevation={1}></Paper>;
};
export default JobCard;
