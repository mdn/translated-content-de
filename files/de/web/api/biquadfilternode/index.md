---
title: BiquadFilterNode
slug: Web/API/BiquadFilterNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Das `BiquadFilterNode`-Interface repräsentiert einen einfachen Filter niedriger Ordnung und wird mit der Methode [`BaseAudioContext/createBiquadFilter`](/de/docs/Web/API/BaseAudioContext/createBiquadFilter) erstellt. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das verschiedene Arten von Filtern, Tonkontrollgeräten und grafischen Equalizern darstellen kann. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.

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
      <th scope="row">Kanalanzahlmodus</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code> (nicht verwendet im Standardmodus)</td>
    </tr>
    <tr>
      <th scope="row">Kanalauslegung</th>
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
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), ein Double, das eine Frequenz im aktuellen Filteralgorithmus in Hertz (Hz) darstellt.
- [`BiquadFilterNode.detune`](/de/docs/Web/API/BiquadFilterNode/detune) {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Verstimmung der Frequenz in [Cent](https://en.wikipedia.org/wiki/Cent_%28music%29) repräsentiert.
- [`BiquadFilterNode.Q`](/de/docs/Web/API/BiquadFilterNode/Q) {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), ein Double, das einen [Q-Faktor](https://en.wikipedia.org/wiki/Q_factor) oder Qualitätsfaktor darstellt.
- [`BiquadFilterNode.gain`](/de/docs/Web/API/BiquadFilterNode/gain) {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), ein Double, das den [Gain](https://en.wikipedia.org/wiki/Gain) im aktuellen Filteralgorithmus darstellt.
- [`BiquadFilterNode.type`](/de/docs/Web/API/BiquadFilterNode/type)
  - : Ein String-Wert, der die Art des Filteralgorithmus definiert, den der Knoten implementiert.

    <table class="standard-table">
      <caption>
        Die Bedeutung der verschiedenen Parameter, abhängig vom Filtertyp
        (Detune hat unabhängig davon die gleiche Bedeutung, daher wird es unten nicht aufgeführt)
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
            Standardmäßiger zweiter Ordnung resonanter Tiefpassfilter mit 12dB/Oktave Roll-off.
            Frequenzen unterhalb des Grenzfrequenz passieren; Frequenzen darüber
            werden abgeschwächt.
          </td>
          <td>Die Grenzfrequenz.</td>
          <td>
            Gibt an, wie stark die Frequenz um die Grenzfrequenz herum betont ist. Je höher der
            Wert, desto stärker der Peak.
          </td>
          <td><em>Nicht verwendet</em></td>
        </tr>
        <tr>
          <th scope="row"><code>highpass</code></th>
          <td>
            Standardmäßiger zweiter Ordnung resonanter Hochpassfilter mit 12dB/Oktave Roll-off.
            Frequenzen unterhalb der Grenzfrequenz werden abgeschwächt; Frequenzen darüber
            passieren.
          </td>
          <td>Die Grenzfrequenz.</td>
          <td>
            Gibt an, wie stark die Frequenz um die Grenzfrequenz herum betont ist. Je höher der
            Wert, desto stärker der Peak.
          </td>
          <td><em>Nicht verwendet</em></td>
        </tr>
        <tr>
          <th scope="row"><code>bandpass</code></th>
          <td>
            Standardmäßiger zweiter Ordnung Bandpassfilter. Frequenzen außerhalb des gegebenen
            Frequenzbereichs werden abgeschwächt; die Frequenzen innerhalb
            passieren.
          </td>
          <td>Das Zentrum des Frequenzbereichs.</td>
          <td>
            Steuert die Breite des Frequenzbands. Je höher der
            <code>Q</code>-Wert, desto kleiner das Frequenzband.
          </td>
          <td><em>Nicht verwendet</em></td>
        </tr>
        <tr>
          <th scope="row"><code>lowshelf</code></th>
          <td>
            Standardmäßiger zweiter Ordnung Tiefenreglerfilter. Frequenzen unterhalb der
            Frequenz werden verstärkt oder abgeschwächt; Frequenzen darüber bleiben
            unverändert.
          </td>
          <td>
            Das obere Limit der Frequenzen, die verstärkt oder abgeschwächt werden.
          </td>
          <td><em>Nicht verwendet</em></td>
          <td>
            Die Verstärkung in dB, die angewendet wird; wenn negativ, ist es eine Abschwächung.
          </td>
        </tr>
        <tr>
          <th scope="row"><code>highshelf</code></th>
          <td>
            Standardmäßiger zweiter Ordnung Höhenreglerfilter. Frequenzen über der
            Frequenz werden verstärkt oder abgeschwächt; Frequenzen darunter bleiben
            unverändert.
          </td>
          <td>
            Das untere Limit der Frequenzen, die verstärkt oder abgeschwächt werden.
          </td>
          <td><em>Nicht verwendet</em></td>
          <td>
            Die Verstärkung in dB, die angewendet wird; wenn negativ, ist es eine Abschwächung.
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
            Steuert die Breite des Frequenzbands. Je höher der
            <code>Q</code>-Wert, desto kleiner das Frequenzband.
          </td>
          <td>
            Die Verstärkung in dB, die angewendet wird; wenn negativ, ist es eine Abschwächung.
          </td>
        </tr>
        <tr>
          <th scope="row"><code>notch</code></th>
          <td>
            Standardmäßiger
            <a href="https://en.wikipedia.org/wiki/Band-stop_filter">Kerbfilter</a>,
            auch bekannt als <em>Bandstopp</em> oder
            <em>Bandabweisungsfilter</em>. Er ist das Gegenteil eines Bandpassfilters:
            Frequenzen außerhalb des gegebenen Frequenzbereichs passieren;
            Frequenzen innerhalb werden abgeschwächt.
          </td>
          <td>Das Zentrum des Frequenzbereichs.</td>
          <td>
            Steuert die Breite des Frequenzbands. Je höher der
            <code>Q</code>-Wert, desto kleiner das Frequenzband.
          </td>
          <td><em>Nicht verwendet</em></td>
        </tr>
        <tr>
          <th scope="row"><code>allpass</code></th>
          <td>
            Standardmäßiger zweiter Ordnung
            <a
              href="https://en.wikipedia.org/wiki/All-pass_filter#Digital_Implementation"
              >Allpassfilter</a
            >.
            Es lässt alle Frequenzen durch, ändert jedoch die
            Phasenbeziehung zwischen den verschiedenen Frequenzen.
          </td>
          <td>
            Die Frequenz mit maximalem
            <a href="https://en.wikipedia.org/wiki/Group_delay_and_phase_delay"
              >Gruppenverzögerung</a
            >, das ist, die Frequenz, bei der das Zentrum der Phasenübergang
            erfolgt.
          </td>
          <td>
            Steuert, wie scharf der Übergang bei der mittleren Frequenz ist. Je größer
            dieser Parameter ist, desto schärfer und größer ist der Übergang.
          </td>
          <td><em>Nicht verwendet</em></td>
        </tr>
      </tbody>
    </table>

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`BiquadFilterNode.getFrequencyResponse()`](/de/docs/Web/API/BiquadFilterNode/getFrequencyResponse)
  - : Diese Methode berechnet die Frequenzantwort auf Basis der aktuellen Filterparametereinstellungen für die in dem bereitgestellten Frequenzarray angegebenen Frequenzen.

## Beispiel

Sehen Sie [`AudioContext.createBiquadFilter`](/de/docs/Web/API/BaseAudioContext/createBiquadFilter#examples) für Beispielcode, der zeigt, wie ein `AudioContext` verwendet wird, um einen Biquad-Filterknoten zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
