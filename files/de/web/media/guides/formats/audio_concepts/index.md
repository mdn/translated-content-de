---
title: Digitale Audiokonzepte
slug: Web/Media/Guides/Formats/Audio_concepts
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

Die Darstellung von Audio in digitaler Form erfordert eine Reihe von Schritten und Prozessen, wobei mehrere Formate sowohl für das Roh-Audio als auch für das kodierte oder komprimierte Audio zur Verfügung stehen, das tatsächlich im Web verwendet wird. Dieser Leitfaden bietet einen Überblick darüber, wie Audio digital dargestellt wird und wie Codecs verwendet werden, um Audio für die Nutzung im Web zu kodieren und zu dekodieren.

## Abtastung von Audio

Audio ist eine naturgemäß analoge Eigenschaft der realen Welt. Wenn ein Objekt vibriert, bringt es die umgebenden Moleküle ebenfalls zum Vibrieren. Diese Moleküle beeinflussen die benachbarten Moleküle, und so weiter, wobei die Vibration in Form einer Welle vom Ursprung aus verbreitet wird, bis die Amplitude der Welle (ihre Lautstärke) mit zunehmender Entfernung abnimmt. Die Granularität einer Audiowelle in der realen Welt entspricht also der eines einzelnen Moleküls des Mediums, durch das sich die Schallwelle bewegt.

Auf der Erde ist das Medium, durch das die meisten Audiosignale reisen, die Luft. Einige Audioquellen breiten sich durch Wasser oder sogar durch das Gestein, das den Planeten bildet, aus (wenn Sie jemals das Grollen oder den Knall eines Erdbebens gehört haben, haben Sie dieses Phänomen erlebt), aber fast alle Klänge, die Sie täglich hören, gelangen durch die Luft in Ihre Ohren.

Die Geräusche, die eine Person täglich hört, sind also tatsächlich Vibrationen in der Luft, die die Mechanismen im Ohr verursachen. Je weiter die Luftmoleküle mit jedem Impuls der Welle bewegt werden, desto höher ist die Amplitude der Welle und desto lauter ist der Klang. Je schneller die Moleküle vibrieren, desto höher ist die Frequenz der Welle.

Je höher die Amplitude (Höhe) der Welle, desto lauter ist der Klang in diesem Moment. Je kürzer die Wellenlänge (je näher die Kämme der Welle zusammenliegen), desto höher ist die Frequenz (oder Tonhöhe) des erzeugten Klangs.

![Eine Schallwellenform](audio-waveform.svg)

Computer hingegen sind digital. Um eine Schallwelle in einem Format darzustellen, das Computer manipulieren und verarbeiten können (geschweige denn über ein Netzwerk übertragen), muss der Klang in eine digitale Form umgewandelt werden. Dieser Prozess wird als **Analog-Digital-Umwandlung** (**A/D** für kurz) bezeichnet.

Der erste Faktor, der die Treue des erfassten Audios beeinflusst, ist die **Audio-Bandbreite**; das ist der Bereich der Audiofrequenzen, die der A/D-Wandler erfassen und in digitale Form umwandeln kann. Die Audio-Bandbreite wird auch vom Codec beeinflusst, wenn er bei der Kodierung des Tons bestimmte Frequenzbänder verwirft.

Der Ton gelangt über ein Mikrofon oder einen anderen Eingang in Form eines Elektronenstroms in den Computer, dessen Spannung variiert, um die Amplitude der Schallwelle darzustellen. Dieses analoge Signal wird dann von einer Schaltung, die die Amplitude der eingehenden Welle in regelmäßigen Abständen erfasst, in digitale Form umgewandelt und in eine Zahl umgewandelt, die vom Audiosystem verstanden wird. Jeder dieser erfassten Momente ist eine **Probe**. Indem alle Proben miteinander verkettet werden, kann die ursprüngliche Welle näherungsweise dargestellt werden, wie in der unten stehenden Abbildung gezeigt.

![Eine Audiowellenform mit periodisch entnommenen Proben](audio-waveform-samples1.svg)

In diesem Beispiel repräsentiert die blaue Linie die Proben, die aus der Audiowellenform entnommen wurden, die schwarz ist. In regelmäßigen Abständen liest die A/D-Wandlerschaltung die Spannung des Signals als einen Wert zwischen (in diesem Fall) -1,0 und +1,0. Da sich die Amplitude über die Dauer dieses Zeitabschnitts ändert, muss der A/D-Wandler einen Wert wählen, um diesen Abschnitt darzustellen, sei es durch die Erfassung des Werts zu einem bestimmten Moment (im Diagramm oben wird der Mittelpunkt jedes Abschnitts als Wert verwendet) oder durch das Durchschnittnehmen der Amplitude über die Dauer jeder Probe. Diese Probenwerte werden dann als die Amplitude der Wellenform zu diesem Zeitpunkt aufgezeichnet.

Wenn es später an der Zeit ist, diesen Ton wiederzugeben, werden diese Amplituden genutzt, um eine Annäherung an die ursprüngliche Wellenform zu erzeugen; anstatt eine exakte Kopie der ursprünglichen, glatten Welle abzuspielen, wird die rauere, blaue Welle abgespielt.

