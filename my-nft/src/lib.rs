use linera_sdk::base::{ContractAbi, ServiceAbi};

pub struct NonFungibleTokenAbi;

impl ContractAbi for NonFungibleTokenAbi {
    type Operation = ();
    type Response = ();
}

impl ServiceAbi for NonFungibleTokenAbi {
    type Query = ();
    type QueryResponse = ();
}
