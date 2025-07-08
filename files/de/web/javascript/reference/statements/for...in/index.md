---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`for...in`** Anweisung iteriert über alle [zählbaren String-Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) eines Objekts (ignoriert Eigenschaften, die durch [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) gekennzeichnet sind), einschließlich geerbter zählbarer Eigenschaften.

{{InteractiveExample("JavaScript Demo: for...in statement")}}

```js interactive-example
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```

## Syntax

```js-nolint
for (variable in object)
  statement
```

### Parameter

- `variable`
  - : Empfängt bei jeder Iteration einen String-Eigenschaftsnamen. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein, oder ein [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z. B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)). Variablen, die mit `var` deklariert sind, sind nicht lokal zur Schleife, d.h. sie befinden sich im selben Gültigkeitsbereich wie die `for...in` Schleife.
- `object`
  - : Objekt, dessen nicht-Symbol zählbare Eigenschaften iteriert werden.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Kann auf `variable` verweisen. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Die Schleife iteriert über alle zählbaren Eigenschaften des Objekts selbst und diejenigen, die das Objekt von seiner Prototypenkette erbt (Eigenschaften der näheren Prototypen haben Vorrang vor denen von Prototypen, die weiter vom Objekt in seiner Prototypenkette entfernt sind).

Wie bei anderen Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} beendet die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und geht zur nächsten Iteration der Schleife.

Eine `for...in` Schleife iteriert nur über zählbare, nicht-Symbol Eigenschaften. Objekte, die von eingebauten Konstruktoren wie `Array` und `Object` erstellt wurden, haben nicht-zählbare geerbte Eigenschaften von `Array.prototype` und `Object.prototype`, wie z. B. die {{jsxref("Array")}} Methode {{jsxref("Array/indexOf", "indexOf()")}} oder die {{jsxref("Object")}} Methode {{jsxref("Object/toString", "toString()")}}, die in der `for...in` Schleife nicht besucht werden.

Die Durchlaufreihenfolge ist laut moderner ECMAScript-Spezifikation gut definiert und konsistent über Implementierungen hinweg. Innerhalb jeder Komponente der Prototypenkette werden alle nicht-negativen integer-Schlüssel (die als Array-Indizes fungieren können) zuerst in aufsteigender Reihenfolge durchlaufen, dann andere String-Schlüssel in der aufsteigenden chronologischen Reihenfolge der Eigenschaftserstellung.

Der `variable` Teil von `for...in` akzeptiert alles, was vor dem `=` Operator stehen kann. Sie können {{jsxref("Statements/const", "const")}} verwenden, um die Variable zu deklarieren, solange sie innerhalb des Schleifenrumpfes nicht neu zugewiesen wird (sie kann zwischen den Iterationen wechseln, da es sich um zwei separate Variablen handelt). Andernfalls können Sie {{jsxref("Statements/let", "let")}} verwenden. Sie können [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwenden, um mehrere lokale Variablen zuzuweisen, oder einen Eigenschafts-Accessor wie `for (x.y in iterable)` verwenden, um den Wert einer Objekteigenschaft zuzuweisen.

Eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) erlaubt `var` Deklarationen der Schleifenvariable mit einem Initialisierer. Dies führt in strengem Modus zu einem [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) und wird im nicht-strengen Modus ignoriert.

### Gelöschte, hinzugefügte oder modifizierte Eigenschaften

`for...in` besucht Eigenschaftsschlüssel auf folgende Weise:

1. Es werden zunächst alle eigenen String-Schlüssel des aktuellen Objekts erfasst, in einer Weise, die {{jsxref("Object.getOwnPropertyNames()")}} sehr ähnlich ist.
2. Für jeden Schlüssel, wenn noch kein String mit demselben Wert jemals besucht wurde, wird der [Eigenschafts-Deskriptor abgerufen](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor) und die Eigenschaft wird nur besucht, wenn sie zählbar ist. Dieser Eigenschaftsstring wird jedoch als besucht markiert, selbst wenn er nicht zählbar ist.
3. Dann wird das aktuelle Objekt durch sein Prototyp ersetzt, und der Prozess wird wiederholt.

Das bedeutet:

- Jede Eigenschaft, die dem aktuell besuchten Objekt während der Iteration hinzugefügt wird, wird nicht besucht, da alle eigenen Eigenschaften des aktuellen Objekts bereits im Voraus gespeichert wurden.
- Wenn mehrere Objekte in der Prototypenkette eine Eigenschaft mit demselben Namen haben, wird nur die erste berücksichtigt, und sie wird nur besucht, wenn sie zählbar ist. Wenn sie nicht zählbar ist, werden keine anderen Eigenschaften mit demselben Namen weiter oben in der Prototypenkette besucht, selbst wenn sie zählbar sind.

