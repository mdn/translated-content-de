---
title: String.prototype.substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
l10n:
  sourceCommit: 8166ab356cccb30af5e0ad912815d19100249e17
---

{{JSRef}}

Die **`substring()`** Methode von {{jsxref("String")}} Werten gibt den Teil dieses Strings von dem Startindex bis zu, aber ohne den Endindex, oder bis zum Ende des Strings zurück, wenn kein Endindex angegeben ist.

{{InteractiveExample("JavaScript Demo: String.prototype.substring()")}}

```js interactive-example
const str = "Mozilla";

console.log(str.substring(1, 3));
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"
```

## Syntax

```js-nolint
substring(indexStart)
substring(indexStart, indexEnd)
```

### Parameter

- `indexStart`
  - : Der Index des ersten Zeichens, das in die zurückgegebene Teilzeichenfolge aufgenommen werden soll.
- `indexEnd` {{optional_inline}}
  - : Der Index des ersten Zeichens, das von der zurückgegebenen Teilzeichenfolge ausgeschlossen werden soll.

### Rückgabewert

Ein neuer String, der den angegebenen Teil des gegebenen Strings enthält.

## Beschreibung

`substring()` extrahiert Zeichen von `indexStart` bis zu, aber nicht einschließlich `indexEnd`. Insbesondere:

- Wenn `indexEnd` weggelassen oder `undefined` ist, extrahiert `substring()` Zeichen bis zum Ende des Strings.
- Wenn `indexStart` gleich `indexEnd` ist, gibt `substring()` einen leeren String zurück.
- Wenn `indexStart` größer als `indexEnd` ist, ist die Wirkung von `substring()` so, als wären die beiden Argumente vertauscht; siehe Beispiel unten.

Jedem Argumentwert, der kleiner als `0` oder größer als `str.length` ist, wird behandelt, als ob es `0` bzw. `str.length` wäre.

Jedem Argumentwert, der {{jsxref("NaN")}} ist, wird behandelt, als ob es `0` wäre.

## Beispiele

### Verwendung von substring()

Das folgende Beispiel verwendet `substring()`, um Zeichen aus dem
String `"Mozilla"` anzuzeigen:

<!-- cSpell:ignore Mozill -->

```js
const anyString = "Mozilla";

console.log(anyString.substring(0, 1)); // "M"
console.log(anyString.substring(1, 0)); // "M"

console.log(anyString.substring(0, 6)); // "Mozill"

console.log(anyString.substring(4)); // "lla"
console.log(anyString.substring(4, 7)); // "lla"
console.log(anyString.substring(7, 4)); // "lla"

console.log(anyString.substring(0, 7)); // "Mozilla"
console.log(anyString.substring(0, 10)); // "Mozilla"
```

### Verwendung von substring() mit der length Eigenschaft

Das folgende Beispiel verwendet die Methode `substring()` und die
{{jsxref("String/length", "length")}} Eigenschaft, um die letzten Zeichen eines
bestimmten Strings zu extrahieren. Diese Methode kann einfacher zu merken sein, da Sie
die Start- und Endindizes nicht kennen müssen, wie in den obigen Beispielen.

<!-- cSpell:ignore illa zilla -->

```js
const text = "Mozilla";

// Takes 4 last characters of string
console.log(text.substring(text.length - 4)); // prints "illa"

// Takes 5 last characters of string
console.log(text.substring(text.length - 5)); // prints "zilla"
```

### Der Unterschied zwischen substring() und substr()

Es gibt subtile Unterschiede zwischen den Methoden `substring()` und
{{jsxref("String/substr", "substr()")}}, daher sollten Sie darauf achten, sie nicht zu
verwechseln.

- Die zwei Parameter von `substr()` sind `start` und `length`, während es bei `substring()` `start` und `end` sind.
- `substr()`'s `start` Index wird zum Ende des Strings umwickelt, wenn er negativ ist, während `substring()` ihn auf `0` beschränkt.
- Negative Längen bei `substr()` werden als Null behandelt, während `substring()` die beiden Indizes vertauscht, wenn `end` kleiner als `start` ist.

Außerdem wird `substr()` als ein _veraltetes Merkmal in ECMAScript_ betrachtet, daher sollte es nach Möglichkeit vermieden werden.

```js
const text = "Mozilla";
console.log(text.substring(2, 5)); // "zil"
console.log(text.substr(2, 3)); // "zil"
```

### Unterschiede zwischen substring() und slice()

Die Methoden `substring()` und {{jsxref("String/slice", "slice()")}} sind fast identisch, aber es gibt ein paar subtile Unterschiede zwischen den beiden, insbesondere in der Art und Weise, wie negative Argumente behandelt werden.

Die Methode `substring()` vertauscht ihre zwei Argumente, wenn
`indexStart` größer als `indexEnd` ist, was bedeutet, dass ein String
immer noch zurückgegeben wird. Die Methode {{jsxref("String/slice", "slice()")}}
gibt einen leeren String zurück, wenn dies der Fall ist.

```js
const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2)); // ""
```

Wenn entweder eines oder beide Argumente negativ oder `NaN` sind, behandelt die
Methode `substring()` sie so, als wären sie `0`.

```js
console.log(text.substring(-5, 2)); // "Mo"
console.log(text.substring(-5, -2)); // ""
```

`slice()` behandelt auch `NaN`-Argumente als `0`, aber wenn es negative Werte
erhält, zählt es rückwärts vom Ende des Strings, um die Indizes zu finden.

```js
console.log(text.slice(-5, 2)); // ""
console.log(text.slice(-5, -2)); // "zil"
```

Siehe die Seite {{jsxref("String/slice", "slice()")}} für weitere Beispiele mit negativen
Zahlen.

### Ersetzen einer Teilzeichenfolge innerhalb eines Strings

Das folgende Beispiel ersetzt eine Teilzeichenfolge innerhalb eines Strings. Es ersetzt sowohl einzelne Zeichen als auch Teilzeichenfolgen. Der Funktionsaufruf am Ende des Beispiels erstellt einen String `Brave New Web` aus dem ursprünglichen String `Brave New World`.

```js
// Replaces oldS with newS in the string fullS
function replaceString(oldS, newS, fullS) {
  for (let i = 0; i < fullS.length; ++i) {
    if (fullS.substring(i, i + oldS.length) === oldS) {
      fullS =
        fullS.substring(0, i) +
        newS +
        fullS.substring(i + oldS.length, fullS.length);
    }
  }
  return fullS;
}

replaceString("World", "Web", "Brave New World");
```

Beachten Sie, dass dies zu einer Endlosschleife führen kann, wenn `oldS` selbst eine
Teilzeichenfolge von `newS` ist — zum Beispiel, wenn Sie versucht haben,
`"World"` mit `"OtherWorld"` hier zu ersetzen.

Eine bessere Methode zum Ersetzen von Strings ist wie folgt:

```js
function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}
```

Der obige Code dient als Beispiel für Teilzeichenfolgenoperationen. Wenn Sie
Teilzeichenfolgen ersetzen müssen, möchten Sie meistens
{{jsxref("String.prototype.replace()")}} verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.slice()")}}
