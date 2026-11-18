---
title: Intl.RelativeTimeFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions
l10n:
  sourceCommit: 42d98fed2b93ad7f7efd643a2965c61e913dbe06
---

Die Methode **`resolvedOptions()`** von {{jsxref("Intl.RelativeTimeFormat")}}-Instanzen gibt ein neues Objekt zurück, dessen Eigenschaften die bei der Initialisierung dieses `RelativeTimeFormat`-Objekts ermittelten Optionen widerspiegeln.

{{InteractiveExample("JavaScript Demo: Intl.RelativeTimeFormat.prototype.resolvedOptions()")}}

```js interactive-example
const rtf1 = new Intl.RelativeTimeFormat("en", { style: "narrow" });
const options1 = rtf1.resolvedOptions();

const rtf2 = new Intl.RelativeTimeFormat("es", { numeric: "auto" });
const options2 = rtf2.resolvedOptions();

console.log(`${options1.locale}, ${options1.style}, ${options1.numeric}`);
// Expected output: "en, narrow, always"

console.log(`${options2.locale}, ${options2.style}, ${options2.numeric}`);
// Expected output: "es, long, auto"
```

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die anhand der an den Konstruktor [`Intl.RelativeTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat) übergebenen Argumente ermittelten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften in der aufgeführten Reihenfolge:

- `locale`
  - : Der {{Glossary("BCP_47_language_tag", "BCP-47-Sprach-Tag")}} für die tatsächlich verwendete Locale, die durch den Prozess der [Locale-Aushandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) bestimmt wird. Nur der Unicode-Erweiterungsschlüssel `nu` kann, falls angefordert, in der Ausgabe enthalten sein.
- `style`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt durch den Standardwert. Der Wert ist entweder `"long"`, `"short"` oder `"narrow"`. Der Standardwert ist `"long"`.
- `numeric`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt durch den Standardwert. Der Wert ist entweder `"always"` oder `"auto"`. Der Standardwert ist `"always"`.
- `numberingSystem`
  - : Der für diese Eigenschaft im Argument `options` oder über den Unicode-Erweiterungsschlüssel `"nu"` angegebene Wert, gegebenenfalls ergänzt durch den Standardwert. Der Wert ist ein für diese Locale unterstütztes [Zahlensystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Der Standardwert hängt von der Locale ab.

## Beispiele

### Verwendung der Methode resolvedOptions()

```js
const de = new Intl.RelativeTimeFormat("de-DE");
const usedOptions = de.resolvedOptions();

usedOptions.locale; // "de-DE"
usedOptions.style; // "long"
usedOptions.numeric; // "always"
usedOptions.numberingSystem; // "latn"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.RelativeTimeFormat")}}
