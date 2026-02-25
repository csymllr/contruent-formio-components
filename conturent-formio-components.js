// === Contruent Fields - Demo ===
  // Registers a "Contruent Fields" group in the Form.io builder sidebar
  // Paste the raw URL of this snippet into Project Settings > Custom Javascript

  const Components = Formio.Components;
  const SelectComponent = Components.components.select;

  class ProjectSelector extends SelectComponent {
    static get builderInfo() {
      return {
        title: 'Project Selector',
        icon: 'building',
        group: 'contruentFields',
        weight: 0,
        documentation: 'Pre-wired project dropdown from Contruent Fields',
        schema: ProjectSelector.schema()
      };
    }

    static schema(...extend) {
      return SelectComponent.schema({
        label: 'Project',
        key: 'projectId',
        type: 'select',
        dataSrc: 'values',
        data: {
          values: [
            { label: 'PRJ-001 - Highway Expansion', value: 'PRJ-001' },
            { label: 'PRJ-002 - Bridge Retrofit', value: 'PRJ-002' },
            { label: 'PRJ-003 - Tunnel Ventilation', value: 'PRJ-003' }
          ]
        },
        validate: { required: true }
      }, ...extend);
    }
  }

  Components.addComponent('projectSelector', ProjectSelector);
