---
title: find.removeHighlighting()
slug: Mozilla/Add-ons/WebExtensions/API/find/removeHighlighting
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Entfernen Sie jegliche Hervorhebung einer vorherigen Suche, die durch einen vorherigen Aufruf von {{WebExtAPIRef("find.highlightResults()")}} oder durch die native Benutzeroberfläche des Browsers angewendet wurde.

## Syntax

```js-nolint
browser.find.removeHighlighting()
```

### Parameter

Keine.

### Rückgabewert

Keine.

## Beispiele

```js
browser.find.removeHighlighting();
```

## Browser-Kompatibilität

{{Compat}}
