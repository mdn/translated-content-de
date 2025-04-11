---
title: Zugängliche Multimedia
slug: Learn_web_development/Core/Accessibility/Multimedia
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Mobile", "Learn_web_development/Core/Accessibility")}}

Eine weitere Kategorie von Inhalten, die Barrierefreiheitsprobleme verursachen kann, ist Multimedia. Video-, Audio- und Bildinhalte benötigen geeignete textuelle Alternativen, damit sie von unterstützenden Technologien und deren Nutzern verstanden werden können. Dieser Artikel zeigt, wie das gemacht wird.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den in vorherigen Lektionen des Moduls gelehrten Barrierefreiheits-Best-Practices.</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Probleme mit nativen Mediaplayern und wie Sie eigene benutzerdefinierte erstellen.</li>
          <li>Der Zweck von Audiotranskriptionen und Textspuren (Untertitel, Übersetzungen usw.) zur Zugänglichkeit von Audio- und Videoinhalten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Multimedia und Barrierefreiheit

Bisher haben wir in diesem Modul eine Vielzahl von Inhalten betrachtet und was getan werden muss, um deren Zugänglichkeit zu gewährleisten, angefangen von einfachem Textinhalt über Datentabellen, Bilder, native Steuerungen wie Formularelemente und Buttons bis hin zu komplexeren Markup-Strukturen (mit [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)-Attributen).

In diesem Artikel schauen wir uns jedoch eine andere allgemeine Inhaltsklasse an, die vermutlich nicht so leicht zugänglich zu machen ist — Multimedia. Bilder, Audiospuren, Videos, {{htmlelement("canvas")}}-Elemente usw., sind nicht so leicht von Screenreadern zu verstehen oder durch die Tastatur zu navigieren, und wir müssen ihnen Hilfestellung leisten.

Aber verzweifeln Sie nicht — hier werden wir Ihnen helfen, durch die verfügbaren Techniken zur leichteren Zugänglichkeit von Multimedia zu navigieren.

## Einfache Bilder

Wir haben bereits einfache Textalternativen für HTML-Bilder in unserem Artikel [HTML: A good basis for accessibility](/de/docs/Learn_web_development/Core/Accessibility/HTML) behandelt — Sie können dort die vollständigen Details nachlesen. Kurz gesagt, sollten Sie sicherstellen, dass visuelle Inhalte, wo möglich, eine alternative Textbeschreibung haben, die von Screenreadern aufgenommen und den Nutzern vorgelesen werden kann.

Zum Beispiel:

```html
<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
```

## Zugängliche Audio- und Videosteuerungen

Die Implementierung von Steuerungen für Web-basierte Audio-/Video-Inhalte sollte kein Problem sein, oder? Lassen Sie uns das untersuchen.

### Das Problem mit nativen HTML-Steuerungen

