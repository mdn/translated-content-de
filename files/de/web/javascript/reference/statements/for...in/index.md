---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

Die **`for...in`**-Anweisung iteriert über alle [zählbaren String-Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) eines Objekts (ignoring properties keyed by [symbols](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)), einschließlich geerbter zählbarer Eigenschaften.

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
  - : Empfängt während jeder Iteration einen Eigenschaftsnamen als String. Dies kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein oder ein [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z. B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)). Variablen, die mit `var` deklariert werden, sind nicht lokal zur Schleife, d. h. sie befinden sich im selben Geltungsbereich wie die `for...in`-Schleife.
- `object`
  - : Objekt, dessen nicht-Symbol zählbare Eigenschaften iteriert werden.
- `statement`
  - : Eine Anweisung, die in jeder Iteration ausgeführt wird. Kann auf `variable` verweisen. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Die Schleife iteriert über alle zählbaren Eigenschaften des Objekts selbst sowie über die Eigenschaften, die das Objekt von seiner Prototypenkette erbt (Eigenschaften näherer Prototypen haben Vorrang vor denen von Prototypen, die weiter entfernt sind).

Wie bei anderen Schleifenanweisungen können Sie [Steuerflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und geht zur nächsten Iteration der Schleife über.

Eine `for...in`-Schleife iteriert nur über zählbare, nicht-Symbol-Eigenschaften. Von Eingebauten Konstruktoren wie `Array` und `Object` erstellte Objekte haben geerbte nicht-zählbare Eigenschaften von `Array.prototype` und `Object.prototype`, wie die {{jsxref("Array")}}-Methode {{jsxref("Array/indexOf", "indexOf()")}} oder die {{jsxref("Object")}}-Methode {{jsxref("Object/toString", "toString()")}}, die in der `for...in`-Schleife nicht besucht werden.

Die Traversierungsreihenfolge, gemäß der modernen ECMAScript-Spezifikation, ist gut definiert und konsistent in allen Implementierungen. Innerhalb jeder Komponente der Prototypenkette werden alle nicht-negativen ganzzahligen Schlüssel (jene, die Array-Indizes sein können) zuerst in aufsteigender Reihenfolge der Werte durchlaufen, dann andere String-Schlüssel in aufsteigender chronologischer Reihenfolge der Eigenschaftserstellung.

Der `variable`-Teil von `for...in` akzeptiert alles, was vor dem `=` Operator stehen kann. Sie können {{jsxref("Statements/const", "const")}} verwenden, um die Variable zu deklarieren, solange sie nicht innerhalb des Schleifenkörpers neu zugewiesen wird (sie kann zwischen Iterationen geändert werden, da dies zwei separate Variablen sind). Andernfalls können Sie {{jsxref("Statements/let", "let")}} verwenden. Sie können [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwenden, um mehrere lokale Variablen zuzuweisen, oder einen Eigenschaftsaccessor wie `for (x.y in iterable)` verwenden, um den Wert einer Objekteigenschaft zuzuweisen.

Eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) erlaubt `var`-Deklarationen der Schleifenvariablen, einen Initialisierer zu haben. Dies löst einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) im Strict-Modus aus und wird im nicht-strikten Modus ignoriert.

### Gelöschte, hinzugefügte oder modifizierte Eigenschaften

`for...in` besucht Eigenschaftsschlüssel auf folgende Weise:

1. Es erhält zuerst alle eigenen String-Schlüssel des aktuellen Objekts, auf eine Art, die {{jsxref("Object.getOwnPropertyNames()")}} sehr ähnlich ist.
2. Für jeden Schlüssel, falls kein String mit demselben Wert jemals besucht wurde, wird der [Eigenschaftsbeschreiber abgerufen](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor) und die Eigenschaft wird nur dann besucht, wenn sie zählbar ist. Allerdings wird dieser Eigenschaftsstring als besucht markiert, auch wenn er nicht zählbar ist.
3. Dann wird das aktuelle Objekt durch sein Prototyp ersetzt, und der Vorgang wird wiederholt.

Das bedeutet:

- Jede Eigenschaft, die während der Iteration zum aktuell besuchten Objekt hinzugefügt wird, wird nicht besucht, da alle eigenen Eigenschaften des aktuellen Objekts zuvor gespeichert wurden.
- Wenn mehrere Objekte in der Prototypenkette eine Eigenschaft mit demselben Namen haben, wird nur die erste in Betracht gezogen, und sie wird nur besucht, wenn sie zählbar ist. Wenn sie nicht zählbar ist, werden keine anderen Eigenschaften mit demselben Namen weiter oben in der Prototypenkette besucht, selbst wenn sie zählbar sind.

