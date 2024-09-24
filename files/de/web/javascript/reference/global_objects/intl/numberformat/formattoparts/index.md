---
title: Intl.NumberFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die Methode **`formatToParts()`** von {{jsxref("Intl.NumberFormat")}}-Instanzen ermöglicht die locale-spezifische Formatierung von Zeichenfolgen, die von diesem `Intl.NumberFormat`-Objekt erzeugt wurden.

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-formattoparts.html")}}

## Syntax

```js-nolint
formatToParts()
formatToParts(number)
```

### Parameter

- `number` {{optional_inline}}
  - : Eine {{jsxref("Number")}} oder {{jsxref("BigInt")}}, die formatiert werden soll.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die die formatierte Zahl in Teilen enthalten.

## Beschreibung

Die Methode `formatToParts()` ist nützlich für die benutzerdefinierte Formatierung von Zahlenzeichenfolgen. Sie gibt ein {{jsxref("Array")}} von Objekten zurück, die die locale-spezifischen Tokens enthalten, aus denen benutzerdefinierte Zeichenfolgen unter Beibehaltung der locale-spezifischen Teile aufgebaut werden können. Die von der Methode `formatToParts()` zurückgegebene Struktur sieht folgendermaßen aus:

```js
[
  { type: "integer", value: "3" },
  { type: "group", value: "." },
  { type: "integer", value: "500" },
];
```

Mögliche Typen sind die folgenden:

- `compact`
  - : Der Exponent in `"long"`- oder `"short"`-Form, abhängig davon, wie `compactDisplay` (das standardmäßig auf `short` gesetzt ist) angegeben wird, wenn `notation` auf `compact` gesetzt ist.
- `currency`
  - : Die Währungszeichenfolge, wie die Symbole "$" und "€" oder die Namen "Dollar", "Euro", abhängig davon, wie `currencyDisplay` angegeben ist.
- `decimal`
  - : Die Dezimaltrennzeichen-Zeichenfolge (".").
- `exponentInteger`
  - : Der Exponent-Integerwert, wenn `notation` auf `scientific` oder `engineering` gesetzt ist.
- `exponentMinusSign`
  - : Die Exponent-Minuszeichen-Zeichenfolge ("-").
- `exponentSeparator`
  - : Der Exponent-Separator, wenn `notation` auf `scientific` oder `engineering` gesetzt ist.
- `fraction`
  - : Die Bruchzahl.
- `group`
  - : Die Gruppentrennzeichen-Zeichenfolge (",").
- `infinity`
  - : Die {{jsxref("Infinity")}}-Zeichenfolge ("∞").
- `integer`
  - : Die Ganzzahl.
- `literal`
  - : Jegliche Literalzeichenfolgen oder Leerzeichen in der formatierten Zahl.
- `minusSign`
  - : Die Minuszeichen-Zeichenfolge ("-").
- `nan`
  - : Die {{jsxref("NaN")}}-Zeichenfolge ("NaN").
- `plusSign`
  - : Die Pluszeichen-Zeichenfolge ("+").
- `percentSign`
  - : Die Prozentzeichen-Zeichenfolge ("%").
- `unit`
  - : Die Einheitenzeichenfolge, wie "l" oder "litres", abhängig davon, wie `unitDisplay` angegeben ist.
- `unknown`
  - : Die Zeichenfolge für `unknown`-Typ-Ergebnisse.

## Beispiele

### Vergleich zwischen format und formatToParts

`NumberFormat` gibt lokalisierte, nicht manipulierbare Zeichenfolgen zurück:

```js
const number = 3500;

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

formatter.format(number);
// "3.500,00 €"
```

In vielen Benutzeroberflächen besteht jedoch der Wunsch, die Formatierung dieser Zeichenfolge anzupassen. Die Methode `formatToParts` ermöglicht die locale-spezifische Formatierung von Zeichenfolgen, die von `NumberFormat`-Formatierern erzeugt werden, indem sie die Zeichenfolge in Teilen bereitstellt:

```js
formatter.formatToParts(number);

// Rückgabewert:
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

Jetzt sind die Informationen separat verfügbar und können auf eine benutzerdefinierte Weise wieder formatiert und zusammengefügt werden. Zum Beispiel durch die Verwendung von {{jsxref("Array.prototype.map()")}}, [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), einer [switch-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/switch), [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) und {{jsxref("Array.prototype.reduce()")}}.

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

Dies wird die Währung fett darstellen, wenn die Methode `formatToParts()` verwendet wird.

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
