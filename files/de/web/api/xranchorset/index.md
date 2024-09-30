---
title: XRAnchorSet
slug: Web/API/XRAnchorSet
l10n:
  sourceCommit: e18aa8e600733ebc25443075c563fd56361dfe98
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`XRAnchorSet`**-Schnittstelle bietet Zugriff auf eine Sammlung von Ankern. Ihre Instanzen werden durch [`XRFrame.trackedAnchors`](/de/docs/Web/API/XRFrame/trackedAnchors) zurückgegeben und sind [`set`-ähnliche Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis).

## Instanz-Eigenschaften

Siehe {{jsxref("Set")}} für Details.

## Instanz-Methoden

Siehe {{jsxref("Set")}} für Details.

## Beispiele

### Umgang mit dem Verlust der Ankerverfolgung

```js
const trackedAnchors = frame.trackedAnchors;

for (const anchor of previousFrameAnchors) {
  if (!trackedAnchors.has(anchor)) {
    // Handle anchor tracking loss
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRAnchor`](/de/docs/Web/API/XRAnchor)
- [`XRFrame.trackedAnchors`](/de/docs/Web/API/XRFrame/trackedAnchors)
