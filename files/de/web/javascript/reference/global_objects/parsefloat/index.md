---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jsSidebar("Objects")}}

Die Funktion **`parseFloat()`** analysiert ein String-Argument und gibt eine Gleitpunktzahl zurück.

{{EmbedInteractiveExample("pages/js/globalprops-parsefloat.html")}}

## Syntax

```js-nolint
parseFloat(string)
```

### Parameter

- `string`
  - : Der zu analysierende Wert, [in einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Führende {{Glossary("whitespace")}} in diesem Argument werden ignoriert.

### Rückgabewert

Eine Gleitpunktzahl, die aus dem gegebenen `string` analysiert wurde, oder {{jsxref("NaN")}}, wenn das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann.

> [!NOTE]
> JavaScript unterscheidet nicht zwischen „Gleitpunktzahlen“ und „ganzen Zahlen“ auf Sprachebene. [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) und `parseFloat()` unterscheiden sich nur in ihrem Analyseverhalten, aber nicht unbedingt in ihren Rückgabewerten. Zum Beispiel würden `parseInt("42")` und `parseFloat("42")` denselben Wert zurückgeben: eine {{jsxref("Number")}} 42.

## Beschreibung

Die Funktion `parseFloat` wandelt ihr erstes Argument in einen String um, analysiert diesen String als Dezimalzahlenliterale und gibt dann eine Zahl oder `NaN` zurück. Die akzeptierte Zahlensyntax kann wie folgt zusammengefasst werden:

- Die von `parseFloat()` akzeptierten Zeichen sind Pluszeichen (`+`), Minuszeichen (`-` U+002D HYPHEN-MINUS), Dezimalziffern (`0` – `9`), Dezimalpunkt (`.`), Exponentenzeichen (`e` oder `E`) und das Literal `"Infinity"`.
- Die `+`/`-` Zeichen können nur streng am Anfang des Strings oder unmittelbar nach dem `e`/`E` Zeichen erscheinen. Der Dezimalpunkt kann nur einmal vorkommen und nur vor dem `e`/`E` Zeichen. Das `e`/`E` Zeichen kann nur einmal erscheinen und nur, wenn sich mindestens eine Ziffer davor befindet.
- Führende Leerzeichen im Argument werden entfernt und ignoriert.
- `parseFloat()` kann auch {{jsxref("Infinity")}} oder `-Infinity` analysieren und zurückgeben, wenn der String mit `"Infinity"` oder `"-Infinity"` beginnt und von keinem oder mehreren Leerzeichen vorhergegangen wird.
- `parseFloat()` wählt die längste Teilzeichenkette vom Anfang an, die ein gültiges Zahlenliteral erzeugt. Trifft es auf ein ungültiges Zeichen, wird die Zahl bis zu diesem Punkt zurückgegeben, wobei das ungültige Zeichen und alle folgenden Zeichen ignoriert werden.
- Wenn das erste Zeichen des Arguments kein legales Zahlenliteral mit der obigen Syntax beginnen kann, gibt `parseFloat` {{jsxref("NaN")}} zurück.

Syntaxmäßig analysiert `parseFloat()` einen Teil der Syntax, die die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) Funktion akzeptiert. Namentlich unterstützt `parseFloat()` keine nicht-dezimalen Literale mit `0x`, `0b` oder `0o` Präfixen, akzeptiert jedoch alles andere. Allerdings ist `parseFloat()` toleranter als `Number()`, da es nachfolgende ungültige Zeichen ignoriert, die `Number()` dazu veranlassen würden, `NaN` zurückzugeben.

Ähnlich wie bei Zahlenliteralen und `Number()` kann die von `parseFloat()` zurückgegebene Zahl möglicherweise nicht exakt der von dem String dargestellten Zahl entsprechen, aufgrund von Schwankungen und Ungenauigkeiten im Gleitkommaformat. Für Zahlen außerhalb des Bereichs von `-1.7976931348623158e+308` – `1.7976931348623158e+308` (siehe {{jsxref("Number.MAX_VALUE")}}), wird `-Infinity` oder `Infinity` zurückgegeben.

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

Anekdotisch, da der String `NaN` selbst eine ungültige Syntax ist, wie sie von `parseFloat()` akzeptiert wird, ergibt die Übergabe von `"NaN"` ebenfalls `NaN`.

```js
parseFloat("NaN"); // NaN
```

### Rückgabe von Infinity

Infinity-Werte werden zurückgegeben, wenn die Zahl außerhalb des Bereichs des Double-Precision 64-Bit IEEE 754-2019 Formats liegt:

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

`parseFloat()` verarbeitet keine {{jsxref("BigInt")}} Werte. Es stoppt am `n` Zeichen und behandelt die vorhergehende Zeichenfolge als normale ganze Zahl, was zu einem möglichen Präzisionsverlust führt. Wird ein BigInt-Wert an `parseFloat()` übergeben, wird er in einen String konvertiert und der String wird als Gleitpunktzahl analysiert, was ebenfalls zu einem Präzisionsverlust führen kann.

```js example-bad
parseFloat(900719925474099267n); // 900719925474099300
parseFloat("900719925474099267n"); // 900719925474099300
```

Sie sollten den String stattdessen an die [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Funktion übergeben, ohne das abschließende `n` Zeichen.

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
