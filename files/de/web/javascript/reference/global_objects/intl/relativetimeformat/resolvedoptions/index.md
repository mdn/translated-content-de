---
title: Intl.RelativeTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`resolvedOptions()`**-Methode von {{jsxref("Intl.RelativeTimeFormat")}}-Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `Intl.RelativeTimeFormat`-Objekts berechneten Locale- und relativen Zeitformatierungsoptionen widerspiegeln.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung des gegebenen {{jsxref("Intl.RelativeTimeFormat")}}-Objekts berechneten Locale- und Zahlenformatierungsoptionen widerspiegeln.

## Beschreibung

Das resultierende Objekt verfügt über die folgenden Eigenschaften:

- `locale`
  - : Der BCP 47-Sprachtag für das tatsächlich verwendete Locale. Wenn im Eingabe-BCP 47-Sprachtag Unicode-Erweiterungswerte angefordert wurden, die zu diesem Locale führten, sind die angeforderten und für dieses Locale unterstützten Schlüssel-Wert-Paare im `locale` enthalten.
- `style`

  - : Die Länge der internationalisierten Nachricht. Mögliche Werte sind:

    - `"long"` (Standard, z.B. `in 1 month`)
    - `"short"` (z.B., `in 1 mo.`),
    - oder `"narrow"` (z.B., `in 1 mo.`). Der schmale Stil könnte für einige Locale dem kurzen Stil ähneln.

- `numeric`

  - : Das Format der Ausgabemeldung. Mögliche Werte sind:

    - `"always"` (Standard, z.B. `1 day ago`),
    - oder `"auto"` (z.B. `yesterday`). Der `"auto"`-Wert ermöglicht es, nicht immer numerische Werte in der Ausgabe verwenden zu müssen.

- `numberingSystem`
  - : Der Wert, der mithilfe des Unicode-Erweiterungsschlüssels `"nu"` angefordert oder als Standardwert gesetzt wurde.

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
