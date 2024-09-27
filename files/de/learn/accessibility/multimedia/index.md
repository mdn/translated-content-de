---
title: Barrierefreies Multimedia
slug: Learn/Accessibility/Multimedia
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/WAI-ARIA_basics","Learn/Accessibility/Mobile", "Learn/Accessibility")}}

Eine weitere Kategorie von Inhalten, die Barrierefreiheitsprobleme verursachen kann, ist Multimedia. Video-, Audio- und Bildinhalte müssen mit geeigneten Textalternativen versehen werden, damit sie von unterstützenden Technologien und deren Nutzern verstanden werden können. Dieser Artikel zeigt wie.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, CSS, JavaScript und ein Verständnis davon,
        <a href="/de/docs/Learn/Accessibility/What_is_accessibility"
          >was Barrierefreiheit ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Barrierefreiheitsprobleme bei Multimedia zu verstehen und wie man sie
        überwinden kann.
      </td>
    </tr>
  </tbody>
</table>

## Multimedia und Barrierefreiheit

In diesem Modul haben wir bisher eine Vielzahl von Inhalten betrachtet und was getan werden muss, um deren Barrierefreiheit sicherzustellen, von einfachen Textinhalten bis hin zu Datentabellen, Bildern, nativen Steuerelementen wie Formularelementen und Schaltflächen und sogar komplexeren Markup-Strukturen (mit [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics)-Attributen).

Dieser Artikel hingegen betrachtet eine weitere allgemeine Klasse von Inhalten, für die es möglicherweise nicht so einfach ist, die Barrierefreiheit sicherzustellen — Multimedia. Bilder, Audiospuren, Videos, {{htmlelement("canvas")}}-Elemente usw. sind nicht so einfach von Screenreadern verständlich oder über die Tastatur navigierbar, und wir müssen ihnen eine Hilfestellung geben.

Aber nicht verzagen — hier werden wir Ihnen helfen, die verfügbaren Techniken zu navigieren, um Multimedia barrierefreier zu machen.

## Einfache Bilder

Wir haben bereits einfache Textalternativen für HTML-Bilder in unserem Artikel [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn/Accessibility/HTML) behandelt — Sie können dort die vollständigen Details nachlesen. Kurz gesagt, sollten Sie sicherstellen, dass visuellen Inhalten, soweit möglich, alternative Texte zur Verfügung stehen, die von Screenreadern aufgenommen und an ihre Benutzer vorgelesen werden können.

Zum Beispiel:

```html
<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
```

## Barrierefreie Audio- und Videosteuerungen

Die Implementierung von Steuerungen für webbasierte Audio-/Videoanwendungen sollte kein Problem sein, oder? Lassen Sie uns das untersuchen.

### Das Problem mit nativen HTML-Steuerungen

