---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
l10n:
  sourceCommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jsSidebar("Statements")}}

Die **`for...in`**-Anweisung iteriert über alle [enumerierbaren String-Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) eines Objekts (ignoring properties keyed by [symbols](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)), einschließlich geerbter enumerierbarer Eigenschaften.

{{EmbedInteractiveExample("pages/js/statement-forin.html")}}

## Syntax

```js-nolint
for (variable in object)
  statement
```

### Parameter

- `variable`
  - : Erhält bei jeder Iteration einen String-Eigenschaftsnamen. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein oder ein [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z.B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungszuweisung-Muster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)). Mit `var` deklarierte Variablen sind nicht lokal zur Schleife, d.h., sie befinden sich im selben Scope, in dem sich die `for...in`-Schleife befindet.
- `object`
  - : Objekt, dessen nicht-symbolische enumerierbare Eigenschaften durchlaufen werden.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Kann auf `variable` verweisen. Sie können einen [Blocksatz](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Die Schleife iteriert über alle enumerierbaren Eigenschaften des Objekts selbst und über jene, die das Objekt von seiner Prototypen-Kette erbt (Eigenschaften näherer Prototypen haben Vorrang vor denen von Prototypen, die weiter vom Objekt in seiner Prototypen-Kette entfernt sind).

Wie andere Schleifenanweisungen können Sie [Steuerflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und geht zur nächsten Iteration der Schleife.

Eine `for...in`-Schleife iteriert nur über enumerierbare, nicht-symbolische Eigenschaften. Von eingebauten Konstruktoren wie `Array` und `Object` erstellte Objekte haben geerbte nicht-enumerierbare Eigenschaften von `Array.prototype` und `Object.prototype`, wie die {{jsxref("Array")}}-Methode {{jsxref("Array/indexOf", "indexOf()")}} oder die {{jsxref("Object")}}-Methode {{jsxref("Object/toString", "toString()")}}, die in der `for...in`-Schleife nicht besucht werden.

Die Traversierungsreihenfolge ist laut moderner ECMAScript-Spezifikation gut definiert und konsistent über alle Implementierungen hinweg. Innerhalb jeder Komponente der Prototypenkette werden alle nicht-negativen ganzzahligen Schlüssel (die als Array-Indizes verwendet werden können) zuerst in aufsteigender Reihenfolge durchlaufen, dann andere String-Schlüssel in aufsteigender chronologischer Reihenfolge der Eigenschaftserstellung.

Der `variable`-Teil von `for...in` akzeptiert alles, was vor dem `=`-Operator stehen kann. Sie können {{jsxref("Statements/const", "const")}} verwenden, um die Variable zu deklarieren, solange sie nicht innerhalb des Schleifenkörpers erneut zugewiesen wird (sie kann zwischen den Iterationen wechseln, da dies zwei separate Variablen sind). Andernfalls können Sie {{jsxref("Statements/let", "let")}} verwenden. Sie können [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwenden, um mehrere lokale Variablen zuzuweisen, oder einen Eigenschafts-Accessor wie `for (x.y in iterable)` verwenden, um den Wert einer Objekteigenschaft zuzuweisen.

Ein [veraltetes Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) erlaubt `var`-Deklarationen der Schleifenvariable mit einem Initialisierer. Dies führt zu einem [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) im strikten Modus und wird im nicht-strikten Modus ignoriert.

### Gelöschte, hinzugefügte oder modifizierte Eigenschaften

`for...in` besucht Eigenschaftsschlüssel in folgender Weise:

1. Es erhält zuerst alle eigenen String-Schlüssel des aktuellen Objekts, in einer Art, die der von {{jsxref("Object.getOwnPropertyNames()")}} sehr ähnlich ist.
2. Für jeden Schlüssel, falls noch kein String mit dem gleichen Wert besucht wurde, wird der [Eigenschaftsbeschreiber abgerufen](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor) und die Eigenschaft wird nur besucht, wenn sie enumerierbar ist. Dieser Eigenschaftsstring wird jedoch als besucht markiert, selbst wenn er nicht enumerierbar ist.
3. Dann wird das aktuelle Objekt durch seinen Prototyp ersetzt und der Prozess wird wiederholt.

Dies bedeutet:

- Jede während der Iteration dem aktuell besuchten Objekt hinzugefügte Eigenschaft wird nicht besucht, da alle eigenen Eigenschaften des aktuellen Objekts bereits zuvor gespeichert wurden.
- Wenn mehrere Objekte in der Prototypenkette eine Eigenschaft mit demselben Namen haben, wird nur die erste berücksichtigt, und sie wird nur besucht, wenn sie enumerierbar ist. Wenn sie nicht enumerierbar ist, werden keine anderen Eigenschaften mit demselben Namen weiter oben in der Prototypenkette besucht, auch wenn sie enumerierbar sind.

Im Allgemeinen ist es am besten, Eigenschaften des Objekts während der Iteration nicht hinzuzufügen, zu ändern oder zu entfernen, außer der aktuell besuchten Eigenschaft. Die Spezifikation erlaubt es ausdrücklich, dass die Implementierung nicht dem oben beschriebenen Algorithmus folgt, wenn einer der folgenden Fälle auftritt:

- Die Prototypenkette des Objekts wird während der Iteration verändert.
- Eine Eigenschaft wird während der Iteration vom Objekt oder seiner Prototypenkette gelöscht.
- Eine Eigenschaft wird während der Iteration zur Prototypenkette des Objekts hinzugefügt.
- Die Enumerierbarkeit einer Eigenschaft wird während der Iteration geändert.

In diesen Fällen können Implementierungen anders verhalten als Sie vielleicht erwarten, oder sogar voneinander abweichen.

### Array-Iteration und for...in

Array-Indizes sind nur enumerierbare Eigenschaften mit ganzzahligen Namen und sind ansonsten identisch mit allgemeinen Objekteigenschaften. Die `for...in`-Schleife durchläuft alle ganzzahligen Schlüssel, bevor sie andere Schlüssel durchläuft, und in strikt aufsteigender Reihenfolge, was das Verhalten von `for...in` der normalen Array-Iteration nahe bringt. Die `for...in`-Schleife gibt jedoch alle enumerierbaren Eigenschaften zurück, einschließlich solcher mit nicht-ganzzahligen Namen und solchen, die geerbt sind. Im Gegensatz zu `for...of` verwendet `for...in` die Eigenschaften-Aufzählung anstelle des Iterators des Arrays. In [spärlichen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) wird `for...of` die leeren Slots besuchen, aber `for...in` wird dies nicht tun.

Es ist besser, eine {{jsxref("Statements/for", "for")}}-Schleife mit einem numerischen Index, {{jsxref("Array.prototype.forEach()")}} oder die {{jsxref("Statements/for...of", "for...of")}}-Schleife zu verwenden, da sie den Index als Zahl und nicht als String zurückgeben und auch nicht-Index-Eigenschaften vermeiden.

### Nur eigene Eigenschaften iterieren

Wenn Sie nur die Eigenschaften betrachten möchten, die an das Objekt selbst angehängt sind, und nicht seine Prototypen, können Sie eine der folgenden Techniken verwenden:

- {{jsxref("Object.keys()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}

`Object.keys` wird eine Liste der eigenen enumerierbaren String-Eigenschaften zurückgeben, während `Object.getOwnPropertyNames` auch nicht-enumerierbare enthält.

Viele JavaScript-Stilrichtlinien und -Linter raten von der Verwendung von `for...in` ab, da es über die gesamte Prototypenkette iteriert, was selten gewünscht ist, und möglicherweise eine Verwechslung mit der weiter verbreiteten `for...of`-Schleife besteht. `for...in` wird am praktischsten für Debugging-Zwecke verwendet, da es eine einfache Möglichkeit bietet, die Eigenschaften eines Objekts zu überprüfen (indem es auf die Konsole ausgegeben wird oder auf andere Weise). In Situationen, in denen Objekte als Ad-hoc-Schlüssel-Wert-Paare verwendet werden, ermöglicht `for...in` Ihnen, zu überprüfen, ob einer dieser Schlüssel einen bestimmten Wert hält.

## Beispiele

### Verwendung von for...in

Die `for...in`-Schleife unten iteriert über alle enumerierbaren, nicht-symbolische Eigenschaften des Objekts und protokolliert einen String der Eigenschaftsnamen und ihrer Werte.

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

### Eigene Eigenschaften iterieren

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
> Sie sollten keinen solchen Code selbst schreiben. Er ist hier nur enthalten, um das Verhalten von `for...in` in einigen Grenzfällen zu veranschaulichen.

Eigenschaften, die dem aktuellen Objekt während der Iteration hinzugefügt werden, werden niemals besucht:

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

Zusätzlich beachten Sie folgende Fälle, in denen das Verhalten nicht spezifiziert ist und Implementierungen dazu neigen können, vom spezifizierten Algorithmus abzuweichen:

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

Enumerierbare Eigenschaften, die während der Iteration zur Prototypenkette hinzugefügt werden:

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
- [Enumerierbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Array.prototype.forEach()")}}
