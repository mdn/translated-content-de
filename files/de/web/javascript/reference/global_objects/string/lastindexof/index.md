---
title: String.prototype.lastIndexOf()
short-title: lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`lastIndexOf()`** Methode von {{jsxref("String")}} Werten durchsucht diese Zeichenkette und gibt den Index des letzten Vorkommens der angegebenen Teilzeichenkette zurück. Sie akzeptiert eine optionale Startposition und gibt das letzte Vorkommen der angegebenen Teilzeichenkette an einem Index kleiner oder gleich der angegebenen Zahl zurück.

{{InteractiveExample("JavaScript Demo: String.prototype.lastIndexOf()")}}

```js interactive-example
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = "dog";

console.log(
  `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
);
// Expected output: "Index of the last "dog" is 38"
```

## Syntax

```js-nolint
lastIndexOf(searchString)
lastIndexOf(searchString, position)
```

### Parameter

- `searchString`

  - : Die Teilzeichenkette, nach der gesucht wird. Alle Werte werden [in Zeichenketten umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `lastIndexOf()` nach der Zeichenkette `"undefined"` sucht, was selten gewünscht ist.

- `position` {{optional_inline}}

  - : Die Methode gibt den Index des letzten Vorkommens der angegebenen Teilzeichenkette an einer Position kleiner oder gleich `position` zurück, die standardmäßig `Infinity` ist. Wenn `position` größer als die Länge der aufrufenden Zeichenkette ist, durchsucht die Methode die gesamte Zeichenkette. Wenn `position` kleiner als `0` ist, verhält es sich wie `0` — das heißt, die Methode sucht nach der angegebenen Teilzeichenkette nur an Index `0`.

    - `'hello world hello'.lastIndexOf('world', 4)` gibt `-1` zurück — weil, obwohl die Teilzeichenkette `world` an Index `6` vorkommt, diese Position nicht kleiner oder gleich `4` ist.

    - `'hello world hello'.lastIndexOf('hello', 99)` gibt `12` zurück — weil das letzte Vorkommen von `hello` an einer Position kleiner oder gleich `99` bei Position `12` ist.

    - `'hello world hello'.lastIndexOf('hello', 0)` und `'hello world hello'.lastIndexOf('hello', -5)` geben beide `0` zurück — weil beide dazu führen, dass die Methode nur nach `hello` an Index `0` sucht.

### Rückgabewert

Der Index des letzten Vorkommens von `searchString`, oder `-1` wenn nicht gefunden.

## Beschreibung

Zeichenketten sind nullbasiert indexiert: Der Index des ersten Zeichens einer Zeichenkette ist `0`, und der Index des letzten Zeichens einer Zeichenkette ist die Länge der Zeichenkette minus 1.

```js
"canal".lastIndexOf("a"); // returns 3
"canal".lastIndexOf("a", 2); // returns 1
"canal".lastIndexOf("a", 0); // returns -1
"canal".lastIndexOf("x"); // returns -1
"canal".lastIndexOf("c", -5); // returns 0
"canal".lastIndexOf("c", 0); // returns 0
"canal".lastIndexOf(""); // returns 5
"canal".lastIndexOf("", 2); // returns 2
```

### Groß-/Kleinschreibung beachten

Die `lastIndexOf()` Methode ist groß-/kleinschreibungssensitiv. Zum Beispiel gibt der folgende Ausdruck `-1` zurück:

```js
"Blue Whale, Killer Whale".lastIndexOf("blue"); // returns -1
```

## Beispiele

### Verwendung von indexOf() und lastIndexOf()

Das folgende Beispiel verwendet {{jsxref("String/indexOf", "indexOf()")}} und `lastIndexOf()`, um Werte in der Zeichenkette `"Brave, Brave New World"` zu lokalisieren.

```js
const anyString = "Brave, Brave New World";

console.log(anyString.indexOf("Brave")); // 0
console.log(anyString.lastIndexOf("Brave")); // 7
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
