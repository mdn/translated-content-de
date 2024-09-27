---
title: Digitale Videokonzepte
slug: Web/Media/Formats/Video_concepts
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

In diesem Artikel erkunden wir wichtige Konzepte, die nützlich sind, um vollständig zu verstehen, wie man mit Videos im Web arbeitet.

## Farbencoding

Um die Farben in einem Bild oder Video darzustellen, sind mehrere Werte für jedes Pixel erforderlich. Welche Werte dies sind, hängt davon ab, wie Sie die Farbe "aufteilen", wenn Sie sie in numerische Form konvertieren. Es gibt mehrere Farbmodelle, und Videocodecs nutzen eines oder mehrere dieser Modelle, um ihre Pixel während des Codierungsprozesses sowie nach der Dekodierung der Videoframes darzustellen.

### RGB

Die meisten Computergrafikmodelle verwenden das RGB-Farbsystem, bei dem eine bestimmte Anzahl von Datenbits verwendet wird, um die roten, grünen und blauen Komponenten der Farbe eines einzelnen Pixels darzustellen, und ein Bild besteht aus einem zweidimensionalen Array dieser Pixel. Es gibt zwei Hauptmethoden zur Darstellung von RGB-Proben: Verwendung von Ganzzahl-Komponenten und Verwendung von Gleitkomma-Komponenten. Bei der Verwendung von Ganzzahl-Komponenten verwendet RGB-Farbe 8 Bits jeweils für Rot, Grün und Blau sowie möglicherweise 8 Bits für Alpha (die Menge an Transparenz).

### YUV

