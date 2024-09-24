---
title: Digitale Videokonzepte
slug: Web/Media/Formats/Video_concepts
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

In diesem Artikel erkunden wir wichtige Konzepte, die nützlich sind, um das Arbeiten mit Video im Web vollständig zu verstehen.

## Farbkodierung

Um die Farben in einem Bild oder Video darzustellen, sind mehrere Werte für jedes Pixel erforderlich. Welche diese Werte sind, hängt davon ab, wie Sie die Farbe aufteilen, wenn Sie sie in numerische Form umwandeln. Es gibt mehrere Farbmodelle, und Video-Codecs verwenden eines oder mehrere dieser Modelle, um ihre Pixel während des Kodierungsprozesses sowie nach der Dekodierung der Videoframes darzustellen.

### RGB

Die meisten Computergrafik-Modelle verwenden das RGB-Farbsystem, wobei eine bestimmte Anzahl von Bits verwendet wird, um die roten, grünen und blauen Komponenten der Farbe eines einzelnen Pixels darzustellen. Ein Bild besteht dann aus einem zweidimensionalen Array dieser Pixel. Es gibt zwei Hauptmethoden zur Darstellung von RGB: mit Ganzzahlkomponenten und mit Gleitkomma-Komponenten. Bei der Verwendung von Ganzzahlkomponenten verwendet RGB jeweils 8 Bits für Rot, Grün und Blau sowie möglicherweise 8 Bits für Alpha (die Menge an Transparenz).

### YUV

