---
title: Konzepte der digitalen Audiowiedergabe
slug: Web/Media/Formats/Audio_concepts
l10n:
  sourceCommit: 492065b0932dca9708efd0051bd687b590e3f9d4
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Die Darstellung von Audio in digitaler Form umfasst mehrere Schritte und Prozesse, und es stehen verschiedene Formate sowohl für das rohe Audio als auch für die kodierten oder komprimierten Audiodaten zur Verfügung, die tatsächlich im Web verwendet werden. Dieser Leitfaden bietet einen Überblick darüber, wie Audio digital dargestellt wird und wie Codecs verwendet werden, um Audio für den Einsatz im Web zu kodieren und zu dekodieren.

## Abtastung von Audio

Audio ist ein von Natur aus analoges Merkmal der natürlichen Welt. Wenn ein Objekt vibriert, bringt es die umgebenden Moleküle ebenfalls zum Vibrieren. Diese Moleküle beeinflussen die benachbarten, und so weiter, und verbreiten die Vibration in Form einer Welle vom Ursprung aus, bis die Amplitude der Welle (ihre Lautstärke) mit zunehmender Entfernung abnimmt. Die Granularität einer Audio-Welle in der realen Welt ist daher die eines einzelnen Moleküls des Mediums, durch das sich die Schallwelle bewegt.

Auf der Erde ist das Medium, durch das sich die meisten Schallwellen bewegen, die Luft. Einige Audiosignale reisen durch Wasser oder sogar durch den Gesteinskörper des Planeten selbst (wenn Sie jemals das Rumpeln oder Donnern eines Erdbebens gehört haben, haben Sie dieses Phänomen erlebt), aber fast alle Geräusche, die Sie jeden Tag hören, gelangen durch die Luft zu Ihren Ohren.

Die Geräusche, die ein Mensch jeden Tag hört, sind also tatsächlich Vibrationen in der Luft, die die inneren Mechanismen des Ohrs beeinflussen. Je weiter sich die Luftmoleküle bei jedem Puls der Welle bewegen, desto höher ist die Amplitude der Welle und desto lauter ist der Schall. Je schneller die Moleküle vibrieren, desto höher ist die Frequenz der Welle.

Je höher die Amplitude (Höhe) der Welle, desto lauter ist der Schall in diesem Moment. Je kürzer die Wellenlänge (je näher die Wellenkämme beisammen liegen), desto höher ist die Frequenz (Tonhöhe) des erzeugten Tons.

![Ein einfaches Klangwellenform](audio-waveform.svg)

Computer sind jedoch digital. Um eine Schallwelle in einer Weise darzustellen, die Computer manipulieren und verarbeiten können (ganz zu schweigen von der Übertragung über ein Netzwerk), muss der Ton in eine digitale Form umgewandelt werden. Dieser Prozess wird **Analog-Digital-Umwandlung** (kurz **A/D**) genannt.

Der erste Faktor, der die Qualität des aufgenommenen Audios beeinflusst, ist die **Audiobandbreite**; also der Bereich der Audiofrequenzen, die der A/D-Wandler erfassen und in digitale Form umwandeln kann. Die Audiobandbreite wird auch durch den Codec beeinflusst, wenn dieser während der Kodierung des Tons bestimmte Frequenzbänder verwirft.

Ton gelangt in Form eines Elektronenstroms, dessen Spannung variiert, um die Amplitude der Schallwelle darzustellen, durch ein Mikrofon oder einen anderen Eingang in den Computer. Dieses analoge Signal wird dann von einer Schaltung in digitale Form umgewandelt, die die Amplitude der eingehenden Welle in regelmäßigen Abständen erfasst und diese Daten in eine vom Audiosystem verständliche Zahl umwandelt. Jeder dieser erfassten Momente ist eine **Probe**. Indem alle Proben aneinandergereiht werden, kann die ursprüngliche Welle annähernd dargestellt werden, wie im unten stehenden Diagramm zu sehen ist.

![Eine Audiowellenform mit periodisch genommenen Proben](audio-waveform-samples1.svg)

In diesem Beispiel steht die blaue Linie für die von der Audiosignale genommenen Proben, die schwarz dargestellt sind. In regelmäßigen Abständen liest die A/D-Umwandler-Schaltung die Spannung des Signals als einen Wert zwischen (in diesem Fall) -1.0 und +1.0. Da sich die Amplitude während dieses Zeitabschnitts ändert, muss der A/D-Umwandler einen Wert wählen, um diesen Abschnitt darzustellen, entweder indem er den Wert zu einem bestimmten Zeitpunkt nimmt (im obigen Diagramm wird der Mittelpunkt jeder Scheibe als Wert verwendet) oder indem er die Amplitude während der Dauer jeder Probe mittelt. Diese Probenwerte werden dann als die Amplitude der Wellenform zu diesem Zeitpunkt aufgezeichnet.

Wenn es später Zeit ist, diesen Ton wiederzugeben, werden diese Amplituden verwendet, um eine Annäherung an die ursprüngliche Wellenform zu erzeugen; anstatt eine exakte Kopie der ursprünglichen glatten Welle abzuspielen, wird die rauere, blaue Welle abgespielt.

