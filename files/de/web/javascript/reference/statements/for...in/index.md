---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
l10n:
  sourceCommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jsSidebar("Statements")}}

Die **`for...in`** Anweisung iteriert über alle [enumerierbaren String-Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) eines Objekts (ignoriert dabei Eigenschaften, die durch [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) gekennzeichnet sind), einschließlich geerbter enumerierbarer Eigenschaften.

{{EmbedInteractiveExample("pages/js/statement-forin.html")}}

## Syntax

```js-nolint
for (variable in object)
  statement
```

### Parameter

- `variable`
  - : Erhält bei jeder Iteration einen String-Eigenschaftsnamen. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein, oder ein [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z.B. eine vorher deklarierte Variable, eine Objekteigenschaft oder ein [Destructuring-Zuweisungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)). Mit `var` deklarierte Variablen sind nicht lokal zur Schleife, d.h. sie befinden sich im gleichen Geltungsbereich, in dem auch die `for...in` Schleife ist.
- `object`
  - : Objekt, dessen nicht symbolische enumerierbare Eigenschaften durchlaufen werden.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Kann sich auf `variable` beziehen. Sie können einen [Blocksatz](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Die Schleife wird über alle enumerierbaren Eigenschaften des Objekts selbst und derjenigen iterieren, die das Objekt aus seiner Prototypenkette erbt (Eigenschaften näherer Prototypen haben Vorrang vor denen von Prototypen, die weiter vom Objekt in seiner Prototypenkette entfernt sind).

Wie andere Schleifenanweisungen können Sie [Steuerungsflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und geht zur nächsten Iteration der Schleife.

Eine `for...in` Schleife iteriert nur über enumerierbare, nicht-symbolische Eigenschaften. Objekte, die von eingebauten Konstruktoren wie `Array` und `Object` erstellt werden, haben geerbte nicht-enumerierbare Eigenschaften von `Array.prototype` und `Object.prototype`, wie die {{jsxref("Array")}} Methode {{jsxref("Array/indexOf", "indexOf()")}} oder die {{jsxref("Object")}} Methode {{jsxref("Object/toString", "toString()")}}, die in der `for...in` Schleife nicht besucht werden.

Die Traversierungsreihenfolge ist laut moderner ECMAScript-Spezifikation gut definiert und konsistent über Implementierungen hinweg. Innerhalb jeder Komponente der Prototypenkette werden zuerst alle nicht-negativen ganzzahligen Schlüssel (die Array-Indizes sein können) in aufsteigender Reihenfolge von Werten durchlaufen, dann andere String-Schlüssel in aufsteigender chronologischer Reihenfolge der Erstellung.

Der `variable` Teil von `for...in` akzeptiert alles, was vor dem `=` Operator stehen kann. Sie können {{jsxref("Statements/const", "const")}} verwenden, um die Variable zu deklarieren, solange sie nicht im Schleifenkörper neu zugewiesen wird (sie kann sich zwischen den Iterationen ändern, da es sich um zwei separate Variablen handelt). Andernfalls können Sie {{jsxref("Statements/let", "let")}} verwenden. Sie können [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwenden, um mehrere lokale Variablen zuzuweisen, oder einen Eigenschafts-Accessor wie `for (x.y in iterable)` verwenden, um den Wert einer Objekteigenschaft zuzuweisen.

Eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) erlaubt `var` Deklarationen der Schleifenvariablen mit einem Initialisierer. Dies wirft einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) im strikten Modus und wird im nicht-strikten Modus ignoriert.

### Gelöschte, hinzugefügte oder geänderte Eigenschaften

`for...in` besucht die Schlüsseln von Eigenschaften auf folgende Weise:

1. Es erhält zuerst alle eigenen String-Schlüssel des aktuellen Objekts, in einer Art sehr ähnlich zu {{jsxref("Object.getOwnPropertyNames()")}}.
2. Für jeden Schlüssel, wenn noch kein gleichnamiger String besucht wurde, wird der [Eigenschaftsdescriptor abgerufen](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor), und die Eigenschaft wird nur besucht, wenn sie enumerierbar ist. Dieser Eigenschaftsstring wird jedoch als besucht markiert, selbst wenn er nicht enumerierbar ist.
3. Dann wird das aktuelle Objekt durch seinen Prototyp ersetzt, und der Prozess wird wiederholt.

Das bedeutet:

- Jede Eigenschaft, die dem gerade besuchten Objekt während der Iteration hinzugefügt wird, wird nicht besucht, da alle eigenen Eigenschaften des aktuellen Objekts im Voraus gespeichert wurden.
- Wenn mehrere Objekte in der Prototypenkette eine Eigenschaft mit demselben Namen haben, wird nur die erste berücksichtigt, und sie wird nur besucht, wenn sie enumerierbar ist. Wenn sie nicht enumerierbar ist, werden keine anderen Eigenschaften mit demselben Namen weiter oben in der Prototypenkette besucht, selbst wenn sie enumerierbar sind.

Im Allgemeinen ist es am besten, keine Eigenschaften des Objekts während der Iteration hinzuzufügen, zu ändern oder zu entfernen, außer der gerade besuchten Eigenschaft. Die Spezifikation erlaubt es explizit der Implementierung, dem oben genannten Algorithmus nicht zu folgen, in einem der folgenden Fälle:

- Die Prototypenkette des Objekts wird während der Iteration geändert.
- Eine Eigenschaft wird während der Iteration vom Objekt oder seiner Prototypenkette gelöscht.
- Eine Eigenschaft wird während der Iteration zur Prototypenkette des Objekts hinzugefügt.
- Die Enumerierbarkeit einer Eigenschaft wird während der Iteration geändert.

In diesen Fällen können Implementierungen anders als erwartet verhalten, oder sogar unterschiedlich voneinander.

### Array-Iteration und for...in

Array-Indizes sind einfach enumerierbare Eigenschaften mit ganzzahligen Namen und ansonsten identisch mit allgemeinen Objekteigenschaften. Die `for...in` Schleife wird alle ganzzahligen Schlüssel vor anderen Schlüsseln durchlaufen und in streng aufsteigender Reihenfolge, was das Verhalten von `for...in` der normalen Array-Iteration nahe bringt. Jedoch gibt die `for...in` Schleife alle enumerierbaren Eigenschaften zurück, einschließlich solcher mit nicht-ganzzahligen Namen und geerbten Eigenschaften. Im Gegensatz zu `for...of` verwendet `for...in` die Aufzählung von Eigenschaften anstelle des Iterators des Arrays. In [lückenhaften Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) wird `for...of` die leeren Plätze besuchen, aber `for...in` wird dies nicht.

Es ist besser, eine {{jsxref("Statements/for", "for")}} Schleife mit einem numerischen Index, {{jsxref("Array.prototype.forEach()")}}, oder die {{jsxref("Statements/for...of", "for...of")}} Schleife zu verwenden, da sie den Index als Zahl statt als String zurückgeben und nicht-Index-Eigenschaften vermeiden.

### Nur eigene Eigenschaften iterieren

Wenn Sie nur die an das Objekt selbst angehängten Eigenschaften betrachten möchten und nicht deren Prototypen, können Sie eine der folgenden Techniken verwenden:

- {{jsxref("Object.keys()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}

`Object.keys` wird eine Liste der enumerierbaren eigenen String-Eigenschaften zurückgeben, während `Object.getOwnPropertyNames` auch nicht-enumerierbare enthalten wird.

Viele JavaScript-Stilrichtlinien und Linter empfehlen, `for...in` nicht zu verwenden, da es über die gesamte Prototypenkette iteriert, was selten das gewünschte Verhalten ist und möglicherweise mit der weiter verbreiteten `for...of` Schleife verwechselt werden kann. `for...in` ist am praktischsten für Debugging-Zwecke verwendbar, da es eine einfache Möglichkeit bietet, die Eigenschaften eines Objekts zu überprüfen (durch Ausgabe an die Konsole oder anderweitig). In Situationen, in denen Objekte als ad hoc Schlüssel-Wert-Paare verwendet werden, ermöglicht `for...in` Ihnen, zu überprüfen, ob einer dieser Schlüssel einen bestimmten Wert hält.

## Beispiele

### Verwendung von for...in

Die `for...in` Schleife unten iteriert über alle enumerierbaren, nicht-symbolischen Eigenschaften des Objekts und protokolliert eine Zeichenfolge der Eigenschaftsnamen und ihrer Werte.

```js
const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Logs:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

### Iteration über eigene Eigenschaften

Die folgende Funktion veranschaulicht die Verwendung von {{jsxref("Object.hasOwn()")}}: Die geerbten Eigenschaften werden nicht angezeigt.

```js
const triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

const obj = new ColoredTriangle();

for (const prop in obj) {
  if (Object.hasOwn(obj, prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Logs:
// "obj.color = red"
```

### Gleichzeitige Modifikation

> [!WARNING]
> Sie sollten solchen Code nicht selbst schreiben. Er ist hier nur enthalten, um das Verhalten von `for...in` in einigen Randfällen zu verdeutlichen.

Eigenschaften, die während der Iteration zum aktuellen Objekt hinzugefügt werden, werden niemals besucht:

```js
const obj = { a: 1, b: 2 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  obj.c = 3;
}

// Logs:
// obj.a = 1
// obj.b = 2
```

Schatteneigenschaften werden nur einmal besucht:

```js
const proto = { a: 1 };
const obj = { __proto__: proto, a: 2 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Logs:
// obj.a = 2

Object.defineProperty(obj, "a", { enumerable: false });

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
// Logs nothing, because the first "a" property visited is non-enumerable.
```

Betrachten Sie zusätzlich die folgenden Fälle, in denen das Verhalten nicht bestimmt ist und Implementierungen tendenziell vom spezifizierten Algorithmus abweichen:

Ändern des Prototyps während der Iteration:

```js
const obj = { a: 1, b: 2 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  Object.setPrototypeOf(obj, { c: 3 });
}
```

Löschen einer Eigenschaft während der Iteration:

```js
const obj = { a: 1, b: 2, c: 3 };

// Deleting a property before it is visited
for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  delete obj.c;
}

const obj2 = { a: 1, b: 2, c: 3 };

// Deleting a property after it is visited
for (const prop in obj2) {
  console.log(`obj2.${prop} = ${obj2[prop]}`);
  delete obj2.a;
}
```

Enumerierbare Eigenschaften, die während der Iteration zum Prototyp hinzugefügt werden:

```js
const proto = {};
const obj = { __proto__: proto, a: 1, b: 2 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  proto.c = 3;
}
```

Ändern der Enumerierbarkeit einer Eigenschaft während der Iteration:

```js
const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  Object.defineProperty(obj, "c", { enumerable: false });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/for", "for")}}
- [Enumerierbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Array.prototype.forEach()")}}
