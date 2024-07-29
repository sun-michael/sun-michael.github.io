const SkillList = ({ skills }) => {
  return (
    <div className="skill-list-container">
      {skills.map((skill, index) => (
        <div key={index} class="badge text-bg-secondary text-wrap">
          {skill}
        </div>
      ))}
    </div>
  );
};
export default SkillList;
