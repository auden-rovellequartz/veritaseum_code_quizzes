import test from 'ava';

const proto = require("./rr")

var NAMESPACE = {}, NAMESPACE_02 = {};

proto.resource_referencer.call(NAMESPACE);    
proto.resource_referencer.call(NAMESPACE_02);   

var test_ref_01 = String({})
var test_ref_02 = String({})
var test_ref_03 = String([])
var test_ref_04 = String([])
var test_ref_05 = String({ '1': 'resource assoc. w/ ID: 1',
  '2': 'resource assoc. w/ ID: 2',
  '3': 'resource assoc. w/ ID: 3' })
var test_ref_06 = String({ '4': 'resource assoc. w/ ID: 4',
  '5': 'resource assoc. w/ ID: 5',
  '6': 'resource assoc. w/ ID: 6' })
var test_ref_07 = String({ persona_id: '2',
  persona_resource: 'resource assoc. w/ ID: 2' })
var test_ref_08 = String({ persona_id: '6',
  persona_resource: 'resource assoc. w/ ID: 6' })
var test_ref_09 = String({ '1': 'resource assoc. w/ ID: 1' })
var test_ref_10 = String({ '4': 'resource assoc. w/ ID: 4',
  '6': 'resource assoc. w/ ID: 6' })
var test_ref_11 = String([ '1' ])
var test_ref_12 = String([ '4', '6' ])
var test_ref_13 = String([ '1', '7', '8', '9' ])
var test_ref_14 = String([ '1', '7', '9' ])
var test_ref_15 = String([ '1', '7', '9' ])
var test_ref_13b = String({ '1': 'resource assoc. w/ ID: 1',
  '7': 'resource assoc. w/ ID: 7',
  '8': 'resource assoc. w/ ID: 8',
  '9': 'resource assoc. w/ ID: 9' })
var test_ref_14b = String({ '1': 'resource assoc. w/ ID: 1',
  '7': 'resource assoc. w/ ID: 7',
  '9': 'resource assoc. w/ ID: 9' })
var test_ref_15b = String({ '1': 'resource assoc. w/ ID: 1',
  '7': 'resource assoc. w/ ID: 7',
  '9': 'resource assoc. w/ ID: 9' })
var test_ref_13c = String([ '4', '6', '7', '8', '9' ])
var test_ref_14c = String([ '4', '6', '7', '8', '9' ])
var test_ref_15c = String([ '4', '6', '7', '8' ])
var test_ref_13d = String({ '4': 'resource assoc. w/ ID: 4',
  '6': 'resource assoc. w/ ID: 6',
  '7': 'resource assoc. w/ ID: 7',
  '8': 'resource assoc. w/ ID: 8',
  '9': 'resource assoc. w/ ID: 9' })
var test_ref_14d = String({ '4': 'resource assoc. w/ ID: 4',
  '6': 'resource assoc. w/ ID: 6',
  '7': 'resource assoc. w/ ID: 7',
  '8': 'resource assoc. w/ ID: 8',
  '9': 'resource assoc. w/ ID: 9' })
var test_ref_15d = String({ '4': 'resource assoc. w/ ID: 4',
  '6': 'resource assoc. w/ ID: 6',
  '7': 'resource assoc. w/ ID: 7',
  '8': 'resource assoc. w/ ID: 8' })
test(
	"test_01: initial state of the active resources object for NAMESPACE", 
	t => 
		{
			console.log(" ");
			console.log(" ");
			console.log("test_01: ");
			console.log(" ");
			console.log(NAMESPACE.view_all_active());
			t.true(String(NAMESPACE.view_all_active()) == test_ref_01);
		}
	);
test(
	"test_02: initial state of the active resources object for NAMESPACE_02", 
	t => 
		{
			console.log(" ");
			console.log(" ");
			console.log("test_02: ");
			console.log(" ");
			console.log(NAMESPACE_02.view_all_active());
			t.true(String(NAMESPACE_02.view_all_active()) == test_ref_02);
		}
	);
test(
	"test_03: initial state of the active resource IDs array for NAMESPACE", 
	t => 
		{
			console.log(" ");
			console.log(" ");
			console.log("test_03: ");
			console.log(" ");
			console.log(NAMESPACE.view_active_ids());
			t.true(String(NAMESPACE.view_active_ids()) == test_ref_03);
		}
	);
test(
	"test_04: initial state of the active resource IDs array for NAMESPACE_02", 
	t => 
		{
			console.log(" ");
			console.log(" ");
			console.log("test_04: ");
			console.log(" ");
			console.log(NAMESPACE_02.view_active_ids());
			t.true(String(NAMESPACE_02.view_active_ids()) == test_ref_04);
		}
	);
test(
	"test_05: create new personas (id set #1) in active resources object for NAMESPACE", 
	t => 
		{
			console.log(" ");
			console.log(" ");
			console.log("test_05: ");
			console.log(" ");
			NAMESPACE.get_resource("1");
			NAMESPACE.get_resource("2");
			NAMESPACE.get_resource("3");
			console.log(NAMESPACE.view_all_active());
			t.true(String(NAMESPACE.view_all_active()) == test_ref_05);
		}
	);
