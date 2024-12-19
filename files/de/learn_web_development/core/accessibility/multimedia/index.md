---
title: Barrierefreies Multimedia
slug: Learn_web_development/Core/Accessibility/Multimedia
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Mobile", "Learn_web_development/Core/Accessibility")}}

Eine weitere Inhaltskategorie, die Barrierefreiheitsprobleme verursachen kann, ist Multimedia. Video-, Audio- und Bildinhalte müssen mit geeigneten Textalternativen versehen werden, damit sie von unterstützenden Technologien und deren Nutzern verstanden werden können. Dieser Artikel zeigt, wie es geht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den Barrierefreiheitsstandards, die in den vorherigen Lektionen des Moduls behandelt wurden.</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Probleme mit nativen Media-Playern und wie Sie Ihre eigenen erstellen können.</li>
          <li>Der Zweck von Audio-Transkripten und Textspuren (Untertitel, Bildunterschriften usw.) zur Barrierefreiheit von Audio- und Videoinhalten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Multimedia und Barrierefreiheit

Bisher haben wir in diesem Modul verschiedene Inhalte betrachtet und was getan werden muss, um ihre Barrierefreiheit zu gewährleisten, von einfachem Textinhalt bis hin zu Datentabellen, Bildern, nativen Steuerelementen wie Formularelementen und Schaltflächen und sogar komplexeren Markup-Strukturen (mit [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) Attributen).

Dieser Artikel hingegen betrachtet eine weitere allgemeine Inhaltskategorie, die nicht so leicht barrierefrei zu gestalten ist — Multimedia. Bilder, Audiospuren, Videos, {{htmlelement("canvas")}}-Elemente usw. werden von Screenreadern nicht so leicht verstanden oder über die Tastatur navigiert und benötigen Unterstützung.

Aber verzagen Sie nicht — hier werden wir Ihnen helfen, die Techniken zu verstehen, die zur Verfügung stehen, um Multimedia zugänglicher zu machen.

## Einfache Bilder

Einfache Textalternativen für HTML-Bilder haben wir bereits in unserem Artikel [HTML: Eine gute Basis für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) behandelt — Sie können dort die vollständigen Details nachlesen. Kurz gesagt, sollten Sie sicherstellen, dass visuelle Inhalte, wo immer möglich, eine alternative Textbeschreibung haben, die von Screenreadern aufgenommen und den Nutzern vorgelesen werden kann.

Zum Beispiel:

```html
<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
```

## Barrierefreie Audio- und Videosteuerungen

Die Implementierung von Steuerungen für webbasierte Audio-/Video-Inhalte sollte doch kein Problem sein, oder? Lassen Sie uns das untersuchen.

### Das Problem mit nativen HTML-Steuerelementen

