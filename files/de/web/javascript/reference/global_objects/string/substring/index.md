---
title: String.prototype.substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
l10n:
  sourceCommit: 4406757f6bb4404b5309756bac2acb994c169e40
---

{{JSRef}}

Die **`substring()`**-Methode von {{jsxref("String")}}-Werten gibt den Teil dieses Strings vom Startindex bis einschließlich des Endindex zurück oder bis zum Ende des Strings, wenn kein Endindex angegeben ist.

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
  - : Der Index des ersten Zeichens, das im zurückgegebenen Substring ausgeschlossen werden soll.

### Rückgabewert

Ein neuer String, der den angegebenen Teil des gegebenen Strings enthält.

## Beschreibung

`substring()` extrahiert Zeichen von `indexStart` bis _aber nicht einschließlich_ `indexEnd`. Insbesondere:

- Wenn `indexEnd` weggelassen wird, extrahiert `substring()` Zeichen bis zum Ende des Strings.
- Wenn `indexStart` gleich `indexEnd` ist, gibt `substring()` einen leeren String zurück.
- Wenn `indexStart` größer als `indexEnd` ist, ist die Wirkung von `substring()` so, als ob die beiden Argumente vertauscht worden wären; siehe Beispiel unten.

Jeder Argumentwert, der kleiner als `0` oder größer als `str.length` ist, wird behandelt, als wäre es `0` bzw. `str.length`.

Jeder Argumentwert, der {{jsxref("NaN")}} ist, wird behandelt, als wäre es `0`.

## Beispiele

### Verwendung von substring()

Das folgende Beispiel verwendet `substring()`, um Zeichen aus dem
String `"Mozilla"` anzuzeigen:

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

Das folgende Beispiel verwendet die `substring()`-Methode und die
{{jsxref("String/length", "length")}}-Eigenschaft, um die letzten Zeichen eines
bestimmten Strings zu extrahieren. Diese Methode kann einfacher zu merken sein, da Sie die Start- und Endindizes nicht kennen müssen, wie in den obigen Beispielen.

```js
const text = "Mozilla";

// Nimmt 4 letzte Zeichen des Strings
console.log(text.substring(text.length - 4)); // gibt "illa" aus

// Nimmt 5 letzte Zeichen des Strings
console.log(text.substring(text.length - 5)); // gibt "zilla" aus
```

### Der Unterschied zwischen substring() und substr()

Es gibt subtile Unterschiede zwischen den Methoden `substring()`
und {{jsxref("String/substr", "substr()")}}, daher sollte man darauf achten, sie nicht zu verwechseln.

- Die zwei Parameter von `substr()` sind `start` und `length`, während sie bei `substring()` `start` und `end` sind.
- Der `start`-Index von `substr()` wird zum Ende des Strings verschoben, wenn er negativ ist, während `substring()` ihn auf `0` klemmt.
- Negative Längen in `substr()` werden als Null behandelt, während `substring()` die beiden Indizes vertauscht, wenn `end` kleiner als `start` ist.

Darüber hinaus wird `substr()` als _veraltetes Feature in ECMAScript_ angesehen, daher sollte es nach Möglichkeit vermieden werden.

```js
const text = "Mozilla";
console.log(text.substring(2, 5)); // "zil"
console.log(text.substr(2, 3)); // "zil"
```

### Unterschiede zwischen substring() und slice()

Die Methoden `substring()` und {{jsxref("String/slice", "slice()")}} sind
fast identisch, aber es gibt ein paar subtile Unterschiede zwischen den beiden,
insbesondere in der Art und Weise, wie mit negativen Argumenten umgegangen wird.

Die `substring()`-Methode vertauscht ihre zwei Argumente, wenn
`indexStart` größer als `indexEnd` ist,
was bedeutet, dass ein String immer noch zurückgegeben wird. Die {{jsxref("String/slice", "slice()")}}
-Methode gibt einen leeren String zurück, wenn dies der Fall ist.

```js
const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2)); // ""
```

Wenn eines oder beide Argumente negativ oder `NaN` sind, behandelt
die `substring()`-Methode sie so, als wären sie `0`.

```js
console.log(text.substring(-5, 2)); // "Mo"
console.log(text.substring(-5, -2)); // ""
```

`slice()` behandelt `NaN`-Argumente ebenfalls als `0`, aber wenn
es negative Werte erhält, zählt es rückwärts vom Ende des Strings, um die
Indizes zu finden.

```js
console.log(text.slice(-5, 2)); // ""
console.log(text.slice(-5, -2)); // "zil"
```

Siehe die {{jsxref("String/slice", "slice()")}}-Seite für weitere Beispiele mit negativen
Zahlen.

### Ersetzen eines Substrings innerhalb eines Strings

Das folgende Beispiel ersetzt einen Substring innerhalb eines Strings. Es wird sowohl einzelne Zeichen als auch Substrings ersetzen. Der Funktionsaufruf am Ende des Beispiels erstellt einen String `Brave New Web` aus dem ursprünglichen String `Brave New World`.

```js
// Ersetzt oldS mit newS im String fullS
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
Substring von `newS` ist — zum Beispiel, wenn Sie versuchen würden, hier
`"World"` durch `"OtherWorld"` zu ersetzen.

Eine bessere Methode zum Ersetzen von Strings ist wie folgt:

```js
function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}
```

Der obige Code dient als Beispiel für Substring-Operationen. Wenn Sie
Substrings ersetzen müssen, möchten Sie meistens
{{jsxref("String.prototype.replace()")}} verwenden.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.slice()")}}
