---
title: HTML-Video und -Audio
slug: Learn_web_development/Core/Structuring_content/HTML_video_and_audio
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}

Nachdem wir nun mit dem Hinzufügen einfacher Bilder zu einer Webseite vertraut sind, ist der nächste Schritt, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel werden wir uns genau damit beschäftigen, indem wir die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente verwenden; wir werden dann abschließend betrachten, wie Sie Untertitel zu Ihren Videos hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax">Grundlegende HTML-Syntax</a
        > behandelt werden. Textsemantik auf der Ebene von <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs">Überschriften und Absätzen</a> und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists">Listen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegende <code>&lt;video&gt;</code>- und <code>&lt;audio&gt;</code>-Tag-Syntax</li>
          <li>Spezifische Attribute für Video und Audio wie `controls` und `muted`.</li>
          <li>Verwendung von <code>&lt;source&gt;</code>-Elementen, um verschiedene Video- oder Audioquellen bereitzustellen.</li>
          <li>Grundlagen der Verwendung von Textspuren wie Untertiteln und Beschriftungen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Video und Audio im Web

Der erste Zustrom von Online-Videos und Audio wurde durch proprietäre, plugin-basierte Technologien wie [Flash](https://en.wikipedia.org/wiki/Adobe_Flash) und [Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight) möglich gemacht. Beide hatten Sicherheits- und Zugänglichkeitsprobleme und sind jetzt obsolet, zugunsten nativer HTML-Lösungen wie den {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen und der Verfügbarkeit von {{Glossary("JavaScript", "JavaScript")}}-{{Glossary("API", "APIs")}}, um sie zu steuern. Wir werden hier nicht auf JavaScript eingehen, sondern nur auf die grundlegenden Grundlagen, die mit HTML erreicht werden können.

Wir werden Ihnen nicht beibringen, wie man Audio- und Videodateien produziert — das erfordert ein völlig anderes Skillset. Wir haben Ihnen [Beispiel-Audio- und Videodateien sowie Beispielcode](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) zur Verfügung gestellt, mit denen Sie Ihre eigenen Experimente durchführen können, falls Sie keine eigenen Dateien beschaffen können.

> [!NOTE]
> Bevor Sie hier beginnen, sollten Sie auch wissen, dass es viele OVPs (Online-Video-Anbieter) wie [YouTube](https://www.youtube.com/), [Dailymotion](https://www.dailymotion.com/) und [Vimeo](https://vimeo.com/) sowie Online-Audioanbieter wie [Soundcloud](https://soundcloud.com/) gibt. Solche Unternehmen bieten eine bequeme, einfache Möglichkeit, Videos zu hosten und zu konsumieren, sodass Sie sich nicht um den enormen Bandbreitenverbrauch kümmern müssen. OVPs bieten meist sogar fertigen Code zum Einbetten von Video/Audio in Ihre Webseiten; wenn Sie diesen Weg nutzen, können Sie einige der Schwierigkeiten umgehen, die wir in diesem Artikel diskutieren. Wir werden diese Art von Dienst im nächsten Artikel noch etwas ausführlicher besprechen.

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

Die zu beachtenden Merkmale sind:

- [`src`](/de/docs/Web/HTML/Element/video#src)
  - : Genau wie beim {{htmlelement("img")}}-Element enthält das `src`-Attribut einen Pfad zu dem Video, das Sie einbetten möchten. Es funktioniert auf genau die gleiche Weise.
- [`controls`](/de/docs/Web/HTML/Element/video#controls)
  - : Benutzer müssen in der Lage sein, die Wiedergabe von Video und Audio zu steuern (das ist besonders wichtig für Menschen, die an [Epilepsie](https://en.wikipedia.org/wiki/Epilepsy#Epidemiology) leiden). Sie müssen entweder das `controls`-Attribut verwenden, um die eigene Steuerungsoberfläche des Browsers einzuschließen, oder Ihre Schnittstelle mit der entsprechenden [JavaScript-API](/de/docs/Web/API/HTMLMediaElement) erstellen. Mindestens muss die Schnittstelle eine Möglichkeit enthalten, das Medium zu starten und zu stoppen und die Lautstärke zu regeln.
- Der Absatz innerhalb der `<video>`-Tags
  - : Dies wird als **Fallback-Inhalt** bezeichnet — dieser wird angezeigt, wenn der Browser, der die Seite aufruft, das `<video>`-Element nicht unterstützt, sodass wir eine Rückfallebene für ältere Browser bereitstellen können. Dies kann alles sein, was Sie mögen; in diesem Fall haben wir einen direkten Link zur Videodatei bereitgestellt, sodass der Benutzer sie zumindest auf irgendeine Weise abrufen kann, unabhängig davon, welchen Browser er verwendet.

Das eingebettete Video sieht ungefähr so aus:

![Ein einfacher Videoplayer, der ein Video von einem kleinen weißen Kaninchen zeigt](simple-video.png)

Sie können [das Beispiel hier live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/simple-video.html).)

## Verwendung mehrerer Quellenformate zur Verbesserung der Kompatibilität

Es gibt ein Problem mit dem obigen Beispiel. Es ist möglich, dass das Video für Sie nicht abgespielt wird, da verschiedene Browser unterschiedliche Video- (und Audio-)Formate unterstützen. Glücklicherweise gibt es Dinge, die Sie tun können, um zu verhindern, dass dies ein Problem darstellt.

### Inhalte einer Mediendatei

Zunächst einmal lassen Sie uns schnell die Terminologie durchgehen. Formate wie MP3, MP4 und WebM werden als **[Containerformate](/de/docs/Web/Media/Formats/Containers)** bezeichnet. Sie definieren eine Struktur, in der die Audio- und/oder Videospuren, die das Medium bilden, gespeichert werden, zusammen mit Metadaten, die das Medium beschreiben, welche Codecs verwendet werden, um seine Kanäle zu kodieren, und so weiter.

Eine WebM-Datei, die einen Film enthält, der eine Hauptvideospur und eine alternative Kamerawinkelspur sowie Audio für Englisch und Spanisch enthält, zusätzlich zu Audio für eine englische Kommentarspur, kann wie im Diagramm unten konzipiert werden. Auch enthalten sind Textspuren, die geschlossene Untertitel für den Spielfilm, spanische Untertitel für den Film und englische Untertitel für den Kommentar enthalten.

![Diagramm, das die Inhalte einer Mediendatei auf der Ebene der Spuren konzipiert.](containersandtracks.png)

Die Audio- und Videospuren innerhalb des Containers enthalten Daten im entsprechenden Format für den Codec, der verwendet wurde, um diese Medien zu kodieren. Unterschiedliche Formate werden für Audiotracks im Vergleich zu Videotracks verwendet. Jeder Audiotrack wird mit einem [Audio-Codec](/de/docs/Web/Media/Formats/Audio_codecs) kodiert, während Videotracks (wie Sie wahrscheinlich vermutet haben) mit einem [Video-Codec](/de/docs/Web/Media/Formats/Video_codecs) kodiert werden. Wie wir bereits besprochen haben, unterstützen verschiedene Browser unterschiedliche Video- und Audioformate sowie unterschiedliche Containerformate (wie MP3, MP4 und WebM, die wiederum verschiedene Arten von Video und Audio enthalten können).

Zum Beispiel:

- Ein WebM-Container enthält typischerweise Vorbis- oder Opus-Audio mit VP8/VP9-Video. Dies wird in allen modernen Browsern unterstützt, obwohl ältere Versionen möglicherweise nicht funktionieren.
- Ein MP4-Container enthält oft AAC- oder MP3-Audio mit H.264-Video. Dies wird ebenfalls in allen modernen Browsern unterstützt.
- Der Ogg-Container neigt dazu, Vorbis-Audio und Theora-Video zu nutzen. Dies wird am besten in Firefox und Chrome unterstützt, wurde jedoch im Grunde durch das qualitativ bessere WebM-Format abgelöst.

Es gibt einige Sonderfälle. Zum Beispiel wird für einige Arten von Audio die Data eines Codecs oft ohne Container oder mit einem vereinfachten Container gespeichert. Ein solches Beispiel ist der FLAC-Codec, der am häufigsten in FLAC-Dateien gespeichert wird, die lediglich rohe FLAC-Spuren sind.

Ein weiteres solches Beispiel ist die immer beliebte MP3-Datei. Eine "MP3-Datei" ist tatsächlich ein MPEG-1 Audio Layer III (MP3) Audiotrack, der in einem MPEG- oder MPEG-2-Container gespeichert ist. Dies ist besonders interessant, da, obwohl die meisten Browser das Verwenden von MPEG-Medien in den {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elementen nicht unterstützen, sie möglicherweise trotzdem MP3 unterstützen, und zwar aufgrund seiner Beliebtheit.

Ein Audioplayer wird dazu neigen, einen Audiotrack direkt abzuspielen, z.B. eine MP3- oder Ogg-Datei. Diese benötigen keine Container.

### Mediendateiunterstützung in Browsern

> [!NOTE]
> Mehrere populäre Formate, wie MP3 und MP4/H.264, sind ausgezeichnet, aber sind durch Patente belastet; das heißt, es gibt Patente, die einen Teil oder die gesamte Technologie abdecken, auf der sie basieren. In den Vereinigten Staaten waren Patente für MP3 bis 2017 gültig, und H.264 ist durch Patente mindestens bis 2027 belastet.
>
> Aufgrund dieser Patente müssen Browser, die Unterstützung für diese Codecs implementieren möchten, typischerweise enorme Lizenzgebühren zahlen. Darüber hinaus bevorzugen einige Menschen es, eingeschränkte Software zu vermeiden und nur offene Formate zu verwenden. Aufgrund dieser rechtlichen und bevorzugten Gründe sehen sich Webentwickler gezwungen, mehrere Formate zu unterstützen, um ihre gesamte Zielgruppe zu erfassen.

Die in dem vorherigen Abschnitt beschriebenen Codecs existieren, um Video und Audio in handhabbare Dateien zu komprimieren, da sowohl Rohaudio als auch Rohvideo äußerst groß sind. Jeder Webbrowser unterstützt eine Auswahl von **{{Glossary("Codec", "Codecs")}}**, wie Vorbis oder H.264, die verwendet werden, um das komprimierte Audio und Video in Binärdaten zu konvertieren und zurück. Jeder Codec bietet seine eigenen Vor- und Nachteile, und jeder Container kann auch seine eigenen positiven und negativen Merkmale bieten, die Ihre Entscheidungen beeinflussen können, welche Sie verwenden.

Die Sache wird ein wenig komplizierter, da nicht nur jeder Browser eine andere Menge von Container-Dateiformaten unterstützt, er unterstützt zudem eine unterschiedliche Auswahl an Codecs. Um die Wahrscheinlichkeit zu maximieren, dass Ihre Website oder App auf dem Browser des Benutzers funktioniert, müssen Sie möglicherweise jede von Ihnen verwendete Mediendatei in mehreren Formaten bereitstellen. Wenn Ihre Website und der Browser des Benutzers kein gemeinsames Medienformat haben, wird Ihre Mediendatei nicht abgespielt.

Aufgrund der Feinheiten, die sicherstellen sollen, dass die Medien Ihrer App auf jeder von Ihnen gewünschten Kombination von Browsern, Plattformen und Geräten angezeigt werden, kann die Wahl der besten Kombination von Codecs und Containern eine komplizierte Aufgabe sein. Weitere Informationen finden Sie unter [Die richtige Containerwahl treffen](/de/docs/Web/Media/Formats/Containers#choosing_the_right_container), um zu sehen, welches Container-Dateiformat am besten für Ihre Bedürfnisse geeignet ist; ebenso finden Sie Unter [Auswahl eines Videocodecs](/de/docs/Web/Media/Formats/Video_codecs#choosing_a_video_codec) und [Auswahl eines Audiocodecs](/de/docs/Web/Media/Formats/Audio_codecs#choosing_an_audio_codec) Hilfe bei der Auswahl der ersten Medien-Codec, die Sie für Ihre Inhalte und Ihr Zielpublikum verwenden möchten.

Ein zusätzlicher Punkt, den Sie im Hinterkopf behalten sollten: Mobile Browser können zusätzliche Formate unterstützen, die von ihren Desktop-Pendants nicht unterstützt werden, genauso wie sie möglicherweise nicht alle Formate unterstützen, die die Desktop-Version unterstützt. Auf die Spitze setzt dem die Möglichkeit, dass sowohl Desktop- als auch Mobile-Browser so entworfen sein _können_, dass sie die Handhabung der Medienwiedergabe auf Software auslagern (entweder für alle Medien oder nur für bestimmte Typen, die sie nicht intern handhaben können). Das bedeutet, dass die Unterstützung von Medien teilweise davon abhängt, welche Software der Benutzer installiert hat.

Wie machen wir das also? Sehen Sie sich das folgende [aktualisierte Beispiel](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) an ([probieren Sie es hier live aus](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) auch):

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

Hier haben wir das `src`-Attribut aus dem tatsächlichen {{htmlelement("video")}}-Tag herausgenommen und stattdessen separate {{htmlelement("source")}}-Elemente aufgenommen, die auf ihre eigenen Quellen verweisen. In diesem Fall wird der Browser die {{htmlelement("source")}}-Elemente durchlaufen und das erste abspielen, das er mit dem Codec unterstützen kann. Das Einbeziehen von WebM- und MP4-Quellen sollte heutzutage ausreichen, um Ihr Video auf den meisten Plattformen und Browsern abzuspielen.

Jedes `<source>`-Element hat auch ein [`type`](/de/docs/Web/HTML/Element/source#type)-Attribut. Dies ist optional, aber es wird empfohlen, es einzuschließen. Das `type`-Attribut enthält den {{Glossary("MIME_type", "MIME-Typ")}} der Datei, die vom `<source>` angegeben wird, und Browser können das `type` nutzen, um sofort Videos zu überspringen, die sie nicht verstehen. Wenn `type` nicht enthalten ist, laden die Browser jede Datei und versuchen, sie abzuspielen, bis sie eine finden, die funktioniert, was natürlich Zeit braucht und eine unnötige Nutzung von Ressourcen darstellt.

Lesen Sie unseren [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Formats), um Hilfe bei der Auswahl der besten Container und Codecs für Ihre Bedürfnisse zu erhalten sowie um die richtigen MIME-Typen für jede Datei anzugeben.

## Weitere `<video>`-Funktionen

Es gibt eine Reihe weiterer Funktionen, die Sie beim Anzeigen eines HTML-Videos einschließen können. Werfen Sie einen Blick auf unser nächstes Beispiel:

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

Das resultierende Benutzerinterface sieht ungefähr so aus:

![Ein Videoplayer, der ein Posterbild zeigt, bevor es abgespielt wird. Das Posterbild sagt HTML video example, OMG hell yeah!](poster_screenshot_updated.png)

Die Funktionen umfassen:

- [`width`](/de/docs/Web/HTML/Element/video#width) und [`height`](/de/docs/Web/HTML/Element/video#height)
  - : Sie können die Videogröße entweder mit diesen Attributen oder mit {{Glossary("CSS", "CSS")}} steuern. In beiden Fällen behalten Videos ihr natives Breite-Höhen-Verhältnis bei – bekannt als das **Seitenverhältnis**. Wenn das Seitenverhältnis durch die von Ihnen festgelegten Größen nicht beibehalten wird, wächst das Video, um den Raum horizontal auszufüllen, und der nicht ausgefüllte Raum wird standardmäßig mit einer soliden Hintergrundfarbe gefüllt.
- [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)
  - : Lässt das Audio- oder Video sofort abspielen, während der Rest der Seite geladen wird. Es wird empfohlen, auf Ihren Seiten keine automatisch abspielenden Videos (oder Audios) zu verwenden, da Benutzer dies äußerst störend finden können.
- [`loop`](/de/docs/Web/HTML/Element/video#loop)
  - : Lässt das Video (oder Audio) wieder von vorne beginnen, wann immer es endet. Dies kann ebenfalls störend sein, verwenden Sie diese Funktion also nur, wenn es wirklich notwendig ist.
- [`muted`](/de/docs/Web/HTML/Element/video#muted)
  - : Lässt das Medium automatisch ohne Ton abspielen.
- [`poster`](/de/docs/Web/HTML/Element/video#poster)
  - : Die URL eines Bildes, das angezeigt wird, bevor das Video abgespielt wird. Es soll für ein Startbild oder ein Werbebild verwendet werden.
- [`preload`](/de/docs/Web/HTML/Element/video#preload)

  - : Wird zum Puffer von großen Dateien verwendet; es kann einen von drei Werten annehmen:

    - `"none"` puffert die Datei nicht
    - `"auto"` puffert die Mediendatei
    - `"metadata"` puffert nur die Metadaten der Datei

Sie können das obige Beispiel verfügbar sehen, um es [live auf GitHub abzuspielen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html).) Beachten Sie, dass wir das `autoplay`-Attribut in der Live-Version nicht enthalten haben — wenn das Video sofort beim Laden der Seite abgespielt wird, sehen Sie das Poster nicht!

## Das `<audio>`-Element

Das {{htmlelement("audio")}}-Element funktioniert genauso wie das {{htmlelement("video")}}-Element, mit einigen kleinen Unterschieden, die unten beschrieben werden. Ein typisches Beispiel könnte so aussehen:

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

Dies erzeugt etwas Ähnliches wie das folgende in einem Browser:

![Ein einfacher Audioplayer mit einem Wiedergabe-Button, einem Timer, einer Lautstärkeregelung und einer Fortschrittsleiste](audio-player.png)

> [!NOTE]
> Sie können [den Audio-Demo live ausführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) auf GitHub (sehen Sie auch den [Audio-Player-Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html).)

Dies nimmt weniger Platz als ein Videoplayer ein, da es keine visuelle Komponente gibt — Sie müssen nur Steuerungen anzeigen, um das Audio abzuspielen. Weitere Unterschiede zu HTML-Video sind wie folgt:

- Das {{htmlelement("audio")}}-Element unterstützt keine `width`/`height`-Attribute — erneut gibt es keine visuelle Komponente, der eine Breite oder Höhe zugewiesen werden könnte.
- Es unterstützt auch nicht das `poster`-Attribut — ebenfalls keine visuelle Komponente.

Abgesehen davon unterstützt `<audio>` alle gleichen Funktionen wie `<video>` — überprüfen Sie die obigen Abschnitte für weitere Informationen darüber.

## Video-Textspuren anzeigen

Nun werden wir ein etwas fortgeschritteneres Konzept diskutieren, das wirklich nützlich zu wissen ist. Viele Menschen können oder wollen den Audio-/Video-Inhalt, den sie im Web finden, nicht hören, zumindest zu bestimmten Zeiten. Zum Beispiel:

- Viele Menschen haben Hörbeeinträchtigungen (wie Schwerhörigkeit oder Taubheit), sodass sie das Audio nicht klar hören können, wenn überhaupt.
- Andere können das Audio möglicherweise nicht hören, weil sie sich in lauten Umgebungen befinden (wie in einer überfüllten Bar, wenn ein Sportspiel gezeigt wird).
- Ebenso kann es in Umgebungen, in denen das Abspielen der Tonspur eine Ablenkung oder Störung wäre (zum Beispiel in einer Bibliothek oder wenn ein Partner versucht zu schlafen), sehr nützlich sein, Untertitel zu haben.
- Menschen, die die Sprache des Videos nicht sprechen, möchten möglicherweise ein Transkript des Texts oder sogar eine Übersetzung, um ihnen zu helfen, den Medieninhalt zu verstehen.

Wäre es nicht schön, wenn Sie diesen Personen ein Transkript der im Audio/Video gesprochenen Wörter zur Verfügung stellen könnten? Nun, dank HTML-Video können Sie das. Dazu verwenden wir das [WebVTT](/de/docs/Web/API/WebVTT_API)-Dateiformat und das {{htmlelement("track")}}-Element.

> [!NOTE]
> "Transkribieren" bedeutet "gesprochene Wörter in Text zu schreiben." Der resultierende Text ist ein "Transkript."

WebVTT ist ein Format zum Schreiben von Textdateien, die mehrere Textstränge zusammen mit Metadaten enthalten, die die Zeit im Video beschreiben, zu der jeder Textstrang angezeigt werden soll, und sogar limitierte Stil-/Positionsinformationen. Diese Textstränge werden als **Cues** bezeichnet, und es gibt mehrere Arten von Cues, die für unterschiedliche Zwecke verwendet werden. Die häufigsten Cues sind:

- Untertitel
  - : Übersetzungen von fremdsprachigem Material, für Personen, die die im Audio gesprochenen Wörter nicht verstehen.
- Untertitel
  - : Synchronisierte Transkriptionen von Dialogen oder Beschreibungen signifikanter Geräusche, um Menschen, die das Audio nicht hören können, zu ermöglichen, zu verstehen, was vor sich geht.
- Zeitgesteuerte Beschreibungen
  - : Text, der von dem Mediaplayer gesprochen werden soll, um wichtige visuelle Elemente für blinde oder anderweitig sehbehinderte Benutzer zu beschreiben.

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

Um dies zusammen mit der HTML-Media-Wiedergabe anzuzeigen, müssen Sie:

1. Speichern Sie sie als `.vtt`-Datei an einem Ort, den der Server bereitstellen kann (siehe unten), z.B. im selben Verzeichnis wie die HTML-Datei.
2. Linken Sie die `.vtt`-Datei mit dem {{htmlelement("track")}}-Element. `<track>` sollte innerhalb von `<audio>` oder `<video>`, aber nach allen `<source>`-Elementen platziert werden. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Element/track#kind)-Attribut, um anzugeben, ob die Cues `Untertitel`, `Untertitel` oder `Beschreibungen` sind. Verwenden Sie außerdem [`srclang`](/de/docs/Web/HTML/Element/track#srclang), um dem Browser mitzuteilen, in welcher Sprache Sie die Untertitel geschrieben haben. Schließlich fügen Sie [`label`](/de/docs/Web/HTML/Element/track#label) hinzu, um den Lesern zu helfen, die Sprache zu identifizieren, die sie suchen.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

Um dies auszuprobieren, müssen Sie die Dateien auf einem [lokalen HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) hosten. Im Browserausgabegerät werden Sie ein Video sehen, das Untertitel anzeigt, ungefähr so:

![Videoplayer mit Standard-Steuerungen wie Wiedergeben, Anhalten, Lautstärke und Untertitel ein/aus. Das abgespielte Video zeigt eine Szene eines Mannes mit einer speerähnlichen Waffe und eine Untertitelung lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für weitere Einzelheiten, einschließlich wie man Labels hinzufügt, lesen Sie bitte [Hinzufügen von Untertiteln und Überschriften zu HTML-Video](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können [das Beispiel finden](https://iandevlin.github.io/mdn/video-player-with-captions/), das zu diesem Artikel auf GitHub gehört, geschrieben von Ian Devlin (siehe auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions).) Dieses Beispiel verwendet etwas JavaScript, um Benutzern zu ermöglichen, zwischen verschiedenen Untertiteln zu wählen. Beachten Sie, dass um die Untertitel einzuschalten, Sie den "CC"-Button drücken und eine Option wählen müssen — Englisch, Deutsch oder Spanisch.

> [!NOTE]
> Textspuren helfen Ihnen auch bei {{Glossary("SEO", "SEO")}}, da Suchmaschinen besonders auf Text angewiesen sind. Textspuren ermöglichen es Suchmaschinen sogar, direkt auf einen Punkt im Video zu verlinken.

## Aktives Lernen: Einbetten eigener Audio- und Videoaufnahmen

Für dieses aktive Lernen würden wir Sie (idealerweise) gerne dazu ermutigen, rauszugehen in die Welt und einige Ihrer eigenen Video- und Audioaufnahmen zu machen — die meisten Telefone heutzutage erlauben es Ihnen, Audio und Video sehr leicht aufzunehmen, und vorausgesetzt, Sie können es auf Ihren Computer übertragen, können Sie es verwenden. Sie müssen möglicherweise einige Konvertierungen vornehmen, um im Fall von Videos in WebM und MP4 und im Fall von Audio in MP3 und Ogg zu enden, aber es gibt genug Programme da draußen, die es Ihnen ermöglichen, dies ohne zu große Schwierigkeiten zu tun, wie zum Beispiel [Miro Video Converter](http://www.mirovideoconverter.com/) und [Audacity](https://sourceforge.net/projects/audacity/). Wir würden uns freuen, wenn Sie es ausprobieren!

Wenn Sie keine Videos oder Audios beschaffen können, können Sie sich gerne unserer [Beispiel-Audio- und -Videodateien](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) bedienen, um diese Übung durchzuführen. Sie können auch unseren Beispielcode als Referenz verwenden.

Wir möchten, dass Sie Folgendes tun:

1. Speichern Sie Ihre Audio- und Videodateien in einem neuen Verzeichnis auf Ihrem Computer.
2. Erstellen Sie eine neue HTML-Datei im gleichen Verzeichnis mit dem Namen `index.html`.
3. Fügen Sie {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente zur Seite hinzu; lassen Sie sie die Standard-Browsersteuerungen anzeigen.
4. Geben Sie beiden {{HTMLElement("source")}}-Elemente, damit Browser das Audioformat finden, das sie am besten unterstützen und laden würden. Diese sollten [`type`](/de/docs/Web/HTML/Element/source#type) Attribute enthalten.
5. Geben Sie dem `<video>`-Element ein Poster, das angezeigt wird, bevor das Video abgespielt wird. Haben Sie Spaß daran, Ihre eigene Poster-Grafik zu erstellen.

Als Bonus könnten Sie versuchen, Textspuren zu recherchieren, und herausfinden, wie Sie einige Untertitel zu Ihrem Video hinzufügen können.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Multimedia und Einbettung](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio/Test_your_skills:_Multimedia_and_embedding).

## Zusammenfassung

Und das war's — wir hoffen, Sie hatten Spaß beim Spielen mit Video und Audio auf Webseiten! Als Nächstes stellen wir Ihnen eine Herausforderung, um Ihre Fähigkeiten mit HTML-Medien zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}
