try { var str1 = "7"; } catch (e) {}
try { var str2 = String.fromCodePoint(516823); } catch (e) {}
try { var str3 = String.fromCodePoint(42204); } catch (e) {}

try { var obj4 = Object.create(null); } catch (e) {}
try { var obj4 = Object.create(obj4); } catch (e) {}
try { var obj4 = Object.create(obj4); } catch (e) {}
try { var obj4 = Object.create(obj4); } catch (e) {}
try { var obj5 = Object.create(obj4); } catch (e) {}

try { var arr1 = Array.of(undefined, -61); } catch (e) {}
try { var arr2 = Array.of(obj1); } catch (e) {}
try { var arr3 = new Array(obj2); } catch (e) {}
try { var arr4 = new Array(21.6025, -59.6342); } catch (e) {}
try { var arr5 = Array.of(63.3518, -25.8469, -10.3754, -5.15369); } catch (e) {}

try { var e_arr1 = new Array(127); } catch (e) {}
try { var e_arr2 = new Array(255); } catch (e) {}
try { var e_arr3 = new Array(18); } catch (e) {}
try { var e_arr4 = new Array(255); } catch (e) {}
try { var e_arr5 = new Array(128); } catch (e) {}

try { var t_arr1 = new Float32Array(255); } catch (e) {}
try { var t_arr2 = new Uint32Array(256); } catch (e) {}
try { var t_arr3 = new Uint8Array(256); } catch (e) {}
try { var t_arr4 = new Uint32Array(256); } catch (e) {}
try { var t_arr5 = new Float32Array(buf3); } catch (e) {}

try { var buf1 = new ArrayBuffer(255); } catch (e) {}
try { var buf2 = new ArrayBuffer(128); } catch (e) {}
try { var buf3 = new ArrayBuffer(37); } catch (e) {}
try { var buf4 = new ArrayBuffer(256); } catch (e) {}
try { var buf5 = new ArrayBuffer(128); } catch (e) {}

try { var dv1 = new DataView(buf1); } catch (e) {}
try { var dv2 = new DataView(buf2); } catch (e) {}
try { var dv3 = new DataView(buf3); } catch (e) {}
try { var dv4 = new DataView(buf4); } catch (e) {}
try { var dv5 = new DataView(buf5); } catch (e) {}