Je öfter Sie Proben des ursprünglichen Audios machen, desto näher kommen Sie dem Original. Die Anzahl der Proben, die pro Sekunde genommen werden, wird als **Abtastrate** bezeichnet. Überlegen Sie, wie viel anders die blaue, digitale Welle aussehen würde, wenn Sie doppelt so oft Proben nehmen würden. Oder zehnmal so oft. Je mehr Proben Sie nehmen, desto glatter wird die Welle.

## Audio-Datenformat und Struktur

Auf der grundlegendsten Ebene wird Audio durch einen Strom von Proben dargestellt, von denen jede die Amplitude der Audiowellenform für einen bestimmten Abschnitt der gesamten Wellenform des Audiosignals angibt. Es gibt mehrere Formate, die für die einzelnen Proben innerhalb einer Audiodatei verwendet werden. Die meisten Audiodateien verwenden 16-Bit-Ganzzahlen mit Vorzeichen für jede Probe, andere verwenden 32-Bit-Gleitkommawerte oder 24-Bit- oder 32-Bit-Ganzzahlen. Einige ältere Audio-Dateiformate - die Sie im Web nicht finden werden - verwendeten 8-Bit-Integer-Proben. Darüber hinaus können Proben auch mit oder ohne Vorzeichen sein. Die Größe einer einzelnen Probe wird als **Probengröße** bezeichnet.

Die Position jeder Audioquelle innerhalb des Audiosignals wird als **Kanal** bezeichnet. Jeder Kanal enthält eine Probe, die die Amplitude des von dieser Quelle zu einem bestimmten Zeitpunkt erzeugten Audios angibt. Beispielsweise gibt es beim Stereo-Ton zwei Audioquellen: einen Lautsprecher links und einen rechts. Jeder dieser Lautsprecher wird durch einen Kanal dargestellt, und die Anzahl der im Audiosignal enthaltenen Kanäle wird als **Kanalanzahl** bezeichnet.

