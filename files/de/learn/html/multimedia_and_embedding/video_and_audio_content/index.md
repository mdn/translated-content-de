---
title: Video- und Audioinhalte
slug: Learn/HTML/Multimedia_and_embedding/Video_and_audio_content
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Images_in_HTML", "Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding")}}

Da wir uns nun sicher beim Hinzufügen einfacher Bilder zu einer Webseite fühlen, ist der nächste Schritt, Video- und Audioplayer zu Ihren HTML-Dokumenten hinzuzufügen! In diesem Artikel werden wir uns die Verwendung der {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente anschauen. Zum Abschluss betrachten wir, wie man Untertitel zu Ihren Videos hinzufügt.

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
        >, Vertrautheit mit HTML-Grundlagen (wie behandelt in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        >) und
        <a href="/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
          >Bilder in HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Einbetten von Video- und Audioinhalten auf einer Webseite zu erlernen und Untertitel zu Videos hinzuzufügen.
      </td>
    </tr>
  </tbody>
</table>

## Video und Audio im Web

Die erste Welle von Online-Videos und -Audio wurde durch proprietäre Plugin-basierte Technologien wie [Flash](https://en.wikipedia.org/wiki/Adobe_Flash) und [Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight) ermöglicht. Beide hatten Sicherheits- und Zugänglichkeitsprobleme und sind nun zugunsten nativer HTML-Lösungen wie {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elemente sowie der Verfügbarkeit von [JavaScript](/de/docs/Glossary/JavaScript)-[APIs](/de/docs/Glossary/API) zur Steuerung dieser Technologien veraltet. Wir werden hier nicht auf JavaScript eingehen — nur auf die grundlegenden Grundlagen, die mit HTML erreicht werden können.

Wir werden Ihnen nicht beibringen, wie man Audio- und Videodateien produziert — das erfordert eine völlig andere Fähigkeitenpalette. Wir haben für Ihr eigenes Experimentieren [Beispiel-Audio- und Videodateien und Beispielcode](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) bereitgestellt, falls Sie keine eigenen beschaffen können.

> [!NOTE]
> Bevor Sie hier beginnen, sollten Sie auch wissen, dass es einige OVPs (Online-Videoanbieter) wie [YouTube](https://www.youtube.com/), [Dailymotion](https://www.dailymotion.com/) und [Vimeo](https://vimeo.com/) sowie Online-Audioanbieter wie [Soundcloud](https://soundcloud.com/) gibt. Solche Unternehmen bieten eine bequeme, einfache Möglichkeit, Videos zu hosten und zu konsumieren, sodass Sie sich nicht um den enormen Bandbreitenverbrauch kümmern müssen. OVPs bieten in der Regel auch fertigen Code zum Einbetten von Video/Audio in Ihre Webseiten; wenn Sie diesen Weg gehen, können Sie einige der Schwierigkeiten, die wir in diesem Artikel besprechen, vermeiden. Wir werden in dem nächsten Artikel ein wenig mehr über diese Art von Dienst sprechen.

### Das `<video>`-Element

Das {{htmlelement("video")}}-Element ermöglicht es Ihnen, sehr einfach ein Video einzubetten. Ein wirklich einfaches Beispiel sieht so aus:

```html
<video src="rabbit320.webm" controls>
  <p>
    Your browser doesn't support HTML video. Here is a
    <a href="rabbit320.webm">link to the video</a> instead.
  </p>
</video>
```

Die bemerkenswerten Merkmale sind:

- [`src`](/de/docs/Web/HTML/Element/video#src)
  - : Analog zum {{htmlelement("img")}}-Element enthält das `src`- (Quell-)Attribut einen Pfad zu dem Video, das Sie einbetten möchten. Es funktioniert genau auf die gleiche Weise.
- [`controls`](/de/docs/Web/HTML/Element/video#controls)
  - : Benutzer müssen die Video- und Audiowiedergabe steuern können (es ist besonders kritisch für Menschen, die an [Epilepsie](https://en.wikipedia.org/wiki/Epilepsy#Epidemiology) leiden). Sie müssen entweder das `controls`-Attribut verwenden, um die eigene Steuerungsschnittstelle des Browsers einzuschließen, oder Ihre Schnittstelle mit der entsprechenden [JavaScript API](/de/docs/Web/API/HTMLMediaElement) gestalten. Mindestens muss die Schnittstelle eine Möglichkeit zum Starten und Stoppen der Medien sowie zum Anpassen der Lautstärke enthalten.
- Der Absatz innerhalb der `<video>`-Tags
  - : Dies wird als **Fallback-Inhalt** bezeichnet — dieser wird angezeigt, wenn der den die Seite aufrufende Browser das `<video>`-Element nicht unterstützt, sodass wir eine Rückfallebene für ältere Browser bereitstellen können. Dies kann alles Mögliche sein; in diesem Fall haben wir einen direkten Link zur Videodatei bereitgestellt, damit der Benutzer sie zumindest auf irgendeine Weise zugreifen kann, unabhängig davon, welchen Browser er verwendet.

Das eingebettete Video sieht wahrscheinlich so aus:

![Ein einfacher Videoplayer, der ein Video eines kleinen weißen Kaninchens zeigt](simple-video.png)

Sie können [das Beispiel live ausprobieren](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/simple-video.html)).

### Mehrere Quellenformate verwenden, um die Kompatibilität zu verbessern

Es gibt ein Problem mit dem obigen Beispiel. Es ist möglich, dass das Video für Sie nicht abgespielt wird, da verschiedene Browser unterschiedliche Video- (und Audio-)formate unterstützen. Zum Glück gibt es Dinge, die Sie tun können, um dies zu verhindern.

#### Inhalte einer Mediendatei

Zuerst gehen wir schnell die Terminologie durch. Formate wie MP3, MP4 und WebM werden als **[Containerformate](/de/docs/Web/Media/Formats/Containers)** bezeichnet. Sie definieren eine Struktur, in der die Audio- und/oder Videospuren, aus denen das Medium besteht, zusammen mit Metadaten gespeichert sind, die das Medium beschreiben, welche Codecs zur Kodierung seiner Kanäle verwendet werden und so weiter.

Eine WebM-Datei, die ein Video enthält, welches eine Hauptvideospur und eine alternative Kameraperspektive enthält sowie Audio für Englisch und Spanisch und zusätzlich einen Audiokommentar auf Englisch, kann wie im folgenden Diagramm konzipiert werden. Außerdem sind Textspuren enthalten, die Untertitel für den Spielfilm, spanische Untertitel für den Film und englische Untertitel für den Kommentar enthalten.

![Diagramm zur konzeptionellen Darstellung der Inhalte einer Mediendatei auf der Track-Ebene.](containersandtracks.png)

Die Audio- und Videospuren innerhalb des Containers enthalten Daten im geeigneten Format für den zur Kodierung dieses Mediums verwendeten Codec. Verschiedene Formate werden für Audio- versus Videospuren verwendet. Jede Audiospur wird mit einem [Audiocodec](/de/docs/Web/Media/Formats/Audio_codecs) codiert, während Videospuren unter Verwendung eines (wie Sie wahrscheinlich vermutet haben) [Videocodec](/de/docs/Web/Media/Formats/Video_codecs) codiert werden. Wie wir bereits besprochen haben, unterstützen verschiedene Browser unterschiedliche Video- und Audioformate sowie unterschiedliche Containerformate (wie MP3, MP4 und WebM, die wiederum unterschiedliche Arten von Video und Audio enthalten können).

Zum Beispiel:

- Ein WebM-Container verpackt typischerweise Vorbis oder Opus Audio mit VP8/VP9 Video. Dies wird in allen modernen Browsern unterstützt, obwohl ältere Versionen möglicherweise nicht funktionieren.
- Ein MP4-Container verpackt oft AAC oder MP3 Audio mit H.264 Video. Dies wird ebenfalls in allen modernen Browsern unterstützt.
- Der Ogg-Container tendiert dazu, Vorbis Audio und Theora Video zu verwenden. Dies wird am besten in Firefox und Chrome unterstützt, wurde jedoch im Grunde genommen durch das qualitativ hochwertigere WebM-Format ersetzt.

Es gibt einige Sonderfälle. Beispielsweise wird für einige Audioarten die Codierung häufig ohne Container oder mit einem vereinfachten Container gespeichert. Ein solches Beispiel ist der FLAC-Codec, der am häufigsten in FLAC-Dateien gespeichert wird, die nur rohe FLAC-Tracks sind.

Ein weiteres Beispiel ist die immer beliebte MP3-Datei. Eine „MP3-Datei“ ist tatsächlich ein MPEG-1 Audio Layer III (MP3) Audiotrack, der innerhalb eines MPEG- oder MPEG-2-Containers gespeichert ist. Das ist besonders interessant, da, obwohl die meisten Browser die Verwendung von MPEG-Medien in den {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elementen nicht unterstützen, sie MP3 aufgrund seiner Beliebtheit dennoch unterstützen können.

Ein Audioplayer wird dazu tendieren einen Audiotrack direkt abzuspielen, z.B. eine MP3- oder Ogg-Datei. Diese benötigen keine Container.

#### Unterstützung von Mediendateien in Browsern

> [!NOTE]
> Einige beliebte Formate, wie MP3 und MP4/H.264, sind großartig, aber durch Patente belastet; das heißt, es gibt Patente, die einige oder alle Technologien abdecken, auf denen sie basieren. In den Vereinigten Staaten waren Patente auf MP3 bis 2017 gültig und H.264 ist durch Patente mindestens bis 2027 belastet.
>
> Aufgrund dieser Patente müssen Browser, die Unterstützung für diese Codecs implementieren möchten, in der Regel enorme Lizenzgebühren zahlen. Außerdem ziehen es einige Personen vor, eingeschränkte Software zu vermeiden und verwenden lieber nur offene Formate. Aufgrund dieser rechtlichen und Vorzugsgründe stehen Webentwickler vor der Herausforderung, mehrere Formate zu unterstützen, um ihre gesamte Zielgruppe zu erreichen.

Die im vorherigen Abschnitt beschriebenen Codecs existieren, um Video und Audio in handhabbare Dateien zu komprimieren, da rohe Audio- und Videodateien beide außerordentlich groß sind. Jeder Webbrowser unterstützt eine Reihe von **[Codecs](/de/docs/Glossary/Codec)**, wie Vorbis oder H.264, die verwendet werden, um die komprimierten Audio- und Videodaten in Binärdaten umzuwandeln und zurück. Jeder Codec bietet seine eigenen Vor- und Nachteile, und jeder Container kann ebenfalls seine eigenen positiven und negativen Merkmale haben, die Ihre Entscheidungen über welche zu verwenden beeinflussen.

Die Dinge werden etwas komplizierter, da nicht nur jeder Browser ein unterschiedliches Set von Containerdateiformaten unterstützt, sondern auch eine unterschiedliche Auswahl an Codecs. Um die Wahrscheinlichkeit zu maximieren, dass Ihre Website oder App im Browser eines Benutzers funktioniert, müssen Sie möglicherweise jede von Ihnen verwendete Mediendatei in mehreren Formaten bereitstellen. Wenn Ihre Website und der Browser des Benutzers kein gemeinsames Medienformat haben, werden Ihre Medien nicht abgespielt.

Aufgrund der Komplexität, um sicherzustellen, dass die Medien Ihrer App auf jeder Kombination von Browsern, Plattformen und Geräten, die Sie erreichen möchten, angesehen werden können, kann die Wahl der besten Kombination von Codecs und Containern eine komplizierte Aufgabe sein. Lesen Sie [Die Wahl des richtigen Containers](/de/docs/Web/Media/Formats/Containers#choosing_the_right_container), um Hilfe bei der Auswahl des Containerdateiformats zu erhalten, das am besten für Ihre Bedürfnisse geeignet ist; lesen Sie auch [Die Wahl eines Video-Codecs](/de/docs/Web/Media/Formats/Video_codecs#choosing_a_video_codec) und [Die Wahl eines Audio-Codecs](/de/docs/Web/Media/Formats/Audio_codecs#choosing_an_audio_codec), um Hilfe bei der Auswahl der ersten Mediencodecs für Ihre Inhalte und Zielgruppe zu erhalten.

Ein weiterer Punkt, den Sie beachten sollten: Mobile Browser unterstützen möglicherweise zusätzliche Formate, die nicht von ihren Desktop-Äquivalenten unterstützt werden, genauso wie sie möglicherweise nicht alle Formate, die die Desktop-Version unterstützt, unterstützen. Darüber hinaus können sowohl Desktop- als auch mobile Browser so ausgelegt sein, dass sie die Medienwiedergabe auslagern (entweder für alle Medien oder nur für bestimmte Typen, die sie intern nicht handhaben können). Das bedeutet, dass die Unterstützung von Medien teilweise davon abhängt, welche Software der Benutzer installiert hat.

Wie machen wir das also? Sehen Sie sich das folgende [aktualisierte Beispiel](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) ([probiere es hier live](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) aus) an:

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

Hier haben wir das `src`-Attribut aus dem eigentlichen {{HTMLElement("video")}}-Tag entfernt und stattdessen separate {{htmlelement("source")}}-Elemente eingefügt, die auf ihre eigenen Quellen verweisen. In diesem Fall wird der Browser die {{HTMLElement("source")}}-Elemente durchgehen und das erste abspielen, das er mit dem Codec unterstützen kann. Das Einfügen von WebM- und MP4-Quellen sollte ausreichen, um Ihr Video heutzutage auf den meisten Plattformen und Browsern abzuspielen.

Jedes `<source>`-Element hat auch ein [`type`](/de/docs/Web/HTML/Element/source#type)-Attribut. Dies ist optional, jedoch wird empfohlen, es hinzuzufügen. Das `type`-Attribut enthält den [MIME-Typ](/de/docs/Glossary/MIME_type) der Datei, die durch `<source>` angegeben wird, und Browser können das `type` nutzen, um Videos, die sie nicht verstehen, sofort zu überspringen. Wenn `type` nicht enthalten ist, laden die Browser die Datei herunter und versuchen sie nacheinander abzuspielen, bis sie eine finden, die funktioniert, was offensichtlich Zeit kostet und eine unnötige Verwendung von Ressourcen darstellt.

Lesen Sie unseren [Leitfaden zu Medientypen und Formaten](/de/docs/Web/Media/Formats), um Hilfe bei der Auswahl der besten Container und Codecs für Ihre Bedürfnisse zu erhalten sowie um sich über die richtigen MIME-Typen, die jeweils spezifiziert werden sollen, zu informieren.

### Andere \<video>-Features

Es gibt eine Reihe anderer Features, die Sie beim Anzeigen eines HTML-Videos hinzufügen können. Sehen Sie sich unser nächstes Beispiel an:

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

![Ein Videoplayer mit einem Posterbild, das vor dem Abspielen angezeigt wird. Das Posterbild sagt HTML video example, OMG hell yeah!](poster_screenshot_updated.png)

Die Merkmale umfassen:

- [`width`](/de/docs/Web/HTML/Element/video#width) und [`height`](/de/docs/Web/HTML/Element/video#height)
  - : Sie können die Videogröße entweder mit diesen Attributen oder mit [CSS](/de/docs/Glossary/CSS) steuern. In beiden Fällen behalten Videos ihr natives Breiten-Höhen-Verhältnis — bekannt als **Seitenverhältnis**. Wenn das Seitenverhältnis nicht mit den von Ihnen festgelegten Größen beibehalten wird, wächst das Video, um den Raum horizontal zu füllen, und der nicht gefüllte Raum erhält standardmäßig eine einheitliche Hintergrundfarbe.
- [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)
  - : Lässt die Audio- oder Videowiedergabe sofort starten, während der Rest der Seite geladen wird. Es wird empfohlen, keine automatisch abspielenden Videos (oder Audios) auf Ihren Seiten zu verwenden, da Benutzer dies wirklich störend finden können.
- [`loop`](/de/docs/Web/HTML/Element/video#loop)
  - : Lässt das Video (oder Audio) jedes Mal, wenn es endet, von vorne beginnen. Dies kann ebenfalls störend sein, verwenden Sie es also nur, wenn es wirklich notwendig ist.
- [`muted`](/de/docs/Web/HTML/Element/video#muted)
  - : Lässt die Medien standardmäßig ohne Ton abspielen.
- [`poster`](/de/docs/Web/HTML/Element/video#poster)
  - : Die URL eines Bildes, das angezeigt wird, bevor das Video abgespielt wird. Es ist gedacht, um als Splash-Screen oder Werbebild zu dienen.
- [`preload`](/de/docs/Web/HTML/Element/video#preload)

  - : Wird für das Puffern großer Dateien verwendet; es kann einen von drei Werten annehmen:

    - `"none"` puffert die Datei nicht
    - `"auto"` puffert die Mediendatei
    - `"metadata"` puffert nur die Metadaten der Datei

Sie können das obige Beispiel [live auf GitHub abspielen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html)). Beachten Sie, dass wir in der Live-Version das `autoplay`-Attribut nicht eingebaut haben – wenn das Video sofort nach dem Laden der Seite abgespielt wird, sehen Sie das Poster nicht!

### Das \<audio>-Element

Das {{htmlelement("audio")}}-Element funktioniert genau wie das {{htmlelement("video")}}-Element, mit ein paar kleinen Unterschieden, die unten aufgeführt sind. Ein typisches Beispiel könnte so aussehen:

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

Das ergibt in einem Browser etwas in dieser Art:

![Ein einfacher Audioplayer mit einem Play-Button, Timer, Lautstärkeregler und Fortschrittsbalken](audio-player.png)

> [!NOTE]
> Sie können das [Audio-Demo live ausführen](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) auf GitHub (sehen Sie sich auch den [Quellcode des Audioplayers](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) an).

Es nimmt weniger Platz ein als ein Videoplayer, da es keine visuelle Komponente gibt – Sie müssen nur Steuerelemente für die Wiedergabe des Audios anzeigen. Weitere Unterschiede zu HTML-Video sind wie folgt:

- Das {{htmlelement("audio")}}-Element unterstützt nicht die `width`/`height`-Attribute – es gibt wieder keine visuelle Komponente, daher gibt es nichts, dem eine Breite oder Höhe zugewiesen werden könnte.
- Es unterstützt auch nicht das `poster`-Attribut – wieder keine visuelle Komponente.

Ansonsten unterstützt `<audio>` alle gleichen Features wie `<video>` – lesen Sie die obigen Abschnitte für weitere Informationen zu diesen.

## Anzeigen von Videotextspuren

Jetzt werden wir ein etwas fortgeschritteneres Konzept besprechen, von dem es wirklich nützlich ist, zu wissen. Viele Menschen können oder möchten die Audio-/Video-Inhalte, die sie im Web finden, zumindest zu bestimmten Zeiten nicht hören. Zum Beispiel:

- Viele Menschen haben auditive Beeinträchtigungen (wie Schwerhörigkeit oder Gehörlosigkeit), sodass sie das Audio nicht klar hören können, wenn überhaupt.
- Andere können das Audio nicht hören, weil sie sich in lauten Umgebungen befinden (wie in einer überfüllten Bar, wenn ein Sportspiel gezeigt wird).
- In ähnlicher Weise können in Umgebungen, in denen das Abspielen des Audios eine Ablenkung oder Störung darstellen würde (wie in einer Bibliothek oder wenn ein Partner versucht zu schlafen), Untertitel sehr nützlich sein.
- Menschen, die die Sprache des Videos nicht sprechen, möchten möglicherweise eine Textabschrift oder sogar eine Übersetzung, um ihnen zu helfen, die Medieninhalte zu verstehen.

Wäre es nicht schön, wenn Sie diesen Personen ein Transkript der in den Audio-/Videoinhalten gesprochenen Worte zur Verfügung stellen könnten? Nun, das können Sie dank HTML-Video. Dazu verwenden wir das [WebVTT](/de/docs/Web/API/WebVTT_API)-Dateiformat und das {{htmlelement("track")}}-Element.

> [!NOTE]
> "Transkribieren" bedeutet, "gesprochene Wörter als Text niederzuschreiben." Der resultierende Text ist ein "Transkript."

WebVTT ist ein Format zum Schreiben von Textdateien, die mehrere Textteile zusammen mit Metadaten enthalten, wie die Zeit im Video, zu der jeder Text angezeigt werden soll, und sogar eingeschränkte Stil- und Positionierungsinformationen. Diese Textstrings werden als **Cues** bezeichnet, und es gibt mehrere Arten von Cues, die für verschiedene Zwecke verwendet werden. Die häufigsten Cues sind:

- Untertitel
  - : Übersetzungen von fremdsprachigem Material, für Personen, die die im Audio gesprochenen Wörter nicht verstehen.
- Untertitel (auch bekannt als Captions)
  - : Synchronisierte Transkriptionen des Dialogs oder Beschreibungen signifikanter Geräusche, um Personen, die das Audio nicht hören können, zu helfen zu verstehen, was vor sich geht.
- Zeitbeschreibungen
  - : Text, der vom Medienplayer gesprochen werden sollte, um wichtige visuelle Elemente für blinde oder anderweitig sehbehinderte Benutzer zu beschreiben.

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

Um dies zusammen mit der HTML-Medienwiedergabe anzuzeigen, müssen Sie:

1. Speichern Sie die Datei als `.vtt`-Datei irgendwo, von wo der Server sie bedienen kann (siehe unten), zum Beispiel im gleichen Verzeichnis wie die HTML-Datei.
2. Verknüpfen Sie die `.vtt`-Datei mit dem {{htmlelement("track")}}-Element. `<track>` sollte innerhalb von `<audio>` oder `<video>` platziert werden, jedoch nach allen `<source>`-Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Element/track#kind)-Attribut, um anzugeben, ob die Cues `subtitles`, `captions` oder `descriptions` sind. Außerdem verwenden Sie [`srclang`](/de/docs/Web/HTML/Element/track#srclang), um dem Browser mitzuteilen, in welcher Sprache Sie die Untertitel geschrieben haben. Schließlich fügen Sie [`label`](/de/docs/Web/HTML/Element/track#label) hinzu, um den Lesern zu helfen, die Sprache zu identifizieren, die sie suchen.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

Um dies auszuprobieren, müssen Sie die Dateien auf einem [lokalen HTTP-Server](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) hosten. Im Browserausgang sehen Sie ein Video mit angezeigten Untertiteln, ähnlich wie dieses:

![Video-Player mit Standardelementen wie Play, Stopp, Lautstärke und Untertitel an- und ausschalten. Das Video zeigt eine Szene eines Mannes, der eine speerartige Waffe hält, und ein Untertitel lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für weitere Details, einschließlich wie man Labels hinzufügt, lesen Sie bitte [Hinzufügen von Untertiteln und Untertiteln zu HTML-Videos](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können [das Beispiel](https://iandevlin.github.io/mdn/video-player-with-captions/), das zu diesem Artikel gehört, auf GitHub finden, geschrieben von Ian Devlin (siehe auch [den Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions)). Dieses Beispiel verwendet etwas JavaScript, um Benutzern zu erlauben, zwischen verschiedenen Untertiteln zu wählen. Beachten Sie, dass Sie den "CC"-Button drücken und eine Option auswählen müssen — Englisch, Deutsch oder Spanisch — um die Untertitel zu aktivieren.

> [!NOTE]
> Texttracks helfen Ihnen auch bei [SEO](/de/docs/Glossary/SEO), da Suchmaschinen besonders auf Text gedeihen. Texttracks ermöglichen es Suchmaschinen sogar, direkt auf eine Stelle im Video zu verlinken.

### Active Learning: Einbetten Ihrer eigenen Audio- und Videodateien

Für dieses Active-Learning möchten wir (idealerweise), dass Sie hinausgehen in die Welt und einige Ihrer eigenen Videos und Audios aufnehmen — die meisten Handys gestatten heute, Audio und Video sehr einfach aufzunehmen und, vorausgesetzt, Sie können es auf Ihren Computer übertragen, können Sie es verwenden. Sie müssen möglicherweise einige Konvertierungen durchführen, um zu einem WebM und MP4 im Fall von Video und einem MP3 und Ogg im Fall von Audio zu gelangen, aber es gibt genügend Programme, die Ihnen dies ohne große Mühe erlauben, wie [Miro Video Converter](http://www.mirovideoconverter.com/) und [Audacity](https://sourceforge.net/projects/audacity/). Wir möchten, dass Sie es versuchen!

Wenn Sie keine Video- oder Audioquellen haben, können Sie gerne unsere [Beispiel-Audio- und Videodateien](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) verwenden, um diese Übung durchzuführen. Sie können auch unseren Beispielcode zur Referenz verwenden.

Wir möchten, dass Sie:

1. Speichern Sie Ihre Audio- und Videodateien in einem neuen Verzeichnis auf Ihrem Computer.
2. Erstellen Sie eine neue HTML-Datei im gleichen Verzeichnis, die `index.html` genannt wird.
3. Fügen Sie {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente zur Seite hinzu; lassen Sie sie die Standard-Bedienelemente des Browsers anzeigen.
4. Geben Sie beiden {{HTMLElement("source")}}-Elemente, sodass Browser das am besten unterstützte Audioformat finden und laden. Diese sollten Attribute vom Typ [`type`](/de/docs/Web/HTML/Element/source#type) enthalten.
5. Geben Sie dem `<video>`-Element ein Poster, das angezeigt wird, bevor das Video gestartet wird. Haben Sie Spaß beim Erstellen Ihres eigenen Posterbildes.

Als zusätzlichen Bonus könnten Sie versuchen, Texttracks zu recherchieren und auszuprobieren, wie man Untertitel zu Ihrem Video hinzufügt.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding). Beachten Sie, dass die dritte Bewertungsfrage in diesem Test Kenntnisse einiger der im [nächsten Artikel](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies) behandelten Techniken annimmt, daher möchten Sie diesen vielleicht lesen, bevor Sie versuchen, sie zu beantworten.

## Zusammenfassung

Und das war's — wir hoffen, Sie hatten Spaß beim Spielen mit Video und Audio auf Webseiten! Im nächsten Artikel werden wir uns [andere Möglichkeiten zur Einbettung von Inhalten](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies) im Web ansehen, unter Verwendung von Technologien wie {{htmlelement("iframe")}} und {{htmlelement("object")}}.

## Siehe auch

- Die HTML-Medienelemente: {{htmlelement("audio")}}, {{htmlelement("video")}}, {{htmlelement("source")}}, und {{htmlelement("track")}}
- [Hinzufügen von Untertiteln und Untertiteln zu Videos](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
- [Audio- und Videoübermittlung](/de/docs/Web/Media/Audio_and_video_delivery): VIELE Details über das Einfügen von Audio und Video auf Webseiten mit HTML und JavaScript.
- [Audio- und Videomanipulation](/de/docs/Web/Media/Audio_and_video_manipulation): VIELE Details über die Manipulation von Audio und Video mit JavaScript (zum Beispiel das Hinzufügen von Filtern).
- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden für Medientypen und -formate im Web](/de/docs/Web/Media/Formats)
- [Ereignisreferenz > Medien](/de/docs/Web/Events#media)

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Images_in_HTML", "Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding")}}
