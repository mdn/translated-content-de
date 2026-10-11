---
title: Grundlagen digitaler Audiosignale
slug: Web/Media/Guides/Formats/Audio_concepts
l10n:
  sourceCommit: 4954cf900f039e0cd9a0703dae742aea2663823c
---

Die digitale Darstellung von Audio umfasst mehrere Schritte und Verfahren. Sowohl für rohe Audiodaten als auch für die codierten oder komprimierten Audiodaten, die tatsächlich im Web verwendet werden, stehen verschiedene Formate zur Verfügung. Dieser Leitfaden gibt einen Überblick darüber, wie Audio digital dargestellt wird und wie Codecs Audio für die Verwendung im Web codieren und decodieren.

## Abtastung von Audio

Audio ist in der natürlichen Welt grundsätzlich analog. Wenn ein Objekt schwingt, versetzt es auch die umgebenden Moleküle in Schwingung. Diese wirken wiederum auf benachbarte Moleküle ein, sodass sich die Schwingung als Welle von der Quelle aus nach außen ausbreitet, bis ihre Amplitude (die Lautstärke) mit zunehmender Entfernung abnimmt. Die kleinste Einheit einer realen Schallwelle ist somit ein einzelnes Molekül des Mediums, durch das sie sich ausbreitet.

Auf der Erde breitet sich Schall überwiegend durch die Luft aus. Manche Schallwellen bewegen sich durch Wasser oder sogar durch das Gestein, aus dem die Erde besteht – wenn Sie jemals das Grollen oder Donnern eines Erdbebens gehört haben, haben Sie dieses Phänomen erlebt. Fast alle Geräusche des Alltags gelangen jedoch durch die Luft zu Ihren Ohren.

Die Geräusche, die ein Mensch täglich hört, sind also Schwingungen der Luft, die Vorgänge im Inneren des Ohrs auslösen. Je weiter sich die Luftmoleküle bei jedem Impuls der Welle bewegen, desto größer ist die Amplitude der Welle und desto lauter ist der Ton. Je schneller die Moleküle schwingen, desto höher ist die Frequenz der Welle.

Je größer die Amplitude (Höhe) der Welle ist, desto lauter ist der Ton in diesem Moment. Je kürzer die Wellenlänge ist (je näher die Wellenberge beieinanderliegen), desto höher ist die Frequenz beziehungsweise Tonhöhe des erzeugten Tons.

![Eine Schallwellenform](audio-waveform.svg)

Computer arbeiten dagegen digital. Damit sie eine Schallwelle verarbeiten können – und erst recht, um sie über ein Netzwerk zu übertragen –, muss der Schall in eine digitale Form umgewandelt werden. Dieser Vorgang heißt **Analog-Digital-Wandlung** (kurz **A/D-Wandlung**).

Der erste Faktor, der die Wiedergabetreue des erfassten Audios beeinflusst, ist die **Audiobandbreite**: der Bereich der Audiofrequenzen, den der A/D-Wandler erfassen und in eine digitale Form umwandeln kann. Die Audiobandbreite wird auch durch den Codec beeinflusst, falls dieser bei der Codierung bestimmte Frequenzbänder verwirft.

Schall gelangt über ein Mikrofon oder einen anderen Eingang als Elektronenstrom in den Computer. Dessen Spannung schwankt entsprechend der Amplitude der Schallwelle. Eine Schaltung wandelt dieses analoge Signal dann in eine digitale Form um: Sie erfasst die Amplitude der eintreffenden Welle in regelmäßigen Abständen und wandelt die Messwerte in Zahlen um, die das Audioaufzeichnungssystem verarbeiten kann. Jeder dieser erfassten Zeitpunkte ist ein **Sample**. Aneinandergereiht ergeben die Samples eine Annäherung an die ursprüngliche Welle, wie die folgende Abbildung zeigt.

![Eine Audiowellenform, die in regelmäßigen Abständen abgetastet wird](audio-waveform-samples1.svg)

In diesem Beispiel stellt die blaue Linie die Samples der schwarzen Audiowellenform dar. Die Schaltung des A/D-Wandlers liest in regelmäßigen Abständen die Spannung des Signals als Wert zwischen –1,0 und +1,0 aus. Da sich die Amplitude innerhalb eines solchen Zeitabschnitts verändert, muss der A/D-Wandler einen Wert auswählen, der den Abschnitt repräsentiert. Dazu kann er den Wert zu einem bestimmten Zeitpunkt verwenden – in der Abbildung oben ist das die Mitte jedes Abschnitts – oder die Amplitude über die Dauer des Samples mitteln. Diese Samplewerte werden als Amplitude der Wellenform zum jeweiligen Zeitpunkt aufgezeichnet.

