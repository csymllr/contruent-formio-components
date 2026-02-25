// === Contruent Fields - Demo ===
  // Register via Formio.use() — the portal-supported method
  // version 0.1.4

  var SelectComponent = Formio.Components.components.select;

  class ProjectSelector extends SelectComponent {
    static get builderInfo() {
      return {
        title: 'Project Selector',
        icon: 'building',
        group: 'contruentFields',
        weight: 0,
        documentation: 'Pre-wired project dropdown',
        schema: ProjectSelector.schema()
      };
    }

    static schema(...extend) {
      return SelectComponent.schema({
        type: 'projectSelector',
        label: 'Project',
        key: 'projectId',
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

    get defaultSchema() {
      return ProjectSelector.schema();
    }
  }

  Formio.use({
    components: {
      projectSelector: ProjectSelector
    }
  });

if (Formio.builder && Formio.builder.groups) {
    Formio.builder.groups.contruentFields = {
      title: 'Contruent Fields',
      weight: 0,
      default: true
    };
  }
