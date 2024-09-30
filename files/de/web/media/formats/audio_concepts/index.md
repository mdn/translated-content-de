---
title: Digitale Audiokonzepte
slug: Web/Media/Formats/Audio_concepts
l10n:
  sourceCommit: 492065b0932dca9708efd0051bd687b590e3f9d4
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Die Darstellung von Audio in digitaler Form umfasst mehrere Schritte und Prozesse, wobei mehrere Formate sowohl für das Roh-Audio als auch für das kodierte oder komprimierte Audio zur Verfügung stehen, das tatsächlich im Web verwendet wird. Dieser Leitfaden bietet einen Überblick darüber, wie Audio digital dargestellt wird und wie Codecs verwendet werden, um Audio für die Nutzung im Web zu kodieren und zu dekodieren.

## Abtasten von Audio

Audio ist ein von Natur aus analoges Merkmal der natürlichen Welt. Während ein Objekt vibriert, bringt es die umgebenden Moleküle ebenfalls zum Vibrieren. Diese Moleküle beeinflussen benachbarte Moleküle und so weiter, wobei die Vibration in Form einer Welle vom Ursprungspunkt ausgeht, bis die Amplitude der Welle (ihre Lautstärke) mit der Entfernung abnimmt. Die Granularität einer Audioschwingung in der realen Welt entspricht somit der eines einzelnen Moleküls des Mediums, durch das sich die Schallwelle bewegt.

Auf der Erde ist die Luft das Medium, durch das die meisten Audiosignale reisen. Einige Audiosignale durchlaufen Wasser oder sogar das Gestein, aus dem der Planet besteht (wenn Sie jemals das Grollen oder Dröhnen eines Erdbebens gehört haben, haben Sie dieses Phänomen erlebt), aber fast alle Geräusche, die Sie täglich hören, gelangen durch die Luft zu Ihren Ohren.

Die täglichen Geräusche, die ein Mensch hört, sind also tatsächlich Vibrationen in der Luft, die die inneren Mechanismen des Ohres verursachen. Je weiter sich die Luftmoleküle mit jedem Puls der Welle bewegen, desto höher ist die Amplitude der Welle und desto lauter ist der Klang. Je schneller die Moleküle vibrieren, desto höher ist die Frequenz der Welle.

Je höher die Amplitude (Höhe) der Welle, desto lauter ist der Ton in diesem Moment. Je kürzer die Wellenlänge (je näher die Wellenkämme beieinander liegen), desto höher ist die Frequenz (oder Tonhöhe) des erzeugten Klangs.

![Eine einfache Tonwellenform](audio-waveform.svg)

Computer sind jedoch digital. Um eine Schallwelle in einer Weise darzustellen, die Computer manipulieren und verarbeiten können (geschweige denn über ein Netzwerk übertragen), muss der Ton in eine digitale Form umgewandelt werden. Dieser Prozess wird **Analog-Digital-Umwandlung** (**A/D** für kurz) genannt.

Der erste Faktor, der die Wiedergabetreue des aufgenommenen Audios beeinflusst, ist die **Audiobandbreite**; das ist der Frequenzbereich, den der A/D-Wandler erfassen und in digitale Form umwandeln kann. Die Audiobandbreite wird auch durch den Codec beeinflusst, wenn er beim Kodieren des Tons bestimmte Frequenzbänder verwirft.

Der Ton gelangt in Form eines Elektronenstroms, dessen Spannung variiert und die Amplitude der Schallwelle repräsentiert, über ein Mikrofon oder einen anderen Eingang in den Computer. Dieses analoge Signal wird dann von einem Schaltkreis, der die Amplitude der eingehenden Welle in regelmäßigen Abständen erfasst und diese Daten in eine Zahl umwandelt, welche das Audiosystem versteht, in digitale Form umgewandelt. Jeder dieser erfassten Momente ist ein **Sample**. Indem man alle Samples aneinanderreiht, kann man die ursprüngliche Welle ungefähr darstellen, wie im folgenden Diagramm zu sehen.

![Eine Audioschwingung mit periodisch erfassten Proben](audio-waveform-samples1.svg)

In diesem Beispiel repräsentiert die blaue Linie die aus der Audioschwingung (schwarz) entnommenen Samples. In regelmäßigen Abständen liest die A/D-Wandler-Schaltung die Spannung des Signals als einen Wert zwischen (in diesem Fall) -1,0 und +1,0. Da die Amplitude im Verlauf dieses Zeitintervalls variiert, muss der A/D-Wandler einen Wert auswählen, der dieses Intervall repräsentiert, sei es durch die Aufnahme des Werts in einem bestimmten Moment (im obigen Diagramm wird der Mittelpunkt jedes Intervalls als Wert verwendet) oder durch Mitteln der Amplitude während der Dauer jedes Samples. Diese Sample-Werte werden dann als Amplitude der Schwingung zu diesem Zeitpunkt aufgezeichnet.

Wenn der Ton später wiedergegeben wird, werden diese Amplituden verwendet, um eine Annäherung an die ursprüngliche Schwingung zu erzeugen; anstelle der Wiedergabe einer exakten Kopie der ursprünglichen, glatten Welle wird die rauere, blaue Welle abgespielt.

