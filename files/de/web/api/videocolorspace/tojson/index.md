---
title: "VideoColorSpace: Methode toJSON()"
short-title: toJSON()
slug: Web/API/VideoColorSpace/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die Methode **`toJSON()`** der Schnittstelle [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `VideoColorSpace`-Objekt repräsentiert.

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `VideoColorSpace`-Objekt auftritt. Der serialisierte Wert kann anschließend mit dem Konstruktor [`VideoColorSpace()`](/de/docs/Web/API/VideoColorSpace/VideoColorSpace) innerhalb der Reviver-Funktion von {{jsxref("JSON.parse()")}} deserialisiert werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`fullRange`](/de/docs/Web/API/VideoColorSpace/fullRange)
- [`matrix`](/de/docs/Web/API/VideoColorSpace/matrix)
- [`primaries`](/de/docs/Web/API/VideoColorSpace/primaries)
- [`transfer`](/de/docs/Web/API/VideoColorSpace/transfer)

Der Wert jeder Eigenschaft wird unverändert übernommen.

## Beispiele

### toJSON() direkt aufrufen

Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück, das die Eigenschaften des `VideoColorSpace`-Objekts enthält.

```js
const colorSpace = new VideoColorSpace({
  primaries: "bt709",
  transfer: "bt709",
  matrix: "bt709",
  fullRange: true,
});

const json = colorSpace.toJSON();
console.log(json);
// { fullRange: true, matrix: "bt709", primaries: "bt709", transfer: "bt709" }
console.log(typeof json); // "object"
```

### In einen JSON-String serialisieren

Das `VideoColorSpace`-Objekt aus dem vorherigen Beispiel wird mit {{jsxref("JSON.stringify()")}} serialisiert. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(colorSpace));
```

Dadurch würde ein JSON-String wie der folgende ausgegeben (zur besseren Lesbarkeit formatiert):

```json
{
  "fullRange": true,
  "matrix": "bt709",
  "primaries": "bt709",
  "transfer": "bt709"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
