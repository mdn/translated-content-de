---
title: ConvolverNode
slug: Web/API/ConvolverNode
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("Web Audio API")}}

Das `ConvolverNode`-Interface ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Lineare Faltung auf einem gegebenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) durchführt, häufig verwendet, um einen Hall-Effekt zu erzielen. Ein `ConvolverNode` hat immer genau einen Eingang und einen Ausgang.

> [!NOTE]
> Für weitere Informationen zur Theorie hinter der Linearen Faltung siehe den [Artikel zur Faltung auf Wikipedia](https://en.wikipedia.org/wiki/Convolution).

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahlmodus</th>
      <td><code>"clamped-max"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>1</code>, <code>2</code>, oder <code>4</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalauslegung</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`ConvolverNode()`](/de/docs/Web/API/ConvolverNode/ConvolverNode)
  - : Erstellt eine neue `ConvolverNode`-Objektinstanz.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`ConvolverNode.buffer`](/de/docs/Web/API/ConvolverNode/buffer)
  - : Ein mono, stereo oder 4-Kanal _[`AudioBuffer`](/de/docs/Web/API/AudioBuffer)_, der die (möglicherweise mehrkanalige) Impulsantwort enthält, die vom `ConvolverNode` verwendet wird, um den Hall-Effekt zu erzeugen.
- [`ConvolverNode.normalize`](/de/docs/Web/API/ConvolverNode/normalize)
  - : Ein Boolean, der steuert, ob die Impulsantwort aus dem Buffer durch eine Gleichleistungsnormalisierung skaliert wird, wenn das `buffer`-Attribut gesetzt wird oder nicht.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## ConvolverNode Beispiel

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext, um einen Convolver-Node zu erstellen.

> [!NOTE]
> Sie müssen eine Impulsantwort finden, um das untenstehende Beispiel zu vervollständigen. Siehe diesen [CodePen](https://codepen.io/DonKarlssonSan/pen/doVKRE) für ein angewandtes Beispiel.

```js
let audioCtx = new window.AudioContext();

async function createReverb() {
  let convolver = audioCtx.createConvolver();

  // load impulse response from file
  let response = await fetch("path/to/impulse-response.wav");
  let arraybuffer = await response.arrayBuffer();
  convolver.buffer = await audioCtx.decodeAudioData(arraybuffer);

  return convolver;
}

// …

let reverb = await createReverb();

// someOtherAudioNode -> reverb -> destination
someOtherAudioNode.connect(reverb);
reverb.connect(audioCtx.destination);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