Beim Aufnehmen oder Erzeugen von Mehrkanal-Audiodateien werden die Kanäle zu einer Reihe von **Audio-Frames** zusammengefügt, von denen jeder aus einer Probe für jeden der Audiokanäle besteht. Eine einzelne Probe ist ein numerischer Wert, der die Amplitude der Ton-[Wellenform](https://en.wikipedia.org/wiki/Waveform) zu einem bestimmten Zeitpunkt darstellt und in verschiedenen Formaten dargestellt werden kann.

Stereo-Audio ist wahrscheinlich die am häufigsten verwendete Kanal-Anordnung in Web-Audio, und 16-Bit-Proben werden für die Mehrheit des alltäglich verwendeten Audios verwendet. Beim 16-Bit-Stereo-Audio wird jede aus dem analogen Signal gewonnene Probe als zwei 16-Bit-Ganzzahlen aufgezeichnet, eine für den linken Kanal und eine für den rechten. Das bedeutet, dass jede Probe 32 Bit Speicher benötigt. Bei der üblichen Abtastrate von 48 kHz (48.000 Proben pro Sekunde) belegt jede Sekunde Audio 192 kB Speicher. Ein typisches dreiminütiges Lied benötigt also etwa 34,5 MB Speicher. Das ist eine Menge Speicherplatz, aber schlimmer noch, eine enorme Menge an Netzwerkbandbreite, die für ein relativ kurzes Stück Audio benötigt wird. Deshalb wird der Großteil der digitalen Audiodaten komprimiert.

Der Prozess des Komprimierens und Dekomprimierens von Audio erfolgt durch Kodierung und Dekodierung mit einem Audio-**{{Glossary("codec")}}** (**CO**der/**DE**coder). Im Laufe der Jahre wurden viele verschiedene Codecs entwickelt, von denen mehrere im Web häufig verwendet werden. Weitere Informationen zu den wichtigsten und nützlichsten Codecs, die Web-Entwickler kennen sollten, finden Sie im Artikel [Leitfaden zu Audio-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Audio_codecs).

### Audio-Kanäle und Frames

Es gibt zwei Arten von Audiokanälen. Standard-Audiokanäle werden verwendet, um die Mehrheit der hörbaren Töne zu präsentieren. Der Klang für die linken und rechten Hauptkanäle sowie alle Ihre Surround-Speaker (Center, linke und rechte Rückseite, linke und rechte Seite, Deckenkanäle usw.) sind alles Standard-Audiokanäle. Spezielle **Tiefenfrequenz-Erweiterungs**-(**LFE**)-Kanäle liefern das Signal für spezielle Lautsprecher, die dafür ausgelegt sind, die tiefen Frequenzen und Vibrationen zu erzeugen, die beim Hören des Audios ein intensives Gefühl erzeugen. Die LFE-Kanäle steuern normalerweise Subwoofer und ähnliche Geräte.

Monophoner Ton hat einen Kanal, Stereo-Ton hat zwei Kanäle, 5.1-Surround-Ton hat 6 Kanäle (fünf Standard und einen LFE), und so weiter. Jedes Audio-Frame ist ein Datensatz, der die Proben aller im Audiosignal verfügbaren Kanäle enthält. Die Größe eines Audio-Frames wird berechnet, indem die Probegröße in Bytes mit der Anzahl der Kanäle multipliziert wird, sodass ein einzelnes Frame mit Stereo-16-Bit-Audio 4 Bytes lang ist und ein einzelnes Frame mit 5.1-Gleitkomma-Audio 24 Bytes lang ist (4 Bytes pro Probe multipliziert mit 6 Kanälen).

> [!NOTE]
> Einige Codecs trennen tatsächlich die linken und rechten Kanäle und speichern sie in separaten Blöcken innerhalb ihrer Datenstruktur. Ein Audio-Frame besteht jedoch immer aus allen Daten für alle verfügbaren Kanäle.

Die Anzahl der Frames, die eine Sekunde Audio darstellen, variiert je nach der beim Aufnehmen des Tons verwendeten Abtastrate. Da die Abtastrate der Anzahl der "Scheiben" entspricht, in die eine Schallwelle für jede Sekunde Zeit geteilt wird, wird sie manchmal als Frequenz betrachtet (im Sinne einer Beschreibung von etwas, das periodisch wiederholt wird, nicht im Sinne der tatsächlichen Audiofrequenz). Die Messung der Proben pro Sekunde verwendet daher [Hertz](https://en.wikipedia.org/wiki/Hertz) als Einheit.

Die häufigsten Abtastraten sind:

- 8000 Hz
  - : Der internationale [G.711](https://en.wikipedia.org/wiki/G.711)-Standard für Audio, das in der Telefonie verwendet wird, hat eine Abtastrate von 8000 Hz (8 kHz). Dies ist genug, um menschliche Sprache verständlich zu machen.
- 44100 Hz
  - : Die 44,1-kHz-Abtastrate wird für Compact Disc (CD)-Audio verwendet. CDs bieten unkomprimierten 16-Bit-Stereo-Sound bei 44,1 kHz. Computer-Audio verwendet häufig standardmäßig diese Frequenz.
- 48000 Hz
  - : Das Audio auf DVDs wird mit 48 kHz aufgenommen. Dies wird auch oft für Computer-Audio verwendet.
- 96000 Hz
  - : Hochauflösendes Audio.
- 192000 Hz
  - : Ultra-hochauflösendes Audio. Noch nicht häufig verwendet, aber dies wird sich mit der Zeit ändern.

Es gibt einen Grund, warum 44,1 kHz als minimale "Hi-Fi"-Abtastrate angesehen wird. Der [Nyquist-Shannon-Abtasttheorem](https://en.wikipedia.org/wiki/Nyquist-Shannon_sampling_theorem) besagt, dass, um einen Ton genau wiederzugeben, dieser mit doppelter Rate der Frequenz des Tons abgetastet werden muss. Da der Bereich des menschlichen Hörens von etwa 20 Hz bis 20.000 Hz reicht, erfordert die Wiedergabe der höchsten Töne, die Menschen im Allgemeinen hören können, eine Abtastrate von mehr als 40.000 Hz.

Um Platz für einen [Tiefpassfilter](https://en.wikipedia.org/wiki/Low-pass_filter) zu schaffen, um Verzerrungen zu vermeiden, die durch [Alias](https://en.wikipedia.org/wiki/Aliasing) verursacht werden, wird ein zusätzlicher Übergangsbereich von 2,05 kHz zur Abtastfrequenz hinzugefügt (was zu 22.050 Hz führt). Verdoppelt man gemäß dem Nyquist-Theorem ergibt sich eine minimale Frequenz von (wie Sie es erraten haben) 44,1 kHz.

High-Resolution (96 kHz)-Audio wird in einigen High-End-Audio-Systemen verwendet, und es und Ultra-High-Resolution (192 kHz)-Audio sind nützlich für die Audiobearbeitung, wo Sie so viel Qualität wie möglich benötigen, während Sie den Ton vor dem Herunterabtasten auf die Abtastrate, die Sie für das Endprodukt verwenden werden, manipulieren und bearbeiten. Dies ähnelt dem, wie Fotografen hochauflösende Bilder für die Bearbeitung und Komposition verwenden, bevor sie dem Kunden ein JPEG zeigen, das für die Verwendung auf einer Website geeignet ist.

### Dateigröße und Netzwerkbandbreite für Audio

Sobald Sie die Größe eines einzelnen Audi-Frames und die Anzahl der Frames pro Sekunde in Ihren Audiodaten kennen, können Sie leicht berechnen, wie viel Speicherplatz die rohen Sounddaten selbst beanspruchen (und damit, wie viel Bandbreite sie in einem Netzwerk beanspruchen würden).

Betrachten wir zum Beispiel ein Stereo-Audio-Clip (das heißt zwei Audiokanäle) mit einer Probengröße von 16 Bit (2 Bytes), das bei 48 kHz aufgezeichnet wurde:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mn>2</mn><mo>×</mo><mn>2</mn><mfrac><mrow><mi>bytes</mi></mrow><mrow><mi>sample</mi></mrow></mfrac><mo>×</mo><mn>48000</mn><mfrac><mrow><mi>samples</mi></mrow><mrow><mi>second</mi></mrow></mfrac><mo>=</mo><mn>192000</mn><mfrac><mrow><mi>bytes</mi></mrow><mrow><mi>second</mi></mrow></mfrac><mo>=</mo><mn>192</mn><mi>kBps</mi></mrow><annotation encoding="TeX">2 \times 2\frac { bytes }{ sample } \times 48000\frac { samples }{ second } = 192000\frac { bytes }{ second } = 192 kBps</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Bei 192 kBps werden niedrigere Netzwerke schon durch einen einzelnen Audiostream beansprucht. Wenn das Netzwerk auch andere Dinge erledigt, tritt das Problem selbst bei Netzwerken mit höherer Bandbreite auf. Bei so viel Konkurrenz um Netzwerkressourcen, insbesondere auf langsameren Netzwerken, könnte diese Datenmenge für Echtzeitanwendungen zu viel sein, um sie effizient zu übertragen.

Um dieses Problem zu lösen, muss das Audio durch Kompression verkleinert werden.

> [!NOTE]
> Netzwerkbandbreite ist offensichtlich nicht dasselbe wie Audiobandbreite, die unter [Abtastung von Audio](#abtastung_von_audio) besprochen wird.

## Grundlegendes zur Audiokompression

Im Gegensatz zu Texten und vielen anderen Arten von Daten neigen Audiodaten dazu, **rauschhaft** zu sein, was bedeutet, dass die Daten selten aus einer Serie von genau wiederholten Bytes oder Byte-Sequenzen bestehen. Infolgedessen sind Audiodaten schwierig mit traditionellen Algorithmen wie denen, die von allgemeinen Werkzeugen wie `zip` verwendet werden, zu komprimieren, die normalerweise durch Ersetzen von sich wiederholenden Datenreihen durch eine Kurzform arbeiten.

Es gibt mehrere Techniken, die bei der Komprimierung von Audio angewendet werden können. Die meisten Codecs verwenden eine Kombination dieser Techniken und können auch andere Techniken verwenden.

Das Einfachste, was Sie tun können, ist einen Filter anzuwenden, der Rauschen und leise Töne entfernt und alle leisen Abschnitte in Stille umwandelt und das Signal glättet. Dies kann Abschnitte der Stille sowie andere sich wiederholende oder nahezu wiederholende Signale erzeugen, die verkürzt werden können.

Sie können einen Filter anwenden, der die Audiobandbreite verengt und unnötige Frequenzen entfernt. Dies ist besonders nützlich für Signalabschnitte, die nur menschliche Sprache enthalten. Dadurch werden Daten entfernt, wodurch das resultierende Signal komprimierungsfreundlicher wird.

### Psychoakustik

Wenn Sie wissen, welche Art von Audio Sie am wahrscheinlichsten handhaben, können Sie potenziell spezielle Filtertechniken finden, die speziell für diese Art von Klang gelten und die Kodierung optimieren.

Die am häufigsten verwendeten Komprimierungsmethoden für Audio wenden die Wissenschaft der **[Psychoakustik](https://en.wikipedia.org/wiki/Psychoacoustics)** an. Dies ist die Wissenschaft, die untersucht, wie Menschen Klang wahrnehmen und welche Teile der Audiofrequenzen, die wir hören, am wichtigsten sind, wie wir auf diese Klänge reagieren, gegeben den Kontext und den Inhalt des Klangs. Faktoren wie die Fähigkeit, die Frequenzänderung eines Tons zu erkennen, der gesamte Bereich des menschlichen Hörens gegenüber den Frequenzen des Audiosignals, Audiodarstellung und so weiter können alle von einem Codec berücksichtigt werden.

Durch die Verwendung eines fundierten Verständnisses der Psychoakustik ist es möglich, eine Komprimierungsmethode zu entwerfen, die die komprimierte Größe des Audios minimiert und gleichzeitig die wahrgenommene Qualität des Tons maximiert. Ein Algorithmus, der Psychoakustik verwendet, kann eine der hier erwähnten Techniken verwenden und wird fast sicher auch andere anwenden.

All dies bedeutet, dass eine grundlegende Frage gestellt und beantwortet werden muss, bevor ein Codec ausgewählt wird: Angesichts des Inhalts des Tons, des Nutzungskontexts und des Zielpublikums ist es akzeptabel, ein gewisses Maß an Audioqualität zu verlieren, und wenn ja, wie viel; oder ist es notwendig, dass das Ergebnis nach dem Dekodieren der Daten identisch mit dem Quell-Audio ist?

### Verlustbehaftete vs. verlustfreie Komprimierung

Wenn ein Verlust an Detail und möglicherweise an Qualität inakzeptabel oder unerwünscht ist, wird ein **verlustfreier** Codec bevorzugt. Wenn jedoch ein gewisses Maß an Qualitätsminderung akzeptabel ist, kann ein **verlustbehafteter** Codec verwendet werden. Im Allgemeinen ergeben verlustbehaftete Komprimierungen deutlich kleinere Ausgaben als verlustfreie Komprimierungsmethoden; auch sind viele verlustbehaftete Codecs ausgezeichnet, wobei der qualitative und detaillierte Verlust schwer oder sogar unmöglich für den Durchschnittshörer zu erkennen ist.

> [!NOTE]
> Obwohl die Auswirkung eines hochwertigen verlustbehafteten Komprimierungsalgorithmus auf die Klangqualität für den Durchschnittsmenschen schwer zu erkennen sein mag, haben bestimmte Menschen außergewöhnlich gutes Gehör oder sind besonders geschickt darin, die Veränderungen in der Musik zu bemerken, die durch verlustbehaftete Komprimierungstechniken eingeführt werden.

Die Mehrheit der Audiocodecs verwendet irgendeine Form von verlustbehafteter Komprimierung, wegen des besseren Komprimierungsverhältnisses, das diese Algorithmen bieten. Während verlustfreie Komprimierungsalgorithmen in der Regel nicht besser als 40-50 % der Größe der ursprünglichen, unkomprimierten Sounddaten erreichen, können moderne verlustbehaftete Komprimierungsalgorithmen die Größe des Audios auf 5-20 % der ursprünglichen Größe reduzieren, abhängig von der Komplexität des Audios. Die weitaus besseren Komprimierungsverhältnisse, die mit verlustbehafteter Komprimierung möglich sind, machen sie in der Regel zu einer überzeugenden Wahl, und eine angemessene oder ausgezeichnete Audioqualität ist mit gut gewählten Codec-Konfigurationen möglich.

Forscher entwickeln weiterhin neue Wege, um Audio zu analysieren und zu komprimieren, sodass in regelmäßigen Abständen neue Formate entstehen, die verschiedene Verbesserungen bieten, sei es im Komprimierungsverhältnis oder in der Audioqualität (oder beidem).

Anwendungsfälle für verlustfreie Audio umfassen Szenarien wie:

- Jede Situation, in der der Zuhörer präzise Audiowiedergabe erwartet und möglicherweise ein Ohr für Klang hat, der gut genug ist, um die feinen Details der unveränderten Audio zu hören
- Audioloops und Proben, die in der Musik- und Soundeffektsproduktion verwendet werden
- Situationen, in denen Audioclips oder -proben remixt und dann komprimiert werden können; die Verwendung von verlustfreier Audio für den Mastering-Prozess vermeidet die Komprimierung zuvor komprimierter Daten, was zu zusätzlichem Qualitätsverlust führen würde

Faktoren, die die Verwendung von verlustbehafteter Komprimierung empfehlen können, sind:

- Sehr große Quell-Audiosignale
- Begrenzter Speicher (entweder weil der Speicherplatz klein ist oder weil es eine große Menge an Audio gibt, die gespeichert werden muss)
- Die Notwendigkeit, die erforderliche Netzwerkbandbreite zu beschränken, um das Audio zu übertragen; dies ist besonders wichtig für Livestreams und Videokonferenzen

## Psychoakustik 101

Sich mit den Einzelheiten der Psychoakustik und der Funktionsweise der Audiokomprimierung auseinanderzusetzen, geht weit über den Umfang dieses Artikels hinaus, aber ein allgemeines Verständnis davon zu haben, wie Audio durch übliche Algorithmen komprimiert wird, kann dazu beitragen, fundiertere Entscheidungen über die Auswahl von Audiocodecs zu treffen.

Verlustbehaftete Komprimierungsalgorithmen verwenden im Allgemeinen Psychoakustik, um zu bestimmen, welche Komponenten einer Audiowellenform vernachlässigt oder in irgendeiner Weise abgeschwächt werden können, um die Komprimierungsverhältnisse zu verbessern und gleichzeitig die hörbare Auswirkung für die Zielgruppe minimal zu halten. Indem die Wellenform manipuliert wird, um sie leichter komprimierbar zu machen, oder indem Komponenten des Sounds entfernt werden, die nicht wirklich gehört werden, wird die Wellenform einfacher, was zu Daten führt, die konsistenter sind und daher leichter zu komprimieren sind. Die Einschränkung der Audiobandbreite, um nur die Frequenzen einzuschließen, die für die Interpretation des decodierten Sounds durch das menschliche Ohr am wichtigsten sind, kann ebenfalls die Komprimierungsfaktoren verbessern.

Der Typ des Inhalts, der kodiert wird, kann die Wahl des Codecs beeinflussen. Insbesondere ist die Wellenform für Musik fast immer komplexer als die eines Audiobeispiels, das nur menschliche Stimmen enthält. Außerdem verwendet die menschliche Stimme nur einen kleinen Teil des Bereichs der Audiofrequenzen, die das menschliche Ohr wahrnehmen kann.

> [!NOTE]
> Telefonnetzwerke, die ursprünglich speziell für die Übertragung von menschlichen Stimmen konzipiert wurden, können Audio (oder jede andere Art von Signal) nur im Frequenzband von 300 Hz bis 3.000 Hz übertragen. Dies deckt das gesamte Spektrum der menschlichen Sprache im unteren Bereich nicht vollständig ab, aber genug von der Wellenform ist verfügbar, dass das menschliche Ohr und Gehirn leicht ausgleichen kann. Das bedeutet auch, dass Menschen im Allgemeinen daran gewöhnt sind, Sprache zu hören, die auf so eine schmale Audiobandbreite beschränkt ist.

Menschliche Sprache verwendet relativ schmale Frequenzbänder (zwischen etwa 300 Hz und 18.000 Hz, obwohl der genaue Bereich je nach Person und Faktoren wie Geschlecht variiert). Darüber hinaus liegen die meisten menschlichen Sprachklänge zwischen 500 Hz und etwa 3.000 Hz, wodurch es möglich ist, wesentliche Teile der Gesamtwellenform zu vernachlässigen, ohne die Fähigkeit des Zuhörers zu beeinträchtigen, die gesprochenen Wörter zu verstehen. Sie können sogar die Audiobandbreite anpassen, um die Tonhöhe der Stimme des Einzelsprechers zu berücksichtigen.

Aufgrund all dieser Faktoren und weil Sprachwellenformen in der Regel weniger komplex sind als Musik, kann eine hohe (und genauer gesagt "hoch genug") Wiedergabetreue von Sprache bei relativ niedriger Bitrate erreicht werden.

Wenn ein allgemeiner Audiokomprimierungsalgorithmus eine Audiowellenform analysiert, kann er alles verwerfen, was außerhalb des Bereichs des menschlichen Hörens liegt (oder möglicherweise sogar mehr, abhängig davon, wie bereit der Algorithmus ist, Details am hohen und/oder niedrigen Ende des Frequenzbands zu riskieren). Das bedeutet, dass der Codec Audio verwerfen kann, dessen Frequenz niedriger ist als etwa 20 Hz oder höher als etwa 20,000 Hz (20 kHz). Dies verengt die Audiobandbreite des Sounds und reduziert so die Menge an Daten, die erforderlich sind, um das Signal in seiner komprimierten Form darzustellen. Die Audiobandbreite kann nicht annähernd so stark reduziert werden wie bei einem Sprach-Only-Codec, aber es ist dennoch ein hilfreichere Ausgangspunkt.

Einige Menschen können bis zu einem gewissen Grad außerhalb dieses Bereichs hören. Häufiger ist jedoch, dass die Fähigkeit der Menschen, höhere Frequenzen zu hören, eher niedriger als das Durchschnittsniveau ist; insbesondere ist es wichtig zu beachten, dass der obere Bereich dieses Frequenzbandes in der Regel bis zum mittleren Alter von 20 kHz auf etwa 12 kHz bis 14 kHz absinkt. Dies legt nahe, dass die höheren Frequenzen oft ohne übermäßige Beeinträchtigung der Verständlichkeit des Tons verworfen werden können, sodass Sie die Menge der Audioräume, die Sie beibehalten müssen, erheblich reduzieren können, was Ihren Ton einfacher zu komprimieren macht.

Dies wird im unten stehenden Diagramm dargestellt. Das Diagramm vergleicht den Frequenzbereich des menschlichen Hörens (grün) mit dem Frequenzbereich der menschlichen Sprache (rot) und dem Bereich der Frequenzen, in denen die meisten menschlichen Vokalisierungen liegen (gelb).

![Diagramm, das den menschlichen Hörbereich im Vergleich zum Sprachbereich zeigt](human-hearing-range.svg)

Die großen Unterschiede zwischen diesen Bereichen geben uns Spielraum, um Details in Audiodaten zu verlieren, ohne die Fähigkeit des menschlichen Ohrs zu beeinträchtigen, eine wirkliche Veränderung der Klangqualität zu bemerken. Diese Fakten können bei der Audiokomprimierung genutzt werden.

Neben der Vereinfachung des Tons durch psychoakustische Analyse verwenden Codecs andere Algorithmen und Transformationsmethoden, um die Größe des Audios weiter zu vereinfachen und zu reduzieren. Wenn Sie mehr darüber erfahren möchten, wie Komprimierung bei Audio funktioniert, werfen Sie einen Blick auf [Audiokompression](https://en.wikipedia.org/wiki/Data_compression#Audio) auf Wikipedia.

Wichtig ist, dass die Codecs all die harte Arbeit für Sie übernehmen. Deshalb fließt so viel Ingenieurskunst und wissenschaftliche Forschung in die Erstellung neuer Algorithmen und Codecs. Alles, was Sie tun müssen, ist, die Optionen und Ihren Anwendungsfall zu berücksichtigen und dann den passenden Codec für Ihre Bedürfnisse auszuwählen.

> [!NOTE]
> Für einen detaillierteren Leitfaden zur Auswahl von Audiocodecs siehe [Auswahl eines Audiocodecs](/de/docs/Web/Media/Formats/Audio_codecs#choosing_an_audio_codec).

## Parameter für verlustfreie Encoder

Verlustfreie Encoder haben viel weniger Spielraum, das Audio zu manipulieren, um die Kompressionsrate zu verbessern, angesichts der Notwendigkeit, das ursprüngliche Audio reproduzieren zu können, was die verfügbaren Optionen zur Konfiguration dieser Encoder einschränkt. Die Optionen drehen sich tendenziell darum, die Methode zu wählen, mit der der Encoder die Kodierung durchführt und wie viel Zeit und Prozessorleistung ihm dafür zur Verfügung steht.

Diese Parameter variieren je nach Codec, können aber umfassen:

- Spezifikation spezifischer Algorithmen für bestimmte Phasen des Kodierungsprozesses
- Parameter für die zu verwendenden Algorithmen, wie z.B. die vorhergesagte Tiefe, die bei dem Versuch, das Audio zu modellieren, verwendet wird
- Die Anzahl der Durchläufe zur Analyse des Audios oder die Anzahl der Durchläufe, die bestimmte Algorithmen erhalten sollen

## Parameter für verlustbehaftete Encoder

Die meisten Codecs haben Eingabewerte, die Sie anpassen können, um die Komprimierung in vielfacher Weise zu optimieren, sei es hinsichtlich Größe oder Qualität. Bei der Verwendung eines verlustbehafteten Encoders bestimmt die höhere Qualität, wie umfangreich das kodierte Audio sein wird. Daher beeinflussen die meisten Optionen sowohl Qualität als auch Größe in einer Weise.

Sie müssen die Dokumentation der von Ihnen verwendeten Software zur Kodierung heranziehen, um herauszufinden, welche Optionen verfügbar sind, die abhängig sowohl vom Codec als auch von der Kodierungssoftware selbst sein werden. Einige Codecs haben eine Reihe von Werten, die Sie anpassen können (einige erfordern möglicherweise ein tiefes Verständnis sowohl der Psychoakustik als auch der Algorithmen des Codecs), und andere bieten einen einfachen "Qualitäts"-Parameter, den Sie festlegen können, um automatisch verschiedene Eigenschaften des Algorithmus einzustellen.

### Bitrate

Es gibt zwei gegenseitig ausschließende Möglichkeiten, die Qualität des komprimierten Audios mit der Bitrate zu steuern. Die erste Methode betrifft das Ziel einer durchschnittlichen Bitrate für die kodierten Daten, während die zweite Methode das Festlegen eines konstanten Qualitätswerts ermöglicht und die Bitrate dabei variieren lässt.

#### Durchschnittliche Bitrate

Die erste Methode, die Qualität der Ausgabedatei zu steuern, besteht darin, die **Average Bit Rate** (**ABR**) zu spezifizieren, die bei der Kodierung des Audios angestrebt wird. Der Encoder versucht, eine Sounddatei zu erzeugen, die bei der Wiedergabe im Durchschnitt die angegebene Anzahl von Bits pro Sekunde verwendet. Dies steuert die Qualität unter dem Gesichtspunkt der kodierten Audiodateigröße; je höher die Bitrate, desto höher wird die resultierende Audioqualität sein. Die Qualität des Audios schwankt im Zeitverlauf, um die angestrebte Bitrate zu erreichen.

Ähnlich der ABR ist die **CBR** (**Constant Bit Rate**). Während ABR versucht, die Bitrate im Durchschnitt auf einem gegebenen Niveau zu halten und einige Schwankungen zuzulassen, verwendet CBR tatsächlich eine feste Bitrate für die Dauer des Audios. CBR wird hauptsächlich in Codecs verwendet, die speziell für sprachliche Anwendungen konzipiert sind, bei denen Frequenzbereich und -variationen minimal sind, sodass CBR-Kodierung ohne große Schwankungen in der Audioqualität funktioniert.

#### Variable Bitrate

**Variable Bit Rate** (**VBR**) Kodierung arbeitet, indem sie als Eingabe in den Encoder ein **konstantes Qualitäts**einstellung benötigt. Dies kennzeichnet ein Qualitätsniveau, das für die Dauer des Audios beibehalten werden muss, wobei die Bitrate bei Bedarf schwanken darf, um dieses Qualitätsniveau zu erreichen. In den einfach zu komprimierenden Teilen des Tons, die minimale Auswirkungen auf die Qualität haben, kann die Bitrate sehr niedrig sein, während in den komplizierteren Bereichen die Bitrate höher sein wird.

### Audiofrequenzbandbreite

Einige Codecs erlauben es Ihnen, die Audiofrequenzbandbreite direkt zu konfigurieren, entweder indem Sie den Bereich der zu erlaubenden Frequenzen definieren, ob durch Festlegung oberer und/oder unterer Frequenzgrenzen oder indem man den Typ der Audioquelle angibt, der bestimmt, wie der Algorithmus basierend auf dem erwarteten Frequenzeinsatz des eingehenden Signals konfiguriert wird.

Darüber hinaus unterstützen einige Codecs spezielle Kanäle mit eingeschränkter Frequenzbandbreite, wie den LFE-Kanal, die den verfügbaren Frequenzbereich von Natur aus einschränken. Im Fall des LFE ist die Audiofrequenzbandbreite auf einen Frequenzbereich beschränkt, der für den Einsatz durch einen Subwoofer oder ähnliche Geräte zur Audioerweiterung geeignet ist.

Einige Codecs bieten spezielle Profile, die speziell für bestimmte Verwendungsszenarien ausgelegt sind, wie z.B. VoIP; diese Profile können auch standardmäßig Einschränkungen der Audiofrequenzbandbreite enthalten.

### Gemeinsames Stereo

Stereo-Ton wird normalerweise durch Audio-Frames dargestellt, die eine Probe pro Kanal enthalten. Dies ergibt Audio-Frames, die jeweils _sampleSize_ Bits erfordern, wobei _sampleSize_ die Anzahl der Bits ist, die jede Audio-Probe benötigt. Bei einer 16-Bit-Stereoaufnahme benötigt also jede Probe 2 mal 16, oder 32, Bits Speicherplatz. Dies ist das Standard-Links/Rechts (L/R) Stereo oder **einfaches Stereo**.

**Gemeinsames Stereo** ist eine Methode, um Stereo-Audios zu speichern in einer platzsparenden Weise, indem man berücksichtigt, dass in der Regel der Klang, der in jedes Ohr gelangt, ähnlich ist. Anstatt also jeden Bit der Probe jedes Kanals zu speichern, wird eine Grundamplitude und ein pro Kanal berechneter Amplitudeschwankungswert gespeichert, wobei dieser Schwankungswert möglicherweise weniger Bits als eine vollständige Probe beansprucht.

Es gibt zwei Arten von gemeinsamem Stereo: Mid-Side und Intensity. Im Laufe der Dauer einer Audiodatei kann der Codec wechseln, welches Format zur Darstellung des Stereosignals im Verlauf der Audiodatei verwendet wird.

#### Mid-Side Stereo-Kodierung

**Mid-Side Stereo Kodierung** (**MS**) funktioniert durch das Aufzeichnen von Frames, die einen fundamentalen **Mid-Kanal** enthalten, bei dem es sich um die durchschnittliche Amplitude der ursprünglichen linken und rechten Audiokanäle handelt. Dies ist im Wesentlichen das, was Sie als Amplitude berechnen würden, wenn Sie ein Stereo-Signal in Mono umwandeln. Dann speichern Sie den **Side-Kanal**-Wert; dieser Wert ist eine Zahl, die dem **Mid-Kanal**-Wert hinzugefügt werden kann, um die ursprüngliche Amplitude des linken Kanals zu bestimmen, und vom Mid-Kanal-Wert abgezogen werden kann, um den ursprünglichen Wert des rechten Kanals zu berechnen.

Anders ausgedrückt, bei einem linken Kanal L und einem rechten Kanal R führen Sie beim Kodieren einer Probe die folgenden Berechnungen durch:

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

Dann speichern Sie die Werte von `mid` und `side`. Während `mid` immer noch die gleiche Größe wie Ihre Probengröße hat (z.B. 16 Bit), kann der Wert von `side` wahrscheinlich in einer kleineren Anzahl von Bits gespeichert werden, da die Amplitude der beiden Kanäle wahrscheinlich relativ ähnlich ist. Der Encoder kann dann diese kleinere Anzahl von Gesamtbits pro Frame verwenden, um weitere Berechnungen durchzuführen, um die Größe weiter zu reduzieren.

Während der Dekodierung des Audios werden die absoluten Werte der linken und rechten Kanäle wie folgt berechnet:

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

Für sich allein ist die Mid-Side Stereo-Kodierung verlustfrei und wird häufig sowohl von verlustfreien als auch verlustbehafteten Audiocodecs verwendet. Jeglicher Detailverlust kommt aus anderen Schritten des Kodierungsprozesses.

#### Intensity Stereo-Kodierung

**Intensity Stereo-Kodierung** reduziert die kodierte Audiobitrate, indem sie den Vorteil der Art und Weise nutzt, wie Menschen die Position von Geräuschen im Raum bestimmen; dies wird [Schalllokalisierung](https://en.wikipedia.org/wiki/Sound_localization) genannt. Wir hören in Stereo, weil unsere Ohren einen Klang zu unterschiedlichen Zeiten erkennen, je nachdem, aus welcher Richtung der Klang kommt.

Dies liegt daran, dass unsere Ohren durch mehrere Zoll getrennt sind, da sie sich auf gegenüberliegenden Seiten unseres Kopfes befinden. Ein Klang, der von unserer rechten Seite kommt, erreicht unser rechtes Ohr vor unserem linken Ohr. Unser Gehirn bestimmt, wo sich der Klang im Raum um uns befindet, indem es diesen Zeitunterschied verwendet, um den Winkel zu bestimmen, aus dem der Klang kommt. Sobald jedoch die Frequenz des Audiosignals sinkt, steigt die Wellenlänge. Letztendlich nähert sich die Wellenlänge dem Abstand zwischen den Ohren an und übersteigt diesen schließlich, und es wird schwierig oder unmöglich, den Klang eindeutig zu lokalisieren.

Mit diesen Informationen ausgestattet, können wir ein Stereo-Audiosignal näherungsweise darstellen, indem wir die Frequenzen, die nicht zur Bestimmung der Richtung genutzt werden, in einem einzigen Kanal zusammenfassen und dann Informationen hinzufügen, die die Richtung des Klangs anzeigen. Dies erfordert weniger Bits zur Darstellung, ist aber von Natur aus etwas verlustbehaftet.

## Siehe auch

- [Leitfaden zu Audio-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Audio_codecs)
