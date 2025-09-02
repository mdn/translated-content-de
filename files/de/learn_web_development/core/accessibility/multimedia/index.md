---
title: Barrierefreie Multimedia-Inhalte
slug: Learn_web_development/Core/Accessibility/Multimedia
l10n:
  sourceCommit: daad50a992d56b23573fdd50517c75df176747cf
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA","Learn_web_development/Core/Accessibility/Mobile", "Learn_web_development/Core/Accessibility")}}

Eine weitere Kategorie von Inhalten, die Barrierefreiheitsprobleme verursachen kann, sind Multimedia-Inhalte. Video-, Audio- und Bildinhalte müssen mit geeigneten textlichen Alternativen versehen werden, damit sie von unterstützenden Technologien und deren Nutzern verstanden werden können. Dieser Artikel zeigt, wie das gemacht wird.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den besten Praktiken für Barrierefreiheit, wie sie in den vorherigen Lektionen dieses Moduls gelehrt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Probleme mit nativen Mediaplayern und wie Sie Ihre eigenen benutzerdefinierten erstellen können.</li>
          <li>Der Zweck von Audiotranskriptionen und Textspuren (Untertitel, Captions usw.) zur Zugänglichmachung von Audio- und Videoinhalten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Multimedia und Barrierefreiheit

Bisher haben wir in diesem Modul eine Vielzahl von Inhalten betrachtet und was getan werden muss, um deren Barrierefreiheit sicherzustellen, angefangen bei einfachen Textinhalten über Datentabellen, Bilder, native Steuerelemente wie Formularelemente und Buttons bis hin zu komplexeren Markup-Strukturen (mit [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)-Attributen).

Dieser Artikel hingegen befasst sich mit einer weiteren allgemeinen Klasse von Inhalten, für die es möglicherweise nicht so einfach ist, die Barrierefreiheit sicherzustellen — Multimedia. Bilder, Audiospuren, Videos, {{htmlelement("canvas")}}-Elemente usw. werden von Bildschirmlesegeräten nicht so leicht verstanden oder mit der Tastatur navigierbar gemacht, und wir müssen ihnen dabei helfen.

Aber verzweifeln Sie nicht — hier werden wir Ihnen helfen, die Techniken zu navigieren, die verfügbar sind, um Multimedia zugänglicher zu machen.

## Einfache Bilder

Wir haben bereits einfache Textalternativen für HTML-Bilder in unserem Artikel [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) behandelt — Sie können dort die vollständigen Details nachlesen. Kurz gesagt sollten Sie sicherstellen, dass visuelle Inhalte, wo möglich, eine alternative Textversion haben, die von Bildschirmlesegeräten erfasst und den Nutzern vorgelesen werden kann.

Zum Beispiel:

```html
<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
```

## Zugängliche Audio- und Videosteuerungen

Sollte die Implementierung von Steuerungen für webbasierte Audio-/Videoinhalte nicht problematisch sein? Lassen Sie uns das untersuchen.

### Das Problem mit nativen HTML-Steuerungen

