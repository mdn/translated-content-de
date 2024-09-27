---
title: String.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/indexOf
l10n:
  sourceCommit: c367939020b2cbd60da7bd56a14670659d5e9491
---

{{JSRef}}

Die **`indexOf()`**-Methode von {{jsxref("String")}}-Werten durchsucht diesen String und gibt den Index des ersten Auftretens des angegebenen Substrings zurück. Sie akzeptiert eine optionale Startposition und gibt das erste Auftreten des angegebenen Substrings bei einem Index größer oder gleich der angegebenen Zahl zurück.

{{EmbedInteractiveExample("pages/js/string-indexof.html", "taller")}}

## Syntax

```js-nolint
indexOf(searchString)
indexOf(searchString, position)
```

### Parameter

- `searchString`

  - : Unterzeichenkette, nach der gesucht werden soll. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), sodass das Weglassen oder Übergeben von `undefined` dazu führt, dass `indexOf()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

- `position` {{optional_inline}}

  - : Die Methode gibt den Index des ersten Auftretens der angegebenen Unterzeichenkette bei einer Position größer oder gleich `position` zurück, die standardmäßig `0` ist. Wenn `position` größer als die Länge des aufrufenden Strings ist, durchsucht die Methode den aufrufenden String überhaupt nicht. Wenn `position` kleiner als null ist, verhält sich die Methode, als wäre `position` `0`.

    - `'hello world hello'.indexOf('o', -5)` gibt `4` zurück — weil es die Methode dazu bringt, sich so zu verhalten, als wäre das zweite Argument `0`, und das erste Auftreten von `o` an einer Position größer oder gleich `0` ist an Position `4`.

    - `'hello world hello'.indexOf('world', 12)` gibt `-1` zurück — weil, obwohl es wahr ist, dass der Substring `world` an Index `6` vorkommt, diese Position nicht größer oder gleich `12` ist.

    - `'hello world hello'.indexOf('o', 99)` gibt `-1` zurück — weil `99` größer ist als die Länge von `hello world hello`, was dazu führt, dass die Methode den String überhaupt nicht durchsucht.

### Rückgabewert

Der Index des ersten Auftretens von `searchString` wird gefunden, oder `-1`, wenn nicht gefunden.

#### Rückgabewert bei Verwendung eines leeren Suchstrings

Die Suche nach einem leeren Suchstring erzeugt seltsame Ergebnisse. Ohne zweites Argument oder mit einem zweiten Argument, dessen Wert kleiner als die Länge des aufrufenden Strings ist, ist der Rückgabewert derselbe wie der Wert des zweiten Arguments:

```js
"hello world".indexOf(""); // returns 0
"hello world".indexOf("", 0); // returns 0
"hello world".indexOf("", 3); // returns 3
"hello world".indexOf("", 8); // returns 8
```

Jedoch, mit einem zweiten Argument, dessen Wert größer oder gleich der Länge des Strings ist, ist der Rückgabewert die Länge des Strings:

```js
"hello world".indexOf("", 11); // returns 11
"hello world".indexOf("", 13); // returns 11
"hello world".indexOf("", 22); // returns 11
```

Im ersten Fall verhält sich die Methode, als hätte sie einen leeren String direkt nach der im zweiten Argument angegebenen Position gefunden. Im zweiten Fall verhält sich die Methode, als hätte sie einen leeren String am Ende des aufrufenden Strings gefunden.

## Beschreibung

Strings sind nullbasiert indiziert: Der Index des ersten Zeichens eines Strings ist `0`, und der Index des letzten Zeichens eines Strings ist die Länge des Strings minus 1.

```js
"Blue Whale".indexOf("Blue"); // returns  0
"Blue Whale".indexOf("Blute"); // returns -1
"Blue Whale".indexOf("Whale", 0); // returns  5
"Blue Whale".indexOf("Whale", 5); // returns  5
"Blue Whale".indexOf("Whale", 7); // returns -1
"Blue Whale".indexOf(""); // returns  0
"Blue Whale".indexOf("", 9); // returns  9
"Blue Whale".indexOf("", 10); // returns 10
"Blue Whale".indexOf("", 11); // returns 10
```

Die `indexOf()`-Methode unterscheidet Groß- und Kleinschreibung. Zum Beispiel gibt der folgende Ausdruck `-1` zurück:

```js
"Blue Whale".indexOf("blue"); // returns -1
```

### Überprüfen von Vorkommen

Wenn überprüft werden soll, ob ein bestimmter Substring innerhalb eines Strings vorkommt, ist es korrekt, zu testen, ob der Rückgabewert `-1` ist:

```js
"Blue Whale".indexOf("Blue") !== -1; // true; found 'Blue' in 'Blue Whale'
"Blue Whale".indexOf("Bloe") !== -1; // false; no 'Bloe' in 'Blue Whale'
```

## Beispiele

### Verwendung von indexOf()

Das folgende Beispiel verwendet `indexOf()`, um Unterstrings im String `"Brave new world"` zu finden.

```js
const str = "Brave new world";

console.log(str.indexOf("w")); // 8
console.log(str.indexOf("new")); // 6
```

### indexOf() und Groß-/Kleinschreibung

Das folgende Beispiel definiert zwei String-Variablen.

Die Variablen enthalten denselben String, mit der Ausnahme, dass der zweite String Großbuchstaben enthält. Die erste [`console.log()`](/de/docs/Web/API/Console/log_static)-Methode zeigt `19` an. Aber weil die `indexOf()`-Methode die Groß- und Kleinschreibung beachtet, wird der String `"cheddar"` in `myCapString` nicht gefunden, sodass die zweite `console.log()`-Methode `-1` anzeigt.

```js
const myString = "brie, pepper jack, cheddar";
const myCapString = "Brie, Pepper Jack, Cheddar";

console.log(myString.indexOf("cheddar")); // 19
console.log(myCapString.indexOf("cheddar")); // -1
```

### Verwenden von indexOf(), um Vorkommen eines Buchstabens in einem String zu zählen

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
