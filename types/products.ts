

export interface Product {
    _id : string;
    productName : string;
    _type : "product";
    image? : {
      asset : {
        _ref : string;
        _type : "image";
      }
    };
    price : number;
    description?: string;
    slug : {
        _type : "slug"
        current : string;
    };
    category : string;
    inventory : number;
  }