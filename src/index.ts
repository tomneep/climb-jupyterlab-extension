import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';

import { ILauncher } from '@jupyterlab/launcher';
import { LabIcon } from '@jupyterlab/ui-components';
import cloudIconSvg from '../style/icons/cloud.svg';

export const cloudIcon = new LabIcon({
  name: 'climb-jupyterlab-extension:cloud_icon',
  svgstr: cloudIconSvg
});

function activate(
  app: JupyterFrontEnd,
  palette: ICommandPalette,
  launcher: ILauncher | null
) {
  console.log('JupyterLab extension climb-jupyterlab-extension is activated!');

  // Command for CLIMB docs
  const open_docs_command: string = 'climb-docs:open';
  // Command to open the CLIMB-TRE documentation
  app.commands.addCommand(open_docs_command, {
    label: 'CLIMB Documentation',
    caption: 'CLIMB Documentation',
    icon: cloudIcon,
    execute: () => {
      // Open link in new tab
      window.open('https://docs.climb.ac.uk');
    }
  });

  // Add the command to the palette.
  palette.addItem({ command: open_docs_command, category: 'CLIMB' });

  // Add commands to the launcher
  if (launcher) {
    launcher.add({ command: open_docs_command, category: 'CLIMB' });
  }
}

/**
 * Initialization data for the jupyterlab_apod extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_climb:plugin',
  description: 'A JupyterLab extension for CLIMB',
  autoStart: true,
  requires: [ICommandPalette],
  optional: [ILauncher],
  activate: activate
};

export default plugin;
