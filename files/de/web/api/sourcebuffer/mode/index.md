---
title: "SourceBuffer: mode-Eigenschaft"
short-title: mode
slug: Web/API/SourceBuffer/mode
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`mode`**-Eigenschaft des [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Interfaces steuert, ob Mediensegmente in beliebiger Reihenfolge oder in strikter Reihenfolge an den `SourceBuffer` angehängt werden können.

Die zwei verfügbaren Werte sind:

- `segments`: Die Zeitstempel der Mediensegmente bestimmen die Reihenfolge, in der die Segmente abgespielt werden. Die Segmente können in beliebiger Reihenfolge an den `SourceBuffer` angehängt werden.
- `sequence`: Die Reihenfolge, in der die Segmente an den `SourceBuffer` angehängt werden, bestimmt die Reihenfolge, in der sie abgespielt werden. Zeitstempel für die Segmente, die dieser Reihenfolge folgen, werden automatisch generiert.

Der Moduswert wird beim Erstellen des `SourceBuffer` mit `MediaSource.addSourceBuffer()` initial festgelegt. Wenn bereits Zeitstempel für die Mediensegmente vorhanden sind, wird der Wert auf `segments` gesetzt; wenn nicht, wird der Wert auf `sequence` gesetzt.

Wenn Sie versuchen, den `mode`-Eigenschaftswert auf `segments` zu setzen, während der Anfangswert `sequence` ist, wird eine Ausnahme ausgelöst. Die bestehende Segmentreihenfolge muss im `sequence`-Modus beibehalten werden. Sie können jedoch den Wert von `segments` auf `sequence` ändern. Dies bedeutet lediglich, dass die Abspielreihenfolge fest wird und neue Zeitstempel generiert werden, um dies widerzuspiegeln.

Diese Eigenschaft kann nicht geändert werden, während der `SourceBuffer` entweder einen [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) oder [`remove()`](/de/docs/Web/API/SourceBuffer/remove)-Aufruf verarbeitet.

## Wert

Ein String.

### Ausnahmen

Die folgenden Ausnahmen können ausgelöst werden, wenn ein neuer Wert für diese Eigenschaft festgelegt wird:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, den Wert auf `segments` zu setzen, während der Anfangswert `sequence` ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekt aktualisiert wird (d.h. die [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating)-Eigenschaft ist derzeit `true`), das letzte an diesen `SourceBuffer` angehängte Mediensegment unvollständig ist oder dieser `SourceBuffer` aus dem [`MediaSource`](/de/docs/Web/API/MediaSource) entfernt wurde.

## Beispiele

Dieses Snippet setzt den `sourceBuffer`-Modus auf `'sequence'`, wenn er derzeit auf `'segments'` gesetzt ist, und legt somit die Abspielreihenfolge auf die Sequenz fest, in der die Mediensegmente angehängt werden.

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
