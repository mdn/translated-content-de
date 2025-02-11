---
title: delete
slug: Web/JavaScript/Reference/Operators/delete
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **`delete`** Operator entfernt eine Eigenschaft aus einem Objekt. Wenn der Wert der Eigenschaft ein Objekt ist und es keine weiteren Referenzen zu diesem Objekt gibt, wird das Objekt, das von dieser Eigenschaft gehalten wird, schließlich automatisch freigegeben.

{{InteractiveExample("JavaScript Demo: Expressions - delete operator")}}

```js interactive-example
const Employee = {
  firstname: "Maria",
  lastname: "Sanchez",
};

console.log(Employee.firstname);
// Expected output: "Maria"

delete Employee.firstname;

console.log(Employee.firstname);
// Expected output: undefined
```

## Syntax

```js-nolint
delete object.property
delete object[property]
```

> [!NOTE]
> Die Syntax erlaubt eine größere Bandbreite an Ausdrücken nach dem `delete` Operator, jedoch führen nur die oben aufgeführten Formen zu sinnvollen Verhaltensweisen.

### Parameter

- `object`
  - : Der Name eines Objekts oder ein Ausdruck, der zu einem Objekt ausgewertet wird.
- `property`
  - : Die zu löschende Eigenschaft.

### Rückgabewert

`true` in allen Fällen, außer wenn die Eigenschaft eine [Eigen-](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) [nicht-konfigurierbare](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#configurable_attribute) Eigenschaft ist, in diesem Fall wird im nicht-strikten Modus `false` zurückgegeben.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgelöst, wenn die Eigenschaft eine nicht-konfigurierbare Eigenschaft eines Objekts ist.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn `object` [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) ist.

## Beschreibung

Der `delete` Operator hat die gleiche [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) wie andere unäre Operatoren wie [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof). Daher akzeptiert er jeden Ausdruck, der von Operatoren mit einer höheren Priorität gebildet wird. Die folgenden Formen führen jedoch im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) zu frühzeitigen Syntaxfehlern:

```js-nolint example-bad
delete identifier;
delete object.#privateProperty;
```

