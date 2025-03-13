---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Objects")}}

Die Funktion **`parseFloat()`** analysiert einen String-Parameter und gibt eine Fließkommazahl zurück.

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
  - : Der zu analysierende Wert, [in einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Führende {{Glossary("whitespace", "Leerzeichen")}} in diesem Argument werden ignoriert.

### Rückgabewert

Eine Fließkommazahl, die aus dem angegebenen `string` analysiert wurde, oder {{jsxref("NaN")}}, wenn das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann.

> [!NOTE]
> JavaScript unterscheidet auf Sprachebene nicht zwischen "Fließkommazahlen" und "Ganzzahlen". [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) und `parseFloat()` unterscheiden sich nur in ihrem Analyseverhalten, aber nicht unbedingt in ihren Rückgabewerten. Beispielsweise würden `parseInt("42")` und `parseFloat("42")` denselben Wert zurückgeben: eine {{jsxref("Number")}} 42.

## Beschreibung

Die Funktion `parseFloat` konvertiert ihr erstes Argument in einen String, analysiert diesen String als dezimale Zahlendarstellung und gibt dann eine Zahl oder `NaN` zurück. Die akzeptierte Zahlensyntax lässt sich wie folgt zusammenfassen:

- Die von `parseFloat()` akzeptierten Zeichen sind Pluszeichen (`+`), Minuszeichen (`-` U+002D HYPHEN-MINUS), Dezimalziffern (`0` – `9`), Dezimalpunkt (`.`), Exponentenanzeiger (`e` oder `E`) und das Literal `"Infinity"`.
- Die `+`/`-` Zeichen können nur streng am Anfang des Strings oder unmittelbar nach dem `e`/`E` Zeichen erscheinen. Der Dezimalpunkt kann nur einmal und nur vor dem `e`/`E` Zeichen erscheinen. Das `e`/`E` Zeichen kann nur einmal erscheinen und nur, wenn mindestens eine Ziffer davor steht.
- Führende Leerzeichen im Argument werden abgeschnitten und ignoriert.
- `parseFloat()` kann auch {{jsxref("Infinity")}} oder `-Infinity` analysieren und zurückgeben, wenn der String mit `"Infinity"` oder `"-Infinity"` beginnt und null oder mehr Leerzeichen davorstehen.
- `parseFloat()` wählt die längste Teilzeichenkette, die am Anfang beginnt und einen gültigen Zahlenwert erzeugt. Wenn es auf ein ungültiges Zeichen trifft, gibt es die bis zu diesem Punkt dargestellte Zahl zurück und ignoriert das ungültige Zeichen und alle folgenden Zeichen.
- Wenn das erste Zeichen des Arguments keinen legalen Zahlenwert gemäß der obigen Syntax starten kann, gibt `parseFloat` {{jsxref("NaN")}} zurück.

Syntaxmäßig analysiert `parseFloat()` eine Teilmenge der Syntax, die die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) Funktion akzeptiert. `parseFloat()` unterstützt nämlich keine nicht-dezimalen Literale mit den Präfixen `0x`, `0b` oder `0o`, aber alles andere. `parseFloat()` ist jedoch nachsichtiger als `Number()`, da es nachfolgende ungültige Zeichen ignoriert, die `Number()` dazu bringen würden, `NaN` zurückzugeben.

Ähnlich wie bei Zahlenliteral and `Number()` kann die von `parseFloat()` zurückgegebene Zahl aufgrund des Fließkommabereichs und der Ungenauigkeit nicht genau gleich der von dem String dargestellten Zahl sein. Für Zahlen außerhalb des `-1.7976931348623158e+308` – `1.7976931348623158e+308` Bereichs (siehe {{jsxref("Number.MAX_VALUE")}}) wird `-Infinity` oder `Infinity` zurückgegeben.

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

Anekdotisch, weil der String `NaN` selbst eine ungültige Syntax ist, wie sie von `parseFloat()` akzeptiert wird, gibt die Übergabe von `"NaN"` ebenfalls `NaN` zurück.

```js
parseFloat("NaN"); // NaN
```

### Rückgabe von Infinity

Infinity-Werte werden zurückgegeben, wenn die Zahl außerhalb des Bereichs des Double-Precision 64-bit IEEE 754-2019 Formats liegt:

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

`parseFloat()` verarbeitet keine {{jsxref("BigInt")}}-Werte. Es stoppt am `n` Zeichen und behandelt den vorangehenden String als normale Ganzzahl, wobei die Genauigkeit verloren gehen kann. Wenn ein BigInt-Wert an `parseFloat()` übergeben wird, wird er in einen String umgewandelt und der String als Fließkommazahl analysiert, was ebenfalls zu einem Verlust der Genauigkeit führen kann.

```js example-bad
parseFloat(900719925474099267n); // 900719925474099300
parseFloat("900719925474099267n"); // 900719925474099300
```

Sie sollten den String stattdessen an die Funktion [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) ohne das nachfolgende `n` Zeichen übergeben.

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
