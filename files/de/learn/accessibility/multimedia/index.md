---
title: Barrierefreie Multimedia
slug: Learn/Accessibility/Multimedia
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/WAI-ARIA_basics","Learn/Accessibility/Mobile", "Learn/Accessibility")}}

Eine weitere Kategorie von Inhalten, die Barrierefreiheitsprobleme verursachen kann, ist Multimedia. Video-, Audio- und Bildinhalte benötigen geeignete textliche Alternativen, damit sie von unterstützenden Technologien und deren Nutzern verstanden werden können. Dieser Artikel zeigt, wie das geht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML, CSS, JavaScript und ein Verständnis davon,
        <a href="/de/docs/Learn/Accessibility/What_is_accessibility"
          >was Barrierefreiheit ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verständnis für die Barrierefreiheitsprobleme bei Multimedia zu entwickeln und
        zu lernen, wie man diese überwinden kann.
      </td>
    </tr>
  </tbody>
</table>

## Multimedia und Barrierefreiheit

In diesem Modul haben wir uns bisher eine Vielzahl von Inhalten angesehen und was getan werden muss, um deren Barrierefreiheit sicherzustellen, angefangen von einfachem Textinhalt bis hin zu Datentabellen, Bildern, nativen Steuerelementen wie Formularelementen und Schaltflächen, und sogar komplexeren Markup-Strukturen (mit [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics) Attributen).

Dieser Artikel betrachtet hingegen eine andere allgemeine Klasse von Inhalten, für die Barrierefreiheit wohl nicht so einfach zu gewährleisten ist — Multimedia. Bilder, Audiotracks, Videos, `<canvas>`-Elemente usw. sind nicht so einfach von Screenreadern zu verstehen oder mit der Tastatur zu navigieren, und wir müssen ihnen unter die Arme greifen.

Aber nicht verzweifeln — hier helfen wir Ihnen, durch die Techniken zu navigieren, die verfügbar sind, um Multimedia barrierefreier zu gestalten.

## Einfache Bilder

Wir haben bereits einfache Textalternativen für HTML-Bilder in unserem [HTML: Eine gute Basis für Barrierefreiheit](/de/docs/Learn/Accessibility/HTML) Artikel behandelt — Sie können dort die vollständigen Details nachlesen. Kurz gesagt, sollten Sie sicherstellen, dass visuelle Inhalte, wo möglich, über einen Alternativtext verfügen, den Screenreader erfassen und ihren Nutzern vorlesen können.

Zum Beispiel:

```html
<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
```

## Barrierefreie Audio- und Videosteuerungen

Die Implementierung von Steuerungen für webbasierte Audio-/Videoanwendungen sollte kein Problem sein, oder? Lassen Sie uns das untersuchen.

### Das Problem mit nativen HTML-Steuerungen

