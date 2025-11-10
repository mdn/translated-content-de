---
title: String.prototype.lastIndexOf()
short-title: lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
l10n:
  sourceCommit: b0426436f128938c9ee8e26dfa17f0a2bebdf70d
---

Die **`lastIndexOf()`** Methode von {{jsxref("String")}}-Werten durchsucht diesen String und gibt den Index des letzten Vorkommens des angegebenen Teilstrings zurück. Sie nimmt eine optionale Startposition an und gibt das letzte Vorkommen des angegebenen Teilstrings an einem Index zurück, der kleiner oder gleich der angegebenen Zahl ist.

{{InteractiveExample("JavaScript Demo: String.prototype.lastIndexOf()")}}

```js interactive-example
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = "dog";

console.log(
  `Index of the last "${searchTerm}" is ${paragraph.lastIndexOf(searchTerm)}`,
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
  - : Teilstring, nach dem gesucht werden soll. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), sodass das Weglassen oder Übergeben von `undefined` dazu führt, dass `lastIndexOf()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

- `position` {{optional_inline}}
  - : Die Methode gibt den Index des letzten Vorkommens des angegebenen Teilstrings an einer Position kleiner oder gleich `position` zurück, die standardmäßig auf `Infinity` gesetzt ist. Wenn `position` größer ist als die Länge des aufrufenden Strings, durchsucht die Methode den gesamten String. Wenn `position` kleiner als `0` ist, verhält sich die Methode wie bei `0` — das heißt, die Methode sucht nach dem angegebenen Teilstring nur an Index `0`.
    - `'hello world hello'.lastIndexOf('world', 4)` gibt `-1` zurück — da, obwohl der Teilstring `world` an Index `6` vorkommt, diese Position nicht kleiner oder gleich `4` ist.

    - `'hello world hello'.lastIndexOf('hello', 99)` gibt `12` zurück — da das letzte Vorkommen von `hello` an einer Position kleiner oder gleich `99` bei Position `12` ist.

    - `'hello world hello'.lastIndexOf('hello', 0)` und `'hello world hello'.lastIndexOf('hello', -5)` geben beide `0` zurück — da beide dazu führen, dass die Methode nur nach `hello` an Index `0` sucht.

### Rückgabewert

Der Index des letzten Vorkommens des gefundenen `searchString`, oder `-1`, wenn nicht gefunden.

## Beschreibung

Strings sind nullbasiert indiziert: Der Index des ersten Zeichens eines Strings ist `0`, und der Index des letzten Zeichens eines Strings ist die Länge des Strings minus 1.

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

### Groß- und Kleinschreibung

Die `lastIndexOf()` Methode beachtet die Groß- und Kleinschreibung. Zum Beispiel gibt der folgende Ausdruck `-1` zurück:

```js
"Blue Whale, Killer Whale".lastIndexOf("blue"); // returns -1
```

## Beispiele

### Verwendung von indexOf() und lastIndexOf()

Das folgende Beispiel verwendet {{jsxref("String/indexOf", "indexOf()")}} und `lastIndexOf()` um Werte im String `"Brave, Brave New World"` zu lokalisieren.

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
