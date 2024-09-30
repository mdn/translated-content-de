---
title: "BiquadFilterNode: type-Eigenschaft"
short-title: type
slug: Web/API/BiquadFilterNode/type
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{ APIRef("Web Audio API") }}

Die `type`-Eigenschaft der [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)-Schnittstelle ist ein String (enum)-Wert, der angibt, welche Art von Filteralgorithmus der Knoten implementiert.

## Wert

Ein String (enum), der einen [BiquadFilterType](https://webaudio.github.io/web-audio-api/#idl-def-BiquadFilterType) darstellt.

## `type`-Werte und ihre Bedeutung

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row"><code>type</code></th>
      <th scope="col">Beschreibung</th>
      <th scope="col"><code>frequency</code></th>
      <th scope="col"><code>Q</code></th>
      <th scope="col"><code>gain</code></th>
    </tr>
    <tr>
      <th scope="row"><code>lowpass</code></th>
      <td>
        Standard-Resonanz-Tiefpassfilter zweiter Ordnung mit 12dB/Oktave Abfall.
        Frequenzen unterhalb der Grenzfrequenz werden durchgelassen; Frequenzen darüber werden
        abgeschwächt.
      </td>
      <td>Die Grenzfrequenz.</td>
      <td>
        Zeigt an, wie stark die Frequenz um die Grenzfrequenz hervorgehoben wird. Je größer der
        Wert ist, desto größer ist die Hervorhebung.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
    <tr>
      <th scope="row"><code>highpass</code></th>
      <td>
        Standard-Resonanz-Hochpassfilter zweiter Ordnung mit 12dB/Oktave Abfall.
        Frequenzen unterhalb der Grenzfrequenz werden abgeschwächt; Frequenzen darüber werden
        durchgelassen.
      </td>
      <td>Die Grenzfrequenz.</td>
      <td>
        Zeigt an, wie stark die Frequenz um die Grenzfrequenz hervorgehoben wird. Je größer der
        Wert, desto größer die Hervorhebung.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
    <tr>
      <th scope="row"><code>bandpass</code></th>
      <td>
        Standard-Bandpassfilter zweiter Ordnung. Frequenzen außerhalb des gegebenen
        Frequenzbereichs werden abgeschwächt; die Frequenzen innerhalb werden
        durchgelassen.
      </td>
      <td>Der Mittelpunkt des Frequenzbereichs.</td>
      <td>
        Steuert die Breite des Frequenzbands. Je größer der
        <code>Q</code>-Wert, desto größer das Frequenzband.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
    <tr>
      <th scope="row"><code>lowshelf</code></th>
      <td>
        Standard-Tiefenregalfilter zweiter Ordnung. Frequenzen niedriger als die
        Frequenz erhalten einen Boost oder eine Abschwächung; Frequenzen darüber bleiben
        unverändert.
      </td>
      <td>
        Die obere Grenze der Frequenzen, die geboostet oder abgeschwächt werden.
      </td>
      <td><em>Nicht verwendet</em></td>
      <td>
        Der anzuwendende Boost in dB; ist dieser negativ, erfolgt eine Abschwächung.
      </td>
    </tr>
    <tr>
      <th scope="row"><code>highshelf</code></th>
      <td>
        Standard-Höhenregalfilter zweiter Ordnung. Frequenzen höher als die
        Frequenz erhalten einen Boost oder eine Abschwächung; Frequenzen darunter bleiben
        unverändert.
      </td>
      <td>
        Die untere Grenze der Frequenzen, die geboostet oder abgeschwächt werden.
      </td>
      <td><em>Nicht verwendet</em></td>
      <td>
        Der anzuwendende Boost in dB; ist dieser negativ, erfolgt eine Abschwächung.
      </td>
    </tr>
    <tr>
      <th scope="row"><code>peaking</code></th>
      <td>
        Frequenzen innerhalb des Bereichs erhalten einen Boost oder eine Abschwächung; Frequenzen
        außerhalb bleiben unverändert.
      </td>
      <td>
        Die Mitte des Frequenzbereichs, der geboostet oder abgeschwächt wird.
      </td>
      <td>
        Steuert die Breite des Frequenzbands. Je größer der
        <code>Q</code>-Wert, desto größer das Frequenzband.
      </td>
      <td>
        Der anzuwendende Boost in dB; ist dieser negativ, erfolgt eine Abschwächung.
      </td>
    </tr>
    <tr>
      <th scope="row"><code>notch</code></th>
      <td>
        Standard
        <a href="https://en.wikipedia.org/wiki/Band-stop_filter">Kerbfilter</a>,
        auch genannt <em>Bandstopp</em> oder <em>Bandverwerfung</em> Filter. Es ist das Gegenteil eines Bandpassfilters:
        Frequenzen außerhalb des gegebenen Frequenzbereichs werden durchgelassen;
        Frequenzen innerhalb werden abgeschwächt.
      </td>
      <td>Der Mittelpunkt des Frequenzbereichs.</td>
      <td>
        Steuert die Breite des Frequenzbands. Je größer der
        <code>Q</code>-Wert, desto größer das Frequenzband.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
    <tr>
      <th scope="row"><code>allpass</code></th>
      <td>
        Standard-Allpassfilter zweiter Ordnung.
        <a
          href="https://en.wikipedia.org/wiki/All-pass_filter#Digital_Implementation"
          >Allpassfilter</a>.
        Lässt alle Frequenzen durch, verändert aber die
        Phasenbeziehung zwischen den verschiedenen Frequenzen.
      </td>
      <td>
        Die Frequenz mit der maximalen
        <a href="https://en.wikipedia.org/wiki/Group_delay_and_phase_delay"
          >Gruppenlaufzeit</a>,
        das heißt, die Frequenz, bei der das Zentrum des Phasenübergangs
        auftritt.
      </td>
      <td>
        Steuert, wie scharf der Übergang bei der mittleren Frequenz ist. Je größer
        dieser Parameter ist, desto schärfer und größer wird der Übergang sein.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
  </tbody>
</table>

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines `AudioContext`, um einen Biquad-Filterknoten zu erstellen.
Für vollständigere angewandte Beispiele/Informationen sehen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic)-Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

```js
const audioCtx = new AudioContext();

//set up the different audio nodes we will use for the app
const analyser = audioCtx.createAnalyser();
const distortion = audioCtx.createWaveShaper();
const gainNode = audioCtx.createGain();
const biquadFilter = audioCtx.createBiquadFilter();
const convolver = audioCtx.createConvolver();

// connect the nodes together

source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(biquadFilter);
biquadFilter.connect(convolver);
convolver.connect(gainNode);
gainNode.connect(audioCtx.destination);

// Manipulate the Biquad filter

biquadFilter.type = "lowshelf";
biquadFilter.frequency.value = 1000;
biquadFilter.gain.value = 25;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
