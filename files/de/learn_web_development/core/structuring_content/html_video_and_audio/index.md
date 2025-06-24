---
title: HTML video und audio
short-title: Video und Audio
slug: Learn_web_development/Core/Structuring_content/HTML_video_and_audio
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}

Da wir uns nun mit dem Hinzufügen einfacher Bilder zu einer Webseite auskennen, ist der nächste Schritt, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel werden wir uns damit beschäftigen, dies mit den {{htmlelement("video")}} und {{htmlelement("audio")}} Elementen zu tun; am Ende betrachten wir, wie man Untertitel zu Ihren Videos hinzufügen kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textuelle Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Grundlegende <code>&lt;video&gt;</code> und <code>&lt;audio&gt;</code> Tag-Syntax</li>
          <li>Video- und audio-spezifische Attribute wie controls und muted.</li>
          <li>Verwendung von <code>&lt;source&gt;</code> Elementen, um verschiedene Video- oder Audioquellen bereitzustellen.</li>
          <li>Die Grundlagen der Verwendung von Textspuren wie Untertiteln.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Video und Audio im Web

Der erste Zustrom von Online-Videos und -Audio wurde durch proprietäre, plugin-basierte Technologien wie [Flash](https://en.wikipedia.org/wiki/Adobe_Flash) und [Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight) ermöglicht. Beide hatten Sicherheits- und Zugänglichkeitsprobleme und sind nun veraltet, zugunsten nativer HTML-Lösungen mit {{htmlelement("video")}} und {{htmlelement("audio")}} Elementen und der Verfügbarkeit von {{Glossary("JavaScript", "JavaScript")}} {{Glossary("API", "APIs")}} zur Steuerung derselben. Wir werden hier nicht auf JavaScript eingehen — nur die grundlegenden Grundlagen, die mit HTML erreicht werden können.

Wir werden Ihnen nicht beibringen, wie man Audio- und Videodateien produziert — das erfordert ein völlig anderes Skillset. Wir haben Ihnen [Beispiel-Audio- und -Videodateien sowie Beispielcode](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) für Ihre eigenen Experimente bereitgestellt, falls Sie keine eigenen Dateien besorgen können.

> [!NOTE]
> Bevor Sie hier beginnen, sollten Sie auch wissen, dass es einige OVPs (Online-Video-Anbieter) wie [YouTube](https://www.youtube.com/), [Dailymotion](https://www.dailymotion.com/) und [Vimeo](https://vimeo.com/) gibt, sowie Online-Audio-Anbieter wie [Soundcloud](https://soundcloud.com/). Solche Unternehmen bieten einen bequemen, einfachen Weg, Videos zu hosten und zu konsumieren, sodass Sie sich keine Sorgen über den enormen Bandbreitenverbrauch machen müssen. OVPs bieten sogar normalerweise fertigen Code zum Einbetten von Video/Audio in Ihre Webseiten an; wenn Sie diesen Weg gehen, können Sie einige der Schwierigkeiten vermeiden, die wir in diesem Artikel besprechen. Diese Art von Dienst werden wir im nächsten Artikel etwas ausführlicher besprechen.

## Das `<video>` Element

Das {{htmlelement("video")}} Element ermöglicht es Ihnen, ein Video sehr einfach einzubetten. Ein wirklich einfaches Beispiel sieht so aus:

```html
<video src="rabbit320.webm" controls>
  <p>
    Your browser doesn't support HTML video. Here is a
    <a href="rabbit320.webm">link to the video</a> instead.
  </p>
</video>
```

Die zu beachtenden Funktionen sind:

- [`src`](/de/docs/Web/HTML/Reference/Elements/video#src)
  - : Auf dieselbe Weise wie beim {{htmlelement("img")}} Element enthält das `src` (source) Attribut einen Pfad zu dem Video, das Sie einbetten möchten. Es funktioniert genau gleich.
- [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls)
  - : Benutzer müssen in der Lage sein, die Wiedergabe von Video und Audio zu steuern (es ist besonders wichtig für Menschen, die unter [Epilepsie](https://en.wikipedia.org/wiki/Epilepsy#Epidemiology) leiden). Sie müssen entweder das `controls` Attribut verwenden, um die eigene Steuerungsschnittstelle des Browsers einzuschließen, oder Ihre Schnittstelle mit der entsprechenden [JavaScript API](/de/docs/Web/API/HTMLMediaElement) erstellen. Mindestens muss die Schnittstelle eine Möglichkeit bieten, das Medium zu starten und zu stoppen sowie die Lautstärke zu regeln.
- Der Absatz innerhalb der `<video>` Tags
  - : Dies wird **Fallback-Inhalt** genannt — dieser wird angezeigt, wenn der Browser, der die Seite aufruft, das `<video>` Element nicht unterstützt, was es uns ermöglicht, einen Fallback für ältere Browser bereitzustellen. Dies kann alles sein, was Sie möchten; in diesem Fall haben wir einen direkten Link zur Videodatei bereitgestellt, damit der Benutzer zumindest irgendwie darauf zugreifen kann, unabhängig davon, welchen Browser er verwendet.

Das eingebettete Video sieht ungefähr so aus:

![Ein einfacher Videoplayer, der ein Video eines kleinen weißen Kaninchens zeigt](simple-video.png)

Sie können [das Beispiel live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/simple-video.html).)

## Verwendung mehrerer Quellformate zur Verbesserung der Kompatibilität

Es gibt ein Problem mit dem obigen Beispiel. Es ist möglich, dass das Video bei Ihnen nicht abgespielt wird, da verschiedene Browser unterschiedliche Video- (und Audio-) Formate unterstützen. Glücklicherweise gibt es Möglichkeiten, dies zu verhindern.

### Inhalte einer Mediendatei

Zuerst lassen Sie uns schnell die Terminologie durchgehen. Formate wie OGG, WAV, MP4 und WebM werden als **[Containerformate](/de/docs/Web/Media/Guides/Formats/Containers)** bezeichnet. Sie definieren eine Struktur, in der die Audio- und/oder Videospuren gespeichert sind, die das Medium ausmachen, zusammen mit Metadaten, die das Medium beschreiben, welche Codecs verwendet werden, um seine Kanäle zu kodieren, und so weiter.

Eine WebM-Datei, die einen Film enthält, der eine Hauptvideospur und eine alternative Winkelspur hat, plus Audio für sowohl Englisch als auch Spanisch, zusätzlich zu Audio für eine englische Kommentarspur, kann konzeptionell wie im folgenden Diagramm dargestellt werden. Ebenfalls enthalten sind Textspuren mit Untertiteln für den Hauptfilm, spanische Untertitel für den Film und englische Untertitel für den Kommentar.

![Diagramm, das die Inhalte einer Mediendatei auf Spurebene konzeptioniert.](containersandtracks.png)

Die Audio- und Videospuren innerhalb des Containers enthalten Daten im entsprechenden Format für den zum Kodieren dieser Medien verwendeten Codec. Für Audiospuren werden andere Formate verwendet als für Videospuren. Jede Audiospur wird mit einem [Audiocodec](/de/docs/Web/Media/Guides/Formats/Audio_codecs) kodiert, während Videospuren mit (wie Sie wahrscheinlich schon erraten haben) [einem Videocodec](/de/docs/Web/Media/Guides/Formats/Video_codecs) kodiert werden. Wie bereits erwähnt, unterstützen verschiedene Browser unterschiedliche Video- und Audioformate sowie unterschiedliche Containerformate (wie OGG, MP4 und WebM, die wiederum unterschiedliche Arten von Video und Audio enthalten können).

Zum Beispiel:

- Ein WebM-Container verpackt typischerweise Vorbis oder Opus Audio mit VP8/VP9 Video. Dies wird in allen modernen Browsern unterstützt, obwohl ältere Versionen möglicherweise nicht funktionieren.
- Ein MP4-Container verpackt oft AAC oder MP3 Audio mit H.264 Video. Dies wird ebenfalls in allen modernen Browsern unterstützt.
- Der Ogg-Container verwendet tendenziell Vorbis-Audio und Theora-Video. Dies wird am besten in Firefox und Chrome unterstützt, wurde aber im Wesentlichen durch das qualitativ bessere WebM-Format ersetzt.

Es gibt einige Sonderfälle. Beispielsweise wird für einige Arten von Audio die Codec-Daten häufig ohne Container oder mit einem vereinfachten Container gespeichert. Ein solches Beispiel ist der FLAC-Codec, der am häufigsten in FLAC-Dateien gespeichert wird, die einfach rohe FLAC-Tracks sind.

Ein weiteres Beispiel ist die allseits beliebte "MP3-Datei". Eine "MP3-Datei" ist eine Audiodatei, die mit der MPEG-1 Audio Layer III Kompression kodiert wurde. Obwohl sie Metadaten enthalten kann, ist sie nicht in einem separaten MPEG- oder MPEG-2-Container gekapselt. Ihre weit verbreitete Unterstützung in den {{htmlelement("audio")}} und {{htmlelement("video")}} Elementen ist größtenteils ein Zeugnis ihrer anhaltenden Beliebtheit.

Ein Audioplayer wird tendenziell eine Audiospur direkt abspielen, z.B. eine MP3- oder Ogg-Datei. Diese benötigen keine Container.

### Unterstützung von Mediendateien in Browsern

> [!NOTE]
> Verschiedene beliebte Formate, wie MP3 und MP4/H.264, sind exzellent, aber durch Patente belastet; das heißt, es gibt Patente, die einige oder alle der Technologie abdecken, auf der sie basieren. In den Vereinigten Staaten waren Patente auf MP3 bis 2017 wirksam, und H.264 ist mindestens bis 2027 durch Patente belastet.
>
> Aufgrund dieser Patente müssen Browser, die Unterstützung für diese Codecs implementieren möchten, in der Regel enorme Lizenzgebühren zahlen. Darüber hinaus ziehen es einige Leute vor, eingeschränkte Software zu vermeiden und nur offene Formate zu verwenden. Aufgrund dieser rechtlichen und bevorzugten Gründe stehen Webentwickler häufig vor der Herausforderung, mehrere Formate zu unterstützen, um ein Videoerlebnis für ihr gesamtes Publikum bereitzustellen.

Die in den vorherigen Abschnitten beschriebenen Codecs existieren, um Video und Audio in handhabbare Dateien zu komprimieren, da rohes Audio und Video extrem groß sind. Jeder Webbrowser unterstützt eine Auswahl an **{{Glossary("Codec", "Codecs")}}**, wie Vorbis oder H.264, die verwendet werden, um das komprimierte Audio und Video in Binärdaten umzuwandeln und zurück. Jeder Codec bietet seine eigenen Vorteile und Nachteile, und jeder Container kann auch seine eigenen positiven und negativen Merkmale bieten, die Ihre Entscheidungen darüber, welchen Sie verwenden, beeinflussen.

Die Sache wird etwas komplizierter, da nicht nur jeder Browser ein unterschiedliches Set an Container-Dateiformaten unterstützt, sondern auch jeder eine andere Auswahl an Codecs unterstützt. Um die Wahrscheinlichkeit zu maximieren, dass Ihre Website oder App auf dem Browser eines Benutzers funktioniert, müssen Sie möglicherweise jede von Ihnen verwendete Mediendatei in mehreren Formaten bereitstellen. Wenn Ihre Website und der Browser des Benutzers kein gemeinsames Medienformat haben, wird Ihr Medium nicht abgespielt.

Aufgrund der Komplexität, sicherzustellen, dass die Medien Ihrer App auf allen Kombinationen von Browsern, Plattformen und Geräten, die Sie erreichen möchten, angezeigt werden können, kann die Auswahl der besten Kombination von Codecs und Containern eine komplizierte Aufgabe sein. Siehe [Die richtige Wahl des Containers](/de/docs/Web/Media/Guides/Formats/Containers#choosing_the_right_container), um Hilfe bei der Auswahl des für Ihre Anforderungen am besten geeigneten Container-Dateiformats zu erhalten; ähnlich, siehe [Auswahl eines Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec) und [Auswahl eines Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs#choosing_an_audio_codec), um Hilfe bei der Auswahl der ersten Mediencodecs zu erhalten, die Sie für Ihre Inhalte und Ihr Zielpublikum verwenden möchten.

Ein zusätzlicher Punkt, den Sie beachten sollten: Mobile Browser unterstützen möglicherweise zusätzliche Formate, die von ihren Desktop-Pendants nicht unterstützt werden, genauso wie sie möglicherweise nicht alle Formate unterstützen, die die Desktop-Version unterstützt. Darüber hinaus können sowohl Desktop- als auch mobile Browser \_so gestaltet sein, dass sie die Verarbeitung der Medienwiedergabe auslagern (entweder für alle Medien oder nur für bestimmte Typen, die sie intern nicht verarbeiten können). Das bedeutet, dass die Medienunterstützung teilweise davon abhängt, welche Software der Benutzer installiert hat.

Wie setzen wir das um? Werfen Sie einen Blick auf das folgende [aktualisierte Beispiel](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) ([probieren Sie es hier live aus](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html), auch):

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

Hier haben wir das `src` Attribut aus dem tatsächlichen {{HTMLElement("video")}} Tag entfernt und stattdessen separate {{htmlelement("source")}} Elemente eingefügt, die auf ihre eigenen Quellen verweisen. In diesem Fall wird der Browser die {{HTMLElement("source")}} Elemente durchgehen und das erste abspielen, das er unterstützt. Das Einbeziehen von WebM- und MP4-Quellen sollte heutzutage ausreichen, um Ihr Video auf den meisten Plattformen und Browsern abzuspielen.

Jedes `<source>` Element hat auch ein [`type`](/de/docs/Web/HTML/Reference/Elements/source#type) Attribut. Dies ist optional, aber es wird empfohlen, es einzuschließen. Das `type` Attribut enthält den {{Glossary("MIME_type", "MIME-Typ")}} der Datei, die durch `<source>` spezifiziert wird, und Browser können `type` verwenden, um Videos, die sie nicht verstehen, sofort zu überspringen. Wenn `type` nicht enthalten ist, werden Browser jede Datei laden und versuchen, sie abzuspielen, bis sie eine finden, die funktioniert, was offensichtlich Zeit kostet und ein unnötiger Ressourcenverbrauch ist.

Beziehen Sie sich auf unseren [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats), um Hilfe bei der Auswahl der besten Container und Codecs für Ihre Bedürfnisse zu erhalten und um nach den richtigen MIME-Typen zu suchen, die für jede angegeben werden sollen.

## Andere Funktionen von `<video>`

Es gibt eine Reihe von weiteren Funktionen, die Sie beim Anzeigen eines HTML-Videos einfügen können. Werfen Sie einen Blick auf unser nächstes Beispiel:

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

![Ein Videoplayer, der ein Posterbild zeigt, bevor es abgespielt wird. Das Posterbild sagt HTML-Video-Beispiel, OMG hell yeah!](poster_screenshot_updated.png)

Funktionen umfassen:

- [`width`](/de/docs/Web/HTML/Reference/Elements/video#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/video#height)
  - : Sie können die Videogröße entweder mit diesen Attributen oder mit {{Glossary("CSS", "CSS")}} steuern. In beiden Fällen behalten Videos ihr natives Breite-Höhe-Verhältnis bei — bekannt als das **Seitenverhältnis**. Wenn das Seitenverhältnis nicht durch die von Ihnen festgelegten Größen beibehalten wird, wächst das Video, um den Raum horizontal auszufüllen, und der nicht ausgefüllte Raum wird standardmäßig mit einer soliden Hintergrundfarbe versehen.
- [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay)
  - : Lässt das Audio oder Video sofort starten, während der Rest der Seite lädt. Es wird Ihnen geraten, keine automatisch abspielenden Videos (oder Audios) auf Ihren Websites zu verwenden, da Benutzer sie als sehr störend empfinden können.
- [`loop`](/de/docs/Web/HTML/Reference/Elements/video#loop)
  - : Lässt das Video (oder Audio) immer wieder abspielen, sobald es beendet ist. Dies kann ebenfalls störend sein, verwenden Sie es also nur, wenn es wirklich notwendig ist.
- [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted)
  - : Lässt das Medium standardmäßig stumm abspielen.
- [`poster`](/de/docs/Web/HTML/Reference/Elements/video#poster)
  - : Die URL eines Bildes, das vor dem Abspielen des Videos angezeigt wird. Es ist vorgesehen, um für ein Splasht-Screen oder Werbebild verwendet zu werden.
- [`preload`](/de/docs/Web/HTML/Reference/Elements/video#preload)
  - : Wird zum Puffern großer Dateien verwendet; es kann einen von drei Werten annehmen:
    - `"none"` puffert die Datei nicht
    - `"auto"` puffert die Mediendatei
    - `"metadata"` puffert nur die Metadaten für die Datei

Das obige Beispiel können Sie [direkt live auf GitHub abspielen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) (auch [sehen Sie den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html).) Beachten Sie, dass wir das `autoplay` Attribut in der Live-Version nicht enthalten haben — wenn das Video sofort startet, wenn die Seite geladen wird, sehen Sie das Poster nicht!

## Das `<audio>` Element

Das {{htmlelement("audio")}} Element funktioniert genau wie das {{htmlelement("video")}} Element, mit einigen kleinen Unterschieden, wie unten beschrieben. Ein typisches Beispiel könnte so aussehen:

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

Dies erzeugt im Browser etwas wie Folgendes:

![Ein einfacher Audioplayer mit Play-Taste, Timer, Lautstärkeregler und Fortschrittsbalken](audio-player.png)

> [!NOTE]
> Sie können [das Audio-Demo live ausführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) auf GitHub (siehe auch den [Quellcode des Audioplayers](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html).)

Dies nimmt weniger Platz ein als ein Videoplayer, da es keine visuelle Komponente gibt — Sie müssen nur Steuerelemente anzeigen, um das Audio abzuspielen. Andere Unterschiede zum HTML-Video sind wie folgt:

- Das {{htmlelement("audio")}} Element unterstützt nicht die `width`/`height` Attribute — wiederum gibt es keine visuelle Komponente, also gibt es nichts, dem man eine Breite oder Höhe zuweisen kann.
- Es unterstützt auch nicht das `poster` Attribut — wiederum keine visuelle Komponente.

Abgesehen davon unterstützt `<audio>` alle dieselben Funktionen wie `<video>` — sehen Sie sich die obigen Abschnitte für weitere Informationen darüber an.

## Anzeige von Video-Textspuren

Jetzt diskutieren wir ein etwas fortgeschritteneres Konzept, das wirklich nützlich zu wissen ist. Viele Menschen können oder wollen den Audio-/Video-Inhalt, den sie im Web finden, nicht hören, zumindest zu bestimmten Zeiten. Zum Beispiel:

- Viele Menschen haben Hörbehinderungen (wie Schwerhörigkeit oder Taubheit), sodass sie das Audio nicht klar hören können, wenn überhaupt.
- Andere können das Audio möglicherweise nicht hören, weil sie sich in lauten Umgebungen befinden (wie in einer überfüllten Bar, in der ein Sportspiel gezeigt wird).
- Ebenso kann es in Umgebungen, in denen das Abspielen des Audios eine Ablenkung oder Störung darstellen würde (wie in einer Bibliothek oder wenn ein Partner versucht zu schlafen), hilfreich sein, Untertitel zu haben.
- Menschen, die die Sprache des Videos nicht sprechen, möchten möglicherweise ein Texttranskript oder sogar eine Übersetzung, um ihnen zu helfen, den Medieninhalt zu verstehen.

Wäre es nicht schön, diesen Menschen ein Transkript der im Audio/Video gesprochenen Wörter zur Verfügung zu stellen? Nun, dank HTML-Video können Sie das. Dazu verwenden wir das [WebVTT](/de/docs/Web/API/WebVTT_API) Dateiformat und das {{htmlelement("track")}} Element.

> [!NOTE]
> "Transkribieren" bedeutet "gesprochene Wörter als Text aufzuschreiben". Der resultierende Text ist ein "Transkript."

WebVTT ist ein Format zum Schreiben von Textdateien, die mehrere Textstrings zusammen mit Metadaten enthalten, wie der Zeit in dem Video, zu der jeder Textstring angezeigt werden soll, und sogar begrenzte Stil-/Positionierungsinformationen. Diese Textstrings werden als **Cues** bezeichnet, und es gibt verschiedene Arten von Cues, die für unterschiedliche Zwecke verwendet werden. Die häufigsten Cues sind:

- Untertitel
  - : Übersetzungen von fremdsprachigem Material, für Menschen, die die im Audio gesprochenen Wörter nicht verstehen.
- Beschriftungen
  - : Synchronisierte Transkriptionen von Dialogen oder Beschreibungen bedeutender Geräusche, um Menschen, die das Audio nicht hören können, zu helfen, zu verstehen, was vor sich geht.
- Zeitbeschreibungen
  - : Text, der vom Mediaplayer gesprochen werden sollte, um wichtige Bilder für blinde oder anderweitig sehbehinderte Benutzer zu beschreiben.

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

1. Speichern Sie es als `.vtt` Datei an einem Ort, an dem der Server darauf zugreifen kann (siehe unten), z. B. im selben Verzeichnis wie die HTML-Datei.
2. Verknüpfen Sie die `.vtt` Datei mit dem {{htmlelement("track")}} Element. `<track>` sollte innerhalb von `<audio>` oder `<video>`, aber nach allen `<source>` Elementen platziert werden. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) Attribut, um anzugeben, ob die Cues `subtitles`, `captions` oder `descriptions` sind. Verwenden Sie außerdem [`srclang`](/de/docs/Web/HTML/Reference/Elements/track#srclang), um dem Browser mitzuteilen, in welcher Sprache Sie die Untertitel geschrieben haben. Schließlich fügen Sie [`label`](/de/docs/Web/HTML/Reference/Elements/track#label) hinzu, um Lesern zu helfen, die gesuchte Sprache zu identifizieren.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

Um dies auszuprobieren, müssen Sie die Dateien auf einem [lokalen HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) hosten. In der Browserausgabe sehen Sie ein Video, das Untertitel anzeigt, etwa so:

![Videoplayer mit Standard-Steuerelementen wie Abspielen, Stoppen, Lautstärke, Untertitel an und aus. Das abspielende Video zeigt eine Szene eines Mannes, der eine speerartige Waffe hält, und ein Untertitel lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für weitere Details, einschließlich zur Hinzufügung von Labels, lesen Sie bitte [Hinzufügen von Untertiteln und Untertiteln zu HTML Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können das Beispiel auf [GitHub finden](https://iandevlin.github.io/mdn/video-player-with-captions/), das zu diesem Artikel geschrieben von Ian Devlin gehört (siehe auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions).) Dieses Beispiel verwendet etwas JavaScript, um Benutzern zu ermöglichen, zwischen verschiedenen Untertiteln zu wählen. Beachten Sie, dass Sie, um die Untertitel zu aktivieren, die "CC"-Taste drücken und eine Option auswählen müssen — Englisch, Deutsch oder Español.

> [!NOTE]
> Textspuren helfen Ihnen auch bei {{Glossary("SEO", "SEO")}}, da Suchmaschinen besonders auf Text angewiesen sind. Textspuren ermöglichen sogar Suchmaschinen, direkt auf einen Punkt in einem Video zu verlinken.

## Einbetten eigener Audio- und Videoinhalte

Warum gehen Sie für diese Aufgabe nicht in die Welt hinaus und nehmen einige Ihrer eigenen Videos und Audios auf? Wenn Sie ein Telefon haben, verwenden Sie dieses, um Audio und Video aufzunehmen, übertragen Sie es auf Ihren Computer und probieren Sie es aus. Möglicherweise müssen Sie einige Konvertierungen vornehmen, um eine WebM- und MP4-Datei im Falle eines Videos und eine MP3- und Ogg-Datei im Falle von Audio zu erhalten, aber es gibt genügend Programme und Werkzeuge, die Ihnen dabei helfen können, dies ohne allzu viele Probleme zu tun, wie [CloudConvert](https://cloudconvert.com/mp4-converter) (online) und [Audacity](https://sourceforge.net/projects/audacity/) (Desktop-Anwendung). Wir würden es begrüßen, wenn Sie es versuchen würden!

> [!NOTE]
> Wenn Sie keine Videos oder Audios finden können, können Sie gerne unsere [Beispiel-Audio- und -Videodateien](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) verwenden, um diese Übung durchzuführen.

Wir möchten, dass Sie:

1. Speichern Sie Ihre Audio- und Videodateien in einem neuen Verzeichnis auf Ihrem Computer.
2. Erstellen Sie eine neue HTML-Datei im selben Verzeichnis, genannt `index.html`, basierend auf unserer [Vorlage für Anfänger](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).
3. Fügen Sie der Seite {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente hinzu; lassen Sie sie die Standardsteuerungen des Browsers anzeigen.
4. Geben Sie beiden {{HTMLElement("source")}} Elemente, damit Browser das für sie beste Audioformat finden und laden können. Diese sollten [`type`](/de/docs/Web/HTML/Reference/Elements/source#type) Attribute enthalten.
5. Geben Sie beiden innerhalb der Tags ein Fallback-`<p>`-Element, das einen direkten Link zu den Medien für nicht unterstützende Browser bereitstellt.
6. Geben Sie dem `<video>` Element ein Poster, das angezeigt wird, bevor das Video abgespielt wird. Haben Sie Spaß daran, Ihr eigenes Posterbild zu erstellen.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html
<video controls poster="poster.png">
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    Your browser doesn't support HTML video. Here is a
    <a href="rabbit320.mp4">link to the video</a> instead.
  </p>
</video>

<audio controls>
  <source src="viper.mp3" type="audio/mp3" />
  <source src="viper.ogg" type="audio/ogg" />
  <p>
    Your browser doesn't support HTML audio. Here is a
    <a href="viper.mp3">link to the audio</a> instead.
  </p>
</audio>
```

</details>

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests durchführen, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Audio und Video](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video).

## Zusammenfassung

Und das war's — wir hoffen, Sie hatten Spaß beim Arbeiten mit Video und Audio auf Webseiten! Als Nächstes präsentieren wir Ihnen eine Herausforderung, um Ihre Fähigkeiten mit HTML-Medien zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}
