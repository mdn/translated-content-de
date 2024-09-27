---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jsSidebar("Objects")}}

Die **`parseFloat()`**-Funktion analysiert ein Zeichenfolgenargument und gibt eine Gleitkommazahl zurück.

{{EmbedInteractiveExample("pages/js/globalprops-parsefloat.html")}}

## Syntax

```js-nolint
parseFloat(string)
```

### Parameter

- `string`
  - : Der zu analysierende Wert, [umgewandelt in eine Zeichenfolge](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Führende [Leerzeichen](/de/docs/Glossary/whitespace) in diesem Argument werden ignoriert.

### Rückgabewert

Eine Gleitkommazahl, die aus dem angegebenen `string` analysiert wurde, oder {{jsxref("NaN")}}, wenn das erste nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann.

> [!NOTE]
> JavaScript unterscheidet auf der Sprachebene nicht zwischen "Gleitkommazahlen" und "ganzen Zahlen". [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) und `parseFloat()` unterscheiden sich nur in ihrem Analyseverhalten, aber nicht notwendigerweise in ihren Rückgabewerten. Zum Beispiel würden `parseInt("42")` und `parseFloat("42")` denselben Wert zurückgeben: eine {{jsxref("Number")}} 42.

## Beschreibung

Die `parseFloat`-Funktion konvertiert ihr erstes Argument in eine Zeichenfolge, analysiert diese als Dezimalzahl-Literal und gibt dann eine Zahl oder `NaN` zurück. Die von `parseFloat` akzeptierte Zahlensyntax kann wie folgt zusammengefasst werden:

- Die von `parseFloat()` akzeptierten Zeichen sind Pluszeichen (`+`), Minuszeichen (`-` U+002D HYPHEN-MINUS), Dezimalziffern (`0` – `9`), Dezimalpunkt (`.`), Exponentenzeichen (`e` oder `E`) und das Literal `"Infinity"`.
- Die `+`/`-` Zeichen können nur direkt am Anfang der Zeichenfolge oder unmittelbar nach dem `e`/`E` Zeichen erscheinen. Der Dezimalpunkt kann nur einmal und nur vor dem `e`/`E` Zeichen erscheinen. Das `e`/`E` Zeichen kann nur einmal erscheinen und nur, wenn vorher mindestens eine Ziffer steht.
- Führende Leerzeichen im Argument werden getrimmt und ignoriert.
- `parseFloat()` kann auch {{jsxref("Infinity")}} oder `-Infinity` analysieren und zurückgeben, wenn die Zeichenfolge mit `"Infinity"` oder `"-Infinity"` beginnt, gefolgt von keinem oder mehreren Leerzeichen.
- `parseFloat()` wählt die längste Teilzeichenfolge, die am Anfang beginnt und ein gültiges Zahlenliteral erzeugt. Wenn es auf ein ungültiges Zeichen stößt, gibt es die Zahl zurück, die bis zu diesem Punkt dargestellt wird, und ignoriert das ungültige Zeichen sowie alle nachfolgenden Zeichen.
- Wenn das erste Zeichen des Arguments kein gültiges Zahlensyntax-Literal wie oben beschrieben beginnen kann, gibt `parseFloat` {{jsxref("NaN")}} zurück.

Syntaxmäßig analysiert `parseFloat()` ein Teil der Syntax, die die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Funktion akzeptiert. `parseFloat()` unterstützt nämlich keine nicht-dezimalen Literale mit den Präfixen `0x`, `0b` oder `0o`, akzeptiert jedoch alles andere. Allerdings ist `parseFloat()` toleranter als `Number()`, da es nachfolgende ungültige Zeichen ignoriert, die bei `Number()` `NaN` zurückgeben würden.

Ähnlich wie bei Zahlenliteralen und `Number()`, kann die von `parseFloat()` zurückgegebene Zahl aufgrund des Bereichs und der Ungenauigkeit von Gleitkommazahlen nicht genau mit der Zahl übereinstimmen, die durch die Zeichenfolge dargestellt wird. Für Zahlen außerhalb des Bereichs von `-1.7976931348623158e+308` – `1.7976931348623158e+308` (siehe {{jsxref("Number.MAX_VALUE")}}) wird `-Infinity` oder `Infinity` zurückgegeben.

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

Anekdotisch, da die Zeichenfolge `NaN` selbst eine ungültige Syntax darstellt, wie sie von `parseFloat()` akzeptiert wird, gibt die Übergabe von `"NaN"` ebenfalls `NaN` zurück.

```js
parseFloat("NaN"); // NaN
```

### Rückgabe von Infinity

Unendlichkeitswerte werden zurückgegeben, wenn die Zahl außerhalb des Bereichs des 64-Bit-IEEE 754-2019-Doppelpräzisionsformats liegt:

```js
parseFloat("1.7976931348623159e+308"); // Infinity
parseFloat("-1.7976931348623159e+308"); // -Infinity
```

Infinity wird auch zurückgegeben, wenn die Zeichenfolge mit `"Infinity"` oder `"-Infinity"` beginnt:

```js
parseFloat("Infinity"); // Infinity
parseFloat("-Infinity"); // -Infinity
```

### Interaktion mit BigInt-Werten

`parseFloat()` verarbeitet keine {{jsxref("BigInt")}}-Werte. Es stoppt am `n` Zeichen und behandelt die vorangehende Zeichenfolge als normale Ganzzahl, wobei möglicherweise Präzision verloren geht. Wenn ein BigInt-Wert an `parseFloat()` übergeben wird, wird er in eine Zeichenfolge konvertiert, und die Zeichenfolge wird als Gleitkommazahl analysiert, was ebenfalls zu Präzisionsverlust führen kann.

```js example-bad
parseFloat(900719925474099267n); // 900719925474099300
parseFloat("900719925474099267n"); // 900719925474099300
```

Sie sollten die Zeichenfolge ohne das nachgestellte `n`-Zeichen an die [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion übergeben.

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