Je öfter Sie Proben des ursprünglichen Audios nehmen, desto näher können Sie der Originalaufnahme kommen. Die Anzahl der Proben pro Sekunde wird als **Abtastrate** bezeichnet. Betrachten Sie die obige Welle und wie unterschiedlich die blaue, digitale Welle aussehen würde, wenn Sie doppelt so oft Proben nehmen würden. Oder zehnmal so oft. Je mehr Proben Sie nehmen, desto glatter wird die Welle.

## Audio-Datenformat und Struktur

Auf der grundlegendsten Ebene wird Audio durch einen Stream von Proben dargestellt, jede spezifiziert die Amplitude der Audiowellenform, wie sie für einen bestimmten Abschnitt der Gesamtwellenform des Audiosignals gemessen wurde. Es gibt mehrere Formate, die für die einzelnen Proben innerhalb einer Audio-Datei verwendet werden. Die meisten Audiodateien verwenden 16-Bit-signed-Integer für jede Probe, einige andere verwenden 32-Bit-Gleitkommawerte oder 24-Bit- oder 32-Bit-Integer. Einige ältere Audio-Dateiformate – die Sie im Web nicht finden werden – verwendeten 8-Bit-Integer-Proben. Zusätzlich können Proben sowohl signed als auch unsigned Werte verwenden. Die Größe einer einzelnen Probe wird als **Probengröße** bezeichnet.

Die Position jeder Audioquelle innerhalb des Audiosignals wird als **Kanal** bezeichnet. Jeder Kanal enthält eine Probe, die die Amplitude des von dieser Quelle zu einem bestimmten Zeitpunkt erzeugten Tons angibt. Zum Beispiel gibt es beim Stereo-Ton zwei Audioquellen: einen Lautsprecher links und einen rechts. Jeder dieser Kanäle wird durch einen Kanal repräsentiert, und die Anzahl der im Audiosignal enthaltenen Kanäle wird als **Kanalanzahl** bezeichnet.

