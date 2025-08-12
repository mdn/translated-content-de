---
title: Barrierefreie Multimedia-Inhalte
slug: Learn_web_development/Core/Accessibility/Multimedia
l10n:
  sourceCommit: 89e8e67d44039717f685a98d8b161f3d1ed1b233
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA","Learn_web_development/Core/Accessibility/Mobile", "Learn_web_development/Core/Accessibility")}}

Eine weitere Kategorie von Inhalten, die Barrierefreiheitsprobleme verursachen kann, sind Multimedia-Inhalte. Video-, Audio- und Bildinhalte müssen mit geeigneten textuellen Alternativen versehen werden, damit sie von unterstützenden Technologien und deren Nutzern verstanden werden können. Dieser Artikel zeigt, wie das geht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den bewährten Methoden zur Barrierefreiheit, die in den vorherigen Lektionen des Moduls behandelt wurden.</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Probleme mit nativen Mediaplayern und wie man benutzerdefinierte erstellen kann.</li>
          <li>Der Zweck von Audio-Transkripten und Textspuren (Untertitel, Bildunterschriften usw.), um Audio- und Videoinhalte zugänglich zu machen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Multimedia und Barrierefreiheit

Bisher haben wir in diesem Modul eine Vielzahl von Inhalten betrachtet und was getan werden muss, um deren Zugänglichkeit zu gewährleisten, von einfachen Textinhalten bis hin zu Datentabellen, Bildern, nativen Steuerelementen wie Formularelementen und Schaltflächen, und sogar komplexeren Markup-Strukturen (mit [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)-Attributen).

Dieser Artikel hingegen befasst sich mit einer anderen allgemeinen Klasse von Inhalten, für die die Barrierefreiheit möglicherweise nicht so einfach zu gewährleisten ist – Multimedia. Bilder, Audio-Tracks, Videos, {{htmlelement("canvas")}}-Elemente usw. werden von Screenreadern nicht so leicht verstanden oder über die Tastatur navigiert, und wir müssen ihnen Unterstützung bieten.

Aber verzweifeln Sie nicht — hier helfen wir Ihnen, die Techniken zu verstehen, die zur Verfügung stehen, um Multimedia leichter zugänglich zu machen.

## Einfache Bilder

Wir haben bereits einfache Textalternativen für HTML-Bilder in unserem Artikel [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) behandelt — für die vollständigen Details können Sie dort nachlesen. Kurz gesagt, sollten Sie sicherstellen, dass visuelle Inhalte, wenn möglich, eine alternative Textbeschreibung haben, die von Screenreadern erfasst und den Nutzern vorgelesen werden kann.

Zum Beispiel:

```html
<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
```

## Barrierefreie Audio- und Videosteuerungen

Die Implementierung von Steuerelementen für webbasierte Audio-/Videoinhalte sollte kein Problem darstellen, oder? Lassen Sie uns das untersuchen.

### Das Problem mit nativen HTML-Steuerelementen

