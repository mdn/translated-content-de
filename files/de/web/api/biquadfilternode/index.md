---
title: BiquadFilterNode
slug: Web/API/BiquadFilterNode
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Web Audio API")}}

Die `BiquadFilterNode`-Schnittstelle repräsentiert einen einfachen Filter niedriger Ordnung und wird mit der Methode {{ domxref("BaseAudioContext/createBiquadFilter") }} erstellt. Es handelt sich um einen {{domxref("AudioNode")}}, der verschiedene Arten von Filtern, Klangregelungsgeräten und grafischen Equalizern darstellen kann. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.

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
      <th scope="row">Channel Count Mode</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel Count</th>
      <td><code>2</code> (im Standardzählmodus nicht verwendet)</td>
    </tr>
    <tr>
      <th scope="row">Channel Interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- {{domxref("BiquadFilterNode.BiquadFilterNode", "BiquadFilterNode()")}}
  - : Erstellt eine neue Instanz eines `BiquadFilterNode`-Objekts.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("AudioNode")}}_.

> [!NOTE]
> Obwohl die zurückgegebenen `AudioParam`-Objekte schreibgeschützt sind, sind die von ihnen dargestellten Werte es nicht.

- {{domxref("BiquadFilterNode.frequency")}} {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, ein Double, das eine Frequenz im aktuellen Filteralgorithmus in Hertz (Hz) darstellt.
- {{domxref("BiquadFilterNode.detune")}} {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, das eine Verstimmung der Frequenz in [Cents](https://en.wikipedia.org/wiki/Cent_%28music%29) darstellt.
- {{domxref("BiquadFilterNode.Q")}} {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, ein Double, das einen [Q-Faktor](https://en.wikipedia.org/wiki/Q_factor) oder _Qualitätsfaktor_ darstellt.
- {{domxref("BiquadFilterNode.gain")}} {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, ein Double, das die im aktuellen Filteralgorithmus verwendete [Verstärkung](https://en.wikipedia.org/wiki/Gain) darstellt.
- {{domxref("BiquadFilterNode.type")}}

  - : Ein Zeichenfolgenwert, der die Art des vom Knoten implementierten Filteralgorithmus definiert.

    <table class="standard-table">
      <caption>
        Die Bedeutung der verschiedenen Parameter abhängig vom Filtertyp
        (Detune hat überall die gleiche Bedeutung und wird daher nicht aufgeführt)
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
            Standard-Resonanz-Tiefpassfilter zweiter Ordnung mit 12 dB/Oktave Abroll. Frequenzen unterhalb des Grenzwerts passieren; Frequenzen darüber werden abgeschwächt.
          </td>
          <td>Die Grenzfrequenz.</td>
          <td>
            Gibt an, wie stark die Frequenz um den Grenzwert herum hervortritt. Je größer der Wert ist, desto größer ist die Spitze.
          </td>
          <td><em>Nicht verwendet</em></td>
        </tr>
        <tr>
          <th scope="row"><code>highpass</code></th>
          <td>
            Standard-Resonanz-Hochpassfilter zweiter Ordnung mit 12 dB/Oktave Abroll. Frequenzen unterhalb des Grenzwerts werden abgeschwächt; Frequenzen darüber passieren.
          </td>
          <td>Die Grenzfrequenz.</td>
          <td>
            Gibt an, wie stark die Frequenz um den Grenzwert herum hervortritt. Je größer der Wert, desto größer die Spitze.
          </td>
          <td><em>Nicht verwendet</em></td>
        </tr>
        <tr>
          <th scope="row"><code>bandpass</code></th>
          <td>
            Standard-Bandpassfilter zweiter Ordnung. Frequenzen außerhalb des angegebenen Frequenzbereichs werden abgeschwächt; die Frequenzen innerhalb passieren.
          </td>
          <td>Das Zentrum des Frequenzbereichs.</td>
          <td>
            Kontrolliert die Breite des Frequenzbands. Je größer der
            <code>Q</code>-Wert ist, desto kleiner ist das Frequenzband.
          </td>
          <td><em>Nicht verwendet</em></td>
        </tr>
        <tr>
          <th scope="row"><code>lowshelf</code></th>
          <td>
            Standard-Tiefenreglerfilter zweiter Ordnung. Frequenzen unterhalb dieser Frequenz werden angehoben oder abgeschwächt; Frequenzen darüber bleiben unverändert.
          </td>
          <td>
            Die obere Grenze der Frequenzen, die angehoben oder abgeschwächt werden.
          </td>
          <td><em>Nicht verwendet</em></td>
          <td>
            Die Anhebung in dB, die angewendet wird; ist sie negativ, wird sie abgeschwächt.
          </td>
        </tr>
        <tr>
          <th scope="row"><code>highshelf</code></th>
          <td>
            Standard-Höhenreglerfilter zweiter Ordnung. Frequenzen oberhalb der Frequenz werden angehoben oder abgeschwächt; Frequenzen unterhalb bleiben unverändert.
          </td>
          <td>
            Die untere Grenze der Frequenzen, die angehoben oder abgeschwächt werden.
          </td>
          <td><em>Nicht verwendet</em></td>
          <td>
            Die Anhebung in dB, die angewendet wird; ist sie negativ, wird sie abgeschwächt.
          </td>
        </tr>
        <tr>
          <th scope="row"><code>peaking</code></th>
          <td>
            Frequenzen innerhalb des Bereichs werden angehoben oder abgeschwächt; Frequenzen außerhalb bleiben unverändert.
          </td>
          <td>
            Die Mitte des Frequenzbereichs, der angehoben oder abgeschwächt wird.
          </td>
          <td>
            Kontrolliert die Breite des Frequenzbands. Je größer der
            <code>Q</code>-Wert ist, desto kleiner ist das Frequenzband.
          </td>
          <td>
            Die Anhebung in dB, die angewendet wird; ist sie negativ, wird sie abgeschwächt.
          </td>
        </tr>
        <tr>
          <th scope="row"><code>notch</code></th>
          <td>
            Standard
            <a href="https://en.wikipedia.org/wiki/Band-stop_filter">Notch</a>
            Filter, auch als <em>Band-Stop</em> oder
            <em>Band-Rejection</em> Filter bekannt. Es ist das Gegenteil eines Bandpassfilters: Frequenzen außerhalb des angegebenen Frequenzbereichs passieren; Frequenzen innerhalb werden abgeschwächt.
          </td>
          <td>Das Zentrum des Frequenzbereichs.</td>
          <td>
            Kontrolliert die Breite des Frequenzbands. Je größer der
            <code>Q</code>-Wert ist, desto kleiner ist das Frequenzband.
          </td>
          <td><em>Nicht verwendet</em></td>
        </tr>
        <tr>
          <th scope="row"><code>allpass</code></th>
          <td>
            Standard-Zweites-Ordnung
            <a
              href="https://en.wikipedia.org/wiki/All-pass_filter#Digital_Implementation"
              >Allpass</a
            >
            Filter. Es lässt alle Frequenzen durch, ändert jedoch die
            Phasenbeziehung zwischen den verschiedenen Frequenzen.
          </td>
          <td>
            Die Frequenz mit der maximalen
            <a href="https://en.wikipedia.org/wiki/Group_delay_and_phase_delay"
              >Gruppenlaufzeit</a
            >, das heißt, die Frequenz, bei der das Zentrum der Phasenübergänge
            auftritt.
          </td>
          <td>
            Kontrolliert, wie scharf der Übergang bei der mittleren Frequenz ist. Je größer dieser Parameter ist, desto schärfer und größer wird der Übergang.
          </td>
          <td><em>Nicht verwendet</em></td>
        </tr>
      </tbody>
    </table>

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, {{domxref("AudioNode")}}_.

- {{domxref("BiquadFilterNode.getFrequencyResponse()")}}
  - : Diese Methode berechnet aus den aktuellen Filterparameter-Einstellungen die Frequenzgang für die im angegebenen Frequenzarray angegebenen Frequenzen.

## Beispiel

Siehe [`AudioContext.createBiquadFilter`](/de/docs/Web/API/BaseAudioContext/createBiquadFilter#examples) für Beispielcode, der zeigt, wie ein `AudioContext` verwendet wird, um einen Biquad-Filterknoten zu erstellen.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web-Audio-API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
