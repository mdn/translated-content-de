---
title: "SourceBuffer: mode-Eigenschaft"
short-title: mode
slug: Web/API/SourceBuffer/mode
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`mode`**-Eigenschaft des [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Interfaces steuert, ob Mediensegmente dem `SourceBuffer` in beliebiger Reihenfolge oder in strikter Sequenz hinzugefügt werden können.

Die zwei verfügbaren Werte sind:

- `segments`: Die Zeitstempel der Mediensegmente bestimmen die Reihenfolge, in der die Segmente abgespielt werden. Die Segmente können in beliebiger Reihenfolge zum `SourceBuffer` hinzugefügt werden.
- `sequence`: Die Reihenfolge, in der die Segmente dem `SourceBuffer` hinzugefügt werden, bestimmt die Reihenfolge, in der sie abgespielt werden. Zeitstempel für die Segmente, die diese Reihenfolge beachten, werden automatisch generiert.

Der Moduswert wird initial festgelegt, wenn der `SourceBuffer` mit `MediaSource.addSourceBuffer()` erstellt wird. Wenn für die Mediensegmente bereits Zeitstempel existieren, wird der Wert auf `segments` gesetzt; wenn nicht, wird der Wert auf `sequence` gesetzt.

Wenn Sie versuchen, den Wert der `mode`-Eigenschaft auf `segments` zu setzen, während der Anfangswert `sequence` ist, wird eine Ausnahme ausgelöst. Die vorhandene Segmentreihenfolge muss im `sequence`-Modus beibehalten werden. Sie können jedoch den Wert von `segments` in `sequence` ändern. Dies bedeutet lediglich, dass die Abspielreihenfolge fixiert wird und neue Zeitstempel generiert werden, die dies widerspiegeln.

Diese Eigenschaft kann nicht geändert werden, während der `SourceBuffer` entweder einen [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)- oder einen [`remove()`](/de/docs/Web/API/SourceBuffer/remove)-Aufruf verarbeitet.

## Wert

Ein String.

### Ausnahmen

Die folgenden Ausnahmen können ausgelöst werden, wenn ein neuer Wert für diese Eigenschaft gesetzt wird:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, den Wert auf `segments` zu setzen, während der Anfangswert `sequence` ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekt aktualisiert wird (d.h. seine [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating)-Eigenschaft derzeit `true` ist), das letzte Mediensegment, das diesem `SourceBuffer` hinzugefügt wurde, unvollständig ist oder dieser `SourceBuffer` von der [`MediaSource`](/de/docs/Web/API/MediaSource) entfernt wurde.

## Beispiele

Dieser Codeabschnitt setzt den `sourceBuffer`-Modus auf `'sequence'`, wenn er derzeit auf `'segments'` gesetzt ist, und legt somit die Abspielreihenfolge auf die Reihenfolge fest, in der Mediensegmente hinzugefügt werden.

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

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
