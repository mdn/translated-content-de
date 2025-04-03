---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Statements")}}

Die **`for...in`**-Anweisung iteriert über alle [zählbaren String-Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) eines Objekts (ignoriert Eigenschaften, die mit [Symbolen](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) indiziert sind), einschließlich geerbter zählbarer Eigenschaften.

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
  - : Erhält bei jedem Durchlauf einen String-Eigenschaftsnamen. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein oder ein [Zuordnungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z.B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)). Mit `var` deklarierte Variablen sind nicht lokal zur Schleife, d.h. sie befinden sich im selben Geltungsbereich wie die `for...in`-Schleife.
- `object`
  - : Objekt, dessen nicht-symbolische zählbare Eigenschaften durchlaufen werden.
- `statement`
  - : Eine Anweisung, die bei jedem Durchlauf ausgeführt wird. Kann auf `variable` verweisen. Sie können einen [Block](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Die Schleife iteriert über alle zählbaren Eigenschaften des Objekts selbst und diejenigen, die das Objekt aus seiner Prototypenkette erbt (Eigenschaften näher liegender Prototypen haben Vorrang vor denen weiter entfernten in der Prototypenkette des Objekts).

Wie bei anderen Schleifenanweisungen können Sie innerhalb von `statement` [Steueranweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) verwenden:

- {{jsxref("Statements/break", "break")}} beendet die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} beendet die Ausführung von `statement` und geht zur nächsten Iteration der Schleife.

Eine `for...in`-Schleife iteriert nur über zählbare, nicht-symbolische Eigenschaften. Von eingebauten Konstruktoren wie `Array` und `Object` erstellte Objekte haben geerbte nicht-zählbare Eigenschaften von `Array.prototype` und `Object.prototype`, wie die {{jsxref("Array")}}-{{jsxref("Array/indexOf", "indexOf()")}}-Methode oder die {{jsxref("Object")}}-{{jsxref("Object/toString", "toString()")}}-Methode, die in der `for...in`-Schleife nicht besucht werden.

Die Traversierungsreihenfolge ist gemäß der modernen ECMAScript-Spezifikation wohldefiniert und konsistent über Implementierungen hinweg. Innerhalb jeder Komponente der Prototypenkette werden zunächst alle nicht-negativen Ganzzahlschlüssel (die Indizes eines Arrays sein können) in aufsteigender Reihenfolge nach Wert durchlaufen, dann andere String-Schlüssel in aufsteigender chronologischer Reihenfolge der Eigenschaftserstellung.

Der `variable`-Teil von `for...in` akzeptiert alles, was vor dem `=`-Operator stehen kann. Sie können {{jsxref("Statements/const", "const")}} verwenden, um die Variable zu deklarieren, solange sie im Schleifenkörper nicht neu zugewiesen wird (sie kann zwischen den Iterationen wechseln, da dies zwei separate Variablen sind). Andernfalls können Sie {{jsxref("Statements/let", "let")}} verwenden. Sie können [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwenden, um mehrere lokale Variablen zuzuweisen, oder einen Eigenschafts-Accessor wie `for (x.y in iterable)` verwenden, um den Wert einer Objekteigenschaft zuzuweisen.

Eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) erlaubt `var`-Deklarationen der Schleifenvariablen mit einem Initialisierer. Dies löst einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) im strikten Modus aus und wird im nicht-strikten Modus ignoriert.

### Gelöschte, hinzugefügte oder geänderte Eigenschaften

`for...in` besucht Eigenschaftsschlüssel in der folgenden Reihenfolge:

1. Es erhält zuerst alle eigenen String-Schlüssel des aktuellen Objekts, ähnlich wie bei {{jsxref("Object.getOwnPropertyNames()")}}.
2. Für jeden Schlüssel wird das [Eigenschafts-Deskriptor](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor) abgerufen, sofern ein String mit demselben Wert bisher nicht besucht wurde, und die Eigenschaft wird nur besucht, wenn sie zählbar ist. Dieser Eigenschaftsstring wird jedoch als besucht markiert, auch wenn er nicht zählbar ist.
3. Dann wird das aktuelle Objekt durch seinen Prototyp ersetzt, und der Prozess wird wiederholt.

Das bedeutet:

