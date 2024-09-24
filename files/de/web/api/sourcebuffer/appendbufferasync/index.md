---
title: "SourceBuffer: appendBufferAsync()-Methode"
short-title: appendBufferAsync()
slug: Web/API/SourceBuffer/appendBufferAsync
l10n:
  sourceCommit: 2d652f379ff4de141b95f37d0d14987a5f878728
---

{{APIRef("Media Source Extensions")}}{{Non-standard_Header}}{{SeeCompatTable}}

Die **`appendBufferAsync()`**-Methode
des {{domxref("SourceBuffer")}}-Interfaces startet den Prozess des asynchronen
Anhängen von Mediensegnmentdaten aus einem {{jsxref("ArrayBuffer")}},
einem {{jsxref("TypedArray")}} oder einem {{jsxref("DataView")}}-Objekt an das `SourceBuffer`-Objekt.
Sie gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald der Puffer angehängt wurde.

## Syntax

```js-nolint
appendBufferAsync(source)
```

### Parameter

- `source`
  - : Entweder ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, das die Mediensegnmentdaten enthält, die Sie dem `SourceBuffer` hinzufügen möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, wenn der Puffer erfolgreich dem `SourceBuffer`-Objekt hinzugefügt wurde,
oder `null`, wenn die Anfrage nicht gestartet werden konnte.

## Beispiele

Diese vereinfachte asynchrone Beispiel-Funktion, `fillSourceBuffer()`, nimmt als Eingabeparameter `buffer` und ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} sowie ein `SourceBuffer`-Objekt, dem die Quellenmedien aus dem Puffer hinzugefügt werden sollen.

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

Diese Funktion ist nicht Teil einer Spezifikation. Sie ist nicht auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API)
- {{domxref("SourceBuffer.appendBuffer()")}}
- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
