---
title: "AudioParam: setTargetAtTime()-Methode"
short-title: setTargetAtTime()
slug: Web/API/AudioParam/setTargetAtTime
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{ APIRef("Web Audio API") }}

Die `setTargetAtTime()`-Methode der {{domxref("AudioParam")}}-Schnittstelle plant den Beginn einer allmählichen Änderung des `AudioParam`-Wertes. Dies ist nützlich für den Decay- oder Release-Abschnitt von ADSR-Hüllkurven.

## Syntax

```js-nolint
setTargetAtTime(target, startTime, timeConstant)
```

### Parameter

- `target`
  - : Der Wert, zu dem der Parameter zum angegebenen Startzeitpunkt zu wechseln beginnt.
- `startTime`
  - : Der Zeitpunkt, an dem der exponentielle Übergang beginnt, im gleichen Zeitkoordinatensystem wie {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}. Ist er kleiner oder gleich `AudioContext.currentTime`, beginnt die Parameteränderung sofort.
- `timeConstant`
  - : Der Zeitkonstantenwert, angegeben in Sekunden, eines exponentiellen Ansatzes zum Zielwert. Je größer dieser Wert ist, desto langsamer erfolgt der Übergang.

### Rückgabewert

Eine Referenz auf dieses `AudioParam`-Objekt. Einige ältere Browser-Implementierungen dieser Schnittstelle geben {{jsxref('undefined')}} zurück.

## Beschreibung

Die Änderung beginnt zum in `startTime` angegebenen Zeitpunkt und bewegt sich exponentiell in Richtung des durch den `target`-Parameter angegebenen Wertes. Die Abklingrate, wie sie durch den `timeConstant`-Parameter definiert ist, ist exponentiell; daher wird der Wert nie vollständig den `target`-Wert erreichen, aber nach jedem Zeitschritt der Länge `timeConstant` hat sich der Wert um weitere <math><semantics><mrow><mn>1</mn><mo>-</mo><msup><mi>e</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mo>≈</mo><mn>63.2</mn><mtext>%</mtext></mrow><annotation encoding="TeX">1 - e^{-1} \approx 63.2%</annotation></semantics></math> dem Zielwert angenähert. Die vollständige Formel (die ein kontinuierliches zeitinvariantes System erster Ordnung verwendet) finden Sie in der [Web Audio-Spezifikation](https://webaudio.github.io/web-audio-api/#dom-audioparam-settargetattime).

Falls Sie den Zielwert zu einem bestimmten Zeitpunkt unbedingt erreichen müssen, können Sie {{domxref("AudioParam.exponentialRampToValueAtTime()")}} verwenden. Aus mathematischen Gründen funktioniert diese Methode jedoch nicht, wenn der aktuelle Wert oder der Zielwert `0` ist.

### Auswahl einer guten `timeConstant`

Wie oben erwähnt, ändern sich die Werte exponentiell, wobei jede `timeConstant` eine weitere Annäherung von 63,2 % zum Zielwert bringt. Sie müssen sich keine Sorgen machen, den Zielwert zu erreichen; sobald Sie nahe genug sind, werden weitere Änderungen für einen menschlichen Hörer nicht mehr wahrnehmbar sein.

Je nach Anwendungsfall kann es bereits ausreichen, 95% des Zielwertes zu erreichen; in diesem Fall könnten Sie die `timeConstant` auf ein Drittel der gewünschten Dauer einstellen.

Für weitere Details beachten Sie die folgende Tabelle, die zeigt, wie sich der Wert von 0 % auf 100 % ändert, während die Zeit fortschreitet.

| Zeit seit `startTime`  | Wert                                                       |
| ---------------------- | ---------------------------------------------------------- |
| `0 * timeConstant`     | 0%                                                          |
| `0.5 * timeConstant`   | 39,3%                                                       |
| `1 * timeConstant`     | 63,2%                                                       |
| `2 * timeConstant`     | 86,5%                                                       |
| `3 * timeConstant`     | 95,0%                                                       |
| `4 * timeConstant`     | 98,2%                                                       |
| `5 * timeConstant`     | 99,3%                                                       |
| `n * timeConstant`     | <math><semantics><mrow><mn>1</mn></mrow></semantics></math> |

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mn>1</mn><mo>-</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>n</mi></mrow></msup></mrow><annotation encoding="TeX">1 - e^{-n}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

## Beispiele

In diesem Beispiel haben wir eine Medienquelle mit zwei Steuerungsknöpfen (siehe das [webaudio-examples repo](https://github.com/mdn/webaudio-examples/blob/main/audio-param/index.html) für den Quellcode oder [sehen Sie sich das Beispiel live an](https://mdn.github.io/webaudio-examples/audio-param/).) Wenn diese Knöpfe gedrückt werden, wird `setTargetAtTime()` verwendet, um den Gain-Wert auf 1,0 anzuheben und auf 0 zu senken, wobei der Effekt nach 1 Sekunde beginnt und die Dauer des Effekts durch die `timeConstant` gesteuert wird.

```js
// create audio context
const audioCtx = new AudioContext();

// set basic variables for example
const myAudio = document.querySelector("audio");

const atTimePlus = document.querySelector(".at-time-plus");
const atTimeMinus = document.querySelector(".at-time-minus");

// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
const source = audioCtx.createMediaElementSource(myAudio);

// Create a gain node and set its gain value to 0.5
const gainNode = audioCtx.createGain();
gainNode.gain.value = 0.5;
let currGain = gainNode.gain.value;

// connect the AudioBufferSourceNode to the gainNode
// and the gainNode to the destination
source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// set buttons to do something onclick
atTimePlus.onclick = () => {
  currGain = 1.0;
  gainNode.gain.setTargetAtTime(1.0, audioCtx.currentTime + 1, 0.5);
};

atTimeMinus.onclick = () => {
  currGain = 0;
  gainNode.gain.setTargetAtTime(0, audioCtx.currentTime + 1, 0.5);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
