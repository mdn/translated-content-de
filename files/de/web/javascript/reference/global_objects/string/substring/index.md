---
title: String.prototype.substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
l10n:
  sourceCommit: 4406757f6bb4404b5309756bac2acb994c169e40
---

{{JSRef}}

Die **`substring()`**-Methode von {{jsxref("String")}}-Werten gibt den Teil dieses Strings vom Startindex bis zum und ohne den Endindex zurück oder bis zum Ende des Strings, falls kein Endindex angegeben ist.

{{EmbedInteractiveExample("pages/js/string-substring.html")}}

## Syntax

```js-nolint
substring(indexStart)
substring(indexStart, indexEnd)
```

### Parameter

- `indexStart`
  - : Der Index des ersten Zeichens, das im zurückgegebenen Substring enthalten sein soll.
- `indexEnd` {{optional_inline}}
  - : Der Index des ersten Zeichens, das vom zurückgegebenen Substring ausgeschlossen sein soll.

### Rückgabewert

Ein neuer String, der den angegebenen Teil des gegebenen Strings enthält.

## Beschreibung

`substring()` extrahiert Zeichen von `indexStart` bis _aber nicht einschließlich_ `indexEnd`. Insbesondere:

- Wenn `indexEnd` weggelassen wird, extrahiert `substring()` Zeichen bis zum Ende des Strings.
- Wenn `indexStart` gleich `indexEnd` ist, gibt `substring()` einen leeren String zurück.
- Wenn `indexStart` größer als `indexEnd` ist, ist die Wirkung von `substring()` so, als wären die beiden Argumente vertauscht; siehe untenstehendes Beispiel.

Jeder Argumentwert, der kleiner als `0` oder größer als `str.length` ist, wird behandelt, als wäre er `0` bzw. `str.length`.

Jeder Argumentwert, der {{jsxref("NaN")}} ist, wird behandelt, als wäre er `0`.

## Beispiele

### Verwendung von substring()

Das folgende Beispiel verwendet `substring()`, um Zeichen aus dem String `"Mozilla"` anzuzeigen:

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

### Verwendung von substring() mit length-Eigenschaft

Das folgende Beispiel verwendet die `substring()`-Methode und die {{jsxref("String/length", "length")}}-Eigenschaft, um die letzten Zeichen eines bestimmten Strings zu extrahieren. Diese Methode kann einfacher zu merken sein, da Sie nicht die Start- und Endindizes kennen müssen, wie in den obigen Beispielen.

```js
const text = "Mozilla";

// Takes 4 last characters of string
console.log(text.substring(text.length - 4)); // prints "illa"

// Takes 5 last characters of string
console.log(text.substring(text.length - 5)); // prints "zilla"
```

### Der Unterschied zwischen substring() und substr()

Es gibt subtile Unterschiede zwischen den `substring()`- und {{jsxref("String/substr", "substr()")}}-Methoden, daher sollten Sie vorsichtig sein, sie nicht zu verwechseln.

- Die zwei Parameter von `substr()` sind `start` und `length`, während sie bei `substring()` `start` und `end` sind.
- Der `start`-Index von `substr()` wird zum Ende des Strings überlaufen, wenn er negativ ist, während `substring()` ihn auf `0` klemmt.
- Negative Längen bei `substr()` werden als null behandelt, während `substring()` die beiden Indizes vertauscht, wenn `end` kleiner als `start` ist.

Darüber hinaus wird `substr()` als _veraltetes Feature in ECMAScript_ betrachtet, daher ist es am besten, es möglichst zu vermeiden.

```js
const text = "Mozilla";
console.log(text.substring(2, 5)); // "zil"
console.log(text.substr(2, 3)); // "zil"
```

### Unterschiede zwischen substring() und slice()

Die `substring()`- und {{jsxref("String/slice", "slice()")}}-Methoden sind fast identisch, aber es gibt ein paar subtile Unterschiede zwischen ihnen, insbesondere in der Art, wie negative Argumente behandelt werden.

Die `substring()`-Methode vertauscht ihre beiden Argumente, wenn `indexStart` größer ist als `indexEnd`, was bedeutet, dass dennoch ein String zurückgegeben wird. Die {{jsxref("String/slice", "slice()")}}-Methode gibt in diesem Fall einen leeren String zurück.

```js
const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2)); // ""
```

Wenn eines oder beide Argumente negativ oder `NaN` sind, behandelt die `substring()`-Methode sie, als wären sie `0`.

```js
console.log(text.substring(-5, 2)); // "Mo"
console.log(text.substring(-5, -2)); // ""
```

`slice()` behandelt `NaN`-Argumente ebenfalls als `0`, aber wenn negative Werte angegeben werden, zählt es rückwärts vom Ende des Strings, um die Indizes zu finden.

```js
console.log(text.slice(-5, 2)); // ""
console.log(text.slice(-5, -2)); // "zil"
```

Weitere Beispiele mit negativen Zahlen finden Sie auf der {{jsxref("String/slice", "slice()")}}-Seite.

### Ersetzen eines Substrings innerhalb eines Strings

Das folgende Beispiel ersetzt einen Substring innerhalb eines Strings. Es ersetzt sowohl einzelne Zeichen als auch Substrings. Der Funktionsaufruf am Ende des Beispiels erstellt den String `Brave New Web` aus dem ursprünglichen String `Brave New World`.

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

Beachten Sie, dass dies in einer Endlos-Schleife resultieren kann, wenn `oldS` selbst ein Substring von `newS` ist — zum Beispiel, wenn Sie versuchen würden, `"World"` durch `"OtherWorld"` zu ersetzen.

Eine bessere Methode zum Ersetzen von Strings ist wie folgt:

```js
function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}
```

Der obige Code dient als Beispiel für Substring-Operationen. Wenn Sie Substrings ersetzen möchten, werden Sie meistens {{jsxref("String.prototype.replace()")}} verwenden wollen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.slice()")}}
