---
title: "XRCPUDepthInformation: Methode getDepthInMeters()"
short-title: getDepthInMeters()
slug: Web/API/XRCPUDepthInformation/getDepthInMeters
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die Methode **`getDepthInMeters()`** des {{DOMxRef("XRCPUDepthInformation")}}-Interfaces gibt die Tiefe in Metern an den Koordinaten (x, y) in normalisierten Ansichtskoordinaten zurück (Ursprung in der oberen linken Ecke).

## Syntax

```js-nolint
getDepthInMeters(x, y)
```

### Parameter

- `x`
  - : X-Koordinate (Ursprung links, wächst nach rechts).
- `y`
  - : Y-Koordinate (Ursprung oben, wächst nach unten).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein {{jsxref("RangeError")}} wird ausgelöst, wenn `x` oder `y` größer als 1,0 oder kleiner als 0,0 sind.

## Beispiele

```js
const distance = depthInfo.getDepthInMeters(x, y);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