HTML-Video- und Audio-Instanzen bieten sogar einen Satz integrierter Steuerelemente, die es ermöglichen, das Medium direkt „out of the box“ zu steuern. Zum Beispiel (siehe `native-controls.html` [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/native-controls.html) und [live](https://mdn.github.io/learning-area/accessibility/multimedia/native-controls.html)):

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

Das `controls`-Attribut stellt Play-/Pause-Tasten, eine Suchleiste usw. zur Verfügung — die grundlegenden Steuerelemente, die Sie von einem Media-Player erwarten würden. So sieht es in Firefox und Chrome aus:

![Screenshot von Videosteuerungen in Firefox](native-controls-firefox.png)

![Screenshot von Videosteuerungen in Chrome](native-controls-chrome.png)

Es gibt jedoch Probleme mit diesen Steuerelementen:

- Sie sind in den meisten Browsern nicht tastaturzugänglich, d.h. Sie können nicht zwischen den Steuerelementen im nativen Player wechseln. Opera und Chrome bieten dies in gewissem Umfang, aber es ist immer noch nicht ideal.
- Verschiedene Browser gestalten die nativen Steuerelemente unterschiedlich und sie sind nicht stilisierbar, was bedeutet, dass sie nicht leicht an einen stilistischen Leitfaden einer Website angepasst werden können.

Um dies zu beheben, können wir unsere eigenen benutzerdefinierten Steuerelemente erstellen. Schauen wir uns an, wie das geht.

### Erstellen benutzerdefinierter Audio- und Videosteuerungen

HTML-Video und -Audio teilen sich eine API — `HTML Media Element` — die es ermöglicht, benutzerdefinierte Funktionen auf Tasten und andere Steuerelemente zuzuordnen — alle von Ihnen selbst definiert.

Nehmen wir das obige Video-Beispiel und fügen ihm benutzerdefinierte Steuerelemente hinzu.

#### Grundlegende Einrichtung

Zuerst, kopieren Sie unsere [custom-controls-start.html](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls-start.html), [custom-controls.css](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls.css), [rabbit320.mp4](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.mp4), und [rabbit320.webm](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.webm) Dateien und speichern Sie sie in einem neuen Verzeichnis auf Ihrer Festplatte.

Erstellen Sie eine neue Datei namens `main.js` und speichern Sie sie im gleichen Verzeichnis.

Schauen wir uns zunächst das HTML für den Videoplayer an, im HTML:

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

#### JavaScript grundlegende Einrichtung

Wir haben einige einfache Steuertasten unter unserem Video eingefügt. Diese Steuerelemente werden natürlich standardmäßig nichts tun; um ihnen Funktionen hinzuzufügen, werden wir JavaScript verwenden.

Zuerst müssen wir Referenzen zu jeder der Steuertasten speichern — fügen Sie dazu Folgendes oben in Ihre JavaScript-Datei ein:

```js
const playPauseBtn = document.querySelector(".play-pause");
const stopBtn = document.querySelector(".stop");
const rwdBtn = document.querySelector(".rwd");
const fwdBtn = document.querySelector(".fwd");
const timeLabel = document.querySelector(".time");
```

Als nächstes müssen wir eine Referenz auf den Video-/Audio-Player selbst erhalten — fügen Sie diese Zeile unter den vorherigen Zeilen hinzu:

```js
const player = document.querySelector("video");
```

Dies hält eine Referenz auf ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt, das mehrere nützliche Eigenschaften und Methoden enthält, die genutzt werden können, um Funktionen mit unseren Tasten zu verknüpfen.

Bevor wir mit der Erstellung unserer Tastenfunktionen fortfahren, entfernen wir die nativen Steuerelemente, damit sie unseren benutzerdefinierten Steuerelementen nicht im Weg stehen. Fügen Sie das folgende, wieder am Ende Ihres JavaScripts hinzu:

```js
player.removeAttribute("controls");
```

Auf diese Weise vorzugehen, anstatt das `controls`-Attribut von vornherein nicht einzuschließen, hat den Vorteil, dass im Falle eines Fehlers in unserem JavaScript dem Benutzer immer noch einige Steuerelemente zur Verfügung stehen.

#### Verkabelung unserer Tasten

Zuerst richten wir die Play-/Pause-Taste ein. Wir können dies mit einer einfachen bedingten Funktion zwischen Wiedergabe und Pause umschalten lassen, wie die folgende. Fügen Sie es an das Ende Ihres Codes hinzu:

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

Fügen Sie als nächstes diesen Code am Ende hinzu, der die Stop-Taste steuert:

```js
stopBtn.onclick = () => {
  player.pause();
  player.currentTime = 0;
  playPauseBtn.textContent = "Play";
};
```

Es gibt keine `stop()`-Funktion auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten, daher pausieren wir sie stattdessen und setzen gleichzeitig die `currentTime` auf 0.

Als nächstes unsere Rückspul- und Vorspultasten — fügen Sie die folgenden Blöcke am Ende Ihres Codes hinzu:

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

Diese sind sehr einfach und fügen der `currentTime` jedes Mal, wenn sie angeklickt werden, 3 Sekunden hinzu oder ziehen sie ab. In einem echten Videoplayer möchten Sie wahrscheinlich eine elaboriertere Suchleiste oder etwas Ähnliches haben.

Beachten Sie, dass wir auch überprüfen, ob die `currentTime` größer ist als die gesamte Medien`dauer` oder wenn das Medium nicht abgespielt wird, wenn die `fwdBtn` gedrückt wird. Wenn eine der Bedingungen zutrifft, stoppen wir das Video, um zu vermeiden, dass die Benutzeroberfläche falsch funktioniert, wenn versucht wird, schneller vorzuspulen, während das Video nicht abgespielt wird, oder schneller vorzuspulen als das Ende des Videos.

Zuletzt fügen Sie Folgendes am Ende des Codes hinzu, um die Zeitablaufanzeige zu steuern:

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

Jedes Mal, wenn sich die Zeit aktualisiert (einmal pro Sekunde), wird diese Funktion ausgelöst. Sie berechnet die Anzahl der Minuten und Sekunden aus dem gegebenen `currentTime`-Wert (der in Sekunden angegeben ist), fügt eine führende 0 hinzu, wenn entweder der Minuten- oder der Sekundenwert kleiner als 10 ist, und erstellt dann die Anzeigeanzeige und fügt sie der Zeitbeschriftung hinzu.

#### Weiterführende Literatur

Dies gibt Ihnen eine grundlegende Vorstellung, wie Sie benutzerdefinierte Player-Funktionen zu Video-/Audio-Player-Instanzen hinzufügen können. Weitere Informationen, wie Sie komplexere Funktionalitäten zu Video-/Audio-Playern hinzufügen können, finden Sie unter:

- [Audio und Video Bereitstellung](/de/docs/Web/Media/Audio_and_video_delivery)
- [Grundlagen zur Gestaltung von Videoplayern](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics)
- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player)

Wir haben auch ein erweitertes Beispiel erstellt, um zu zeigen, wie Sie ein objektorientiertes System erstellen könnten, das jeden Video- und Audioplayer auf der Seite findet (egal wie viele es gibt) und unsere benutzerdefinierten Steuerelemente hinzufügt. Siehe [custom-controls-oojs](https://mdn.github.io/learning-area/accessibility/multimedia/custom-controls-OOJS/) (sehen Sie sich auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/custom-controls-OOJS) an).

## Audio-Transkripte

Um gehörlosen Menschen den Zugang zu Audioinhalten zu ermöglichen, müssen Sie Texttranskripte erstellen. Diese können entweder auf derselben Seite wie das Audio in irgendeiner Weise eingebunden oder auf einer separaten Seite verlinkt werden.

Bei der Erstellung des Transkripts haben Sie folgende Optionen:

- Kommerzielle Dienstleistungen — Sie könnten einen Fachmann für die Transkription bezahlen, siehe zum Beispiel Unternehmen wie [Scribie](https://scribie.com/), [Casting Words](https://castingwords.com/) oder [Rev](https://www.rev.com/). Suchen Sie um Rat und finden Sie heraus, wie Sie eine seriöse Firma finden, mit der Sie effektiv zusammenarbeiten können.
- Gemeinschafts-/Graswurzel-/Selbst-Transkription — Wenn Sie Teil einer aktiven Gemeinschaft oder eines Teams an Ihrem Arbeitsplatz sind, könnten Sie sie um Hilfe bei der Übersetzung bitten. Sie könnten sogar selbst versuchen, sie zu erstellen.
- Automatisierte Dienste — Es gibt KI-Dienste wie [Trint](https://trint.com/) oder [Transcribear](https://transcribear.com/). Laden Sie eine Video-/Audiodatei auf die Website hoch, und es wird automatisch transkribiert. Auf YouTube können Sie automatische Bildunterschriften/Transkripte generieren lassen. Je nachdem, wie klar die gesprochene Sprache ist, variiert die Qualität des resultierenden Transkripts stark.

Wie bei den meisten Dingen im Leben bekommt man, wofür man bezahlt; verschiedene Dienste unterscheiden sich in ihrer Genauigkeit und der benötigten Zeit zur Erstellung des Transkripts. Wenn Sie ein seriöses Unternehmen oder einen AI-Dienst für die Transkription bezahlen, wird es wahrscheinlich schnell und in hoher Qualität erledigt. Wenn Sie nicht dafür bezahlen möchten, wird es wahrscheinlich in niedriger Qualität und/oder langsam erledigt werden.

Es ist nicht in Ordnung, eine Audio-Ressource zu veröffentlichen, aber zu versprechen, das Transkript später zu veröffentlichen — solche Versprechen werden oft nicht eingehalten, was das Vertrauen zwischen Ihnen und Ihren Nutzern untergräbt. Wenn das Audio, das Sie präsentieren, etwas wie ein persönliches Treffen oder eine live gesprochene Aufführung ist, wäre es vertretbar, während der Aufführung Notizen zu machen, diese zusammen mit dem Audio in voller Länge zu veröffentlichen und dann Hilfe bei der Bereinigung der Notizen zu suchen.

### Transkript-Beispiele

Wenn Sie einen automatisierten Dienst nutzen, müssen Sie wahrscheinlich die Benutzeroberfläche verwenden, die das Tool bietet. Schauen Sie sich zum Beispiel unser Video [Wait, ARIA Roles Have Categories?](https://www.youtube.com/watch?v=mwF-PpJOjMs) an und wählen Sie das Menü mit den drei Punkten (. . .) _> Show Transcript_. Sie sehen, dass das Transkript in einem separaten Bereich angezeigt wird.

Wenn Sie Ihre eigene Benutzeroberfläche zur Präsentation Ihres Audios und des zugehörigen Transkripts erstellen, können Sie es nach Belieben gestalten, es könnte jedoch sinnvoll sein, es in einem ein- und ausklappbaren Bereich einzubinden; siehe unser Beispiel [audio-transcript-ui](https://mdn.github.io/learning-area/accessibility/multimedia/audio-transcript-ui/) (sehen Sie sich auch das [Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/audio-transcript-ui) an).

### Audio-Beschreibungen

In Fällen, in denen die Audios mit visuellen Inhalten begleitet werden, müssen Sie eine Art von Audiobeschreibungen bereitstellen, um diese zusätzlichen Inhalte zu beschreiben.

In vielen Fällen wird dies die Form von Videos sein. In diesem Fall können Sie Untertitel mit den im folgenden Abschnitt des Artikels beschriebenen Techniken implementieren.

Es gibt jedoch einige Sonderfälle. Sie könnten zum Beispiel eine Audioaufnahme eines Meetings haben, die auf eine begleitende Ressource wie eine Tabelle oder ein Diagramm verweist. In solchen Fällen sollten Sie sicherstellen, dass die Ressourcen zusammen mit dem Audio + Transkript bereitgestellt werden und speziell an den Stellen verlinkt werden, an denen sie im Transkript erwähnt werden. Dies wird natürlich allen Nutzern helfen, nicht nur gehörlosen Menschen.

> [!NOTE]
> Ein Audio-Transkript wird im Allgemeinen mehreren Benutzergruppen helfen. Neben der Bereitstellung von Informationen für gehörlose Benutzer, die keinen Zugang zu den Informationen im Audio haben, sollten Sie auch an Nutzer mit einer langsamen Internetverbindung denken, denen das Herunterladen des Audios unpraktisch wäre. Denken Sie auch an Nutzer, die sich in einer lauten Umgebung wie einer Bar befinden und versuchen, auf die Informationen zuzugreifen, es aber wegen des Lärms nicht hören können.

## Video-Textspuren

Um Videos für Gehörlose, Sehbehinderte oder andere Benutzergruppen (wie Benutzer mit geringer Bandbreite oder die die Sprache des Videos nicht verstehen) zugänglich zu machen, müssen Textspuren zusammen mit Ihrem Videoinhalt eingebunden werden.

> [!NOTE]
> Textspuren sind auch für potenziell alle Benutzer nützlich, nicht nur für solche mit Behinderungen. Zum Beispiel könnten einige Benutzer das Audio nicht hören, weil sie sich in lauten Umgebungen befinden (wie in einer vollen Bar, wenn ein Sportspiel gezeigt wird) oder möchten andere nicht stören, wenn sie sich an einem ruhigen Ort befinden (wie in einer Bibliothek).

Dies ist kein neues Konzept — Fernsehdienste bieten schon seit langer Zeit Untertitel an.

![Frame von einem altmodischen Cartoon mit dem Untertitel „Good work, Goldie. Keep it up!“](closed-captions.png)

Viele Länder bieten englische Filme mit Untertiteln in ihrer eigenen Landessprache an, und auf DVDs sind oft verschiedene Sprachen verfügbar, wie unten gezeigt:

![Ein englischer Film mit deutschen Untertiteln "Emo, warum erkennst du nicht die Schonheit dieses Ortes?"](subtitles_german.png)

Es gibt verschiedene Arten von Textspuren für unterschiedliche Zwecke. Die Haupttypen, auf die Sie stoßen werden, sind:

- Bildunterschriften — Für gehörlose Nutzer, die die Tonspur nicht hören können, einschließlich der gesprochenen Worte und kontextueller Informationen wie wer die Worte gesprochen hat, ob die Personen wütend oder traurig waren und welche Stimmung die Musik derzeit erzeugt.
- Untertitel — Einschließlich Übersetzungen des Audio-Dialogs für Benutzer, die die gesprochene Sprache nicht verstehen.
- Beschreibungen — Beschreibungen für sehbehinderte Menschen, die das Video nicht sehen können, zum Beispiel wie die Szene aussieht.
- Kapitelmarker — Kapitelmarkierungen, die dem Benutzer helfen sollen, sich innerhalb der Medienressource zu orientieren.

### Implementierung von HTML-Video-Textspuren

Textspuren, die mit HTML-Videos angezeigt werden, müssen in WebVTT geschrieben sein, einem Textformat, das mehrere Textstrings zusammen mit Metadaten enthält, z. B. zu welcher Zeit im Video jeder Textstring angezeigt werden soll und sogar eingeschränkte Stil-/Positionierungsinformationen. Diese Textstrings werden Cues genannt.

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

- Es als .vtt-Datei an einem sinnvollen Ort speichern.
- Einen Link zu der .vtt-Datei mit dem {{htmlelement("track")}}-Element erstellen. `<track>` sollte innerhalb von `<audio>` oder `<video>`, aber nach allen `<source>`-Elementen platziert werden. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Element/track#kind)-Attribut, um anzugeben, ob die Cues Untertitel, Bildunterschriften oder Beschreibungen sind. Darüber hinaus verwenden Sie [`srclang`](/de/docs/Web/HTML/Element/track#srclang), um dem Browser mitzuteilen, in welcher Sprache Sie die Untertitel geschrieben haben.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

Dies führt zu einem Video, bei dem Untertitel angezeigt werden, ähnlich wie dies:

![Videoplayer mit Standard-Steuerelementen wie Play, Stop, Volume und Bildunterschriften an und aus. Das abgespielte Video zeigt eine Szene mit einem Mann, der eine speerähnliche Waffe hält, und eine Bildunterschrift lautet „Esta hoja tiene pasado oscuro.”](video-player-with-captions.png)

Für weitere Details, siehe [Hinzufügen von Untertiteln und Bildunterschriften zu HTML-Videos](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie finden [das Beispiel](https://iandevlin.github.io/mdn/video-player-with-captions/) zu diesem Artikel auf GitHub, geschrieben von Ian Devlin (sehen Sie sich auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) an). Dieses Beispiel verwendet JavaScript, um Benutzern zu ermöglichen, zwischen verschiedenen Untertiteln zu wählen. Beachten Sie, dass Sie, um die Untertitel einzuschalten, die „CC“-Taste drücken und eine Option auswählen müssen — Englisch, Deutsch oder Spanisch.

> [!NOTE]
> Textspuren und Transkriptionen helfen Ihnen auch bei {{Glossary("SEO", "SEO")}}, da Suchmaschinen besonders auf Text angewiesen sind. Textspuren ermöglichen es sogar Suchmaschinen, direkt auf einen Punkt mitten im Video zu verlinken.

## Zusammenfassung

Dieses Kapitel hat eine Zusammenfassung der Barrierefreiheitsüberlegungen für Multimedia-Inhalte sowie einige praktische Lösungen bereitgestellt.

Es ist nicht immer einfach, Multimedia barrierefrei zu gestalten. Wenn Sie zum Beispiel ein immersives 3D-Spiel oder eine virtuelle Realität-App behandeln, ist es ziemlich schwierig, Textalternativen für eine solche Erfahrung bereitzustellen, und Sie könnten argumentieren, dass sehbehinderte Nutzer nicht wirklich zur Zielgruppe solcher Apps gehören.

Sie können jedoch sicherstellen, dass solch eine App einen guten Farbkontrast und eine klare Präsentation aufweist, damit sie für Personen mit eingeschränktem Sehvermögen/Farbblindheit wahrnehmbar ist, und auch tastaturzugänglich ist. Denken Sie daran, dass es bei der Barrierefreiheit darum geht, so viel wie möglich zu erreichen, anstatt immer nach 100% Barrierefreiheit zu streben, was oft unmöglich ist.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Mobile", "Learn_web_development/Core/Accessibility")}}
