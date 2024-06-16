#![cfg_attr(target_arch = "wasm32", no_main)]

mod state;

use self::state::NonFungibleToken;
use linera_sdk::{
    base::WithServiceAbi,
    views::{View, ViewStorageContext},
    Service, ServiceRuntime,
};

pub struct NonFungibleTokenService {
    state: NonFungibleToken,
    runtime: ServiceRuntime<Self>,
}

linera_sdk::service!(NonFungibleTokenService);

impl WithServiceAbi for NonFungibleTokenService {
    type Abi = my_nft::NonFungibleTokenAbi;
}

impl Service for NonFungibleTokenService {
    type Parameters = ();

    async fn new(runtime: ServiceRuntime<Self>) -> Self {
        let state = NonFungibleToken::load(ViewStorageContext::from(runtime.key_value_store()))
            .await
            .expect("Failed to load state");
        NonFungibleTokenService { state, runtime }
    }

    async fn handle_query(&self, _query: Self::Query) -> Self::QueryResponse {
        panic!("Queries not supported by application");
    }
}
