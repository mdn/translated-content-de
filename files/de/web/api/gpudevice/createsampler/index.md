---
title: "GPUDevice: createSampler()-Methode"
short-title: createSampler()
slug: Web/API/GPUDevice/createSampler
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createSampler()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt einen [`GPUSampler`](/de/docs/Web/API/GPUSampler), der steuert, wie `Shaders` Textur-Ressourcendaten transformieren und filtern.

## Syntax

```js-nolint
createSampler()
createSampler(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `addressModeU` {{optional_inline}}

      - : Ein enumerierter Wert, der das Verhalten des Samplers angibt, wenn die Probenfußabdruckbreite über die Breite der Textur hinausgeht. Mögliche Werte sind:

        - `"clamp-to-edge"`: Die Texturkoordinaten werden auf einen Bereich zwischen 0,0 und 1,0 begrenzt.
        - `"repeat"`: Die Texturkoordinaten wickeln sich zur anderen Seite der Textur.
        - `"mirror-repeat"`: Die Texturkoordinaten wickeln sich zur anderen Seite der Textur, aber die Textur wird gespiegelt, wenn der ganzzahlige Teil der Koordinate ungerade ist.

        Wenn weggelassen, ist der Standardwert von `addressModeU` `"clamp-to-edge"`.

    - `addressModeV` {{optional_inline}}
      - : Ein enumerierter Wert, der das Verhalten des Samplers angibt, wenn die Probenfußabdruckhöhe über die Höhe der Textur hinausgeht. Mögliche und Standardwerte sind die gleichen wie für `addressModeU`.
    - `addressModeW` {{optional_inline}}

      - : Ein enumerierter Wert, der das Verhalten des Samplers angibt, wenn die Probenfußabdrucktiefe über die Tiefe der Textur hinausgeht. Mögliche und Standardwerte sind die gleichen wie für `addressModeU`.

    - `compare` {{optional_inline}}

      - : Wenn angegeben, wird der Sampler ein Vergleichssampler des angegebenen Typs sein. Mögliche (enumerierte) Werte sind:

        - `"never"`: Vergleichstests bestehen niemals.
        - `"less"`: Ein angegebener Wert besteht den Vergleichstest, wenn er kleiner als der abgetastete Wert ist.
        - `"equal"`: Ein angegebener Wert besteht den Vergleichstest, wenn er gleich dem abgetasteten Wert ist.
        - `"less-equal"`: Ein angegebener Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem abgetasteten Wert ist.
        - `"greater"`: Ein angegebener Wert besteht den Vergleichstest, wenn er größer als der abgetastete Wert ist.
        - `"not-equal"`: Ein angegebener Wert besteht den Vergleichstest, wenn er nicht gleich dem abgetasteten Wert ist.
        - `"greater-equal"`: Ein angegebener Wert besteht den Vergleichstest, wenn er größer oder gleich dem abgetasteten Wert ist.
        - `"always"`: Vergleichstests bestehen immer.

        Vergleichssampler können Filterung verwenden, aber die Abtastungsergebnisse sind implementierungsabhängig und können von den normalen Filterregeln abweichen.

    - `label` {{optional_inline}}

      - : Eine Zeichenkette, die ein Etikett bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

    - `lodMinClamp` {{optional_inline}}
      - : Eine Zahl, die das minimale Detailniveau angibt, das intern beim Abtasten einer Textur verwendet wird. Wenn weggelassen, ist der Standardwert von `lodMinClamp` 0.
    - `lodMaxClamp` {{optional_inline}}

      - : Eine Zahl, die das maximale Detailniveau angibt, das intern beim Abtasten einer Textur verwendet wird. Wenn weggelassen, ist der Standardwert von `lodMaxClamp` 32.

    - `maxAnisotropy` {{optional_inline}}

      - : Gibt den maximalen Anisotropiewert an, der vom Sampler verwendet wird. Wenn weggelassen, ist der Standardwert von `maxAnisotropy` 1.

        Die meisten Implementierungen unterstützen `maxAnisotropy`-Werte in einem Bereich zwischen 1 und 16, einschließlich. Der verwendete Wert wird auf den maximalen Wert begrenzt, den die zugrunde liegende Plattform unterstützt.

    - `magFilter` {{optional_inline}}

      - : Ein enumerierter Wert, der das Abtastverhalten angibt, wenn der Probenfußabdruck kleiner oder gleich einem Texel ist. Mögliche Werte sind:

        - `"nearest"`: Gibt den Wert des Texels zurück, der den Texturkoordinaten am nächsten ist.
        - `"linear"`: Wählt zwei Texel in jeder Dimension aus und gibt eine lineare Interpolation zwischen deren Werten zurück.

        Wenn weggelassen, ist der Standardwert von `magFilter` `"nearest"`.

    - `minFilter` {{optional_inline}}
      - : Ein enumerierter Wert, der das Abtastverhalten angibt, wenn der Probenfußabdruck größer als ein Texel ist. Mögliche und Standardwerte sind die gleichen wie für `magFilter`.
    - `mipmapFilter` {{optional_inline}}
      - : Ein enumerierter Wert, der das Verhalten beim Abtasten zwischen Mipmap-Ebenen angibt. Mögliche und Standardwerte sind die gleichen wie für `magFilter`.

### Rückgabewert

Ein [`GPUSampler`](/de/docs/Web/API/GPUSampler)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createSampler()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUSampler`](/de/docs/Web/API/GPUSampler)-Objekt zurückgegeben:

- `lodMinClamp` ist gleich oder größer als 0.
- `lodMaxClamp` ist gleich oder größer als `lodMinClamp`.
- `maxAnisotropy` ist gleich oder größer als 1.
- Wenn `maxAnisotropy` größer als 1 ist, sind `magFilter`, `minFilter` und `mipmapFilter` `"linear"`.

## Beispiele

Der folgende Ausschnitt erstellt einen `GPUSampler`, der trilineare Filterung durchführt und Texturkoordinaten wiederholt:

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

Die WebGPU-Beispiele [Shadow Mapping sample](https://webgpu.github.io/webgpu-samples/samples/shadowMapping/) verwenden Vergleichssampler, um aus einer Tiefentextur abzutasten und Schatten zu rendern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
