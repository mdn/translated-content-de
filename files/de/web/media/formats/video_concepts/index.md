---
title: Konzepte digitaler Videos
slug: Web/Media/Formats/Video_concepts
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

In diesem Artikel erkunden wir wichtige Konzepte, die nützlich sind, um vollständig zu verstehen, wie man mit Video im Web arbeitet.

## Farbgebung kodieren

Die Darstellung der Farben in einem Bild oder Video erfordert mehrere Werte für jedes Pixel. Diese Werte hängen davon ab, wie Sie die Farbe "aufteilen", wenn Sie sie in numerische Form umwandeln. Es gibt mehrere Farbmodelle, und Videocodecs verwenden eines oder mehrere dieser Modelle, um ihre Pixel während des Kodierungsprozesses sowie nach dem Dekodieren der Videoframes darzustellen.

### RGB

Die meisten Computergrafikmodelle verwenden das RGB-Farbsystem, wobei eine bestimmte Anzahl von Bits verwendet wird, um die roten, grünen und blauen Komponenten der Farbe eines einzelnen Pixels darzustellen. Ein Bild besteht aus einem zweidimensionalen Array dieser Pixel. Es gibt zwei Hauptmethoden zur Darstellung von RGB-Mustern: mit ganzzahligen Komponenten und mit Gleitkomma-Komponenten. Bei Verwendung von ganzzahligen Komponenten verwendet die RGB-Farbe jeweils 8 Bits für Rot, Grün und Blau sowie möglicherweise 8 Bits für Alpha (die Transparenzmenge).

### YUV

