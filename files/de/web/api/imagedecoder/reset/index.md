---
title: "ImageDecoder: reset()-Methode"
short-title: reset()
slug: Web/API/ImageDecoder/reset
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`reset()`**-Methode der {{domxref("ImageDecoder")}}-Schnittstelle bricht alle ausstehenden `decode()`-Operationen ab; alle ausstehenden Versprechen werden abgelehnt. Alle anderen Zustände bleiben unverändert. Klassenmethoden können nach `reset()` weiterhin aufgerufen werden. Zum Beispiel ist das Aufrufen von `decode()` nach `reset()` erlaubt.

## Syntax

```js-nolint
reset()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel setzt den `ImageDecoder` zurück.

```js
for (let i = 0; i < imageDecoder.tracks.selectedTrack.frameCount; ++i)
  imageDecoder.decode({ frameIndex: i }).catch(console.log);
imageDecoder.reset();
imageDecoder.decode({ frameIndex: 0 }).then(console.log);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
