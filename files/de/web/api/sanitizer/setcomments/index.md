---
title: "Sanitizer: setComments()-Methode"
short-title: setComments()
slug: Web/API/Sanitizer/setComments
l10n:
  sourceCommit: ba886c384e385689ce8feffacf4f7ce1d8c5e736
---

{{APIRef("HTML Sanitizer API")}}

Die **`setComments()`**-Methode des [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Interfaces legt fest, ob Kommentare erlaubt oder vom Sanitizer entfernt werden.

## Syntax

```js-nolint
setComments(allow);
```

### Parameter

- `allow`
  - : `true`, wenn Kommentare erlaubt sind, und `false`, wenn sie entfernt werden sollen.

### Rückgabewert

`true`, wenn die Operation die Konfiguration geändert hat, und `false`, wenn die Konfiguration [`comments`](/de/docs/Web/API/SanitizerConfig#comments) bereits auf den angegebenen Wert gesetzt war.

## Beispiele

### Anleitung zum Bereinigen von Kommentaren

Der nachfolgende Code zeigt die grundlegende Verwendung der `setComments()`-Methode.

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
