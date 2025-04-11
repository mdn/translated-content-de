---
title: Barrierefreie Multimedia-Inhalte
slug: Learn_web_development/Core/Accessibility/Multimedia
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Mobile", "Learn_web_development/Core/Accessibility")}}

Eine weitere Kategorie von Inhalten, die Barrierefreiheitsprobleme verursachen kann, sind Multimedia-Inhalte. Video-, Audio- und Bildinhalte müssen mit geeigneten Textalternativen versehen werden, damit sie von unterstützenden Technologien und deren Nutzern verstanden werden können. Dieser Artikel zeigt, wie das geht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den besten Barrierefreiheitspraktiken, wie sie in den vorherigen Lektionen des Moduls gelehrt wurden.</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Probleme mit nativen Media-Playern und wie Sie Ihre eigenen erstellen können.</li>
          <li>Der Zweck von Audiotranskriptionen und Textspuren (Untertitel, Textunterschriften usw.) zur Zugänglichmachung von Audio- und Videoinhalten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Multimedia und Barrierefreiheit

Bisher haben wir in diesem Modul eine Vielzahl von Inhalten betrachtet und was getan werden muss, um deren Barrierefreiheit zu gewährleisten, angefangen bei einfachem Textinhalt über Datentabellen, Bilder, native Steuerelemente wie Formularelemente und Schaltflächen bis hin zu komplexeren Markup-Strukturen (mit [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)-Attributen).

Dieser Artikel befasst sich hingegen mit einer anderen allgemeinen Inhaltsklasse, für die es vermutlich nicht so einfach ist, Barrierefreiheit zu gewährleisten — Multimedia. Bilder, Tonspuren, Videos, {{htmlelement("canvas")}}-Elemente usw. werden von Bildschirmlesern nicht so leicht verstanden oder mit der Tastatur navigiert, und wir müssen ihnen helfen.

Aber keine Sorge — hier werden wir Ihnen helfen, die Techniken zu verstehen, die zur Verfügung stehen, um Multimedia zugänglicher zu machen.

## Einfache Bilder

Wir haben bereits in unserem Artikel [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) einfache Textalternativen für HTML-Bilder behandelt — Sie können dorthin zurückgehen, um alle Details nachzulesen. Kurz gesagt, Sie sollten sicherstellen, dass, wo immer möglich, visuelle Inhalte eine alternative Textdarstellung haben, die von Bildschirmlesern erfasst und ihren Benutzern vorgelesen werden kann.

Zum Beispiel:

```html
<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
```

## Zugängliche Audio- und Videosteuerungen

Das Implementieren von Steuerungen für webbasierte Audio-/Video-Inhalte sollte kein Problem sein, oder? Lassen Sie es uns untersuchen.

### Das Problem mit nativen HTML-Steuerelementen

