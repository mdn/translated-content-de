---
title: OscillatorNode
slug: Web/API/OscillatorNode
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{APIRef("Web Audio API")}}

Die **`OscillatorNode`**-Schnittstelle repräsentiert eine periodische Wellenform, wie beispielsweise eine Sinuswelle. Es handelt sich um ein [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) Audiobearbeitungsmodul, das eine bestimmte Frequenz einer gegebenen Welle erzeugt – im Wesentlichen einen konstanten Ton.

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
      <th scope="row">Kanalanzahlmodus</th>
      <td><code>max</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code> (im Standardzählmodus nicht verwendet)</td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>speakers</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`OscillatorNode()`](/de/docs/Web/API/OscillatorNode/OscillatorNode)
  - : Erstellt eine neue Instanz eines `OscillatorNode`-Objekts, gegebenenfalls mit einem Objekt, das Standardwerte für die [Eigenschaften](#instanz-eigenschaften) des Knotens angibt. Alternativ kann die Fabrikmethode [`BaseAudioContext.createOscillator()`](/de/docs/Web/API/BaseAudioContext/createOscillator) verwendet werden; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)._

- [`OscillatorNode.frequency`](/de/docs/Web/API/OscillatorNode/frequency)
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Oszillationsfrequenz in Hertz darstellt (obwohl das zurückgegebene `AudioParam` schreibgeschützt ist, ist der dargestellte Wert dies nicht). Der Standardwert ist 440 Hz (ein Standardmittel-A-Ton).
- [`OscillatorNode.detune`](/de/docs/Web/API/OscillatorNode/detune)
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Verstimmung der Oszillation in Cents darstellt (obwohl das zurückgegebene `AudioParam` schreibgeschützt ist, ist der dargestellte Wert dies nicht). Der Standardwert ist 0.
- [`OscillatorNode.type`](/de/docs/Web/API/OscillatorNode/type)
  - : Ein String, der die Form der abzuspielenden Wellenform angibt; dies kann einer von mehreren Standardwerten sein oder `custom`, um eine [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) zur Beschreibung einer benutzerdefinierten Wellenform zu verwenden. Unterschiedliche Wellen erzeugen unterschiedliche Töne. Standardwerte sind `"sine"`, `"square"`, `"sawtooth"`, `"triangle"` und `"custom"`. Der Standardwert ist `"sine"`.

## Instanz-Methoden

_Erbt auch Methoden von seinem Elternteil, [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)._

- [`OscillatorNode.setPeriodicWave()`](/de/docs/Web/API/OscillatorNode/setPeriodicWave)
  - : Setzt eine [`PeriodicWave`](/de/docs/Web/API/PeriodicWave), die eine periodische Wellenform beschreibt, die anstelle einer der Standardwellenformen verwendet werden soll; das Aufrufen dieser Methode setzt den `type` auf `custom`.
- [`AudioScheduledSourceNode.start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)
  - : Gibt die genaue Zeit an, zu der der Ton abgespielt werden soll.
- [`AudioScheduledSourceNode.stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop)
  - : Gibt die Zeit an, zu der das Abspielen des Tons beendet werden soll.

## Ereignisse

_Erbt auch Ereignisse von seinem Elternteil, [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)._

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines [`AudioContext`](/de/docs/Web/API/AudioContext), um einen Oszillator-Knoten zu erstellen und darauf einen Ton abzuspielen. Für ein angewandtes Beispiel, schauen Sie sich unser [Violent Theremin Demo](https://mdn.github.io/webaudio-examples/violent-theremin/) an ([siehe app.js](https://github.com/mdn/webaudio-examples/blob/main/violent-theremin/scripts/app.js) für relevanten Code).

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

- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