Wenn der Ton später wiedergegeben wird, dienen diese Amplituden dazu, eine Annäherung an die ursprüngliche Wellenform zu erzeugen. Statt einer exakten Kopie der ursprünglichen, glatten Welle wird die gröbere blaue Welle wiedergegeben.

Je häufiger das ursprüngliche Audiosignal abgetastet wird, desto genauer lässt es sich annähern. Die Anzahl der Samples pro Sekunde heißt **Abtastrate**. Betrachten Sie die Welle oben: Wie anders sähe die blaue, digitale Welle aus, wenn doppelt so häufig Samples genommen würden? Oder zehnmal so häufig? Je mehr Samples erfasst werden, desto glatter wird die Welle.

## Audiodatenformate und -struktur

Auf der grundlegendsten Ebene wird Audio als Folge von Samples dargestellt. Jedes Sample gibt die Amplitude der Audiowellenform an, die für einen bestimmten Abschnitt der gesamten Wellenform des Audiosignals gemessen wurde. Für einzelne Samples innerhalb einer Audiodatei werden verschiedene Formate verwendet. Die meisten Audiodateien verwenden vorzeichenbehaftete 16-Bit-Ganzzahlen für jedes Sample; andere verwenden 32-Bit-Gleitkommazahlen oder 24- beziehungsweise 32-Bit-Ganzzahlen. Einige ältere Audiodateiformate, die im Web nicht mehr verwendet werden, nutzten 8-Bit-Ganzzahlen als Samples. Samples können außerdem vorzeichenbehaftete oder vorzeichenlose Werte verwenden. Die Größe eines einzelnen Samples heißt **Samplegröße**.

Die Position jeder Audioquelle innerhalb des Audiosignals wird durch einen **Kanal** repräsentiert. Jeder Kanal enthält ein Sample, das die Amplitude des von dieser Quelle zu einem bestimmten Zeitpunkt erzeugten Audios angibt. Bei Stereoton gibt es beispielsweise zwei Audioquellen: einen Lautsprecher links und einen rechts. Jede davon wird durch einen Kanal repräsentiert. Die Anzahl der Kanäle in einem Audiosignal heißt **Kanalanzahl**.

