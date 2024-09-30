---
title: "TrackEvent: TrackEvent() Konstruktor"
short-title: TrackEvent()
slug: Web/API/TrackEvent/TrackEvent
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("HTML DOM")}}

Der **`TrackEvent()`** Konstruktor
erstellt und gibt ein neues [`TrackEvent`](/de/docs/Web/API/TrackEvent)-Objekt zurück, das ein Ereignis beschreibt, das in einer Liste von Tracks ([`AudioTrackList`](/de/docs/Web/API/AudioTrackList), [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) oder [`TextTrackList`](/de/docs/Web/API/TextTrackList)) aufgetreten ist.

## Syntax

```js-nolint
new TrackEvent(type)
new TrackEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es auf `addtrack` oder `removetrack`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `track` {{optional_inline}}
      - : Der Track, auf den sich das Ereignis bezieht; dieser ist standardmäßig `null`, sollte aber auf einen entsprechenden [`VideoTrack`](/de/docs/Web/API/VideoTrack), [`AudioTrack`](/de/docs/Web/API/AudioTrack) oder [`TextTrack`](/de/docs/Web/API/TextTrack) gesetzt werden, je nach Typ des Tracks.

### Rückgabewert

Ein neues [`TrackEvent`](/de/docs/Web/API/TrackEvent)-Objekt, das gemäß den Eingaben des Konstruktors initialisiert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
