---
title: "BiquadFilterNode: type-Eigenschaft"
short-title: type
slug: Web/API/BiquadFilterNode/type
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{ APIRef("Web Audio API") }}

Die `type`-Eigenschaft der [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)-Schnittstelle ist ein String (enum)-Wert, der die Art des Filteralgorithmus definiert, den der Knoten implementiert.

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
        Standard-Tiefpassfilter zweiter Ordnung mit 12 dB/Oktave-Abfall.
        Frequenzen unterhalb der Grenzfrequenz passieren; Frequenzen darüber
        werden abgeschwächt.
      </td>
      <td>Die Grenzfrequenz.</td>
      <td>
        Gibt an, wie ausgeprägt die Frequenz um die Grenzfrequenz ist. Je höher
        der Wert, desto größer ist der Peak.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
    <tr>
      <th scope="row"><code>highpass</code></th>
      <td>
        Standard-Hochpassfilter zweiter Ordnung mit 12 dB/Oktave-Abfall.
        Frequenzen unterhalb der Grenzfrequenz werden abgeschwächt;
        Frequenzen darüber passieren.
      </td>
      <td>Die Grenzfrequenz.</td>
      <td>
        Gibt an, wie ausgeprägt die Frequenz um die Grenzfrequenz ist. Je höher
        der Wert, desto größer ist der Peak.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
    <tr>
      <th scope="row"><code>bandpass</code></th>
      <td>
        Standard-Bandpassfilter zweiter Ordnung. Frequenzen außerhalb des
        angegebenen Bereichs werden abgeschwächt; Frequenzen innerhalb
        passieren.
      </td>
      <td>Die Mitte des Frequenzbereichs.</td>
      <td>
        Steuert die Breite des Frequenzbands. Je höher der
        <code>Q</code>-Wert, desto größer das Frequenzband.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
    <tr>
      <th scope="row"><code>lowshelf</code></th>
      <td>
        Standard-Tiefschaltfilter zweiter Ordnung. Frequenzen unterhalb der
        Frequenz werden verstärkt oder abgeschwächt; Frequenzen darüber
        bleiben unverändert.
      </td>
      <td>
        Das obere Limit der verstärkten oder abgeschwächten Frequenzen.
      </td>
      <td><em>Nicht verwendet</em></td>
      <td>
        Die Verstärkung in dB, die angewendet wird; ist sie negativ, erfolgt
        eine Dämpfung.
      </td>
    </tr>
    <tr>
      <th scope="row"><code>highshelf</code></th>
      <td>
        Standard-Hochschaltfilter zweiter Ordnung. Frequenzen über der
        Frequenz werden verstärkt oder abgeschwächt; Frequenzen darunter
        bleiben unverändert.
      </td>
      <td>
        Das untere Limit der verstärkten oder abgeschwächten Frequenzen.
      </td>
      <td><em>Nicht verwendet</em></td>
      <td>
        Die Verstärkung in dB, die angewendet wird; ist sie negativ, erfolgt
        eine Dämpfung.
      </td>
    </tr>
    <tr>
      <th scope="row"><code>peaking</code></th>
      <td>
        Frequenzen innerhalb des Bereichs werden verstärkt oder
        abgeschwächt; Frequenzen außerhalb bleiben unverändert.
      </td>
      <td>
        Die Mitte des Frequenzbereichs, der verstärkt oder abgeschwächt
        wird.
      </td>
      <td>
        Steuert die Breite des Frequenzbands. Je höher der
        <code>Q</code>-Wert, desto größer das Frequenzband.
      </td>
      <td>
        Die Verstärkung in dB, die angewendet wird; ist sie negativ, erfolgt
        eine Dämpfung.
      </td>
    </tr>
    <tr>
      <th scope="row"><code>notch</code></th>
      <td>
        Standard-
        <a href="https://en.wikipedia.org/wiki/Band-stop_filter">Kerbfilter</a>,
        auch als <em>Bandsperre</em> oder <em>Bandunterdrückungsfilter</em>
        bekannt. Es ist das Gegenteil eines Bandpassfilters: Frequenzen
        außerhalb des angegebenen Bereichs passieren; Frequenzen innerhalb
        werden abgeschwächt.
      </td>
      <td>Die Mitte des Frequenzbereichs.</td>
      <td>
        Steuert die Breite des Frequenzbands. Je höher der
        <code>Q</code>-Wert, desto größer das Frequenzband.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
    <tr>
      <th scope="row"><code>allpass</code></th>
      <td>
        Standard-Alle-Pass-Filter zweiter Ordnung.
        Es lässt alle Frequenzen durch, ändert jedoch das
        Phasenverhältnis zwischen den verschiedenen Frequenzen.
      </td>
      <td>
        Die Frequenz mit der maximalen
        <a href="https://en.wikipedia.org/wiki/Group_delay_and_phase_delay">
          Gruppenlaufzeit</a>, d.h. die Frequenz, bei der die Mitte des
        Phasenübergangs auftritt.
      </td>
      <td>
        Steuert, wie scharf der Übergang bei der mittleren Frequenz ist.
        Je größer dieser Parameter ist, desto schärfer und größer wird
        der Übergang sein.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
  </tbody>
</table>

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext, um einen Biquad-Filterknoten zu erstellen. Für umfassendere Beispiele und Informationen sehen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

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
