try { var str1 = String.fromCodePoint(389509); } catch (e) {}
try { var str2 = String.fromCharCode(0x5e, 0x11, 0xcd); } catch (e) {}
try { var str3 = String.fromCharCode(0xa5, 0x8e); } catch (e) {}

try { var obj2 = {}; } catch (e) {}
try { var obj2 = Object.create(obj2); } catch (e) {}
try { var obj3 = Object.create(null); } catch (e) {}
try { var obj4 = Object.create(obj1); } catch (e) {}
try { var obj5 = {}; } catch (e) {}

try { var arr2 = Array.of(-15.1969); } catch (e) {}
try { var arr2 = Array.of(arr2, null, []); } catch (e) {}
try { var arr3 = Array.of(NaN, "MvC5"); } catch (e) {}
try { var arr4 = new Array(-17.6263, -22.349); } catch (e) {}
try { var arr5 = Array.of(45.8363, -15.715); } catch (e) {}

try { var e_arr1 = new Array(255); } catch (e) {}
try { var e_arr2 = new Array(255); } catch (e) {}
try { var e_arr3 = new Array(6); } catch (e) {}
try { var e_arr4 = new Array(127); } catch (e) {}
try { var e_arr5 = new Array(9); } catch (e) {}

try { var t_arr1 = new Float64Array(256); } catch (e) {}
try { var t_arr2 = new Uint32Array(buf4); } catch (e) {}
try { var t_arr3 = new Int8Array(127); } catch (e) {}
try { var t_arr4 = new Int32Array(buf1); } catch (e) {}
try { var t_arr5 = new Uint8ClampedArray(buf5); } catch (e) {}

try { var buf1 = new ArrayBuffer(127); } catch (e) {}
try { var buf2 = new ArrayBuffer(127); } catch (e) {}
try { var buf3 = new ArrayBuffer(255); } catch (e) {}
try { var buf4 = new ArrayBuffer(2); } catch (e) {}
try { var buf5 = new ArrayBuffer(255); } catch (e) {}

try { var dv1 = new DataView(buf1); } catch (e) {}
try { var dv2 = new DataView(buf2); } catch (e) {}
try { var dv3 = new DataView(buf3); } catch (e) {}
try { var dv4 = new DataView(buf2); } catch (e) {}
try { var dv5 = new DataView(buf5); } catch (e) {}