HTML-Video- und Audio-Instanzen kommen sogar mit einer Reihe von eingebauten Steuerelementen, die es Ihnen ermöglichen, das Medium direkt zu steuern. Zum Beispiel (siehe `native-controls.html` [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/native-controls.html) und [live](https://mdn.github.io/learning-area/accessibility/multimedia/native-controls.html)):

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

Das `controls`-Attribut bietet Play/Pause-Schaltflächen, eine Fortschrittsleiste usw. — die grundlegenden Steuerelemente, die Sie von einem Mediaplayer erwarten würden. Es sieht in Firefox und Chrome folgendermaßen aus:

![Screenshot der Video-Steuerelemente in Firefox](native-controls-firefox.png)

![Screenshot der Video-Steuerelemente in Chrome](native-controls-chrome.png)

Es gibt jedoch Probleme mit diesen Steuerelementen:

- Sie sind in den meisten Browsern nicht tastaturzugänglich, d.h. Sie können nicht zwischen den Steuerelementen des nativen Players tabben. Opera und Chrome bieten dies bis zu einem gewissen Grad, aber es ist immer noch nicht ideal.
- Verschiedene Browser geben den nativen Steuerelementen unterschiedliche Stile und Funktionalitäten, und sie sind nicht stylbar, was bedeutet, dass sie nicht einfach an eine Website-Stilrichtlinie angepasst werden können.

Um dies zu beheben, können wir unsere eigenen benutzerdefinierten Steuerelemente erstellen. Schauen wir uns an, wie das geht.

### Benutzerdefinierte Audio- und Videosteuerungen erstellen

HTML-Video und Audio teilen sich eine API — das HTML Media Element — welches es Ihnen ermöglicht, benutzerdefinierte Funktionen auf Schaltflächen und andere Steuerelemente abzubilden — beide definieren Sie selbst.

Nehmen wir das obige Video-Beispiel und fügen ihm benutzerdefinierte Steuerelemente hinzu.

#### Grundlegendes Setup

Zuerst müssen Sie eine Kopie unserer [custom-controls-start.html](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls-start.html), [custom-controls.css](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls.css), [rabbit320.mp4](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.mp4), und [rabbit320.webm](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.webm) Dateien erhalten und in einem neuen Verzeichnis auf Ihrer Festplatte speichern.

Erstellen Sie eine neue Datei namens main.js und speichern Sie sie im selben Verzeichnis.

Schauen wir uns zuerst das HTML für den Videoplayer, im HTML:

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

#### Grundlegendes JavaScript-Setup

Wir haben einige einfache Steuerschaltflächen unter unserem Video eingefügt. Diese Steuerelemente tun natürlich standardmäßig nichts; um Funktionalität hinzuzufügen, verwenden wir JavaScript.

Wir müssen zuerst Referenzen zu jedem der Steuerelemente speichern — fügen Sie das Folgende an den Anfang Ihrer JavaScript-Datei hinzu:

```js
const playPauseBtn = document.querySelector(".play-pause");
const stopBtn = document.querySelector(".stop");
const rwdBtn = document.querySelector(".rwd");
const fwdBtn = document.querySelector(".fwd");
const timeLabel = document.querySelector(".time");
```

Als nächstes müssen wir eine Referenz zum Video-/Audioplayer selbst erhalten — fügen Sie diese Zeile unter den vorherigen Zeilen hinzu:

```js
const player = document.querySelector("video");
```

Dies hält eine Referenz zu einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt, das mehrere nützliche Eigenschaften und Methoden zur Verfügung hat, die verwendet werden können, um Funktionalitäten mit unseren Tasten zu verknüpfen.

Bevor wir zur Erstellung unserer Tastenfunktionalität übergehen, entfernen wir die nativen Steuerelemente, damit sie unseren benutzerdefinierten Steuerelementen nicht im Weg stehen. Fügen Sie das Folgende hinzu, wieder am Ende Ihres JavaScripts:

```js
player.removeAttribute("controls");
```

Auf diese Weise vorzugehen anstatt das `controls`-Attribut von vornherein nicht einzuschließen, hat den Vorteil, dass, wenn unser JavaScript aus irgendeinem Grund fehlschlägt, der Nutzer trotzdem einige Steuerelemente zur Verfügung hat.

#### Verkabelung unserer Schaltflächen

Zunächst richten wir die Play/Pause-Schaltfläche ein. Wir können sie mit einer einfachen bedingten Funktion zwischen Wiedergabe und Pause umschalten lassen, wie die folgende. Fügen Sie es Ihrem Code am Ende hinzu:

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

Es gibt keine `stop()`-Funktion auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)s, also pausieren wir es stattdessen und setzen gleichzeitig die `currentTime` auf 0.

Als nächstes unsere Rücklauf- und Vorlauftasten — fügen Sie die folgenden Blöcke am Ende Ihres Codes hinzu:

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

Diese sind sehr einfach, sie fügen dem `currentTime` jedes Mal, wenn sie angeklickt werden, 3 Sekunden hinzu oder ziehen diese ab. In einem echten Videoplayer würden Sie wahrscheinlich eine elaborierte Suchleiste oder ähnliches wünschen.

Beachten Sie, dass wir auch überprüfen, ob die `currentTime` mehr als die gesamte Medien-`duration` ist oder ob die Medien nicht abgespielt werden, wenn die `fwdBtn` gedrückt wird. Wenn eine der Bedingungen erfüllt ist, stoppen wir das Video, um zu vermeiden, dass die Benutzeroberfläche durcheinander gerät, wenn sie versuchen, vorwärts zu spulen, wenn das Video nicht abgespielt wird oder über das Ende des Videos hinaus gespult wird.

Zuletzt fügen Sie das Folgende zum Ende des Codes hinzu, um die Anzeige der abgelaufenen Zeit zu steuern:

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

Jedes Mal, wenn die Zeit aktualisiert wird (einmal pro Sekunde), lösen wir diese Funktion aus. Sie errechnet die Anzahl der Minuten und Sekunden aus dem angegebenen `currentTime`-Wert (der in Sekunden angegeben ist), fügt eine führende 0 hinzu, wenn der Minuten- oder Sekundenwert weniger als 10 ist, und erstellt dann die Anzeigeausgabe und fügt sie dem Zeitlabel hinzu.

#### Weiterführende Lektüre

Dies gibt Ihnen eine grundlegende Idee, wie Sie benutzerdefinierte Player-Funktionalitäten für Video-/Audio-Player-Instanzen hinzufügen können. Weitere Informationen dazu, wie Sie weitere komplexe Funktionen zu Video-/Audio-Playern hinzufügen können, finden Sie unter:

- [Audio- und Videoübertragung](/de/docs/Web/Media/Guides/Audio_and_video_delivery)
- [Grundlagen der Videoplayer-Stilgestaltung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)

Wir haben auch ein erweitertes Beispiel erstellt, das zeigt, wie Sie ein objektorientiertes System erstellen könnten, das jeden Video- und Audioplayer auf der Seite findet (egal wie viele es gibt) und unsere benutzerdefinierten Steuerelemente hinzufügt. Siehe [custom-controls-oojs](https://mdn.github.io/learning-area/accessibility/multimedia/custom-controls-OOJS/) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/custom-controls-OOJS) an).

## Audio-Transkripte

Um gehörlosen Menschen Zugang zu Audioinhalten zu geben, müssen Sie Texttranskripte erstellen. Diese können entweder auf derselben Seite wie das Audio in irgendeiner Weise enthalten oder auf einer separaten Seite verlinkt werden.

In Bezug auf die eigentliche Erstellung des Transkripts haben Sie folgende Optionen:

- Kommerzielle Dienstleistungen — Sie könnten einen Profi für die Transkription bezahlen, sehen Sie sich z.B. Unternehmen an wie [Scribie](https://scribie.com/), [Casting Words](https://castingwords.com/) oder [Rev](https://www.rev.com/). Schauen Sie sich um und fragen Sie nach Ratschlägen, um sicherzustellen, dass Sie ein seriöses Unternehmen finden, mit dem Sie effektiv zusammenarbeiten können.
- Gemeindearbeit/Basisarbeit/eigene Transkription — Wenn Sie Teil einer aktiven Gemeinschaft oder eines Teams an Ihrem Arbeitsplatz sind, könnten Sie diese um Hilfe bei den Übersetzungen bitten. Sie könnten es sogar selbst versuchen.
- Automatisierte Dienste — Es gibt KI-Dienste, wie [Trint](https://trint.com/) oder [Transcribear](https://transcribear.com/). Laden Sie eine Video-/Audiodatei auf die Website hoch, und sie transkribiert sie automatisch für Sie. Auf YouTube können Sie die automatisierte Erstellung von Untertiteln/Transkripten wählen. Je nachdem, wie klar das gesprochene Audio ist, wird die Qualität des resultierenden Transkripts stark variieren.

Wie bei den meisten Dingen im Leben bekommen Sie in der Regel, wofür Sie bezahlen; unterschiedliche Dienstleistungen variieren in Genauigkeit und Zeit für die Erstellung des Transkripts. Wenn Sie ein seriöses Unternehmen oder einen AI-Dienst bezahlen, um die Transkription vorzunehmen, werden Sie wahrscheinlich schnell und in hoher Qualität bedient. Wenn Sie nicht dafür bezahlen wollen, wird es wahrscheinlich in geringerer Qualität und/oder langsamer erfolgen.

Es ist nicht in Ordnung, eine Audioressource zu veröffentlichen, aber zu versprechen, das Transkript später zu veröffentlichen — solche Versprechen werden oft nicht eingehalten, was das Vertrauen zwischen Ihnen und Ihren Nutzern untergraben wird. Wenn das von Ihnen präsentierte Audio etwas wie ein persönliches Treffen oder eine Live-Performance ist, wäre es akzeptabel, während der Performance Notizen zu machen, diese zusammen mit dem Audio vollständig zu veröffentlichen und danach Hilfe beim Überarbeiten der Notizen zu suchen.

### Transkriptbeispiele

Wenn Sie einen automatisierten Dienst nutzen, müssen Sie wahrscheinlich die Benutzeroberfläche verwenden, die das Tool bereitstellt. Sehen Sie sich zum Beispiel unser Video [Wait, ARIA Roles Have Categories?](https://www.youtube.com/watch?v=mwF-PpJOjMs) an und wählen Sie das Drei-Punkt-Menü (. . .) _> Transcript anzeigen_. Sie sehen das Transkript in einem separaten Panel.

Wenn Sie Ihre eigene Benutzeroberfläche erstellen, um Ihr Audio und das zugehörige Transkript zu präsentieren, können Sie dies nach Belieben tun, aber es könnte sinnvoll sein, es in einem ein- und ausblendbaren Panel zu platzieren; siehe unser [audio-transcript-ui](https://mdn.github.io/learning-area/accessibility/multimedia/audio-transcript-ui/) Beispiel (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/audio-transcript-ui)).

### Audio-Beschreibungen

Bei Gelegenheiten, bei denen visuelle Inhalte Ihre Audiodatei begleiten, müssen Sie irgendeine Form von Audio-Beschreibungen bereitstellen, um diese zusätzlichen Inhalte zu beschreiben.

In vielen Fällen wird dies in Form von Videos sein, in denen Sie Untertitel mit den Techniken umsetzen können, die im nächsten Abschnitt des Artikels beschrieben werden.

Es gibt jedoch einige Randfälle. Sie könnten zum Beispiel eine Audioaufnahme eines Meetings haben, das sich auf eine begleitende Ressource wie eine Tabelle oder ein Diagramm bezieht. In solchen Fällen sollten Sie sicherstellen, dass die Ressourcen zusammen mit dem Audio + Transkript bereitgestellt und speziell an den Stellen im Transkript verlinkt werden, an denen sie erwähnt werden. Dies wird natürlich allen Nutzern helfen, nicht nur gehörlosen Menschen.

> [!NOTE]
> Ein Audiotranskript wird im Allgemeinen mehrere Benutzergruppen unterstützen. Neben der Bereitstellung des Audioinhalts für gehörlose Nutzer, denken Sie auch an Nutzer mit einer langsamen Internetverbindung, die den Download des Audios als unbequem empfinden könnten. Denken Sie auch an einen Nutzer in einer lauten Umgebung wie einer Kneipe oder Bar, der versucht, auf die Informationen zuzugreifen, sie jedoch aufgrund des Lärms nicht hören kann.

## Video-Textspuren

Um Videos für gehörlose Menschen, Sehbehinderte oder andere Benutzergruppen (wie solche mit niedriger Bandbreite oder welche, die die Sprache, in der das Video aufgenommen wurde, nicht verstehen) zugänglich zu machen, müssen Textspuren zusammen mit Ihren Videoinhalten eingebunden werden.

> [!NOTE]
> Textspuren sind auch für potenziell jeden Nutzer nützlich, nicht nur für Menschen mit Behinderungen. Zum Beispiel könnten einige Nutzer die Audiodatei nicht hören, weil sie sich in einer lauten Umgebung (wie eine volle Bar während eines Sportspiels) befinden oder andere nicht stören wollen, wenn sie an einem ruhigen Ort (wie in einer Bibliothek) sind.

Dies ist kein neues Konzept — Fernsehdienste bieten seit langer Zeit Untertitel an:

![Frame aus einem alten Cartoon mit Untertiteln "Good work, Goldie. Keep it up!"](closed-captions.png)

Viele Länder bieten englischsprachige Filme mit Untertiteln in ihrer eigenen Landessprache an, und auf DVDs sind oft verschiedene Sprachuntertitel verfügbar, wie unten gezeigt:

![Ein englischer Film mit deutschen Untertiteln "Emo, warum erkennst du nicht die Schonheit dieses Ortes?"](subtitles_german.png)

Es gibt verschiedene Arten von Textspuren für unterschiedliche Zwecke. Die Haupttypen, auf die Sie stoßen werden, sind:

- Untertitel — Dienen dem Nutzen gehörloser Nutzer, die die Audiodatei nicht hören können, einschließlich der gesagten Wörter und kontextueller Informationen wie wer die Wörter sprach, ob die Personen wütend oder traurig waren, und welche Stimmung die Musik derzeit erzeugt.
- Unterschriften — Sie enthalten Übersetzungen des Audiodialogs für Benutzer, die die gesprochene Sprache nicht verstehen.
- Beschreibungen — Diese enthalten Beschreibungen für sehbehinderte Menschen, die das Video nicht sehen können, z.B. wie die Szene aussieht.
- Kapiteltitel — Kapitelmarkierungen, die dem Benutzer helfen sollen, das Medium zu navigieren.

### HTML-Video-Textspuren implementieren

Textspuren zur Anzeige mit HTML-Videos müssen in WebVTT geschrieben werden, einem Textformat, das mehrere Textabschnitte sowie Metadaten wie die Zeit im Video, zu der jede Textzeichenfolge angezeigt werden soll, und sogar eingeschränkte Stil-/Positionierungsinformationen enthält. Diese Textzeichenfolgen werden als Cues bezeichnet.

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

Um dies zusammen mit dem HTML-Media-Playback anzuzeigen, müssen Sie:

- Sie als .vtt-Datei an einem sinnvollen Ort speichern.
- Die .vtt-Datei mit dem {{htmlelement("track")}}-Element verlinken. `<track>` sollte innerhalb von `<audio>` oder `<video>` angeordnet sein, jedoch nach allen `<source>`-Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind)-Attribut, um anzugeben, ob die Cues Unterschriften, Untertitel oder Beschreibungen sind. Verwenden Sie außerdem [`srclang`](/de/docs/Web/HTML/Reference/Elements/track#srclang), um dem Browser mitzuteilen, in welcher Sprache Sie die Untertitel geschrieben haben.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

Dies führt zu einem Video, das Untertitel anzeigt, etwa so:

![Videoplayer mit Standardsteuerungen wie Abspielen, Stoppen, Lautstärke und Untertiteln An und Aus. Das laufende Video zeigt eine Szene eines Mannes mit einem speerähnlichen Waffen, und ein Untertitel lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für weitere Details siehe [Hinzufügen von Untertiteln und Bildunterschriften zu HTML-Videos](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können [das Beispiel](https://iandevlin.github.io/mdn/video-player-with-captions/) finden, das zu diesem Artikel auf GitHub geschrieben wurde, von Ian Devlin (siehe den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions)). Dieses Beispiel verwendet JavaScript, um Benutzern zu ermöglichen, zwischen verschiedenen Untertiteln zu wählen. Beachten Sie, dass um die Untertitel einzuschalten, Sie auf die "CC"-Schaltfläche drücken und eine Option auswählen müssen — Englisch, Deutsch oder Español.

> [!NOTE]
> Textspuren und Transkriptionen helfen Ihnen auch bei {{Glossary("SEO", "SEO")}}, da Suchmaschinen besonders von Text profitieren. Textspuren erlauben es Suchmaschinen sogar, direkt zu einem Teil des Videos zu verlinken.

## Zusammenfassung

Dieses Kapitel hat eine Übersicht über die Bedenken hinsichtlich der Barrierefreiheit von Multimedia-Inhalten geboten, zusammen mit einigen praktischen Lösungen.

Es ist nicht immer einfach, Multimedia zugänglich zu machen. Wenn Sie zum Beispiel mit einem immersiven 3D-Spiel oder einer Virtual-Reality-App arbeiten, ist es ziemlich schwierig, textliche Alternativen für eine solche Erfahrung bereitzustellen, und Sie könnten argumentieren, dass sehbehinderte Nutzer nicht wirklich zur Zielgruppe solcher Apps gehören.

Sie können jedoch sicherstellen, dass eine solche App über ausreichenden Farbkontrast und eine klare Präsentation verfügt, sodass sie für Personen mit eingeschränktem Sehvermögen/Farbfehlsichtigkeit wahrnehmbar ist und über die Tastatur zugänglich ist. Denken Sie daran, dass es bei Barrierefreiheit darum geht, so viel wie möglich zu tun, anstatt ständig nach 100% Barrierefreiheit zu streben, was oft unmöglich ist.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA","Learn_web_development/Core/Accessibility/Mobile", "Learn_web_development/Core/Accessibility")}}
