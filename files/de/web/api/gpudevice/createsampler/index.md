---
title: "GPUDevice: createSampler()-Methode"
short-title: createSampler()
slug: Web/API/GPUDevice/createSampler
l10n:
  sourceCommit: 2379747e3cefc009c6a00ec52e88d66ff15c5397
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

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

      - : Ein enumerierter Wert, der das Verhalten des Samplers beschreibt, wenn die Sample-Footprint-Breite die Breite der Textur überschreitet. Mögliche Werte sind:

        - `"clamp-to-edge"`: Die Texturkoordinaten werden zwischen 0,0 und 1,0 eingeschlossen begrenzt.
        - `"repeat"`: Die Texturkoordinaten werden auf die andere Seite der Textur gewickelt.
        - `"mirror-repeat"`: Die Texturkoordinaten werden auf die andere Seite der Textur gewickelt, aber die Textur wird gespiegelt, wenn der ganzzahlige Teil der Koordinate ungerade ist.

        Wenn nicht angegeben, ist der Standardwert für `addressModeU` `"clamp-to-edge"`.

    - `addressModeV` {{optional_inline}}
      - : Ein enumerierter Wert, der das Verhalten des Samplers beschreibt, wenn die Sample-Footprint-Höhe die Höhe der Textur überschreitet. Mögliche und Standardwerte sind die gleichen wie für `addressModeU`.
    - `addressModeW` {{optional_inline}}

      - : Ein enumerierter Wert, der das Verhalten des Samplers beschreibt, wenn die Sample-Footprint-Tiefe die Tiefe der Textur überschreitet. Mögliche und Standardwerte sind die gleichen wie für `addressModeU`.

    - `compare` {{optional_inline}}

      - : Wenn angegeben, wird der Sampler ein Vergleichs-Sampler des angegebenen Typs sein. Mögliche (enumerierte) Werte sind:

        - `"never"`: Vergleichstests bestehen nie.
        - `"less"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner als der abgetastete Wert ist.
        - `"equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er gleich dem abgetasteten Wert ist.
        - `"less-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem abgetasteten Wert ist.
        - `"greater"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer als der abgetastete Wert ist.
        - `"not-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er nicht gleich dem abgetasteten Wert ist.
        - `"greater-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer oder gleich dem abgetasteten Wert ist.
        - `"always"`: Vergleichstests bestehen immer.

        Vergleichs-Sampler können Filterung verwenden, aber die Abtastergebnisse werden implementierungsabhängig sein und möglicherweise von den normalen Filterungsregeln abweichen.

    - `label` {{optional_inline}}

      - : Ein String, der ein Label bereitstellt, mit dem das Objekt identifiziert werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

    - `lodMinClamp` {{optional_inline}}
      - : Eine Zahl, die das minimale Detailniveau angibt, das intern beim Abtasten einer Textur verwendet wird. Wenn nicht angegeben, ist der Standardwert für `lodMinClamp` 0.
    - `lodMaxClamp` {{optional_inline}}

      - : Eine Zahl, die das maximale Detailniveau angibt, das intern beim Abtasten einer Textur verwendet wird. Wenn nicht angegeben, ist der Standardwert für `lodMaxClamp` 32.

    - `maxAnisotropy` {{optional_inline}}

      - : Gibt die maximale Anisotropie-Wertbegrenzung an, die vom Sampler verwendet wird. Wenn nicht angegeben, ist der Standardwert für `maxAnisotropy` 1.

        Die meisten Implementierungen unterstützen `maxAnisotropy`-Werte in einem Bereich zwischen 1 und 16, einschließlich. Der verwendete Wert wird auf den maximalen Wert begrenzt, den die zugrunde liegende Plattform unterstützt.

    - `magFilter` {{optional_inline}}

      - : Ein enumerierter Wert, der das Abtastverhalten beschreibt, wenn der Sample-Footprint kleiner oder gleich einem Texel ist. Mögliche Werte sind:

        - `"nearest"`: Gibt den Wert des Texels zurück, der den Texturkoordinaten am nächsten ist.
        - `"linear"`: Wählt zwei Texel in jeder Dimension aus und gibt eine lineare Interpolation zwischen ihren Werten zurück.

        Wenn nicht angegeben, ist der Standardwert für `magFilter` `"nearest"`.

        > [!NOTE]
        > Das `float32-filterable`- [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit `r32float`-, `rg32float`- und `rgba32float`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture)s filterbar sind.

    - `minFilter` {{optional_inline}}
      - : Ein enumerierter Wert, der das Abtastverhalten beschreibt, wenn der Sample-Footprint größer als ein Texel ist. Mögliche und Standardwerte sind die gleichen wie für `magFilter`.
    - `mipmapFilter` {{optional_inline}}
      - : Ein enumerierter Wert, der das Verhalten beim Abtasten zwischen Mipmap-Ebenen beschreibt. Mögliche und Standardwerte sind die gleichen wie für `magFilter`.

### Rückgabewert

Eine [`GPUSampler`](/de/docs/Web/API/GPUSampler)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createSampler()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUSampler`](/de/docs/Web/API/GPUSampler)-Objekt zurückgegeben:

- `lodMinClamp` ist gleich oder größer als 0.
- `lodMaxClamp` ist gleich oder größer als `lodMinClamp`.
- `maxAnisotropy` ist gleich oder größer als 1.
- Wenn `maxAnisotropy` größer als 1 ist, sind `magFilter`, `minFilter` und `mipmapFilter` `"linear"`.

## Beispiele

Der folgende Codeausschnitt erstellt einen `GPUSampler`, der trilineare Filterung durchführt und Texturkoordinaten wiederholt:

```js
// ...

const sampler = device.createSampler({
  addressModeU: "repeat",
  addressModeV: "repeat",
  magFilter: "linear",
  minFilter: "linear",
  mipmapFilter: "linear",
});
```

Die WebGPU-Beispiele [Shadow Mapping sample](https://webgpu.github.io/webgpu-samples/samples/shadowMapping/) verwenden Vergleichs-Sampler, um aus einer Tiefentextur Schatten zu rendern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
