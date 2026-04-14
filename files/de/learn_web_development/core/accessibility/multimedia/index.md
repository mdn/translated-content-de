---
title: Zugängliche Multimedia
slug: Learn_web_development/Core/Accessibility/Multimedia
l10n:
  sourceCommit: ef78a9a3336c884fb3587e4ff833e64704296f01
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA","Learn_web_development/Core/Accessibility/Mobile", "Learn_web_development/Core/Accessibility")}}

Eine weitere Kategorie von Inhalten, die Barrierefreiheitsprobleme verursachen kann, ist Multimedia. Video-, Audio- und Bildinhalte müssen mit geeigneten Textalternativen versehen werden, damit sie von unterstützenden Technologien und ihren Nutzern verstanden werden können. Dieser Artikel zeigt, wie das geht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den besten Praktiken zur Barrierefreiheit wie in den vorherigen Lektionen dieses Moduls gelehrt.</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Probleme mit nativen Medienplayern und wie Sie benutzerdefinierte Player erstellen können.</li>
          <li>Der Zweck von Audiotranskripten und Textspuren (Untertitel, etc.) bei der Bereitstellung von zugänglichen Audio- und Videoinhalten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Multimedia und Barrierefreiheit

Bisher haben wir in diesem Modul eine Vielzahl von Inhalten betrachtet und was getan werden muss, um deren Barrierefreiheit zu gewährleisten, angefangen von einfachem Textinhalt bis hin zu Datentabellen, Bildern, nativen Steuerelementen wie Formularelementen und Tasten sowie komplexeren Markup-Strukturen (mit [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)-Attributen).

Dieser Artikel betrachtet eine andere allgemeine Kategorie von Inhalten, bei denen es wohl nicht so einfach ist, die Barrierefreiheit zu gewährleisten — Multimedia. Bilder, Audiotracks, Videos, {{htmlelement("canvas")}}-Elemente usw. sind für Screenreader nicht so leicht verständlich oder per Tastatur navigierbar, und wir müssen ihnen dabei helfen.

Aber verzweifeln Sie nicht — hier werden wir Ihnen helfen, die verfügbaren Techniken für die Barrierefreiheit von Multimedia zu navigieren.

## Einfache Bilder

Wir haben bereits einfache Textalternativen für HTML-Bilder in unserem Artikel [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) behandelt — Sie können dort die vollständigen Details nachlesen. Kurz gesagt, Sie sollten sicherstellen, dass nach Möglichkeit visueller Inhalt eine alternative Textbeschreibung hat, die von Screenreadern erfasst und den Nutzern vorgelesen werden kann.

Zum Beispiel:

```html
<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
```

## Zugängliche Audio- und Videosteuerungen

Die Implementierung von Steuerungen für webbasierte Audio-/Videoelemente sollte kein Problem sein, oder? Lassen Sie uns das untersuchen.

### Das Problem mit nativen HTML-Steuerelementen

