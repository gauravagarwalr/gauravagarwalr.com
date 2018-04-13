import React from 'react'

import AboutSection from './about'
import ExperienceSection from './experience'
import EducationSection from './education'
import SkillsSection from './skills'

const IndexPage = () => (
  <div className="container-fluid p-0">
    <AboutSection/>
    <ExperienceSection/>
    <EducationSection/>
    <SkillsSection/>
  </div>
)

export default IndexPage
