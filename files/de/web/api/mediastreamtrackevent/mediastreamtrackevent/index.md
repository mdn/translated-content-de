---
title: "MediaStreamTrackEvent: MediaStreamTrackEvent() Konstruktor"
short-title: MediaStreamTrackEvent()
slug: Web/API/MediaStreamTrackEvent/MediaStreamTrackEvent
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Capture and Streams")}}

Der **`MediaStreamTrackEvent()`**-Konstruktor gibt ein neues {{domxref("MediaStreamTrackEvent")}}-Objekt zurück, welches ein Ereignis darstellt, das signalisiert, dass ein {{domxref("MediaStreamTrack")}} zu einem {{domxref("MediaStream")}} hinzugefügt oder von diesem entfernt wurde.

## Syntax

```js-nolint
new MediaStreamTrackEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Er ist case-sensitiv, und Browser setzen ihn auf `addtrack` oder `removetrack`.
- `options`
  - : Ein Objekt, das, _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `track`
      - : Ein {{domxref("MediaStreamTrack")}}-Objekt, welches die Spur darstellt, die dem Stream hinzugefügt oder von diesem entfernt wurde.

### Rückgabewert

Ein neues {{domxref("MediaStreamTrackEvent")}}-Objekt, basierend auf den angegebenen Optionen initialisiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaStream/addtrack_event", "addtrack")}} und {{domxref("MediaStream/removetrack_event", "removetrack")}} Ereignisse
- {{domxref("MediaStreamTrack")}}
- {{domxref("MediaStream")}}
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
