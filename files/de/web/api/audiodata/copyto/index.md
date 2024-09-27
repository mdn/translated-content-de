---
title: "AudioData: copyTo()-Methode"
short-title: copyTo()
slug: Web/API/AudioData/copyTo
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`copyTo()`**-Methode der [`AudioData`](/de/docs/Web/API/AudioData)-Schnittstelle kopiert eine Ebene eines `AudioData`-Objekts in einen Zielpuffer.

## Syntax

```js-nolint
copyTo(destination, options)
```

### Parameter

- `destination`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, in den die Ebene kopiert werden soll.
- `options`
  - : Ein Objekt, das Folgendes enthält:
    - `planeIndex`
      - : Der Index der Ebene, die kopiert werden soll.
    - `frameOffset` {{optional_inline}}
      - : Ein Integer, der einen Offset in den Ebenendaten angibt, ab dem die Kopie beginnen soll. Standardwert ist `0`.
    - `frameCount` {{optional_inline}}
      - : Ein Integer, der angibt, wie viele Frames kopiert werden sollen. Wenn nicht angegeben, werden alle Frames in der Ebene kopiert, beginnend mit dem im `frameOffset` angegebenen Frame.

### Rückgabewert

Undefined.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das `AudioData`-Objekt [übertragen](/de/docs/Web/API/Web_Workers_API/Transferable_objects) wurde.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der folgenden Bedingungen erfüllt ist:
    - Die Länge des Samples ist länger als die Zielpufferlänge.
    - Das Format des `AudioData`-Objekts beschreibt ein Planar-Format, aber `options.planeIndex` liegt außerhalb der verfügbaren Ebenenanzahl.
    - Das Format des `AudioData`-Objekts beschreibt ein Interleaved-Format, aber `options.planeIndex` ist größer als `0`.

## Beispiele

Das folgende Beispiel kopiert die Ebene am Index `1` in einen Zielpuffer.

```js
AudioData.copyTo(AudioBuffer, { planeIndex: 1 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
