---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Objects")}}

Die **`parseFloat()`**-Funktion analysiert ein String-Argument und gibt eine Gleitkommazahl zurück.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - parseFloat()")}}

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

Eine aus dem gegebenen `string` analysierte Gleitkommazahl oder {{jsxref("NaN")}}, wenn das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann.

> [!NOTE]
> JavaScript unterscheidet auf Sprachebene nicht zwischen "Gleitkommazahlen" und "Ganzzahlen". [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) und `parseFloat()` unterscheiden sich nur im Analyseverhalten, aber nicht zwingend in ihren Rückgabewerten. Zum Beispiel würden `parseInt("42")` und `parseFloat("42")` denselben Wert zurückgeben: eine {{jsxref("Number")}} 42.

## Beschreibung

Die Funktion `parseFloat` konvertiert ihr erstes Argument in einen String, analysiert diesen String als ein literales Dezimalzahlensystem und gibt dann eine Zahl oder `NaN` zurück. Die von ihr akzeptierte Syntax von Zahlen kann wie folgt zusammengefasst werden:

- Die von `parseFloat()` akzeptierten Zeichen sind Pluszeichen (`+`), Minuszeichen (`-` U+002D HYPHEN-MINUS), Dezimalziffern (`0` – `9`), Dezimalpunkt (`.`), Exponentenzeichen (`e` oder `E`) und das Literal `"Infinity"`.
- Die Zeichen `+`/`-` können nur streng am Anfang des Strings oder direkt nach dem Zeichen `e`/`E` erscheinen. Der Dezimalpunkt kann nur einmal und nur vor dem Zeichen `e`/`E` erscheinen. Das Zeichen `e`/`E` kann ebenfalls nur einmal erscheinen und nur, wenn davor mindestens eine Ziffer vorhanden ist.
- Führende Leerzeichen im Argument werden entfernt und ignoriert.
- `parseFloat()` kann auch {{jsxref("Infinity")}} oder `-Infinity` analysieren und zurückgeben, wenn der String mit `"Infinity"` oder `"-Infinity"` beginnt, vorausgesetzt, davor stehen keine oder beliebig viele Leerzeichen.
- `parseFloat()` wählt die längste Teilfolge vom Anfang, die ein gültiges Zahlenliteral ergibt. Wenn es ein ungültiges Zeichen trifft, gibt es die Zahl zurück, die bis zu diesem Punkt dargestellt wurde, und ignoriert das ungültige Zeichen sowie alle nachfolgenden Zeichen.
- Wenn das erste Zeichen des Arguments kein zulässiges Zahlenliteral starten kann, gibt `parseFloat` {{jsxref("NaN")}} zurück.

Syntaxtechnisch analysiert `parseFloat()` eine Teilmenge der Syntax, die die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Funktion akzeptiert. Namentlich unterstützt `parseFloat()` keine nicht-dezimalen Literale mit den Präfixen `0x`, `0b` oder `0o`, unterstützt jedoch alles andere. Im Gegensatz dazu ist `parseFloat()` nachsichtiger als `Number()`, da es nachfolgende ungültige Zeichen ignoriert, die `Number()` dazu veranlassen würden, `NaN` zurückzugeben.

Ähnlich wie bei Zahlenliteralen und `Number()` entspricht die von `parseFloat()` zurückgegebene Zahl möglicherweise nicht genau der Zahl, die durch den String dargestellt wird, aufgrund des Gleitkommadatenbereichs und der Ungenauigkeit. Für Zahlen außerhalb des Bereichs `-1.7976931348623158e+308` – `1.7976931348623158e+308` (siehe {{jsxref("Number.MAX_VALUE")}}) wird `-Infinity` oder `Infinity` zurückgegeben.

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

Anmerkung: Da der String `NaN` selbst eine ungültige Syntax ist, wie sie von `parseFloat()` akzeptiert wird, gibt auch das Übergeben von `"NaN"` `NaN` zurück.

```js
parseFloat("NaN"); // NaN
```

### Rückgabe von Infinity

"Wertbereiche außerhalb des Bereichs des Double-Precision-64-Bit-IEEE-754-2019-Formats" erzeugen Unendlichkeitswerte:

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

`parseFloat()` verarbeitet keine {{jsxref("BigInt")}}-Werte. Es stoppt am Zeichen `n` und behandelt die vorangehenden Zeichen als eine normale Ganzzahl, was zu einem möglichen Präzisionsverlust führen kann. Wenn ein BigInt-Wert an `parseFloat()` übergeben wird, wird er in einen String konvertiert, und der String wird als Gleitkommazahl analysiert, was ebenfalls zu einem Präzisionsverlust führen kann.

```js example-bad
parseFloat(900719925474099267n); // 900719925474099300
parseFloat("900719925474099267n"); // 900719925474099300
```

Sie sollten den String stattdessen an die [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion übergeben, ohne das abschließende `n`-Zeichen.

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
