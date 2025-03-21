---
title: String.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/indexOf
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`indexOf()`** Methode von {{jsxref("String")}} Werten durchsucht diesen String und gibt den Index des ersten Vorkommens des angegebenen Substrings zurück. Sie nimmt eine optionale Startposition und gibt das erste Vorkommen des angegebenen Substrings bei einem Index zurück, der größer oder gleich der angegebenen Zahl ist.

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

  - : Substring, nach dem gesucht werden soll. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `indexOf()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

- `position` {{optional_inline}}

  - : Die Methode gibt den Index des ersten Vorkommens des angegebenen Substrings an einer Position größer oder gleich `position` zurück, die standardmäßig `0` ist. Wenn `position` größer ist als die Länge des aufgerufenen Strings, durchsucht die Methode den String überhaupt nicht. Wenn `position` kleiner als null ist, verhält sich die Methode so, als wäre `position` `0`.

    - `'hello world hello'.indexOf('o', -5)` gibt `4` zurück — weil es die Methode dazu veranlasst, sich so zu verhalten, als wäre das zweite Argument `0`, und das erste Vorkommen von `o` an einer Position größer oder gleich `0` ist an Position `4`.

    - `'hello world hello'.indexOf('world', 12)` gibt `-1` zurück — weil, obwohl `world` an Index `6` vorkommt, diese Position nicht größer oder gleich `12` ist.

    - `'hello world hello'.indexOf('o', 99)` gibt `-1` zurück — weil `99` größer ist als die Länge von `hello world hello`, was dazu führt, dass die Methode den String überhaupt nicht durchsucht.

### Rückgabewert

Der Index des ersten Vorkommens von `searchString`, oder `-1`, wenn nicht gefunden.

#### Rückgabewert bei Verwendung eines leeren Suchstrings

Die Suche nach einem leeren Suchstring führt zu seltsamen Ergebnissen. Ohne zweites Argument oder mit einem zweiten Argument, dessen Wert kleiner ist als die Länge des aufgerufenen Strings, ist der Rückgabewert derselbe wie der Wert des zweiten Arguments:

```js
"hello world".indexOf(""); // returns 0
"hello world".indexOf("", 0); // returns 0
"hello world".indexOf("", 3); // returns 3
"hello world".indexOf("", 8); // returns 8
```

Wenn jedoch ein zweites Argument verwendet wird, dessen Wert größer oder gleich der Länge des Strings ist, ist der Rückgabewert die Länge des Strings:

```js
"hello world".indexOf("", 11); // returns 11
"hello world".indexOf("", 13); // returns 11
"hello world".indexOf("", 22); // returns 11
```

Im ersten Fall verhält sich die Methode so, als hätte sie einen leeren String unmittelbar nach der im zweiten Argument angegebenen Position gefunden. Im zweiten Fall verhält sich die Methode so, als hätte sie einen leeren String am Ende des aufgerufenen Strings gefunden.

## Beschreibung

Strings sind nullbasiert indiziert: Der Index des ersten Zeichens eines Strings ist `0`, und der Index des letzten Zeichens eines Strings ist die Länge des Strings minus 1.

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

Die `indexOf()` Methode ist groß-/kleinschreibungssensitiv. Zum Beispiel gibt der folgende Ausdruck `-1` zurück:

```js
"Blue Whale".indexOf("blue"); // returns -1
```

### Überprüfung von Vorkommen

Beim Überprüfen, ob ein bestimmter Substring in einem String vorkommt, ist die richtige Methode, zu prüfen, ob der Rückgabewert `-1` ist:

```js
"Blue Whale".indexOf("Blue") !== -1; // true; found 'Blue' in 'Blue Whale'
"Blue Whale".indexOf("Wale") !== -1; // false; no 'Wale' in 'Blue Whale'
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

Die Variablen enthalten denselben String, allerdings enthält der zweite String Großbuchstaben. Die erste [`console.log()`](/de/docs/Web/API/console/log_static) Methode zeigt `19` an. Da jedoch die `indexOf()` Methode groß-/kleinschreibungssensitiv ist, wird der String `"cheddar"` in `myCapString` nicht gefunden, also zeigt die zweite `console.log()` Methode `-1` an.

```js
const myString = "brie, pepper jack, cheddar";
const myCapString = "Brie, Pepper Jack, Cheddar";

console.log(myString.indexOf("cheddar")); // 19
console.log(myCapString.indexOf("cheddar")); // -1
```

### Verwendung von indexOf(), um Vorkommen eines Buchstabens in einem String zu zählen

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
