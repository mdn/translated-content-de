---
title: WaveShaperNode
slug: Web/API/WaveShaperNode
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{ APIRef("Web Audio API") }}

Das **`WaveShaperNode`**-Interface repräsentiert einen nichtlinearen Verzerrer.

Es handelt sich um einen [`AudioNode`](/de/docs/Web/API/AudioNode), der eine Kurve verwendet, um dem Signal eine Wave-Shaping-Verzerrung hinzuzufügen. Neben offensichtlichen Verzerrungseffekten wird es oft verwendet, um dem Signal eine warme Note zu verleihen.

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
      <th scope="row">Kanalzahlmodus</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Kanäle</th>
      <td><code>2</code> (nicht verwendet im Standardkanalzählmodus)</td>
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
  - : Ein {{jsxref("Float32Array")}} von Zahlen, die die anzuwendende Verzerrung beschreiben.
- [`WaveShaperNode.oversample`](/de/docs/Web/API/WaveShaperNode/oversample)
  - : Ein enumerierter Wert, der anzeigt, ob Oversampling verwendet werden muss. Oversampling ist eine Technik, bei der mehr Samples (Upsampling) erstellt werden, bevor der Verzerrungseffekt auf das Audiosignal angewendet wird.

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
