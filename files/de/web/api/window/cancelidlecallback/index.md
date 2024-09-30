---
title: "Window: cancelIdleCallback()-Methode"
short-title: cancelIdleCallback()
slug: Web/API/Window/cancelIdleCallback
l10n:
  sourceCommit: eb289996538d1242cd7eaa54cbd9e20da0cb908c
---

{{APIRef}}

Die **`window.cancelIdleCallback()`**-Methode storniert einen Callback, der zuvor mit [`window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) geplant wurde.

## Syntax

```js-nolint
cancelIdleCallback(handle)
```

### Parameter

- `handle`
  - : Die von [`window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback) zurückgegebene ID, als der Callback festgelegt wurde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Sehen Sie sich unser [vollständiges Beispiel](/de/docs/Web/API/Background_Tasks_API#example) im Artikel [Kooperative Planung der Hintergrundaufgaben-API](/de/docs/Web/API/Background_Tasks_API) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
