---
title: "SourceBuffer: appendBufferAsync()-Methode"
short-title: appendBufferAsync()
slug: Web/API/SourceBuffer/appendBufferAsync
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}{{Non-standard_Header}}{{SeeCompatTable}}

Die **`appendBufferAsync()`**-Methode
des [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Interfaces beginnt den Prozess des asynchronen
Anhängevorgangs von Mediensegmentdaten aus einem {{jsxref("ArrayBuffer")}},
einem {{jsxref("TypedArray")}} oder einem {{jsxref("DataView")}}-Objekt an das `SourceBuffer`-Objekt.
Es gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald der Puffer angehängt wurde.

## Syntax

```js-nolint
appendBufferAsync(source)
```

### Parameter

- `source`
  - : Entweder ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, das die Mediensegmentdaten enthält, die Sie dem `SourceBuffer` hinzufügen möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, wenn der Puffer erfolgreich zum `SourceBuffer`-Objekt hinzugefügt wurde,
oder `null`, wenn die Anforderung nicht initiiert werden konnte.

## Beispiele

Diese vereinfachte asynchrone Funktion, `fillSourceBuffer()`, nimmt als Eingabeparameter `buffer`, einen {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder einen {{jsxref("DataView")}}, und ein
`SourceBuffer`-Objekt, an welches die Quellmedien aus dem Puffer angehängt werden sollen.

```js
async function fillSourceBuffer(buffer, msBuffer) {
  try {
    while (true) {
      await msBuffer.appendBufferAsync(buffer);
    }
  } catch (e) {
    handleException(e);
  }
}
```

## Spezifikationen

Dieses Feature ist Teil keiner Spezifikation. Es steht nicht auf der Agenda, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API)
- [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)
- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
