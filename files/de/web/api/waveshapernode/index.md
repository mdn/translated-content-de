---
title: WaveShaperNode
slug: Web/API/WaveShaperNode
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{ APIRef("Web Audio API") }}

Das **`WaveShaperNode`**-Interface repräsentiert einen nichtlinearen Verzerrer.

Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Kurve verwendet, um eine Waveshaping-Verzerrung auf das Signal anzuwenden. Neben offensichtlichen Verzerrungseffekten wird es häufig verwendet, um dem Signal eine warme Note zu verleihen.

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
      <th scope="row">Kanalanzahlmodus</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code> (nicht im Standardzählmodus verwendet)</td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`WaveShaperNode()`](/de/docs/Web/API/WaveShaperNode/WaveShaperNode)
  - : Erstellt eine neue Instanz eines `WaveShaperNode`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`WaveShaperNode.curve`](/de/docs/Web/API/WaveShaperNode/curve)
  - : Ein {{jsxref("Float32Array")}} von Zahlen, das die anzuwendende Verzerrung beschreibt.
- [`WaveShaperNode.oversample`](/de/docs/Web/API/WaveShaperNode/oversample)
  - : Ein enumerierter Wert, der angibt, ob Oversampling verwendet werden muss. Oversampling ist eine Technik zur Erstellung von mehr Abtastungen (Hochabtastung), bevor der Verzerrungseffekt auf das Audiosignal angewendet wird.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Siehe [`BaseAudioContext.createWaveShaper()`](/de/docs/Web/API/BaseAudioContext/createWaveShaper#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
