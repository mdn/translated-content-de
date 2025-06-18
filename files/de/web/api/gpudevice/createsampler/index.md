---
title: "GPUDevice: createSampler() Methode"
short-title: createSampler()
slug: Web/API/GPUDevice/createSampler
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createSampler()`**-Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces erstellt einen [`GPUSampler`](/de/docs/Web/API/GPUSampler), der steuert, wie Shader Texturressourcendaten transformieren und filtern.

## Syntax

```js-nolint
createSampler()
createSampler(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `addressModeU` {{optional_inline}}

      - : Ein enumerierter Wert, der das Verhalten des Samplers angibt, wenn die Sample-Footprint-Breite über die Breite der Textur hinausgeht. Mögliche Werte sind:

        - `"clamp-to-edge"`: Die Texturkoordinaten werden zwischen 0,0 und 1,0 eingeschränkt.
        - `"repeat"`: Die Texturkoordinaten wickeln sich auf die andere Seite der Textur.
        - `"mirror-repeat"`: Die Texturkoordinaten wickeln sich auf die andere Seite der Textur, jedoch wird die Textur gespiegelt, wenn der ganzzahlige Teil der Koordinate ungerade ist.

        Wenn weggelassen, ist `addressModeU` standardmäßig auf `"clamp-to-edge"` gesetzt.

    - `addressModeV` {{optional_inline}}
      - : Ein enumerierter Wert, der das Verhalten des Samplers angibt, wenn die Sample-Footprint-Höhe über die Höhe der Textur hinausgeht. Mögliche und Standardwerte sind die gleichen wie für `addressModeU`.
    - `addressModeW` {{optional_inline}}

      - : Ein enumerierter Wert, der das Verhalten des Samplers angibt, wenn die Sample-Footprint-Tiefe über die Tiefe der Textur hinausgeht. Mögliche und Standardwerte sind die gleichen wie für `addressModeU`.

    - `compare` {{optional_inline}}

      - : Wenn angegeben, wird der Sampler ein Vergleichssampler des angegebenen Typs sein. Mögliche (enumerierte) Werte sind:

        - `"never"`: Vergleichstests bestehen niemals.
        - `"less"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner als der abgetastete Wert ist.
        - `"equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er gleich dem abgetasteten Wert ist.
        - `"less-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem abgetasteten Wert ist.
        - `"greater"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer als der abgetastete Wert ist.
        - `"not-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er nicht gleich dem abgetasteten Wert ist.
        - `"greater-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer oder gleich dem abgetasteten Wert ist.
        - `"always"`: Vergleichstests bestehen immer.

        Vergleichssampler können Filtern verwenden, aber die Abtastergebnisse werden implementierungsabhängig sein und können sich von den normalen Filterregeln unterscheiden.

    - `label` {{optional_inline}}

      - : Ein String, der eine Bezeichnung bereitstellt, welche zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

    - `lodMinClamp` {{optional_inline}}
      - : Eine Zahl, die das minimale interne Detailniveau angibt, das beim Abtasten einer Textur verwendet wird. Wenn weggelassen, ist `lodMinClamp` standardmäßig auf 0 gesetzt.
    - `lodMaxClamp` {{optional_inline}}

      - : Eine Zahl, die das maximale interne Detailniveau angibt, das beim Abtasten einer Textur verwendet wird. Wenn weggelassen, ist `lodMaxClamp` standardmäßig auf 32 gesetzt.

    - `maxAnisotropy` {{optional_inline}}

      - : Gibt den maximalen Anisotropiewert an, der vom Sampler verwendet wird. Wenn weggelassen, ist `maxAnisotropy` standardmäßig auf 1 gesetzt.

        Die meisten Implementierungen unterstützen `maxAnisotropy`-Werte in einem Bereich zwischen 1 und 16, inklusive. Der verwendete Wert wird auf den maximalen Wert begrenzt, den die zugrunde liegende Plattform unterstützt.

    - `magFilter` {{optional_inline}}

      - : Ein enumerierter Wert, der das Abtastverhalten angibt, wenn die Sample-Footprint-Größe kleiner oder gleich einem Texel ist. Mögliche Werte sind:

        - `"nearest"`: Gibt den Wert des Texels zurück, der den Texturkoordinaten am nächsten ist.
        - `"linear"`: Wählt zwei Texel in jeder Dimension und gibt eine lineare Interpolation zwischen ihren Werten zurück.

        Wenn weggelassen, ist `magFilter` standardmäßig auf `"nearest"` gesetzt.

        > [!NOTE]
        > Das `float32-filterable` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit `r32float`-, `rg32float`- und `rgba32float`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format)-[`GPUTexture`](/de/docs/Web/API/GPUTexture)s filterbar sind.

    - `minFilter` {{optional_inline}}
      - : Ein enumerierter Wert, der das Abtastverhalten angibt, wenn die Sample-Footprint-Größe größer als ein Texel ist. Mögliche und Standardwerte sind die gleichen wie für `magFilter`.
    - `mipmapFilter` {{optional_inline}}
      - : Ein enumerierter Wert, der das Verhalten beim Abtasten zwischen Mipmap-Ebenen angibt. Mögliche und Standardwerte sind die gleichen wie für `magFilter`.

### Rückgabewert

Eine [`GPUSampler`](/de/docs/Web/API/GPUSampler)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`createSampler()`** erfüllt sein, sonst wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUSampler`](/de/docs/Web/API/GPUSampler)-Objekt zurückgegeben:

- `lodMinClamp` ist größer oder gleich 0.
- `lodMaxClamp` ist größer oder gleich `lodMinClamp`.
- `maxAnisotropy` ist größer oder gleich 1.
- Wenn `maxAnisotropy` größer als 1 ist, sind `magFilter`, `minFilter` und `mipmapFilter` `"linear"`.

## Beispiele

Der folgende Codeausschnitt erstellt einen `GPUSampler`, der trilineares Filtern durchführt und Texturkoordinaten wiederholt:

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

Das WebGPU-Beispiel [Shadow Mapping sample](https://webgpu.github.io/webgpu-samples/samples/shadowMapping/) verwendet Vergleichssampler, um aus einer Tiefentextur Schatten zu rendern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
