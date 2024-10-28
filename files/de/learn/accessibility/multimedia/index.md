---
title: Barrierefreie Multimedia
slug: Learn/Accessibility/Multimedia
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/WAI-ARIA_basics","Learn/Accessibility/Mobile", "Learn/Accessibility")}}

Eine weitere Kategorie von Inhalten, die Barrierefreiheitsprobleme verursachen kann, ist Multimedia. Video-, Audio- und Bildinhalte benötigen geeignete Textalternativen, damit sie von unterstützenden Technologien und deren Nutzern verstanden werden können. Dieser Artikel zeigt, wie das geht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, CSS, JavaScript und ein Verständnis von
        <a href="/de/docs/Learn/Accessibility/What_is_accessibility"
          >was Barrierefreiheit ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis der Barrierefreiheitsprobleme im Zusammenhang mit Multimedia und wie man diese überwinden kann.
      </td>
    </tr>
  </tbody>
</table>

## Multimedia und Barrierefreiheit

Bisher haben wir in diesem Modul eine Vielzahl von Inhalten betrachtet und was getan werden muss, um deren Barrierefreiheit sicherzustellen. Dazu gehören einfache Textinhalte, Datentabellen, Bilder, native Steuerelemente wie Formularelemente und Schaltflächen sowie komplexere Markup-Strukturen (mit [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics) Attributen).

Dieser Artikel betrachtet hingegen eine weitere allgemeine Inhaltsklasse, die möglicherweise nicht so einfach barrierefrei zu machen ist – Multimedia. Bilder, Audiotracks, Videos, `canvas`-Elemente usw. sind nicht so leicht von Screenreadern zu verstehen oder über die Tastatur zu navigieren, und wir müssen ihnen unter die Arme greifen.

Aber nicht verzweifeln — hier helfen wir Ihnen, die verfügbaren Techniken zu navigieren, um Multimedia zugänglicher zu machen.

## Einfache Bilder

Wir haben bereits in unserem Artikel [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn/Accessibility/HTML) einfache Textalternativen für HTML-Bilder behandelt — Sie können dort die vollständigen Details nachlesen. Kurz gesagt sollten Sie sicherstellen, dass nach Möglichkeit visuelle Inhalte eine alternative Textbeschreibung haben, damit Screenreader sie erfassen und ihren Nutzern vorlesen können.

Zum Beispiel:

```html
<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
```

## Barrierefreie Audio- und Videosteuerungen

Das Implementieren von Steuerungen für Web-basiertes Audio/Video sollte kein Problem sein, oder? Lassen Sie uns das untersuchen.

### Das Problem mit nativen HTML-Steuerungen

