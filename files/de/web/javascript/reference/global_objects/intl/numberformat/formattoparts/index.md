---
title: Intl.NumberFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die **`formatToParts()`**-Methode von Instanzen des {{jsxref("Intl.NumberFormat")}} ermöglicht eine lokalisierungsbewusste Formatierung von Strings, die von diesem `Intl.NumberFormat`-Objekt erzeugt werden.

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

Ein {{jsxref("Array")}} von Objekten, das die formatierte Zahl in Teilen enthält.

## Beschreibung

Die `formatToParts()`-Methode ist nützlich für die benutzerdefinierte Formatierung von Zahlstrings. Sie gibt ein {{jsxref("Array")}} von Objekten zurück, das die lokalisierungsabhängigen Tokens enthält, aus denen benutzerdefinierte Strings erstellt werden können, während die lokalisierungsabhängigen Teile erhalten bleiben. Die Struktur, die die `formatToParts()`-Methode zurückgibt, sieht folgendermaßen aus:

```js
[
  { type: "integer", value: "3" },
  { type: "group", value: "." },
  { type: "integer", value: "500" },
];
```

Mögliche Typen sind die folgenden:

- `compact`
  - : Der Exponent in „long“- oder „short“-Form, abhängig davon, wie `compactDisplay` (standardmäßig `short`) angegeben wird, wenn `notation` auf `compact` gesetzt ist.
- `currency`
  - : Der Währungsstring, wie etwa die Symbole „$“ und „€“ oder der Name „Dollar“, „Euro“, abhängig davon, wie `currencyDisplay` angegeben wird.
- `decimal`
  - : Der Dezimaltrennstring („.“).
- `exponentInteger`
  - : Der Exponent-Wert, wenn `notation` auf `scientific` oder `engineering` gesetzt ist.
- `exponentMinusSign`
  - : Der Exponent-Minuszeichen-String („-“).
- `exponentSeparator`
  - : Der Exponent-Trennzeichen, wenn `notation` auf `scientific` oder `engineering` gesetzt ist.
- `fraction`
  - : Der Bruchteil der Zahl.
- `group`
  - : Der Gruppentrennstring („,“).
- `infinity`
  - : Der {{jsxref("Infinity")}} String („∞“).
- `integer`
  - : Der ganzzahlige Teil der Zahl.
- `literal`
  - : Alle Literalstrings oder Leerzeichen in der formatierten Zahl.
- `minusSign`
  - : Der Minuszeichen-String („-“).
- `nan`
  - : Der {{jsxref("NaN")}}-String („NaN“).
- `plusSign`
  - : Der Pluszeichen-String („+“).
- `percentSign`
  - : Der Prozentzeichen-String („%“).
- `unit`
  - : Der Einheit-String, wie „l“ oder „litres“, abhängig davon, wie `unitDisplay` angegeben wird.
- `unknown`
  - : Der String für `unknown`-Typ-Ergebnisse.

## Beispiele

### Vergleich von `format` und `formatToParts`

`NumberFormat` gibt lokalisierte, undurchsichtige Strings aus, die nicht direkt manipuliert werden können:

```js
const number = 3500;

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

formatter.format(number);
// "3.500,00 €"
```

Jedoch besteht in vielen Benutzeroberflächen der Wunsch, die Formatierung dieses Strings anzupassen. Die `formatToParts`-Methode ermöglicht eine lokalisierungsbewusste Formatierung der von `NumberFormat`-Formatierern erzeugten Strings, indem sie den String in Teilen bereitstellt:

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

Nun sind die Informationen getrennt verfügbar und können in einer angepassten Weise neu formatiert und wieder zusammengefügt werden. Beispielsweise durch Verwendung von {{jsxref("Array.prototype.map()")}}, [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), einem [switch statement](/de/docs/Web/JavaScript/Reference/Statements/switch), [Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals) und {{jsxref("Array.prototype.reduce()")}}.

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

Dies wird die Währung fett darstellen, wenn die `formatToParts()`-Methode verwendet wird.

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
