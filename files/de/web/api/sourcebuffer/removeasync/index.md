---
title: "SourceBuffer: Methode removeAsync()"
short-title: removeAsync()
slug: Web/API/SourceBuffer/removeAsync
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}{{Non-standard_Header}}{{SeeCompatTable}}

Die **`removeAsync()`**-Methode des
[`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Interfaces beginnt den Prozess des asynchronen Entfernens von Mediensegmenten aus dem `SourceBuffer`, die sich innerhalb eines bestimmten Zeitbereichs befinden. Ein {{jsxref("Promise")}} wird zurückgegeben, das erfüllt wird, wenn die Puffer im angegebenen Zeitbereich entfernt wurden.

Diese Methode kann nur aufgerufen werden, wenn [`updating`](/de/docs/Web/API/SourceBuffer/updating) ist
`false`. Andernfalls sollte [`abort()`](/de/docs/Web/API/SourceBuffer/abort) aufgerufen werden.

## Syntax

```js-nolint
removeAsync(start, end)
```

### Parameter

- `start`
  - : Ein Double, das den Anfang des Zeitbereichs in Sekunden darstellt.
- `end`
  - : Ein Double, das das Ende des Zeitbereichs in Sekunden darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen fulfillment handler ausgeführt wird, sobald die Puffer im
angegebenen Zeitbereich aus dem `SourceBuffer` entfernt wurden.

## Beispiele

Dieses Beispiel zeigt eine asynchrone Funktion, `emptySourceBuffer()`,
die den Inhalt des angegebenen `SourceBuffer` löscht.

```js
async function emptySourceBuffer(msBuffer) {
  await msBuffer.removeAsync(0, Infinity).catch((e) => {
    handleException(e);
  });
}
```

## Spezifikationen

Dieses Feature ist Teil keiner Spezifikation. Es ist nicht auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API)
- [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove)
- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
