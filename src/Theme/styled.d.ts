import 'styled-components';
import {Theme} from '@mui/material/styles';

declare module 'syled-components'{
    export interface DefaultTheme extends Theme{}
}