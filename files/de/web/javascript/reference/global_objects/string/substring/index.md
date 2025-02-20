---
title: String.prototype.substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`substring()`**-Methode von {{jsxref("String")}}-Werten gibt den Teil dieses Strings zurück, der vom Startindex bis (aber ohne) den Endindex reicht, oder bis zum Ende des Strings, falls kein Endindex angegeben ist.

{{InteractiveExample("JavaScript Demo: String.substring()")}}

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
  - : Der Index des ersten Zeichens, das im zurückgegebenen Substring enthalten sein soll.
- `indexEnd` {{optional_inline}}
  - : Der Index des ersten Zeichens, das im zurückgegebenen Substring ausgeschlossen werden soll.

### Rückgabewert

Ein neuer String, der den angegebenen Teil des gegebenen Strings enthält.

## Beschreibung

`substring()` extrahiert Zeichen von `indexStart` bis _aber ohne_ `indexEnd`. Im Besonderen:

- Wenn `indexEnd` weggelassen wird, extrahiert `substring()` Zeichen bis zum Ende des Strings.
- Wenn `indexStart` gleich `indexEnd` ist, gibt `substring()` einen leeren String zurück.
- Wenn `indexStart` größer ist als `indexEnd`, hat `substring()` den Effekt, als wären die beiden Argumente vertauscht; siehe Beispiel unten.

Jeder Argumentwert, der kleiner als `0` oder größer als `str.length` ist, wird behandelt, als wäre er `0` beziehungsweise `str.length`.

Jeder Argumentwert, der {{jsxref("NaN")}} ist, wird behandelt, als wäre er `0`.

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

### Verwendung von substring() mit der length-Eigenschaft

Das folgende Beispiel verwendet die Methode `substring()` und die
{{jsxref("String/length", "length")}}-Eigenschaft, um die letzten Zeichen eines
bestimmten Strings zu extrahieren. Diese Methode kann einfacher zu merken sein, da Sie
die Start- und Endindizes wie in den obigen Beispielen nicht kennen müssen.

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
{{jsxref("String/substr", "substr()")}}, daher sollten Sie darauf achten, diese nicht zu verwechseln.

- Die zwei Parameter von `substr()` sind `start` und `length`, während sie bei `substring()` `start` und `end` sind.
- Der `start`-Index von `substr()` wird um die Länge des Strings zurückgesetzt, wenn er negativ ist, während `substring()` ihn auf `0` klemmt.
- Negative Längen in `substr()` werden als Null behandelt, während `substring()` die beiden Indizes vertauscht, wenn `end` kleiner ist als `start`.

Darüber hinaus wird `substr()` als _veraltete Funktion in ECMAScript_ angesehen, daher sollte deren Verwendung möglichst vermieden werden.

```js
const text = "Mozilla";
console.log(text.substring(2, 5)); // "zil"
console.log(text.substr(2, 3)); // "zil"
```

### Unterschiede zwischen substring() und slice()

Die Methoden `substring()` und {{jsxref("String/slice", "slice()")}} sind fast identisch, es gibt jedoch einige subtile Unterschiede, insbesondere in der Handhabung negativer Argumente.

Die Methode `substring()` vertauscht ihre beiden Argumente, wenn
`indexStart` größer ist als `indexEnd`,
was dazu führt, dass immer ein String zurückgegeben wird. Die Methode {{jsxref("String/slice", "slice()")}}
gibt in diesem Fall hingegen einen leeren String zurück.

```js
const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2)); // ""
```

Wenn eines oder beide Argumente negativ oder `NaN` sind, behandelt
`substring()` sie, als wären sie `0`.

```js
console.log(text.substring(-5, 2)); // "Mo"
console.log(text.substring(-5, -2)); // ""
```

Auch `slice()` behandelt `NaN`-Argumente als `0`, zählt jedoch bei
negativen Werten rückwärts vom Ende des Strings, um die
Indizes zu finden.

```js
console.log(text.slice(-5, 2)); // ""
console.log(text.slice(-5, -2)); // "zil"
```

Weitere Beispiele mit negativen Zahlen finden Sie auf der Seite zu {{jsxref("String/slice", "slice()")}}.

### Ersetzen eines Substrings innerhalb eines Strings

Das folgende Beispiel ersetzt einen Substring innerhalb eines Strings. Es ersetzt sowohl einzelne Zeichen als auch Substrings. Der Funktionsaufruf am Ende des Beispiels erzeugt einen String `Brave New Web` aus dem ursprünglichen String `Brave New World`.

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

Beachten Sie, dass dies zu einer Endlosschleife führen kann, wenn `oldS` selbst ein
Substring von `newS` ist — beispielsweise, wenn versucht wird,
`"World"` durch `"OtherWorld"` zu ersetzen.

Eine bessere Methode, um Strings zu ersetzen, ist wie folgt:

```js
function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}
```

Der obige Code dient als Beispiel für Substring-Operationen. Wenn Sie
Substrings ersetzen müssen, möchten Sie in den meisten Fällen
{{jsxref("String.prototype.replace()")}} verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.slice()")}}
