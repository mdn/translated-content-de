---
title: String.prototype.substring()
short-title: substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`substring()`** Methode von {{jsxref("String")}}-Werten gibt den Teil dieses Strings vom Startindex bis zum Endindex (nicht eingeschlossen) zurück, oder bis zum Ende des Strings, falls kein Endindex angegeben ist.

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
  - : Der Index des ersten Zeichens, das im zurückgegebenen Teilstring ausgeschlossen werden soll.

### Rückgabewert

Ein neuer String, der den angegebenen Teil des gegebenen Strings enthält.

## Beschreibung

`substring()` extrahiert Zeichen von `indexStart` bis _aber nicht einschließlich_ `indexEnd`. Insbesondere:

- Wenn `indexEnd` weggelassen oder `undefined` ist, extrahiert `substring()` Zeichen bis zum Ende des Strings.
- Wenn `indexStart` gleich `indexEnd` ist, gibt `substring()` einen leeren String zurück.
- Wenn `indexStart` größer als `indexEnd` ist, wirkt `substring()` so, als wären die beiden Argumente vertauscht; siehe Beispiel unten.

Jeder Argumentwert, der kleiner als `0` oder größer als `str.length` ist, wird behandelt, als wäre er `0` bzw. `str.length`.

Jeder Argumentwert, der {{jsxref("NaN")}} ist, wird so behandelt, als wäre er `0`.

## Beispiele

### Verwendet substring()

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

### Verwendet substring() mit length-Eigenschaft

Das folgende Beispiel verwendet die `substring()`-Methode und
die {{jsxref("String/length", "length")}}-Eigenschaft, um die letzten Zeichen eines
bestimmten Strings zu extrahieren. Diese Methode lässt sich einfacher merken, da Sie nicht die Start- und Endindizes kennen müssen, wie in den obigen Beispielen.

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
{{jsxref("String/substr", "substr()")}}, daher sollten Sie darauf achten, sie nicht zu verwechseln.

- Die beiden Parameter von `substr()` sind `start` und `length`, während sie bei `substring()` `start` und `end` sind.
- Der `start`-Index von `substr()` wird um das Ende des Strings gewickelt, wenn er negativ ist, während `substring()` ihn auf `0` begrenzt.
- Negative Längen bei `substr()` werden als Null behandelt, während `substring()` die beiden Indizes vertauschen wird, wenn `end` kleiner als `start` ist.

Darüber hinaus wird `substr()` als ein _veraltetes Feature in ECMAScript_ betrachtet, daher sollte es nach Möglichkeit vermieden werden.

```js
const text = "Mozilla";
console.log(text.substring(2, 5)); // "zil"
console.log(text.substr(2, 3)); // "zil"
```

### Unterschiede zwischen substring() und slice()

Die Methoden `substring()` und {{jsxref("String/slice", "slice()")}} sind fast identisch, aber es gibt einige subtile Unterschiede, insbesondere in der Behandlung negativer Argumente.

Die Methode `substring()` tauscht ihre beiden Argumente, wenn
`indexStart` größer als `indexEnd` ist,
was bedeutet, dass dennoch ein String zurückgegeben wird. Die Methode {{jsxref("String/slice", "slice()")}}
gibt in diesem Fall einen leeren String zurück.

```js
const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2)); // ""
```

Wenn eines oder beide Argumente negativ oder `NaN` sind, behandelt
die Methode `substring()` sie, als wären sie `0`.

```js
console.log(text.substring(-5, 2)); // "Mo"
console.log(text.substring(-5, -2)); // ""
```

`slice()` behandelt auch `NaN`-Argumente als `0`, zählt jedoch bei
negativen Werten rückwärts vom Ende des Strings, um die Indizes zu finden.

```js
console.log(text.slice(-5, 2)); // ""
console.log(text.slice(-5, -2)); // "zil"
```

Weitere Beispiele mit negativen Zahlen finden Sie auf der Seite {{jsxref("String/slice", "slice()")}}.

### Ersetzen eines Teilstrings innerhalb eines Strings

Das folgende Beispiel ersetzt einen Teilstring innerhalb eines Strings. Es wird sowohl einzelne Zeichen als auch Teilstrings ersetzen. Der Funktionsaufruf am Ende des Beispiels erstellt einen String `Brave New Web` aus dem ursprünglichen String `Brave New World`.

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
Teilstring von `newS` ist — z.B. wenn Sie versuchen würden, `"World"` durch `"OtherWorld"` zu ersetzen.

Eine bessere Methode zum Ersetzen von Strings ist wie folgt:

```js
function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}
```

Der obige Code dient als Beispiel für Teilstring-Operationen. Wenn Sie
Teilstrings ersetzen müssen, werden Sie in den meisten Fällen
{{jsxref("String.prototype.replace()")}} verwenden wollen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.slice()")}}
