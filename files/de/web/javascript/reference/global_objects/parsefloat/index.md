---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`parseFloat()`**-Funktion analysiert ein String-Argument und gibt eine Gleitkommazahl zurück.

{{InteractiveExample("JavaScript Demo: parseFloat()")}}

```js interactive-example
function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(4.567));
// Expected output: 28.695307297889173

console.log(circumference("4.567abcdefgh"));
// Expected output: 28.695307297889173

console.log(circumference("abcdefgh"));
// Expected output: NaN
```

## Syntax

```js-nolint
parseFloat(string)
```

### Parameter

- `string`
  - : Der zu analysierende Wert, [erzwingt die Umwandlung in einen String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Führende {{Glossary("whitespace", "Leerzeichen")}} in diesem Argument werden ignoriert.

### Rückgabewert

Eine Gleitkommazahl, die aus dem gegebenen `string` analysiert wurde, oder {{jsxref("NaN")}}, wenn das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann.

> [!NOTE]
> JavaScript unterscheidet auf Sprachebene nicht zwischen "Gleitkommazahlen" und "Ganzzahlen". [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) und `parseFloat()` unterscheiden sich nur in ihrem Analyseverhalten, aber nicht notwendigerweise in ihren Rückgabewerten. Beispielsweise würden `parseInt("42")` und `parseFloat("42")` denselben Wert zurückgeben: eine {{jsxref("Number")}} 42.

## Beschreibung

Die `parseFloat`-Funktion konvertiert ihr erstes Argument in einen String, analysiert diesen String als ein Dezimalzahlen-Literal und gibt dann eine Zahl oder `NaN` zurück. Die von ihr akzeptierte Zahlensyntax lässt sich wie folgt zusammenfassen:

- Die von `parseFloat()` akzeptierten Zeichen sind das Pluszeichen (`+`), das Minuszeichen (`-` U+002D HYPHEN-MINUS), Dezimalziffern (`0` – `9`), der Dezimalpunkt (`.`), das Exponentenzeichen (`e` oder `E`) und das Literal `"Infinity"`.
- Die `+`/`-` Zeichen können nur streng am Anfang des Strings oder unmittelbar nach dem `e`/`E` Zeichen erscheinen. Der Dezimalpunkt kann nur einmal und nur vor dem `e`/`E` Zeichen erscheinen. Das `e`/`E` Zeichen kann nur einmal erscheinen und nur, wenn mindestens eine Ziffer davor vorhanden ist.
- Führende Leerzeichen im Argument werden abgeschnitten und ignoriert.
- `parseFloat()` kann auch {{jsxref("Infinity")}} oder `-Infinity` analysieren und zurückgeben, wenn der String mit `"Infinity"` oder `"-Infinity"` beginnt, denen keine oder mehr Leerzeichen vorangestellt sind.
- `parseFloat()` wählt das längste Teilstring ausgehend vom Anfang, das ein gültiges Zahlenliteral erzeugt. Wenn es auf ein ungültiges Zeichen stößt, gibt es die Zahl zurück, die bis zu diesem Punkt dargestellt wurde, und ignoriert das ungültige Zeichen sowie alle folgenden Zeichen.
- Wenn das erste Zeichen des Arguments kein legales Zahlenliteral gemäß obiger Syntax beginnen kann, gibt `parseFloat` {{jsxref("NaN")}} zurück.

Syntaxmäßig analysiert `parseFloat()` ein Teilset der Syntax, das die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Funktion akzeptiert. Namentlich unterstützt `parseFloat()` keine nicht-dezimalen Literale mit `0x`, `0b` oder `0o` Präfixen, unterstützt aber alles andere. `parseFloat()` ist jedoch toleranter als `Number()`, da es nachgestellte ungültige Zeichen ignoriert, die `Number()` dazu bringen würden, `NaN` zurückzugeben.

Ähnlich wie Zahlenliterale und `Number()`, kann die von `parseFloat()` zurückgegebene Zahl nicht genau der Zahl entsprechen, die durch den String dargestellt wird, aufgrund von Gleitkomma-Bereich und Ungenauigkeit. Bei Zahlen außerhalb des `-1.7976931348623158e+308` – `1.7976931348623158e+308` Bereichs (siehe {{jsxref("Number.MAX_VALUE")}}) wird `-Infinity` oder `Infinity` zurückgegeben.

## Beispiele

### Verwendung von parseFloat()

Die folgenden Beispiele geben alle `3.14` zurück:

```js
parseFloat(3.14);
parseFloat("3.14");
parseFloat("  3.14  ");
parseFloat("314e-2");
parseFloat("0.0314E+2");
parseFloat("3.14some non-digit characters");
parseFloat({
  toString() {
    return "3.14";
  },
});
```

### parseFloat() gibt NaN zurück

Das folgende Beispiel gibt `NaN` zurück:

```js
parseFloat("FF2");
```

Anekdotisch, da der String `NaN` selbst eine ungültige Syntax ist, wie sie von `parseFloat()` akzeptiert wird, liefert das Übergeben von `"NaN"` ebenfalls `NaN`.

```js
parseFloat("NaN"); // NaN
```

### Rückgabe von Infinity

Infinity-Werte werden zurückgegeben, wenn die Zahl außerhalb des Bereichs des Doppelpräzisions-64-Bit IEEE 754-2019-Formats liegt:

```js
parseFloat("1.7976931348623159e+308"); // Infinity
parseFloat("-1.7976931348623159e+308"); // -Infinity
```

Infinity wird auch zurückgegeben, wenn der String mit `"Infinity"` oder `"-Infinity"` beginnt:

```js
parseFloat("Infinity"); // Infinity
parseFloat("-Infinity"); // -Infinity
```

### Interaktion mit BigInt-Werten

`parseFloat()` verarbeitet keine {{jsxref("BigInt")}}-Werte. Es stoppt am `n`-Zeichen und behandelt den vorhergehenden String als normale ganze Zahl, mit möglichem Präzisionsverlust. Wenn ein BigInt-Wert an `parseFloat()` übergeben wird, wird er in einen String konvertiert, und der String wird als Gleitkommazahl analysiert, was ebenfalls zu einem Präzisionsverlust führen kann.

```js example-bad
parseFloat(900719925474099267n); // 900719925474099300
parseFloat("900719925474099267n"); // 900719925474099300
```

Sie sollten den String an die [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion übergeben, ohne das nachgestellte `n`-Zeichen.

```js example-good
BigInt("900719925474099267");
// 900719925474099267n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("parseInt()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("Number.prototype.toFixed()")}}
