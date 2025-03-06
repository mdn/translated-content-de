---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Statements")}}

Die **`for...in`** Anweisung iteriert über alle [zählbaren Zeichenketten-Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) eines Objekts (unter Ausschluss von Eigenschaften, die durch [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) gekennzeichnet sind), einschließlich geerbter zählbarer Eigenschaften.

{{InteractiveExample("JavaScript Demo: Statement - For...In")}}

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
  - : Empfängt einen Zeichenketten-Eigenschaftsnamen in jeder Iteration. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein oder ein [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z.B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungszuweisungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)). Variablen, die mit `var` deklariert sind, sind nicht lokal zur Schleife, d.h. sie befinden sich im gleichen Gültigkeitsbereich, in dem sich die `for...in` Schleife befindet.
- `object`
  - : Objekt, dessen nicht-symbolische zählbare Eigenschaften iteriert werden.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Kann `variable` referenzieren. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Die Schleife wird über alle zählbaren Eigenschaften des Objekts selbst und über die, die das Objekt von seiner Prototypkette erbt, iterieren (Eigenschaften näherer Prototypen haben Vorrang vor denen von Prototypen, die weiter vom Objekt in seiner Prototypkette entfernt sind).

Wie bei anderen Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und geht zur nächsten Iteration der Schleife.

Eine `for...in` Schleife iteriert nur über zählbare, nicht-symbolische Eigenschaften. Von eingebauten Konstruktoren wie `Array` und `Object` erstellte Objekte haben geerbte nicht-zählbare Eigenschaften von `Array.prototype` und `Object.prototype`, wie die {{jsxref("Array")}} Methode {{jsxref("Array/indexOf", "indexOf()")}} oder die {{jsxref("Object")}} Methode {{jsxref("Object/toString", "toString()")}}, die in der `for...in` Schleife nicht besucht werden.

Die Traversierreihenfolge gemäß der modernen ECMAScript-Spezifikation ist gut definiert und konsistent über Implementierungen hinweg. Innerhalb jeder Komponente der Prototypkette werden zuerst alle nicht-negativen Ganzzahlenschlüssel (die als Array-Indizes verwendet werden können) in aufsteigender Reihenfolge nach Wert durchlaufen, dann andere Zeichenkettenschlüssel in aufsteigender chronologischer Reihenfolge der Objekterstellung.

Der `variable` Teil von `for...in` akzeptiert alles, was vor dem `=` Operator stehen kann. Sie können {{jsxref("Statements/const", "const")}} verwenden, um die Variable zu deklarieren, solange sie im Schleifenrumpf nicht neu zugewiesen wird (sie kann zwischen den Iterationen wechseln, da dies zwei separate Variablen sind). Andernfalls können Sie {{jsxref("Statements/let", "let")}} verwenden. Sie können [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwenden, um mehrere lokale Variablen zuzuweisen, oder einen Eigenschafts-Accessor wie `for (x.y in iterable)` verwenden, um den Wert einer Objekteigenschaft zuzuweisen.

Eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) erlaubt es, `var` Deklarationen der Schleifenvariable mit einem Initialisierer zu versehen. Dies führt zu einem [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) im strengen Modus und wird im nicht-strengen Modus ignoriert.

### Gelöschte, hinzugefügte oder geänderte Eigenschaften

`for...in` durchsucht Eigenschaftsschlüssel folgendermaßen:

1. Es holt sich zuerst alle eigenen Zeichenkettenschlüssel des aktuellen Objekts, auf eine Weise, die sehr ähnlich zu {{jsxref("Object.getOwnPropertyNames()")}} ist.
2. Für jeden Schlüssel, falls noch keine Zeichenkette mit demselben Wert besucht wurde, wird der [Eigenschafts-Deskriptor abgerufen](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor) und die Eigenschaft wird nur besucht, wenn sie aufzählbar ist. Diese Eigenschaften-Zeichenfolge wird jedoch als besucht markiert, selbst wenn sie nicht aufzählbar ist.
3. Anschließend wird das aktuelle Objekt durch sein Prototyp ersetzt, und der Prozess wird wiederholt.

Das bedeutet:

- Jede Eigenschaft, die während der Iteration dem gerade besuchten Objekt hinzugefügt wird, wird nicht besucht, da alle eigenen Eigenschaften des aktuellen Objekts im Voraus gespeichert wurden.
- Falls mehrere Objekte in der Prototypkette eine Eigenschaft mit demselben Namen haben, wird nur das erste berücksichtigt, und es wird nur besucht, wenn es aufzählbar ist. Wenn es nicht aufzählbar ist, werden keine weiteren Eigenschaften mit demselben Namen weiter oben in der Prototypkette besucht, selbst wenn sie aufzählbar sind.

