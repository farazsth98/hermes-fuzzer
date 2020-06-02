try { var str1 = "9"; } catch (e) {}
try { var str2 = String.fromCodePoint(198444); } catch (e) {}
try { var str3 = "c"; } catch (e) {}
try { var str4 = String.fromCharCode(0xcd); } catch (e) {}

try { var obj2 = Object.create(null); } catch (e) {}
try { var obj2 = Object.create(obj2); } catch (e) {}
try { var obj3 = Object.create(obj1); } catch (e) {}
try { var obj4 = {}; } catch (e) {}
try { var obj5 = Object.create(obj3); } catch (e) {}

try { var arr1 = Array.of(27, 0); } catch (e) {}
try { var arr2 = Array.of(47, 37); } catch (e) {}
try { var arr3 = Array.of(obj4, false); } catch (e) {}
try { var arr4 = Array.of(13.518, -50.3721); } catch (e) {}
try { var arr5 = Array.of(-36.1983, -39.5045); } catch (e) {}

try { var e_arr1 = new Array(128); } catch (e) {}
try { var e_arr2 = new Array(128); } catch (e) {}
try { var e_arr3 = new Array(128); } catch (e) {}
try { var e_arr4 = new Array(127); } catch (e) {}
try { var e_arr5 = new Array(255); } catch (e) {}

try { var t_arr1 = new Uint32Array(buf1); } catch (e) {}
try { var t_arr2 = new Int8Array(buf1); } catch (e) {}
try { var t_arr3 = new Int32Array(0); } catch (e) {}
try { var t_arr4 = new Float32Array(255); } catch (e) {}
try { var t_arr5 = new Float32Array(buf2); } catch (e) {}

try { var buf1 = new ArrayBuffer(255); } catch (e) {}
try { var buf2 = new ArrayBuffer(2); } catch (e) {}
try { var buf3 = new ArrayBuffer(127); } catch (e) {}
try { var buf4 = new ArrayBuffer(127); } catch (e) {}

try { var dv1 = new DataView(buf2); } catch (e) {}
try { var dv2 = new DataView(buf3); } catch (e) {}
try { var dv3 = new DataView(buf3); } catch (e) {}
try { var dv4 = new DataView(buf4); } catch (e) {}
try { var dv5 = new DataView(buf1); } catch (e) {}

