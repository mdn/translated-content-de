---
title: "Sanitizer: setComments() Methode"
short-title: setComments()
slug: Web/API/Sanitizer/setComments
l10n:
  sourceCommit: 2033446e38e93f71eb28a0efd3f663a8e0e7aeb7
---

{{APIRef("HTML Sanitizer API")}}

Die **`setComments()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle legt fest, ob Kommentare vom Sanitizer erlaubt oder entfernt werden.

Die Methode setzt die [`comments`](/de/docs/Web/API/SanitizerConfig#comments)-Eigenschaft in der Konfiguration dieses Sanitizers.

## Syntax

```js-nolint
setComments(allow);
```

### Parameter

- `allow`

  - : `true`, wenn Kommentare erlaubt sind, und `false`, wenn sie entfernt werden sollen.

### Rückgabewert

Keiner (`undefined`).

## Beispiele

### Anleitung zur Bereinigung von Kommentaren

Der untenstehende Code zeigt die grundlegende Verwendung der `setComments()`-Methode.

```js
// Create sanitizer (in this case the default)
const sanitizer = new Sanitizer();

// Allow comments
sanitizer.setComments(true);

// Remove comments
sanitizer.setComments(false);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
