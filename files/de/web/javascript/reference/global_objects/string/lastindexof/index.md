---
title: String.prototype.lastIndexOf()
short-title: lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die **`lastIndexOf()`** Methode von {{jsxref("String")}}-Werten durchsucht diesen String und gibt den Index des letzten Vorkommens des angegebenen Substrings zurück. Sie nimmt eine optionale Startposition und gibt das letzte Vorkommen des angegebenen Substrings an einem Index zurück, der kleiner oder gleich der angegebenen Zahl ist.

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

  - : Substring, nach dem gesucht werden soll. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), sodass das Weglassen oder Übergeben von `undefined` dazu führt, dass `lastIndexOf()` nach dem String `"undefined"` sucht, was selten das Gewünschte ist.

- `position` {{optional_inline}}

  - : Die Methode gibt den Index des letzten Vorkommens des angegebenen Substrings an einer Position kleiner oder gleich `position` zurück, die standardmäßig auf `Infinity` gesetzt ist. Wenn `position` größer als die Länge des aufrufenden Strings ist, durchsucht die Methode den gesamten String. Wenn `position` kleiner als `0` ist, ist das Verhalten dasselbe wie bei `0` — die Methode sucht das angegebene Substring nur bei Index `0`.

    - `'hello world hello'.lastIndexOf('world', 4)` gibt `-1` zurück — denn obwohl der Substring `world` bei Index `6` auftritt, ist diese Position nicht kleiner oder gleich `4`.

    - `'hello world hello'.lastIndexOf('hello', 99)` gibt `12` zurück — denn das letzte Vorkommen von `hello` an einer Position kleiner oder gleich `99` ist bei Position `12`.

    - `'hello world hello'.lastIndexOf('hello', 0)` und `'hello world hello'.lastIndexOf('hello', -5)` geben beide `0` zurück — denn beide bewirken, dass die Methode nur bei Index `0` nach `hello` sucht.

### Rückgabewert

Der Index des letzten Vorkommens von `searchString`, oder `-1`, wenn nicht gefunden.

## Beschreibung

Strings sind null-indiziert: Der Index des ersten Zeichens eines Strings ist `0`, und der Index des letzten Zeichens eines Strings entspricht der Länge des Strings minus 1.

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

### Groß-/Kleinschreibung

Die `lastIndexOf()` Methode ist groß-/kleinschreibungssensitiv. Zum Beispiel gibt der folgende
Ausdruck `-1` zurück:

```js
"Blue Whale, Killer Whale".lastIndexOf("blue"); // returns -1
```

## Beispiele

### Verwendung von indexOf() und lastIndexOf()

Das folgende Beispiel verwendet {{jsxref("String/indexOf", "indexOf()")}} und
`lastIndexOf()`, um Werte im String
`"Brave, Brave New World"` zu finden.

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
