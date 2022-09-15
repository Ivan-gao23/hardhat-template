import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";


const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {

	const { deployments, getNamedAccounts} = hre;
  	const { deploy } = deployments;
	const { deployer } = await getNamedAccounts();

	console.log('deploy Greeter');
	await deploy('LSSVMPairFactory', {
		from: deployer,
		args: ["Hello"],
	});

	console.log('Greeter deployed');


};

export default func;
func.tags = ["Greeter"];