try { e_arr1.sort(function(c_first, c_second) { c_first > c_second; }); } catch(e) {}
try { obj2.push(); } catch(e) {}
try { for (var i = 0; i < e_arr2.length; i++) { t_arr1[i] = []; } } catch(e) {}
try { dv1.setFloat32(4, 36, true); } catch(e) {}
try { arr1.concat(obj3); } catch(e) {}
try { dv2.map(function(c_val, c_index, c_array) { c_array.shift(arr2) }); } catch(e) {}
try { for (var i = 0; i < 21; i++) { e_arr3.splice(6); } } catch(e) {}
try { for (var i = 0; i < arr2.length; i++) { arr3[i] = {}; } } catch(e) {}
try { obj2.sort(); } catch(e) {}
try { arr4.map(function(c_val, c_index, c_array) { c_array.copyWithin(3, 19) }); } catch(e) {}
try { for (var i = 0; i < 13; i++) { e_arr1.copyWithin(5, 48); } } catch(e) {}
try { for (var i = 0; i < 54; i++) { e_arr1.splice(17, 15, arr2, 64); } } catch(e) {}
try { t_arr2.sort(); } catch(e) {}
try { for (var i = 0; i < 2; i++) { t_arr3.slice(64); } } catch(e) {}
try { for (var i = 0; i < t_arr4.length; i++) { arr5.sort(function(c_first, c_second) { c_first < c_second; }); } } catch(e) {}
try { e_arr1.sort(function(c_first, c_second) { c_first > c_second; }); } catch(e) {}
try { for (var i = 0; i < arr1.length; i++) { e_arr4[i] = true; } } catch(e) {}
try { for (var i = 0; i < e_arr2.length; i++) { e_arr2[i] = true; } } catch(e) {}
try { obj2.includes([], 62); } catch(e) {}
try { obj5.sort(function(c_first, c_second) { c_first >= c_second; }); } catch(e) {}
try { for (var i = 0; i < 54; i++) { t_arr4.push(-59); } } catch(e) {}
try { for (var i = 0; i < t_arr4.length; i++) { e_arr4[i] = 20; } } catch(e) {}
try { for (var i = 0; i < 32; i++) { t_arr3[i] = arr1; } } catch(e) {}
try { for (var i = 0; i < e_arr5.length; i++) { t_arr4.lastIndexOf(true, 40); } } catch(e) {}
try { for (var i = 0; i < 38; i++) { obj3[i] = str1; } } catch(e) {}
try { for (var i = 0; i < e_arr5.length; i++) { arr1[i] = str2; } } catch(e) {}
try { for (var i = 0; i < 9; i++) { e_arr4.map(function(c_val, c_index, c_array) { c_array.shift() }); } } catch(e) {}
try { for (var i = 0; i < 64; i++) { t_arr2.reverse(55, false, {'a':-55}); } } catch(e) {}
try { for (var i = 0; i < e_arr4.length; i++) { arr5.toString(arr1, {}); } } catch(e) {}
try { for (var i = 0; i < arr1.length; i++) { arr4[i] = {}; } } catch(e) {}
try { obj4.copyWithin(5, 33); } catch(e) {}
try { obj4.slice(); } catch(e) {}
try { obj2.flat(); } catch(e) {}
try { for (var i = 0; i < 1; i++) { obj2[i] = 1; } } catch(e) {}
try { for (var i = 0; i < e_arr3.length; i++) { arr1.map(function(c_val, c_index, c_array) { c_array.concat() }); } } catch(e) {}
try { for (var i = 0; i < 6; i++) { obj4[i] = 63.4202; } } catch(e) {}
try { for (var i = 0; i < t_arr4.length; i++) { arr4.map(function(c_val, c_index, c_array) { c_array.flat([]) }); } } catch(e) {}
try { for (var i = 0; i < 57; i++) { e_arr3.sort(function(c_first, c_second) { c_first < c_second; }); } } catch(e) {}
try { obj4.splice(16); } catch(e) {}
try { for (var i = 0; i < t_arr5.length; i++) { arr4[i] = arr5; } } catch(e) {}
try { obj5.pop(); } catch(e) {}
try { dv3.push(-35); } catch(e) {}
try { obj2.push(); } catch(e) {}
try { dv4.push(); } catch(e) {}
try { dv1.setFloat32(4, 4, false); } catch(e) {}
try { dv2.setUint32(3, false, NaN); } catch(e) {}
try { obj4.concat(obj2); } catch(e) {}
try { for (var i = 0; i < 13; i++) { e_arr5.push(); } } catch(e) {}
try { for (var i = 0; i < 34; i++) { arr2.unshift(38.3237); } } catch(e) {}
try { for (var i = 0; i < 47; i++) { t_arr3.map(function(c_val, c_index, c_array) { c_array.fill(NaN, 0, 8) }); } } catch(e) {}
try { dv2.getUint16(0, true); } catch(e) {}
try { arr3.concat(); } catch(e) {}
try { for (var i = 0; i < 29; i++) { arr4.map(function(c_val, c_index, c_array) { c_array.slice(18, 6) }); } } catch(e) {}
try { obj2.unshift(); } catch(e) {}
try { for (var i = 0; i < t_arr3.length; i++) { t_arr2.reverse(NaN, obj1); } } catch(e) {}
try { for (var i = 0; i < 13; i++) { e_arr3.concat(obj5); } } catch(e) {}
try { obj4.map(function(c_val, c_index, c_array) { c_array.copyWithin(30, 43) }); } catch(e) {}
try { for (var i = 0; i < 25; i++) { arr1[i] = 35.6236; } } catch(e) {}
try { dv5.setFloat32(1, true, true); } catch(e) {}
try { obj2.splice(); } catch(e) {}
try { for (var i = 0; i < 63; i++) { obj2[i] = obj3; } } catch(e) {}
try { t_arr5.slice(36, 64); } catch(e) {}
try { for (var i = 0; i < 25; i++) { arr1.sort(function(c_first, c_second) { c_first >= c_second; }); } } catch(e) {}
try { dv2.getUint8(0, true); } catch(e) {}
try { arr4.reverse(-52, []); } catch(e) {}
try { for (var i = 0; i < 21; i++) { obj1[i] = arr4; } } catch(e) {}
try { obj4.indexOf({}, 45); } catch(e) {}
try { for (var i = 0; i < 47; i++) { t_arr2.toString(); } } catch(e) {}
try { for (var i = 0; i < t_arr2.length; i++) { arr3.sort(function(c_first, c_second) { c_first > c_second; }); } } catch(e) {}
try { obj1.sort(); } catch(e) {}
try { for (var i = 0; i < 36; i++) { obj1[i] = true; } } catch(e) {}
try { obj3.sort(function(c_first, c_second) { c_first < c_second; }); } catch(e) {}
try { obj1.push({'a':-42}, arr3); } catch(e) {}
try { for (var i = 0; i < 42; i++) { arr2.push(59.1899, 36.3561, 53); } } catch(e) {}
try { for (var i = 0; i < 35; i++) { arr4.sort(function(c_first, c_second) { c_first < c_second; }); } } catch(e) {}
try { for (var i = 0; i < arr2.length; i++) { t_arr1.fill(obj4); } } catch(e) {}
try { for (var i = 0; i < e_arr1.length; i++) { arr1[i] = str3; } } catch(e) {}
try { for (var i = 0; i < arr4.length; i++) { e_arr3.lastIndexOf({}); } } catch(e) {}
try { for (var i = 0; i < 36; i++) { e_arr3.splice(33, 45, [], [], obj5); } } catch(e) {}
try { t_arr2.map(function(c_val, c_index, c_array) { c_array.pop(arr3, str2, 4.7787, str4) }); } catch(e) {}
try { dv3.getInt8(2, true); } catch(e) {}
try { for (var i = 0; i < t_arr3.length; i++) { arr5.sort(function(c_first, c_second) { c_first >= c_second; }); } } catch(e) {}
try { obj4.map(function(c_val, c_index, c_array) { c_array.flat() }); } catch(e) {}
try { for (var i = 0; i < 11; i++) { dv1[i] = undefined; } } catch(e) {}
