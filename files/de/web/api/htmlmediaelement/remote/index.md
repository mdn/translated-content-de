---
title: "HTMLMediaElement: remote-Eigenschaft"
short-title: remote
slug: Web/API/HTMLMediaElement/remote
l10n:
  sourceCommit: 0b6bfb8a3a03de5956dd1cec4b47e5e37078149d
---

{{APIRef("Remote Playback API")}}

Die schreibgeschützte Eigenschaft **`remote`** des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interfaces gibt das mit dem Media-Element verknüpfte [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Objekt zurück. Das `RemotePlayback`-Objekt ermöglicht die Steuerung von Remote-Geräten, die die Medien abspielen.

## Wert

Ein [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Objekt, das mit dem Media-Element verknüpft ist.

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
