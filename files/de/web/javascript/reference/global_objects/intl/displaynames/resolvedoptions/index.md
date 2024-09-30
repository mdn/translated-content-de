---
title: Intl.DisplayNames.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions
l10n:
  sourceCommit: 643fa96e963ecaf2959cca5ddb573751a3efafac
---

{{JSRef}}

Die **`resolvedOptions()`** Methode von {{jsxref("Intl.DisplayNames")}} Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die Optionen widerspiegeln, die während der Initialisierung dieses `DisplayNames`-Objekts berechnet wurden.

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `DisplayNames`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, wie sie aufgelistet sind:

- `locale`
  - : Der BCP 47-Sprachcode für das tatsächlich verwendete Gebietsschema, bestimmt durch den [locale negotiation](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)-Prozess. Kein Unicode-Erweiterungsschlüssel wird in die Ausgabe aufgenommen.
- `style`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wurde, mit Standards, die bei Bedarf ausgefüllt wurden. Es ist entweder `"narrow"`, `"short"` oder `"long"`. Der Standard ist `"long"`.
- `type`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wurde. Es ist entweder `"language"`, `"region"`, `"script"`, `"currency"`, `"calendar"` oder `"dateTimeField"`. Es ist erforderlich, daher gibt es keinen Standard.
- `fallback`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wurde. Es ist entweder `"code"` oder `"none"`. Der Standard ist `"code"`.
- `languageDisplay`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument angegeben wurde. Es ist entweder `"dialect"` oder `"standard"`. Der Standard ist `"dialect"`.

## Beispiele

### Verwenden von resolvedOptions

```js
const displayNames = new Intl.DisplayNames(["de-DE"], { type: "region" });

const usedOptions = displayNames.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.style); // "long"
console.log(usedOptions.type); // "region"
console.log(usedOptions.fallback); // "code"
```

```js
const displayNames = new Intl.DisplayNames("en", {
  type: "language",
  languageDisplay: "standard",
});

const usedOptions = displayNames.resolvedOptions();
console.log(usedOptions.type); // "language"
console.log(usedOptions.languageDisplay); // "standard"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DisplayNames")}}
