---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
l10n:
  sourceCommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jsSidebar("Statements")}}

Die **`for...in`** Anweisung iteriert über alle [zählbaren String-Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) eines Objekts (Eigenschaften, die durch [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) gekennzeichnet sind, werden ignoriert), einschließlich geerbter zählbarer Eigenschaften.

{{EmbedInteractiveExample("pages/js/statement-forin.html")}}

## Syntax

```js-nolint
for (variable in object)
  statement
```

### Parameter

- `variable`
  - : Empfängt einen String-Eigenschaftsnamen bei jeder Iteration. Kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein oder ein [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z. B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungszuweisungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)). Variablen, die mit `var` deklariert werden, sind nicht lokal zur Schleife, d.h. sie befinden sich im selben Gültigkeitsbereich wie die `for...in` Schleife.
- `object`
  - : Objekt, dessen nicht-symbolische zählbare Eigenschaften durchlaufen werden.
- `statement`
  - : Eine Anweisung, die bei jeder Iteration ausgeführt wird. Kann auf `variable` verweisen. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.

## Beschreibung

Die Schleife iteriert über alle zählbaren Eigenschaften des Objekts selbst und die, die das Objekt von seiner Prototypenkette erbt (Eigenschaften näherer Prototypen haben Vorrang vor denen von Prototypen, die weiter vom Objekt in seiner Prototypenkette entfernt sind).

Wie bei anderen Schleifenanweisungen können Sie in `statement` [Steuerflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und geht zur nächsten Iteration der Schleife.

Eine `for...in` Schleife iteriert nur über zählbare, nicht-symbolische Eigenschaften. Objekte, die aus eingebauten Konstruktoren wie `Array` und `Object` erstellt wurden, haben geerbte nicht-zählbare Eigenschaften von `Array.prototype` und `Object.prototype`, wie die {{jsxref("Array")}}'s {{jsxref("Array/indexOf", "indexOf()")}} Methode oder die {{jsxref("Object")}}'s {{jsxref("Object/toString", "toString()")}} Methode, die in der `for...in` Schleife nicht besucht werden.

Die Traversierungsreihenfolge ist gemäß der modernen ECMAScript-Spezifikation gut definiert und konsistent über Implementierungen hinweg. Innerhalb jeder Komponente der Prototypenkette werden alle nicht-negativen ganzzahligen Schlüssel (die als Array-Indizes dienen können) zuerst in aufsteigender Reihenfolge nach Wert durchlaufen, dann andere String-Schlüssel in aufsteigender chronologischer Reihenfolge der Eigenschaftserstellung.

Der `variable` Teil von `for...in` akzeptiert alles, was vor dem `=` Operator stehen kann. Sie können {{jsxref("Statements/const", "const")}} verwenden, um die Variable zu deklarieren, solange sie nicht innerhalb des Schleifenrumpfs neu zugewiesen wird (sie kann zwischen den Iterationen geändert werden, da dies zwei separate Variablen sind). Andernfalls können Sie {{jsxref("Statements/let", "let")}} verwenden. Sie können [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) nutzen, um mehrere lokale Variablen zuzuweisen oder einen Eigenschaftszugriff wie `for (x.y in iterable)` verwenden, um den Wert einer Objekteigenschaft zuzuweisen.

Ein [veralteter Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) erlaubt `var` Deklarationen der Schleifenvariablen mit einem Initialisierer. Dies wirft einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) im Strikten Modus und wird im Nicht-strikten Modus ignoriert.

### Gelöschte, hinzugefügte oder geänderte Eigenschaften

`for...in` besucht Eigenschaftsschlüssel in folgender Weise:

1. Es werden zuerst alle eigenen String-Schlüssel des aktuellen Objekts erfasst, ähnlich wie bei {{jsxref("Object.getOwnPropertyNames()")}}.
2. Für jeden Schlüssel, wenn noch nie ein String mit demselben Wert besucht wurde, wird der [Eigenschaftsdeskriptor abgerufen](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor) und die Eigenschaft wird nur besucht, wenn sie zählbar ist. Dennoch wird dieser Eigenschaftsstring als besucht markiert, selbst wenn er nicht zählbar ist.
3. Dann wird das aktuelle Objekt durch sein Prototyp ersetzt, und der Prozess wird wiederholt.

Dies bedeutet:

- Jede Eigenschaft, die während der Iteration dem aktuell besuchten Objekt hinzugefügt wird, wird nicht besucht, da alle eigenen Eigenschaften des aktuellen Objekts im Voraus gespeichert wurden.
- Wenn mehrere Objekte in der Prototypenkette eine Eigenschaft mit demselben Namen haben, wird nur die erste berücksichtigt, und sie wird nur besucht, wenn sie zählbar ist. Ist sie nicht zählbar, werden keine anderen Eigenschaften mit demselben Namen weiter oben in der Prototypenkette besucht, selbst wenn sie zählbar sind.