test(
	"test_06: create new personas (id set #2) in active resources object for NAMESPACE_02", 
	t => 
		{
			console.log(" ");
			console.log(" ");
			console.log("test_06: ");
			console.log(" ");
			NAMESPACE_02.get_resource("4");
			NAMESPACE_02.get_resource("5");
			NAMESPACE_02.get_resource("6");
			console.log(NAMESPACE_02.view_all_active());
			t.true(String(NAMESPACE_02.view_all_active()) == test_ref_06);
		}
	);
test(
	"test_07: get a specific persona already active from NAMESPACE", 
	t => 
		{
			console.log(" ");
			console.log(" ");
			console.log("test_07: ");
			console.log(" ");
			console.log(NAMESPACE.get_resource("2"));
			t.true(String(NAMESPACE.get_resource("2")) == test_ref_07);
		}
	);
test(
	"test_08: get a specific persona already active from NAMESPACE_02", 
	t => 
		{
			console.log(" ");
			console.log(" ");
			console.log("test_08: ");
			console.log(" ");
			console.log(NAMESPACE_02.get_resource("6"));
			t.true(String(NAMESPACE_02.get_resource("6")) == test_ref_08);
		}
	);
test(
	"test_09: close specific personas from NAMESPACE", 
	t => 
		{
			console.log(" ");
			console.log(" ");
			console.log("test_09: ");
			console.log(" ");
			NAMESPACE.close_resource("2");
			NAMESPACE.close_resource("3");
			console.log(NAMESPACE.view_all_active());
			t.true(String(NAMESPACE.view_all_active()) == test_ref_09);
		}
	);
test(
	"test_10: close specific personas from NAMESPACE_02", 
	t => 
		{
			console.log(" ");
			console.log(" ");
			console.log("test_10: ");
			console.log(" ");
			NAMESPACE_02.close_resource("5");
			console.log(NAMESPACE_02.view_all_active());
			t.true(String(NAMESPACE_02.view_all_active()) == test_ref_10);
		}
	);
test(
	"test_11: view ID list of active personas in NAMESPACE", 
	t => 
		{
			console.log(" ");
			console.log(" ");
			console.log("test_11: ");
			console.log(" ");
			console.log(NAMESPACE.view_active_ids());
			t.true(String(NAMESPACE.view_active_ids()) == test_ref_11);
		}
	);
test(
	"test_12: view ID list of active personas in NAMESPACE_02", 
	t => 
		{
			console.log(" ");
			console.log(" ");
			console.log("test_12: ");
			console.log(" ");
			console.log(NAMESPACE_02.view_active_ids());
			t.true(String(NAMESPACE_02.view_active_ids()) == test_ref_12);
		}
	);
test(
	"test_13: add common personas (set #3) in active resources object for both namespaces", 
	t => 
		{
			console.log(" ");
			console.log(" ");
			console.log("test_13: ");
			console.log(" ");
			NAMESPACE.get_resource("7");
			NAMESPACE.get_resource("8");
			NAMESPACE.get_resource("9");
			NAMESPACE_02.get_resource("7");
			NAMESPACE_02.get_resource("8");
			NAMESPACE_02.get_resource("9");
			console.log(NAMESPACE.view_active_ids());
			console.log(NAMESPACE.view_all_active());
			console.log(NAMESPACE_02.view_active_ids());
			console.log(NAMESPACE_02.view_all_active());
			t.true(String(NAMESPACE.view_active_ids()) == test_ref_13);
			t.true(String(NAMESPACE.view_all_active()) == test_ref_13b);
			t.true(String(NAMESPACE_02.view_active_ids()) == test_ref_13c);
			t.true(String(NAMESPACE_02.view_all_active()) == test_ref_13d);
		}
	);
test(
	"test_14: close specific (set #3) persona in NAMESPACE, show still active in NAMESPACE_02", 
	t => 
		{
			console.log(" ");
			console.log(" ");
			console.log("test_14: ");
			console.log(" ");
			NAMESPACE.close_resource("8");
			console.log(NAMESPACE.view_active_ids());
			console.log(NAMESPACE.view_all_active());
			console.log(NAMESPACE_02.view_active_ids());
			console.log(NAMESPACE_02.view_all_active());
			t.true(String(NAMESPACE.view_active_ids()) == test_ref_14);
			t.true(String(NAMESPACE.view_all_active()) == test_ref_14b);
			t.true(String(NAMESPACE_02.view_active_ids()) == test_ref_14c);
			t.true(String(NAMESPACE_02.view_all_active()) == test_ref_14d);
		}
	);
test(
	"test_15: close specific (set #3) persona in NAMESPACE_02, show still active in NAMESPACE", 
	t => 
		{
			console.log(" ");
			console.log(" ");
			console.log("test_15: ");
			console.log(" ");
			NAMESPACE_02.close_resource("9");
			console.log(NAMESPACE.view_active_ids());
			console.log(NAMESPACE.view_all_active());
			console.log(NAMESPACE_02.view_active_ids());
			console.log(NAMESPACE_02.view_all_active());
			t.true(String(NAMESPACE.view_active_ids()) == test_ref_15);
			t.true(String(NAMESPACE.view_all_active()) == test_ref_15b);
			t.true(String(NAMESPACE_02.view_active_ids()) == test_ref_15c);
			t.true(String(NAMESPACE_02.view_all_active()) == test_ref_15d);
		}
	);
