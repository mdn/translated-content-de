---
title: "SourceBuffer: timestampOffset-Eigenschaft"
short-title: timestampOffset
slug: Web/API/SourceBuffer/timestampOffset
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Media Source Extensions")}}

Die **`timestampOffset`**-Eigenschaft des {{domxref("SourceBuffer")}}-Interfaces steuert den Offset, der auf die Zeitstempel innerhalb von Mediensegmenten angewendet wird, die dem `SourceBuffer` hinzugefügt werden.

Der Anfangswert von `timestampOffset` ist 0.

## Wert

Ein Doppelwert, wobei der Offset in Sekunden ausgedrückt ist.

### Ausnahmen

Die folgende Ausnahme kann ausgelöst werden, wenn ein neuer Wert für diese Eigenschaft festgelegt wird:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eines oder mehrere der {{domxref("SourceBuffer")}}-Objekte in
    {{domxref("MediaSource.sourceBuffers")}} aktualisiert werden
    (d.h. ihre {{domxref("SourceBuffer.updating")}}-Eigenschaft derzeit auf `true` gesetzt ist), ein Mediensegment innerhalb des
    `SourceBuffer` derzeit geparst wird oder dieser
    `SourceBuffer` aus der
    {{domxref("MediaSource")}} entfernt wurde.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