HTML-Video- und Audioinstanzen kommen sogar mit einer Reihe von eingebauten Steuerungen, die Ihnen ermöglichen, die Medieninhalte direkt zu steuern. Zum Beispiel (siehe `native-controls.html` [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/native-controls.html) und [live](https://mdn.github.io/learning-area/accessibility/multimedia/native-controls.html)):

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

Das `controls`-Attribut bietet Play/Pause-Buttons, eine Suchleiste usw. — die grundlegenden Steuerungen, die Sie von einem Mediaplayer erwarten. So sieht es in Firefox und Chrome aus:

![Screenshot der Videosteuerungen in Firefox](native-controls-firefox.png)

![Screenshot der Videosteuerungen in Chrome](native-controls-chrome.png)

Es gibt jedoch Probleme mit diesen Steuerungen:

- Sie sind in den meisten Browsern nicht tastaturzugänglich, d.h. Sie können nicht zwischen den Steuerungen im nativen Player tabben. Opera und Chrome bieten dies in gewissem Maße, aber es ist immer noch nicht ideal.
- Verschiedene Browser bieten den nativen Steuerungen unterschiedliche Stil- und Funktionalitätsoptionen, und sie sind nicht stilisierbar, was bedeutet, dass sie nicht einfach an einen Styleguide einer Website angepasst werden können.

Um dem abzuhelfen, können wir unsere eigenen benutzerdefinierten Steuerungen erstellen. Sehen wir uns an, wie das geht.

### Erstellen benutzerdefinierter Audio- und Videosteuerungen

HTML-Video und -Audio teilen eine API — HTML Media Element — die es Ihnen ermöglicht, benutzerdefinierte Funktionalitäten auf Schaltflächen und andere Steuerungen zu übertragen — beide definieren Sie selbst.

Nehmen wir das Video-Beispiel von oben und fügen wir benutzerdefinierte Steuerungen hinzu.

#### Grundlegende Einrichtung

Zuerst laden Sie eine Kopie unserer Dateien [custom-controls-start.html](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls-start.html), [custom-controls.css](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls.css), [rabbit320.mp4](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.mp4) und [rabbit320.webm](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.webm) herunter und speichern Sie diese in einem neuen Verzeichnis auf Ihrer Festplatte.

Erstellen Sie eine neue Datei namens `main.js` und speichern Sie sie im selben Verzeichnis.

Schauen wir uns zuerst den HTML-Code für den Videoplayer an, im HTML:

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

#### JavaScript Grundkonfiguration

Wir haben einige einfache Steuerschaltflächen unter unserem Video eingefügt. Diese Steuerungen werden natürlich standardmäßig nichts tun; um Funktionen hinzuzufügen, verwenden wir JavaScript.

Wir müssen zuerst Verweise auf jede der Steuerungen speichern — fügen Sie das Folgende oben in Ihre JavaScript-Datei ein:

```js
const playPauseBtn = document.querySelector(".play-pause");
const stopBtn = document.querySelector(".stop");
const rwdBtn = document.querySelector(".rwd");
const fwdBtn = document.querySelector(".fwd");
const timeLabel = document.querySelector(".time");
```

Als nächstes müssen wir einen Verweis auf den Video-/Audioplayer selbst erhalten — fügen Sie diese Zeile unter den vorherigen Zeilen hinzu:

```js
const player = document.querySelector("video");
```

Dies enthält einen Verweis auf ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt, das mehrere nützliche Eigenschaften und Methoden zur Verfügung hat, die verwendet werden können, um unsere Schaltflächen mit Funktionen zu versehen.

Bevor wir mit dem Erstellen der Funktionen für unsere Schaltflächen fortfahren, entfernen wir die nativen Steuerungen, damit sie unseren benutzerdefinierten Steuerungen nicht im Weg stehen. Fügen Sie das Folgende wieder am Ende Ihres JavaScripts hinzu:

```js
player.removeAttribute("controls");
```

Auf diese Weise, anstatt das `controls`-Attribut von Anfang an nicht einzuschließen, hat den Vorteil, dass, wenn unser JavaScript aus irgendeinem Grund fehlschlägt, dem Nutzer dennoch einige Steuerungen zur Verfügung stehen.

#### Unsere Schaltflächen verdrahten

Zu Beginn richten wir den Play/Pause-Button ein. Wir können ihn mit einer einfachen bedingten Funktion zwischen Play und Pause umschalten, wie in folgendem Beispiel. Fügen Sie es am Ende Ihres Codes ein:

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

Als nächstes fügen Sie diesen Code am Ende hinzu, der die Stopp-Schaltfläche steuert:

```js
stopBtn.onclick = () => {
  player.pause();
  player.currentTime = 0;
  playPauseBtn.textContent = "Play";
};
```

Es gibt keine Funktion `stop()` für [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)s, daher pausieren wir es stattdessen und setzen gleichzeitig die `currentTime` auf 0.

Als nächstes unsere Zurückspul- und Schnellvorlaufschaltflächen — fügen Sie die folgenden Blöcke am Ende Ihres Codes ein:

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

Diese sind sehr einfach, sie addieren oder subtrahieren einfach 3 Sekunden zur `currentTime`, jedes Mal wenn sie geklickt werden. In einem echten Videoplayer würden Sie wahrscheinlich eine aufwendigere Suchleiste oder ähnliches wünschen.

Beachten Sie, dass wir auch überprüfen, ob die `currentTime` größer ist als die gesamte Media-`duration` oder ob das Medium nicht abgespielt wird, wenn die `fwdBtn` gedrückt wird. Wenn eine der beiden Bedingungen zutrifft, stoppen wir das Video, um zu verhindern, dass die Benutzeroberfläche falsch funktioniert, wenn versucht wird, das Video vorwärts zu spulen, während es nicht abgespielt wird, oder darüber hinaus, das Ende des Videos zu spulen.

Zuletzt fügen Sie das Folgende am Ende des Codes hinzu, um die Anzeige der verstrichenen Zeit zu steuern:

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

Jedes Mal, wenn sich die Zeit aktualisiert (einmal pro Sekunde), wird diese Funktion ausgelöst. Sie berechnet die Anzahl der Minuten und Sekunden aus dem angegebenen `currentTime`-Wert (der in Sekunden angegeben ist), fügt eine führende 0 hinzu, wenn der Minuten- oder Sekundenwert kleiner als 10 ist, und erstellt dann die Anzeigeleseausgabe und fügt sie dem Zeitlabel hinzu.

#### Weiterführende Lektüre

Dies gibt Ihnen eine grundlegende Vorstellung davon, wie man benutzerdefinierte Player-Funktionalitäten zu Video-/Audioplayer-Instanzen hinzufügt. Weitere Informationen darüber, wie man komplexere Funktionen zu Video-/Audioplayern hinzufügt, finden Sie unter:

- [Audio- und Videobereitstellung](/de/docs/Web/Media/Guides/Audio_and_video_delivery)
- [Grundlagen der Videoplayer-Stilisierung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)

Wir haben auch ein erweitertes Beispiel erstellt, um zu zeigen, wie Sie ein objektorientiertes System erstellen könnten, das jeden Video- und Audioplayer auf der Seite findet (egal wie viele es gibt) und unsere benutzerdefinierten Steuerungen hinzufügt. Siehe [custom-controls-oojs](https://mdn.github.io/learning-area/accessibility/multimedia/custom-controls-OOJS/) (auch den [Quellcode ansehen](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/custom-controls-OOJS)).

## Audiotranskriptionen

Um gehörlosen Menschen den Zugang zu Audioinhalten zu ermöglichen, müssen Sie Texttranskriptionen erstellen. Diese können entweder auf derselben Seite wie das Audio auf irgendeine Weise eingebunden oder auf einer separaten Seite verlinkt werden.

Was die eigentliche Erstellung der Transkription betrifft, haben Sie die folgenden Optionen:

- Kommerzielle Dienste — Sie könnten einen Profi für die Transkription bezahlen, sehen Sie sich beispielsweise Unternehmen wie [Scribie](https://scribie.com/), [Casting Words](https://castingwords.com/) oder [Rev](https://www.rev.com/) an. Suchen Sie um Rat bezüglich eines seriösen Unternehmens, mit dem Sie effektiv zusammenarbeiten können.
- Community-/Grassroots-/Selbsttranskription — Wenn Sie Teil einer aktiven Community oder einem Team an Ihrem Arbeitsplatz sind, könnten Sie sie um Hilfe bei der Übersetzung bitten. Sie könnten es auch selbst versuchen.
- Automatisierte Dienste — Es gibt AI-Dienste, wie [Trint](https://trint.com/) oder [Transcribear](https://transcribear.com/). Laden Sie eine Video-/Audiodatei auf die Website hoch, und es transkribiert diese automatisch für Sie. Bei YouTube können Sie automatische Untertitel/Transkriptionen erstellen lassen. Je deutlicher das gesprochene Audio ist, desto variabler wird die Qualität der resultierenden Transkription sein.

Wie bei den meisten Dingen im Leben bekommen Sie, wofür Sie bezahlen; unterschiedliche Dienstleistungen variieren in Bezug auf Genauigkeit und Zeitaufwand für die Erstellung der Transkription. Wenn Sie ein seriöses Unternehmen oder einen AI-Dienst für die Transkription bezahlen, wird es wahrscheinlich schnell und hochwertig erledigt. Wenn Sie nicht dafür bezahlen, wird es wahrscheinlich mit geringerer Qualität und/oder langsamer erledigt.

Es ist nicht in Ordnung, eine Audiodatei zu veröffentlichen und das Versprechen abzugeben, die Transkription später zu veröffentlichen — Solche Versprechen werden oft nicht eingehalten, was das Vertrauen zwischen Ihnen und Ihren Nutzern untergräbt. Wenn das Audio, das Sie präsentieren, etwas wie ein persönliches Meeting oder eine Live-Darbietung ist, wäre es akzeptabel, während der Darbietung Notizen zu machen und diese zusammen mit dem Audio in voller Länge zu veröffentlichen, um später Hilfe beim Aufarbeiten der Notizen zu bitten.

### Transkription Beispiele

Wenn Sie einen automatisierten Dienst nutzen, müssen Sie wahrscheinlich die Benutzeroberfläche des Tools verwenden. Zum Beispiel sehen Sie sich unser Video [Wait, ARIA Roles Have Categories?](https://www.youtube.com/watch?v=mwF-PpJOjMs) an und wählen im Drei-Punkte-Menü (. . .) _> Transkript anzeigen_. Sie sehen das Transkript in einem separaten Bereich öffnen.

Wenn Sie Ihre eigene Benutzeroberfläche zur Präsentation Ihres Audioinhalts und des zugehörigen Transkripts erstellen, können Sie es so gestalten, wie es Ihnen gefällt. Es könnte jedoch sinnvoll sein, es in einem ein- und ausblendbaren Fenster zu platzieren; siehe unser Beispiel [audio-transcript-ui](https://mdn.github.io/learning-area/accessibility/multimedia/audio-transcript-ui/) (auch den [Quellcode ansehen](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/audio-transcript-ui)).

### Audiobeschreibungen

Bei Gelegenheiten, bei denen visuelle Inhalte Ihr Audio begleiten, müssen Sie irgendeine Art von audiobasierten Beschreibungen bereitstellen, um diese zusätzlichen Inhalte zu beschreiben.

In vielen Fällen wird dies in Form eines Videos geschehen, in welchem Fall Sie Caption-Techniken verwenden können, die im nächsten Abschnitt des Artikels beschrieben werden.

Es gibt jedoch einige Randfälle. Sie könnten zum Beispiel eine Audioaufnahme eines Meetings haben, das sich auf eine begleitende Ressource wie eine Tabelle oder ein Diagramm bezieht. In solchen Fällen sollten Sie sicherstellen, dass die Ressourcen zusammen mit dem Audio + Transkript bereitgestellt werden und speziell an den Stellen verlinkt werden, an denen sie im Transkript erwähnt werden. Dies wird natürlich allen Nutzern helfen, nicht nur Menschen mit Hörproblemen.

> [!NOTE]
> Ein Audiotranskript hilft im Allgemeinen mehreren Nutzergruppen. Neben der Bereitstellung von Informationen für gehörlose Nutzer denken Sie an einen Nutzer mit einer langsamen Internetverbindung, der das Herunterlagen des Audios umständlich finden würde. Denken Sie auch an einen Nutzer in einer lauten Umgebung wie einem Pub oder einer Bar, der auf Informationen zugreifen möchte, sie aber aufgrund des Lärms nicht hören kann.

## Videotextspuren

Um Video für Gehörlose, Sehbehinderte oder andere Nutzergruppen (wie solche mit geringer Bandbreite oder die die Sprache, in der das Video aufgenommen wurde, nicht verstehen) zugänglich zu machen, müssen Sie Textspuren zusammen mit Ihren Videoinhalten einfügen.

> [!NOTE]
> Textspuren sind potenziell für jeden Nutzer nützlich, nicht nur für Personen mit Behinderungen. Beispielsweise können einige Nutzer das Audio nicht hören, weil sie sich in einer lauten Umgebung befinden (wie einer überfüllten Bar, wenn ein Sportspiel gezeigt wird) oder sie möchten andere nicht stören, wenn sie sich an einem ruhigen Ort befinden (wie einer Bibliothek).

Dies ist kein neues Konzept — Fernsehdienste bieten seit langem Untertitel an:

![Bild aus einem alten Cartoon mit Untertitel "Good work, Goldie. Keep it up!"](closed-captions.png)

Viele Länder bieten englische Filme mit Untertiteln in ihrer eigenen Landessprache an, und unterschiedliche Sprachuntertitel sind häufig auf DVDs erhältlich, wie unten gezeigt:

![Ein englischer Film mit deutschen Untertiteln "Emo, warum erkennst du nicht die Schönheit dieses Ortes?"](subtitles_german.png)

Es gibt verschiedene Arten von Textspuren für unterschiedliche Zwecke. Die Haupttypen, auf die Sie stoßen werden, sind:

- Captions — Dienen gehörlosen Nutzern, die den Audiotrack nicht hören können, einschließlich der gesprochenen Worte und kontextueller Informationen wie wer die Worte spricht, ob die Personen wütend oder traurig waren und welche Stimmung die Musik gerade erzeugt.
- Untertitel — Beinhaltet Übersetzungen des Audiodialogs für Nutzer, die die gesprochene Sprache nicht verstehen.
- Beschreibungen — Beinhaltet Beschreibungen für sehbehinderte Menschen, die das Video nicht sehen können, z.B. wie die Szene aussieht.
- Kapitelmarken — Kapiteltitel, die dem Nutzer helfen sollen, den Mediendatensatz zu navigieren.

### Implementierung von HTML-Videotextspuren

Textspuren zur Anzeige mit HTML-Video müssen im WebVTT-Format geschrieben werden, einem Textformat, das mehrere Textzeichenfolgen zusammen mit Metadaten enthält, wie etwa die Zeit im Video, zu der jede Textzeichenfolge angezeigt werden soll, und sogar begrenzte Stil-/Positionierungsinformationen. Diese Textzeichenfolgen werden Cues genannt.

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

Um diese zusammen mit der HTML-Medienwiedergabe anzuzeigen, müssen Sie:

- Sie als .vtt-Datei an einem geeigneten Ort speichern.
- Auf die .vtt-Datei mit dem {{htmlelement("track")}}-Element verlinken. `<track>` sollte innerhalb von `<audio>` oder `<video>` platziert werden, jedoch nach allen `<source>`-Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind)-Attribut, um anzugeben, ob es sich bei den Cues um Untertitel, Captions oder Beschreibungen handelt. Verwenden Sie außerdem [`srclang`](/de/docs/Web/HTML/Reference/Elements/track#srclang), um dem Browser mitzuteilen, in welcher Sprache Sie die Untertitel geschrieben haben.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

Das Ergebnis ist ein Video, bei dem Untertitel angezeigt werden. Für eine vollständige Anwendung und den Quellcode hierzu, siehe [Hinzufügen von Untertiteln zu HTML-Videos](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Dieses Beispiel verwendet JavaScript, um den Nutzern zu ermöglichen, zwischen verschiedenen Untertiteln zu wählen. Um die Untertitel zu aktivieren, müssen Sie die "CC"-Taste drücken und eine Option auswählen — Englisch, Deutsch oder Spanisch.

> [!NOTE]
> Textspuren und Transkriptionen helfen Ihnen auch bei {{Glossary("SEO", "SEO")}}, da Suchmaschinen insbesondere auf Text angewiesen sind. Textspuren ermöglichen es sogar Suchmaschinen, direkt auf eine Stelle im Video zu verlinken.

## Zusammenfassung

Dieses Kapitel bietet eine Zusammenfassung der Barrierefreiheitsaspekte für Multimedia-Inhalte zusammen mit einigen praktischen Lösungen.

Es ist nicht immer einfach, Multimedia barrierefrei zu gestalten. Wenn Sie beispielsweise mit einem immersiven 3D-Spiel oder einer virtuellen Realität-App zu tun haben, ist es ziemlich schwierig, Textersetzungen für solch ein Erlebnis bereitzustellen, und Sie könnten argumentieren, dass sehbehinderte Benutzer nicht wirklich die Zielgruppe für solche Anwendungen sind.

Sie können jedoch sicherstellen, dass solch eine App einen genügend hohen Farbkontrast und klare Darstellung hat, damit sie für Menschen mit Sehschwächen/Farbblindheit wahrnehmbar ist, und sie auch tastaturzugänglich machen. Denken Sie daran, dass Barrierefreiheit bedeutet, so viel wie möglich zu tun, anstatt ständig nach 100% Barrierefreiheit zu streben, was oft unmöglich ist.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA","Learn_web_development/Core/Accessibility/Mobile", "Learn_web_development/Core/Accessibility")}}
