---
title: delete
slug: Web/JavaScript/Reference/Operators/delete
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{jsSidebar("Operators")}}

Der **`delete`** Operator entfernt eine Eigenschaft aus einem Objekt. Wenn der Wert der Eigenschaft ein Objekt ist und es keine weiteren Referenzen auf das Objekt gibt, wird das von dieser Eigenschaft gehaltene Objekt schließlich automatisch freigegeben.

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
> Die Syntax erlaubt einen breiteren Bereich von Ausdrücken nach dem `delete` Operator, aber nur die obigen Formen führen zu sinnvollen Verhaltensweisen.

### Parameter

- `object`
  - : Der Name eines Objekts oder ein Ausdruck, der zu einem Objekt ausgewertet wird.
- `property`
  - : Die zu löschende Eigenschaft.

### Rückgabewert

`true` in allen Fällen, außer wenn die Eigenschaft eine [eigene](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) [nicht konfigurierbare](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#configurable_attribute) Eigenschaft ist, in welchem Fall `false` im Nicht-Strikt-Modus zurückgegeben wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird im [Strikt-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgelöst, wenn die Eigenschaft eine eigene nicht konfigurierbare Eigenschaft ist.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn `object` [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) ist.

## Beschreibung

Der `delete` Operator hat die gleiche [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) wie andere unäre Operatoren wie [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof). Daher akzeptiert er jeden Ausdruck, der von höher priorisierten Operatoren gebildet wird. Folgende Formen führen jedoch zu frühen Syntax-Fehlern im [Strikt-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode):

```js-nolint example-bad
delete identifier;
delete object.#privateProperty;
```

Da [Klassen](/de/docs/Web/JavaScript/Reference/Classes) automatisch im Strikt-Modus sind und [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) nur innerhalb von Klassenkörpern legal referenziert werden können, bedeutet dies, dass private Eigenschaften nie gelöscht werden können. Während `delete identifier` [funktionieren könnte](#löschen_globaler_eigenschaften), wenn `identifier` eine konfigurierbare Eigenschaft des globalen Objekts referenziert, sollten Sie diese Form vermeiden und sie stattdessen mit [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) voranstellen.

Während andere Ausdrücke akzeptiert werden, führen sie nicht zu sinnvollen Verhaltensweisen:

```js example-bad
delete console.log(1);
// Logs 1, returns true, but nothing deleted
```

Der `delete` Operator entfernt eine gegebene Eigenschaft aus einem Objekt. Bei erfolgreicher Löschung wird `true` zurückgegeben, andernfalls `false`. Anders als oft angenommen (vielleicht aufgrund anderer Programmiersprachen wie [delete in C++](https://learn.microsoft.com/en-us/cpp/cpp/delete-operator-cpp?view=msvc-170)), hat der `delete` Operator **nichts** mit der direkten Freigabe von Speicher zu tun. Das Speicher-Management erfolgt indirekt über das Brechen von Referenzen. Weitere Details finden Sie auf der Seite [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management).

Es ist wichtig, folgende Szenarien zu berücksichtigen:

- Wenn die Eigenschaft, die Sie löschen möchten, nicht existiert, hat `delete` keine Auswirkung und gibt `true` zurück.
- `delete` hat nur eine Auswirkung auf eigene Eigenschaften. Wenn eine Eigenschaft mit demselben Namen in der Prototypenkette des Objekts existiert, wird das Objekt nach der Löschung die Eigenschaft aus der Prototypenkette verwenden.
- Nicht konfigurierbare Eigenschaften können nicht entfernt werden. Dazu gehören Eigenschaften von eingebauten Objekten wie {{jsxref("Math")}}, {{jsxref("Array")}}, {{jsxref("Object")}} und Eigenschaften, die als nicht konfigurierbar mit Methoden wie {{jsxref("Object.defineProperty()")}} erstellt wurden.
- Das Löschen von Variablen, einschließlich Funktionsparametern, funktioniert niemals. `delete variable` wird im Strikt-Modus einen {{jsxref("SyntaxError")}} auslösen und im Nicht-Strikt-Modus keine Auswirkung haben.
  - Jede mit {{jsxref("Statements/var", "var")}} deklarierte Variable kann weder aus dem globalen Scope noch aus dem Funktionsscope gelöscht werden, da sie, obwohl sie eventuell dem {{Glossary("Global_object", "globalen Objekt")}} angehängt sind, nicht konfigurierbar sind.
  - Jede mit {{jsxref("Statements/let", "let")}} oder {{jsxref("Statements/const", "const")}} deklarierte Variable kann nicht aus dem Scope gelöscht werden, in dem sie definiert wurde, da sie nicht an ein Objekt angehängt sind.

## Beispiele

### Verwenden von delete

> [!NOTE]
> Das folgende Beispiel nutzt nur im Nicht-Strikt-Modus verfügbare Funktionen, wie das implizite Erstellen globaler Variablen und das Löschen von Bezeichnern, die im Strikt-Modus verboten sind.

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

Wenn der `delete` Operator ein Array-Element entfernt, ist dieses Element nicht mehr im Array. Im folgenden Beispiel wird `trees[3]` mit `delete` entfernt.

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
console.log(3 in trees); // false
```

Dies erzeugt ein [lückenhaftes Array](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) mit einem leeren Slot. Wenn Sie möchten, dass ein Array-Element existiert, aber einen undefinierten Wert hat, verwenden Sie den Wert `undefined` anstelle des `delete` Operators. Im folgenden Beispiel wird `trees[3]` der Wert `undefined` zugewiesen, aber das Array-Element existiert weiterhin:

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
console.log(3 in trees); // true
```

Wenn Sie stattdessen ein Array-Element entfernen möchten, indem Sie den Inhalt des Arrays ändern, verwenden Sie die Methode {{jsxref("Array/splice", "splice()")}}. Im folgenden Beispiel wird `trees[3]` vollständig aus dem Array entfernt mit {{jsxref("Array/splice", "splice()")}}:

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees.splice(3, 1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]
```

### Löschen von nicht konfigurierbaren Eigenschaften

Wenn eine Eigenschaft als nicht konfigurierbar markiert ist, hat `delete` keine Wirkung und wird `false` zurückgeben. Im Strikt-Modus wird dies einen `TypeError` auslösen.

```js
const Employee = {};
Object.defineProperty(Employee, "name", { configurable: false });

console.log(delete Employee.name); // returns false
```

{{jsxref("Statements/var", "var")}} erstellt nicht konfigurierbare Eigenschaften, die mit dem `delete` Operator nicht gelöscht werden können:

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

Im Strikt-Modus würde dies eine Ausnahme auslösen.

### Löschen globaler Eigenschaften

Wenn eine globale Eigenschaft konfigurierbar ist (zum Beispiel durch direkte Zuweisung der Eigenschaft), kann sie gelöscht werden, und nachfolgende Verweise auf sie als globale Variablen werden einen {{jsxref("ReferenceError")}} erzeugen.

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

- [Detaillierte Analyse zu delete](http://perfectionkills.com/understanding-delete/)
- {{jsxref("Reflect.deleteProperty()")}}
- {{jsxref("Map.prototype.delete()")}}