Im Allgemeinen ist es am besten, während der Iteration keine Eigenschaften zum Objekt hinzuzufügen, zu ändern oder zu entfernen, außer der aktuell besuchten Eigenschaft. Die Spezifikation erlaubt es der Implementierung ausdrücklich, dem oben genannten Algorithmus in einem der folgenden Fälle nicht zu folgen:

- Die Prototypenkette des Objekts wird während der Iteration geändert.
- Eine Eigenschaft wird während der Iteration aus dem Objekt oder seiner Prototypenkette gelöscht.
- Eine Eigenschaft wird während der Iteration zur Prototypenkette des Objekts hinzugefügt.
- Die Zählbarkeit einer Eigenschaft wird während der Iteration geändert.

In diesen Fällen können Implementierungen anders reagieren, als Sie vielleicht erwarten, oder sogar von einander abweichen.

### Array-Iteration und for...in

Array-Indizes sind nur zählbare Eigenschaften mit ganzzahligen Namen und sind ansonsten identisch mit allgemeinen Objekteigenschaften. Die `for...in`-Schleife durchläuft alle Ganzzahlschlüssel, bevor sie andere Schlüssel durchläuft, und in streng aufsteigender Reihenfolge, wodurch das Verhalten von `for...in` der normalen Array-Iteration nahekommt. Allerdings wird die `for...in`-Schleife alle zählbaren Eigenschaften zurückgeben, einschließlich jener mit nicht-ganzzahligen Namen und jener, die geerbt sind. Im Gegensatz zu `for...of` verwendet `for...in` die Eigenschaftsaufzählung anstelle des Iterators des Arrays. In [lückenhaften Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) wird `for...of` die leeren Plätze besuchen, aber `for...in` nicht.

Es ist besser, eine {{jsxref("Statements/for", "for")}}-Schleife mit einem numerischen Index, {{jsxref("Array.prototype.forEach()")}} oder die {{jsxref("Statements/for...of", "for...of")}}-Schleife zu verwenden, da sie den Index als Zahl anstelle eines Strings zurückgeben und auch nicht-Index-Eigenschaften vermeiden.

### Nur eigene Eigenschaften iterieren

Wenn Sie nur Eigenschaften berücksichtigen möchten, die direkt am Objekt selbst verknüpft sind und nicht an seinen Prototypen, können Sie eine der folgenden Techniken verwenden:

- {{jsxref("Object.keys()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}

`Object.keys` wird eine Liste der zählbaren eigenen String-Eigenschaften zurückgeben, während `Object.getOwnPropertyNames` auch nicht-zählbare enthalten wird.

Viele JavaScript-Stilrichtlinien und Linter empfehlen, `for...in` nicht zu verwenden, da es über die gesamte Prototypenkette iteriert, was selten gewünscht ist, und mit der weiter verbreiteten `for...of`-Schleife verwechselt werden kann. `for...in` wird am praktischsten für Debugging-Zwecke verwendet und ist eine einfache Möglichkeit, die Eigenschaften eines Objekts zu überprüfen (indem es in die Konsole ausgegeben wird oder ähnliches). In Situationen, in denen Objekte als Ad-hoc-Schlüssel-Wert-Paare verwendet werden, ermöglicht `for...in` Ihnen zu prüfen, ob einer dieser Schlüssel einen bestimmten Wert enthält.

## Beispiele

### Verwendung von for...in

Die `for...in`-Schleife unten iteriert über alle zählbaren, nicht-Symbol-Eigenschaften des Objekts und protokolliert einen String der Eigenschaftsnamen und ihrer Werte.

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

Die folgende Funktion illustriert die Verwendung von {{jsxref("Object.hasOwn()")}}: Die geerbten Eigenschaften werden nicht angezeigt.

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
> Sie sollten keinen solchen Code selbst schreiben. Er ist hier nur enthalten, um das Verhalten von `for...in` in einigen Randfällen zu veranschaulichen.

Eigenschaften, die während der Iteration zum aktuellen Objekt hinzugefügt werden, werden nie besucht:

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

Zusätzlich betrachten Sie die folgenden Fälle, in denen das Verhalten nicht spezifiziert ist und Implementierungen dazu neigen, von dem spezifizierten Algorithmus abzuweichen:

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

Zählbare Eigenschaften, die während der Iteration zur Prototypenkette hinzugefügt werden:

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
- [Zählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Array.prototype.forEach()")}}
