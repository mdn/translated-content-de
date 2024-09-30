---
title: "SourceBuffer: timestampOffset-Eigenschaft"
short-title: timestampOffset
slug: Web/API/SourceBuffer/timestampOffset
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`timestampOffset`**-Eigenschaft des [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Interfaces steuert den Offset, der auf Zeitstempel innerhalb von Mediensegmenten angewendet wird, die dem `SourceBuffer` hinzugefügt werden.

Der Anfangswert von `timestampOffset` ist 0.

## Wert

Ein `double`, wobei die Offset-Menge in Sekunden ausgedrückt wird.

### Ausnahmen

Die folgende Ausnahme kann auftreten, wenn ein neuer Wert für diese Eigenschaft gesetzt wird:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines oder mehrere der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte in
    [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) aktualisiert werden
    (d. h. ihre [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating)-Eigenschaft ist
    derzeit `true`), ein Mediensegment im
    `SourceBuffer` wird gerade analysiert oder dieser
    `SourceBuffer` wurde aus der [`MediaSource`](/de/docs/Web/API/MediaSource) entfernt.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