Beim Aufzeichnen oder Erzeugen mehrkanaliger Audiodateien werden die Kanäle zu einer Folge von **Audioframes** zusammengefasst. Jeder Frame enthält ein Sample für jeden Audiokanal. Ein einzelnes Sample ist ein numerischer Wert, der die Amplitude der [Wellenform](https://en.wikipedia.org/wiki/Waveform) zu einem bestimmten Zeitpunkt repräsentiert und in verschiedenen Formaten vorliegen kann.

Stereo ist wahrscheinlich die am häufigsten verwendete Kanalanordnung für Audio im Web. Für die meisten alltäglichen Audioanwendungen werden heute 16-Bit-Samples verwendet. Bei 16-Bit-Stereo-Audio wird jedes Sample des analogen Signals als zwei 16-Bit-Ganzzahlen aufgezeichnet: eine für den linken und eine für den rechten Kanal. Damit benötigt jedes Sample 32 Bit Speicher. Bei der üblichen Abtastrate von 48 kHz (48.000 Samples pro Sekunde) belegt eine Sekunde Audio 192 kB Speicher. Ein typisches dreiminütiges Lied benötigt somit etwa 34,5 MB. Das ist viel Speicherplatz und, schlimmer noch, eine enorme Menge an Netzwerkbandbreite für ein relativ kurzes Audiostück. Deshalb werden die meisten digitalen Audiodaten komprimiert.

Audio wird mithilfe eines Audio-**{{Glossary("codec", "Codecs")}}** (**CO**der/**DE**coder) codiert und decodiert, um es zu komprimieren und zu dekomprimieren. Im Laufe der Jahre wurden viele verschiedene Codecs entwickelt, von denen einige im Web häufig verwendet werden. Einzelheiten zu den wichtigsten Codecs, mit denen Webentwickler vertraut sein sollten, finden Sie im Artikel [Leitfaden zu Audio-Codecs im Web](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

### Audiokanäle und Frames

Es gibt zwei Arten von Audiokanälen. Standard-Audiokanäle geben den Großteil des hörbaren Tons wieder. Die linken und rechten Hauptkanäle sowie alle Surround-Lautsprecher – etwa der mittlere Kanal, die hinteren linken und rechten Kanäle, die seitlichen Kanäle und die Deckenkanäle – sind Standard-Audiokanäle. Spezielle **Low-Frequency-Enhancement-Kanäle** (**LFE**) liefern das Signal für Lautsprecher, die tieffrequente Töne und Vibrationen erzeugen und so beim Hören ein körperlich spürbares Klangerlebnis schaffen. LFE-Kanäle steuern üblicherweise Subwoofer und ähnliche Geräte an.

Mono-Audio hat einen Kanal, Stereoton zwei Kanäle und 5.1-Surround-Sound sechs Kanäle (fünf Standardkanäle und einen LFE-Kanal). Jeder Audioframe ist ein Datensatz, der die Samples aller Kanäle eines Audiosignals enthält. Die Größe eines Audioframes ergibt sich aus der Samplegröße in Byte, multipliziert mit der Anzahl der Kanäle. Ein einzelner Frame mit 16-Bit-Stereo-Audio ist somit 4 Byte groß; ein Frame mit 5.1-Audio aus Gleitkomma-Samples ist 24 Byte groß (4 Byte pro Sample × 6 Kanäle).

> [!NOTE]
> Einige Codecs trennen den linken und rechten Kanal tatsächlich und speichern sie in separaten Blöcken ihrer Datenstruktur. Ein Audioframe umfasst jedoch immer sämtliche Daten aller verfügbaren Kanäle.

Wie viele Frames eine Sekunde Audio umfasst, hängt von der Abtastrate ab, mit der der Ton aufgezeichnet wurde. Die Abtastrate entspricht der Anzahl der Abschnitte, in die eine Schallwelle pro Sekunde unterteilt wird. Daher wird sie manchmal als Frequenz betrachtet – im Sinne eines regelmäßig wiederkehrenden Vorgangs, nicht als tatsächliche Audiofrequenz. Die Anzahl der Samples pro Sekunde wird deshalb in [Hertz](https://en.wikipedia.org/wiki/Hertz) angegeben.

Die gebräuchlichsten Abtastraten sind:

- 8000 Hz
  - : Der internationale Standard [G.711](https://en.wikipedia.org/wiki/G.711) für Audio in der Telefonie verwendet eine Abtastrate von 8000 Hz (8 kHz). Das reicht aus, damit menschliche Sprache verständlich ist.
- 44100 Hz
  - : Eine Abtastrate von 44,1 kHz wird für Audio auf Compact Discs (CDs) verwendet. CDs bieten unkomprimierten 16-Bit-Stereoton mit 44,1 kHz. Auch Computeraudio verwendet diese Frequenz häufig standardmäßig.
- 48000 Hz
  - : Audio auf DVDs wird mit 48 kHz aufgezeichnet. Diese Abtastrate wird auch häufig für Computeraudio verwendet.
- 96000 Hz
  - : Hochauflösendes Audio.
- 192000 Hz
  - : Audio mit ultrahoher Auflösung. Noch nicht weit verbreitet, was sich mit der Zeit jedoch ändern wird.

Es gibt einen Grund, warum 44,1 kHz als minimale Abtastrate für „High Fidelity“ gelten. Das [Nyquist-Shannon-Abtasttheorem](https://en.wikipedia.org/wiki/Nyquist-Shannon_sampling_theorem) besagt, dass ein Ton für eine genaue Reproduktion mit mindestens der doppelten Frequenz seiner eigenen Frequenz abgetastet werden muss. Da der menschliche Hörbereich ungefähr von 20 Hz bis 20.000 Hz reicht, ist für die Wiedergabe der höchsten Töne, die Menschen im Allgemeinen hören können, eine Abtastrate von mehr als 40.000 Hz erforderlich.

Um einem [Tiefpassfilter](https://en.wikipedia.org/wiki/Low-pass_filter) zusätzlichen Spielraum zu geben und Verzerrungen durch [Aliasing](https://en.wikipedia.org/wiki/Aliasing) zu vermeiden, wird zur Frequenz vor der Abtastung ein zusätzliches [Übergangsband](https://en.wikipedia.org/wiki/Transition_band) von 2,05 kHz addiert. Daraus ergeben sich 22.050 Hz. Die Verdopplung gemäß dem Nyquist-Theorem führt zu einer minimalen Abtastrate von – Sie ahnen es – 44,1 kHz.

Hochauflösendes Audio (96 kHz) wird in einigen hochwertigen Audiosystemen verwendet. Sowohl dieses als auch Audio mit ultrahoher Auflösung (192 kHz) ist für das Audio-Mastering nützlich. Dabei wird möglichst hohe Qualität benötigt, während der Ton bearbeitet und verändert wird, bevor er auf die Abtastrate des Endprodukts heruntergerechnet wird. Das ähnelt der Arbeit von Fotografen, die hochauflösende Bilder bearbeiten und zusammensetzen, bevor sie Kunden ein für eine Website geeignetes JPEG liefern.

### Audiodateigröße und Netzwerkbandbreite

Wenn Sie die Größe eines Audioframes und die Anzahl der Frames pro Sekunde kennen, können Sie leicht berechnen, wie viel Speicherplatz die rohen Audiodaten selbst belegen – und damit, wie viel Bandbreite sie in einem Netzwerk beanspruchen würden.

Betrachten Sie beispielsweise einen Stereo-Audioclip (also mit zwei Audiokanälen), der mit einer Samplegröße von 16 Bit (2 Byte) und einer Abtastrate von 48 kHz aufgezeichnet wurde:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mn>2</mn><mo>×</mo><mn>2</mn><mfrac><mrow><mi>bytes</mi></mrow><mrow><mi>sample</mi></mrow></mfrac><mo>×</mo><mn>48000</mn><mfrac><mrow><mi>samples</mi></mrow><mrow><mi>second</mi></mrow></mfrac><mo>=</mo><mn>192000</mn><mfrac><mrow><mi>bytes</mi></mrow><mrow><mi>second</mi></mrow></mfrac><mo>=</mo><mn>192</mn><mi>kBps</mi></mrow><annotation encoding="TeX">2 \times 2\frac { bytes }{ sample } \times 48000\frac { samples }{ second } = 192000\frac { bytes }{ second } = 192 kBps</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Schon ein einzelner Audiostream mit 192 kBps kann Netzwerke mit geringerer Bandbreite stark belasten. Wenn das Netzwerk gleichzeitig andere Aufgaben erfüllt, tritt das Problem auch in Netzwerken mit höherer Bandbreite auf. Angesichts der vielen konkurrierenden Anforderungen an die Netzwerkkapazität – insbesondere in langsameren Netzwerken – kann diese Datenmenge für Echtzeitanwendungen zu groß sein.

Um dieses Problem zu lösen, müssen die Audiodaten komprimiert werden.

> [!NOTE]
> Die Netzwerkbandbreite ist selbstverständlich nicht dasselbe wie die Audiobandbreite, die oben unter [Abtastung von Audio](#abtastung_von_audio) erläutert wird.

## Grundlagen der Audiokomprimierung

Anders als Text und viele andere Datenarten sind Audiodaten meist **verrauscht**. Das bedeutet, dass die Daten nur selten aus exakt wiederholten Bytes oder Bytefolgen bestehen. Daher lassen sich Audiodaten mit herkömmlichen Algorithmen nur schwer komprimieren, etwa mit denen allgemeiner Werkzeuge wie `zip`. Diese ersetzen gewöhnlich wiederkehrende Datenfolgen durch eine kürzere Darstellung.

Für die Komprimierung von Audio gibt es mehrere Verfahren. Die meisten Codecs kombinieren einige davon und verwenden möglicherweise weitere Techniken.

Die einfachste Maßnahme ist ein Filter, der Rauschen und leise Geräusche entfernt, stille Abschnitte erzeugt und das Signal glättet. So können längere stille Passagen sowie andere wiederkehrende oder nahezu wiederkehrende Signale entstehen, die sich verkürzen lassen.

Ein Filter kann außerdem die Audiobandbreite einschränken und nicht benötigte Audiofrequenzen entfernen. Das ist besonders bei Audiosignalen nützlich, die ausschließlich Sprache enthalten. Dadurch werden Daten entfernt, und das resultierende Signal lässt sich tendenziell leichter komprimieren.

### Psychoakustik

Wenn Sie wissen, welche Art von Audio Sie voraussichtlich verarbeiten, können Sie möglicherweise spezielle Filterverfahren einsetzen, die genau für diese Art von Ton geeignet sind und die Codierung optimieren.

Die am häufigsten verwendeten Verfahren zur Audiokomprimierung nutzen Erkenntnisse der **[Psychoakustik](https://en.wikipedia.org/wiki/Psychoacoustics)**. Sie untersucht, wie Menschen Schall wahrnehmen und welche Teile der hörbaren Audiofrequenzen – abhängig vom Kontext und Inhalt eines Tons – für unsere Reaktion darauf besonders wichtig sind. Ein Codec kann dabei Faktoren wie die Wahrnehmbarkeit von Frequenzänderungen, den menschlichen Hörbereich im Verhältnis zu den Frequenzen des Audiosignals oder die räumliche Ortung von Schall berücksichtigen.

Mit einem fundierten Verständnis der Psychoakustik lässt sich ein Komprimierungsverfahren entwickeln, das die Größe der komprimierten Audiodaten minimiert und zugleich die wahrgenommene Wiedergabetreue maximiert. Ein psychoakustischer Algorithmus kann beliebige der hier genannten Techniken einsetzen und wird mit hoher Wahrscheinlichkeit weitere verwenden.

Daraus ergibt sich eine grundlegende Frage, die vor der Wahl eines Codecs beantwortet werden muss: Ist es angesichts des Audioinhalts, des Nutzungskontexts und der Zielgruppe akzeptabel, einen gewissen Verlust an Wiedergabetreue hinzunehmen? Wenn ja, wie groß darf dieser sein? Oder muss das Ergebnis nach dem Decodieren mit dem ursprünglichen Audio identisch sein?

### Verlustbehaftete und verlustfreie Komprimierung

Wenn ein Verlust an Details oder möglicherweise an Wiedergabetreue nicht akzeptabel oder unerwünscht ist, sollten Sie einen **verlustfreien** Codec verwenden. Ist eine gewisse Verringerung der Wiedergabetreue dagegen akzeptabel, kommt ein **verlustbehafteter** Codec infrage. Verlustbehaftete Komprimierung erzeugt im Allgemeinen deutlich kleinere Dateien als verlustfreie Verfahren. Viele verlustbehaftete Codecs liefern zudem hervorragende Ergebnisse: Für durchschnittliche Hörer ist der Verlust an Qualität und Details schwer oder sogar unmöglich zu erkennen.

> [!NOTE]
> Auch wenn durchschnittliche Hörer die Auswirkungen eines hochwertigen verlustbehafteten Komprimierungsalgorithmus auf die Klangqualität möglicherweise kaum bemerken, haben manche Menschen ein außergewöhnlich gutes Gehör oder erkennen die Veränderungen, die solche Verfahren bei Musik verursachen, besonders gut.

Die meisten Audio-Codecs verwenden eine Form der verlustbehafteten Komprimierung, da diese Algorithmen bessere Komprimierungsraten bieten. Während verlustfreie Verfahren die Daten meist nur auf etwa 40–50 % der Größe des ursprünglichen, unkomprimierten Audios reduzieren können, erreichen moderne verlustbehaftete Verfahren je nach Komplexität des Audios etwa 5–20 % der ursprünglichen Größe. Die deutlich höheren Komprimierungsraten machen verlustbehaftete Komprimierung meist zu einer attraktiven Wahl. Mit einer geeigneten Codec-Konfiguration lässt sich dabei eine angemessene bis hervorragende Audioqualität erzielen.

Forschende entwickeln laufend bessere Methoden zur Analyse und Komprimierung von Audio. Daher erscheinen regelmäßig neue Formate, die Verbesserungen bei der Komprimierungsrate, der Wiedergabetreue oder beidem bieten.

Zu den Anwendungsfällen für verlustfreies Audio gehören:

- Situationen, in denen Zuhörer eine präzise Audiowiedergabe erwarten und möglicherweise feinste Details unveränderten Audios heraushören können
- Audio-Loops und Samples für die Produktion von Musik und Soundeffekten
- Situationen, in denen Audioclips oder Samples neu abgemischt und anschließend komprimiert werden: Die Verwendung verlustfreien Audios beim Mastering verhindert, dass bereits komprimierte Daten erneut komprimiert werden und dadurch zusätzliche Qualitätsverluste entstehen

Für verlustbehaftete Komprimierung können folgende Faktoren sprechen:

- Sehr große ursprüngliche Audiodaten
- Begrenzter Speicherplatz – entweder weil wenig Platz verfügbar ist oder weil große Mengen Audio gespeichert werden müssen
- Die Notwendigkeit, die für die Audioübertragung benötigte Netzwerkbandbreite zu begrenzen; das ist besonders für Livestreams und Telefonkonferenzen wichtig

## Einführung in die Psychoakustik

Eine ausführliche Darstellung der Psychoakustik und der Funktionsweise von Audiokomprimierung würde den Rahmen dieses Artikels sprengen. Ein grundlegendes Verständnis dafür, wie gängige Algorithmen Audio komprimieren, hilft jedoch dabei, Audio-Codecs besser zu verstehen und auszuwählen.

Verlustbehaftete Komprimierungsalgorithmen nutzen in der Regel psychoakustische Erkenntnisse, um zu bestimmen, welche Bestandteile einer Audiowellenform entfernt oder abgeschwächt werden können. Ziel ist eine bessere Komprimierungsrate bei möglichst geringen hörbaren Auswirkungen für die Zielgruppe. Wird die Wellenform so verändert, dass sie sich leichter komprimieren lässt, oder werden kaum hörbare Bestandteile entfernt, wird sie einfacher. Die resultierenden Daten weisen mehr Regelmäßigkeiten auf und lassen sich deshalb leichter komprimieren. Auch eine Beschränkung der Audiobandbreite auf die Frequenzen, die für die Wahrnehmung des decodierten Tons besonders wichtig sind, kann die Komprimierung verbessern.

Die Art des codierten Inhalts kann die Wahl des Codecs beeinflussen. Insbesondere ist die Wellenform von Musik fast immer komplexer als die einer Audioaufnahme, die ausschließlich menschliche Stimmen enthält. Außerdem nutzt die menschliche Stimme nur einen kleinen Teil des Frequenzbereichs, den das menschliche Ohr wahrnehmen kann.

> [!NOTE]
> Telefonnetze wurden ursprünglich speziell für die Übertragung menschlicher Stimmen entwickelt. Sie können Audio (oder andere Signale) nur im Frequenzband von 300 Hz bis 3.400 Hz übertragen. Damit wird der untere Bereich menschlicher Sprache nicht vollständig abgedeckt. Es bleiben jedoch genügend Obertöne erhalten, sodass Ohr und Gehirn dies leicht ausgleichen können. Menschen sind es daher im Allgemeinen auch gewohnt, Sprache mit einer derart eingeschränkten Audiobandbreite zu hören.

Menschliche Sprache nutzt ein vergleichsweise schmales Frequenzband (etwa 90 Hz bis 18.000 Hz, wobei der genaue Bereich unter anderem je nach Geschlecht und von Person zu Person variiert). Zudem liegen die Obertöne der überwiegenden Mehrheit menschlicher Sprachlaute ungefähr zwischen 300 Hz und 3.400 Hz. Daher lassen sich erhebliche Teile der gesamten Wellenform entfernen, ohne die Verständlichkeit der gesprochenen Wörter zu beeinträchtigen. Die Audiobandbreite kann sogar an die Tonhöhe der Stimme einer bestimmten Person angepasst werden.

Aufgrund all dieser Faktoren und weil Sprachwellenformen gewöhnlich weniger komplex sind als Musik, lässt sich Sprache mit einer relativ niedrigen Bitrate in hoher – genauer gesagt: ausreichend hoher – Wiedergabetreue reproduzieren.

Wenn ein Algorithmus für die Komprimierung allgemeiner Audiodaten eine Wellenform analysiert, kann er alles außerhalb des menschlichen Hörbereichs verwerfen. Je nachdem, wie viel Detailverlust an den Rändern des Frequenzbands der Algorithmus in Kauf nimmt, kann er möglicherweise noch mehr entfernen. Das bedeutet, dass der Codec Audiodaten unter etwa 20 Hz oder über etwa 20.000 Hz (20 kHz) verwerfen kann. Dadurch wird die Audiobandbreite eingeschränkt und die Datenmenge verringert, die zur Darstellung des komprimierten Signals erforderlich ist. Zwar lässt sich die Bandbreite nicht annähernd so stark reduzieren wie bei einem reinen Sprach-Codec, doch ist dies bereits ein hilfreicher Anfang.

Manche Menschen können Frequenzen außerhalb dieses Bereichs in gewissem Maß hören. Häufiger ist die Fähigkeit, hohe Frequenzen wahrzunehmen, jedoch geringer. Besonders bemerkenswert ist, dass die obere Grenze des Hörbereichs bis zum mittleren Lebensalter meist von 20 kHz auf etwa 12 bis 14 kHz sinkt. Das deutet darauf hin, dass höhere Frequenzen oft entfernt werden können, ohne die Verständlichkeit des Tons übermäßig zu beeinträchtigen. So müssen deutlich weniger Audiodaten erhalten bleiben, und der Ton wird einfacher zu komprimieren.

Die folgende Abbildung veranschaulicht dies. Sie vergleicht den menschlichen Hörbereich (grün) mit dem Frequenzbereich menschlicher Sprache (rot) und dem Bereich, in dem die meisten menschlichen Lautäußerungen liegen (gelb).

![Diagramm zum Vergleich des menschlichen Hörbereichs mit dem Frequenzbereich menschlicher Sprache](human-hearing-range.svg)

Die großen Unterschiede zwischen diesen Bereichen bieten Spielraum, Details in Audiodaten zu entfernen, ohne dass das menschliche Ohr eine wesentliche Veränderung der Audioqualität wahrnimmt. Bei der Audiokomprimierung lässt sich dies nutzen.

Zusätzlich zur Vereinfachung des Tons durch psychoakustische Analyse verwenden Codecs weitere Algorithmen und Transformationen, um die Audiodaten noch stärker zu vereinfachen und zu verkleinern. Wenn Sie mehr über die Komprimierung von Audio erfahren möchten, lesen Sie den Wikipedia-Artikel [Audiodatenkomprimierung](https://en.wikipedia.org/wiki/Data_compression#Audio).

Wichtig ist: Die Codecs übernehmen die schwierige Arbeit für Sie. Deshalb fließen so viel Entwicklungsarbeit und wissenschaftliche Forschung in neue Algorithmen und Codecs. Sie müssen lediglich die verfügbaren Optionen und Ihren Anwendungsfall berücksichtigen und dann einen geeigneten Codec auswählen.

> [!NOTE]
> Einen ausführlicheren Leitfaden zur Auswahl von Audio-Codecs finden Sie unter [Einen Audio-Codec auswählen](/de/docs/Web/Media/Guides/Formats/Audio_codecs#choosing_an_audio_codec).

## Parameter verlustfreier Encoder

Bei verlustfreien Encodern ist der Spielraum für Veränderungen am Audio zur Verbesserung der Komprimierungsrate deutlich kleiner, da sich das ursprüngliche Audio exakt wiederherstellen lassen muss. Entsprechend gibt es weniger Konfigurationsmöglichkeiten. Diese betreffen meist die Wahl des Codierungsverfahrens und die Zeit sowie Rechenleistung, die der Encoder dafür aufwenden darf.

Die Parameter hängen vom Codec ab, können aber Folgendes umfassen:

- Die Festlegung bestimmter Algorithmen für einzelne Phasen des Codierungsprozesses
- Parameter für diese Algorithmen, etwa die Tiefe der Vorhersage beim Modellieren des Audios
- Die Anzahl der Durchläufe bei der Audioanalyse oder die Häufigkeit, mit der bestimmte Algorithmen ausgeführt werden

## Parameter verlustbehafteter Encoder

Die meisten Codecs bieten Eingabewerte, mit denen sich die Komprimierung auf unterschiedliche Weise hinsichtlich Dateigröße oder Qualität optimieren lässt. Bei einem verlustbehafteten Encoder gilt: Je höher die Qualität, desto größer sind die codierten Audiodaten. Daher beeinflussen die meisten Optionen sowohl die Qualität als auch die Größe.

Welche Optionen verfügbar sind, erfahren Sie in der Dokumentation Ihrer Codierungssoftware. Sie hängen sowohl vom Codec als auch von der Software ab. Manche Codecs bieten zahlreiche einstellbare Werte, deren Bedeutung zum Teil ein tiefes Verständnis der Psychoakustik und der Codec-Algorithmen erfordert. Andere bieten einen Parameter für die „Qualität“, der verschiedene Eigenschaften des Algorithmus automatisch anpasst.

### Bitrate

Es gibt zwei sich gegenseitig ausschließende Möglichkeiten, die Qualität komprimierten Audios über die Bitrate zu steuern. Bei der ersten wird eine durchschnittliche Bitrate für die codierten Daten angestrebt. Bei der zweiten wird ein konstanter Zielwert für die Qualität festgelegt, während die Bitrate variieren darf.

#### Durchschnittliche Bitrate

Die erste Möglichkeit, die Qualität der Ausgabedatei zu steuern, besteht darin, bei der Codierung eine **durchschnittliche Bitrate** (**Average Bit Rate**, **ABR**) als Zielwert anzugeben. Der Encoder versucht, eine Audiodatei zu erzeugen, die bei der Wiedergabe im Durchschnitt die angegebene Anzahl an Bits pro Sekunde Audio benötigt. So wird die Qualität über die Größe der codierten Audiodaten gesteuert: Je höher die Bitrate, desto höher die resultierende Audioqualität. Um die angestrebte Bitrate einzuhalten, schwankt die Audioqualität im Verlauf der Aufnahme nach Bedarf.

**CBR** (**Constant Bit Rate**, konstante Bitrate) ähnelt ABR in gewisser Weise. Während ABR eine bestimmte durchschnittliche Bitrate anstrebt und Schwankungen zulässt, verwendet CBR für die gesamte Dauer des Audios eine tatsächlich feste Bitrate. CBR wird hauptsächlich in Codecs verwendet, die ausschließlich für Sprache entwickelt wurden. Da Frequenzbereich und Schwankungen dort meist gering sind, kann CBR ohne untragbare Schwankungen der Audioqualität eingesetzt werden.

#### Variable Bitrate

Bei der Codierung mit **variabler Bitrate** (**Variable Bit Rate**, **VBR**) erhält der Encoder eine Einstellung für **konstante Qualität**. Sie gibt das Qualitätsniveau vor, das während der gesamten Aufnahme beibehalten werden soll. Die Bitrate kann nach Bedarf schwanken, um dieses Niveau zu erreichen. In Passagen, die sich ohne nennenswerte Qualitätseinbußen leicht komprimieren lassen, kann die Bitrate sehr niedrig sein. In Bereichen, deren Komprimierung schwieriger ist, fällt sie höher aus.

### Audiofrequenzbandbreite

Bei einigen Codecs können Sie die Audiofrequenzbandbreite direkt konfigurieren: durch Angabe des zulässigen Frequenzbereichs, durch Festlegen einer oberen und/oder unteren Frequenzgrenze oder durch Auswahl eines Audioquellentyps. Anhand dieses Typs wird der Algorithmus entsprechend den zu erwartenden Frequenzen des Eingangssignals konfiguriert.

Einige Codecs unterstützen außerdem spezielle Kanäle mit begrenzter Frequenzbandbreite, etwa den LFE-Kanal. Diese beschränken den verfügbaren Frequenzbereich grundsätzlich. Bei LFE ist die Audiofrequenzbandbreite auf einen Bereich begrenzt, der sich für einen Subwoofer oder ein ähnliches Gerät zur Erweiterung des Klangerlebnisses eignet.

Manche Codecs bieten spezielle Profile für bestimmte Anwendungsszenarien wie VoIP. Diese Profile können standardmäßig auch Einschränkungen der Audiofrequenzbandbreite enthalten.

### Joint Stereo

Stereoton wird üblicherweise durch Audioframes dargestellt, die pro Kanal ein Sample enthalten. Jeder Frame benötigt damit 2 × _sampleSize_ Bit, wobei _sampleSize_ die Anzahl der Bits pro Audio-Sample bezeichnet. Bei einer 16-Bit-Stereoaufnahme benötigt jeder Frame somit 2 × 16, also 32 Bit. Dies wird als herkömmliches Links/Rechts-Stereo (L/R) oder **einfaches Stereo** bezeichnet.

**Joint Stereo** speichert Stereo-Audio-Samples platzsparender, indem berücksichtigt wird, dass der Schall an beiden Ohren gewöhnlich ähnlich ist. Statt sämtliche Bits jedes Kanal-Samples zu speichern, werden eine gemeinsame Grundamplitude und ein Abweichungswert für die Amplitude jedes Kanals gespeichert. Für diesen Abweichungswert sind möglicherweise weniger Bits nötig als für ein vollständiges Sample.

Es gibt zwei Arten von Joint Stereo: Mid-Side und Intensity. Der Encoder kann im Verlauf einer Audiodatei wechseln, welches Format zur Darstellung des Stereosignals verwendet wird.

#### Mid-Side-Stereocodierung

Bei der **Mid-Side-Stereocodierung** (**MS**) werden Frames mit einem grundlegenden **Mid-Kanal** aufgezeichnet. Dieser enthält die durchschnittliche Amplitude des ursprünglichen linken und rechten Audiokanals. Das entspricht im Wesentlichen der Amplitude, die beim Umwandeln eines Stereosignals in Mono berechnet würde. Zusätzlich wird der Wert des **Side-Kanals** gespeichert. Wird er zum Wert des Mid-Kanals addiert, ergibt sich die ursprüngliche Amplitude des linken Kanals; wird er davon subtrahiert, ergibt sich der ursprüngliche Wert des rechten Kanals.

Anders ausgedrückt: Für einen linken Kanal L und einen rechten Kanal R werden beim Codieren eines Samples die folgenden Werte berechnet:

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

Anschließend werden die Werte `mid` und `side` gespeichert. Während `mid` weiterhin die volle Samplegröße benötigt, beispielsweise 16 Bit, lässt sich `side` wahrscheinlich mit weniger Bits speichern, weil die Amplituden der beiden Kanäle meist relativ ähnlich sind. Der Encoder kann die geringere Gesamtzahl von Bits pro Frame anschließend durch weitere Berechnungen noch stärker reduzieren.

Beim Decodieren werden die absoluten Werte des linken und rechten Kanals wie folgt berechnet:

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

Mid-Side-Stereocodierung ist für sich genommen verlustfrei und wird sowohl von verlustfreien als auch von verlustbehafteten Audio-Codecs häufig verwendet. Ein möglicher Detailverlust entsteht durch andere Schritte des Codierungsprozesses.

#### Intensity-Stereocodierung

Die **Intensity-Stereocodierung** verringert die Bitrate des codierten Audios, indem sie ausnutzt, wie Menschen die Position von Geräuschen im Raum bestimmen. Dies wird als [Schalllokalisation](https://en.wikipedia.org/wiki/Sound_localization) bezeichnet. Wir hören räumlich, weil ein Geräusch unsere beiden Ohren je nach Richtung zu unterschiedlichen Zeitpunkten erreicht.

Das liegt daran, dass unsere Ohren auf gegenüberliegenden Seiten des Kopfes liegen und mehrere Zentimeter voneinander entfernt sind. Ein Geräusch von rechts erreicht unser rechtes Ohr vor dem linken. Unser Gehirn nutzt diesen Zeitunterschied, um den Winkel zu bestimmen, aus dem das Geräusch kommt, und es so im Raum zu verorten. Mit sinkender Frequenz des Audiosignals nimmt jedoch die Wellenlänge zu. Irgendwann erreicht und überschreitet sie den Abstand zwischen den Ohren. Dann wird es schwierig oder unmöglich, die Richtung des Geräuschs eindeutig zu bestimmen.

Auf dieser Grundlage lässt sich ein Stereo-Audiosignal näherungsweise darstellen, indem Frequenzen, die für die Richtungsbestimmung nicht benötigt werden, in einem einzigen Kanal zusammengeführt werden. Ergänzend werden Informationen über die Richtung des Tons gespeichert. Diese Darstellung benötigt weniger Bits, ist jedoch grundsätzlich mit einem gewissen Verlust verbunden.

## Siehe auch

- [Leitfaden zu Audio-Codecs im Web](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
