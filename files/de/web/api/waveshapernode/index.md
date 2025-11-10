---
title: WaveShaperNode
slug: Web/API/WaveShaperNode
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{ APIRef("Web Audio API") }}

Das **`WaveShaperNode`**-Interface repräsentiert einen nichtlinearen Verzerrer.

Es handelt sich um ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Kurve verwendet, um eine Verzerrung des Signals zu erzeugen. Neben offensichtlichen Verzerrungseffekten wird es oft verwendet, um dem Signal ein warmes Gefühl zu verleihen.

Ein `WaveShaperNode` hat immer genau einen Eingang und einen Ausgang.

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
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code> (nicht verwendet im Standardanzahlmodus)</td>
    </tr>
    <tr>
      <th scope="row">Kanal-Interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`WaveShaperNode()`](/de/docs/Web/API/WaveShaperNode/WaveShaperNode)
  - : Erstellt eine neue Instanz eines `WaveShaperNode`-Objekts.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`WaveShaperNode.curve`](/de/docs/Web/API/WaveShaperNode/curve)
  - : Ein {{jsxref("Float32Array")}} von Zahlen, die die anzuwendende Verzerrung beschreiben.
- [`WaveShaperNode.oversample`](/de/docs/Web/API/WaveShaperNode/oversample)
  - : Ein aufgezählter Wert, der angibt, ob Oversampling verwendet werden muss. Beim Oversampling handelt es sich um eine Technik zum Erstellen weiterer Samples (Upsampling), bevor der Verzerrungseffekt auf das Audiosignal angewendet wird.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Siehe [`BaseAudioContext.createWaveShaper()`](/de/docs/Web/API/BaseAudioContext/createWaveShaper#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
