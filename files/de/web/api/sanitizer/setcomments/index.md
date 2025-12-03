---
title: "Sanitizer: setComments() Methode"
short-title: setComments()
slug: Web/API/Sanitizer/setComments
l10n:
  sourceCommit: 8b449a5846c1de417894acfe9b4471447181b57f
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`setComments()`** Methode des [`Sanitizer`](/de/docs/Web/API/Sanitizer) Interfaces legt fest, ob Kommentare durch den Sanitizer zugelassen oder entfernt werden sollen.

## Syntax

```js-nolint
setComments(allow);
```

### Parameter

- `allow`
  - : `true`, wenn Kommentare zugelassen sind, und `false`, wenn sie entfernt werden sollen.

### Rückgabewert

`true`, wenn die Operation die Konfiguration geändert hat, und `false`, wenn die Konfiguration bereits [`comments`](/de/docs/Web/API/SanitizerConfig#comments) auf den angegebenen Wert gesetzt hatte.

## Beispiele

### Anleitung zum Bereinigen von Kommentaren

Der untenstehende Code zeigt die grundlegende Verwendung der `setComments()` Methode.

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
