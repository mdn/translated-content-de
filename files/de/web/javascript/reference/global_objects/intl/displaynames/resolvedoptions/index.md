---
title: Intl.DisplayNames.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`resolvedOptions()`** Methode von {{jsxref("Intl.DisplayNames")}} Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `DisplayNames`-Objekts berechneten Optionen widerspiegeln.

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `DisplayNames`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgeführt sind:

- `locale`
  - : Das BCP 47-Sprach-Tag für das tatsächlich verwendete Gebietsschema, bestimmt durch den [Gebietsschema-Aushandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Kein Unicode-Erweiterungsschlüssel wird in der Ausgabe enthalten sein.
- `style`
  - : Der in dem `options`-Argument angegebene Wert für diese Eigenschaft, mit Standardeinstellungen, die bei Bedarf ausgefüllt werden. Es ist entweder `"narrow"`, `"short"` oder `"long"`. Der Standardwert ist `"long"`.
- `type`
  - : Der in dem `options`-Argument angegebene Wert für diese Eigenschaft. Es ist entweder `"language"`, `"region"`, `"script"`, `"currency"`, `"calendar"` oder `"dateTimeField"`. Es ist erforderlich, daher gibt es keinen Standardwert.
- `fallback`
  - : Der in dem `options`-Argument angegebene Wert für diese Eigenschaft. Es ist entweder `"code"` oder `"none"`. Der Standardwert ist `"code"`.
- `languageDisplay`
  - : Der in dem `options`-Argument angegebene Wert für diese Eigenschaft. Es ist entweder `"dialect"` oder `"standard"`. Der Standardwert ist `"dialect"`.

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
