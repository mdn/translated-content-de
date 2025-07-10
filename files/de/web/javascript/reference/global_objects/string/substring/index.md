---
title: String.prototype.substring()
short-title: substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`substring()`** Methode von {{jsxref("String")}} Werten gibt den Teil dieses Strings vom Startindex bis zum Endindex zurück, ausgenommen den Endindex, oder bis zum Ende des Strings, wenn kein Endindex angegeben ist.

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
  - : Der Index des ersten Zeichens, das im zurückgegebenen Teilstring enthalten sein soll.
- `indexEnd` {{optional_inline}}
  - : Der Index des ersten Zeichens, das im zurückgegebenen Teilstring ausgeschlossen sein soll.

### Rückgabewert

Ein neuer String, der den angegebenen Teil des gegebenen Strings enthält.

## Beschreibung

`substring()` extrahiert Zeichen von `indexStart` bis _aber nicht einschließlich_ `indexEnd`. Insbesondere:

- Wenn `indexEnd` weggelassen oder `undefined` ist, extrahiert `substring()` Zeichen bis zum Ende des Strings.
- Wenn `indexStart` gleich `indexEnd` ist, gibt `substring()` einen leeren String zurück.
- Wenn `indexStart` größer als `indexEnd` ist, wirkt `substring()` so, als wären die beiden Argumente vertauscht; siehe Beispiel unten.

Jedes Argument mit einem Wert kleiner als `0` oder größer als `str.length` wird behandelt, als wäre es `0` bzw. `str.length`.

Jedes Argument mit dem Wert {{jsxref("NaN")}} wird behandelt, als wäre es `0`.

## Beispiele

### Verwendung von substring()

Das folgende Beispiel verwendet `substring()`, um Zeichen aus dem String `"Mozilla"` anzuzeigen:

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

### Verwendung von substring() mit der Länge-Eigenschaft

Das folgende Beispiel verwendet die `substring()` Methode und die {{jsxref("String/length", "length")}} Eigenschaft, um die letzten Zeichen eines bestimmten Strings zu extrahieren. Diese Methode ist möglicherweise leichter zu merken, da Sie die Start- und Endindizes nicht kennen müssen, wie in den obigen Beispielen.

<!-- cSpell:ignore illa zilla -->

```js
const text = "Mozilla";

// Takes 4 last characters of string
console.log(text.substring(text.length - 4)); // prints "illa"

// Takes 5 last characters of string
console.log(text.substring(text.length - 5)); // prints "zilla"
```

### Der Unterschied zwischen substring() und substr()

Es gibt subtile Unterschiede zwischen den `substring()` und {{jsxref("String/substr", "substr()")}} Methoden, daher sollten Sie darauf achten, sie nicht zu verwechseln.

- Die beiden Parameter von `substr()` sind `start` und `length`, während sie bei `substring()` `start` und `end` sind.
- Der `start`-Index von `substr()` wird zum Ende des Strings umgebrochen, wenn er negativ ist, während `substring()` ihn auf `0` klemmt.
- Negative Längen in `substr()` werden als null behandelt, während `substring()` die beiden Indizes vertauscht, wenn `end` kleiner als `start` ist.

Darüber hinaus wird `substr()` als ein _veraltetes Merkmal in ECMAScript_ betrachtet, daher ist es am besten, die Verwendung zu vermeiden, wenn möglich.

```js
const text = "Mozilla";
console.log(text.substring(2, 5)); // "zil"
console.log(text.substr(2, 3)); // "zil"
```

### Unterschiede zwischen substring() und slice()

Die `substring()` und {{jsxref("String/slice", "slice()")}} Methoden sind fast identisch, aber es gibt einige subtile Unterschiede zwischen den beiden, insbesondere in der Art, wie mit negativen Argumenten umgegangen wird.

Die `substring()` Methode vertauscht ihre beiden Argumente, wenn `indexStart` größer als `indexEnd` ist, was bedeutet, dass trotzdem ein String zurückgegeben wird. Die {{jsxref("String/slice", "slice()")}} Methode gibt in diesem Fall einen leeren String zurück.

```js
const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2)); // ""
```

Wenn eines oder beide Argumente negativ oder `NaN` sind, behandelt die `substring()` Methode sie als `0`.

```js
console.log(text.substring(-5, 2)); // "Mo"
console.log(text.substring(-5, -2)); // ""
```

`slice()` behandelt `NaN` Argumente auch als `0`, aber wenn es negative Werte erhält, zählt es vom Ende des Strings rückwärts, um die Indizes zu finden.

```js
console.log(text.slice(-5, 2)); // ""
console.log(text.slice(-5, -2)); // "zil"
```

Siehe die {{jsxref("String/slice", "slice()")}} Seite für weitere Beispiele mit negativen Zahlen.

### Ersetzen eines Teilstrings innerhalb eines Strings

Das folgende Beispiel ersetzt einen Teilstring innerhalb eines Strings. Es werden sowohl einzelne Zeichen als auch Teilstrings ersetzt. Der Funktionsaufruf am Ende des Beispiels erstellt einen String `Brave New Web` aus dem ursprünglichen String `Brave New World`.

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

Beachten Sie, dass dies zu einer Endlosschleife führen kann, wenn `oldS` selbst ein Teilstring von `newS` ist — zum Beispiel, wenn Sie versuchen würden, `"World"` durch `"OtherWorld"` zu ersetzen.

Eine bessere Methode zum Ersetzen von Strings ist wie folgt:

```js
function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}
```

Der obige Code dient als Beispiel für Teilstring-Operationen. Wenn Sie Teilstrings ersetzen müssen, möchten Sie meistens {{jsxref("String.prototype.replace()")}} verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.slice()")}}
