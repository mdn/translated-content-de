---
title: ConvolverNode
slug: Web/API/ConvolverNode
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Web Audio API")}}

Die `ConvolverNode`-Schnittstelle ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine lineare Faltung auf einem gegebenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) durchführt, häufig verwendet, um einen Halleffekt zu erzielen. Ein `ConvolverNode` hat immer genau einen Eingang und einen Ausgang.

> [!NOTE]
> Für weitere Informationen zur Theorie hinter der linearen Faltung, siehe den [Artikel zur Faltung auf Wikipedia](https://de.wikipedia.org/wiki/Faltung).

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

- [`ConvolverNode()`](/de/docs/Web/API/ConvolverNode/ConvolverNode)
  - : Erstellt eine neue Instanz eines `ConvolverNode`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`ConvolverNode.buffer`](/de/docs/Web/API/ConvolverNode/buffer)
  - : Ein mono, stereo oder 4-Kanal _[`AudioBuffer`](/de/docs/Web/API/AudioBuffer)_ mit der (möglicherweise mehrkanaligen) Impulsantwort, die vom `ConvolverNode` verwendet wird, um den Halleffekt zu erzeugen.
- [`ConvolverNode.normalize`](/de/docs/Web/API/ConvolverNode/normalize)
  - : Ein boolescher Wert, der steuert, ob die Impulsantwort aus dem Puffer bei Einstellung des `buffer`-Attributs durch eine gleichstarke Normalisierung skaliert wird oder nicht.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## ConvolverNode Beispiel

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext zur Erstellung eines Convolver-Knotens.

> [!NOTE]
> Sie müssen eine Impulsantwort finden, um das folgende Beispiel abzuschließen. Siehe dieses [Codepen](https://codepen.io/DonKarlssonSan/pen/doVKRE) für ein angewandtes Beispiel.

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
