---
title: Intl.RelativeTimeFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die Methode **`resolvedOptions()`** von {{jsxref("Intl.RelativeTimeFormat")}}-Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `RelativeTimeFormat`-Objekts berechneten Optionen widerspiegeln.

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

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `RelativeTimeFormat`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgelistet sind:

- `locale`
  - : Das {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtag")}} für das tatsächlich verwendete Gebietsschema, bestimmt durch den Prozess der [Locale-Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur der `nu` Unicode-Erweiterungsschlüssel, falls angefordert, kann in der Ausgabe enthalten sein.
- `style`
  - : Der für diese Eigenschaft im `options`-Argument bereitgestellte Wert, mit Standardeinstellung, falls erforderlich. Es ist entweder `"long"`, `"short"` oder `"narrow"`. Der Standardwert ist `"long"`.
- `numeric`
  - : Der für diese Eigenschaft im `options`-Argument bereitgestellte Wert, mit Standardeinstellung, falls erforderlich. Es ist entweder `"always"` oder `"auto"`. Der Standardwert ist `"always"`.
- `numberingSystem`
  - : Der für diese Eigenschaft im `options`-Argument bereitgestellte Wert oder mithilfe des Unicode-Erweiterungsschlüssels `"nu"`, mit Standardeinstellung, falls erforderlich. Es ist ein unterstütztes [Zahlensystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) für dieses Gebietsschema. Der Standardwert ist gebietsschemaabhängig.

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
