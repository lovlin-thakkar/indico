/* This file is part of Indico.
 * Copyright (C) 2002 - 2018 European Organization for Nuclear Research (CERN).
 *
 * Indico is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 3 of the
 * License, or (at your option) any later version.
 *
 * Indico is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Indico; if not, see <http://www.gnu.org/licenses/>.
 */

import {combineReducers} from 'redux';
import camelizeKeys from 'indico/utils/camelize';
import {requestReducer} from 'indico/utils/redux';
import * as bookingsActions from './actions';


export default combineReducers({
    requests: combineReducers({
        details: requestReducer(
            bookingsActions.FETCH_BOOKING_DETAILS_REQUEST,
            bookingsActions.FETCH_BOOKING_DETAILS_SUCCESS,
            bookingsActions.FETCH_BOOKING_DETAILS_ERROR
        )
    }),
    details: (state = {}, action) => {
        switch (action.type) {
            case bookingsActions.BOOKING_DETAILS_RECEIVED: {
                const {id, ...data} = camelizeKeys(action.data);
                return {...state, [id]: data};
            }
            default:
                return state;
        }
    },
});
