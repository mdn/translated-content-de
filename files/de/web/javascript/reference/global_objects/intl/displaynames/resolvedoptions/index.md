---
title: Intl.DisplayNames.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions
l10n:
  sourceCommit: fca3d118b765a990f223308b712fc78bc159043f
---

{{JSRef}}

Die **`resolvedOptions()`** Methode von {{jsxref("Intl.DisplayNames")}} Instanzen
gibt ein neues Objekt mit Eigenschaften zurück, die die Locale und Stilformatierungsoptionen widerspiegeln, die während der Erstellung dieses `Intl.DisplayNames`
Objekts ermittelt wurden.

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit Eigenschaften, die die Locale und Formatierungsoptionen widerspiegeln, die während
der Erstellung des gegebenen {{jsxref("Intl.DisplayNames")}} Objekts ermittelt wurden.

## Beschreibung

Das von `resolvedOptions()` zurückgegebene Objekt hat die folgenden Eigenschaften:

- `locale`
  - : Das BCP 47 Sprach-Tag für die tatsächlich verwendete Locale. Wenn in dem Eingabe-BCP 47 Sprach-Tag Unicode-Erweiterungswerte angefordert wurden, die zu dieser Locale führten, sind die angeforderten und für diese Locale unterstützbaren Schlüssel-Wert-Paare in `locale` enthalten.
- `style`
  - : Der in das `options` Argument des Konstruktors eingegebene Wert oder der Standardwert (`"long"`). Sein Wert ist entweder
    `"long"`, `"short"` oder `"narrow"`.
- `type`
  - : Der in das `options` Argument des Konstruktors eingegebene Wert oder der Standardwert (`"language"`). Sein Wert ist entweder
    `"language"`, `"region"`, `"script"` oder
    `"currency"`.
- `fallback`
  - : Der in das `options` Argument des Konstruktors eingegebene Wert oder
    der Standardwert (`"code"`). Sein Wert ist entweder `"code"`
    oder `"none"`.
- `languageDisplay`
  - : Der in das `options` Argument des Konstruktors eingegebene Wert oder
    der Standardwert (`"dialect"`). Sein Wert ist entweder `"dialect"`
    oder `"standard"`.

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
