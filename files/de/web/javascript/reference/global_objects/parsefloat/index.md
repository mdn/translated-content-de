---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
l10n:
  sourceCommit: 0c3c464abb1422b0534a5e3f5e81e9bbae13544c
---

Die Funktion **`parseFloat()`** analysiert ein String-Argument und gibt eine Gleitkommazahl zurück.

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
  - : Der zu analysierende Wert, der [in einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) wird. Vorangestellte {{Glossary("whitespace", "Leerraumzeichen")}} in diesem Argument werden ignoriert.

### Rückgabewert

Eine aus dem angegebenen `string` gelesene Gleitkommazahl oder {{jsxref("NaN")}}, wenn das erste Zeichen, das kein Leerraumzeichen ist, nicht in eine Zahl umgewandelt werden kann.

> [!NOTE]
> JavaScript unterscheidet auf Sprachebene nicht zwischen „Gleitkommazahlen“ und „Ganzzahlen“. [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) und `parseFloat()` unterscheiden sich nur darin, wie sie ihre Eingabe analysieren, aber nicht unbedingt in ihren Rückgabewerten. Beispielsweise geben `parseInt("42")` und `parseFloat("42")` denselben Wert zurück: einen {{jsxref("Number")}}-Wert von 42.

## Beschreibung

Die Funktion `parseFloat` wandelt ihr erstes Argument in einen String um, analysiert diesen String als dezimales Zahlenliteral und gibt anschließend eine Zahl oder `NaN` zurück. Die akzeptierte Zahlensyntax lässt sich wie folgt zusammenfassen:

- `parseFloat()` akzeptiert das Pluszeichen (`+`), das Minuszeichen (`-` U+002D HYPHEN-MINUS), Dezimalziffern (`0` – `9`), den Dezimalpunkt (`.`), den Exponentenindikator (`e` oder `E`) und das Literal `"Infinity"`.
- Die Zeichen `+`/`-` dürfen nur ganz am Anfang des Strings oder unmittelbar nach dem Zeichen `e`/`E` stehen. Der Dezimalpunkt darf nur einmal und nur vor dem Zeichen `e`/`E` vorkommen. Das Zeichen `e`/`E` darf ebenfalls nur einmal vorkommen und nur dann, wenn mindestens eine Ziffer davor steht.
- Vorangestellte Leerraumzeichen im Argument werden entfernt und ignoriert.
- `parseFloat()` kann auch {{jsxref("Infinity")}} oder `-Infinity` lesen und zurückgeben, wenn der String mit `"Infinity"` oder `"-Infinity"` beginnt und davor beliebig viele Leerraumzeichen stehen.
- `parseFloat()` verwendet den längsten Teilstring vom Anfang an, der ein gültiges Zahlenliteral bildet. Trifft die Funktion auf ein ungültiges Zeichen, gibt sie die bis zu dieser Stelle dargestellte Zahl zurück und ignoriert das ungültige Zeichen sowie alle folgenden Zeichen.
- Wenn das erste Zeichen des Arguments gemäß der oben beschriebenen Syntax kein gültiges Zahlenliteral beginnen kann, gibt `parseFloat` {{jsxref("NaN")}} zurück.

Hinsichtlich der Syntax verarbeitet `parseFloat()` eine Teilmenge der Syntax, die die Funktion [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) akzeptiert. Insbesondere unterstützt `parseFloat()` keine nicht dezimalen Literale mit den Präfixen `0x`, `0b` oder `0o` und gibt für leere Strings oder Strings zurück, die nur aus Leerraumzeichen bestehen, `NaN` zurück. `Number()` wandelt solche Strings dagegen in `0` um. Allerdings ist `parseFloat()` weniger streng als `Number()`, da es ungültige Zeichen am Ende ignoriert, bei denen `Number()` `NaN` zurückgeben würde.

Wie bei Zahlenliteralen und `Number()` kann die von `parseFloat()` zurückgegebene Zahl aufgrund des Wertebereichs und der Ungenauigkeit von Gleitkommazahlen von der durch den String dargestellten Zahl abweichen. Bei Zahlen außerhalb des Bereichs von `-1.7976931348623158e+308` bis `1.7976931348623158e+308` (siehe {{jsxref("Number.MAX_VALUE")}}) wird `-Infinity` oder `Infinity` zurückgegeben.

## Beispiele

### parseFloat() verwenden

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

### Rückgabe von NaN durch parseFloat()

Das folgende Beispiel gibt `NaN` zurück:

```js
parseFloat("FF2");
```

Da der String `NaN` selbst keine von `parseFloat()` akzeptierte Syntax darstellt, gibt auch die Übergabe von `"NaN"` den Wert `NaN` zurück.

```js
parseFloat("NaN"); // NaN
```

### Rückgabe von Infinity

Infinity-Werte werden zurückgegeben, wenn die Zahl außerhalb des Wertebereichs des 64-Bit-IEEE-754-2019-Formats mit doppelter Genauigkeit liegt:

```js
parseFloat("1.7976931348623159e+308"); // Infinity
parseFloat("-1.7976931348623159e+308"); // -Infinity
```

Infinity wird auch zurückgegeben, wenn der String mit `"Infinity"` oder `"-Infinity"` beginnt:

```js
parseFloat("Infinity"); // Infinity
parseFloat("-Infinity"); // -Infinity
```

### Zusammenspiel mit BigInt-Werten

`parseFloat()` verarbeitet {{jsxref("BigInt")}}-Werte nicht als solche. Die Funktion stoppt beim Zeichen `n` und behandelt den vorangehenden String als gewöhnliche Ganzzahl, wobei Genauigkeit verloren gehen kann. Wenn ein BigInt-Wert an `parseFloat()` übergeben wird, wird er in einen String umgewandelt. Dieser String wird anschließend als Gleitkommazahl gelesen, was ebenfalls zu einem Genauigkeitsverlust führen kann.

```js example-bad
parseFloat(900719925474099267n); // 900719925474099300
parseFloat("900719925474099267n"); // 900719925474099300
```

Übergeben Sie den String stattdessen ohne das abschließende Zeichen `n` an die Funktion [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt).

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
