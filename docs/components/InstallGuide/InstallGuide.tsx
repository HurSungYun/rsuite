import React from 'react';
import { Nav } from 'rsuite';
import { Icon } from '@rsuite/icons';
import { SiPnpm, SiNpm, SiYarn } from 'react-icons/si';

const defaultCommands = {
  npm: 'npm install rsuite --save',
  yarn: 'yarn add rsuite',
  pnpm: 'pnpm add rsuite'
};

interface InstallGuideProps {
  commands?: typeof defaultCommands;
  activeCommand?: keyof typeof defaultCommands;
}

const InstallGuide = (props: InstallGuideProps) => {
  const { commands = defaultCommands, activeCommand } = props;
  const [active, setActive] = React.useState(activeCommand || 'npm');

  return (
    <div style={{ marginTop: 16 }}>
      <Nav appearance="subtle" activeKey={active} onSelect={setActive}>
        <Nav.Item eventKey="npm" icon={<Icon as={SiNpm} color="#E53E3E" />}>
          npm
        </Nav.Item>
        <Nav.Item eventKey="yarn" icon={<Icon as={SiYarn} color="#3182ce" />}>
          yarn
        </Nav.Item>
        <Nav.Item eventKey="pnpm" icon={<Icon as={SiPnpm} color="#f9ad00" />}>
          pnpm
        </Nav.Item>
      </Nav>
      <div>
        <div className="rcv-highlight">
          <pre>
            <code className="bash">{commands[active]}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default InstallGuide;
