---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("Statements")}}

Die **`for...in`**-Anweisung iteriert über alle [zählbaren String-Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) eines Objekts (Eigenschaften, die durch [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) gekennzeichnet sind, werden ignoriert), einschließlich geerbter zählbarer Eigenschaften.

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
  - : Erhält bei jeder Iteration einen Eigenschaftsnamen als String. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein, oder ein [Zuordnungstarget](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z. B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)). Mit `var` deklarierte Variablen sind nicht lokal zur Schleife, d. h. sie befinden sich in demselben Geltungsbereich wie die `for...in`-Schleife.
- `object`
  - : Objekt, dessen nicht-symbolische zählbare Eigenschaften durchlaufen werden.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Darf `variable` referenzieren. Sie können eine [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Die Schleife wird alle zählbaren Eigenschaften des Objekts selbst sowie diejenigen, die das Objekt von seiner Prototypenkette erbt, durchlaufen (Eigenschaften näherer Prototypen haben Vorrang vor solchen Prototypen, die weiter von dem Objekt in seiner Prototypenkette entfernt sind).

Wie bei anderen Schleifenanweisungen können Sie innerhalb von `statement` [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und springt zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und geht zur nächsten Iteration der Schleife über.

Eine `for...in`-Schleife iteriert nur über zählbare, nicht-symbolische Eigenschaften. Objekte, die von eingebauten Konstruktoren wie `Array` und `Object` erstellt werden, haben nicht-zählbare, geerbte Eigenschaften von `Array.prototype` und `Object.prototype`, wie die {{jsxref("Array")}}-Methode {{jsxref("Array/indexOf", "indexOf()")}} oder die {{jsxref("Object")}}-Methode {{jsxref("Object/toString", "toString()")}}, die in der `for...in`-Schleife nicht besucht werden.

Die Reihenfolge der Durchlaufung ist gemäß der modernen ECMAScript-Spezifikation klar definiert und konsistent in allen Implementierungen. Innerhalb jeder Komponente der Prototypenkette werden alle nicht-negativen Integer-Schlüssel (die Array-Indizes sein können) zuerst in aufsteigender Reihenfolge nach Wert durchlaufen, gefolgt von anderen String-Schlüsseln in chronologisch aufsteigender Reihenfolge ihrer Erstellung.

Der `variable`-Teil von `for...in` akzeptiert alles, was vor dem `=`-Operator stehen kann. Sie können {{jsxref("Statements/const", "const")}} verwenden, um die Variable zu deklarieren, solange sie im Schleifenkörper nicht neu zugewiesen wird (sie kann zwischen Iterationen wechseln, da dies zwei separate Variablen sind). Andernfalls können Sie {{jsxref("Statements/let", "let")}} verwenden. Sie können [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwenden, um mehrere lokale Variablen zuzuweisen, oder einen Eigenschafts-Accessor wie `for (x.y in iterable)` verwenden, um den Wert einer Objekteigenschaft zuzuweisen.

Eine [Legacy-Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) erlaubt `var`-Deklarationen der Schleifenvariablen mit einem Initialisierer. Dies löst im strikten Modus einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) aus und wird im nicht-strikten Modus ignoriert.

### Gelöschte, hinzugefügte oder modifizierte Eigenschaften

`for...in` besucht Eigenschaftsschlüssel in der folgenden Weise:

1. Es erhält zunächst alle eigenen String-Schlüssel des aktuellen Objekts, ähnlich wie {{jsxref("Object.getOwnPropertyNames()")}}.
2. Für jeden Schlüssel, wenn kein String mit demselben Wert jemals besucht wurde, wird der [Eigenschaftsbeschreiber abgerufen](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor) und die Eigenschaft wird nur besucht, wenn sie zählbar ist. Dieser Eigenschaftsstring wird jedoch als besucht markiert, selbst wenn er nicht zählbar ist.
3. Dann wird das aktuelle Objekt mit seinem Prototyp ersetzt und der Prozess wird wiederholt.

Das bedeutet:

- Jede Eigenschaft, die dem aktuell besuchten Objekt während der Iteration hinzugefügt wird, wird nicht besucht, da alle eigenen Eigenschaften des aktuellen Objekts bereits im Voraus gespeichert wurden.
- Wenn mehrere Objekte in der Prototypenkette eine Eigenschaft mit demselben Namen haben, wird nur die erste berücksichtigt, und sie wird nur besucht, wenn sie zählbar ist. Wenn sie nicht zählbar ist, werden keine anderen Eigenschaften mit demselben Namen weiter oben in der Prototypenkette besucht, selbst wenn sie zählbar sind.

Im Allgemeinen ist es am besten, keine Eigenschaften hinzuzufügen, zu ändern oder zu entfernen, während man über das Objekt iteriert, außer der Eigenschaft, die gerade besucht wird. Die Spezifikation erlaubt explizit, dass die Implementierung dem Algorithmus in einem der folgenden Fälle nicht folgt:

- Die Prototypenkette des Objekts wird während der Iteration geändert.
- Eine Eigenschaft wird während der Iteration aus dem Objekt oder seiner Prototypenkette gelöscht.
- Eine Eigenschaft wird während der Iteration zur Prototypenkette des Objekts hinzugefügt.
- Die Zählbarkeit einer Eigenschaft wird während der Iteration geändert.

In diesen Fällen können Implementierungen anders als erwartet verhalten, oder sogar voneinander abweichen.

### Array-Iteration und for...in

Array-Indizes sind einfach zählbare Eigenschaften mit Integer-Namen und sonst identisch mit allgemeinen Objekteigenschaften. Die `for...in`-Schleife durchläuft alle Integer-Schlüssel, bevor andere Schlüssel durchlaufen werden, und dies in strikt aufsteigender Reihenfolge, was das Verhalten von `for...in` einer normalen Array-Iteration nahe bringt. Die `for...in`-Schleife gibt jedoch alle zählbaren Eigenschaften zurück, einschließlich solcher mit nicht-integer Namen und geerbter Eigenschaften. Im Gegensatz zu `for...of` verwendet `for...in` die Objekteigenschafts-Zählung anstelle des Iterators des Arrays. In [sparsamen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) besucht `for...of` die leeren Stellen, `for...in` jedoch nicht.

Es ist besser, eine {{jsxref("Statements/for", "for")}}-Schleife mit einem numerischen Index, {{jsxref("Array.prototype.forEach()")}}, oder die {{jsxref("Statements/for...of", "for...of")}}-Schleife zu verwenden, da diese den Index als Zahl anstelle eines Strings zurückgeben und zudem Nicht-Index-Eigenschaften vermeiden.

### Über eigene Eigenschaften iterieren

Wenn Sie nur Eigenschaften berücksichtigen möchten, die dem Objekt selbst zugeordnet sind, und nicht dessen Prototypen, können Sie eine der folgenden Techniken verwenden:

- {{jsxref("Object.keys()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}

`Object.keys` gibt eine Liste der zählbaren eigenen String-Eigenschaften zurück, während `Object.getOwnPropertyNames` auch nicht-zählbare enthält.

Viele JavaScript-Stilrichtlinien und Linter raten vom Gebrauch von `for...in` ab, da es über die gesamte Prototypenkette iteriert, was selten gewünscht ist, und es zu Verwirrungen mit der weiter verbreiteten `for...of`-Schleife kommen kann. `for...in` wird am praktischsten zu Debugging-Zwecken verwendet, da es eine einfache Möglichkeit bietet, die Eigenschaften eines Objekts zu überprüfen (durch Ausgabe auf die Konsole oder anders). In Situationen, in denen Objekte als Ad-hoc-Schlüssel-Wert-Paare verwendet werden, ermöglicht `for...in` zu überprüfen, ob einer dieser Schlüssel einen bestimmten Wert hält.

## Beispiele

### Benutzung von for...in

Die `for...in`-Schleife unten iteriert über alle zählbaren, nicht-symbolischen Eigenschaften des Objekts und protokolliert einen String der Eigenschaftsnamen und ihrer Werte.

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

### Über eigene Eigenschaften iterieren

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
> Sie sollten keinen Code wie diesen selbst schreiben. Er ist nur hier enthalten, um das Verhalten von `for...in` in einigen Randfällen zu veranschaulichen.

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

Zusätzlich betrachten Sie die folgenden Fälle, bei denen das Verhalten nicht spezifiziert ist, und Implementierungen dazu neigen, sich von dem angegebenen Algorithmus abzuweichen:

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
