---
title: Intl.RelativeTimeFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`resolvedOptions()`** Methode von {{jsxref("Intl.RelativeTimeFormat")}} Instanzen gibt ein neues Objekt zurück, dessen Eigenschaften die während der Initialisierung dieses `RelativeTimeFormat` Objekts berechneten Optionen widerspiegeln.

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

Ein neues Objekt, dessen Eigenschaften die während der Initialisierung dieses `RelativeTimeFormat` Objekts berechneten Optionen widerspiegeln. Das Objekt enthält die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgelistet sind:

- `locale`
  - : Der BCP 47 Sprach-Tag für das tatsächlich verwendete Gebietsschema, bestimmt durch den [locale negotiation](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) Prozess. Nur der `nu` Unicode-Erweiterungsschlüssel, falls angefordert, kann im ausgegebenen Ergebnis enthalten sein.
- `style`
  - : Der für diese Eigenschaft im `options` Argument angegebene Wert, wobei der Standardwert nach Bedarf ausgefüllt wird. Es ist entweder `"long"`, `"short"` oder `"narrow"`. Der Standardwert ist `"long"`.
- `numeric`
  - : Der für diese Eigenschaft im `options` Argument angegebene Wert, wobei der Standardwert nach Bedarf ausgefüllt wird. Es ist entweder `"always"` oder `"auto"`. Der Standardwert ist `"always"`.
- `numberingSystem`
  - : Der für diese Eigenschaft im `options` Argument angegebene Wert oder mit dem Unicode-Erweiterungsschlüssel `"nu"`, wobei der Standardwert nach Bedarf ausgefüllt wird. Es ist ein unterstütztes [Zahlensystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) für dieses Gebietsschema. Der Standardwert ist gebietsabhängig.

## Beispiele

### Verwendung der resolvedOptions() Methode

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
