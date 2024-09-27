---
title: "MediaStreamTrackEvent: MediaStreamTrackEvent() Konstruktor"
short-title: MediaStreamTrackEvent()
slug: Web/API/MediaStreamTrackEvent/MediaStreamTrackEvent
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Capture and Streams")}}

Der **`MediaStreamTrackEvent()`** Konstruktor gibt ein neues [`MediaStreamTrackEvent`](/de/docs/Web/API/MediaStreamTrackEvent) Objekt zurück, welches ein Ereignis darstellt, das signalisiert, dass ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) hinzugefügt oder daraus entfernt wurde.

## Syntax

```js-nolint
new MediaStreamTrackEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß- und kleinschreibungssensitiv und Browser setzen ihn auf `addtrack` oder `removetrack`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `track`
      - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekt, das den Track repräsentiert, der dem Stream hinzugefügt oder daraus entfernt wurde.

### Rückgabewert

Ein neues [`MediaStreamTrackEvent`](/de/docs/Web/API/MediaStreamTrackEvent) Objekt, basierend auf den bereitgestellten Optionen initialisiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event) und [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event) Ereignisse
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
