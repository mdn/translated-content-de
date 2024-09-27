---
title: "TrackEvent: TrackEvent() Konstruktor"
short-title: TrackEvent()
slug: Web/API/TrackEvent/TrackEvent
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("HTML DOM")}}

Der **`TrackEvent()`** Konstruktor erstellt und gibt ein neues [`TrackEvent`](/de/docs/Web/API/TrackEvent)-Objekt zurück, das ein Ereignis beschreibt, das in einer Liste von Tracks aufgetreten ist ([`AudioTrackList`](/de/docs/Web/API/AudioTrackList), [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) oder [`TextTrackList`](/de/docs/Web/API/TextTrackList)).

## Syntax

```js-nolint
new TrackEvent(type)
new TrackEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist groß- und kleinschreibungssensitiv und wird von Browsern auf `addtrack` oder `removetrack` gesetzt.
- `options` {{optional_inline}}
  - : Ein Objekt, das, _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `track` {{optional_inline}}
      - : Der Track, auf den sich das Ereignis bezieht; standardmäßig `null`, sollte aber entsprechend dem Typ des Tracks auf [`VideoTrack`](/de/docs/Web/API/VideoTrack), [`AudioTrack`](/de/docs/Web/API/AudioTrack) oder [`TextTrack`](/de/docs/Web/API/TextTrack) gesetzt werden.

### Rückgabewert

Ein neues [`TrackEvent`](/de/docs/Web/API/TrackEvent)-Objekt, initialisiert entsprechend den Eingaben des Konstruktors.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