Im Gegensatz zu RGB basiert das **YUV**- (oder **Y'UV**) Farbcodierungssystem darauf, wie Menschen ein Farbbild wahrnehmen. Dadurch kann Farbdaten mit weniger Gesamtbits in einem Videostream dargestellt werden.

Der Name "YUV" wird heutzutage allgemein verwendet, um dieses Farbsystem zu beschreiben, obwohl der Begriff ursprünglich speziell für die analoge Kodierung von Farbe verwendet wurde, während **YCbCr** für digitale Farbe genutzt wurde. Heutzutage werden jedoch beide Begriffe für digitale Farbe verwendet. Das Strichzeichen `'` zeigt an, dass eine Gammakomprimierung verwendet wird.

#### Betrachtung des menschlichen Sehens

Wir können ein Bild auf diese Weise darstellen, weil das menschliche Auge in Graustufen viel mehr Details sieht als in Farbe, dank der Biologie. Das menschliche Auge enthält zwei Arten von [Photorezeptor](https://en.wikipedia.org/wiki/Photoreceptor_cell)- (lichtempfindliche) Zellen. Die **Stäbchen** sind hochsensible Lichtintensitäts-Sensoren. Die **Zapfen** sind weniger sensibel, können aber Farbe erkennen.

Da das Auge viel mehr Stäbchen als Zapfen hat (etwa 120 Millionen Stäbchen im Vergleich zu etwa 6 oder 7 Millionen Zapfen), sehen wir Details in Graustufen, während Farbe weitaus weniger detailliert ist. Im Wesentlichen sind unsere Augen wie eine Kamera mit zwei Bildsensor-Chips: einem Graustufensensor und einem Farbsensor. Der Graustufensensor hat 120 Megapixel, während der Farbsensor nur etwa 7 Megapixel hat. Diese Sensoren befinden sich physisch auf derselben Oberfläche, der **[Netzhaut](https://en.wikipedia.org/wiki/Visual_system#Retina)**, am hinteren Teil des Auges.

Es gibt drei Arten von Zapfen, von denen jeder auf ein bestimmtes Wellenlängenband des einfallenden Lichts reagiert, aber auch auf die Intensität des Lichts bei dieser Wellenlänge. Jede Art von Zapfen erfasst dann die relativen Antwortspitzen bei verschiedenen Wellenlängen, und das Gehirn verwendet diese Daten, um die Intensität und den Farbton der Farbe des Lichts zu bestimmen, das an diesem Teil der Netzhaut ankommt.

Während unsere Augen eine Szene einfangen, nehmen sie im Wesentlichen zwei Fotos gleichzeitig auf: ein fein detailliertes Graustufenbild und eine etwas verschwommene, niedrig aufgelöste Karte der Farben des Lichts, das gleichzeitig über die Netzhaut empfangen wird. Das endgültige Farbbild wird vom Gehirn erstellt, das im Wesentlichen die Farben auf die Graustufenpixel legt.

#### YUV-Konzepte

YUV funktioniert, indem ein Farbraum mit drei Komponenten definiert wird:

- Luma (Y')
  - : Die Helligkeit des Pixels. Ohne die beiden anderen Komponenten ergibt die Luma jedes Pixels im Frame eine Graustufendarstellung des Bildes. In BT.709 (verwendet für HDTV) ist zum Beispiel der Luma-Wert die gewichtete Summe der gamma-korrigierten roten, grünen und blauen Komponenten des Pixels, mit der Formel `Y' = 0.2126R' + 0.7152G' + 0.0722B'`. Diese Gewichtung wird aufgrund des zuvor erwähnten Verhältnisses der grünen, roten und blauen Zapfen im Auge durchgeführt.
- Blau-Differenz (U oder Cb)
  - : Die Blau-Differenz-Komponente der Chroma, oder Farbe, der Farbprobe. Dieser Wert wird berechnet, indem die Luma vom gamma-korrigierten Blauwert subtrahiert wird; das heißt, `U = B' - Y'`.
- Rot-Differenz (V oder Cr)
  - : Die Rot-Differenz-Komponente der Chroma der Farbprobe. Berechnet durch Subtrahieren der Luma vom gamma-korrigierten Rotwert: `V = R' - Y'`.

#### Chroma Subsampling

**Chroma Subsampling** ist der Prozess, bei dem die Farb-Pixel in ein Graustufenbild und eine Matrix von U- und V-Werten konvertiert werden, die die Farben angeben, die diesen Pixeln zugeordnet werden sollen.

Da die Farbdaten mit einer niedrigeren Auflösung als die Luma codiert werden, wird beim Dekodieren des Videos zum Zeichnen auf den Bildschirm die Farbe jedes Pixels berechnet, indem eine geeignete Farbe anhand der U- und V-Werte für den 4x2-Block von 8 Pixeln, in dem sich das Pixel befindet, berechnet wird. Dieser Dekodierungsvorgang muss die während der Codierung verwendete Methode spiegeln, die durch drei durch Doppelpunkte (":") getrennte Zahlen dargestellt wird.

- Die erste Zahl gibt die Anzahl der Luma-Proben pro Zeile an, die aus dem 4x2-Pixelblock codiert werden. Dieser Wert ist im Wesentlichen immer 4, was bedeutet "Verwenden Sie alle Luma-Proben".
- Die zweite Zahl gibt an, wie viele Chroma-Proben verwendet werden, um die Farben der Pixel in der ersten Zeile darzustellen.
- Die dritte Zahl gibt an, wie viele Chroma-Proben verwendet werden, um die Farben der Pixel in der zweiten Zeile darzustellen.

Die folgende Tabelle zeigt Beispiele für drei Chroma-Subsampling-Modelle.

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
          alt="Luminanz der Pixel in einem 4:2 (8-Pixel) Block"
          src="yuv-luma.svg"
        />
      </td>
      <td style="width: 144px; text-align: right">
        <img
          alt="Luminanz der Pixel in einem 4:2 (8-Pixel) Block"
          src="yuv-luma.svg"
        />
      </td>
      <td style="width: 144px; text-align: right">
        <img
          alt="Luminanz der Pixel in einem 4:2 (8-Pixel) Block"
          src="yuv-luma.svg"
        />
      </td>
    </tr>
    <tr>
      <th scope="col" style="width: 144px">Chroma (U und V)</th>
      <td style="width: 144px; text-align: right">
        <img alt="Eine Matrix von U- und V-Werten für eine 4:2:0 Dekodieroperation. Die erste Reihe enthält 2 Chromaproben für U: ein Blau und ein Grün. Die Proben der ersten Reihe werden in der zweiten Reihe für V dupliziert." src="yuv-chroma-420.svg" />
      </td>
      <td style="width: 144px; text-align: right">
        <img alt="Eine Matrix von U- und V-Werten für eine 4:2:2 Dekodieroperation. Die erste Reihe enthält 2 Chromaproben für U: ein Blau und ein Grün. Die zweite Reihe enthält 2 Chromaproben für V: ein Pink und ein Gelb." src="yuv-chroma-422.svg" />
      </td>
      <td style="width: 144px; text-align: right">
        <img alt="Eine Matrix von U- und V-Werten für eine 4:4:4 Dekodieroperation. Die erste Reihe enthält 4 Chromaproben für U: ein hellblau, ein Gelb, ein Grün und ein tief blau. Die zweite Reihe enthält 4 Chromaproben für V: ein Pink, ein Weiß, ein Rot und ein Grau." src="yuv-chroma-444.svg" />
      </td>
    </tr>
    <tr>
      <th scope="col" style="width: 144px">Dekodierte Pixel</th>
      <td style="width: 144px; text-align: right">
        <img alt="Ein 4:2 Block dekodierter Pixel nach einer 4:2:0 Dekodieroperation, die die 2 Proben der Chromamatrix auf jede Zeile im Block der Luminanzdaten anwendet. Die Farben der Proben werden dunkler, wenn sie auf Grauschattierungen, schwarz bei festem Schwarz und unverändert auf Weiß angewendet werden." src="yuv-decoded-420.png" />
      </td>
      <td style="width: 144px; text-align: right">
        <img alt="Ein 4:2 Block dekodierter Pixel nach einer 4:2:2 Dekodieroperation, die die 2 Proben in jeder Zeile der Chromamatrix auf die entsprechenden Zeilen im Block der Luminanzdaten anwendet. Die Farben der Proben werden dunkler, wenn sie auf Grauschattierungen, schwarz bei festem Schwarz und unverändert auf Weiß angewendet werden." src="yuv-decoded-422.png" />
      </td>
      <td style="width: 144px; text-align: right">
        <img alt="Ein 4:2 Block dekodierter Pixel nach einer 4:4:4 Dekodieroperation, die die 4 Proben in jeder Zeile der Chromamatrix auf die entsprechenden Zeilen im Block der Luminanzdaten anwendet. Die Farben der Proben werden dunkler, wenn sie auf Grauschattierungen, schwarz bei festem Schwarz und unverändert auf Weiß angewendet werden." src="yuv-decoded-444.png" />
      </td>
    </tr>
  </tbody>
</table>

In all diesen Fällen werden alle vier Pixel jeder Zeile im Block der Luminanzdaten im dekodierten Bild verwendet. Beim 4:2:0 Chroma Subsampling zeigt die erste Spalte, dass der Wert 2 angibt, dass die erste Reihe der Chromadaten zwei Proben enthält; die 0 gibt an, dass die zweite Reihe keine eigenen Chromaproben hat und dass die Proben der ersten Reihe in die zweite Reihe dupliziert werden sollten. Anders ausgedrückt, wir nehmen Farbinformationen aus jeder zweiten Zeile von Pixeln des Quellbildes und wenden sie auf das durch die Luma dargestellte Graustufenbild an.

Die zweite Spalte zeigt 4:2:2 Subsampling. Die obere Reihe von vier Luma-Proben hat zwei Chromaproben, die darauf angewendet werden, und die untere Reihe von Luma hat ebenfalls zwei Proben. Die acht Pixel, die durch diesen Block dargestellt werden, teilen sich also vier Chromaproben.

Das letzte Beispiel zeigt 4:4:4 Subsampling. Es gibt vier Luma-Proben in jeder Zeile und vier Chromaproben in jeder Zeile, so dass jedes Pixel, das durch den Block dargestellt wird, individuell gefärbt wird.

Was wenn das Chroma-Subsampling-Modell 4:0:0 ist? Das sagt aus, dass jedes Luma-Datenpixel verwendet wird, aber dass jeder Zeile 0 Chromaproben zugewiesen werden. Das resultierende Bild besteht also ausschließlich aus den Luminanzdaten - einem Graustufenbild.

#### YUV-Darstellung der Daten

Da das Bild mit mehr Details in Graustufen als in Farbe dargestellt wird, werden die Werte von Y', U und V normalerweise nicht zusammen gespeichert, eine Probe pro Pixel, so wie RGB-Bilder im Speicher gespeichert werden.

- Jedes Videoframe wird durch eine Matrix von Luma-Werten, Y, dargestellt, bei der die Farbe jedes Pixels mit den Werten in den U- und V-Matrizen berechnet wird. Im AV1-Codec speichert zum Beispiel ein Datensatz die kodierte Luma für eine Kachel, und ein zweiter Datensatz enthält die Chromadaten in Form der U- und V-Werte.
- Im Rundfunkfernsehen ist das Luma-Signal das primäre Signal, während die Chrominanzdaten auf einem Unterträger gesendet werden.
- Der [JPEG](/de/docs/Glossary/JPEG)-Dateityp arbeitet durch die Kompression, indem er das Bild zunächst in das Y'UV-Farbsystem umwandelt und diese Daten dann komprimiert. Jeder von Y', Cb und Cr kann Werte von 0 bis 255 annehmen.
