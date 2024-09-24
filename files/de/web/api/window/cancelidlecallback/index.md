---
title: "Fenster: cancelIdleCallback()-Methode"
short-title: cancelIdleCallback()
slug: Web/API/Window/cancelIdleCallback
l10n:
  sourceCommit: eb289996538d1242cd7eaa54cbd9e20da0cb908c
---

{{APIRef}}

Die **`window.cancelIdleCallback()`**-Methode storniert einen Callback, der zuvor mit {{domxref("window.requestIdleCallback()")}} geplant wurde.

## Syntax

```js-nolint
cancelIdleCallback(handle)
```

### Parameter

- `handle`
  - : Der ID-Wert, der von {{domxref("window.requestIdleCallback()")}} zurückgegeben wurde, als der Callback eingerichtet wurde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Sehen Sie sich unser [komplettes Beispiel](/de/docs/Web/API/Background_Tasks_API#example) im Artikel [Kooperatives Scheduling von Hintergrundaufgaben-API](/de/docs/Web/API/Background_Tasks_API) an.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
