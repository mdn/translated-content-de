---
title: String.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/indexOf
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`indexOf()`**-Methode von {{jsxref("String")}}-Objekten durchsucht diesen String und gibt den Index des ersten Vorkommens der angegebenen Teilzeichenfolge zurück. Sie akzeptiert eine optionale Startposition und gibt das erste Vorkommen der angegebenen Teilzeichenfolge an einem Index zurück, der größer oder gleich der angegebenen Zahl ist.

{{InteractiveExample("JavaScript Demo: String.indexOf()", "taller")}}

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

  - : Die zu suchende Teilzeichenfolge. Alle Werte werden in [Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `indexOf()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

- `position` {{optional_inline}}

  - : Die Methode gibt den Index des ersten Vorkommens der angegebenen Teilzeichenfolge an einer Position größer oder gleich `position` zurück, die standardmäßig auf `0` gesetzt ist. Wenn `position` größer als die Länge des aufrufenden Strings ist, durchsucht die Methode den String nicht. Wenn `position` kleiner als null ist, verhält sich die Methode so, als ob `position` gleich `0` wäre.

    - `'hello world hello'.indexOf('o', -5)` gibt `4` zurück — weil die Methode sich verhält, als wäre das zweite Argument `0`, und das erste Vorkommen von `o` an einer Position größer oder gleich `0` bei Position `4` liegt.

    - `'hello world hello'.indexOf('world', 12)` gibt `-1` zurück — weil, obwohl die Teilzeichenfolge `world` bei Index `6` vorkommt, diese Position nicht größer oder gleich `12` ist.

    - `'hello world hello'.indexOf('o', 99)` gibt `-1` zurück — weil `99` größer als die Länge von `hello world hello` ist, was dazu führt, dass die Methode den String nicht durchsucht.

### Rückgabewert

Der Index des ersten Vorkommens von `searchString`, oder `-1`, wenn nichts gefunden wurde.

#### Rückgabewert bei Verwendung einer leeren Suchzeichenfolge

Die Suche nach einer leeren Suchzeichenfolge liefert seltsame Ergebnisse. Ohne ein zweites Argument oder mit einem zweiten Argument, dessen Wert kleiner ist als die Länge des aufrufenden Strings, ist der Rückgabewert gleich dem Wert des zweiten Arguments:

```js
"hello world".indexOf(""); // returns 0
"hello world".indexOf("", 0); // returns 0
"hello world".indexOf("", 3); // returns 3
"hello world".indexOf("", 8); // returns 8
```

Mit einem zweiten Argument, dessen Wert größer oder gleich der Länge des Strings ist, ist der Rückgabewert die Länge des Strings:

```js
"hello world".indexOf("", 11); // returns 11
"hello world".indexOf("", 13); // returns 11
"hello world".indexOf("", 22); // returns 11
```

Im ersten Fall verhält sich die Methode so, als hätte sie eine leere Zeichenfolge direkt nach der in dem zweiten Argument angegebenen Position gefunden. Im zweiten Fall verhält sich die Methode so, als hätte sie eine leere Zeichenfolge am Ende des aufrufenden Strings gefunden.

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

Die `indexOf()`-Methode ist groß-/kleinschreibungssensitiv. Zum Beispiel liefert der folgende Ausdruck `-1` zurück:

```js
"Blue Whale".indexOf("blue"); // returns -1
```

### Überprüfen von Vorkommen

Wenn Sie überprüfen möchten, ob eine bestimmte Teilzeichenfolge in einem String vorkommt, ist die korrekte Methode zu testen, ob der Rückgabewert `-1` ist:

```js
"Blue Whale".indexOf("Blue") !== -1; // true; found 'Blue' in 'Blue Whale'
"Blue Whale".indexOf("Wale") !== -1; // false; no 'Wale' in 'Blue Whale'
```

## Beispiele

### Verwendung von indexOf()

Das folgende Beispiel verwendet `indexOf()`, um Teilzeichenfolgen im String `"Brave new world"` zu finden.

```js
const str = "Brave new world";

console.log(str.indexOf("w")); // 8
console.log(str.indexOf("new")); // 6
```

### indexOf() und Groß-/Kleinschreibung

Das folgende Beispiel definiert zwei String-Variablen.

Die Variablen enthalten denselben String, außer dass im zweiten String Großbuchstaben enthalten sind. Die erste [`console.log()`](/de/docs/Web/API/Console/log_static)-Methode zeigt `19` an. Weil jedoch die `indexOf()`-Methode groß-/kleinschreibungssensitiv ist, wird der String `"cheddar"` nicht in `myCapString` gefunden, daher zeigt die zweite `console.log()`-Methode `-1` an.

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
