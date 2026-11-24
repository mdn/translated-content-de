---
title: delete
slug: Web/JavaScript/Reference/Operators/delete
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator **`delete`** entfernt eine Eigenschaft aus einem Objekt. Wenn der Wert der Eigenschaft ein Objekt ist und keine weiteren Referenzen auf dieses Objekt vorhanden sind, wird das in der Eigenschaft gespeicherte Objekt schließlich automatisch freigegeben.

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
delete expression
```

### Parameter

- `expression`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 14 (Präfixoperatoren) oder höher, vorbehaltlich der [nachstehenden Einschränkungen](#beschreibung). Im Allgemeinen führen nur [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) zu sinnvollem Verhalten.

### Rückgabewert

In allen Fällen `true`, außer wenn die Eigenschaft eine [eigene](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn), [nicht konfigurierbare](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#configurable_attribute) Eigenschaft ist. In diesem Fall wird außerhalb des strikten Modus `false` zurückgegeben.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgelöst, wenn die Eigenschaft eine eigene, nicht konfigurierbare Eigenschaft ist.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn `object` [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) ist.

## Beschreibung

Der Operator `delete` hat dieselbe [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) wie andere unäre Operatoren, etwa [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof). Daher akzeptiert er jeden Ausdruck, der aus Operatoren mit höherer Priorität gebildet wird. Die folgenden Formen führen jedoch im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) bereits bei der Syntaxanalyse zu Fehlern:

```js-nolint example-bad
delete identifier;
delete object.#privateProperty;
```

Da [Klassen](/de/docs/Web/JavaScript/Reference/Classes) automatisch im strikten Modus ausgeführt werden und auf [private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) nur innerhalb von Klassenkörpern zugegriffen werden darf, können private Elemente niemals gelöscht werden. Obwohl `delete identifier` [funktionieren kann](#löschen_globaler_eigenschaften), wenn `identifier` auf eine konfigurierbare Eigenschaft des globalen Objekts verweist, sollten Sie diese Form vermeiden und stattdessen [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) voranstellen.

Andere Ausdrücke werden zwar akzeptiert, führen aber zu keinem sinnvollen Verhalten:

```js example-bad
delete console.log(1);
// Logs 1, returns true, but nothing deleted
```

Der Operator `delete` entfernt eine bestimmte Eigenschaft aus einem Objekt. Bei erfolgreichem Löschen gibt er `true` zurück, andernfalls `false`. Entgegen einer verbreiteten Annahme (möglicherweise aufgrund anderer Programmiersprachen wie bei [delete in C++](https://learn.microsoft.com/en-us/cpp/cpp/delete-operator-cpp?view=msvc-170)) hat der Operator `delete` **nichts** mit der direkten Freigabe von Speicher zu tun. Die Speicherverwaltung erfolgt indirekt durch das Aufheben von Referenzen. Weitere Einzelheiten finden Sie auf der Seite zur [Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management).

Beachten Sie die folgenden Fälle:

- Wenn die Eigenschaft, die Sie löschen möchten, nicht existiert, hat `delete` keine Auswirkung und gibt `true` zurück.
- `delete` wirkt sich nur auf eigene Eigenschaften aus. Wenn in der Prototypkette des Objekts eine Eigenschaft mit demselben Namen vorhanden ist, verwendet das Objekt nach dem Löschen die Eigenschaft aus der Prototypkette.
- Nicht konfigurierbare Eigenschaften können nicht entfernt werden. Dazu gehören Eigenschaften integrierter Objekte wie {{jsxref("Math")}}, {{jsxref("Array")}} und {{jsxref("Object")}} sowie Eigenschaften, die mit Methoden wie {{jsxref("Object.defineProperty()")}} als nicht konfigurierbar erstellt wurden.
- Das Löschen von Variablen, einschließlich Funktionsparametern, funktioniert nie. `delete variable` löst im strikten Modus einen {{jsxref("SyntaxError")}} aus und hat außerhalb des strikten Modus keine Auswirkung.
  - Variablen, die mit {{jsxref("Statements/var", "var")}} deklariert wurden, können weder aus dem globalen Gültigkeitsbereich noch aus dem Gültigkeitsbereich einer Funktion gelöscht werden. Sie können zwar dem {{Glossary("Global_object", "globalen Objekt")}} zugeordnet sein, sind aber nicht konfigurierbar.
  - Variablen, die mit {{jsxref("Statements/let", "let")}} oder {{jsxref("Statements/const", "const")}} deklariert wurden, können nicht aus dem Gültigkeitsbereich gelöscht werden, in dem sie definiert wurden, da sie keinem Objekt zugeordnet sind.

## Beispiele

### Verwendung von delete

> [!NOTE]
> Das folgende Beispiel verwendet Funktionen, die nur außerhalb des strikten Modus verfügbar sind, etwa das implizite Erstellen globaler Variablen und das Löschen von Bezeichnern. Beides ist im strikten Modus verboten.

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

### delete und die Prototypkette

Im folgenden Beispiel löschen wir eine eigene Eigenschaft eines Objekts, während in der Prototypkette eine Eigenschaft mit demselben Namen vorhanden ist:

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

Wenn Sie ein Array-Element löschen, bleibt die `length` des Arrays unverändert. Das gilt auch, wenn Sie das letzte Element des Arrays löschen.

Wenn der Operator `delete` ein Array-Element entfernt, ist dieses Element nicht mehr im Array vorhanden. Im folgenden Beispiel wird `trees[3]` mit `delete` entfernt.

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
console.log(3 in trees); // false
```

Dadurch entsteht ein [Array mit Lücken](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) mit einem leeren Platz. Wenn ein Array-Element weiterhin existieren, aber den Wert `undefined` haben soll, verwenden Sie den Wert `undefined` statt des Operators `delete`. Im folgenden Beispiel wird `trees[3]` der Wert `undefined` zugewiesen, das Array-Element bleibt jedoch vorhanden:

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
console.log(3 in trees); // true
```

Wenn Sie stattdessen ein Array-Element entfernen und dabei den Inhalt des Arrays ändern möchten, verwenden Sie die Methode {{jsxref("Array/splice", "splice()")}}. Im folgenden Beispiel wird `trees[3]` mit {{jsxref("Array/splice", "splice()")}} vollständig aus dem Array entfernt:

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees.splice(3, 1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]
```

### Löschen nicht konfigurierbarer Eigenschaften

Wenn eine Eigenschaft als nicht konfigurierbar gekennzeichnet ist, hat `delete` keine Auswirkung und gibt `false` zurück. Im strikten Modus wird dadurch ein `TypeError` ausgelöst.

```js
const Employee = {};
Object.defineProperty(Employee, "name", { configurable: false });

console.log(delete Employee.name); // returns false
```

{{jsxref("Statements/var", "var")}} erstellt nicht konfigurierbare Eigenschaften, die nicht mit dem Operator `delete` gelöscht werden können:

```js
// Since "nameOther" is added using the
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

Wenn eine globale Eigenschaft konfigurierbar ist (beispielsweise weil sie durch eine direkte Eigenschaftszuweisung erstellt wurde), kann sie gelöscht werden. Spätere Zugriffe auf sie als globale Variable lösen dann einen {{jsxref("ReferenceError")}} aus.

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
