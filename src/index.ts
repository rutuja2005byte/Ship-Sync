#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";

const program = new Command();

program
    .name("shipsync")
    .description("Deploy and connect your frontend and backend automatically")
    .version("0.1.0");

program
    .command("login")
    .description("Connect your Render account")
    .action(() => {
        console.log(chalk.green("Render login command is working."));
    });

program
    .command("deploy")
    .description("Deploy the current full-stack project")
    .action(() => {
        console.log(chalk.cyan("ShipSync deployment started."));
    });

program.parse();