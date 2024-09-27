---
title: String.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
l10n:
  sourceCommit: c607c483fe079c61de5e32fba1a6cce61896e97d
---

{{JSRef}}

Die **`lastIndexOf()`**-Methode von {{jsxref("String")}}-Werten durchsucht diesen String und gibt den Index des letzten Vorkommens des angegebenen Teilstrings zurück. Sie nimmt eine optionale Startposition und gibt das letzte Vorkommen des angegebenen Teilstrings an einem Index zurück, der kleiner oder gleich der angegebenen Zahl ist.

{{EmbedInteractiveExample("pages/js/string-lastindexof.html")}}

## Syntax

```js-nolint
lastIndexOf(searchString)
lastIndexOf(searchString, position)
```

### Parameter

- `searchString`

  - : Teilstring, nach dem gesucht wird. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher bewirkt das Weglassen oder Übergeben von `undefined`, dass `lastIndexOf()` nach dem String `"undefined"` sucht, was selten das gewünschte Ergebnis ist.

- `position` {{optional_inline}}

  - : Die Methode gibt den Index des letzten Vorkommens des angegebenen Teilstrings an einer Position zurück, die kleiner oder gleich `position` ist, wobei der Standardwert `+Infinity` ist. Wenn `position` größer als die Länge des aufrufenden Strings ist, durchsucht die Methode den gesamten String. Wenn `position` kleiner als `0` ist, verhält sie sich wie `0` — das heißt, die Methode sucht nur nach dem angegebenen Teilstring an Index `0`.

    - `'hello world hello'.lastIndexOf('world', 4)` gibt `-1` zurück — denn obwohl der Teilstring `world` an Index `6` vorkommt, ist diese Position nicht kleiner oder gleich `4`.

    - `'hello world hello'.lastIndexOf('hello', 99)` gibt `12` zurück — weil das letzte Vorkommen von `hello` an einer Position kleiner oder gleich `99` an Position `12` ist.

    - `'hello world hello'.lastIndexOf('hello', 0)` und `'hello world hello'.lastIndexOf('hello', -5)` geben beide `0` zurück — weil beide dazu führen, dass die Methode nur nach `hello` an Index `0` sucht.

### Rückgabewert

Der Index des letzten Vorkommens von `searchString`, das gefunden wurde, oder `-1`, wenn nicht gefunden.

## Beschreibung

Strings sind nullindexiert: Der Index des ersten Zeichens eines Strings ist `0`, und der Index des letzten Zeichens eines Strings ist die Länge des Strings minus 1.

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

Die `lastIndexOf()`-Methode beachtet die Groß- und Kleinschreibung. Zum Beispiel gibt der folgende Ausdruck `-1` zurück:

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
