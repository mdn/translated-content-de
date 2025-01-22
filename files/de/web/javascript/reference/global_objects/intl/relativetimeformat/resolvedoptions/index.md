---
title: Intl.RelativeTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions
l10n:
  sourceCommit: 537aeae8ea6f3f080941261af7229dba30f791ac
---

{{JSRef}}

Die **`resolvedOptions()`** Methode von {{jsxref("Intl.RelativeTimeFormat")}} Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die Optionen widerspiegeln, die während der Initialisierung dieses `RelativeTimeFormat` Objekts berechnet wurden.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `RelativeTimeFormat` Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgeführt sind:

- `locale`
  - : Das BCP 47 Sprach-Tag für die tatsächlich verwendete Locale, bestimmt durch den [Locale-Negotiationsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur der `nu` Unicode-Erweiterungsschlüssel, falls angefordert, kann in der Ausgabe enthalten sein.
- `style`
  - : Der für diese Eigenschaft im `options` Argument angegebene Wert, mit Notwendigkeit der Standardfüllung. Es ist entweder `"long"`, `"short"` oder `"narrow"`. Der Standard ist `"long"`.
- `numeric`
  - : Der für diese Eigenschaft im `options` Argument angegebene Wert, mit Notwendigkeit der Standardfüllung. Es ist entweder `"always"` oder `"auto"`. Der Standard ist `"always"`.
- `numberingSystem`
  - : Der für diese Eigenschaft im `options` Argument angegebene Wert oder mittels des Unicode-Erweiterungsschlüssels `"nu"`, mit Notwendigkeit der Standardfüllung. Es ist ein unterstütztes [Nummerierungssystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) für diese Locale. Der Standard ist von der Locale abhängig.

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
