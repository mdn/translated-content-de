---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Die **`for...in`**-Anweisung iteriert über alle [zählbaren String-Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) eines Objekts (Eigenschaften, die durch [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) gekennzeichnet sind, werden ignoriert), einschließlich geerbter zählbarer Eigenschaften.

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
  - : Empfängt bei jeder Iteration einen Eigenschaftsnamen als String. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein, oder ein [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z. B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungszuweisung-Muster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)). Mit `var` deklarierte Variablen sind nicht lokal für die Schleife, d. h. sie befinden sich im gleichen Bereich wie die `for...in`-Schleife.
- `object`
  - : Objekt, dessen nicht-symbolische, zählbare Eigenschaften iteriert werden.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Kann auf `variable` referenzieren. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Die Schleife iteriert über alle zählbaren Eigenschaften des Objekts selbst und jene, die das Objekt von seiner Prototypkette erbt (Eigenschaften näherer Prototypen haben Vorrang vor Eigenschaften fernerer Prototypen in der Prototypkette).

Wie bei anderen Schleifenanweisungen können Sie innerhalb der `statement` [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) verwenden:

- {{jsxref("Statements/break", "break")}} beendet die Ausführung von `statement` und springt zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stopt die Ausführung von `statement` und führt die nächste Iteration der Schleife aus.

Eine `for...in`-Schleife iteriert nur über zählbare, nicht-symbolische Eigenschaften. Objekte, die von eingebauten Konstruktoren wie `Array` und `Object` erstellt werden, haben geerbte nicht-zählbare Eigenschaften von `Array.prototype` und `Object.prototype`, wie die {{jsxref("Array")}}-Methode {{jsxref("Array/indexOf", "indexOf()")}} oder die {{jsxref("Object")}}-Methode {{jsxref("Object/toString", "toString()")}}, die in der `for...in`-Schleife nicht besucht werden.

Die Traversierreihenfolge ist laut der modernen ECMAScript-Spezifikation gut definiert und konsistent über Implementierungen hinweg. Innerhalb jeder Komponente der Prototypkette werden alle nicht-negativen ganzen Schlüssel (die als Array-Indizes verwendet werden können) zuerst in aufsteigender Reihenfolge durchlaufen, gefolgt von anderen String-Schlüsseln in aufsteigender chronologischer Reihenfolge der Eigenschaftserstellung.

Der Teil `variable` von `for...in` akzeptiert alles, was vor dem `=`-Operator stehen kann. Sie können {{jsxref("Statements/const", "const")}} verwenden, um die Variable zu deklarieren, solange sie nicht innerhalb des Schleifenrumpfs neu zugewiesen wird (sie kann sich zwischen Iterationen ändern, da dies zwei separate Variablen sind). Andernfalls können Sie {{jsxref("Statements/let", "let")}} verwenden. Sie können [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwenden, um mehrere lokale Variablen zuzuweisen, oder einen Eigenschafts-Accessor wie `for (x.y in iterable)` verwenden, um den Wert einer Objekteigenschaft zuzuweisen.

Eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) erlaubt `var`-Deklarationen der Schleifenvariablen mit einem Initialisator. Dies führt in Strict Mode zu einem [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) und wird im Non-Strict Mode ignoriert.

### Gelöschte, hinzugefügte oder geänderte Eigenschaften

`for...in` besucht Eigenschaften-Schlüssel in folgender Reihenfolge:

1. Die eigenen String-Schlüssel des aktuellen Objekts werden zuerst in einer ähnlichen Weise wie mit {{jsxref("Object.getOwnPropertyNames()")}} abgerufen.
2. Für jeden Schlüssel, der nicht schon besucht wurde, wird der [Eigenschaftsbeschreiber abgerufen](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor), und die Eigenschaft wird nur besucht, wenn sie zählbar ist. Jedoch wird dieser Eigenschafts-String als besucht markiert, auch wenn er nicht zählbar ist.
3. Danach wird das aktuelle Objekt durch sein Prototyp ersetzt, und der Prozess wird wiederholt.

Dies bedeutet:

- Jede zu diesem Zeitpunkt hinzugefügte Eigenschaft wird nicht besucht, weil alle eigenen Eigenschaften vorab gespeichert wurden.
- Wenn mehrere Objekte in der Prototypkette eine Eigenschaft mit demselben Namen haben, wird nur die erste berücksichtigt, und sie wird nur besucht, wenn sie zählbar ist. Wenn sie nicht zählbar ist, wird keine andere Eigenschaft mit demselben Namen weiter oben in der Prototypkette besucht, auch wenn diese zählbar ist.

