---
title: "AudioData: copyTo()-Methode"
short-title: copyTo()
slug: Web/API/AudioData/copyTo
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`copyTo()`**-Methode des {{domxref("AudioData")}}-Interfaces kopiert eine Ebene eines `AudioData`-Objekts in einen Zielpuffer.

## Syntax

```js-nolint
copyTo(destination, options)
```

### Parameter

- `destination`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, in das die Ebene kopiert werden soll.
- `options`
  - : Ein Objekt, das Folgendes enthält:
    - `planeIndex`
      - : Der Index der Ebene, aus der kopiert werden soll.
    - `frameOffset` {{optional_inline}}
      - : Ein Integer, der einen Offset in den Ebenendaten angibt, welcher angibt, von welcher Ebene mit dem Kopieren begonnen werden soll. Standardmäßig `0`.
    - `frameCount` {{optional_inline}}
      - : Ein Integer, der die Anzahl der zu kopierenden Frames angibt. Wenn weggelassen, werden alle Frames in der Ebene kopiert, beginnend mit dem im `frameOffset` angegebenen Frame.

### Rückgabewert

Undefiniert.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das `AudioData`-Objekt [übertragen](/de/docs/Web/API/Web_Workers_API/Transferable_objects) wurde.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der folgenden Bedingungen erfüllt ist:
    - Die Länge der Probe ist länger als die Ziellänge.
    - Das Format des `AudioData`-Objekts beschreibt ein planares Format, aber `options.planeIndex` liegt außerhalb der verfügbaren Ebenenanzahl.
    - Das Format des `AudioData`-Objekts beschreibt ein interleaved Format, aber `options.planeIndex` ist größer als `0`.

## Beispiele

Im folgenden Beispiel wird die Ebene an Index `1` in einen Zielpuffer kopiert.

```js
AudioData.copyTo(AudioBuffer, { planeIndex: 1 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
