---
title: "Sanitizer: setDataAttributes()-Methode"
short-title: setDataAttributes()
slug: Web/API/Sanitizer/setDataAttributes
l10n:
  sourceCommit: 2033446e38e93f71eb28a0efd3f663a8e0e7aeb7
---

{{APIRef("HTML Sanitizer API")}}

Die **`setDataAttributes()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle legt fest, ob [Datenattribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) vom Sanitizer zugelassen oder entfernt werden.

Die Methode setzt die [`dataAttributes`](/de/docs/Web/API/SanitizerConfig#dataattributes)-Eigenschaft in der Konfiguration dieses Sanitizers.

## Syntax

```js-nolint
setDataAttributes(allow);
```

### Parameter

- `allow`

  - : `true`, wenn Datenattribute erlaubt sind, und `false`, wenn sie entfernt werden sollen.

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
