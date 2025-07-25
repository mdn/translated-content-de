---
title: delete
slug: Web/JavaScript/Reference/Operators/delete
l10n:
  sourceCommit: 03d5115691a7a9fa3df3b6ebd20a0c7eed213252
---

Der **`delete`** Operator entfernt eine Eigenschaft aus einem Objekt. Wenn der Wert der Eigenschaft ein Objekt ist und es keine Verweise mehr auf dieses Objekt gibt, wird das Objekt, das von dieser Eigenschaft gehalten wird, schließlich automatisch freigegeben.

{{InteractiveExample("JavaScript Demo: delete operator")}}

```js interactive-example
const employee = {
  firstName: "Maria",
  lastName: "Sanchez",
};

console.log(employee.firstName);
// Expected output: "Maria"

delete employee.firstName;

console.log(employee.firstName);
// Expected output: undefined
```

## Syntax

```js-nolint
delete object.property
delete object[property]
```

> [!NOTE]
> Die Syntax erlaubt eine breitere Palette von Ausdrücken nach dem `delete` Operator, aber nur die obigen Formen führen zu sinnvollen Verhaltensweisen.

### Parameter

- `object`
  - : Der Name eines Objekts oder ein Ausdruck, der zu einem Objekt ausgewertet wird.
- `property`
  - : Die zu löschende Eigenschaft.

### Rückgabewert

