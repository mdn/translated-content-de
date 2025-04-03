---
title: "SourceBuffer: timestampOffset-Eigenschaft"
short-title: timestampOffset
slug: Web/API/SourceBuffer/timestampOffset
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`timestampOffset`**-Eigenschaft des [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Interfaces steuert den Versatz, der auf Zeitstempel in Mediensegmenten angewendet wird, die dem `SourceBuffer` hinzugefügt werden.

Der Anfangswert von `timestampOffset` ist 0.

## Wert

Ein Double, bei dem die Versatzmenge in Sekunden ausgedrückt wird.

### Ausnahmen

Die folgende Ausnahme kann ausgelöst werden, wenn ein neuer Wert für diese Eigenschaft festgelegt wird:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein oder mehrere der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte in
    [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) gerade aktualisiert werden
    (d.h. ihre Eigenschaft [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) ist
    derzeit `true`), ein Mediensegment innerhalb des `SourceBuffer` gerade analysiert wird oder dieser
    `SourceBuffer` von der [`MediaSource`](/de/docs/Web/API/MediaSource) entfernt wurde.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