try { for (var i = 0; i < 4; i++) { dv1[i] = "9"; } } catch(e) {}
try { for (var i = 0; i < e_arr1.length; i++) { t_arr1[i] = str1; } } catch(e) {}
try { for (var i = 0; i < 52; i++) { dv2[i] = -60; } } catch(e) {}
try { dv3.setFloat64(0, -46.3229, true); } catch(e) {}
try { obj2.push(); } catch(e) {}
try { for (var i = 0; i < e_arr2.length; i++) { e_arr1[i] = true; } } catch(e) {}
try { for (var i = 0; i < t_arr2.length; i++) { t_arr3[i] = false; } } catch(e) {}
try { dv2.copyWithin(58, 56, 41); } catch(e) {}
try { dv4.unshift(); } catch(e) {}
try { for (var i = 0; i < t_arr1.length; i++) { arr2[i] = obj3; } } catch(e) {}
try { obj4.lastIndexOf(str2, 40); } catch(e) {}
try { dv4.setInt8(0, -13.5071, true); } catch(e) {}
try { dv3.map(function(c_val, c_index, c_array) { c_array.shift() }); } catch(e) {}
try { dv3.getUint8(3, false); } catch(e) {}
try { for (var i = 0; i < e_arr3.length; i++) { e_arr1[i] = {'a':42}; } } catch(e) {}
try { for (var i = 0; i < e_arr2.length; i++) { arr2[i] = -16; } } catch(e) {}
try { for (var i = 0; i < 43; i++) { obj5[i] = NaN; } } catch(e) {}
try { arr3.splice(34, 7, undefined, {'a':-12}); } catch(e) {}
try { for (var i = 0; i < arr4.length; i++) { arr4.map(function(c_val, c_index, c_array) { c_array.indexOf(obj2) }); } } catch(e) {}
try { t_arr1.map(function(c_val, c_index, c_array) { c_array.shift("V", -49.5429) }); } catch(e) {}
try { dv3.setUint16(3, -60, NaN); } catch(e) {}
try { for (var i = 0; i < e_arr1.length; i++) { arr3[i] = "A"; } } catch(e) {}
try { obj1.join(); } catch(e) {}
try { arr4.sort(); } catch(e) {}
try { dv4.getUint8(1, false); } catch(e) {}
try { for (var i = 0; i < 7; i++) { dv3[i] = {'a':32}; } } catch(e) {}
try { dv2.unshift(); } catch(e) {}
try { t_arr2.includes(null); } catch(e) {}
try { dv3.getInt16(2, true); } catch(e) {}
try { obj4.map(function(c_val, c_index, c_array) { c_array.toString() }); } catch(e) {}
try { t_arr1.concat(); } catch(e) {}
try { for (var i = 0; i < 37; i++) { arr1.flat(true); } } catch(e) {}
try { e_arr4.unshift(); } catch(e) {}
try { dv4.map(function(c_val, c_index, c_array) { c_array.copyWithin(43, 21, 6) }); } catch(e) {}
try { obj2.push(); } catch(e) {}
try { for (var i = 0; i < 31; i++) { e_arr4.splice(3); } } catch(e) {}
try { for (var i = 0; i < arr5.length; i++) { arr1[i] = str2; } } catch(e) {}
try { dv4.map(function(c_val, c_index, c_array) { c_array.concat() }); } catch(e) {}
try { arr2.join(); } catch(e) {}
try { for (var i = 0; i < arr5.length; i++) { t_arr4.map(function(c_val, c_index, c_array) { c_array.toString(arr3, null) }); } } catch(e) {}
try { for (var i = 0; i < e_arr3.length; i++) { arr1.flat(); } } catch(e) {}
try { obj2.push(); } catch(e) {}
try { dv5.setInt16(2, false, undefined); } catch(e) {}
try { obj2.reverse(); } catch(e) {}
try { arr5.copyWithin(37, 41); } catch(e) {}
try { t_arr4.includes(arr3); } catch(e) {}
try { dv1.map(function(c_val, c_index, c_array) { c_array.join([]) }); } catch(e) {}
try { for (var i = 0; i < 20; i++) { obj5[i] = str3; } } catch(e) {}
try { for (var i = 0; i < arr5.length; i++) { e_arr4.map(function(c_val, c_index, c_array) { c_array.toString() }); } } catch(e) {}
try { for (var i = 0; i < e_arr4.length; i++) { t_arr5.sort(function(c_first, c_second) { c_first > c_second; }); } } catch(e) {}
try { e_arr4.push(); } catch(e) {}
try { arr3.reverse(); } catch(e) {}
try { dv4.splice(); } catch(e) {}
try { arr1.sort(function(c_first, c_second) { c_first >= c_second; }); } catch(e) {}
try { for (var i = 0; i < arr5.length; i++) { e_arr5.concat(arr4); } } catch(e) {}
try { for (var i = 0; i < 43; i++) { t_arr5[i] = "j"; } } catch(e) {}
try { for (var i = 0; i < 32; i++) { arr3.push([], []); } } catch(e) {}
try { obj2.sort(); } catch(e) {}
try { for (var i = 0; i < 11; i++) { t_arr2.join(); } } catch(e) {}
try { e_arr3.join("1e"); } catch(e) {}
try { for (var i = 0; i < e_arr2.length; i++) { arr2.concat(obj1); } } catch(e) {}
try { e_arr1.fill(2, 56, 34); } catch(e) {}
try { dv5.getInt32(2, true); } catch(e) {}
try { for (var i = 0; i < t_arr1.length; i++) { arr2.map(function(c_val, c_index, c_array) { c_array.concat(arr1) }); } } catch(e) {}
try { for (var i = 0; i < t_arr2.length; i++) { arr3.map(function(c_val, c_index, c_array) { c_array.indexOf(18) }); } } catch(e) {}
try { for (var i = 0; i < 6; i++) { arr2.map(function(c_val, c_index, c_array) { c_array.slice(25) }); } } catch(e) {}
try { for (var i = 0; i < arr3.length; i++) { arr3.map(function(c_val, c_index, c_array) { c_array.concat(arr4) }); } } catch(e) {}
try { for (var i = 0; i < 6; i++) { t_arr3.push(); } } catch(e) {}
try { for (var i = 0; i < t_arr5.length; i++) { e_arr4.flat(-48.5698); } } catch(e) {}
try { t_arr1.flat(); } catch(e) {}
try { for (var i = 0; i < 61; i++) { e_arr4.map(function(c_val, c_index, c_array) { c_array.copyWithin(53, 10, 44) }); } } catch(e) {}
try { for (var i = 0; i < 27; i++) { e_arr2.unshift(obj3); } } catch(e) {}
try { dv2.getFloat32(3, false); } catch(e) {}
try { for (var i = 0; i < arr5.length; i++) { arr2.slice(9, 39); } } catch(e) {}
try { dv3.map(function(c_val, c_index, c_array) { c_array.slice(5) }); } catch(e) {}
try { for (var i = 0; i < t_arr1.length; i++) { e_arr5.reverse(); } } catch(e) {}
try { for (var i = 0; i < 28; i++) { arr2.indexOf(arr2); } } catch(e) {}
try { dv4.unshift(str1, "2", {'a':29}); } catch(e) {}
try { arr2.sort(); } catch(e) {}
try { for (var i = 0; i < 39; i++) { t_arr2.unshift({}); } } catch(e) {}
try { dv2.map(function(c_val, c_index, c_array) { c_array.slice(3) }); } catch(e) {}
try { obj4.sort(function(c_first, c_second) { c_first >= c_second; }); } catch(e) {}
try { dv4.getInt8(4, true); } catch(e) {}
try { dv2.sort(function(c_first, c_second) { c_first < c_second; }); } catch(e) {}
try { obj4.unshift(str3, arr2); } catch(e) {}
