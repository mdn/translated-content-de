---
title: "SourceBuffer: timestampOffset-Eigenschaft"
short-title: timestampOffset
slug: Web/API/SourceBuffer/timestampOffset
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`timestampOffset`**-Eigenschaft der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle steuert den Versatz, der auf Zeitstempel innerhalb von Mediensegmenten angewendet wird, die dem `SourceBuffer` hinzugefügt werden.

Der Anfangswert von `timestampOffset` ist 0.

## Wert

Ein Double, wobei der Versatzbetrag in Sekunden ausgedrückt wird.

### Ausnahmen

Die folgende Ausnahme kann ausgelöst werden, wenn ein neuer Wert für diese Eigenschaft gesetzt wird:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein oder mehrere der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte in
    [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) aktualisiert werden
    (d. h. deren [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating)-Eigenschaft
    derzeit `true` ist), ein Mediensegment innerhalb des
    `SourceBuffer` gerade analysiert wird oder dieser
    `SourceBuffer` aus der
    [`MediaSource`](/de/docs/Web/API/MediaSource) entfernt wurde.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