Im Gegensatz zu RGB basiert das **YUV** (oder **Y'UV**)-Farbcodierungssystem darauf, wie Menschen ein Farbbild wahrnehmen. Dies ermöglicht es, Farbdaten mit weniger Gesamtbits in einem Videostream darzustellen.

Der Name "YUV" wird heute allgemein verwendet, um dieses Farbsystem zu beschreiben, obwohl der Begriff ursprünglich speziell für die analoge Codierung von Farben verwendet wurde, während **YCbCr** für digitale Farben verwendet wurde. Heute werden jedoch beide Begriffe für digitale Farben verwendet. Das Hochkomma, `'`, zeigt an, dass Gamma-Kompression verwendet wird.

#### Das menschliche Sehen überdenken

Wir können ein Bild auf diese Weise darstellen, weil das menschliche Auge weit mehr Details in Graustufen als in Farbe sieht, dank der Biologie. Das menschliche Auge enthält zwei Arten von [Fotorezeptorzellen](https://en.wikipedia.org/wiki/Photoreceptor_cell) (Lichtsensorzellen). Die **Stäbchen** sind sehr empfindliche Lichtsensoren. Die **Zapfen** sind weniger empfindlich, können aber Farbe erkennen.

Da das Auge viel mehr Stäbchen als Zapfen hat (etwa 120 Millionen Stäbchen im Vergleich zu rund 6 oder 7 Millionen Zapfen), sehen wir Details in Graustufen, wobei die Farbdarstellung viel weniger detailliert ist. Im Wesentlichen sind unsere Augen wie eine Kamera mit zwei Bildsensoren: einem Graustufensensor und einem Farbsensor. Der Graustufensensor hat 120 Megapixel, während der Farbsensor nur etwa 7 Megapixel hat. Diese Sensoren befinden sich physisch auf derselben Fläche, genannt **[Retina](https://en.wikipedia.org/wiki/Visual_system#Retina)**, auf der Rückseite des Auges.

Es gibt drei Arten von Zapfen, von denen jeder auf ein bestimmtes Wellenlängenband des einfallenden Lichts reagiert, aber auch auf die Intensität des Lichts bei dieser Wellenlänge. Jeder Zapfentyp erfasst dann die relativen Reaktionsspitzen bei verschiedenen Wellenlängen, und das Gehirn verwendet diese Daten, um die Intensität und den Farbton des Lichts zu bestimmen, das auf diesen Teil der Netzhaut trifft.

Während unsere Augen eine Szene erfassen, nehmen sie im Wesentlichen zwei Fotos gleichzeitig auf: ein detailliertes Graustufenbild und eine etwas verschwommene, niedriger aufgelöste Karte der empfangenen Lichtfarben über die Netzhaut gleichzeitig. Das endgültige Farbbild wird vom Gehirn erstellt, das im Wesentlichen die Farben auf die Graustufenpixel legt.

#### YUV-Konzepte

YUV funktioniert, indem ein Farbraum mit drei Komponenten definiert wird:

- Luma (Y')
  - : Die Helligkeit des Pixels. Ohne die anderen beiden Komponenten erzeugt die Luma jedes Pixels im Frame eine Graustufen-Darstellung des Bildes. In BT.709 (für HDTV verwendet) ist zum Beispiel der Luma-Wert die gewichtete Summe der gamma-korrigierten roten, grünen und blauen Komponenten des Pixels, unter Verwendung der Formel `Y' = 0.2126R' + 0.7152G' + 0.0722B'`. Diese Gewichtung wird aufgrund des zuvor erwähnten Verhältnisses von grünen, roten und blauen Zapfen im Auge vorgenommen.
- Blau-Differenz (U oder Cb)
  - : Die Blau-Differenzkomponente des Chroma oder der Farbe der Farbprobe. Dieser Wert wird durch Subtrahieren der Luma vom gamma-korrigierten Blauwert berechnet, also `U = B' - Y'`.
- Rot-Differenz (V oder Cr)
  - : Die Rot-Differenzkomponente des Chroma der Farbprobe. Berechnet durch Subtrahieren der Luma vom gamma-korrigierten Rotwert: `V = R' - Y'`.

#### Chroma-Subsampling

**Chroma-Subsampling** ist der Prozess, bei dem die Farb-Pixel in ein Graustufenbild und eine Matrix aus U- und V-Werten umgewandelt werden, die die Farben angeben, die diesen Pixeln zugeordnet werden sollen.

Da die Farbdaten in einer niedrigeren Auflösung als die Luma kodiert werden, wird beim Dekodieren des Videos, um es auf dem Bildschirm darzustellen, die Farbe jedes Pixels berechnet, indem eine geeignete Farbe anhand der U- und V-Werte für den 4x2-Block von 8 Pixeln, in dem sich das Pixel befindet, bestimmt wird. Dieser Dekodierungsprozess muss die während des Kodierens verwendete Methode widerspiegeln, was durch drei durch Doppelpunkte (":") getrennte Zahlen dargestellt wird.

- Die erste Zahl gibt die Anzahl der Helligkeitsstichproben pro Zeile des kodierten 4x2-Pixel-Blocks an. Dieser Wert ist so gut wie immer 4, was "Verwenden Sie alle Helligkeitsstichproben" bedeutet.
- Die zweite Zahl gibt an, wie viele Chroma-Stichproben verwendet werden, um die Farben der Pixel in der ersten Reihe darzustellen.
- Die dritte Zahl gibt an, wie viele Chroma-Stichproben verwendet werden, um die Farben der Pixel in der zweiten Reihe darzustellen.

Die untenstehende Tabelle zeigt Beispiele von drei Chroma-Subsampling-Modellen.

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
          alt="Luminanz der Pixel in einem Block von 4:2 (8 Pixel)"
          src="yuv-luma.svg"
        />
      </td>
      <td style="width: 144px; text-align: right">
        <img
          alt="Luminanz der Pixel in einem Block von 4:2 (8 Pixel)"
          src="yuv-luma.svg"
        />
      </td>
      <td style="width: 144px; text-align: right">
        <img
          alt="Luminanz der Pixel in einem Block von 4:2 (8 Pixel)"
          src="yuv-luma.svg"
        />
      </td>
    </tr>
    <tr>
      <th scope="col" style="width: 144px">Chroma (U und V)</th>
      <td style="width: 144px; text-align: right">
        <img alt="Eine Matrix von U- und V-Werten für eine 4:2:0-Dekodierungsoperation. Die erste Zeile enthält 2 Chroma-Stichproben für U: ein Blau und ein Grün. Die Stichproben der ersten Zeile werden in der zweiten Zeile für V dupliziert." src="yuv-chroma-420.svg" />
      </td>
      <td style="width: 144px; text-align: right">
        <img alt="Eine Matrix von U- und V-Werten für eine 4:2:2-Dekodierungsoperation. Die erste Zeile enthält 2 Chroma-Stichproben für U: ein Blau und ein Grün. Die zweite Zeile enthält 2 Chroma-Stichproben für V: ein Rosa und ein Gelb." src="yuv-chroma-422.svg" />
      </td>
      <td style="width: 144px; text-align: right">
        <img alt="Eine Matrix von U- und V-Werten für eine 4:4:4-Dekodierungsoperation. Die erste Zeile enthält 4 Chroma-Stichproben für U: ein hellblau, ein Gelb, ein Grün und ein dunkles Blau. Die zweite Zeile enthält 4 Chroma-Stichproben für V: ein Rosa, ein Weiß, ein Rot und ein Grau." src="yuv-chroma-444.svg" />
      </td>
    </tr>
    <tr>
      <th scope="col" style="width: 144px">Dekodierte Pixel</th>
      <td style="width: 144px; text-align: right">
        <img alt="Ein 4:2-Block dekodierter Pixel nach einer 4:2:0-Dekodierungsoperation, die die 2 Stichproben der Chroma-Matrix auf jede Zeile im Block der Luminanzdaten anwendet. Die Farben der Stichproben werden dunkler, wenn sie auf Grauschattierungen angewendet werden, schwarz, wenn sie auf reines Schwarz angewendet werden, und bleiben unverändert, wenn sie auf Weiß angewendet werden." src="yuv-decoded-420.png" />
      </td>
      <td style="width: 144px; text-align: right">
        <img alt="Ein 4:2-Block dekodierter Pixel nach einer 4:2:2-Dekodierungsoperation, die die 2 Stichproben in jeder Zeile der Chroma-Matrix auf die entsprechenden Zeilen im Block der Luminanzdaten anwendet. Die Farben der Stichproben werden dunkler, wenn sie auf Grauschattierungen angewendet werden, schwarz, wenn sie auf reines Schwarz angewendet werden, und bleiben unverändert, wenn sie auf Weiß angewendet werden." src="yuv-decoded-422.png" />
      </td>
      <td style="width: 144px; text-align: right">
        <img alt="Ein 4:2-Block dekodierter Pixel nach einer 4:4:4-Dekodierungsoperation, die die 4 Stichproben in jeder Zeile der Chroma-Matrix auf die entsprechenden Zeilen im Block der Luminanzdaten anwendet. Die Farben der Stichproben werden dunkler, wenn sie auf Grauschattierungen angewendet werden, schwarz, wenn sie auf reines Schwarz angewendet werden, und bleiben unverändert, wenn sie auf Weiß angewendet werden." src="yuv-decoded-444.png" />
      </td>
    </tr>
  </tbody>
</table>

In all diesen Fällen werden alle vier Pixel jeder Zeile im Block der Luminanzdaten im dekodierten Bild verwendet. Beim 4:2:0-Chroma-Subsampling zeigt die erste Zahl in der ersten Spalte an, dass die erste Zeile der Chroma-Daten zwei Stichproben enthält; die 0 zeigt an, dass die zweite Zeile keine eigenen Chroma-Stichproben hat, und dass die Stichproben der ersten Zeile in der zweiten Zeile dupliziert werden sollten. Mit anderen Worten, Farbinformationen werden von jeder zweiten Zeile von Pixeln im Quellbild genommen und auf das durch die Luma dargestellte Graustufenbild angewendet.

Die zweite Spalte zeigt 4:2:2-Subsampling. Die oberste Zeile mit vier Luma-Stichproben hat zwei Chroma-Stichproben, die darauf angewendet werden, und die untere Zeile hat ebenfalls zwei Stichproben darauf angewendet. Die acht durch diesen Block dargestellten Pixel teilen sich also vier Chroma-Stichproben.

Das letzte Beispiel zeigt 4:4:4-Subsampling. Es gibt vier Luma-Stichproben in jeder Zeile und auch vier Chroma-Stichproben in jeder Zeile, sodass jedes durch den Block dargestellte Pixel individuell gefärbt ist.

Was, wenn das Chroma-Subsampling-Modell 4:0:0 ist? Das bedeutet, dass jedes Pixel der Luma-Daten verwendet werden soll, aber dass jede Zeile 0 Chroma-Stichproben auf sich angewendet hat. Das resultierende Bild besteht dann nur aus den Luminanzdaten—ein Graustufenbild.

#### YUV-Datenrepräsentation

Da das Bild mit mehr Details in Graustufen als in Farbe dargestellt wird, werden die Werte von Y', U und V typischerweise nicht zusammen gespeichert, eine Stichprobe pro Pixel, wie RGB-Bilder im Speicher gespeichert werden.

- Jedes Video-Frame wird durch eine Matrix von Luma-Werten Y dargestellt, wobei die Farbe jedes Pixels unter Verwendung der Werte in den Matrizen U und V berechnet wird. Zum Beispiel speichert ein Datensatz im AV1-Codec die kodierte Luma für eine Kachel und ein zweiter Datensatz enthält die Chroma-Daten in Form der U- und V-Werte.
- Im Rundfunkfernsehen ist das Luma-Signal das primäre Signal, während die Farbdaten auf einem Subträger gesendet werden.
- Die Komprimierung des Dateityps {{Glossary("JPEG")}} funktioniert, indem das Bild zuerst in das Y'UV-Farbsystem umgewandelt wird und diese Daten dann komprimiert werden. Jeder der Werte Y', Cb und Cr kann Werte von 0 bis 255 haben.
