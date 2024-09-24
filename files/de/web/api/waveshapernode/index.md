---
title: WaveShaperNode
slug: Web/API/WaveShaperNode
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{ APIRef("Web Audio API") }}

Die **`WaveShaperNode`**-Schnittstelle repräsentiert einen nichtlinearen Verzerrer.

Es handelt sich um einen {{domxref("AudioNode")}}, der eine Kurve verwendet, um eine Waveshaping-Verzerrung auf das Signal anzuwenden. Neben offensichtlichen Verzerrungseffekten wird es häufig verwendet, um dem Signal ein warmes Gefühl hinzuzufügen.

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
      <td><code>2</code> (wird im Standardmodus nicht verwendet)</td>
    </tr>
    <tr>
      <th scope="row">Kanalauslegung</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- {{domxref("WaveShaperNode.WaveShaperNode", "WaveShaperNode()")}}
  - : Erstellt eine neue Instanz eines `WaveShaperNode`-Objekts.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("AudioNode")}}_.

- {{domxref("WaveShaperNode.curve")}}
  - : Ein {{jsxref("Float32Array")}} von Zahlen, die die anzuwendende Verzerrung beschreiben.
- {{domxref("WaveShaperNode.oversample")}}
  - : Ein enumerierter Wert, der angibt, ob Oversampling verwendet werden muss. Oversampling ist eine Technik zur Generierung von mehr Samples (Upsampling), bevor der Verzerrungseffekt auf das Audiosignal angewendet wird.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, {{domxref("AudioNode")}}_.

## Beispiel

Siehe [`BaseAudioContext.createWaveShaper()`](/de/docs/Web/API/BaseAudioContext/createWaveShaper#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
