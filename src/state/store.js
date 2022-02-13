import { configureStore } from '@reduxjs/toolkit';
import LangReducer from './language';

export default configureStore({
    reducer: {
        lang: LangReducer
    }
})