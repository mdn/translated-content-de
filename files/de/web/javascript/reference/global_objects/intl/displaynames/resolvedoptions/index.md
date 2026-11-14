---
title: Intl.DisplayNames.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die Methode **`resolvedOptions()`** von {{jsxref("Intl.DisplayNames")}}-Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die bei der Initialisierung dieses `DisplayNames`-Objekts ermittelten Optionen widerspiegeln.

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die bei der Initialisierung dieses `DisplayNames`-Objekts ermittelten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften in der aufgeführten Reihenfolge:

- `locale`
  - : Das {{Glossary("BCP_47_language_tag", "BCP-47-Sprach-Tag")}} für die tatsächlich verwendete Locale, die durch den Prozess der [Locale-Aushandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) bestimmt wurde. Die Ausgabe enthält keinen Unicode-Erweiterungsschlüssel.
- `style`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Der Wert ist entweder `"narrow"`, `"short"` oder `"long"`. Der Standardwert ist `"long"`.
- `type`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert. Der Wert ist entweder `"language"`, `"region"`, `"script"`, `"currency"`, `"calendar"` oder `"dateTimeField"`. Die Angabe ist erforderlich; es gibt keinen Standardwert.
- `fallback`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert. Der Wert ist entweder `"code"` oder `"none"`. Der Standardwert ist `"code"`.
- `languageDisplay` {{optional_inline}}
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert. Diese Eigenschaft ist nur vorhanden, wenn `type` den Wert `"language"` hat. Der Wert ist entweder `"dialect"` oder `"standard"`. Der Standardwert ist `"dialect"`.

## Beispiele

### resolvedOptions verwenden

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
