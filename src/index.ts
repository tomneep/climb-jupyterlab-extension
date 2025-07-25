import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the climb-jupyterlab-extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'climb-jupyterlab-extension:plugin',
  description: 'A JupyterLab extension for CLIMB.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension climb-jupyterlab-extension is activated!');
  }
};

export default plugin;
