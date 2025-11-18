---
title: "GPUDevice: Methode createSampler()"
short-title: createSampler()
slug: Web/API/GPUDevice/createSampler
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createSampler()`**-Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces erzeugt ein [`GPUSampler`](/de/docs/Web/API/GPUSampler), das kontrolliert, wie Shader Textur-Ressourcendaten transformieren und filtern.

## Syntax

```js-nolint
createSampler()
createSampler(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `addressModeU` {{optional_inline}}
      - : Ein enumerierter Wert, der das Verhalten des Samplers angibt, wenn die Breite des Proben-Fußabdrucks über die Breite der Textur hinausgeht. Mögliche Werte sind:
        - `"clamp-to-edge"`: Die Texturkoordinaten werden zwischen 0,0 und 1,0 inklusive begrenzt.
        - `"repeat"`: Die Texturkoordinaten umschließen die andere Seite der Textur.
        - `"mirror-repeat"`: Die Texturkoordinaten umschließen die andere Seite der Textur, aber die Textur wird gespiegelt, wenn der ganzzahlige Teil der Koordinate ungerade ist.

        Wenn weggelassen, ist der Standardwert für `addressModeU` `"clamp-to-edge"`.

    - `addressModeV` {{optional_inline}}
      - : Ein enumerierter Wert, der das Verhalten des Samplers angibt, wenn die Höhe des Proben-Fußabdrucks über die Höhe der Textur hinausgeht. Mögliche und Standardwerte sind die gleichen wie für `addressModeU`.
    - `addressModeW` {{optional_inline}}
      - : Ein enumerierter Wert, der das Verhalten des Samplers angibt, wenn die Tiefe des Proben-Fußabdrucks über die Tiefe der Textur hinausgeht. Mögliche und Standardwerte sind die gleichen wie für `addressModeU`.

    - `compare` {{optional_inline}}
      - : Wenn angegeben, wird der Sampler ein Vergleichssampler des angegebenen Typs. Mögliche (enumerierte) Werte sind:
        - `"never"`: Vergleichstests schlagen nie fehl.
        - `"less"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner als der abgetastete Wert ist.
        - `"equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er gleich dem abgetasteten Wert ist.
        - `"less-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem abgetasteten Wert ist.
        - `"greater"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer als der abgetastete Wert ist.
        - `"not-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er nicht gleich dem abgetasteten Wert ist.
        - `"greater-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer oder gleich dem abgetasteten Wert ist.
        - `"always"`: Vergleichstests bestehen immer.

        Vergleichssampler können Filtern verwenden, aber die Abtastergebnisse sind implementierungsabhängig und können von den normalen Filterregeln abweichen.

    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung bereitstellt, die verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

    - `lodMinClamp` {{optional_inline}}
      - : Eine Zahl, die das minimale Detaillevel angibt, das intern verwendet wird, wenn eine Textur abgetastet wird. Wenn weggelassen, ist der Standardwert für `lodMinClamp` 0.
    - `lodMaxClamp` {{optional_inline}}
      - : Eine Zahl, die das maximale Detaillevel angibt, das intern verwendet wird, wenn eine Textur abgetastet wird. Wenn weggelassen, ist der Standardwert für `lodMaxClamp` 32.

    - `maxAnisotropy` {{optional_inline}}
      - : Gibt den maximalen Anisotropie-Wert an, der durch den Sampler begrenzt wird. Wenn weggelassen, ist der Standardwert für `maxAnisotropy` 1.

        Die meisten Implementierungen unterstützen `maxAnisotropy`-Werte in einem Bereich zwischen 1 und 16 inklusive. Der benutzte Wert wird auf den maximalen Wert begrenzt, den die zugrunde liegende Plattform unterstützt.

    - `magFilter` {{optional_inline}}
      - : Ein enumerierter Wert, der das Abtastverhalten angibt, wenn der Proben-Fußabdruck kleiner oder gleich einem Texel ist. Mögliche Werte sind:
        - `"nearest"`: Gibt den Wert des Texels zurück, der den Texturkoordinaten am nächsten liegt.
        - `"linear"`: Wählt zwei Texels in jeder Dimension und gibt eine lineare Interpolation zwischen deren Werten zurück.

        Wenn weggelassen, ist der Standardwert für `magFilter` `"nearest"`.

        > [!NOTE]
        > Das `float32-filterable` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit `r32float`-, `rg32float`- und `rgba32float`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture)s filterbar sind.

    - `minFilter` {{optional_inline}}
      - : Ein enumerierter Wert, der das Abtastverhalten angibt, wenn der Proben-Fußabdruck größer als ein Texel ist. Mögliche und Standardwerte sind die gleichen wie für `magFilter`.
    - `mipmapFilter` {{optional_inline}}
      - : Ein enumerierter Wert, der das Verhalten beim Abtasten zwischen Mipmap-Ebenen angibt. Mögliche und Standardwerte sind die gleichen wie für `magFilter`.

### Rückgabewert

Eine [`GPUSampler`](/de/docs/Web/API/GPUSampler)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createSampler()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUSampler`](/de/docs/Web/API/GPUSampler)-Objekt zurückgegeben:

- `lodMinClamp` ist gleich oder größer als 0.
- `lodMaxClamp` ist gleich oder größer als `lodMinClamp`.
- `maxAnisotropy` ist gleich oder größer als 1.
- Wenn `maxAnisotropy` größer als 1 ist, sind `magFilter`, `minFilter` und `mipmapFilter` `"linear"`.

## Beispiele

Das folgende Snippet erzeugt ein `GPUSampler`, das trilineares Filtern durchführt und Texturkoordinaten wiederholt:

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
