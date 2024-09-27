---
title: Digitale Audiokonzepte
slug: Web/Media/Formats/Audio_concepts
l10n:
  sourceCommit: 492065b0932dca9708efd0051bd687b590e3f9d4
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Die Darstellung von Audio in digitaler Form erfordert mehrere Schritte und Prozesse, mit verschiedenen Formaten sowohl für die Roh-Audio-Dateien als auch für die kodierten oder komprimierten Audio-Dateien, die tatsächlich im Web verwendet werden. Dieser Leitfaden bietet einen Überblick darüber, wie Audio digital dargestellt wird und wie Codecs verwendet werden, um Audio für die Nutzung im Web zu kodieren und zu dekodieren.

## Sampling von Audio

Audio ist ein von Natur aus analoges Merkmal der natürlichen Welt. Wenn ein Objekt vibriert, bringt es auch die umgebenden Moleküle zum Vibrieren. Diese Moleküle beeinflussen die benachbarten, wodurch sich die Vibration in Form einer Welle vom Ursprung ausbreitet, bis die Amplitude der Welle (ihre Lautstärke) mit der Entfernung abnimmt. Die Granularität einer Schallwelle in der realen Welt entspricht dann der eines einzelnen Moleküls des Mediums, durch das die Schallwelle reist.

Auf der Erde ist das Medium, durch das die meisten Audio-Signale reisen, die Luft. Einige Audio-Signale reisen durch Wasser oder sogar durch das Gestein des Planeten selbst (wenn Sie jemals das Grollen oder Donnern eines Erdbebens gehört haben, haben Sie dieses Phänomen erlebt), aber fast alle alltäglichen Geräusche gelangen über die Luft zu Ihren Ohren.

Die Geräusche, die ein Mensch täglich hört, sind also eigentlich Vibrationen in der Luft, die das Innenleben des Ohrs beeinflussen. Je weiter sich die Luftmoleküle mit jedem Puls der Welle bewegen, desto höher ist die Amplitude der Welle und desto lauter ist der Ton. Je schneller die Moleküle vibrieren, desto höher ist die Frequenz der Welle.

Je höher die Amplitude (Höhe) der Welle, desto lauter ist der Ton in diesem Moment. Je kürzer die Wellenlänge (je näher die Kämme der Welle beieinander liegen), desto höher ist die Frequenz (oder Tonhöhe) des erzeugten Tones.

![Eine einfache Schallwellenform](audio-waveform.svg)

Computer sind jedoch digital. Um eine Schallwelle in einer Weise darzustellen, die Computer manipulieren und verarbeiten können (geschweige denn über ein Netzwerk übertragen), muss der Ton in eine digitale Form umgewandelt werden. Dieser Prozess wird als **Analog-Digital-Umwandlung** (abgekürzt **A/D**) bezeichnet.

Der erste Faktor, der die Treue des aufgenommenen Audios beeinflusst, ist die **Audio-Bandbreite**; das ist der Frequenzbereich, den der A/D-Wandler erfassen und in digitale Form umwandeln kann. Die Audio-Bandbreite wird auch vom Codec beeinflusst, wenn dieser entscheidet, bestimmte Frequenzbänder beim Kodieren des Tons wegzulassen.

Ton gelangt in den Computer durch ein Mikrofon oder einen anderen Eingang in Form eines Elektronenstroms, dessen Spannung variiert, um die Amplitude der Schallwelle darzustellen. Dieses analoge Signal wird dann von einer Schaltung erfasst, die die Amplitude der eingehenden Welle in regelmäßigen Abständen erfasst und diese Daten in eine vom Audioaufnahmesystem verstandene Zahl umwandelt. Jeder dieser erfassten Momente ist eine **Probe**. Indem Sie alle Proben aneinanderreihen, können Sie die ursprüngliche Welle ungefähr darstellen, wie im Diagramm unten gezeigt.

![Eine Audiowellenform mit periodisch aufgenommenen Proben](audio-waveform-samples1.svg)

In diesem Beispiel stellt die blaue Linie die von der Audiowellenform genommenen Proben dar, die schwarz ist. In regelmäßigen Abständen liest die A/D-Konverter-Schaltung die Spannung des Signals als einen Wert zwischen (in diesem Fall) -1,0 und +1,0. Da die Amplitude über die Dauer dieses Zeitabschnitts variiert, muss der A/D-Wandler einen Wert auswählen, um diesen Abschnitt darzustellen, sei es durch Aufnahme des Wertes zu einem bestimmten Zeitpunkt (im obigen Diagramm wird der Mittelpunkt jedes Abschnitts als Wert verwendet) oder durch das Mittel der Amplitude über die Dauer jeder Probe. Diese Probenwerte werden dann als die Amplitude der Wellenform zu diesem Zeitpunkt aufgezeichnet.

Wenn der Ton später abgespielt werden soll, werden diese Amplituden verwendet, um eine Annäherung an die ursprüngliche Wellenform zu erzeugen; anstatt eine exakte Kopie der ursprünglichen, glatten Welle abzuspielen, wird die rauere, blaue Welle abgespielt.

