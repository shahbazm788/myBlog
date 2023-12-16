import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container } from "react-bootstrap";
function TabsComponent() {
  const [key, setKey] = useState("populer");

  return (
    <Container className="my-3  border">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        fill
        variant="underline"
      >
        <Tab eventKey="populer" title="Populer">
          Tab content for Populer
        </Tab>
        <Tab eventKey="leatest" title="Leatest">
          Tab content for Leatest
        </Tab>
        <Tab eventKey="mix" title="Mix">
          Tab content for Mix
        </Tab>
      </Tabs>
    </Container>
  );
}

export default TabsComponent;
