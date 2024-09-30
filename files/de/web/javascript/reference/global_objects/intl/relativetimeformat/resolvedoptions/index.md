---
title: Intl.RelativeTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions
l10n:
  sourceCommit: 643fa96e963ecaf2959cca5ddb573751a3efafac
---

{{JSRef}}

Die Methode **`resolvedOptions()`** von {{jsxref("Intl.RelativeTimeFormat")}}-Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `RelativeTimeFormat`-Objekts berechneten Optionen widerspiegeln.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `RelativeTimeFormat`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgelistet sind:

- `locale`
  - : Der BCP 47 Sprach-Tag für das tatsächlich verwendete Locale, bestimmt durch den [Locale-Aushandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur der `nu` Unicode-Erweiterungsschlüssel, falls angefordert, kann in der Ausgabe enthalten sein.
- `style`
  - : Der in dem `options`-Argument angegebene Wert für diese Eigenschaft, wobei der Standard bei Bedarf ausgefüllt wird. Er ist entweder `"long"`, `"short"` oder `"narrow"`. Der Standardwert ist `"long"`.
- `numeric`
  - : Der in dem `options`-Argument angegebene Wert für diese Eigenschaft, wobei der Standard bei Bedarf ausgefüllt wird. Er ist entweder `"always"` oder `"auto"`. Der Standardwert ist `"always"`.
- `numberingSystem`
  - : Der in dem `options`-Argument angegebene Wert für diese Eigenschaft oder unter Verwendung des Unicode-Erweiterungsschlüssels `"nu"`, wobei der Standard bei Bedarf ausgefüllt wird. Es ist ein unterstütztes [Nummerierungssystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types) für dieses Locale. Der Standard ist von der Locale abhängig.

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
