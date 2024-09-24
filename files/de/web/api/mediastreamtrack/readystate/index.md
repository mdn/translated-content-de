---
title: "MediaStreamTrack: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/MediaStreamTrack/readyState
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Die schreibgeschützte **`readyState`**-Eigenschaft des {{domxref("MediaStreamTrack")}}-Interfaces gibt einen enumerierten Wert zurück, der den Status des Tracks angibt.

## Wert

Es nimmt einen der folgenden Werte an:

- `"live"`, was anzeigt, dass eine Eingabe verbunden ist und ihr Bestes tut, um Echtzeitdaten bereitzustellen. In diesem Fall kann die Ausgabe von Daten mithilfe der {{domxref("MediaStreamTrack.enabled")}}-Eigenschaft ein- oder ausgeschaltet werden.
- `"ended"`, was anzeigt, dass die Eingabe keine Daten mehr liefert und niemals neue Daten bereitstellen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
- Das {{domxref("MediaStreamTrack.ended_event", "ended")}}-Ereignis
