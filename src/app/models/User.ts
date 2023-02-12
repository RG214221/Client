import Child from './Child';

export default class User {
    constructor(
        public PrivateName: string,
        public LastName :string,
        public UserIDNumber:string,
        public Children:Child[],
        public DOB: Date,
        public HMO: string,
        public Gender: string
        ) {

    }
}