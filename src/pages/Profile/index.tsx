import React from "react";
import ProfileData from "../../components/ProfileData";
import RepositorieCards from "../../components/RepositorieCards";
import RandomCalendar from "../../components/RandomCalendar";
import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repositories,
  CalendarHeading,
  RepoIcon,
  Tab,
} from "./style";

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositórios</span>
      <span className="number">22</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line"></span>
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            userName={"brunocarvalhofeitosa"}
            name={"Bruno Carvalho Feitosa"}
            avatarUrl={"https://github.com/brunocarvalhofeitosa.png"}
            followers={999}
            following={10}
            company={"Enext Consultoria"}
            location={"São Paulo, Brazil"}
            email={"brunocarvalhofeitosa@outlook.com"}
            blog={undefined}
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line"></span>
          </Tab>
          <Repositories>
            <div>
              {[1, 2, 3, 4, 5, 6].map((repo) => (
                <RepositorieCards
                  key={repo}
                  username={"brunocarvalhofeitosa"}
                  reponame={"Twitter Clone"}
                  description={
                    "Clone of Twitter interface using React.js and Styled Components"
                  }
                  language={repo % 3 === 0 ? "javascript" : "typescript"}
                  stars={99}
                  forks={13}
                />
              ))}
            </div>
          </Repositories>
          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
