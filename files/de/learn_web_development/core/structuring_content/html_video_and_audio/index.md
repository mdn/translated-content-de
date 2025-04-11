---
title: HTML-Video und -Audio
short-title: Video und Audio
slug: Learn_web_development/Core/Structuring_content/HTML_video_and_audio
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}

Jetzt, da wir uns mit dem Hinzufügen einfacher Bilder zu einer Webseite vertraut gemacht haben, ist der nächste Schritt, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel werden wir uns damit beschäftigen, dies mit den {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen zu tun; wir werden dann damit abschließen, zu sehen, wie Sie Ihren Videos Untertitel hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Text-Level-Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Video- und Audiospezifische Attribute wie controls und muted.</li>
          <li>Verwendung von <code>&lt;source&gt;</code>-Elementen, um verschiedene Video- oder Audioquellen bereitzustellen.</li>
          <li>Die Grundlagen der Verwendung von Textspuren wie Untertiteln und Begleittexten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Video und Audio im Web

Der erste Zustrom von Online-Videos und -Audios wurde durch proprietäre pluginbasierte Technologien wie [Flash](https://de.wikipedia.org/wiki/Adobe_Flash) und [Silverlight](https://de.wikipedia.org/wiki/Microsoft_Silverlight) ermöglicht. Beide hatten Sicherheits- und Zugänglichkeitsprobleme und sind jetzt zugunsten nativer HTML-Lösungen wie den {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen und der Verfügbarkeit von {{Glossary("JavaScript", "JavaScript")}}-{{Glossary("API", "APIs")}} für deren Steuerung veraltet. Wir werden hier nicht auf JavaScript eingehen — nur die grundlegenden Grundlagen, die mit HTML erreicht werden können.

Wir werden Ihnen nicht beibringen, wie man Audio- und Videodateien produziert – das erfordert einen völlig anderen Skillset. Wir haben Ihnen [Beispiel-Audio- und -Videodateien sowie Beispielcode](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) für eigene Experimente bereitgestellt, falls Sie keine eigenen aufnehmen können.

> [!NOTE]
> Bevor Sie hier beginnen, sollten Sie auch wissen, dass es einige OVPs (Online-Videoanbieter) wie [YouTube](https://www.youtube.com/), [Dailymotion](https://www.dailymotion.com/) und [Vimeo](https://vimeo.com/) gibt, sowie Online-Audioanbieter wie [Soundcloud](https://soundcloud.com/). Solche Unternehmen bieten eine bequeme, einfache Möglichkeit, Videos zu hosten und zu konsumieren, sodass Sie sich keine Sorgen über den enormen Bandbreitenverbrauch machen müssen. OVPs bieten normalerweise sogar fertig gestellten Code zum Einbetten von Video/Audio auf Ihren Webseiten an; Wenn Sie diesen Weg wählen, können Sie einige der Schwierigkeiten, die wir in diesem Artikel besprechen, umgehen. Wir werden diese Art von Dienst im nächsten Artikel etwas mehr besprechen.

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

Die bemerkenswerten Merkmale sind:

- [`src`](/de/docs/Web/HTML/Reference/Elements/video#src)
  - : Genau wie beim {{htmlelement("img")}}-Element enthält das `src` (source) Attribut einen Pfad zu dem Video, das Sie einbetten möchten. Es funktioniert auf die genau gleiche Weise.
- [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls)
  - : Benutzer müssen in der Lage sein, die Wiedergabe von Video und Audio zu steuern (es ist besonders wichtig für Menschen, die an [Epilepsie](https://de.wikipedia.org/wiki/Epilepsie#Epidemiologie) leiden). Sie müssen entweder das `controls`-Attribut verwenden, um die eigene Steuerschnittstelle des Browsers einzuschließen, oder Ihre Schnittstelle mit der entsprechenden [JavaScript API](/de/docs/Web/API/HTMLMediaElement) erstellen. Mindestens muss die Schnittstelle eine Möglichkeit enthalten, das Medium zu starten und zu stoppen sowie die Lautstärke anzupassen.
- Der Paragraph innerhalb der `<video>`-Tags
  - : Dies wird als **Fallback-Inhalt** bezeichnet – er wird angezeigt, wenn der Browser, der auf die Seite zugreift, das `<video>`-Element nicht unterstützt, wodurch wir eine Rückfallebene für ältere Browser bereitstellen können. Dies kann alles sein, was Sie möchten; In diesem Fall haben wir einen direkten Link zur Videodatei bereitgestellt, sodass der Benutzer sie zumindest auf irgendeine Weise aufrufen kann, unabhängig davon, welchen Browser er verwendet.

Das eingebettete Video wird etwa so aussehen:

![Ein einfacher Videoplayer, der ein Video eines kleinen weißen Kaninchens zeigt](simple-video.png)

Sie können das [Beispiel live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/simple-video.html).)

## Verwendung mehrerer Quellenformate zur Verbesserung der Kompatibilität

Es gibt ein Problem mit dem obigen Beispiel. Es ist möglich, dass das Video für Sie nicht abgespielt wird, da verschiedene Browser unterschiedliche Video (und Audio) Formate unterstützen. Glücklicherweise gibt es Maßnahmen, die Sie ergreifen können, um das Auftreten dieses Problems zu verhindern.

### Inhalt einer Mediadatei

Zuerst gehen wir schnell durch die Terminologie. Formate wie OGG, WAV, MP4 und WebM werden als **[Containerformate](/de/docs/Web/Media/Guides/Formats/Containers)** bezeichnet. Sie definieren eine Struktur, in der die Audio- und/oder Videospuren, aus denen das Medium besteht, zusammen mit Metadaten gespeichert werden, die das Medium beschreiben, welche Codecs zur Kodierung seiner Kanäle verwendet werden und so weiter.

Eine WebM-Datei, die einen Film enthält, der eine Hauptvideospur und eine alternative Perspektivenspur hat, plus Audio für Englisch und Spanisch sowie Audio für einen englischen Kommentartrack, kann wie im untenstehenden Diagramm konzeptualisiert werden. Ebenfalls enthalten sind Textspuren mit geschlossenen Untertiteln für den Spielfilm, spanischen Untertiteln für den Film und englischen Untertiteln für den Kommentar.

![Diagramm, das den Inhalt einer Medien Datei auf Track-Ebene konzeptualisiert.](containersandtracks.png)

Die Audio- und Videospuren im Container enthalten Daten im entsprechenden Format für den Codec, der zur Kodierung dieses Mediums verwendet wird. Unterschiedliche Formate werden für Audiospuren gegenüber Videospuren verwendet. Jede Audiospur wird mit einem [Audiocodec](/de/docs/Web/Media/Guides/Formats/Audio_codecs) kodiert, während Videospuren mit (wie Sie wahrscheinlich vermutet haben) [einem Videocodec](/de/docs/Web/Media/Guides/Formats/Video_codecs) kodiert werden. Wie wir bereits besprochen haben, unterstützen verschiedene Browser unterschiedliche Video- und Audioformate sowie unterschiedliche Containerformate (wie OGG, MP4 und WebM, die wiederum unterschiedliche Arten von Videos und Audios enthalten können).

Zum Beispiel:

- Ein WebM-Container verpackt typischerweise Vorbis- oder Opus-Audio mit VP8/VP9-Video. Dies wird in allen modernen Browsern unterstützt, obwohl ältere Versionen möglicherweise nicht funktionieren.
- Ein MP4-Container enthält oft AAC- oder MP3-Audio mit H.264-Video. Dies wird auch in allen modernen Browsern unterstützt.
- Der Ogg-Container tendiert dazu, Vorbis-Audio und Theora-Video zu verwenden. Dies wird am besten in Firefox und Chrome unterstützt, ist aber im Wesentlichen durch das qualitativ bessere WebM-Format ersetzt worden.

Es gibt einige Sonderfälle. Zum Beispiel wird für einige Arten von Audio die Daten eines Codecs oft ohne einen Container oder mit einem vereinfachten Container gespeichert. Ein solches Beispiel ist der FLAC-Codec, der am häufigsten in FLAC-Dateien gespeichert wird, die nur rohe FLAC-Tracks sind.

Ein weiteres Beispiel ist die allseits beliebte "MP3-Datei". Eine "MP3-Datei" ist eine Audiodatei, die mit der Kompression MPEG-1 Audio Layer III kodiert wurde. Obwohl sie Metadaten enthalten kann, ist sie nicht in einem separaten MPEG- oder MPEG-2-Container eingebettet. Ihr weit verbreiteter Support in den {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elementen ist weitgehend ein Zeugnis ihrer anhaltenden Popularität.

Ein Audioplayer wird tendenziell eine Audiospur direkt abspielen, zum Beispiel eine MP3- oder Ogg-Datei. Diese benötigen keine Container.

### Unterstützung für Mediendateien in Browsern

> [!NOTE]
> Mehrere beliebte Formate wie MP3 und MP4/H.264 sind hervorragend, aber durch Patente belastet; das heißt, es gibt Patente, die einen Teil oder die gesamte Technologie abdecken, auf der sie basieren. In den Vereinigten Staaten wurden MP3s bis 2017 durch Patente abgedeckt, und H.264 ist durch Patente mindestens bis 2027 belastet.
>
> Aufgrund dieser Patente müssen Browser, die die Unterstützung für diese Codecs implementieren möchten, typischerweise immense Lizenzgebühren zahlen. Darüber hinaus ziehen es einige Menschen vor, eingeschränkte Software zu vermeiden und bevorzugen es, nur offene Formate zu verwenden. Aus diesen rechtlichen und präferenzbedingten Gründen sehen sich Webentwickler dazu gezwungen, mehrere Formate zu unterstützen, um ihre gesamte Zielgruppe zu erreichen.

Die im vorherigen Abschnitt beschriebenen Codecs dienen dazu, Video- und Audiodateien in handhabbare Dateien zu komprimieren, da sowohl rohes Audio als auch Video überaus groß sind. Jeder Webbrowser unterstützt eine Vielzahl von **{{Glossary("Codec", "Codecs")}}**, wie Vorbis oder H.264, die verwendet werden, um das komprimierte Audio und Video in Binärdaten umzuwandeln und umgekehrt. Jeder Codec bietet seine eigenen Vorteile und Nachteile, und jeder Container kann ebenfalls seine eigenen positiven und negativen Eigenschaften bieten, die Ihre Entscheidungen über welche zu verwenden beeinflussen.

Die Situation wird etwas komplizierter, da nicht nur jeder Browser eine unterschiedliche Menge an Containerdateiformaten unterstützt, sondern sie auch jeweils eine unterschiedliche Auswahl an Codecs unterstützen. Um die Wahrscheinlichkeit zu maximieren, dass Ihre Website oder App auf dem Browser eines Benutzers funktioniert, müssen Sie möglicherweise jede Mediendatei, die Sie verwenden, in mehreren Formaten bereitstellen. Wenn Ihre Website und der Browser des Benutzers kein gemeinsames Medienformat haben, wird Ihr Medium nicht abgespielt.

Aufgrund der Komplexität, sicherzustellen, dass die Medien Ihrer App auf jeder Kombination von Browsern, Plattformen und Geräten, die Sie erreichen möchten, anzeigbar sind, kann die Auswahl der besten Kombination von Codecs und Containern eine komplizierte Aufgabe sein. Siehe [Auswahl des richtigen Containers](/de/docs/Web/Media/Guides/Formats/Containers#choosing_the_right_container), um Hilfe bei der Auswahl des Containerdateiformats zu erhalten, das am besten zu Ihren Anforderungen passt; siehe auch [Auswahl eines Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec) und [Auswahl eines Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs#choosing_an_audio_codec), um Hilfe bei der Auswahl der ersten Mediencodecs zu erhalten, die Sie für Ihre Inhalte und Zielgruppe verwenden sollten.

Eine weitere Sache, die Sie im Hinterkopf behalten sollten: Mobile Browser können zusätzliche Formate unterstützen, die von ihren Desktop-Gegenstücken nicht unterstützt werden, genauso wie sie möglicherweise nicht alle gleichen Formate unterstützen, die die Desktop-Version tut. Darüber hinaus sind sowohl Desktop- als auch mobile Browser _möglicherweise_ so konzipiert, dass sie die Verarbeitung der Medienwiedergabe auslagern (entweder für alle Medien oder nur für spezifische Typen, die sie intern nicht verarbeiten können). Das bedeutet, dass die Medienunterstützung teilweise von der Software abhängt, die der Benutzer installiert hat.

Wie machen wir das also? Werfen Sie einen Blick auf das folgende [aktualisierte Beispiel](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) ([probieren Sie es hier live aus](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html), ebenfalls):

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

Hier haben wir das `src`-Attribut aus dem tatsächlichen {{HTMLElement("video")}}-Tag entfernt und stattdessen separate {{htmlelement("source")}}-Elemente eingefügt, die auf ihre eigenen Quellen verweisen. In diesem Fall wird der Browser die {{HTMLElement("source")}}-Elemente durchgehen und das erste abspielen, das er unterstützende Codecs für hat. Das Hinzufügen von WebM- und MP4-Quellen sollte heutzutage ausreichen, um Ihr Video auf den meisten Plattformen und Browsern abzuspielen.

Jedes `<source>`-Element besitzt auch ein [`type`](/de/docs/Web/HTML/Reference/Elements/source#type)-Attribut. Dies ist optional, es wird jedoch empfohlen, es einzuschließen. Das `type`-Attribut enthält den {{Glossary("MIME_type", "MIME-Typ")}} der Datei, die durch `<source>` angegeben wird, und Browser können das `type` verwenden, um Videos, die sie nicht verstehen, sofort zu überspringen. Wenn `type` nicht enthalten ist, werden die Browser jede Datei laden und versuchen abzuspielen, bis sie eine finden, die funktioniert, was offensichtlich Zeit kostet und eine unnötige Nutzung von Ressourcen darstellt.

Wenden Sie sich an unseren [Leitfaden zu Medientypen und Formaten](/de/docs/Web/Media/Guides/Formats), um Hilfe bei der Auswahl der besten Container und Codecs für Ihre Bedürfnisse zu erhalten, sowie um die richtigen MIME-Typen zu überprüfen, die Sie für jede anzugeben sollen.

## Andere `<video>`-Merkmale

Es gibt eine Reihe anderer Funktionen, die Sie beim Anzeigen eines HTML-Videos einfügen können. Werfen Sie einen Blick auf unser nächstes Beispiel:

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

![Ein Videoplayer, der ein Posterbild anzeigt, bevor er das Video abspielt. Das Posterbild zeigt die Aufschrift HTML-Video Beispiel, OMG ja doch!](poster_screenshot_updated.png)

Merkmale umfassen:

- [`width`](/de/docs/Web/HTML/Reference/Elements/video#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/video#height)
  - : Sie können die Videogröße entweder mit diesen Attributen oder mit {{Glossary("CSS", "CSS")}} steuern. In beiden Fällen behalten Videos ihr natives Breite-Höhen-Verhältnis bei — bekannt als **Seitenverhältnis**. Wenn das Seitenverhältnis durch die von Ihnen festgelegten Größen nicht beibehalten wird, wird das Video horizontal erweitert, um den Raum auszufüllen, und der nicht gefüllte Raum wird standardmäßig einfach mit einer einfarbigen Hintergrundfarbe versehen.
- [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay)
  - : Lädt das Audio oder Video sofort während des restlichen Ladens der Seite abspielen. Sie werden ausdrücklich gewarnt, keine automatisch ablaufenden Videos (oder Audios) auf Ihren Websites zu verwenden, da Benutzer dies als extrem störend empfinden können.
- [`loop`](/de/docs/Web/HTML/Reference/Elements/video#loop)
  - : Lässt das Video (oder Audio) erneut abspielen, sobald es beendet ist. Dies kann auch nervig sein, nutzen Sie es daher nur, wenn es wirklich nötig ist.
- [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted)
  - : Bewirkt, dass die Medien standardmäßig ohne Ton abgespielt werden.
- [`poster`](/de/docs/Web/HTML/Reference/Elements/video#poster)
  - : Die URL eines Bildes, das angezeigt wird, bevor das Video abgespielt wird. Es ist beabsichtigt, als Startbildschirm oder Werbebildschirm verwendet zu werden.
- [`preload`](/de/docs/Web/HTML/Reference/Elements/video#preload)

  - : Wird für das Puffern großer Dateien verwendet; es kann einen von drei Werten annehmen:

    - `"none"` puffert die Datei nicht
    - `"auto"` puffert die Mediendatei
    - `"metadata"` puffert nur die Metadaten der Datei

Sie finden das obige Beispiel [zum Live-Abspielen auf GitHub](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html).) Beachten Sie, dass wir im Live-Beispiel das `autoplay`-Attribut nicht eingeschlossen haben — wenn das Video sofort nach dem Laden der Seite abgespielt wird, sehen Sie das Posterbild nicht!

## Das `<audio>`-Element

Das {{htmlelement("audio")}}-Element funktioniert genauso wie das {{htmlelement("video")}}-Element, mit ein paar kleinen Unterschieden, wie unten beschrieben. Ein typisches Beispiel könnte so aussehen:

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

Dieses erzeugt im Browser etwa Folgendes:

![Ein einfacher Audioplayer mit einer Wiedergabeschaltfläche, einem Timer, einer Lautstärkeregelung und einem Fortschrittsbalken](audio-player.png)

> [!NOTE]
> Sie können die [Audio-Demo live ausführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) auf GitHub (sehen Sie auch den [Audio-Player-Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html).)

Dieser nimmt weniger Platz ein als ein Videoplayer, da es keine visuelle Komponente gibt — Sie müssen lediglich Steuerungen anzeigen, um das Audio abzuspielen. Andere Unterschiede zu HTML-Video sind die folgenden:

- Das {{htmlelement("audio")}}-Element unterstützt nicht die Attribute `width`/`height` – wieder gibt es keine visuelle Komponente, der Breite oder Höhe zugewiesen werden könnte.
- Es unterstützt auch nicht das `poster`-Attribut – wieder keine visuelle Komponente.

Abgesehen davon unterstützt `<audio>` alle gleichen Funktionen wie `<video>` – überprüfen Sie die obigen Abschnitte für weitere Informationen zu diesen.

## Anzeigen von Videotextspuren

Nun werden wir ein etwas fortgeschritteneres Konzept besprechen, das wirklich nützlich zu wissen ist. Viele Menschen können oder wollen den Audio/Video-Inhalt, den sie im Web finden, nicht hören, zumindest zu bestimmten Zeiten. Zum Beispiel:

- Viele Menschen haben Hörbehinderungen (wie Hörverlust oder Taubheit), sodass sie das Audio nicht klar hören können, wenn überhaupt.
- Andere können das Audio möglicherweise nicht hören, weil sie sich in lauten Umgebungen befinden (wie einer belebten Bar, wenn ein Sportspiel gezeigt wird).
- Ebenso kann das Abspielen von Audio in Umgebungen, in denen das Hören von Audio ablenkend oder störend wäre (wie in einer Bibliothek oder wenn ein Partner schlafen versucht), sehr nützlich sein.
- Menschen, die die Sprache des Videos nicht sprechen, möchten möglicherweise ein Transkript des Textes oder sogar eine Übersetzung, um den Medieninhalt zu verstehen.

Wäre es nicht schön, wenn Sie diesen Menschen ein Transkript der im Audio/Video gesprochenen Wörter zur Verfügung stellen könnten? Nun, dank HTML-Video können Sie das tun. Dafür verwenden wir das [WebVTT](/de/docs/Web/API/WebVTT_API)-Dateiformat und das {{htmlelement("track")}}-Element.

> [!NOTE]
> "Transkribieren" bedeutet "gesprochene Wörter als Text niederzuschreiben". Der resultierende Text ist ein "Transkript".

WebVTT ist ein Format zum Schreiben von Textdateien, das mehrere Textzeichenfolgen zusammen mit Metadaten enthält, wie zum Beispiel die Zeit im Video, zu der jede Textzeichenfolge angezeigt werden sollte, und sogar begrenzte Stil- und Positionierungsinformationen. Diese Textzeichenfolgen werden **Cues** genannt, und es gibt verschiedene Arten von Cues, die für unterschiedliche Zwecke verwendet werden. Die häufigsten Cues sind:

- Untertitel (subtitles)
  - : Übersetzungen von fremdsprachigem Material, für Menschen, die die im Audio gesprochenen Wörter nicht verstehen.
- Begleittexte (captions)
  - : Synchronisierte Abschriften von Dialogen oder Beschreibungen bedeutender Geräusche, die es Menschen, die das Audio nicht hören können, ermöglichen, zu verstehen, was vor sich geht.
- Zeitbeschreibungen (timed descriptions)
  - : Text, der von dem Mediaplayer gesprochen werden soll, um wichtige visuelle Informationen für blinde oder anderweitig sehbehinderte Benutzer zu beschreiben.

Eine typische WebVTT-Datei sieht möglicherweise so aus:

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

1. Sie als `.vtt`-Datei an einem Ort speichern, den der Server bedienen kann (siehe unten), zum Beispiel im gleichen Verzeichnis wie die HTML-Datei.
2. Mit dem {{htmlelement("track")}}-Element auf die `.vtt`-Datei verlinken. `<track>` sollte innerhalb von `<audio>` oder `<video>` platziert werden, jedoch nach allen `<source>`-Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind)-Attribut, um anzugeben, ob die Cues `subtitles`, `captions` oder `descriptions` sind. Verwenden Sie außerdem [`srclang`](/de/docs/Web/HTML/Reference/Elements/track#srclang), um dem Browser mitzuteilen, in welcher Sprache Sie die Untertitel geschrieben haben. Schließlich fügen Sie [`label`](/de/docs/Web/HTML/Reference/Elements/track#label) hinzu, um den Lesern zu helfen, die gesuchte Sprache zu identifizieren.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

Um dies auszuprobieren, müssen Sie die Dateien auf einem [lokalen HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) hosten. In der Browserausgabe sehen Sie ein Video, das Untertitel anzeigt, ähnlich wie dieses:

![Videoplayer mit Standard-Steuerelementen wie Abspielen, Stoppen, Lautstärke und Untertitel ein- und ausschalten. Das abgespielte Video zeigt eine Szene eines Mannes mit einer speerähnlichen Waffe, und ein Untertitel lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Weitere Details, einschließlich der Möglichkeit zum Hinzufügen von Labels, finden Sie unter [Hinzufügen von Untertiteln und Begleittexten zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können das [Beispiel auf GitHub](https://iandevlin.github.io/mdn/video-player-with-captions/) finden, das zu diesem Artikel gehört, geschrieben von Ian Devlin (siehe auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions).) Dieses Beispiel verwendet ein wenig JavaScript, um Benutzern die Auswahl zwischen verschiedenen Untertiteln zu ermöglichen. Beachten Sie, dass Sie zur Aktivierung der Untertitel auf die "CC"-Schaltfläche klicken und eine Option auswählen müssen — Englisch, Deutsch oder Spanisch.

> [!NOTE]
> Textspuren helfen Ihnen auch bei der {{Glossary("SEO", "SEO")}}, da Suchmaschinen besonders von Text profitieren. Textspuren ermöglichen es Suchmaschinen sogar, direkt auf eine Stelle im Video zu verlinken.

## Aktives Lernen: Einbetten eigener Audios und Videos

Für dieses aktive Lernen würden wir uns freuen, wenn Sie in die Welt hinausgehen und einige Ihrer eigenen Videos und Audios aufnehmen — die meisten Telefone ermöglichen heutzutage leicht die Aufnahme von Audio und Video und, vorausgesetzt Sie können es auf Ihren Computer übertragen, können Sie es verwenden. Möglicherweise müssen Sie einige Konvertierungsarbeiten vornehmen, um im Falle von Videos eine WebM- und eine MP4-Datei, im Falle von Audios eine MP3- und eine Ogg-Datei zu erhalten, aber es gibt genügend Programme, die Ihnen dies erleichtern, ohne viel Mühe, wie [Miro Video Converter](http://www.mirovideoconverter.com/) und [Audacity](https://sourceforge.net/projects/audacity/). Wir würden uns freuen, wenn Sie es versuchen!

Wenn es Ihnen nicht möglich ist, eigene Videos oder Audios zu finden, können Sie gerne unsere [Beispiel-Audio- und Videodateien](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) verwenden, um diese Übung durchzuführen. Sie können auch unseren Beispielcode als Referenz verwenden.

Wir möchten, dass Sie:

1. Ihre Audio- und Videodateien in einem neuen Verzeichnis auf Ihrem Computer speichern.
2. Eine neue HTML-Datei im gleichen Verzeichnis erstellen, mit dem Namen `index.html`.
3. {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente auf der Seite hinzufügen; lassen Sie sie die Standard-Browsersteuerung anzeigen.
4. Beiden {{HTMLElement("source")}}-Elemente geben, so dass Browser das am besten unterstützte Audioformat finden und laden. Diese sollten [`type`](/de/docs/Web/HTML/Reference/Elements/source#type)-Attribute enthalten.
5. Dem `<video>`-Element ein Poster geben, das angezeigt wird, bevor das Video gestartet wird. Haben Sie Spaß, Ihr eigenes Poster-Grafik zu erstellen.

Für ein zusätzliches Bonus könnten Sie versuchen, sich über Textspuren zu informieren und herauszufinden, wie man einem Video Untertitel hinzufügt.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weiterführende Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Multimedia und Einbettung](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio/Test_your_skills:_Multimedia_and_embedding).

## Zusammenfassung

Das wäre es — wir hoffen, Sie hatten Spaß beim Spielen mit Video und Audio auf Webseiten! Als Nächstes präsentieren wir Ihnen eine Herausforderung, um Ihre Fähigkeiten mit HTML-Medien zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}
