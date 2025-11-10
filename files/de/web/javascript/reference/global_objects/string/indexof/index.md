---
title: String.prototype.indexOf()
short-title: indexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/indexOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`indexOf()`** Methode von {{jsxref("String")}} Werten durchsucht diese Zeichenfolge und gibt den Index des ersten Vorkommens des angegebenen Substrings zurück. Sie nimmt eine optionale Startposition entgegen und liefert das erste Vorkommen des angegebenen Substrings an einem Index, der größer oder gleich der angegebenen Zahl ist.

{{InteractiveExample("JavaScript Demo: String.prototype.indexOf()", "taller")}}

```js interactive-example
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
  `The index of the second "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1,
  )}`,
);
// Expected output: "The index of the second "dog" is 38"
```

## Syntax

```js-nolint
indexOf(searchString)
indexOf(searchString, position)
```

### Parameter

- `searchString`
  - : Substring, der gesucht werden soll. Alle Werte werden in [Zeichenfolgen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `indexOf()` nach der Zeichenfolge `"undefined"` sucht, was selten gewünscht ist.

- `position` {{optional_inline}}
  - : Die Methode gibt den Index des ersten Vorkommens des angegebenen Substrings an einer Position zurück, die größer oder gleich `position` ist, welche standardmäßig `0` ist. Wenn `position` größer als die Länge der aufrufenden Zeichenfolge ist, durchsucht die Methode die aufrufende Zeichenfolge überhaupt nicht. Wenn `position` kleiner als null ist, verhält sich die Methode so, als wäre `position` `0`.
    - `'hello world hello'.indexOf('o', -5)` gibt `4` zurück — da dies dazu führt, dass sich die Methode so verhält, als wäre das zweite Argument `0`, und das erste Vorkommen von `o` an einer Position größer oder gleich `0` an Position `4` ist.

    - `'hello world hello'.indexOf('world', 12)` gibt `-1` zurück — weil, obwohl es stimmt, dass der Substring `world` bei Index `6` vorkommt, diese Position nicht größer oder gleich `12` ist.

    - `'hello world hello'.indexOf('o', 99)` gibt `-1` zurück — weil `99` größer als die Länge von `hello world hello` ist, was dazu führt, dass die Methode die Zeichenfolge überhaupt nicht durchsucht.

### Rückgabewert

Der Index des ersten gefundenen Vorkommens von `searchString`, oder `-1`, wenn nicht gefunden.

#### Rückgabewert bei Verwendung eines leeren Suchstrings

Die Suche nach einem leeren Suchstring führt zu seltsamen Ergebnissen. Ohne zweites Argument oder mit einem zweiten Argument, dessen Wert kleiner als die Länge der aufrufenden Zeichenfolge ist, entspricht der Rückgabewert dem Wert des zweiten Arguments:

```js
"hello world".indexOf(""); // returns 0
"hello world".indexOf("", 0); // returns 0
"hello world".indexOf("", 3); // returns 3
"hello world".indexOf("", 8); // returns 8
```

Wenn jedoch das zweite Argument einen Wert hat, der größer oder gleich der Länge der Zeichenfolge ist, entspricht der Rückgabewert der Länge der Zeichenfolge:

```js
"hello world".indexOf("", 11); // returns 11
"hello world".indexOf("", 13); // returns 11
"hello world".indexOf("", 22); // returns 11
```

Im ersten Fall verhält sich die Methode, als hätte sie einen leeren String direkt nach der im zweiten Argument angegebenen Position gefunden. Im zweiten Fall verhält sich die Methode, als hätte sie einen leeren String am Ende der aufrufenden Zeichenfolge gefunden.

## Beschreibung

Zeichenfolgen sind nullbasiert: Der Index des ersten Zeichens einer Zeichenfolge ist `0`, und der Index des letzten Zeichens einer Zeichenfolge ist die Länge der Zeichenfolge minus 1.

```js
"Blue Whale".indexOf("Blue"); // returns  0
"Blue Whale".indexOf("Wale"); // returns -1
"Blue Whale".indexOf("Whale", 0); // returns  5
"Blue Whale".indexOf("Whale", 5); // returns  5
"Blue Whale".indexOf("Whale", 7); // returns -1
"Blue Whale".indexOf(""); // returns  0
"Blue Whale".indexOf("", 9); // returns  9
"Blue Whale".indexOf("", 10); // returns 10
"Blue Whale".indexOf("", 11); // returns 10
```

Die `indexOf()` Methode ist case-sensitive. Zum Beispiel gibt der folgende Ausdruck `-1` zurück:

```js
"Blue Whale".indexOf("blue"); // returns -1
```

### Überprüfen von Vorkommen

Um zu überprüfen, ob ein bestimmter Substring in einer Zeichenfolge vorkommt, sollte man richtig prüfen, ob der Rückgabewert `-1` ist:

```js
"Blue Whale".indexOf("Blue") !== -1; // true; found 'Blue' in 'Blue Whale'
"Blue Whale".indexOf("Wale") !== -1; // false; no 'Wale' in 'Blue Whale'
```

## Beispiele

### Verwendung von indexOf()

Das folgende Beispiel verwendet `indexOf()`, um Substrings in der Zeichenfolge `"Brave new world"` zu lokalisieren.

```js
const str = "Brave new world";

console.log(str.indexOf("w")); // 8
console.log(str.indexOf("new")); // 6
```

### indexOf() und Groß-/Kleinschreibung

Das folgende Beispiel definiert zwei String-Variablen.

Die Variablen enthalten denselben String, außer dass die zweite Zeichenfolge Großbuchstaben enthält. Die erste [`console.log()`](/de/docs/Web/API/console/log_static) Methode zeigt `19` an. Aber da die `indexOf()` Methode case-sensitive ist, wird der String `"cheddar"` in `myCapString` nicht gefunden, sodass die zweite `console.log()` Methode `-1` anzeigt.

```js
const myString = "brie, pepper jack, cheddar";
const myCapString = "Brie, Pepper Jack, Cheddar";

console.log(myString.indexOf("cheddar")); // 19
console.log(myCapString.indexOf("cheddar")); // -1
```

### Verwendung von indexOf() zur Zählung von Vorkommen eines Buchstabens in einer Zeichenfolge

Das folgende Beispiel setzt `count` auf die Anzahl der Vorkommen des Buchstabens `e` in der Zeichenfolge `str`:

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
