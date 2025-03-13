---
title: Intl.RelativeTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die Methode **`resolvedOptions()`** von {{jsxref("Intl.RelativeTimeFormat")}}-Instanzen gibt ein neues Objekt zurück, das die Optionen widerspiegelt, die bei der Initialisierung dieses `RelativeTimeFormat`-Objekts berechnet wurden.

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

Ein neues Objekt mit Eigenschaften, die die Optionen widerspiegeln, die bei der Initialisierung dieses `RelativeTimeFormat`-Objekts berechnet wurden. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgelistet sind:

- `locale`
  - : Das BCP-47-Sprach-Tag für die tatsächlich verwendete Locale, ermittelt durch den [Locale-Aushandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur der `nu`-Unicode-Erweiterungsschlüssel, falls angefordert, kann im Output enthalten sein.
- `style`
  - : Der in dem `options`-Argument angegebene Wert für diese Eigenschaft, mit Standardwerten ausgefüllt, falls erforderlich. Er ist entweder `"long"`, `"short"` oder `"narrow"`. Der Standardwert ist `"long"`.
- `numeric`
  - : Der in dem `options`-Argument angegebene Wert für diese Eigenschaft, mit Standardwerten ausgefüllt, falls erforderlich. Er ist entweder `"always"` oder `"auto"`. Der Standardwert ist `"always"`.
- `numberingSystem`
  - : Der in dem `options`-Argument angegebene Wert für diese Eigenschaft oder unter Verwendung des Unicode-Erweiterungsschlüssels `"nu"`, mit Standardwerten ausgefüllt, falls erforderlich. Es ist ein unterstütztes [Nummerierungssystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) für diese Locale. Der Standardwert ist vom Locale abhängig.

## Beispiele

### Verwendung der resolvedOptions()-Methode

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
