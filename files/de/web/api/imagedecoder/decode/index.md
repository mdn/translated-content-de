---
title: "ImageDecoder: decode()-Methode"
short-title: decode()
slug: Web/API/ImageDecoder/decode
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`decode()`**-Methode des {{domxref("ImageDecoder")}}-Interfaces reiht eine Steuerungsnachricht zur Dekodierung des Bildrahmens ein.

## Syntax

```js-nolint
decode()
decode(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Mitgliedern:
    - `frameIndex` {{optional_inline}}
      - : Ein Integer, der den Index des zu dekodierenden Rahmens darstellt. Standardmäßig `0` (der erste Rahmen).
    - `completeFramesOnly` {{optional_inline}}
      - : Ein {{jsxref("boolean")}}, der standardmäßig `true` ist. Wenn `false`, bedeutet dies, dass der Decoder bei progressiven Bildern ein Bild mit reduzierter Detailtiefe ausgeben kann. Bei `false` wird das von `decode()` zurückgegebene Versprechen genau einmal für jedes neue Detaillierungsniveau erfüllt.

### Rückgabewert

Ein {{jsxref("promise")}}, der mit einem Objekt aufgelöst wird, das die folgenden Mitglieder enthält:

- `image`
  - : Ein {{domxref("VideoFrame")}}, das das dekodierte Bild enthält.
- `complete`
  - : Ein {{jsxref("boolean")}}, der, wenn `true`, anzeigt, dass `image` die endgültige vollständige Detailausgabe enthält.

### Ausnahmen

Wenn ein Fehler auftritt, wird das Versprechen mit der folgenden Ausnahme aufgelöst:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn einer der folgenden Bedingungen zutrifft:
    - `close` ist `true`, was bedeutet, dass {{domxref("ImageDecoder.close()","close()")}} bereits aufgerufen wurde.
    - Der angeforderte Rahmen existiert nicht.

## Beispiele

### Synchrones Dekodieren eines abgeschlossenen Bildrahmens

Das folgende Beispiel dekodiert den zweiten Rahmen (bei Index `1`) und gibt das resultierende {{domxref("VideoFrame")}} in der Konsole aus.

```js
let result = await imageDecoder.decode({ frameIndex: 1 });
console.log(result.image);
```

### Teilweises Dekodieren eines progressiven Bildrahmens

Das folgende Beispiel dekodiert den ersten Rahmen wiederholt, bis er vollständig ist:

```js
let complete = false;
while (!complete) {
  // Das `decode()`-Versprechen wird nur erfüllt, wenn ein neues
  // Detaillierungsniveau verfügbar ist oder der Rahmen vollständig ist. D.h.,
  // der Aufruf von `decode()` in einer solchen Schleife dreht sich nicht sinnlos.
  let result = await imageDecode.decode({ completeFramesOnly: false });

  // Machen Sie etwas mit `result.image`.

  complete = result.complete;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
