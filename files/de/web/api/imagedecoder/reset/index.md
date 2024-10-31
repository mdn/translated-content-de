---
title: "ImageDecoder: reset() Methode"
short-title: reset()
slug: Web/API/ImageDecoder/reset
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`reset()`**-Methode des [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Interfaces bricht alle ausstehenden `decode()`-Operationen ab und lehnt alle ausstehenden Versprechen ab. Alle anderen Zustände bleiben unverändert. Klassenmethoden können nach `reset()` weiterhin aufgerufen werden. Zum Beispiel ist es erlaubt, `decode()` nach einem `reset()` aufzurufen.

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
