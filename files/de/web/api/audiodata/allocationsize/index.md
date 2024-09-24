---
title: "AudioData: allocationSize()-Methode"
short-title: allocationSize()
slug: Web/API/AudioData/allocationSize
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`allocationSize()`**-Methode der {{domxref("AudioData")}}-Schnittstelle gibt die Größe in Bytes zurück, die erforderlich ist, um das aktuelle Sample zu speichern, gefiltert durch die in die Methode übergebenen Optionen.

## Syntax

```js-nolint
allocationSize(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Folgendes enthält:
    - `planeIndex`
      - : Der Index der Ebene, deren Größe zurückgegeben werden soll.
    - `frameOffset` {{optional_inline}}
      - : Ein Integer, der einen Versatz in den Ebenendaten angibt und angibt, von welcher Ebene aus begonnen werden soll. Standardmäßig `0`.
    - `frameCount` {{optional_inline}}
      - : Ein Integer, der die Anzahl der Frames angibt, deren Größe zurückgegeben werden soll. Wenn weggelassen, werden alle Frames in der Ebene verwendet, beginnend mit dem im `frameOffset` angegebenen Frame.

### Rückgabewert

Ein Integer, der die Anzahl der Bytes enthält, die benötigt werden, um die durch `options` beschriebenen Samples zu speichern.

## Beispiele

Das folgende Beispiel ermittelt die Größe der Ebene an Index `1`.

```js
let size = AudioData.allocationSize({ planeIndex: 1 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