Während der Aufnahme oder Erzeugung von Mehrkanal-Audiodateien werden die Kanäle in einer Serie von **Audio-Frames** zusammengefasst, die jeweils aus einer Probe für jeden der Audiokanäle bestehen. Eine einzelne Probe ist ein numerischer Wert, der die Amplitude der [Wellenform](https://en.wikipedia.org/wiki/Waveform) zu einem bestimmten Zeitpunkt darstellt und in verschiedenen Formaten dargestellt werden kann.

Stereo-Audio ist wahrscheinlich die am häufigsten verwendete Kanalzusammenfassung im Web-Audio, und 16-Bit-Proben werden für die meisten täglichen Audiodaten verwendet. Bei 16-Bit-Stereo-Audio wird jede Probe des analogen Signals als zwei 16-Bit-Integer aufgezeichnet, eines für den linken und eines für den rechten Kanal. Das bedeutet, dass für jede Probe 32 Bits Speicher benötigt werden. Bei der üblichen Abtastrate von 48 kHz (48.000 Proben pro Sekunde) bedeutet dies, dass jede Sekunde Audio 192 kB Speicherplatz belegt. Daher benötigt ein typisches dreiminütiges Lied etwa 34,5 MB Speicherplatz. Das ist eine Menge Speicherplatz, aber schlimmer noch, es ist eine enorme Menge an Netzwerkbandbreite, die für ein relativ kurzes Stück Audio verwendet wird. Deshalb wird der größte Teil des digitalen Audios komprimiert.

Der Prozess der Komprimierung und Dekomprimierung von Audio erfolgt durch die Kodierung und Dekodierung mittels eines Audio-**{{Glossary("codec", "Codecs")}}** (**CO**der/**DE**coder). Im Laufe der Jahre wurde eine Vielzahl von Codecs entwickelt, von denen mehrere häufig im Web verwendet werden. Für Details zu den wichtigsten und nützlichsten für Webentwickler bekannte Codecs siehe den Artikel [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

### Audiokanäle und Frames

Es gibt zwei Arten von Audiokanälen. Standard-Audiokanäle werden verwendet, um den Großteil des hörbaren Tons darzustellen. Der Ton für die linke und rechte Hauptkanäle sowie alle Surround-Sound-Lautsprecher (Center, hinten links und rechts, seitlich links und rechts, Deckenkanäle usw.) sind alles Standard-Audiokanäle. Spezielle **Low Frequency Enhancement** (**LFE**)-Kanäle liefern das Signal für spezielle Lautsprecher, die zur Erzeugung tiefer Frequenzen und Vibrationen ausgelegt sind, um beim Hören des Audios ein körperliches Empfinden zu erzeugen. Die LFE-Kanäle betreiben typischerweise Subwoofer und ähnliche Geräte.

Monophones Audio hat einen Kanal, Stereo-Sound hat zwei Kanäle, 5.1 Surround-Sound hat 6 Kanäle (fünf Standard- und ein LFE-Kanal) usw. Jedes Audio-Frame ist ein Datenregister, das die Proben für alle verfügbaren Kanäle in einem Audiosignal enthält. Die Größe eines Audio-Frames wird durch Multiplikation der Probengröße in Bytes mit der Anzahl der Kanäle berechnet, sodass ein einzelnes Frame von 16-Bit-Stereo-Audio 4 Bytes lang ist und ein einzelnes Frame von 5.1-Gleitkomma-Audio 24 (4 Bytes pro Probe multipliziert mit 6 Kanälen).

> [!NOTE]
> Einige Codecs werden tatsächlich die linken und rechten Kanäle trennen und sie in separaten Blöcken innerhalb ihrer Datenstruktur speichern. Ein Audio-Frame besteht jedoch immer aus den Daten für alle verfügbaren Kanäle.

Die Anzahl der Frames, die eine einzelne Sekunde Audio ausmachen, variiert je nach Abtastrate, die beim Aufnehmen des Tons verwendet wurde. Da sich die Abtastrate auf die Anzahl der "Slices" bezieht, in die eine Schallwelle für jede Sekunde Zeit unterteilt ist, wird sie manchmal als Frequenz betrachtet (im Sinne einer Beschreibung von etwas, das sich periodisch wiederholt, nicht im Sinne einer tatsächlichen Audiofrequenz), und die Proben pro Sekunde werden daher in [Hertz](https://en.wikipedia.org/wiki/Hertz) gemessen.

Die gebräuchlichsten Abtastraten sind:

- 8000 Hz
  - : Der internationale [G.711](https://en.wikipedia.org/wiki/G.711)-Standard für Audio, der in der Telefonie verwendet wird, verwendet eine Abtastrate von 8000 Hz (8 kHz). Dies reicht aus, damit menschliche Sprache verständlich ist.
- 44100 Hz
  - : Die 44,1 kHz-Abtastrate wird für CDs (Compact Discs) verwendet. CDs bieten unkomprimierten 16-Bit-Stereo-Sound bei 44,1 kHz. Auch Computer-Audio verwendet häufig standardmäßig diese Frequenz.
- 48000 Hz
  - : Das Audio auf DVDs wird mit 48 kHz aufgezeichnet. Dies wird auch häufig für Computer-Audio verwendet.
- 96000 Hz
  - : Hochauflösendes Audio.
- 192000 Hz
  - : Ultra-hochauflösendes Audio. Wird noch nicht häufig verwendet, aber das wird sich im Laufe der Zeit ändern.

Es gibt einen Grund, warum 44,1 kHz als die minimale "High Fidelity"-Abtastrate angesehen werden. Der [Nyquist-Shannon-Abtasttheorem](https://en.wikipedia.org/wiki/Nyquist-Shannon_sampling_theorem) besagt, dass ein Ton mit der doppelten Frequenz der Frequenz des Tones abgetastet werden muss, um ihn genau wiederzugeben. Da der Bereich des menschlichen Hörens von etwa 20 Hz bis 20.000 Hz reicht, erfordert die Reproduktion der hochfrequentesten Klänge, die Menschen im Allgemeinen hören können, eine Abtastrate von mehr als 40.000 Hz.

Um zusätzlichen Raum für einen [Tiefpassfilter](https://en.wikipedia.org/wiki/Low-pass_filter) zu schaffen, um Verzerrungen durch [Aliasing](https://en.wikipedia.org/wiki/Aliasing) zu vermeiden, wird dem Vorabtastfrequenz ein zusätzlicher Übergangsbereich von 2,05 kHz hinzugefügt (was 22.050 Hz ergibt). Die Verdopplung gemäß dem Nyquist-Theorem ergibt eine endgültige Mindestfrequenz von (wie Sie es erraten haben) 44,1 kHz.

Hochauflösendes (96 kHz) Audio wird in einigen High-End-Audiosystemen verwendet, und es und ultra-hochauflösendes (192 kHz) Audio sind nützlich für das Audio-Mastering, bei dem Sie so viel Qualität wie möglich benötigen, während Sie den Sound manipulieren und bearbeiten, bevor Sie auf die Abtastrate herunterrechnen, die Sie für das Endprodukt verwenden werden. Dies ist ähnlich wie Fotografen hochauflösende Bilder für die Bearbeitung und Komposition verwenden, bevor sie dem Kunden ein für eine Website geeignetes JPEG präsentieren.

### Dateigröße von Audio und Netzwerkbandbreite

Sobald Sie die Größe eines einzelnen Audio-Frames kennen und wie viele Frames pro Sekunde Ihre Audiodaten ausmachen, können Sie leicht berechnen, wie viel Speicherplatz die Rohklangdaten selbst belegen werden (und daher wie viel Bandbreite sie in einem Netzwerk verbrauchen würden).

Zum Beispiel betrachten wir einen Stereo-Audio-Clip (das heißt, zwei Audiokanäle) mit einer Probengröße von 16 Bits (2 Bytes), der mit 48 kHz aufgenommen wurde:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mn>2</mn><mo>×</mo><mn>2</mn><mfrac><mrow><mi>Bytes</mi></mrow><mrow><mi>Sample</mi></mrow></mfrac><mo>×</mo><mn>48000</mn><mfrac><mrow><mi>Samples</mi></mrow><mrow><mi>Second</mi></mrow></mfrac><mo>=</mo><mn>192000</mn><mfrac><mrow><mi>Bytes</mi></mrow><mrow><mi>Second</mi></mrow></mfrac><mo>=</mo><mn>192</mn><mi>kBps</mi></mrow><annotation encoding="TeX">2 \times 2\frac { bytes }{ sample } \times 48000\frac { samples }{ second } = 192000\frac { bytes }{ second } = 192 kBps</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Bei 192 kBps werden niedrigere Netzwerke bereits durch einen einzigen Audiostream stark belastet. Wenn das Netzwerk auch andere Dinge tut, stellt sich das Problem auch bei Netzwerken mit höherer Bandbreite. Bei so viel Wettbewerb um die Netzwerkkapazität, insbesondere in langsameren Netzwerken, kann diese Datenmenge zu viel sein, um sie bei Echtzeitanwendungen effizient zu übertragen.

Um dieses Problem zu lösen, muss das Audio durch Komprimierung verkleinert werden.

> [!NOTE]
> Netzwerkbandbreite ist offensichtlich nicht dasselbe wie die Audio-Bandbreite, die in [Abtastung von Audio](#abtastung_von_audio) beschrieben wird.

## Grundlagen der Audiokomprimierung

Im Gegensatz zu Text und vielen anderen Arten von Daten neigen Audiodaten dazu, **rauschig** zu sein, was bedeutet, dass die Daten selten aus einer Reihe von exakt wiederholten Bytes oder Byte-Sequenzen bestehen. Infolgedessen ist es schwierig, Audiodaten mit herkömmlichen Algorithmen wie denen, die von allgemeinen Tools wie `zip` verwendet werden, zu komprimieren, die normalerweise funktionieren, indem wiederholte Datenfolgen durch eine kurzschlüssige Darstellung ersetzt werden.

Es gibt mehrere Techniken, die bei der Komprimierung von Audio angewendet werden können. Die meisten Codecs verwenden eine Kombination dieser Techniken und möglicherweise auch andere Techniken.

Die einfachste Sache, die Sie tun können, ist ein Filter anzuwenden, der Rauschen und leise Töne entfernt und stille Abschnitte in Stille umwandelt und das Signal glättet. Dies kann Abschnitte von Stille sowie andere sich wiederholende oder fast sich wiederholende Signale erzeugen, die gekürzt werden können.

Sie können einen Filter anwenden, der die Audio-Bandbreite einengt und alle Audiofrequenzen entfernt, auf die Sie keinen Wert legen. Dies ist besonders nützlich für Audio-Signale, die nur Sprache enthalten. Dies reduziert Daten und macht das resultierende Signal leichter komprimierbar.

### Psychoakustik

Wenn Sie wissen, welche Art von Audio Sie am wahrscheinlichsten verarbeiten, können Sie möglicherweise spezielle Filtertechniken finden, die speziell auf diese Art von Klang anwendbar sind und die Kodierung optimieren.

Die am häufigsten verwendeten Kompressionsmethoden für Audio nutzen die Wissenschaft der **[Psychoakustik](https://en.wikipedia.org/wiki/Psychoacoustics)**. Dies ist die Wissenschaft, die untersucht, wie Menschen Schall wahrnehmen und welche Teile der von uns gehörten Audiofrequenzen für unsere Reaktion auf diese Geräusche am wichtigsten sind, gegeben den Kontext und den Inhalt des Klangs. Faktoren wie die Fähigkeit, eine Änderung der Frequenz eines Tons zu erkennen, das Gesamtspektrum des menschlichen Hörens im Vergleich zu den Frequenzen des Audiosignals, die Lokalisierung von Audio und so weiter können von einem Codec berücksichtigt werden.

Durch das Verständnis der Psychoakustik ist es möglich, eine Kompressionsmethode zu entwerfen, die die komprimierte Größe des Audios minimiert, während die wahrgenommene Klangtreue maximiert wird. Ein auf Psychoakustik basierender Algorithmus kann jede der hier erwähnten Techniken verwenden und wird fast sicher auch andere anwenden.

All dies bedeutet, dass vor der Auswahl eines Codecs eine grundlegende Frage gestellt und beantwortet werden muss: Ist es im Hinblick auf den Inhalt des Klangs, den Nutzungskontext und das Zielpublikum akzeptabel, einen gewissen Grad an Klangtreue zu verlieren, und wenn ja, in welchem Maß; oder ist es notwendig, dass bei der Dekodierung der Daten das Ergebnis mit dem Quell-Audio identisch ist?

### Verlustbehaftete vs. verlustfreie Komprimierung

Wenn der Verlust von Details und möglicherweise Treue inakzeptabel oder unerwünscht ist, wird ein **verlustfreier** Codec bevorzugt. Andererseits, wenn ein gewisses Maß an Reduzierung der Audiotreue akzeptabel ist, kann ein **verlustbehafteter** Codec verwendet werden. Generell führt die verlustbehaftete Komprimierung zu deutlich kleineren Ausgaben als verlustfreie Komprimierungsmethoden; zudem sind viele verlustbehaftete Codecs exzellent, wobei der Verlust an Qualität und Detail für den durchschnittlichen Hörer schwierig oder sogar unmöglich zu erkennen ist.

> [!NOTE]
> Während der Einfluss einer hochwertigen verlustbehafteten Komprimierung auf die Klangqualität für die durchschnittliche Person schwierig zu erkennen sein kann, haben bestimmte Menschen ein außergewöhnlich gutes Gehör oder sind besonders gut darin, die durch verlustbehaftete Kompressionstechniken eingeführten Änderungen wahrzunehmen.

Die Mehrheit der Audio-Codecs verwendet eine Form der verlustbehafteten Komprimierung, aufgrund des besseren Kompressionsverhältnisses, dass diese Algorithmen bieten. Während verlustfreie Komprimierungsalgorithmen normalerweise nicht besser als 40-50% der Größe der ursprünglichen, unkomprimierten Audiodaten erreichen, können moderne verlustbehaftete Komprimierungsalgorithmen die Größe der Audiodatei auf 5-20% der ursprünglichen Größe reduzieren, abhängig von der Komplexität des Audios. Die überragenden Kompressionsverhältnisse, die durch verlustbehaftete Komprimierung möglich sind, machen sie in der Regel zu einer überzeugenden Wahl, und eine ausreichende oder exzellente Audioqualität ist mit gut gewählten Codec-Konfigurationen möglich.

Forscher entwickeln weiterhin bessere Methoden zur Analyse und Komprimierung von Audio, sodass neue Formate regelmäßig auftauchen, die in Bezug auf Kompressionsverhältnis oder Klangtreue (oder beides) Verbesserungen bieten.

Anwendungsfälle für verlustfreies Audio umfassen Szenarien wie:

- Jede Situation, in der der Hörer eine präzise Audiowiedergabe erwartet und ein Gehör hat, das gut genug ist, um die feinen Details unberührten Audios herauszuhören
- Audio-Loops und Muster, die in der Musik- und Soundeffektproduktion verwendet werden
- Situationen, in denen Audioclips oder Muster remixt und dann komprimiert werden; die Verwendung von verlustfreiem Audio für den Mastering-Prozess vermeidet die Kompression bereits komprimierter Daten, was zu zusätzlichem Qualitätsverlust führt

Faktoren, die die Anwendung verlustbehafteter Komprimierung empfehlen können, umfassen:

- Sehr großes Quell-Audio
- Eingeschränkter Speicherplatz (entweder weil der Speicherplatz klein ist oder weil eine große Menge an Sound darin gespeichert werden muss)
- Die Notwendigkeit, die erforderliche Netzwerkbandbreite zur Übertragung des Audios zu reduzieren; dies ist besonders wichtig für Live-Streams und Telefonkonferenzen

## Psychoakustik 101

In die Details der Psychoakustik und der Funktionsweise der Audiokomprimierung einzutauchen, geht weit über den Rahmen dieses Artikels hinaus, aber ein allgemeines Verständnis darüber, wie Audio durch gängige Algorithmen komprimiert wird, kann dazu beitragen, fundiertere Entscheidungen über die Auswahl von Audiocodecs zu treffen.

Verlustbehaftete Komprimierungsalgorithmen verwenden in der Regel Psychoakustik, um zu bestimmen, welche Komponenten einer Audiowellenform in einer Weise verloren gehen oder gedämpft werden können, die die Kompressionsverhältnisse verbessert, während die hörbare Auswirkung auf die Zielhörer minimiert wird. Durch die Manipulation der Wellenform, um sie leichter komprimierbar zu machen, oder durch das Entfernen von Komponenten des Klangs, die wirklich nicht gehört werden, wird die Wellenform einfacher, wodurch die Daten konsistenter werden und daher leichter zu komprimieren sind. Die Einschränkung der Audiobandbreite auf die Frequenzen, die für die Interpretation des dekodierten Klangs durch das menschliche Gehör am wichtigsten sind, kann auch die Kompressionsfaktoren verbessern.

Der Inhaltstyp, der kodiert wird, kann die Auswahl eines Codecs beeinflussen. Insbesondere ist die Wellenform für Musik fast immer komplexer als die eines Audiosamples, das nur menschliche Stimmen enthält. Darüber hinaus verwendet die menschliche Stimme nur einen kleinen Teil des Bereichs von Audiofrequenzen, die das menschliche Gehör erkennen kann.

> [!NOTE]
> Telefonnetzwerke, die ursprünglich speziell für die Übertragung von Stimmen entwickelt wurden, können Audio (oder jede andere Art von Signal) nur im Frequenzband von 300 Hz bis 3.000 Hz übertragen. Dies umfasst nicht ganz die gesamte Reichweite der menschlichen Sprache im unteren Bereich, aber genug der Wellenform, dass das menschliche Gehör und Gehirn leicht kompensieren. Dies bedeutet auch, dass die meisten Menschen im Allgemeinen daran gewöhnt sind, Sprache in einer so eingeschränkten Audiobandbreite zu hören.

Die menschliche Sprache verwendet ein relativ schmales Frequenzband (etwa 300 Hz bis 18.000 Hz, obwohl der genaue Bereich von Person zu Person aufgrund von Faktoren wie Geschlecht variieren kann). Darüber hinaus liegen die meisten menschlichen Sprachklänge zwischen etwa 500 Hz und 3.000 Hz, was es möglich macht, erhebliche Teile der Gesamtwellenform wegzulassen, ohne die Fähigkeit des Zuhörers zu beeinträchtigen, die gesprochenen Worte zu verstehen. Sie können sogar die Audiobandbreite anpassen, um die Tonhöhe der individuellen Stimme des Sprechers zu berücksichtigen.

Aufgrund all dieser Faktoren und da Sprachwellenformen normalerweise weniger komplex sind als Musik, kann eine hohe (und genauer gesagt "hoch genug") Wiedergabetreue der Sprache bei einer relativ niedrigen Bitrate erreicht werden.

Wenn ein Komprimierungsalgorithmus, der für die Komprimierung allgemeiner Audiodaten entwickelt wurde, eine Audiowellenform analysiert, kann er alles, was außerhalb des Bereichs des menschlichen Hörens liegt, verwerfen (oder sogar noch mehr, je nachdem, wie bereit der Algorithmus ist, das Risiko einzugehen, Details am oberen und/oder unteren Ende des Frequenzbands zu verlieren). Das bedeutet, dass der Codec Audio mit einer Frequenz unter etwa 20 Hz oder über etwa 20.000 Hz (20 kHz) verwerfen kann. Dies verengt die Audiobandbreite des Tons und reduziert damit die Menge der Daten, die benötigt werden, um das Signal in seiner komprimierten Form darzustellen. Die Audiobandbreite kann nicht annähernd so stark reduziert werden wie bei einem Codec, der nur für Sprache verwendet wird, aber es ist dennoch ein hilfreicher Anfang.

Einige Leute können außerhalb dieses Bereichs in gewissem Maße hören. Häufiger ist die Fähigkeit der Menschen, höhere Frequenzen zu hören, jedoch geringer als dies; insbesondere ist es erwähnenswert, dass im mittleren Alter das obere Ende dieses Frequenzbands normalerweise von 20 kHz auf etwa 12 kHz bis 14 kHz sinkt. Dies legt nahe, dass höhere Frequenzen oft verworfen werden können, ohne die Verstehbarkeit des Klangs übermäßig zu beeinträchtigen, sodass Sie erheblich reduzieren können, wie viel von dem Audio-Raum Sie behalten müssen, und dadurch wird Ihr Klang einfacher und leichter komprimierbar.

Dies wird im folgenden Diagramm dargestellt. Das Diagramm vergleicht den Frequenzbereich des menschlichen Hörens (grün) mit dem Frequenzbereich der menschlichen Sprache (rot) und dem Frequenzbereich, in dem die Mehrheit der menschlichen Vokalisationen liegt (gelb).

![Diagramm, das den menschlichen Hörbereich mit dem Bereich menschlicher Sprache vergleicht](human-hearing-range.svg)

Die großen Unterschiede zwischen diesen Bereichen geben uns Raum, um Details in Audiodaten zu verlieren, ohne die Fähigkeit des menschlichen Gehörs, irgendeine wirkliche Veränderung in der Klangqualität zu bemerken, signifikant zu beeinträchtigen. Diese Tatsachen können bei der Komprimierung von Audio ausgenutzt werden.

Neben der Vereinfachung des Sounds durch psychoakustische Analyse verwenden Codecs andere Algorithmen und Transformationen, um die Größe des Audios weiter zu vereinfachen und zu reduzieren. Wenn Sie mehr über die Funktionsweise von Audiokomprimierung erfahren möchten, werfen Sie einen Blick auf [Audio-Datenkompression](https://en.wikipedia.org/wiki/Data_compression#Audio) auf Wikipedia.

Wichtig ist, dass die Codecs all die harte Arbeit für Sie erledigen. Deshalb wird so viel Ingenieur- und wissenschaftliche Studie in die Erstellung neuer Algorithmen und Codecs investiert. Alles, was Sie tun müssen, ist, die Optionen und Ihren Anwendungsfall zu berücksichtigen, und dann den passenden Codec für Ihre Bedürfnisse auszuwählen.

> [!NOTE]
> Für einen detaillierteren Leitfaden zur Auswahl von Audiocodecs siehe [Auswahl eines Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs#choosing_an_audio_codec).

## Verlustlose Encoder-Parameter

Verlustfreie Encoder haben viel weniger Spielraum, das Audio zur Verbesserung des Kompressionsverhältnisses zu manipulieren, da sie den ursprünglichen Ton reproduzieren müssen, wodurch die Anzahl der Optionen begrenzt wird, diese Encoder zu konfigurieren. Die Optionen drehen sich in der Regel darum, die Methode auszuwählen, mit der der Encoder die Kodierung durchführt und wie viel Zeit und Prozessorleistung er dafür verbrauchen kann.

Diese Parameter variieren je nach Codec, können jedoch Folgendes beinhalten:

- Bestimmung spezifischer Algorithmen, die in bestimmten Phasen des Kodierungsprozesses verwendet werden sollen
- Parameter, die von diesen Algorithmen verwendet werden, wie z.B. wie viel prädiktive Tiefe beim Modellieren des Tons verwendet werden soll
- Die Anzahl der Durchläufe, die bei der Analyse des Tons durchgeführt werden sollen, oder die Anzahl der Male, die bestimmte Algorithmen ausgeführt werden sollen

## Parameter für verlustbehaftete Encoder

Die meisten Codecs haben Eingabewerte, die Sie optimieren können, um die Komprimierung auf verschiedene Weisen zu optimieren, entweder in Bezug auf Größe oder Qualität. Bei der Verwendung eines verlustbehafteten Encoders führt höhere Qualität zu größerem kodierten Audio. Aus diesem Grund beeinflussen die meisten Optionen sowohl die Qualität als auch die Größe in gewisser Weise.

Sie müssen sich auf die Dokumentation der von Ihnen verwendeten Kodierungssoftware beziehen, um festzustellen, welche Optionen verfügbar sind, was vom Codec und der Kodierungssoftware selbst abhängt. Einige Codecs haben eine Anzahl von Werten, die Sie anpassen können (einige davon erfordern möglicherweise ein tiefes Verständnis sowohl der Psychoakustik als auch der Algorithmen des Codecs), während andere einen "Qualitäts"-Parameter bieten, den Sie einstellen können, der automatisch verschiedene Eigenschaften des Algorithmus anpasst.

### Bitrate

Es gibt zwei sich gegenseitig ausschließende Wege, um die Qualität des komprimierten Audios unter Verwendung der Bitrate zu steuern. Der erste Weg beinhaltet das Anstreben einer durchschnittlichen Bitrate für die kodierten Daten, während der zweite Weg beinhaltet, einen konstanten Qualitätswert anzuvisieren, während die Bitrate variieren darf.

#### Durchschnittliche Bitrate

Die erste Methode zur Steuerung der Qualität der Ausgabedatei besteht darin, die **Durchschnittliche Bitrate** (**ABR**) anzuvisieren, wenn das Audio kodiert wird. Der Encoder wird versuchen, eine kodierte Sounddatei zu produzieren, die bei der Wiedergabe, durchschnittlich die angegebene Anzahl von Bits für jede Sekunde Audio verwendet. Dies steuert die Qualität aus der Perspektive der kodierten Audiogröße; je höher die Bitrate, desto höher ist die resultierende Audioqualität. Die Qualität des Audios wird über die Zeit nach Bedarf schwanken, um die angestrebte Bitrate zu erreichen.

Ähnlich zur ABR ist **CBR** (**Konstante Bitrate**). Während ABR versucht, die Bitrate im Durchschnitt auf einem gegebenen Niveau zu halten, während etwas Schwankungen erlaubt sind, verwendet CBR eine tatsächlich feste Bitrate für die Dauer des Audios. CBR wird hauptsächlich in Codecs verwendet, die nur für Sprachzwecke entwickelt wurden, wo der Frequenzbereich und die Variation minimal sind, sodass die CBR-Kodierung ohne untragbare Schwankungen in der Audioqualität funktioniert.

#### Variable Bitrate

**Variable Bitrate** (**VBR**)-Kodierung funktioniert durch Akzeptieren eines Eingabewerts in den Encoder, einer **konstanten Qualität**. Dies gibt ein Qualitätsniveau an, das während der gesamten Dauer des Audios aufrechterhalten werden soll, wobei die Bitrate je nach Bedarf schwanken kann, um dieses Qualitätsniveau zu erreichen. In Bereichen des Tons, in denen die Kompressionsrate leicht erreicht werden kann, ohne die Qualität zu beeinträchtigen, kann die Bitrate sehr niedrig sein, während in Bereichen, in denen die Kompression komplexer ist, die Bitrate höher ist.

### Audiofrequenzbandbreite

Einige Codecs ermöglichen es, die Audiofrequenzbandbreite direkt zu konfigurieren, entweder durch Angabe des zulässigen Frequenzbereichs, durch Festlegung von oberen und/oder unteren Frequenzgrenzen oder durch Angabe eines Audioquellentyps, der festlegt, wie der Algorithmus basierend auf der erwarteten Frequenznutzung des eingehenden Signals zu konfigurieren ist.

Darüber hinaus unterstützen einige Codecs spezielle limitierte Frequenzbandbreitenkanäle, z.B. den LFE-Kanal, der die verfügbare Frequenzbandbreite inhärent einschränkt. Im Falle von LFE ist die Audiofrequenzbandbreite auf einen Frequenzbereich beschränkt, der für die Verwendung durch einen Subwoofer oder ein ähnliches Audioerfahrungserweiterungsgerät geeignet ist.

Einige Codecs bieten spezielle Profile an, die speziell für bestimmte Einsatzszenarien wie VoIP gedacht sind; diese Profile können auch standardmäßig Einschränkungen auf die Audiofrequenzbandbreite enthalten.

### Joint stereo

Stereo-Ton wird typischerweise durch Audio-Frames dargestellt, die eine Probe pro Kanal enthalten. Dies führt zu Audio-Frames, die jeweils 2 mal _Probengröße_ Bits erfordern, wobei _Probengröße_ die Anzahl der Bits ist, die jede Audio-Probe benötigt. Für eine 16-Bit-Stereo-Audioaufnahme benötigt jede Probe also 2 mal 16, also 32 Bits Speicherplatz. Dies ist Standard-L/R-Stereo oder **simple stereo**.

**Joint stereo** ist eine Methode zur Speicherung von Stereo-Audio-Proben auf eine platzsparendere Weise, indem berücksichtigt wird, dass üblicherweise der Klang, der jedes Ohr erreicht, ähnlich ist. Daher wird anstelle der Speicherung jeder einzelnen Information aus der Probe eines jeden Kanals eine Basisamplitude und ein Kanalamplituden-Abweichungswert gespeichert, bei dem der Abweichungswert weniger Bits als eine vollständige Probe verwenden kann.

Es gibt zwei Arten von Joint Stereo: Mitte-Seite und Intensität. Im Laufe der Audio-Datei kann der Encoder zwischen diesen Formaten wechseln, um das Stereosignal über den Verlauf der Datei darzustellen.

#### Mitte-Seite-Stereokodierung

**Mitte-Seite-Stereokodierung** (**MS**) funktioniert, indem Frames aufgenommen werden, die einen grundlegenden **Mittenkanal** enthalten, welcher die durchschnittliche Amplitude der ursprünglichen linken und rechten Audiokanäle darstellt. Dies ist im Wesentlichen das, was Sie als Amplitude berechnen würden, wenn Sie ein Stereosignal in Mono umwandeln. Dann wird der **Seitenkanal**-Wert gespeichert; dieser Wert ist eine Zahl, die zum **Mittenkanal**-Wert hinzugefügt werden kann, um die ursprüngliche Amplitude des linken Kanals zu ermitteln, und vom Mittenkanalwert subtrahiert wird, um den ursprünglichen Wert des rechten Kanals zu berechnen.

Anders ausgedrückt, bei der Kodierung einer Probe, geben wir einen linken Kanal L und einen rechten Kanal R an, und führen die folgenden Berechnungen aus:

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

Dann speichern Sie die Werte von `mid` und `side`. Während `mid` immer noch dieselbe Größe wie Ihre Probengröße (z. B. 16 Bits) hat, kann der Wert von `side` wahrscheinlich in einer kleineren Anzahl von Bits gespeichert werden, da die Amplitude der beiden Kanäle wahrscheinlich relativ ähnlich ist. Der Encoder kann dann diese kleinere Anzahl von Bits pro Frame verwenden und zusätzliche Berechnungen durchführen, um die Größe weiter zu reduzieren.

Beim Dekodieren des Audios werden die absoluten linken und rechten Kanalwerte wie folgt berechnet:

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

Für sich allein ist die Mittel-Seiten-Stereokodierung verlustfrei und wird häufig sowohl von verlustfreien als auch von verlustbehafteten Audio-Codecs verwendet. Jeder Verlust von Details kommt aus anderen Schritten im Kodierungsprozess.

#### Intensitäts-Stereokodierung

**Intensitäts-Stereokodierung** reduziert die kodierte Audiobitrate, indem sie den Vorteil der Art und Weise nutzt, wie Menschen den Standort von Klängen im Raum bestimmen; dies wird [Klanglokalisierung](https://en.wikipedia.org/wiki/Sound_localization) genannt. Wir hören in Stereo, weil unsere Ohren einen Klang zu unterschiedlichen Zeiten erkennen, je nachdem, von wo der Klang kommt.

Dies liegt daran, dass unsere Ohren durch mehrere Zentimeter getrennt sind, dank der Tatsache, dass sie sich auf gegenüberliegenden Seiten unseres Kopfes befinden. Ein Klang, der von rechts kommt, wird unser rechtes Ohr erreichen, bevor es unser linkes Ohr erreicht. Unsere Gehirne bestimmen, wo sich der Klang im Raum um uns herum befindet, indem sie diese Zeitdifferenz nutzen, um den Winkel zu bestimmen, aus dem der Klang kommt. Wenn jedoch die Frequenz des Audiosignals sinkt, steigt die Wellenlänge an. Schließlich nähert sich die Wellenlänge dann und übertrifft die Entfernung zwischen den Ohren, und es wird schwierig oder unmöglich, den Klang eindeutig zu lokalisieren.

Mit dieser Information können wir ein Stereo-Audiosignal annähernd darstellen, indem wir die Frequenzen, die nicht zur Bestimmung der Richtwirkung verwendet werden, in einen einzigen Kanal zusammenfassen, und anschließend Informationen hinzufügen, die die Richtwirkung des Klangs angeben. Dies erfordert weniger Bits zur Darstellung, ist jedoch zwangsweise etwas verlustreich.

## Siehe auch

- [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
