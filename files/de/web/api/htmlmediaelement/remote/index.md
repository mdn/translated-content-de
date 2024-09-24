---
title: "HTMLMediaElement: remote-Eigenschaft"
short-title: remote
slug: Web/API/HTMLMediaElement/remote
l10n:
  sourceCommit: 0b6bfb8a3a03de5956dd1cec4b47e5e37078149d
---

{{APIRef("Remote Playback API")}}

Die **`remote`** schreibgeschützte Eigenschaft des {{domxref("HTMLMediaElement")}}-Interfaces gibt das mit dem Medienelement verbundene {{domxref("RemotePlayback")}}-Objekt zurück. Das `RemotePlayback`-Objekt ermöglicht die Steuerung von entfernten Geräten, die die Medien abspielen.

## Wert

Ein mit dem Medienelement verbundenes {{domxref("RemotePlayback")}}-Objekt.

## Beispiel

```js
const el = document.createElement("audio");
const remotePlayback = el.remote;

remotePlayback.watchAvailability((availability) => {
  // Do something when the availability changes
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
