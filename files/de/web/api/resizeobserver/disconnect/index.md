---
title: "ResizeObserver: disconnect() Methode"
short-title: disconnect()
slug: Web/API/ResizeObserver/disconnect
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Resize Observer API")}}

Die **`disconnect()`** Methode der [`ResizeObserver`](/de/docs/Web/API/ResizeObserver) Schnittstelle beendet die Beobachtung aller beobachteten [`Element`](/de/docs/Web/API/Element) oder [`SVGElement`](/de/docs/Web/API/SVGElement) Ziele.

## Syntax

```js-nolint
disconnect()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Keine.

## Beispiele

```js
btn.addEventListener("click", () => {
  resizeObserver.disconnect();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
