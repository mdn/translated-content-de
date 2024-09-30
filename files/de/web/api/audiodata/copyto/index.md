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
      - : Der Index der Ebene, aus der kopiert werden soll.
    - `frameOffset` {{optional_inline}}
      - : Ein Integer, der einen Versatz in die Ebenendaten angibt, ab dem die Kopie beginnen soll. Standardmäßig `0`.
    - `frameCount` {{optional_inline}}
      - : Ein Integer, der die Anzahl der zu kopierenden Frames angibt. Wird er nicht angegeben, werden alle Frames in der Ebene kopiert, beginnend mit dem in `frameOffset` angegebenen Frame.

### Rückgabewert

Undefiniert.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das `AudioData`-Objekt [übertragen](/de/docs/Web/API/Web_Workers_API/Transferable_objects) wurde.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der folgenden Bedingungen erfüllt ist:
    - Die Länge der Probe ist länger als die Länge des Ziels.
    - Das Format des `AudioData`-Objekts beschreibt ein planaritisches Format, aber `options.planeIndex` liegt außerhalb der Anzahl der verfügbaren Ebenen.
    - Das Format des `AudioData`-Objekts beschreibt ein verschachteltes Format, aber `options.planeIndex` ist größer als `0`.

## Beispiele

Das folgende Beispiel kopiert die Ebene am Index `1` in einen Zielpuffer.

```js
AudioData.copyTo(AudioBuffer, { planeIndex: 1 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