`true` in allen Fällen, außer wenn die Eigenschaft eine [eigene](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) [nicht-konfigurierbare](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#configurable_attribute) Eigenschaft ist, in welchem Fall `false` im Nicht-Strikt-Modus zurückgegeben wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird im [Striktmodus](/de/docs/Web/JavaScript/Reference/Strict_mode) geworfen, wenn die Eigenschaft eine eigene nicht-konfigurierbare Eigenschaft ist.
- {{jsxref("ReferenceError")}}
  - : Wird geworfen, wenn `object` [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) ist.

## Beschreibung

Der `delete` Operator hat die gleiche [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) wie andere unäre Operatoren wie [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof). Daher akzeptiert er jeden Ausdruck, der von Operatoren höherer Priorität gebildet wird. Jedoch führen die folgenden Formen im [Striktmodus](/de/docs/Web/JavaScript/Reference/Strict_mode) zu frühen Syntaxfehlern:

```js-nolint example-bad
delete identifier;
delete object.#privateProperty;
```

Da [Klassen](/de/docs/Web/JavaScript/Reference/Classes) automatisch im Striktmodus sind und [private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) nur legal in Klassenkörpern referenziert werden können, bedeutet dies, dass private Elemente niemals gelöscht werden können. Während `delete identifier` [funktionieren kann](#löschen_globaler_eigenschaften), wenn `identifier` auf eine konfigurierbare Eigenschaft des globalen Objekts verweist, sollten Sie diese Form vermeiden und stattdessen mit [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) voranstellen.

Obwohl andere Ausdrücke akzeptiert werden, führen sie nicht zu sinnvollen Verhaltensweisen:

```js example-bad
delete console.log(1);
// Logs 1, returns true, but nothing deleted
```

Der `delete` Operator entfernt eine gegebene Eigenschaft aus einem Objekt. Bei erfolgreichem Löschen wird `true` zurückgegeben, andernfalls `false`. Anders als oft angenommen (vielleicht aufgrund anderer Programmiersprachen wie [delete in C++](https://learn.microsoft.com/en-us/cpp/cpp/delete-operator-cpp?view=msvc-170)), hat der `delete` Operator **nichts** mit der direkten Speicherfreigabe zu tun. Der Speicher wird indirekt durch das Aufbrechen von Verweisen verwaltet. Weitere Informationen finden Sie auf der Seite zum [Speichermanagement](/de/docs/Web/JavaScript/Guide/Memory_management).

Es ist wichtig, die folgenden Szenarien zu berücksichtigen:

- Wenn die Eigenschaft, die Sie zu löschen versuchen, nicht existiert, hat `delete` keine Auswirkung und gibt `true` zurück.
- `delete` hat nur Auswirkung auf eigene Eigenschaften. Wenn eine Eigenschaft mit demselben Namen in der Prototypenkette des Objekts existiert, wird das Objekt nach der Löschung die Eigenschaft aus der Prototypenkette verwenden.
- Nicht-konfigurierbare Eigenschaften können nicht entfernt werden. Dazu gehören Eigenschaften eingebauter Objekte wie {{jsxref("Math")}}, {{jsxref("Array")}}, {{jsxref("Object")}} und Eigenschaften, die als nicht konfigurierbar mit Methoden wie {{jsxref("Object.defineProperty()")}} erstellt wurden.
- Das Löschen von Variablen, einschließlich Funktionsparametern, funktioniert nie. `delete variable` wird im Striktmodus einen {{jsxref("SyntaxError")}} werfen und im Nicht-Strikt-Modus keine Wirkung haben.
  - Jede mit {{jsxref("Statements/var", "var")}} deklarierte Variable kann nicht aus dem globalen oder einem Funktionsbereich gelöscht werden, da sie, obwohl sie möglicherweise an das {{Glossary("Global_object", "globale Objekt")}} angehängt sind, nicht konfigurierbar sind.
  - Jede mit {{jsxref("Statements/let", "let")}} oder {{jsxref("Statements/const", "const")}} deklarierte Variable kann nicht aus dem Bereich gelöscht werden, in dem sie definiert wurde, da sie nicht an ein Objekt gebunden sind.

## Beispiele

### Nutzung von delete

> [!NOTE]
> Das folgende Beispiel verwendet nur Funktionen im Nicht-Strikt-Modus, wie das implizite Erstellen globaler Variablen und das Löschen von Bezeichnern, die im Striktmodus verboten sind.

```js
// Creates the property empCount on the global scope.
// Since we are using var, this is marked as non-configurable.
var empCount = 43;

// Creates the property EmployeeDetails on the global scope.
// Since it was defined without "var", it is marked configurable.
EmployeeDetails = {
  name: "xyz",
  age: 5,
  designation: "Developer",
};

// delete can be used to remove properties from objects.
delete EmployeeDetails.name; // returns true

// Even when the property does not exist, delete returns "true".
delete EmployeeDetails.salary; // returns true

// EmployeeDetails is a property of the global scope.
delete EmployeeDetails; // returns true

// On the contrary, empCount is not configurable
// since var was used.
delete empCount; // returns false

// delete also does not affect built-in static properties
// that are non-configurable.
delete Math.PI; // returns false

function f() {
  var z = 44;

  // delete doesn't affect local variable names
  delete z; // returns false
}
```

### delete und die Prototypenkette

Im folgenden Beispiel löschen wir eine eigene Eigenschaft eines Objekts, während eine Eigenschaft mit demselben Namen in der Prototypenkette verfügbar ist:

```js
function Foo() {
  this.bar = 10;
}

Foo.prototype.bar = 42;

const foo = new Foo();

// foo.bar is associated with the
// own property.
console.log(foo.bar); // 10

// Delete the own property within the
// foo object.
delete foo.bar; // returns true

// foo.bar is still available in the
// prototype chain.
console.log(foo.bar); // 42

// Delete the property on the prototype.
delete Foo.prototype.bar; // returns true

// The "bar" property can no longer be
// inherited from Foo since it has been
// deleted.
console.log(foo.bar); // undefined
```

### Löschen von Array-Elementen

Wenn Sie ein Array-Element löschen, wird die `length` des Arrays nicht beeinflusst. Dies gilt auch, wenn Sie das letzte Element des Arrays löschen.

Wenn der `delete` Operator ein Array-Element entfernt, befindet sich dieses Element nicht mehr im Array. Im folgenden Beispiel wird `trees[3]` mit `delete` entfernt.

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
console.log(3 in trees); // false
```

Dies erzeugt ein [dünn besetztes Array](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) mit einem leeren Slot. Wenn Sie möchten, dass ein Array-Element existiert, aber einen undefinierten Wert hat, verwenden Sie den Wert `undefined` anstelle des `delete` Operators. Im folgenden Beispiel wird `trees[3]` der Wert `undefined` zugewiesen, aber das Array-Element existiert weiterhin:

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
console.log(3 in trees); // true
```

Wenn Sie stattdessen ein Array-Element durch Ändern des Inhalts des Arrays entfernen möchten, verwenden Sie die Methode {{jsxref("Array/splice", "splice()")}}. Im folgenden Beispiel wird `trees[3]` vollständig aus dem Array mit {{jsxref("Array/splice", "splice()")}} entfernt:

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees.splice(3, 1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]
```

### Löschen nicht-konfigurierbarer Eigenschaften

Wenn eine Eigenschaft als nicht konfigurierbar markiert ist, hat `delete` keine Wirkung und gibt `false` zurück. Im Striktmodus wird dies einen `TypeError` auslösen.

```js
const Employee = {};
Object.defineProperty(Employee, "name", { configurable: false });

console.log(delete Employee.name); // returns false
```

{{jsxref("Statements/var", "var")}} erstellt nicht-konfigurierbare Eigenschaften, die nicht mit dem `delete` Operator gelöscht werden können:

```js
// Since "nameOther" is added using with the
// var keyword, it is marked as non-configurable
var nameOther = "XYZ";

// We can access this global property using:
Object.getOwnPropertyDescriptor(globalThis, "nameOther");
// {
//   value: "XYZ",
//   writable: true,
//   enumerable: true,
//   configurable: false
// }

delete globalThis.nameOther; // return false
```

Im Striktmodus würde dies eine Ausnahme auslösen.

### Löschen globaler Eigenschaften

Wenn eine globale Eigenschaft konfigurierbar ist (z. B. durch direkte Eigenschaftszuweisung), kann sie gelöscht werden, und nachfolgende Verweise darauf als globale Variablen werden einen {{jsxref("ReferenceError")}} erzeugen.

```js
globalThis.globalVar = 1;
console.log(globalVar); // 1
// In non-strict mode, you can use `delete globalVar` as well
delete globalThis.globalVar;
console.log(globalVar); // ReferenceError: globalVar is not defined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Reflect.deleteProperty()")}}
- {{jsxref("Map.prototype.delete()")}}
