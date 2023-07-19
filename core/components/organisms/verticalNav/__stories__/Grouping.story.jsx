import * as React from 'react';
import { VerticalNav } from '@/index';

export const grouping = () => {
  const data = [
    {
      name: 'customer_information',
      label: 'Customer Information',
      group: 'General',
    },
    {
      name: 'organizational_structure',
      label: 'Organizational Structure',
      group: 'General',
    },
    {
      name: 'contacts',
      label: 'Contacts',
      group: 'General',
    },
    {
      name: 'empi',
      label: 'EMPI',
      group: 'Platform',
    },
    {
      name: 'data_exchange',
      label: 'Data Exchange',
      group: 'Platform',
      subMenu: [
        {
          name: 'data_exchange.reports',
          label: 'Reports',
        },
        {
          name: 'data_exchange.destinations',
          label: 'Destinations',
        },
        {
          name: 'data_exchange.validation',
          label: 'Validation',
        },
      ],
    },
    {
      name: 'import_export_settings',
      label: 'Import/Export Settings',
      group: 'Platform',
    },
    {
      name: 'pipelines',
      label: 'Pipelines',
      group: 'Apps',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'data_exchange.reports',
  });

  return (
    <div className="bg-secondary-lightest vh-100">
      <VerticalNav menus={data} expanded={true} active={active} onClick={setActive} />
    </div>
  );
};

const customCode = `() => {
  const data = [
    {
      name: 'customer_information',
      label: 'Customer Information',
      group: 'General'
    },
    {
      name: 'organizational_structure',
      label: 'Organizational Structure',
      group: 'General'
    },
    {
      name: 'contacts',
      label: 'Contacts',
      group: 'General',
    },
    {
      name: 'empi',
      label: 'EMPI',
      group: 'Platform',
    },
    {
      name: 'data_exchange',
      label: 'Data Exchange',
      group: 'Platform',
      subMenu: [
        {
          name: 'data_exchange.reports',
          label: 'Reports'
        },
        {
          name: 'data_exchange.destinations',
          label: 'Destinations'
        },
        {
          name: 'data_exchange.validation',
          label: 'Validation'
        },
      ]
    },
    {
      name: 'import_export_settings',
      label: 'Import/Export Settings',
      group: 'Platform',
    },
    {
      name: 'pipelines',
      label: 'Pipelines',
      group: 'Apps',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'data_exchange.reports'
  });

  return (
    <div className="bg-secondary-lightest vh-100">
      <VerticalNav
        menus={data}
        expanded={true}
        active={active}
        onClick={setActive}
      />
    </div>
  );
}`;

export default {
  title: 'Navigation/VerticalNav/Grouping',
  component: VerticalNav,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
