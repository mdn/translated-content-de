---
title: HTML video und audio
short-title: Video und Audio
slug: Learn_web_development/Core/Structuring_content/HTML_video_and_audio
l10n:
  sourceCommit: 27f34d8b137f9bb2b467f9f9a1c4e1d04e12ed89
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video", "Learn_web_development/Core/Structuring_content")}}

Da wir uns jetzt mit dem Hinzufügen einfacher Bilder zu einer Webseite wohlfühlen, ist der nächste Schritt, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel werden wir uns genau damit beschäftigen, indem wir die {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente verwenden; wir schließen dann ab, indem wir uns ansehen, wie Sie Ihren Videos Untertitel hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt. Textuelle Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Grundlegende <code>&lt;video&gt;</code>- und <code>&lt;audio&gt;</code>-Tag-Syntax</li>
          <li>Video- und audiospezifische Attribute wie controls und muted.</li>
          <li>Verwendung von <code>&lt;source&gt;</code>-Elementen, um verschiedene Video- oder Audioquellen bereitzustellen.</li>
          <li>Die Grundlagen zur Verwendung von Textspuren wie Untertiteln.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Video und Audio im Web

Die erste Welle von Online-Videos und -Audio wurde durch proprietäre, plugin-basierte Technologien wie [Flash](https://en.wikipedia.org/wiki/Adobe_Flash) und [Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight) ermöglicht. Beide hatten Sicherheits- und Zugänglichkeitsprobleme und sind jetzt zugunsten nativer HTML-Lösungen wie {{htmlelement("video")}} und {{htmlelement("audio")}} sowie der Verfügbarkeit von {{Glossary("JavaScript", "JavaScript")}} {{Glossary("API", "APIs")}} zum Steuern dieser Elemente obsolet. JavaScript betrachten wir hier nicht — nur die grundlegenden Grundlagen, die mit HTML erreicht werden können.

Wir werden Ihnen nicht beibringen, wie man Audio- und Videodateien produziert — das erfordert ein völlig anderes Skillset. Wir haben Ihnen [Beispieldateien für Audio und Video und Beispielcode](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) zur Verfügung gestellt, um zu experimentieren, falls Sie auf keine eigenen zugreifen können.

> [!NOTE]
> Bevor Sie hier beginnen, sollten Sie auch wissen, dass es ziemlich viele OVPs (Online-Videoanbieter) wie [YouTube](https://www.youtube.com/), [Dailymotion](https://www.dailymotion.com/) und [Vimeo](https://vimeo.com/) gibt, sowie Online-Audioanbieter wie [Soundcloud](https://soundcloud.com/). Solche Unternehmen bieten einen bequemen und einfachen Weg, Videos zu hosten und zu konsumieren, sodass Sie sich keine Gedanken über den enormen Bandbreitenverbrauch machen müssen. OVPs bieten in der Regel auch fertigen Code zum Einbetten von Video/Audio auf Ihren Webseiten an; wenn Sie diesen Weg gehen, können Sie einige der Schwierigkeiten vermeiden, die wir in diesem Artikel besprechen. Wir werden diesen Service im nächsten Artikel ein wenig näher besprechen.

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

Die hervorzuhebenden Funktionen sind:

- [`src`](/de/docs/Web/HTML/Reference/Elements/video#src)
  - : Ähnlich wie beim {{htmlelement("img")}}-Element enthält das `src`-Attribut einen Pfad zu dem Video, das Sie einbetten möchten. Es funktioniert genau gleich.
- [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls)
  - : Benutzer müssen in der Lage sein, die Wiedergabe von Video und Audio zu steuern (besonders wichtig für Menschen, die an [Epilepsie](https://en.wikipedia.org/wiki/Epilepsy#Epidemiology) leiden). Sie müssen entweder das `controls`-Attribut verwenden, um die eigene Steuerungsoberfläche des Browsers einzubeziehen, oder Ihre eigene Schnittstelle mit der entsprechenden [JavaScript-API](/de/docs/Web/API/HTMLMediaElement) erstellen. Zumindest muss die Schnittstelle eine Möglichkeit bieten, Medien zu starten und zu stoppen sowie die Lautstärke anzupassen.
- Der Absatz innerhalb der `<video>`-Tags
  - : Dies wird als **fallback content** bezeichnet — dieser wird angezeigt, wenn der Browser, der auf die Seite zugreift, das `<video>`-Element nicht unterstützt, was uns ermöglicht, eine Rückfalloption für ältere Browser bereitzustellen. Dies kann alles sein, was Ihnen gefällt; in diesem Fall haben wir einen direkten Link zur Videodatei bereitgestellt, sodass der Benutzer zumindest irgendwie darauf zugreifen kann, unabhängig davon, welchen Browser er verwendet.

Das eingebettete Video wird etwa so aussehen:

![Ein einfacher Videoplayer, der ein Video eines kleinen weißen Kaninchens zeigt](simple-video.png)

Sie können [das Beispiel hier live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/simple-video.html).)

## Verwendung mehrerer Quellformate zur Verbesserung der Kompatibilität

Es gibt ein Problem mit dem obigen Beispiel. Es ist möglich, dass das Video für Sie nicht abgespielt wird, da verschiedene Browser verschiedene Video- (und Audio-)Formate unterstützen. Zum Glück gibt es Maßnahmen, die Sie ergreifen können, um dies zu vermeiden.

### Inhalte einer Mediendatei

Zunächst lässt uns kurz die Terminologie durchgehen. Formate wie OGG, WAV, MP4 und WebM werden als **[Containerformate](/de/docs/Web/Media/Guides/Formats/Containers)** bezeichnet. Sie definieren eine Struktur, in der die Audio- und/oder Videospuren, die das Medium ausmachen, zusammen mit Metadaten gespeichert sind, die das Medium beschreiben, welche Codecs zur Kodierung seiner Kanäle verwendet werden und so weiter.

Eine WebM-Datei, die einen Film enthält, der eine Hauptvideospur und eine alternative Winkelspur enthält, plus Audio auf Englisch und Spanisch sowie Audio für eine englische Kommentarspur, kann wie im untenstehenden Diagramm dargestellt konzeptualisiert werden. Ebenfalls enthalten sind Textspuren mit geschlossenen Untertiteln für den Spielfilm, spanische Untertitel für den Film und englische Untertitel für den Kommentar.

![Diagramm zur Konzeptualisierung der Inhalte einer Mediendatei auf Track-Ebene.](containersandtracks.png)

Die Audio- und Videospuren im Container enthalten Daten im geeigneten Format für den zur Kodierung dieses Mediums verwendeten Codec. Unterschiedliche Formate werden für Audio- versus Videospuren verwendet. Jede Audiospur wird unter Verwendung eines [Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs) codiert, während Videospuren mit (wie Sie wahrscheinlich schon erraten haben) [einem Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) codiert werden. Wie bereits erwähnt, unterstützen verschiedene Browser unterschiedliche Video- und Audioformate sowie unterschiedliche Containerformate (wie OGG, MP4 und WebM, die wiederum verschiedene Arten von Video und Audio enthalten können).

Zum Beispiel:

- Ein WebM-Container verpackt typischerweise Vorbis- oder Opus-Audio mit VP8/VP9-Video. Dies wird in allen modernen Browsern unterstützt, ältere Versionen funktionieren jedoch möglicherweise nicht.
- Ein MP4-Container verpackt oft AAC- oder MP3-Audio mit H.264-Video. Dies wird ebenfalls in allen modernen Browsern unterstützt.
- Der Ogg-Container verwendet tendenziell Vorbis-Audio und Theora-Video. Dies wird am besten in Firefox und Chrome unterstützt, wurde jedoch im Wesentlichen durch das qualitativ bessere WebM-Format ersetzt.

Es gibt einige Sonderfälle. Beispielsweise wird bei einigen Arten von Audio oft ein Codec ohne Container oder mit einem vereinfachten Container gespeichert. Ein solches Beispiel ist der FLAC-Codec, der am häufigsten in FLAC-Dateien gespeichert wird, die einfach rohe FLAC-Tracks sind.

Ein weiteres Beispiel ist die immer beliebte "MP3-Datei". Eine "MP3-Datei" ist eine Audiodatei, die unter Verwendung der MPEG-1 Audio Layer III-Komprimierung kodiert wurde. Während es Metadaten enthalten kann, wird es nicht in einem separaten MPEG- oder MPEG-2-Container gekapselt. Seine weitreichende Unterstützung in den {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elementen ist größtenteils ein Zeugnis seiner dauerhaften Beliebtheit.

Ein Audioplayer wird tendenziell eine Audiospur direkt abspielen, z. B. eine MP3- oder Ogg-Datei. Diese benötigen keine Container.

### Unterstützung von Mediendateien in Browsern

> [!NOTE]
> Mehrere beliebte Formate, wie MP3 und MP4/H.264, sind hervorragend, aber durch Patente belastet; das heißt, es gibt Patente, die einige oder alle Technologien abdecken, auf denen sie basieren. In den Vereinigten Staaten wurden Patente für MP3 bis 2017 abgedeckt, und H.264 ist durch Patente bis mindestens 2027 belastet.
>
> Aufgrund dieser Patente müssen Browser, die Unterstützung für diese Codecs implementieren möchten, in der Regel enorme Lizenzgebühren zahlen. Darüber hinaus ziehen es einige Personen vor, eingeschränkte Software zu vermeiden und nur offene Formate zu verwenden. Aus diesen rechtlichen und bevorzugten Gründen finden sich Webentwickler in der Notwendigkeit, mehrere Formate zu unterstützen, um ein Videoerlebnis für ihr gesamtes Publikum bereitzustellen.

Die in der vorherigen Section beschriebenen Codecs dienen dazu, Video und Audio in handhabbare Dateien zu komprimieren, da sowohl rohe Audio- als auch Videodaten extrem groß sind. Jeder Webbrowser unterstützt eine Auswahl an **{{Glossary("Codec", "Codecs")}}**, wie Vorbis oder H.264, die verwendet werden, um die komprimierten Audio- und Videodaten in Binärdaten zu konvertieren und zurück. Jeder Codec bietet seine eigenen Vor- und Nachteile, und jeder Container kann auch seine eigenen positiven und negativen Eigenschaften haben, die sich auf Ihre Entscheidungen auswirken, welche Sie verwenden.

Die Dinge werden etwas komplizierter, da nicht nur jeder Browser eine unterschiedliche Anzahl an Containerdateiformaten unterstützt, sondern auch eine unterschiedliche Auswahl an Codecs. Um die Wahrscheinlichkeit zu maximieren, dass Ihre Webseite oder App auf dem Browser eines Benutzers funktioniert, müssen Sie möglicherweise jede Mediendatei, die Sie verwenden, in mehreren Formaten bereitstellen. Wenn Ihre Seite und der Browser des Benutzers kein gemeinsames Medienformat haben, wird Ihr Medium nicht wiedergegeben.

Aufgrund der Komplexität der Sicherstellung, dass Ihre Medien auf jeder Kombination von Browsern, Plattformen und Geräten, die Sie erreichen möchten, angezeigt werden können, kann die Wahl der besten Kombination aus Codecs und Containern eine komplizierte Aufgabe sein. Siehe [Wählen des richtigen Containers](/de/docs/Web/Media/Guides/Formats/Containers#choosing_the_right_container) für Hilfe bei der Auswahl des Container-Dateiformats, das am besten für Ihre Bedürfnisse geeignet ist; ähnlich, siehe [Wählen eines Video-Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec) und [Wählen eines Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs#choosing_an_audio_codec) für Hilfe bei der Auswahl der ersten Media-Codecs zur Verwendung für Ihren Inhalt und Ihr Zielpublikum.

Ein weiterer Punkt, den Sie beachten sollten: Mobile Browser können zusätzliche Formate unterstützen, die von ihren Desktop-Äquivalenten nicht unterstützt werden, genauso wie sie nicht alle Formate unterstützen können, die die Desktop-Version tut. Darüber hinaus _können_ sowohl Desktop- als auch mobile Browser so konzipiert sein, dass sie die Medienwiedergabe (entweder für alle Medien oder nur für bestimmte Typen, die sie intern nicht handhaben können) auslagern. Dies bedeutet, dass die Unterstützung von Medien teilweise von der auf dem Benutzer installierten Software abhängig ist.

Also wie machen wir das? Sehen Sie sich das folgende [aktualisierte Beispiel](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) an ([probieren Sie es hier live aus](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html), auch):

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

Hier haben wir das `src`-Attribut aus dem eigentlichen {{HTMLElement("video")}}-Tag entfernt und stattdessen separate {{htmlelement("source")}}-Elemente eingefügt, die auf ihre eigenen Quellen verweisen. In diesem Fall wird der Browser die {{HTMLElement("source")}}-Elemente durchgehen und das erste abspielen, das er den Codec zur Unterstützung hat. Das Hinzufügen von WebM- und MP4-Quellen sollte heutzutage ausreichen, um Ihr Video auf den meisten Plattformen und Browsern abzuspielen.

Jedes `<source>`-Element hat auch ein [`type`](/de/docs/Web/HTML/Reference/Elements/source#type)-Attribut. Dies ist optional, aber es wird empfohlen, dass Sie es einfügen. Das `type`-Attribut enthält den {{Glossary("MIME_type", "MIME-Typ")}} der Datei, die durch `<source>` angegeben ist, und Browser können `type` verwenden, um sofort Videos zu überspringen, die sie nicht verstehen. Wenn `type` nicht enthalten ist, laden Browser und versuchen jede Datei abzuspielen, bis sie eine finden, die funktioniert, was natürlich Zeit kostet und eine unnötige Verwendung von Ressourcen ist.

Beziehen Sie sich auf unseren [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats) für Hilfe bei der Auswahl der besten Container und Codecs für Ihre Bedürfnisse, sowie zum Nachschlagen der richtigen MIME-Typen, die für jedes angegeben werden sollen.

## Andere `<video>`-Funktionen

Es gibt eine Reihe von weiteren Funktionen, die Sie beim Anzeigen eines HTML-Videos einbeziehen können. Sehen Sie sich unser nächstes Beispiel an:

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

![Ein Videoplayer, der ein Posterbild zeigt, bevor es abgespielt wird. Das Posterbild sagt HTML-Video-Beispiel, OMG Hölle ja!](poster_screenshot_updated.png)

Zu den Features gehören:

- [`width`](/de/docs/Web/HTML/Reference/Elements/video#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/video#height)
  - : Sie können die Videogröße entweder mit diesen Attributen oder mit {{Glossary("CSS", "CSS")}} steuern. In beiden Fällen behalten Videos ihr natives Breiten-Höhen-Verhältnis — bekannt als **Seitenverhältnis**. Wenn das Seitenverhältnis nicht durch die von Ihnen festgelegten Größen eingehalten wird, wächst das Video, um den Raum horizontal auszufüllen, und der unverfüllte Raum erhält standardmäßig eine einfarbige Hintergrundfarbe.
- [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay)
  - : Macht, dass das Audio oder Video sofort abgespielt wird, während der Rest der Seite geladen wird. Es wird nicht empfohlen, automatisch abspielende Videos (oder Audios) auf Ihren Seiten zu verwenden, da Benutzer es sehr störend finden können.
- [`loop`](/de/docs/Web/HTML/Reference/Elements/video#loop)
  - : Lässt das Video (oder Audio) erneut abspielen, sobald es beendet ist. Dies kann auch lästig sein, daher nur verwenden, wenn es wirklich notwendig ist.
- [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted)
  - : Lässt die Medien standardmäßig ohne Ton abspielen.
- [`poster`](/de/docs/Web/HTML/Reference/Elements/video#poster)
  - : Die URL eines Bildes, das angezeigt wird, bevor das Video abgespielt wird. Es soll für ein Splash- oder Werbebildschirm verwendet werden.
- [`preload`](/de/docs/Web/HTML/Reference/Elements/video#preload)
  - : Wird zum Puffern großer Dateien verwendet; es kann einen der drei Werte annehmen:
    - `"none"` puffert die Datei nicht
    - `"auto"` puffert die Mediendatei
    - `"metadata"` puffert nur die Metadaten der Datei

Sie können das obige Beispiel [live auf GitHub ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) (auch [sehen Sie sich den Quellcode an](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html).) Beachten Sie, dass wir das `autoplay`-Attribut in der Live-Version nicht eingeschlossen haben — wenn das Video anfängt zu spielen, sobald die Seite geladen wird, sehen Sie das Poster nicht!

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

Dies ergibt im Browser ungefähr Folgendes:

![Ein einfacher Audioplayer mit einem Wiedergabebutton, Timer, Lautstärkeregelung und Fortschrittsleiste](audio-player.png)

> [!NOTE]
> Sie können [das Audio-Demo live durchführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) auf GitHub (siehe auch den [Audioplayer-Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html).)

Dies nimmt weniger Platz ein als ein Videoplayer, da es keine visuelle Komponente gibt — Sie müssen nur Steuerungen zum Abspielen des Audios anzeigen. Andere Unterschiede im Vergleich zu HTML-Video sind:

- Das {{htmlelement("audio")}}-Element unterstützt nicht die `width`/`height`-Attribute — noch einmal, es gibt keine visuelle Komponente, also gibt es nichts, dem man eine Breite oder Höhe zuweisen könnte.
- Es unterstützt auch nicht das `poster`-Attribut — erneut, keine visuelle Komponente.

Abgesehen davon unterstützt `<audio>` alle gleichen Funktionen wie `<video>` — lesen Sie die obigen Abschnitte für weitere Informationen darüber.

## Anzeigen von Videotextspuren

Jetzt werden wir ein etwas fortgeschritteneres Konzept besprechen, das wirklich nützlich zu wissen ist. Viele Menschen können oder wollen die Audio-/Video-Inhalte, die sie im Web finden, nicht hören, zumindest zu bestimmten Zeiten. Beispielsweise:

- Viele Menschen haben Hörbeeinträchtigungen (wie schwerhörig oder taub), sodass sie das Audio nicht klar hören können, wenn überhaupt.
- Andere können das Audio vielleicht nicht hören, weil sie sich in einer lauten Umgebung befinden (wie eine überfüllte Bar, wenn ein Sportspiel gezeigt wird).
- In ähnlicher Weise kann es in Umgebungen, in denen das Abspielen des Audios eine Ablenkung oder Störung wäre (wie in einer Bibliothek oder wenn ein Partner versucht zu schlafen), sehr nützlich sein, Untertitel zu haben.
- Personen, die die Sprache des Videos nicht sprechen, möchten möglicherweise ein Texttranskript oder sogar eine Übersetzung, um den Medieninhalt zu verstehen.

Wäre es nicht schön, diesen Personen ein Transkript der gesprochenen Worte im Audio/Video bereitzustellen? Nun, dank HTML-Video können Sie das. Dazu verwenden wir das [WebVTT](/de/docs/Web/API/WebVTT_API)-Dateiformat und das {{htmlelement("track")}}-Element.

> [!NOTE]
> "Transkribieren" bedeutet "gesprochene Worte als Text aufzuschreiben". Der resultierende Text ist ein "Transkript."

WebVTT ist ein Format zum Schreiben von Textdateien, die mehrere Zeichenketten zusammen mit Metadaten wie die Zeit im Video, zu der jede Zeichenkette angezeigt werden soll, und sogar begrenzte Formatierungs-/Positionierungsinformationen enthalten. Diese Zeichenketten werden als **Cues** bezeichnet, und es gibt mehrere Arten von Cues, die für unterschiedliche Zwecke verwendet werden. Die häufigsten Cues sind:

- Untertitel
  - : Übersetzungen von fremdem Material für Personen, die die im Audio gesprochenen Worte nicht verstehen.
- Untertitel
  - : Synchronisierte Transkriptionen von Dialogen oder Beschreibungen bedeutender Geräusche, um Menschen, die das Audio nicht hören können, zu ermöglichen, zu verstehen, was vor sich geht.
- zeitgesteuerte Beschreibungen
  - : Text, der vom Mediaplayer gesprochen werden sollte, um wichtige visuelle Elemente blinden oder sehbehinderten Benutzern zu beschreiben.

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

1. Speichern Sie es als `.vtt`-Datei an einem Ort, den der Server bereitstellen kann (siehe unten), beispielsweise im gleichen Verzeichnis wie die HTML-Datei.
2. Verlinken Sie die `.vtt`-Datei mit dem {{htmlelement("track")}}-Element. `<track>` sollte innerhalb von `<audio>` oder `<video>` platziert werden, jedoch nach allen `<source>`-Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind)-Attribut, um anzugeben, ob die Cues `subtitles`, `captions` oder `descriptions` sind. Verwenden Sie zusätzlich [`srclang`](/de/docs/Web/HTML/Reference/Elements/track#srclang), um dem Browser zu sagen, in welcher Sprache Sie die Untertitel geschrieben haben. Schließlich fügen Sie [`label`](/de/docs/Web/HTML/Reference/Elements/track#label) hinzu, um Lesern zu helfen, die Sprache zu identifizieren, die sie suchen.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

Um dies auszuprobieren, müssen Sie die Dateien auf einem [lokalen HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) hosten. In der Ausgabe im Browser sehen Sie ein Video, das Untertitel angezeigt, ungefähr so:

![Videoplayer mit Standardsteuerungen wie Play, Stop, Lautstärke und Ein/Aus der Untertitel. Das abgespielte Video zeigt eine Szene von einem Mann, der eine speerähnliche Waffe hält, und ein Untertitel lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für mehr Details, einschließlich der Berücksichtigung von Labels, lesen Sie bitte [Hinzufügen von Untertiteln und Untertiteln zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können [das zu diesem Artikel gehörende Beispiel finden](https://iandevlin.github.io/mdn/video-player-with-captions/) auf GitHub, geschrieben von Ian Devlin (sehen Sie sich auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) an.) Dieses Beispiel verwendet etwas JavaScript, damit Benutzer zwischen verschiedenen Untertiteln wählen können. Beachten Sie, dass Sie, um die Untertitel einzuschalten, den "CC"-Button drücken und eine Option wählen müssen — English, Deutsch oder Español.

> [!NOTE]
> Textspuren helfen Ihnen auch bei {{Glossary("SEO", "SEO")}}, da Suchmaschinen insbesondere auf Text gedeihen. Textspuren ermöglichen es Suchmaschinen sogar, direkt zu einem Punkt mitten im Video zu verlinken.

## Einbetten Ihrer eigenen Audios und Videos

Für diese Aufgabe, warum nicht hinaus in die Welt gehen und einige Ihrer eigenen Videos und Audios aufnehmen? Wenn Sie ein Telefon haben, benutzen Sie dieses, um Audio und Video aufzunehmen, übertragen Sie es auf Ihren Computer und probieren Sie es aus. Möglicherweise müssen Sie einige Konvertierungen durchführen, um im Falle von Video zu einem WebM- und MP4-Format und im Falle von Audio zu MP3- und Ogg-Formaten zu gelangen, aber es gibt viele Programme und Tools, die es Ihnen ermöglichen, dies ohne allzu große Probleme zu tun, wie [CloudConvert](https://cloudconvert.com/mp4-converter) (online) und [Audacity](https://sourceforge.net/projects/audacity/) (Desktop-Anwendung). Wir möchten, dass Sie es versuchen!

> [!NOTE]
> Wenn Sie keine Video- oder Audioquellen finden können, dann können Sie auch unsere [Beispieldateien für Audio und Video](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) verwenden, um diese Übung durchzuführen.

Wir möchten, dass Sie:

1. Speichern Sie Ihre Audio- und Videodateien in einem neuen Verzeichnis auf Ihrem Computer.
2. Erstellen Sie eine neue HTML-Datei im gleichen Verzeichnis, die `index.html` heißt, basierend auf unserer [Erste-Schritte-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).
3. Fügen Sie der Seite {{HTMLelement("audio")}}- und {{HTMLelement("video")}}-Elemente hinzu; lassen Sie sie die Standardsteuerungen des Browsers zeigen.
4. Geben Sie beiden {{HTMLelement("source")}}-Elemente, damit Browser das am besten unterstützte Audioformat finden und laden können. Diese sollten [`type`](/de/docs/Web/HTML/Reference/Elements/source#type)-Attribute enthalten.
5. Geben Sie beiden ein Fallback-`<p>`-Element innerhalb der Tags, das einen direkten Link zu den Medien für nicht unterstützende Browser bietet.
6. Geben Sie dem `<video>`-Element ein Poster, das angezeigt wird, bevor das Video abgespielt wird. Haben Sie Spaß dabei, Ihre eigene Poster-Grafik zu erstellen.

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

## Zusammenfassung

Und das war's — wir hoffen, Sie hatten Spaß beim Spielen mit Video und Audio auf Webseiten! Als Nächstes geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen verstanden und behalten haben, die wir zu HTML-Video und -Audio bereitgestellt haben.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video", "Learn_web_development/Core/Structuring_content")}}
