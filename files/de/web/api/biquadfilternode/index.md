---
title: BiquadFilterNode
slug: Web/API/BiquadFilterNode
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Web Audio API")}}

Die `BiquadFilterNode`-Schnittstelle repräsentiert einen einfachen Filter niedriger Ordnung und wird mittels der Methode [`BaseAudioContext/createBiquadFilter`](/de/docs/Web/API/BaseAudioContext/createBiquadFilter) erstellt. Es handelt sich um einen [`AudioNode`](/de/docs/Web/API/AudioNode), der verschiedene Arten von Filtern, Tonkontrollgeräten und grafischen Equalizern darstellen kann. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.

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
      <th scope="row">Kanalzählmodus</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code> (wird im Standardzählmodus nicht verwendet)</td>
    </tr>
    <tr>
      <th scope="row">Kanainterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`BiquadFilterNode()`](/de/docs/Web/API/BiquadFilterNode/BiquadFilterNode)
  - : Erstellt eine neue Instanz eines `BiquadFilterNode`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

> [!NOTE]
> Obwohl die zurückgegebenen `AudioParam`-Objekte schreibgeschützt sind, sind die Werte, die sie repräsentieren, es nicht.

- [`BiquadFilterNode.frequency`](/de/docs/Web/API/BiquadFilterNode/frequency) {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), ein Doppelwert, der eine Frequenz im aktuellen Filteralgorithmus darstellt, gemessen in Hertz (Hz).
- [`BiquadFilterNode.detune`](/de/docs/Web/API/BiquadFilterNode/detune) {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), der die Verstimmung der Frequenz in [Cents](https://en.wikipedia.org/wiki/Cent_%28music%29) darstellt.
- [`BiquadFilterNode.Q`](/de/docs/Web/API/BiquadFilterNode/Q) {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), ein Doppelwert, der einen [Q-Faktor](https://en.wikipedia.org/wiki/Q_factor) oder _Qualitätsfaktor_ darstellt.
- [`BiquadFilterNode.gain`](/de/docs/Web/API/BiquadFilterNode/gain) {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), ein Doppelwert, der die [Verstärkung](https://en.wikipedia.org/wiki/Gain) im aktuellen Filteralgorithmus darstellt.
- [`BiquadFilterNode.type`](/de/docs/Web/API/BiquadFilterNode/type)

  - : Ein String-Wert, der die Art des Filteralgorithmus definiert, den der Knoten implementiert.

    <table class="standard-table">
      <caption>
        Die Bedeutung der verschiedenen Parameter, abhängig vom Typ des Filters
        (detune hat immer dieselbe Bedeutung und wird daher nicht aufgeführt)
      </caption>
      <thead>
        <tr>
          <th scope="row"><code>type</code></th>
          <th scope="col">Beschreibung</th>
          <th scope="col"><code>frequency</code></th>
          <th scope="col"><code>Q</code></th>
          <th scope="col"><code>gain</code></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><code>lowpass</code></th>
          <td>
            Standardmäßiger Resonanz-Tiefpassfilter zweiter Ordnung mit einem Abfall von 12dB/Oktave.
            Frequenzen unterhalb der Grenzfrequenz passieren; Frequenzen darüber werden
            abgeschwächt.
          </td>
          <td>Die Grenzfrequenz.</td>
          <td>
            Zeigt an, wie stark die Frequenz um die Grenzfrequenz hervorgehoben ist. Je größer der
            Wert, desto stärker die Hervorhebung.
          </td>
          <td><em>Nicht verwendet</em></td>
        </tr>
        <tr>
          <th scope="row"><code>highpass</code></th>
          <td>
            Standardmäßiger Resonanz-Hochpassfilter zweiter Ordnung mit einem Abfall von 12dB/Oktave.
            Frequenzen unterhalb der Grenzfrequenz werden abgeschwächt; Frequenzen darüber passieren.
          </td>
          <td>Die Grenzfrequenz.</td>
          <td>
            Zeigt an, wie stark die Frequenz um die Grenzfrequenz hervorgehoben ist. Je größer der
            Wert, desto stärker die Hervorhebung.
          </td>
          <td><em>Nicht verwendet</em></td>
        </tr>
        <tr>
          <th scope="row"><code>bandpass</code></th>
          <td>
            Standardmäßiger Bandpassfilter zweiter Ordnung. Frequenzen außerhalb des angegebenen
            Frequenzbereichs werden abgeschwächt; die Frequenzen innerhalb passieren.
          </td>
          <td>Das Zentrum des Frequenzbereichs.</td>
          <td>
            Bestimmt die Breite des Frequenzbands. Je größer der
            <code>Q</code>-Wert, desto schmaler das Frequenzband.
          </td>
          <td><em>Nicht verwendet</em></td>
        </tr>
        <tr>
          <th scope="row"><code>lowshelf</code></th>
          <td>
            Standardmäßiger Lowshelf-Filter zweiter Ordnung. Frequenzen unterhalb der
            Frequenz erfahren eine Verstärkung oder Abschwächung; Frequenzen darüber bleiben
            unverändert.
          </td>
          <td>
            Das obere Limit der Frequenzen, die eine Verstärkung oder Abschwächung erfahren.
          </td>
          <td><em>Nicht verwendet</em></td>
          <td>
            Die in dB anzuwendende Verstärkung; bei negativen Werten erfolgt eine Abschwächung.
          </td>
        </tr>
        <tr>
          <th scope="row"><code>highshelf</code></th>
          <td>
            Standardmäßiger Highshelf-Filter zweiter Ordnung. Frequenzen oberhalb der
            Frequenz erfahren eine Verstärkung oder Abschwächung; Frequenzen darunter bleiben
            unverändert.
          </td>
          <td>
            Das untere Limit der Frequenzen, die eine Verstärkung oder Abschwächung erfahren.
          </td>
          <td><em>Nicht verwendet</em></td>
          <td>
            Die in dB anzuwendende Verstärkung; bei negativen Werten erfolgt eine Abschwächung.
          </td>
        </tr>
        <tr>
          <th scope="row"><code>peaking</code></th>
          <td>
            Frequenzen innerhalb des Bereichs erfahren eine Verstärkung oder Abschwächung; Frequenzen
            außerhalb bleiben unverändert.
          </td>
          <td>
            Der Mittelpunkt des Frequenzbereichs, der eine Verstärkung oder Abschwächung erfährt.
          </td>
          <td>
            Bestimmt die Breite des Frequenzbands. Je größer der
            <code>Q</code>-Wert, desto schmaler das Frequenzband.
          </td>
          <td>
            Die in dB anzuwendende Verstärkung; bei negativen Werten erfolgt eine Abschwächung.
          </td>
        </tr>
        <tr>
          <th scope="row"><code>notch</code></th>
          <td>
            Standardmäßiger
            <a href="https://en.wikipedia.org/wiki/Band-stop_filter">Kerbfilter</a>,
            auch als <em>Band-Stop</em> oder <em>Band-Rejection</em> Filter bekannt. Es ist das
            Gegenteil eines Bandpassfilters: Frequenzen außerhalb des gegebenen Bereichs passieren;
            Frequenzen innerhalb werden abgeschwächt.
          </td>
          <td>Das Zentrum des Frequenzbereichs.</td>
          <td>
            Bestimmt die Breite des Frequenzbands. Je größer der
            <code>Q</code>-Wert, desto schmaler das Frequenzband.
          </td>
          <td><em>Nicht verwendet</em></td>
        </tr>
        <tr>
          <th scope="row"><code>allpass</code></th>
          <td>
            Standardmäßiger
            <a href="https://en.wikipedia.org/wiki/All-pass_filter#Digital_Implementation"
              >Allpass</a
            >
            Filter zweiter Ordnung. Er lässt alle Frequenzen durch, ändert jedoch die
            Phasenbeziehung zwischen den verschiedenen Frequenzen.
          </td>
          <td>
            Die Frequenz mit der maximalen
            <a href="https://en.wikipedia.org/wiki/Group_delay_and_phase_delay"
              >Gruppenlaufzeit</a
            >, das heißt, die Frequenz, bei der das Zentrum des Phasenübergangs
            auftritt.
          </td>
          <td>
            Bestimmt, wie scharf der Übergang bei der mittleren Frequenz ist. Je größer
            dieser Parameter, desto schärfer und größer wird der Übergang sein.
          </td>
          <td><em>Nicht verwendet</em></td>
        </tr>
      </tbody>
    </table>

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`BiquadFilterNode.getFrequencyResponse()`](/de/docs/Web/API/BiquadFilterNode/getFrequencyResponse)
  - : Diese Methode berechnet aus den aktuellen Filterparametereinstellungen die Frequenzantwort für Frequenzen, die im bereitgestellten Array von Frequenzen angegeben sind.

## Beispiel

Siehe [`AudioContext.createBiquadFilter`](/de/docs/Web/API/BaseAudioContext/createBiquadFilter#examples) für Beispielcode, der zeigt, wie man einen `AudioContext` verwendet, um einen Biquad-Filterknoten zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
