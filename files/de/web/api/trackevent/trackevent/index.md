---
title: "TrackEvent: TrackEvent() Konstruktor"
short-title: TrackEvent()
slug: Web/API/TrackEvent/TrackEvent
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("HTML DOM")}}

Der **`TrackEvent()`** Konstruktor
erstellt und gibt ein neues {{domxref("TrackEvent")}}-Objekt zurück, das ein Ereignis beschreibt, welches
in einer Liste von Tracks ({{domxref("AudioTrackList")}},
{{domxref("VideoTrackList")}} oder {{domxref("TextTrackList")}}) aufgetreten ist.

## Syntax

```js-nolint
new TrackEvent(type)
new TrackEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist Groß- und Kleinschreibung empfindlich und Browser setzen es auf `addtrack` oder `removetrack`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `track` {{optional_inline}}
      - : Die Spur, auf die sich das Ereignis bezieht; standardmäßig ist dies `null`, sollte jedoch entsprechend dem Spurtyp auf einen {{domxref("VideoTrack")}}, {{domxref("AudioTrack")}} oder
        {{domxref("TextTrack")}} gesetzt werden.

### Rückgabewert

Ein neues {{domxref("TrackEvent")}} Objekt, initialisiert wie durch die Eingaben zum Konstruktor beschrieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