Es ist allgemein am besten, während der Iteration keine Eigenschaften hinzuzufügen, zu ändern oder zu entfernen, außer die aktuell besuchte Eigenschaft. Die Spezifikation erlaubt ausdrücklich, vom oben beschriebenen Algorithmus abzuweichen, wenn eine der folgenden Bedingungen zutrifft:

- Die Prototypkette des Objekts wird während der Iteration geändert.
- Eine Eigenschaft des Objekts oder der Prototypkette wird während der Iteration gelöscht.
- Eine Eigenschaft wird während der Iteration zur Prototypkette des Objekts hinzugefügt.
- Die Enumerierbarkeit einer Eigenschaft wird während der Iteration geändert.

In diesen Fällen können Implementierungen sich von den Erwartungen oder auch voneinander unterscheiden.

### Array-Iteration und for...in

Array-Indizes sind nur zählbare Eigenschaften mit ganzzahligen Namen und ansonsten identisch zu allgemeinen Objekteigenschaften. Die `for...in`-Schleife durchläuft zuerst alle ganzzahligen Schlüssel in streng aufsteigender Reihenfolge, wodurch das Verhalten von `for...in` dem der normalen Array-Iteration ähnelt. Jedoch gibt die `for...in`-Schleife alle zählbaren Eigenschaften zurück, einschließlich jener mit nicht-ganzzahligen Namen und geerbten Eigenschaften. Anders als `for...of` verwendet `for...in` die Eigenschaften-Aufzählung anstelle des Iterators des Arrays. In [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) besucht `for...of` die leeren Plätze, `for...in` jedoch nicht.

Es ist besser, eine {{jsxref("Statements/for", "for")}}-Schleife mit einem numerischen Index, {{jsxref("Array.prototype.forEach()")}} oder die {{jsxref("Statements/for...of", "for...of")}}-Schleife zu verwenden, da diese den Index als Zahl und nicht als String zurückgeben und auch keine Nicht-Index-Eigenschaften berücksichtigen.

### Nur eigene Eigenschaften iterieren

Wenn Sie nur Eigenschaften betrachten möchten, die direkt dem Objekt zugeordnet sind, und nicht dessen Prototypen, können Sie eine der folgenden Techniken verwenden:

- {{jsxref("Object.keys()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}

`Object.keys` gibt eine Liste der eigenen zählbaren String-Eigenschaften zurück, während `Object.getOwnPropertyNames` auch nicht-zählbare Eigenschaften enthält.

Viele JavaScript-Stilrichtlinien und Linters raten von der Verwendung von `for...in` ab, da es die gesamte Prototypkette umfasst, was selten gewünscht ist, und leicht mit der weiter verbreiteten `for...of`-Schleife verwechselt werden kann. `for...in` eignet sich praktisch am besten für Debugging-Zwecke, da es eine einfache Möglichkeit bietet, die Eigenschaften eines Objekts zu überprüfen (z. B. durch Ausgabe in die Konsole). In Situationen, in denen Objekte als Ad-hoc-Schlüssel-Wert-Paare verwendet werden, ermöglicht es `for...in`, zu überprüfen, ob einer dieser Schlüssel einen bestimmten Wert enthält.

## Beispiele

### Verwendung von for...in

Die untenstehende `for...in`-Schleife iteriert über alle zählbaren, nicht-symbolischen Eigenschaften des Objekts und gibt eine Zeichenkette der Eigenschaftsnamen und ihrer Werte aus.

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

### Iteration eigener Eigenschaften

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
> Sie sollten solchen Code nicht selbst schreiben. Er ist hier nur enthalten, um das Verhalten von `for...in` in einigen Spezialfällen zu veranschaulichen.

Während der Iteration hinzugefügte Eigenschaften des aktuellen Objekts werden nie besucht:

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

Zusätzlich betrachten Sie die folgenden Fälle, bei denen das Verhalten nicht spezifiziert ist und Implementierungen tendenziell vom spezifizierten Algorithmus abweichen:

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

Zählbare Eigenschaften, die zur Prototypkette während der Iteration hinzugefügt werden:

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
- [Zählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Array.prototype.forEach()")}}
