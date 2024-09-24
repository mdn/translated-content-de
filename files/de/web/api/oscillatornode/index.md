---
title: OscillatorNode
slug: Web/API/OscillatorNode
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{APIRef("Web Audio API")}}

Die **`OscillatorNode`**-Schnittstelle repräsentiert eine periodische Wellenform, wie z.B. eine Sinuswelle. Es handelt sich um ein {{domxref("AudioScheduledSourceNode")}}-Audiobearbeitungsmodul, das eine angegebene Frequenz einer bestimmten Welle erzeugt – im Effekt ein konstanter Ton.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingänge</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl-Modus</th>
      <td><code>max</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code> (nicht verwendet im Standardzählmodus)</td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>speakers</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- {{domxref("OscillatorNode.OscillatorNode", "OscillatorNode()")}}
  - : Erstellt eine neue Instanz eines `OscillatorNode`-Objekts, optional mit einem Objekt, das Standardwerte für die [Eigenschaften](#instanzeigenschaften) des Knotens angibt. Alternativ kann die {{domxref("BaseAudioContext.createOscillator()")}}-Fabrikmethode verwendet werden; siehe [Erstellung eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, {{domxref("AudioScheduledSourceNode")}}._

- {{domxref("OscillatorNode.frequency")}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}-Objekt, das die Frequenz der Schwingung in Hertz repräsentiert (obwohl das zurückgegebene `AudioParam` schreibgeschützt ist, ist der von ihm repräsentierte Wert es nicht). Der Standardwert ist 440 Hz (ein Standardmittel-A-Ton).
- {{domxref("OscillatorNode.detune")}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}-Objekt, das die Verstimmung der Schwingung in Cent repräsentiert (obwohl das zurückgegebene `AudioParam` schreibgeschützt ist, ist der von ihm repräsentierte Wert es nicht). Der Standardwert ist 0.
- {{domxref("OscillatorNode.type")}}
  - : Ein String, der die Form der abzuspielenden Wellenform angibt; dies kann einer von mehreren Standardwerten sein, oder `custom`, um eine {{domxref("PeriodicWave")}} zu verwenden, um eine benutzerdefinierte Wellenform zu beschreiben. Verschiedene Wellen erzeugen verschiedene Töne. Standardwerte sind `"sine"`, `"square"`, `"sawtooth"`, `"triangle"` und `"custom"`. Der Standardwert ist `"sine"`.

## Instanzmethoden

_Erbt auch Methoden von seinem Elternteil, {{domxref("AudioScheduledSourceNode")}}._

- {{domxref("OscillatorNode.setPeriodicWave()")}}
  - : Setzt eine {{domxref("PeriodicWave")}}, die eine periodische Wellenform beschreibt, die anstelle einer der Standardwellenformen verwendet werden soll; durch Aufrufen dieser Methode wird der `type` auf `custom` gesetzt.
- {{domxref("AudioScheduledSourceNode.start()")}}
  - : Gibt die genaue Zeit an, zu der der Ton abgespielt werden soll.
- {{domxref("AudioScheduledSourceNode.stop()")}}
  - : Gibt die Zeit an, zu der der Ton beendet werden soll.

## Ereignisse

_Erbt auch Ereignisse von seinem Elternteil, {{domxref("AudioScheduledSourceNode")}}._

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines {{domxref("AudioContext")}}, um einen Oszillatorknoten zu erstellen und darauf einen Ton abzuspielen. Für ein angewandtes Beispiel, schauen Sie sich unser [Violent Theremin-Demo](https://mdn.github.io/webaudio-examples/violent-theremin/) an ([siehe app.js](https://github.com/mdn/webaudio-examples/blob/main/violent-theremin/scripts/app.js) für relevanten Code).

```js
// create web audio api context
const audioCtx = new AudioContext();

// create Oscillator node
const oscillator = audioCtx.createOscillator();

oscillator.type = "square";
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
oscillator.connect(audioCtx.destination);
oscillator.start();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
