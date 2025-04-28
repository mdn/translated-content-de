---
title: "GPUDevice: createSampler() Methode"
short-title: createSampler()
slug: Web/API/GPUDevice/createSampler
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createSampler()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle erstellt einen [`GPUSampler`](/de/docs/Web/API/GPUSampler), der steuert, wie Shader Texturressourcendaten transformieren und filtern.

## Syntax

```js-nolint
createSampler()
createSampler(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `addressModeU` {{optional_inline}}

      - : Ein enumerierter Wert, der das Verhalten des Samplers spezifiziert, wenn die Abtastfläche die Breite der Textur überschreitet. Mögliche Werte sind:

        - `"clamp-to-edge"`: Die Texturkoordinaten werden auf den Bereich zwischen 0,0 und 1,0 begrenzt.
        - `"repeat"`: Die Texturkoordinaten umwickeln auf die andere Seite der Textur.
        - `"mirror-repeat"`: Die Texturkoordinaten umwickeln auf die andere Seite der Textur, aber die Textur wird gespiegelt, wenn der ganzzahlige Teil der Koordinate ungerade ist.

        Wenn weggelassen, ist der Standardwert für `addressModeU` `"clamp-to-edge"`.

    - `addressModeV` {{optional_inline}}
      - : Ein enumerierter Wert, der das Verhalten des Samplers spezifiziert, wenn die Abtastfläche die Höhe der Textur überschreitet. Mögliche und Standardwerte sind dieselben wie für `addressModeU`.
    - `addressModeW` {{optional_inline}}

      - : Ein enumerierter Wert, der das Verhalten des Samplers spezifiziert, wenn die Abtastfläche die Tiefe der Textur überschreitet. Mögliche und Standardwerte sind dieselben wie für `addressModeU`.

    - `compare` {{optional_inline}}

      - : Wenn angegeben, ist der Sampler ein Vergleichs-Sampler des angegebenen Typs. Mögliche (enumerierte) Werte sind:

        - `"never"`: Vergleichstests schlagen immer fehl.
        - `"less"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner als der abgetastete Wert ist.
        - `"equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er gleich dem abgetasteten Wert ist.
        - `"less-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem abgetasteten Wert ist.
        - `"greater"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer als der abgetastete Wert ist.
        - `"not-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er nicht gleich dem abgetasteten Wert ist.
        - `"greater-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer oder gleich dem abgetasteten Wert ist.
        - `"always"`: Vergleichstests bestehen immer.

        Vergleichs-Sampler können Filtern verwenden, aber die Abtastergebnisse werden implementierungsabhängig sein und können von den normalen Filterregeln abweichen.

    - `label` {{optional_inline}}

      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError) Nachrichten oder Konsolenwarnungen.

    - `lodMinClamp` {{optional_inline}}
      - : Eine Zahl, die die minimale Detailebene spezifiziert, die intern beim Abtasten einer Textur verwendet wird. Wenn weggelassen, ist der Standardwert für `lodMinClamp` 0.
    - `lodMaxClamp` {{optional_inline}}

      - : Eine Zahl, die die maximale Detailebene spezifiziert, die intern beim Abtasten einer Textur verwendet wird. Wenn weggelassen, ist der Standardwert für `lodMaxClamp` 32.

    - `maxAnisotropy` {{optional_inline}}

      - : Spezifiziert den maximalen Wert für Anisotropie, der vom Sampler verwendet wird. Wenn weggelassen, beträgt der Standardwert für `maxAnisotropy` 1.

        Die meisten Implementierungen unterstützen `maxAnisotropy` Werte in einem Bereich von 1 bis einschließlich 16. Der verwendete Wert wird auf den maximalen Wert, den die zugrunde liegende Plattform unterstützt, begrenzt.

    - `magFilter` {{optional_inline}}

      - : Ein enumerierter Wert, der das Abtastverhalten spezifiziert, wenn die Abtastfläche kleiner oder gleich einem Texel ist. Mögliche Werte sind:

        - `"nearest"`: Gibt den Wert des Texels zurück, der den Texturkoordinaten am nächsten liegt.
        - `"linear"`: Wählt zwei Texel in jeder Dimension und gibt eine lineare Interpolation zwischen ihren Werten zurück.

        Wenn weggelassen, ist der Standardwert für `magFilter` `"nearest"`.

        > [!NOTE]
        > Das `float32-filterable` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit `r32float`-, `rg32float`- und `rgba32float`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture)s filterbar sind.

    - `minFilter` {{optional_inline}}
      - : Ein enumerierter Wert, der das Abtastverhalten spezifiziert, wenn die Abtastfläche größer als ein Texel ist. Mögliche und Standardwerte sind die gleichen wie für `magFilter`.
    - `mipmapFilter` {{optional_inline}}
      - : Ein enumerierter Wert, der das Verhalten beim Abtasten zwischen Mip-Kartierungsebenen spezifiziert. Mögliche und Standardwerte sind die gleichen wie für `magFilter`.

### Rückgabewert

Eine [`GPUSampler`](/de/docs/Web/API/GPUSampler) Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createSampler()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUSampler`](/de/docs/Web/API/GPUSampler) Objekt zurückgegeben:

- `lodMinClamp` ist gleich oder größer als 0.
- `lodMaxClamp` ist gleich oder größer als `lodMinClamp`.
- `maxAnisotropy` ist gleich oder größer als 1.
- Wenn `maxAnisotropy` größer als 1 ist, sind `magFilter`, `minFilter` und `mipmapFilter` `"linear"`.

## Beispiele

Das folgende Beispiel erstellt einen `GPUSampler`, der trilineares Filtern durchführt und Texturkoordinaten wiederholt:

```js
// …

const sampler = device.createSampler({
  addressModeU: "repeat",
  addressModeV: "repeat",
  magFilter: "linear",
  minFilter: "linear",
  mipmapFilter: "linear",
});
```

Die WebGPU-Beispiele [Schattenmappierung Beispiel](https://webgpu.github.io/webgpu-samples/samples/shadowMapping/) verwenden Vergleichs-Sampler, um aus einer Tiefentextur zu sampeln, um Schatten zu rendern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