HTML-Video- und Audioinstanzen kommen sogar mit einem Satz integrierter Steuerungen, die Ihnen erlauben, das Medium direkt aus der Box zu steuern. Zum Beispiel (siehe `native-controls.html` [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/native-controls.html) und [live](https://mdn.github.io/learning-area/accessibility/multimedia/native-controls.html)):

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

Das Attribut `controls` bietet Play/Pause-Tasten, eine Suchleiste usw. – die grundlegenden Steuerungen, die Sie von einem Mediaplayer erwarten würden. Es sieht so in Firefox und Chrome aus:

![Screenshot von Video-Steuerungen in Firefox](native-controls-firefox.png)

![Screenshot von Video-Steuerungen in Chrome](native-controls-chrome.png)

Es gibt jedoch Probleme mit diesen Steuerungen:

- Sie sind in den meisten Browsern nicht tastaturzugänglich, d. h. Sie können nicht zwischen den Steuerungen im nativen Player tabben. Opera und Chrome bieten dies bis zu einem gewissen Grad, es ist jedoch immer noch nicht ideal.
- Verschiedene Browser geben den nativen Steuerungen unterschiedliche Stile und Funktionen, und sie sind nicht stylbar, was bedeutet, dass sie nicht leicht an ein Webseiten-Stilrichtlinien angepasst werden können.

Um dies zu beheben, können wir unsere eigenen benutzerdefinierten Steuerungen erstellen. Schauen wir uns an, wie das geht.

### Erstellen benutzerdefinierter Audio- und Videosteuerungen

HTML-Video und -Audio teilen sich eine API — HTML Media Element — die es Ihnen ermöglicht, benutzerdefinierte Funktionen zu Schaltflächen und anderen Steuerungen zuzuordnen — beide müssen Sie selbst definieren.

Nehmen wir das obige Video-Beispiel und fügen wir ihm benutzerdefinierte Steuerungen hinzu.

#### Grundlegende Einrichtung

Erstellen Sie zunächst eine Kopie unserer [custom-controls-start.html](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls-start.html), [custom-controls.css](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls.css), [rabbit320.mp4](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.mp4), und [rabbit320.webm](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.webm) Dateien und speichern Sie sie in einem neuen Verzeichnis auf Ihrer Festplatte.

Erstellen Sie eine neue Datei namens main.js und speichern Sie sie im gleichen Verzeichnis.

Werfen wir zuerst einen Blick auf das HTML für den Videoplayer, im HTML:

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

#### JavaScript Grundlegende Einrichtung

Wir haben einige einfache Steuerungstasten unter unserem Video eingefügt. Diese Steuerungen machen natürlich standardmäßig nichts; um Funktionalität hinzuzufügen, verwenden wir JavaScript.

Zuerst müssen wir Verweise auf jede der Steuerungen speichern — fügen Sie das Folgende am Anfang Ihrer JavaScript-Datei hinzu:

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

Dies hält einen Verweis auf ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Objekt, das mehrere nützliche Eigenschaften und Methoden hat, die verwendet werden können, um Funktionalität an unsere Schaltflächen zu binden.

Bevor wir mit der Erstellung unserer Schaltflächenfunktionalität fortfahren, entfernen wir die nativen Steuerungen, damit sie nicht unseren benutzerdefinierten Steuerungen im Weg sind. Fügen Sie das Folgende abermals am Ende Ihres JavaScript-Codes hinzu:

```js
player.removeAttribute("controls");
```

Auf diese Weise, anstatt das `controls`-Attribut von Anfang an nicht einzuschließen, hat den Vorteil, dass, wenn unser JavaScript aus irgendeinem Grund fehlschlägt, der Benutzer trotzdem einige Steuerungen zur Verfügung hat.

#### Verkabelung unserer Schaltflächen

Als erstes richten wir die Play/Pause-Schaltfläche ein. Wir können sie mit einer einfachen bedingten Funktion zwischen Play und Pause umschalten lassen, wie die folgende. Fügen Sie sie am Ende Ihres Codes hinzu:

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

Als nächstes fügen Sie diesen Code unten hinzu, der die Stop-Schaltfläche steuert:

```js
stopBtn.onclick = () => {
  player.pause();
  player.currentTime = 0;
  playPauseBtn.textContent = "Play";
};
```

Es gibt keine `stop()` Funktion auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) s, daher pausieren wir es stattdessen und setzen gleichzeitig die `currentTime` auf 0.

Als nächstes unsere Rückspul- und Schnellvorlauf-Schaltflächen — fügen Sie die folgenden Blöcke am Ende Ihres Codes hinzu:

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

Diese sind sehr einfach und addieren oder subtrahieren einfach 3 Sekunden zur `currentTime` jedes Mal, wenn sie geklickt werden. In einem echten Videoplayer möchten Sie wahrscheinlich eine elaborierte Suchleiste oder Ähnliches.

Beachten Sie, dass wir auch prüfen, ob die `currentTime` größer ist als die gesamte Mediendauer oder ob das Medium nicht spielt, wenn die `fwdBtn` gedrückt wird. Wenn eine der Bedingungen wahr ist, stoppen wir das Video, um zu vermeiden, dass die Benutzeroberfläche durcheinander kommt, wenn sie versuchen, schnell weiterzuleiten, wenn das Video nicht läuft oder schnell am Ende des Videos vorbeizuführen.

Zuletzt fügen wir Folgendes am Ende des Codes hinzu, um das angezeigte Zeitintervall zu steuern:

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

Jedes Mal, wenn sich die Zeit aktualisiert (einmal pro Sekunde), lösen wir diese Funktion aus. Sie berechnet die Anzahl der Minuten und Sekunden aus dem gegebenen `currentTime`-Wert (der in Sekunden angegeben ist), fügt eine führende 0 hinzu, wenn entweder der Minuten- oder der Sekundenwert kleiner als 10 ist, und erstellt dann die Anzeigedarstellung und fügt sie dem Zeitlabel hinzu.

#### Weiterführende Lektüre

Das gibt Ihnen einen grundlegenden Einblick, wie Sie benutzerdefinierte Player-Funktionalität zu Video-/Audioplayer-Instanzen hinzufügen können. Für weitere Informationen darüber, wie man komplexere Funktionen zu Video-/Audioplayern hinzufügt, siehe:

- [Audio- und Videoverteilung](/de/docs/Web/Media/Audio_and_video_delivery)
- [Grundlagen der Videoplayer-Gestaltung](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics)
- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player)

