---
title: "Sanitizer: setComments() Methode"
short-title: setComments()
slug: Web/API/Sanitizer/setComments
l10n:
  sourceCommit: baec726bf3fe1bd82cf22a0f8ba9523e0f7ccd80
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`setComments()`**-Methode der [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Schnittstelle legt fest, ob Kommentare vom Sanitizer erlaubt oder entfernt werden.

Die Methode legt die [`comments`](/de/docs/Web/API/SanitizerConfig#comments)-Eigenschaft in der Konfiguration dieses Sanitizers fest.

## Syntax

```js-nolint
setComments(allow);
```

### Parameter

- `allow`

  - : `true`, wenn Kommentare erlaubt sind, und `false`, wenn sie entfernt werden sollen.

### Rückgabewert

Kein (`undefined`).

## Beispiele

### Anleitung zur Bereinigung von Kommentaren

Der folgende Code zeigt die grundlegende Verwendung der `setComments()`-Methode.

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
