---
title: HTML video und audio
short-title: Video und Audio
slug: Learn_web_development/Core/Structuring_content/HTML_video_and_audio
l10n:
  sourceCommit: daad50a992d56b23573fdd50517c75df176747cf
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video", "Learn_web_development/Core/Structuring_content")}}

Nachdem wir nun einfache Bilder zu einer Webseite hinzugefügt haben, ist der nächste Schritt, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel sehen wir uns an, wie wir dies mit den {{htmlelement("video")}} und {{htmlelement("audio")}} Elementen tun können; zum Schluss sehen wir uns an, wie Sie Untertitel/Captions zu Ihren Videos hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textuelle Semantiken wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Verwendung von <code>&lt;source&gt;</code> Elementen zur Bereitstellung verschiedener Video- oder Audioquellen.</li>
          <li>Die Grundlagen der Verwendung von Textspuren wie Captions und Untertiteln.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Video und Audio im Web

Die erste Welle von Online-Videos und -Audios wurde durch proprietäre, plugin-basierte Technologien wie [Flash](https://en.wikipedia.org/wiki/Adobe_Flash) und [Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight) ermöglicht. Beide hatten Sicherheits- und Zugänglichkeitsprobleme und sind heute zugunsten nativer HTML-Lösungen mit {{htmlelement("video")}} und {{htmlelement("audio")}} Elementen und der Verfügbarkeit von {{Glossary("JavaScript", "JavaScript")}} {{Glossary("API", "APIs")}} für deren Kontrolle veraltet. Wir werden uns hier nicht mit JavaScript beschäftigen – nur mit den grundlegenden Grundlagen, die mit HTML erreicht werden können.

Wir werden Ihnen nicht beibringen, wie man Audio- und Videodateien produziert – das erfordert einen ganz anderen Satz von Fähigkeiten. Wir haben [Beispiel-Audio- und Videodateien sowie Beispielcode](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) bereitgestellt, um selbst zu experimentieren, falls Sie keine eigenen Dateien zur Hand haben.

> [!NOTE]
> Bevor Sie hier beginnen, sollten Sie auch wissen, dass es einige OVPs (Online-Videoanbieter) wie [YouTube](https://www.youtube.com/), [Dailymotion](https://www.dailymotion.com/) und [Vimeo](https://vimeo.com/) und Online-Audioanbieter wie [Soundcloud](https://soundcloud.com/) gibt. Solche Unternehmen bieten eine bequeme, einfache Möglichkeit, Videos zu hosten und zu konsumieren, sodass Sie sich nicht um den enormen Bandbreitenverbrauch kümmern müssen. OVPs bieten in der Regel auch vorgefertigten Code zum Einbetten von Video/Audio in Ihre Webseiten an; wenn Sie diesen Weg wählen, können Sie einige der Schwierigkeiten vermeiden, die wir in diesem Artikel besprechen. Über diesen Dienst werden wir im nächsten Artikel noch mehr sprechen.

## Das `<video>` Element

Das {{htmlelement("video")}} Element ermöglicht Ihnen, sehr einfach ein Video einzubetten. Ein wirklich einfaches Beispiel sieht so aus:

```html
<video src="rabbit320.webm" controls>
  <p>
    Your browser doesn't support HTML video. Here is a
    <a href="rabbit320.webm">link to the video</a> instead.
  </p>
</video>
```

Zu beachtende Merkmale sind:

- [`src`](/de/docs/Web/HTML/Reference/Elements/video#src)
  - : Auf ähnliche Weise wie beim {{htmlelement("img")}} Element enthält das `src` (source) Attribut einen Pfad zu dem Video, das Sie einbetten möchten. Es funktioniert auf genau die gleiche Weise.
- [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls)
  - : Nutzer müssen in der Lage sein, Video- und Audiowiedergabe zu steuern (dies ist besonders kritisch für Menschen mit [Epilepsie](https://en.wikipedia.org/wiki/Epilepsy#Epidemiology).) Sie müssen entweder das `controls` Attribut verwenden, um die eigene Steuerungsschnittstelle des Browsers einzubinden, oder Ihre Schnittstelle mit der entsprechenden [JavaScript API](/de/docs/Web/API/HTMLMediaElement) erstellen. Mindestens muss die Benutzeroberfläche eine Möglichkeit zum Starten und Stoppen der Medien sowie zum Anpassen der Lautstärke enthalten.
- Der Absatz innerhalb der `<video>` Tags
  - : Dies wird als **Fallback-Inhalt** bezeichnet – dieser wird angezeigt, wenn der Browser, der auf die Seite zugreift, das `<video>` Element nicht unterstützt, sodass wir eine Rückfallebene für ältere Browser bereitstellen können. Dies kann alles Mögliche sein; in diesem Fall haben wir einen direkten Link zur Videodatei bereitgestellt, sodass der Benutzer darauf auf irgendeine Weise zugreifen kann, unabhängig davon, welchen Browser er verwendet.

Das eingebettete Video sieht ungefähr so aus:

![Ein einfacher Videoplayer, der ein Video eines kleinen weißen Kaninchens zeigt](simple-video.png)

Sie können [das Beispiel live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/simple-video.html).)

## Verwendung mehrerer Quellformate zur Verbesserung der Kompatibilität

Es gibt ein Problem mit dem obigen Beispiel. Es ist möglich, dass das Video für Sie nicht abgespielt wird, weil verschiedene Browser unterschiedliche Video- (und Audio-)Formate unterstützen. Glücklicherweise können Sie einige Maßnahmen ergreifen, um dieses Problem zu vermeiden.

### Inhalte einer Mediendatei

Zuerst lassen Sie uns schnell die Terminologie durchgehen. Formate wie OGG, WAV, MP4 und WebM werden als **[Container-Formate](/de/docs/Web/Media/Guides/Formats/Containers)** bezeichnet. Sie definieren eine Struktur, in der die Audio- und/oder Videospuren, die das Medium bilden, zusammen mit Metadaten gespeichert werden, die das Medium, die verwendeten Codecs zur Codierung der Kanäle usw. beschreiben.

Eine WebM-Datei, die einen Film enthält, der eine Hauptvideospur und eine alternative Winkelspur sowie Audio für Englisch und Spanisch, zusätzlich zu Audio für eine englische Kommentarspur enthält, kann wie im folgenden Diagramm gezeigt konzeptionell dargestellt werden. Ebenfalls enthalten sind Textspuren mit geschlossenen Untertiteln für den Spielfilm, spanischen Untertiteln für den Film und englischen Untertiteln für den Kommentar.

![Diagramm zur Veranschaulichung der Inhalte einer Mediendatei auf der Ebene der Spuren.](containersandtracks.png)

Die Audio- und Videospuren innerhalb des Containers enthalten Daten im geeigneten Format für den zur Codierung dieses Mediums verwendeten Codec. Verschiedene Formate werden für Audiospuren im Vergleich zu Videospuren verwendet. Jede Audiospur wird mit einem [Audio-Codec](/de/docs/Web/Media/Guides/Formats/Audio_codecs) codiert, während Videospuren mit (wie Sie wahrscheinlich bereits erraten haben) [einem Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) codiert werden. Wie bereits erwähnt, unterstützen verschiedene Browser unterschiedliche Video- und Audioformate sowie unterschiedliche Containerformate (wie OGG, MP4 und WebM, die wiederum unterschiedliche Arten von Video und Audio enthalten können).

Zum Beispiel:

- Ein WebM-Container umfasst typischerweise Vorbis- oder Opus-Audio mit VP8/VP9-Video. Dies wird in allen modernen Browsern unterstützt, obwohl ältere Versionen möglicherweise nicht funktionieren.
- Ein MP4-Container kombiniert oft AAC- oder MP3-Audio mit H.264-Video. Dies wird ebenfalls in allen modernen Browsern unterstützt.
- Der Ogg-Container neigt dazu, Vorbis-Audio und Theora-Video zu verwenden. Dies wird am besten in Firefox und Chrome unterstützt, wurde jedoch im Wesentlichen durch das qualitativ bessere WebM-Format ersetzt.

Es gibt einige Sonderfälle. Zum Beispiel wird bei einigen Arten von Audio die Codecdaten oft ohne Container oder mit einem vereinfachten Container gespeichert. Ein solcher Fall ist das FLAC-Codec, das am häufigsten in FLAC-Dateien gespeichert wird, die einfach nur Roh-FLAC-Spuren sind.

Ein weiteres Beispiel ist die allseits bekannte "MP3-Datei". Eine "MP3-Datei" ist eine Audiodatei, die mit MPEG-1 Audio Layer III-Kompression codiert ist. Während sie Metadaten enthalten kann, wird sie nicht in einem separaten MPEG- oder MPEG-2-Container verkapselt. Ihre weit verbreitete Unterstützung in den {{htmlelement("audio")}} und {{htmlelement("video")}} Elementen zeugt hauptsächlich von ihrer anhaltenden Beliebtheit.

Ein Audioplayer wird dazu neigen, eine Audiospur direkt abzuspielen, z. B. eine MP3- oder Ogg-Datei. Diese benötigen keine Container.

### Unterstützung von Mediendateien in Browsern

> [!NOTE]
> Mehrere populäre Formate wie MP3 und MP4/H.264 sind ausgezeichnet, aber durch Patente belastet; das heißt, es gibt Patente, die einige oder alle Techniken abdecken, auf denen sie basieren. In Amerika waren Patente für MP3 bis 2017 gültig und H.264 ist mindestens bis 2027 patentbelastet.
>
> Aufgrund dieser Patente müssen Browser, die diese Codecs unterstützen möchten, in der Regel enorme Lizenzgebühren zahlen. Außerdem ziehen es einige Menschen vor, eingeschränkte Software zu vermeiden und nur offene Formate zu verwenden. Aus diesen rechtlichen und präferentiellen Gründen sehen sich Webentwickler gezwungen, mehrere Formate zu unterstützen, um eine Videoerfahrung für ihr gesamtes Publikum bereitzustellen.

Die in der vorherigen Sektion beschriebenen Codecs existieren, um Video und Audio in handhabbaren Dateien zu komprimieren, da rohe Audio- und Videodaten beide äußerst groß sind. Jeder Webbrowser unterstützt eine Auswahl an **{{Glossary("Codec", "Codecs")}}** wie Vorbis oder H.264, die verwendet werden um das komprimierte Audio und Video in Binärdaten umzuwandeln und vice versa. Jeder Codec bietet seine eigenen Vor- und Nachteile, und jeder Container kann auch seine eigenen positiven und negativen Features bieten, die Ihre Entscheidungen darüber beeinflussen, welches Sie verwenden.

Die Sache wird etwas komplizierter, da nicht nur jeder Browser ein anderes Set an Containerdateiformaten unterstützt, sondern sie auch eine unterschiedliche Auswahl an Codecs unterstützen. Um die Wahrscheinlichkeit zu maximieren, dass Ihre Website oder App in einem Nutzerbrowser funktioniert, müssen Sie möglicherweise jede Mediendatei, die Sie verwenden, in mehreren Formaten bereitstellen. Wenn Ihre Website und der Browser des Benutzers kein gemeinsames Format für Mediendateien teilen, wird Ihre Mediendatei nicht abgespielt.

Aufgrund der Komplexität, sicherzustellen, dass die Medien Ihrer App über jede Kombination von Browsern, Plattformen und Geräten, die Sie erreichen möchten, angezeigt werden können, kann die Auswahl der besten Kombination aus Codecs und Container eine komplizierte Aufgabe sein. Siehe [Auswahl des richtigen Containers](/de/docs/Web/Media/Guides/Formats/Containers#choosing_the_right_container) für Hilfe zur Auswahl des für Ihre Bedürfnisse am besten geeigneten Containerdateiformats; ebenso siehe [Auswahl eines Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec) und [Auswahl eines Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs#choosing_an_audio_codec) für Hilfe bei der Auswahl der ersten Mediencodecs, die Sie für Ihre Inhalte und Ihre Zielgruppe verwenden sollten.

Eine zusätzliche Sache, die zu beachten ist: Mobile Browser können zusätzliche Formate unterstützen, die ihre Desktop-Äquivalente nicht unterstützen, genau wie sie möglicherweise nicht alle gleichen Formate unterstützen, die die Desktop-Version unterstützt. Darüber hinaus können sowohl Desktop- als auch Mobile-Browser _möglicherweise_ so gestaltet sein, dass die Bearbeitung der Medienwiedergabe (entweder für alle Medien oder nur für bestimmte Typen, die sie intern nicht verarbeiten können) ausgelagert wird. Dies bedeutet, dass die Medienunterstützung teilweise davon abhängt, welche Software der Benutzer installiert hat.

Wie machen wir das also? Schauen Sie sich das folgende [aktualisierte Beispiel](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) an ([probieren Sie es live aus](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html), auch):

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

Hier haben wir das `src` Attribut aus dem eigentlichen {{HTMLElement("video")}} Tag entfernt und stattdessen separate {{htmlelement("source")}} Elemente eingefügt, die auf ihre eigenen Quellen verweisen. In diesem Fall wird der Browser die {{HTMLElement("source")}}-Elemente durchgehen und das erste abspielen, das er den Codec zur Unterstützung hat. Das Hinzufügen von WebM- und MP4-Quellen sollte heutzutage ausreichen, um Ihr Video auf den meisten Plattformen und Browsern abzuspielen.

Jedes `<source>` Element hat auch ein [`type`](/de/docs/Web/HTML/Reference/Elements/source#type) Attribut. Dieses ist optional, aber es wird empfohlen, es einzuschließen. Das `type` Attribut enthält den {{Glossary("MIME_type", "MIME-Typ")}} der durch das `<source>` spezifizierten Datei, und Browser können das `type` Attribut verwenden, um Videos, die sie nicht verstehen, sofort zu überspringen. Wenn `type` nicht inkludiert ist, werden Browser jede Datei laden und versuchen abzuspielen, bis sie eine finden, die funktioniert, was offensichtlich Zeit kostet und eine unnötige Nutzung von Ressourcen darstellt.

Sehen Sie sich unseren [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats) an, um Hilfe bei der Auswahl der besten Container und Codecs für Ihre Bedürfnisse zu erhalten, sowie um die richtigen MIME-Typen für jede Datei anzugeben.

## Weitere Funktionen des `<video>` Elements

Es gibt eine Reihe von weiteren Funktionen, die Sie einbeziehen können, wenn Sie ein HTML-Video anzeigen. Schauen Sie sich unser nächstes Beispiel an:

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

![Ein Videoplayer, der ein Posterbild zeigt, bevor es abgespielt wird. Das Posterbild sagt HTML video example, OMG hell yeah!](poster_screenshot_updated.png)

Zu den Funktionen gehören:

- [`width`](/de/docs/Web/HTML/Reference/Elements/video#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/video#height)
  - : Sie können die Videogröße entweder mit diesen Attributen oder mit {{Glossary("CSS", "CSS")}} steuern. In beiden Fällen behalten Videos ihr natives Breiten-Höhe-Verhältnis – bekannt als **Seitenverhältnis**. Wenn das Seitenverhältnis nicht durch die von Ihnen festgelegten Größen gewahrt bleibt, wird das Video horizontal in den Raum hineinwachsen, und der nicht gefüllte Raum wird einfach standardmäßig mit einer soliden Hintergrundfarbe versehen.
- [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay)
  - : Lässt das Audio oder Video sofort abspielen, während der Rest der Seite lädt. Es wird geraten, keine automatisch abspielenden Videos (oder Audios) auf Ihren Webseiten zu verwenden, da Nutzer dies als wirklich störend empfinden können.
- [`loop`](/de/docs/Web/HTML/Reference/Elements/video#loop)
  - : Lässt das Video (oder Audio) bei jedem Beenden wieder von vorne beginnen. Dies kann ebenfalls störend sein, also nur verwenden, wenn es wirklich notwendig ist.
- [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted)
  - : Lässt das Medium standardmäßig ohne Ton abspielen.
- [`poster`](/de/docs/Web/HTML/Reference/Elements/video#poster)
  - : Die URL eines Bildes, das angezeigt wird, bevor das Video abgespielt wird. Es ist gedacht, um als Startbildschirm oder Werbebild zu dienen.
- [`preload`](/de/docs/Web/HTML/Reference/Elements/video#preload)
  - : Wird zum Puffern großer Dateien verwendet; es kann einen der drei Werte annehmen:
    - `"none"` puffert die Datei nicht
    - `"auto"` puffert die Mediendatei
    - `"metadata"` puffert nur die Metadaten der Datei

Sie können das obige Beispiel [live auf GitHub abspielen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) (auch den [Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html).) Beachten Sie, dass wir das `autoplay` Attribut in der Live-Version nicht aufgenommen haben – wenn das Video sofort abspielt, sobald die Seite geladen ist, können Sie das Poster nicht sehen!

## Das `<audio>` Element

Das {{htmlelement("audio")}} Element funktioniert genauso wie das {{htmlelement("video")}} Element, mit einigen kleinen Unterschieden, die unten skizziert sind. Ein typisches Beispiel könnte so aussehen:

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

![Ein einfacher Audioplayer mit einem Abspielknopf, Timer, Lautstärkeregelung und Fortschrittsbalken](audio-player.png)

> [!NOTE]
> Sie können [das Audio-Demo live ausführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) auf GitHub (auch den [Quellcode des Audioplayers](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) sehen.)

Dies beansprucht weniger Platz als ein Videoplayer, da keine visuelle Komponente vorhanden ist – Sie müssen nur Steuerelemente zum Abspielen des Audios anzeigen. Weitere Unterschiede zu HTML-Video sind wie folgt:

- Das {{htmlelement("audio")}} Element unterstützt nicht die `width`/`height` Attribute – wiederum gibt es keine visuelle Komponente, der eine Breite oder Höhe zugewiesen werden könnte.
- Es unterstützt auch nicht das `poster` Attribut – wiederum keine visuelle Komponente.

Abgesehen davon unterstützt `<audio>` alle Funktionen wie `<video>` – lesen Sie die obigen Abschnitte für weitere Informationen darüber.

## Anzeigen von Textspuren für Videos

Nun besprechen wir ein etwas fortgeschritteneres Konzept, das wirklich nützlich zu wissen ist. Viele Menschen können oder wollen den Audio-/Videoinhalt, den sie im Web finden, zumindest zu bestimmten Zeiten nicht hören. Beispielsweise:

- Viele Menschen haben Hörbehinderungen (wie schwerhörig oder taub zu sein), sodass sie das Audio nicht oder nur unklar hören können.
- Andere können das Audio nicht hören, weil sie sich in einer lauten Umgebung befinden (wie einer überfüllten Bar, wenn ein Sportspiel gezeigt wird).
- Ebenfalls kann es in Umgebungen störend oder ablenkend wirken, wenn das Audio abgespielt wird (zum Beispiel in einer Bibliothek oder wenn ein Partner versucht, zu schlafen), daher können Untertitel sehr nützlich sein.
- Menschen, die die Sprache des Videos nicht sprechen, möchten möglicherweise eine Texttranskription oder sogar eine Übersetzung, um den Medieninhalt besser zu verstehen.

Wäre es nicht schön, diesen Menschen ein Transkript der im Audio/Video gesprochenen Worte zur Verfügung zu stellen? Dank HTML Video können Sie das. Dazu verwenden wir das [WebVTT](/de/docs/Web/API/WebVTT_API) Dateiformat und das {{htmlelement("track")}} Element.

> [!NOTE]
> "Transkribieren" bedeutet "gesprochene Wörter als Text niederzuschreiben." Der resultierende Text ist ein "Transkript."

WebVTT ist ein Format zum Schreiben von Textdateien, die mehrere Textzeichenfolgen sowie Metadaten wie die Zeit im Video enthalten, zu der jede Textzeichenfolge angezeigt werden soll, und sogar begrenzte Stil-/Positionsinformationen. Diese Textzeichenfolgen werden **Cues** genannt, und es gibt mehrere Arten von Cues, die für unterschiedliche Zwecke verwendet werden. Die häufigsten Cues sind:

- Untertitel
  - : Übersetzungen von Fremdmaterial, für Leute, die die im Audio gesprochenen Wörter nicht verstehen.
- Captions
  - : Synchronisierte Transkriptionen von Dialogen oder Beschreibungen von bedeutenden Geräuschen, um Menschen, die das Audio nicht hören können, zu ermöglichen zu verstehen, was vor sich geht.
- Zeitgesteuerte Beschreibungen
  - : Text, der vom Mediaplayer gesprochen werden soll, um wichtige visuelle Elemente für blinde oder anderweitig visuell eingeschränkte Benutzer zu beschreiben.

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

1. Speichern Sie es als `.vtt` Datei an einem Ort, den der Server bereitstellen kann (siehe unten), wie im selben Verzeichnis wie die HTML-Datei.
2. Verlinken Sie zur `.vtt` Datei mit dem {{htmlelement("track")}} Element. `<track>` sollte innerhalb von `<audio>` oder `<video>` platziert werden, aber nach allen `<source>` Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) Attribut, um anzugeben, ob die Cues `subtitles`, `captions` oder `descriptions` sind. Verwenden Sie außerdem [`srclang`](/de/docs/Web/HTML/Reference/Elements/track#srclang), um dem Browser anzugeben, in welcher Sprache Sie die Untertitel geschrieben haben. Schließlich fügen Sie [`label`](/de/docs/Web/HTML/Reference/Elements/track#label) hinzu, um Lesern zu helfen, die Sprache zu identifizieren, nach der sie suchen.

Ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

Um dies auszuprobieren, müssen Sie die Dateien auf einem [lokalen HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) hosten. Im Browserausgang werden Sie ein Video sehen, das Untertitel anzeigt. Für eine vollständige Anwendung und deren Quellcode siehe [Hinzufügen von Captions und Untertiteln zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Dieses Beispiel verwendet JavaScript, um Benutzern zu ermöglichen, zwischen verschiedenen Untertiteln zu wählen. Beachten Sie, dass Sie, um die Untertitel zu aktivieren, den "CC" Button drücken und eine Option auswählen müssen – Englisch, Deutsch oder Spanisch.

> [!NOTE]
> Textspuren helfen Ihnen auch mit {{Glossary("SEO", "SEO")}}, da Suchmaschinen besonders auf Text ausgerichtet sind. Textspuren ermöglichen sogar Suchmaschinen, direkt auf einen Punkt mitten im Video zu verlinken.

## Einbetten Ihrer eigenen Audio- und Videodateien

Für diese Aufgabe: Warum nicht in die Welt hinausgehen und einige Ihrer eigenen Videos und Audios aufnehmen? Wenn Sie ein Telefon haben, verwenden Sie dieses, um Audio und Video aufzunehmen, übertragen Sie es auf Ihren Computer und probieren Sie es aus. Sie müssen möglicherweise einige Umwandlungen durchführen, um am Ende ein WebM und MP4 im Fall von Video, und ein MP3 und Ogg im Fall von Audio zu haben, aber es gibt genug Programme und Tools, die Ihnen dies ohne allzu große Umstände ermöglichen, wie [CloudConvert](https://cloudconvert.com/mp4-converter) (online) und [Audacity](https://sourceforge.net/projects/audacity/) (Desktopanwendung). Wir möchten, dass Sie dies ausprobieren!

> [!NOTE]
> Wenn es Ihnen nicht möglich ist, ein Video oder Audio zu beschaffen, können Sie unsere [Beispiel-Audio- und Videodateien](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) verwenden, um diese Übung durchzuführen.

Wir möchten, dass Sie:

1. Speichern Sie Ihre Audio- und Videodateien in einem neuen Verzeichnis auf Ihrem Computer.
2. Erstellen Sie eine neue HTML-Datei in demselben Verzeichnis, genannt `index.html`, basierend auf unserer [Einstiegs-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).
3. Fügen Sie der Seite {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente hinzu; lassen Sie sie die Standard-Browser-Steuerelemente anzeigen.
4. Geben Sie ihnen jeweils {{HTMLElement("source")}} Elemente, damit die Browser das Audioformat finden, das sie am besten unterstützen und laden es. Diese sollten [`type`](/de/docs/Web/HTML/Reference/Elements/source#type) Attribute enthalten.
5. Geben Sie beiden ein Fallback-`<p>`-Element innerhalb der Tags, das einen direkten Link zu den Medien für nicht unterstützende Browser bietet.
6. Geben Sie dem `<video>` Element ein Poster, das angezeigt wird, bevor das Video abgespielt wird. Haben Sie Spaß daran, Ihr eigenes Poster-Design zu erstellen.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte in etwa so aussehen:

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

## Zusammenfassung

Damit sind wir am Ende – wir hoffen, Sie hatten viel Spaß beim Spielen mit Video und Audio in Webseiten! Als Nächstes geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie die Informationen über HTML-Video und -Audio, die wir Ihnen bereitgestellt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video", "Learn_web_development/Core/Structuring_content")}}
