---
title: String.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/indexOf
l10n:
  sourceCommit: c367939020b2cbd60da7bd56a14670659d5e9491
---

{{JSRef}}

Die **`indexOf()`**-Methode von {{jsxref("String")}}-Werten durchsucht diesen String und gibt den Index des ersten Vorkommens des angegebenen Substrings zurück. Sie nimmt eine optionale Startposition und gibt das erste Vorkommen des angegebenen Substrings an einem Index zurück, der größer oder gleich der angegebenen Zahl ist.

{{EmbedInteractiveExample("pages/js/string-indexof.html", "taller")}}

## Syntax

```js-nolint
indexOf(searchString)
indexOf(searchString, position)
```

### Parameter

- `searchString`

  - : Substring, nach dem gesucht werden soll. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), sodass das Weglassen oder Übergeben von `undefined` `indexOf()` dazu veranlasst, nach dem String `"undefined"` zu suchen, was selten gewünscht ist.

- `position` {{optional_inline}}

  - : Die Methode gibt den Index des ersten Vorkommens des angegebenen Substrings an einer Position zurück, die größer oder gleich `position` ist, wobei der Standardwert `0` ist. Wenn `position` größer als die Länge des aufrufenden Strings ist, durchsucht die Methode den aufrufenden String überhaupt nicht. Wenn `position` kleiner als null ist, verhält sich die Methode, als wäre `position` `0`.

    - `'hello world hello'.indexOf('o', -5)` gibt `4` zurück — weil dies die Methode dazu veranlasst, sich so zu verhalten, als wäre das zweite Argument `0`, und das erste Vorkommen von `o` an einer Position größer oder gleich `0` ist an Position `4`.

    - `'hello world hello'.indexOf('world', 12)` gibt `-1` zurück — weil, obwohl der Substring `world` bei Index `6` vorkommt, diese Position nicht größer oder gleich `12` ist.

    - `'hello world hello'.indexOf('o', 99)` gibt `-1` zurück — weil `99` größer ist als die Länge von `hello world hello`, was die Methode dazu veranlasst, den String überhaupt nicht zu durchsuchen.

### Rückgabewert

Der Index des ersten Vorkommens von `searchString` oder `-1`, wenn nicht gefunden.

#### Rückgabewert bei Verwendung eines leeren Suchstrings

Das Suchen nach einem leeren Suchstring führt zu seltsamen Ergebnissen. Ohne zweites Argument oder mit einem zweiten Argument, dessen Wert kleiner ist als die Länge des aufrufenden Strings, entspricht der Rückgabewert dem Wert des zweiten Arguments:

```js
"hello world".indexOf(""); // gibt 0 zurück
"hello world".indexOf("", 0); // gibt 0 zurück
"hello world".indexOf("", 3); // gibt 3 zurück
"hello world".indexOf("", 8); // gibt 8 zurück
```

Jedoch, bei einem zweiten Argument, dessen Wert größer oder gleich der Länge des Strings ist, ist der Rückgabewert die Länge des Strings:

```js
"hello world".indexOf("", 11); // gibt 11 zurück
"hello world".indexOf("", 13); // gibt 11 zurück
"hello world".indexOf("", 22); // gibt 11 zurück
```

Im ersten Fall verhält sich die Methode, als hätte sie einen leeren String direkt nach der im zweiten Argument angegebenen Position gefunden. Im zweiten Fall verhält sich die Methode, als hätte sie einen leeren String am Ende des aufrufenden Strings gefunden.

## Beschreibung

Strings sind nullbasiert indiziert: Der Index des ersten Zeichens eines Strings ist `0`, und der Index des letzten Zeichens eines Strings ist die Länge des Strings minus 1.

```js
"Blue Whale".indexOf("Blue"); // gibt  0 zurück
"Blue Whale".indexOf("Blute"); // gibt -1 zurück
"Blue Whale".indexOf("Whale", 0); // gibt  5 zurück
"Blue Whale".indexOf("Whale", 5); // gibt  5 zurück
"Blue Whale".indexOf("Whale", 7); // gibt -1 zurück
"Blue Whale".indexOf(""); // gibt  0 zurück
"Blue Whale".indexOf("", 9); // gibt  9 zurück
"Blue Whale".indexOf("", 10); // gibt 10 zurück
"Blue Whale".indexOf("", 11); // gibt 10 zurück
```

Die `indexOf()`-Methode ist groß-/kleinschreibungssensitiv. Zum Beispiel gibt der folgende Ausdruck `-1` zurück:

```js
"Blue Whale".indexOf("blue"); // gibt -1 zurück
```

### Überprüfen von Vorkommen

Wenn überprüft werden soll, ob ein bestimmter Substring in einem String vorkommt, ist die richtige Methode zu prüfen, ob der Rückgabewert `-1` ist:

```js
"Blue Whale".indexOf("Blue") !== -1; // true; 'Blue' wurde in 'Blue Whale' gefunden
"Blue Whale".indexOf("Bloe") !== -1; // false; 'Bloe' ist nicht in 'Blue Whale'
```

## Beispiele

### Verwendung von indexOf()

Das folgende Beispiel verwendet `indexOf()`, um Substrings im String `"Brave new world"` zu lokalisieren.

```js
const str = "Brave new world";

console.log(str.indexOf("w")); // 8
console.log(str.indexOf("new")); // 6
```

### indexOf() und Groß-/Kleinschreibung

Das folgende Beispiel definiert zwei String-Variablen.

Die Variablen enthalten denselben String, außer dass der zweite String Großbuchstaben enthält. Die erste {{domxref("console/log_static", "console.log()")}}-Methode zeigt `19` an. Da jedoch die `indexOf()`-Methode groß-/kleinschreibungssensitiv ist, wird der String `"cheddar"` nicht in `myCapString` gefunden, sodass die zweite `console.log() `-Methode `-1` anzeigt.

```js
const myString = "brie, pepper jack, cheddar";
const myCapString = "Brie, Pepper Jack, Cheddar";

console.log(myString.indexOf("cheddar")); // 19
console.log(myCapString.indexOf("cheddar")); // -1
```

### Verwendung von indexOf(), um die Vorkommen eines Buchstabens in einem String zu zählen

Das folgende Beispiel setzt `count` auf die Anzahl der Vorkommen des Buchstabens `e` im String `str`:

```js
const str = "To be, or not to be, that is the question.";
let count = 0;
let position = str.indexOf("e");

while (position !== -1) {
  count++;
  position = str.indexOf("e", position + 1);
}

console.log(count); // 4
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
