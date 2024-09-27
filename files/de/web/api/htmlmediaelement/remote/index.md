---
title: "HTMLMediaElement: remote-Eigenschaft"
short-title: remote
slug: Web/API/HTMLMediaElement/remote
l10n:
  sourceCommit: 0b6bfb8a3a03de5956dd1cec4b47e5e37078149d
---

{{APIRef("Remote Playback API")}}

Die **`remote`** schreibgeschützte Eigenschaft des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interfaces gibt das [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Objekt zurück, das dem Medien-Element zugeordnet ist. Das `RemotePlayback`-Objekt ermöglicht die Steuerung von entfernten Geräten, die das Medium abspielen.

## Wert

Ein [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Objekt, das mit dem Medien-Element assoziiert ist.

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
