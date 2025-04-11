---
title: HTML video und audio
short-title: Video und Audio
slug: Learn_web_development/Core/Structuring_content/HTML_video_and_audio
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}

Jetzt, da wir uns mit dem Hinzufügen einfacher Bilder zu einer Webseite wohlfühlen, ist der nächste Schritt, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel werden wir uns genau damit beschäftigen, und zwar mit den {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen; anschließend werden wir uns damit befassen, wie Sie Ihren Videos Untertitel hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Semantik auf Textebene, wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > sowie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegende <code>&lt;video&gt;</code> und <code>&lt;audio&gt;</code>-Tag-Syntax</li>
          <li>Video- und audiobezogene Attribute wie controls und muted.</li>
          <li>Verwendung von <code>&lt;source&gt;</code>-Elementen, um verschiedene Video- oder Audioquellen bereitzustellen.</li>
          <li>Die Grundlagen der Verwendung von Textspuren wie Untertiteln.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Video und Audio im Web

Der erste Zufluss von Online-Videos und -Audios wurde durch proprietäre, plugin-basierte Technologien wie [Flash](https://en.wikipedia.org/wiki/Adobe_Flash) und [Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight) ermöglicht. Beide Technologien hatten Sicherheits- und Zugänglichkeitsprobleme und sind jetzt veraltet, zugunsten der nativen HTML-Lösungen {{htmlelement("video")}} und {{htmlelement("audio")}}-Elemente und der Verfügbarkeit von {{Glossary("JavaScript", "JavaScript")}} {{Glossary("API", "APIs")}} zu deren Steuerung. Wir werden hier nicht auf JavaScript eingehen - nur die Grundlagen, die mit HTML erreicht werden können.

Wir werden Ihnen nicht beibringen, wie Sie Audio- und Videodateien erstellen – das erfordert ein völlig anderes Skillset. Wir haben Ihnen [Beispiel-Audio- und -Videodateien und Beispielcode](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) zur Verfügung gestellt, damit Sie selbst experimentieren können, falls Sie nicht in der Lage sind, eigene Dateien zu bekommen.

> [!NOTE]
> Bevor Sie hier beginnen, sollten Sie wissen, dass es eine ganze Reihe von OVPs (Online-Video-Anbietern) gibt, wie [YouTube](https://www.youtube.com/), [Dailymotion](https://www.dailymotion.com/) und [Vimeo](https://vimeo.com/), sowie Online-Audio-Anbieter wie [Soundcloud](https://soundcloud.com/). Solche Unternehmen bieten eine bequeme und einfache Möglichkeit, Videos bereitzustellen und zu konsumieren, sodass Sie sich nicht mit dem enormen Bandbreitenverbrauch auseinandersetzen müssen. OVPs bieten in der Regel auch fertigen Code an, um Video/Audio in Ihre Webseiten einzubetten; wenn Sie diesen Weg einschlagen, können Sie einige der Schwierigkeiten vermeiden, die wir in diesem Artikel besprechen. Wir werden diesen Dienst im nächsten Artikel etwas genauer besprechen.

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

- [`src`](/de/docs/Web/HTML/Reference/Elements/video#src)
  - : Genauso wie für das {{htmlelement("img")}}-Element enthält das `src`- (Source-) Attribut einen Pfad zu dem Video, das Sie einbetten möchten. Es funktioniert genau auf die gleiche Weise.
- [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls)
  - : Benutzer müssen in der Lage sein, die Wiedergabe von Videos und Audios zu steuern (es ist besonders kritisch für Menschen mit [Epilepsie](https://en.wikipedia.org/wiki/Epilepsy#Epidemiology)). Sie müssen entweder das `controls`-Attribut verwenden, um die eigene Steueroberfläche des Browsers einzuschließen, oder Ihre eigene Oberfläche unter Verwendung der entsprechenden [JavaScript-API](/de/docs/Web/API/HTMLMediaElement) erstellen. Die Oberfläche muss mindestens eine Möglichkeit bieten, das Medium zu starten und zu stoppen sowie die Lautstärke anzupassen.
- Der Absatz innerhalb der `<video>`-Tags
  - : Dies wird als **Fallback-Inhalt** bezeichnet – er wird angezeigt, falls der Browser, der auf die Seite zugreift, das `<video>`-Element nicht unterstützt, sodass wir eine Rückfalllösung für ältere Browser bereitstellen können. Dies kann alles sein, was Sie möchten; in diesem Fall haben wir einen direkten Link zur Videodatei bereitgestellt, sodass der Benutzer zumindest auf irgendeine Weise darauf zugreifen kann, unabhängig davon, welchen Browser er verwendet.

Das eingebettete Video wird in etwa so aussehen:

![Ein einfacher Videoplayer, der ein Video eines kleinen weißen Kaninchens zeigt](simple-video.png)

Sie können [das Beispiel live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/simple-video.html).)

## Verwendung mehrerer Quellenformate zur Verbesserung der Kompatibilität

Es gibt ein Problem mit dem obigen Beispiel. Es ist möglich, dass das Video für Sie nicht abgespielt wird, da verschiedene Browser unterschiedliche Video- (und Audio-) Formate unterstützen. Glücklicherweise gibt es Möglichkeiten, dies zu verhindern.

### Inhalte einer Mediendatei

Zuerst gehen wir die Terminologie schnell durch. Formate wie OGG, WAV, MP4 und WebM werden als **[Containerformate](/de/docs/Web/Media/Guides/Formats/Containers)** bezeichnet. Sie definieren eine Struktur, in der die Audio- und/oder Videospuren, aus denen das Medium besteht, zusammen mit Metadaten gespeichert werden, die das Medium beschreiben, welche Codecs zur Codierung der Kanäle verwendet werden, und so weiter.

Eine WebM-Datei, die einen Film enthält, der eine Hauptvideospur und eine alternative Blickwinkelspur sowie Audio für Englisch und Spanisch enthält, zusätzlich zu Audio für eine englische Kommentarspur, kann wie im Diagramm unten konzeptualisiert werden. Ebenfalls enthalten sind Textspuren mit geschlossenen Untertiteln für den Spielfilm, spanischen Untertiteln für den Film und englischen Untertiteln für den Kommentar.

![Diagramm, das die Inhalte einer Mediendatei auf Track-Ebene konzeptualisiert.](containersandtracks.png)

Die Audio- und Videospuren innerhalb des Containers enthalten Daten im entsprechenden Format für den zur Codierung dieses Mediums verwendeten Codec. Verschiedene Formate werden für Audiospuren im Gegensatz zu Videospuren verwendet. Jede Audiospur wird mit einem [Audio-Codec](/de/docs/Web/Media/Guides/Formats/Audio_codecs) codiert, während Videospuren mit (wie Sie wahrscheinlich erwartet haben) [einem Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) codiert werden. Wie bereits erwähnt, unterstützen verschiedene Browser unterschiedliche Video- und Audio-Formate und unterschiedliche Containerformate (wie OGG, MP4 und WebM, die wiederum verschiedene Arten von Video und Audio enthalten können).

Zum Beispiel:

- Ein WebM-Container verpackt typischerweise Vorbis- oder Opus-Audio mit VP8/VP9-Video. Dies wird in allen modernen Browsern unterstützt, auch wenn ältere Versionen möglicherweise nicht funktionieren.
- Ein MP4-Container verpackt oft AAC- oder MP3-Audio mit H.264-Video. Dies wird ebenfalls in allen modernen Browsern unterstützt.
- Der Ogg-Container tendiert dazu, Vorbis-Audio und Theora-Video zu verwenden. Dies wird am besten in Firefox und Chrome unterstützt, wurde aber im Grunde vom qualitativ besseren WebM-Format abgelöst.

Es gibt einige Sonderfälle. Zum Beispiel wird für einige Arten von Audio die Codec-Daten oft ohne Container oder mit einem vereinfachten Container gespeichert. Ein solches Beispiel ist der FLAC-Codec, der am häufigsten in FLAC-Dateien gespeichert wird, die einfach rohe FLAC-Tracks sind.

Ein weiteres Beispiel ist die allseits beliebte "MP3-Datei". Eine "MP3-Datei" ist eine Audiodatei, die mit MPEG-1-Audio-Layer-III-Kompression codiert wurde. Während sie Metadaten enthalten kann, ist sie nicht in einem separaten MPEG- oder MPEG-2-Container gekapselt. Ihre weit verbreitete Unterstützung im {{htmlelement("audio")}}- und {{htmlelement("video")}}-Element zeugt von ihrer anhaltenden Beliebtheit.

Ein Audioplayer wird dazu tendieren, eine Audiospur direkt abzuspielen, z. B. eine MP3- oder Ogg-Datei. Diese benötigen keine Container.

### Mediendatei-Unterstützung in Browsern

> [!NOTE]
> Mehrere beliebte Formate, wie MP3 und MP4/H.264, sind ausgezeichnet, aber durch Patente belastet; das heißt, es gibt Patente, die einige oder alle der Technologien abdecken, auf denen sie basieren. In den Vereinigten Staaten wurden MP3-Patente bis 2017 abgedeckt, und H.264 ist durch Patente mindestens bis 2027 belastet.
>
> Aufgrund dieser Patente müssen Browser, die die Unterstützung dieser Codecs implementieren möchten, in der Regel enorme Lizenzgebühren zahlen. Darüber hinaus bevorzugen einige Personen die Verwendung offener Formate und vermeiden eingeschränkte Software. Aufgrund dieser rechtlichen und präferentiellen Gründe stehen Webentwickler vor der Herausforderung, mehrere Formate zu unterstützen, um ihr gesamtes Publikum zu erreichen.

Die im vorherigen Abschnitt beschriebenen Codecs existieren, um Video und Audio in handhabbare Dateien zu komprimieren, da rohes Audio und Video beide außerordentlich groß sind. Jeder Webbrowser unterstützt eine Auswahl an **{{Glossary("Codec", "Codecs")}}**, wie Vorbis oder H.264, die verwendet werden, um das komprimierte Audio und Video in Binärdaten zu konvertieren und zurück. Jeder Codec bietet seine eigenen Vorteile und Nachteile, und jeder Container kann auch seine eigenen positiven und negativen Merkmale bieten, die Ihre Entscheidungen darüber beeinflussen, welchen Sie verwenden.

Die Dinge werden etwas komplizierter, da nicht nur jeder Browser ein anderes Set von Containerdateiformaten unterstützt, sondern auch eine unterschiedliche Auswahl an Codecs. Um die Wahrscheinlichkeit zu maximieren, dass Ihre Webseite oder App auf dem Browser eines Benutzers funktioniert, müssen Sie möglicherweise jede Mediendatei, die Sie verwenden, in mehreren Formaten bereitstellen. Wenn Ihre Seite und der Browser des Nutzers kein gemeinsames Medienformat haben, wird Ihr Medium nicht abgespielt.

Aufgrund der Komplexität, sicherzustellen, dass die Medien Ihrer App in jeder Kombination von Browsern, Plattformen und Geräten, die Sie erreichen möchten, angezeigt werden können, kann die Auswahl der besten Kombination von Codecs und Container eine komplizierte Aufgabe sein. Siehe [Wahl des richtigen Containers](/de/docs/Web/Media/Guides/Formats/Containers#choosing_the_right_container) für Hilfe bei der Auswahl des für Ihre Bedürfnisse am besten geeigneten Containerdateiformats; ebenso siehe [Wahl eines Video-Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec) und [Wahl eines Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs#choosing_an_audio_codec) für Hilfe bei der Auswahl der ersten Medien-Codecs für Ihre Inhalte und Ihr Zielpublikum.

Eine zusätzliche Sache, die Sie beachten sollten: Mobile Browser können zusätzliche Formate unterstützen, die von ihren Desktop-Gegenstücken nicht unterstützt werden, genau wie sie möglicherweise nicht alle Formate unterstützen, die die Desktop-Version tut. Darüber hinaus _könnten_ sowohl Desktop- als auch Mobile-Browser so konzipiert sein, dass sie die Medienwiedergabe entweder für alle Medien oder nur für bestimmte Typen, die sie intern nicht verarbeiten können, auslagern. Dies bedeutet, dass die Medienunterstützung teilweise davon abhängt, welche Software der Benutzer installiert hat.

Wie machen wir das also? Werfen Sie einen Blick auf das folgende [aktualisierte Beispiel](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) ([hier live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html), auch):

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

Hier haben wir das `src`-Attribut aus dem eigentlichen {{HTMLElement("video")}}-Tag entfernt und stattdessen separate {{htmlelement("source")}}-Elemente hinzugefügt, die auf ihre eigenen Quellen verweisen. In diesem Fall wird der Browser die {{HTMLElement("source")}}-Elemente durchgehen und das erste abspielen, das mit dem Codec unterstützt wird. WebM- und MP4-Quellen einzuschließen sollte heutzutage ausreichen, um Ihr Video auf den meisten Plattformen und Browsern abzuspielen.

Jedes `<source>`-Element hat auch ein [`type`](/de/docs/Web/HTML/Reference/Elements/source#type) Attribut. Dies ist optional, aber es wird empfohlen, es einzuschließen. Das `type` Attribut enthält den {{Glossary("MIME_type", "MIME-Typ")}} der Datei, die durch das `<source>` angegeben wird, und Browser können das `type` verwenden, um Videos, die sie nicht verstehen, sofort zu überspringen. Wenn `type` nicht enthalten ist, werden Browser jede Datei laden und versuchen abzuspielen, bis sie eine finden, die funktioniert, was offensichtlich Zeit kostet und eine unnötige Verwendung von Ressourcen ist.

Lesen Sie unseren [Leitfaden zu Medientypen und Formaten](/de/docs/Web/Media/Guides/Formats) für Hilfe bei der Auswahl der besten Container und Codecs für Ihre Bedürfnisse sowie zum Nachschlagen der richtigen MIME-Typen, die für jeden angegeben werden sollen.

## Weitere `<video>`-Funktionen

Es gibt eine Reihe weiterer Funktionen, die Sie beim Anzeigen eines HTML-Videos einbeziehen können. Werfen Sie einen Blick auf unser nächstes Beispiel:

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

![Ein Videoplayer, der ein Posterbild zeigt, bevor er abgespielt wird. Das Posterbild sagt HTML-Video-Beispiel, OMG Hölle ja!](poster_screenshot_updated.png)

Funktionen umfassen:

- [`width`](/de/docs/Web/HTML/Reference/Elements/video#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/video#height)
  - : Sie können die Videogröße entweder mit diesen Attributen oder mit {{Glossary("CSS", "CSS")}} steuern. In beiden Fällen behalten Videos ihr natives Breiten-Höhe-Verhältnis bei, das als **Seitenverhältnis** bekannt ist. Wird das Seitenverhältnis nicht von den von Ihnen festgelegten Größen eingehalten, wächst das Video, um den Raum horizontal zu füllen, und der nicht ausgefüllte Raum wird standardmäßig einfach mit einer soliden Hintergrundfarbe versehen.
- [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay)
  - : Lässt das Audio oder Video sofort abspielen, während der Rest der Seite geladen wird. Es wird empfohlen, keine automatisch abspielenden Videos (oder Audios) auf Ihren Seiten zu verwenden, da Benutzer dies sehr störend finden können.
- [`loop`](/de/docs/Web/HTML/Reference/Elements/video#loop)
  - : Lässt das Video (oder Audio) immer wieder von vorne beginnen, wenn es fertig ist. Dies kann ebenfalls störend sein, daher verwenden Sie es nur, wenn es wirklich notwendig ist.
- [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted)
  - : Lässt das Medium standardmäßig mit ausgeschaltetem Ton abspielen.
- [`poster`](/de/docs/Web/HTML/Reference/Elements/video#poster)
  - : Die URL eines Bildes, das angezeigt wird, bevor das Video abgespielt wird. Es ist dazu gedacht, als Begrüßungsbildschirm oder Werbungsbildschirm verwendet zu werden.
- [`preload`](/de/docs/Web/HTML/Reference/Elements/video#preload)

  - : Wird zum Puffern großer Dateien verwendet; es kann einen von drei Werten annehmen:

    - `"none"` puffert die Datei nicht
    - `"auto"` puffert die Mediendatei
    - `"metadata"` puffert nur die Metadaten der Datei

Sie können das obige Beispiel [live auf GitHub abspielen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html).) Beachten Sie, dass wir das `autoplay`-Attribut in der Live-Version nicht aufgenommen haben – wenn das Video sofort abgespielt wird, sobald die Seite geladen wird, können Sie das Poster nicht sehen!

## Das `<audio>`-Element

Das {{htmlelement("audio")}}-Element funktioniert genauso wie das {{htmlelement("video")}}-Element, mit einigen kleinen Unterschieden, die unten erläutert werden. Ein typisches Beispiel könnte so aussehen:

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

Dies führt zu etwas, das im Browser so aussieht:

![Ein einfacher Audioplayer mit einem Abspielknopf, einem Timer, einer Lautstärkeregelung und einer Fortschrittsanzeige](audio-player.png)

> [!NOTE]
> Sie können [die Audio-Demo live ausführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) auf GitHub (siehe auch den [Audio-Player-Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html).)

Dies benötigt weniger Platz als ein Videoplayer, da es keine visuelle Komponente gibt – Sie müssen nur Steuerelemente zum Abspielen des Audios anzeigen. Andere Unterschiede zu HTML-Video sind wie folgt:

- Das {{htmlelement("audio")}}-Element unterstützt die `width`/`height`-Attribute nicht – erneut gibt es keine visuelle Komponente, sodass es nichts gibt, dem eine Breite oder Höhe zugeordnet werden könnte.
- Es unterstützt auch nicht das `poster`-Attribut – wieder gibt es keine visuelle Komponente.

Abgesehen davon unterstützt `<audio>` alle dieselben Funktionen wie `<video>` – überprüfen Sie die obigen Abschnitte für weitere Informationen darüber.

## Anzeige von Videotextspuren

Nun besprechen wir ein etwas fortgeschritteneres Konzept, das wirklich nützlich zu wissen ist. Viele Menschen können oder wollen den Audio/Video-Inhalt, den sie im Web finden, nicht hören, zumindest zu bestimmten Zeiten. Zum Beispiel:

- Viele Menschen haben Hörbehinderungen (z. B. schwerhörig oder taub) und können den Ton nicht klar hören, wenn überhaupt.
- Andere können den Ton nicht hören, weil sie sich in lauten Umgebungen befinden (wie eine überfüllte Bar, wenn ein Sportspiel gezeigt wird).
- Ebenso kann es in Umgebungen, in denen das Abspielen von Ton eine Ablenkung oder Störung darstellt (wie in einer Bibliothek oder wenn ein Partner versucht zu schlafen), sehr nützlich sein, Untertitel zu haben.
- Menschen, die die Sprache des Videos nicht sprechen, möchten möglicherweise ein schriftliches Transkript oder sogar eine Übersetzung, um das Medieninhalte zu verstehen.

Wäre es nicht schön, wenn Sie diesen Menschen ein Transkript der im Audio/Video gesprochenen Worte zur Verfügung stellen könnten? Dank HTML-Video können Sie das tun. Dazu verwenden wir das [WebVTT](/de/docs/Web/API/WebVTT_API)-Dateiformat und das {{htmlelement("track")}}-Element.

> [!NOTE]
> "Transkribieren" bedeutet, "gesprochene Worte als Text niederzuschreiben." Der resultierende Text ist ein "Transkript."

WebVTT ist ein Format zum Schreiben von Textdateien, die mehrere Zeichenfolgen mit Text enthalten, zusammen mit Metadaten wie der Zeit im Video, zu der jede Textzeichenfolge angezeigt werden soll, und sogar begrenzten Stil-/Positionierungsinformationen. Diese Textzeichenfolgen werden als **cues** bezeichnet, und es gibt mehrere Arten von cues, die für verschiedene Zwecke verwendet werden. Die häufigsten cues sind:

- Untertitel
  - : Übersetzungen fremdsprachiger Materialien für Menschen, die die im Audio gesprochenen Worte nicht verstehen.
- Untertitel
  - : Synchronisierte Transkriptionen von Dialogen oder Beschreibungen signifikanter Geräusche, damit Menschen, die das Audio nicht hören können, verstehen können, was los ist.
- Zeitgesteuerte Beschreibungen
  - : Text, der vom Mediaplayer gesprochen werden sollte, um wichtige visuelle Inhalte für blinde oder anderweitig sehbehinderte Benutzer zu beschreiben.

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

1. Es als `.vtt`-Datei speichern, die vom Server bereitgestellt werden kann (siehe unten), z. B. im selben Verzeichnis wie die HTML-Datei.
2. Verlinken Sie die `.vtt`-Datei mit dem {{htmlelement("track")}}-Element. `<track>` sollte innerhalb von `<audio>` oder `<video>` platziert werden, aber nach allen `<source>`-Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind)-Attribut, um anzugeben, ob die cues `subtitles`, `captions` oder `descriptions` sind. Verwenden Sie außerdem [`srclang`](/de/docs/Web/HTML/Reference/Elements/track#srclang), um dem Browser mitzuteilen, in welcher Sprache die Untertitel geschrieben sind. Fügen Sie schließlich [`label`](/de/docs/Web/HTML/Reference/Elements/track#label) hinzu, um den Lesern zu helfen, die Sprache zu identifizieren, die sie suchen.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

Um dies auszuprobieren, müssen Sie die Dateien auf einem [lokalen HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) hosten. Im Browser-Ausgabe sehen Sie ein Video, das Untertitel anzeigt, ähnlich wie hier:

![Videoplayer mit Standardsteuerungen wie Abspielen, Stoppen, Lautstärke und Untertitel ein- und ausschalten. Das abgespielte Video zeigt eine Szene, in der ein Mann eine speerartige Waffe hält, und ein Untertitel liest "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für weitere Informationen, einschließlich Informationen zum Hinzufügen von Labels, lesen Sie bitte [Untertitel und Übersetzungen zu HTML-Video hinzufügen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können [das Beispiel finden](https://iandevlin.github.io/mdn/video-player-with-captions/), das zu diesem Artikel auf GitHub gehört, geschrieben von Ian Devlin (siehe auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions)). Dieses Beispiel verwendet etwas JavaScript, um Benutzern zu ermöglichen, zwischen verschiedenen Untertiteln zu wählen. Beachten Sie, dass Sie die Untertitel aktivieren müssen, indem Sie auf die "CC"-Schaltfläche klicken und eine Option auswählen – Englisch, Deutsch oder Spanisch.

> [!NOTE]
> Textspuren helfen Ihnen auch bei der {{Glossary("SEO", "SEO")}}, da Suchmaschinen besonders auf Text basieren. Textspuren ermöglichen es Suchmaschinen sogar, direkt auf eine Stelle mitten im Video zu verlinken.

## Aktives Lernen: Einbetten Ihrer eigenen Audios und Videos

Für dieses aktive Lernen würden wir (idealerweise) gerne, dass Sie hinaus in die Welt gehen und einige Ihrer eigenen Videos und Audios aufnehmen – die meisten Telefone ermöglichen es heutzutage, Audio und Video sehr einfach aufzunehmen, und vorausgesetzt, Sie können es auf Ihren Computer übertragen, können Sie es verwenden. Möglicherweise müssen Sie einige Konvertierungen vornehmen, um im Falle von Videos mit einem WebM und MP4 zu enden, und im Falle von Audios mit einem MP3 und Ogg, aber es gibt genug Programme da draußen, die es Ihnen ohne zu viele Probleme ermöglichen, dies zu tun, wie [Miro Video Converter](http://www.mirovideoconverter.com/) und [Audacity](https://sourceforge.net/projects/audacity/). Wir würden gerne sehen, dass Sie es versuchen!

Sollten Sie keine Videos oder Audios beschaffen können, können Sie unsere [Beispiel-Audio- und -Videodateien](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) verwenden, um diese Übung durchzuführen. Sie können auch unseren Beispielcode zu Referenzzwecken verwenden.

Wir möchten, dass Sie:

1. Ihre Audio- und Videodateien in einem neuen Verzeichnis auf Ihrem Computer speichern.
2. Eine neue HTML-Datei im selben Verzeichnis erstellen, die `index.html` genannt wird.
3. {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente auf der Seite hinzufügen; sorgen Sie dafür, dass sie die Standardbrowser-Steuerelemente anzeigen.
4. Geben Sie beiden {{HTMLElement("source")}}-Elemente, damit Browser das Audioformat finden, das sie am besten unterstützen und laden können. Diese sollten [`type`](/de/docs/Web/HTML/Reference/Elements/source#type)-Attribute enthalten.
5. Geben Sie dem `<video>`-Element ein Poster, das angezeigt wird, bevor das Video abgespielt wird. Haben Sie Spaß beim Erstellen Ihrer eigenen Poster-Grafik.

Als zusätzlichen Bonus könnten Sie versuchen, Textspuren zu recherchieren und herauszufinden, wie Sie Ihrem Video einige Untertitel hinzufügen können.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Multimedia und Einbettung](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio/Test_your_skills:_Multimedia_and_embedding).

## Zusammenfassung

Und das ist ein Wrap – wir hoffen, Sie hatten Spaß beim Experimentieren mit Video und Audio auf Webseiten! Als nächstes präsentieren wir Ihnen eine Herausforderung, um Ihre Fähigkeiten mit HTML-Medien zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}