HTML-Video- und Audioinstanzen sind sogar mit einer Reihe von eingebauten Steuerungen ausgestattet, die es Ihnen ermöglichen, die Medien sofort zu steuern. Zum Beispiel (siehe `native-controls.html` [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/native-controls.html) und [live](https://mdn.github.io/learning-area/accessibility/multimedia/native-controls.html)):

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

Das `controls`-Attribut bietet Play/Pause-Tasten, eine Suchleiste usw. — die grundlegenden Steuerungen, die man von einem Mediaplayer erwarten würde. Es sieht in Firefox und Chrome folgendermaßen aus:

![Screenshot der Videosteuerungen in Firefox](native-controls-firefox.png)

![Screenshot der Videosteuerungen in Chrome](native-controls-chrome.png)

Allerdings gibt es Probleme mit diesen Steuerungen:

- Sie sind in den meisten Browsern nicht tastaturzugänglich, d.h. Sie können nicht zwischen den Steuerungen im nativen Player wechseln. Opera und Chrome bieten dies bis zu einem gewissen Grad, aber es ist immer noch nicht ideal.
- Verschiedene Browser bieten den nativen Steuerungen unterschiedliche Stile und Funktionalitäten, und sie können nicht gestylt werden, was bedeutet, dass sie nicht leicht in einen Site-Stil-Leitfaden integriert werden können.

Um dies zu beheben, können wir unsere eigenen benutzerdefinierten Steuerungen erstellen. Schauen wir uns an, wie das geht.

### Erstellen von benutzerdefinierten Audio- und Videosteuerungen

HTML-Video und Audio teilen eine API — HTML Media Element — die es Ihnen erlaubt, benutzerdefinierte Funktionen zu Schaltflächen und anderen Steuerungen zuzuordnen — beide, die Sie selbst definieren.

Nehmen wir das oben genannte Video-Beispiel und fügen benutzerdefinierte Steuerungen hinzu.

#### Grundlegende Einrichtung

Zuerst holen Sie sich eine Kopie unserer [custom-controls-start.html](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls-start.html), [custom-controls.css](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls.css), [rabbit320.mp4](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.mp4) und [rabbit320.webm](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.webm) Dateien und speichern Sie sie in einem neuen Verzeichnis auf Ihrer Festplatte.

Erstellen Sie eine neue Datei namens main.js und speichern Sie sie im selben Verzeichnis.

Schauen wir uns zuerst das HTML für den Videoplayer im HTML an:

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

#### JavaScript Grundaufbau

Wir haben einige einfache Steuerknöpfe unterhalb unseres Videos eingefügt. Diese Steuerungen werden natürlich standardmäßig nichts tun; um Funktionalität hinzuzufügen, verwenden wir JavaScript.

Zuerst müssen wir Referenzen auf jede der Steuerungen speichern — fügen Sie das Folgende zu Ihrem JavaScript am Anfang hinzu:

```js
const playPauseBtn = document.querySelector(".play-pause");
const stopBtn = document.querySelector(".stop");
const rwdBtn = document.querySelector(".rwd");
const fwdBtn = document.querySelector(".fwd");
const timeLabel = document.querySelector(".time");
```

Als nächstes müssen wir eine Referenz auf den Video-/Audioplayer selbst bekommen — fügen Sie diese Zeile unter den vorherigen Zeilen hinzu:

```js
const player = document.querySelector("video");
```

Dies hält eine Referenz zu einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt, das mehrere nützliche Eigenschaften und Methoden hat, die verwendet werden können, um Funktionalitäten mit unseren Buttons zu verknüpfen.

Bevor wir mit der Erstellung unserer Button-Funktionalitäten fortfahren, lassen Sie uns die nativen Steuerungen entfernen, damit sie unsere benutzerdefinierten Steuerungen nicht behindern. Fügen Sie das Folgende erneut am Ende Ihres JavaScript hinzu:

```js
player.removeAttribute("controls");
```

Es auf diese Weise zu tun, anstatt das `controls`-Attribut von vornherein nicht einzuschließen, hat den Vorteil, dass, wenn unser JavaScript aus irgendeinem Grund fehlschlägt, dem Nutzer dennoch einige Steuerungen zur Verfügung stehen.

#### Verkabeln unserer Buttons

Zuerst richten wir den Play/Pause-Button ein. Mit einer einfachen bedingten Funktion können wir ihn zwischen Abspielen und Pausieren umschalten, wie im Folgenden gezeigt. Fügen Sie es am Ende Ihres Codes hinzu:

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

Fügen Sie nun diesen Code ganz unten hinzu, der den Stoppknopf steuert:

```js
stopBtn.onclick = () => {
  player.pause();
  player.currentTime = 0;
  playPauseBtn.textContent = "Play";
};
```

Es gibt keine `stop()`-Funktion für [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), also `pause()` wir das Medium und setzen gleichzeitig `currentTime` auf 0.

Unsere Rückspul- und Schnellvorlaufknöpfe folgen als nächstes — fügen Sie die folgenden Blöcke am Ende Ihres Codes hinzu:

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

Diese sind sehr einfach, indem sie jedes Mal, wenn sie geklickt werden, 3 Sekunden zur `currentTime` hinzufügen oder davon abziehen. In einem echten Videoplayer würden Sie wahrscheinlich eine detailliertere Suchleiste oder Ähnliches wünschen.

Beachten Sie, dass wir auch überprüfen, ob die `currentTime` größer ist als die Gesamtdauer des Mediums oder ob das Medium nicht abgespielt wird, wenn die `fwdBtn` gedrückt wird. Wenn eine der Bedingungen zutrifft, stoppen wir das Video, um zu vermeiden, dass die Benutzeroberfläche fehlerhaft aussieht, wenn versucht wird, vorwärts zu springen, während das Video nicht abgespielt wird, oder über das Ende des Videos hinaus schnell vorwärts zu springen.

Zuletzt fügen Sie am Ende des Codes das Folgende hinzu, um die Anzeige der verstrichenen Zeit zu kontrollieren:

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

Jedes Mal, wenn die Zeit aktualisiert wird (einmal pro Sekunde), wird diese Funktion ausgelöst. Sie berechnet die Anzahl der Minuten und Sekunden aus dem gegebenen `currentTime`-Wert (der in Sekunden angegeben ist), fügt eine führende 0 hinzu, wenn entweder der Minuten- oder der Sekundenwert kleiner als 10 ist, und erstellt dann die Anzeigeausgabe und fügt sie dem Zeitlabel hinzu.

#### Weiterführende Literatur

Dies gibt Ihnen eine grundlegende Vorstellung davon, wie Sie benutzerdefinierte Player-Funktionalitäten zu Video-/Audioplayer-Instanzen hinzufügen können. Weitere Informationen darüber, wie Sie komplexere Features zu Video-/Audioplayern hinzufügen können, finden Sie unter:

- [Audio- und Videoübertragung](/de/docs/Web/Media/Guides/Audio_and_video_delivery)
- [Grundlagen der Videoplayergestaltung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
- [Einen browserübergreifenden Videoplayer erstellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)

Wir haben auch ein fortgeschrittenes Beispiel erstellt, um zu zeigen, wie Sie ein objektorientiertes System erstellen könnten, das jeden Video- und Audioplayer auf der Seite findet (egal wie viele es gibt) und unsere benutzerdefinierten Steuerungen hinzufügt. Siehe [custom-controls-oojs](https://mdn.github.io/learning-area/accessibility/multimedia/custom-controls-OOJS/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/custom-controls-OOJS)).

## Audiotranskripte

Um gehörlosen Menschen Zugang zu Audioinhalten zu bieten, müssen Sie Texttranskripte erstellen. Diese können entweder auf derselben Seite wie das Audio auf irgendeine Weise eingefügt werden oder auf einer separaten Seite eingefügt und verlinkt werden.

In Bezug auf die tatsächliche Erstellung des Transkripts haben Sie folgende Möglichkeiten:

- Kommerzielle Dienste — Sie könnten einen Profi für die Transkription bezahlen, siehe beispielsweise Unternehmen wie [Scribie](https://scribie.com/), [Casting Words](https://castingwords.com/), oder [Rev](https://www.rev.com/). Sehen Sie sich um und holen Sie sich Rat ein, um sicherzustellen, dass Sie ein seriöses Unternehmen finden, mit dem Sie effektiv zusammenarbeiten können.
- Community/Graswurzel/Selbsttranskription — Wenn Sie Teil einer aktiven Community oder eines Teams an Ihrem Arbeitsplatz sind, können Sie sie um Hilfe bei der Übersetzung bitten. Sie könnten sogar selbst daran arbeiten.
- Automatisierte Dienste — Es gibt KI-Dienste, wie [Trint](https://trint.com/). Laden Sie eine Video-/Audiodatei auf die Website hoch, und sie transkribiert sie automatisch für Sie. Auf YouTube können Sie die Erstellung von automatisierten Untertiteln/Transkripten auswählen. Je nachdem, wie klar das gesprochene Audio ist, variiert die Qualität des resultierenden Transkripts erheblich.

Wie bei den meisten Dingen im Leben, bekommt man, wofür man zahlt; unterschiedliche Dienste variieren in Genauigkeit und der Zeit, die sie benötigen, um das Transkript zu erstellen. Wenn Sie ein seriöses Unternehmen oder einen KI-Dienst für die Transkription bezahlen, werden Sie es wahrscheinlich schnell und von hoher Qualität erhalten. Wenn Sie es nicht bezahlen möchten, werden Sie es wahrscheinlich in geringerer Qualität und/oder langsamer erhalten.

Es ist nicht in Ordnung, eine Audioressource zu veröffentlichen, aber zu versprechen, das Transkript später zu veröffentlichen — solche Versprechen werden oft nicht eingehalten, was das Vertrauen zwischen Ihnen und Ihren Nutzern erodieren wird. Wenn das Audio, das Sie präsentieren, etwas wie ein Sitzungsprotokoll oder eine live gesprochene Aufführung ist, wäre es akzeptabel, während der Aufführung Notizen zu machen, diese zusammen mit dem Audio in voller Länge zu veröffentlichen und dann Hilfe bei der Korrektur der Notizen zu suchen.

### Transkriptbeispiele

Wenn Sie einen automatisierten Dienst nutzen, werden Sie wahrscheinlich die Benutzeroberfläche verwenden müssen, die das Tool bereitstellt. Werfen Sie zum Beispiel einen Blick auf unser Video [Wait, ARIA Roles Have Categories?](https://www.youtube.com/watch?v=mwF-PpJOjMs) und wählen Sie das Drei-Punkte-Menü (. . .) _> Transkript anzeigen_. Sie sehen das Transkript in einem separaten Panel erscheinen.

Wenn Sie Ihre eigene Benutzeroberfläche zur Präsentation Ihres Audios und des zugehörigen Transkripts erstellen, können Sie es nach Belieben gestalten, aber es macht möglicherweise Sinn, es in einem anzeigbaren/versteckbaren Panel einzuschließen; siehe unser [audio-transcript-ui](https://mdn.github.io/learning-area/accessibility/multimedia/audio-transcript-ui/) Beispiel (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/audio-transcript-ui)).

### Audiobeschreibungen

In Fällen, in denen visuelle Darstellungen Ihr Audio begleiten, müssen Sie eine Art Audiobeschreibung bereitstellen, um diesen zusätzlichen Inhalt zu beschreiben.

In vielen Fällen wird dies in Form von Videos geschehen, bei denen Sie Untertitel mit den in der nächsten Abschnitt des Artikels beschriebenen Techniken implementieren können.

Es gibt jedoch einige Ausnahmen. Sie könnten zum Beispiel eine Audioaufnahme einer Sitzung haben, die auf eine begleitende Ressource wie eine Tabelle oder ein Diagramm verweist. In solchen Fällen sollten Sie sicherstellen, dass die Ressourcen zusammen mit dem Audio + Transkript bereitgestellt werden und spezifisch an den Stellen, an denen sie im Transkript erwähnt werden, verlinkt werden. Dies wird natürlich allen Nutzern zugutekommen, nicht nur Menschen, die taub sind.

> [!NOTE]
> Ein Audiotranskript wird im Allgemeinen mehreren Nutzergruppen helfen. Neben der Bereitstellung von Zugang zu den in der Audioaufnahme enthaltenen Informationen für gehörlose Nutzer, denken Sie an einen Nutzer mit einer langsamen Internetverbindung, für den das Herunterladen der Audiodatei unpraktisch wäre. Denken Sie auch an einen Nutzer in einer lauten Umgebung, wie einer Kneipe oder Bar, der versucht, auf die Informationen zuzugreifen, sie aber aufgrund des Lärms nicht hören kann.

## Video-Textspuren

Um Videos zugänglich für gehörlose, sehbehinderte oder andere Benutzergruppen zu machen (wie z. B. solche mit niedriger Bandbreite oder die die Sprache des Videos nicht verstehen), müssen Sie Textspuren mit Ihrem Videoinhalt einbinden.

> [!NOTE]
> Textspuren sind auch für potenziell alle Nutzer nützlich, nicht nur für diejenigen mit Behinderungen. Zum Beispiel könnten einige Nutzer die Audiodatei möglicherweise nicht hören, weil sie sich in einer lauten Umgebung befinden (wie einer vollgestopften Bar, in der ein Sportspiel gezeigt wird) oder sie wollen andere nicht stören, wenn sie sich in einem ruhigen Ort (wie einer Bibliothek) befinden.

Dies ist kein neues Konzept — Fernsehdienste bieten schon seit langer Zeit geschlossene Untertitel an:

![Bild aus einem alten Cartoon mit geschlossenen Untertiteln "Good work, Goldie. Keep it up!"](closed-captions.png)

Viele Länder bieten englische Filme mit in ihre eigenen Muttersprachen übersetzten Untertiteln an, und auf DVDs sind oft verschiedene Sprachuntertitel verfügbar, wie unten gezeigt:

![Ein englischer Film mit deutschen Untertiteln "Emo, warum erkennst du nicht die Schönheit dieses Ortes?"](subtitles_german.png)

Es gibt verschiedene Arten von Textspuren für unterschiedliche Zwecke. Die wichtigsten, auf die Sie stoßen werden, sind:

- Untertitel — Für gehörlose Benutzer gedacht, die die Audiospur nicht hören können, einschließlich der gesprochenen Worte und kontextueller Informationen wie wer die Worte sprach, ob die Menschen verärgert oder traurig waren und welche Stimmung die Musik derzeit erzeugt.
- Untertitel — Enthalten Übersetzungen des Audiodialogs für Nutzer, die die gesprochene Sprache nicht verstehen.
- Beschreibungen — Diese enthalten Beschreibungen für sehbehinderte Menschen, die das Video nicht sehen können, zum Beispiel wie die Szene aussieht.
- Kapitelmarkierungen — Kapitelmarkierungen, die dem Benutzer helfen sollen, die Medienquelle zu navigieren.

### Implementierung von HTML-Video-Textspuren

Textspuren für die Anzeige mit HTML-Videos müssen in WebVTT geschrieben werden, einem Textformat, das mehrere Textstrings zusammen mit Metadaten enthält, z. B. zu welchem Zeitpunkt im Video jede Textzeichenfolge angezeigt werden soll, und sogar limitierte Stil-/Positionierungsinformationen. Diese Textstrings werden als Cues bezeichnet.

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

- Speichern Sie es als .vtt-Datei an einem sinnvollen Ort.
- Verlinken Sie die .vtt-Datei mit dem {{htmlelement("track")}}-Element. `<track>` sollte innerhalb von `<audio>` oder `<video>`, aber nach allen `<source>`-Elementen platziert werden. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind)-Attribut, um anzugeben, ob die Cues Untertitel, Beschreibungen oder Kapitelmarkierungen sind. Außerdem verwenden Sie [`srclang`](/de/docs/Web/HTML/Reference/Elements/track#srclang), um dem Browser mitzuteilen, in welcher Sprache Sie die Untertitel geschrieben haben.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

Dies führt zu einem Video, das Untertitel anzeigt. Für eine vollständige Anwendung und deren Quellcode siehe [Untertitel hinzufügen zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Dieses Beispiel verwendet JavaScript, um Benutzern zu ermöglichen, zwischen verschiedenen Untertiteln zu wählen. Beachten Sie, dass Sie, um die Untertitel einzuschalten, auf den "CC"-Button drücken und eine Option auswählen müssen — Englisch, Deutsch oder Spanisch.

> [!NOTE]
> Textspuren und Transkriptionen helfen Ihnen auch bei der {{Glossary("SEO", "Suchmaschinenoptimierung (SEO)")}}, da Suchmaschinen besonders auf Text achten. Textspuren ermöglichen es Suchmaschinen sogar, direkt zu einem Punkt mitten im Video zu verlinken.

## Zusammenfassung

Dieses Kapitel hat einen Überblick über Barrierefreiheitsthemen für Multimedia-Inhalte bereitgestellt, zusammen mit einigen praktischen Lösungen.

Es ist nicht immer einfach, Multimedia zugänglich zu machen. Wenn Sie beispielsweise mit einem immersiven 3D-Spiel oder einer Virtual-Reality-App arbeiten, ist es ziemlich schwierig, Textalternativen für eine solche Erfahrung bereitzustellen, und Sie könnten argumentieren, dass sehbehinderte Benutzer nicht wirklich zur Zielgruppe für solche Apps gehören.

Sie können jedoch sicherstellen, dass eine solche App über einen ausreichenden Farbkontrast und eine klare Darstellung verfügt, sodass sie von Personen mit eingeschränktem Sehvermögen/Farbblindheit wahrgenommen werden kann, und dass sie auch tastaturzugänglich ist. Denken Sie daran, dass es bei der Barrierefreiheit darum geht, so viel wie möglich zu tun, anstatt immer nach 100 % Barrierefreiheit zu streben, was oft unmöglich ist.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA","Learn_web_development/Core/Accessibility/Mobile", "Learn_web_development/Core/Accessibility")}}
