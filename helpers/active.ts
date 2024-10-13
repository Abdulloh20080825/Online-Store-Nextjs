export const isActive = (currentPath: string, targetPath: string) =>
	currentPath === targetPath ? 'text-blue-500 font-bold' : 'text-white';
