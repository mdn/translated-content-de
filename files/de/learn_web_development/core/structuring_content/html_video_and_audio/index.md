---
title: HTML Video und Audio
short-title: Video und Audio
slug: Learn_web_development/Core/Structuring_content/HTML_video_and_audio
l10n:
  sourceCommit: e58df624ccdc08f29a04d11b277239e230abd725
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}

Da wir nun mit dem Hinzufügen einfacher Bilder zu einer Webseite vertraut sind, besteht der nächste Schritt darin, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel werden wir uns damit beschäftigen, und zwar mit den {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen; wir werden dann damit abschließen, uns anzusehen, wie man Untertitel zu Ihren Videos hinzufügt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >. Textebene-Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Grundlegende <code>&lt;video&gt;</code> und <code>&lt;audio&gt;</code>-Tag-Syntax</li>
          <li>Video- und audio-spezifische Attribute wie controls und muted.</li>
          <li>Verwendung von <code>&lt;source&gt;</code>-Elementen, um verschiedene Video- oder Audioquellen bereitzustellen.</li>
          <li>Grundlagen zur Verwendung von Textspuren wie Untertitel und Captions.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Video und Audio im Web

Der erste Zustrom von Online-Videos und Audio wurde durch proprietäre, plugin-basierte Technologien wie [Flash](https://en.wikipedia.org/wiki/Adobe_Flash) und [Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight) ermöglicht. Beide hatten Sicherheits- und Zugänglichkeitsprobleme und sind inzwischen zugunsten nativer HTML-Lösungen, wie den {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen, und der Verfügbarkeit von {{Glossary("JavaScript", "JavaScript")}}-{{Glossary("API", "APIs")}} zur Steuerung dieser obsolet. Wir werden uns hier nicht mit JavaScript beschäftigen, sondern nur mit den grundlegenden Grundlagen, die mit HTML erreicht werden können.

Wir werden Ihnen nicht beibringen, wie Sie Audio- und Videodateien produzieren — das erfordert eine völlig andere Fähigkeit. Wir haben Ihnen [Beispiel-Audio- und Videodateien und Beispielcode](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) zur Verfügung gestellt, damit Sie selbst experimentieren können, falls Sie Ihre eigenen nicht zur Hand haben.

> [!NOTE]
> Bevor Sie hier beginnen, sollten Sie auch wissen, dass es viele OVPs (Online-Video-Anbieter) wie [YouTube](https://www.youtube.com/), [Dailymotion](https://www.dailymotion.com/) und [Vimeo](https://vimeo.com/) gibt und Online-Audio-Anbieter wie [Soundcloud](https://soundcloud.com/). Solche Unternehmen bieten eine bequeme, einfache Möglichkeit, Videos zu hosten und zu konsumieren, sodass Sie sich keine Gedanken über den enormen Bandbreitenverbrauch machen müssen. OVPs bieten normalerweise sogar fertigen Code zum Einbetten von Video/Audio in Ihre Webseiten an; wenn Sie diesen Weg einschlagen, können Sie einige der Schwierigkeiten vermeiden, die wir in diesem Artikel besprechen. Wir werden diese Art von Service im nächsten Artikel etwas genauer besprechen.

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
  - : In gleicher Weise wie beim {{htmlelement("img")}}-Element enthält das `src`- (Quelle-) Attribut einen Pfad zu dem Video, das Sie einbetten möchten. Es funktioniert genau gleich.
- [`controls`](/de/docs/Web/HTML/Element/video#controls)
  - : Benutzer müssen in der Lage sein, die Wiedergabe von Video und Audio zu steuern (dies ist besonders wichtig für Menschen, die [Epilepsie](https://en.wikipedia.org/wiki/Epilepsy#Epidemiology) haben.) Sie müssen entweder das `controls`-Attribut verwenden, um die eigene Steueroberfläche des Browsers einzuschließen, oder Ihre Oberfläche mit der entsprechenden [JavaScript-API](/de/docs/Web/API/HTMLMediaElement) erstellen. Mindestens muss die Oberfläche eine Möglichkeit bieten, das Medium zu starten und zu stoppen und die Lautstärke anzupassen.
- Der Absatz innerhalb der `<video>`-Tags
  - : Dies wird als **Fallback-Inhalt** bezeichnet — dieser wird angezeigt, wenn der Browser, der auf die Seite zugreift, das `<video>`-Element nicht unterstützt, sodass wir einen Fallback für ältere Browser bereitstellen können. Dies kann alles sein, was Sie möchten; in diesem Fall haben wir einen direkten Link zur Videodatei bereitgestellt, sodass der Benutzer unabhängig vom verwendeten Browser zumindest auf irgendeine Weise darauf zugreifen kann.

Das eingebettete Video wird ungefähr so aussehen:

![Ein einfacher Videoplayer, der ein Video eines kleinen weißen Kaninchens zeigt](simple-video.png)

Sie können [das Beispiel hier live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) (siehe auch der [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/simple-video.html).)

## Verwendung mehrerer Quellformate zur Verbesserung der Kompatibilität

Es gibt ein Problem mit dem obigen Beispiel. Es ist möglich, dass das Video für Sie nicht abgespielt wird, da verschiedene Browser unterschiedliche Video- (und Audio-) Formate unterstützen. Glücklicherweise gibt es Dinge, die Sie tun können, um zu verhindern, dass dies ein Problem darstellt.

### Inhalte einer Mediendatei

Lassen Sie uns zuerst die Terminologie schnell durchgehen. Formate wie OGG, WAV, MP4 und WebM werden als **[Containerformate](/de/docs/Web/Media/Guides/Formats/Containers)** bezeichnet. Sie definieren eine Struktur, in der die Audio- und/oder Videospuren, aus denen das Medium besteht, zusammen mit Metadaten gespeichert sind, die das Medium und die zur Kodierung seiner Kanäle verwendeten Codecs beschreiben.

Eine WebM-Datei, die einen Film enthält, der eine Hauptvideospur und eine alternative Winkelspur, sowie Audio sowohl für Englisch als auch Spanisch hat, zusätzlich zu Audio für eine englische Kommentarspur, kann im unten stehenden Diagramm konzeptionell dargestellt werden. Ebenfalls enthalten sind Textspuren, die verschlossene Untertitel für den Spielfilm, spanische Untertitel für den Film und englische Untertitel für den Kommentar enthalten.

![Diagramm, das die Inhalte einer Mediendatei auf Track-Ebene konzeptualisiert.](containersandtracks.png)

Die Audio- und Videospuren innerhalb des Containers halten Daten im geeigneten Format für den zur Kodierung des Mediums verwendeten Codec. Unterschiedliche Formate werden für Audiospuren im Vergleich zu Videospuren verwendet. Jede Audiospur ist mit einem [Audio-Codec](/de/docs/Web/Media/Guides/Formats/Audio_codecs) kodiert, während Videospuren unter Verwendung (wie Sie wahrscheinlich erraten haben) [eines Video-Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs) kodiert werden. Wie bereits erwähnt, unterstützen verschiedene Browser unterschiedliche Video- und Audioformate und unterschiedliche Containerformate (wie OGG, MP4 und WebM, die wiederum verschiedene Arten von Video und Audio enthalten können).

Zum Beispiel:

- Ein WebM-Container verpackt typischerweise Vorbis- oder Opus-Audio mit VP8/VP9-Video. Dies wird in allen modernen Browsern unterstützt, obwohl ältere Versionen möglicherweise nicht funktionieren.
- Ein MP4-Container verpackt häufig AAC- oder MP3-Audio mit H.264-Video. Dies wird ebenfalls in allen modernen Browsern unterstützt.
- Der Ogg-Container tendiert dazu, Vorbis-Audio und Theora-Video zu verwenden. Dies wird am besten in Firefox und Chrome unterstützt, wurde jedoch im Grunde durch das besser Qualität WebM-Format ersetzt.

Es gibt einige Sonderfälle. Zum Beispiel wird für einige Arten von Audio-Codec-Daten oft ohne Container oder mit einem vereinfachten Container gespeichert. Ein solches Beispiel ist der FLAC-Codec, der am häufigsten in FLAC-Dateien gespeichert wird, bei denen es sich einfach um rohe FLAC-Tracks handelt.

Ein weiteres Beispiel ist die allseits beliebte "MP3-Datei". Eine "MP3-Datei" ist eine Audiodatei, die mit MPEG-1 Audio Layer III-Kompression kodiert ist. Obwohl sie Metadaten enthalten kann, ist sie nicht innerhalb eines separaten MPEG- oder MPEG-2-Containers gekapselt. Die weit verbreitete Unterstützung in den {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elementen zeugt weitgehend von ihrer anhaltenden Beliebtheit.

Ein Audio-Player wird dazu neigen, eine Audiospur direkt abzuspielen, z.B. eine MP3- oder Ogg-Datei. Diese benötigen keine Container.

### Unterstützung von Mediendateien in Browsern

> [!NOTE]
> Mehrere beliebte Formate, wie MP3 und MP4/H.264, sind hervorragend, aber durch Patente belastet; das heißt, es gibt Patente, die einige oder alle der Technologien abdecken, auf denen sie basieren. In den Vereinigten Staaten deckten Patente MP3 bis 2017 ab, und H.264 ist bis mindestens 2027 durch Patente belastet.
>
> Aufgrund dieser Patente müssen Browser, die Unterstützung für diese Codecs implementieren möchten, in der Regel enorme Lizenzgebühren zahlen. Darüber hinaus ziehen es einige Personen vor, eingeschränkte Software zu vermeiden und ausschließlich offene Formate zu verwenden. Aufgrund dieser rechtlichen und präferentiellen Gründe finden sich Webentwickler gezwungen, mehrere Formate zu unterstützen, um ihr gesamtes Publikum zu erfassen.

Die Codecs, die im vorherigen Abschnitt beschrieben wurden, existieren, um Video und Audio in handhabbare Dateien zu komprimieren, da sowohl Roh-Audio als auch Video außerordentlich groß sind. Jeder Webbrowser unterstützt eine Auswahl an **{{Glossary("Codec", "Codecs")}}**, wie Vorbis oder H.264, die verwendet werden, um das komprimierte Audio und Video in Binärdaten zu konvertieren und wieder zurück. Jeder Codec bietet seine eigenen Vorteile und Nachteile, und jeder Container kann auch seine eigenen positiven und negativen Eigenschaften bieten, die Ihre Entscheidungen bei der Auswahl beeinflussen.

Die Dinge werden etwas komplizierter, da nicht nur jeder Browser eine andere Sammlung von Datei-Containerformaten unterstützt, sondern auch jeder eine andere Auswahl von Codecs unterstützt. Um die Wahrscheinlichkeit zu maximieren, dass Ihre Website oder App auf dem Browser eines Benutzers funktioniert, müssen Sie möglicherweise jede von Ihnen verwendete Mediendatei in mehreren Formaten bereitstellen. Wenn Ihre Site und der Browser des Benutzers kein gemeinsames Medienformat haben, wird Ihr Medium nicht abgespielt.

Aufgrund der Komplexität der Sicherstellung, dass die Medien Ihrer App in jeder Kombination aus Browsern, Plattformen und Geräten, die Sie erreichen möchten, angezeigt werden, kann die Wahl der besten Kombination aus Codecs und Containern eine komplizierte Aufgabe sein. Siehe [Auswahl des richtigen Containers](/de/docs/Web/Media/Guides/Formats/Containers#choosing_the_right_container) für Hilfe bei der Auswahl des für Ihre Anforderungen am besten geeigneten Container-Dateiformats; ebenso siehe [Auswahl eines Video-Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec) und [Auswahl eines Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs#choosing_an_audio_codec) für Hilfe bei der Auswahl der ersten Mediä-Codec für Ihren Inhalt und Ihr Zielpublikum.

Ein weiteres zu beachtendes Detail: Mobile Browser können zusätzliche Formate unterstützen, die nicht von ihren Desktop-Äquivalenten unterstützt werden, genauso wie sie möglicherweise nicht alle Formate unterstützen, die die Desktop-Version unterstützt. Darüber hinaus könnten sowohl Desktop- als auch mobile Browser so gestaltet sein, dass sie die Medienwiedergabe auslagern (entweder für alle Medien oder nur für bestimmte Typen, die sie nicht intern verarbeiten können). Dies bedeutet, dass die Medienunterstützung teilweise davon abhängt, welche Software der Benutzer installiert hat.

Wie machen wir das also? Schauen Sie sich das folgende [aktualisierte Beispiel](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) an ([probieren Sie es hier live aus](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html), ebenfalls):

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

Hier haben wir das `src`-Attribut aus dem tatsächlichen {{HTMLElement("video")}}-Tag entfernt und stattdessen separate {{htmlelement("source")}}-Elemente eingebettet, die auf ihre eigenen Quellen verweisen. In diesem Fall durchläuft der Browser die {{HTMLElement("source")}}-Elemente und spielt das erste ab, für das er den Codec zur Unterstützung hat. Das Einbeziehen von WebM- und MP4-Quellen sollte heutzutage ausreichen, um Ihr Video auf den meisten Plattformen und Browsern abzuspielen.

Jedes `<source>`-Element hat ebenfalls ein [`type`](/de/docs/Web/HTML/Element/source#type)-Attribut. Dieses ist optional, aber es wird empfohlen, dass Sie es hinzufügen. Das `type`-Attribut enthält den {{Glossary("MIME_type", "MIME-Typ")}} der Datei, die durch das `<source>` spezifiziert wird, und Browser können die `type`-Angabe verwenden, um sofort Videos zu überspringen, die sie nicht verstehen. Wenn `type` nicht enthalten ist, laden Browser jede Datei und versuchen, sie abzuspielen, bis sie eine finden, die funktioniert, was offensichtlich Zeit kostet und eine unnötige Nutzung von Ressourcen darstellt.

Verweisen Sie auf unseren [Leitfaden zu Medientypen und Formaten](/de/docs/Web/Media/Guides/Formats) für Hilfe bei der Auswahl der besten Container und Codecs für Ihre Bedürfnisse, sowie um die richtigen MIME-Typen nachzuschlagen, die für jeden spezifiert werden sollen.

## Weitere `<video>`-Funktionen

Es gibt eine Reihe anderer Funktionen, die Sie beim Anzeigen eines HTML-Videos einschließen können. Sehen Sie sich unser nächstes Beispiel an:

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

![Ein Videoplayer, der vor dem Abspielen ein Posterbild anzeigt. Das Posterbild sagt: HTML Video Beispiel, OMG hell ja!](poster_screenshot_updated.png)

Merkmale sind:

- [`width`](/de/docs/Web/HTML/Element/video#width) und [`height`](/de/docs/Web/HTML/Element/video#height)
  - : Sie können die Videogröße entweder mit diesen Attributen oder mit {{Glossary("CSS", "CSS")}} steuern. In beiden Fällen behalten Videos ihr natives Breiten-Höhen-Verhältnis bei — bekannt als das **Seitenverhältnis**. Wenn das Seitenverhältnis nicht durch die von Ihnen festgelegten Größen beibehalten wird, wächst das Video horizontal, um den Raum zu füllen, und der nicht gefüllte Raum wird standardmäßig einfach mit einer soliden Hintergrundfarbe versehen.
- [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)
  - : Lässt das Audio oder Video sofort starten, während der Rest der Seite geladen wird. Es wird empfohlen, keine automatisch abspielenden Videos (oder Audios) auf Ihren Seiten zu verwenden, da Benutzer dies wirklich als störend empfinden können.
- [`loop`](/de/docs/Web/HTML/Element/video#loop)
  - : Lässt das Video (oder Audio) immer wieder abspielen, sobald es endet. Das kann auch störend sein, also nur verwenden, wenn es wirklich notwendig ist.
- [`muted`](/de/docs/Web/HTML/Element/video#muted)
  - : Lässt das Medium standardmäßig ohne Ton abspielen.
- [`poster`](/de/docs/Web/HTML/Element/video#poster)
  - : Die URL eines Bildes, das angezeigt wird, bevor das Video abgespielt wird. Es ist dazu gedacht, für eine Startbildschirm- oder Werbebildschirmanzeige verwendet zu werden.
- [`preload`](/de/docs/Web/HTML/Element/video#preload)

  - : Wird zum Puffern großer Dateien verwendet; es kann einer von drei Werten haben:

    - `"none"` puffert die Datei nicht
    - `"auto"` puffert die Mediendatei
    - `"metadata"` puffert nur die Metadaten der Datei

Sie können das obige Beispiel [bei GitHub live abspielen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) (auch den [Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html).) Beachten Sie, dass wir im Live-Demo das `autoplay`-Attribut nicht enthalten haben — wenn das Video sofort startet, nachdem die Seite geladen ist, sehen Sie das Posterbild nicht!

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

Dies erzeugt im Browser etwas wie Folgendes:

![Ein einfacher Audioplayer mit einer Wiedergabetaste, Timer, Lautstärkeregelung und Fortschrittsanzeige](audio-player.png)

> [!NOTE]
> Sie können [die Audiodemo live ausführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) bei GitHub (auch den [Audioplayer-Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) ansehen.)

Diese nimmt weniger Platz als ein Videoplayer ein, da kein visuelles Element vorhanden ist — Sie müssen lediglich Steuerungen für die Audiowiedergabe anzeigen. Andere Unterschiede zu HTML-Video sind:

- Das {{htmlelement("audio")}}-Element unterstützt nicht die `width`/`height`-Attribute — erneut, es gibt keine visuelle Komponente, der Sie eine Breite oder Höhe zuweisen könnten.
- Es unterstützt auch nicht das `poster`-Attribut — erneut, keine visuelle Komponente.

Ansonsten unterstützt `<audio>` alle gleichen Funktionen wie `<video>` — überprüfen Sie die obigen Abschnitte für weitere Informationen darüber.

## Anzeigen von Video-Textspuren

Jetzt werden wir ein etwas fortgeschritteneres Konzept besprechen, das wirklich nützlich ist, zu wissen. Viele Menschen können oder wollen die Audio-/Video-Inhalte, die sie im Web finden, zumindest zu bestimmten Zeiten nicht hören. Zum Beispiel:

- Viele Menschen haben auditive Beeinträchtigungen (wie Schwerhörigkeit oder Gehörlosigkeit), sodass sie das Audio nicht klar hören können, wenn überhaupt.
- Andere können das Audio nicht hören, weil sie sich in lauten Umgebungen befinden (wie in einer überfüllten Bar, wenn ein Sportspiel gezeigt wird).
- In ähnlicher Weise kann in Umgebungen, in denen das Abspielen des Audios als Ablenkung oder Störung angesehen würde (wie in einer Bibliothek oder wenn ein Partner versucht zu schlafen), das Vorhandensein von Untertiteln sehr nützlich sein.
- Menschen, die die Sprache des Videos nicht sprechen, möchten möglicherweise ein Texttranskript oder sogar eine Übersetzung, um ihnen zu helfen, die Medieninhalte zu verstehen.

Wäre es nicht schön, diesen Menschen ein Transkript der im Audio/Video gesprochenen Worte zur Verfügung zu stellen? Nun, dank HTML-Video können Sie das. Dazu verwenden wir das [WebVTT](/de/docs/Web/API/WebVTT_API)-Dateiformat und das {{htmlelement("track")}}-Element.

> [!NOTE]
> "Transkribieren" bedeutet "gesprochene Wörter als Text aufzuschreiben." Der resultierende Text ist ein "Transkript".

WebVTT ist ein Format zum Schreiben von Textdateien, die mehrere Textstrings zusammen mit Metadaten enthalten, wie die Zeit im Video, zu der jeder Textstring angezeigt werden sollte, und sogar begrenzte Styling-/Positionierungsinformationen. Diese Text-Strings werden als **Cues** bezeichnet, und es gibt mehrere Arten von Cues, die für verschiedene Zwecke verwendet werden. Die häufigsten Cues sind:

- Untertitel
  - : Übersetzungen von fremdsprachigem Material, für Personen, die die im Audio gesprochenen Wörter nicht verstehen.
- Untertitel (captions)
  - : Synchronisierte Abschriften von Dialogen oder Beschreibungen bedeutender Geräusche, um Menschen, die das Audio nicht hören können, zu helfen, zu verstehen, was vor sich geht.
- zeitlich begrenzte Beschreibungen
  - : Text, der vom Mediaplayer gesprochen werden sollte, um wichtige visuelle Elemente für blinde oder anderweitig sehbehinderte Benutzer zu beschreiben.

Eine typische WebVTT-Datei könnte so aussehen:

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

1. Speichern Sie sie als `.vtt`-Datei an einem Ort, von dem der Server sie bereitstellen kann (siehe unten), z. B. im selben Verzeichnis wie die HTML-Datei.
2. Verweisen Sie mit dem {{htmlelement("track")}}-Element auf die `.vtt`-Datei. `<track>` sollte innerhalb von `<audio>` oder `<video>` platziert werden, aber nach allen `<source>`-Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Element/track#kind)-Attribut, um anzugeben, ob die Cues `subtitles`, `captions` oder `descriptions` sind. Verwenden Sie außerdem [`srclang`](/de/docs/Web/HTML/Element/track#srclang), um dem Browser mitzuteilen, in welcher Sprache Sie die Untertitel geschrieben haben. Fügen Sie schließlich [`label`](/de/docs/Web/HTML/Element/track#label) hinzu, um den Lesern zu helfen, die Sprache, die sie suchen, zu identifizieren.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

Um dies auszuprobieren, müssen Sie die Dateien auf einem [lokalen HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) hosten. Im Ausgabebrowser sehen Sie ein Video, das Untertitel anzeigt, ähnlich wie hier:

![Videoplayer mit Standardsteuerungen wie Abspielen, Stoppen, Lautstärke und Untertiteln an und aus. Das abgespielte Video zeigt eine Szene eines Mannes, der eine speerähnliche Waffe hält, und eine Untertitel liest "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für weitere Details, einschließlich wie man Labels hinzufügt, lesen Sie bitte [Hinzufügen von Untertiteln zu HTML5-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können [das Beispiel](https://iandevlin.github.io/mdn/video-player-with-captions/) auf GitHub finden, das zu diesem Artikel gehört, geschrieben von Ian Devlin (sehen Sie sich auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) an.) Dieses Beispiel verwendet etwas JavaScript, um Benutzern die Auswahl zwischen verschiedenen Untertiteln zu ermöglichen. Beachten Sie, dass Sie, um die Untertitel einzuschalten, die "CC"-Taste drücken und eine Option auswählen müssen — Englisch, Deutsch oder Spanisch.

> [!NOTE]
> Textspuren helfen Ihnen auch bei {{Glossary("SEO", "SEO")}}, da Suchmaschinen besonders von Text leben. Textspuren ermöglichen es sogar Suchmaschinen, direkt zu einem Punkt in der Mitte des Videos zu verlinken.

## Aktives Lernen: Einbetten Ihres eigenen Audios und Videos

Für dieses aktive Lernen würden wir (idealerweise) Sie gerne dazu ermutigen, raus in die Welt zu gehen und einige Ihrer eigenen Videos und Audios aufzunehmen — die meisten Telefone ermöglichen es Ihnen heutzutage, Audio und Video sehr leicht aufzunehmen und, vorausgesetzt, Sie können es auf Ihren Computer übertragen, können Sie es verwenden. Möglicherweise müssen Sie einige Konvertierungen durchführen, um mit einem WebM und MP4 im Falle von Videos und einer MP3 und Ogg im Falle von Audio zu enden, aber es gibt genügend Programme, die es Ihnen ermöglichen, dies ohne allzu viele Schwierigkeiten zu tun, wie z.B. [Miro Video Converter](http://www.mirovideoconverter.com/) und [Audacity](https://sourceforge.net/projects/audacity/). Wir würden uns freuen, wenn Sie es versuchen würden!

Sollten Sie kein Video oder Audio zur Hand haben, können Sie gerne unsere [Beispiel-Audio- und Videodateien](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) verwenden, um diese Übung durchzuführen. Sie können auch unseren Beispielcode als Referenz verwenden.

Wir möchten, dass Sie:

1. Speichern Sie Ihre Audio- und Videodateien in einem neuen Verzeichnis auf Ihrem Computer.
2. Erstellen Sie eine neue HTML-Datei im selben Verzeichnis, die `index.html` genannt wird.
3. Fügen Sie der Seite {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente hinzu und lassen Sie sie die Standard-Browsersteuerungen anzeigen.
4. Geben Sie beiden {{HTMLElement("source")}}-Elemente, sodass die Browser das bevorzugte Audioformat finden und laden. Diese sollten [`type`](/de/docs/Web/HTML/Element/source#type)-Attribute enthalten.
5. Geben Sie dem `<video>`-Element ein Poster, das angezeigt wird, bevor das Video gestartet wird. Gestalten Sie Ihr eigenes Posterbild.

Zum Bonus könnten Sie versuchen, Textspuren zu recherchieren und herauszufinden, wie Sie Ihrem Video einige Untertitel hinzufügen können.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Multimedia und Einbettung](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio/Test_your_skills:_Multimedia_and_embedding).

## Zusammenfassung

Und das war's — wir hoffen, Sie hatten Spaß daran, mit Video und Audio auf Webseiten zu experimentieren! Als nächstes werden wir Sie mit einer Herausforderung konfrontieren, um Ihre Fähigkeiten mit HTML-Medien zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}
