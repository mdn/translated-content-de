---
title: ConvolverNode
slug: Web/API/ConvolverNode
l10n:
  sourceCommit: e0ffae60f27e8842a53936038d4b1ddb290591c0
---

{{APIRef("Web Audio API")}}

Das `ConvolverNode`-Interface ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine lineare Faltung auf einem gegebenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) durchführt, oft um einen Nachhalleffekt zu erzielen. Ein `ConvolverNode` hat immer genau einen Eingang und einen Ausgang.

> [!NOTE]
> Für weitere Informationen zur Theorie hinter der linearen Faltung, siehe den [Artikel über Faltung auf Wikipedia](https://de.wikipedia.org/wiki/Faltung).

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
      <th scope="row">Channel count mode</th>
      <td><code>"clamped-max"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>1</code>, <code>2</code> oder <code>4</code></td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`ConvolverNode()`](/de/docs/Web/API/ConvolverNode/ConvolverNode)
  - : Erstellt eine neue Instanz des `ConvolverNode`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`ConvolverNode.buffer`](/de/docs/Web/API/ConvolverNode/buffer)
  - : Ein mono, stereo oder 4-Kanal _[`AudioBuffer`](/de/docs/Web/API/AudioBuffer)_, der die (möglicherweise mehrkanalige) Impulsantwort enthält, die vom `ConvolverNode` zur Erstellung des Nachhalleffekts verwendet wird.
- [`ConvolverNode.normalize`](/de/docs/Web/API/ConvolverNode/normalize)
  - : Ein boolescher Wert, der steuert, ob die Impulsantwort aus dem Puffer mit einer Gleichstrom-Normalisierung skaliert wird, wenn das `buffer`-Attribut gesetzt ist, oder nicht.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel für ConvolverNode

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext zur Erstellung eines Convolver-Nodes. Sie müssen eine Impulsantwort finden, um das unten stehende Beispiel abzuschließen. Sehen Sie sich unser [HolySpaceCow](https://mdn.github.io/webaudio-examples/holy-space-cow)-Beispiel für ein vollständiges, angewandtes Beispiel an.

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
