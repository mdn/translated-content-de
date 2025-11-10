---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die **`for...in`** Anweisung iteriert über alle [aufzählbaren Zeichenketteneigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) eines Objekts (ignoriert Eigenschaften, die durch [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) gekennzeichnet sind), einschließlich geerbter aufzählbarer Eigenschaften.

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
  - : Erhält auf jeder Iteration einen Zeichenkettenschlüssel. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein oder ein Ziel einer [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z.B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)). Variablen, die mit `var` deklariert sind, sind nicht lokal zur Schleife, d.h. sie befinden sich im selben Gültigkeitsbereich wie die `for...in` Schleife.
- `object`
  - : Objekt, dessen aufzählbare Eigenschaften ohne Symbol durchlaufen werden.
- `statement`
  - : Eine Anweisung, die bei jedem Iterationsschritt ausgeführt wird. Kann sich auf `variable` beziehen. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Die Schleife iteriert über alle aufzählbaren Eigenschaften des Objekts selbst und über jene, die das Objekt von seiner Prototypenkette erbt (Eigenschaften näherer Prototypen haben Vorrang vor denen von Prototypen, die weiter vom Objekt entfernt sind).

Wie bei anderen Schleifenanweisungen können Sie in `statement` [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und springt zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und geht zur nächsten Iteration der Schleife über.

Eine `for...in` Schleife iteriert nur über aufzählbare Eigenschaften ohne Symbole. Von eingebauten Konstruktoren wie `Array` und `Object` erstellte Objekte haben nicht-auflistbare geerbte Eigenschaften von `Array.prototype` und `Object.prototype`, wie die {{jsxref("Array")}} `indexOf()` Methode oder die {{jsxref("Object")}} `toString()` Methode, die in der `for...in` Schleife nicht besucht werden.

Die Durchlaufreihenfolge ist gemäß der modernen ECMAScript-Spezifikation gut definiert und konsistent über Implementierungen hinweg. Innerhalb jeder Komponente der Prototypenkette werden zuerst alle nicht-negativen ganzzahligen Schlüssel (die Array-Indizes sein können) in aufsteigender Reihenfolge nach Wert durchlaufen, dann andere Zeichenkettenschlüssel in aufsteigender chronologischer Reihenfolge der Eigenschaftenerstellung.

Der `variable` Teil von `for...in` akzeptiert alles, was vor dem `=` Operator stehen kann. Sie können {{jsxref("Statements/const", "const")}} verwenden, um die Variable zu deklarieren, solange sie im Schleifenrumpf nicht neu zugewiesen wird (sie kann zwischen Iterationen wechseln, weil dies zwei separate Variablen sind). Andernfalls können Sie {{jsxref("Statements/let", "let")}} verwenden. Sie können [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwenden, um mehrere lokale Variablen zuzuweisen, oder einen Eigenschafts-Accesser wie `for (x.y in iterable)`, um den Wert einer Objekteigenschaft zuzuweisen. Jedoch sind {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}} nicht erlaubt, da die Variable immer eine Zeichenkette oder ein Symbol ist, während diese Deklarationen ein löschbares Objekt erfordern.

Eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) erlaubt `var`-Deklarationen der Schleifenvariablen mit einem Initialisator. Dies wirft einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) im strengen Modus und wird im nicht-strengen Modus ignoriert.

### Gelöschte, hinzugefügte oder geänderte Eigenschaften

`for...in` besucht Eigenschaften in folgender Weise:

1. Es erhält zuerst alle eigenen Zeichenkettenschlüssel des aktuellen Objekts, ähnlich wie {{jsxref("Object.getOwnPropertyNames()")}}.
2. Für jeden Schlüssel, wenn keine Zeichenkette mit demselben Wert jemals besucht wurde, wird der [Eigenschaftsdeskriptor abgerufen](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor) und die Eigenschaft wird nur besucht, wenn sie aufzählbar ist. Diese Eigenschaftenzeichenkette wird jedoch als besucht markiert, selbst wenn sie nicht aufzählbar ist.
3. Dann wird das aktuelle Objekt durch sein Prototyp ersetzt und der Vorgang wird wiederholt.

Das bedeutet:

- Jede während der Iteration zum aktuell besuchten Objekt hinzugefügte Eigenschaft wird nicht besucht, da alle eigenen Eigenschaften des aktuellen Objekts vorher gespeichert wurden.
- Wenn mehrere Objekte in der Prototypenkette eine Eigenschaft mit demselben Namen haben, wird nur die erste berücksichtigt, und sie wird nur besucht, wenn sie aufzählbar ist. Wenn sie nicht aufzählbar ist, werden keine weiteren Eigenschaften mit demselben Namen weiter oben in der Prototypenkette besucht, auch wenn sie aufzählbar sind.

