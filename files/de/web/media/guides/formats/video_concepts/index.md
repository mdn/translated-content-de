---
title: Digitale Videokonzepte
slug: Web/Media/Guides/Formats/Video_concepts
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

In diesem Artikel erläutern wir wichtige Konzepte, die nützlich sind, um zu verstehen, wie man effektiv mit Video im Web arbeitet.

## Farbencodierung

Die Darstellung der Farben in einem Bild oder Video erfordert mehrere Werte für jedes Pixel. Was diese Werte sind, hängt davon ab, wie Sie die Farbe "aufteilen", wenn Sie sie in numerische Form umwandeln. Es gibt mehrere Farbmodelle, und Videocodecs nutzen eines oder mehrere dieser Modelle, um ihre Pixel während des Codierungsprozesses sowie nach dem Decodieren der Videoframes darzustellen.

### RGB

Die meisten Computergrafik-Modelle verwenden das RGB-Farbsystem, bei dem eine bestimmte Anzahl von Bits für die Darstellung jedes der roten, grünen und blauen Komponenten der Farbe eines einzelnen Pixels verwendet wird. Ein Bild besteht aus einem zweidimensionalen Array dieser Pixel. Es gibt zwei Hauptmethoden, um RGB-Proben darzustellen: die Verwendung von ganzen Komponenten und die Verwendung von Gleitkomma-Komponenten. Bei Verwendung ganzer Komponenten verwendet RGB 8 Bits für jeweils Rot, Grün und Blau sowie möglicherweise 8 Bits für Alpha (die Menge an Transparenz).

### YUV

