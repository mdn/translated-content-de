---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jsSidebar("Objects")}}

Die **`parseFloat()`** Funktion analysiert ein Zeichenkettenargument und gibt eine Gleitkommazahl zurück.

{{EmbedInteractiveExample("pages/js/globalprops-parsefloat.html")}}

## Syntax

```js-nolint
parseFloat(string)
```

### Parameter

- `string`
  - : Der zu analysierende Wert, [in eine Zeichenkette umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Führende {{Glossary("whitespace", "Leerzeichen")}} in diesem Argument werden ignoriert.

### Rückgabewert

Eine Gleitkommazahl, die aus der gegebenen `string` analysiert wurde, oder {{jsxref("NaN")}}, wenn das erste Nicht-Leerzeichenzeichen nicht in eine Zahl umgewandelt werden kann.

> [!NOTE]
> JavaScript unterscheidet auf Sprachebene nicht zwischen "Gleitkommazahlen" und "Ganzzahlen". [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) und `parseFloat()` unterscheiden sich nur in ihrem Analyseverhalten, aber nicht unbedingt in ihren Rückgabewerten. Zum Beispiel würden `parseInt("42")` und `parseFloat("42")` denselben Wert zurückgeben: eine {{jsxref("Number")}} 42.

## Beschreibung

Die `parseFloat` Funktion konvertiert ihr erstes Argument in eine Zeichenkette, analysiert diese Zeichenkette als dezimale Zahlenliterale und gibt dann eine Zahl oder `NaN` zurück. Die akzeptierte Zahlensyntax kann wie folgt zusammengefasst werden:

- Die von `parseFloat()` akzeptierten Zeichen sind Pluszeichen (`+`), Minuszeichen (`-` U+002D HYPHEN-MINUS), Dezimalziffern (`0` – `9`), Dezimalpunkt (`.`), Exponentenzeichen (`e` oder `E`) und das `"Infinity"` Literal.
- Die `+`/`-` Zeichen können nur strikt am Anfang der Zeichenkette oder unmittelbar nach dem `e`/`E` Zeichen erscheinen. Der Dezimalpunkt kann nur einmal und nur vor dem `e`/`E` Zeichen erscheinen. Das `e`/`E` Zeichen kann nur einmal erscheinen und nur, wenn sich mindestens eine Ziffer davor befindet.
- Führende Leerzeichen im Argument werden abgeschnitten und ignoriert.
- `parseFloat()` kann auch {{jsxref("Infinity")}} oder `-Infinity` analysieren und zurückgeben, wenn die Zeichenkette mit `"Infinity"` oder `"-Infinity"` beginnt, gefolgt von keinen oder mehreren Leerzeichen.
- `parseFloat()` wählt das längste Teilstück, das von Anfang an einen gültigen Zahlenliteral erzeugt. Wenn es auf ein ungültiges Zeichen stößt, gibt es die Zahl zurück, die bis zu diesem Punkt dargestellt wird, und ignoriert das ungültige Zeichen und alle folgenden Zeichen.
- Wenn das erste Zeichen des Arguments keinen legalen Zahlenliteral nach der obigen Syntax starten kann, gibt `parseFloat` {{jsxref("NaN")}} zurück.

Syntaxmäßig analysiert `parseFloat()` einen Teil der Syntax, den die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) Funktion akzeptiert. Nämlich unterstützt `parseFloat()` keine nicht-dezimale Literale mit den Präfixen `0x`, `0b` oder `0o`, aber unterstützt alles andere. `parseFloat()` ist jedoch nachgiebiger als `Number()`, da es nachfolgende ungültige Zeichen ignoriert, die `Number()` dazu veranlassen würden, `NaN` zurückzugeben.

Ähnlich wie bei Zahlenliteralen und `Number()` kann die von `parseFloat()` zurückgegebene Zahl nicht genau der Zahl entsprechen, die durch die Zeichenkette dargestellt wird, aufgrund von Gleitkommabereich und Ungenauigkeit. Für Zahlen außerhalb des Bereichs `-1.7976931348623158e+308` – `1.7976931348623158e+308` (siehe {{jsxref("Number.MAX_VALUE")}}) wird `-Infinity` oder `Infinity` zurückgegeben.

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

Angeekdotet, da die Zeichenkette `NaN` selbst eine ungültige Syntax ist, wie sie von `parseFloat()` akzeptiert wird, gibt auch das Übergeben von `"NaN"` `NaN` zurück.

```js
parseFloat("NaN"); // NaN
```

### Rückgabe von Infinity

Unendlichkeit wird zurückgegeben, wenn die Zahl außerhalb des Bereichs des Doppelpräzisions-64-Bit IEEE 754-2019-Formats liegt:

```js
parseFloat("1.7976931348623159e+308"); // Infinity
parseFloat("-1.7976931348623159e+308"); // -Infinity
```

Unendlichkeit wird auch zurückgegeben, wenn die Zeichenkette mit `"Infinity"` oder `"-Infinity"` beginnt:

```js
parseFloat("Infinity"); // Infinity
parseFloat("-Infinity"); // -Infinity
```

### Interaktion mit BigInt-Werten

`parseFloat()` verarbeitet keine {{jsxref("BigInt")}} Werte. Es stoppt beim `n` Zeichen und behandelt die voranstehende Zeichenkette als normale Ganzzahl, was zu einem möglichen Präzisionsverlust führt. Wenn ein BigInt-Wert an `parseFloat()` übergeben wird, wird er in eine Zeichenkette konvertiert, und die Zeichenkette wird als Gleitkommazahl analysiert, was ebenfalls zu einem Präzisionsverlust führen kann.

```js example-bad
parseFloat(900719925474099267n); // 900719925474099300
parseFloat("900719925474099267n"); // 900719925474099300
```

Sie sollten die Zeichenkette stattdessen an die [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Funktion übergeben, ohne das abschließende `n` Zeichen.

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
