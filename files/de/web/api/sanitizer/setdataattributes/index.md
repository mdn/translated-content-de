---
title: "Sanitizer: setDataAttributes() Methode"
short-title: setDataAttributes()
slug: Web/API/Sanitizer/setDataAttributes
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`setDataAttributes()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle legt fest, ob [Datenattribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) von dem Sanitizer zugelassen oder entfernt werden.

Die Methode setzt die [`dataAttributes`](/de/docs/Web/API/SanitizerConfig#dataattributes)-Eigenschaft in der Konfiguration dieses Sanitizers.

## Syntax

```js-nolint
setDataAttributes(allow);
```

### Parameter

- `allow`
  - : `true`, wenn Datenattribute zugelassen sind, und `false`, wenn sie entfernt werden sollen.

### Rückgabewert

Keiner (`undefined`).

## Beispiele

### Anleitung zum Bereinigen von Datenattributen

Der folgende Code zeigt die grundlegende Verwendung der `setDataAttributes()`-Methode.

```js
// Create sanitizer (in this case the default)
const sanitizer = new Sanitizer();

// Allow data attributes
sanitizer.setDataAttributes(true);

// Remove data attributes
sanitizer.setDataAttributes(false);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
