---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
l10n:
  sourceCommit: 439a8c053d3b2d4f3af60c06f567418eb8fc2f9a
---

Die **`for...in`**-Anweisung durchläuft alle [aufzählbaren String-Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) eines Objekts (Eigenschaften mit [Symbolen](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) als Schlüssel werden ignoriert), einschließlich geerbter aufzählbarer Eigenschaften.

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
  - : Erhält bei jedem Durchlauf einen String-Eigenschaftsnamen. Dies kann entweder eine Deklaration mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) sein oder ein Ziel für eine [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment) (z. B. eine zuvor deklarierte Variable, eine Objekteigenschaft oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)). Mit `var` deklarierte Variablen sind nicht auf die Schleife beschränkt, d.h. sie befinden sich im selben Gültigkeitsbereich wie die `for...in`-Schleife.
- `object`
  - : Das Objekt, dessen aufzählbare Eigenschaften ohne Symbol-Schlüssel durchlaufen werden.
- `statement`
  - : Eine Anweisung, die bei jedem Durchlauf ausgeführt wird. Sie kann auf `variable` verweisen. Mit einer [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) können Sie mehrere Anweisungen ausführen.

## Beschreibung

Die Schleife durchläuft alle aufzählbaren Eigenschaften des Objekts selbst sowie diejenigen, die es über seine Prototypenkette erbt. Dabei haben Eigenschaften näher gelegener Prototypen Vorrang vor Eigenschaften von Prototypen, die in der Prototypenkette weiter vom Objekt entfernt sind.

Wie bei anderen Schleifen können Sie innerhalb von `statement` [Anweisungen zur Steuerung des Programmflusses](/de/docs/Web/JavaScript/Reference/Statements#control_flow) verwenden:

- {{jsxref("Statements/break", "break")}} beendet die Ausführung von `statement` und setzt die Ausführung bei der ersten Anweisung nach der Schleife fort.
- {{jsxref("Statements/continue", "continue")}} beendet die Ausführung von `statement` und setzt die Schleife mit dem nächsten Durchlauf fort.

Eine `for...in`-Schleife durchläuft nur aufzählbare Eigenschaften ohne Symbol-Schlüssel. Objekte, die mit integrierten Konstruktoren wie `Array` und `Object` erstellt wurden, erben nicht aufzählbare Eigenschaften von `Array.prototype` und `Object.prototype`. Dazu gehören beispielsweise die Methode {{jsxref("Array/indexOf", "indexOf()")}} von {{jsxref("Array")}} und die Methode {{jsxref("Object/toString", "toString()")}} von {{jsxref("Object")}}. Diese Eigenschaften werden von der `for...in`-Schleife nicht durchlaufen.

Die Reihenfolge des Durchlaufens ist nach der modernen ECMAScript-Spezifikation klar definiert und über Implementierungen hinweg einheitlich. Innerhalb jeder Ebene der Prototypenkette werden zuerst alle nicht negativen ganzzahligen Schlüssel (die als Array-Indizes verwendet werden können) in aufsteigender numerischer Reihenfolge durchlaufen. Danach folgen die übrigen String-Schlüssel in der Reihenfolge, in der die Eigenschaften erstellt wurden.

Der `variable`-Teil von `for...in` akzeptiert alles, was vor dem Operator `=` stehen kann. Sie können die Variable mit {{jsxref("Statements/const", "const")}} deklarieren, solange ihr innerhalb des Schleifenrumpfs kein neuer Wert zugewiesen wird. Zwischen den Durchläufen kann sich ihr Wert ändern, da es sich dabei jeweils um eine andere Variable handelt. Andernfalls können Sie {{jsxref("Statements/let", "let")}} verwenden. Sie können mit [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) mehreren lokalen Variablen Werte zuweisen oder mit einem Eigenschaftszugriff wie `for (x.y in iterable)` den Wert einer Objekteigenschaft zuweisen. {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}} sind jedoch nicht zulässig, da die Variable immer ein String ist, während diese Deklarationen ein Objekt erfordern, das Ressourcen freigeben kann.

Eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) erlaubt es, `var`-Deklarationen der Schleifenvariablen mit einem Initialisierungswert zu versehen. Im Strict Mode löst dies einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) aus. Außerhalb des Strict Mode wird der Initialisierungswert einmal ausgewertet und der Schleifenvariablen zugewiesen, bevor der Durchlauf beginnt.

### Gelöschte, hinzugefügte oder geänderte Eigenschaften

`for...in` besucht Eigenschaftsschlüssel auf folgende Weise:

1. Zunächst werden alle eigenen String-Schlüssel des aktuellen Objekts ermittelt, ähnlich wie bei {{jsxref("Object.getOwnPropertyNames()")}}.
2. Für jeden Schlüssel, dessen String-Wert noch nicht besucht wurde, wird der [Eigenschaftsdeskriptor abgerufen](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor). Die Eigenschaft wird nur besucht, wenn sie aufzählbar ist. Der Eigenschaftsname gilt jedoch auch dann als besucht, wenn die Eigenschaft nicht aufzählbar ist.
3. Anschließend wird das aktuelle Objekt durch seinen Prototyp ersetzt und der Vorgang wiederholt.

Das bedeutet:

