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

  - : Teilstring, nach dem gesucht werden soll. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `lastIndexOf()` nach dem String `"undefined"` sucht, was selten erwünscht ist.

- `position` {{optional_inline}}

  - : Die Methode gibt den Index des letzten Vorkommens des angegebenen Teilstrings an einer Position zurück, die kleiner oder gleich `position` ist, wobei der Standardwert `+Infinity` ist. Wenn `position` größer ist als die Länge des aufrufenden Strings, durchsucht die Methode den gesamten String. Wenn `position` kleiner als `0` ist, ist das Verhalten das gleiche wie für `0` — das heißt, die Methode sucht nach dem angegebenen Teilstring nur an Index `0`.

    - `'hello world hello'.lastIndexOf('world', 4)` gibt `-1` zurück — weil, auch wenn der Teilstring `world` an Index `6` vorkommt, dieser Index nicht kleiner oder gleich `4` ist.

    - `'hello world hello'.lastIndexOf('hello', 99)` gibt `12` zurück — weil das letzte Vorkommen von `hello` an einer Position kleiner oder gleich `99` bei Position `12` ist.

    - `'hello world hello'.lastIndexOf('hello', 0)` und `'hello world hello'.lastIndexOf('hello', -5)` geben beide `0` zurück — weil beide dazu führen, dass die Methode nur bei Index `0` nach `hello` sucht.

### Rückgabewert

Der Index des letzten Vorkommens von `searchString`, der gefunden wurde, oder `-1`, wenn nicht gefunden.

## Beschreibung

Strings sind null-basiert indiziert: Der Index des ersten Zeichens eines Strings ist `0` und der Index des letzten Zeichens eines Strings ist die Länge des Strings minus 1.

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

Die `lastIndexOf()`-Methode ist groß-/kleinschreibungsempfindlich. Zum Beispiel gibt der folgende Ausdruck `-1` zurück:

```js
"Blue Whale, Killer Whale".lastIndexOf("blue"); // returns -1
```

## Beispiele

### Verwenden von indexOf() und lastIndexOf()

Das folgende Beispiel verwendet {{jsxref("String/indexOf", "indexOf()")}} und
`lastIndexOf()`, um Werte im String
`"Brave, Brave New World"` zu lokalisieren.

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
