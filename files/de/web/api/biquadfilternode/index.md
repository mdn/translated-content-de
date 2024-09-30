---
title: BiquadFilterNode
slug: Web/API/BiquadFilterNode
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Web Audio API")}}

Das `BiquadFilterNode`-Interface stellt einen einfachen Filter niedriger Ordnung dar und wird mit der Methode [`BaseAudioContext/createBiquadFilter`](/de/docs/Web/API/BaseAudioContext/createBiquadFilter) erstellt. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das verschiedene Arten von Filtern, Klangregelgeräten und grafischen Equalizern darstellen kann. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.

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
      <th scope="row">Kanalanzahl-Modus</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code> (nicht im Standardanzahl-Modus verwendet)</td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`BiquadFilterNode()`](/de/docs/Web/API/BiquadFilterNode/BiquadFilterNode)
  - : Erstellt eine neue Instanz eines `BiquadFilterNode`-Objekts.

## Instanz-Eigenschaften

_Übernimmt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

> [!NOTE]
> Obwohl die zurückgegebenen `AudioParam`-Objekte schreibgeschützt sind, sind die Werte, die sie repräsentieren, nicht.

- [`BiquadFilterNode.frequency`](/de/docs/Web/API/BiquadFilterNode/frequency) {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), ein Doppelwert, der eine Frequenz im aktuellen Filteralgorithmus in Hertz (Hz) darstellt.
- [`BiquadFilterNode.detune`](/de/docs/Web/API/BiquadFilterNode/detune) {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Verstimmung der Frequenz in [Cent](https://en.wikipedia.org/wiki/Cent_%28music%29) darstellt.
- [`BiquadFilterNode.Q`](/de/docs/Web/API/BiquadFilterNode/Q) {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), ein Doppelwert, der einen [Q-Faktor](https://en.wikipedia.org/wiki/Q_factor), oder Qualitätsfaktor, darstellt.
- [`BiquadFilterNode.gain`](/de/docs/Web/API/BiquadFilterNode/gain) {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), ein Doppelwert, der die im aktuellen Filteralgorithmus verwendete [Verstärkung](https://en.wikipedia.org/wiki/Gain) darstellt.
- [`BiquadFilterNode.type`](/de/docs/Web/API/BiquadFilterNode/type)

  - : Ein Zeichenfolgenwert, der die Art des vom Knoten implementierten Filteralgorithmus definiert.

    <table class="standard-table">
      <caption>
        Die Bedeutung der verschiedenen Parameter je nach Art des Filters
        (Detune hat unabhängig davon, die gleiche Bedeutung, daher unten nicht aufgeführt)
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
            Standardmäßiger Resonanz-Tiefpassfilter zweiter Ordnung mit 12dB/Oktave Abfall.
            Frequenzen unterhalb der Grenzfrequenz passieren; Frequenzen darüber werden
            abgeschwächt.
          </td>
          <td>Die Grenzfrequenz.</td>
          <td>
            Gibt an, wie stark die Frequenz um die Grenzfrequenz ausgeprägt ist. Je größer der
            Wert, desto größer ist der Spitzenwert.
          </td>
          <td><em>Nicht verwendet</em></td>
        </tr>
        <tr>
          <th scope="row"><code>highpass</code></th>
          <td>
            Standardmäßiger Resonanz-Hochpassfilter zweiter Ordnung mit 12dB/Oktave Abfall.
            Frequenzen unterhalb der Grenzfrequenz werden abgeschwächt; Frequenzen darüber passieren.
          </td>
          <td>Die Grenzfrequenz.</td>
          <td>
            Gibt an, wie stark die Frequenz um die Grenzfrequenz ausgeprägt ist. Je größer der
            Wert, desto größer ist der Spitzenwert.
          </td>
          <td><em>Nicht verwendet</em></td>
        </tr>
        <tr>
          <th scope="row"><code>bandpass</code></th>
          <td>
            Standardmäßiger Bandpassfilter zweiter Ordnung. Frequenzen außerhalb des angegebenen
            Bereichs werden abgeschwächt; die Frequenzen innerhalb davon passieren.
          </td>
          <td>Die Mitte des Frequenzbereichs.</td>
          <td>
            Steuert die Breite des Frequenzbandes. Je größer der
            <code>Q</code>-Wert, desto kleiner das Frequenzband.
          </td>
          <td><em>Nicht verwendet</em></td>
        </tr>
        <tr>
          <th scope="row"><code>lowshelf</code></th>
          <td>
            Standardmäßiger Lowshelf-Filter zweiter Ordnung. Frequenzen unterhalb der
            Frequenz erhalten eine Verstärkung oder eine Abschwächung; Frequenzen darüber
            bleiben unverändert.
          </td>
          <td>
            Die obere Grenze der Frequenzen, die eine Verstärkung oder Abschwächung erhalten.
          </td>
          <td><em>Nicht verwendet</em></td>
          <td>
            Die Verstärkung in dB, die angewendet werden soll; wenn negativ, wird es eine Abschwächung sein.
          </td>
        </tr>
        <tr>
          <th scope="row"><code>highshelf</code></th>
          <td>
            Standardmäßiger Highshelf-Filter zweiter Ordnung. Frequenzen oberhalb der
            Frequenz erhalten eine Verstärkung oder Abschwächung; Frequenzen darunter
            bleiben unverändert.
          </td>
          <td>
            Die untere Grenze der Frequenzen, die eine Verstärkung oder Abschwächung erhalten.
          </td>
          <td><em>Nicht verwendet</em></td>
          <td>
            Die Verstärkung in dB, die angewendet werden soll; wenn negativ, wird es eine Abschwächung sein.
          </td>
        </tr>
        <tr>
          <th scope="row"><code>peaking</code></th>
          <td>
            Frequenzen innerhalb des Bereichs erhalten eine Verstärkung oder Abschwächung; Frequenzen
            außerhalb davon bleiben unverändert.
          </td>
          <td>
            Die Mitte des Frequenzbereichs, der eine Verstärkung oder Abschwächung erhält.
          </td>
          <td>
            Steuert die Breite des Frequenzbandes. Je größer der
            <code>Q</code>-Wert, desto kleiner das Frequenzband.
          </td>
          <td>
            Die Verstärkung in dB, die angewendet werden soll; wenn negativ, wird es eine Abschwächung sein.
          </td>
        </tr>
        <tr>
          <th scope="row"><code>notch</code></th>
          <td>
            Standardmäßiger
            <a href="https://en.wikipedia.org/wiki/Band-stop_filter">Notch</a>-
            Filter, auch als <em>Band-Stop</em>- oder
            <em>Band-Rejection</em>-Filter bezeichnet. Es ist das Gegenteil eines Bandpass-Filters:
            Frequenzen außerhalb des angegebenen Frequenzbereichs passieren;
            Frequenzen innerhalb davon werden abgeschwächt.
          </td>
          <td>Die Mitte des Frequenzbereichs.</td>
          <td>
            Steuert die Breite des Frequenzbandes. Je größer der
            <code>Q</code>-Wert, desto kleiner das Frequenzband.
          </td>
          <td><em>Nicht verwendet</em></td>
        </tr>
        <tr>
          <th scope="row"><code>allpass</code></th>
          <td>
            Standardmäßiger
            <a
              href="https://en.wikipedia.org/wiki/All-pass_filter#Digital_Implementation"
              >Allpass</a>-
            Filter zweiter Ordnung. Er lässt alle Frequenzen durch, verändert jedoch
            die Phasenbeziehung zwischen den verschiedenen Frequenzen.
          </td>
          <td>
            Die Frequenz mit der maximalen
            <a href="https://en.wikipedia.org/wiki/Group_delay_and_phase_delay"
              >Gruppenlaufzeit</a
            >, das heißt die Frequenz, bei der das Zentrum der Phasenverschiebung
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

## Instanz-Methoden

_Übernimmt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`BiquadFilterNode.getFrequencyResponse()`](/de/docs/Web/API/BiquadFilterNode/getFrequencyResponse)
  - : Diese Methode berechnet aus den aktuellen Filterparameter-Einstellungen die Frequenzantwort für die in dem bereitgestellten Frequenzarray angegebenen Frequenzen.

## Beispiel

Sehen Sie sich [`AudioContext.createBiquadFilter`](/de/docs/Web/API/BaseAudioContext/createBiquadFilter#examples) für Beispielcode an, der zeigt, wie man einen `AudioContext` verwendet, um einen Biquad-Filterknoten zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
