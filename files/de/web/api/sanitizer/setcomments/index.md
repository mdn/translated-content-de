---
title: "Sanitizer: setComments()-Methode"
short-title: setComments()
slug: Web/API/Sanitizer/setComments
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`setComments()`**-Methode des [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Interfaces legt fest, ob Kommentare von dem Sanitizer erlaubt oder entfernt werden.

Die Methode legt die [`comments`](/de/docs/Web/API/SanitizerConfig#comments)-Eigenschaft in der Konfiguration dieses Sanitizers fest.

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

### Anleitung zum Desinfizieren von Kommentaren

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