Da [Klassen](/de/docs/Web/JavaScript/Reference/Classes) automatisch im strikten Modus sind und [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) nur legal innerhalb von Klassenkörpern referenziert werden können, bedeutet dies, dass private Eigenschaften niemals gelöscht werden können. Während `delete identifier` [funktionieren kann](#löschen_globaler_eigenschaften), wenn `identifier` sich auf eine konfigurierbare Eigenschaft des globalen Objekts bezieht, sollten Sie diese Form vermeiden und stattdessen mit [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) präfixen.

Auch wenn andere Ausdrücke akzeptiert werden, führen sie nicht zu sinnvollen Ergebnissen:

```js example-bad
delete console.log(1);
// Logs 1, returns true, but nothing deleted
```

Der `delete` Operator entfernt eine angegebene Eigenschaft von einem Objekt. Bei erfolgreicher Löschung wird `true` zurückgegeben, andernfalls `false`. Anders als häufig angenommen (vielleicht aufgrund anderer Programmiersprachen wie [delete in C++](https://learn.microsoft.com/en-us/cpp/cpp/delete-operator-cpp?view=msvc-170)) hat der `delete` Operator **nichts** mit dem direkten Freigeben von Speicher zu tun. Speicherverwaltung erfolgt indirekt durch das Auflösen von Referenzen. Weitere Details finden Sie auf der Seite zur [Speicherverwaltung](/de/docs/Web/JavaScript/Memory_management).

Folgende Szenarien sind zu beachten:

- Wenn die Eigenschaft, die Sie zu löschen versuchen, nicht existiert, hat `delete` keine Auswirkung und gibt `true` zurück.
- `delete` hat nur Auswirkungen auf eigene Eigenschaften. Wenn eine Eigenschaft mit demselben Namen in der Prototypenkette des Objekts vorhanden ist, wird nach der Löschung die Eigenschaft aus der Prototypenkette verwendet.
- Nicht-konfigurierbare Eigenschaften können nicht entfernt werden. Dazu gehören Eigenschaften von eingebauten Objekten wie {{jsxref("Math")}}, {{jsxref("Array")}}, {{jsxref("Object")}} und Eigenschaften, die mit Methoden wie {{jsxref("Object.defineProperty()")}} als nicht-konfigurierbar erstellt wurden.
- Das Löschen von Variablen, einschließlich Funktionsparametern, funktioniert nie. `delete variable` führt im strikten Modus zu einem {{jsxref("SyntaxError")}} und hat im nicht-strikten Modus keine Auswirkung.
  - Jede Variable, die mit {{jsxref("Statements/var", "var")}} deklariert wird, kann weder aus dem globalen noch dem Funktionsumfang gelöscht werden, da sie zwar an das {{Glossary("Global_object", "globale Objekt")}} angehängt sein kann, aber nicht konfigurierbar ist.
  - Jede Variable, die mit {{jsxref("Statements/let", "let")}} oder {{jsxref("Statements/const", "const")}} deklariert wird, kann nicht aus dem Bereich gelöscht werden, in dem sie definiert wurde, da sie nicht an ein Objekt angehängt sind.

## Beispiele

### Verwendung von delete

> [!NOTE]
> Das folgende Beispiel verwendet ausschließlich Features des nicht-strikten Modus, wie das implizite Erstellen globaler Variablen und das Löschen von Bezeichnern, die im strikten Modus verboten sind.

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

Im folgenden Beispiel löschen wir eine Eigenschaft eines Objekts, während eine Eigenschaft mit demselben Namen in der Prototypenkette verfügbar ist:

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

Beim Löschen eines Array-Elements wird die Länge des Arrays nicht beeinflusst. Dies gilt auch, wenn Sie das letzte Element des Arrays löschen.

Wenn der `delete` Operator ein Array-Element entfernt, ist dieses Element nicht mehr im Array vorhanden. Im folgenden Beispiel wird `trees[3]` mit `delete` entfernt:

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
console.log(3 in trees); // false
```

Dies erzeugt ein [dünn besetztes Array](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) mit einem leeren Slot. Wenn Sie möchten, dass ein Array-Element existiert, aber einen undefinierten Wert hat, verwenden Sie stattdessen den Wert `undefined` anstelle des `delete` Operators. Im folgenden Beispiel erhält `trees[3]` den Wert `undefined`, aber das Array-Element existiert weiterhin:

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
console.log(3 in trees); // true
```

Wenn Sie hingegen ein Array-Element entfernen möchten, indem Sie den Inhalt des Arrays ändern, verwenden Sie die Methode {{jsxref("Array/splice", "splice()")}}. Im folgenden Beispiel wird `trees[3]` vollständig aus dem Array entfernt, indem {{jsxref("Array/splice", "splice()")}} eingesetzt wird:

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees.splice(3, 1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]
```

### Löschen von nicht-konfigurierbaren Eigenschaften

Wenn eine Eigenschaft als nicht-konfigurierbar markiert ist, hat `delete` keine Wirkung und gibt `false` zurück. Im strikten Modus führt dies zu einem `TypeError`.

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

Im strikten Modus würde dies eine Ausnahme auslösen.

### Löschen globaler Eigenschaften

Wenn eine globale Eigenschaft konfigurierbar ist (zum Beispiel durch direkte Eigenschaftszuweisung), kann sie gelöscht werden, und nachfolgende Referenzen darauf als globale Variablen erzeugen einen {{jsxref("ReferenceError")}}.

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

- [Eingehende Analyse des delete Operators](http://perfectionkills.com/understanding-delete/)
- {{jsxref("Reflect.deleteProperty()")}}
- {{jsxref("Map.prototype.delete()")}}
