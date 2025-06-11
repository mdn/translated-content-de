---
title: HTML-Video und -Audio
short-title: Video und Audio
slug: Learn_web_development/Core/Structuring_content/HTML_video_and_audio
l10n:
  sourceCommit: a53950c7d4faad58184e06f0da370e685742a695
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}

Nachdem wir nun vertraut mit dem Hinzufügen einfacher Bilder zu einer Webseite sind, ist der nächste Schritt, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel werden wir uns damit beschäftigen, wie genau das mit den {{htmlelement("video")}} und {{htmlelement("audio")}} Elementen funktioniert; wir werden dann abschließend betrachten, wie man Untertitel zu Ihren Videos hinzufügt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > abgedeckt sind. Textbasierte Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Verwenden von <code>&lt;source&gt;</code> Elementen, um verschiedene Video- oder Audioquellen bereitzustellen.</li>
          <li>Die Grundlagen der Verwendung von Textspuren wie Untertiteln.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Video und Audio im Web

Der erste Zustrom von Online-Videos und -Audio wurde durch proprietäre Plugin-basierte Technologien wie [Flash](https://en.wikipedia.org/wiki/Adobe_Flash) und [Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight) ermöglicht. Beide hatten Sicherheits- und Zugänglichkeitsprobleme und sind jetzt veraltet zugunsten nativer HTML-Lösungen mit den {{htmlelement("video")}} und {{htmlelement("audio")}} Elementen sowie der Verfügbarkeit von {{Glossary("JavaScript", "JavaScript")}} {{Glossary("API", "APIs")}} zur Steuerung derselben. Wir werden hier nicht auf JavaScript eingehen — nur auf die grundlegenden Grundlagen, die mit HTML erreicht werden können.

Wir werden Ihnen nicht beibringen, wie man Audio- und Videodateien produziert — das erfordert einen komplett anderen Fähigkeitenkatalog. Wir haben Ihnen [Beispielaudio- und videodateien und Beispielcode](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) zur Verfügung gestellt, um damit selbst zu experimentieren, falls Sie keine eigenen beschaffen können.

> [!NOTE]
> Bevor Sie hier beginnen, sollten Sie auch wissen, dass es eine ganze Reihe von OVPs (Online-Video-Anbietern) wie [YouTube](https://www.youtube.com/), [Dailymotion](https://www.dailymotion.com/) und [Vimeo](https://vimeo.com/), sowie Online-Audio-Anbieter wie [Soundcloud](https://soundcloud.com/) gibt. Solche Unternehmen bieten eine bequeme und einfache Möglichkeit, Videos zu hosten und zu konsumieren, sodass Sie sich nicht um den enormen Bandbreitenverbrauch kümmern müssen. OVPs bieten in der Regel auch fertigen Code zum Einbetten von Videos/Audio auf Ihren Webseiten an; wenn Sie diesen Weg nutzen, können Sie einige der Schwierigkeiten, die wir in diesem Artikel erörtern, vermeiden. Wir werden diese Art von Dienst im nächsten Artikel etwas genauer besprechen.

## Das `<video>`-Element

Das {{htmlelement("video")}} Element ermöglicht es Ihnen, ein Video sehr einfach einzubetten. Ein wirklich einfaches Beispiel sieht so aus:

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
  - : Auf die gleiche Weise wie beim {{htmlelement("img")}} Element enthält das `src` (Quell-)Attribut einen Pfad zu dem Video, das Sie einbetten möchten. Es funktioniert exakt auf die gleiche Weise.
- [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls)
  - : Benutzer müssen in der Lage sein, die Video- und Audiowiedergabe zu steuern (es ist besonders wichtig für Menschen mit [Epilepsie](https://en.wikipedia.org/wiki/Epilepsy#Epidemiology).) Sie müssen entweder das `controls`-Attribut verwenden, um die eigene Steuerungsoberfläche des Browsers einzubinden oder Ihre Schnittstelle mithilfe der entsprechenden [JavaScript-API](/de/docs/Web/API/HTMLMediaElement) erstellen. Mindestens muss die Oberfläche eine Möglichkeit bieten, Medien zu starten und zu stoppen und die Lautstärke anzupassen.
- Der Absatz innerhalb der `<video>` Tags
  - : Dies wird als **Fallback-Inhalt** bezeichnet — er wird angezeigt, wenn der Browser, der die Seite aufruft, das `<video>` Element nicht unterstützt, sodass wir eine Rückfalllösung für ältere Browser bereitstellen können. Das kann alles Mögliche sein; in diesem Fall haben wir einen direkten Link zur Videodatei bereitgestellt, sodass der Benutzer zumindest irgendwie darauf zugreifen kann, unabhängig davon, welchen Browser er verwendet.

Das eingebettete Video sieht so aus:

![Ein einfacher Videoplayer, der ein Video eines kleinen weißen Kaninchens zeigt](simple-video.png)

Sie können das [Beispiel hier live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/simple-video.html).)

## Verwendung mehrerer Quellformate zur Verbesserung der Kompatibilität

Es gibt ein Problem mit dem obigen Beispiel. Es ist möglich, dass das Video bei Ihnen nicht abgespielt wird, da unterschiedliche Browser unterschiedliche Video- (und Audio-) Formate unterstützen. Glücklicherweise gibt es Maßnahmen, die Sie ergreifen können, um dies zu verhindern.

### Inhalte einer Mediendatei

Lassen Sie uns zunächst kurz die Terminologie durchgehen. Formate wie OGG, WAV, MP4 und WebM werden als **[Containerformate](/de/docs/Web/Media/Guides/Formats/Containers)** bezeichnet. Sie definieren eine Struktur, in der die Audio- und/oder Videospuren, aus denen das Medium besteht, gespeichert werden, zusammen mit Metadaten, die das Medium beschreiben, welche Codecs zur Codierung seiner Kanäle verwendet werden, und so weiter.

Eine WebM-Datei, die einen Film enthält, der eine Hauptvideo-Spur sowie eine alternative Kamerawinkel-Spur, zudem Audio in sowohl Englisch als auch Spanisch und zusätzliche englische Kommentarton-Spuren aufweist, kann wie in der nachstehenden Abbildung konzipiert werden. Ebenfalls enthalten sind Textspuren, die geschlossene Untertitel für den Film, spanische Untertitel für den Film und englische Untertitel für die Kommentare enthalten.

![Diagramm zur Veranschaulichung des Inhalts einer Mediendatei auf Track-Ebene.](containersandtracks.png)

Die Audio- und Videotracks innerhalb des Containers enthalten Daten im entsprechenden Format für den Codec, der zur Kodierung dieses Mediums verwendet wurde. Für Audiotracks werden andere Formate verwendet als für Videotracks. Jeder Audiotrack wird unter Verwendung eines [Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs) kodiert, während Videotracks (wie Sie wahrscheinlich schon erraten haben) mit [einem Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) kodiert werden. Wie wir bereits besprochen haben, unterstützen verschiedene Browser verschiedene Video- und Audioformate sowie unterschiedliche Containerformate (wie OGG, MP4 und WebM, die wiederum unterschiedliche Typen von Video- und Audio enthalten können).

Zum Beispiel:

- Ein WebM-Container verpackt typischerweise Vorbis- oder Opus-Audio mit VP8/VP9-Video. Dies wird in allen modernen Browsern unterstützt, obwohl ältere Versionen möglicherweise nicht funktionieren.
- Ein MP4-Container verpackt häufig AAC- oder MP3-Audio mit H.264-Video. Auch dies wird in allen modernen Browsern unterstützt.
- Der Ogg-Container tendiert dazu, Vorbis-Audio und Theora-Video zu verwenden. Dies wird am besten in Firefox und Chrome unterstützt, wurde aber im Grunde genommen durch das qualitativ bessere WebM-Format abgelöst.

Es gibt einige Sonderfälle. Zum Beispiel wird bei einigen Audio-Typen oft die Daten eines Codecs ohne Container oder mit einem vereinfachten Container gespeichert. Ein Beispiel ist der FLAC-Codec, der am häufigsten in FLAC-Dateien gespeichert wird, die einfach rohe FLAC-Spuren sind.

Ein weiteres Beispiel ist die allseits beliebte "MP3-Datei". Eine "MP3-Datei" ist eine Audiodatei, die mit der MPEG-1 Audio Layer III-Komprimierung codiert wurde. Obwohl sie Metadaten enthalten kann, ist sie nicht in einem separaten MPEG- oder MPEG-2-Container eingeschlossen. Ihre weitreichende Unterstützung in den {{htmlelement("audio")}} und {{htmlelement("video")}} Elementen spricht für ihre anhaltende Popularität.

Ein Audioplayer wird dazu neigen, eine Audiospur direkt abzuspielen, z.B. eine MP3- oder Ogg-Datei. Diese benötigen keine Container.

### Unterstützung von Mediendateien in Browsern

> [!NOTE]
> Einige weitverbreitete Formate, wie MP3 und MP4/H.264 sind hervorragend, aber durch Patente belastet; das heißt, es gibt Patente, die einen Teil oder die gesamte Technologie abdecken, auf denen sie basieren. In den Vereinigten Staaten waren MP3 bis 2017 durch Patente abgedeckt, und H.264 ist bis mindestens 2027 durch Patente geschützt.
>
> Aufgrund dieser Patente müssen Browser, die Unterstützung für diese Codecs implementieren möchten, immer noch Lizenzgebühren zahlen. Darüber hinaus ziehen einige Leute es vor, eingeschränkte Software zu vermeiden und bevorzugen die Verwendung offener Formate. Aufgrund dieser rechtlichen und präferenziellen Gründe finden sich Web-Entwickler in der Lage, mehrere Formate unterstützen zu müssen, um ein Videoerlebnis für ihr gesamtes Publikum zu bieten.

Die in der vorhergehenden Beschreibung behandelten Codecs existieren, um Video und Audio in handhabbare Dateien zu komprimieren, da rohe Audio- und Videodaten beide extrem groß sind. Jeder Webbrowser unterstützt eine Auswahl an **{{Glossary("Codec", "Codecs")}}**, wie Vorbis oder H.264, die zur Umwandlung des komprimierten Audio und Video in Binärdaten und zurück genutzt werden. Jeder Codec bietet seine eigenen Vorteile und Nachteile und jeder Container kann auch seine eigenen positiven und negativen Eigenschaften bieten, die sich auf Ihre Entscheidungen auswirken können, welche Sie verwenden.

Die Situation wird etwas komplizierter, da jeder Browser nicht nur einen anderen Satz an Containerdateiformaten unterstützt, sondern auch eine andere Auswahl an Codecs. Um die Wahrscheinlichkeit zu maximieren, dass Ihre Website oder App in einem Browser eines Benutzers funktioniert, müssen Sie möglicherweise jede von Ihnen verwendete Mediendatei in mehreren Formaten bereitstellen. Wenn Ihre Website und der Browser des Benutzers kein gemeinsames Medienformat Unterstützung bieten, werden Ihre Medien nicht abgespielt.

Aufgrund der Komplexität, Ihre App-Medien auf jedem Kombination von Browsern, Plattformen und Geräten, die Sie erreichen möchten, abspielbar zu machen, kann die Wahl der besten Kombination aus Codecs und Container eine komplizierte Aufgabe sein. Sehen Sie sich [Die richtige Auswahl eines Containers](/de/docs/Web/Media/Guides/Formats/Containers#choosing_the_right_container) an, um Hilfe bei der Auswahl des am besten geeigneten Container-Dateiformats für Ihre Bedürfnisse zu erhalten, ähnlich die Auswahl eines [Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec) und [Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs#choosing_an_audio_codec) für Hilfe bei der Auswahl der ersten Mediencodecs, die Sie für Ihre Inhalte und Ihr Zielpublikum verwenden möchten.

Ein weiteres zu beachtendes Detail: Mobile Browser können zusätzliche Formate unterstützen, die nicht von ihren Desktop-Äquivalenten unterstützt werden, genauso wie sie möglicherweise nicht alle gleichen Formate wie die Desktop-Versionen unterstützen. Darüber hinaus _können_ sowohl Desktop- als auch Mobil-Browser so ausgelegt sein, dass sie die Handhabung der Medienwiedergabe auslagern (entweder für alle Medien oder nur für bestimmte Arten, die sie intern nicht verarbeiten können). Das bedeutet, dass medienunterstützung teilweise davon abhängt, welche Software der Benutzer installiert hat.

Wie macht man das? Schauen Sie sich das folgende [aktualisierte Beispiel](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) ([probieren Sie es live hier](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html), auch) an:

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

Hier haben wir das `src`-Attribut aus dem eigentlichen {{HTMLElement("video")}} Tag entfernt und stattdessen separate {{htmlelement("source")}} Elemente hinzugefügt, die auf ihre eigenen Quellen verweisen. In diesem Fall wird der Browser die {{HTMLElement("source")}} Elemente durchlaufen und das erste abspielen, das er mit dem Codec unterstützen kann. Die Einbindung von WebM- und MP4-Quellen sollte heutzutage ausreichend sein, um Ihr Video auf den meisten Plattformen und Browsern abzuspielen.

Jedes `<source>` Element hat auch ein [`type`](/de/docs/Web/HTML/Reference/Elements/source#type) Attribut. Dies ist optional, es wird jedoch empfohlen, es einzuschließen. Das `type`-Attribut enthält den {{Glossary("MIME_type", "MIME-Typ")}} der Datei, die durch das `<source>` spezifiziert wird, und Browser können das `type` verwenden, um sofort Videos zu überspringen, die sie nicht verstehen. Wenn `type` nicht enthalten ist, werden Browser jede Datei laden und versuchen abzuspielen, bis sie eine finden, die funktioniert, was offensichtlich Zeit kostet und eine unnötige Verschwendung von Ressourcen ist.

Verweisen Sie auf unseren [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats), um bei der Auswahl der besten Container und Codecs für Ihre Bedürfnisse zu helfen, sowie um die richtigen MIME-Typen zu bestimmen, die für jedes angegeben werden sollen.

## Weitere `<video>` Merkmale

Es gibt eine Reihe weiterer Merkmale, die Sie beim Anzeigen eines HTML-Videos einbeziehen können. Schauen Sie sich unser nächstes Beispiel an:

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

Die resultierende Benutzeroberfläche sieht in etwa so aus:

![Ein Videoplayer, der ein Vorschaubild zeigt, bevor es spielt. Das Vorschaubild sagt HTML-Video-Beispiel, OMG echt cool!](poster_screenshot_updated.png)

Merkmale umfassen:

- [`width`](/de/docs/Web/HTML/Reference/Elements/video#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/video#height)
  - : Sie können die Video-Größe entweder mit diesen Attributen oder mit {{Glossary("CSS", "CSS")}} steuern. In beiden Fällen behalten Videos ihr natives Breiten-Höhen-Verhältnis bei — bekannt als das **Seitenverhältnis**. Wird das Seitenverhältnis durch die von Ihnen festgelegten Größen nicht eingehalten, wird das Video horizontal wachsen, um den Raum auszufüllen, und der nicht ausgefüllte Raum wird standardmäßig mit einer soliden Hintergrundfarbe versehen.
- [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay)
  - : Lädt das Audio oder Video sofort bei dem Laden der restlichen Seite. Es wird jedoch empfohlen, keine automatisch abspielenden Videos (oder Audios) auf Ihren Websites zu verwenden, da Benutzer dies als wirklich störend empfinden können.
- [`loop`](/de/docs/Web/HTML/Reference/Elements/video#loop)
  - : Lässt das Video (oder Audio) wieder anfangen, wenn es am Ende ist. Dies kann ebenfalls störend sein, also nutzen Sie es nur, wenn es wirklich notwendig ist.
- [`muted`](/de/docs/Web/HTML/Reference/Elements/video#muted)
  - : Veranlasst das Medium, mit ausgeschaltetem Ton abzuspielen.
- [`poster`](/de/docs/Web/HTML/Reference/Elements/video#poster)
  - : Die URL eines Bildes, das angezeigt wird, bevor das Video abgespielt wird. Es soll beispielsweise als Startbild oder Werbebild dienen.
- [`preload`](/de/docs/Web/HTML/Reference/Elements/video#preload)

  - : Wird zum Puffer großer Dateien verwendet; es kann einen von drei Werten annehmen:

    - `"none"` puffert die Datei nicht
    - `"auto"` puffert die Mediendatei
    - `"metadata"` puffert nur die Metadaten für die Datei

Sie können das obige Beispiel als [Live-Demo auf GitHub](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) ansehen (auch den [Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html).) Beachten Sie, dass wir das `autoplay` Attribut in der Live-Version nicht enthalten haben — wenn das Video beginnt zu spielen, sobald die Seite lädt, sehen Sie das Poster nicht!

## Das `<audio>`-Element

Das {{htmlelement("audio")}} Element funktioniert genauso wie das {{htmlelement("video")}} Element, mit einigen kleinen Unterschieden, die unten umrissen sind. Ein typisches Beispiel könnte so aussehen:

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

Dies ergibt im Browser in etwa Folgendes:

![Ein einfacher Audioplayer mit einem Abspielknopf, Zeitanzeige, Lautstärkekontrolle und Fortschrittsleiste](audio-player.png)

> [!NOTE]
> Sie können die [Audio-Demo live ausführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) auf GitHub (sehen Sie auch den [Quellcode des Audioplayers](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html).)

Dies benötigt weniger Platz als ein Videoplayer, da es keine visuelle Komponente gibt — Sie müssen nur Steuerungen bereitstellen, um das Audio abzuspielen. Weitere Unterschiede zu HTML-Video sind folgende:

- Das {{htmlelement("audio")}} Element unterstützt die `width`/`height` Attribute nicht — wiederum, es gibt keine visuelle Komponente, damit gibt es nichts, dem eine Breite oder Höhe zugeordnet werden könnte.
- Es unterstützt auch nicht das `poster` Attribut — wiederum, keine visuelle Komponente.

Ansonsten unterstützt `<audio>` alle gleichen Merkmale wie `<video>` — lesen Sie die obigen Abschnitte für weitere Informationen.

## Video-Textspuren anzeigen

Jetzt werden wir ein etwas fortgeschritteneres Konzept erörtern, das wirklich nützlich zu wissen ist. Viele Menschen können oder wollen die Audio-/Videoinhalte, die sie im Web finden, nicht hören, zumindest nicht zu bestimmten Zeiten. Zum Beispiel:

- Viele Menschen haben Hörstörungen (wie Schwerhörigkeit oder Taubheit) und können die Audioinhalte nicht klar hören, falls überhaupt.
- Andere können das Audio nicht hören, weil sie in lauten Umgebungen sind (wie eine volle Bar, während ein Sportspiel gezeigt wird).
- In Umgebungen, in denen Audio eine Ablenkung oder Störung wäre (wie in einer Bibliothek oder wenn ein Partner versucht zu schlafen), sind Untertitel sehr nützlich.
- Menschen, die die Sprache des Videos nicht sprechen, möchten möglicherweise ein Texttranskript oder sogar eine Übersetzung zur Verfügung, um die Medieninhalte zu verstehen.

Wäre es nicht schön, diesen Personen ein Transkript der gesprochenen Wörter im Audio/Video zur Verfügung stellen zu können? Nun, dank HTML-Video können Sie das. Dafür verwenden wir das [WebVTT](/de/docs/Web/API/WebVTT_API) Dateiformat und das {{htmlelement("track")}} Element.

> [!NOTE]
> "Transkribieren" bedeutet, "gesprochene Wörter als Text aufzuschreiben". Der resultierende Text ist ein "Transkript".

WebVTT ist ein Format zum Schreiben von Textdateien, die mehrere Textstrings mit Metadaten wie der Zeit im Video enthalten, zu der jeder Textstring angezeigt werden soll, und sogar begrenzte Stil-/Positionierungsinformationen. Diese Textstrings werden **Cues** genannt, und es gibt verschiedene Arten von Cues, die für verschiedene Zwecke verwendet werden. Die gebräuchlichsten Cues sind:

- Untertitel
  - : Übersetzungen von fremdsprachigem Material für Personen, die die im Audio gesprochenen Wörter nicht verstehen.
- Bildunterschriften
  - : Synchronisierte Transkriptionen von Dialogen oder Beschreibungen signifikanter Geräusche, um Menschen, die das Audio nicht hören können, zu helfen zu verstehen, was vor sich geht.
- Zeitgesteuerte Beschreibungen
  - : Text, der vom Mediaplayer gesprochen werden soll, um wichtige visuelle Inhalte blinden oder anderweitig sehbehinderten Benutzern zu beschreiben.

Eine typische WebVTT-Datei könnte ungefähr so aussehen:

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

1. Speichern Sie es als `.vtt` Datei an einem Ort, von dem der Server sie bereitstellen kann (siehe unten), z.B. im gleichen Verzeichnis wie die HTML-Datei.
2. Verlinken Sie die `.vtt` Datei mit dem {{htmlelement("track")}} Element. `<track>` sollte innerhalb von `<audio>` oder `<video>` platziert werden, aber nach allen `<source>` Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) Attribut, um anzugeben, ob die Cues `subtitles`, `captions`, oder `descriptions` sind. Verwenden Sie außerdem [`srclang`](/de/docs/Web/HTML/Reference/Elements/track#srclang), um dem Browser mitzuteilen, in welcher Sprache Sie die Untertitel geschrieben haben. Fügen Sie schließlich [`label`](/de/docs/Web/HTML/Reference/Elements/track#label) hinzu, um Lesern zu helfen, die Sprache zu identifizieren, die sie suchen.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

Um dies auszuprobieren, müssen Sie die Dateien auf einem [lokalen HTTP-Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) hosten. Im Browser-Ausgang sehen Sie ein Video mit angezeigten Untertiteln, ähnlich wie hier:

![Videoplayer mit Standardsteuerungen wie Abspielen, Stoppen, Lautstärke und Untertitel an und aus. Das spielende Video zeigt eine Szene mit einem Mann, der eine spießartige Waffe hält, und eine Untertitelung, die sagt: "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Weitere Details, einschließlich wie man Labels hinzufügt, finden Sie unter [Untertitel und Bildunterschriften zu HTML-Video hinzufügen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können das [Beispiel finden](https://iandevlin.github.io/mdn/video-player-with-captions/), das zu diesem Artikel gehört, auf GitHub, geschrieben von Ian Devlin (sehen Sie auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) an.) Dieses Beispiel verwendet etwas JavaScript, um es Benutzern zu ermöglichen, zwischen verschiedenen Untertiteln zu wählen. Beachten Sie, dass Ihre Untertitel einzuschalten erfordert, dass Sie die "CC" Taste drücken und eine Option — Englisch, Deutsch oder Spanisch — auswählen.

> [!NOTE]
> Textspuren helfen Ihnen auch bei {{Glossary("SEO", "SEO")}}, da Suchmaschinen vor allem von Text leben. Textspuren ermöglichen es Suchmaschinen auch, direkt auf einen bestimmten Punkt im Video zu verlinken.

## Einbettung eigener Audio und Video

Für diese Aufgabe, warum nicht hinausgehen und in der Welt einige eigene Videos und Audios aufnehmen? Wenn Sie ein Telefon haben, verwenden Sie es, um Audio- und Videoaufzeichnungen zu machen, übertragen Sie diese auf Ihren Computer und probieren Sie es aus. Möglicherweise müssen Sie einige Konvertierungen durchführen, um im Falle von Videos mit WebM und MP4 und im Falle von Audios mit MP3 und Ogg zu enden. Aber es gibt genug Programme und Tools dort draußen, um Ihnen dies ohne allzu große Schwierigkeiten zu ermöglichen, wie [CloudConvert](https://cloudconvert.com/mp4-converter) (online) und [Audacity](https://sourceforge.net/projects/audacity/) (Desktop-Anwendung). Wir möchten, dass Sie versuchen es zu machen!

> [!NOTE]
> Wenn Sie nicht in der Lage sind, Video oder Audio zu beschaffen, können Sie gerne unsere [Beispielaudio- und Videodateien](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) verwenden, um diese Übung durchzuführen.

Wir möchten, dass Sie:

1. Speichern Sie Ihre Audio- und Videodateien in einem neuen Verzeichnis auf Ihrem Computer.
2. Erstellen Sie eine neue HTML-Datei im gleichen Verzeichnis, benannt `index.html`, basierend auf unserer [Anleitung zum Einstieg-Template](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).
3. Fügen Sie {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente zur Seite hinzu; lassen Sie sie die Standardbrowsersteuerungen anzeigen.
4. Geben Sie beiden {{HTMLElement("source")}} Elemente, damit Browser das am besten unterstützte Audioformat finden und laden. Diese sollten [`type`](/de/docs/Web/HTML/Reference/Elements/source#type) Attribute enthalten.
5. Geben Sie beiden Elemente einen Fallback `<p>` Element innerhalb der Tags, der einen direkten Link zu den Medien für nicht unterstützende Browser bereitstellt.
6. Geben Sie dem `<video>` Element ein Poster, das angezeigt wird, bevor das Video abgespielt wird. Viel Spaß beim Erstellen Ihrer eigenen Poster-Grafik.

<details>
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

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

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Audio und Video](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video).

## Zusammenfassung

Und das war's — Wir hoffen, Sie hatten Spaß daran, mit Video und Audio auf Webseiten zu spielen! Als nächstes werden wir Ihnen eine Herausforderung präsentieren, um Ihre Fähigkeiten mit HTML-Medien zu testen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content/Mozilla_splash_page", "Learn_web_development/Core/Structuring_content")}}
