import { configureStore,combineReducers } from "@reduxjs/toolkit";
import userReducer from "./Slice/UserSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from './Slice/ThemeSlice'
const rootReducer=combineReducers({
    user:userReducer, 
    theme:themeReducer,  
})
const persistConfig={
    key:"root",
    storage,
    version:1
}

const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store=configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>{
      return  getDefaultMiddleware({serializableCheck:false})
    }
})

export const persistor=persistStore(store)