Im Allgemeinen ist es am besten, während der Iteration keine Eigenschaften des Objekts hinzuzufügen, zu ändern oder zu entfernen, mit Ausnahme der Eigenschaft, die gerade besucht wird. Die Spezifikation erlaubt explizit, dass die Implementierung dem Algorithmus in einem der folgenden Fälle nicht folgen muss:

- Die Prototypenkette des Objekts wird während der Iteration geändert.
- Eine Eigenschaft wird vom Objekt oder seiner Prototypenkette während der Iteration gelöscht.
- Eine Eigenschaft wird während der Iteration der Prototypenkette des Objekts hinzugefügt.
- Die Zählbarkeit einer Eigenschaft wird während der Iteration geändert.

In diesen Fällen können sich Implementierungen unterschiedlich verhalten, als Sie vielleicht erwarten, oder sogar untereinander.

### Array-Iteration und for...in

Array-Indizes sind einfach zählbare Eigenschaften mit Ganzzahlnamen und ansonsten identisch mit allgemeinen Objekteigenschaften. Die `for...in` Schleife wird alle Ganzzahlenschlüssel vor anderen Schlüsseln in streng aufsteigender Ordnung durchlaufen, was das Verhalten von `for...in` der normalen Array-Iteration nahe bringt. Allerdings wird die `for...in` Schleife alle zählbaren Eigenschaften zurückgeben, einschließlich derjenigen mit nicht-Ganzzahl-Namen und der geerbten Eigenschaften. Im Gegensatz zu `for...of` verwendet `for...in` die Eigenschaftsenumeration statt des Iterators des Arrays. In [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) wird `for...of` die leeren Plätze besuchen, aber `for...in` nicht.

Es ist besser, eine {{jsxref("Statements/for", "for")}} Schleife mit einem numerischen Index, {{jsxref("Array.prototype.forEach()")}} oder die {{jsxref("Statements/for...of", "for...of")}} Schleife zu verwenden, da sie den Index als Zahl und nicht als String zurückgeben und auch Nicht-Index-Eigenschaften vermeiden.

### Nur über eigene Eigenschaften iterieren

Wenn Sie nur die Eigenschaften berücksichtigen möchten, die dem Objekt selbst angehören, und nicht seine Prototypen, können Sie eine der folgenden Techniken verwenden:

- {{jsxref("Object.keys()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}

`Object.keys` gibt eine Liste der eigenen zählbaren String-Eigenschaften zurück, während `Object.getOwnPropertyNames` auch nicht-zählbare enthält.

Viele JavaScript-Stilrichtlinien und Linter empfehlen, `for...in` nicht zu verwenden, da es über die gesamte Prototypenkette iteriert, was selten erwünscht ist, und mit der bekannteren `for...of` Schleife verwechselt werden kann. `for...in` wird am praktischsten für Debugging-Zwecke verwendet, da es eine einfache Möglichkeit bietet, die Eigenschaften eines Objekts zu überprüfen (indem es in die Konsole ausgegeben oder andersweitig verarbeitet wird). In Situationen, in denen Objekte als ad-hoc Schlüssel-Wert-Paare verwendet werden, erlaubt `for...in` Ihnen zu überprüfen, ob eine dieser Schlüssel einen bestimmten Wert hält.

## Beispiele

### Verwendung von for...in

Die folgende `for...in` Schleife iteriert über alle zählbaren, nicht-Symbol Eigenschaften des Objekts und protokolliert einen String der Eigenschaftsnamen und ihrer Werte.

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

Die folgende Funktion veranschaulicht die Verwendung von {{jsxref("Object.hasOwn()")}}: die geerbten Eigenschaften werden nicht angezeigt.

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
> Sie sollten keinen Code wie diesen selbst schreiben. Er ist hier nur enthalten, um das Verhalten von `for...in` in einigen Sonderfällen zu veranschaulichen.

Eigenschaften, die dem aktuellen Objekt während der Iteration hinzugefügt werden, werden nie besucht:

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

Zudem sollten Sie die folgenden Fälle berücksichtigen, in denen das Verhalten nicht spezifiziert ist und Implementierungen dazu neigen, vom angegebenen Algorithmus abzuweichen:

Änderung des Prototyps während der Iteration:

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

Zählbare Eigenschaften, die während der Iteration der Prototypkette hinzugefügt werden:

```js
const proto = {};
const obj = { __proto__: proto, a: 1, b: 2 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  proto.c = 3;
}
```

Ändern der Zählbarkeit einer Eigenschaft während der Iteration:

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
- [Enumerability and ownership of properties](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Array.prototype.forEach()")}}