Im Allgemeinen ist es am besten, während der Iteration keine Eigenschaften des Objekts hinzuzufügen, zu ändern oder zu entfernen, außer der gerade besuchten Eigenschaft. Die Spezifikation erlaubt es explizit, dass die Implementierung dem Algorithmus in einem der folgenden Fälle nicht folgt:

- Die Prototypenkette des Objekts wird während der Iteration geändert.
- Eine Eigenschaft wird während der Iteration aus dem Objekt oder seiner Prototypenkette entfernt.
- Eine Eigenschaft wird während der Iteration in die Prototypenkette des Objekts hinzugefügt.
- Die Aufzählbarkeit einer Eigenschaft wird während der Iteration geändert.

In diesen Fällen können sich die Implementierungen anders verhalten, als Sie es erwarten, oder sogar voneinander abweichen.

### Array-Iteration und for...in

Array-Indizes sind einfach aufzählbare Eigenschaften mit ganzzahligen Namen und ansonsten identisch mit allgemeinen Objekteigenschaften. Die `for...in` Schleife wird alle ganzzahligen Schlüssel in streng aufsteigender Reihenfolge vor anderen Schlüsseln durchlaufen, wodurch das Verhalten von `for...in` der normalen Array-Iteration nahe kommt. However, die `for...in` Schleife gibt alle aufzählbaren Eigenschaften zurück, einschließlich derjenigen mit nicht-ganzzahligen Namen und der geerbten Eigenschaften. Im Gegensatz zu `for...of` verwendet `for...in` die Eigenschaftsaufzählung statt des Array-Iterators. In [dünnbesetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) wird `for...of` die leeren Plätze besuchen, `for...in` jedoch nicht.

Es ist besser, eine {{jsxref("Statements/for", "for")}} Schleife mit einem numerischen Index, {{jsxref("Array.prototype.forEach()")}}, oder die {{jsxref("Statements/for...of", "for...of")}} Schleife zu verwenden, da sie den Index als Zahl anstelle einer Zeichenkette zurückgeben und nicht-Index-Eigenschaften vermeiden.

### Iteration nur über eigene Eigenschaften

Wenn Sie nur die zum Objekt selbst gehörenden Eigenschaften, nicht aber die seiner Prototypen berücksichtigen möchten, können Sie eine der folgenden Techniken verwenden:

- {{jsxref("Object.keys()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}

`Object.keys` gibt eine Liste der aufzählbaren eigenen Zeichenketteneigenschaften zurück, während `Object.getOwnPropertyNames` auch nicht-auflistbare Eigenschaften enthält.

Viele JavaScript-Stilhandbücher und Linter empfehlen, die Verwendung von `for...in` zu vermeiden, da es über die gesamte Prototypenkette iteriert, was selten gewünscht ist, und mit der weiter verbreiteten `for...of` Schleife verwechselt werden könnte. `for...in` wird am praktischsten für Debugging-Zwecke verwendet, da es eine einfache Möglichkeit bietet, die Eigenschaften eines Objekts zu überprüfen (indem sie in die Konsole ausgegeben werden oder auf andere Weise). In Situationen, in denen Objekte als Ad-hoc-Schlüssel-Wert-Paare verwendet werden, können Sie mit `for...in` überprüfen, ob einer dieser Schlüssel einen bestimmten Wert hält.

## Beispiele

### Verwendung von for...in

Die folgende `for...in` Schleife iteriert über alle aufzählbaren Eigenschaften eines Objekts ohne Symbole und protokolliert eine Zeichenkette der Eigenschaftsnamen und ihrer Werte.

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

Die folgende Funktion illustriert die Verwendung von {{jsxref("Object.hasOwn()")}}: die geerbten Eigenschaften werden nicht angezeigt.

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
> Sie sollten diesen Code nicht selbst schreiben. Er ist hier nur enthalten, um das Verhalten von `for...in` in einigen Grenzfällen zu veranschaulichen.

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

Darüber hinaus berücksichtigen Sie die folgenden Fälle, in denen das Verhalten nicht spezifiziert ist und die Implementierungen dazu neigen, von dem spezifizierten Algorithmus abzuweichen:

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
- [Aufzählbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Array.prototype.forEach()")}}