Je öfter Sie Samples des Original-Audios aufnehmen, desto näher können Sie dem Original kommen. Die Anzahl der pro Sekunde genommenen Samples wird als **Sample-Rate** bezeichnet. Betrachten Sie die obige Welle und wie unterschiedlich die blaue, digitale Welle aussehen würde, wenn Sie doppelt so häufig Samples nehmen würden. Oder zehnmal so häufig. Je mehr Samples Sie nehmen, desto glatter wird die Welle.

## Audio-Datenformat und -struktur

Auf der grundlegendsten Ebene wird Audio durch einen Strom von Samples dargestellt, von denen jedes die Amplitude der Audioschwingung für ein bestimmtes Segment der gesamten Schwingung des Audiosignals angibt. Es gibt mehrere Formate, die für die einzelnen Samples innerhalb einer Audiodatei verwendet werden. Die meisten Audiodateien verwenden 16-Bit-Ganzzahlen mit Vorzeichen für jedes Sample, aber andere verwenden 32-Bit-Fließkommawerte oder 24- oder 32-Bit-Ganzzahlen. Einige ältere Audiodateiformate - die Sie nicht im Web finden werden - verwendeten 8-Bit-Ganzzahlsamples. Darüber hinaus können Samples sowohl mit als auch ohne Vorzeichen verwendet werden. Die Größe eines einzelnen Samples wird als **Sample-Größe** bezeichnet.

Die Position jeder Tonquelle innerhalb des Audiosignals wird als **Kanal** bezeichnet. Jeder Kanal enthält ein Sample, das die Amplitude des von dieser Quelle zu einem bestimmten Zeitpunkt erzeugten Tons anzeigt. Zum Beispiel gibt es im Stereo-Sound zwei Tonquellen: einen Lautsprecher links und einen rechts. Jeder davon wird durch einen Kanal repräsentiert, und die Anzahl der im Audiosignal enthaltenen Kanäle wird als **Kanalanzahl** bezeichnet.

