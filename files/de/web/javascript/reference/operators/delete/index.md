---
title: delete
slug: Web/JavaScript/Reference/Operators/delete
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("Operators")}}

Der **`delete`** Operator entfernt eine Eigenschaft aus einem Objekt. Wenn der Eigenschaftswert ein Objekt ist und es keine weiteren Referenzen auf dieses Objekt gibt, wird das von dieser Eigenschaft gehaltene Objekt schließlich automatisch freigegeben.

{{EmbedInteractiveExample("pages/js/expressions-deleteoperator.html")}}

## Syntax

```js-nolint
delete object.property
delete object[property]
```

> [!NOTE]
> Die Syntax erlaubt eine breitere Palette von Ausdrücken nach dem `delete` Operator, aber nur die obigen Formen führen zu sinnvollem Verhalten.

### Parameter

- `object`
  - : Der Name eines Objekts oder ein Ausdruck, der zu einem Objekt auswertet.
- `property`
  - : Die zu löschende Eigenschaft.

### Rückgabewert

`true` für alle Fälle, außer wenn die Eigenschaft eine [eigene](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) [nicht konfigurierbare](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#configurable_attribute) Eigenschaft ist, in welchem Fall `false` im Nicht-Striktmodus zurückgegeben wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird im [Striktmodus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgelöst, wenn die Eigenschaft eine eigene nicht konfigurierbare Eigenschaft ist.
- {{jsxref("ReferenceError")}}
  - : Wird ausgelöst, wenn `object` [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) ist.

## Beschreibung

Der `delete` Operator hat die gleiche [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) wie andere unäre Operatoren wie [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof). Daher akzeptiert er jeden Ausdruck, der durch Operatoren mit höherer Priorität gebildet wird. Die folgenden Formen führen jedoch zu frühen Syntaxfehlern im [Striktmodus](/de/docs/Web/JavaScript/Reference/Strict_mode):

```js-nolint example-bad
delete identifier;
delete object.#privateProperty;
```

Da [Klassen](/de/docs/Web/JavaScript/Reference/Classes) automatisch im Striktmodus sind und [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) nur in Klassenkörpern legal referenziert werden können, können private Eigenschaften niemals gelöscht werden. Während `delete identifier` [möglicherweise funktioniert](#löschen_von_globalen_eigenschaften), wenn `identifier` auf eine konfigurierbare Eigenschaft des globalen Objekts verweist, sollten Sie diese Form vermeiden und es stattdessen mit [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) voranstellen.

Während andere Ausdrücke akzeptiert werden, führen sie nicht zu sinnvollen Verhaltensweisen:

```js example-bad
delete console.log(1);
// Gibt 1 aus, gibt true zurück, aber nichts wird gelöscht
```

Der `delete` Operator entfernt eine gegebene Eigenschaft aus einem Objekt. Bei erfolgreicher Löschung gibt er `true` zurück, andernfalls wird `false` zurückgegeben. Anders als die allgemeine Annahme (vielleicht aufgrund anderer Programmiersprachen wie [delete in C++](https://learn.microsoft.com/en-us/cpp/cpp/delete-operator-cpp?view=msvc-170)), hat der `delete` Operator **nichts** mit dem direkten Freigeben von Speicher zu tun. Das Speichermanagement erfolgt indirekt durch das Brechen von Referenzen. Weitere Details finden Sie auf der Seite zum [Speichermanagement](/de/docs/Web/JavaScript/Memory_management).

Es ist wichtig, die folgenden Szenarien zu berücksichtigen:

- Wenn die Eigenschaft, die Sie zu löschen versuchen, nicht existiert, hat `delete` keinen Effekt und gibt `true` zurück.
- `delete` hat nur Auswirkungen auf eigene Eigenschaften. Wenn eine Eigenschaft mit demselben Namen in der Prototypenkette des Objekts existiert, wird das Objekt nach der Löschung die Eigenschaft aus der Prototypenkette verwenden.
- Nicht konfigurierbare Eigenschaften können nicht entfernt werden. Dies schließt Eigenschaften eingebauter Objekte wie {{jsxref("Math")}}, {{jsxref("Array")}}, {{jsxref("Object")}} ein sowie Eigenschaften, die mit Methoden wie {{jsxref("Object.defineProperty()")}} nicht konfigurierbar erstellt werden.
- Variablen zu löschen, einschließlich Funktionsparameter, funktioniert nie. `delete variable` wird im Striktmodus eine {{jsxref("SyntaxError")}} werfen und hat im Nicht-Striktmodus keinen Effekt.
  - Jede mit {{jsxref("Statements/var", "var")}} deklarierte Variable kann nicht aus dem globalen oder einem Funktionsbereich gelöscht werden, da sie zwar am [globalen Objekt](/de/docs/Glossary/Global_object) angehängt sein kann, aber nicht konfigurierbar ist.
  - Jede mit {{jsxref("Statements/let", "let")}} oder {{jsxref("Statements/const", "const")}} deklarierte Variable kann aus dem Bereich, in dem sie definiert wurde, nicht gelöscht werden, da sie nicht an ein Objekt angehängt ist.

## Beispiele

### Verwendung von delete

> [!NOTE]
> Das folgende Beispiel verwendet nur Merkmale des Nicht-Striktmodus, wie implizites Erstellen globaler Variablen und Löschen von Bezeichnern, die im Striktmodus verboten sind.

```js
// Erstellt die Eigenschaft empCount im globalen Bereich.
// Da wir var verwenden, wird dies als nicht konfigurierbar markiert.
var empCount = 43;

// Erstellt die Eigenschaft EmployeeDetails im globalen Bereich.
// Da es ohne "var" definiert wurde, ist es konfigurierbar markiert.
EmployeeDetails = {
  name: "xyz",
  age: 5,
  designation: "Developer",
};

// delete kann verwendet werden, um Eigenschaften aus Objekten zu entfernen.
delete EmployeeDetails.name; // gibt true zurück

// Selbst wenn die Eigenschaft nicht existiert, gibt delete "true" zurück.
delete EmployeeDetails.salary; // gibt true zurück

// EmployeeDetails ist eine Eigenschaft des globalen Bereichs.
delete EmployeeDetails; // gibt true zurück

// Im Gegenteil, empCount ist nicht konfigurierbar,
// da var verwendet wurde.
delete empCount; // gibt false zurück

// delete wirkt sich auch nicht auf nicht konfigurierbare statische Eigenschaften aus.
delete Math.PI; // gibt false zurück

function f() {
  var z = 44;

  // delete wirkt sich nicht auf lokale Variablennamen aus
  delete z; // gibt false zurück
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

// foo.bar ist mit der
// eigenen Eigenschaft verbunden.
console.log(foo.bar); // 10

// Löschen Sie die eigene Eigenschaft innerhalb des
// foo-Objekts.
delete foo.bar; // gibt true zurück

// foo.bar ist immer noch in der
// Prototypenkette verfügbar.
console.log(foo.bar); // 42

// Löschen Sie die Eigenschaft im Prototyp.
delete Foo.prototype.bar; // gibt true zurück

// Die "bar"-Eigenschaft kann nicht mehr
// von Foo geerbt werden, da sie gelöscht wurde.
console.log(foo.bar); // undefined
```

### Löschen von Array-Elementen

Wenn Sie ein Array-Element löschen, wird die Array-`length` nicht beeinflusst. Dies gilt selbst dann, wenn Sie das letzte Element des Arrays löschen.

Wenn der `delete` Operator ein Array-Element entfernt, ist dieses Element nicht mehr im Array. Im folgenden Beispiel wird `trees[3]` mit `delete` entfernt.

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

Wenn Sie stattdessen ein Array-Element entfernen möchten, indem Sie den Inhalt des Arrays ändern, verwenden Sie die Methode {{jsxref("Array/splice", "splice()")}}. Im folgenden Beispiel wird `trees[3]` vollständig aus dem Array mit {{jsxref("Array/splice", "splice()")}} entfernt:

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees.splice(3, 1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]
```

### Löschen von nicht konfigurierbaren Eigenschaften

Wenn eine Eigenschaft als nicht konfigurierbar markiert ist, hat `delete` keine Wirkung und gibt `false` zurück. Im Striktmodus führt dies zu einem `TypeError`.

```js
const Employee = {};
Object.defineProperty(Employee, "name", { configurable: false });

console.log(delete Employee.name); // gibt false zurück
```

{{jsxref("Statements/var", "var")}} erstellt nicht konfigurierbare Eigenschaften, die nicht mit dem `delete` Operator gelöscht werden können:

```js
// Da "nameOther" mit dem Schlüsselwort var hinzugefügt wurde,
// wird es als nicht konfigurierbar markiert
var nameOther = "XYZ";

// Wir können auf diese globale Eigenschaft zugreifen mit:
Object.getOwnPropertyDescriptor(globalThis, "nameOther");
// {
//   value: "XYZ",
//   writable: true,
//   enumerable: true,
//   configurable: false
// }

delete globalThis.nameOther; // gibt false zurück
```

Im Striktmodus würde dies eine Ausnahme auslösen.

### Löschen von globalen Eigenschaften

Wenn eine globale Eigenschaft konfigurierbar ist (zum Beispiel durch direkte Eigenschaftszuweisung), kann sie gelöscht werden, und nachfolgende Referenzen auf sie als globale Variablen führen zu einem {{jsxref("ReferenceError")}}.

```js
globalThis.globalVar = 1;
console.log(globalVar); // 1
// Im Nicht-Striktmodus können Sie auch `delete globalVar` verwenden
delete globalThis.globalVar;
console.log(globalVar); // ReferenceError: globalVar is not defined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [In depth analysis on delete](http://perfectionkills.com/understanding-delete/)
- {{jsxref("Reflect.deleteProperty()")}}
- {{jsxref("Map.prototype.delete()")}}
