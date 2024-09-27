---
title: "AudioData: allocationSize()-Methode"
short-title: allocationSize()
slug: Web/API/AudioData/allocationSize
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`allocationSize()`**-Methode des [`AudioData`](/de/docs/Web/API/AudioData)-Interfaces gibt die Größe in Bytes zurück, die benötigt wird, um die aktuelle Abtastung zu speichern, wie sie durch Optionen gefiltert wird, die in die Methode übergeben werden.

## Syntax

```js-nolint
allocationSize(options)
```

### Parameter

- `options`
  - : Ein Objekt, das folgendes enthält:
    - `planeIndex`
      - : Der Index der Ebene, deren Größe zurückgegeben werden soll.
    - `frameOffset` {{optional_inline}}
      - : Ein ganzzahliger Wert, der einen Versatz in die Plan-Daten angibt und bestimmt, von welcher Ebene begonnen werden soll. Standardmäßig `0`.
    - `frameCount` {{optional_inline}}
      - : Eine Ganzzahl, die die Anzahl der Frames angibt, deren Größe zurückgegeben werden soll. Wenn weggelassen, werden alle Frames in der Ebene verwendet, beginnend mit dem in `frameOffset` angegebenen Frame.

### Rückgabewert

Eine Ganzzahl, die die Anzahl der Bytes enthält, die benötigt werden, um die durch `options` beschriebenen Abtastungen zu speichern.

## Beispiele

Das folgende Beispiel ermittelt die Größe der Ebene an Index `1`.

```js
let size = AudioData.allocationSize({ planeIndex: 1 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