Im Allgemeinen ist es am besten, während der Iteration keine Eigenschaften aus dem Objekt hinzuzufügen, zu ändern oder zu entfernen, außer der Eigenschaft, die gerade besucht wird. Die Spezifikation erlaubt es der Implementierung ausdrücklich, dem oben genannten Algorithmus in einem der folgenden Fälle nicht zu folgen:

- Die Prototypkette des Objekts wird während der Iteration geändert.
- Eine Eigenschaft wird während der Iteration vom Objekt oder seiner Prototypkette gelöscht.
- Eine Eigenschaft wird während der Iteration zur Prototypkette des Objekts hinzugefügt.
- Die Aufzählbarkeit einer Eigenschaft wird während der Iteration geändert.

In diesen Fällen können Implementierungen anders als erwartet reagieren oder sogar voneinander abweichen.

### Array-Iteration und for...in

Array-Indizes sind nur aufzählbare Eigenschaften mit ganzen Namen und ansonsten identisch mit allgemeinen Objekteigenschaften. Die `for...in` Schleife wird alle Ganzzahlschlüssel durchlaufen, bevor sie andere Schlüssel durchläuft, und in strikt aufsteigender Reihenfolge, was das Verhalten von `for...in` nah an die normale Array-Iteration bringt. Allerdings gibt die `for...in` Schleife alle aufzählbaren Eigenschaften zurück, einschließlich derer mit nicht-ganzzahligen Namen und derer, die geerbt wurden. Im Gegensatz zu `for...of` verwendet `for...in` die Objekteigenschafts-Aufzählung statt des Array-Iterators. In [sparsamen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) wird `for...of` die leeren Plätze besuchen, aber `for...in` nicht.

Es ist besser, eine {{jsxref("Statements/for", "for")}} Schleife mit einem numerischen Index, {{jsxref("Array.prototype.forEach()")}} oder die {{jsxref("Statements/for...of", "for...of")}} Schleife zu verwenden, da diese den Index als Zahl statt als Zeichenkette zurückgeben und auch Nicht-Index-Eigenschaften vermeiden.

### Iteration nur über eigene Eigenschaften

Wenn Sie nur Eigenschaften betrachten möchten, die dem Objekt selbst angehören und nicht seinen Prototypen, können Sie eine der folgenden Techniken verwenden:

- {{jsxref("Object.keys()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}

`Object.keys` gibt eine Liste der eigenen aufzählbaren Zeichenkettenschlüssel zurück, während `Object.getOwnPropertyNames` auch nicht-auflählbare enthalten wird.

Viele JavaScript-Stilrichtlinien und Linter empfehlen die Verwendung von `for...in` nicht, da es über die gesamte Prototypkette iteriert, was selten gewünscht ist, und es könnte mit der weiter verbreiteten `for...of` Schleife verwechselt werden. `for...in` wird am praktischsten für Debugging-Zwecke verwendet, da es eine einfache Möglichkeit bietet, die Eigenschaften eines Objekts zu überprüfen (indem es in die Konsole ausgegeben oder anderweitig angezeigt wird). In Situationen, in denen Objekte als Ad-hoc-Schlüssel-Wert-Paare verwendet werden, ermöglicht es Ihnen `for...in`, zu überprüfen, ob einer dieser Schlüssel einen bestimmten Wert enthält.

## Beispiele

### Verwendung von for...in

Die `for...in` Schleife unten iteriert über alle aufzählbaren, nicht-symbolischen Eigenschaften des Objekts und protokolliert eine Zeichenkette der Eigenschaftsnamen und ihrer Werte.

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

### Iterieren über eigene Eigenschaften

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

### Gleichzeitige Änderung

> [!WARNING]
> Sie sollten keinen Code wie diesen selbst schreiben. Er ist hier nur enthalten, um das Verhalten von `for...in` in einigen Randfällen zu veranschaulichen.

Eigenschaften, die während der Iteration dem aktuellen Objekt hinzugefügt werden, werden nie besucht:

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

Überschattete Eigenschaften werden nur einmal besucht:

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

Darüber hinaus berücksichtigen Sie die folgenden Fälle, in denen das Verhalten nicht spezifiziert ist, und Implementierungen dazu neigen, vom spezifizierten Algorithmus abzuweichen:

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

Aufzählbare Eigenschaften, die während der Iteration zum Prototyp hinzugefügt werden:

```js
const proto = {};
const obj = { __proto__: proto, a: 1, b: 2 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  proto.c = 3;
}
```

Ändern der Aufzählbarkeit einer Eigenschaft während der Iteration:

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
- [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Array.prototype.forEach()")}}