try { obj4.push([], false); } catch(e) {}
try { obj5.map(function(c_val, c_index, c_array) { c_array.reverse() }); } catch(e) {}
try { for (var i = 0; i < 54; i++) { e_arr1.push(arr1, "pU", arr2, false); } } catch(e) {}
try { dv1.sort(function(c_first, c_second) { c_first < c_second; }); } catch(e) {}
try { for (var i = 0; i < t_arr1.length; i++) { e_arr2[i] = obj2; } } catch(e) {}
try { dv2.fill(17.2368); } catch(e) {}
try { dv2.setInt8(3, -1, NaN); } catch(e) {}
try { dv1.getInt16(3, true); } catch(e) {}
try { obj1.splice(4, 53, NaN, {}); } catch(e) {}
try { for (var i = 0; i < 7; i++) { obj2[i] = "G"; } } catch(e) {}
try { for (var i = 0; i < e_arr3.length; i++) { t_arr2.lastIndexOf({'a':1}); } } catch(e) {}
try { for (var i = 0; i < arr3.length; i++) { arr1[i] = false; } } catch(e) {}
try { for (var i = 0; i < 30; i++) { dv3[i] = "v5"; } } catch(e) {}
try { for (var i = 0; i < 46; i++) { arr2.unshift(true, "8"); } } catch(e) {}
try { for (var i = 0; i < t_arr2.length; i++) { arr3.indexOf(-8, 15); } } catch(e) {}
try { obj1.push(arr4); } catch(e) {}
try { dv1.push(undefined, -22, -14.2095); } catch(e) {}
try { for (var i = 0; i < t_arr1.length; i++) { arr4.sort(); } } catch(e) {}
try { for (var i = 0; i < e_arr4.length; i++) { t_arr3.sort(function(c_first, c_second) { c_first < c_second; }); } } catch(e) {}
try { for (var i = 0; i < t_arr3.length; i++) { e_arr5.map(function(c_val, c_index, c_array) { c_array.fill("o", 21, 8) }); } } catch(e) {}
try { e_arr1.reverse(); } catch(e) {}
try { for (var i = 0; i < 54; i++) { arr3.indexOf(false); } } catch(e) {}
try { dv4.fill({'a':-36}, 45, 54); } catch(e) {}
try { dv2.sort(function(c_first, c_second) { c_first < c_second; }); } catch(e) {}
try { for (var i = 0; i < 3; i++) { e_arr3.push(); } } catch(e) {}
try { dv3.unshift(); } catch(e) {}
try { dv5.map(function(c_val, c_index, c_array) { c_array.shift(false, "Y") }); } catch(e) {}
try { for (var i = 0; i < 56; i++) { t_arr4.map(function(c_val, c_index, c_array) { c_array.join() }); } } catch(e) {}
try { for (var i = 0; i < 11; i++) { arr1.unshift(); } } catch(e) {}
try { for (var i = 0; i < e_arr5.length; i++) { e_arr1.sort(); } } catch(e) {}
try { dv1.map(function(c_val, c_index, c_array) { c_array.concat(arr2) }); } catch(e) {}
try { for (var i = 0; i < 20; i++) { arr1[i] = 52; } } catch(e) {}
try { for (var i = 0; i < 17; i++) { t_arr4[i] = str1; } } catch(e) {}
try { for (var i = 0; i < e_arr2.length; i++) { e_arr5.join(arr5); } } catch(e) {}
try { e_arr5.map(function(c_val, c_index, c_array) { c_array.join(undefined) }); } catch(e) {}
try { e_arr2.sort(); } catch(e) {}
try { obj1.shift(obj1); } catch(e) {}
try { for (var i = 0; i < 37; i++) { t_arr2.copyWithin(24, 63); } } catch(e) {}
try { for (var i = 0; i < 10; i++) { e_arr1.map(function(c_val, c_index, c_array) { c_array.lastIndexOf(str2) }); } } catch(e) {}
try { t_arr4.concat(obj2); } catch(e) {}
try { for (var i = 0; i < t_arr4.length; i++) { arr3.reverse(true, str3, []); } } catch(e) {}
try { for (var i = 0; i < 26; i++) { arr3.copyWithin(23, 62); } } catch(e) {}
try { for (var i = 0; i < arr4.length; i++) { arr4.lastIndexOf([]); } } catch(e) {}
try { for (var i = 0; i < 45; i++) { t_arr3.push(); } } catch(e) {}
try { for (var i = 0; i < e_arr5.length; i++) { e_arr1[i] = {'a':-6}; } } catch(e) {}
try { e_arr5.sort(); } catch(e) {}
try { for (var i = 0; i < arr4.length; i++) { arr3[i] = []; } } catch(e) {}
try { arr4.indexOf(-50); } catch(e) {}
try { for (var i = 0; i < arr4.length; i++) { arr3[i] = "C"; } } catch(e) {}
try { for (var i = 0; i < 30; i++) { t_arr5.unshift(); } } catch(e) {}
try { dv1.join(true); } catch(e) {}
try { dv3.getFloat64(2, false); } catch(e) {}
try { dv5.map(function(c_val, c_index, c_array) { c_array.slice() }); } catch(e) {}
try { dv5.splice(27, 53, str2); } catch(e) {}
try { e_arr4.fill({}, 52, 38); } catch(e) {}
try { for (var i = 0; i < e_arr4.length; i++) { t_arr3[i] = arr1; } } catch(e) {}
try { dv1.getUint32(0, false); } catch(e) {}
try { for (var i = 0; i < e_arr2.length; i++) { t_arr2.map(function(c_val, c_index, c_array) { c_array.slice() }); } } catch(e) {}
try { dv1.flat(); } catch(e) {}
try { dv4.reverse(); } catch(e) {}
try { dv5.splice(17); } catch(e) {}
try { dv2.splice(12, 19); } catch(e) {}
try { for (var i = 0; i < arr3.length; i++) { t_arr1.map(function(c_val, c_index, c_array) { c_array.slice(38, 37) }); } } catch(e) {}
try { for (var i = 0; i < 5; i++) { t_arr3.sort(function(c_first, c_second) { c_first >= c_second; }); } } catch(e) {}
try { for (var i = 0; i < 16; i++) { e_arr2.splice(); } } catch(e) {}
try { for (var i = 0; i < 7; i++) { arr1.map(function(c_val, c_index, c_array) { c_array.shift() }); } } catch(e) {}
try { dv1.setFloat32(2, 2.46255, false); } catch(e) {}
try { for (var i = 0; i < arr3.length; i++) { e_arr5.sort(); } } catch(e) {}
try { t_arr3.splice(37, 22, "X", obj5); } catch(e) {}
try { for (var i = 0; i < 15; i++) { obj5[i] = true; } } catch(e) {}
try { dv2.setUint8(3, 13, true); } catch(e) {}
try { for (var i = 0; i < t_arr2.length; i++) { e_arr4.map(function(c_val, c_index, c_array) { c_array.shift(NaN) }); } } catch(e) {}
try { dv5.map(function(c_val, c_index, c_array) { c_array.flat() }); } catch(e) {}
try { dv1.getUint8(0, true); } catch(e) {}
try { for (var i = 0; i < 41; i++) { t_arr1.slice(28, 52); } } catch(e) {}
try { dv2.setInt16(3, 28, null); } catch(e) {}
try { for (var i = 0; i < 52; i++) { obj4[i] = {}; } } catch(e) {}
try { for (var i = 0; i < 46; i++) { t_arr2[i] = -0.655839; } } catch(e) {}
try { dv2.setUint8(3, 10, false); } catch(e) {}
try { obj3.slice(30, 48); } catch(e) {}