Je öfter Sie Proben des ursprünglichen Audios machen, desto näher kommen Sie dem Original. Die Anzahl der pro Sekunde genommenen Proben wird als **Abtastrate** bezeichnet. Betrachten Sie die obige Welle und wie unterschiedlich die blaue, digitale Welle aussehen würde, wenn Sie Proben doppelt so häufig oder zehnmal so oft nehmen würden. Je mehr Proben Sie nehmen, desto glatter wird die Welle.

## Audio-Datenformat und -struktur

Auf der grundlegendsten Ebene wird Audio durch einen Strom von Proben dargestellt, wobei jede die Amplitude der Audiowellenform für einen bestimmten Abschnitt der gesamten Wellenform des Audiosignals angibt. Es gibt mehrere Formate, die für die einzelnen Proben innerhalb einer Audiodatei verwendet werden. Die meisten Audiodateien verwenden 16-Bit-Ganzzahlen mit Vorzeichen für jede Probe, aber andere verwenden 32-Bit-Float-Werte oder 24-Bit- oder 32-Bit-Ganzzahlen. Einige ältere Audiodateiformate, die im Web nicht mehr verwendet werden, benutzten 8-Bit-Ganzzahlproben. Zudem können Proben sowohl positive als auch negative Werte verwenden. Die Größe einer individuellen Probe wird als **Probenumfang** bezeichnet.

Die Position jeder Audioquelle innerhalb des Audiosignals wird als **Kanal** bezeichnet. Jeder Kanal enthält eine Probe, die die Amplitude des von dieser Quelle zu einem bestimmten Moment produzierten Audios angibt. Beispielsweise gibt es im Stereoton zwei Audioquellen: einen Lautsprecher links und einen rechts. Jeder von ihnen wird durch einen Kanal repräsentiert, und die Anzahl der Kanäle im Audiosignal wird als **Kanalzahl** bezeichnet.

Beim Aufnehmen oder Erstellen von Audio-Dateien mit mehreren Kanälen werden die Kanäle zu einer Serie von **Audio-Frames** zusammengefügt, die jeweils eine Probe für jeden der Audio-Kanäle enthalten. Eine einzelne Probe ist ein numerischer Wert, der die Amplitude der Schallwellenform zu einem einzigen Moment in der Zeit darstellt und in verschiedenen Formaten dargestellt werden kann.

Stereo-Audio ist vermutlich die am häufigsten verwendete Kanalvereinbarung im Webaudio, und 16-Bit-Proben werden für den Großteil der alltäglichen Audioaufnahmen verwendet. Für 16-Bit-Stereo-Audio wird jede Probe des analogen Signals als zwei 16-Bit-Ganzzahlen aufgezeichnet, eine für den linken und eine für den rechten Kanal. Das bedeutet, dass jede Probe 32 Bit Speicherplatz benötigt. Bei der üblichen Abtastrate von 48 kHz (48.000 Proben pro Sekunde) benötigt jede Sekunde Audio 192 kB Speicherplatz. Daher benötigt ein typisches drei Minuten langes Lied etwa 34,5 MB Speicherplatz. Das ist eine Menge Speicher, aber schlimmer noch, es ist eine immense Menge an Netzwerkbandbreite, die für ein relativ kurzes Stück Audio aufgewendet wird. Deshalb wird der Großteil der digitalen Audio-Dateien komprimiert.

Der Prozess des Komprimierens und Dekomprimierens von Audio erfolgt durch Kodieren und Dekodieren mit einem Audio-**[Codec](/de/docs/Glossary/codec)** (**CO**der/ **DE**coder). Im Laufe der Jahre wurde eine Vielzahl von Codecs entwickelt, von denen mehrere häufig im Web verwendet werden. Für Details zu den wichtigsten und nützlichsten für Webentwickler finden Sie im Artikel [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Audio_codecs).

### Audiokanäle und Frames

Es gibt zwei Arten von Audiokanälen. Standard-Audiokanäle werden verwendet, um die Mehrheit des hörbaren Tons zu präsentieren. Der Ton für die linken und rechten Hauptkanäle sowie alle Ihrer Surround-Sound-Lautsprecher (Mitte, links und rechts hinten, links und rechts seitlich, Deckenkanäle usw.) sind alle Standard-Audiokanäle. Spezielle **Low Frequency Enhancement** (**LFE**)-Kanäle liefern das Signal für spezielle Lautsprecher, die für die Erzeugung von Tieftönen und Vibrationen ausgelegt sind, um ein intensives Gefühl beim Hören von Audio zu erzeugen. Die LFE-Kanäle treiben typischerweise Subwoofer und ähnliche Geräte an.

Monophonisches Audio hat einen Kanal, Stereoton hat zwei Kanäle, 5.1-Surround-Sound hat 6 Kanäle (fünf Standard und einen LFE) und so weiter. Jeder Audio-Frame ist ein Datensatz, der die Proben für alle im Audiosignal verfügbaren Kanäle enthält. Die Größe eines Audio-Frames wird berechnet, indem der Probenumfang in Byte mit der Anzahl der Kanäle multipliziert wird. Ein einzelner Frame von Stereo-16-Bit-Audio ist somit 4 Byte lang, und ein einzelner Frame von 5.1-Fließkomma-Audio ist 24 Byte (4 Byte pro Probe multipliziert mit 6 Kanälen).