Wir haben auch ein erweitertes Beispiel erstellt, um zu zeigen, wie Sie ein objektorientiertes System erstellen könnten, das jeden Video- und Audioplayer auf der Seite findet (egal wie viele es gibt) und unsere benutzerdefinierten Steuerungen zu ihm hinzufügt. Siehe [custom-controls-oojs](https://mdn.github.io/learning-area/accessibility/multimedia/custom-controls-OOJS/) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/custom-controls-OOJS) an).

## Audio-Transkripte

Um gehörlosen Menschen den Zugang zu Audiomaterial zu ermöglichen, müssen Sie Texttranskripte erstellen. Diese können entweder auf derselben Seite wie das Audio in irgendeiner Weise enthalten oder auf einer separaten Seite eingebunden und darauf verlinkt werden.

In Bezug auf die Erstellung des Transkripts haben Sie folgende Optionen:

- Kommerzielle Dienste — Sie könnten einen professionellen Dienst zur Transkription bezahlen, siehe zum Beispiel Firmen wie [Scribie](https://scribie.com/), [Casting Words](https://castingwords.com/) oder [Rev](https://www.rev.com/). Schauen Sie sich um und fragen Sie nach Ratschlägen, um sicherzustellen, dass Sie ein seriöses Unternehmen finden, mit dem Sie effektiv zusammenarbeiten können.
- Gemeinschafts-/Basis-/Selbsttranskription — Wenn Sie Teil einer aktiven Gemeinschaft oder eines Teams am Arbeitsplatz sind, könnten Sie sie um Hilfe bei den Übersetzungen bitten. Sie könnten sogar selbst einen Versuch starten, sie zu machen.
- Automatisierte Dienste — Es gibt KI-Dienste wie [Trint](https://trint.com/) oder [Transcribear](https://transcribear.com/). Laden Sie eine Video-/Audiodatei auf die Website hoch, und sie transkribiert sie automatisch für Sie. Auf YouTube können Sie automatische Untertitel/Transkripte generieren lassen. Je nachdem, wie klar das gesprochene Audio ist, wird die Qualität des resultierenden Transkripts stark variieren.

Wie bei den meisten Dingen im Leben bekommt man das, wofür man bezahlt; verschiedene Dienste variieren in Genauigkeit und Zeitaufwand für die Erstellung des Transkripts. Wenn Sie ein seriöses Unternehmen oder einen KI-Dienst für die Transkription bezahlen, wird es wahrscheinlich schnell und in hoher Qualität erledigt. Wenn Sie nichts dafür bezahlen möchten, wird es wahrscheinlich in niedrigerer Qualität und/oder langsam erledigt.

Es ist nicht in Ordnung, eine Audiodatei zu veröffentlichen, aber zu versprechen, das Transkript später zu veröffentlichen — solche Versprechen werden oft nicht gehalten, was das Vertrauen zwischen Ihnen und Ihren Nutzern erodieren wird. Wenn das Audio, das Sie präsentieren, etwas wie ein persönliches Treffen oder eine live gesprochene Performance ist, wäre es akzeptabel, während der Performance Notizen zu machen, sie vollständig zusammen mit dem Audio zu veröffentlichen und dann Hilfe beim Bereinigen der Notizen zu bekommen.

### Transkriptbeispiele

Wenn Sie einen automatisierten Dienst verwenden, müssen Sie wahrscheinlich die Benutzeroberfläche verwenden, die das Tool bereitstellt. Sehen Sie sich zum Beispiel unser [Wait, ARIA Roles Have Categories?](https://www.youtube.com/watch?v=mwF-PpJOjMs) Video an und wählen Sie das Drei-Punkte-Menü (. . .) _> Transcript anzeigen_. Sie werden sehen, dass das Transkript in einem separaten Panel angezeigt wird.

Wenn Sie Ihre eigene Benutzeroberfläche erstellen, um Ihr Audio und das zugehörige Transkript zu präsentieren, können Sie es nach Belieben gestalten, aber es könnte sinnvoll sein, es in einem ein- und ausblendbaren Panel zu integrieren; siehe unser [audio-transcript-ui](https://mdn.github.io/learning-area/accessibility/multimedia/audio-transcript-ui/) Beispiel (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/audio-transcript-ui)).

### Audiobeschreibungen

In Fällen, in denen visuelle Darbietungen Ihr Audio begleiten, müssen Sie in irgendeiner Form Audiobeschreibungen bereitstellen, um diesen zusätzlichen Inhalt zu beschreiben.

In vielen Fällen wird dies in Form eines Videos vorliegen, in welchem Fall Sie Untertitel mit den im nächsten Abschnitt des Artikels beschriebenen Techniken implementieren können.

Es gibt jedoch einige Ausnahmefälle. Sie könnten zum Beispiel eine Audioaufnahme eines Meetings haben, das sich auf ein begleitendes Material wie eine Tabelle oder ein Diagramm bezieht. In solchen Fällen sollten Sie sicherstellen, dass die Ressourcen zusammen mit dem Audio + Transkript bereitgestellt werden und speziell auf sie an den Stellen im Transkript verlinkt wird, an denen sie erwähnt werden. Dies wird natürlich allen Nutzern helfen, nicht nur gehörlosen Menschen.

> [!NOTE]
> Ein Audiotranskript wird im Allgemeinen mehreren Nutzergruppen helfen. Neben der Bereitstellung von Informationen für gehörlose Nutzer denken Sie an einen Nutzer mit einer langsamen Internetverbindung, der es unbequem finden würde, das Audio herunterzuladen. Denken Sie auch an einen Nutzer in einer lauten Umgebung wie einer Kneipe oder Bar, der versucht, auf die Informationen zuzugreifen, sie jedoch nicht über den Lärm hören kann.

## Videotextspuren

Um Videos für Gehörlose, Sehbehinderte oder andere Nutzergruppen (wie solche mit niedriger Bandbreite oder die die im Video verwendete Sprache nicht verstehen) zugänglich zu machen, müssen Sie Textspuren zusammen mit Ihrem Videoinhalt einfügen.

> [!NOTE]
> Textspuren sind auch potenziell für jeden Nutzer nützlich, nicht nur für solche mit Behinderungen. Einige Nutzer können das Audio zum Beispiel nicht hören, weil sie sich in lauten Umgebungen befinden (wie einer überfüllten Bar während eines Sportspiels gezeigt wird) oder möchten möglicherweise andere nicht stören, wenn sie sich an einem ruhigen Ort befinden (wie einer Bibliothek).

Dies ist kein neues Konzept — Fernsehdienste bieten schon seit geraumer Zeit Untertitel an:

![Frame aus einem altmodischen Cartoon mit Untertiteln "Good work, Goldie. Keep it up!"](closed-captions.png)

Viele Länder bieten englische Filme mit Untertiteln in ihrer eigenen Landessprache an und auf DVDs sind oft verschiedene Sprachuntertitel verfügbar, wie unten gezeigt:

![Ein englischer Film mit deutschen Untertiteln "Emo, warum erkennst du nicht die Schönheit dieses Ortes?"](subtitles_german.png)

Es gibt verschiedene Arten von Textspuren für unterschiedliche Zwecke. Die Haupttypen, die Sie antreffen werden, sind:

- Untertitel — Für gehörlose Nutzer, die den Audiotrack nicht hören können, einschließlich der gesprochenen Worte und kontextueller Informationen wie wer die Worte gesprochen hat, ob die Menschen wütend oder traurig waren und welche Stimmung die Musik aktuell schafft.
- Untertitel — Enthalten Übersetzungen des Audiodialogs für Nutzer, die die gesprochene Sprache nicht verstehen.
- Beschreibungen — Diese beinhalten Beschreibungen für sehbehinderte Menschen, die das Video nicht sehen können, z.B. wie die Szene aussieht.
- Kapitelmarker — Kapitelmarkierungen, die dem Nutzer helfen sollen, die Medienressource zu navigieren.

### Implementierung von HTML-Videotextspuren

Textspuren für die Anzeige mit HTML-Videos müssen im WebVTT-Format geschrieben werden, einem Textformat, das mehrere Textzeichenfolgen zusammen mit Metadaten wie der Zeit im Video, zu der jede Textzeichenfolge angezeigt werden soll, und sogar begrenzten Stil-/Positionierungsinformationen enthält. Diese Textzeichenfolgen werden Cues genannt.

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

- Es als .vtt-Datei an einem sinnvollen Ort speichern.
- Verlinken Sie auf die .vtt-Datei mit dem `track`-Element. `<track>` sollte innerhalb von `<audio>` oder `<video>` platziert werden, aber nach allen `<source>`-Elementen. Verwenden Sie das Attribut [`kind`](/de/docs/Web/HTML/Element/track#kind), um anzugeben, ob die Cues Untertitel, Bildunterschriften oder Beschreibungen sind. Verwenden Sie außerdem [`srclang`](/de/docs/Web/HTML/Element/track#srclang), um dem Browser mitzuteilen, in welcher Sprache die Untertitel geschrieben sind.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

Dies wird in einem Video resultieren, das Untertitel ähnlich wie folgt anzeigt:

![Videoplayer mit Standardsteuerungen wie Wiedergabe, Stopp, Lautstärke und Untertitel an und aus. Das abgespielte Video zeigt eine Szene eines Mannes mit einer speerartigen Waffe und eine Bildunterschrift lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für weitere Details siehe [Hinzufügen von Untertiteln und Bildunterschriften zu HTML-Videos](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können [das Beispiel](https://iandevlin.github.io/mdn/video-player-with-captions/) zu diesem Artikel auf GitHub finden, geschrieben von Ian Devlin (sehen Sie sich auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) an). Dieses Beispiel verwendet JavaScript, um Nutzern zu ermöglichen, zwischen verschiedenen Untertiteln zu wählen. Beachten Sie, dass Sie die Untertitel einschalten müssen, indem Sie die "CC"-Schaltfläche drücken und eine Option auswählen — Englisch, Deutsch oder Spanisch.

> [!NOTE]
> Textspuren und Transkriptionen helfen Ihnen auch bei {{Glossary("SEO", "SEO")}}, da Suchmaschinen besonders auf Text ausgerichtet sind. Textspuren ermöglichen es Suchmaschinen sogar, direkt auf einen Punkt mitten im Video zu verlinken.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern?

Wir haben kein neues Set von Bewertungen für diesen Artikel geschrieben, weil es bereits Bewertungen in unserem [HTML Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding) Modul gibt, die Ihr Wissen über die hier präsentierten Informationen testen. Wenn Sie es noch nicht getan haben, probieren Sie die Bewertungen bei [Testen Sie Ihre Fähigkeiten: HTML-Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML/Test_your_skills:_HTML_images) und [Testen Sie Ihre Fähigkeiten: Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding) aus.

## Zusammenfassung

Dieses Kapitel hat eine Zusammenfassung der Zugänglichkeitsbedenken für Multimedia-Inhalte bereitgestellt, zusammen mit einigen praktischen Lösungen.

Es ist nicht immer einfach, Multimedia zugänglich zu machen. Wenn Sie beispielsweise mit einem immersiven 3D-Spiel oder einer Virtual Reality-App zu tun haben, ist es ziemlich schwierig, Textalternativen für ein solches Erlebnis bereitzustellen, und Sie könnten argumentieren, dass sehbehinderte Nutzer nicht wirklich zur Zielgruppe solcher Apps gehören.

Sie können jedoch sicherstellen, dass eine solche App eine gute Farbklarheit und klare Darstellung hat, sodass sie für Personen mit Sehschwäche/Farbblindheit wahrnehmbar ist, und sie tastaturzugänglich machen. Denken Sie daran, dass Barrierefreiheit bedeutet, so viel wie möglich zu tun, anstatt immer 100% Zugänglichkeit anzustreben, was oft unmöglich ist.

{{PreviousMenuNext("Learn/Accessibility/WAI-ARIA_basics","Learn/Accessibility/Mobile", "Learn/Accessibility")}}
