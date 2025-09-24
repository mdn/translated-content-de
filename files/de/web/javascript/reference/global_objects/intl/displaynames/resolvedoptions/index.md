---
title: Intl.DisplayNames.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die **`resolvedOptions()`** Methode von {{jsxref("Intl.DisplayNames")}} Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `DisplayNames` Objekts berechneten Optionen widerspiegeln.

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `DisplayNames` Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgelistet sind:

- `locale`
  - : Das {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} für die tatsächlich verwendete Lokalisierung, bestimmt durch den [Lokalisation-Verhandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Kein Unicode-Erweiterungsschlüssel wird in die Ausgabe aufgenommen.
- `style`
  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert, wobei die Standardeinstellung nach Bedarf ausgefüllt wird. Es ist entweder `"narrow"`, `"short"` oder `"long"`. Der Standardwert ist `"long"`.
- `type`
  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert. Es ist entweder `"language"`, `"region"`, `"script"`, `"currency"`, `"calendar"`, oder `"dateTimeField"`. Es ist erforderlich, daher gibt es keinen Standardwert.
- `fallback`
  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert. Es ist entweder `"code"` oder `"none"`. Der Standardwert ist `"code"`.
- `languageDisplay`
  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert. Es ist entweder `"dialect"` oder `"standard"`. Der Standardwert ist `"dialect"`.

## Beispiele

### Verwendung von resolvedOptions

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
