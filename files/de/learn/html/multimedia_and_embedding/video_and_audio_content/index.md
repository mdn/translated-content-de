---
title: Video- und Audioinhalte
slug: Learn/HTML/Multimedia_and_embedding/Video_and_audio_content
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Images_in_HTML", "Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding")}}

Nachdem wir nun mit dem Hinzufügen einfacher Bilder zu einer Webseite vertraut sind, ist der nächste Schritt, Video- und Audio-Player in Ihre HTML-Dokumente einzufügen! In diesem Artikel sehen wir uns an, wie das mit den Elementen `<video>` und `<audio>` gelingt; anschließend betrachten wir, wie Sie Untertitel zu Ihren Videos hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, Vertrautheit mit den Grundlagen von HTML (wie behandelt in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Einführung in HTML</a
        >) und
        <a href="/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
          >Bilder in HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Video- und Audioinhalte in eine Webseite einbettet und Untertitel zu Videos hinzufügt.
      </td>
    </tr>
  </tbody>
</table>

## Video und Audio im Web

Die ersten Wellen von Online-Videos und -Audio waren durch proprietäre plugin-basierte Technologien wie [Flash](https://en.wikipedia.org/wiki/Adobe_Flash) und [Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight) möglich geworden. Beide hatten Sicherheits- und Zugänglichkeitsprobleme und sind heute zugunsten nativer HTML-Lösungen wie der Elemente `<video>` und `<audio>` sowie der Verfügbarkeit von [JavaScript](/de/docs/Glossary/JavaScript)-[APIs](/de/docs/Glossary/API) für deren Steuerung veraltet. Wir werden hier nicht auf JavaScript eingehen — nur die grundlegenden Grundlagen, die mit HTML erreicht werden können.

Wir zeigen Ihnen nicht, wie Sie Audio- und Video-Dateien produzieren — das erfordert eine komplett andere Kenntnisbasis. Wir haben Ihnen [Beispiel-Audio- und Videodateien sowie Beispielcode](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) zur Verfügung gestellt, mit denen Sie experimentieren können, falls Sie keine eigenen aufnehmen können.

> [!NOTE]
> Bevor Sie hier beginnen, sollten Sie wissen, dass es einige OVPs (Online Video Providers) wie [YouTube](https://www.youtube.com/), [Dailymotion](https://www.dailymotion.com/) und [Vimeo](https://vimeo.com/) gibt, sowie Online-Audio-Anbieter wie [Soundcloud](https://soundcloud.com/). Solche Unternehmen bieten eine bequeme, einfache Möglichkeit, Videos zu hosten und zu konsumieren, sodass Sie sich keine Gedanken über den enormen Bandbreitenverbrauch machen müssen. OVPs bieten in der Regel auch vorgefertigten Code zum Einbetten von Video/Audio in Ihre Webseiten an; wenn Sie diesen Weg wählen, können Sie einige der Schwierigkeiten vermeiden, die wir in diesem Artikel besprechen. Wir werden diese Art von Dienstleistung im nächsten Artikel etwas mehr diskutieren.

### Das `<video>`-Element

Das `<video>`-Element ermöglicht es Ihnen, ein Video sehr einfach einzubetten. Ein wirklich einfaches Beispiel sieht so aus:

```html
<video src="rabbit320.webm" controls>
  <p>
    Your browser doesn't support HTML video. Here is a
    <a href="rabbit320.webm">link to the video</a> instead.
  </p>
</video>
```

Wichtige Merkmale sind:

- [`src`](/de/docs/Web/HTML/Element/video#src)
  - : Ebenso wie beim `<img>`-Element enthält das `src` (Quelle)-Attribut den Pfad zum Video, das Sie einbetten möchten. Es funktioniert genauso.
- [`controls`](/de/docs/Web/HTML/Element/video#controls)
  - : Benutzer müssen in der Lage sein, die Wiedergabe von Video und Audio zu steuern (dies ist besonders wichtig für Menschen mit [Epilepsie](https://en.wikipedia.org/wiki/Epilepsy#Epidemiology).) Sie müssen entweder das `controls`-Attribut verwenden, um die eigene Steuerungsschnittstelle des Browsers einzuschließen, oder Ihre eigene Schnittstelle mit der entsprechenden [JavaScript API](/de/docs/Web/API/HTMLMediaElement) erstellen. Die Schnittstelle muss mindestens die Möglichkeit bieten, das Medium zu starten und zu stoppen und die Lautstärke einzustellen.
- Der Absatz innerhalb der `<video>`-Tags
  - : Dies nennt man **Ersatzinhalte** — diese werden angezeigt, wenn der Browser, der auf die Seite zugreift, das `<video>`-Element nicht unterstützt und uns so die Möglichkeit bietet, eine Rückfallebene für ältere Browser bereitzustellen. Das kann alles sein, was Sie möchten; in diesem Fall haben wir einen direkten Link zur Videodatei bereitgestellt, damit der Benutzer zumindest auf irgendeine Weise darauf zugreifen kann, unabhängig davon, welchen Browser er verwendet.

Das eingebettete Video sieht so aus:

![Ein einfacher Videoplayer, der ein Video eines kleinen weißen Kaninchens zeigt](simple-video.png)

Sie können [das Beispiel live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/simple-video.html).)

### Verwendung mehrerer Quellformate zur Verbesserung der Kompatibilität

Bei dem obigen Beispiel gibt es ein Problem. Es ist möglich, dass das Video bei Ihnen nicht abgespielt wird, da verschiedene Browser unterschiedliche Video- (und Audio-) Formate unterstützen. Glücklicherweise gibt es Möglichkeiten, dies zu vermeiden.

#### Inhalt einer Mediendatei

Zunächst gehen wir schnell durch die Terminologie. Formate wie MP3, MP4 und WebM werden als **[Containerformate](/de/docs/Web/Media/Formats/Containers)** bezeichnet. Sie definieren eine Struktur, in der die Audio- und/oder Videospuren, aus denen das Medium besteht, gespeichert werden, zusammen mit Metadaten, die das Medium beschreiben, welche Codecs verwendet wurden, um seine Kanäle zu kodieren, und so weiter.

Eine WebM-Datei, die einen Film mit einer Hauptvideospur und einer alternativen Winkelansicht enthält, sowie Audio in Englisch und Spanisch, zusätzlich zu Audio für eine englische Kommentarspur, kann wie in der nachstehenden Grafik dargestellt konzeptioniert werden. Ebenfalls enthalten sind Textspuren mit geschlossenen Untertiteln für den Spielfilm, spanische Untertitel für den Film und englische Untertitel für den Kommentar.

![Diagramm zur Konzeptualisierung des Inhalts einer Mediendatei auf Track-Ebene.](containersandtracks.png)

Die Audio- und Videospuren innerhalb des Containers enthalten Daten im entsprechenden Format für den Codec, der zur Kodierung dieses Mediums verwendet wurde. Für Audio- und Videospuren werden unterschiedliche Formate verwendet. Jede Audiospur wird unter Verwendung eines [Audio-Codecs](/de/docs/Web/Media/Formats/Audio_codecs) kodiert, während Videospuren, wie Sie wahrscheinlich schon erraten haben, mit einem [Video-Codec](/de/docs/Web/Media/Formats/Video_codecs) kodiert werden. Wie wir bereits besprochen haben, unterstützen verschiedene Browser unterschiedliche Video- und Audioformate sowie unterschiedliche Containerformate (wie MP3, MP4 und WebM, die wiederum verschiedene Arten von Videos und Audios enthalten können).

Ein Beispiel:

- Ein WebM-Container kombiniert typischerweise Vorbis- oder Opus-Audio mit VP8/VP9-Video. Dies wird in allen modernen Browsern unterstützt, obwohl ältere Versionen eventuell nicht funktionieren.
- Ein MP4-Container kombiniert häufig AAC- oder MP3-Audio mit H.264-Video. Dies wird ebenfalls in allen modernen Browsern unterstützt.
- Der Ogg-Container neigt dazu, Vorbis-Audio und Theora-Video zu verwenden. Dies wird am besten in Firefox und Chrome unterstützt, wurde aber im Wesentlichen vom qualitativ besseren WebM-Format abgelöst.

Es gibt einige Sonderfälle. Zum Beispiel wird für einige Arten von Audio die Codierungsdaten eines Codecs häufig ohne Container oder in einem vereinfachten Container gespeichert. Ein solches Beispiel ist der FLAC-Codec, der am häufigsten in FLAC-Dateien gespeichert wird, die lediglich rohe FLAC-Spuren sind.

Ein weiteres solches Beispiel ist die immer beliebte MP3-Datei. Eine "MP3-Datei" ist tatsächlich eine MPEG-1-Audio-Layer-III (MP3)-Audiospur, die in einem MPEG- oder MPEG-2-Container gespeichert ist. Dies ist besonders interessant, da während die meisten Browser die Verwendung von MPEG-Medien in den Elementen `<video>` und `<audio>` nicht unterstützen, sie dennoch MP3 aufgrund ihrer Popularität unterstützen können.

Ein Audioplayer wird tendenziell eine Audiospur direkt abspielen, z. B. eine MP3- oder Ogg-Datei. Diese benötigen keine Container.

#### Mediendateiunterstützung in Browsern

> [!NOTE]
> Mehrere beliebte Formate, wie MP3 und MP4/H.264, sind ausgezeichnet, aber aufgrund von Patenten belastet; das heißt, es gibt Patente, die einige oder alle Technologien abdecken, auf denen sie basieren. In den Vereinigten Staaten waren die Patente auf MP3 bis 2017 gültig, und H.264 ist mindestens bis 2027 durch Patente belastet.
>
> Aufgrund dieser Patente müssen Browser, die eine Unterstützung für diese Codecs implementieren wollen, in der Regel enorme Lizenzgebühren zahlen. Darüber hinaus ziehen es einige Benutzer vor, eingeschränkte Software zu vermeiden und verwenden lieber nur offene Formate. Aufgrund dieser rechtlichen und bevorzugten Gründe sehen sich Webentwickler gezwungen, mehrere Formate zu unterstützen, um ihr gesamtes Publikum abzudecken.

Die in der vorherigen Sektion beschriebenen Codecs dienen dazu, Video und Audio in handhabbare Dateien zu komprimieren, da rohe Audio- und Videodaten beide äußerst groß sind. Jeder Webbrowser unterstützt eine Auswahl von **[Codecs](/de/docs/Glossary/Codec)**, wie Vorbis oder H.264, die verwendet werden, um die komprimierten Audio- und Videodaten in Binärdaten zu konvertieren und zurück. Jeder Codec bietet seine eigenen Vor- und Nachteile, und jeder Container kann auch seine eigenen positiven und negativen Funktionen mit sich bringen, die Ihre Entscheidungen über die Auswahl beeinflussen.

Die Dinge werden etwas komplizierter, da nicht nur jeder Browser einen anderen Satz von Containerdateiformaten unterstützt, sondern auch eine unterschiedliche Auswahl an Codecs. Um die Wahrscheinlichkeit zu maximieren, dass Ihre Website oder App in einem Browser eines Benutzers funktioniert, müssen Sie möglicherweise jede von Ihnen verwendete Mediendatei in mehreren Formaten bereitstellen. Wenn Ihre Website und der Browser des Benutzers kein gemeinsames Medienformat haben, wird Ihr Medium nicht abgespielt.

Aufgrund der Komplexität, sicherzustellen, dass Ihre Medien in jeder Kombination von Browsern, Plattformen und Geräten angezeigt werden können, die Sie erreichen möchten, kann die Auswahl der besten Kombination von Codecs und Containern eine komplizierte Aufgabe sein. Sehen Sie sich [die Auswahl des richtigen Containers](/de/docs/Web/Media/Formats/Containers#choosing_the_right_container) an, um Unterstützung bei der Auswahl des am besten geeigneten Container-Dateiformats zu erhalten; ebenso sehen Sie sich [die Auswahl eines Video-Codecs](/de/docs/Web/Media/Formats/Video_codecs#choosing_a_video_codec) und [die Auswahl eines Audio-Codecs](/de/docs/Web/Media/Formats/Audio_codecs#choosing_an_audio_codec) an, um Unterstützung bei der Auswahl der ersten Mediencodecs für Ihren Inhalt und Ihr Zielpublikum zu erhalten.

Ein weiterer Punkt, den Sie beachten sollten: Mobile Browser unterstützen möglicherweise zusätzliche Formate, die von ihren Desktop-Gegenstücken nicht unterstützt werden, ebenso wie sie möglicherweise nicht alle gleichen Formate unterstützen, die in der Desktop-Version verfügbar sind. Darüber hinaus können sowohl Desktop- als auch Mobile-Browser so konzipiert sein, dass sie die Handhabung der Medienwiedergabe (entweder für alle Medien oder nur für bestimmte Typen, die sie nicht intern verarbeiten können) auslagern. Dies bedeutet, dass die Medienunterstützung teilweise davon abhängt, welche Software der Benutzer installiert hat.

Wie machen wir das also? Werfen Sie einen Blick auf das folgende [aktualisierte Beispiel](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) ([hier live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html)):

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    Your browser doesn't support this video. Here is a
    <a href="rabbit320.mp4">link to the video</a> instead.
  </p>
</video>
```

Hier haben wir das `src`-Attribut aus dem eigentlichen `<video>`-Tag entfernt und stattdessen separate `<source>`-Elemente eingefügt, die auf ihre eigenen Quellen verweisen. In diesem Fall wird der Browser die `<source>`-Elemente durchgehen und das erste abspielen, das er mit dem Codec unterstützen kann. Die Einbeziehung von WebM- und MP4-Quellen sollte heutzutage ausreichen, um Ihr Video auf den meisten Plattformen und Browsern abzuspielen.

Jedes `<source>`-Element hat auch ein [`type`](/de/docs/Web/HTML/Element/source#type)-Attribut. Dies ist optional, aber es wird empfohlen, es zu verwenden. Das `type`-Attribut enthält den [MIME-Typ](/de/docs/Glossary/MIME_type) der durch `<source>` angegebenen Datei, und Browser können den `type` verwenden, um Videos, die sie nicht verstehen, sofort zu überspringen. Wenn `type` nicht enthalten ist, laden Browser jede Datei und versuchen, sie abzuspielen, bis sie eine finden, die funktioniert, was natürlich Zeit kostet und eine unnötige Verwendung von Ressourcen darstellt.

Zu unserem [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Formats) siehe, um Unterstützung bei der Auswahl der besten Container und Codecs für Ihre Bedürfnisse zu erhalten und um die richtigen MIME-Typen für jede Datei zu ermitteln.

### Weitere Video-Funktionen

Es gibt eine Reihe weiterer Funktionen, die Sie beim Anzeigen eines HTML-Videos einbeziehen können. Sehen Sie sich unser nächstes Beispiel an:

```html
<video
  controls
  width="400"
  height="400"
  autoplay
  loop
  muted
  preload="auto"
  poster="poster.png">
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    Your browser doesn't support this video. Here is a
    <a href="rabbit320.mp4">link to the video</a> instead.
  </p>
</video>
```

Die resultierende Benutzeroberfläche sieht ungefähr so aus:

![Ein Videoplayer zeigt ein Poster-Bild, bevor das Video abgespielt wird. Das Posterbild sagt "HTML video example, OMG hell yeah!"](poster_screenshot_updated.png)

Funktionen umfassen:

- [`width`](/de/docs/Web/HTML/Element/video#width) und [`height`](/de/docs/Web/HTML/Element/video#height)
  - : Sie können die Videogröße entweder mit diesen Attributen oder mit [CSS](/de/docs/Glossary/CSS) steuern. In beiden Fällen behalten Videos ihr natürliches Breite-Höhen-Verhältnis bei — bekannt als **Seitenverhältnis**. Wenn das Seitenverhältnis nicht durch die von Ihnen festgelegten Größen beibehalten wird, wird das Video horizontal auf die Fläche gestreckt, und der ungenutzte Platz wird standardmäßig mit einer einfarbigen Hintergrundfarbe gefüllt.
- [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)
  - : Lässt das Audio oder Video sofort abspielen, während der Rest der Seite geladen wird. Sie werden davon abgeraten, auf Ihren Seiten autoplaying Videos (oder Audios) zu verwenden, da Benutzer dies sehr störend finden können.
- [`loop`](/de/docs/Web/HTML/Element/video#loop)
  - : Lässt das Video (oder Audio) jedes Mal, wenn es endet, von vorne beginnen. Auch dies kann störend sein, daher nur verwenden, wenn es wirklich notwendig ist.
- [`muted`](/de/docs/Web/HTML/Element/video#muted)
  - : Verursacht, dass das Medium standardmäßig mit ausgeschaltetem Ton abgespielt wird.
- [`poster`](/de/docs/Web/HTML/Element/video#poster)
  - : Die URL eines Bildes, das vor dem Abspielen des Videos angezeigt wird. Es soll für einen Startbildschirm oder Werbebildschirm verwendet werden.
- [`preload`](/de/docs/Web/HTML/Element/video#preload)

  - : Wird für das Puffern großer Dateien verwendet; es kann einen von drei Werten annehmen:

    - `"none"` puffert die Datei nicht
    - `"auto"` puffert die Mediendatei
    - `"metadata"` puffert nur die Metadaten der Datei

Sie finden das obige Beispiel live [auf GitHub abspielbar](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html)). Beachten Sie, dass wir das `autoplay`-Attribut in der Live-Version nicht eingeschlossen haben — wenn das Video sofort nach dem Laden der Seite abgespielt wird, sehen Sie nicht das Poster!

### Das `<audio>`-Element

Das `<audio>`-Element funktioniert genauso wie das `<video>`-Element, mit ein paar kleinen Unterschieden, die unten aufgeführt werden. Ein typisches Beispiel könnte so aussehen:

```html
<audio controls>
  <source src="viper.mp3" type="audio/mp3" />
  <source src="viper.ogg" type="audio/ogg" />
  <p>
    Your browser doesn't support this audio file. Here is a
    <a href="viper.mp3">link to the audio</a> instead.
  </p>
</audio>
```

Dies erzeugt etwa Folgendes in einem Browser:

![Ein einfacher Audioplayer mit einem Play-Button, Timer, Lautstärkeregler und Fortschrittsleiste](audio-player.png)

> [!NOTE]
> Sie können das [Audio-Demo live ausführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) auf GitHub (siehe auch den [Quellcode des Audioplayers](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html)).

Dies nimmt weniger Platz in Anspruch als ein Videoplayer, da es keine visuelle Komponente gibt — Sie müssen nur Steuerelemente anzeigen, um das Audio abzuspielen. Weitere Unterschiede zum HTML-Video sind folgende:

- Das `<audio>`-Element unterstützt die `width`/`height`-Attribute nicht — erneut gibt es keine visuelle Komponente, der Breite oder Höhe zugewiesen werden könnte.
- Es unterstützt auch das `poster`-Attribut nicht — erneut keine visuelle Komponente.

Abgesehen davon unterstützt `<audio>` alle dieselben Merkmale wie `<video>` — sehen Sie sich die obigen Abschnitte für weitere Informationen an.

## Anzeige von Video-Textspuren

Nun werden wir ein etwas fortgeschritteneres Konzept besprechen, das wirklich nützlich zu wissen ist. Viele Menschen können oder wollen den Audio-/Videoinhalt, den sie im Web finden, zumindest zu bestimmten Zeiten nicht hören. Zum Beispiel:

- Viele Menschen haben Hörbehinderungen (wie Schwerhörigkeit oder Taubheit) und können das Audio nicht oder nur undeutlich hören.
- Andere können das Audio nicht hören, weil sie sich in lauten Umgebungen befinden (wie einer vollen Bar, wenn ein Sportspiel gezeigt wird).
- Ähnlich können in Umgebungen, in denen das Abspielen des Audios eine Ablenkung oder Störung wäre (wie in einer Bibliothek oder wenn ein Partner versucht zu schlafen), Untertitel sehr nützlich sein.
- Menschen, die die Sprache des Videos nicht sprechen, möchten möglicherweise ein Transkript oder sogar eine Übersetzung des Textes, um den Medieninhalt besser zu verstehen.

Wäre es nicht schön, diesen Personen ein Transkript der gesprochenen Worte in Audio/Video zur Verfügung zu stellen? Nun, dank HTML-Video können Sie das. Dafür verwenden wir das [WebVTT](/de/docs/Web/API/WebVTT_API)-Dateiformat und das `<track>`-Element.

> [!NOTE]
> "Transkribieren" bedeutet "gesprochene Wörter als Text aufzuschreiben." Der resultierende Text ist ein "Transkript".

WebVTT ist ein Format zur Erstellung von Textdateien, die mehrere Textzeilen zusammen mit Metadaten enthalten, wie z.B. die Zeitangaben im Video, wann jeder Text angezeigt werden soll, sowie einige begrenzte Styling-/Positionierungsinformationen. Diese Textzeilen werden als **Hinweise** bezeichnet, und es gibt verschiedene Arten von Hinweisen, die für unterschiedliche Zwecke verwendet werden. Die häufigsten Hinweise sind:

- Untertitel
  - : Übersetzungen fremdsprachigen Materials für Personen, die die im Audio gesprochenen Wörter nicht verstehen.
- Titel
  - : Synchronisierte Abschriften von Dialogen bzw. Beschreibungen bedeutender Geräusche, damit Menschen, die das Audio nicht hören können, verstehen, was vor sich geht.
- Zeitlich abgestimmte Beschreibungen
  - : Text, der durch den Mediaplayer gesprochen werden soll, um blinden oder anderweitig sehbehinderte Benutzern wichtige visuelle Informationen zu vermitteln.

Eine typische WebVTT-Datei sieht etwa so aus:

```plain
WEBVTT

1
00:00:22.230 --> 00:00:24.606
This is the first subtitle.

2
00:00:30.739 --> 00:00:34.074
This is the second.

…
```

Um dies zusammen mit der HTML-Medienwiedergabe anzuzeigen, müssen Sie:

1. Speichern Sie sie als `.vtt`-Datei an einem Ort, den der Server bereitstellen kann (siehe unten), z.B. im gleichen Verzeichnis wie die HTML-Datei.
2. Verknüpfen Sie die `.vtt`-Datei mit dem `<track>`-Element. `<track>` sollte innerhalb von `<audio>` oder `<video>` platziert werden, jedoch nach allen `<source>`-Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Element/track#kind)-Attribut, um anzugeben, ob die Hinweise `subtitles`, `captions` oder `descriptions` sind. Verwenden Sie außerdem [`srclang`](/de/docs/Web/HTML/Element/track#srclang), um dem Browser mitzuteilen, in welcher Sprache Sie die Untertitel geschrieben haben. Schließlich fügen Sie [`label`](/de/docs/Web/HTML/Element/track#label) hinzu, um den Nutzern dabei zu helfen, die gesuchte Sprache zu identifizieren.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

Um das auszuprobieren, müssen Sie die Dateien auf einem [lokalen HTTP-Server](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) hosten. Im Browser sehen Sie ein Video mit angezeigten Untertiteln, etwa so:

![Videoplayer mit Standard-Steuerungen wie Play, Stop, Volume und Untertitel ein/aus. Das abspielende Video zeigt eine Szene eines Mannes, der eine speerähnliche Waffe hält, und ein Untertitel lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für weitere Details, einschließlich dessen, wie Sie Labels hinzufügen können, lesen Sie bitte [Untertitel und Titel zu HTML-Video hinzufügen](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können das [Beispiel](https://iandevlin.github.io/mdn/video-player-with-captions/) finden, das zusammen mit diesem Artikel auf GitHub geschrieben wurde, von Ian Devlin (siehe auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions)). Dieses Beispiel verwendet ein bisschen JavaScript, um Benutzern die Auswahl zwischen verschiedenen Untertiteln zu ermöglichen. Beachten Sie, dass Sie, um die Untertitel einzuschalten, die "CC"-Schaltfläche drücken und eine Option auswählen müssen — Englisch, Deutsch oder Spanisch.

> [!NOTE]
> Textspuren helfen Ihnen auch beim [SEO](/de/docs/Glossary/SEO), da Suchmaschinen besonders auf Text angewiesen sind. Textstrecken ermöglichen es Suchmaschinen sogar, direkt zu einem bestimmten Teil des Videos zu verlinken.

### Aktives Lernen: Einbetten eigener Audio- und Videoinhalte

Für dieses aktive Lernen möchten wir (idealerweise), dass Sie hinaus in die Welt gehen und einige Ihrer eigenen Videos und Audios aufnehmen — die meisten Telefone erlauben heute das einfache Aufzeichnen von Audio und Video und, sofern Sie sie auf Ihren Computer übertragen können, können Sie sie verwenden. Sie müssen möglicherweise einige Konvertierungen vornehmen, um im Falle eines Videos mit einer WebM- und MP4- und im Falle eines Audios mit einer MP3- und Ogg-Datei zu enden, aber es gibt genug Programme, die Ihnen dies ohne allzu große Schwierigkeiten ermöglichen, wie [Miro Video Converter](http://www.mirovideoconverter.com/) und [Audacity](https://sourceforge.net/projects/audacity/). Wir würden uns freuen, wenn Sie es versuchen!

Wenn Sie kein Video oder Audio beschaffen können, können Sie gerne unsere [Beispiel-Audio- und Videodateien](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) verwenden, um diese Übung auszuführen. Sie können auch unseren Beispielcode als Referenz verwenden.

Wir möchten, dass Sie:

1. Speichern Sie Ihre Audio- und Videodateien in einem neuen Verzeichnis auf Ihrem Computer.
2. Erstellen Sie eine neue HTML-Datei im selben Verzeichnis, mit dem Namen `index.html`.
3. Fügen Sie `<audio>` und `<video>`-Elemente zur Seite hinzu; lassen Sie sie die Standardbrowser-Steuerelemente anzeigen.
4. Geben Sie beiden `<audio>` und `<video>`-Elementen `<source>`-Elemente, damit die Browser das Audioformat finden, das sie am besten unterstützen, und es laden. Diese sollten `type`-Attribute enthalten.
5. Geben Sie dem `<video>`-Element ein Poster, das angezeigt wird, bevor das Video zu spielen beginnt. Haben Sie Spaß dabei, Ihr eigenes Poster-Bild zu erstellen.

Als Bonus könnten Sie versuchen, sich über Textspuren zu informieren und herauszufinden, wie Sie einige Untertitel zu Ihrem Video hinzufügen können.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen — siehe [Testen Sie Ihre Fähigkeiten: Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding). Beachten Sie, dass die dritte Bewertungsfrage in diesem Test Kenntnisse einiger der in [nächsten Artikel](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies) behandelten Techniken voraussetzt, sodass Sie diesen möglicherweise lesen möchten, bevor Sie es versuchen.

## Zusammenfassung

Und damit sind wir fertig — wir hoffen, Sie hatten Spaß beim Spielen mit Video und Audio auf Webseiten! Im nächsten Artikel werden wir uns [andere Möglichkeiten des Einbettens von Inhalten](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies) im Web ansehen, unter Verwendung von Technologien wie `<iframe>` und `<object>`.

## Siehe auch

- Die HTML-Media-Elemente: `<audio>`, `<video>`, `<source>`, und `<track>`
- [Hinzufügen von Untertiteln und Titel zu Video](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
- [Bereitstellung von Audio und Video](/de/docs/Web/Media/Audio_and_video_delivery): VIELE Details darüber, wie man Audio und Video mithilfe von HTML und JavaScript auf Webseiten bringt.
- [Manipulation von Audio und Video](/de/docs/Web/Media/Audio_and_video_manipulation): VIELE Details zur Manipulation von Audio und Video mit JavaScript (zum Beispiel das Hinzufügen von Filtern).
- [Web-Medien-Technologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
- [Ereignisreferenz > Medien](/de/docs/Web/Events#media)

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Images_in_HTML", "Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding")}}
