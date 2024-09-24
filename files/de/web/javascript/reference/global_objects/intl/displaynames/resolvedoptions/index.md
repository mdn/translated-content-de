---
title: Intl.DisplayNames.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`resolvedOptions()`** Methode von {{jsxref("Intl.DisplayNames")}} Instanzen
gibt ein neues Objekt mit Eigenschaften zurück, die die Sprache und die Stilformatierungsoptionen widerspiegeln, die während der Konstruktion dieses `Intl.DisplayNames`
Objekts berechnet wurden.

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit Eigenschaften, die die Sprache und die Formatierungsoptionen widerspiegeln, die während der Konstruktion des gegebenen {{jsxref("Intl.DisplayNames")}} Objekts berechnet wurden.

## Beschreibung

Das von `resolvedOptions()` zurückgegebene Objekt hat die folgenden Eigenschaften:

- `locale`
  - : Der BCP 47 Sprach-Tag für die tatsächlich verwendete Sprache. Wenn im Eingabe-BCP-47-Sprach-Tag Unicode-Erweiterungswerte angefordert wurden, die zu dieser Sprache geführt haben, werden die angeforderten und unterstützten Schlüssel-Wert-Paare in `locale` aufgenommen.
- `style`
  - : Der Wert, der für diese Eigenschaft im `options` Argument des
    Konstruktors angegeben wurde, oder der Standardwert (`"long"`). Der Wert ist entweder
    `"long"`, `"short"` oder `"narrow"`.
- `type`
  - : Der Wert, der für diese Eigenschaft im `options` Argument des
    Konstruktors angegeben wurde, oder der Standardwert (`"language"`). Der Wert ist entweder
    `"language"`, `"region"`, `"script"` oder
    `"currency"`.
- `fallback`
  - : Der Wert, der für diese Eigenschaft im `options` Argument des Konstruktors angegeben wurde, oder
    der Standardwert (`"code"`). Der Wert ist entweder `"code"`
    oder `"none"`.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DisplayNames")}}
