---
title: "GPUDevice: createSampler()-Methode"
short-title: createSampler()
slug: Web/API/GPUDevice/createSampler
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`createSampler()`**-Methode der {{domxref("GPUDevice")}}-Schnittstelle erstellt ein {{domxref("GPUSampler")}}, welches steuert, wie Shader Texturressourcendaten transformieren und filtern.

## Syntax

```js-nolint
createSampler()
createSampler(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `addressModeU` {{optional_inline}}

      - : Ein enumerierter Wert, der das Verhalten des Samplers angibt, wenn die Abtastfläche über die Breite der Textur hinausgeht. Mögliche Werte sind:

        - `"clamp-to-edge"`: Die Texturkoordinaten werden zwischen 0,0 und 1,0 geklammert, einschließlich.
        - `"repeat"`: Die Texturkoordinaten werden auf die andere Seite der Textur gewickelt.
        - `"mirror-repeat"`: Die Texturkoordinaten werden auf die andere Seite der Textur gewickelt, aber die Textur wird gespiegelt, wenn der ganzzahlige Teil der Koordinate ungerade ist.

        Wenn nicht angegeben, ist `addressModeU` standardmäßig `"clamp-to-edge"`.

    - `addressModeV` {{optional_inline}}
      - : Ein enumerierter Wert, der das Verhalten des Samplers angibt, wenn die Abtastfläche über die Höhe der Textur hinausgeht. Mögliche und Standardwerte sind die gleichen wie für `addressModeU`.
    - `addressModeW` {{optional_inline}}

      - : Ein enumerierter Wert, der das Verhalten des Samplers angibt, wenn die Abtastfläche über die Tiefe der Textur hinausgeht. Mögliche und Standardwerte sind die gleichen wie für `addressModeU`.

    - `compare` {{optional_inline}}

      - : Wenn angegeben, wird der Sampler ein Vergleichssampler des angegebenen Typs sein. Mögliche (enumerierte) Werte sind:

        - `"never"`: Vergleichstests bestehen nie.
        - `"less"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner ist als der abgetastete Wert.
        - `"equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er gleich dem abgetasteten Wert ist.
        - `"less-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem abgetasteten Wert ist.
        - `"greater"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer ist als der abgetastete Wert.
        - `"not-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er ungleich dem abgetasteten Wert ist.
        - `"greater-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer oder gleich dem abgetasteten Wert ist.
        - `"always"`: Vergleichstests bestehen immer.

        Vergleichssampler können Filterung verwenden, aber die Abtastungsergebnisse sind implementierungsabhängig und können von den normalen Filterregeln abweichen.

    - `label` {{optional_inline}}

      - : Ein String, der ein Etikett bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

    - `lodMinClamp` {{optional_inline}}
      - : Eine Zahl, die das minimale Detailniveau angibt, das intern beim Abtasten einer Textur verwendet wird. Wenn nicht angegeben, ist `lodMinClamp` standardmäßig 0.
    - `lodMaxClamp` {{optional_inline}}

      - : Eine Zahl, die das maximale Detailniveau angibt, das intern beim Abtasten einer Textur verwendet wird. Wenn nicht angegeben, ist `lodMaxClamp` standardmäßig 32.

    - `maxAnisotropy` {{optional_inline}}

      - : Gibt den maximalen Anisotropiewert an, der vom Sampler verwendet wird. Wenn nicht angegeben, ist `maxAnisotropy` standardmäßig 1.

        Die meisten Implementierungen unterstützen `maxAnisotropy`-Werte in einem Bereich zwischen 1 und 16, einschließlich. Der verwendete Wert wird auf den maximalen Wert geklammert, den die zugrunde liegende Plattform unterstützt.

    - `magFilter` {{optional_inline}}

      - : Ein enumerierter Wert, der das Abtastverhalten angibt, wenn die Abtastfläche kleiner als oder gleich einem Texel ist. Mögliche Werte sind:

        - `"nearest"`: Gibt den Wert des dem Texturkoordinaten am nächsten liegenden Texels zurück.
        - `"linear"`: Wählt zwei Texels in jeder Dimension aus und gibt eine lineare Interpolation ihrer Werte zurück.

        Wenn nicht angegeben, ist `magFilter` standardmäßig `"nearest"`.

    - `minFilter` {{optional_inline}}
      - : Ein enumerierter Wert, der das Abtastverhalten angibt, wenn die Abtastfläche größer als ein Texel ist. Mögliche und Standardwerte sind die gleichen wie für `magFilter`.
    - `mipmapFilter` {{optional_inline}}
      - : Ein enumerierter Wert, der das Verhalten beim Abtasten zwischen Mip-Leveln angibt. Mögliche und Standardwerte sind die gleichen wie für `magFilter`.

### Rückgabewert

Eine Instanz eines {{domxref("GPUSampler")}}-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createSampler()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} generiert und ein ungültiges {{domxref("GPUSampler")}}-Objekt zurückgegeben:

- `lodMinClamp` ist gleich oder größer als 0.
- `lodMaxClamp` ist gleich oder größer als `lodMinClamp`.
- `maxAnisotropy` ist gleich oder größer als 1.
- Wenn `maxAnisotropy` größer als 1 ist, sind `magFilter`, `minFilter` und `mipmapFilter` `"linear"`.

## Beispiele

Das folgende Snippet erstellt einen `GPUSampler`, der trilineare Filterung durchführt und Texturkoordinaten wiederholt:

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

Die WebGPU-Beispiele [Shadow Mapping sample](https://webgpu.github.io/webgpu-samples/samples/shadowMapping/) verwenden Vergleichssampler, um aus einer Tiefentextur Schatten zu rendern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
