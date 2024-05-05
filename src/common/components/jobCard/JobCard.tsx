import Paper from "@mui/material/Paper";
import { IJobCard } from "../../models/IJobCard";
import "./JobCardStyles.css";
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
  return (
    <Paper elevation={2} className="jobcard" key={jobId}>
      <div className="jobcard-header">
        <div className="company-info">
          <div className="company-logo">
            <img src={companyLogo} alt="logo" />
          </div>
          <div className="company-details">
            <a className="company-name" href={jobLink}>
              {companyName}
            </a>
            <h3 className="role-offered">{jobTitle}</h3>
            <p className="location">{location}</p>
          </div>
        </div>
      </div>
      <div className="job-card-body">
        {minSalary && maxSalary ? (
          <p className="estimated-salary">{`Estimated Salary: ${currencyCode} ${minSalary} - ${maxSalary} LPA`}</p>
        ) : minSalary != null && maxSalary == null ? (
          <p className="estimated-salary">{`Estimated Salary: ${currencyCode} ${minSalary} LPA`}</p>
        ) : minSalary == null && maxSalary != null ? (
          <p className="estimated-salary">{`Estimated Salary: ${currencyCode} ${maxSalary} LPA`}</p>
        ) : (
          <></>
        )}
        <div className="about-role">
          <h3 className="about-role-heading">About Role</h3>
          <p className="role-description">{jobDescription}</p>
        </div>
        {(minExperience != null || maxExperience != null) && (
          <p className="experience-heading">Minimum Experience</p>
        )}
        {minExperience && maxExperience ? (
          <p className="experience-years">{`${minExperience} - ${maxExperience} years`}</p>
        ) : minExperience != null && maxExperience == null ? (
          <p className="experience-years">{`${minExperience} years`}</p>
        ) : minExperience == null && maxExperience != null ? (
          <p className="experience-years">{`${maxExperience} years`}</p>
        ) : (
          <></>
        )}
      </div>
      <div className="job-card-footer">
        <button className="apply-button">Easy Apply</button>
      </div>
    </Paper>
  );
};
export default JobCard;
