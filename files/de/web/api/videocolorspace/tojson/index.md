---
title: "VideoColorSpace: toJSON() Methode"
short-title: toJSON()
slug: Web/API/VideoColorSpace/toJSON
l10n:
  sourceCommit: fa772db7e9b781ab41d5692c9d70dac423fddb1f
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`toJSON()`** Methode der {{domxref("VideoColorSpace")}} Schnittstelle ist ein _Serializer_, der eine JSON-Repräsentation des `VideoColorSpace` Objekts zurückgibt.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-Objekt.

## Beispiele

Im folgenden Beispiel ist `colorSpace` ein `VideoColorSpace` Objekt, das von {{domxref("VideoFrame")}} zurückgegeben wird. Dieses Objekt wird dann als JSON in der Konsole ausgegeben.

```js
let colorSpace = VideoFrame.colorSpace;
console.log(colorSpace.toJSON());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
