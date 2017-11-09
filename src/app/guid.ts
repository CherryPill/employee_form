export class GUID{
	private static id: number = 0;
	static getID(){
		return this.id++;
	}
}
