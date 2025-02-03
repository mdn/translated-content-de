---
title: Digitale Audiokonzepte
slug: Web/Media/Guides/Formats/Audio_concepts
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

Um Audio in digitaler Form darzustellen, sind mehrere Schritte und Prozesse erforderlich, mit verschiedenen Formaten für sowohl das Roh-Audio als auch das kodierte oder komprimierte Audio, das tatsächlich im Web verwendet wird. Dieser Leitfaden bietet einen Überblick darüber, wie Audio digital repräsentiert wird und wie Codecs verwendet werden, um Audio für die Nutzung im Web zu kodieren und zu dekodieren.

## Abtasten von Audio

Audio ist ein inhärent analoges Merkmal der natürlichen Welt. Wenn ein Objekt vibriert, bringt es die Moleküle um sich herum ebenfalls zum Vibrieren. Diese Moleküle beeinflussen die benachbarten Moleküle und so weiter, und verbreiten die Vibration in Form einer Welle nach außen vom Ursprung, bis die Amplitude der Welle (ihre Lautstärke) mit der Entfernung nachlässt. Die Granularität einer Audio-Welle in der realen Welt entspricht einem einzelnen Molekül des Mediums, durch das die Schallwelle reist.

Auf der Erde ist das Medium, durch das die meisten Audiosignale reisen, die Luft. Einige Audiosignale reisen durch Wasser oder sogar durch das Gestein, das den Planeten bildet (wenn Sie jemals das Grollen oder Dröhnen eines Erdbebens gehört haben, haben Sie dieses Phänomen erlebt), aber fast alle Geräusche, die Sie täglich hören, erreichen Ihre Ohren durch die Luft.

Die Geräusche, die eine Person täglich hört, sind also eigentlich Vibrationen in der Luft, die das Innenleben des Ohres beeinflussen. Je weiter sich die Luftmoleküle mit jedem Puls der Welle bewegen, desto höher ist die Amplitude der Welle und desto lauter ist das Geräusch. Je schneller die Moleküle vibrieren, desto höher ist die Frequenz der Welle.

Je höher die Amplitude (Höhe) der Welle ist, desto lauter ist das Geräusch in diesem Moment. Je kürzer die Wellenlänge (je näher die Wellenkämme beieinander liegen), desto höher ist die Frequenz (oder Tonhöhe) des erzeugten Geräuschs.

![Eine einfache Schallwelle](audio-waveform.svg)

Computer sind jedoch digital. Um eine Schallwelle in einer Weise darzustellen, die Computer verarbeiten und damit arbeiten können (geschweige denn über ein Netzwerk übertragen), muss der Ton in eine digitale Form umgewandelt werden. Dieser Prozess wird **Analog-Digital-Umwandlung** (**A/D** genannt).

Der erste Faktor, der die Wiedergabetreue des erfassten Audios beeinflusst, ist die **Audio-Bandbreite**; das ist der Bereich der Audiofrequenzen, den der A/D-Wandler erfassen und in digitale Form umwandeln kann. Die Audio-Bandbreite wird auch vom Codec beeinflusst, wenn er beim Kodieren des Tons einige Frequenzbänder verwirft.

Ton gelangt als Elektronenstrom in variierender Spannung, der die Amplitude der Schallwelle darstellt, durch ein Mikrofon oder einen anderen Eingang in den Computer. Dieses analoge Signal wird dann von einer Schaltung, die die Amplitude der eingehenden Welle in regelmäßigen Abständen erfasst, in digitale Form umgewandelt. Diese Daten werden in eine Zahl in einer Form umgewandelt, die das Audioaufnahmesystem versteht. Jeder dieser erfassten Momente ist ein **Sample**. Durch die Verkettung aller Samples können Sie die ursprüngliche Welle annähernd darstellen, wie im Diagramm unten gezeigt.

![Eine Schallwelle mit regelmäßig genommenen Samples](audio-waveform-samples1.svg)

In diesem Beispiel repräsentiert die blaue Linie die von der Schallwelle (schwarz) genommenen Samples. In regelmäßigen Abständen liest die A/D-Wandlerschaltung die Spannung des Signals als einen Wert zwischen (in diesem Fall) -1,0 und +1,0. Da die Amplitude über die Dauer dieses Zeitsegments variiert, muss der A/D-Wandler einen Wert wählen, um dieses Segment darzustellen, sei es, indem er das Signal zu einem bestimmten Zeitpunkt aufnimmt (im Diagramm oben wird der Mittelpunkt jedes Segments als Wert verwendet) oder indem er die Amplitude über die Dauer jedes Samples mittelt. Diese Sample-Werte werden dann als Amplitude der Welle zu diesem Zeitpunkt aufgezeichnet.

Wenn es später an der Zeit ist, diesen Ton abzuspielen, werden diese Amplituden verwendet, um eine Annäherung an die ursprüngliche Welle zu erzeugen; anstatt eine exakte Kopie der ursprünglichen, glatten Welle wiederzugeben, wird die rauere, blaue Welle abgespielt.