> [!NOTE]
> Einige Codecs trennen tatsächlich die linken und rechten Kanäle und speichern sie in separaten Blöcken in ihrer Datenstruktur. Ein Audio-Frame besteht jedoch immer aus allen Daten für alle verfügbaren Kanäle.

Die Anzahl der Frames, die eine einzige Sekunde Audio ausmachen, variiert je nach Abtastrate, die beim Aufnehmen des Tons verwendet wird. Da die Abtastrate der Anzahl der "Scheiben" entspricht, in die eine Schallwelle für jede Sekunde Zeit geteilt wird, wird sie manchmal als Frequenz angesehen (im Sinne davon, dass es sich um eine Beschreibung von etwas handelt, das sich periodisch wiederholt, nicht in Bezug auf die tatsächliche Audiofrequenz), und die Proben pro Sekunde-Messung verwendet daher Hertz als Einheit.

Die gebräuchlichste Abtastraten sind:

- 8000 Hz
  - : Der internationale [G.711](https://en.wikipedia.org/wiki/G.711)-Standard für in der Telefonie verwendetes Audio verwendet eine Abtastrate von 8000 Hz (8 kHz). Dies ist ausreichend, damit menschliche Sprache verständlich ist.
- 44100 Hz
  - : Die Abtastrate von 44,1 kHz wird für Compact Disk (CD) Audio verwendet. CDs bieten unkomprimiertes 16-Bit-Stereosound bei 44,1 kHz. Computer-Audio verwendet häufig auch standardmäßig diese Frequenz.
- 48000 Hz
  - : Der Ton auf DVDs wird mit 48 kHz aufgezeichnet. Dies wird auch häufig für Computer-Audio verwendet.
- 96000 Hz
  - : Hochauflösendes Audio.
- 192000 Hz
  - : Ultra-hochauflösendes Audio. Noch nicht häufig verwendet, aber das wird sich im Laufe der Zeit ändern.

Es gibt einen Grund, warum 44,1 kHz als minimale "High-Fidelity"-Abtastrate betrachtet werden. Das [Nyquist-Shannon-Abtasttheorem](https://en.wikipedia.org/wiki/Nyquist-Shannon_sampling_theorem) besagt, dass ein Sound zur genauen Wiedergabe mit mindestens der doppelten Frequenz der Schwingung des Tons abgetastet werden muss. Da der Bereich des menschlichen Hörens etwa von 20 Hz bis 20.000 Hz reicht, erfordert die Wiedergabe der höchsten Töne, die Menschen im Allgemeinen hören können, eine Abtastrate von mehr als 40.000 Hz.

Um zusätzlichen Raum für einen [Tiefpassfilter](https://en.wikipedia.org/wiki/Low-pass_filter) bereitzustellen, um Verzerrungen durch [Aliasing](https://en.wikipedia.org/wiki/Aliasing) zu vermeiden, wird eine zusätzliche 2,05 kHz [Übergangsbande](https://en.wikipedia.org/wiki/Transition_band) zur Vorabtastfrequenz hinzugefügt (Ergebnis: 22.050 Hz). Die Verdopplung dieses Wertes gemäß dem Nyquist-Theorem führt zu einer endgültigen Mindestfrequenz von (Sie haben es erraten) 44,1 kHz.

Hochauflösendes (96 kHz) Audio wird in einigen High-End-Audiosystemen verwendet, und es sowie ultra-hochauflösendes (192 kHz) Audio sind nützlich für das Audiomastering. Hier ist so viel Qualität wie möglich erforderlich, während die Aufnahme bearbeitet und vor dem Herunterabsetzen auf die Abtastrate, die für das Endprodukt verwendet wird, bearbeitet wird. Dies ähnelt der Vorgehensweise von Fotografen, die hochauflösende Bilder zum Bearbeiten und Kombinieren verwenden, bevor sie dem Kunden ein JPEG präsentieren, das für die Verwendung auf einer Webseite geeignet ist.

### Audiodateigröße und Netzwerkbandbreite

Sobald Sie die Größe eines einzelnen Audio-Frames und wie viele Frames pro Sekunde Ihre Audiodaten umfassen, kennen, können Sie leicht berechnen, wie viel Speicherplatz die rohen Audiodaten selbst beanspruchen werden (und daher wie viel Bandbreite sie in einem Netzwerk verbrauchen würden).

Betrachten Sie beispielsweise einen Stereo-Audio-Clip (d. h. zwei Audiokanäle) mit einer Probengröße von 16 Bit (2 Byte), der mit 48 kHz aufgezeichnet wurde:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mn>2</mn><mo>×</mo><mn>2</mn><mfrac><mrow><mi>bytes</mi></mrow><mrow><mi>sample</mi></mrow></mfrac><mo>×</mo><mn>48000</mn><mfrac><mrow><mi>samples</mi></mrow><mrow><mi>second</mi></mrow></mfrac><mo>=</mo><mn>192000</mn><mfrac><mrow><mi>bytes</mi></mrow><mrow><mi>second</mi></mrow></mfrac><mo>=</mo><mn>192</mn><mi>kBps</mi></mrow><annotation encoding="TeX">2 \times 2\frac { bytes }{ sample } \times 48000\frac { samples }{ second } = 192000\frac { bytes }{ second } = 192 kBps</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Bei 192 kBps werden niedrigere Netzwerke bereits durch einen einzigen aktiven Audiostream überlastet. Wenn das Netzwerk gleichzeitig auch andere Aufgaben erledigen muss, treten die Probleme auch bei Netzwerken mit höherer Bandbreite auf. Mit so viel Wettbewerb um die Netzwerkleistung, insbesondere in langsameren Netzwerken, kann diese Datenmenge zu viel sein, um während jeglicher Art von Echtzeit-Anwendungen übertragbar zu sein.

Um dieses Problem zu lösen, muss das Audio durch Kompression kleiner gemacht werden.

> [!NOTE]
> Die Netzwerkbandbreite ist offensichtlich nicht dasselbe wie die Audiobandbreite, die im Abschnitt [Sampling von Audio](#sampling_von_audio) oben besprochen wird.

## Grundlagen der Audiokompression

Im Gegensatz zu Text und vielen anderen Arten von Daten neigen Audiodaten dazu, **rauschig** zu sein, was bedeutet, dass die Daten selten aus einer Reihe genau wiederholter Bytes oder Bytefolgen bestehen. Infolgedessen sind Audiodaten mit herkömmlichen Algorithmen schwer zu komprimieren, wie sie von allgemeinen Tools wie `zip` verwendet werden, die normalerweise durch das Ersetzen wiederholter Datenfolgen durch eine Kurzform-Repräsentation arbeiten.

Es gibt mehrere Techniken, die bei der Komprimierung von Audio angewendet werden können. Die meisten Codecs verwenden eine Kombination dieser Techniken und möglicherweise auch andere.

Das Einfachste, was Sie tun können, ist, einen Filter anzuwenden, der Rauschen und leise Töne entfernt, leise Abschnitte in Stille umwandelt und das Signal glättet. Dies kann zu Abschnitten mit Stille sowie anderen sich wiederholenden oder fast sich wiederholenden Signalen führen, die verkürzt werden können.

Sie können einen Filter anwenden, der die Audio-Bandbreite einschränkt, alle Audiofrequenzen entfernt, die Sie nicht benötigen. Dies ist besonders nützlich für Audio-Signale, die nur Sprache enthalten. Durch das Entfernen von Daten wird das resultierende Signal leichter zu komprimieren.

### Psychoakustik

Wenn Sie wissen, welche Art von Audio Sie höchstwahrscheinlich bearbeiten müssen, können Sie potenziell spezielle Filtertechniken finden, die speziell für diese Art von Sound anwendbar sind und die Kodierung optimieren.

Die am häufigsten verwendeten Kompressionsmethoden für Audio wenden die Wissenschaft der **[Psychoakustik](https://en.wikipedia.org/wiki/Psychoacoustics)** an. Dies ist die Wissenschaft, die untersucht, wie Menschen Schall wahrnehmen und welche Teile der Audiofrequenzen, die wir hören, für unser Reagieren auf diese Geräusche am wichtigsten sind, in Abhängigkeit vom Kontext und Inhalt des Tons. Faktoren wie die Fähigkeit, eine Frequenzänderung im Ton zu erkennen, der allgemeine Bereich des menschlichen Hörens im Vergleich zu den Frequenzen des Audiosignals, die Audiolokalisierung und so weiter können alle von einem Codec berücksichtigt werden.

Durch das Verwenden eines soliden Verständnisses der Psychoakustik ist es möglich, eine Kompressionsmethode zu entwickeln, die die komprimierte Größe des Audios minimiert, während die wahrgenommene Klangtreue maximiert wird. Ein Algorithmus, der Psychoakustik verwendet, kann jede dieser hier erwähnten Techniken anwenden und wird fast sicherlich auch andere anwenden.

All dies bedeutet, dass vor der Auswahl eines Codecs eine grundlegende Frage gestellt und beantwortet werden muss: Angesichts des Inhalts des Tons, des Nutzungskontextes und des Zielpublikums, ist es akzeptabel, eine gewisse Audiotreue zu verlieren, und wenn ja, wieviel, oder ist es notwendig, dass das Ergebnis nach dem Dekodieren der Daten identisch mit dem Quell-Audio ist?

### Verlustbehaftete vs. verlustfreie Kompression

Wenn der Verlust von Details und möglicherweise von Treue nicht akzeptabel oder unerwünscht ist, ist ein **verlustfreier** Codec von Vorteil. Andererseits, wenn ein gewisses Maß an Reduzierung der Audiotreue in Ordnung ist, kann ein **verlustbehafteter** Codec verwendet werden. Generell ergibt verlustbehaftete Kompression erheblich kleinere Ausgabedateien als verlustfreie Kompressionsmethoden; auch sind viele verlustbehaftete Codecs ausgezeichnet, wobei der Verlust an Qualität und Detail schwierig oder sogar unmöglich für den durchschnittlichen Hörer zu erkennen ist.

> [!NOTE]
> Während der Einfluss eines hochwertigen, verlustbehafteten Kompressionsalgorithmus auf die Klangqualität für die durchschnittliche Person schwierig zu erkennen sein kann, gibt es bestimmte Menschen mit außergewöhnlich gutem Gehör oder die besonders geschickt darin sind, die Arten von Veränderungen zu bemerken, die durch verlustbehaftete Kompressionstechniken in Musik eingeführt werden.

Die Mehrheit der Audio-Codecs verwendet eine Form der verlustbehafteten Kompression, aufgrund des besseren Kompressionsverhältnisses, die diese Algorithmen bieten. Während verlustfreie Kompressionsalgorithmen in der Regel nicht besser als 40-50 % der Größe der ursprünglichen, unkomprimierten Audiodaten erreichen, können moderne verlustbehaftete Kompressionen die Größe des Audios auf zwischen 5-20 % der ursprünglichen Größe reduzieren, abhängig von der Komplexität des Audios. Die weit überlegenen Kompressionsverhältnisse, die durch verlustbehaftete Kompression möglich sind, machen sie normalerweise zu einer überzeugenden Wahl, und eine angemessene oder ausgezeichnete Audioqualität ist mit gut gewählten Codec-Konfigurationen möglich.

Forscher entwickeln kontinuierlich neue Methoden zur Analyse und Komprimierung von Audio, sodass regelmäßig neue Formate herauskommen, die verschiedene Verbesserungen bieten, entweder im Kompressionsverhältnis oder in der Audiotreue (oder beidem).

Verwendungsfälle für verlustfreies Audio umfassen Szenarien wie:

- Jede Situation, in der der Zuhörer präzise Audiowiedergabe erwartet und möglicherweise ein Ohr für Klang hat, das gut genug ist, um die feinen Details von unverändertem Audio ausmachen zu können.
- Audio-Loops und Proben, die in der Musik- und Soundeffektproduktion verwendet werden.
- Situationen, in denen Audioclips oder Proben möglicherweise neu gemixt und dann komprimiert werden; die Verwendung von verlustfreiem Audio im Mastering-Prozess vermeidet das Komprimieren zuvor komprimierter Daten, was zu einem zusätzlichen Qualitätsverlust führen würde.

Faktoren, die die Verwendung verlustbehafteter Kompression empfehlen können, umfassen:

- Sehr große Audioquellen
- Eingeschränkter Speicherplatz (entweder weil der Speicherplatz klein ist oder weil es eine große Menge an Sound gibt, die darin gespeichert werden muss)
- Die Notwendigkeit, die erforderliche Netzwerkbandbreite zur Übertragung des Audios zu begrenzen; dies ist besonders wichtig für Live-Streams und Videokonferenzen.

## Psychoakustik 101

Die Details der Psychoakustik zu vertiefen und zu verstehen, wie Audiokompression funktioniert, ist weit über den Rahmen dieses Artikels hinaus, aber es ist nützlich zu wissen, wie Audio von gängigen Algorithmen komprimiert werden kann, um ein besseres Verständnis zu entwickeln und bessere Entscheidungen über die Auswahl von Audiocodecs zu treffen.

Verlustbehaftete Kompressionen nutzen im Allgemeinen die Psychoakustik, um zu bestimmen, welche Komponenten einer Audiowellenform verloren gehen oder auf eine Weise abgeschwächt werden können, die die Kompressionsverhältnisse verbessern und gleichzeitig den hörbaren Effekt für die Zielhörer minimieren. Durch die Manipulation der Wellenform um sie leichter komprimieren zu können, oder durch das entfernen von Komponenten des Tons, der tatsächlich nicht gehört wird, wird die Wellenform einfacher, was zu Daten führt, die eine größere Konsistenz haben und daher leichter komprimiert werden können. Das Einschränken der Audio-Bandbreite, um nur die Frequenzen einzuschließen, die am wichtigsten sind, um das decodierte Audio so wahrzunehmen, kann ebenfalls die Kompressionsfaktoren verbessern.

Der Inhaltstyp, der kodiert werden soll, kann die Wahl des Codecs beeinflussen. Insbesondere ist die Wellenform für Musik fast immer komplexer als die einer Audio-Probe, die nur menschliche Stimmen enthält. Außerdem verwendet die menschliche Stimme nur einen kleinen Teil des Bereichs von Audiofrequenzen, die das menschliche Ohr erkennen kann.

> [!NOTE]
> Telefonnetze, die ursprünglich speziell für die Übertragung von menschlichen Stimmen entwickelt wurden, können Audio (oder jede andere Art von Signal) nur im Frequenzband von 300 Hz bis 3.000 Hz übertragen. Dies deckt nicht ganz den gesamten Bereich der menschlichen Sprache am unteren Ende ab, aber genug der Wellenform ist verfügbar, so dass das menschliche Ohr und Gehirn leicht kompensieren. Dies bedeutet auch, dass Menschen im Allgemeinen daran gewöhnt sind, Sprache in einer so schmalen Audio-Bandbreite zu hören.

Die menschliche Sprache verwendet ein relativ schmales Frequenzband (etwa 300 Hz bis 18.000 Hz, obwohl der genaue Bereich von Person zu Person aufgrund von Faktoren einschließlich des Geschlechts variiert). Darüber hinaus liegen die meisten Klänge der menschlichen Sprache tendenziell zwischen 500 Hz und etwa 3.000 Hz, was es ermöglicht, erhebliche Teile der gesamten Wellenform abzulegen, ohne das Verständnis der gehörten Wörter zu beeinträchtigen. Sie können sogar die Audio-Bandbreite anpassen, um die Tonhöhe der individuellen Sprecherstimme zu berücksichtigen.

Aufgrund all dieser Faktoren und weil Sprachhabitatsignale typischerweise weniger komplex sind als Musik, kann eine hohe (und genauer „hoch genug“) Treue der Sprachwiedergabe bei einer relativ niedrigen Bitrate erreicht werden.

Wenn ein Kompressionsalgorithmus, der zur allgemeinen Audiokomprimierung verwendet wird, eine Audiowellenform analysiert, kann er alles außerhalb des Bereichs menschlichen Hörens verwerfen (oder eventuell noch mehr, je nachdem, wie bereit der Algorithmus ist, Details am oberen und/oder unteren Ende des Frequenzbands zu verlieren). Das bedeutet, dass der Codec Audio verwerfen kann, dessen Frequenz niedriger als etwa 20 Hz oder höher als etwa 20.000 Hz (20 kHz) ist. Dies verengt die Audio-Bandbreite des Tons und reduziert somit die Menge an Daten, die zum Darstellen des Signals in komprimierter Form erforderlich sind. Die Audio-Bandbreite kann niemals so stark reduziert werden wie mit einem nur für Sprache gedachten Codec, aber es ist dennoch ein hilfreicher Anfang.

Einige Menschen können bis zu einem gewissen Grad außerhalb dieses Bereichs hören. Häufiger ist jedoch, dass die Fähigkeit der Menschen, höhere Frequenzen zu hören, eher niedriger ist; insbesondere ist zu beachten, dass der obere Bereich dieses Frequenzbands bis Mitte 40 in der Regel von 20 kHz auf etwa 12 kHz bis 14 kHz sinkt. Dies legt nahe, dass die höheren Frequenzen oft ohne allzu große Beeinträchtigung der Verständlichkeit des Tons verworfen werden können, sodass Sie die Menge an Audio-Raum, die Sie beibehalten müssen, erheblich reduzieren können, was Ihren Ton einfacher zu komprimieren macht.

Dies wird im untenstehenden Diagramm dargestellt. Das Diagramm vergleicht den Frequenzbereich des menschlichen Hörens (grün) mit dem Frequenzbereich der menschlichen Sprache (rot) und dem Bereich der Frequenzen, in denen die meisten menschlichen Vokalisationen liegen (gelb).

![Diagramm, das den menschlichen Hörbereich mit dem menschlichen Sprachbereich vergleicht](human-hearing-range.svg)

Die großen Unterschiede zwischen diesen Bereichen geben uns Raum, Details in Audiodaten zu verlieren, ohne erheblich auf die Fähigkeit des menschlichen Ohrs einzugehen, echte Änderungen in der Audioqualität zu bemerken. Diese Fakten können beim Komprimieren von Audio genutzt werden.

Zusätzlich zur Vereinfachung des Tons durch psychoakustische Analyse verwenden Codecs andere Algorithmen und Transformationen, um die Größe des Audios weiter zu vereinfachen und zu reduzieren. Wenn Sie mehr darüber erfahren möchten, wie die Kompression bei Audio funktioniert, schauen Sie sich [Audio-Datenkompression](https://en.wikipedia.org/wiki/Data_compression#Audio) auf Wikipedia an.

Wichtig ist, dass Codecs die ganze harte Arbeit für Sie erledigen. Deshalb fließen so viel Technik und wissenschaftliche Untersuchungen in die Schaffung neuer Algorithmen und Codecs. Alles, was Sie tun müssen, ist, die Optionen und Ihren Anwendungsfall zu berücksichtigen und dann den passenden Codec für Ihre Bedürfnisse auszuwählen.

> [!NOTE]
> Für einen detaillierteren Leitfaden zur Auswahl von Audiocodecs siehe [Auswahl eines Audiocodecs](/de/docs/Web/Media/Formats/Audio_codecs#choosing_an_audio_codec).

## Verlustfreie Encoder-Parameter

Verlustfreie Encoder haben deutlich weniger Raum, um das Audio zu manipulieren, um die Kompressionsrate zu verbessern, da sie in der Lage sein müssen, das ursprüngliche Audio abzuspielen, was die Anzahl der Optionen, um diese Encoder zu konfigurieren, einschränkt. Die Optionen drehen sich tendenziell darum, die Methode auszuwählen, wie der Encoder das Kodieren durchführt und wie viel Zeit und Prozessleistung ihm gestattet wird, um dies zu tun.

Diese Parameter variieren je nach Codec, können aber Folgendes umfassen:

- Spezifische Algorithmen, die während bestimmter Phasen des Kodierungsprozesses verwendet werden sollen
- Parameter für diese Algorithmen, z. B. wie tief ein prädiktives Modell beim Modellieren des Audios verwendet werden soll
- Die Anzahl der Durchläufe, die beim Analysieren des Audios durchgeführt werden sollen, oder die Anzahl der Male, dass gegebene Algorithmen ausgeführt werden sollten.

## Verlustbehaftete Encoder-Parameter

Die meisten Codecs haben Eingabewerte, die Sie anpassen können, um die Kompression auf verschiedene Weisen zu optimieren, entweder für Größe oder Qualität. Wenn Sie einen verlustbehafteten Encoder verwenden, wird das codierte Audio umso größer, je höher die Qualität ist. Aus diesem Grunde beeinflussen die meisten Optionen sowohl die Qualität als auch die Größe in gewissem Maße.

Sie müssen die Dokumentation für die Encoding-Software konsultieren, die Sie verwenden, um herauszufinden, welche Optionen zur Verfügung stehen; dies hängt vom Codec und der Encoding-Software selbst ab. Einige Codecs haben eine Reihe von Werten, die Sie anpassen können (einige davon erfordern möglicherweise ein tiefes Verständnis sowohl der Psychoakustik als auch der Algorithmen des Codecs), und andere bieten einen einfachen "Qualitätsparameter", den Sie einstellen können und der automatisch verschiedene Eigenschaften des Algorithmus anpasst.

### Bitrate

Es gibt zwei sich gegenseitig ausschließende Möglichkeiten, die Qualität des komprimierten Audios über die Bitrate zu steuern. Die erste Möglichkeit besteht darin, eine durchschnittliche Bitrate für die codierten Daten anzustreben, während die zweite darin besteht, einen konstanten Qualitätswert anzugeben, der angestrebt wird, während die Bitrate variieren kann.

#### Durchschnittliche Bitrate

Die erste Methode zur Steuerung der Qualität der Ausgabedatei besteht darin, die **Average Bit Rate** (**ABR**, durchschnittliche Bitrate) anzugeben, die beim Kodieren des Audios angestrebt werden soll. Der Encoder versucht, eine codierte Audiodatei zu erzeugen, die bei Wiedergabe im Durchschnitt die angegebene Anzahl von Bits für jede Sekunde Audio verwendet. Dies steuert die Qualität aus der Perspektive der encodeden Audio-Größe; je höher die Bitrate, desto höher wird die resultierende Audioqualität sein. Die Qualität des Audios wird im Laufe der Zeit so gut wie nötig variieren, um die angestrebte Bitrate zu erreichen.

Ähnlich wie ABR ist **CBR** (**Constant Bit Rate**, konstante Bitrate). Während ABR versucht, die Bitrate im Durchschnitt auf einem bestimmten Niveau zu halten, während eine gewisse Schwankung zugelassen wird, verwendet CBR während der gesamten Audiodauer eine tatsächlich feste Bitrate. CBR wird hauptsächlich in Codecs eingesetzt, die für Zwecke nur mit Stimmen vorgesehen sind, wo der Frequenzbereich und die Variation tendenziell minimal sind und es CBR-Codierung ermöglicht, zu arbeiten, ohne unbrauchbare Schwankungen in der Audioqualität zu erzeugen.

#### Variable Bitrate

**Variable Bit Rate** (**VBR**) Kodierung funktioniert, indem sie als Eingabe in den Encoder eine **konstante Qualität** annehmen lässt. Dies gibt ein Qualitätsniveau an, das während der Audiodauer aufrechtzuerhalten ist, sodass die Bitrate nach Bedarf schwanken kann, um dieses Qualitätsniveau zu erreichen. In Teilen des Tons, in denen die Komprimierung mit minimalen Auswirkungen auf die Qualität leicht erreicht werden kann, kann die Bitrate sehr niedrig sein, während in Abschnitten, in denen die Komprimierung komplexer ist, die Bitrate höher ist.

### Audiofrequenzbandbreite

Einige Codecs ermöglichen Ihnen, die Audiofrequenzbandbreite direkt zu konfigurieren, entweder indem Sie den zu erlaubenden Frequenzbereich angeben, obere und/oder untere Frequenzgrenzen festlegen oder einen Audiosignalquelle-Typ angeben, der die Konfiguration des Algorithmus basierend auf der erwarteten Frequenznutzung des eingehenden Signals bestimmt.

Zusätzlich unterstützen einige Codecs spezielle Kanäle mit begrenzter Frequenzbandbreite, wie z. B. den LFE-Kanal, der die verfügbare Frequenzbandbreite inhärent einschränkt. Im Falle von LFE ist die Audiofrequenzbandbreite auf einen Frequenzbereich begrenzt, der für die Nutzung durch einen Subwoofer oder ein ähnliches Audio-Erfahrung-Erweiterungsgerät geeignet ist.

Einige Codecs bieten spezielle Profile, die für bestimmte Nutzungsszenarien vorgesehen sind, z. B. VoIP; diese Profile können standardmäßig auch Einschränkungen für die Audiofrequenzbandbreite enthalten.

### Joint Stereo

Stereosound wird typischerweise durch Audioframes dargestellt, die jeweils eine Probe pro Kanal enthalten. Dies ergibt Audioframes, die jeweils _sampleSize_ mal 2 Bits benötigen, wobei _sampleSize_ die Anzahl von Bits ist, die jede Audio-Probe benötigt. Für eine 16-Bit-Stereo-Audio-Aufnahme verwendet jede Probe daher 2 mal 16, also 32, Bits Speicherplatz. Dies ist Standard-Links/Rechts (L/R) Stereo oder **simples Stereo**.

**Joint Stereo** ist eine Methode, Stereo-Audioproben platzsparender zu speichern, indem berücksichtigt wird, dass der Klang, der in jedes Ohr gelangt, normalerweise ähnlich ist. Statt jeden Bit jeder Kanalprobe zu speichern, werden eine Basisamplitude und ein pro Kanal-Wert für Abweichungen gespeichert, wobei der Abweichungswert möglicherweise weniger Bits als eine vollständige Probe verwendet.

Es gibt zwei Arten von Joint Stereo: Mittel-Seiten- und Intensitäts-Stereo. Während der Dauer einer Audiodatei kann der Encoder während des Verlaufs der Audiodatei das Format ändern, das zur Darstellung des Stereosignals verwendet wird.

#### Mittel-Seiten-Stereo-Kodierung

**Mittel-Seiten-Stereo-Kodierung** (**MS**) funktioniert dadurch, dass Frames aufgezeichnet werden, die einen fundamentalen **Verstärkungskanal** enthalten, der die durchschnittliche Amplitude der ursprünglichen linken und rechten Audiokanäle darstellt. Dies ist im Wesentlichen das, was Sie als die Amplitude berechnen würden, wenn Sie ein Stereo-Signal in Mono umwandeln. Dann speichern Sie den **Seitensignal**-Wert; dieser Wert ist eine Zahl, die zur Veranschaulichung der ursprünglichen linken Amplitude hinzugefügt und von der Verstärkungskanal-Wert subtrahiert werden kann, um die ursprüngliche rechte Amplitude zu bestimmen.

Mit anderen Worten, unter Berücksichtigung eines linken Kanals, L, und eines rechten Kanals, R, führen Sie beim Kodieren einer Probe die folgenden Berechnungen aus:

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

Dann speichern Sie die Werte von `mid` und `side`. Während `mid` genauso groß wie Ihre Probengröße (zum Beispiel 16 Bit) ist, kann `side` wahrscheinlich in einer kleineren Anzahl von Bits gespeichert werden, da die Amplitude der beiden Kanäle wahrscheinlich relativ ähnlich ist. Der Encoder kann dann diese kleinere Gesamtanzahl von Bits pro Frame nehmen und zusätzliche Berechnungen durchführen, um die Größe weiter zu reduzieren.

Beim Dekodieren des Tons werden die absoluten linken und rechten Kanalwerte folgendermaßen berechnet:

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

Allein betrachtet ist die Mittel-Seiten-Stereo-Kodierung verlustfrei und wird häufig sowohl von verlustfreien als auch verlustbehafteten Audio-Codecs verwendet. Ein Verlust an Details entsteht durch andere Schritte im Kodierungsprozess.

#### Intensitäts-Stereo-Kodierung

**Intensitäts-Stereo-Kodierung** reduziert die kodierte Audio-Bitrate, indem sie den Vorteil daraus zieht, wie Menschen Klänge im Raum lokalisieren; dies wird als [Klanglokalisation](https://en.wikipedia.org/wiki/Sound_localization) bezeichnet. Wir hören in Stereo, weil unsere Ohren Klänge zu unterschiedlichen Zeiten wahrnehmen, je nachdem, aus welcher Richtung der Klang kommt.

Das liegt daran, dass unsere Ohren durch mehrere Zentimeter getrennt sind, da sie sich an gegenüberliegenden Seiten unseres Kopfes befinden. Ein Ton, der von rechts kommt, erreicht unser rechtes Ohr, bevor er das linke Ohr erreicht. Unsere Gehirne bestimmen, wo sich der Ton im Raum um uns herum befindet, indem sie diesen Zeitunterschied verwenden, um den Winkel zu bestimmen, aus dem der Ton kommt. Sinkt jedoch die Frequenz des Audiosignals, steigt die Wellenlänge. Schließlich nähert sich die Wellenlänge dann und übersteigt die Entfernung zwischen den Ohren, und es wird schwierig oder unmöglich, den Ton eindeutig zu lokalisieren.

Mit diesem Wissen können wir ein Stereo-Audiosignal etwa darstellen, indem wir die Frequenzen zusammenführen, die nicht zur Bestimmung der Richtung verwendet werden, und dann Informationen einfügen, die die Richtung des Tones anzeigen. Dies erfordert weniger Bits, um repräsentiert zu werden, ist aber inhärent etwas verlustbehaftet.

## Siehe auch

- [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Audio_codecs)