HTML-Video- und -Audiokomponenten verfügen sogar über eine Reihe integrierter Steuerungen, die es Ihnen ermöglichen, die Medien sofort zu steuern. Zum Beispiel (siehe `native-controls.html` [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/native-controls.html) und [live](https://mdn.github.io/learning-area/accessibility/multimedia/native-controls.html)):

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

Das Attribut controls bietet Wiedergabe/Pause-Schaltflächen, eine Suchleiste usw. — die grundlegenden Steuerungen, die Sie von einem Mediaplayer erwarten würden. So sieht es in Firefox und Chrome aus:

![Screenshot von Videosteuerungen in Firefox](native-controls-firefox.png)

![Screenshot von Videosteuerungen in Chrome](native-controls-chrome.png)

Allerdings gibt es Probleme mit diesen Steuerungen:

- Sie sind in den meisten Browsern nicht tastaturzugänglich, d. h. Sie können nicht zwischen den Steuerungen im nativen Player wechseln. Opera und Chrome bieten dies bis zu einem gewissen Grad, aber es ist immer noch nicht ideal.
- Unterschiedliche Browser bieten den nativen Steuerungen unterschiedliche Styling- und Funktionsumfänge, und sie sind nicht stilisierbar, was bedeutet, dass sie nicht leicht einem Stil-Leitfaden einer Website folgen können.

Um dies zu beheben, können wir unsere eigenen benutzerdefinierten Steuerungen erstellen. Schauen wir uns an, wie das geht.

### Erstellen benutzerdefinierter Audio- und Videosteuerungen

HTML-Video und -Audio teilen sich eine API — HTML Media Element — die es Ihnen ermöglicht, benutzerdefinierte Funktionen auf Schaltflächen und andere Steuerungen abzubilden, die Sie selbst definieren.

Nehmen wir das Video-Beispiel von oben und fügen ihm benutzerdefinierte Steuerungen hinzu.

#### Grundlegende Einrichtung

Laden Sie zuerst eine Kopie unserer [custom-controls-start.html](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls-start.html), [custom-controls.css](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls.css), [rabbit320.mp4](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.mp4) und [rabbit320.webm](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.webm) Dateien herunter und speichern Sie sie in einem neuen Verzeichnis auf Ihrer Festplatte.

Erstellen Sie eine neue Datei namens main.js und speichern Sie sie im selben Verzeichnis.

Zunächst schauen wir uns das HTML für den Videoplayer im HTML an:

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
    <button class="playpause">Play</button>
    <button class="stop">Stop</button>
    <button class="rwd">Rwd</button>
    <button class="fwd">Fwd</button>
    <div class="time">00:00</div>
  </div>
</section>
```

#### JavaScript-Grundeinrichtung

Wir haben einige einfache Steuerungsschaltflächen unter unserem Video eingefügt. Diese Steuerungen tun natürlich standardmäßig nichts; um Funktionalität hinzuzufügen, verwenden wir JavaScript.

Wir müssen zuerst Referenzen auf jede der Steuerungen speichern — fügen Sie Folgendes oben in Ihre JavaScript-Datei ein:

```js
const playPauseBtn = document.querySelector(".playpause");
const stopBtn = document.querySelector(".stop");
const rwdBtn = document.querySelector(".rwd");
const fwdBtn = document.querySelector(".fwd");
const timeLabel = document.querySelector(".time");
```

Als nächstes müssen wir eine Referenz auf den Video-/Audioplayer selbst holen — fügen Sie diese Zeile unter die vorherigen Zeilen hinzu:

```js
const player = document.querySelector("video");
```

Dies hält eine Referenz auf ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt, das über mehrere nützliche Eigenschaften und Methoden verfügt, die verwendet werden können, um Funktionen an unsere Schaltflächen zu binden.

Bevor wir zur Erstellung unserer Schaltflächenfunktionen übergehen, entfernen wir die nativen Steuerungen, damit sie unseren benutzerdefinierten Steuerungen nicht im Weg sind. Fügen Sie Folgendes erneut am Ende Ihrer JavaScript-Datei hinzu:

```js
player.removeAttribute("controls");
```

Auf diese Weise wird, anstatt die Steuerungen von vornherein nicht einzuschließen, der Vorteil erzielt, dass der Nutzer bei einem Ausfall unseres JavaScripts weiterhin einige Steuerungen zur Verfügung hat.

#### Verkabelung unserer Schaltflächen

Zuerst richten wir die Wiedergabe-/Pause-Schaltfläche ein. Wir können dies mit einer einfachen bedingten Funktion zwischen Wiedergabe und Pause umschalten. Fügen Sie es unten in Ihren Code ein:

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

Fügen Sie als Nächstes diesen Code am unteren Ende hinzu, der die Stopp-Schaltfläche steuert:

```js
stopBtn.onclick = () => {
  player.pause();
  player.currentTime = 0;
  playPauseBtn.textContent = "Play";
};
```

Es gibt keine `stop()`-Funktion auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)s, daher pausieren wir stattdessen und setzen gleichzeitig die `currentTime` auf 0.

Als nächstes unsere Rückspul- und Vorlauf-Schaltflächen — fügen Sie die folgenden Blöcke am Ende Ihres Codes hinzu:

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

Diese sind sehr einfach, sie addieren oder subtrahieren bei jedem Klick 3 Sekunden zur `currentTime`. In einem realen Videoplayer möchten Sie wahrscheinlich eine aufwendigere Suchleiste oder Ähnliches.

Beachten Sie, dass wir auch überprüfen, ob die `currentTime` größer als die gesamte Medien `duration` ist oder ob das Medium nicht abgespielt wird, wenn die `fwdBtn` gedrückt wird. Wenn eine der Bedingungen erfüllt ist, stoppen wir das Video, um zu vermeiden, dass die Benutzeroberfläche kaputt geht, wenn der Nutzer versucht, schnell vorwärts zu spulen, wenn das Video nicht abgespielt wird oder das Videoende überschreitet.

Und zu guter Letzt fügen Sie das Folgende am Ende des Codes hinzu, um die Anzeige der verstrichenen Zeit zu steuern:

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

Jedes Mal, wenn sich die Zeit aktualisiert (einmal pro Sekunde), feuern wir diese Funktion ab. Sie berechnet die Anzahl der Minuten und Sekunden ab dem angegebenen currentTime-Wert (der in Sekunden angegeben ist), fügt eine führende 0 hinzu, wenn entweder der Minuten- oder Sekundenwert weniger als 10 ist, und erstellt dann das Anzeigebildschirm und fügt es dem Zeitlabel hinzu.

#### Weiterführende Literatur

Dies gibt Ihnen eine grundlegende Vorstellung davon, wie Sie benutzerdefinierte Player-Funktionalität zu Video-/Audioplayer-Instanzen hinzufügen. Für weitere Informationen darüber, wie Sie komplexere Funktionen zu Video-/Audioplayern hinzufügen können, siehe:

- [Audio- und Videolieferung](/de/docs/Web/Media/Audio_and_video_delivery)
- [Grundlagen der Videoplayergestaltung](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics)
- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player)

Wir haben auch ein fortgeschrittenes Beispiel erstellt, um zu zeigen, wie Sie ein objektorientiertes System erstellen könnten, das jeden Video- und Audioplayer auf der Seite findet (egal wie viele es gibt) und unsere benutzerdefinierten Steuerungen hinzufügt. Siehe [custom-controls-oojs](https://mdn.github.io/learning-area/accessibility/multimedia/custom-controls-OOJS/) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/custom-controls-OOJS) an).

## Audiotranskripte

Um gehörlosen Menschen Zugang zu Audiomaterial zu bieten, müssen Sie Texttranskripte erstellen. Diese können entweder auf dieselbe Seite wie das Audio in irgendeiner Weise eingefügt oder auf einer separaten Seite bereitgestellt und verlinkt werden.

In Bezug auf die eigentliche Erstellung des Transkripts haben Sie folgende Möglichkeiten:

- Kommerzielle Dienstleistungen — Sie könnten einen Fachmann mit der Transkription beauftragen. Schauen Sie sich beispielsweise Unternehmen wie [Scribie](https://scribie.com/), [Casting Words](https://castingwords.com/) oder [Rev](https://www.rev.com/) an. Schauen Sie sich um und holen Sie sich Ratschläge ein, um sicherzustellen, dass Sie ein seriöses Unternehmen finden, mit dem Sie effektiv zusammenarbeiten können.
- Community-/Graswurzel-/Selbsttranskription — Wenn Sie Teil einer aktiven Community oder eines Teams an Ihrem Arbeitsplatz sind, könnten Sie diese um Hilfe bei den Übersetzungen bitten. Sie könnten sogar selbst versuchen, sie zu erstellen.
- Automatisierte Dienste — Es gibt KI-Dienste, wie [Trint](https://trint.com/) oder [Transcribear](https://transcribear.com/). Laden Sie eine Video-/Audiodatei auf die Website hoch, und sie wird automatisch für Sie transkribiert. Auf YouTube können Sie automatisierte Untertitel/-transkripte generieren lassen. Je nachdem, wie klar das gesprochene Audio ist, wird die Qualität des resultierenden Transkripts stark variieren.

Wie bei den meisten Dingen im Leben, neigt man dazu, das zu bekommen, wofür man zahlt; verschiedene Dienste variieren in Genauigkeit und der benötigten Zeit zur Erstellung des Transkripts. Wenn Sie ein seriöses Unternehmen oder einen AI-Dienst bezahlen, um die Transkription durchzuführen, werden Sie es wahrscheinlich schnell und in hoher Qualität erledigt bekommen. Wenn Sie keine Kosten tragen möchten, werden Sie es wahrscheinlich in geringerer Qualität und/oder langsam erledigen lassen.

Es ist nicht in Ordnung, ein Audiomaterial zu veröffentlichen, aber zu versprechen, das Transkript später zu veröffentlichen — solche Versprechen werden oft nicht eingehalten, was das Vertrauen zwischen Ihnen und Ihren Nutzern untergräbt. Wenn das von Ihnen präsentierte Audio etwas wie ein persönliches Treffen oder eine live gesprochene Aufführung ist, wäre es akzeptabel, während der Aufführung Notizen zu machen, diese in vollem Umfang zusammen mit dem Audio zu veröffentlichen und dann Hilfe bei der Bereinigung der Notizen danach zu suchen.

### Transkriptbeispiele

Wenn Sie einen automatisierten Dienst verwenden, müssen Sie wahrscheinlich die Benutzeroberfläche des Tools verwenden. Schauen Sie sich zum Beispiel unser [Wait, ARIA Roles Have Categories?](https://www.youtube.com/watch?v=mwF-PpJOjMs) Video an und wählen Sie das Drei-Punkte-Menü (. . .) _> Transkription anzeigen_. Sie sehen das Transkript in einem separaten Panel.

Wenn Sie Ihre eigene Benutzeroberfläche erstellen, um Ihr Audio und das zugehörige Transkript zu präsentieren, können Sie das nach Belieben tun, es könnte jedoch Sinn machen, es in ein ein- und ausblendbares Panel einzufügen; siehe unser Beispiel [audio-transcript-ui](https://mdn.github.io/learning-area/accessibility/multimedia/audio-transcript-ui/) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/audio-transcript-ui) an).

### Audiobeschreibungen

Bei Gelegenheiten, bei denen visuelle Inhalte Ihr Audio begleiten, müssen Sie in irgendeiner Form Audiobeschreibungen bereitstellen, um diesen zusätzlichen Inhalt zu beschreiben.

In vielen Fällen wird dies in Form von Video vorliegen, in welchem Fall Sie Untertitel mit den in dem nächsten Abschnitt des Artikels beschrieben Techniken implementieren können.

Allerdings gibt es einige Sonderfälle. Sie könnten zum Beispiel eine Audioaufnahme eines Treffens haben, die sich auf eine begleitende Ressource wie eine Tabelle oder ein Diagramm bezieht. In solchen Fällen sollten Sie sicherstellen, dass die Ressourcen zusammen mit dem Audio und dem Transkript bereitgestellt werden und speziell an den Stellen im Transkript darauf verlinken, an denen sie erwähnt werden. Dies hilft natürlich allen Nutzern, nicht nur gehörlosen Menschen.

> [!NOTE]
> Ein Audiotranskript wird im Allgemeinen mehreren Nutzergruppen helfen. Neben der Möglichkeit, gehörlosen Nutzern Zugang zu den im Audio enthaltenen Informationen zu geben, denken Sie an einen Nutzer mit einer langsamen Internetverbindung, für den das Herunterladen des Audios unpraktisch wäre. Denken Sie auch an einen Nutzer in einer lauten Umgebung wie einem Pub oder einer Bar, der versucht, auf die Informationen zuzugreifen, sie aber nicht über den Lärm hören kann.

## Videotextspuren

Um Video für gehörlose, sehbehinderte oder andere Benutzergruppen zugänglich zu machen (z. B. für jene mit niedriger Bandbreite oder die die Sprache, in der das Video aufgenommen wurde, nicht verstehen), müssen Sie Textspuren zusammen mit Ihrem Videoinhalt einfügen.

> [!NOTE]
> Textspuren sind auch für potenziell alle Benutzer nützlich, nicht nur für diejenigen mit Behinderungen. Zum Beispiel können einige Benutzer die Audio nicht hören, weil sie sich in lauten Umgebungen befinden (wie eine überfüllte Bar, wenn ein Sportspiel gezeigt wird) oder wollen andere nicht stören, wenn sie sich an einem ruhigen Ort befinden (wie eine Bibliothek).

Dies ist kein neues Konzept — Fernsehdienste bieten seit langem Untertitel an:

![Frame aus einem altmodischen Cartoon mit geschlossenem Untertitel "Good work, Goldie. Keep it up!"](closed-captions.png)

In vielen Ländern werden englische Filme mit Untertiteln in ihrer eigenen Muttersprache angeboten, und auf DVDs sind oft Untertitel in verschiedenen Sprachen verfügbar, wie unten gezeigt:

![Ein englischer Film mit deutschen Untertiteln "Emo, warum erkennst du nicht die Schonheit dieses Ortes?"](subtitles_german.png)

Es gibt verschiedene Arten von Textspuren für verschiedene Zwecke. Die wichtigsten, die Ihnen begegnen werden, sind:

- Untertitel — Für gehörlose Nutzer gedacht, die die Audiospur nicht hören können, einschließlich der gesprochenen Worte und kontextueller Informationen wie wer die Worte sprach, ob die Menschen wütend oder traurig waren und welche Stimmung die Musik derzeit erzeugt.
- Übersetzungen — Enthalten Übersetzungen des Audiodialogs für Nutzer, die die gesprochene Sprache nicht verstehen.
- Beschreibungen — Diese enthalten Beschreibungen für sehbehinderte Menschen, die das Video nicht sehen können, zum Beispiel, wie die Szene aussieht.
- Kapitelüberschriften — Kapitelmarkierungen, die dem Nutzer helfen, die Medienressource zu navigieren.

### Implementierung von HTML-Videotextspuren

Textspuren zur Anzeige mit HTML-Video müssen in WebVTT geschrieben werden, einem Textformat, das mehrere Textzeichenfolgen mit Metadaten wie der Uhrzeit im Video, zu der jede Textzeichenfolge angezeigt werden soll, und sogar begrenzter Styling- und Positionierungsinformationen enthält. Diese Textzeichenfolgen werden als Cues bezeichnet.

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

- Sie als .vtt-Datei an einem sinnvollen Ort speichern.
- Auf die .vtt-Datei mit dem {{htmlelement("track")}}-Element verlinken. `<track>` sollte innerhalb von `<audio>` oder `<video>` platziert werden, aber nach allen `<source>`-Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Element/track#kind)-Attribut, um anzugeben, ob es sich um Untertitel, Beschreibungen oder andere Cue-Typen handelt. Verwenden Sie außerdem [`srclang`](/de/docs/Web/HTML/Element/track#srclang), um dem Browser mitzuteilen, in welcher Sprache Sie die Untertitel geschrieben haben.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

Dies ergibt ein Video, das Untertitel wie folgt anzeigt:

![Videoplayer mit Standardsteuerungen wie Abspielen, Stoppen, Lautstärke und Untertitel an und aus. Das abgespielte Video zeigt eine Szene eines Mannes mit einer speerähnlichen Waffe, und ein Untertitel lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für weitere Details siehe [Adding captions and subtitles to HTML video](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können [das Beispiel](https://iandevlin.github.io/mdn/video-player-with-captions/) finden, das zu diesem Artikel auf GitHub gehört, geschrieben von Ian Devlin (siehe auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions)). Dieses Beispiel verwendet JavaScript, um Benutzern die Auswahl zwischen verschiedenen Untertiteln zu ermöglichen. Beachten Sie, dass, um die Untertitel einzuschalten, Sie die "CC"-Schaltfläche drücken und eine Option auswählen müssen — Englisch, Deutsch oder Spanisch.

> [!NOTE]
> Textspuren und Transkripte helfen Ihnen auch bei [SEO](/de/docs/Glossary/SEO), da Suchmaschinen besonders auf Text angewiesen sind. Textspuren ermöglichen es Suchmaschinen sogar, direkt auf eine Stelle im Video zu verlinken.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern?

Wir haben keine neuen Bewertungssets für diesen Artikel geschrieben, da bereits Bewertungsmöglichkeiten in unserem Modul [HTML Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding) vorhanden sind, die Ihr Wissen über die hier präsentierten Informationen testen. Wenn Sie es noch nicht getan haben, probieren Sie die Bewertungen bei [Test Your Skills: HTML images](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML/Test_your_skills:_HTML_images) und [Test Your Skills: Multimedia and embedding](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding) aus.

## Zusammenfassung

Dieses Kapitel bietet eine Zusammenfassung der Barrierefreiheitsprobleme von Multimedia-Inhalten sowie einiger praktischer Lösungen.

Es ist nicht immer einfach, Multimedia barrierefrei zu machen. Wenn Sie beispielsweise ein immersives 3D-Spiel oder eine Virtual-Reality-Anwendung entwickeln, ist es recht schwierig, textbasierte Alternativen für ein solches Erlebnis bereitzustellen, und Sie könnten argumentieren, dass sehbehinderte Benutzer nicht wirklich zur Zielgruppe solcher Apps gehören.

Sie können jedoch sicherstellen, dass eine solche App einen guten Farbkontrast und eine klare Präsentation hat, damit sie für Menschen mit geringem Sehvermögen/Farbenblindheit wahrnehmbar ist, und auch die Tastaturzugänglichkeit sicherstellen. Denken Sie daran, dass Barrierefreiheit bedeutet, so viel wie möglich zu tun, anstatt ständig nach 100%iger Barrierefreiheit zu streben, was oft unmöglich ist.

{{PreviousMenuNext("Learn/Accessibility/WAI-ARIA_basics","Learn/Accessibility/Mobile", "Learn/Accessibility")}}
