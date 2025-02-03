---
title: HTML video und audio
slug: Learn_web_development/Core/Structuring_content/HTML_video_and_audio
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}

Jetzt, da wir uns mit dem Hinzufügen einfacher Bilder zu einer Webseite vertraut gemacht haben, ist der nächste Schritt, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel betrachten wir genau das mit den {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen; wir werden dann damit abschließen, wie man Ihren Videos Untertitel hinzufügt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textbezogene Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Video- und audio-spezifische Attribute wie controls und muted.</li>
          <li>Verwendung von <code>&lt;source&gt;</code>-Elementen, um verschiedene Video- oder Audioquellen bereitzustellen.</li>
          <li>Grundlagen der Verwendung von Textspuren wie Untertiteln.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Video und Audio im Web

Der erste Zustrom von Online-Videos und -Audio wurde durch proprietäre, Plugin-basierte Technologien wie [Flash](https://de.wikipedia.org/wiki/Adobe_Flash) und [Silverlight](https://de.wikipedia.org/wiki/Microsoft_Silverlight) möglich gemacht. Beide hatten Sicherheits- und Zugänglichkeitsprobleme und sind heute veraltet zugunsten nativer HTML-Lösungen mit den {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen und der Verfügbarkeit von {{Glossary("JavaScript", "JavaScript")}}-{{Glossary("API", "APIs")}} zur Steuerung dieser. Wir werden hier nicht auf JavaScript eingehen - nur auf die grundlegenden Grundlagen, die mit HTML erreicht werden können.

Wir werden Ihnen nicht beibringen, wie man Audio- und Videodateien produziert - das erfordert eine völlig andere Fähigkeit. Wir haben Ihnen [Beispiel-Audio- und -Videodateien sowie Beispielcode](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) zur Verfügung gestellt, falls Sie keine eigenen besorgen können.

> [!NOTE]
> Bevor Sie hier beginnen, sollten Sie auch wissen, dass es eine Reihe von OVPs (Online-Video-Anbietern) wie [YouTube](https://www.youtube.com/), [Dailymotion](https://www.dailymotion.com/) und [Vimeo](https://vimeo.com/) sowie Online-Audio-Anbietern wie [Soundcloud](https://soundcloud.com/) gibt. Solche Unternehmen bieten eine bequeme, einfache Möglichkeit, Videos zu hosten und zu konsumieren, sodass Sie sich nicht um den enormen Bandbreitenverbrauch sorgen müssen. OVPs bieten oft sogar vorgefertigten Code zum Einbetten von Video/Audio in Ihre Webseiten an; wenn Sie diesen Weg gehen, können Sie einige der Schwierigkeiten vermeiden, die wir in diesem Artikel besprechen. Wir werden diese Art von Dienst im nächsten Artikel etwas genauer besprechen.

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
  - : Auf die gleiche Weise wie beim {{htmlelement("img")}}-Element enthält das Attribut `src` (source) einen Pfad zu dem Video, das Sie einbetten möchten. Es funktioniert genau gleich.
- [`controls`](/de/docs/Web/HTML/Element/video#controls)
  - : Benutzer müssen in der Lage sein, die Wiedergabe von Video und Audio zu steuern (es ist besonders wichtig für Menschen, die [Epilepsie](https://de.wikipedia.org/wiki/Epilepsie#Epidemiologie) haben). Sie müssen entweder das `controls`-Attribut verwenden, um die eigene Steueroberfläche des Browsers zu integrieren, oder Ihre Oberfläche mit der entsprechenden [JavaScript-API](/de/docs/Web/API/HTMLMediaElement) erstellen. Zumindest muss die Oberfläche eine Möglichkeit zum Starten und Stoppen der Medien sowie zum Anpassen der Lautstärke enthalten.
- Der Absatz innerhalb der `<video>`-Tags
  - : Dies wird als **Fallback-Inhalt** bezeichnet — dieser wird angezeigt, wenn der Browser, der auf die Seite zugreift, das `<video>`-Element nicht unterstützt, sodass wir eine Rückfallebene für ältere Browser bereitstellen können. Dies kann alles sein, was Sie möchten; in diesem Fall haben wir einen direkten Link zur Videodatei bereitgestellt, damit der Benutzer sie dennoch irgendwie zugreifen kann, unabhängig davon, welchen Browser er verwendet.

Das eingebettete Video wird ungefähr so aussehen:

![Ein einfacher Videoplayer zeigt ein Video eines kleinen weißen Kaninchens](simple-video.png)

Sie können [das Beispiel hier live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) an).

## Verwendung mehrerer Quellformate zur Verbesserung der Kompatibilität

Es gibt ein Problem mit dem obigen Beispiel. Es ist möglich, dass das Video bei Ihnen nicht abgespielt wird, da verschiedene Browser unterschiedliche Video- (und Audio-) Formate unterstützen. Zum Glück gibt es Dinge, die Sie tun können, um zu verhindern, dass dies ein Problem wird.

### Inhalte einer Mediendatei

Zuerst gehen wir kurz auf die Terminologie ein. Formate wie MP3, MP4 und WebM werden als **[Containerformate](/de/docs/Web/Media/Guides/Formats/Containers)** bezeichnet. Sie definieren eine Struktur, in der die Audio- und/oder Videospuren gespeichert werden, aus denen das Medium besteht, sowie Metadaten, die das Medium, die verwendeten Codecs zum Kodieren seiner Kanäle und so weiter beschreiben.

Eine WebM-Datei mit einem Film, der eine Hauptvideospur und eine alternierende Kamerawinkels...

![Diagramm zur Veranschaulichung des Inhalts einer Mediendatei auf Track-Ebene.](containersandtracks.png)

Die Audio- und Videospuren innerhalb des Containers enthalten die Daten im entsprechenden Format für den Codec, der zur Kodierung dieses Mediums verwendet wird. Für Audiotracks werden andere Formate verwendet als für Videotracks. Jeder Audiotrack wird mit einem [Audio-Codec](/de/docs/Web/Media/Guides/Formats/Audio_codecs) kodiert, während Videotracks mit (wie Sie wahrscheinlich erraten haben) [einem Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) kodiert werden. Wie bereits erwähnt, unterstützen verschiedene Browser unterschiedliche Video- und Audioformate sowie unterschiedliche Containerformate (wie MP3, MP4 und WebM, die wiederum verschiedene Arten von Video und Audio enthalten können).

Zum Beispiel:

- Ein WebM-Container enthält typischerweise Vorbis- oder Opus-Audio mit VP8/VP9-Video. Dies wird in allen modernen Browsern unterstützt, obwohl ältere Versionen möglicherweise nicht funktionieren.
- Ein MP4-Container enthält oft AAC- oder MP3-Audio mit H.264-Video. Dies wird ebenfalls in allen modernen Browsern unterstützt.
- Der Ogg-Container tendiert dazu, Vorbis-Audio und Theora-Video zu verwenden. Dies wird am besten in Firefox und Chrome unterstützt, aber im Wesentlichen durch das qualitativ bessere WebM-Format überholt.

Es gibt einige Sonderfälle. Beispielsweise werden für einige Arten von Audio die Daten eines Codecs häufig ohne Container oder mit einem vereinfachten Container gespeichert. Ein solches Beispiel ist der FLAC-Codec, der am häufigsten in FLAC-Dateien gespeichert wird, die einfach rohe FLAC-Tracks sind.

Ein weiteres Beispiel ist die immer beliebte MP3-Datei. Eine „MP3-Datei“ ist eigentlich eine MPEG-1 Audio Layer III (MP3)-Audiospur, die in einem MPEG- oder MPEG-2-Container gespeichert ist. Das ist besonders interessant, da die meisten Browser zwar die Verwendung von MPEG-Medien in den {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elementen nicht unterstützen, sie aber MP3 aufgrund seiner Beliebtheit dennoch unterstützen können.

Ein Audioplayer wird tendenziell einen Audiotrack direkt abspielen, z.B. eine MP3- oder Ogg-Datei. Diese benötigen keine Container.

### Unterstützung von Mediendateien in Browsern

> [!NOTE]
> Mehrere beliebte Formate, wie MP3 und MP4/H.264, sind ausgezeichnet, aber durch Patente belastet; das heißt, es gibt Patente, die einen Teil oder die gesamte Technologie, auf der sie basieren, abdecken. In den Vereinigten Staaten wurden MP3 bis 2017 durch Patente abgedeckt, und H.264 wird mindestens bis 2027 durch Patente belastet.
>
> Wegen dieser Patente müssen Browser, die Unterstützung für diese Codecs implementieren möchten, typischerweise enorme Lizenzgebühren zahlen. Darüber hinaus ziehen es einige Personen vor, beschränkte Software zu vermeiden und nur offene Formate zu verwenden. Aufgrund dieser rechtlichen und bevorzugten Gründe stehen Webentwickler vor der Herausforderung, mehrere Formate zu unterstützen, um ihr gesamtes Publikum zu erreichen.

Die in dem vorherigen Abschnitt beschriebenen Codecs existieren, um Video und Audio in handhabbare Dateien zu komprimieren, da rohes Audio und Video beide äußerst groß sind. Jeder Webbrowser unterstützt eine Auswahl an **{{Glossary("Codec", "Codecs")}}**, wie Vorbis oder H.264, die benutzt werden, um das komprimierte Audio und Video in Binärdaten zu konvertieren und zurück. Jeder Codec bietet seine eigenen Vorteile und Nachteile, und jeder Container kann ebenfalls seine eigenen positiven und negativen Merkmale haben, die Ihre Entscheidungen beeinflussen, welche Sie verwenden möchten.

Die Dinge werden ein wenig komplizierter, da nicht nur jeder Browser eine andere Menge an Containerformaten unterstützt, sondern auch eine andere Auswahl an Codecs. Um die Wahrscheinlichkeit zu maximieren, dass Ihre Website oder App im Browser eines Benutzers funktioniert, müssen Sie möglicherweise jede von Ihnen verwendete Mediendatei in mehreren Formaten bereitstellen. Wenn Ihre Webseite und der Browser des Benutzers kein gemeinsames Medienformat haben, wird Ihr Medium nicht abgespielt.

Aufgrund der Komplexität, sicherzustellen, dass die Medien Ihrer App in jeder Kombination von Browsern, Plattformen und Geräten, die Sie erreichen möchten, angezeigt ...

...

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

Hier haben wir das `src`-Attribut aus dem eigentlichen {{HTMLElement("video")}}-Tag entfernt und stattdessen separate {{htmlelement("source")}}-Elemente eingefügt, die auf ihre eigenen Quellen verweisen. In diesem Fall wird der Browser die {{HTMLElement("source")}}-Elemente durchlaufen und das erste abspielen, das er mit dem Codec unterstützen kann. Das Einfügen von WebM- und MP4-Quellen sollte heutzutage ausreichen, um Ihr Video auf den meisten Plattformen und Browsern abzuspielen.

Jedes `<source>`-Element hat ebenfalls ein [`type`](/de/docs/Web/HTML/Element/source#type)-Attribut. Dies ist optional, aber es ist ratsam, es hinzuzufügen. Das `type`-Attribut enthält den {{Glossary("MIME_type", "MIME-Typ")}} der Datei, die von `<source>` spezifiziert wird, und Browser können das `type` sofort verwenden, um Videos zu überspringen, die sie nicht verstehen. Wenn `type` nicht enthalten ist, laden und versuchen Browser, jede Datei abzuspielen, bis sie eine finden, die funktioniert, was offensichtlich Zeit kostet und eine unnötige Verwendung von Ressourcen darstellt.

Weitere Informationen zur Auswahl der besten Container und Codecs sowie zur Bestimmung der richtigen MIME-Typen finden Sie in unserem [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

## Andere `<video>`-Funktionen

Es gibt eine Reihe weiterer Funktionen, die Sie bei der Anzeige eines HTML-Videos einbeziehen können. Schauen Sie sich unser nächstes Beispiel an:

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

![Ein Videoplayer zeigt vor dem Abspielen ein Posterbild an. Das Posterbild sagt HTML-Video-Beispiel, OMG hell yeah!](poster_screenshot_updated.png)

Zu den Funktionen gehören:

- [`width`](/de/docs/Web/HTML/Element/video#width) und [`height`](/de/docs/Web/HTML/Element/video#height)
  - : Sie können die Videogröße entweder mit diesen Attributen oder mit {{Glossary("CSS", "CSS")}} steuern. In beiden Fällen behalten Videos ihr natives Breite-Höhe-Verhältnis — bekannt als **Seitenverhältnis**. Wenn das Seitenverhältnis nicht beibehalten wird, füllt das Video den Platz horizontal aus, und der nicht ausgefüllte Platz wird standardmäßig mit einer festen Hintergrundfarbe gefüllt.
- [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)
  - : Lässt das Audio oder Video sofort abspielen, während der Rest der Seite geladen wird. Es wird geraten, keine automatisch abspielenden Videos (oder Audios) auf Ihren Seiten zu verwenden, da Benutzer sie als sehr störend empfinden können.
- [`loop`](/de/docs/Web/HTML/Element/video#loop)
  - : Lässt das Video (oder Audio) bei jedem Ende erneut abspielen. Auch das kann nervig sein, daher sollte es nur bei wirklicher Notwendigkeit verwendet werden.
- [`muted`](/de/docs/Web/HTML/Element/video#muted)
  - : Lässt die Medien standardmäßig ohne Klang abspielen.
- [`poster`](/de/docs/Web/HTML/Element/video#poster)
  - : Die URL eines Bildes, das angezeigt wird, bevor das Video abgespielt wird. Es ist gedacht, um für einen Vorschaubildschirm oder eine Werbeschaltfläche verwendet zu werden.
- [`preload`](/de/docs/Web/HTML/Element/video#preload)
  - : Wird zum Puffern großer Dateien verwendet; es kann einen der drei folgenden Werte annehmen:
    - `"none"` puffert die Datei nicht
    - `"auto"` puffert die Mediendatei
    - `"metadata"` puffert nur die Metadaten der Datei

Sie können das obige Beispiel [live bei GitHub ansehen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) an). Beachten Sie, dass wir das `autoplay`-Attribut in der Live-Version nicht enthalten haben — wenn das Video sofort nach dem Laden der Seite abgespielt wird, sehen Sie das Poster nicht!

## Das `<audio>`-Element

Das {{htmlelement("audio")}}-Element funktioniert genauso wie das {{htmlelement("video")}}-Element, mit ein paar kleinen Unterschieden, die unten aufgeführt sind. Ein typisches Beispiel könnte ungefähr so aussehen:

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

Dies produziert im Browser etwas wie das Folgende:

![Ein einfacher Audioplayer mit einem Abspielknopf, Timer, Lautstärkeregler und Fortschrittsbalken](audio-player.png)

> [!NOTE]
> Sie können [das Audio-Demobeispiel live ausführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) bei GitHub (siehe auch den [Quellcode des Audioplayers](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html)).

Dies nimmt weniger Platz ein als ein Videoplayer, da es keine visuelle Komponente gibt — Sie müssen nur Steuerelemente anzeigen, um das Audio abzuspielen. Andere Unterschiede zu HTML-Videos sind wie folgt:

- Das {{htmlelement("audio")}}-Element unterstützt nicht die `width`/`height`-Attribute — wiederum gibt es keine visuelle Komponente, der eine Breite oder Höhe zugeordnet werden könnte.
- Es unterstützt auch nicht das `poster`-Attribut — wiederum keine visuelle Komponente.

Abgesehen davon unterstützt `<audio>` alle gleichen Funktionen wie `<video>` — lesen Sie die obigen Abschnitte für weitere Informationen darüber.

## Anzeigen von Video-Textspuren

Nun werden wir ein etwas fortgeschritteneres Konzept besprechen, das wirklich nützlich zu wissen ist. Viele Menschen können oder wollen das Audio/Video, das sie im Internet finden, nicht hören, zumindest zu bestimmten Zeiten. Zum Beispiel:

- Viele Menschen haben auditive Beeinträchtigungen (wie Schwerhörigkeit oder Taubheit), somit können sie das Audio nicht klar hören, wenn überhaupt.
- Andere können das Audio möglicherweise nicht hören, weil sie sich in lauten Umgebungen befinden (wie einer überfüllten Bar, wenn ein Sportspiel gezeigt wird).
- Ebenso kann es in Umgebungen, in denen das Abspielen des Audios eine Ablenkung oder Störung wäre (wie in einer Bibliothek oder wenn der Partner versucht zu schlafen), sehr nützlich sein, Untertitel zu haben.
- Menschen, die die Sprache des Videos nicht sprechen, möchten möglicherweise eine Textabschrift oder sogar eine Übersetzung, um den Medieninhalt zu verstehen.

Wäre es nicht schön, diesen Menschen ein Transkript der gesprochenen Worte im Audio/Video zur Verfügung zu stellen? Dank HTML-Video können Sie genau das tun. Dazu verwenden wir das [WebVTT](/de/docs/Web/API/WebVTT_API)-Dateiformat und das {{htmlelement("track")}}-Element.

> [!NOTE]
> "Transkribieren" bedeutet "gesprochene Wörter als Text aufzuschreiben". Der resultierende Text ist ein "Transkript".

WebVTT ist ein Format zum Schreiben von Textdateien, die mehrere Textstrings sowie Metadaten enthalten, wie die Zeit im Video, zu der jeder Textstring angezeigt werden soll, und sogar begrenzte Styling-/Positionierungsinformationen. Diese Textstrings werden als **Cues** bezeichnet, und es gibt mehrere Arten von Cues, die für verschiedene Zwecke verwendet werden. Die gängigsten Cues sind:

- Untertitel
  - : Übersetzungen von fremdsprachigem Material, um Menschen, die die im Audio gesprochenen Worte nicht verstehen, zu helfen.
- Untertitel (Captions)
  - : Synchronisierte Transkriptionen von Dialogen oder Beschreibungen bedeutender Geräusche, um Menschen, die das Audio nicht hören können, zu zeigen, was passiert.
- Zeitgesteuerte Beschreibungen
  - : Text, der vom Medienplayer vorgelesen werden sollte, um wichtige visuelle Elemente für blinde oder anderweitig sehbehinderte Benutzer zu beschreiben.

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

Um dies zusammen mit dem HTML-Mediaplayer anzuzeigen, müssen Sie:

1. Es als `.vtt`-Datei an einer Stelle speichern, die der Server bereitstellen kann (siehe unten), zum Beispiel im gleichen Verzeichnis wie die HTML-Datei.
2. Verlinken Sie auf die `.vtt`-Datei mit dem {{htmlelement("track")}}-Element. `<track>` sollte in `<audio>` oder `<video>` platziert werden, aber nach allen `<source>`-Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Element/track#kind)-Attribut, um anzugeben, ob die Cues `subtitles`, `captions` oder `descriptions` sind. Verwenden Sie zudem [`srclang`](/de/docs/Web/HTML/Element/track#srclang), um dem Browser mitzuteilen, in welcher Sprache Sie die Untertitel geschrieben haben. Fügen Sie schließlich [`label`](/de/docs/Web/HTML/Element/track#label) hinzu, um Lesern bei der Suche nach der gesuchten Sprache zu helfen.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

Um dies auszuprobieren, müssen Sie die Dateien auf einem [lokalen HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) hosten. Im Browserausgang sehen Sie ein Video, das Untertitel anzeigt, in etwa so:

![Videoplayer mit Standardsteuerung wie Abspielen, Anhalten, Lautstärke und Untertiteln ein/aus. Das abgespielte Video zeigt eine Szene mit einem Mann, der eine speerartige Waffe hält, und eine Untertitelung lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für weitere Details, einschließlich wie man Labels hinzufügt, lesen Sie bitte [Hinzufügen von Untertiteln und Bildunterschriften zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können [das mit diesem Artikel verbundene Beispiel](https://iandevlin.github.io/mdn/video-player-with-captions/) auf GitHub finden, geschrieben von Ian Devlin (sehen Sie sich auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) an). Dieses Beispiel verwendet etwas JavaScript, um es Benutzern zu ermöglichen, zwischen verschiedenen Untertiteln zu wählen. Beachten Sie, dass Sie zum Einschalten der Untertitel die "CC"-Taste drücken und eine Option auswählen müssen — Englisch, Deutsch oder Spanisch.

> [!NOTE]
> Textspuren helfen Ihnen auch bei {{Glossary("SEO", "SEO")}}, da Suchmaschinen besonders auf Text angewiesen sind. Textspuren ermöglichen es Suchmaschinen sogar, direkt auf eine Stelle im Video zu verlinken.

## Aktives Lernen: Eigene Audio- und Videoeinbettung

Für dieses aktive Lernen möchten wir idealerweise, dass Sie in die Welt hinausgehen und einige eigene Videos und Audios aufnehmen — die meisten Telefone ermöglichen es heutzutage, sehr leicht Audio und Video aufzunehmen, und sofern Sie sie auf Ihren Computer übertragen können, können Sie sie verwenden. Möglicherweise müssen Sie einige Konvertierungen durchführen, um im Falle von Video eine WebM und MP4 und im Falle von Audio eine MP3 und Ogg zu erhalten, aber es gibt genug Programme, die es Ihnen ermöglichen, dies ohne allzu große Probleme zu tun, wie [Miro Video Converter](http://www.mirovideoconverter.com/) und [Audacity](https://sourceforge.net/projects/audacity/). Wir möchten, dass Sie es ausprobieren!

Wenn Sie in der Lage sind, irgendwelche Video- oder Audiodateien zu beschaffen, können Sie sich gerne an unseren [Beispiel-Audio- und -Videodateien](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) orientieren, um diese Übung durchzuführen. Sie können auch unseren Beispielcode als Referenz verwenden.

Wir möchten, dass Sie:

1. Speichern Sie Ihre Audio- und Videodateien in einem neuen Verzeichnis auf Ihrem Computer.
2. Erstellen Sie eine neue HTML-Datei im gleichen Verzeichnis, die Sie `index.html` nennen.
3. Fügen Sie {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente auf der Seite hinzu; lassen Sie sie die standardmäßigen Browsersteuerungen anzeigen.
4. Geben Sie beiden {{HTMLElement("source")}}-Elemente, damit Browser das Audioformat finden, das sie am besten unterstützen, und es laden. Diese sollten `type`-Attribute enthalten.
5. Geben Sie dem `<video>`-Element ein Poster, das angezeigt wird, bevor das Video abgespielt wird. Haben Sie Spaß beim Erstellen Ihrer eigenen Poster-Grafik.

Für einen zusätzlichen Bonus könnten Sie versuchen, sich über Textspuren zu informieren, und herausfinden, wie man einem Video einige Untertitel hinzufügt.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie die Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Multimedia und Einbetten](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio/Test_your_skills:_Multimedia_and_embedding).

## Zusammenfassung

Und das ist ein Wrap — wir hoffen, Sie hatten Spaß daran, mit Video und Audio in Webseiten zu experimentieren! Als nächstes stellen wir Ihnen eine Herausforderung, um Ihre Fähigkeiten mit HTML-Medien zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}
