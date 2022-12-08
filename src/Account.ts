import Utils from "./utils";

export default class Account {
    public clientId: string;

    constructor(auth: {
        clientId: string;
    }) {
        // 313baf0c7b4d3ff
        this.clientId = auth.clientId;
    }

    public async base(username: string) {
        const req = await Utils.get(`/3/account/${username}`, this.clientId);
        return req;
    }

    public async block(username: string) {
        const req = await Utils.get(`/account/v1/${username}/block`, this.clientId);
        console.log(req);
        return req;
    }
}

const a = new Account({ clientId: "c3bdb63953bd1dd" });
a.base("aaaaaaawoooxD");
console.log(a.block("susanaTerror"));
