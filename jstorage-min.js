/**
 * ----------------------------- JSTORAGE -------------------------------------
 * Simple local storage wrapper to save data on the browser side, supporting
 * all major browsers - IE6+, Firefox2+, Safari4+, Chrome4+ and Opera 10.5+
 *
 * Copyright (c) 2010 Andris Reinman, andris.reinman@gmail.com
 * Project homepage: www.jstorage.info
 *
 * Licensed under MIT-style license:
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function(A){if(!A||!(A.toJSON||Object.toJSON)){throw new Error("jQuery or Prototype needs to be loaded before jStorage!")}A.jStorage={version:"0.1",_storage:{},_storage_service:{jStorage:"{}"},_storage_elm:null,json_encode:A.toJSON||Object.toJSON,json_decode:A.evalJSON||function(B){return String(B).evalJSON()},_init:function(){if("localStorage" in window){this._storage_service=localStorage}else{if("globalStorage" in window){this._storage_service=globalStorage[document.domain]}else{this._storage_elm=document.createElement("link");if("addBehavior" in this._storage_elm){this._storage_elm.style.behavior="url(#default#userData)";document.getElementsByTagName("head")[0].appendChild(this._storage_elm);this._storage_elm.load("jStorage");try{var C=this._storage_elm.getAttribute("jStorage")}catch(B){var C="{}"}if(C&&C.length){this._storage_service.jStorage=C}}else{this._storage_elm=null;return }}}if("jStorage" in this._storage_service&&this._storage_service.jStorage){try{this._storage=this.json_decode(this._storage_service.jStorage)}catch(B){this._storage_service.jStorage="{}"}}else{this._storage_service.jStorage="{}"}},_save:function(){if(this._storage_service){try{this._storage_service.jStorage=this.json_encode(this._storage)}catch(B){}if(this._storage_elm){try{this._storage_elm.setAttribute("jStorage",this._storage_service.jStorage);this._storage_elm.save("jStorage")}catch(B){}}}},_checkKey:function(B){if(!B||(typeof B!="string"&&typeof B!="number")){throw new TypeError("Key name must be string or numeric")}return true},set:function(B,C){this._checkKey(B);this._storage[B]=C;this._save();return C},get:function(B,C){this._checkKey(B);if(B in this._storage){return this._storage[B]}return C?C:null},deleteKey:function(B){this._checkKey(B);if(B in this._storage){delete this._storage[B];this._save();return true}return false},flush:function(){this._storage={};this._save();return true}};A.jStorage._init()})(typeof jQuery!="undefined"&&jQuery||$);