---
title: HTML video und audio
short-title: Video und Audio
slug: Learn_web_development/Core/Structuring_content/HTML_video_and_audio
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}

Nachdem wir nun mit dem Hinzufügen einfacher Bilder zu einer Webseite vertraut sind, besteht der nächste Schritt darin, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel werden wir uns damit befassen, wie genau das mit den {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen funktioniert; danach werden wir uns ansehen, wie Sie Untertitel/Captions zu Ihren Videos hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textsemantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegende Syntax der Tags <code>&lt;video&gt;</code> und <code>&lt;audio&gt;</code></li>
          <li>Video- und Audiospezifische Attribute wie `controls` und `muted`.</li>
          <li>Verwendung von <code>&lt;source&gt;</code>-Elementen, um verschiedene Video- oder Audioquellen bereitzustellen.</li>
          <li>Grundlagen der Verwendung von Textspuren wie Untertiteln und Captions.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Video und Audio im Web

Der erste Anstieg an Online-Videos und -Audios war durch proprietäre, pluginbasierte Technologien wie [Flash](https://en.wikipedia.org/wiki/Adobe_Flash) und [Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight) möglich geworden. Beide hatten Sicherheits- und Zugänglichkeitsprobleme und sind nun zugunsten nativer HTML-Lösungen durch die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente und die Verfügbarkeit von {{Glossary("JavaScript", "JavaScript")}} {{Glossary("API", "APIs")}} zur Steuerung veraltet. Wir werden hier nicht auf JavaScript eingehen — nur auf die grundlegenden Grundlagen, die mit HTML erreicht werden können.

Wir werden Ihnen nicht beibringen, wie man Audio- und Videodateien produziert — das erfordert ein komplett anderes Fähigkeiten-Set. Wir haben Ihnen [Beispiel-Audio- und Videodateien sowie Beispielcode](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) zur Verfügung gestellt, damit Sie selbst experimentieren können, falls Sie keine eigenen Dateien beschaffen können.

> [!NOTE]
> Bevor Sie hier beginnen, sollten Sie auch wissen, dass es einige OVPs (Online-Videoanbieter) wie [YouTube](https://www.youtube.com/), [Dailymotion](https://www.dailymotion.com/) und [Vimeo](https://vimeo.com/) gibt, sowie Online-Audio-Anbieter wie [Soundcloud](https://soundcloud.com/). Solche Unternehmen bieten eine bequeme, einfache Möglichkeit, Videos zu hosten und zu konsumieren, sodass Sie sich keine Sorgen über den enormen Bandbreitenverbrauch machen müssen. OVPs bieten normalerweise sogar vorgefertigten Code zum Einbetten von Video/Audio auf Ihren Webseiten an; wenn Sie diesen Weg wählen, können Sie einige der Schwierigkeiten vermeiden, die wir in diesem Artikel besprechen. Wir werden diese Art von Dienst ein wenig mehr im nächsten Artikel besprechen.

## Das `<video>`-Element

Das {{htmlelement("video")}}-Element ermöglicht es Ihnen, ein Video sehr einfach einzubetten. Ein wirklich einfaches Beispiel sieht so aus:

```html
<video src="rabbit320.webm" controls>
  <p>
    Your browser doesn't support HTML video. Here is a
    <a href="rabbit320.webm">link to the video</a> instead.
  </p>
</video>
```

Die Merkmale, auf die geachtet werden sollte, sind:

- [`src`](/de/docs/Web/HTML/Element/video#src)
  - : Wie beim {{htmlelement("img")}}-Element enthält das `src` (source) Attribut einen Pfad zu dem Video, das Sie einbetten möchten. Es funktioniert auf genau die gleiche Weise.
- [`controls`](/de/docs/Web/HTML/Element/video#controls)
  - : Benutzer müssen in der Lage sein, die Wiedergabe von Videos und Audios zu steuern (es ist besonders wichtig für Menschen, die [Epilepsie](https://en.wikipedia.org/wiki/Epilepsy#Epidemiology) haben). Sie müssen entweder das `controls`-Attribut verwenden, um die eigene Steueroberfläche des Browsers einzuschließen, oder Ihre Benutzeroberfläche mit der entsprechenden [JavaScript API](/de/docs/Web/API/HTMLMediaElement) aufbauen. Mindestens muss die Benutzeroberfläche eine Möglichkeit enthalten, das Medium zu starten und zu stoppen sowie die Lautstärke anzupassen.
- Der Absatz innerhalb der `<video>`-Tags
  - : Dies nennt man **Fallback-Inhalt** — dies wird angezeigt, falls der Browser, der auf die Seite zugreift, das `<video>`-Element nicht unterstützt, sodass wir einen Fallback für ältere Browser bereitstellen können. Dies kann alles sein, was Sie möchten; in diesem Fall haben wir einen direkten Link zur Videodatei bereitgestellt, damit der Benutzer zumindest irgendwie darauf zugreifen kann, unabhängig davon, welchen Browser er verwendet.

Das eingebettete Video wird ungefähr so aussehen:

![Ein einfacher Videoplayer zeigt ein Video von einem kleinen weißen Kaninchen](simple-video.png)

Sie können [das Beispiel live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) hier (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/simple-video.html).)

## Verwendung mehrerer Quellformate zur Verbesserung der Kompatibilität

Es gibt ein Problem mit dem obigen Beispiel. Es ist möglich, dass das Video für Sie nicht abgespielt wird, da verschiedene Browser unterschiedliche Video- (und Audio-) Formate unterstützen. Glücklicherweise gibt es Möglichkeiten, um zu verhindern, dass dies ein Problem darstellt.

### Inhalte einer Mediendatei

Zuerst gehen wir schnell die Terminologie durch. Formate wie MP3, MP4 und WebM werden **[Containerformate](/de/docs/Web/Media/Guides/Formats/Containers)** genannt. Sie definieren eine Struktur, in der die Audio- und/oder Videospuren gespeichert sind, die das Medium ausmachen, zusammen mit Metadaten, die das Medium, die verwendeten Codecs zur Kodierung seiner Kanäle und so weiter beschreiben.

Eine WebM-Datei, die einen Film enthält, der eine Hauptvideospur und eine alternative Winkelspur sowie Audio für Englisch und Spanisch sowie Audio für eine englische Kommentarspur enthält, kann wie im folgenden Diagramm dargestellt konzeptionell dargestellt werden. Ebenfalls enthalten sind Texttracks mit geschlossenen Untertiteln für den Spielfilm, spanische Untertitel für den Film und englische Untertitel für den Kommentar.

![Diagramm, das die Inhalte einer Mediendatei auf Trackebene konzeptioniert.](containersandtracks.png)

Die Audio- und Videospuren innerhalb des Containers enthalten Daten im geeigneten Format für den zur Kodierung dieses Mediums verwendeten Codec. Für Audiospuren werden andere Formate verwendet als für Videospuren. Jede Audiospur wird mit einem [Audio-Codec](/de/docs/Web/Media/Guides/Formats/Audio_codecs) codiert, während Videospuren (wie Sie wahrscheinlich bereits vermutet haben) mit einem [Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) codiert werden. Wie wir zuvor besprochen haben, unterstützen verschiedene Browser unterschiedliche Video- und Audioformate sowie unterschiedliche Containerformate (wie MP3, MP4 und WebM, die wiederum verschiedene Arten von Video und Audio enthalten können).

Zum Beispiel:

- Ein WebM-Container bündelt typischerweise Vorbis oder Opus Audio mit VP8/VP9 Video. Dies wird in allen modernen Browsern unterstützt, obwohl ältere Versionen möglicherweise nicht funktionieren.
- Ein MP4-Container bündelt oft AAC- oder MP3-Audio mit H.264-Video. Dies wird in allen modernen Browsern unterstützt.
- Der Ogg-Container neigt dazu, Vorbis-Audio und Theora-Video zu verwenden. Dies wird am besten in Firefox und Chrome unterstützt, wurde jedoch im Wesentlichen durch das qualitativ bessere WebM-Format abgelöst.

Es gibt einige spezielle Fälle. Zum Beispiel wird für einige Arten von Audio die Daten eines Codecs oft ohne einen Container oder mit einem vereinfachten Container gespeichert. Ein solches Beispiel ist der FLAC-Codec, der am häufigsten in FLAC-Dateien gespeichert wird, die nur rohe FLAC-Spuren sind.

Ein weiterer solcher Fall ist die immer beliebte MP3-Datei. Eine "MP3-Datei" ist tatsächlich eine MPEG-1 Audio Layer III (MP3) Audiospur, die in einem MPEG- oder MPEG-2-Container gespeichert ist. Dies ist besonders interessant, da die meisten Browser die Verwendung von MPEG-Medien in den {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen nicht unterstützen, MP3 jedoch aufgrund seiner Beliebtheit dennoch unterstützt wird.

Ein Audioplayer spielt in der Regel eine Audiospur direkt ab, z.B. eine MP3- oder Ogg-Datei. Diese benötigen keine Container.

### Unterstützung von Mediendateien in Browsern

> [!NOTE]
> Mehrere beliebte Formate, wie MP3 und MP4/H.264, sind ausgezeichnet, aber durch Patente belastet; das heißt, es gibt Patente, die sich auf einen Teil oder die gesamte Technologie, auf der sie basieren, beziehen. In den Vereinigten Staaten waren MP3 bis 2017 durch Patente geschützt, und H.264 ist durch Patente mindestens bis 2027 belastet.
>
> Aufgrund dieser Patente müssen Browser, die Unterstützung für diese Codecs implementieren möchten, in der Regel enorme Lizenzgebühren zahlen. Darüber hinaus ziehen es einige Leute vor, beschränkte Software zu vermeiden und nur offene Formate zu verwenden. Aufgrund dieser rechtlichen und präferenziellen Gründe sehen sich Webentwickler gezwungen, mehrere Formate zu unterstützen, um ihr gesamtes Publikum abzudecken.

Die in diesem Abschnitt beschriebenen Codecs existieren, um Video- und Audiodateien in handhabbare Dateien zu komprimieren, da rohe Audio- und Videodaten beide extrem groß sind. Jeder Webbrowser unterstützt eine Auswahl an **{{Glossary("Codec", "Codecs")}}**, wie Vorbis oder H.264, die verwendet werden, um das komprimierte Audio und Video in Binärdaten und zurück zu konvertieren. Jeder Codec bietet seine eigenen Vor- und Nachteile und jeder Container kann auch eigene positive und negative Eigenschaften haben, die Ihre Entscheidungen darüber, welche Sie verwenden sollten, beeinflussen können.

Die Dinge werden etwas komplizierter, da nicht nur jeder Browser eine andere Auswahl an Container-Dateiformaten unterstützt, sondern auch jeder Browser eine andere Auswahl an Codecs unterstützt. Um die Wahrscheinlichkeit zu maximieren, dass Ihre Website oder App auf dem Browser eines Benutzers funktioniert, müssen Sie möglicherweise jede verwendete Mediendatei in mehreren Formaten bereitstellen. Wenn Ihre Website und der Browser des Benutzers kein gemeinsames Medienformat teilen, wird Ihr Medium nicht abgespielt.

Aufgrund der Komplexität, sicherzustellen, dass Ihre App-Medien auf jeder Kombination von Browsern, Plattformen und Geräten, die Sie erreichen möchten, angezeigt werden können, kann die Auswahl der besten Kombinationen von Codecs und Containern eine komplizierte Aufgabe sein. Siehe [Die richtige Containerwahl](/de/docs/Web/Media/Guides/Formats/Containers#choosing_the_right_container) für Hilfe bei der Auswahl des für Ihre Bedürfnisse am besten geeigneten Container-Dateiformats; ebenso siehe [Auswahl eines Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec) und [Auswahl eines Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs#choosing_an_audio_codec), um Hilfe bei der Auswahl der ersten Mediencodecs zur Verwendung für Ihre Inhalte und Ihr Zielpublikum zu erhalten.

Ein weiterer Punkt, den Sie berücksichtigen sollten: Mobile Browser unterstützen möglicherweise zusätzliche Formate, die von ihren Desktop-Pendants nicht unterstützt werden, genauso wie sie möglicherweise nicht alle Formate unterstützen, die die Desktop-Version unterstützt. Darüber hinaus können sowohl Desktop- als auch mobile Browser so konzipiert sein, dass sie die Medienwiedergabe auslagern (entweder für alle Medien oder nur für bestimmte Typen, die sie intern nicht handhaben können). Das bedeutet, dass die Medienunterstützung teilweise davon abhängt, welche Software der Benutzer installiert hat.

Wie machen wir das also? Werfen Sie einen Blick auf das folgende [aktualisierte Beispiel](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) ([hier live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html), ebenfalls):

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

Hier haben wir das `src`-Attribut aus dem eigentlichen {{htmlelement("video")}}-Tag herausgenommen und stattdessen separate {{htmlelement("source")}}-Elemente eingefügt, die auf ihre eigenen Quellen verweisen. In diesem Fall wird der Browser die {{htmlelement("source")}}-Elemente durchgehen und das erste abspielen, für das er den Codec unterstützt. Das Einbeziehen von WebM- und MP4-Quellen sollte heutzutage ausreichen, um Ihr Video auf den meisten Plattformen und Browsern abzuspielen.

Jedes `<source>`-Element hat auch ein [`type`](/de/docs/Web/HTML/Element/source#type)-Attribut. Dies ist optional, aber es wird empfohlen, es einzufügen. Das `type`-Attribut enthält den {{Glossary("MIME_type", "MIME-Typ")}} der Datei, die vom `<source>` angegeben wird, und Browser können den `type` verwenden, um sofort Videos zu überspringen, die sie nicht verstehen. Wenn `type` nicht enthalten ist, laden Browser jede Datei und versuchen, sie abzuspielen, bis sie eine finden, die funktioniert, was offensichtlich Zeit in Anspruch nimmt und eine unnötige Ressourcennutzung ist.

Beziehen Sie sich auf unseren [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats), um Hilfe bei der Auswahl der besten Container und Codecs für Ihre Bedürfnisse zu erhalten, ebenso wie zur Suche nach den richtigen MIME-Typen, die für jeden angegeben werden sollen.

## Weitere `<video>`-Funktionen

Es gibt eine Reihe anderer Funktionen, die Sie beim Anzeigen eines HTML-Videos einbeziehen können. Sehen Sie sich unser nächstes Beispiel an:

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

![Ein Videoplayer zeigt ein Posterbild an, bevor es abgespielt wird. Das Posterbild sagt HTML-Video-Beispiel, OMG, Hölle ja!](poster_screenshot_updated.png)

Merkmale umfassen:

- [`width`](/de/docs/Web/HTML/Element/video#width) und [`height`](/de/docs/Web/HTML/Element/video#height)
  - : Sie können die Videogröße entweder mit diesen Attributen oder mit {{Glossary("CSS", "CSS")}} steuern. In beiden Fällen behalten Videos ihr natives Breiten-Höhen-Verhältnis bei — bekannt als **Seitenverhältnis**. Wenn das Seitenverhältnis nicht durch die von Ihnen festgelegten Größen beibehalten wird, wächst das Video, um den horizontalen Raum auszufüllen, und der unvollständige Raum wird standardmäßig einfach mit einer soliden Hintergrundfarbe gefüllt.
- [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)
  - : Lässt das Audio oder Video sofort starten, während der Rest der Seite lädt. Es wird empfohlen, keine automatisch abspielenden Videos (oder Audios) auf Ihren Seiten zu verwenden, da Benutzer dies als sehr störend empfinden können.
- [`loop`](/de/docs/Web/HTML/Element/video#loop)
  - : Lässt das Video (oder Audio) starten, wann immer es endet. Dies kann auch nervig sein, verwenden Sie es also nur, wenn es wirklich notwendig ist.
- [`muted`](/de/docs/Web/HTML/Element/video#muted)
  - : Lässt die Medien standardmäßig ohne Ton abspielen.
- [`poster`](/de/docs/Web/HTML/Element/video#poster)
  - : Die URL eines Bildes, das angezeigt wird, bevor das Video gespielt wird. Es soll für ein Startbild oder Werbebild verwendet werden.
- [`preload`](/de/docs/Web/HTML/Element/video#preload)
  - : Wird zum Puffern großer Dateien verwendet; es kann einen von drei Werten haben:
    - `"none"` puffert die Datei nicht
    - `"auto"` puffert die Mediendatei
    - `"metadata"` puffert nur die Metadaten für die Datei

Sie können das obige Beispiel verfügbar [live auf GitHub abspielen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) an.) Beachten Sie, dass wir das `autoplay`-Attribut nicht in der Live-Version eingeschlossen haben — wenn das Video sofort startet, sobald die Seite geladen wird, erhalten Sie nicht die Gelegenheit, das Poster zu sehen!

## Das `<audio>`-Element

Das {{htmlelement("audio")}}-Element funktioniert genauso wie das {{htmlelement("video")}}-Element, mit einigen kleinen Unterschieden, die unten aufgeführt sind. Ein typisches Beispiel könnte so aussehen:

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

Dies erzeugt etwas wie das folgende in einem Browser:

![Ein einfacher Audioplayer mit einem Abspielknopf, Zeitanzeige, Lautstärkeregler und Fortschrittsleiste](audio-player.png)

> [!NOTE]
> Sie können [das Audio-Demo live](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) auf GitHub ausführen (sehen Sie sich auch den [Audioplayer-Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) an.)

Dies nimmt weniger Platz als ein Videoplayer ein, da es keine visuelle Komponente gibt — Sie müssen nur Steuerungen anzeigen, um das Audio abzuspielen. Andere Unterschiede zu HTML-Video sind wie folgt:

- Das {{htmlelement("audio")}}-Element unterstützt nicht die Attribute `width`/`height` — es gibt wiederum keine visuelle Komponente, die Breite oder Höhe zugewiesen werden könnte.
- Es unterstützt auch nicht das `poster`-Attribut — erneut keine visuelle Komponente.

Abgesehen davon unterstützt `<audio>` alle gleichen Funktionen wie `<video>` — lesen Sie die obigen Abschnitte für weitere Informationen darüber.

## Anzeige von Video-Textspuren

Nun werden wir ein etwas fortgeschritteneres Konzept besprechen, das sehr nützlich zu wissen ist. Viele Menschen können oder wollen den Audio-/Videoinhalt, den sie im Web finden, nicht hören, zumindest zu bestimmten Zeiten. Beispielsweise:

- Viele Menschen haben Hörbeeinträchtigungen (wie schwerhörig oder taub sein) und können das Audio nicht klar hören, wenn überhaupt.
- Andere können das Audio nicht hören, weil sie sich in lauten Umgebungen befinden (wie einer überfüllten Bar, wenn ein Sportspiel gezeigt wird).
- Ebenso kann das Abspielen von Audio an Orten, an denen es ablenkend oder störend wäre (wie in einer Bibliothek oder wenn ein Partner versucht zu schlafen), sehr nützlich sein.
- Personen, die die Sprache des Videos nicht sprechen, möchten möglicherweise ein Transkript oder sogar Übersetzungen, um die Medieninhalte besser zu verstehen.

Wäre es nicht schön, diesen Leuten ein Transkript der im Audio/Video gesprochenen Worte zur Verfügung zu stellen? Dank HTML-Video ist dies möglich. Dazu verwenden wir das [WebVTT](/de/docs/Web/API/WebVTT_API)-Dateiformat und das {{htmlelement("track")}}-Element.

> [!NOTE]
> "Transkribieren" bedeutet "gesprochene Wörter als Text niederzuschreiben." Der resultierende Text ist ein "Transkript."

WebVTT ist ein Format zum Schreiben von Textdateien, die mehrere Textstrings zusammen mit Metadaten enthalten, wie die Zeit im Video, zu der jeder Textstring angezeigt werden soll, und sogar begrenzte Styling-/Positionierungsinformationen. Diese Textstrings werden **Cues** genannt, und es gibt mehrere Arten von Cues, die für verschiedene Zwecke verwendet werden. Die häufigsten Cues sind:

- Untertitel
  - : Übersetzungen fremden Materials für Menschen, die die im Audio gesprochenen Wörter nicht verstehen.
- Captions
  - : Synchronisierte Transkriptionen von Dialogen oder Beschreibungen von bedeutenden Geräuschen, um Menschen, die das Audio nicht hören können, zu ermöglichen, zu verstehen, was vor sich geht.
- Zeitliche Beschreibungen
  - : Text, der vom Medienplayer gesprochen werden sollte, um Blinden oder auf andere Weise sehbehinderten Benutzern wichtige visuelle Informationen zu beschreiben.

Eine typische WebVTT-Datei sieht ungefähr so aus:

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

1. Speichern Sie es als `.vtt` Datei an einem Ort, den der Server bereitstellen kann (siehe unten), wie im gleichen Verzeichnis wie die HTML-Datei.
2. Verlinken Sie auf die `.vtt` Datei mit dem {{htmlelement("track")}}-Element. `<track>` sollte innerhalb von `<audio>` oder `<video>`, aber nach allen `<source>`-Elementen platziert werden. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Element/track#kind)-Attribut, um anzugeben, ob die Cues `subtitles`, `captions` oder `descriptions` sind. Verwenden Sie außerdem [`srclang`](/de/docs/Web/HTML/Element/track#srclang), um dem Browser zu sagen, in welcher Sprache Sie die Untertitel geschrieben haben. Zum Schluss fügen Sie [`label`](/de/docs/Web/HTML/Element/track#label) hinzu, um den Lesern beim Identifizieren der gewünschten Sprache zu helfen.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

Um dies auszuprobieren, müssen Sie die Dateien auf einem [lokalen HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) hosten. Im Ausgabebrowser sehen Sie ein Video, das Untertitel anzeigt, ähnlich wie dies:

![Videoplayer mit Standardsteuerelementen wie Abspielen, Stoppen, Lautstärke und Untertiteln ein- und ausschalten. Das abgespielte Video zeigt eine Szene eines Mannes, der eine speerähnliche Waffe hält, und eine Untertitelung lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für weitere Details, einschließlich wie Sie Labels hinzufügen können, lesen Sie [Hinzufügen von Untertiteln und Captions zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können [das Beispiel](https://iandevlin.github.io/mdn/video-player-with-captions/) ansehen, das zu diesem Artikel gehört und von Ian Devlin auf GitHub geschrieben wurde (siehe auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions).) Dieses Beispiel verwendet JavaScript, um Benutzern zu ermöglichen, zwischen verschiedenen Untertiteln zu wählen. Beachten Sie, dass Sie, um die Untertitel zu aktivieren, die "CC"-Schaltfläche drücken und eine Option auswählen müssen — Englisch, Deutsch oder Español.

> [!NOTE]
> Textspuren helfen auch bei {{Glossary("SEO", "SEO")}}, da Suchmaschinen insbesondere von Texten profitieren. Textspuren ermöglichen es Suchmaschinen sogar, direkt zu einem Punkt mitten im Video zu verlinken.

## Aktives Lernen: Einbetten Ihrer eigenen Audios und Videos

Für dieses aktive Lernen möchten wir gerne, dass Sie in die Welt hinausgehen und einige Ihrer eigenen Videos und Audios aufnehmen — die meisten Telefone heutzutage ermöglichen es Ihnen, Audio und Video sehr einfach aufzunehmen, und, vorausgesetzt, Sie können es auf Ihren Computer übertragen, können Sie es verwenden. Sie müssen möglicherweise einige Konvertierungen durchführen, um im Falle von Videos eine WebM- und MP4-Datei und im Falle von Audios eine MP3- und Ogg-Datei zu erhalten, aber es gibt genügend Programme, die es Ihnen ermöglichen, dies ohne große Schwierigkeiten zu tun, wie [Miro Video Converter](http://www.mirovideoconverter.com/) und [Audacity](https://sourceforge.net/projects/audacity/). Wir möchten, dass Sie sich versuchen!

Wenn Sie keine Videos oder Audios beschaffen können, können Sie gerne unsere [Beispiel-Audio- und Videodateien](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) verwenden, um diese Übung durchzuführen. Sie können auch unseren Beispielcode als Referenz verwenden.

Wir möchten, dass Sie:

1. Speichern Sie Ihre Audio- und Videodateien in einem neuen Verzeichnis auf Ihrem Computer.
2. Erstellen Sie eine neue HTML-Datei im selben Verzeichnis, genannt `index.html`.
3. Fügen Sie der Seite {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elemente hinzu; lassen Sie sie die Standardbrowser-Steuerelemente anzeigen.
4. Geben Sie beiden {{htmlelement("source")}}-Elemente, damit Browser das von ihnen am besten unterstützte Audio-Format finden und es laden. Diese sollten [`type`](/de/docs/Web/HTML/Element/source#type)-Attribute enthalten.
5. Geben Sie dem `<video>`-Element ein Poster, das angezeigt wird, bevor das Video abgespielt wird. Haben Sie Spaß beim Erstellen Ihrer eigenen Poster-Grafik.

Als zusätzlichen Bonus könnten Sie versuchen, Textspuren zu recherchieren und herauszufinden, wie Sie einige Untertitel zu Ihrem Video hinzufügen können.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu prüfen, ob Sie diese Informationen gespeichert haben, bevor Sie weitergehen — siehe [Testen Sie Ihre Fähigkeiten: Multimedia und Einbetten](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio/Test_your_skills:_Multimedia_and_embedding).

## Zusammenfassung

Und das war's — wir hoffen, Sie hatten Spaß beim Spielen mit Video und Audio auf Webseiten! Als Nächstes präsentieren wir Ihnen eine Herausforderung, um Ihre Fähigkeiten mit HTML-Medien zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}
