---
title: "SourceBuffer: removeAsync() method"
slug: Web/API/SourceBuffer/removeAsync
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

---
title: "SourceBuffer: removeAsync()-Methode"
short-title: removeAsync()
slug: Web/API/SourceBuffer/removeAsync
page-type: web-api-instance-method
status:

- experimental
- non-standard
browser-compat: api.SourceBuffer.removeAsync

---

{{APIRef("Media Source Extensions")}}{{Non-standard_Header}}{{SeeCompatTable}}

Die **`removeAsync()`**-Methode des {{domxref("SourceBuffer")}}-Interfaces startet den Prozess des asynchronen Entfernens von Mediensegmenten aus dem `SourceBuffer`, die in einem bestimmten Zeitbereich gefunden werden. Ein {{jsxref("Promise")}} wird zurückgegeben, das erfüllt wird, wenn die Puffer im angegebenen Zeitbereich entfernt wurden.

Diese Methode kann nur aufgerufen werden, wenn {{domxref("SourceBuffer.updating", "updating")}} `false` ist. Sollte dies nicht der Fall sein, rufen Sie stattdessen {{domxref("SourceBuffer.abort", "abort()")}} auf.

## Syntax

```js-nolint
removeAsync(start, end)
```

### Parameter

- `start`
  - : Ein Double, der den Beginn des Zeitbereichs in Sekunden darstellt.
- `end`
  - : Ein Double, der das Ende des Zeitbereichs in Sekunden darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüllungshandler ausgeführt wird, sobald die Puffer im angegebenen Zeitbereich aus dem `SourceBuffer` entfernt wurden.

## Beispiele

Dieses Beispiel erstellt eine asynchrone Funktion, `emptySourceBuffer()`, die den Inhalt des angegebenen `SourceBuffer` leert.

```js
async function emptySourceBuffer(msBuffer) {
  await msBuffer.removeAsync(0, Infinity).catch((e) => {
    handleException(e);
  });
}
```

## Spezifikationen

Diese Funktion ist Teil keiner Spezifikation. Sie ist nicht auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API)
- {{domxref("SourceBuffer.remove()")}}
- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
