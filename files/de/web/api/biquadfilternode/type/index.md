---
title: "BiquadFilterNode: Eigenschaft type"
short-title: type
slug: Web/API/BiquadFilterNode/type
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{ APIRef("Web Audio API") }}

Die Eigenschaft `type` des {{ domxref("BiquadFilterNode") }} Interfaces ist ein String (Enum)-Wert, der die Art des Filteralgorithmus definiert, den der Knoten implementiert.

## Wert

Ein String (Enum), der einen [BiquadFilterType](https://webaudio.github.io/web-audio-api/#idl-def-BiquadFilterType) darstellt.

## `type` Werte und deren Bedeutung

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
        Standardmäßig ein resonanzfähiger Tiefpassfilter zweiter Ordnung mit einem Abfall von 12 dB/Oktave.
        Frequenzen unterhalb der Grenzfrequenz werden durchgelassen; Frequenzen darüber
        werden gedämpft.
      </td>
      <td>Die Grenzfrequenz.</td>
      <td>
        Gibt an, wie ausgeprägt die Frequenz um die Grenzfrequenz ist. Je höher der
        Wert, desto größer ist der Peak.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
    <tr>
      <th scope="row"><code>highpass</code></th>
      <td>
        Standardmäßig ein resonanzfähiger Hochpassfilter zweiter Ordnung mit einem Abfall von 12 dB/Oktave.
        Frequenzen unterhalb der Grenzfrequenz werden gedämpft; Frequenzen darüber werden
        durchgelassen.
      </td>
      <td>Die Grenzfrequenz.</td>
      <td>
        Gibt an, wie ausgeprägt die Frequenz um die Grenzfrequenz ist. Je höher der Wert, desto größer der Peak.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
    <tr>
      <th scope="row"><code>bandpass</code></th>
      <td>
        Standardmäßig ein Bandpassfilter zweiter Ordnung. Frequenzen außerhalb des angegebenen
        Frequenzbereichs werden gedämpft; die Frequenzen innerhalb werden
        durchgelassen.
      </td>
      <td>Das Zentrum des Frequenzbereichs.</td>
      <td>
        Bestimmt die Breite des Frequenzbandes. Je höher der
        <code>Q</code>-Wert, desto größer ist das Frequenzband.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
    <tr>
      <th scope="row"><code>lowshelf</code></th>
      <td>
        Standardmäßig ein Low-Shelf-Filter zweiter Ordnung. Frequenzen unterhalb der
        frequenz werden verstärkt oder gedämpft; Frequenzen darüber bleiben
        unverändert.
      </td>
      <td>
        Die obere Grenze der verstärkten oder gedämpften Frequenzen.
      </td>
      <td><em>Nicht verwendet</em></td>
      <td>
        Der anzuwendende Verstärker in dB; wenn negativ, wird es eine Dämpfung sein.
      </td>
    </tr>
    <tr>
      <th scope="row"><code>highshelf</code></th>
      <td>
        Standardmäßig ein High-Shelf-Filter zweiter Ordnung. Frequenzen oberhalb der
        frequenz werden verstärkt oder gedämpft; Frequenzen darunter bleiben
        unverändert.
      </td>
      <td>
        Die untere Grenze der verstärkten oder gedämpften Frequenzen.
      </td>
      <td><em>Nicht verwendet</em></td>
      <td>
        Der anzuwendende Verstärker in dB; wenn negativ, wird es eine Dämpfung sein.
      </td>
    </tr>
    <tr>
      <th scope="row"><code>peaking</code></th>
      <td>
        Frequenzen innerhalb des Bereichs werden verstärkt oder gedämpft; Frequenzen
        außerhalb bleiben unverändert.
      </td>
      <td>
        Die Mitte des Frequenzbereichs, der verstärkt oder gedämpft wird.
      </td>
      <td>
        Bestimmt die Breite des Frequenzbandes. Je höher der
        <code>Q</code>-Wert, desto größer ist das Frequenzband.
      </td>
      <td>
        Der anzuwendende Verstärker in dB; wenn negativ, wird es eine Dämpfung sein.
      </td>
    </tr>
    <tr>
      <th scope="row"><code>notch</code></th>
      <td>
        Standardmäßig ein
        <a href="https://en.wikipedia.org/wiki/Band-stop_filter">Notch</a>-
        Filter, auch bekannt als <em>Bandstop-</em> oder
        <em>Bandrejektionsfilter</em>. Es ist das Gegenteil eines Bandpassfilters:
        Frequenzen außerhalb des angegebenen Frequenzbereichs werden durchgelassen;
        Frequenzen innerhalb werden gedämpft.
      </td>
      <td>Das Zentrum des Frequenzbereichs.</td>
      <td>
        Bestimmt die Breite des Frequenzbandes. Je höher der
        <code>Q</code>-Wert, desto größer ist das Frequenzband.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
    <tr>
      <th scope="row"><code>allpass</code></th>
      <td>
        Standardmäßig ein
        <a
          href="https://en.wikipedia.org/wiki/All-pass_filter#Digital_Implementation"
          >Allpass</a>-
        Filter zweiter Ordnung. Lässt alle Frequenzen durch, ändert jedoch die
        Phasenbeziehung zwischen den verschiedenen Frequenzen.
      </td>
      <td>
        Die Frequenz mit der maximalen
        <a href="https://en.wikipedia.org/wiki/Group_delay_and_phase_delay"
          >Gruppenlaufzeit</a>,
        das heißt, die Frequenz, bei der das Zentrum des Phasenübergangs
        liegt.
      </td>
      <td>
        Bestimmt, wie scharf der Übergang bei der mittleren Frequenz ist. Je größer
        dieser Parameter ist, desto schärfer und größer wird der Übergang sein.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
  </tbody>
</table>

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext zur Erstellung eines Biquad-Filternodes.
Für vollständigere Anwendungsbeispiele/Informationen, sehen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

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
