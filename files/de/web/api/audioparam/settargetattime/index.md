---
title: "AudioParam: Methode setTargetAtTime()"
short-title: setTargetAtTime()
slug: Web/API/AudioParam/setTargetAtTime
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{ APIRef("Web Audio API") }}

Die Methode `setTargetAtTime()` des
[`AudioParam`](/de/docs/Web/API/AudioParam)-Interfaces plant den Beginn einer allmählichen Änderung des `AudioParam`-Werts. Dies ist nützlich für Decay- oder Release-Teile von ADSR-Hüllkurven.

## Syntax

```js-nolint
setTargetAtTime(target, startTime, timeConstant)
```

### Parameter

- `target`
  - : Der Wert, auf den der Parameter zum angegebenen Startzeitpunkt zugehen wird.
- `startTime`
  - : Die Zeit, zu der der exponentielle Übergang beginnt, im selben Zeitkoordinatensystem wie [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime). Wenn es kleiner oder gleich `AudioContext.currentTime` ist, beginnt die Änderung sofort.
- `timeConstant`
  - : Der Zeitkonstantenwert in Sekunden für den exponentiellen Ansatz zum Zielwert. Je größer dieser Wert ist, desto langsamer erfolgt der Übergang.

### Rückgabewert

Ein Verweis auf dieses `AudioParam`-Objekt. Einige ältere Browser-Implementierungen
dieses Interfaces geben {{jsxref('undefined')}} zurück.

## Beschreibung

Die Änderung beginnt zu der in `startTime` angegebenen Zeit und bewegt sich exponentiell in Richtung des Wertes, der durch den `target`-Parameter angegeben ist. Die Abklingrate, wie durch den `timeConstant`-Parameter definiert, ist exponentiell; daher wird der Wert `target` nie vollständig erreichen, aber nach jedem Zeitschritt der Länge `timeConstant` wird sich der Wert `target` um weitere <math><semantics><mrow><mn>1</mn><mo>-</mo><msup><mi>e</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mo>≈</mo><mn>63.2</mn><mtext>%</mtext></mrow><annotation encoding="TeX">1 - e^{-1} \approx 63.2%</annotation></semantics></math> angenähert haben. Für die vollständige Formel (die ein lineares kontinuierliches zeitsinvariantes System erster Ordnung verwendet), lesen Sie die [Web Audio Spezifikation](https://webaudio.github.io/web-audio-api/#dom-audioparam-settargetattime).

Wenn Sie unbedingt einen bestimmten Zielwert zu einem bestimmten Zeitpunkt erreichen müssen, können Sie [`AudioParam.exponentialRampToValueAtTime()`](/de/docs/Web/API/AudioParam/exponentialRampToValueAtTime) verwenden. Aus mathematischen Gründen funktioniert diese Methode jedoch nicht, wenn der aktuelle Wert oder der Zielwert `0` ist.

### Wahl einer guten `timeConstant`

Wie oben erwähnt, ändert sich der Wert exponentiell, wobei jede `timeConstant` Sie um weitere 63,2 % dem Zielwert näher bringt. Sie müssen sich keine Sorgen machen, den Zielwert zu erreichen; sobald Sie nahe genug dran sind, sind weitere Änderungen für das menschliche Gehör nicht mehr wahrnehmbar.

Je nach Anwendungsfall kann es bereits ausreichen, 95 % des Zielwerts zu erreichen; in diesem Fall könnten Sie `timeConstant` auf ein Drittel der gewünschten Dauer setzen.

Für weitere Details sehen Sie die folgende Tabelle an, wie sich der Wert von 0 % auf 100 % ändert, während die Zeit fortschreitet.

| Zeit seit `startTime` | Wert                                                        |
| --------------------- | ----------------------------------------------------------- |
| `0 * timeConstant`    | 0%                                                          |
| `0.5 * timeConstant`  | 39,3%                                                       |
| `1 * timeConstant`    | 63,2%                                                       |
| `2 * timeConstant`    | 86,5%                                                       |
| `3 * timeConstant`    | 95,0%                                                       |
| `4 * timeConstant`    | 98,2%                                                       |
| `5 * timeConstant`    | 99,3%                                                       |
| `n * timeConstant`    | <math><semantics><mrow><mn>1</mn></mrow></semantics></math> |

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mn>1</mn><mo>-</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>n</mi></mrow></msup></mrow><annotation encoding="TeX">1 - e^{-n}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

## Beispiele

In diesem Beispiel haben wir eine Medienquelle mit zwei Steuerknöpfen (sehen Sie den [webaudio-examples Repo](https://github.com/mdn/webaudio-examples/blob/main/audio-param/index.html) für den Quellcode an oder [sehen Sie sich das Beispiel live an](https://mdn.github.io/webaudio-examples/audio-param/).) Wenn diese Knöpfe gedrückt werden, wird `setTargetAtTime()` verwendet, um den Gain-Wert auf 1,0 hoch- und auf 0 runterzufahren, wobei der Effekt nach 1 Sekunde beginnt und die Länge des Effekts durch die Zeitkonstante gesteuert wird.

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

- [Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