Während der Aufnahme oder Erzeugung von Mehrkanal-Audiodateien werden die Kanäle in eine Serie von **Audio-Frames** zusammengefügt, von denen jeder aus einem Sample für jeden der Kanäle des Audio besteht. Ein einzelnes Sample ist ein numerischer Wert, der die Amplitude der Klang [Schwingung](https://en.wikipedia.org/wiki/Waveform) in einem einzigen Moment darstellt und in verschiedenen Formaten dargestellt werden kann.

Stereo-Audio ist wahrscheinlich die am häufigsten verwendete Kanalaufteilung im Web-Audio, und 16-Bit-Samples werden für den Großteil des heute verwendeten täglichen Audios verwendet. Für 16-Bit-Stereo-Audio wird jedes aus dem analogen Signal entnommene Sample als zwei 16-Bit-Ganzzahlen aufgezeichnet, eine für den linken und eine für den rechten Kanal. Das bedeutet, dass jedes Sample 32-Bit-Speicher benötigt. Bei der üblichen Sample-Rate von 48 kHz (48.000 Samples pro Sekunde) belegt jede Sekunde Audio 192 kB Speicher. Daher erfordert ein typisches dreiminütiges Lied etwa 34,5 MB Speicher. Das ist eine Menge Speicherplatz, aber schlimmer noch, es ist eine enorme Menge an Netzwerkkapazität, die für ein relativ kurzes Audiodatei verwendet wird. Aus diesem Grund ist das meiste digitale Audio komprimiert.

Der Prozess der Komprimierung und Dekomprimierung von Audio wird durch das Kodieren und Dekodieren mit einem Audio **[Codec](/de/docs/Glossary/codec)** (**CO**der/**DE**coder) durchgeführt. Im Laufe der Jahre wurde eine große Vielzahl von Codecs entwickelt, von denen mehrere häufig im Web verwendet werden. Details zu den wichtigsten und nützlichsten, die Webentwickler kennen sollten, finden Sie im Artikel [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Audio_codecs).

### Audio-Kanäle und Frames

Es gibt zwei Arten von Audio-Kanälen. Standard-Audio-Kanäle werden verwendet, um den Großteil des hörbaren Sounds zu präsentieren. Der Klang für die linken und rechten Hauptkanäle sowie für alle Ihre Surround-Sound-Lautsprecher (Center, linkes und rechtes Heck, linke und rechte Seiten, Deckenkanäle usw.) sind alles Standard-Audio-Kanäle. Spezielle **Low Frequency Enhancement** (**LFE**) Kanäle liefern das Signal für spezielle Lautsprecher, die die niederfrequenten Klänge und Vibrationen erzeugen sollen, um beim Hören des Audios ein körperliches Gefühl zu erzeugen. Die LFE-Kanäle treiben typischerweise Subwoofer und ähnliche Geräte an.

Monophonisches Audio hat einen Kanal, Stereo-Sound hat zwei Kanäle, 5.1 Surround-Sound hat 6 Kanäle (fünf Standard- und ein LFE) und so weiter. Jedes Audio-Frame ist ein Datenrekord, der die Samples für alle im Audiosignal verfügbaren Kanäle enthält. Die Größe eines Audio-Frames wird berechnet, indem die Sample-Größe in Bytes mit der Anzahl der Kanäle multipliziert wird, sodass ein einzelnes Frame eines Stereo-16-Bit-Audios 4 Byte lang ist und ein einzelnes Frame eines 5.1 Fließkomma-Audios 24 Byte lang ist (4 Byte pro Sample multipliziert mit 6 Kanälen).

> [!NOTE]
> Einige Codecs trennen tatsächlich den linken und rechten Kanal und speichern sie in separaten Blöcken innerhalb ihrer Datenstruktur. Ein Audio-Frame besteht jedoch immer aus allen Daten für alle verfügbaren Kanäle.

Die Anzahl der Frames, die eine einzelne Sekunde Audio ausmachen, variiert je nach Sample-Rate, die bei der Aufnahme des Tons verwendet wird. Da die Sample-Rate der Anzahl der "Scheiben" entspricht, in die eine Schallwelle in jeder Sekunde aufgeteilt wird, wird sie manchmal als Frequenz angesehen (im Sinne einer Beschreibung von etwas, das sich regelmäßig wiederholt, nicht im Sinne einer tatsächlichen Audiofrequenz), und die Samples-pro-Sekunde-Messung verwendet daher den [Hertz](https://en.wikipedia.org/wiki/Hertz) als Einheit.

Die gebräuchlichsten Sample-Raten sind:

- 8000 Hz
  - : Der internationale [G.711](https://en.wikipedia.org/wiki/G.711) Standard für Audio, der in der Telefonie verwendet wird, hat eine Sample-Rate von 8000 Hz (8 kHz). Dies reicht aus, damit menschliche Sprache verständlich ist.
- 44100 Hz
  - : Die 44,1 kHz Sample-Rate wird für Compact Discs (CD) verwendet. CDs bieten unkomprimierten 16-Bit-Stereo-Sound mit 44,1 kHz. Computer-Audio verwendet diese Frequenz ebenfalls häufig standardmäßig.
- 48000 Hz
  - : Das Audio auf DVDs wird mit 48 kHz aufgenommen. Dies wird auch häufig für Computer-Audio verwendet.
- 96000 Hz
  - : Hochauflösendes Audio.
- 192000 Hz
  - : Ultra-hochauflösendes Audio. Wird noch nicht häufig verwendet, aber dies wird sich im Laufe der Zeit ändern.

Es gibt einen Grund, warum 44,1 kHz als die Mindest-"High-Fidelity"-Abtastrate angesehen wird. Der [Nyquist-Shannon-Abtasttheorem](https://en.wikipedia.org/wiki/Nyquist-Shannon_sampling_theorem) besagt, dass eine Schallwelle akkurat wiedergegeben werden muss, indem sie mit der doppelten Rate der Frequenz des Tons abgetastet wird. Da der Hörbereich des Menschen von etwa 20 Hz bis 20.000 Hz reicht, erfordert die Wiedergabe der höchsten Töne, die Menschen im Allgemeinen hören können, eine Abtastrate von mehr als 40.000 Hz.

Um zusätzlichen Raum für einen [Tiefpassfilter](https://en.wikipedia.org/wiki/Low-pass_filter) zu bieten, um Verzerrungen durch [Aliasing](https://en.wikipedia.org/wiki/Aliasing) zu vermeiden, wird eine zusätzliche 2,05 kHz [Transitionsband](https://en.wikipedia.org/wiki/Transition_band) zur Vorsampling-Frequenz hinzugefügt (was zu 22.050 Hz führt). Durch Verdoppelung nach dem Nyquist-Theorem ergibt sich eine endgültige Mindestfrequenz von (Sie ahnen es vielleicht) 44,1 kHz.

Hochauflösendes (96 kHz) Audio wird in einigen High-End-Audiosystemen verwendet, und es und Ultra-hochauflösendes (192 kHz) Audio sind nützlich für das Audio-Mastering, wo Sie so viel Qualität wie möglich benötigen, während sie den Ton bearbeiten, bevor Sie auf die Abtastrate heruntersampeln, die Sie für das endgültige Produkt verwenden werden. Dies ist ähnlich wie Fotografen hochauflösende Bilder zum Bearbeiten und Komponieren verwenden, bevor sie dem Kunden ein JPEG präsentieren, das für die Nutzung auf einer Website geeignet ist.

### Dateigröße und Netzwerkbandbreite von Audio

Sobald Sie die Größe eines einzelnen Audio-Frames und die Anzahl der Frames pro Sekunde kennen, aus denen Ihre Audiodaten bestehen, können Sie leicht berechnen, wie viel Speicherplatz die Rohsounddaten selbst einnehmen (und deshalb wie viel Bandbreite sie in einem Netzwerk verbrauchen würden).

Zum Beispiel, betrachten Sie einen Stereo-Audio-Clip (das heißt, zwei Audio-Kanäle) mit einer Sample-Größe von 16 Bit (2 Bytes), aufgenommen mit 48 kHz:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mn>2</mn><mo>×</mo><mn>2</mn><mfrac><mrow><mi>bytes</mi></mrow><mrow><mi>sample</mi></mrow></mfrac><mo>×</mo><mn>48000</mn><mfrac><mrow><mi>samples</mi></mrow><mrow><mi>second</mi></mrow></mfrac><mo>=</mo><mn>192000</mn><mfrac><mrow><mi>bytes</mi></mrow><mrow><mi>second</mi></mrow></mfrac><mo>=</mo><mn>192</mn><mi>kBps</mi></mrow><annotation encoding="TeX">2 \times 2\frac { bytes }{ sample } \times 48000\frac { samples }{ second } = 192000\frac { bytes }{ second } = 192 kBps</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Bei 192 kBps werden niedrigere Netzwerke allein durch einen einzelnen Audiostream, der gespielt wird, bereits überlastet. Wenn das Netzwerk auch andere Dinge tut, tritt das Problem sogar in Hochgeschwindigkeitsnetzwerken auf. Bei so viel Wettbewerb um die Netzwerkkapazität, besonders in langsameren Netzwerken, könnte diese Menge an Daten zu groß sein, um in Echtzeitanwendungen wirklich genutzt zu werden.

Um dieses Problem zu lösen, muss das Audio durch Kompression verkleinert werden.

> [!NOTE]
> Netzwerkbandbreite ist offensichtlich nicht dasselbe wie Audiobandbreite, die unter [Abtasten von Audio](#abtasten_von_audio) beschrieben wird.

## Grundlagen der Audiokompression

Anders als Text und viele andere Datenarten neigen Audiodaten dazu, **rauschend** zu sein, was bedeutet, dass die Daten selten aus einer Serie von exakt wiederholten Bytes oder Byte-Sequenzen bestehen. Infolgedessen sind Audiodaten schwierig mit traditionellen Algorithmen zu komprimieren, wie sie von universellen Werkzeugen wie `zip` verwendet werden, die normalerweise durch Ersetzen wiederkehrender Datenfolgen durch eine Kurzform arbeiten.

Es gibt mehrere Techniken, die bei der Komprimierung von Audio angewandt werden können. Die meisten Codecs verwenden eine Kombination dieser und können auch andere Techniken einsetzen.

Das einfachste, was Sie tun können, ist einen Filter anzuwenden, der Zischen und leise Klänge entfernt, indem Sie alle leisen Abschnitte in Stille umwandeln und das Signal glätten. Dies kann Abschnitte von Stille sowie andere sich wiederholende oder fast wiederholende Signale erzeugen, die verkürzt werden können.

Sie können auch einen Filter anwenden, der die Audiobandbreite verengt, indem Sie alle Audiofrequenzen entfernen, die Ihnen nicht wichtig sind. Dies ist besonders nützlich für stimmlich intensive Audiosignale. Dies entfernt Daten, wodurch das resultierende Signal leichter zu komprimieren ist.

### Psychoakustik

Wenn Sie wissen, welche Art von Audiodaten Sie wahrscheinlich bearbeiten werden, können Sie möglicherweise spezielle Filtertechniken finden, die speziell für diese Art von Klang anwendbar sind und die Kodierung optimieren.

Die am häufigsten verwendeten Kompressionsmethoden für Audio wenden die Wissenschaft der **[Psychoakustik](https://en.wikipedia.org/wiki/Psychoacoustics)** an. Diese Wissenschaft untersucht, wie Menschen Klang wahrnehmen und welche Teile der von uns gehörten Audiofrequenzen am wichtigsten für unsere Reaktion auf diese Klänge sind, gegeben der Kontext und Inhalt des Klangs. Faktoren wie die Fähigkeit, die Frequenzänderung eines Tons wahrzunehmen, den gesamten Hörbereich des Menschen im Vergleich zu den Frequenzen des Audiosignals, die Audiolokalisierung und so weiter können alle von einem Codec berücksichtigt werden.

Durch die Verwendung eines fundierten Verständnisses der Psychoakustik ist es möglich, eine Kompressionsmethode zu entwerfen, die die komprimierte Größe des Audios minimiert und gleichzeitig die wahrgenommene Klangtreue maximiert. Ein Algorithmus, der Psychoakustik verwendet, kann jede der hier genannten Techniken anwenden und wird höchstwahrscheinlich auch andere anwenden.

All dies bedeutet, dass eine grundlegende Frage gestellt und beantwortet werden muss, bevor ein Codec ausgewählt wird: Angesichts der Inhalte des Tons, des Nutzungskontexts und des Zielpublikums, ist es akzeptabel, einen gewissen Grad an Audioqualität zu verlieren, und wenn ja, wie viel; oder ist es notwendig, dass das Ergebnis beim Dekodieren der Daten identisch zum Ausgangsaudio ist?

### Verlustfreie vs. verlustbehaftete Kompression

Wenn ein Verlust an Details und möglicherweise Qualität inakzeptabel oder unerwünscht ist, wird ein **verlustfreier** Codec bevorzugt. Auf der anderen Seite, wenn ein gewisser Grad an Reduzierung der Audioqualität in Ordnung ist, kann ein **verlustbehafteter** Codec verwendet werden. Im Allgemeinen führen verlustbehaftete Kompressionen zu wesentlich kleineren Ausgaben als verlustfreie Methoden; auch sind viele verlustbehaftete Codecs ausgezeichnet, wobei der Qualitäts- und Detailverlust für den Durchschnittshörer schwer oder sogar unmöglich zu erkennen ist.

> [!NOTE]
> Während ein hochqualitativer verlustbehafteter Kompressionsalgorithmus möglicherweise schwer für den Durchschnittsmenschen zu erkennen ist, haben bestimmte Menschen ein außergewöhnlich gutes Gehör oder sind besonders geschickt darin, die durch verlustbehaftete Kompressionstechniken eingeführten Änderungen in der Musik zu bemerken.

Die Mehrheit der Audiocodecs verwendet einige Form der verlustbehafteten Kompression, aufgrund des besseren Kompressionsverhältnisses, das diese Algorithmen bieten. Während verlustfreie Kompressionsalgorithmen normalerweise keine bessere Komprimierung als 40-50 % der Größe der ursprünglichen, unkomprimierten Audiodaten erreichen, kann moderne verlustbehaftete Kompression die Größe des Audios auf zwischen 5-20 % der Originalgröße reduzieren, abhängig von der Komplexität des Audios. Die weitaus besseren Kompressionsverhältnisse, die mit verlustbehafteter Kompression möglich sind, machen sie oft zu einer überzeugenden Wahl, und eine adäquate oder hervorragende Audioqualität ist bei gut gewählten Codec-Konfigurationen möglich.

Forscher entwickeln kontinuierlich bessere Methoden zur Analyse und Komprimierung von Audio, sodass neue Formate regelmäßig erscheinen, die verschiedene Verbesserungen in Kompressionsverhältnis oder Audioqualität (oder beides) bieten.

Einsatzszenarien für verlustfreie Audio umfassen Szenarien wie:

- Jede Situation, in der der Hörer eine genaue Audiowiedergabe erwartet und ein gutes Gehör hat, um die feinen Details des unveränderten Audios wahrzunehmen
- Audioloops und Samples, die in der Musik- und Klangeffektproduktion verwendet werden
- Situationen, in denen Audioclips oder -samples remixt und dann komprimiert werden können; die Verwendung von verlustfreiem Audio für den Mastering-Prozess vermeidet die Komprimierung von zuvor komprimierten Daten, was zu einem zusätzlichen Qualitätsverlust führen würde

Faktoren, die die Verwendung verlustbehafteter Kompression empfehlen könnten, umfassen:

- Sehr große Ausgangsaudiodaten
- Eingeschränkter Speicherplatz (entweder weil der Speicherplatz klein ist oder eine große Menge an Klangspeicher darin zu speichern ist)
- Die Notwendigkeit, die Netzwerkbandbreite, die benötigt wird, um das Audio zu senden, einzuschränken; dies ist besonders wichtig für Live-Streams und Telekonferenzen

## Psychoakustik 101

Das Eintauchen in die Details der Psychoakustik und wie Audiokompression funktioniert, liegt weit außerhalb des Umfangs dieses Artikels, aber es ist nützlich, eine allgemeine Vorstellung davon zu haben, wie Audio von gängigen Algorithmen komprimiert wird, um die Auswahl eines Audiocodecs besser zu verstehen und zu treffen.

Verlustbehaftete Kompressionsalgorithmen verwenden im Allgemeinen Psychoakustik, um zu bestimmen, welche Komponenten einer Audioschwingung verloren gehen oder auf irgendeine Weise abgeschwächt werden können, um die Kompressionsverhältnisse zu verbessern und gleichzeitig die hörbare Wirkung für die Zielhörer zu minimieren. Durch die Manipulation der Schwingung, um sie leichter komprimierbar zu machen, oder durch Entfernen von Komponenten des Klangs, die nicht wirklich gehört werden, wird die Schwingung einfacher, was zu Daten mit mehr Konsistenz führt, die daher leichter zu komprimieren sind. Die Einschränkung der Audiobandbreite, um nur die Frequenzen einzuschließen, die für die Interpretation des dekomprimierten Tons durch das menschliche Ohr am wichtigsten sind, kann ebenfalls die Kompressionsfaktoren verbessern.

Die Art des zu kodierenden Inhalts kann die Wahl des Codecs beeinflussen. Insbesondere ist die Schwingung für Musik fast immer komplexer als ein Audio-Sample, das nur menschliche Stimmen enthält. Darüber hinaus verwendet die menschliche Stimme einen kleinen Teil des Spektrums der Audiofrequenzen, die das menschliche Ohr wahrnehmen kann.

> [!NOTE]
> Telefonnetze, die ursprünglich speziell für die Übertragung menschlicher Stimmen entwickelt wurden, können nur Audiosignale (oder andere Arten von Signalen) im Frequenzband von 300 Hz bis 3.000 Hz übertragen. Dies deckt nicht ganz den gesamten Bereich menschlicher Sprache im unteren Bereich ab, aber genügend von der Schwingung ist verfügbar, dass das menschliche Ohr und das Gehirn leicht kompensieren. Dies bedeutet auch, dass Menschen im Allgemeinen daran gewöhnt sind, Sprache wahrzunehmen, die auf solch eine schmale Audiobandbreite begrenzt ist.

Menschliche Sprache nutzt ein relativ schmalbandiges Frequenzband (etwa 300 Hz bis 18.000 Hz, obwohl der genaue Bereich von Person zu Person aufgrund von Faktoren wie Geschlecht variiert). Darüber hinaus liegen die meisten menschlichen Sprachlaute tendenziell zwischen ungefähr 500 Hz und 3.000 Hz, wodurch große Teile der gesamten Schwingung fallen gelassen werden können, ohne die Möglichkeit des Zuhörers zu beeinträchtigen, die gesprochenen Worte zu verstehen. Sie können sogar die Audiobandbreite anpassen, um den Tonfall der individuellen Stimme des Sprechers zu berücksichtigen.

Aufgrund all dieser Faktoren und weil Sprachschwingungen typischerweise weniger komplex als Musik sind, kann eine hohe (und genauer gesagt "hoch genug") Wiedergabetreue Sprachwiedergabe mit einer relativ niedrigen Bitrate erreicht werden.

Wenn ein zur Kompression allgemeiner Audiodaten ausgelegter Algorithmus eine Audioschwingung analysiert, kann er alles außerhalb des menschlichen Hörbereichs verwerfen (oder möglicherweise sogar mehr, abhängig davon, wie bereit der Algorithmus ist, das Risiko eines Detailverlusts am hohen und/oder niedrigen Ende der Frequenzbandbreite einzugehen). Das bedeutet, dass der Codec Audiosignale verwerfen kann, deren Frequenz niedriger als etwa 20 Hz oder höher als etwa 20.000 Hz (20 kHz) ist. Dies verengt die Audiobandbreite des Klangs und reduziert so die Datenmenge, die erforderlich ist, um das Signal in seiner komprimierten Form darzustellen. Die Audiobandbreite kann nicht so stark reduziert werden wie bei einem Sprachcode, aber es ist dennoch ein hilfreicher Anfang.

Einige Menschen können zu einem gewissen Grad außerhalb dieser Reichweite hören. Häufiger liegt die Fähigkeit der Menschen, höhere Frequenzen zu hören, deutlich niedriger als das; es ist besonders bemerkenswert, dass bis zum mittleren Alter das obere Ende dieses Frequenzbereichs normalerweise von 20 kHz auf etwa 12 kHz bis 14 kHz abfällt. Dies legt nahe, dass die höheren Frequenzen oft verworfen werden können, ohne die Verständlichkeit des Tons übermäßig zu beeinträchtigen, sodass Sie den Umfang des benötigten Audio-Raumes erheblich reduzieren können, wodurch Ihr Ton einfacher und leichter zu komprimieren wird.

Dies wird im folgenden Diagramm dargestellt. Das Diagramm vergleicht den Frequenzbereich des menschlichen Hörens (grün) mit dem Frequenzbereich der menschlichen Sprache (rot) und dem Frequenzbereich, in dem die meisten menschlichen Vokalisationen liegen (gelb).

![Diagramm zeigt den Bereich menschlichen Hörens im Vergleich zum Bereich der menschlichen Sprache](human-hearing-range.svg)

Die großen Unterschiede zwischen diesen Bereichen geben uns Spielraum, um Details in Audiodaten zu verlieren, ohne die Fähigkeit des menschlichen Ohres, wesentliche Änderungen in der Audioqualität wahrzunehmen, erheblich zu beeinträchtigen. Diese Fakten können bei der Komprimierung von Audio genutzt werden.

Zusätzlich zur Vereinfachung des Klangs durch psychoakustische Analyse verwenden Codecs andere Algorithmen und Transformationen, um die Größe des Audios weiter zu vereinfachen und zu reduzieren. Wenn Sie mehr darüber erfahren möchten, wie Kompression bei Audio funktioniert, werfen Sie einen Blick auf die [Datenkompression von Audio](https://en.wikipedia.org/wiki/Data_compression#Audio) auf Wikipedia.

Wichtig ist, dass Codecs die ganze harte Arbeit für Sie erledigen. Deshalb wird so viel Ingenieurskunst und wissenschaftliche Untersuchungen in die Entwicklung neuer Algorithmen und Codecs investiert. Alles, was Sie tun müssen, ist, die Optionen und Ihren Anwendungsfall zu berücksichtigen, um dann den geeigneten Codec für Ihre Bedürfnisse auszuwählen.

> [!NOTE]
> Einen detaillierteren Leitfaden zur Auswahl von Audiocodecs finden Sie unter [Choosing an audio codec](/de/docs/Web/Media/Formats/Audio_codecs#choosing_an_audio_codec).

## Parameter für verlustfreie Komprimierer

Verlustfreie Komprimierer haben viel weniger Spielraum, um das Audio zu manipulieren, um die Kompressionsrate zu verbessern, angesichts des Bedarfs, das Originalaudio re-produzierbar zu halten, was die verfügbaren Optionen zur Konfiguration dieser Kompressoren einschränkt. Die Optionen drehen sich in der Regel um die Auswahl der Methode für die Kodierung und wie viel Zeit und Rechenleistung sie verbrauchen dürfen, um dies zu tun.

Diese Parameter variieren je nach Codec enthalten aber möglicherweise:

- Die Festlegung bestimmter Algorithmen, die in bestimmten Phasen des Kodierungsprozesses zu verwenden sind
- Parameter für diese Algorithmen, wie viel prädiktive Tiefe während des Modellierens des Audios verwendet werden soll
- Die Anzahl der Durchläufe, die bei der Analyse des Audios gemacht werden sollen, oder die Anzahl der Durchläufe, die gegebene Algorithmen durchgeführt werden sollen

## Parameter für verlustbehaftete Komprimierer

Die meisten Codecs haben Eingabewerte, die Sie anpassen können, um die Komprimierung in verschiedener Weise zu optimieren, entweder hinsichtlich Größe oder Qualität. Wenn Sie einen verlustbehafteten Encoder verwenden, je höher die Qualität, desto größer wird das kodierte Audio sein. Aus diesem Grund beeinflussen die meisten Optionen sowohl Qualität als auch Größe in gewisser Weise.

Sie müssen auf die Dokumentation der von Ihnen verwendeten Kodierungssoftware verweisen, um zu bestimmen, welche Optionen verfügbar sind, welche von dem Codec und der Kodierungssoftware selbst abhängen. Einige Codecs verfügen über eine Reihe von Werten, die Sie anpassen können (einige davon erfordern möglicherweise ein tiefes Verständnis von Psychoakustik und den Algorithmen des Codecs), und andere bieten einen einfachen "Qualitäts"-Parameter, den Sie einstellen können, der automatisch verschiedene Eigenschaften des Algorithmus anpasst.

### Bitrate

Es gibt zwei sich gegenseitig ausschließende Methoden, um die Qualität des komprimierten Audios unter Verwendung der Bitrate zu steuern. Die erste beinhaltet das Anvisieren einer durchschnittlichen Bitrate für die kodierten Daten, während die zweite die Angabe eines konstanten Qualitätswerts beinhaltet, den man anstrebt, während die Bitrate variieren kann.

#### Durchschnittliche Bitrate

Die erste Methode zur Steuerung der Qualität der Ausgangsdatei besteht darin, die **Durchschnittliche Bitrate** (**ABR**) zu spezifizieren, die beim Kodieren des Audios angestrebt wird. Der Encoder versucht, eine kodierte Audiodatei zu erzeugen, die beim Abspielen im Durchschnitt die angegebene Anzahl von Bits für jede Sekunde Audio verwendet. Dies steuert die Qualität aus der Perspektive der Größe des kodierten Audios; je höher die Bitrate, desto höher ist die resultierende Audioqualität. Die Qualität des Audios wird im Laufe der Zeit entsprechend den Bedürfnissen schwanken, um die angestrebte Bitrate zu erreichen.

Etwas ähnlich der ABR ist **CBR** (**Konstante Bitrate**). Wo ABR versucht, die Bitrate im Durchschnitt auf einem bestimmten Niveau zu halten, während sie einige Schwankungen zulässt, verwendet CBR eine tatsächlich feste Bitrate für die Dauer des Audios. CBR wird hauptsächlich in Codecs verwendet, die speziell für Sprachzwecke entwickelt wurden, bei denen der Frequenzbereich und die Variation tendenziell minimal sind, sodass die CBR-Kodierung ohne unhaltbare Schwankungen in der Audioqualität funktioniert.

#### Variable Bitrate

**Variable Bitrate** (**VBR**) Kodierung arbeitet, indem sie als Eingabe in den Encoder eine **konstante Qualitäts**einstellung akzeptiert. Diese gibt ein Qualitätsniveau an, das während der gesamten Dauer des Audios beibehalten wird, wodurch die Bitrate schwanken kann, um dieses Qualitätsniveau zu erreichen. In Bereichen des Sounds, in denen die Komprimierung leicht bei minimaler Auswirkung auf die Qualität erreicht werden kann, kann die Bitrate sehr niedrig sein, während sie in Bereichen, in denen die Komprimierung komplexer ist, höher sein wird.

### Audiofrequenzbandbreite

Einige Codecs erlauben es Ihnen, die Audiofrequenzbandbreite direkt zu konfigurieren, entweder indem Sie den Frequenzbereich angeben, der zulässig ist, indem Sie obere und/oder untere Frequenzgrenzen festlegen oder indem Sie einen Audiotyp angeben, der bestimmt, wie der Algorithmus basierend auf der erwarteten Frequenznutzung des Eingangssignals konfiguriert werden soll.

Darüber hinaus unterstützen einige Codecs spezielle Kanäle mit begrenzter Frequenzbandbreite, wie den LFE-Kanal, der die verfügbare Frequenzbandbreite von Natur aus einschränkt. Im Falle von LFE ist die Audiofrequenzbandbreite auf einen Frequenzbereich beschränkt, der für die Verwendung durch einen Subwoofer oder ein ähnliches Audio-Erlebniserweiterungsgerät geeignet ist.

Einige Codecs bieten spezielle Profile, die speziell für bestimmte Anwendungsszenarien gedacht sind, wie VoIP; diese Profile können standardmäßig auch Einschränkungen der Audiofrequenzbandbreite enthalten.

### Joint Stereo

Stereo-Sound wird typischerweise durch Audio-Frames dargestellt, die einen Sample pro Kanal enthalten. Dies führt zu Audio-Frames, die jeweils 2 mal _sampleSize_ Bits benötigen, wobei _sampleSize_ die Anzahl der Bits ist, die jedes Audiosample einnimmt. Daher werden für eine 16-Bit-Stereoaufnahme jeweils 2 mal 16, also 32 Bits pro Sample benötigt. Dies ist das Standard-Links/Rechts (L/R) Stereo oder **einfaches Stereo**.

**Joint Stereo** ist eine Methode, um Stereo-Audiosamples platzsparender zu speichern, indem berücksichtigt wird, dass der Klang, der in jedes Ohr eindringt, normalerweise ähnlich ist. Daher speichert man anstatt jedes einzelne bisschen jedes Kanalsamples eine Grundamplitude und einen Kanalamplitudenabweichungswert, bei dem der Abweichungswert möglicherweise weniger Bits als ein vollständiges Sample benötigt.

Es gibt zwei Arten von Joint Stereo: Mid-Side und Intensity. Im Laufe eines Audiodatei kann der Encoder auf der Grundlage des Stereo-Codings wechseln, das im Laufe des Audiodatei verwendet wird.

#### Mid-Side Stereo Kodierung

**Mid-Side Stereo Kodierung** (**MS**) arbeitet, indem es Frames aufnimmt, die einen grundlegenden **Mid-Kanal** enthalten, der die durchschnittliche Amplitude der ursprünglichen linken und rechten Audio-Kanäle ist. Dies ist im Wesentlichen das, was Sie als Amplitude berechnen würden, wenn Sie ein Stereo-Signal in Mono umwandeln. Dann speichert man den **Side-Kanal**-Wert; dieser Wert ist eine Zahl, die zur Berechnung der ursprünglichen Amplitude des linken Kanals zum **Mid-Kanal**-Wert hinzugefügt und zur Berechnung des ursprünglichen Werts des rechten Kanals vom Mid-Kanal-Wert abgezogen werden kann.

Mit anderen Worten, gegeben einem linken Kanal, L, und einem rechten Kanal, R, führen Sie die folgenden Berechnungen bei der Kodierung eines Samples durch:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi mathvariant="italic">mid</mi><mo>=</mo><mfrac><mrow><mi>L</mi><mo>+</mo><mi>R</mi></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">mid = \frac { L + R }{ 2 } </annotation></semantics>
</math>
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi mathvariant="italic">side</mi><mo>=</mo><mfrac><mrow><mi>L</mi><mo>-</mo><mi>R</mi></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">side = \frac { L - R }{ 2 }</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Dann speichern Sie die Werte von `mid` und `side`. Während `mid` immer noch die gleiche Größe wie Ihre Sample-Große hat (wie 16 Bits), kann der Wert von `side` wahrscheinlich in einer kleineren Anzahl von Bits gespeichert werden, da die Amplitude der beiden Kanäle wahrscheinlich relativ ähnlich ist. Der Encoder kann dann diese kleinere Anzahl von gesamten Bits pro Frame verwenden und zusätzliche Berechnungen durchführen, um die Größe weiter zu reduzieren.

Während der Dekodierung des Audios werden die absoluten linken und rechten Kanalwerte so berechnet:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>L</mi><mo>=</mo><mi mathvariant="italic">mid</mi><mo>+</mo><mi mathvariant="italic">side</mi></mrow><annotation encoding="TeX">L\quad =\quad mid\quad +\quad side</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>R</mi><mo>=</mo><mi mathvariant="italic">mid</mi><mo>-</mo><mi mathvariant="italic">side</mi></mrow><annotation encoding="TeX">L\quad =\quad mid\quad -\quad side</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

An sich ist Mid-Side Stereo Kodierung verlustfrei und wird häufig von sowohl verlustfreien als auch verlustbehafteten Audio-Codecs verwendet. Jeglicher Detailverlust kommt durch andere Schritte des Kodierungsprozesses.

#### Intensity Stereo Kodierung

**Intensity Stereo Kodierung** verringert die kodierte Audio-Bitrate, indem sie die Art und Weise ausnutzt, wie Menschen die Position von Klängen im Raum bestimmen; dies wird als [Klanglokalisierung](https://en.wikipedia.org/wiki/Sound_localization) bezeichnet. Wir hören in Stereo, weil unsere Ohren einen Ton zu unterschiedlichen Zeiten feststellen, je nachdem, woher der Ton kommt.

Das liegt daran, dass unsere Ohren durch mehrere Zentimeter getrennt sind, da sie sich auf gegenüberliegenden Seiten unseres Kopfes befinden. Ein Ton, der von rechts kommt, erreicht unser rechtes Ohr, bevor er unser linkes Ohr erreicht. Unsere Gehirne bestimmen, wo der Ton im Raum um uns herum ist, indem sie diesen Zeitunterschied verwenden, um den Winkel zu ermitteln, aus dem der Ton kommt. Aber wenn die Frequenz des Audiosignals sinkt, steigt die Wellenlänge. Schließlich nähert sich die Wellenlänge der Entfernung zwischen den Ohren und überschreitet diese dann, und es wird schwierig oder unmöglich, den Ton eindeutig zu lokalisieren.

Mit diesem Wissen können wir ein Stereoaudiosignal ungefähr darstellen, indem wir die Frequenzen zusammenführen, die nicht zur Bestimmung der Richtung verwendet werden, zu einem einzelnen Kanal und dann Informationen hinzufügen, die die Richtung des Klangs anzeigen. Dies erfordert weniger Bits zur Darstellung, ist jedoch von Natur aus etwas verlustbehaftet.

## Siehe auch

- [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Audio_codecs)
