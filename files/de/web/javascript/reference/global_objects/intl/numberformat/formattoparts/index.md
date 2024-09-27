---
title: Intl.NumberFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die **`formatToParts()`** Methode von {{jsxref("Intl.NumberFormat")}} Instanzen ermöglicht die lokalisierungsbezogene Formatierung von Zeichenfolgen, die durch dieses `Intl.NumberFormat`-Objekt erzeugt werden.

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-formattoparts.html")}}

## Syntax

```js-nolint
formatToParts()
formatToParts(number)
```

### Parameter

- `number` {{optional_inline}}
  - : Eine {{jsxref("Number")}} oder {{jsxref("BigInt")}} zur Formatierung.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die die formatierte Zahl in Teilen enthalten.

## Beschreibung

Die `formatToParts()` Methode ist nützlich für die benutzerdefinierte Formatierung von Zahlzeichenfolgen. Sie gibt ein {{jsxref("Array")}} von Objekten zurück, das die lokalisierungsspezifischen Tokens enthält, aus denen benutzerdefinierte Zeichenfolgen erstellt werden können, während die lokalisierungsspezifischen Teile erhalten bleiben. Die Struktur, die die `formatToParts()` Methode zurückgibt, sieht folgendermaßen aus:

```js
[
  { type: "integer", value: "3" },
  { type: "group", value: "." },
  { type: "integer", value: "500" },
];
```

Mögliche Typen sind die folgenden:

- `compact`
  - : Der Exponent in "lang"- oder "kurz"-Form, je nachdem, wie `compactDisplay` (das standardmäßig auf `short` gesetzt ist) angegeben wird, wenn `notation` auf `compact` gesetzt ist.
- `currency`
  - : Die Währungszeichenfolge, wie die Symbole "$" und "€" oder der Name "Dollar", "Euro", je nachdem, wie `currencyDisplay` angegeben wird.
- `decimal`
  - : Die Dezimaltrennzeichen-Zeichenfolge (".").
- `exponentInteger`
  - : Der Exponent-Ganzzahlenwert, wenn `notation` auf `scientific` oder `engineering` gesetzt ist.
- `exponentMinusSign`
  - : Das Exponent-Minus-Zeichen ("-").
- `exponentSeparator`
  - : Der Exponent-Trennzeichen, wenn `notation` auf `scientific` oder `engineering` gesetzt ist.
- `fraction`
  - : Die Bruchzahl.
- `group`
  - : Das Gruppentrennzeichen (",").
- `infinity`
  - : Die {{jsxref("Infinity")}} Zeichenfolge ("∞").
- `integer`
  - : Die Ganzzahl.
- `literal`
  - : Beliebige Literalzeichenfolgen oder Leerzeichen in der formatierten Zahl.
- `minusSign`
  - : Das Minus-Zeichen ("-").
- `nan`
  - : Die {{jsxref("NaN")}} Zeichenfolge ("NaN").
- `plusSign`
  - : Das Plus-Zeichen ("+").
- `percentSign`
  - : Das Prozentzeichen ("%").
- `unit`
  - : Die Einheit-Zeichenfolge, wie "l" oder "litres", je nachdem, wie `unitDisplay` angegeben wird.
- `unknown`
  - : Die Zeichenfolge für `unknown` Typ-Ergebnisse.

## Beispiele

### Vergleich von format und formatToParts

`NumberFormat` gibt lokalisierte, undurchsichtige Zeichenfolgen aus, die nicht direkt manipuliert werden können:

```js
const number = 3500;

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

formatter.format(number);
// "3.500,00 €"
```

In vielen Benutzeroberflächen besteht jedoch der Wunsch, die Formatierung dieser Zeichenfolge anzupassen. Die `formatToParts`-Methode ermöglicht die lokalisierungsbezogene Formatierung von durch `NumberFormat` -Formateuren erzeugten Zeichenfolgen, indem sie die Zeichenfolge in Teilen bereitstellt:

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

Nun sind die Informationen separat verfügbar und können auf angepasste Weise erneut formatiert und verkettet werden. Zum Beispiel durch den Einsatz von {{jsxref("Array.prototype.map()")}}, [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), einer [switch-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/switch), [Template-Literalen](/de/docs/Web/JavaScript/Reference/Template_literals) und {{jsxref("Array.prototype.reduce()")}}.

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

Dadurch wird die Währung fett dargestellt, wenn die `formatToParts()` Methode verwendet wird.

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
