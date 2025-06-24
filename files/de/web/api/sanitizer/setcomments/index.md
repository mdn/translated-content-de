---
title: "Sanitizer: setComments() Methode"
short-title: setComments()
slug: Web/API/Sanitizer/setComments
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`setComments()`** Methode des [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Interfaces legt fest, ob Kommentare vom Sanitizer zugelassen oder entfernt werden.

Die Methode setzt die [`comments`](/de/docs/Web/API/SanitizerConfig#comments)-Eigenschaft in der Konfiguration dieses Sanitizers.

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
