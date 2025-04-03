---
title: HTML video und audio
short-title: Video und Audio
slug: Learn_web_development/Core/Structuring_content/HTML_video_and_audio
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}

Nun, da wir uns mit dem Hinzufügen von einfachen Bildern zu einer Webseite vertraut gemacht haben, ist der nächste Schritt, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel werden wir genau das mit den {{htmlelement("video")}} und {{htmlelement("audio")}}-Elementen tun; wir werden dann damit abschließen, zu betrachten, wie man Untertitel/Legenden zu Ihren Videos hinzufügt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegenden HTML-Syntax</a
        >. Textsemantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Video- und Audiospezifische Attribute wie Controls und Muted.</li>
          <li>Verwendung von <code>&lt;source&gt;</code>-Elementen zur Bereitstellung unterschiedlicher Video- oder Audioquellen.</li>
          <li>Die Grundlagen der Verwendung von Textspuren wie Untertitel und Legenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Video und Audio im Web

Der erste Zustrom von Online-Videos und -Audios wurde durch proprietäre, plugin-basierte Technologien wie [Flash](https://en.wikipedia.org/wiki/Adobe_Flash) und [Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight) ermöglicht. Beide hatten Sicherheits- und Zugänglichkeitsprobleme und sind mittlerweile zugunsten nativer HTML-Lösungen durch {{htmlelement("video")}} und {{htmlelement("audio")}}-Elemente obsolet geworden, ebenso wie die Verfügbarkeit von {{Glossary("JavaScript", "JavaScript")}}-{{Glossary("API", "APIs")}} zur Steuerung dieser. Wir werden hier nicht auf JavaScript eingehen – nur auf die grundlegenden Grundlagen, die mit HTML erreicht werden können.

Wir werden Ihnen nicht beibringen, wie Sie Audio- und Videodateien erstellen – dafür benötigen Sie ein völlig anderes Skillset. Wir haben Ihnen [Beispiel-Audio- und -Videodateien sowie Beispielcode](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) zur Verfügung gestellt, falls Sie keine eigenen haben.

> [!NOTE]
> Bevor Sie hier beginnen, sollten Sie auch wissen, dass es einige OVPs (Online-Video-Anbieter) wie [YouTube](https://www.youtube.com/), [Dailymotion](https://www.dailymotion.com/) und [Vimeo](https://vimeo.com/) sowie Online-Audio-Anbieter wie [Soundcloud](https://soundcloud.com/) gibt. Solche Unternehmen bieten eine bequeme, einfache Möglichkeit, Videos zu hosten und zu konsumieren, sodass Sie sich keine Gedanken über den enormen Bandbreitenverbrauch machen müssen. OVPs bieten sogar normalerweise fertigen Code für das Einbetten von Video-/Audioinhalten auf Ihren Webseiten an; wenn Sie diesen Weg gehen, können Sie einige der Schwierigkeiten vermeiden, die wir in diesem Artikel besprechen. Wir werden diese Art von Service in dem nächsten Artikel etwas ausführlicher behandeln.

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
  - : Genauso wie beim {{htmlelement("img")}}-Element enthält das `src` (Quelle)-Attribut einen Pfad zu dem Video, das Sie einbetten möchten. Es funktioniert auf genau die gleiche Weise.
- [`controls`](/de/docs/Web/HTML/Element/video#controls)
  - : Benutzer müssen in der Lage sein, die Wiedergabe von Videos und Audios zu steuern (es ist besonders kritisch für Menschen mit [Epilepsie](https://en.wikipedia.org/wiki/Epilepsy#Epidemiology)). Sie müssen entweder das `controls`-Attribut verwenden, um die eigene Steuerungsschnittstelle des Browsers einzuschließen, oder Ihre Schnittstelle mit der entsprechenden [JavaScript-API](/de/docs/Web/API/HTMLMediaElement) erstellen. Mindestens muss die Schnittstelle eine Möglichkeit beinhalten, das Medium zu starten und zu stoppen und die Lautstärke anzupassen.
- Der Absatz innerhalb der `<video>`-Tags
  - : Dies wird als **Fallback-Inhalt** bezeichnet — dies wird angezeigt, wenn der Browser, der auf die Seite zugreift, das `<video>`-Element nicht unterstützt. Dadurch können wir eine Fallback-Option für ältere Browser bereitstellen. Dies kann alles sein, was Sie möchten; in diesem Fall haben wir einen direkten Link zur Videodatei bereitgestellt, sodass der Benutzer zumindest auf irgendeine Weise darauf zugreifen kann, unabhängig davon, welchen Browser er verwendet.

Das eingebettete Video wird ungefähr folgendermaßen aussehen:

![Ein einfacher Videoplayer, der ein Video eines kleinen weißen Kaninchens zeigt](simple-video.png)

Sie können [das Beispiel live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) an.)

## Verwendung mehrerer Quellenformate zur Verbesserung der Kompatibilität

Es gibt ein Problem mit dem obigen Beispiel. Es ist möglich, dass das Video für Sie nicht abgespielt wird, weil verschiedene Browser unterschiedliche Video- (und Audio-)Formate unterstützen. Glücklicherweise gibt es Schritte, die Sie unternehmen können, um dies zu verhindern.

### Inhalt einer Mediendatei

Zuerst lassen Sie uns die Terminologie durchgehen. Formate wie OGG, WAV, MP4 und WebM werden als **[Containerformate](/de/docs/Web/Media/Guides/Formats/Containers)** bezeichnet. Sie definieren eine Struktur, in der die Audio- und/oder Videospuren gespeichert werden, die das Medium ausmachen, zusammen mit Metadaten, die das Medium beschreiben, welche Codecs zur Kodierung seiner Kanäle verwendet werden und so weiter.

Eine WebM-Datei, die einen Film enthält, der eine Hauptvideospur und eine alternative Winkelspur hat, plus Audio für sowohl Englisch als auch Spanisch, zusätzlich zu Audio für eine englische Kommentatorspur, kann in dem untenstehenden Diagramm konzeptualisiert werden. Ebenfalls enthalten sind Textspuren, die geschlossene Untertitel für den Spielfilm, spanische Untertitel für den Film und englische Untertitel für den Kommentar enthalten.

![Diagramm, das den Inhalt einer Mediendatei auf der Spur-Ebene konzeptualisiert.](containersandtracks.png)

Die Audio- und Videospuren im Container halten Daten im entsprechenden Format für den Codec, der verwendet wurde, um diese Medien zu kodieren. Verschiedene Formate werden für Audiospuren im Gegensatz zu Videospuren verwendet. Jede Audiospur wird mithilfe eines [Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs) kodiert, während Videospuren mit (wie Sie wahrscheinlich erraten haben) [einem Videocodec](/de/docs/Web/Media/Guides/Formats/Video_codecs) kodiert werden. Wie bereits erwähnt, unterstützen verschiedene Browser unterschiedliche Video- und Audioformate und verschiedene Containerformate (wie OGG, MP4 und WebM, die wiederum verschiedene Typen von Video und Audio enthalten können).

Beispielsweise:

- Ein WebM-Container verpackt typischerweise Vorbis- oder Opus-Audio mit VP8/VP9-Video. Dies wird in allen modernen Browsern unterstützt, obwohl ältere Versionen möglicherweise nicht funktionieren.
- Ein MP4-Container verpackt häufig AAC- oder MP3-Audio mit H.264-Video. Dies wird ebenfalls in allen modernen Browsern unterstützt.
- Der Ogg-Container tendiert dazu, Vorbis-Audio und Theora-Video zu verwenden. Dies wird am besten in Firefox und Chrome unterstützt, wurde aber im Wesentlichen durch das qualitativ bessere WebM-Format ersetzt.

Es gibt einige Sonderfälle. Zum Beispiel wird für einige Arten von Audio die Codierungsdaten eines Codecs oft ohne Container oder mit einem vereinfachten Container gespeichert. Ein solcher Fall ist der FLAC-Codec, der meistens in FLAC-Dateien gespeichert wird, die nur rohe FLAC-Tracks sind.

Ein weiteres Beispiel ist die allseits beliebte "MP3-Datei". Eine "MP3-Datei" ist eine Audiodatei, die mit MPEG-1 Audio Layer III-Kompression kodiert ist. Während sie Metadaten enthalten kann, ist sie nicht in einem separatem MPEG- oder MPEG-2-Container gekapselt. Ihre weitverbreitete Unterstützung in den {{htmlelement("audio")}} und {{htmlelement("video")}}-Elementen ist im Wesentlichen ein Zeugnis ihrer anhaltenden Beliebtheit.

Ein Audioplayer wird dazu tendieren, eine Audiospur direkt abzuspielen, z.B. eine MP3- oder Ogg-Datei. Diese benötigen keine Container.

### Unterstützung von Mediendateien in Browsern

> [!NOTE]
> Einige beliebte Formate, wie MP3 und MP4/H.264, sind hervorragend, sind jedoch durch Patente belastet; das heißt, es gibt Patente, die einige oder alle der Technologien abdecken, auf denen sie basieren. In den Vereinigten Staaten waren MP3s bis 2017 durch Patente geschützt, und H.264 ist mindestens bis 2027 durch Patente belastet.
>
> Aufgrund dieser Patente müssen Browser, die Unterstützung für diese Codecs implementieren wollen, typischerweise enorme Lizenzgebühren zahlen. Außerdem bevorzugen manche Personen bevorzugt unbeschränkte Software und verwenden nur offene Formate. Aufgrund dieser rechtlichen und bevorzugten Gründe sehen sich Webentwickler gezwungen, multiple Formate zu unterstützen, um ihr gesamtes Publikum zu erreichen.

Die im vorherigen Abschnitt beschriebenen Codecs existieren, um Video und Audio in handhabbare Dateien zu komprimieren, da rohe Audios und Videos beide äußerst groß sind. Jeder Webbrowser unterstützt eine Auswahl an **{{Glossary("Codec", "Codecs")}}**, wie Vorbis oder H.264, die verwendet werden, um das komprimierte Audio und Video in Binärdaten zu konvertieren und zurück. Jeder Codec bietet seine eigenen Vorteile und Nachteile, und jeder Container kann ebenfalls seine eigenen positiven und negativen Merkmale bieten, die Ihre Entscheidungen darüber beeinflussen, welchen Sie verwenden möchten.

Die Dinge werden etwas komplizierter, da nicht nur jeder Browser eine andere Reihe von Containerdateiformaten unterstützt, sondern auch eine unterschiedliche Auswahl an Codecs. Um die Wahrscheinlichkeit zu maximieren, dass Ihre Website oder App auf dem Browser eines Benutzers funktioniert, müssen Sie möglicherweise jede von Ihnen verwendete Mediendatei in mehreren Formaten bereitstellen. Wenn Ihre Website und der Browser des Benutzers kein gemeinsames Medienformat teilen, wird Ihr Medium nicht abgespielt.

Aufgrund der Komplexität, sicherzustellen, dass das Medium Ihrer App auf jeder Kombination von Browsern, Plattformen und Geräten, die Sie erreichen möchten, anzeigbar ist, kann die Auswahl der besten Kombination von Codecs und Containern eine komplizierte Aufgabe sein. Sehen Sie unter [Auswahl des richtigen Containers](/de/docs/Web/Media/Guides/Formats/Containers#choosing_the_right_container) nach, um Hilfe bei der Auswahl des für Ihre Bedürfnisse am besten geeigneten Containerdateiformats zu erhalten; ebenso finden Sie unter [Auswahl eines Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec) und [Auswahl eines Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs#choosing_an_audio_codec) Hilfe bei der Auswahl der ersten Mediencodecs, die Sie für Ihren Inhalt und Ihr Zielpublikum verwenden möchten.

Eine zusätzliche Sache, die Sie beachten sollten: Mobile Browser können zusätzliche Formate unterstützen, die von ihren Desktop-Entsprechungen nicht unterstützt werden, genauso wie sie möglicherweise nicht alle gleichen Formate unterstützen, die die Desktop-Version unterstützt. Darüber hinaus können sowohl Desktop- als auch mobile Browser so konzipiert sein, dass sie die Behandlung der Medienwiedergabe auslagern (entweder für alle Medien oder nur für spezifische Typen, die sie nicht intern verarbeiten können). Dies bedeutet, dass die Medienunterstützung teilweise davon abhängt, welche Software der Benutzer installiert hat.

Wie machen wir das also? Werfen Sie einen Blick auf das folgende [aktualisierte Beispiel](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) ([probieren Sie es hier live aus](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) auch):

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

Hier haben wir das `src`-Attribut aus dem tatsächlichen {{HTMLElement("video")}}-Tag herausgenommen und stattdessen separate {{htmlelement("source")}}-Elemente eingefügt, die auf ihre eigenen Quellen verweisen. In diesem Fall wird der Browser durch die {{HTMLElement("source")}}-Elemente gehen und die erste abspielen, die er unterstüt

zt. Die Einbeziehung von WebM- und MP4-Quellen sollte heutzutage ausreichen, um Ihr Video auf den meisten Plattformen und Browsern abzuspielen.

Jedes `<source>`-Element hat ebenfalls ein [`type`](/de/docs/Web/HTML/Element/source#type)-Attribut. Dies ist optional, es wird jedoch empfohlen, dass Sie es hinzufügen. Das `type`-Attribut enthält den {{Glossary("MIME_type", "MIME-Typ")}} der Datei, die durch `<source>` spezifiziert wird, und Browser können den `type` verwenden, um Videos sofort zu überspringen, die sie nicht verstehen. Wenn `type` nicht enthalten ist, laden Browser jede Datei und versuchen, sie abzuspielen, bis sie eine finden, die funktioniert, was natürlich Zeit benötigt und eine unnötige Ressourcennutzung darstellt.

Beziehen Sie sich auf unseren [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats), um Hilfe bei der Auswahl der besten Container und Codecs für Ihre Anforderungen zu erhalten, sowie um die richtigen MIME-Typen zu finden, die Sie für jedes angeben müssen.

## Andere `<video>`-Funktionen

Es gibt eine Reihe anderer Funktionen, die Sie beim Anzeigen eines HTML-Videos einschließen können. Werfen Sie einen Blick auf unser nächstes Beispiel:

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

![Ein Videoplayer, der ein Posterbild anzeigt, bevor er abgespielt wird. Das Posterbild zeigt die Aufschrift HTML-Video-Beispiel, OMG hell yeah!](poster_screenshot_updated.png)

Merkmale umfassen:

- [`width`](/de/docs/Web/HTML/Element/video#width) und [`height`](/de/docs/Web/HTML/Element/video#height)
  - : Sie können die Videogröße entweder mit diesen Attributen oder mit {{Glossary("CSS", "CSS")}} steuern. In beiden Fällen behalten Videos ihr natives Breite-Höhe-Verhältnis bei – bekannt als **Seitenverhältnis**. Wenn das Seitenverhältnis nicht durch die von Ihnen gesetzten Größen beibehalten wird, wächst das Video, um den horizontalen Raum zu füllen, und der nicht ausgefüllte Raum erhält standardmäßig einfach eine einfarbige Hintergrundfarbe.
- [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)
  - : Lässt das Audio oder Video sofort abspielen, während der Rest der Seite geladen wird. Es wird empfohlen, keine automatisch abspielenden Videos (oder Audios) auf Ihren Websites zu verwenden, da Benutzer dies wirklich als störend empfinden können.
- [`loop`](/de/docs/Web/HTML/Element/video#loop)
  - : Lässt das Video (oder Audio) wieder von vorne beginnen, wann immer es endet. Dies kann auch störend sein, daher verwenden Sie es nur wenn wirklich erforderlich.
- [`muted`](/de/docs/Web/HTML/Element/video#muted)
  - : Lässt das Medium standardmäßig mit ausgeschaltetem Ton abspielen.
- [`poster`](/de/docs/Web/HTML/Element/video#poster)
  - : Die URL eines Bildes, das angezeigt wird, bevor das Video abgespielt wird. Es soll als Splash-Screen oder Werbebildschirm verwendet werden.
- [`preload`](/de/docs/Web/HTML/Element/video#preload)

  - : Wird zum Puffern großer Dateien verwendet; es kann einen von drei Werten annehmen:

    - `"none"` puffert die Datei nicht
    - `"auto"` puffert die Mediendatei
    - `"metadata"` puffert nur die Metadaten der Datei

Sie können im obigen Beispiel bereitgestellt finden, um [live auf GitHub zu spielen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) (sehen Sie sich auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html)). Beachten Sie, dass wir das `autoplay`-Attribut nicht in der Live-Version enthalten haben – wenn das Video sofort beim Laden der Seite abspielt, bekommen Sie nicht die Poster zu sehen!

## Das `<audio>`-Element

Das {{htmlelement("audio")}}-Element funktioniert genauso wie das {{htmlelement("video")}}-Element, mit ein paar kleinen Unterschieden, die weiter unten beschrieben werden. Ein typisches Beispiel könnte so aussehen:

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

![Ein einfacher Audioplayer mit einem Wiedergabeknopf, Timer, Lautstärkeregler und Fortschrittsbalken](audio-player.png)

> [!NOTE]
> Sie können [das Audio-Demo live ausführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) auf GitHub (sehen Sie sich auch den [Audioplayer-Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html)) an.)

Es nimmt weniger Platz ein als ein Videoplayer, da es keine visuelle Komponente gibt – Sie müssen nur Steuerelemente anzeigen, um das Audio abzuspielen. Andere Unterschiede zu HTML-Video sind wie folgt:

- Das {{htmlelement("audio")}}-Element unterstützt die `width`/`height`-Attribute nicht – nochmals, es gibt keine visuelle Komponente, also gibt es nichts, dem eine Breite oder Höhe zugewiesen werden kann.
- Es unterstützt auch das `poster`-Attribut nicht – nochmals, keine visuelle Komponente.

Abgesehen davon unterstützt `<audio>` alle gleichen Funktionen wie `<video>` – überprüfen Sie die obigen Abschnitte für weitere Informationen darüber.

## Anzeigen von Videotextspuren

Nun werden wir ein etwas fortgeschritteneres Konzept diskutieren, das wirklich nützlich zu wissen ist. Viele Menschen können oder wollen den Audio-/Videoinhalt, den sie im Web finden, zumindest zu bestimmten Zeiten nicht hören. Zum Beispiel:

- Viele Menschen haben Hörbehinderungen (wie Schwerhörigkeit oder Taubheit) und können die Audios nicht klar hören, wenn überhaupt.
- Andere können die Audios nicht hören, weil sie sich in lauten Umgebungen befinden (wie eine überfüllte Bar, wenn ein Sportspiel gezeigt wird).
- Ebenso können in Umgebungen, in denen das Abspielen von Audio eine Ablenkung oder Störung wäre (wie in einer Bibliothek oder wenn ein Partner versucht zu schlafen), Untertitel sehr nützlich sein.
- Personen, die die Sprache des Videos nicht sprechen, möchten möglicherweise ein Texttranskript oder sogar eine Übersetzung, um ihnen zu helfen, den Medieninhalt zu verstehen.

Wäre es nicht schön, wenn Sie diesen Personen ein Transkript der in den Audios/Videos gesprochenen Worte zur Verfügung stellen könnten? Nun, dank HTML-Video können Sie das. Dazu verwenden wir das [WebVTT](/de/docs/Web/API/WebVTT_API)-Dateiformat und das {{htmlelement("track")}}-Element.

> [!NOTE]
> "Transkribieren" bedeutet "gesprochene Worte als Text zu schreiben". Der resultierende Text ist ein "Transkript."

WebVTT ist ein Format zum Schreiben von Textdateien, die mehrere Textzeichenfolgen zusammen mit Metadaten enthalten, wie die Zeit im Video, zu der jede Textzeichenfolge angezeigt werden soll, und sogar begrenzten Styling-/Positionierungsinformationen. Diese Textzeichenfolgen werden als **Cues** bezeichnet, und es gibt mehrere Arten von Cues, die für verschiedene Zwecke verwendet werden. Die häufigsten Cues sind:

- Untertitel
  - : Übersetzungen fremden Materials, für Personen, die die im Audio gesprochenen Worte nicht verstehen.
- Legenden
  - : Synchronisierte Transkriptionen von Dialogen oder Beschreibungen signifikanter Geräusche, damit Menschen, die das Audio nicht hören können, verstehen, was vor sich geht.
- Zeitgesteuerte Beschreibungen
  - : Text, der durch den Mediaplayer gesprochen werden sollte, um wichtige visuelle Eindrücke blinder oder visuell beeinträchtigter Benutzer zu beschreiben.

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
2. Verlinken Sie auf die .vtt-Datei mit dem {{htmlelement("track")}}-Element. `<track>` sollte innerhalb von `<audio>` oder `<video>` platziert werden, aber nach allen `<source>`-Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Element/track#kind)-Attribut, um anzugeben, ob die Cues `subtitles`, `captions` oder `descriptions` sind. Verwenden Sie zudem [`srclang`](/de/docs/Web/HTML/Element/track#srclang), um dem Browser mitzuteilen, in welcher Sprache die Untertitel geschrieben sind. Fügen Sie abschließend [`label`](/de/docs/Web/HTML/Element/track#label) hinzu, um Lesern zu helfen, die Sprache zu erkennen, nach der sie suchen.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

Um dies auszuprobieren, müssen Sie die Dateien auf einem [lokalen HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) hosten. Im Browser-Ausgabe erscheint ein Video mit angezeigten Untertiteln, ähnlich wie hier:

![Videoplayer mit Standard-Steuerelementen wie Wiedergabe, Stopp, Lautstärke und Untertiteln ein- und ausschalten. Das abspielende Video zeigt eine Szene eines Mannes, der eine speerartige Waffe hält, und eine Untertitelung, die "Esta hoja tiene pasado oscuro." liest.](video-player-with-captions.png)

Für weitere Details, einschließlich wie man Labels hinzufügt, lesen Sie bitte [Hinzufügen von Untertiteln und Legenden zu HTML-Videos](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können [das Beispiel finden](https://iandevlin.github.io/mdn/video-player-with-captions/), das zu diesem Artikel auf GitHub gehört, geschrieben von Ian Devlin (sehen Sie sich auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) an.) Dieses Beispiel verwendet etwas JavaScript, um Benutzern die Auswahl zwischen verschiedenen Untertiteln zu ermöglichen. Beachten Sie, dass um die Untertitel einzuschalten, Sie den "CC"-Knopf drücken müssen und eine Option auswählen – Englisch, Deutsch oder Español.

> [!NOTE]
> Textspuren helfen Ihnen auch mit {{Glossary("SEO", "SEO")}}, da Suchmaschinen besonders auf Text basieren. Textspuren ermöglichen es sogar Suchmaschinen, direkt auf einen Punkt in der Mitte des Videos zu verlinken.

## Aktives Lernen: Ihre eigenen Audio- und Videoinhalte einbetten

Für dieses aktive Lernen würden wir gerne, dass Sie in die Welt hinausgehen und einige Ihrer eigenen Video- und Audioinhalte aufnehmen – die meisten Telefone erlauben es heutzutage, Audio und Video sehr einfach aufzunehmen, und sofern Sie es auf Ihren Computer übertragen können, können Sie es verwenden. Möglicherweise müssen Sie einige Konvertierungen durchführen, um im Fall von Video mit einer WebM- und MP4-Datei und im Fall von Audio mit einer MP3- und Ogg-Datei zu enden, aber es gibt genug Programme da draußen, die es Ihnen ohne allzu große Probleme ermöglichen, dies zu tun, wie zum Beispiel [Miro Video Converter](http://www.mirovideoconverter.com/) und [Audacity](https://sourceforge.net/projects/audacity/). Wir würden uns freuen, wenn Sie es versuchen!

Wenn Sie keine eigenen Video- oder Audioquellen haben, können Sie auch gerne unsere [Beispiel-Audio- und -Videodateien](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) verwenden, um diese Übung durchzuführen. Sie können auch unseren Beispielcode zur Referenz verwenden.

Wir möchten, dass Sie:

1. Speichern Sie Ihre Audio- und Videodateien in einem neuen Verzeichnis auf Ihrem Computer.
2. Erstellen Sie eine neue HTML-Datei im gleichen Verzeichnis, genannt `index.html`.
3. Fügen Sie {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elemente auf der Seite hinzu; zeigen Sie die Standard-Browsersteuerelemente an.
4. Geben Sie beiden {{HTMLElement("source")}}-Elemente, sodass Browser das Audioformat finden, das sie am besten unterstützen, und es laden. Diese sollten [`type`](/de/docs/Web/HTML/Element/source#type)-Attribute enthalten.
5. Geben Sie dem `<video>`-Element ein Poster, das angezeigt wird, bevor das Video abgespielt wird. Haben Sie Spaß dabei, Ihre eigene Poster-Grafik zu erstellen.

Für ein zusätzliches Extra können Sie versuchen, Textspuren zu untersuchen und herausfinden, wie Sie einige Untertitel zu Ihrem Video hinzufügen können.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können weiterführende Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Multimedia und Einbettung](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio/Test_your_skills:_Multimedia_and_embedding).

## Zusammenfassung

Und das war's — wir hoffen, Sie hatten Spaß beim Umgang mit Video und Audio in Webseiten! Als Nächstes bieten wir Ihnen eine Herausforderung, um Ihre Fähigkeiten mit HTML-Medien zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}
