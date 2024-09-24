---
title: "VideoFrame: clone()-Methode"
short-title: clone()
slug: Web/API/VideoFrame/clone
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`clone()`**-Methode des {{domxref("VideoFrame")}}-Interfaces erstellt ein neues `VideoFrame`-Objekt, das auf die gleiche Medienressource wie das Original verweist.

## Syntax

```js-nolint
clone()
```

### Parameter

Keine.

### Rückgabewert

Ein neues geklontes {{domxref("VideoFrame")}}-Objekt.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das `VideoFrame`-Objekt [transferiert](/de/docs/Web/API/Web_Workers_API/Transferable_objects) wurde.

## Beispiele

Das folgende Beispiel klont eine Kopie von `VideoFrame` als `videoFrame2`.

```js
let videoFrame2 = VideoFrame.clone();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
