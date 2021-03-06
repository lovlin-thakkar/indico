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

import fetchBookingDetailsURL from 'indico-url:rooms_new.booking_details';

import {indicoAxios} from 'indico/utils/axios';
import {ajaxAction} from 'indico/utils/redux';
import {actions as modalActions} from '../../modals';


export const BOOKING_DETAILS_RECEIVED = 'bookings/BOOKING_DETAILS_RECEIVED';
export const FETCH_BOOKING_DETAILS_REQUEST = 'bookings/FETCH_BOOKING_DETAILS_REQUEST';
export const FETCH_BOOKING_DETAILS_SUCCESS = 'bookings/FETCH_BOOKING_DETAILS_SUCCESS';
export const FETCH_BOOKING_DETAILS_ERROR = 'bookings/FETCH_BOOKING_DETAILS_ERROR';


export function fetchBookingDetails(id) {
    return async (dispatch) => {
        return await ajaxAction(
            () => indicoAxios.get(fetchBookingDetailsURL({booking_id: id})),
            FETCH_BOOKING_DETAILS_REQUEST,
            [BOOKING_DETAILS_RECEIVED, FETCH_BOOKING_DETAILS_SUCCESS],
            FETCH_BOOKING_DETAILS_ERROR,
        )(dispatch);
    };
}

export const openBookingDetails = (bookingId) => modalActions.openModal('booking-details', bookingId);
