---
title: "SourceBuffer: mode-Eigenschaft"
short-title: mode
slug: Web/API/SourceBuffer/mode
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Media Source Extensions")}}

Die **`mode`**-Eigenschaft des {{domxref("SourceBuffer")}}-Interfaces steuert, ob Mediasegmente in beliebiger Reihenfolge oder in strenger Abfolge an den `SourceBuffer` angehängt werden können.

Die beiden verfügbaren Werte sind:

- `segments`: Die Zeitstempel der Mediasegmente bestimmen die Reihenfolge, in der die Segmente abgespielt werden. Die Segmente können in beliebiger Reihenfolge an den `SourceBuffer` angehängt werden.
- `sequence`: Die Reihenfolge, in der die Segmente an den `SourceBuffer` angehängt werden, bestimmt die Reihenfolge, in der sie abgespielt werden. Zeitstempel für die Segmente werden automatisch generiert, die dieser Reihenfolge folgen.

Der Moduswert wird initial festgelegt, wenn der `SourceBuffer` mit `MediaSource.addSourceBuffer()` erstellt wird. Wenn Zeitstempel bereits für die Mediasegmente existieren, wird der Wert auf `segments` gesetzt; wenn nicht, wird der Wert auf `sequence` gesetzt.

Wenn Sie versuchen, den Wert der `mode`-Eigenschaft auf `segments` zu setzen, während der Anfangswert `sequence` ist, wird eine Ausnahme ausgelöst. Die bestehende Segmentreihenfolge muss im `sequence`-Modus beibehalten werden. Sie können jedoch den Wert von `segments` auf `sequence` ändern. Dies bedeutet lediglich, dass die Abspielreihenfolge festgelegt wird und neue Zeitstempel generiert werden, um dies widerzuspiegeln.

Diese Eigenschaft kann nicht geändert werden, während der `SourceBuffer` entweder einen {{domxref("SourceBuffer.appendBuffer","appendBuffer()")}}- oder {{domxref("SourceBuffer.remove","remove()")}}-Aufruf verarbeitet.

## Wert

Ein String.

### Ausnahmen

Die folgenden Ausnahmen können ausgelöst werden, wenn ein neuer Wert für diese Eigenschaft festgelegt wird:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn versucht wurde, den Wert auf `segments` zu setzen, während der Anfangswert `sequence` ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das {{domxref("SourceBuffer")}}-Objekt aktualisiert wird (d. h. seine {{domxref("SourceBuffer.updating")}}-Eigenschaft momentan `true` ist), das letzte Mediasegment, das an diesen `SourceBuffer` angehängt wurde, unvollständig ist oder dieser `SourceBuffer` aus der {{domxref("MediaSource")}} entfernt wurde.

## Beispiele

Dieses Beispiel setzt den `sourceBuffer`-Modus auf `'sequence'`, wenn er derzeit auf `'segments'` gesetzt ist, und legt somit die Abspielreihenfolge auf die Sequenz fest, in der die Mediasegmente angehängt werden.

```js
const curMode = sourceBuffer.mode;
if (curMode === "segments") {
  sourceBuffer.mode = "sequence";
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