HTML-Video- und Audio-Instanzen enthalten sogar eine Reihe eingebauter Steuerungen, die es Ihnen ermöglichen, die Medien direkt aus der Box zu steuern. Zum Beispiel (siehe `native-controls.html` [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/native-controls.html) und [live](https://mdn.github.io/learning-area/accessibility/multimedia/native-controls.html)):

```html
<audio controls>
  <source src="viper.mp3" type="audio/mp3" />
  <source src="viper.ogg" type="audio/ogg" />
  <p>
    Your browser doesn't support HTML audio. Here is a
    <a href="viper.mp3">link to the audio</a> instead.
  </p>
</audio>

<br />

<video controls>
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    Your browser doesn't support HTML video. Here is a
    <a href="rabbit320.mp4">link to the video</a> instead.
  </p>
</video>
```

Das `controls`-Attribut bietet Wiedergabe-/Pause-Tasten, eine Suchleiste usw. — die grundlegenden Steuerungen, die Sie von einem Mediaplayer erwarten würden. So sieht es in Firefox und Chrome aus:

![Screenshot von Videosteuerungen in Firefox](native-controls-firefox.png)

![Screenshot von Videosteuerungen in Chrome](native-controls-chrome.png)

Jedoch gibt es Probleme mit diesen Steuerungen:

- Sie sind in den meisten Browsern nicht tastaturzugänglich, d.h. Sie können nicht zwischen den Steuerungen innerhalb des nativen Players wechseln. Opera und Chrome bieten dies in gewissem Maße, aber es ist dennoch nicht ideal.
- Verschiedene Browser bieten den nativen Steuerungen unterschiedliche Stilgestaltungen und Funktionen, und sie sind nicht gestaltbar, was bedeutet, dass sie nicht einfach an einen Stil-Leitfaden einer Website angepasst werden können.

Um dies zu beheben, können wir unsere eigenen benutzerdefinierten Steuerungen erstellen. Schauen wir uns an, wie das geht.

### Erstellen benutzerdefinierter Audio- und Videosteuerungen

HTML-Video und -Audio teilen eine API — HTML Media Element — die es Ihnen ermöglicht, benutzerdefinierte Funktionen zu Tasten und anderen Steuerungen zuzuordnen — die Sie beide selbst definieren.

Nehmen wir das obige Video-Beispiel und fügen ihm benutzerdefinierte Steuerungen hinzu.

#### Grundlegende Einrichtung

Zuerst laden Sie sich eine Kopie unseres [custom-controls-start.html](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls-start.html), [custom-controls.css](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls.css), [rabbit320.mp4](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.mp4) und [rabbit320.webm](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.webm) Dateien herunter und speichern sie in einem neuen Verzeichnis auf Ihrer Festplatte.

Erstellen Sie eine neue Datei namens main.js und speichern Sie sie im gleichen Verzeichnis.

Zuerst schauen wir uns das HTML für den Videoplayer an, im HTML:

```html
<section class="player">
  <video controls>
    <source src="rabbit320.mp4" type="video/mp4" />
    <source src="rabbit320.webm" type="video/webm" />
    <p>
      Your browser doesn't support HTML video. Here is a
      <a href="rabbit320.mp4">link to the video</a> instead.
    </p>
  </video>

  <div class="controls">
    <button class="play-pause">Play</button>
    <button class="stop">Stop</button>
    <button class="rwd">Rwd</button>
    <button class="fwd">Fwd</button>
    <div class="time">00:00</div>
  </div>
</section>
```

#### Grundlegende Einrichtung von JavaScript

Wir haben einige einfache Steuerknöpfe unter unserem Video eingefügt. Diese Steuerungen werden natürlich standardmäßig nichts tun; um Funktionen hinzuzufügen, verwenden wir JavaScript.

Zuerst müssen wir Referenzen zu jeder der Steuerungen speichern — fügen Sie das folgende am Anfang Ihrer JavaScript-Datei hinzu:

```js
const playPauseBtn = document.querySelector(".play-pause");
const stopBtn = document.querySelector(".stop");
const rwdBtn = document.querySelector(".rwd");
const fwdBtn = document.querySelector(".fwd");
const timeLabel = document.querySelector(".time");
```

Als Nächstes müssen wir eine Referenz zum Video-/Audio-Player selbst holen — fügen Sie diese Zeile unter den vorherigen Zeilen hinzu:

```js
const player = document.querySelector("video");
```

Dies hält eine Referenz zu einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt, das mehrere nützliche Eigenschaften und Methoden enthält, die verwendet werden können, um unsere Tasten zu verkabeln.

Bevor wir zur Erstellung unserer Tastenfunktionalität übergehen, entfernen wir die nativen Steuerungen, damit sie nicht in den Weg unserer benutzerdefinierten Steuerungen kommen. Fügen Sie das folgende wieder am Ende Ihres JavaScript hinzu:

```js
player.removeAttribute("controls");
```

Auf diese Weise erreicht man, dass, falls unser JavaScript aus irgendeinem Grund fehlschlägt, der Nutzer dennoch einige Steuerungen zur Verfügung hat.

#### Verkabelung unserer Tasten

Zuerst richten wir die Wiedergabe-/Pause-Taste ein. Wir können diese mit einer einfachen bedingten Funktion zwischen Wiedergabe und Pause umschalten lassen, wie die folgende. Fügen Sie es am Ende Ihres Codes hinzu:

```js
playPauseBtn.onclick = () => {
  if (player.paused) {
    player.play();
    playPauseBtn.textContent = "Pause";
  } else {
    player.pause();
    playPauseBtn.textContent = "Play";
  }
};
```

Als Nächstes fügen Sie diesen Code unten hinzu, der die Stopp-Taste steuert:

```js
stopBtn.onclick = () => {
  player.pause();
  player.currentTime = 0;
  playPauseBtn.textContent = "Play";
};
```

Es gibt keine `stop()`-Funktion verfügbar auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)s, so dass wir stattdessen `pause()` verwenden und gleichzeitig die `currentTime` auf 0 setzen.

Als Nächstes unsere Zurückspul- und Vorspul-Tasten — fügen Sie die folgenden Blöcke am Ende Ihres Codes hinzu:

```js
rwdBtn.onclick = () => {
  player.currentTime -= 3;
};

fwdBtn.onclick = () => {
  player.currentTime += 3;
  if (player.currentTime >= player.duration || player.paused) {
    player.pause();
    player.currentTime = 0;
    playPauseBtn.textContent = "Play";
  }
};
```

Diese sind sehr simpel, sie addieren oder subtrahieren einfach 3 Sekunden zur `currentTime`, jedes Mal wenn sie geklickt werden. In einem echten Videoplayer würden Sie wahrscheinlich eine aufwändigere Suchleiste oder Ähnliches wollen.

Beachten Sie, dass wir auch prüfen, ob die `currentTime` größer als die gesamte Medien-`duration` ist oder ob die Medien nicht abgespielt werden, wenn die `fwdBtn` gedrückt wird. Wenn eine dieser Bedingungen wahr ist, stoppen wir das Video, um zu vermeiden, dass die Benutzeroberfläche fehlerhaft ist, wenn der Nutzer versucht, vorwärts zu spulen, während das Video nicht abgespielt wird, oder über das Ende des Videos hinaus.

Zuletzt fügen Sie das folgende am Ende des Codes hinzu, um die Anzeige der abgelaufenen Zeit zu steuern:

```js
player.ontimeupdate = () => {
  const minutes = Math.floor(player.currentTime / 60);
  const seconds = Math.floor(player.currentTime - minutes * 60);
  const minuteValue = minutes < 10 ? `0${minutes}` : minutes;
  const secondValue = seconds < 10 ? `0${seconds}` : seconds;

  const mediaTime = `${minuteValue}:${secondValue}`;
  timeLabel.textContent = mediaTime;
};
```

Jedes Mal, wenn sich die Zeit aktualisiert (einmal pro Sekunde), rufen wir diese Funktion auf. Sie berechnet die Anzahl der Minuten und Sekunden aus dem gegebenen `currentTime`-Wert (der in Sekunden ist), fügt eine führende 0 hinzu, wenn der Minuten- oder Sekundenwert kleiner als 10 ist, und erstellt dann den Anzeigetext und fügt ihn dem Zeitlabel hinzu.

#### Weiterführende Literatur

Dies gibt Ihnen eine grundlegende Idee, wie Sie benutzerdefinierte Spieler-Funktionen zu Video-/Audio-Player-Instanzen hinzufügen können. Für weitere Informationen, wie Sie komplexere Funktionen zu Video-/Audio-Playern hinzufügen können, siehe:

- [Audio und Video Bereitstellung](/de/docs/Web/Media/Guides/Audio_and_video_delivery)
- [Video-Player-Stilgrundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
- [Einen plattformübergreifenden Video-Player erstellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)

Wir haben auch ein fortgeschrittenes Beispiel erstellt, um zu zeigen, wie Sie ein objektorientiertes System erstellen könnten, das jeden Video- und Audioplayer auf der Seite findet (egal wie viele es sind) und unsere benutzerdefinierten Steuerungen hinzufügt. Siehe [custom-controls-oojs](https://mdn.github.io/learning-area/accessibility/multimedia/custom-controls-OOJS/) (auch [siehe den Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/custom-controls-OOJS)).

## Audiotranskriptionen

Um gehörlosen Menschen den Zugang zu Audioinhalten zu ermöglichen, müssen Sie Texttranskriptionen erstellen. Diese können auf derselben Seite wie das Audio, auf irgendeine Weise eingebunden oder auf einer separaten Seite verlinkt sein.

Bei der tatsächlichen Erstellung der Transkription haben Sie folgende Optionen:

- Kommerzielle Dienstleistungen — Sie könnten einen Fachmann für die Transkription bezahlen, siehe zum Beispiel Firmen wie [Scribie](https://scribie.com/), [Casting Words](https://castingwords.com/) oder [Rev](https://www.rev.com/). Schauen Sie sich um und fragen Sie nach Rat, um sicherzustellen, dass Sie ein renommiertes Unternehmen finden, mit dem Sie effektiv zusammenarbeiten können.
- Gemeinschafts-/Basis-/Selbsttranskription — Wenn Sie Teil einer aktiven Gemeinschaft oder eines Teams an Ihrem Arbeitsplatz sind, könnten Sie sie um Hilfe bei den Übersetzungen bitten. Sie könnten auch selbst versuchen, sie zu erstellen.
- Automatisierte Dienste — Es gibt KI-Dienste, wie [Trint](https://trint.com/) oder [Transcribear](https://transcribear.com/), die verfügbar sind. Laden Sie eine Video-/Audiodatei auf die Seite hoch, und sie transkribiert sie automatisch für Sie. Auf YouTube können Sie wählen, automatisierte Untertitel/Transkriptionen zu generieren. Je nachdem, wie klar das gesprochene Audio ist, wird die Qualität der entstehenden Transkription stark variieren.

Wie bei den meisten Dingen im Leben neigen Sie dazu, das zu bekommen, wofür Sie bezahlen; verschiedene Dienstleistungen werden in der Genauigkeit und der Zeit, die zur Erstellung der Transkription benötigt wird, variieren. Wenn Sie ein renommiertes Unternehmen oder einen KI-Dienst für die Transkription bezahlen, werden Sie es wahrscheinlich schnell und in hoher Qualität erledigt bekommen. Wenn Sie nicht dafür bezahlen wollen, werden Sie es wahrscheinlich in geringerer Qualität und/oder langsamer erledigt bekommen.

Es ist nicht in Ordnung, eine Audioressource zu veröffentlichen, aber zu versprechen, die Transkription später zu veröffentlichen — solche Versprechen werden oft nicht gehalten, was das Vertrauen zwischen Ihnen und Ihren Nutzern untergraben wird. Wenn das Audio, das Sie präsentieren, etwas wie ein persönliches Treffen oder eine live gesprochene Aufführung ist, wäre es akzeptabel, während der Vorstellung Notizen zu machen, sie vollständig zusammen mit dem Audio zu veröffentlichen und dann Hilfe bei der Bereinigung der Notizen zu suchen.

### Transkriptionsbeispiele

Wenn Sie einen automatisierten Dienst verwenden, müssen Sie wahrscheinlich die Benutzeroberfläche verwenden, die das Tool bietet. Schauen Sie sich zum Beispiel unser [Wait, ARIA Roles Have Categories?](https://www.youtube.com/watch?v=mwF-PpJOjMs) Video an und wählen Sie das Drei-Punkte-Menü (. . .) _> Show Transcript_. Sie sehen die Transkription in einem separaten Panel erscheinen.

Wenn Sie Ihre eigene Benutzeroberfläche erstellen, um Ihr Audio und das zugehörige Transkript zu präsentieren, können Sie es ganz nach Belieben tun, aber es könnte sinnvoll sein, es in einem anzeigbaren/versteckbaren Panel zu inkludieren; siehe unser [audio-transcript-ui](https://mdn.github.io/learning-area/accessibility/multimedia/audio-transcript-ui/) Beispiel (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/audio-transcript-ui)).

### Audio-Beschreibungen

In Fällen, in denen visuelle Inhalte Ihr Audio begleiten, müssen Sie Audio-Beschreibungen bereitstellen, um diesen zusätzlichen Inhalt zu beschreiben.

In vielen Fällen wird dies in Form von Video erfolgen, in diesem Fall können Sie Untertitel mit den in diesem Artikel beschriebenen Techniken implementieren.

Es gibt jedoch einige Sonderfälle. Sie könnten zum Beispiel eine Audioaufnahme eines Meetings haben, auf die eine begleitende Ressource wie eine Tabelle oder ein Diagramm Bezug nimmt. In solchen Fällen sollten Sie sicherstellen, dass die Ressourcen zusammen mit dem Audio + Transkript bereitgestellt werden und speziell in den Abschnitten, in denen im Transkript darauf verwiesen wird, verlinkt werden. Dies wird natürlich allen Nutzern helfen, nicht nur gehörlosen Menschen.

> [!NOTE]
> Ein Audiotranskript wird im Allgemeinen mehreren Benutzergruppen helfen. Es ermöglicht nicht nur gehörlosen Nutzern den Zugang zu den im Audio enthaltenen Informationen. Denken Sie auch an Benutzer mit einer Verbindung mit niedriger Bandbreite, die das Herunterladen des Audios als unpraktisch empfinden würden. Denken Sie auch an einen Nutzer in einer lauten Umgebung wie einer Kneipe oder Bar, der versucht, auf die Informationen zuzugreifen, sie aber aufgrund des Lärms nicht hören kann.

## Video-Textspuren

Um Videos zugänglich für Gehörlose, Sehbehinderte oder andere Nutzergruppen zu machen (wie diejenigen mit niedriger Bandbreite oder die die im Video gesprochene Sprache nicht verstehen), müssen Sie Textspuren zusammen mit Ihren Videoinhalten einfügen.

> [!NOTE]
> Textspuren sind auch für potenziell jeden Nutzer nützlich, nicht nur für solche mit Behinderungen. Beispielsweise können einige Nutzer das Audio nicht hören, weil sie sich in lauten Umgebungen befinden (wie in einer überfüllten Bar, wenn ein Sportspiel gezeigt wird) oder möchten andere nicht stören, wenn sie sich in einem ruhigen Ort befinden (wie in einer Bibliothek).

Dies ist kein neues Konzept — Fernsehdienste bieten schon seit langer Zeit Untertitelung an:

![Rahmen aus einem alten Cartoon mit Untertiteln "Good work, Goldie. Keep it up!"](closed-captions.png)

Viele Länder bieten englische Filme mit Untertiteln in ihren eigenen Landessprachen an, und auf DVDs sind häufig Untertitel in verschiedenen Sprachen verfügbar, wie unten gezeigt:

![Ein englischer Film mit deutschen Untertiteln "Emo, warum erkennst du nicht die Schonheit dieses Ortes?"](subtitles_german.png)

Es gibt verschiedene Arten von Textspuren für unterschiedliche Zwecke. Die Haupttypen, auf die Sie stoßen werden, sind:

- Untertitel — Zu Gunsten von gehörlosen Nutzern, die die Audiospur nicht hören können, einschließlich der gesprochenen Worte und kontextueller Informationen wie wer die Worte gesagt hat, wenn die Leute wütend oder traurig waren und welche Stimmung die Musik gerade erzeugt.
- Subtitles — Beinhalten Übersetzungen des Auditextes für Nutzer, die die gesprochene Sprache nicht verstehen.
- Beschreibungen — Diese beinhalten Beschreibungen für sehbehinderte Menschen, die das Video nicht sehen können, zum Beispiel wie die Szene aussieht.
- Kapitelüberschriften — Kapitelmarkierungen, die den Nutzern helfen sollen, die Medienressource zu navigieren.

### Implementierung von HTML-Video-Textspuren

Textspuren für die Anzeige mit HTML-Video müssen in WebVTT geschrieben werden, einem Textformat, das mehrere Textzeichenfolgen zusammen mit Metadaten enthält, wie zu welcher Zeit im Video jede Textzeichenfolge angezeigt werden soll, und sogar eingeschränkte Stil- und Positionierungsinformation. Diese Textzeichenfolgen werden Cues genannt.

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

Um dies zusammen mit dem HTML-Medien-Playback anzuzeigen, müssen Sie:

- Sie als .vtt-Datei an einem sinnvollen Ort speichern.
- Zur .vtt-Datei mit dem {{htmlelement("track")}}-Element verlinken. `<track>` sollte innerhalb von `<audio>` oder `<video>` platziert werden, aber nach allen `<source>`-Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind)-Attribut, um anzugeben, ob die Cues Untertitel, Beschreibungen oder Kapitelüberschriften sind. Außerdem verwenden Sie [`srclang`](/de/docs/Web/HTML/Reference/Elements/track#srclang), um dem Browser mitzuteilen, in welcher Sprache die Untertitel geschrieben sind.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

Dies wird zu einem Video führen, das wie folgt Untertitel anzeigt:

![Videoplayer mit Standard-Steuerelementen wie Wiedergabe, Stopp, Lautstärke und Untertitel an- und aus. Das abgespielte Video zeigt eine Szene eines Mannes mit einem speerähnlichen Gegenstand, und ein Untertitel lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für weitere Details siehe [Adding captions and subtitles to HTML video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie finden [das Beispiel](https://iandevlin.github.io/mdn/video-player-with-captions/), das zu diesem Artikel auf GitHub gehört, geschrieben von Ian Devlin (sehen Sie auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions)). Dieses Beispiel verwendet JavaScript, um Benutzern die Wahl zwischen verschiedenen Untertiteln zu ermöglichen. Beachten Sie, dass um die Untertitel zu aktivieren, Sie die "CC"-Taste drücken und eine Option auswählen müssen — Englisch, Deutsch oder Spanisch.

> [!NOTE]
> Textspuren und Transkriptionen helfen Ihnen auch bei {{Glossary("SEO", "SEO")}}, da Suchmaschinen insbesondere auf Text angewiesen sind. Textspuren erlauben es Suchmaschinen sogar, direkt zu einem Punkt in der Mitte des Videos zu verlinken.

## Zusammenfassung

Dieses Kapitel hat eine Zusammenfassung der Barrierefreiheitsbedenken für Multimedia-Inhalte bereitgestellt, zusammen mit einigen praktischen Lösungen.

Es ist nicht immer einfach, Multimedia zugänglich zu machen. Wenn Sie zum Beispiel mit einem immersiven 3D-Spiel oder einer virtuellen Realität-App arbeiten, ist es ziemlich schwierig, Textalternativen für eine solche Erfahrung bereitzustellen, und Sie könnten argumentieren, dass sehbehinderte Nutzer nicht wirklich zur Zielgruppe für solche Apps gehören.

Sie können jedoch sicherstellen, dass eine solche App einen ausreichenden Farbkontrast und eine klare Darstellung hat, sodass sie für Personen mit Sehschwäche/Farbblindheit wahrnehmbar ist, und sie auch tastaturzugänglich machen. Denken Sie daran, dass es bei Barrierefreiheit darum geht, so viel wie möglich zu tun, anstatt immer 100 % Barrierefreiheit anzustreben, was oft unmöglich ist.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Mobile", "Learn_web_development/Core/Accessibility")}}
