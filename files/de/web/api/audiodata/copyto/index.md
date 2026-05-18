---
title: "AudioData: copyTo() Methode"
short-title: copyTo()
slug: Web/API/AudioData/copyTo
l10n:
  sourceCommit: e3fa9c22ac7352d23cb4d34cc2b2c0fe49db4939
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`copyTo()`** Methode des [`AudioData`](/de/docs/Web/API/AudioData) Interfaces kopiert eine Ebene eines `AudioData` Objekts in einen Zielpuffer.

## Syntax

```js-nolint
copyTo(destination, options)
```

### Parameter

- `destination`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, in den die Ebene kopiert werden soll.
- `options`
  - : Ein Objekt, das folgendes enthält:
    - `planeIndex`
      - : Der Index der Ebene, aus der kopiert werden soll.
    - `frameOffset` {{optional_inline}}
      - : Ein ganzzahliger Wert, der den Versatz des ersten zu kopierenden Rahmens innerhalb der Ebene angibt. Standardmäßig `0`.
    - `frameCount` {{optional_inline}}
      - : Ein ganzzahliger Wert, der die Anzahl der zu kopierenden Rahmen angibt. Wenn weggelassen, werden alle Rahmen von `frameOffset` bis zum Ende der Ebene kopiert.
    - `format` {{optional_inline}}
      - : Ein String, der das Audioformat angibt, in das die Quellproben konvertiert werden sollen, wenn sie in das Ziel kopiert werden.
        Dies kann einer der folgenden Werte sein: `"u8"`, `"s16"`, `"s32"`, `"f32"`, `"u8-planar"`, `"s16-planar"`, `"s32-planar"`, und `"f32-planar"` (siehe [`AudioData.format`](/de/docs/Web/API/AudioData/format) für weitere Informationen).
        Beachten Sie, dass `"f32-planar"` unterstützt werden muss. Wenn nicht angegeben, werden die Proben im eigenen Format des `AudioData` kopiert.

### Rückgabewert

Undefiniert.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das `AudioData` Objekt [übertragen](/de/docs/Web/API/Web_Workers_API/Transferable_objects) wurde.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der folgenden Bedingungen erfüllt ist:
    - Die Länge der Probe ist länger als die Ziellänge.
    - Das Format des `AudioData` Objekts beschreibt ein Planarformat, aber `options.planeIndex` liegt außerhalb der verfügbaren Anzahl von Ebenen.
    - Das Format des `AudioData` Objekts beschreibt ein verschachteltes Format, aber `options.planeIndex` ist größer als `0`.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das angegebene [`format`](#format) zum Konvertieren der Daten nicht unterstützt wird.

## Beispiele

Das folgende Beispiel kopiert die Ebene am Index `1` in einen Zielpuffer.

```js
AudioData.copyTo(AudioBuffer, { planeIndex: 1 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
