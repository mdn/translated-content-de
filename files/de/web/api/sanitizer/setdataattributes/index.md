---
title: "Sanitizer: Methode setDataAttributes()"
short-title: setDataAttributes()
slug: Web/API/Sanitizer/setDataAttributes
l10n:
  sourceCommit: baec726bf3fe1bd82cf22a0f8ba9523e0f7ccd80
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`setDataAttributes()`**-Methode des [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Interfaces legt fest, ob [Datenattribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) vom Sanitizer zugelassen oder entfernt werden.

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

### Anleitung zur Bereinigung von Datenattributen

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
