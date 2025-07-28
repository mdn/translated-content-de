---
title: ConvolverNode
slug: Web/API/ConvolverNode
l10n:
  sourceCommit: 90e5b796c5741c209aaa674e9ff86d4d7c8e0427
---

{{APIRef("Web Audio API")}}

Das `ConvolverNode`-Interface ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine lineare Faltung auf einem gegebenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) durchführt und häufig zur Erzielung eines Hall-Effekts verwendet wird. Ein `ConvolverNode` hat immer genau einen Eingang und einen Ausgang.

> [!NOTE]
> Für weitere Informationen zur Theorie hinter der linearen Faltung siehe den [Wikipedia-Artikel zur Faltung](<https://de.wikipedia.org/wiki/Faltung_(Mathematik)>).

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
      <td><code>1</code>, <code>2</code> oder <code>4</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalauslegung</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`ConvolverNode()`](/de/docs/Web/API/ConvolverNode/ConvolverNode)
  - : Erstellt eine neue Instanz eines `ConvolverNode`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften vom Elternteil [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`ConvolverNode.buffer`](/de/docs/Web/API/ConvolverNode/buffer)
  - : Ein mono-, stereo- oder 4-Kanal- _[`AudioBuffer`](/de/docs/Web/API/AudioBuffer)_, das das (möglicherweise mehrkanalige) Impulsantwortsignal enthält, das vom `ConvolverNode` zur Erzeugung des Hall-Effekts verwendet wird.
- [`ConvolverNode.normalize`](/de/docs/Web/API/ConvolverNode/normalize)
  - : Ein boolescher Wert, der steuert, ob die Impulsantwort aus dem Puffer bei der Einstellung des `buffer`-Attributs durch eine gleichwertige Leistungsverstärkung skaliert wird oder nicht.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden vom Elternteil [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext zum Erstellen eines Convolver-Knotens. Sie müssen ein Impulsantwortsignal finden, um das folgende Beispiel zu vervollständigen. Siehe unser Beispiel [HolySpaceCow](https://mdn.github.io/webaudio-examples/holy-space-cow/) für ein vollständiges, angewandtes Beispiel.

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
