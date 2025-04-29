---
title: HTML video und audio
short-title: Video und Audio
slug: Learn_web_development/Core/Structuring_content/HTML_video_and_audio
l10n:
  sourceCommit: a1ac64fa4da965d2a152f08221b1a9aed638fd16
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}

Nachdem wir uns nun damit vertraut gemacht haben, einfache Bilder zu einer Webseite hinzuzufügen, ist der nächste Schritt, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel werden wir uns genau damit beschäftigen, indem wir die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente verwenden; am Ende werden wir uns dann damit befassen, wie Sie Ihren Videos Untertitel hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textlevel-Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Video- und audiospezifische Attribute wie controls und muted.</li>
          <li>Verwendung von <code>&lt;source&gt;</code>-Elementen, um verschiedene Video- oder Audioquellen bereitzustellen.</li>
          <li>Die Grundlagen der Verwendung von Textspuren wie Untertiteln.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Video und Audio im Web

Der erste Schub an Online-Videos und Audio wurde durch proprietäre plugin-basierte Technologien wie [Flash](https://en.wikipedia.org/wiki/Adobe_Flash) und [Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight) ermöglicht. Beide hatten Sicherheits- und Zugänglichkeitsprobleme und sind nun zugunsten nativer HTML-Lösungen wie der {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente sowie der Verfügbarkeit von {{Glossary("JavaScript", "JavaScript")}}-{{Glossary("API", "APIs")}} zu ihrer Steuerung obsolet. Wir werden hier nicht auf JavaScript eingehen – nur auf die grundlegenden Grundlagen, die mit HTML erreicht werden können.

Wir werden Ihnen nicht beibringen, wie man Audio- und Videodateien produziert – das erfordert ein völlig anderes Skillset. Wir haben Ihnen [Beispiel-Audio- und -Videodateien und Beispielcode](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) bereitgestellt, damit Sie selbst experimentieren können, falls Sie keine eigenen bekommen können.

> [!NOTE]
> Bevor Sie hier beginnen, sollten Sie auch wissen, dass es einige OVPs (Online Video Providers) wie [YouTube](https://www.youtube.com/), [Dailymotion](https://www.dailymotion.com/) und [Vimeo](https://vimeo.com/) gibt, sowie Online Audio-Anbieter wie [Soundcloud](https://soundcloud.com/). Solche Unternehmen bieten einen bequemen, einfachen Weg, Videos zu hosten und zu konsumieren, sodass Sie sich nicht um den enormen Bandbreitenverbrauch kümmern müssen. OVPs bieten in der Regel auch fertigen Code zum Einbetten von Video/Audio auf Ihren Webseiten; wenn Sie diesen Weg gehen, können Sie einige der Schwierigkeiten vermeiden, die wir in diesem Artikel besprechen. Wir werden diese Art von Diensten im nächsten Artikel etwas mehr besprechen.

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
  - : Auf die gleiche Weise wie beim {{htmlelement("img")}}-Element enthält das `src` (Quelle)-Attribut den Pfad zu dem Video, das Sie einbetten möchten. Es funktioniert genau gleich.
- [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls)
  - : Benutzer müssen in der Lage sein, die Wiedergabe von Video und Audio zu steuern (das ist besonders kritisch für Menschen, die unter [Epilepsie](https://en.wikipedia.org/wiki/Epilepsy#Epidemiology) leiden). Sie müssen entweder das `controls`-Attribut verwenden, um die eigene Steuerungsoberfläche des Browsers einzubeziehen, oder Sie erstellen Ihre eigene Oberfläche mithilfe der entsprechenden [JavaScript-API](/de/docs/Web/API/HTMLMediaElement). Mindestens muss die Oberfläche eine Möglichkeit bieten, das Medium zu starten und zu stoppen sowie die Lautstärke anzupassen.
- Der Absatz innerhalb der `<video>`-Tags
  - : Dies wird als **Fallback-Inhalt** bezeichnet – dieser wird angezeigt, wenn der das Video zugreifende Browser das `<video>`-Element nicht unterstützt, wodurch wir eine Rückfallmöglichkeit für ältere Browser bereitstellen können. Dies kann alles sein, was Sie möchten; in diesem Fall haben wir einen direkten Link zur Videodatei bereitgestellt, sodass der Benutzer unabhängig vom verwendeten Browser zumindest auf irgendeine Weise darauf zugreifen kann.

Das eingebettete Video wird etwa so aussehen:

![Ein einfacher Videoplayer, der ein Video von einem kleinen weißen Kaninchen zeigt](simple-video.png)

Sie können [das Beispiel hier live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/simple-video.html).)

## Verwendung mehrerer Quellformate zur Verbesserung der Kompatibilität

Es gibt ein Problem mit dem obigen Beispiel. Möglicherweise wird das Video nicht abgespielt, weil verschiedene Browser unterschiedliche Video- (und Audio-) Formate unterstützen. Glücklicherweise gibt es Möglichkeiten, dies zu verhindern.

### Inhalte einer Mediendatei

Lassen Sie uns zunächst die Terminologie schnell durchgehen. Formate wie OGG, WAV, MP4 und WebM werden als **[Containerformate](/de/docs/Web/Media/Guides/Formats/Containers)** bezeichnet. Sie definieren eine Struktur, in der die Audio- und/oder Videotracks gespeichert sind, die das Medium bilden, zusammen mit Metadaten, die das Medium beschreiben, welche Codecs zum Codieren seiner Kanäle verwendet werden, usw.

Eine WebM-Datei, die einen Film enthält, der eine Hauptvideospur und eine alternative Blickwinkelspure enthält, plus Audiospuren für Englisch und Spanisch sowie Audiokommentare auf Englisch kann konzeptionell wie in der folgenden Abbildung dargestellt werden. Ebenfalls enthalten sind Textspuren mit geschlossenen Untertiteln für den Spielfilm, spanische Untertitel für den Film und englische Untertitel für den Kommentar.

![Diagramm zur Veranschaulichung der Inhalte einer Mediendatei auf Track-Ebene.](containersandtracks.png)

Die Audio- und Videotracks im Container enthalten Daten im geeigneten Format für den zur Codierung des Mediums verwendeten Codec. Unterschiedliche Formate werden für Audiotracks im Gegensatz zu Videotracks verwendet. Jeder Audiotrack wird unter Verwendung eines [Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs) codiert, während Videotracks mit (wie Sie wahrscheinlich schon erraten haben) [einem Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) codiert werden. Wie bereits erwähnt, unterstützen verschiedene Browser unterschiedliche Video- und Audioformate sowie unterschiedliche Containerformate (wie OGG, MP4 und WebM, die wiederum verschiedene Arten von Video und Audio enthalten können).

Zum Beispiel:

- Ein WebM-Container verpackt in der Regel Vorbis- oder Opus-Audio mit VP8/VP9-Video. Dies wird in allen modernen Browsern unterstützt, ältere Versionen funktionieren jedoch möglicherweise nicht.
- Ein MP4-Container verpackt häufig AAC- oder MP3-Audio mit H.264-Video. Dies wird ebenfalls in allen modernen Browsern unterstützt.
- Der OGG-Container verwendet tendenziell Vorbis-Audio und Theora-Video. Dies wird am besten in Firefox und Chrome unterstützt, wurde jedoch im Wesentlichen durch das qualitativ bessere WebM-Format abgelöst.

Es gibt einige Sonderfälle. Zum Beispiel wird in den meisten Fällen ein Codec-Daten in einem vereinfachten Container gespeichert oder sogar ohne Container abgespeichert. Ein solches Beispiel ist der FLAC-Codec, der meist in FLAC-Dateien gespeichert wird, die einfach rohe FLAC-Tracks sind.

Ein anderes Beispiel ist die beliebte "MP3-Datei". Eine "MP3-Datei" ist eine Audiodatei, die mit der MPEG-1 Audio Layer III-Komprimierung codiert wurde. Während sie Metadaten enthalten kann, wird sie nicht in einem separaten MPEG- oder MPEG-2-Container eingekapselt. Ihre weitreichende Unterstützung in den {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elementen ist größtenteils ein Zeugnis ihrer anhaltenden Beliebtheit.

Ein Audioplayer wird dazu neigen, einen Audiotrack direkt abzuspielen, z. B. eine MP3- oder OGG-Datei. Diese benötigen keine Container.

### Unterstützung von Mediendateien in Browsern

> [!NOTE]
> Mehrere beliebte Formate, wie MP3 und MP4/H.264, sind hervorragend, sind jedoch durch Patente belastet; das heißt, es gibt Patente, die einige oder alle zugrundeliegenden Technologien abdecken. In den Vereinigten Staaten wurden MP3s bis 2017 durch Patente geschützt, und H.264 ist durch Patente zumindest bis 2027 belastet.
>
> Aufgrund dieser Patente müssen Browser, die die Unterstützung für diese Codecs implementieren möchten, in der Regel enorme Lizenzgebühren zahlen. Darüber hinaus ziehen es einige Menschen vor, eingeschränkte Software zu vermeiden und ausschließlich offene Formate zu verwenden. Aus diesen rechtlichen und Präferenzgründen sehen sich Webentwickler gezwungen, mehrere Formate zu unterstützen, um ihr gesamtes Publikum zu erreichen.

Die im vorherigen Abschnitt beschriebenen Codecs existieren, um Video und Audio in handhabbare Dateien zu komprimieren, da rohe Audio- und Videodaten beide extrem groß sind. Jeder Webbrowser unterstützt eine Auswahl von **{{Glossary("Codec", "Codecs")}}**, wie Vorbis oder H.264, die verwendet werden, um das komprimierte Audio und Video in Binärdaten umzuwandeln und zurück. Jeder Codec bietet seine eigenen Vor- und Nachteile, und jeder Container kann auch seine eigenen positiven und negativen Eigenschaften bieten, die Ihre Entscheidungen beeinflussen können, welchen Sie verwenden möchten.

Die Dinge werden etwas komplizierter, da nicht nur jeder Browser eine andere Menge an Container-Dateiformaten unterstützt, sondern auch nur eine bestimmte Auswahl an Codecs. Um die Wahrscheinlichkeit zu maximieren, dass Ihre Website oder App auf einem Browser eines Benutzers funktioniert, müssen Sie möglicherweise jede Mediendatei, die Sie verwenden, in mehreren Formaten bereitstellen. Wenn Ihre Seite und der Browser des Benutzers kein gemeinsames Medienformat haben, wird Ihr Medium nicht abgespielt.

Aufgrund der Komplexität, die sichergestellt werden muss, dass die Medien Ihrer App auf jeder Kombination von Browsern, Plattformen und Geräten, die Sie erreichen möchten, angezeigt werden können, kann die Auswahl der besten Kombination von Codecs und Container eine komplizierte Aufgabe sein. Siehe [Auswahl des richtigen Containers](/de/docs/Web/Media/Guides/Formats/Containers#choosing_the_right_container) für Hilfe bei der Auswahl des besten Container-Dateiformats für Ihre Bedürfnisse; ebenso siehe [Auswahl eines Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec) und [Auswahl eines Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs#choosing_an_audio_codec) für Hilfe bei der Auswahl der ersten Mediencodecs, die Sie für Ihre Inhalte und Ihr Zielpublikum verwenden sollten.

Ein weiterer Punkt, der zu beachten ist: Mobile Browser können zusätzliche Formate unterstützen, die von ihren Desktop-Äquivalenten nicht unterstützt werden, genauso wie sie möglicherweise nicht alle gleichen Formate unterstützen, die die Desktop-Version unterstützt. Darüber hinaus können sowohl Desktop- als auch Mobile-Browser _so_ konzipiert sein, dass sie die Medienwiedergabe auslagern (entweder für alle Medien oder nur für bestimmte Typen, die sie nicht intern handhaben können). Dies bedeutet, dass die Medienunterstützung teilweise von der installierten Software des Benutzers abhängt.

Wie machen wir das? Schauen Sie sich das folgende [aktualisierte Beispiel](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) (ebenfalls [hier live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html)) an:

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

Hier haben wir das `src`-Attribut aus dem eigentlichen {{HTMLElement("video")}}-Tag entfernt und stattdessen separate {{htmlelement("source")}}-Elemente eingefügt, die auf ihre eigenen Quellen verweisen. In diesem Fall wird der Browser die {{HTMLElement("source")}}-Elemente durchlaufen und dasjenige abspielen, für das er den Codec unterstützt. Die Einbindung von WebM- und MP4-Quellen sollte heutzutage ausreichen, um Ihr Video auf den meisten Plattformen und Browsern abzuspielen.

Jedes `<source>`-Element hat auch ein [`type`](/de/docs/Web/HTML/Reference/Elements/source#type)-Attribut. Dies ist optional, aber es wird empfohlen, dass Sie es einschließen. Das `type`-Attribut enthält den {{Glossary("MIME_type", "MIME-Typ")}} der Datei, die vom `<source>` angegeben wird, und Browser können das `type` verwenden, um sofort Videos zu überspringen, die sie nicht verstehen. Wenn das `type` nicht enthalten ist, laden und versuchen Browser, jede Datei abzuspielen, bis sie eine finden, die funktioniert, was offensichtlich Zeit in Anspruch nimmt und eine unnötige Nutzung von Ressourcen ist.

Schauen Sie sich unseren [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats) an, um Hilfe bei der Auswahl der besten Container und Codecs für Ihre Bedürfnisse zu erhalten und um die richtigen MIME-Typen herauszufinden, die für jedes Format angegeben werden müssen.

## Weitere `<video>`-Funktionen

Es gibt eine Reihe anderer Funktionen, die Sie beim Anzeigen eines HTML-Videos einbeziehen können. Werfen Sie einen Blick auf unser nächstes Beispiel:

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

Das resultierende UI sieht ungefähr so aus:

![Ein Videoplayer, der ein Posterbild anzeigt, bevor er abgespielt wird. Das Posterbild zeigt den Text HTML-Video-Beispiel, OMG hell yeah!](poster_screenshot_updated.png)

Zu den Funktionen gehören:

- [`width`](/de/docs/Web/HTML/Reference/Elements/video#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/video#height)
  - : Sie können die Videogröße entweder mit diesen Attributen oder mit {{Glossary("CSS", "CSS")}} steuern. In beiden Fällen behalten die Videos ihr natives Breiten-Höhen-Verhältnis bei – bekannt als **Seitenverhältnis**. Wenn das Seitenverhältnis durch die Größen, die Sie festlegen, nicht beibehalten wird, wird das Video so weit wie möglich horizontal ausgefüllt, während der ungenutzte Raum standardmäßig mit einer festen Hintergrundfarbe gefüllt wird.
- [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay)
  - : Beginnt das Abspielen des Audio- oder Videoinhalts sofort beim Laden der restlichen Seite. Es wird empfohlen, keine automatisch abspielenden Videos (oder Audios) auf Ihren Websites zu verwenden, weil Benutzer dies als sehr störend empfinden können.
- [`loop`](/de/docs/Web/HTML/Reference/Elements/video#loop)
  - : Lässt das Video (oder Audio) automatisch neu starten, sobald es zu Ende ist. Dies kann ebenfalls störend sein, daher sollte es nur verwendet werden, wenn es wirklich notwendig ist.
- [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted)
  - : Spielt das Medium standardmäßig ohne Ton ab.
- [`poster`](/de/docs/Web/HTML/Reference/Elements/video#poster)
  - : Die URL eines Bildes, das vor dem Abspielen des Videos angezeigt wird. Es ist dazu gedacht, als Eröffnungsbild oder Werbebild angezeigt zu werden.
- [`preload`](/de/docs/Web/HTML/Reference/Elements/video#preload)

  - : Wird für das Puffern von großen Dateien verwendet; es kann einen von drei Werten annehmen:

    - `"none"` puffert die Datei nicht
    - `"auto"` puffert die Mediendatei
    - `"metadata"` puffert nur die Metadaten zur Datei

Sie können das obige Beispiel [live auf GitHub ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html).) Beachten Sie, dass wir das `autoplay`-Attribut in der Live-Version nicht enthalten haben – wenn das Video startet, sobald die Seite lädt, verpassen Sie das Poster!

## Das `<audio>`-Element

Das {{htmlelement("audio")}}-Element funktioniert genau so wie das {{htmlelement("video")}}-Element, mit ein paar kleinen Unterschieden, die unten beschrieben werden. Ein typisches Beispiel könnte so aussehen:

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

Dies ergibt im Browser etwas Ähnliches wie das Folgende:

![Ein einfacher Audioplayer mit einem Abspielknopf, Timer, Lautstärkeregler und Fortschrittsanzeige](audio-player.png)

> [!NOTE]
> Sie können [das Audio-Demo live ausführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) auf GitHub (siehe auch den [Audioplayer-Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html).)

Dies nimmt weniger Platz als ein Videoplayer ein, da es keine visuelle Komponente gibt – Sie müssen nur Steuerungen anzeigen, um das Audio abzuspielen. Andere Unterschiede zum HTML-Video sind wie folgt:

- Das {{htmlelement("audio")}}-Element unterstützt die `width`/`height`-Attribute nicht – wieder gibt es keine visuelle Komponente, daher gibt es nichts, dem eine Breite oder Höhe zugewiesen werden könnte.
- Es unterstützt auch nicht das `poster`-Attribut – wieder gibt es keine visuelle Komponente.

Abgesehen davon unterstützt `<audio>` alle Funktionen, die `<video>` bietet – überprüfen Sie die obigen Abschnitte, um mehr Informationen über diese Funktionen zu erhalten.

## Videotextspuren anzeigen

Nun werden wir ein etwas fortgeschritteneres Konzept besprechen, das wirklich nützlich zu wissen ist. Viele Menschen können oder möchten die Audio-/Videoinhalte, die sie im Web finden, zumindest zu bestimmten Zeiten nicht hören. Zum Beispiel:

- Viele Menschen haben Hörbehinderungen (wie schwer hörend oder taub), sodass sie den Ton nicht klar hören können, wenn überhaupt.
- Andere können den Ton nicht hören, weil sie sich in lauten Umgebungen befinden (wie einer vollen Bar, in der ein Sportspiel gezeigt wird).
- Ähnlich ist es in Umgebungen, in denen das Abspielen des Tons ablenkend oder störend wäre (wie in einer Bibliothek oder wenn ein Partner versucht zu schlafen), hilfreich, Untertitel zu haben.
- Menschen, die die Sprache des Videos nicht sprechen, möchten möglicherweise ein Texttranskript oder sogar eine Übersetzung, um die Medieninhalte zu verstehen.

Wäre es nicht schön, wenn Sie diesen Leuten ein Transkript der im Audio-/Video-Inhalt gesprochenen Wörter zur Verfügung stellen könnten? Dank HTML-Video ist das möglich. Dazu verwenden wir das [WebVTT](/de/docs/Web/API/WebVTT_API)-Dateiformat und das {{htmlelement("track")}}-Element.

> [!NOTE]
> "Transkribieren" bedeutet, "gesprochene Wörter als Text aufzuschreiben." Der resultierende Text ist ein "Transkript."

WebVTT ist ein Format zum Schreiben von Textdateien, die mehrere Zeichenfolgen von Text zusammen mit Metadaten enthalten, wie z. B. der Zeit im Video, zu der jede Textzeichenfolge angezeigt werden soll, und sogar begrenzte Stil- und Positionierungsinformationen. Diese Textzeichenfolgen werden als **Cues** bezeichnet, und es gibt verschiedene Arten von Cues, die für unterschiedliche Zwecke verwendet werden. Die häufigsten Cues sind:

- Untertitel
  - : Übersetzungen ausländischen Materials für Personen, die die im Audio gesprochenen Wörter nicht verstehen.
- Beschriftungen
  - : Synchronisierte Transkriptionen von Dialogen oder Beschreibungen signifikanter Geräusche, um Menschen, die den Ton nicht hören können, zu verleihen, zu verstehen, was vor sich geht.
- Zeitlich abgestimmte Beschreibungen
  - : Text, der vom Mediaplayer gesprochen werden sollte, um blinden oder anderweitig sehbehinderten Benutzern wichtige visuelle Elemente zu beschreiben.

Eine typische WebVTT-Datei sieht in etwa so aus:

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

Um dies zusammen mit der HTML-Mediaplayback anzuzeigen, müssen Sie:

1. Speichern Sie die Datei als `.vtt`-Datei irgendwo, wo der Server sie bereitstellen kann (siehe unten), z. B. im selben Verzeichnis wie die HTML-Datei.
2. Verknüpfen Sie mit der `.vtt`-Datei mit dem {{htmlelement("track")}}-Element. `<track>` sollte sich innerhalb von `<audio>` oder `<video>` befinden, jedoch nach allen `<source>`-Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind)-Attribut, um anzugeben, ob die Cues `subtitles`, `captions` oder `descriptions` sind. Verwenden Sie außerdem [`srclang`](/de/docs/Web/HTML/Reference/Elements/track#srclang), um dem Browser mitzuteilen, in welcher Sprache Sie die Untertitel geschrieben haben. Fügen Sie schließlich [`label`](/de/docs/Web/HTML/Reference/Elements/track#label) hinzu, um den Lesern zu helfen, die Sprache zu identifizieren, die sie suchen.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

Um dies auszuprobieren, müssen Sie die Dateien auf einem [lokalen HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) hosten. Im Browser sehen Sie ein Video, das Untertitel anzeigt, in etwa so:

![Videoplayer mit Standardsteuerungen wie Abspielen, Stoppen, Lautstärkeregler und Untertiteln aktivieren und deaktivieren. Das abgespielte Video zeigt eine Szene von einem Mann, der eine speerähnliche Waffe hält, und eine Untertitelung weist "Esta hoja tiene pasado oscuro." auf.](video-player-with-captions.png)

Für weitere Details, einschließlich wie man Labels hinzufügt, lesen Sie [Hinzufügen von Untertiteln und Untertiteln zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können das [Beispiel finden](https://iandevlin.github.io/mdn/video-player-with-captions/), das zu diesem Artikel gehört, auf GitHub, geschrieben von Ian Devlin (sehen Sie sich auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) an). Dieses Beispiel verwendet etwas JavaScript, um Benutzern die Auswahl zwischen verschiedenen Untertiteln zu ermöglichen. Beachten Sie, dass Sie zum Aktivieren der Untertitel die "CC"-Schaltfläche drücken und eine Option auswählen müssen – English, Deutsch oder Español.

> [!NOTE]
> Textspuren helfen Ihnen auch mit {{Glossary("SEO", "SEO")}}, da Suchmaschinen besonders auf Text angewiesen sind. Textspuren ermöglichen es Suchmaschinen sogar, direkt auf eine bestimmte Stelle im Video zu verlinken.

## Aktives Lernen: Einbinden eigener Audio- und Videodateien

Für dieses aktive Lernen möchten wir, dass Sie (idealerweise) hinausgehen in die Welt und einige Ihrer eigenen Videos und Audios aufnehmen – die meisten Telefone erlauben Ihnen heutzutage, Audio und Video sehr einfach aufzunehmen, und sofern Sie die Aufnahmen auf Ihren Computer übertragen können, können Sie sie verwenden. Sie müssen möglicherweise einige Konvertierungen durchführen, um im Falle von Videos eine WebM- und MP4-Datei und im Falle von Audio eine MP3- und Ogg-Datei zu erhalten, aber es gibt genug Programme da draußen, um dies ohne zu viel Aufwand zu ermöglichen, wie [Miro Video Converter](http://www.mirovideoconverter.com/) und [Audacity](https://sourceforge.net/projects/audacity/). Wir würden gerne, dass Sie es ausprobieren!

Sollten Sie keine Video- oder Audiomaterialien beschaffen können, können Sie gerne unsere [Beispiel-Audio- und -Videodateien](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) nutzen, um diese Übung durchzuführen. Sie können auch unseren Beispielcode zur Referenz nutzen.

Wir möchten, dass Sie:

1. Speichern Sie Ihre Audio- und Videodateien in einem neuen Verzeichnis auf Ihrem Computer.
2. Erstellen Sie eine neue HTML-Datei im gleichen Verzeichnis, genannt `index.html`.
3. Fügen Sie der Seite {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente hinzu; lassen Sie sie die Standardsteuerungen des Browsers anzeigen.
4. Geben Sie beiden {{HTMLElement("source")}}-Elemente, damit die Browser das für sie am besten unterstützte Audioformat finden und laden. Diese sollten Attribute wie [`type`](/de/docs/Web/HTML/Reference/Elements/source#type) enthalten.
5. Geben Sie dem `<video>`-Element ein Poster, das angezeigt wird, bevor das Video abgespielt wird. Haben Sie Spaß beim Erstellen Ihres eigenen Posterbildes.

Als zusätzlichen Bonus können Sie versuchen, Textspuren zu recherchieren und herauszufinden, wie Sie Ihren Videos Untertitel hinzufügen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weiterführende Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Multimedia und Einbettung](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Multimedia_and_embedding).

## Zusammenfassung

Und das war's – wir hoffen, Sie hatten Spaß daran, mit Video und Audio auf Webseiten zu spielen! Als nächstes präsentieren wir Ihnen eine Herausforderung, um Ihre Fähigkeiten mit HTML-Medien zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}