Je häufiger Sie die ursprüngliche Audio abtasten, desto näher können Sie dem Original kommen. Die Anzahl der pro Sekunde genommenen Samples wird als **Sample-Rate** bezeichnet. Überlegen Sie sich die oben gezeigte Welle und wie unterschiedlich die blaue, digitale Welle aussehen würde, wenn doppelt so oft Samples genommen würden. Oder zehnmal so oft. Je mehr Samples Sie nehmen, desto glatter wird die Welle.

## Audio-Datenformat und -struktur

Auf der grundlegendsten Ebene wird Audio durch einen Strom von Samples dargestellt, die jeweils die Amplitude der Schallwelle angeben, wie sie für einen bestimmten Abschnitt der Gesamtwelle des Audiosignals gemessen wurde. Es gibt mehrere Formate, die für die einzelnen Samples innerhalb einer Audiodatei verwendet werden. Die meisten Audiodateien verwenden 16-Bit-Ganzzahlen mit Vorzeichen für jedes Sample, aber andere verwenden 32-Bit-Gleitkommawerte oder 24-Bit- oder 32-Bit-Ganzzahlen. Einige ältere Audio-Dateiformate - die Sie nicht im Web finden werden - verwendeten 8-Bit-Ganzzahlsamples. Darüber hinaus können Samples auch mit oder ohne Vorzeichen sein. Die Größe eines einzelnen Samples wird als **Sample-Größe** bezeichnet.

Die Position jeder Audioquelle innerhalb des Audiosignals wird als **Kanal** bezeichnet. Jeder Kanal enthält ein Sample, das die Amplitude des zu einem bestimmten Zeitpunkt erzeugten Tons von dieser Quelle angibt. Im Stereoton gibt es beispielsweise zwei Audioquellen: einen Lautsprecher links und einen rechts. Jeder von ihnen wird durch einen Kanal dargestellt, und die Anzahl der im Audiosignal enthaltenen Kanäle wird als **Kanalanzahl** bezeichnet.

Beim Aufzeichnen oder Generieren von Mehrkanal-Audiodateien werden die Kanäle zu einer Serie von **Audioframes** zusammengefügt, die jeweils ein Sample für jeden der Audio-Kanäle enthalten. Ein einzelnes Sample ist ein numerischer Wert, der die Amplitude der Schallwelle zu einem bestimmten Zeitpunkt darstellt und in verschiedenen Formaten dargestellt werden kann.

Stereoton ist wahrscheinlich die am häufigsten verwendete Kanalaufteilung in Web-Audio, und 16-Bit-Samples werden für die Mehrheit der heute verwendeten Audioformate verwendet. Bei 16-Bit-Stereo-Audio wird jedes von dem analogen Signal genommene Sample als zwei 16-Bit-Ganzzahlen aufgezeichnet, eine für den linken Kanal und eine für den rechten. Das bedeutet, dass jedes Sample 32 Bit Speicher benötigt. Bei der üblichen Abtastrate von 48 kHz (48.000 Samples pro Sekunde) benötigt jede Sekunde Audio 192 kB Speicher. Daher benötigt ein typisches dreiminütiges Lied etwa 34,5 MB Speicher. Das ist viel Speicherplatz, aber noch schlimmer, es ist eine unheimliche Menge an Netzwerkbandbreite, die für ein relativ kurzes Stück Audio verwendet werden muss. Deshalb wird das meiste digitale Audio komprimiert.