Im Allgemeinen ist es am besten, während der Iteration keine Eigenschaften hinzuzufügen, zu ändern oder zu entfernen, außer der gerade besuchten Eigenschaft. Die Spezifikation erlaubt ausdrücklich, dass die Implementierung den obigen Algorithmus nicht in einem der folgenden Fälle befolgt:

- Die Prototypenkette des Objekts wird während der Iteration geändert.
- Eine Eigenschaft wird während der Iteration aus dem Objekt oder seiner Prototypenkette gelöscht.
- Eine Eigenschaft wird während der Iteration zur Prototypenkette des Objekts hinzugefügt.
- Die Zählbarkeit einer Eigenschaft wird während der Iteration geändert.

In diesen Fällen kann sich das Verhalten der Implementierungen von Ihren Erwartungen unterscheiden oder sogar von einander abweichen.

### Array-Iteration und for...in

Array-Indizes sind einfach zählbare Eigenschaften mit ganzzahligen Namen und sind ansonsten identisch zu allgemeinen Objekteigenschaften. Die `for...in` Schleife durchläuft alle ganzzahligen Schlüssel, bevor sie andere Schlüssel durchläuft, und das in streng aufsteigender Reihenfolge, wodurch das Verhalten von `for...in` dem normalen Array-Iteration nahekommt. Allerdings gibt die `for...in` Schleife alle zählbaren Eigenschaften zurück, einschließlich derer mit nicht-ganzzahligen Namen und der vererbten. Im Gegensatz zu `for...of` verwendet `for...in` die Eigenschaftsauflistung anstelle des Arrays-Iterators. In [sparsamen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) wird `for...of` die leeren Plätze besuchen, aber `for...in` wird dies nicht tun.

Es ist besser, eine {{jsxref("Statements/for", "for")}} Schleife mit einem numerischen Index, {{jsxref("Array.prototype.forEach()")}}, oder die {{jsxref("Statements/for...of", "for...of")}} Schleife zu verwenden, da diese den Index als Zahl und nicht als String zurückgeben und auch nicht-Index-Eigenschaften vermeiden.

### Iteration nur über eigene Eigenschaften

Wenn Sie nur die Eigenschaften des Objekts selbst betrachten wollen und nicht dessen Prototypen, können Sie eine der folgenden Techniken anwenden:

- {{jsxref("Object.keys()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}

`Object.keys` gibt eine Liste der zählbaren eigenen String-Eigenschaften zurück, während `Object.getOwnPropertyNames` auch nicht-zählbare enthält.

Viele JavaScript-Stilrichtlinien und Linter raten von der Verwendung von `for...in` ab, da es über die gesamte Prototypenkette iteriert, was selten das ist, was man möchte, und Verwechslungen mit der allgemeineren Schleife `for...of` verursachen kann. `for...in` wird am praktischsten für Debugging-Zwecke verwendet, da es eine einfache Möglichkeit bietet, die Eigenschaften eines Objekts zu überprüfen (indem es in die Konsole ausgegeben wird oder anderweitig). In Situationen, in denen Objekte als Ad-hoc-Schlüssel-Werte-Paare verwendet werden, erlaubt `for...in` zu überprüfen, ob einer dieser Schlüssel einen bestimmten Wert enthält.

## Beispiele

### Verwendung von for...in

Die untenstehende `for...in` Schleife iteriert über alle zählbaren, nicht-symbolischen Eigenschaften des Objekts und protokolliert eine Zeichenfolge der Eigenschaftsnamen und ihrer Werte.

```js
const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Ausgabe:
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

// Ausgabe:
// "obj.color = red"
```

### Gleichzeitige Modifikation

> [!WARNING]
> Sie sollten keinen solchen Code selbst schreiben. Er ist hier nur enthalten, um das Verhalten von `for...in` in einigen Grenzfällen zu veranschaulichen.

Eigenschaften, die während der Iteration zum aktuellen Objekt hinzugefügt werden, werden nie besucht:

```js
const obj = { a: 1, b: 2 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  obj.c = 3;
}

// Ausgabe:
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

// Ausgabe:
// obj.a = 2

Object.defineProperty(obj, "a", { enumerable: false });

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
// Gibt nichts aus, da die erste besuchte "a" Eigenschaft nicht zählbar ist.
```

Berücksichtigen Sie außerdem die folgenden Fälle, in denen das Verhalten nicht spezifiziert ist und Implementierungen dazu neigen, vom spezifizierten Algorithmus abzuweichen:

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

// Löschen einer Eigenschaft, bevor sie besucht wird
for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  delete obj.c;
}

const obj2 = { a: 1, b: 2, c: 3 };

// Löschen einer Eigenschaft, nachdem sie besucht wurde
for (const prop in obj2) {
  console.log(`obj2.${prop} = ${obj2[prop]}`);
  delete obj2.a;
}
```

Zählbare Eigenschaften, die während der Iteration zum Prototyp hinzugefügt werden:

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
- [Zählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Array.prototype.forEach()")}}
