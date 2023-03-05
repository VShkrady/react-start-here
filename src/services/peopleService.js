//All the following function are being exported as "named exports"
//that means you can import them by name by using this synthax import {nameHere}

export function get() {

    //executing this code many times
};
/* 
You would import by using the following line:

import {get} from "./services/peopleService";
*/

export function create(){};

export const update = function(){};
export const deleteById = function(){};
/* 
You would import by using the following line:

import {deleteById} from "./services/peopleService";
*/

//Export all as default
export default {get, create, update, deleteById};

/* 
You would import by using the following line to have all the functions available under friendsService

import peopleService from "./services/peopleService";
*/
