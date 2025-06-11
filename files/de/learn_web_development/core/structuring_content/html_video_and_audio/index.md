---
title: HTML Video und Audio
short-title: Video und Audio
slug: Learn_web_development/Core/Structuring_content/HTML_video_and_audio
l10n:
  sourceCommit: 44a9599ddab2ad473efdd59060973ebf85e0034c
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}

Da wir jetzt mit dem Hinzufügen einfacher Bilder zu einer Webseite vertraut sind, ist der nächste Schritt, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel werden wir uns genau damit befassen, indem wir die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente verwenden; abschließend schauen wir uns an, wie Sie Untertitel zu Ihren Videos hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in der
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegenden HTML-Syntax</a
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
          <li>Grundlegende Syntax der Tags <code>&lt;video&gt;</code> und <code>&lt;audio&gt;</code></li>
          <li>Video- und audiospezifische Attribute wie controls und muted.</li>
          <li>Verwendung von <code>&lt;source&gt;</code>-Elementen, um verschiedene Video- oder Audioquellen bereitzustellen.</li>
          <li>Grundlagen der Verwendung von Textspuren wie Untertitel und Beschreibungen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Video und Audio im Web

Die ersten Online-Videos und Audios wurden durch proprietäre, plugin-basierte Technologien, wie [Flash](https://en.wikipedia.org/wiki/Adobe_Flash) und [Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight) ermöglicht. Beide hatten Sicherheits- und Zugänglichkeitsprobleme und sind inzwischen veraltet, zugunsten nativer HTML-Lösungen mit {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen und der Verfügbarkeit von {{Glossary("JavaScript", "JavaScript")}}-{{Glossary("API", "APIs")}}, um sie zu steuern. Wir werden uns hier nicht mit JavaScript befassen — nur mit den grundlegenden Grundlagen, die mit HTML erreicht werden können.

Wir werden Ihnen nicht beibringen, wie Sie Audio- und Videodateien erstellen — das erfordert ein völlig anderes Kompetenzset. Wir haben Ihnen [Beispiel-Audio- und Videodateien sowie Beispielcode](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) zur eigenen Erprobung bereitgestellt, falls Sie Ihre eigenen nicht beschaffen können.

> [!NOTE]
> Bevor Sie hier beginnen, sollten Sie auch wissen, dass es eine ganze Reihe von OVPs (Online-Video-Anbietern) wie [YouTube](https://www.youtube.com/), [Dailymotion](https://www.dailymotion.com/) und [Vimeo](https://vimeo.com/) sowie Online-Audio-Anbieter wie [Soundcloud](https://soundcloud.com/) gibt. Solche Unternehmen bieten eine bequeme und einfache Möglichkeit, Videos zu hosten und abzurufen, sodass Sie sich nicht um den enormen Bandbreitenverbrauch kümmern müssen. OVPs bieten in der Regel auch vorgefertigten Code zum Einbetten von Video/Audio in Ihre Webseiten; wenn Sie diesen Ansatz nutzen, können Sie einige der in diesem Artikel besprochenen Schwierigkeiten vermeiden. Wir werden diese Art von Dienst im nächsten Artikel etwas genauer besprechen.

## Das `<video>`-Element

Das {{htmlelement("video")}}-Element ermöglicht es Ihnen, ein Video sehr einfach einzubetten. Ein wirklich einfaches Beispiel sieht folgendermaßen aus:

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
  - : In derselben Weise wie beim {{htmlelement("img")}}-Element enthält das `src` (Quelle)-Attribut einen Pfad zu dem Video, das Sie einbetten möchten. Es funktioniert genau gleich.
- [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls)
  - : Benutzer müssen in der Lage sein, die Wiedergabe von Video und Audio zu steuern (es ist besonders kritisch für Personen mit [Epilepsie](https://en.wikipedia.org/wiki/Epilepsy#Epidemiology)). Sie müssen entweder das `controls`-Attribut verwenden, um die eigene Steueroberfläche des Browsers einzuschließen, oder Ihre Schnittstelle mit der entsprechenden [JavaScript-API](/de/docs/Web/API/HTMLMediaElement) erstellen. Mindestens muss die Schnittstelle eine Möglichkeit enthalten, das Medium zu starten und zu stoppen und die Lautstärke anzupassen.
- Der Absatz innerhalb der `<video>`-Tags
  - : Dies wird als **Fallback-Inhalt** bezeichnet — dies wird angezeigt, wenn der Browser, der auf die Seite zugreift, das `<video>`-Element nicht unterstützt, sodass wir einen Fallback für ältere Browser bereitstellen können. Dies kann alles sein, was Sie möchten; in diesem Fall haben wir einen direkten Link zur Videodatei bereitgestellt, damit der Benutzer sie zumindest auf irgendeine Weise unabhängig vom verwendeten Browser aufrufen kann.

Das eingebettete Video wird in etwa so aussehen:

![Ein einfacher Videoplayer, der ein Video eines kleinen weißen Kaninchens zeigt](simple-video.png)

Sie können [das Beispiel live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/simple-video.html).)

## Verwendung mehrerer Quellformate zur Verbesserung der Kompatibilität

Es gibt ein Problem mit dem obigen Beispiel. Es ist möglich, dass das Video bei Ihnen nicht abgespielt wird, da verschiedene Browser unterschiedliche Video- (und Audio-) Formate unterstützen. Glücklicherweise gibt es Maßnahmen, die Sie ergreifen können, um dies zu verhindern.

### Inhalt einer Mediendatei

Zuerst wollen wir schnell die Terminologie durchgehen. Formate wie OGG, WAV, MP4 und WebM werden als **[Containerformate](/de/docs/Web/Media/Guides/Formats/Containers)** bezeichnet. Sie definieren eine Struktur, in der die Audio- und/oder Videospuren, die das Medium ausmachen, gespeichert werden, zusammen mit Metadaten, die das Medium beschreiben, welche Codecs verwendet werden, um ihre Kanäle zu kodieren, und so weiter.

Eine WebM-Datei, die einen Film enthält, der eine Hauptvideospur und eine alternative Bildwinkel-Spur sowie Audio auf Englisch und Spanisch in Ergänzung zu einer englischen Kommentarspur hat, kann wie im folgenden Diagramm dargestellt konzeptioniert werden. Ebenfalls enthalten sind Textspuren mit geschlossenen Untertiteln für den Spielfilm, spanischen Untertiteln für den Film und englischen Untertiteln für den Kommentar.

![Diagramm, das den Inhalt einer Mediendatei auf der Spur-Ebene konzeptioniert.](containersandtracks.png)

Die Audio- und Videospuren innerhalb des Containers enthalten Daten im geeigneten Format für den Codec, der zur Kodierung dieses Mediums verwendet wird. Unterschiedliche Formate werden für Audiospuren im Vergleich zu Videospuren verwendet. Jede Audiospur wird mit einem [Audio-Codec](/de/docs/Web/Media/Guides/Formats/Audio_codecs) kodiert, während Videospuren, wie Sie vermutlich schon erraten haben, mit einem [Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) kodiert werden. Wie wir bereits besprochen haben, unterstützen verschiedene Browser unterschiedliche Video- und Audioformate sowie unterschiedliche Containerformate (wie OGG, MP4 und WebM, die wiederum verschiedene Arten von Video und Audio enthalten können).

Zum Beispiel:

- Ein WebM-Container verpackt typischerweise Vorbis- oder Opus-Audio mit VP8/VP9-Video. Dies wird in allen modernen Browsern unterstützt, jedoch funktionieren ältere Versionen möglicherweise nicht.
- Ein MP4-Container verpackt oft AAC- oder MP3-Audio mit H.264-Video. Dies wird ebenfalls in allen modernen Browsern unterstützt.
- Der Ogg-Container tendiert dazu, Vorbis-Audio und Theora-Video zu verwenden. Dies wird am besten in Firefox und Chrome unterstützt, aber im Grunde wurde es durch das qualitativ bessere WebM-Format abgelöst.

Es gibt einige Spezialfälle. Zum Beispiel wird bei einigen Arten von Audio die Codec-Daten oft ohne Container oder mit einem vereinfachten Container gespeichert. Ein solcher Fall ist der FLAC-Codec, der meist in FLAC-Dateien enthalten ist, die einfach rohe FLAC-Spuren sind.

Ein weiteres Beispiel ist die allseits bekannte "MP3-Datei". Eine "MP3-Datei" ist eine Audiodatei, die mit der MPEG-1 Audio Layer III-Komprimierung kodiert ist. Obwohl sie Metadaten enthalten kann, ist sie nicht innerhalb eines separaten MPEG- oder MPEG-2-Containers gekapselt. Ihre weit verbreitete Unterstützung in den {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elementen ist weitgehend ein Beweis für ihre beständige Beliebtheit.

Ein Audio-Player wird normalerweise eine Audiospur direkt abspielen, z. B. eine MP3- oder Ogg-Datei. Diese benötigen keine Container.

### Unterstützung von Mediendateien in Browsern

> [!NOTE]
> Mehrere populäre Formate, wie MP3 und MP4/H.264, sind ausgezeichnet, sind aber durch Patente belastet; das heißt, es gibt Patente, die einige oder alle der Technologie abdecken, auf der sie basieren. In den Vereinigten Staaten deckten Patente MP3 bis 2017 ab, und H.264 ist durch Patente mindestens bis 2027 belastet.
>
> Aufgrund dieser Patente müssen Browser, die diese Codecs unterstützen wollen, in der Regel enorme Lizenzgebühren zahlen. Darüber hinaus ziehen es manche Menschen vor, auf eingeschränkte Software zu verzichten und nur offene Formate zu verwenden. Aus diesen rechtlichen und Vorzugsgründen sehen sich Webentwickler gezwungen, mehrere Formate zu unterstützen, um ein Videoerlebnis für ihr gesamtes Publikum bereitzustellen.

Die in dem vorherigen Abschnitt beschriebenen Codecs existieren, um Audio und Video in handhabbare Dateien zu komprimieren, da rohe Audiodaten und Videodaten beide äußerst groß sind. Jeder Webbrowser unterstützt eine Auswahl an **{{Glossary("Codec", "Codecs")}}**, wie Vorbis oder H.264, die verwendet werden, um die komprimierten Audio- und Videodaten in Binärdaten umzuwandeln und zurück. Jeder Codec bietet seine eigenen Vor- und Nachteile, und jeder Container hat möglicherweise ebenfalls seine eigenen positiven und negativen Merkmale, die Ihre Entscheidungen darüber beeinflussen, welche zu verwenden sind.

Die Dinge werden etwas komplizierter, da nicht nur jeder Browser ein anderes Set von Containerdateiformaten unterstützt, sondern auch eine andere Auswahl an Codecs. Um die Wahrscheinlichkeit zu maximieren, dass Ihre Website oder App auf dem Browser eines Benutzers funktioniert, müssen Sie möglicherweise jede von Ihnen verwendete Mediendatei in mehreren Formaten bereitstellen. Wenn Ihre Website und der Browser des Benutzers kein gemeinsames Medienformat haben, wird Ihr Medium nicht abgespielt.

Aufgrund der Komplexität, sicherzustellen, dass die Medien Ihrer App auf jeder Kombination von Browsern, Plattformen und Geräten, die Sie ansprechen möchten, anzeigbar sind, kann die Auswahl der besten Kombination von Codecs und Container eine komplizierte Aufgabe sein. Sehen Sie sich [Die richtige Containerwahl](/de/docs/Web/Media/Guides/Formats/Containers#choosing_the_right_container) an, um Hilfe bei der Auswahl des am besten geeigneten Containerdateiformats für Ihre Bedürfnisse zu erhalten; ähnlich dazu, sehen Sie sich [Eine Videocodec-Auswahl treffen](/de/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec) und [Eine Audiocodec-Auswahl treffen](/de/docs/Web/Media/Guides/Formats/Audio_codecs#choosing_an_audio_codec) an, um Hilfe bei der Auswahl der ersten Mediencodecs für Ihre Inhalte und Ihr Zielpublikum zu erhalten.

Etwas, das zusätzlich zu beachten ist: Mobile Browser unterstützen möglicherweise zusätzliche Formate, die von ihren Desktop-Äquivalenten nicht unterstützt werden, genauso wie sie möglicherweise nicht alle Formate unterstützen, die die Desktop-Version unterstützt. Darüber hinaus _könnten_ sowohl Desktop- als auch mobile Browser so konzipiert sein, dass sie die Medienwiedergabe (entweder für alle Medien oder nur für bestimmte Typen, die sie nicht intern handhaben können) auslagern. Das bedeutet, dass Medienunterstützung teilweise davon abhängt, welche Software der Benutzer installiert hat.

Also, wie machen wir das? Sehen Sie sich das folgende [aktualisierte Beispiel](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) ([probieren Sie es live hier aus](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html), ebenfalls):

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

Hier haben wir das `src`-Attribut aus dem eigentlichen {{HTMLElement("video")}}-Tag herausgenommen und stattdessen separate {{htmlelement("source")}}-Elemente eingefügt, die auf ihre eigenen Quellen verweisen. In diesem Fall wird der Browser die {{HTMLElement("source")}}-Elemente durchgehen und das erste abspielen, das es mit dem Codec unterstützen kann. WebM- und MP4-Quellen einzuschließen sollte heutzutage ausreichen, um Ihr Video auf den meisten Plattformen und Browsern abzuspielen.

Jedes `<source>`-Element hat auch ein [`type`](/de/docs/Web/HTML/Reference/Elements/source#type)-Attribut. Dies ist optional, aber es wird empfohlen, es zu inkludieren. Das `type`-Attribut enthält den {{Glossary("MIME_type", "MIME-Typ")}} der Datei, die durch das `<source>` angegeben wird, und Browser können den `type` verwenden, um Videos, die sie nicht verstehen, sofort zu überspringen. Wenn `type` nicht enthalten ist, laden Browser jede Datei und versuchen, sie abzuspielen, bis sie eine finden, die funktioniert, was offensichtlich Zeit kostet und eine unnötige Ressourcennutzung darstellt.

Konsultieren Sie unseren [Leitfaden zu Medientypen und Formaten](/de/docs/Web/Media/Guides/Formats), um bei der Auswahl der besten Container und Codecs für Ihre Bedürfnisse zu helfen und um den richtigen MIME-Typ für jede anzugeben.

## Weitere `<video>`-Features

Es gibt eine Reihe von weiteren Funktionen, die Sie beim Anzeigen eines HTML-Videos einfügen können. Schauen Sie sich unser nächstes Beispiel an:

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

Das resultierende UI sieht in etwa so aus:

![Ein Videoplayer, der ein Posterbild zeigt, bevor es abgespielt wird. Das Posterbild sagt HTML video example, OMG hell yeah!](poster_screenshot_updated.png)

Merkmale beinhalten:

- [`width`](/de/docs/Web/HTML/Reference/Elements/video#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/video#height)
  - : Sie können die Videogröße entweder mit diesen Attributen oder mit {{Glossary("CSS", "CSS")}} steuern. In beiden Fällen behalten Videos ihr natives Breiten-Höhen-Verhältnis — bekannt als das **Seitenverhältnis**. Wenn das Seitenverhältnis nicht durch die von Ihnen gesetzten Größen beibehalten wird, wird das Video horizontal wachsen, um den Raum zu füllen, und der ungenutzte Raum wird standardmäßig einfach mit einer festen Hintergrundfarbe belegt.
- [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay)
  - : Startet die Wiedergabe von Audio- oder Videodateien sofort, während der Rest der Seite geladen wird. Es wird davon abgeraten, auf Ihren Seiten automatisch abspielende Videos (oder Audios) zu verwenden, da Benutzer sie wirklich als störend empfinden können.
- [`loop`](/de/docs/Web/HTML/Reference/Elements/video#loop)
  - : Lässt das Video (oder Audio) immer wieder abspielen, sobald es zu Ende ist. Dies kann ebenfalls störend sein, verwenden Sie es daher nur, wenn es wirklich notwendig ist.
- [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted)
  - : Lässt das Medium standardmäßig mit ausgeschaltetem Ton abspielen.
- [`poster`](/de/docs/Web/HTML/Reference/Elements/video#poster)
  - : Die URL eines Bildes, das angezeigt wird, bevor das Video abgespielt wird. Es ist dafür gedacht, als Startbildschirm oder Werbebildschirm verwendet zu werden.
- [`preload`](/de/docs/Web/HTML/Reference/Elements/video#preload)

  - : Wird verwendet, um große Dateien zu puffern; es kann drei Werte annehmen:

    - `"none"` puffert die Datei nicht
    - `"auto"` puffert die Mediendatei
    - `"metadata"` puffert nur die Metadaten der Datei

Das obige Beispiel finden Sie [auf GitHub live zu spielen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html)). Beachten Sie, dass wir das `autoplay`-Attribut in der Live-Version nicht inkludiert haben — wenn das Video sofort startet, wenn die Seite geladen wird, sehen Sie das Poster nicht!

## Das `<audio>`-Element

Das {{htmlelement("audio")}}-Element funktioniert genauso wie das {{htmlelement("video")}}-Element, mit einigen kleinen Unterschieden, wie unten beschrieben. Ein typisches Beispiel könnte folgendermaßen aussehen:

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

Dies erzeugt im Browser etwas wie das folgende:

![Ein einfacher Audioplayer mit einem Play-Button, Timer, Lautstärkeregler und Fortschrittsleiste](audio-player.png)

> [!NOTE]
> Sie können das [Audio-Demo live ausführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) auf GitHub (sehen Sie sich auch den [Audioplayer-Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) an.)

Dies nimmt weniger Platz ein als ein Videoplayer, da es keine visuelle Komponente gibt — Sie müssen nur Steuerelemente anzeigen, um das Audio abzuspielen. Andere Unterschiede zum HTML-Video sind wie folgt:

- Das {{htmlelement("audio")}}-Element unterstützt keine `width`/`height`-Attribute — erneut, es gibt keine visuelle Komponente, der eine Breite oder Höhe zugewiesen werden könnte.
- Es unterstützt auch nicht das `poster`-Attribut — erneut, keine visuelle Komponente.

Abgesehen davon unterstützt `<audio>` alle gleichen Funktionen wie `<video>` — überprüfen Sie die obigen Abschnitte für weitere Informationen über sie.

## Darstellung von Videotextspuren

Nun werden wir ein etwas fortgeschritteneres Konzept besprechen, das wirklich nützlich zu wissen ist. Viele Menschen können oder wollen die Audio/Video-Inhalte, die sie im Web finden, nicht hören, zumindest zu bestimmten Zeiten. Zum Beispiel:

- Viele Menschen haben auditive Beeinträchtigungen (wie Schwerhörigkeit oder Taubheit), sodass sie das Audio nicht klar hören können, wenn überhaupt.
- Andere können das Audio möglicherweise nicht hören, weil sie sich in lauten Umgebungen befinden (wie einer überfüllten Bar, wenn ein Sportspiel gezeigt wird).
- Ähnlich können in Umgebungen, in denen das Abspielen des Audios eine Ablenkung oder Störung wäre (wie in einer Bibliothek oder wenn ein Partner einschlafen möchte), Untertitel sehr nützlich sein.
- Menschen, die die Sprache des Videos nicht sprechen, möchten möglicherweise eine Textabschrift oder sogar eine Übersetzung, um das Medieninhalte zu verstehen.

Wäre es nicht schön, wenn Sie diesen Menschen ein Transkript der im Audio/Video gesprochenen Wörter bereitstellen könnten? Nun, dank HTML-Video können Sie das. Dazu verwenden wir das [WebVTT](/de/docs/Web/API/WebVTT_API)-Dateiformat und das {{htmlelement("track")}}-Element.

> [!NOTE]
> "Transkribieren" bedeutet "gesprochene Wörter als Text aufzuschreiben." Der resultierende Text ist ein "Transkript".

WebVTT ist ein Format, um Textdateien mit mehreren Textzeichenfolgen zusammen mit Metadaten zu schreiben, wie der Zeit im Video, zu der jede Textzeichenfolge angezeigt werden soll, und sogar eingeschränkten Styling-/Positionierungsinformationen. Diese Textzeichenfolgen werden als **Cues** bezeichnet, und es gibt mehrere Arten von Cues, die für unterschiedliche Zwecke verwendet werden. Die häufigsten Cues sind:

- Untertitel
  - : Übersetzungen fremdsprachiger Materialien für Menschen, die die im Audio gesprochenen Wörter nicht verstehen.
- Untertitel
  - : Synchronisierte Transkriptionen von Dialogen oder Beschreibungen signifikanter Geräusche, damit Menschen, die das Audio nicht hören können, verstehen, was vorgeht.
- Zeitliche Beschreibungen
  - : Text, der vom Mediaplayer gesprochen werden soll, um blinden oder anderen visuell eingeschränkten Nutzern wichtige visuelle Elemente zu beschreiben.

Ein typischer WebVTT-Datei sieht etwa so aus:

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

Um dies zusammen mit der HTML-Mediendarstellung anzuzeigen, müssen Sie:

1. Es als `.vtt`-Datei irgendwo speichern, wo der Server es bereitstellen kann (siehe unten), wie im gleichen Verzeichnis wie die HTML-Datei.
2. Mit dem {{htmlelement("track")}}-Element auf die `.vtt`-Datei verlinken. `<track>` sollte innerhalb von `<audio>` oder `<video>` platziert werden, jedoch nach allen `<source>`-Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind)-Attribut, um anzugeben, ob die Cues `subtitles`, `captions` oder `descriptions` sind. Verwenden Sie außerdem [`srclang`](/de/docs/Web/HTML/Reference/Elements/track#srclang), um dem Browser mitzuteilen, in welcher Sprache Sie die Untertitel geschrieben haben. Schließlich fügen Sie `[label](/de/docs/Web/HTML/Reference/Elements/track#label)` hinzu, um den Lesern bei der Identifizierung der von ihnen gesuchten Sprache zu helfen.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

Um dies auszuprobieren, müssen Sie die Dateien auf einem [lokalen HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) hosten. Im Browserausgabe sehen Sie ein Video mit angezeigten Untertiteln, etwa so:

![Videoplayer mit Standard-Steuerelementen wie Abspielen, Anhalten, Lautstärke und Untertiteln ein- und ausschalten. Das Video zeigt eine Szene eines Mannes, der eine Speer-ähnliche Waffe hält, und ein Untertitel lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für weitere Details, einschließlich wie man Labels hinzufügt, lesen Sie bitte [Hinzufügen von Untertiteln und Beschreibungen zu HTML-Videos](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können [das zu diesem Artikel gehörende Beispiel](https://iandevlin.github.io/mdn/video-player-with-captions/) auf GitHub finden, geschrieben von Ian Devlin (sehen Sie sich den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) ebenfalls an.) Dieses Beispiel verwendet etwas JavaScript, damit Benutzer zwischen verschiedenen Untertiteln wählen können. Beachten Sie, dass zur Aktivierung der Untertitel Sie den "CC"-Button drücken und eine Option auswählen müssen — Englisch, Deutsch oder Spanisch.

> [!NOTE]
> Textspuren helfen Ihnen auch bei {{Glossary("SEO", "SEO")}}, da Suchmaschinen besonders auf Text gedeihen. Textspuren ermöglichen es sogar Suchmaschinen, direkt auf einen Punkt in der Mitte des Videos zu verlinken.

## Einbettung eigener Audio- und Videoinhalte

Für diese Aufgabe sollten Sie doch hinaus in die Welt gehen und einige Ihrer eigenen Video- und Audioaufnahmen machen? Wenn Sie ein Telefon haben, verwenden Sie es, um Audio und Video aufzunehmen, übertragen Sie es auf Ihren Computer und probieren Sie es aus. Möglicherweise müssen Sie einige Konvertierungen durchführen, um eine WebM- und MP4-Datei im Fall von Video und eine MP3- und Ogg-Datei im Fall von Audio zu erhalten, aber es gibt genügend Programme und Tools, die es Ihnen ermöglichen, dies ohne zu große Schwierigkeiten zu tun, wie [CloudConvert](https://cloudconvert.com/mp4-converter) (online) und [Audacity](https://sourceforge.net/projects/audacity/) (Desktop-Anwendung). Wir möchten, dass Sie es versuchen!

> [!NOTE]
> Wenn Sie keine Video- oder Audioquellen finden können, können Sie gerne unsere [Beispiel-Audio- und Videodateien](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) verwenden, um diese Übung durchzuführen.

Wir möchten, dass Sie:

1. Speichern Sie Ihre Audio- und Videodateien in einem neuen Verzeichnis auf Ihrem Computer.
2. Erstellen Sie eine neue HTML-Datei im gleichen Verzeichnis namens `index.html`, basierend auf unserer [Erste-Schritte-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).
3. Fügen Sie der Seite {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente hinzu; lassen Sie diese die standardmäßigen Browser-Steuerelemente anzeigen.
4. Geben Sie beiden {{HTMLElement("source")}}-Elementen, sodass Browser das Audioformat finden, das sie am besten unterstützen, und laden. Diese sollten [`type`](/de/docs/Web/HTML/Reference/Elements/source#type)-Attribute enthalten.
5. Geben Sie beiden ein Fallback-`<p>`-Element innerhalb der Tags, das einen direkten Link zu den Medien für nicht unterstützte Browser bereitstellt.
6. Geben Sie dem `<video>`-Element ein Poster, das angezeigt wird, bevor das Video abgespielt wird. Haben Sie Spaß beim Erstellen Ihres eigenen Posterbildes.

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte etwa so aussehen:

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

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Multimedia und Einbettung](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Multimedia_and_embedding).

## Zusammenfassung

Und das war's — wir hoffen, Sie hatten Spaß daran, mit Video und Audio in Webseiten zu spielen! Als nächstes werden wir Ihnen eine Herausforderung präsentieren, um Ihre Fähigkeiten mit HTML-Medien zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}