Im Gegensatz zu RGB basiert das **YUV** (oder **Y'UV**)-Farbcodierungssystem darauf, wie Menschen ein Farbbild wahrnehmen. Dadurch kann Farbdaten mit weniger Gesamtzahl an Bits in einem Videostream dargestellt werden.

Der Name "YUV" wird heute allgemein verwendet, um dieses Farbsystem zu beschreiben, obwohl der Begriff ursprünglich speziell für die analoge Kodierung von Farben verwendet wurde, während **YCbCr** für digitale Farbe verwendet wurde. Heute werden jedoch beide Begriffe für digitale Farbe verwendet. Das Prime-Symbol, `'`, zeigt an, dass Gamma-Kompression verwendet wird.

#### Betrachtung des menschlichen Sehens

Wir können ein Bild auf diese Weise darstellen, weil das menschliche Auge weit mehr Details in Graustufen als in Farbe sieht, dank der Biologie. Das menschliche Auge enthält zwei Arten von [Photorezeptoren](https://en.wikipedia.org/wiki/Photoreceptor_cell) (lichtempfindlichen) Zellen. Die **Stäbchen** sind hochsensible Sensoren für Lichtintensität. Die **Zapfen** sind weniger empfindlich, können jedoch Farben erkennen.

Da das Auge weitaus mehr Stäbchen als Zapfen hat (etwa 120 Millionen Stäbchen gegenüber rund 6 oder 7 Millionen Zapfen), sehen wir Details in Graustufen, wobei die Farbe weit weniger detailliert ist. Im Wesentlichen sind unsere Augen wie eine Kamera mit zwei Bildsensor-Chips: einem für Graustufen und einem für Farbe. Der Graustufen-Sensor hat 120 Megapixel, während der Farbsensor nur etwa 7 Megapixel hat. Diese Sensoren befinden sich physisch auf derselben Fläche, die **[Netzhaut](https://en.wikipedia.org/wiki/Visual_system#Retina)** genannt wird, am hinteren Teil des Auges.

Es gibt drei Arten von Zapfen, von denen jeder auf ein bestimmtes Wellenlängenband des einfallenden Lichts reagiert, aber auch auf die Intensität des Lichts bei dieser Wellenlänge. Jeder Typ von Zapfen erfasst im Wesentlichen die relativen Reaktionsspitzen bei verschiedenen Wellenlängen, und das Gehirn nutzt diese Daten, um die Intensität und den Farbton der Farbe des Lichts zu bestimmen, das an diesem Teil der Netzhaut ankommt.

Wenn unsere Augen eine Szene erfassen, machen sie im Wesentlichen zwei Fotos gleichzeitig: ein detailreiches Graustufenbild und eine etwas verschwommene, niedrigere Auflösungskarte der empfangenen Farben über die Netzhaut zur gleichen Zeit. Das endgültige Farbbild wird vom Gehirn erstellt, das im Wesentlichen die Farben auf die Graustufen-Pixel legt.

#### YUV-Konzepte

YUV funktioniert, indem es einen Farbraum mit drei Komponenten definiert:

- Luma (Y')
  - : Die Helligkeit des Pixels. Ohne die beiden anderen Komponenten ergibt die Luma jedes Pixels im Frame eine Graustufendarstellung des Bildes. In BT.709 (verwendet für HDTV) zum Beispiel ist der Lumawert die gewichtete Summe der gamma-korrigierten roten, grünen und blauen Komponenten des Pixels, unter Verwendung der Formel `Y' = 0.2126R' + 0.7152G' + 0.0722B'`. Diese Gewichtung wird aufgrund des zuvor genannten Verhältnisses der grünen, roten und blauen Zapfen im Auge durchgeführt.
- Blaudifferenz (U oder Cb)
  - : Die Blaudifferenzkomponente des Chroma oder der Farbe des Farbmusters. Dieser Wert wird berechnet, indem die Luma vom gamma-korrigierten Blauwert subtrahiert wird; das heißt, `U = B' - Y'`.
- Rotdifferenz (V oder Cr)
  - : Die Rotdifferenzkomponente des Chroma des Farbmusters. Berechnet, indem die Luma vom gamma-korrigierten Rotwert subtrahiert wird: `V = R' - Y'`.

#### Chroma-Subsampling

**Chroma-Subsampling** ist der Prozess der Umwandlung der Farbpixel in ein Graustufenbild und eine Matrix von U- und V-Werten, die die Farben angeben, die diesen Pixeln zugeordnet werden.

Da die Farbdaten mit einer niedrigeren Auflösung als die Luma kodiert werden, wird beim Decodieren des Videos, um es auf dem Bildschirm darzustellen, die Farbe jedes Pixels berechnet, indem eine geeignete Farbe unter Berücksichtigung der U- und V-Werte für den 4x2-Block von 8 Pixeln berechnet wird, in dem sich das Pixel befindet. Dieser Decodierungsvorgang muss die während der Codierung verwendete Methode widerspiegeln, die durch drei durch Doppelpunkte (":") getrennte Zahlen dargestellt wird.

- Die erste Zahl gibt die Anzahl der Luminanzproben pro Zeile an, die aus dem 4x2-Pixelblock kodiert werden. Dieser Wert ist im Wesentlichen immer 4, was bedeutet "Verwenden Sie alle Luminanzproben."
- Die zweite Zahl gibt an, wie viele Chromaproben zur Darstellung der Farben der Pixel in der ersten Reihe verwendet werden.
- Die dritte Zahl gibt an, wie viele Chromaproben verwendet werden, um die Farben der Pixel in der zweiten Reihe darzustellen.

Die Tabelle unten zeigt Beispiele für drei Chroma-Subsampling-Modelle.

<table class="standard-table" style="max-width: 46em">
  <thead>
    <tr>
      <th scope="col" style="width: 144px"></th>
      <th scope="col" style="width: 144px">4:2:0</th>
      <th scope="col" style="width: 144px">4:2:2</th>
      <th scope="col" style="width: 144px">4:4:4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="col" style="width: 144px">Luminanz</th>
      <td style="width: 144px; text-align: right">
        <img
          alt="Luminanz der Pixel in einem 4:2 (8-Pixel)-Block"
          src="yuv-luma.svg"
        />
      </td>
      <td style="width: 144px; text-align: right">
        <img
          alt="Luminanz der Pixel in einem 4:2 (8-Pixel)-Block"
          src="yuv-luma.svg"
        />
      </td>
      <td style="width: 144px; text-align: right">
        <img
          alt="Luminanz der Pixel in einem 4:2 (8-Pixel)-Block"
          src="yuv-luma.svg"
        />
      </td>
    </tr>
    <tr>
      <th scope="col" style="width: 144px">Chroma (U und V)</th>
      <td style="width: 144px; text-align: right">
        <img alt="Eine Matrix von U- und V-Werten für einen 4:2:0-Decoderbetrieb. Die erste Zeile enthält 2 Chromaproben für U: ein Blau und ein Grün. Die Proben der ersten Zeile werden in der zweiten Zeile für V dupliziert." src="yuv-chroma-420.svg" />
      </td>
      <td style="width: 144px; text-align: right">
        <img alt="Eine Matrix von U- und V-Werten für einen 4:2:2-Decoderbetrieb. Die erste Zeile enthält 2 Chromaproben für U: ein Blau und ein Grün. Die zweite Zeile enthält 2 Chromaproben für V: ein Pink und ein Gelb." src="yuv-chroma-422.svg" />
      </td>
      <td style="width: 144px; text-align: right">
        <img alt="Eine Matrix von U- und V-Werten für einen 4:4:4-Decoderbetrieb. Die erste Zeile enthält 4 Chromaproben für U: ein Hellblau, ein Gelb, ein Grün und ein Dunkelblau. Die zweite Zeile enthält 4 Chromaproben für V: ein Pink, ein Weiß, ein Rot und ein Grau." src="yuv-chroma-444.svg" />
      </td>
    </tr>
    <tr>
      <th scope="col" style="width: 144px">Decodierte Pixel</th>
      <td style="width: 144px; text-align: right">
        <img alt="Ein 4:2-Block von decodierten Pixeln nach einem 4:2:0-Decoderbetrieb, der die zwei Proben der Chroma-Matrix auf jede Zeile im Luminanzdatenblock anwendet. Die Farben der Proben werden dunkler, wenn sie auf Grauschattierungen angewendet werden, schwarz, wenn sie auf solidem Schwarz angewendet werden, und bleiben unverändert, wenn sie auf Weiß angewendet werden." src="yuv-decoded-420.png" />
      </td>
      <td style="width: 144px; text-align: right">
        <img alt="Ein 4:2-Block von decodierten Pixeln nach einem 4:2:2-Decoderbetrieb, der die zwei in jeder Zeile der Chroma-Matrix enthaltenen Proben auf die entsprechenden Zeilen im Luminanzdatenblock anwendet. Die Farben der Proben werden dunkler, wenn sie auf Grauschattierungen angewendet werden, schwarz, wenn sie auf solidem Schwarz angewendet werden, und bleiben unverändert, wenn sie auf Weiß angewendet werden." src="yuv-decoded-422.png" />
      </td>
      <td style="width: 144px; text-align: right">
        <img alt="Ein 4:2-Block von decodierten Pixeln nach einem 4:4:4-Decoderbetrieb, der die vier in jeder Zeile der Chroma-Matrix enthaltenen Proben auf die entsprechenden Zeilen im Luminanzdatenblock anwendet. Die Farben der Proben werden dunkler, wenn sie auf Grauschattierungen angewendet werden, schwarz, wenn sie auf solidem Schwarz angewendet werden, und bleiben unverändert, wenn sie auf Weiß angewendet werden." src="yuv-decoded-444.png" />
      </td>
    </tr>
  </tbody>
</table>

In allen Fällen werden alle vier Pixel jeder Zeile im Block der Luminanzdaten im decodierten Bild verwendet. Bei 4:2:0 Chroma-Subsampling zeigt der Wert 2 in der ersten Spalte an, dass die erste Zeile der Chromadaten zwei Proben enthält; die 0 zeigt an, dass die zweite Zeile keine eigenen Chromaproben hat und die ersten Zeilenproben in die zweite Zeile dupliziert werden sollten. Mit anderen Worten, wir nehmen Farbinformationen aus jeder zweiten Pixelreihe im Quellbild und wenden sie auf das Graustufenbild an, das durch die Luma dargestellt wird.

Die zweite Spalte zeigt 4:2:2 Subsampling. Die obere Reihe von vier Luma-Proben hat zwei Chroma-Proben, die darauf angewendet werden, und die untere Reihe von Luma hat ebenfalls zwei Proben darauf angewendet. Die acht Pixel, die durch diesen Block repräsentiert werden, haben also vier geteilte Chromaproben.

Das letzte Beispiel demonstriert 4:4:4 Subsampling. Es gibt vier Luma-Proben in jeder Zeile und vier Chroma-Proben in jeder Zeile, sodass jedes durch den Block repräsentierte Pixel individuell gefärbt ist.

Was passiert, wenn das Chroma-Subsampling-Modell 4:0:0 ist? Dies besagt, dass alle Luma-Daten verwendet werden, aber dass jeder Zeile 0 Chromaproben zugeordnet sind. Das resultierende Bild besteht dann ausschließlich aus den Luminanzdaten – einem Graustufenbild.

#### Darstellung von YUV-Daten

Da das Bild mit mehr Details in Graustufen als in Farbe dargestellt wird, werden die Werte von Y', U und V normalerweise nicht zusammen gespeichert, ein Sample pro Pixel, wie RGB-Bilder im Speicher gespeichert werden.

- Jedes Video-Frame wird durch eine Matrix von Luma-Werten, Y, dargestellt, wobei die Farbe jedes Pixels mit den Werten in den U- und V-Matrizen berechnet wird. Zum Beispiel speichert ein Datensatz im AV1-Codec die codierte Luma für ein Kachel und ein zweiter Datensatz enthält die Chroma-Daten in Form von U- und V-Werten.
- Im Rundfunkfernsehen stellt das Luma-Signal das primäre Signal dar, während die Chrominanzdaten auf einem Unterträger gesendet werden.
- Die {{Glossary("JPEG", "JPEG")}} Dateityp-Komprimierung funktioniert, indem das Bild zuerst in das Y'UV-Farbsystem konvertiert und anschließend diese Daten komprimiert werden. Jeder von Y', Cb und Cr kann Werte von 0 bis 255 haben.
