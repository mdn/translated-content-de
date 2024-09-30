---
title: "MediaStreamTrack: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/MediaStreamTrack/readyState
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Die schreibgeschützte **`readyState`**-Eigenschaft des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Interfaces gibt einen enumerierten Wert zurück, der den Status des Tracks angibt.

## Wert

Die Eigenschaft kann einen der folgenden Werte annehmen:

- `"live"`, was darauf hinweist, dass ein Eingang verbunden ist und sein Bestes tut, um Echtzeitdaten bereitzustellen. In diesem Fall kann die Ausgabe von Daten ein- oder ausgeschaltet werden, indem die [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)-Eigenschaft verwendet wird.
- `"ended"`, was darauf hinweist, dass der Eingang keine weiteren Daten liefert und auch in Zukunft keine neuen Daten bereitstellen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
- Das [`ended`](/de/docs/Web/API/MediaStreamTrack/ended_event)-Ereignis
