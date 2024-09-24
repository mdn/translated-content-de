---
title: Video- und Audiowiedergabe
slug: Learn/HTML/Multimedia_and_embedding/Video_and_audio_content
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Images_in_HTML", "Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding")}}

Nun, da wir uns mit dem Hinzufügen einfacher Bilder zu einer Webseite vertraut gemacht haben, ist der nächste Schritt, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel werden wir uns genau damit befassen, indem wir die {{htmlelement("video")}} und {{htmlelement("audio")}} Elemente verwenden; und dann schließen wir mit der Betrachtung, wie man Untertitel zu Ihren Videos hinzufügen kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, Vertrautheit mit den Grundlagen von HTML (wie behandelt in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Einstieg in HTML</a
        >) und
        <a href="/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
          >Bilder in HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Video- und Audiomaterial in eine Webseite einbettet und
        Untertitel zu Videos hinzufügt.
      </td>
    </tr>
  </tbody>
</table>

## Video und Audio im Web

Das erste Auftreten von Online-Videos und -Audio wurde durch proprietäre, plugin-basierte Technologien wie [Flash](https://en.wikipedia.org/wiki/Adobe_Flash) und [Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight) möglich gemacht. Beide hatten Sicherheits- und Zugänglichkeitsprobleme und sind mittlerweile veraltet, zugunsten nativer HTML-Lösungen wie {{htmlelement("video")}} und {{htmlelement("audio")}} Elemente und der Verfügbarkeit von {{Glossary("JavaScript")}} {{Glossary("API","APIs")}}, um diese zu steuern. Wir werden hier nicht auf JavaScript eingehen - nur auf die grundlegenden Grundlagen, die mit HTML erreicht werden können.

Wir werden Ihnen nicht beibringen, wie man Audio- und Videodateien produziert – das erfordert einen völlig anderen Fähigkeitenbereich. Wir haben Ihnen [Beispiel-Audio- und Videodateien sowie Beispielcode](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) zur Verfügung gestellt, damit Sie selbst experimentieren können, falls Sie keine eigenen bekommen können.

> [!NOTE]
> Bevor Sie hier beginnen, sollten Sie auch wissen, dass es einige OVPs (Online-Video-Anbieter) wie [YouTube](https://www.youtube.com/), [Dailymotion](https://www.dailymotion.com/) und [Vimeo](https://vimeo.com/), sowie Online-Audio-Anbieter wie [Soundcloud](https://soundcloud.com/) gibt. Solche Unternehmen bieten eine bequeme, einfache Möglichkeit, Videos zu hosten und zu konsumieren, sodass Sie sich keine Sorgen über den enormen Bandbreitenverbrauch machen müssen. OVPs bieten in der Regel sogar vorgefertigten Code zum Einbetten von Video/Audio in Ihre Webseiten; wenn Sie diesen Weg gehen, können Sie einige der Schwierigkeiten, die wir in diesem Artikel diskutieren, vermeiden. Wir werden diese Art von Dienst im nächsten Artikel etwas ausführlicher behandeln.

### Das \<video>-Element

Das {{htmlelement("video")}} Element ermöglicht es Ihnen, ein Video sehr einfach einzubetten. Ein wirklich einfaches Beispiel sieht so aus:

```html
<video src="rabbit320.webm" controls>
  <p>
    Ihr Browser unterstützt HTML-Video nicht. Hier ist ein
    <a href="rabbit320.webm">Link zum Video</a> stattdessen.
  </p>
</video>
```

Die besonderen Merkmale sind:

- [`src`](/de/docs/Web/HTML/Element/video#src)
  - : Auf die gleiche Weise wie beim {{htmlelement("img")}} Element, enthält das `src` (Quelle) Attribut einen Pfad zu dem Video, das Sie einbetten möchten. Es funktioniert genau auf die gleiche Weise.
- [`controls`](/de/docs/Web/HTML/Element/video#controls)
  - : Benutzer müssen in der Lage sein, Video- und Audiowiedergabe zu steuern (besonders kritisch für Menschen, die an [Epilepsie](https://en.wikipedia.org/wiki/Epilepsy#Epidemiology) leiden). Sie müssen entweder das `controls`-Attribut verwenden, um die eigene Steueroberfläche des Browsers einzuschließen, oder Ihre Oberfläche mit der geeigneten [JavaScript-API](/de/docs/Web/API/HTMLMediaElement) erstellen. Mindestens muss die Schnittstelle eine Möglichkeit zum Starten und Stoppen der Medien und zur Einstellung der Lautstärke enthalten.
- Der Absatz innerhalb der `<video>` Tags
  - : Dies wird als **Fallback-Inhalt** bezeichnet – dies wird angezeigt, wenn der Browser, der auf die Seite zugreift, das `<video>` Element nicht unterstützt, sodass wir einen Fallback für ältere Browser bereitstellen können. Dies kann alles sein, was Ihnen gefällt; in diesem Fall haben wir einen direkten Link zur Videodatei bereitgestellt, sodass der Benutzer zumindest irgendwie darauf zugreifen kann, unabhängig davon, welchen Browser er verwendet.

Das eingebettete Video sieht etwa so aus:

![Ein einfacher Videoplayer, der ein Video eines kleinen weißen Kaninchens zeigt](simple-video.png)

Sie können [das Beispiel hier live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/simple-video.html)).

### Verwendung mehrerer Quellformate zur Verbesserung der Kompatibilität

Das obige Beispiel hat ein Problem. Es ist möglich, dass das Video bei Ihnen nicht abgespielt wird, weil verschiedene Browser unterschiedliche Video- (und Audio-) Formate unterstützen. Glücklicherweise gibt es Dinge, die Sie tun können, um zu verhindern, dass dies ein Problem darstellt.

#### Inhalte einer Mediendatei

Zunächst lassen Sie uns schnell die Terminologie durchgehen. Formate wie MP3, MP4 und WebM werden als **[Containerformate](/de/docs/Web/Media/Formats/Containers)** bezeichnet. Sie definieren eine Struktur, in der die Audio- und/oder Videospuren, aus denen die Medien bestehen, gespeichert werden, zusammen mit Metadaten, die die Medien beschreiben, welche Codecs zur Kodierung ihrer Kanäle verwendet werden usw.

Eine WebM-Datei, die einen Film enthält, der eine Hauptvideospur und eine alternative Winkelsicht, plus Audio für Englisch und Spanisch sowie Audio für eine englische Kommentarspur enthält, kann im Diagramm unten konzeptionell dargestellt werden. Ebenfalls enthalten sind Textspuren, die geschlossene Untertitel für den Spielfilm, spanische Untertitel für den Film und englische Untertitel für die Kommentare enthalten.

![Diagramm, das die Inhalte einer Mediendatei auf der Spur-Ebene konzeptioniert.](containersandtracks.png)

Die Audio- und Videospuren innerhalb des Containers halten Daten im geeigneten Format für den Codec, der zur Kodierung dieser Medien verwendet wird. Verschiedene Formate werden für Audiospuren bzw. Videospuren verwendet. Jede Audiospur wird unter Verwendung eines [Audiocodecs](/de/docs/Web/Media/Formats/Audio_codecs) kodiert, während Videospuren mithilfe eines (wie Sie wahrscheinlich vermuten) [Videocodecs](/de/docs/Web/Media/Formats/Video_codecs) kodiert werden. Wie wir zuvor besprochen haben, unterstützen verschiedene Browser unterschiedliche Video- und Audioformate und verschiedene Containerformate (wie MP3, MP4 und WebM, die wiederum unterschiedliche Arten von Video und Audio enthalten können).

Zum Beispiel:

- Ein WebM-Container verpackt typischerweise Vorbis- oder Opus-Audio mit VP8/VP9-Video. Dies wird in allen modernen Browsern unterstützt, obwohl ältere Versionen möglicherweise nicht funktionieren.
- Ein MP4-Container verpackt oft AAC- oder MP3-Audio mit H.264-Video. Dies wird ebenfalls in allen modernen Browsern unterstützt.
- Der Ogg-Container neigt dazu, Vorbis-Audio und Theora-Video zu verwenden. Dies wird am besten in Firefox und Chrome unterstützt, wurde jedoch im Wesentlichen vom qualitativ besseren WebM-Format abgelöst.

Es gibt einige Spezialfälle. Zum Beispiel wird für einige Arten von Audio, die Daten eines Codecs oft ohne Container gespeichert oder mit einem vereinfachten Container. Ein solches Beispiel ist der FLAC-Codec, der am häufigsten in FLAC-Dateien gespeichert wird, die einfach rohe FLAC-Spuren sind.

Ein weiteres solches Beispiel ist die immer beliebte MP3-Datei. Eine "MP3-Datei" ist eigentlich eine MPEG-1 Audio Layer III (MP3) Audiospur, die in einem MPEG- oder MPEG-2-Container gespeichert wird. Dies ist besonders interessant, da während die meisten Browser das Verwenden von MPEG-Medien in den {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elementen nicht unterstützen, sie dennoch MP3 wegen seiner Popularität unterstützen könnten.

Ein Audioplayer wird dazu tendieren, eine Audiospur direkt abzuspielen, z.B. eine MP3- oder Ogg-Datei. Diese benötigen keine Container.

#### Unterstützung von Mediendateien in Browsern

> [!NOTE]
> Viele beliebte Formate, wie MP3 und MP4/H.264, sind ausgezeichnet, aber durch Patente belastet; das bedeutet, dass einige oder alle Technologien, auf denen sie basieren, durch Patente abgedeckt werden. In den Vereinigten Staaten waren Patente bis 2017 auf MP3 gültig, und H.264 ist mindestens bis 2027 durch Patente belastet.
>
> Aufgrund dieser Patente müssen Browser, die Unterstützung für diese Codecs implementieren möchten, in der Regel enorme Lizenzgebühren zahlen. Darüber hinaus ziehen es einige Personen vor, eingeschränkte Software zu vermeiden und nur offene Formate zu verwenden. Aus diesen rechtlichen und bevorzugten Gründen sehen sich Webentwickler gezwungen, mehrere Formate zu unterstützen, um ihr gesamtes Publikum zu erreichen.

Die in den vorherigen Abschnitt beschriebenen Codecs existieren, um Video und Audio in handhabbare Dateien zu komprimieren, da sowohl Rohaudio als auch Rohvideo äußerst groß sind. Jeder Webbrowser unterstützt eine Auswahl von **{{Glossary("Codec","Codec")}}**, wie Vorbis oder H.264, die verwendet werden, um die komprimierten Audio- und Videodaten in Binärdaten zu konvertieren und zurück. Jeder Codec bietet seine eigenen Vor- und Nachteile, und jeder Container kann auch seine eigenen positiven und negativen Merkmale bieten, die Ihre Entscheidungen über die Verwendung beeinflussen können.

Die Dinge werden etwas komplizierter, da nicht nur jeder Browser einen anderen Satz von Containerdateiformaten unterstützt, sondern sie auch eine andere Auswahl von Codecs unterstützen. Um die Wahrscheinlichkeit zu maximieren, dass Ihre Webseite oder App auf dem Browser eines Benutzers funktioniert, müssen Sie möglicherweise jede Mediendatei, die Sie verwenden, in mehreren Formaten bereitstellen. Wenn Ihr Website und der Browser des Benutzers kein gemeinsames Medienformat haben, wird Ihr Medium nicht abgespielt.

Aufgrund der Komplexität, sicherzustellen, dass die Medien Ihre App auf jede Kombination von Browsern, Plattformen und Geräten, die Sie erreichen möchten, sichtbar sind, kann die Auswahl der besten Kombination von Codecs und Containern eine komplizierte Aufgabe darstellen. Siehe [Auswahl des richtigen Containers](/de/docs/Web/Media/Formats/Containers#choosing_the_right_container) für Hilfe bei der Auswahl des für Ihre Bedürfnisse am besten geeigneten Containerdateiformats; ähnlich finden Sie Hilfe bei [Auswahl eines Videocodecs](/de/docs/Web/Media/Formats/Video_codecs#choosing_a_video_codec) und [Auswahl eines Audiocodecs](/de/docs/Web/Media/Formats/Audio_codecs#choosing_an_audio_codec) für die Auswahl der ersten Mediencodecs, die Sie für Ihr Material und Ihr Zielpublikum verwenden.

Ein weiterer zu beachtender Punkt: Mobile Browser unterstützen möglicherweise zusätzliche Formate, die von ihren Desktop-Gegenstücken nicht unterstützt werden, genauso wie sie möglicherweise nicht alle Formate unterstützen, die die Desktop-Version unterstützt. Darüber hinaus _können_ sowohl Desktop- als auch mobile Browser so konstruiert sein, dass sie die Handhabung der Medienwiedergabe (entweder für alle Medien oder nur für bestimmte Arten, die sie intern nicht handhaben können) auslagern. Das bedeutet, dass die Medienunterstützung teilweise davon abhängt, welche Software der Benutzer installiert hat.

Wie machen wir das nun? Sehen Sie sich das folgende [aktualisierte Beispiel](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) an ([probieren Sie es hier live aus](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html)):

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    Ihr Browser unterstützt dieses Video nicht. Hier ist ein
    <a href="rabbit320.mp4">Link zum Video</a> stattdessen.
  </p>
</video>
```

Hier haben wir das `src` Attribut aus dem eigentlichen {{HTMLElement("video")}} Tag herausgenommen und stattdessen separate {{htmlelement("source")}} Elemente hinzugefügt, die auf ihre eigenen Quellen verweisen. In diesem Fall wird der Browser die {{HTMLElement("source")}} Elemente durchgehen und das erste abspielen, das er unterstützen kann. Das Einfügen von WebM- und MP4-Quellen sollte heutzutage ausreichen, um Ihr Video auf den meisten Plattformen und Browsern abzuspielen.

Jedes `<source>` Element hat auch ein [`type`](/de/docs/Web/HTML/Element/source#type) Attribut. Dies ist optional, aber es wird empfohlen, dass Sie es hinzufügen. Das `type` Attribut enthält den {{Glossary("MIME type")}} der Datei, die durch das `<source>` angegeben wird, und Browser können den `type` verwenden, um Videos, die sie nicht verstehen, sofort zu überspringen. Wenn `type` nicht enthalten ist, laden Browser jede Datei und versuchen, sie abzuspielen, bis sie eine finden, die funktioniert, was offensichtlich Zeit kostet und eine unnötige Ressourcennutzung ist.

Beziehen Sie sich auf unseren [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Formats) für Hilfe bei der Auswahl der besten Container und Codecs für Ihre Bedürfnisse sowie um die richtigen MIME-Typen zu finden, die für jede angegeben werden sollen.

### Weitere \<video> Funktionen

Es gibt eine Reihe anderer Funktionen, die Sie beim Anzeigen eines HTML-Videos einbeziehen können. Sehen Sie sich unser nächstes Beispiel an:

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
    Ihr Browser unterstützt dieses Video nicht. Hier ist ein
    <a href="rabbit320.mp4">Link zum Video</a> stattdessen.
  </p>
</video>
```

Die resultierende Benutzeroberfläche sieht etwa so aus:

![Ein Videoplayer zeigt ein Posterbild bevor es spielt. Das Posterbild sagt HTML Video Beispiel, OMG ja!](poster_screenshot_updated.png)

Funktionen beinhalten:

- [`width`](/de/docs/Web/HTML/Element/video#width) und [`height`](/de/docs/Web/HTML/Element/video#height)
  - : Sie können die Videogröße entweder mit diesen Attributen oder mit {{Glossary("CSS")}} steuern. In beiden Fällen behalten Videos ihr natives Breiten-Höhen-Verhältnis - bekannt als **Seitenverhältnis**. Wenn das Seitenverhältnis nicht in den Größen, die Sie eingestellt haben, erhalten bleibt, wird das Video horizontal wachsen, um den Raum zu füllen, und der unbesetzte Raum wird standardmäßig mit einer Volltonfarbe ausgefüllt.
- [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)
  - : Lässt das Audio oder Video sofort abspielen, während die restliche Seite geladen wird. Es wird empfohlen, keine automatisch abspielenden Videos (oder Audios) auf Ihren Seiten zu verwenden, weil Benutzer dies als wirklich störend empfinden können.
- [`loop`](/de/docs/Web/HTML/Element/video#loop)
  - : Lässt das Video (oder Audio) erneut starten, wann immer es endet. Dies kann auch störend sein, also verwenden Sie es nur, wenn unbedingt erforderlich.
- [`muted`](/de/docs/Web/HTML/Element/video#muted)
  - : Führt dazu, dass das Medium standardmäßig ohne Ton abgespielt wird.
- [`poster`](/de/docs/Web/HTML/Element/video#poster)
  - : Die URL eines Bildes, das angezeigt wird, bevor das Video abgespielt wird. Es soll als Eingangsbildschirm oder Werbebildschirm verwendet werden.
- [`preload`](/de/docs/Web/HTML/Element/video#preload)
  - : Wird für das Pufferladen großer Dateien verwendet; es kann einen von drei Werten annehmen:

    - `"none"` lädt die Datei nicht vor
    - `"auto"` puffert die Mediendatei
    - `"metadata"` puffert nur die Metadaten für die Datei

Sie können das obige Beispiel ab [live auf GitHub abspielen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) an). Beachten Sie, dass wir das `autoplay` Attribut in der Live-Version nicht hinzugefügt haben – wenn das Video beginnt zu spielen, sobald die Seite geladen wird, sehen Sie das Poster nicht!

### Das \<audio>-Element

Das {{htmlelement("audio")}} Element funktioniert genauso wie das {{htmlelement("video")}} Element, mit einigen kleinen Unterschieden, die unten umrissen sind. Ein typisches Beispiel könnte so aussehen:

```html
<audio controls>
  <source src="viper.mp3" type="audio/mp3" />
  <source src="viper.ogg" type="audio/ogg" />
  <p>
    Ihr Browser unterstützt diese Audiodatei nicht. Hier ist ein
    <a href="viper.mp3">Link zum Audio</a> stattdessen.
  </p>
</audio>
```

Dies erzeugt im Browser etwa Folgendes:

![Ein einfacher Audioplayer mit einem Wiedergabebutton, Timer, Lautstärkeregler und Fortschrittsleiste](audio-player.png)

> [!NOTE]
> Sie können [das Audiodemo auf GitHub live ausführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) (siehe auch den [Quellcode des Audioplayers](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html)).

Dies nimmt weniger Platz ein als ein Videoplayer, da es keine visuelle Komponente gibt - Sie müssen lediglich Steuerungen anzeigen, um das Audio abzuspielen. Andere Unterschiede zu HTML Video sind wie folgt:

- Das {{htmlelement("audio")}} Element unterstützt die `width`/`height` Attribute nicht - wiederum gibt es keine visuelle Komponente, sodass es nichts gibt, dem man eine Breite oder Höhe zuordnen könnte.
- Es unterstützt auch das `poster` Attribut nicht - wiederum keine visuelle Komponente.

Ansonsten unterstützt `<audio>` alle gleichen Funktionen wie `<video>` - überprüfen Sie die obigen Abschnitte für weitere Informationen darüber.

## Video-Textspuren anzeigen

Nun werden wir ein etwas fortgeschritteneres Konzept diskutieren, das wirklich nützlich zu wissen ist. Viele Menschen können oder wollen die Audio-/Videoinhalte, die sie im Web finden, nicht hören, zumindest zu bestimmten Zeiten. Zum Beispiel:

- Viele Menschen haben Hörbeeinträchtigungen (wie schwerhörig oder taub zu sein), sodass sie den Audioinhalt nicht klar hören können, wenn überhaupt.
- Andere können den Audioinhalt nicht hören, weil sie sich in lauten Umgebungen befinden (wie einer überfüllten Bar, wenn ein Sportspiel gezeigt wird).
- Ähnlich können in Umgebungen, in denen das Abspielen des Audios eine Ablenkung oder Störung darstellen würde (wie in einer Bibliothek oder wenn ein Partner versucht zu schlafen) Untertitel sehr nützlich sein.
- Menschen, die die Sprache des Videos nicht sprechen, möchten möglicherweise eine Textübersetzung oder sogar eine Übersetzung, um ihnen zu helfen, den Medieninhalt zu verstehen.

Wäre es nicht schön, diesen Menschen ein Transkript der gesprochenen Wörter im Audio-/Video bereitzustellen? Nun, dank HTML Video können Sie das tun. Dazu verwenden wir das [WebVTT](/de/docs/Web/API/WebVTT_API) Dateiformat und das {{htmlelement("track")}} Element.

> [!NOTE]
> "Transkribieren" bedeutet "gesprochene Wörter als Text aufschreiben". Der resultierende Text ist ein "Transkript".

WebVTT ist ein Format zum Schreiben von Textdateien mit mehreren Textstrings zusammen mit Metadaten wie der Zeit im Video, zu der jeder Textstring angezeigt werden soll, und sogar begrenzten Styling-/Positionierungsinformationen. Diese Textstrings werden als **Cues** bezeichnet und es gibt verschiedene Arten von Cues, die für unterschiedliche Zwecke verwendet werden. Die häufigsten Cues sind:

- Untertitel
  - : Übersetzungen von fremdem Material, für Personen, die die im Audio gesprochenen Wörter nicht verstehen.
- Untertitel (captions)
  - : Synchronisierte Transkriptionen von Dialogen oder Beschreibungen signifikanter Geräusche, um es Menschen, die das Audio nicht hören können, zu ermöglichen, zu verstehen, was passiert.
- Zeitgesteuerte Beschreibungen
  - : Text, der vom Medienplayer gesprochen werden sollte, um wichtige visuelle Elemente blinden oder anderweitig sehbehinderten Benutzern zu beschreiben.

Eine typische WebVTT-Datei sieht etwa so aus:

```plain
WEBVTT

1
00:00:22.230 --> 00:00:24.606
Dies ist der erste Untertitel.

2
00:00:30.739 --> 00:00:34.074
Dies ist der zweite.

…
```

Um dies zusammen mit der HTML-Wiedergabe anzuzeigen, müssen Sie:

1. Speichern Sie es als `.vtt` Datei an einem Ort, wo der Server sie bereitstellen kann (siehe unten), wie z.B. im gleichen Verzeichnis wie die HTML-Datei.
2. Verlinken Sie die `.vtt` Datei mit dem {{htmlelement("track")}} Element. `<track>` sollte innerhalb von `<audio>` oder `<video>` platziert werden, aber nach allen `<source>` Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Element/track#kind) Attribut, um anzugeben, ob die Cues `subtitles`, `captions` oder `descriptions` sind. Verwenden Sie weiter [`srclang`](/de/docs/Web/HTML/Element/track#srclang), um dem Browser mitzuteilen, in welcher Sprache Sie die Untertitel geschrieben haben. Fügen Sie abschließend [`label`](/de/docs/Web/HTML/Element/track#label) hinzu, um Lesern zu helfen, die Sprache zu identifizieren, die sie suchen.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanisch" />
</video>
```

Um dies auszuprobieren, müssen Sie die Dateien auf einem [lokalen HTTP-Server](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) hosten. Im Browser-Ausgang werden Sie ein Video sehen, das Untertitel anzeigt, ähnlich wie dies:

![Videoplayer mit Standardsteuerungen wie Abspielen, Stoppen, Lautstärke und Untertitel an und aus. Das laufende Video zeigt eine Szene von einem Mann, der eine speerähnliche Waffe hält, und ein Untertitel lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für weitere Details, einschließlich wie man Labels hinzufügt, lesen Sie bitte [Hinzufügen von Untertiteln und Titel zu HTML-Video](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können [das Beispiel finden](https://iandevlin.github.io/mdn/video-player-with-captions/), das zu diesem Artikel gehört, geschrieben von Ian Devlin (sehen Sie auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions)). Dieses Beispiel verwendet etwas JavaScript, um Benutzern zu ermöglichen, zwischen verschiedenen Untertiteln zu wählen. Beachten Sie, dass Sie, um die Untertitel einzuschalten, die "CC" Taste drücken und eine Option auswählen müssen – Englisch, Deutsch oder Español.

> [!NOTE]
> Textspuren helfen Ihnen auch mit {{glossary("SEO")}}, da Suchmaschinen besonders auf Text angewiesen sind. Textspuren ermöglichen sogar Suchmaschinen, direkt auf eine Stelle im Video zu verlinken.

### Aktives Lernen: Ihr eigenes Audio und Video einbetten

Für dieses aktive Lernen möchten wir (vorzugsweise), dass Sie in die Welt hinausgehen und einige Ihrer eigenen Videos und Audios aufnehmen - die meisten Telefone ermöglichen heutzutage das Aufnehmen von Audio und Video sehr einfach und, vorausgesetzt Sie können es auf Ihren Computer übertragen, können Sie es verwenden. Möglicherweise müssen Sie einige Konvertierungen durchführen, um mit einem WebM und MP4 im Fall von Video zu enden und einem MP3 und Ogg im Fall von Audio, aber es gibt genügend Programme da draußen, die es Ihnen ermöglichen, dies ohne all zu große Schwierigkeiten zu tun, wie [Miro Video Converter](http://www.mirovideoconverter.com/) und [Audacity](https://sourceforge.net/projects/audacity/). Wir möchten, dass Sie es versuchen!

Wenn Sie kein Video oder Audio beschaffen können, können Sie sich gerne unserer [Beispiel-Audio und -Videodateien](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) bedienen, um diese Übung durchzuführen. Sie können auch unseren Beispielcode als Referenz verwenden.

Wir möchten, dass Sie:

1. Speichern Sie Ihre Audio- und Videodateien in einem neuen Verzeichnis auf Ihrem Computer.
2. Erstellen Sie eine neue HTML-Datei im gleichen Verzeichnis, genannt `index.html`.
3. Fügen Sie der Seite {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente hinzu; lassen Sie sie die standardmäßigen Browsersteuerungen anzeigen.
4. Geben Sie beiden {{HTMLElement("source")}} Elemente, sodass Browser das Audioformat finden können, das sie am besten unterstützen und dieses laden. Diese sollten `type` Attribute enthalten.
5. Geben Sie dem `<video>` Element ein Poster, das angezeigt wird, bevor das Video abgespielt wird. Haben Sie Spaß daran, Ihr eigenes Poster zu erstellen.

Als zusätzlichen Bonus könnten Sie versuchen, über Textspuren zu recherchieren, und herausfinden, wie Sie Ihrem Video einige Untertitel hinzufügen können.

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren - siehe [Testen Sie Ihr Können: Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding). Beachten Sie, dass die dritte Bewertungsfrage in diesem Test Kenntnisse einiger der in dem [nächsten Artikel](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies) behandelten Techniken voraussetzt, deshalb möchten Sie diesen vielleicht lesen, bevor Sie sie versuchen.

## Zusammenfassung

Und das war's - wir hoffen, dass Ihnen das Spielen mit Video und Audio in Webseiten Spaß gemacht hat! Im nächsten Artikel werden wir uns [andere Möglichkeiten der Einbettung von Inhalten](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies) im Web anschauen, unter Verwendung von Technologien wie {{htmlelement("iframe")}} und {{htmlelement("object")}}.

## Siehe auch

- Die HTML-Medienelemente: {{htmlelement("audio")}}, {{htmlelement("video")}}, {{htmlelement("source")}} und {{htmlelement("track")}}
- [Hinzufügen von Untertiteln und Titel zu Video](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
- [Lieferung von Audio und Video](/de/docs/Web/Media/Audio_and_video_delivery): VIELE Details darüber, wie man Audio und Video mit HTML und JavaScript auf Webseiten bringt.
- [Manipulation von Audio und Video](/de/docs/Web/Media/Audio_and_video_manipulation): VIELE Details darüber, wie man Audio und Video mit JavaScript manipuliert (zum Beispiel Filter hinzufügt).
- [Webmedientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
- [Ereignisreferenz > Medien](/de/docs/Web/Events#media)

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Images_in_HTML", "Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding")}}