Im Gegensatz zu RGB basiert das **YUV**- (oder **Y'UV**-) Farbkodierungssystem darauf, wie Menschen ein Farbbild wahrnehmen. Dadurch kann Farbdaten unter Verwendung weniger Gesamt-Bits in einem Videostream dargestellt werden.

Der Name "YUV" wird heute allgemein verwendet, um dieses Farbsystem zu beschreiben, obwohl der Begriff ursprünglich speziell für die analoge Farbkodierung verwendet wurde, während **YCbCr** für digitale Farbe verwendet wurde. Heute werden beide Begriffe für digitale Farben verwendet. Das Prim-Zeichen `'` zeigt an, dass eine Gamma-Kompression verwendet wird.

#### Über das menschliche Sehen nachdenken

Wir können ein Bild auf diese Weise darstellen, weil das menschliche Auge dank der Biologie weit mehr Details in Graustufen als in Farbe sieht. Das menschliche Auge enthält zwei Arten von [Fotorezeptorzellen](https://en.wikipedia.org/wiki/Photoreceptor_cell). Die **Stäbchen** sind äußerst empfindliche Lichtintensitätssensoren. Die **Zapfen** sind weniger empfindlich, können jedoch Farben erkennen.

Da das Auge weitaus mehr Stäbchen als Zapfen besitzt (etwa 120 Millionen Stäbchen im Vergleich zu etwa 6 oder 7 Millionen Zapfen), sehen wir Details in Graustufen, wobei die Farbe weitaus weniger detailliert ist. Im Wesentlichen sind unsere Augen wie eine Kamera mit zwei Bildsensor-Chips: einem Graustufen- und einem Farbsensor. Der Graustufen-Sensor hat 120 Megapixel, während der Farbsensor nur etwa 7 Megapixel hat. Diese Sensoren befinden sich physikalisch auf derselben Fläche, der sogenannten **[Retina](https://en.wikipedia.org/wiki/Visual_system#Retina)**, auf der Rückseite des Auges.

Es gibt drei Arten von Zapfen, von denen jede auf ein bestimmtes Wellenlängenband des einfallenden Lichts reagiert, aber auch auf die Intensität des Lichts bei dieser Wellenlänge. Jede Art von Zapfen erfasst also die relativen Antwortspitzen bei verschiedenen Wellenlängen, und das Gehirn verwendet diese Daten, um die Intensität und den Farbton der Farbe des Lichts zu bestimmen, das an diesem Teil der Netzhaut ankommt.

Wenn unsere Augen eine Szene erfassen, machen sie im Wesentlichen zwei Fotos gleichzeitig: ein fein detailliertes Graustufenbild und eine etwas verschwommene, niedrig aufgelöste Karte der Farblichtwellen, die gleichzeitig auf der Netzhaut empfangen werden. Das endgültige Farbbild wird vom Gehirn erstellt, das im Wesentlichen die Farben auf die Graustufenpixel legt.

#### YUV-Konzepte

YUV funktioniert, indem ein Farbraum mit drei Komponenten definiert wird:

- Luma (Y')
  - : Die Helligkeit des Pixels. Ohne die beiden anderen Komponenten ergibt die Luma jedes Pixels im Frame eine Graustufendarstellung des Bildes. In BT.709 (verwendet für HDTV) ist der Luma-Wert beispielsweise die gewichtete Summe der gamma-korrigierten roten, grünen und blauen Komponenten des Pixels, wobei die Formel `Y' = 0.2126R' + 0.7152G' + 0.0722B'` verwendet wird. Diese Gewichtung wird vorgenommen wegen der zuvor erwähnten Verteilung der grünen, roten und blauen Zapfen im Auge.
- Blaudifferenz (U oder Cb)
  - : Die Blaudifferenzkomponente der Chroma oder Farbe der Farbmuster. Dieser Wert wird berechnet, indem die Luma vom gamma-korrigierten Blauwert subtrahiert wird, also `U = B' - Y'`.
- Rotdifferenz (V oder Cr)
  - : Die Rotdifferenzkomponente der Chroma des Farbmusters. Berechnet durch Subtraktion der Luma vom gamma-korrigierten Rotwert: `V = R' - Y'`.

#### Chroma-Subsampling

**Chroma-Subsampling** ist der Prozess der Umwandlung der Farb-Pixel in ein Graustufenbild und eine Matrix aus U- und V-Werten, die die Farbe angeben, die auf diese Pixel abgebildet werden soll.

Da die Farbdaten mit einer niedrigeren Auflösung als die Luma kodiert werden, wird beim Dekodieren des Videos zum Zeichnen auf dem Bildschirm die Farbe jedes Pixels berechnet, indem eine geeignete Farbe unter Berücksichtigung der U- und V-Werte für den 4x2-Block von 8 Pixeln berechnet wird, in dem sich das Pixel befindet. Diese Dekodierungsoperation muss die bei der Kodierung verwendete Methode widerspiegeln, die durch drei durch Doppelpunkte (":") getrennte Zahlen dargestellt wird.

- Die erste Zahl gibt an, wie viele Luminanzmuster pro Zeile aus dem 4x2-Pixelblock kodiert wurden. Dieser Wert ist im Wesentlichen immer 4, was bedeutet: "Verwenden Sie alle Luminanzmuster."
- Die zweite Zahl gibt an, wie viele Chroma-Muster verwendet werden, um die Farben der Pixels in der ersten Zeile darzustellen.
- Die dritte Zahl gibt an, wie viele Chroma-Muster verwendet werden, um die Farben der Pixels in der zweiten Zeile darzustellen.

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
        <img alt="Eine Matrix aus U- und V-Werten für eine 4:2:0-Dekodierungsoperation. Die erste Reihe enthält 2 Chroma-Muster für U: ein Blau und ein Grün. Die Muster der ersten Reihe werden in der zweiten Reihe für V dupliziert." src="yuv-chroma-420.svg" />
      </td>
      <td style="width: 144px; text-align: right">
        <img alt="Eine Matrix aus U- und V-Werten für eine 4:2:2-Dekodierungsoperation. Die erste Reihe enthält 2 Chroma-Muster für U: ein Blau und ein Grün. Die zweite Reihe enthält 2 Chroma-Muster für V: ein Pink und ein Gelb." src="yuv-chroma-422.svg" />
      </td>
      <td style="width: 144px; text-align: right">
        <img alt="Eine Matrix aus U- und V-Werten für eine 4:4:4-Dekodierungsoperation. Die erste Reihe enthält 4 Chroma-Muster für U: ein hellblaues, ein gelbes, ein grünes und ein tiefblaues. Die zweite Reihe enthält 4 Chroma-Muster für V: ein pinkes, ein weißes, ein rotes und ein graues." src="yuv-chroma-444.svg" />
      </td>
    </tr>
    <tr>
      <th scope="col" style="width: 144px">Dekodierte Pixel</th>
      <td style="width: 144px; text-align: right">
        <img alt="Ein 4:2-Block dekodierter Pixel nach einer 4:2:0-Dekodierungsoperation, die die 2 Muster der Chromamatrix auf jede Zeile im Luminanzblock anwendet. Die Farben der Muster werden dunkler, wenn sie auf Grauschattierungen angewendet werden, schwarz auf festes Schwarz und bleiben unverändert, wenn sie auf Weiß angewendet werden." src="yuv-decoded-420.png" />
      </td>
      <td style="width: 144px; text-align: right">
        <img alt="Ein 4:2-Block dekodierter Pixel nach einer 4:2:2-Dekodierungsoperation, die die 2 in jeder Zeile der Chromamatrix enthaltenen Muster auf die entsprechenden Zeilen im Luminanzblock anwendet. Die Farben der Muster werden dunkler, wenn sie auf Grauschattierungen angewendet werden, schwarz auf festes Schwarz und bleiben unverändert, wenn sie auf Weiß angewendet werden." src="yuv-decoded-422.png" />
      </td>
      <td style="width: 144px; text-align: right">
        <img alt="Ein 4:2-Block dekodierter Pixel nach einer 4:4:4-Dekodierungsoperation, die die 4 in jeder Zeile der Chromamatrix enthaltenen Muster auf die entsprechenden Zeilen im Luminanzblock anwendet. Die Farben der Muster werden dunkler, wenn sie auf Grauschattierungen angewendet werden, schwarz auf festes Schwarz und bleiben unverändert, wenn sie auf Weiß angewendet werden." src="yuv-decoded-444.png" />
      </td>
    </tr>
  </tbody>
</table>

In allen diesen Beispielen werden alle vier Pixel jeder Reihe im Luminanzblock im dekodierten Bild verwendet. Bei Betrachtung des 4:2:0-Chroma-Subsamplings zeigt die erste Spalte, dass der Wert 2 angibt, dass die erste Reihe der Chromadaten zwei Muster enthält; die 0 zeigt, dass die zweite Reihe keine eigenen Chromamuster hat und dass die Muster der ersten Reihe auf die zweite Reihe dupliziert werden sollen. Mit anderen Worten, wir nehmen Farbinformationen aus jeder zweiten Reihe von Pixeln im Quellbild und wenden sie auf das Graustufenbild an, das durch die Luma dargestellt wird.

Die zweite Spalte zeigt das 4:2:2-Subsampling. Die obere Reihe der vier Luma-Muster hat zwei Chromamuster angewendet, und die untere Reihe von Luma hat ebenfalls zwei Muster angewendet. Die acht durch diesen Block repräsentierten Pixel haben also vier gemeinsame Chromamuster.

Das letzte Beispiel zeigt das 4:4:4-Subsampling. Es gibt vier Luma-Muster in jeder Reihe und ebenfalls vier Chromamuster in jeder Reihe, so dass jedes durch den Block repräsentierte Pixel individuell gefärbt ist.

Was ist, wenn das Chroma-Subsampling-Modell 4:0:0 ist? Das bedeutet, dass jedes Pixel der Luma-Daten verwendet wird, aber dass jeder Reihe 0 Chromamuster zugewiesen sind. Das resultierende Bild besteht dann ausschließlich aus den Luminanzdaten - einem Graustufenbild.

#### Darstellung von YUV-Daten

Da das Bild detaillierter in Graustufen als in Farbe dargestellt wird, werden die Werte von Y', U und V normalerweise nicht gemeinsam gespeichert, ein Muster pro Pixel, wie RGB-Bilder im Speicher.

- Jedes Videoframe wird durch eine Matrix von Luma-Werten, Y, dargestellt, wobei die Farbe jedes Pixels durch die Werte in den U- und V-Matrizen berechnet wird. Im AV1-Codec speichert ein Datensatz beispielsweise die codierte Luma für eine Kachel, und ein zweiter Datensatz enthält die Chromadaten in Form der U- und V-Werte.
- Im Rundfunkfernsehen ist das Luma-Signal das primäre Signal, während die Chrominanzdaten auf einem Unterträger gesendet werden.
- Der {{Glossary("JPEG", "JPEG")}}-Dateityp komprimiert Daten, indem das Bild zuerst in das Y'UV-Farbsystem umgewandelt wird, um dann diese Daten zu komprimieren. Jedes von Y', Cb und Cr kann Werte von 0 bis 255 haben.