- Jede Eigenschaft, die dem gerade besuchten Objekt während der Iteration hinzugefügt wird, wird nicht besucht, da alle eigenen Eigenschaften des aktuellen Objekts vorher gespeichert wurden.
- Wenn mehrere Objekte in der Prototypenkette eine Eigenschaft mit demselben Namen haben, wird nur die erste berücksichtigt, und sie wird nur besucht, wenn sie zählbar ist. Wenn sie nicht zählbar ist, werden keine weiteren Eigenschaften mit demselben Namen weiter oben in der Prototypenkette besucht, selbst wenn sie zählbar sind.

Im Allgemeinen ist es am besten, während der Iteration keine Eigenschaften des Objekts, mit Ausnahme der gerade besuchten Eigenschaft, hinzuzufügen, zu ändern oder zu entfernen. Die Spezifikation erlaubt es der Implementierung ausdrücklich, sich in einem der folgenden Fälle nicht an den obigen Algorithmus zu halten:

- Die Prototypenkette des Objekts wird während der Iteration geändert.
- Eine Eigenschaft wird während der Iteration aus dem Objekt oder seiner Prototypenkette gelöscht.
- Eine Eigenschaft wird während der Iteration zur Prototypenkette des Objekts hinzugefügt.
- Die Zählbarkeit einer Eigenschaft wird während der Iteration geändert.

In diesen Fällen können Implementierungen sich anders verhalten, als man erwarten könnte, oder sogar voneinander abweichen.

### Array-Iteration und for...in

Array-Indizes sind lediglich zählbare Eigenschaften mit ganzzahligem Namen und ansonsten identisch mit allgemeinen Objekteigenschaften. Die `for...in`-Schleife durchläuft alle Ganzzahlschlüssel, bevor sie andere Schlüssel durchläuft, und das in streng aufsteigender Reihenfolge, was das Verhalten von `for...in` der normalen Array-Iteration nahebringt. Die `for...in`-Schleife gibt jedoch alle zählbaren Eigenschaften zurück, einschließlich derjenigen mit nicht-ganzzahligen Namen und der geerbten. Im Gegensatz zu `for...of` verwendet `for...in` die Eigenschaften-Aufzählung anstelle des Array-Iterators. In [spärlichen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) besucht `for...of` die leeren Plätze, `for...in` jedoch nicht.

Es ist besser, eine {{jsxref("Statements/for", "for")}}-Schleife mit einem numerischen Index, {{jsxref("Array.prototype.forEach()")}}, oder die {{jsxref("Statements/for...of", "for...of")}}-Schleife zu verwenden, da sie den Index als Zahl und nicht als String zurückgeben und auch nicht-Index-Eigenschaften vermeiden.

### Nur über eigene Eigenschaften iterieren

Wenn Sie nur die Eigenschaften berücksichtigen möchten, die dem Objekt selbst und nicht seinen Prototypen angehören, können Sie eine der folgenden Techniken verwenden:

- {{jsxref("Object.keys()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}

`Object.keys` gibt eine Liste der zählbaren eigenen String-Eigenschaften zurück, während `Object.getOwnPropertyNames` auch nicht-zählbare enthält.

Viele JavaScript-Stilrichtlinien und Linter raten von der Verwendung von `for...in` ab, da es über die gesamte Prototypenkette iteriert, was selten gewünscht ist und Verwechslungen mit der weiter verbreiteten `for...of`-Schleife verursachen kann. `for...in` wird am praktischsten zu Debugging-Zwecken verwendet, da es eine einfache Möglichkeit bietet, die Eigenschaften eines Objekts zu überprüfen (indem man sie z.B. in die Konsole ausgibt). In Situationen, in denen Objekte als Ad-hoc-Schlüssel-Wert-Paare verwendet werden, ermöglicht `for...in`, zu überprüfen, ob einer dieser Schlüssel einen bestimmten Wert enthält.

## Beispiele

### Verwendung von for...in

Die folgende `for...in`-Schleife iteriert über alle aufzählbaren, nicht-symbolischen Eigenschaften des Objekts und protokolliert einen String der Eigenschaftsnamen und ihrer Werte.

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

### Zeitgleiche Modifikation

> [!WARNING]
> Sie sollten solchen Code nicht selbst schreiben. Er ist hier nur enthalten, um das Verhalten von `for...in` in einigen Randfällen zu veranschaulichen.

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

Betrachten Sie darüber hinaus die folgenden Fälle, in denen das Verhalten nicht spezifiziert ist und Implementierungen dazu neigen, von dem spezifizierten Algorithmus abzuweichen:

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

Aufzählbare Eigenschaften, die während der Iteration dem Prototyp hinzugefügt werden:

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
- [Zählbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Array.prototype.forEach()")}}