HTML-Video- und Audio-Instanzen kommen sogar mit einem Satz eingebauter Steuerungen, die es ermöglichen, die Medien direkt „out of the box“ zu steuern. Zum Beispiel (siehe `native-controls.html` [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/native-controls.html) und [live](https://mdn.github.io/learning-area/accessibility/multimedia/native-controls.html)):

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

Das `controls`-Attribut bietet Play/Pause-Schaltflächen, eine Suchleiste usw. — die grundlegenden Steuerungen, die Sie von einem Mediaplayer erwarten würden. Es sieht in Firefox und Chrome folgendermaßen aus:

![Screenshot von Video-Steuerungen in Firefox](native-controls-firefox.png)

![Screenshot von Video-Steuerungen in Chrome](native-controls-chrome.png)

Es gibt jedoch Probleme mit diesen Steuerungen:

- Sie sind in den meisten Browsern nicht tastaturzugänglich, d.h. Sie können nicht zwischen den Steuerungen innerhalb des nativen Players wechseln. Opera und Chrome bieten dies bis zu einem gewissen Grad, aber es ist immer noch nicht ideal.
- Verschiedene Browser geben den nativen Steuerungen unterschiedliche Stile und Funktionen, und sie sind nicht stylbar, was bedeutet, dass sie nicht einfach einem Stilhandbuch einer Website folgen können.

Um dies zu beheben, können wir unsere eigenen benutzerdefinierten Steuerungen erstellen. Schauen wir uns an, wie.

### Erstellen von benutzerdefinierten Audio- und Videosteuerungen

HTML-Video und Audio teilen eine API — das HTML `MediaElement` — das es ermöglicht, benutzerdefinierte Funktionen auf Schaltflächen und andere Steuerungen zuzuordnen — beide definieren Sie selbst.

Lassen Sie uns das obige Video-Beispiel nehmen und ihm benutzerdefinierte Steuerungen hinzufügen.

#### Grundlegendes Setup

Zuerst laden Sie eine Kopie unserer [custom-controls-start.html](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls-start.html), [custom-controls.css](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls.css), [rabbit320.mp4](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.mp4), und [rabbit320.webm](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.webm) Dateien herunter und speichern diese in einem neuen Verzeichnis auf Ihrer Festplatte.

Erstellen Sie eine neue Datei namens `main.js` und speichern Sie sie im gleichen Verzeichnis.

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
    <button class="playpause">Play</button>
    <button class="stop">Stop</button>
    <button class="rwd">Rwd</button>
    <button class="fwd">Fwd</button>
    <div class="time">00:00</div>
  </div>
</section>
```

#### Grundlegendes JavaScript-Setup

Wir haben unter unserem Video einige einfache Steuerungsschaltflächen eingefügt. Diese Steuerungen tun natürlich standardmäßig nichts; um Funktionalität hinzuzufügen, verwenden wir JavaScript.

Zuerst müssen wir Referenzen zu jedem der Steuerungselemente speichern — fügen Sie das folgende an den Anfang Ihrer JavaScript-Datei hinzu:

```js
const playPauseBtn = document.querySelector(".playpause");
const stopBtn = document.querySelector(".stop");
const rwdBtn = document.querySelector(".rwd");
const fwdBtn = document.querySelector(".fwd");
const timeLabel = document.querySelector(".time");
```

Als nächstes müssen wir eine Referenz zum Video-/Audioplayer selbst erhalten — fügen Sie diese Zeile unter den vorherigen Zeilen hinzu:

```js
const player = document.querySelector("video");
```

Dies hält eine Referenz zu einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Objekt, das mehrere nützliche Eigenschaften und Methoden enthält, die verwendet werden können, um Funktionalität an unsere Schaltflächen zu koppeln.

Bevor wir mit der Erstellung unserer Schaltflächenfunktionalität fortfahren, lassen Sie uns die nativen Steuerungen entfernen, damit sie unseren benutzerdefinierten Steuerungen nicht im Weg stehen. Fügen Sie das Folgende, wieder am Ende Ihrer JavaScript, hinzu:

```js
player.removeAttribute("controls");
```

Auf diese Weise hat der Vorteil, dass, falls unser JavaScript aus irgendeinem Grund fehlschlägt, der Nutzer trotzdem einige Steuerungen zur Verfügung hat.

#### Verkabelung unserer Tasten

Zunächst richten wir die Play/Pause-Taste ein. Wir können diese mit einer einfachen Bedingungsfunktion zwischen Wiedergabe und Pause umschalten lassen, wie der folgenden. Fügen Sie diese am Ende Ihres Codes hinzu:

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

Fügen Sie als nächstes diesen Code am Ende hinzu, der die Stopptaste steuert:

```js
stopBtn.onclick = () => {
  player.pause();
  player.currentTime = 0;
  playPauseBtn.textContent = "Play";
};
```

Es gibt keine `stop()` Funktion auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)s, also `pause()` wir es stattdessen und setzen zur gleichen Zeit die `currentTime` auf 0.

Als nächstes unsere Zurück- und Vorspulen-Tasten — fügen Sie die folgenden Blöcke an das Ende Ihres Codes hinzu:

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

Diese sind sehr einfach, sie fügen der `currentTime` jedes Mal 3 Sekunden hinzu oder ziehen sie ab, wenn sie geklickt werden. In einem echten Videoplayer möchten Sie wahrscheinlich eine aufwendigere Suchleiste oder ähnliches.

Beachten Sie, dass wir auch prüfen, ob die `currentTime` größer ist als die Gesamtdauer des Mediums oder ob das Medium nicht abgespielt wird, wenn die `fwdBtn` gedrückt wird. Wenn eine dieser Bedingungen wahr ist, stoppen wir das Video, um zu verhindern, dass die Benutzeroberfläche fehlerhaft wird, wenn sie versuchen vorwärts zu spulen, wenn das Video nicht abgespielt wird oder wenn sie über das Ende des Videos hinaus vorwärts spulen.

Zuletzt fügen Sie am Ende des Codes das Folgende hinzu, um die Anzeige der verstrichenen Zeit zu steuern:

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

Jedes Mal, wenn die Zeit aktualisiert wird (einmal pro Sekunde), wird diese Funktion aufgerufen. Sie berechnet die Anzahl der Minuten und Sekunden aus der gegebenen currentTime-Wert (der in Sekunden ist), fügt eine führende 0 hinzu, wenn entweder der Minuten- oder Sekundenwert kleiner als 10 ist, und erstellt dann die Anzeige und fügt sie der Zeitbeschriftung hinzu.

#### Weiterführende Literatur

Dies gibt Ihnen einen grundsätzlichen Eindruck davon, wie Sie benutzerdefinierte Playerfunktionen zu Video-/Audioplayer-Instanzen hinzufügen können. Für weitere Informationen darüber, wie Sie komplexere Funktionen zu Video-/Audioplayern hinzufügen können, siehe:

- [Audio- und Videolieferung](/de/docs/Web/Media/Audio_and_video_delivery)
- [Grundlagen der Videoplayer-Styling](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics)
- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player)

Wir haben auch ein fortgeschrittenes Beispiel erstellt, um zu zeigen, wie man ein objektorientiertes System erstellen könnte, das jeden Video- und Audioplayer auf der Seite findet (egal wie viele es gibt) und unsere benutzerdefinierten Steuerungen darauf anwendet. Siehe [custom-controls-oojs](https://mdn.github.io/learning-area/accessibility/multimedia/custom-controls-OOJS/) (auch [siehe den Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/custom-controls-OOJS)).

## Audio-Transkripte

Um gehörlosen Menschen Zugang zu Audioinhalten zu verschaffen, müssen Sie Textabschriften erstellen. Diese können entweder auf der gleichen Seite wie das Audio in irgendeiner Weise enthalten sein oder auf einer separaten Seite verlinkt.

In Bezug auf die eigentliche Erstellung des Transkripts haben Sie folgende Optionen:

- Kommerzielle Dienste — Sie könnten einen Profi für die Transkription bezahlen, siehe zum Beispiel Unternehmen wie [Scribie](https://scribie.com/), [Casting Words](https://castingwords.com/) oder [Rev](https://www.rev.com/). Schauen Sie sich um und holen Sie Rat ein, um sicherzustellen, dass Sie ein seriöses Unternehmen finden, mit dem Sie effektiv zusammenarbeiten können.
- Gemeinschafts-/Basis-/Selbsttranskription — Wenn Sie Teil einer aktiven Gemeinschaft oder eines Teams an Ihrem Arbeitsplatz sind, können Sie sie um Hilfe bei den Übersetzungen bitten. Sie könnten sogar selbst versuchen, sie zu erstellen.
- Automatisierte Dienste — Es gibt KI-Dienste wie [Trint](https://trint.com/) oder [Transcribear](https://transcribear.com/). Sie laden eine Video-/Audiodatei auf die Seite hoch, und diese transkribiert sie automatisch. Auf YouTube können Sie automatische Untertitel/Transkripte generieren lassen. Abhängig davon, wie klar das gesprochene Audio ist, wird die Qualität des resultierenden Transkripts stark variieren.

Wie bei den meisten Dingen im Leben bekommen Sie in der Regel das, wofür Sie zahlen; verschiedene Dienste variieren in ihrer Genauigkeit und der benötigten Zeit zur Erstellung des Transkripts. Wenn Sie ein seriöses Unternehmen oder einen AI-Dienst für die Transkription bezahlen, wird es wahrscheinlich schnell und in hoher Qualität erledigt. Wenn Sie dafür nicht bezahlen möchten, wird es wahrscheinlich in geringerer Qualität und/oder langsamer erledigt.

Es ist nicht in Ordnung, eine Audioressource zu veröffentlichen, aber zu versprechen, das Transkript später zu veröffentlichen — solche Versprechen werden oft nicht eingehalten, was das Vertrauen zwischen Ihnen und Ihren Nutzern erodieren wird. Wenn das Audio, das Sie präsentieren, etwas wie ein persönliches Treffen oder eine live gesprochene Aufführung ist, wäre es akzeptabel, während der Aufführung Notizen zu machen, diese zusammen mit dem Audio in voller Länge zu veröffentlichen und dann Hilfe bei der Nachbearbeitung der Notizen zu bekommen.

### Transkriptbeispiele

Wenn Sie einen automatisierten Dienst nutzen, müssen Sie wahrscheinlich die Benutzeroberfläche verwenden, die das Tool bereitstellt. Sehen Sie sich zum Beispiel unser [Wait, ARIA Roles Have Categories?](https://www.youtube.com/watch?v=mwF-PpJOjMs) Video an und wählen Sie das Dreipunktmenü (. . .) _> Transkript anzeigen_. Sie sehen, wie das Transkript in einem separaten Bereich angezeigt wird.

Wenn Sie Ihre eigene Benutzeroberfläche zur Präsentation Ihres Audios und des zugehörigen Transkripts erstellen, können Sie es nach Belieben tun, aber es könnte sinnvoll sein, es in einem anzeigbaren/versteckbaren Bereich zu inkludieren; siehe unser [audio-transcript-ui](https://mdn.github.io/learning-area/accessibility/multimedia/audio-transcript-ui/) Beispiel (auch siehe den [Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/audio-transcript-ui)).

### Audiobeschreibungen

In Fällen, in denen Audio visuelle Inhalte begleitet, müssen Sie Audiobeschreibungen bereitstellen, um diesen zusätzlichen Inhalt zu beschreiben.

In vielen Fällen wird dies in Form von Videos erfolgen, in diesem Fall können Sie mit den im nächsten Abschnitt des Artikels beschriebenen Techniken Untertitel implementieren.

Es gibt jedoch einige Grenzfälle. Sie könnten beispielsweise eine Audioaufnahme eines Meetings haben, die sich auf eine begleitende Ressource wie eine Tabelle oder ein Diagramm bezieht. In solchen Fällen sollten Sie sicherstellen, dass die Ressourcen zusammen mit dem Audio + Transkript bereitgestellt werden und dass speziell auf sie an den Stellen verwiesen wird, an denen sie im Transkript erwähnt werden. Dies wird natürlich allen Nutzern helfen, nicht nur Menschen, die gehörlos sind.

> [!NOTE]
> Ein Audiotranskript wird im Allgemeinen mehreren Nutzergruppen helfen. Neben der Bereitstellung von Zugang zu den im Audio enthaltenen Informationen für gehörlose Nutzer, denken Sie an einen Nutzer mit einer langsamen Internetverbindung, der das Herunterladen des Audios als unpraktisch empfindet. Denken Sie auch an einen Nutzer in einer lauten Umgebung wie einer Kneipe oder einer Bar, der versucht, auf die Informationen zuzugreifen, diese aber über den Lärm nicht hören kann.

## Video-Textspuren

Um Videos für Gehörlose, Sehbehinderte oder andere Nutzergruppen (wie solche mit niedriger Bandbreite oder die die Sprache, in der das Video aufgenommen wurde, nicht verstehen) zugänglich zu machen, müssen Sie Textspuren zusammen mit Ihren Videoinhalten einbinden.

> [!NOTE]
> Textspuren sind auch für potenziell jeden Nutzer nützlich, nicht nur für diejenigen mit Behinderungen. Beispielsweise können einige Nutzer den Ton nicht hören, weil sie sich in lauten Umgebungen (wie einer überfüllten Bar während eines Sportspiels) befinden oder andere nicht stören wollen, wenn sie sich an einem ruhigen Ort befinden (wie einer Bibliothek).

Dies ist kein neues Konzept — Fernsehdienste bieten seit langem Untertitelung an:

![Bild aus einem alten Cartoon mit der Bildunterschrift "Good work, Goldie. Keep it up!"](closed-captions.png)

In vielen Ländern werden englische Filme mit Untertiteln in ihrer eigenen Landessprache angeboten, und auf DVDs sind oft Untertitel in verschiedenen Sprachen verfügbar, wie unten gezeigt:

![Ein englischer Film mit deutschen Untertiteln "Emo, warum erkennst du nicht die Schonheit dieses Ortes?"](subtitles_german.png)

Es gibt verschiedene Arten von Textspuren für verschiedene Zwecke. Die wichtigsten, denen Sie begegnen werden, sind:

- Untertitel — Für gehörlose Nutzer, die die Tonspur nicht hören können, einschließlich der gesprochenen Wörter und kontextueller Informationen wie wer die Wörter gesprochen hat, ob die Menschen wütend oder traurig waren und welche Stimmung die Musik derzeit schafft.
- Übersetzungen — Enthalten Übersetzungen des Audio-Dialogs für Nutzer, die die gesprochene Sprache nicht verstehen.
- Beschreibungen — Diese enthalten Beschreibungen für sehbehinderte Menschen, die das Video nicht sehen können, zum Beispiel, wie die Szene aussieht.
- Kapitelmarken — Kapitelmarkierungen zur Unterstützung der Navigation durch das Medienressourcen

### Implementierung von HTML-Video-Textspuren

Textspuren zur Anzeige mit HTML-Videos müssen in WebVTT geschrieben werden, einem Textformat, das mehrere Textstrings zusammen mit Metadaten enthält, wie z.B. zu welcher Zeit im Video jeder Textstring angezeigt werden soll, und sogar eingeschränkte Styling-/Positionierungsinformationen. Diese Textstrings werden Cues genannt.

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

Um das zusammen mit der HTML-Medienwiedergabe anzuzeigen, müssen Sie:

- Sie als .vtt-Datei an einem sinnvollen Ort speichern.
- Auf die .vtt-Datei mit dem `track`-Element verlinken. `<track>` sollte innerhalb von `<audio>` oder `<video>` platziert werden, aber nach allen `<source>`-Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Element/track#kind) Attribut, um anzugeben, ob die Cues Übersetzungen, Untertitel oder Beschreibungen sind. Verwenden Sie zudem [`srclang`](/de/docs/Web/HTML/Element/track#srclang), um dem Browser mitzuteilen, in welcher Sprache Sie die Untertitel verfasst haben.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

Dies führt zu einem Video, das Untertitel anzeigt, ähnlich wie dieses:

![Videoplayer mit Standardsteuerungen wie Play, Stop, Lautstärke und Untertiteln an und aus. Das Video zeigt eine Szene mit einem Mann, der eine speerähnliche Waffe hält, und eine Bildunterschrift besagt "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für weitere Details siehe [Hinzufügen von Untertiteln zu HTML-Video](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie finden [das Beispiel](https://iandevlin.github.io/mdn/video-player-with-captions/), das zu diesem Artikel auf GitHub gehört, geschrieben von Ian Devlin (siehe auch [den Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions)). Dieses Beispiel verwendet JavaScript, um Nutzern zu ermöglichen, zwischen verschiedenen Untertiteln zu wählen. Beachten Sie, dass Sie zum Einschalten der Untertitel die "CC"-Taste drücken und eine Option auswählen müssen — Englisch, Deutsch oder Spanisch.

> [!NOTE]
> Textspuren und Transkripte helfen Ihnen auch bei [SEO](/de/docs/Glossary/SEO), da Suchmaschinen besonders auf Text angewiesen sind. Textspuren erlauben es Suchmaschinen sogar, direkt auf eine Stelle mitten im Video zu verlinken.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern?

Wir haben kein neues Set von Bewertungen für diesen Artikel geschrieben, weil es bereits Bewertungen in unserem [HTML Multimedia und Embedding](/de/docs/Learn/HTML/Multimedia_and_embedding) Modul gibt, die Ihr Wissen über die hier präsentierten Informationen testen. Wenn Sie dies noch nicht getan haben, gehen Sie und testen Sie Ihr Wissen bei [Testen Sie Ihr Wissen: HTML-Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML/Test_your_skills:_HTML_images) und [Testen Sie Ihr Wissen: Multimedia und Embedding](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding).

## Zusammenfassung

Dieses Kapitel bietet eine Zusammenfassung der Barrierefreiheitsbedenken für Multimedia-Inhalte sowie einige praktische Lösungen.

Es ist nicht immer einfach, Multimedia barrierefrei zu machen. Wenn Sie beispielsweise mit einem immersiven 3D-Spiel oder einer virtuellen Realität-App zu tun haben, ist es ziemlich schwierig, für ein solches Erlebnis Textalternativen zu bieten, und Sie könnten argumentieren, dass sehbehinderte Nutzer nicht wirklich zur Zielgruppe solcher Apps gehören.

Sie können jedoch sicherstellen, dass eine solche App über ausreichend guten Farbkontrast und klare Präsentation verfügt, damit sie für Menschen mit Sehschwäche/Farbblindheit wahrnehmbar ist und auch tastaturzugänglich ist. Denken Sie daran, dass Barrierefreiheit bedeutet, so viel wie möglich zu tun, anstatt immer 100% Barrierefreiheit anzustreben, was oft unmöglich ist.

{{PreviousMenuNext("Learn/Accessibility/WAI-ARIA_basics","Learn/Accessibility/Mobile", "Learn/Accessibility")}}