HTML-Video- und Audio-Instanzen kommen sogar mit einer Reihe von eingebauten Steuerelementen, die es Ihnen ermöglichen, die Medien direkt aus der Box heraus zu steuern. Zum Beispiel (siehe `native-controls.html` [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/native-controls.html) und [live](https://mdn.github.io/learning-area/accessibility/multimedia/native-controls.html)):

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

Das `controls`-Attribut bietet Play/Pause-Schaltflächen, einen Suchbalken usw. — die grundlegenden Steuerelemente, die Sie von einem Mediaplayer erwarten würden. So sieht es in Firefox und Chrome aus:

![Screenshot von Video-Steuerungen in Firefox](native-controls-firefox.png)

![Screenshot von Video-Steuerungen in Chrome](native-controls-chrome.png)

Es gibt jedoch Probleme mit diesen Steuerelementen:

- Sie sind in den meisten Browsern nicht tastaturzugänglich, d.h. Sie können nicht zwischen den Steuerelementen im nativen Player tabben. Opera und Chrome bieten dies in gewissem Maße, aber es ist immer noch nicht ideal.
- Verschiedene Browser bieten den nativen Steuerelementen unterschiedliche Stile und Funktionalitäten, und sie sind nicht stilisierbar, was bedeutet, dass sie nicht einfach an einen Styleguide einer Website angepasst werden können.

Um dies zu beheben, können wir unsere eigenen benutzerdefinierten Steuerelemente erstellen. Sehen wir uns an, wie das geht.

### Erstellen benutzerdefinierter Audio- und Videosteuerungen

HTML-Video und -Audio teilen eine API — HTML Media Element — die es Ihnen ermöglicht, benutzerdefinierte Funktionen auf Schaltflächen und andere Steuerelemente zuzuordnen — sowohl auf die, die Sie selbst definieren.

Nehmen wir das Video-Beispiel von oben und fügen wir ihm benutzerdefinierte Steuerelemente hinzu.

#### Grundlegendes Setup

Holen Sie sich zuerst eine Kopie unserer Dateien [custom-controls-start.html](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls-start.html), [custom-controls.css](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls.css), [rabbit320.mp4](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.mp4) und [rabbit320.webm](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.webm) und speichern Sie sie in einem neuen Verzeichnis auf Ihrer Festplatte.

Erstellen Sie eine neue Datei namens main.js und speichern Sie sie im selben Verzeichnis.

Sehen wir uns zuerst den HTML-Code des Videoplayers an, im HTML:

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

#### JavaScript-Grundeinrichtung

Wir haben unter dem Video einige einfache Steuerungsschaltflächen eingefügt. Diese Steuerelemente werden natürlich standardmäßig nichts tun; um Funktionalität hinzuzufügen, werden wir JavaScript verwenden.

Zuerst müssen wir Referenzen auf jedes der Steuerelemente speichern — fügen Sie die folgenden Zeilen am Anfang Ihrer JavaScript-Datei hinzu:

```js
const playPauseBtn = document.querySelector(".play-pause");
const stopBtn = document.querySelector(".stop");
const rwdBtn = document.querySelector(".rwd");
const fwdBtn = document.querySelector(".fwd");
const timeLabel = document.querySelector(".time");
```

Als nächstes müssen wir eine Referenz auf den Video-/Audioplayer selbst abrufen — fügen Sie diese Zeile unter den vorherigen Zeilen hinzu:

```js
const player = document.querySelector("video");
```

Dies hält eine Referenz zu einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt, das mehrere nützliche Eigenschaften und Methoden hat, die verwendet werden können, um Funktionalität an unsere Schaltflächen anzuschließen.

Bevor wir uns der Erstellung unserer Schaltflächenfunktionalität widmen, entfernen wir die nativen Steuerelemente, damit sie nicht unsere benutzerdefinierten Steuerelemente beeinträchtigen. Fügen Sie das Folgende hinzu, ebenfalls am Ende Ihres JavaScripts:

```js
player.removeAttribute("controls");
```

Dies auf diese Weise zu tun, anstatt das `controls`-Attribut von Anfang an nicht einzuschließen, hat den Vorteil, dass, falls unser JavaScript aus irgendeinem Grund fehlschlägt, der Benutzer dennoch einige Steuerelemente zur Verfügung hat.

#### Verkabelung unserer Schaltflächen

Zuerst richten wir die Play/Pause-Schaltfläche ein. Wir können diese mit einer einfachen bedingten Funktion zwischen Abspielen und Pausieren wechseln lassen, wie die folgende. Fügen Sie es Ihrer Datei am Ende hinzu:

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

Als nächstes fügen Sie diesen Code am Ende hinzu, der die Stop-Schaltfläche steuert:

```js
stopBtn.onclick = () => {
  player.pause();
  player.currentTime = 0;
  playPauseBtn.textContent = "Play";
};
```

Es gibt keine `stop()`-Funktion auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)s, daher `pausieren()` wir stattdessen, und setzen gleichzeitig die `currentTime` auf 0.

Demnächst unsere Rücklauf- und Vorspul-Schaltflächen — fügen Sie die folgenden Blöcke am Ende Ihres Codes hinzu:

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

Diese sind sehr einfach, sie addieren oder subtrahieren einfach 3 Sekunden zur `currentTime` jedes Mal, wenn sie angeklickt werden. In einem echten Videoplayer würden Sie wahrscheinlich eine aufwendigere Suchleiste oder Ähnliches wünschen.

Beachten Sie, dass wir auch prüfen, ob die `currentTime` größer ist als die Gesamtmedien-`dauer` oder ob das Medium nicht abgespielt wird, wenn die `fwdBtn` gedrückt wird. Wenn eine der Bedingungen wahr ist, stoppen wir das Video, um zu vermeiden, dass die Benutzeroberfläche falsch funktioniert, falls sie versuchen, vorzuspulen, wenn das Video nicht abgespielt wird, oder über das Ende des Videos hinaus vorzuspulen.

Zuletzt fügen Sie das Folgende an das Ende des Codes hinzu, um die Anzeige der verstrichenen Zeit zu steuern:

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

Jedes Mal, wenn die Zeit aktualisiert wird (einmal pro Sekunde), feuern wir diese Funktion. Sie berechnet die Anzahl der Minuten und Sekunden basierend auf dem gegebenen `currentTime`-Wert (der in Sekunden angegeben ist), fügt eine führende Null hinzu, wenn entweder der Minuten- oder der Sekundenwert kleiner als 10 ist, und erstellt dann das Anzeigeausgabe und fügt es dem Zeit-Label hinzu.

#### Weiterführende Literatur

Dies gibt Ihnen eine grundlegende Vorstellung davon, wie man benutzerdefinierte Player-Funktionalität zu Video-/Audioplayer-Instanzen hinzufügt. Weitere Informationen darüber, wie Sie komplexere Funktionen zu Video-/Audioplayern hinzufügen können, finden Sie unter:

- [Audio und Video Delivery](/de/docs/Web/Media/Guides/Audio_and_video_delivery)
- [Video Player Gestaltung Grundlagen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
- [Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)

Wir haben auch ein erweitertes Beispiel erstellt, um zu zeigen, wie Sie ein objektorientiertes System erstellen könnten, das jeden Video- und Audioplayer auf der Seite (unabhängig davon, wie viele es gibt) findet und unsere benutzerdefinierten Steuerelemente hinzufügt. Siehe [custom-controls-oojs](https://mdn.github.io/learning-area/accessibility/multimedia/custom-controls-OOJS/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/custom-controls-OOJS)).

## Audiotranskriptionen

Um gehörlosen Menschen den Zugang zu Audioinhalten zu ermöglichen, müssen Sie Texttranskriptionen erstellen. Diese können entweder auf die gleiche Seite wie das Audio in irgend einer Form eingefügt oder auf einer separaten Seite eingefügt und verlinkt werden.

Was genau die Erstellung der Transkription betrifft, stehen Ihnen folgende Optionen zur Verfügung:

- Kommerzielle Dienstleistungen — Sie könnten einen Fachmann für die Transkription bezahlen, um dies zu tun, siehe zum Beispiel Unternehmen wie [Scribie](https://scribie.com/), [Casting Words](https://castingwords.com/) oder [Rev](https://www.rev.com/). Informieren Sie sich und fragen Sie nach Ratschlägen, um sicherzustellen, dass Sie ein seriöses Unternehmen finden, mit dem Sie effektiv arbeiten können.
- Community/Grassroots/Selbsttranskription — Wenn Sie Teil einer aktiven Gemeinschaft oder eines Teams in Ihrem Arbeitsplatz sind, dann könnten Sie sie um Hilfe bei den Übersetzungen bitten. Sie könnten sogar selbst versuchen, sie zu machen.
- Automatisierte Dienste — Es gibt KI-Dienste wie [Trint](https://trint.com/) oder [Transcribear](https://transcribear.com/). Laden Sie eine Video-/Audio-Datei auf die Website hoch, und es wird automatisch für Sie transkribiert. Auf YouTube können Sie wählen, automatische Untertitel/Transkriptionen zu erzeugen. Je nach Klarheit des gesprochenen Audios wird die Qualität der resultierenden Transkription stark variieren.

Wie bei den meisten Dingen im Leben, erhalten Sie im Allgemeinen das, wofür Sie bezahlen; verschiedene Dienste variieren in Genauigkeit und Zeit, die benötigt wird, um die Transkription zu erzeugen. Wenn Sie ein seriöses Unternehmen oder einen KI-Dienst mit der Transkription beauftragen, wird es wahrscheinlich schnell und in hoher Qualität durchgeführt. Wenn Sie nicht dafür bezahlen möchten, wird es wahrscheinlich in geringerer Qualität und/oder langsamer durchgeführt.

Es ist nicht in Ordnung, eine Audioressource zu veröffentlichen, aber zu versprechen, die Transkription später zu veröffentlichen — solche Versprechen werden oft nicht gehalten, was das Vertrauen zwischen Ihnen und Ihren Nutzern erodiert. Wenn das Audio, das Sie präsentieren, etwa ein persönliches Treffen oder eine live gesprochene Darbietung ist, wäre es akzeptabel, während der Darbietung Notizen zu machen, diese zusammen mit dem Audio vollständig zu veröffentlichen und dann um Hilfe bei der Bereinigung der Notizen zu bitten.

### Transkriptionsbeispiele

Wenn Sie einen automatisierten Dienst nutzen, müssen Sie wahrscheinlich die von dem Tool bereitgestellte Benutzeroberfläche verwenden. Beispielsweise schauen Sie sich unser Video [Warten, ARIA-Rollen haben Kategorien?](https://www.youtube.com/watch?v=mwF-PpJOjMs) an und wählen Sie das Drei-Punkte-Menü (. . .) _> Transkription anzeigen_. Sie sehen die Transkription in einem separaten Panel.

Wenn Sie Ihre eigene Benutzeroberfläche erstellen, um Ihr Audio und die zugehörige Transkription anzuzeigen, können Sie es nach Belieben tun, es könnte jedoch sinnvoll sein, es in einem ein-/-ausblendbaren Panel zu platzieren; siehe unser Beispiel [audio-transcript-ui](https://mdn.github.io/learning-area/accessibility/multimedia/audio-transcript-ui/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/audio-transcript-ui)).

### Audiodeskriptionen

In Fällen, in denen visuelle Inhalte Ihr Audio begleiten, müssen Sie Audiobeschreibungen bereitstellen, um diesen zusätzlichen Inhalt zu beschreiben.

In vielen Fällen wird dies in Form von Videos erfolgen, in diesen Fällen können Sie mit den in dieser Sektion beschriebenen Techniken Untertitel implementieren.

Es gibt jedoch einige Ausnahmen. Sie könnten zum Beispiel eine Audioaufnahme einer Besprechung haben, die sich auf eine begleitende Ressource wie eine Tabelle oder ein Diagramm bezieht. In solchen Fällen sollten Sie sicherstellen, dass die Ressourcen zusammen mit dem Audio + Transkript bereitgestellt werden und sie explizit an den Stellen verlinken, an denen sie im Transkript erwähnt werden. Dies wird natürlich allen Benutzern helfen, nicht nur gehörlosen Menschen.

> [!NOTE]
> Ein Audiotranskript wird im Allgemeinen mehreren Benutzergruppen helfen. Neben dem Zugang für gehörlose Benutzer zu den Informationen im Audio, denken Sie auch an einen Benutzer mit einer geringen Bandbreite, der das Herunterladen des Audios als unpraktisch empfinden würde. Denken Sie auch an einen Benutzer in einer lauten Umgebung wie einer Kneipe oder Bar, der versucht, auf die Informationen zuzugreifen, sie aber wegen des Lärms nicht hören kann.

## Videotextspuren

Um Video für Gehörlose, Sehbehinderte oder andere Benutzergruppen (wie diejenigen mit niedriger Bandbreite oder die die Sprache, in der das Video aufgenommen wurde, nicht verstehen) zugänglich zu machen, müssen Sie Textspuren zusammen mit Ihrem Videoinhalt einfügen.

> [!NOTE]
> Textspuren sind auch für potenziell jeden Benutzer nützlich, nicht nur für Personen mit Behinderungen. Beispielsweise können einige Benutzer den Ton nicht hören, weil sie sich in lauter Umgebung befinden (wie eine überfüllte Bar, wenn ein Sportspiel gezeigt wird) oder sie möchten andere nicht stören, wenn sie sich an einem ruhigen Ort befinden (wie eine Bibliothek).

Dies ist kein neues Konzept — Fernsehdienste bieten schon seit langer Zeit geschlossenes Captioning an:

![Szenenbild von einem altmodischen Cartoon mit dem geschlossenen Untertitel "Gute Arbeit, Goldie. Weiter so!"](closed-captions.png)

Viele Länder bieten englische Filme mit Untertiteln in ihrer eigenen Sprache an, und auf DVDs sind oft verschiedene Sprachuntertitel verfügbar, wie unten gezeigt:

![Ein englischer Film mit deutschen Untertiteln "Emo, warum erkennst du nicht die Schönheit dieses Ortes?"](subtitles_german.png)

Es gibt verschiedene Arten von Textspuren für verschiedene Zwecke. Die Hauptarten, die Sie antreffen werden, sind:

- Untertitel — Zum Vorteil von gehörlosen Benutzern, die die Tonspur nicht hören können, einschließlich der gesprochenen Wörter und kontextueller Informationen wie z. B. wer die Wörter gesprochen hat, ob die Personen wütend oder traurig waren, und welche Stimmung die Musik derzeit erzeugt.
- Übersetzungen (Subtitles) — Beinhaltet Übersetzungen des Audio-Dialogs für Benutzer, die die gesprochene Sprache nicht verstehen.
- Beschreibungen — Enthalten Beschreibungen für sehbehinderte Personen, die das Video nicht sehen können, beispielsweise wie die Szene aussieht.
- Kapiteltitel — Kapitelmarkierungen, die dazu gedacht sind, den Benutzer dabei zu unterstützen, die Medienressource zu navigieren.

### Implementierung von HTML-Videotextspuren

Textspuren für die Anzeige mit HTML-Video müssen im WebVTT-Format geschrieben werden, einem Textformat, das mehrere Textstrings zusammen mit Metadaten wie der Zeit im Video, zu der jeder Textstring angezeigt werden soll, und sogar begrenzte Stil-/Positionierungsinformationen enthält. Diese Textelemente werden als Cues bezeichnet.

Ein typisches WebVTT-File sieht ungefähr so aus:

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

Um dieses zusammen mit der HTML-Medienwiedergabe anzuzeigen, müssen Sie:

- Es als .vtt-Datei an einem sinnvollen Ort speichern.
- Mit dem {{htmlelement("track")}}-Element auf die .vtt-Datei verlinken. `<track>` sollte innerhalb des `<audio>`- oder `<video>`-Elements, aber nach allen `<source>`-Elementen platziert werden. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind)-Attribut, um anzugeben, ob die Cues Untertitel, Captions oder Beschreibungen sind. Verwenden Sie außerdem [`srclang`](/de/docs/Web/HTML/Reference/Elements/track#srclang), um dem Browser mitzuteilen, in welcher Sprache die Untertitel geschrieben sind.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

Dies führt zu einem Video, das Untertitel anzeigt, in etwa so:

![Videoplayer mit Standard-Steuerungen wie Abspielen, Stoppen, Lautstärke und Untertitel an und aus. Das laufende Video zeigt eine Szene eines Mannes, der eine speerartige Waffe hält, und ein Untertitel lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für weitere Details siehe [Hinzufügen von Captions und Untertiteln zu HTML-Videos](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können [das Beispiel](https://iandevlin.github.io/mdn/video-player-with-captions/) finden, das zu diesem Artikel auf GitHub gehört, geschrieben von Ian Devlin (siehe auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions)). Dieses Beispiel verwendet JavaScript, um Benutzern die Auswahl zwischen verschiedenen Untertiteln zu ermöglichen. Beachten Sie, dass Sie die Untertitel einschalten müssen, indem Sie die "CC"-Taste drücken und eine Option auswählen — Englisch, Deutsch oder Spanisch.

> [!NOTE]
> Textspuren und Transkriptionen helfen Ihnen auch bei {{Glossary("SEO", "SEO")}}, da Suchmaschinen insbesondere auf Text basieren. Textspuren ermöglichen es Suchmaschinen sogar, direkt auf eine Stelle mitten im Video zu verlinken.

## Zusammenfassung

Dieses Kapitel hat eine Zusammenfassung von Barrierefreiheitsaspekten für Multimediainhalte bereitgestellt, zusammen mit einigen praktischen Lösungen.

Es ist nicht immer leicht, Multimedia zugänglich zu machen. Wenn Sie zum Beispiel mit einem immersiven 3D-Spiel oder einer Virtual-Reality-App arbeiten, ist es ziemlich schwierig, Textalternativen für solch ein Erlebnis bereitzustellen, und Sie könnten argumentieren, dass sehbehinderte Benutzer nicht wirklich in der Zielgruppe für solche Apps sind.

Sie können jedoch sicherstellen, dass eine solche App ausreichend guten Kontrast und klare Präsentation hat, sodass sie für Personen mit Sehschwäche bzw. Farbenblindheit wahrnehmbar ist, und sie auch tastaturzugänglich machen. Denken Sie daran, dass Barrierefreiheit bedeutet, so viel wie möglich zu tun, anstatt immer 100% Barrierefreiheit anzustreben, was oft unmöglich ist.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Mobile", "Learn_web_development/Core/Accessibility")}}
