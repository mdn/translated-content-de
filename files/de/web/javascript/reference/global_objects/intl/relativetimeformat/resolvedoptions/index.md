---
title: Intl.RelativeTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`resolvedOptions()`**-Methode von {{jsxref("Intl.RelativeTimeFormat")}}-Instanzen gibt ein neues Objekt zurück, das Eigenschaften widerspiegelt, die während der Initialisierung dieses `Intl.RelativeTimeFormat`-Objekts für die Lokalisierung und das relative Zeitformatieren berechnet wurden.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung des angegebenen {{jsxref("Intl.RelativeTimeFormat")}}-Objekts berechneten Lokale- und Zahlenformatierungsoptionen widerspiegeln.

## Beschreibung

Das resultierende Objekt hat die folgenden Eigenschaften:

- `locale`
  - : Der BCP 47-Sprachcode für die tatsächlich verwendete Lokale. Wenn im Eingabe-BCP 47-Sprachcode Unicode-Erweiterungswerte angefordert wurden, die zu dieser Lokale führten, sind die angeforderten und für diese Lokale unterstützten Schlüssel-Wert-Paare in `locale` enthalten.
- `style`

  - : Die Länge der internationalisierten Meldung. Mögliche Werte sind:

    - `"long"` (Standard, z.B. `in 1 Monat`)
    - `"short"` (z.B. `in 1 Mo.`),
    - oder `"narrow"` (z.B. `in 1 Mo.`). Der schmale Stil könnte für einige Lokalitäten dem kurzen Stil ähneln.

- `numeric`

  - : Das Format der Ausgabemeldung. Mögliche Werte sind:

    - `"always"` (Standard, z.B. `vor 1 Tag`),
    - oder `"auto"` (z.B. `gestern`). Der `"auto"`-Wert ermöglicht es, nicht immer numerische Werte in der Ausgabe verwenden zu müssen.

- `numberingSystem`
  - : Der Wert, der mit dem Unicode-Erweiterungsschlüssel `"nu"` angefordert wurde oder als Standardwert gefüllt wurde.

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