- Eigenschaften, die während des Durchlaufens zum aktuell besuchten Objekt hinzugefügt werden, werden nicht besucht, da zuvor bereits alle eigenen Eigenschaften dieses Objekts erfasst wurden.
- Wenn mehrere Objekte in der Prototypenkette eine Eigenschaft mit demselben Namen haben, wird nur die erste berücksichtigt. Sie wird nur besucht, wenn sie aufzählbar ist. Ist sie nicht aufzählbar, werden gleichnamige Eigenschaften weiter oben in der Prototypenkette nicht besucht, selbst wenn sie aufzählbar sind.

Im Allgemeinen sollten Sie während des Durchlaufens keine Eigenschaften des Objekts hinzufügen, ändern oder entfernen – mit Ausnahme der gerade besuchten Eigenschaft. Die Spezifikation erlaubt Implementierungen ausdrücklich, in den folgenden Fällen vom oben beschriebenen Algorithmus abzuweichen:

- Die Prototypenkette des Objekts wird während des Durchlaufens geändert.
- Eine Eigenschaft wird während des Durchlaufens vom Objekt oder aus seiner Prototypenkette gelöscht.
- Während des Durchlaufens wird der Prototypenkette des Objekts eine Eigenschaft hinzugefügt.
- Die Aufzählbarkeit einer Eigenschaft wird während des Durchlaufens geändert.

In diesen Fällen können sich Implementierungen anders verhalten als erwartet oder sich sogar voneinander unterscheiden.

### Array-Iteration und for...in

Array-Indizes sind lediglich aufzählbare Eigenschaften mit ganzzahligen Namen und unterscheiden sich ansonsten nicht von anderen Objekteigenschaften. Die `for...in`-Schleife durchläuft alle ganzzahligen Schlüssel vor den übrigen Schlüsseln, und zwar in streng aufsteigender Reihenfolge. Dadurch ähnelt das Verhalten von `for...in` einer normalen Array-Iteration. Allerdings liefert die `for...in`-Schleife alle aufzählbaren Eigenschaften zurück, auch solche mit nicht ganzzahligen Namen und geerbte Eigenschaften. Anders als `for...of` verwendet `for...in` die Aufzählung von Eigenschaften statt des Iterators des Arrays. In [Arrays mit Lücken](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) besucht `for...of` die leeren Positionen, `for...in` hingegen nicht.

Verwenden Sie besser eine {{jsxref("Statements/for", "for")}}-Schleife mit einem numerischen Index, {{jsxref("Array.prototype.forEach()")}} oder eine {{jsxref("Statements/for...of", "for...of")}}-Schleife. Diese liefern den Index als Zahl statt als String und vermeiden außerdem Eigenschaften, die keine Indizes sind.

### Nur eigene Eigenschaften durchlaufen

Wenn Sie nur Eigenschaften berücksichtigen möchten, die direkt zum Objekt gehören, und nicht die seiner Prototypen, können Sie eine der folgenden Möglichkeiten verwenden:

- {{jsxref("Object.keys()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}

`Object.keys` liefert eine Liste der eigenen aufzählbaren String-Eigenschaften zurück, während `Object.getOwnPropertyNames` auch nicht aufzählbare Eigenschaften enthält.

Viele JavaScript-Styleguides und Linter raten von der Verwendung von `for...in` ab, da die Schleife die gesamte Prototypenkette durchläuft, was selten beabsichtigt ist. Außerdem kann sie mit der häufiger verwendeten `for...of`-Schleife verwechselt werden. `for...in` eignet sich vor allem zum Debuggen, da sich damit die Eigenschaften eines Objekts leicht überprüfen lassen, etwa durch eine Ausgabe in der Konsole. Wenn Objekte als einfache Schlüssel-Wert-Paare verwendet werden, können Sie mit `for...in` prüfen, ob einer der Schlüssel einen bestimmten Wert enthält.

## Beispiele

### for...in verwenden

Die folgende `for...in`-Schleife durchläuft alle aufzählbaren Eigenschaften des Objekts ohne Symbol-Schlüssel und gibt einen String mit den Eigenschaftsnamen und ihren Werten aus.

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

### Eigene Eigenschaften durchlaufen

Die folgende Funktion veranschaulicht die Verwendung von {{jsxref("Object.hasOwn()")}}: Geerbte Eigenschaften werden nicht angezeigt.

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

### Änderungen während des Durchlaufens

> [!WARNING]
> Sie sollten selbst keinen solchen Code schreiben. Er dient hier lediglich dazu, das Verhalten von `for...in` in einigen Sonderfällen zu veranschaulichen.

Eigenschaften, die während des Durchlaufens zum aktuellen Objekt hinzugefügt werden, werden nie besucht:

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

Verdeckte Eigenschaften werden nur einmal besucht:

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

Betrachten Sie außerdem die folgenden Fälle, in denen das Verhalten nicht festgelegt ist und Implementierungen dazu neigen, vom beschriebenen Algorithmus abzuweichen:

Ändern des Prototyps während des Durchlaufens:

```js
const obj = { a: 1, b: 2 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  Object.setPrototypeOf(obj, { c: 3 });
}
```

Löschen einer Eigenschaft während des Durchlaufens:

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

Hinzufügen aufzählbarer Eigenschaften zum Prototyp während des Durchlaufens:

```js
const proto = {};
const obj = { __proto__: proto, a: 1, b: 2 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  proto.c = 3;
}
```

Ändern der Aufzählbarkeit einer Eigenschaft während des Durchlaufens:

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
