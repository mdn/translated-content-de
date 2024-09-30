---
title: "SourceBuffer: mode-Eigenschaft"
short-title: mode
slug: Web/API/SourceBuffer/mode
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`mode`**-Eigenschaft des [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Interfaces legt fest, ob Mediensegmente in beliebiger Reihenfolge oder in einer strengen Sequenz zum `SourceBuffer` hinzugefügt werden können.

Die beiden verfügbaren Werte sind:

- `segments`: Die Zeitstempel der Mediensegmente bestimmen die Reihenfolge, in der die Segmente abgespielt werden. Die Segmente können in beliebiger Reihenfolge zum `SourceBuffer` hinzugefügt werden.
- `sequence`: Die Reihenfolge, in der die Segmente zum `SourceBuffer` hinzugefügt werden, bestimmt die Reihenfolge, in der sie abgespielt werden. Segmentzeitstempel werden automatisch für die Segmente generiert, die diese Reihenfolge einhalten.

Der Moduswert wird initial festgelegt, wenn der `SourceBuffer` mit `MediaSource.addSourceBuffer()` erstellt wird. Wenn Zeitstempel für die Mediensegmente bereits existieren, wird der Wert auf `segments` gesetzt; andernfalls auf `sequence`.

Wenn Sie versuchen, den Wert der `mode`-Eigenschaft auf `segments` zu setzen, wenn der Anfangswert `sequence` ist, wird eine Ausnahme ausgelöst. Die bestehende Segmentreihenfolge muss im `sequence`-Modus beibehalten werden. Sie können jedoch den Wert von `segments` zu `sequence` ändern. Dies bedeutet lediglich, dass die Abspielreihenfolge festgelegt wird und neue Zeitstempel generiert werden, um diese widerzuspiegeln.

Diese Eigenschaft kann nicht geändert werden, während der `SourceBuffer` entweder einen [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) oder einen [`remove()`](/de/docs/Web/API/SourceBuffer/remove)-Aufruf verarbeitet.

## Wert

Ein String.

### Ausnahmen

Die folgenden Ausnahmen können ausgelöst werden, wenn ein neuer Wert für diese Eigenschaft festgelegt wird:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, den Wert auf `segments` zu setzen, als der Anfangswert `sequence` war.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekt gerade aktualisiert wird (d.h. seine [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating)-Eigenschaft derzeit `true` ist), das letzte zum `SourceBuffer` hinzugefügte Mediensegment unvollständig ist, oder dieser `SourceBuffer` aus dem [`MediaSource`](/de/docs/Web/API/MediaSource) entfernt wurde.

## Beispiele

Dieser Codeausschnitt setzt den `sourceBuffer`-Modus auf `'sequence'`, wenn er derzeit auf `'segments'` gesetzt ist, und legt damit die Abspielreihenfolge auf die Sequenz fest, in der die Mediensegmente hinzugefügt werden.

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
