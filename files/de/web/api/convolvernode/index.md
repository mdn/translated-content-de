---
title: ConvolverNode
slug: Web/API/ConvolverNode
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Web Audio API")}}

Das `ConvolverNode`-Interface ist ein {{domxref("AudioNode")}}, das eine Lineare Faltung auf einen gegebenen {{domxref("AudioBuffer")}} durchführt, oft verwendet, um einen Halleffekt zu erzielen. Ein `ConvolverNode` hat immer genau einen Eingang und einen Ausgang.

> [!NOTE]
> Für weitere Informationen zur Theorie hinter Linearer Faltung, siehe den [Artikel über Faltung auf Wikipedia](https://en.wikipedia.org/wiki/Convolution).

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
      <th scope="row">Kanalanzahl-Modus</th>
      <td><code>"clamped-max"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>1</code>, <code>2</code>, oder <code>4</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- {{domxref("ConvolverNode.ConvolverNode()", "ConvolverNode()")}}
  - : Erstellt eine neue Instanz eines `ConvolverNode`.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("AudioNode")}}_.

- {{domxref("ConvolverNode.buffer")}}
  - : Ein Mono-, Stereo- oder 4-Kanal- _{{domxref("AudioBuffer")}}_, das die (möglicherweise mehrkanalige) Impulsantwort enthält, die vom `ConvolverNode` verwendet wird, um den Halleffekt zu erzeugen.
- {{domxref("ConvolverNode.normalize")}}
  - : Ein Boolean, der steuert, ob die Impulsantwort aus dem Puffer bei der Einstellung des `buffer`-Attributs durch eine Gleichleistungsnormalisierung skaliert wird oder nicht.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, {{domxref("AudioNode")}}_.

## ConvolverNode Beispiel

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext zur Erstellung eines Convolver-Knotens.

> [!NOTE]
> Sie müssen eine Impulsantwort finden, um das nachstehende Beispiel zu vervollständigen. Siehe dieses [Codepen](https://codepen.io/DonKarlssonSan/pen/doVKRE) für ein angewandtes Beispiel.

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
