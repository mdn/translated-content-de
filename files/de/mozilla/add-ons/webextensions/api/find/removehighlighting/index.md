---
title: find.removeHighlighting()
slug: Mozilla/Add-ons/WebExtensions/API/find/removeHighlighting
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Entfernen Sie jegliche Hervorhebung, die durch einen vorherigen Aufruf von {{WebExtAPIRef("find.highlightResults()")}} oder durch die native Benutzeroberfläche des Browsers angewendet wurde.

## Syntax

```js-nolint
browser.find.removeHighlighting()
```

### Parameter

Keine.

### Rückgabewert

Keine.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
browser.find.removeHighlighting();
```
