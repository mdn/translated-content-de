---
title: String.prototype.lastIndexOf()
short-title: lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`lastIndexOf()`**-Methode von {{jsxref("String")}}-Werten durchsucht diesen String und gibt den Index des letzten Vorkommens des angegebenen Teilstrings zurück. Sie nimmt eine optionale Startposition und gibt das letzte Vorkommen des angegebenen Teilstrings bei einem Index kleiner oder gleich der angegebenen Zahl zurück.

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
  - : Teilstring, nach dem gesucht werden soll. Alle Werte werden in [Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `lastIndexOf()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

- `position` {{optional_inline}}
  - : Die Methode gibt den Index des letzten Vorkommens des angegebenen Teilstrings an einer Position kleiner oder gleich `position` zurück, der Standardwert ist `Infinity`. Ist `position` größer als die Länge des aufgerufenen Strings, durchsucht die Methode den gesamten String. Ist `position` kleiner als `0`, verhält sie sich wie `0` — die Methode sucht also nur an Index `0` nach dem angegebenen Teilstring.
    - `'hello world hello'.lastIndexOf('world', 4)` gibt `-1` zurück — weil, obwohl der Teilstring `world` an Index `6` vorkommt, diese Position nicht kleiner oder gleich `4` ist.

    - `'hello world hello'.lastIndexOf('hello', 99)` gibt `12` zurück — weil das letzte Vorkommen von `hello` an einer Position kleiner oder gleich `99` an Position `12` ist.

    - `'hello world hello'.lastIndexOf('hello', 0)` und `'hello world hello'.lastIndexOf('hello', -5)` geben beide `0` zurück — weil beide die Methode dazu veranlassen, nur an Index `0` nach `hello` zu suchen.

### Rückgabewert

Der Index des letzten Vorkommens von `searchString`, oder `-1`, wenn es nicht gefunden wird.

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

Die `lastIndexOf()`-Methode ist groß- und kleinschreibungssensitiv. Zum Beispiel gibt der folgende Ausdruck `-1` zurück:

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
