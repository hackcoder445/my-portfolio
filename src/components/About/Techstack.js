import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { skillCategories, skills } from "../../data/portfolioData";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiLaravel,
  SiPhp,
  SiPython,
  SiDjango,
  SiFlask,
  SiCplusplus,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPandas,
  SiGit,
  SiAmazonaws,
  SiNpm,
  SiFlutter,
  SiTypescript,
  SiDart,
} from "react-icons/si";
import { FaRobot, FaChartBar, FaMobileAlt, FaFileExcel, FaCode } from "react-icons/fa";
import { VscGitMerge } from "react-icons/vsc";
import { HiSparkles } from "react-icons/hi";

// Safe icon mapper with fallbacks
const iconMap = {
  SiReact: <SiReact />,
  SiNextdotjs: <SiNextdotjs />,
  TbBrandReactNative: <FaMobileAlt />,
  SiFlutter: <SiFlutter />,
  SiTypescript: <SiTypescript />,
  SiDart: <SiDart />,
  SiJavascript: <SiJavascript />,
  SiHtml5: <SiHtml5 />,
  SiTailwindcss: <SiTailwindcss />,
  SiBootstrap: <SiBootstrap />,
  SiNodedotjs: <SiNodedotjs />,
  SiLaravel: <SiLaravel />,
  SiPhp: <SiPhp />,
  SiPython: <SiPython />,
  SiDjango: <SiDjango />,
  SiFlask: <SiFlask />,
  SiCplusplus: <SiCplusplus />,
  FaRobot: <FaRobot />,
  SiNpm: <SiNpm />,
  HiSparkles: <HiSparkles />,
  SiPostgresql: <SiPostgresql />,
  SiMongodb: <SiMongodb />,
  SiMysql: <SiMysql />,
  SiPandas: <SiPandas />,
  FaChartBar: <FaChartBar />,
  SiMicrosoftexcel: <FaFileExcel />,
  SiGit: <SiGit />,
  VscCode: <FaCode />,
  VscGitMerge: <VscGitMerge />,
  SiAmazonaws: <SiAmazonaws />,
  FaMobileAlt: <FaMobileAlt />,
};

function Techstack() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <div className="py-4">
      {/* Category Tabs */}
      <div className="category-tabs-wrapper">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`category-tab-btn ${
              activeCategory === cat.id ? "active" : ""
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <Row className="g-3 justify-content-center">
        {filteredSkills.map((skill, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <div className="skill-card-modern">
              <div className="skill-icon-glow">
                {iconMap[skill.icon] || <FaCode />}
              </div>
              <div className="flex-grow-1">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-level">{skill.level}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
