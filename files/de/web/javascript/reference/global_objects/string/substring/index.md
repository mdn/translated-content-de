---
title: String.prototype.substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`substring()`**-Methode von {{jsxref("String")}}-Werten gibt den Teil dieses Strings vom Startindex bis zum und ausschließlich des Endindexes zurück oder bis zum Ende des Strings, wenn kein Endindex angegeben ist.

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
  - : Der Index des ersten Zeichens, das vom zurückgegebenen Teilstring ausgeschlossen wird.

### Rückgabewert

Ein neuer String, der den angegebenen Teil des gegebenen Strings enthält.

## Beschreibung

`substring()` extrahiert Zeichen von `indexStart` bis _aber nicht einschließlich_ `indexEnd`. Insbesondere:

- Wenn `indexEnd` weggelassen wird, extrahiert `substring()` Zeichen bis zum Ende des Strings.
- Wenn `indexStart` gleich `indexEnd` ist, gibt `substring()` einen leeren String zurück.
- Wenn `indexStart` größer als `indexEnd` ist, wirkt `substring()` so, als wären die beiden Argumente vertauscht; siehe Beispiel unten.

Jeder Argumentwert, der kleiner als `0` oder größer als `str.length` ist, wird behandelt, als wäre er `0` bzw. `str.length`.

Jeder Argumentwert, der {{jsxref("NaN")}} ist, wird behandelt, als wäre er `0`.

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

### Verwendung von substring() mit der Längen-Eigenschaft

Das folgende Beispiel verwendet die `substring()`-Methode und
die {{jsxref("String/length", "length")}}-Eigenschaft, um die letzten Zeichen eines
bestimmten Strings zu extrahieren. Diese Methode ist möglicherweise leichter zu
merken, da Sie die Start- und Endindices nicht kennen müssen, wie in den obigen Beispielen.

<!-- cSpell:ignore illa zilla -->

```js
const text = "Mozilla";

// Takes 4 last characters of string
console.log(text.substring(text.length - 4)); // prints "illa"

// Takes 5 last characters of string
console.log(text.substring(text.length - 5)); // prints "zilla"
```

### Der Unterschied zwischen substring() und substr()

Es gibt feine Unterschiede zwischen den Methoden `substring()` und
{{jsxref("String/substr", "substr()")}}, daher sollten Sie aufpassen, sie nicht zu verwechseln.

- Die beiden Parameter von `substr()` sind `start` und `length`, während sie bei `substring()` `start` und `end` sind.
- Der `start`-Index von `substr()` wird an das Ende des Strings exportiert, wenn er negativ ist, während `substring()` ihn auf `0` beschränkt.
- Negative Längen in `substr()` werden als null behandelt, während `substring()` die beiden Indizes vertauscht, wenn `end` kleiner als `start` ist.

Darüber hinaus wird `substr()` als _Legacy-Funktion in ECMAScript_ betrachtet, daher sollte die Verwendung nach Möglichkeit vermieden werden.

```js
const text = "Mozilla";
console.log(text.substring(2, 5)); // "zil"
console.log(text.substr(2, 3)); // "zil"
```

### Unterschiede zwischen substring() und slice()

Die Methoden `substring()` und {{jsxref("String/slice", "slice()")}} sind
fast identisch, es gibt jedoch ein paar subtile Unterschiede zwischen den beiden,
besonders in der Art und Weise, wie negative Argumente behandelt werden.

Die `substring()`-Methode vertauscht ihre beiden Argumente, wenn
`indexStart` größer als `indexEnd` ist,
was bedeutet, dass dennoch ein String zurückgegeben wird. Die {{jsxref("String/slice", "slice()")}}
Methode gibt in diesem Fall einen leeren String zurück.

```js
const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2)); // ""
```

Wenn eines oder beide Argumente negativ oder `NaN` sind, behandelt die
`substring()`-Methode sie, als ob sie `0` wären.

```js
console.log(text.substring(-5, 2)); // "Mo"
console.log(text.substring(-5, -2)); // ""
```

`slice()` behandelt `NaN`-Argumente ebenfalls als `0`, aber bei negativen Werten
zählt es rückwärts vom Ende des Strings, um die
Indizes zu finden.

```js
console.log(text.slice(-5, 2)); // ""
console.log(text.slice(-5, -2)); // "zil"
```

Sehen Sie sich die Seite {{jsxref("String/slice", "slice()")}} für weitere Beispiele mit negativen
Zahlen an.

### Ersetzen eines Teilstrings innerhalb eines Strings

Das folgende Beispiel ersetzt einen Teilstring innerhalb eines Strings. Es ersetzt sowohl einzelne Zeichen als auch Teilstrings. Der Funktionsaufruf am Ende des Beispiels erstellt einen String `Brave New Web` aus dem ursprünglichen String `Brave New World`.

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
Teilstring von `newS` ist — zum Beispiel, wenn Sie versuchen würden,
`"World"` mit `"OtherWorld"` zu ersetzen.

Eine bessere Methode zum Ersetzen von Strings ist die folgende:

```js
function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}
```

Der obige Code dient als Beispiel für Operationen mit Teilstrings. Wenn Sie Teilstrings
ersetzen müssen, möchten Sie in den meisten Fällen
{{jsxref("String.prototype.replace()")}} verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.slice()")}}
