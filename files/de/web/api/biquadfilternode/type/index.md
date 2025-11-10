---
title: "BiquadFilterNode: type-Eigenschaft"
short-title: type
slug: Web/API/BiquadFilterNode/type
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{ APIRef("Web Audio API") }}

Die `type`-Eigenschaft des [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)-Interfaces ist ein Zeichenfolgenwert (Enum), der das Filterverfahren definiert, das der Node implementiert.

## Wert

Ein Zeichenfolgenwert (Enum), der einen [BiquadFilterType](https://webaudio.github.io/web-audio-api/#idl-def-BiquadFilterType) darstellt.

## `type`-Werte und deren Bedeutung

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
        Standardmäßiger zweiter Ordnung resonanter Tiefpassfilter mit 12 dB/Oktave Abrollung.
        Frequenzen unterhalb der Grenzfrequenz passieren; Frequenzen darüber werden
        abgeschwächt.
      </td>
      <td>Die Grenzfrequenz.</td>
      <td>
        Gibt an, wie stark die Frequenz um die Grenzfrequenz ausgeprägt ist. Je größer der
        Wert, desto ausgeprägter ist der Peak.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
    <tr>
      <th scope="row"><code>highpass</code></th>
      <td>
        Standardmäßiger zweiter Ordnung resonanter Hochpassfilter mit 12 dB/Oktave Abrollung.
        Frequenzen unterhalb der Grenzfrequenz werden abgeschwächt; Frequenzen darüber
        passieren.
      </td>
      <td>Die Grenzfrequenz.</td>
      <td>
        Gibt an, wie stark die Frequenz um die Grenzfrequenz ausgeprägt ist. Je größer der
        Wert, desto ausgeprägter ist der Peak.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
    <tr>
      <th scope="row"><code>bandpass</code></th>
      <td>
        Standardmäßiger zweiter Ordnung Bandpassfilter. Frequenzen außerhalb des gegebenen
        Frequenzbereichs werden abgeschwächt; die Frequenzen innerhalb passieren.
      </td>
      <td>Das Zentrum des Frequenzbereichs.</td>
      <td>
        Kontrolliert die Breite des Frequenzbands. Je größer der
        <code>Q</code>-Wert, desto größer ist das Frequenzband.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
    <tr>
      <th scope="row"><code>lowshelf</code></th>
      <td>
        Standardmäßiger zweiter Ordnung Tiefenregler. Frequenzen niedriger als die
        Frequenz werden verstärkt oder abgeschwächt; Frequenzen darüber bleiben
        unverändert.
      </td>
      <td>
        Das obere Limit der Frequenzen, die verstärkt oder abgeschwächt werden.
      </td>
      <td><em>Nicht verwendet</em></td>
      <td>
        Die Verstärkung, in dB, die angewendet wird; wenn negativ, wird es eine Abschwächung.
      </td>
    </tr>
    <tr>
      <th scope="row"><code>highshelf</code></th>
      <td>
        Standardmäßiger zweiter Ordnung Höhenregler. Frequenzen höher als die
        Frequenz werden verstärkt oder abgeschwächt; Frequenzen niedriger als diese bleiben
        unverändert.
      </td>
      <td>
        Das untere Limit der Frequenzen, die verstärkt oder abgeschwächt werden.
      </td>
      <td><em>Nicht verwendet</em></td>
      <td>
        Die Verstärkung, in dB, die angewendet wird; wenn negativ, wird es eine Abschwächung.
      </td>
    </tr>
    <tr>
      <th scope="row"><code>peaking</code></th>
      <td>
        Frequenzen innerhalb des Bereichs werden verstärkt oder abgeschwächt; Frequenzen
        außerhalb bleiben unverändert.
      </td>
      <td>
        Die Mitte des Frequenzbereichs, der verstärkt oder abgeschwächt wird.
      </td>
      <td>
        Kontrolliert die Breite des Frequenzbands. Je größer der
        <code>Q</code>-Wert, desto größer ist das Frequenzband.
      </td>
      <td>
        Die Verstärkung, in dB, die angewendet wird; wenn negativ, wird es eine Abschwächung.
      </td>
    </tr>
    <tr>
      <th scope="row"><code>notch</code></th>
      <td>
        Standardmäßiger
        <a href="https://en.wikipedia.org/wiki/Band-stop_filter">Kerb</a>-
        Filter, auch <em>Band-Stop</em> oder
        <em>Band-Rejection</em>-Filter genannt. Es ist das Gegenteil eines Bandpassfilters:
        Frequenzen außerhalb des gegebenen Frequenzbereichs passieren;
        Frequenzen innerhalb werden abgeschwächt.
      </td>
      <td>Das Zentrum des Frequenzbereichs.</td>
      <td>
        Kontrolliert die Breite des Frequenzbands. Je größer der
        <code>Q</code>-Wert, desto größer ist das Frequenzband.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
    <tr>
      <th scope="row"><code>allpass</code></th>
      <td>
        Standardmäßiger zweiter Ordnung
        <a
          href="https://en.wikipedia.org/wiki/All-pass_filter#Digital_Implementation"
          >Allpass</a
        >
        Filter. Er lässt alle Frequenzen durch, ändert jedoch das
        Phasenverhältnis zwischen den verschiedenen Frequenzen.
      </td>
      <td>
        Die Frequenz mit der maximalen
        <a href="https://en.wikipedia.org/wiki/Group_delay_and_phase_delay"
          >Gruppenlaufzeit</a
        >, das heißt, die Frequenz, bei der das Zentrum des Phasenübergangs
        auftritt.
      </td>
      <td>
        Kontrolliert, wie scharf der Übergang bei der mittleren Frequenz ist. Je größer
        dieser Parameter ist, desto schärfer und größer wird der Übergang sein.
      </td>
      <td><em>Nicht verwendet</em></td>
    </tr>
  </tbody>
</table>

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines AudioContext zur Erstellung eines Biquad-Filter-Nodes.
Für vollständigere Anwendungsbeispiele/Informationen schauen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für den relevanten Code).

```js
const audioCtx = new AudioContext();

// Set up the different audio nodes we will use for the app
const analyser = audioCtx.createAnalyser();
const distortion = audioCtx.createWaveShaper();
const gainNode = audioCtx.createGain();
const biquadFilter = audioCtx.createBiquadFilter();
const convolver = audioCtx.createConvolver();

// Connect the nodes together

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
