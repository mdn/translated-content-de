---
title: XRAnchorSet
slug: Web/API/XRAnchorSet
l10n:
  sourceCommit: e18aa8e600733ebc25443075c563fd56361dfe98
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`XRAnchorSet`**-Schnittstelle bietet Zugriff auf eine Sammlung von Ankern. Ihre Instanzen werden durch {{domxref("XRFrame.trackedAnchors")}} zurückgegeben und sind [`Set`-ähnliche Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis).

## Instanz-Eigenschaften

Siehe {{jsxref("Set")}} für Details.

## Instanz-Methoden

Siehe {{jsxref("Set")}} für Details.

## Beispiele

### Verlust der Ankerverfolgung behandeln

```js
const trackedAnchors = frame.trackedAnchors;

for (const anchor of previousFrameAnchors) {
  if (!trackedAnchors.has(anchor)) {
    // Behandeln des Verlusts der Ankerverfolgung
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRAnchor")}}
- {{domxref("XRFrame.trackedAnchors")}}