Der Prozess der Kompression und Dekompression von Audio wird durch Kodierung und Dekodierung mit einem Audio-**{{Glossary("codec", "Codec")}}** (**CO**der/**DE**coder) durchgeführt. Im Laufe der Jahre wurden eine Vielzahl von Codecs entwickelt, von denen mehrere häufig im Web verwendet werden. Weitere Informationen zu den wichtigsten und nützlichsten für Webentwickler finden Sie im Artikel [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs).

### Audiokanäle und -frames

Es gibt zwei Arten von Audiokanälen. Standard-Audiokanäle werden verwendet, um den Großteil des hörbaren Klangs wiederzugeben. Der Klang für die linken und rechten Hauptkanäle sowie alle Surround-Sound-Lautsprecher (Mitte, linke und rechte Rückseite, linke und rechte Seiten, Deckenkanäle usw.) sind alle Standard-Audiokanäle. Spezielle **Low Frequency Enhancement** (**LFE**)-Kanäle liefern das Signal für spezielle Lautsprecher, die dafür ausgelegt sind, die tiefen Frequenzen und Vibrationen zu erzeugen, um beim Hören des Audios ein körperliches Empfinden zu erzeugen. Die LFE-Kanäle steuern typischerweise Subwoofer und ähnliche Geräte an.

Monophones Audio hat einen Kanal, Stereoton hat zwei Kanäle, 5.1-Surround-Sound hat 6 Kanäle (fünf Standard- und einen LFE-Kanal) und so weiter. Jedes Audioframe ist ein Datenaufzeichnung, das die Samples für alle verfügbaren Kanäle in einem Audiosignal enthält. Die Größe eines Audioframes wird berechnet, indem die Sample-Größe in Bytes mit der Anzahl der Kanäle multipliziert wird, sodass ein einzelnes Frame von Stereo-16-Bit-Audio 4 Byte lang ist und ein einzelnes Frame von 5.1-Floating-Point-Audio 24 (4 Byte pro Sample multipliziert mit 6 Kanälen) lang ist.

> [!NOTE]
> Einige Codecs trennen tatsächlich die linken und rechten Kanäle und speichern sie in separaten Blöcken innerhalb ihrer Datenstruktur. Ein Audioframe besteht jedoch immer aus allen Daten aller verfügbaren Kanäle.

Die Anzahl der Frames, die eine Sekunde Audio ausmachen, variiert abhängig von der beim Aufnehmen des Tons verwendeten Abtastrate. Da die Abtastrate der Anzahl der "Scheiben" entspricht, in die eine Schallwelle für jede Sekunde Zeit unterteilt ist, wird sie manchmal als Frequenz angesehen (im Sinne einer Beschreibung von etwas, das periodisch wiederholt wird, nicht in Bezug auf die tatsächliche Audiofrequenz), und die Samples pro Sekunde Messung verwendet daher den [Hertz](https://en.wikipedia.org/wiki/Hertz) als Einheit.

Die gebräuchlichsten Abtastraten sind:

- 8000 Hz
  - : Der internationale [G.711](https://en.wikipedia.org/wiki/G.711)-Standard für Audio, der in der Telefonie verwendet wird, verwendet eine Abtastrate von 8000 Hz (8 kHz). Dies ist ausreichend, damit menschliche Sprache verständlich ist.
- 44100 Hz
  - : Die Abtastrate von 44,1 kHz wird für Compact Disc (CD)-Audio verwendet. CDs bieten unkomprimiertes 16-Bit-Stereoton bei 44,1 kHz. Auch Computeraudio verwendet häufig diese Frequenz als Standard.
- 48000 Hz
  - : Der Ton auf DVD wird mit 48 kHz aufgezeichnet. Dies wird auch oft für Computeraudio verwendet.
- 96000 Hz
  - : Hochauflösender Audioton.
- 192000 Hz
  - : Ultra-hochauflösender Audioton. Wird noch nicht häufig verwendet, aber dies wird sich im Laufe der Zeit ändern.

Es gibt einen Grund, warum 44,1 kHz als die minimale "High-Fidelity"-Abtastrate angesehen wird. Der [Nyquist-Shannon-Abtasttheorem](https://en.wikipedia.org/wiki/Nyquist-Shannon_sampling_theorem) besagt, dass zur genauen Wiedergabe eines Tons dieser mit der doppelten Frequenz der Tonfrequenz abgetastet werden muss. Da der Bereich des menschlichen Hörvermögens von etwa 20 Hz bis 20.000 Hz reicht, erfordert die Wiedergabe der höchsten Töne, die Menschen im Allgemeinen hören können, eine Abtastrate von mehr als 40.000 Hz.

Um zusätzlichen Raum für einen [Tiefpassfilter](https://en.wikipedia.org/wiki/Low-pass_filter) bereitzustellen, um Verzerrungen durch [Aliasing](https://en.wikipedia.org/wiki/Aliasing) zu vermeiden, wird dem Prä-Sampling-Frequenz eine zusätzliche [Transition Band](https://en.wikipedia.org/wiki/Transition_band) von 2,05 kHz hinzugefügt (was zu 22,050 Hz führt). Die Verdopplung gemäß Nyquist-Theorem ergibt eine endgültige Mindestfrequenz von (Sie haben es erraten) 44,1 kHz.

Hochauflösender (96 kHz) Audioton wird in einigen hochwertigen Audiosystemen verwendet, und sowohl er als auch ultra-hochauflösender (192 kHz) Audioton sind nützlich für die Audiomastering, wo Sie so viel Qualität wie möglich benötigen, während Sie den Ton manipulieren und bearbeiten, bevor Sie auf die Abtastrate herunterstufen, die Sie für das Endprodukt verwenden werden. Dies ist ähnlich wie Fotografen hochauflösende Bilder für das Editieren und Komponieren verwenden, bevor sie dem Kunden ein für den Einsatz auf einer Website geeignetes JPEG präsentieren.

### Dateigröße und Netzwerkbandbreite von Audio

Sobald Sie die Größe eines einzelnen Audioframes und die Anzahl der Frames pro Sekunde in Ihren Audiodaten kennen, können Sie leicht berechnen, wie viel Speicherplatz die tatsächlichen Rohsounddaten verbrauchen (und daher wie viel Bandbreite sie im Netzwerk verbrauchen würden).

Betrachten Sie beispielsweise einen Stereo-Audioclip (das heißt, zwei Audiokanäle) mit einer Sample-Größe von 16 Bit (2 Byte), der mit 48 kHz aufgenommen wurde:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mn>2</mn><mo>×</mo><mn>2</mn><mfrac><mrow><mi>bytes</mi></mrow><mrow><mi>sample</mi></mrow></mfrac><mo>×</mo><mn>48000</mn><mfrac><mrow><mi>samples</mi></mrow><mrow><mi>second</mi></mrow></mfrac><mo>=</mo><mn>192000</mn><mfrac><mrow><mi>bytes</mi></mrow><mrow><mi>second</mi></mrow></mfrac><mo>=</mo><mn>192</mn><mi>kBps</mi></mrow><annotation encoding="TeX">2 \times 2\frac { bytes }{ sample } \times 48000\frac { samples }{ second } = 192000\frac { bytes }{ second } = 192 kBps</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Bei 192 kBps werden niedrigere Netzwerke bereits alleine durch einen einzigen Audiostream stark belastet. Wenn das Netzwerk auch andere Dinge tut, tritt das Problem auch bei Netzwerken mit höherer Bandbreite auf. Bei so viel Konkurrenz um die Netzwerkfähigkeit, insbesondere auf langsameren Netzwerken, kann diese Datenmenge zu viel sein, um in realen Anwendungen viabel zu übertragen.

Um dieses Problem zu lösen, muss das Audio durch Kompression verkleinert werden.

> [!NOTE]
> Netzwerkbandbreite ist offensichtlich nicht dasselbe wie Audiobandbreite, die im Abschnitt [Abtasten von Audio](#abtasten_von_audio) oben behandelt wird.

## Grundlagen der Audiokompression

Im Gegensatz zu Text und vielen anderen Arten von Daten neigen Audiodaten dazu, **rauschig** zu sein, was bedeutet, dass die Daten selten aus einer Reihe von exakt wiederholten Bytes oder Bytesequenzen bestehen. Dadurch sind Audiodaten schwierig mit traditionellen Algorithmen zu komprimieren, wie sie von allgemeinen Tools wie `zip` verwendet werden, die normalerweise durch Ersetzen von sich wiederholenden Datensequenzen durch eine Kurzform-Repräsentation arbeiten.

Es gibt mehrere Techniken, die bei der Komprimierung von Audio angewendet werden können. Die meisten Codecs verwenden eine Kombination dieser Techniken und möglicherweise auch andere.

Das einfachste, was Sie tun können, ist, einen Filter anzuwenden, der Zischen und leise Geräusche entfernt, indem er leise Abschnitte in Stille umwandelt und das Signal glättet. Dies kann Strecken der Stille sowie andere sich wiederholende oder nahezu wiederholende Signale erzeugen, die verkürzt werden können.

Sie können einen Filter anwenden, der die Audiobandbreite verengt, indem er alle Audiofrequenzen entfernt, die Ihnen nicht wichtig sind. Dies ist besonders nützlich für Audio-Signale, die nur Sprache enthalten. Durch das Entfernen von Daten wird das resultierende Signal wahrscheinlich einfacher zu komprimieren.

### Psychoakustik

Wenn Sie wissen, welche Art von Audio Sie höchstwahrscheinlich verarbeiten werden, können Sie möglicherweise spezielle Filtertechniken finden, die speziell auf diese Art von Geräuschen anwendbar sind, die die Kodierung optimieren.

Die am häufigsten verwendeten Kompressionsmethoden für Audio wenden die Wissenschaft der **[Psychoakustik](https://en.wikipedia.org/wiki/Psychoacoustics)** an. Dies ist die Wissenschaft, die untersucht, wie Menschen Töne wahrnehmen und welche Teile der Audiofrequenzen, die wir hören, am wichtigsten sind, um zu bestimmen, wie wir auf diese Geräusche reagieren, abhängig vom Kontext und Inhalt des Tons. Faktoren wie die Fähigkeit, eine Änderung der Tonfrequenz wahrzunehmen, der gesamte Bereich des menschlichen Hörens im Vergleich zu den Frequenzen des Audiosignals, Audiolokalisierung usw. können alle von einem Codec berücksichtigt werden.

Durch den Einsatz eines fundierten Verständnisses der Psychoakustik ist es möglich, eine Kompressionsmethode zu entwerfen, die die komprimierte Größe des Audios minimiert und gleichzeitig die wahrgenommene Wiedergabetreue des Tons maximiert. Ein Algorithmus, der Psychoakustik verwendet, kann eine dieser Techniken verwenden und wird nahezu sicher auch andere Techniken anwenden.

All dies bedeutet, dass eine grundlegende Frage gestellt und beantwortet werden muss, bevor ein Codec gewählt wird: In Anbetracht des Inhalts des Tons, des Nutzungskontexts und der Zielgruppe, ist es akzeptabel, einen gewissen Grad an Audioqualität zu verlieren, und wenn ja, wie viel; oder ist es notwendig, dass das Ergebnis beim Dekodieren der Daten mit dem Quell-Audio identisch ist?

### Verlustbehaftete vs. verlustfreie Kompression

Wenn der Verlust von Details und potenziell Wiedergabetreue inakzeptabel oder unerwünscht ist, wird ein **verlustfreier** Codec bevorzugt. Andererseits, wenn ein gewisser Grad an Reduktion der Audioqualität in Ordnung ist, kann ein **verlustbehafteter** Codec verwendet werden. Im Allgemeinen führt verlustbehaftete Kompression zu erheblich kleineren Ausgaben als verlustfreie Kompressionsmethoden; auch sind viele verlustbehaftete Codecs ausgezeichnet, und der Verlust an Qualität und Details ist für den durchschnittlichen Zuhörer schwer oder sogar unmöglich zu erkennen.

> [!NOTE]
> Während die Auswirkungen eines hochwertigen verlustbehafteten Komprimierungsalgorithmus auf die Tonqualität für den Durchschnittsmenschen schwer zu erkennen sein können, haben bestimmte Personen außergewöhnlich gutes Gehör oder sind besonders geschickt darin, die durch verlustbehaftete Kompressionstechniken eingeführten Änderungen in der Musik zu erkennen.

Die Mehrheit der Audio-Codecs verwendet einige Form von verlustbehafteter Kompression, weil die besseren Kompressionsraten dieser Algorithmen bieten. Während verlustfreie Kompressionsalgorithmen gewöhnlich nicht besser als auf 40-50% der Größe der ursprünglichen, unkomprimierten Audiodaten kommen, können moderne verlustbehaftete Komprimierungsalgorithmen die Größe des Audios je nach Komplexität des Audios auf 5-20% der ursprünglichen Größe reduzieren. Die mit verlustbehafteter Kompression möglichen weitaus überlegenen Kompressionsraten machen es in der Regel zu einer überzeugenden Wahl, und angemessene oder ausgezeichnete Audioqualität ist mit gut gewählten Codec-Konfigurationen möglich.

Forscher entwickeln weiterhin bessere Möglichkeiten, Audio zu analysieren und zu komprimieren, sodass regelmäßig neue Formate erscheinen, die verschiedene Verbesserungen bieten, sei es im Kompressionsverhältnis oder in der Audioqualität (oder beidem).

Verwendungsfälle für verlustfreies Audio umfassen Szenarien wie:

- Jede Situation, in der der Zuhörer eine präzise Audiowiedergabe erwartet und möglicherweise ein Gehör für Sound hat, das gut genug ist, um die feinen Details des unverfälschten Audios zu erkennen
- Audioloops und Samples, die in Musik- und Soundeffektherstellungsarbeiten verwendet werden
- Situationen, in denen Audioclips oder Samples möglicherweise remixt und dann komprimiert werden; die Verwendung verlustfreier Audiodaten für den Mastering-Prozess vermeidet die Komprimierung bereits komprimierter Daten, was zu einem zusätzlichen Qualitätsverlust führt

Faktoren, die die Verwendung von verlustbehafteter Kompression empfehlen könnten, umfassen:

- Sehr große Quell-Audiodaten
- Eingeschränkter Speicher (entweder weil der Speicherplatz klein ist oder weil viel Sound darin gespeichert werden muss)
- Notwendigkeit, die Netzwerkbandbreite einzuschränken, die erforderlich ist, um das Audio zu übertragen; dies ist insbesondere für Live-Streams und Videokonferenzen wichtig

## Psychoakustik 101

Obwohl es weit über den Rahmen dieses Artikels hinausgeht, in die Details der Psychoakustik und der Funktionsweise der Audiokompression einzutauchen, kann ein allgemeines Verständnis davon, wie Audio durch gängige Algorithmen komprimiert wird, helfen, bessere Entscheidungen über die Auswahl von Audio-Codecs zu treffen.

Verlustbehaftete Komprimierungsalgorithmen verwenden im Allgemeinen Psychoakustik, um festzustellen, welche Komponenten einer Schallwelle verloren gehen oder in gewisser Weise unterdrückt werden können, was die Kompressionsraten verbessern kann, während die hörbare Wirkung für die Zielzuhörer minimiert wird. Indem sie die Schallwelle so manipulieren, dass sie leichter zu komprimieren ist oder Komponenten des Tons entfernt, die nicht wirklich gehört werden, wird die Schallwelle einfacher, wodurch Daten entstehen, die konsistenter sind und daher leichter komprimiert werden können. Die Begrenzung der Audiobandbreite auf nur die Frequenzen, die für die menschliche Interpretation des dekodierten Tons am wichtigsten sind, kann ebenfalls die Kompressionsfaktoren verbessern.

Die Art des zu kodierenden Inhalts kann die Wahl des Codecs beeinflussen. Besonders die Schallwelle von Musik ist fast immer komplexer als die eines Audiosamples, das nur menschliche Stimmen enthält. Darüber hinaus verwendet die menschliche Stimme nur einen kleinen Teil des Frequenzbereichs, den das menschliche Ohr wahrnehmen kann.

> [!NOTE]
> Telefonnetze, die ursprünglich speziell zur Übertragung menschlicher Stimmen entwickelt wurden, können nur Audios (oder jede andere Art von Signal) im Frequenzband von 300 Hz bis 3.000 Hz übertragen. Dies umfasst nicht ganz den gesamten Bereich der menschlichen Sprache am unteren Ende, doch genug der Welle ist verfügbar, dass das menschliche Ohr und Gehirn leicht kompensieren. Dies bedeutet auch, dass Menschen im Allgemeinen daran gewohnt sind, Sprache zu hören, die auf solch eine enge Audiobandbreite beschränkt ist.

Die menschliche Sprache verwendet ein relativ schmales Frequenzband (etwa 300 Hz bis 18.000 Hz, obwohl der genaue Bereich von Person zu Person aufgrund von Faktoren wie Geschlecht variiert). Darüber hinaus liegen die meisten menschlichen Sprachlaute zwischen etwa 500 Hz und 3.000 Hz, was es ermöglicht, wesentliche Teile der gesamten Schallwelle zu entfernen, ohne die Fähigkeit des Zuhörers zu beeinträchtigen, die gesprochenen Worte zu verstehen. Sie können sogar die Audiobandbreite anpassen, um die Tonhöhe der Stimme des jeweiligen Sprechers zu berücksichtigen.

Wenn aufgrund all dieser Faktoren und der Tatsache, dass Sprachwellenformen typischerweise weniger komplex als Musik sind, eine hohe (und insbesondere "hinreichend hohe") Wiedergabetreue von Sprache mit einer relativ niedrigen Bitrate erreicht werden kann.

Wenn ein Komprimierungsalgorithmus, der für die Komprimierung allgemeiner Audiosignale entwickelt wurde, eine Schallwelle analysiert, kann er alles außerhalb des Bereichs menschlichen Hörens (oder möglicherweise sogar mehr, abhängig davon, wie sehr der Algorithmus bereit ist, Details am hohen und/oder niedrigen Ende des Frequenzbandes zu verlieren) verwerfen. Das bedeutet, dass der Codec Audio mit Frequenzen unter etwa 20 Hz oder über etwa 20.000 Hz (20 kHz) verwerfen kann. Dadurch wird die Audiobandbreite des Tons verringert, was die Menge an Daten reduziert, die erforderlich sind, um das Signal in seiner komprimierten Form darzustellen. Die Audiobandbreite kann nicht so stark reduziert werden wie bei einem nur für Sprache ausgelegten Codec, aber es ist dennoch ein hilfreicher Anfang.

Einige Menschen können diese Reichweite zumindest teilweise hören. In der Regel ist das Hörvermögen der Menschen für hohe Frequenzen jedoch eher geringer; es ist besonders erwähnenswert, dass das obere Ende dieses Frequenzbereichs im mittleren Alter in der Regel von 20 kHz auf etwa 12 kHz bis 14 kHz fällt. Dies deutet darauf hin, dass die höheren Frequenzen oft verworfen werden können, ohne die Verständlichkeit des Tons übermäßig zu beeinträchtigen, sodass Sie erheblich reduzieren können, wie viel des Audio-Raums Sie beibehalten müssen, wodurch Ihr Ton einfacher und leichter zu komprimieren wird.

Dies wird im Diagramm unten dargestellt. Das Diagramm vergleicht den Frequenzbereich des menschlichen Hörens (grün) mit dem Frequenzbereich der menschlichen Sprache (rot) und dem Bereich, in dem die Mehrheit menschlicher Sprachlaute liegt (gelb).

![Diagramm, das den Bereich des menschlichen Hörens mit dem der menschlichen Sprache vergleicht](human-hearing-range.svg)

Die großen Unterschiede zwischen diesen Bereichen geben uns Spielraum, um Details in Audiodaten zu verlieren, ohne die Fähigkeit des menschlichen Ohrs erheblich zu beeinträchtigen, irgendwelche realen Veränderungen in der Tonqualität zu bemerken. Diese Fakten können bei der Audiokompression ausgenutzt werden.

Neben der Vereinfachung des Tons durch psychoakustische Analyse verwenden Codecs andere Algorithmen und Transformationen, um die Größe des Audios weiter zu vereinfachen und zu reduzieren. Wenn Sie mehr über die Funktionsweise der Komprimierung bei Audio erfahren möchten, sehen Sie sich [Audiokompressionsdaten](https://en.wikipedia.org/wiki/Data_compression#Audio) auf Wikipedia an.

Wichtig ist, dass Codecs all die harte Arbeit für Sie übernehmen. Dies ist der Grund, warum so viel Ingenieurarbeit und wissenschaftliche Studien in die Erstellung neuer Algorithmen und Codecs investiert wird. Alles, was Sie tun müssen, ist, die Optionen zu berücksichtigen und Ihren Anwendungsfall zu bestimmen und dann den passenden Codec für Ihre Bedürfnisse auszuwählen.

> [!NOTE]
> Einen detaillierteren Leitfaden zur Auswahl von Audiocodecs finden Sie unter [Einen Audiocodec auswählen](/de/docs/Web/Media/Guides/Formats/Audio_codecs#choosing_an_audio_codec).

## Verlustfrei-Encoder-Parameter

Verlustfreie Encoder haben viel weniger Spielraum, um das Audio zu manipulieren, um die Kompressionsrate zu verbessern, angesichts der Notwendigkeit, das ursprüngliche Audio reproduzieren zu können, was die Anzahl der verfügbaren Optionen zur Konfiguration dieser Encoder einschränkt. Die Optionen bestehen in der Regel darin, die Methode auszuwählen, mit der der Encoder die Kodierung ausführt, und wie viel Zeit und Prozessorleistung er dafür verbrauchen darf.

Diese Parameter variieren je nach Codec, können aber Folgendes umfassen:

- Die Angabe spezifischer Algorithmen, die während bestimmter Phasen des Kodierungsprozesses verwendet werden sollen
- Parameter für diese Algorithmen zur Verwendung, wie z. B. die Vorhersagetiefe, die beim Modellieren des Audios verwendet werden soll
- Die Anzahl der Durchläufe, die beim Analysieren des Audios durchgeführt werden sollen, oder die Anzahl der Male, die bestimmte Algorithmen ausgeführt werden sollen

## Verlustbehafteter Encoder-Parameter

Die meisten Codecs haben Eingabewerte, die Sie anpassen können, um die Komprimierung auf verschiedene Arten zu optimieren, sei es für die Größe oder für die Qualität. Bei der Verwendung eines verlustbehafteten Encoders ist die Qualität umso höher, je größer das kodierte Audio ist. Aus diesem Grund beeinflussen die meisten Optionen sowohl die Qualität als auch die Größe in gewisser Weise.

Sie müssen die Dokumentation der von Ihnen verwendeten Codierungssoftware konsultieren, um festzustellen, welche Optionen verfügbar sind, was vom Codec und der Codierungssoftware selbst abhängt. Einige Codecs haben eine Reihe von Werten, die Sie anpassen können (von denen einige ein tiefes Verständnis sowohl der Psychoakustik als auch der Algorithmen des Codecs erfordern können), während andere einfach einen "Qualitätsparameter" bieten, den Sie einstellen können und der automatisch verschiedene Eigenschaften des Algorithmus anpasst.

### Bitrate

Es gibt zwei wechselseitig ausschließbare Methoden, um die Qualität des komprimierten Audios unter Verwendung der Bitrate zu steuern. Die erste Methode umfasst das Ziel einer durchschnittlichen Bitrate für die codierten Daten, während die zweite Methode das festlegen eines konstanten Qualitätswertes zur Zielvorgabe erlaubt, während die Bitrate variieren darf.

#### Durchschnittliche Bitrate

Die erste Methode zur Steuerung der Qualität der Ausgabedatei besteht darin, die **Durchschnittliche Bitrate** (**ABR**) zu spezifizieren, die beim Kodieren des Audios angestrebt wird. Der Encoder versucht, eine codierte Audiodatei zu erstellen, die beim Abspielen im Durchschnitt die angegebene Anzahl von Bits für jede Sekunde Audio verwendet. Dadurch wird die Qualität aus der Perspektive der codierten Audiodateigröße gesteuert; je höher die Bitrate, desto höher wird die resultierende Audioqualität sein. Die Qualität des Tons schwankt im Laufe der Zeit je nach Bedarf, um die angestrebte Bitrate zu erreichen.

Etwas ähnlich wie ABR ist **CBR** (**Konstante Bitrate**). Während ABR versucht, die Bitrate im Durchschnitt auf einem bestimmten Level zu halten, während es einige Schwankungen erlaubt, verwendet CBR eine tatsächlich feste Bitrate für die Dauer des Audios. CBR wird hauptsächlich in für Sprechzwecke entwickelten Codecs verwendet, wo der Frequenzbereich und die Variation minimal sind und CBR-Codierung ohne unwägbare Schwankungen in der Tonqualität funktionieren kann.

#### Variable Bitrate

Die **Variable Bitrate** (**VBR**)-Kodierung funktioniert, indem sie als Eingabe für den Encoder eine **konstanten Qualitäts**-Einstellung akzeptiert. Dies gibt an, dass ein Qualitätsstandard für die Dauer des Audios eingehalten werden soll, wodurch die Bitrate je nach Bedarf schwanken kann, um diesen Qualitätsstandard zu erreichen. In Abschnitten des Tons, in denen die Komprimierung mit minimaler Auswirkung auf die Qualität leicht erreicht werden kann, kann die Bitrate sehr niedrig sein, während in Bereichen, in denen die Komprimierung komplexer ist, die Bitrate höher sein wird.

### Audiobandbreite

Einige Codecs ermöglichen es Ihnen, die Audiobandbreite direkt zu konfigurieren, entweder indem Sie den Frequenzbereich angeben, der erlaubt ist, indem Sie obere und/oder untere Frequenzgrenzen festlegen, oder indem Sie einen Audioquelletyp angeben, der bestimmt, wie der Algorithmus basierend auf der erwarteten Frequenzverwendung des eingehenden Signals zu konfigurieren ist.

Darüber hinaus unterstützen einige Codecs spezielle Kanäle mit eingeschränkter Frequenzbandbreite, wie den LFE-Kanal, der von Natur aus den verfügbaren Frequenzbereich einschränkt. Im Fall von LFE ist die Audiobandbreite auf einen Frequenzbereich beschränkt, der für die Verwendung durch einen Subwoofer oder ein ähnliches Gerät zur Verbesserung des Audioerlebnisses geeignet ist.

Einige Codecs bieten spezielle Profile, die speziell für bestimmte Nutzungsszenarien gedacht sind, wie z.B. VoIP; diese Profile können standardmäßig auch mit Einschränkungen der Audiobandbreite einhergehen.

### Joint Stereo

Stereosound wird typischerweise durch Audioframes mit einem Sample pro Kanal dargestellt. Dadurch ergeben sich Audioframes, die jeweils 2 mal _SampleSize_ Bits erfordern, wobei _SampleSize_ die Anzahl der Bits ist, die jede Audiosample benötigt. Daher verwendet jedes Sample bei einer 16-Bit-Stereo-Audioaufnahme 2 mal 16, also 32, Bits Speicherplatz. Dies ist Standard-Links/Rechts (L/R)-Stereo oder **einfaches Stereo**.

**Joint Stereo** ist eine Methode, Stereoaudiosamples platzsparender zu speichern, indem berücksichtigt wird, dass der Klang, der jedes Ohr erreicht, normalerweise ähnlich ist. Anstatt jedes Bit aus dem Sample jedes Kanals zu speichern, werden eine Grundamplitude und ein pro-Kanal-Amplitudendifferenzwert gespeichert, wobei der Differenzwert möglicherweise weniger Bits als ein vollständiges Sample verwendet.

Es gibt zwei Arten von Joint Stereo: Mittelseitenschrift und Intensität. Im Verlauf einer Audiodatei kann der Encoder ändern, welches Format verwendet wird, um das Stereosignal im Verlauf der Audiodatei darzustellen.

#### Mittelseitenschrift Stereo-Kodierung

**Mittelseitenschrift Stereo-Kodierung** (**MS**) funktioniert, indem Frames aufgezeichnet werden, die einen grundlegenden **Mittikanal** enthalten, der die durchschnittliche Amplitude der ursprünglichen linken und rechten Audio-Kanäle ist. Dies entspricht im Wesentlichen dem, was Sie als Amplitude beim Umwandeln eines Stereosignals in Mono berechnen würden. Dann speichern Sie den **Seitenkanal**-Wert; dieser Wert ist eine Zahl, die zur **Mittikanal**-Wert hinzugefügt werden kann, um die ursprüngliche Amplitude des linken Kanals zu bestimmen, und von der Mittelkanal-Wert subtrahiert werden kann, um den ursprünglichen Wert des rechten Kanals zu berechnen.

Mit anderen Worten, gegeben ein linker Kanal, L, und ein rechter Kanal, R, führen Sie die folgenden Berechnungen beim Kodieren eines Samples durch:

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

Dann speichern Sie die Werte von `mid` und `side`. Während `mid` immer noch die gleiche Größe wie Ihre sample Größe ist (wie z.B. 16 Bit), kann der Wert von `side` wahrscheinlich in einer kleineren Anzahl von Bits gespeichert werden, da die Amplitude der beiden Kanäle wahrscheinlich relativ ähnlich ist. Der Encoder kann dann diese kleinere Anzahl an Gesamtbits für jeden Frame verwenden und zusätzliche Berechnungen durchführen, um die Größe weiter zu reduzieren.

Beim Dekodieren des Tons werden die absoluten linken und rechten Kanalwerte wie folgt berechnet:

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

Allein genommen ist die Mittelseitenschrift-Stereokodierung verlustfrei und wird von sowohl verlustfreien als auch verlustbehafteten Audiocodecs verwendet. Jeglicher Detailverlust kommt von anderen Schritten im Kodierungsprozess.

#### Intensität Stereo-Kodierung

**Intensität Stereo-Kodierung** reduziert die kodierte Audio-Bitrate, indem sie den Vorteil der Art und Weise nutzt, wie Menschen den Standort von Klängen im Raum bestimmen; dies wird als [Schalllokalisierung](https://en.wikipedia.org/wiki/Sound_localization) bezeichnet. Wir hören in Stereo, weil unsere Ohren einen Klang zu unterschiedlichen Zeiten registrieren, je nachdem, woher der Klang kommt.

Das liegt daran, dass unsere Ohren einige Zentimeter voneinander getrennt sind, da sie auf gegenüberliegenden Seiten unseres Kopfes liegen. Ein Klang, der von rechts kommt, erreicht unser rechtes Ohr, bevor er unser linkes Ohr erreicht. Unsere Gehirne bestimmen, wo der Klang im Raum um uns herum ist, indem sie diesen Zeitunterschied nutzen, um den Winkel zu ermitteln, aus dem der Klang kommt. Wenn die Frequenz des Audiosignals jedoch nachlässt, steigt die Wellenlänge. Schließlich nähert sich die Wellenlänge der Entfernung zwischen den Ohren an und überschreitet sie dann, und es wird schwierig oder unmöglich, den Klang eindeutig zu lokalisieren.

Bewaffnet mit diesen Informationen können wir ein Stereoaudiosignal annähernd darstellen, indem wir die Frequenzen, die nicht zur Bestimmung der Richtung verwendet werden, in einen einzigen Kanal zusammenführen und dann Informationen hinzufügen, die die Richtung des Klangs angeben. Dies erfordert weniger Bits zur Darstellung, ist jedoch von Natur aus etwas verlustbehaftet.

## Siehe auch

- [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
