---
title: delete
slug: Web/JavaScript/Reference/Operators/delete
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Operators")}}

Der **`delete`** Operator entfernt eine Eigenschaft aus einem Objekt. Wenn der Wert der Eigenschaft ein Objekt ist und es keine weiteren Referenzen zu dem Objekt gibt, wird das Objekt, das von dieser Eigenschaft gehalten wird, schließlich automatisch freigegeben.

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
> Die Syntax erlaubt eine größere Bandbreite von Ausdrücken nach dem `delete` Operator, aber nur die obigen Formen führen zu sinnvollen Verhaltensweisen.

### Parameter

- `object`
  - : Der Name eines Objekts oder ein Ausdruck, der zu einem Objekt ausgewertet wird.
- `property`
  - : Die zu löschende Eigenschaft.

### Rückgabewert

`true` in allen Fällen außer wenn die Eigenschaft eine [own](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) [nicht konfigurierbare](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#configurable_attribute) Eigenschaft ist, in diesem Fall wird `false` im nicht-strikten Modus zurückgegeben.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgelöst, wenn die Eigenschaft eine eigene nicht konfigurierbare Eigenschaft ist.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn `object` [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) ist.

## Beschreibung

Der `delete` Operator hat die gleiche [Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) wie andere unäre Operatoren wie [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof). Daher akzeptiert er jeden Ausdruck, der von höher priorisierten Operatoren gebildet wird. Dennoch führen die folgenden Formen zu frühen Syntaxfehlern im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode):

```js-nolint example-bad
delete identifier;
delete object.#privateProperty;
```

Da [Klassen](/de/docs/Web/JavaScript/Reference/Classes) automatisch im strikten Modus sind und [private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) nur in Klassenkörpern legal referenziert werden können, können private Elemente niemals gelöscht werden. Während `delete identifier` [funktionieren könnte](#löschen_globaler_eigenschaften), wenn `identifier` auf eine konfigurierbare Eigenschaft des globalen Objekts verweist, sollten Sie diese Form vermeiden und stattdessen [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) voranstellen.

Obwohl andere Ausdrücke akzeptiert werden, führen sie nicht zu sinnvollen Verhaltensweisen:

```js example-bad
delete console.log(1);
// Logs 1, returns true, but nothing deleted
```

Der `delete` Operator entfernt eine gegebene Eigenschaft von einem Objekt. Bei erfolgreicher Löschung wird `true` zurückgegeben, andernfalls `false`. Anders als oft angenommen (möglicherweise aufgrund anderer Programmiersprachen wie [delete in C++](https://learn.microsoft.com/en-us/cpp/cpp/delete-operator-cpp?view=msvc-170)) hat der `delete` Operator **nichts** mit der direkten Speicherfreigabe zu tun. Speicherverwaltung erfolgt indirekt durch das Brechen von Referenzen. Siehe die Seite zur [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management) für mehr Details.

Es ist wichtig, die folgenden Szenarien zu beachten:

- Wenn die Eigenschaft, die Sie zu löschen versuchen, nicht existiert, hat `delete` keinen Effekt und gibt `true` zurück.
- `delete` hat nur einen Effekt auf eigene Eigenschaften. Wenn eine Eigenschaft mit demselben Namen in der Prototypenkette des Objekts existiert, wird nach dem Löschen die Eigenschaft aus der Prototypenkette verwendet.
- Nicht konfigurierbare Eigenschaften können nicht entfernt werden. Dazu gehören Eigenschaften von eingebauten Objekten wie {{jsxref("Math")}}, {{jsxref("Array")}}, {{jsxref("Object")}} und Eigenschaften, die mit Methoden wie {{jsxref("Object.defineProperty()")}} als nicht konfigurierbar erstellt wurden.
- Variablen, einschließlich Funktionsparameter, können niemals gelöscht werden. `delete variable` wird im strikten Modus einen {{jsxref("SyntaxError")}} auslösen und hat im nicht-strikten Modus keinen Effekt.
  - Jede Variable, die mit {{jsxref("Statements/var", "var")}} deklariert wird, kann nicht aus dem globalen Gültigkeitsbereich oder aus einem Funktionsbereich gelöscht werden, da sie zwar möglicherweise an das {{Glossary("Global_object", "globale Objekt")}} gebunden sind, aber nicht konfigurierbar sind.
  - Jede Variable, die mit {{jsxref("Statements/let", "let")}} oder {{jsxref("Statements/const", "const")}} deklariert wird, kann nicht aus dem Bereich gelöscht werden, in dem sie definiert wurden, da sie nicht an ein Objekt gebunden sind.

## Beispiele

### Verwendung von delete

> [!NOTE]
> Das folgende Beispiel verwendet ausschließlich nicht-strikte Modus-Features, wie das implizite Erstellen globaler Variablen und das Löschen von Bezeichnern, die im strikten Modus verboten sind.

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

### Delete und die Prototypenkette

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

Wenn Sie ein Array-Element löschen, wird die Länge des Arrays nicht beeinflusst. Das gilt sogar, wenn Sie das letzte Element des Arrays löschen.

Wenn der `delete` Operator ein Array-Element entfernt, befindet sich dieses Element nicht mehr im Array. Im folgenden Beispiel wird `trees[3]` mit `delete` entfernt.

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

Wenn Sie stattdessen ein Array-Element entfernen möchten, indem Sie den Inhalt des Arrays ändern, verwenden Sie die Methode {{jsxref("Array/splice", "splice()")}}. Im folgenden Beispiel wird `trees[3]` vollständig aus dem Array entfernt, indem die {{jsxref("Array/splice", "splice()")}} Methode verwendet wird:

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees.splice(3, 1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]
```

### Löschen von nicht konfigurierbaren Eigenschaften

Wenn eine Eigenschaft als nicht konfigurierbar markiert ist, hat `delete` keinen Effekt und gibt `false` zurück. Im strikten Modus wird dies einen `TypeError` auslösen.

```js
const Employee = {};
Object.defineProperty(Employee, "name", { configurable: false });

console.log(delete Employee.name); // returns false
```

{{jsxref("Statements/var", "var")}} erstellt nicht konfigurierbare Eigenschaften, die nicht mit dem `delete` Operator gelöscht werden können:

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

Im strikten Modus würde dies eine Ausnahme auslösen.

### Löschen globaler Eigenschaften

Wenn eine globale Eigenschaft konfigurierbar ist (zum Beispiel durch direkte Eigenschaften-Zuweisung), kann sie gelöscht werden und nachfolgende Referenzen auf sie als globale Variablen werden einen {{jsxref("ReferenceError")}} erzeugen.

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
