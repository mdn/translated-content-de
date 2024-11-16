---
title: Intl.NumberFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
l10n:
  sourceCommit: 21c2a7fa64659b6d56c3404edac193fd84ebda20
---

{{JSRef}}

Die **`formatToParts()`** Methode von Instanzen des {{jsxref("Intl.NumberFormat")}} ermöglicht eine lokalisierungsbezogene Formatierung von Zeichenfolgen, die von diesem `Intl.NumberFormat`-Objekt erzeugt werden.

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-formattoparts.html")}}

## Syntax

```js-nolint
formatToParts(number)
```

### Parameter

- `number`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}}, oder Zeichenfolge, die formatiert werden soll. Zeichenfolgen werden auf die gleiche Weise geparst wie bei der [Zahlumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), außer dass `formatToParts()` den exakten Wert verwendet, den die Zeichenfolge darstellt, um einen Präzisionsverlust bei der impliziten Umwandlung in eine Zahl zu vermeiden.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das die formatierte Zahl in Teilen enthält.

## Beschreibung

Die `formatToParts()` Methode ist nützlich für die benutzerdefinierte Formatierung von Zahlzeichenfolgen. Sie gibt ein {{jsxref("Array")}} von Objekten zurück, das die lokalisierungsspezifischen Tokens enthält, aus denen es möglich ist, benutzerdefinierte Zeichenfolgen zu erstellen, während die lokalisierungsspezifischen Teile erhalten bleiben. Die Struktur, die die `formatToParts()` Methode zurückgibt, sieht folgendermaßen aus:

```js
[
  { type: "integer", value: "3" },
  { type: "group", value: "." },
  { type: "integer", value: "500" },
];
```

Mögliche Typen sind die folgenden:

- `compact`
  - : Der Exponent in `"long"` oder `"short"` Form, abhängig davon, wie `compactDisplay` (das standardmäßig auf `short` eingestellt ist) angegeben ist, wenn `notation` auf `compact` gesetzt ist.
- `currency`
  - : Die Währungszeichenfolge, wie die Symbole "$" und "€" oder der Name "Dollar", "Euro", abhängig davon, wie `currencyDisplay` angegeben ist.
- `decimal`
  - : Die Dezimaltrennzeichen-Zeichenfolge (".").
- `exponentInteger`
  - : Der Exponent als ganze Zahl, wenn `notation` auf `scientific` oder `engineering` gesetzt ist.
- `exponentMinusSign`
  - : Die Exponenten-Minuszeichen-Zeichenfolge ("-").
- `exponentSeparator`
  - : Der Exponententrenner, wenn `notation` auf `scientific` oder `engineering` gesetzt ist.
- `fraction`
  - : Die Bruchzahl.
- `group`
  - : Die Gruppentrennzeichen-Zeichenfolge (",").
- `infinity`
  - : Die {{jsxref("Infinity")}} Zeichenfolge ("∞").
- `integer`
  - : Die ganze Zahl.
- `literal`
  - : Beliebige literale Zeichenfolgen oder Leerzeichen in der formatierten Zahl.
- `minusSign`
  - : Die Minuszeichen-Zeichenfolge ("-").
- `nan`
  - : Die {{jsxref("NaN")}} Zeichenfolge ("NaN").
- `plusSign`
  - : Die Pluszeichen-Zeichenfolge ("+").
- `percentSign`
  - : Das Prozentzeichen ("%").
- `unit`
  - : Die Einheitenzeichenfolge, wie "l" oder "Liter", abhängig davon, wie `unitDisplay` angegeben ist.
- `unknown`
  - : Die Zeichenfolge für `unknown` Typ Ergebnisse.

## Beispiele

### Vergleich von format und formatToParts

`NumberFormat` gibt lokalisierte, intransparente Zeichenfolgen aus, die nicht direkt manipuliert werden können:

```js
const number = 3500;

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

formatter.format(number);
// "3.500,00 €"
```

In vielen Benutzeroberflächen gibt es jedoch den Wunsch, die Formatierung dieser Zeichenfolge anzupassen. Die `formatToParts` Methode ermöglicht eine lokalisierungsbezogene Formatierung von Zeichenfolgen, die von `NumberFormat` Formatierern erzeugt werden, indem sie Ihnen die Zeichenfolge in Teilen bereitstellt:

```js
formatter.formatToParts(number);

// return value:
[
  { type: "integer", value: "3" },
  { type: "group", value: "." },
  { type: "integer", value: "500" },
  { type: "decimal", value: "," },
  { type: "fraction", value: "00" },
  { type: "literal", value: " " },
  { type: "currency", value: "€" },
];
```

Nun ist die Information separat verfügbar und kann auf eine benutzerdefinierte Weise formatiert und wieder zusammengefügt werden. Zum Beispiel durch die Verwendung von {{jsxref("Array.prototype.map()")}}, [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), einer [switch-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/switch), [Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals), und {{jsxref("Array.prototype.reduce()")}}.

```js
const numberString = formatter
  .formatToParts(number)
  .map(({ type, value }) => {
    switch (type) {
      case "currency":
        return `<strong>${value}</strong>`;
      default:
        return value;
    }
  })
  .reduce((string, part) => string + part);
```

Dies wird die Währung fett darstellen, wenn die `formatToParts()` Methode verwendet wird.

```js
console.log(numberString);
// "3.500,00 <strong>€</strong>"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
- {{jsxref("Intl/DateTimeFormat/formatToParts", "Intl.DateTimeFormat.prototype.formatToParts()")}}
