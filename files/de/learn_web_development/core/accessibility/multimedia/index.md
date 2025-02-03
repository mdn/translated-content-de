---
title: Barrierefreie Multimedia-Inhalte
slug: Learn_web_development/Core/Accessibility/Multimedia
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Mobile", "Learn_web_development/Core/Accessibility")}}

Eine weitere Inhaltskategorie, die Zugänglichkeitsprobleme verursachen kann, sind Multimedia-Inhalte. Video-, Audio- und Bildinhalte müssen mit geeigneten textlichen Alternativen versehen werden, damit sie von unterstützenden Technologien und deren Benutzern verstanden werden können. Dieser Artikel zeigt, wie.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und mit den besten Praktiken für Barrierefreiheit, wie sie in den vorherigen Lektionen des Moduls behandelt wurden.</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Probleme mit nativen Media-Playern und wie Sie Ihre eigenen erstellen können.</li>
          <li>Der Zweck von Audiotranskripten und Texttracks (Untertitel, Übersetzungen, etc.), um Audio- und Videoinhalte zugänglich zu machen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Multimedia und Barrierefreiheit

Bisher haben wir in diesem Modul eine Vielzahl von Inhalten betrachtet und was getan werden muss, um deren Zugänglichkeit sicherzustellen, angefangen von einfachem Textinhalt bis hin zu Datentabellen, Bildern und nativen Steuerelementen wie Formularelementen und Schaltflächen sowie komplexeren Markup-Strukturen (mit [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) Attributen).

Dieser Artikel hingegen betrachtet eine andere allgemeine Inhaltskategorie, die möglicherweise nicht so einfach zugänglich zu gestalten ist — Multimedia. Bilder, Audiospuren, Videos, {{htmlelement("canvas")}}-Elemente usw. sind nicht so leicht von Screenreadern zu verstehen oder mit der Tastatur zu navigieren, und wir müssen ihnen Hilfestellung leisten.

Aber keine Sorge — wir helfen Ihnen, die verfügbaren Techniken zur Verbesserung der Barrierefreiheit von Multimedia-Inhalten zu verstehen.

## Einfache Bilder

Wir haben bereits einfache Textalternativen für HTML-Bilder in unserem Artikel [HTML: Eine gute Basis für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) behandelt — Sie können dort vollständige Informationen nachlesen. Kurz gesagt, Sie sollten sicherstellen, dass visuelle Inhalte, wo möglich, eine alternative Textversion haben, die von Screenreadern erfasst und vorgelesen werden kann.

Zum Beispiel:

```html
<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
```

## Barrierefreie Audio- und Videosteuerungen

Die Implementierung von Steuerungen für webbasierte Audio-/Video-Inhalte sollte doch kein Problem sein, oder? Lassen Sie uns das untersuchen.

### Das Problem mit nativen HTML-Steuerungen

HTML-Video- und Audioinstanzen verfügen sogar über eine Reihe eingebauter Steuerungen, mit denen Sie die Medien direkt steuern können. Zum Beispiel (siehe `native-controls.html` [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/native-controls.html) und [live](https://mdn.github.io/learning-area/accessibility/multimedia/native-controls.html)):

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

Das `controls`-Attribut bietet Schaltflächen für Wiedergabe/Pause, eine Suchleiste usw. — die grundlegenden Steuerungen, die Sie von einem Media-Player erwarten würden. So sieht es in Firefox und Chrome aus:

![Bildschirmfoto der Videosteuerungen in Firefox](native-controls-firefox.png)

![Bildschirmfoto der Videosteuerungen in Chrome](native-controls-chrome.png)

Allerdings gibt es Probleme mit diesen Steuerungen:

- Sie sind in den meisten Browsern nicht tastaturzugänglich, d.h. Sie können nicht zwischen den Steuerungen im nativen Player wechseln. Opera und Chrome bieten dies bis zu einem gewissen Grad, aber es ist immer noch nicht ideal.
- Verschiedene Browser bieten den nativen Steuerungen unterschiedliche Stile und Funktionalitäten, und sie sind nicht gestaltbar, was bedeutet, dass sie nicht leicht an einen einheitlichen Stilguide einer Website angepasst werden können.

Um dies zu beheben, können wir unsere eigenen benutzerdefinierten Steuerungen erstellen. Schauen wir uns an, wie das geht.

### Erstellung benutzerdefinierter Audio- und Videosteuerungen

HTML-Video und Audio teilen eine API — HTML Media Element — die es Ihnen ermöglicht, benutzerdefinierte Funktionalitäten auf Schaltflächen und andere Steuerungen zuzuweisen — die Sie selbst definieren.

Nehmen wir das obige Video-Beispiel und fügen wir ihm benutzerdefinierte Steuerungen hinzu.

#### Grundlegende Einrichtung

Zuerst holen Sie sich eine Kopie unserer [custom-controls-start.html](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls-start.html), [custom-controls.css](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls.css), [rabbit320.mp4](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.mp4) und [rabbit320.webm](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.webm) Dateien und speichern Sie sie in einem neuen Verzeichnis auf Ihrer Festplatte.

Erstellen Sie eine neue Datei namens main.js und speichern Sie sie im selben Verzeichnis.

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

#### JavaScript Grundeinrichtung

Wir haben einige einfache Steuerungsschaltflächen unter unserem Video eingefügt. Diese Steuerungen werden natürlich standardmäßig nichts tun; um Funktionalität hinzuzufügen, verwenden wir JavaScript.

Zuerst müssen wir Referenzen auf jede der Steuerungen speichern — fügen Sie Folgendes an den Anfang Ihrer JavaScript-Datei hinzu:

```js
const playPauseBtn = document.querySelector(".play-pause");
const stopBtn = document.querySelector(".stop");
const rwdBtn = document.querySelector(".rwd");
const fwdBtn = document.querySelector(".fwd");
const timeLabel = document.querySelector(".time");
```

Als nächstes müssen wir eine Referenz auf den Video-/Audio-Player selbst erfassen — fügen Sie diese Zeile unter den vorherigen Zeilen hinzu:

```js
const player = document.querySelector("video");
```

Dies hält eine Referenz zu einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt, das mehrere nützliche Eigenschaften und Methoden hat, die verwendet werden können, um Funktionalität mit unseren Tasten zu verknüpfen.

Bevor wir weitergehen, um unsere Tastenfunktionalität zu erstellen, entfernen wir die nativen Steuerungen, damit sie unserer benutzerdefinierten Steuerung nicht im Wege stehen. Fügen Sie das Folgende erneut am Ende Ihres JavaScripts hinzu:

```js
player.removeAttribute("controls");
```

Auf diese Weise vorzugehen anstatt das `controls`-Attribut von vornherein nicht einzuschließen, hat den Vorteil, dass, falls unser JavaScript aus irgendeinem Grund fehlschlägt, der Benutzer dennoch einige Steuerungen zur Verfügung hat.

#### Verkabelung unserer Tasten

Lassen Sie uns zunächst die Wiedergabe-/Pause-Schaltfläche einrichten. Wir können diese durch eine einfache bedingte Funktion zwischen Wiedergabe und Pause umschalten lassen, wie die folgende. Fügen Sie es Ihrem Code am unteren Rand hinzu:

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

Fügen Sie dann diesen Code am unteren Rand hinzu, der die Stopptaste steuert:

```js
stopBtn.onclick = () => {
  player.pause();
  player.currentTime = 0;
  playPauseBtn.textContent = "Play";
};
```

Es gibt keine `stop()`-Funktion auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)s, daher `pausieren()` wir es und setzen gleichzeitig die `currentTime` auf 0.

Als nächstes unsere Rückspul- und Vorspul-Tasten — fügen Sie die folgenden Blöcke unten in Ihrem Code hinzu:

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

Diese sind sehr einfach und fügen jedes Mal, wenn sie angeklickt werden, 3 Sekunden zur `currentTime` hinzu oder ziehen sie davon ab. In einem realen Videoplayer würden Sie wahrscheinlich eine aufwändigere Suchleiste oder ähnliches wollen.

Beachten Sie, dass wir auch prüfen, ob die `currentTime` größer ist als die gesamte Medien-`Dauer` oder ob die Medien nicht abgespielt werden, wenn die `fwdBtn` gedrückt wird. Wenn eine der Bedingungen wahr ist, stoppen wir das Video, um zu verhindern, dass die Benutzeroberfläche fehlerhaft wird, wenn sie versuchen, vorzuspulen, während das Video nicht abgespielt wird oder über das Ende des Videos hinaus vorzuspulen.

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

Jedes Mal, wenn sich die Zeit ändert (einmal pro Sekunde), rufen wir diese Funktion auf. Sie berechnet die Anzahl der Minuten und Sekunden aus dem gegebenen `currentTime`-Wert (der in Sekunden ist), fügt eine führende 0 hinzu, wenn entweder der Minuten- oder der Sekundenwert kleiner als 10 ist, und erstellt dann die Anzeige der Restzeit und fügt sie dem Zeitetikett hinzu.

#### Weiterführende Literatur

Dies gibt Ihnen eine grundlegende Vorstellung davon, wie Sie benutzerdefinierte Player-Funktionalität zu Video- und Audio-Player-Instanzen hinzufügen können. Für weitere Informationen darüber, wie Sie komplexere Funktionen zu Video- und Audio-Playern hinzufügen können, siehe:

- [Audio und Video bereitstellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery)
- [Grundlagen der Videoplayer-Gestaltung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
- [Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)

Wir haben auch ein erweitertes Beispiel erstellt, um zu zeigen, wie Sie ein objektorientiertes System erstellen könnten, das jeden Video- und Audioplayer auf der Seite findet (egal wie viele es sind) und unsere benutzerdefinierten Steuerungen dazu hinzufügt. Siehe [custom-controls-oojs](https://mdn.github.io/learning-area/accessibility/multimedia/custom-controls-OOJS/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/custom-controls-OOJS)).

## Audio-Transkripte

Um gehörlosen Menschen den Zugang zu Audioinhalten zu ermöglichen, müssen Sie Texttranskripte erstellen. Diese können auf dieselbe Seite wie das Audio eingefügt werden oder auf einer separaten Seite bereitgestellt und verlinkt werden.

Bezüglich der Erstellung des Transkripts haben Sie folgende Optionen:

- Kommerzielle Dienste — Sie könnten einen Profi für die Transkription beauftragen. Sehen Sie sich beispielsweise Unternehmen wie [Scribie](https://scribie.com/), [Casting Words](https://castingwords.com/) oder [Rev](https://www.rev.com/) an. Suchen Sie gründlich und fragen Sie um Rat, um sicherzustellen, dass Sie ein vertrauenswürdiges Unternehmen finden, mit dem Sie effektiv zusammenarbeiten können.
- Gemeinschaftlich/selbstgesteuerte Transkription — Wenn Sie in einer aktiven Gemeinschaft oder einem Team in Ihrem Unternehmen tätig sind, können Sie diese um Hilfe bei den Übersetzungen bitten. Sie könnten auch selbst einen Versuch wagen.
- Automatisierte Dienste — Es gibt KI-Dienste wie [Trint](https://trint.com/) oder [Transcribear](https://transcribear.com/). Laden Sie eine Video-/Audiodatei auf die Website hoch, und sie transkribiert sie automatisch für Sie. Auf YouTube können Sie automatische Untertitel/Transkripte generieren lassen. Je nachdem, wie klar das gesprochene Audio ist, wird die Qualität des resultierenden Transkripts stark variieren.

Wie bei den meisten Dingen im Leben bekommt man in der Regel das, wofür man bezahlt; unterschiedliche Dienstleistungen variieren in ihrer Genauigkeit und der benötigten Zeit zur Erstellung des Transkriptes. Wenn Sie ein seriöses Unternehmen oder einen AI-Dienst für die Transkription bezahlen, werden Sie es wahrscheinlich schnell und in hoher Qualität erledigen lassen. Wenn Sie nicht dafür bezahlen möchten, bekommen Sie es vermutlich in geringerer Qualität und/oder langsamer.

Es ist nicht akzeptabel, eine Audioressource zu veröffentlichen und zu versprechen, das Transkript später zu veröffentlichen — solche Versprechen werden oft nicht gehalten, was das Vertrauen zwischen Ihnen und Ihren Nutzern erschüttern wird. Wenn das Audio, das Sie präsentieren, z.B. ein persönliches Treffen oder eine live gesprochene Darbietung ist, wäre es akzeptabel, Notizen während der Darbietung zu machen, sie vollständig zusammen mit dem Audio zu veröffentlichen, und dann Hilfe beim Bereinigen der Notizen zu suchen.

### Transkripte-Beispiele

Wenn Sie einen automatisierten Service verwenden, müssen Sie wahrscheinlich die Benutzeroberfläche verwenden, die das Tool bereitstellt. Schauen Sie sich unser Video [Wait, ARIA Roles Have Categories?](https://www.youtube.com/watch?v=mwF-PpJOjMs) an und wählen Sie das Drei-Punkte-Menü (. . .) _> Transkript anzeigen_. Sie sehen das Transkript in einem separaten Bereich.

Wenn Sie Ihre eigene Benutzeroberfläche erstellen, um Ihr Audio und das zugehörige Transkript zu präsentieren, können Sie dies tun, wie Sie möchten, aber es könnte sinnvoll sein, es in einem ein- und ausklappbaren Bereich einzubinden; siehe unser Beispiel [audio-transcript-ui](https://mdn.github.io/learning-area/accessibility/multimedia/audio-transcript-ui/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/audio-transcript-ui)).

### Audio-Beschreibungen

In Fällen, in denen Ihre Audioinhalte von visuellen Elementen begleitet werden, müssen Sie in irgendeiner Weise Audio-Beschreibungen bereitstellen, um diese zusätzlichen Inhalte zu beschreiben.

In vielen Fällen wird es in Form von Videos vorliegen, in welchem Fall Sie Untertitel mit den im nächsten Abschnitt des Artikels beschriebenen Techniken implementieren können.

Es gibt jedoch einige Sonderfälle. Sie könnten zum Beispiel eine Audioaufnahme eines Meetings haben, das sich auf eine begleitende Ressource wie eine Tabelle oder ein Diagramm bezieht. In solchen Fällen sollten Sie sicherstellen, dass die Ressourcen zusammen mit dem Audio + Transkript bereitgestellt werden und speziell an den Stellen, an denen sie im Transkript erwähnt werden, auf sie verlinken. Dies wird natürlich allen Nutzern helfen, nicht nur Menschen, die gehörlos sind.

> [!NOTE]
> Ein Audio-Transkript hilft im Allgemeinen mehreren Nutzergruppen. Neben der Bereitstellung von Informationen für gehörlose Nutzer denken Sie auch an Nutzer mit einer langsamen Internetverbindung, die das Herunterladen des Audios als unpraktisch empfinden könnten. Denken Sie auch an einen Nutzer in einer lauten Umgebung wie einer Bar, der versucht, auf die Informationen zuzugreifen, sie aber wegen des Lärms nicht hören kann.

## Video-Texttracks

Um Videos zugänglich für Gehörlose, Sehbehinderte oder andere Nutzergruppen zu machen (wie solche mit geringer Bandbreite oder die die Sprache des Videos nicht verstehen), müssen Sie Texttracks zusammen mit Ihrem Videoinhalt bereitstellen.

> [!NOTE]
> Texttracks sind auch für potenziell alle Nutzer nützlich, nicht nur solche mit Behinderungen. Beispielsweise können einige Nutzer die Audioinhalte nicht hören, weil sie sich in lauten Umgebungen befinden (wie in einer vollen Bar, wenn ein Sportspiel gezeigt wird) oder möchten andere nicht stören, wenn sie sich in einer ruhigen Umgebung befinden (wie in einer Bibliothek).

Dies ist kein neues Konzept — Fernsehdienste bieten seit langem geschlossene Untertitel an:

![Scene aus einem alten Cartoon mit geschlossenen Untertiteln "Good work, Goldie. Keep it up!"](closed-captions.png)

Viele Länder bieten englische Filme mit Untertiteln in ihren eigenen Sprachen an, und DVDs enthalten oft verschiedene Sprachuntertitel, wie unten gezeigt:

![Ein englischer Film mit deutschen Untertiteln "Emo, warum erkennst du nicht die Schonheit dieses Ortes?"](subtitles_german.png)

Es gibt verschiedene Arten von Texttracks für verschiedene Zwecke. Die Haupttypen, auf die Sie stoßen werden, sind:

- Untertitel — Diese dienen gehörlosen Nutzern, die die Audiospur nicht hören können, einschließlich der gesprochenen Wörter und kontextueller Informationen, wie z.B., wer die Wörter gesprochen hat, ob die Personen wütend oder traurig waren, und welche Stimmung die Musik derzeit schafft.
- Übersetzungen — Beinhalten die Übersetzungen des Audiodialogs für Nutzer, die die gesprochene Sprache nicht verstehen.
- Beschreibungen — Diese beinhalten Beschreibungen für sehbehinderte Menschen, die das Video nicht sehen können, z.B. wie die Szene aussieht.
- Kapitelüberschriften — Kapiteltitel, die dem Benutzer helfen sollen, im Medienressource zu navigieren.

### Implementierung von HTML-Video-Texttracks

Texttracks für die Wiedergabe mit HTML-Video müssen im WebVTT-Format geschrieben sein, ein Textformat, das mehrere Textstrings zusammen mit Metadaten wie den Zeitpunkten im Video, in denen jeder Textstring gezeigt werden soll, und sogar begrenzte Stil-/Positionierungsinformationen enthält. Diese Textstrings werden als Hinweise bezeichnet.

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

Um dies zusammen mit der HTML-Media-Wiedergabe anzuzeigen, müssen Sie:

- Sie speichern als .vtt-Datei an einem geeigneten Ort.
- Verweisen auf die .vtt-Datei mit dem {{htmlelement("track")}}-Element. `<track>` sollte innerhalb von `<audio>` oder `<video>` platziert werden, jedoch nach allen `<source>`-Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Element/track#kind)-Attribut, um anzugeben, ob die Hinweise Untertitel, Übersetzungen oder Beschreibungen sind. Verwenden Sie zusätzlich `srclang`, um dem Browser mitzuteilen, in welcher Sprache die Untertitel geschrieben sind.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

Dies führt zu einem Video, das Untertitel anzeigt, etwa so:

![Videoplayer mit Standardsteuerungen wie Wiedergabe, Stopp, Lautstärke und Untertitel ein- und ausschalten. Das Video zeigt eine Szene eines Mannes mit einer speerartigen Waffe, und ein Untertitel lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für weitere Details siehe [Hinzufügen von Untertiteln zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können [das Beispiel](https://iandevlin.github.io/mdn/video-player-with-captions/) finden, das zu diesem Artikel auf GitHub gehört, geschrieben von Ian Devlin (sehen Sie sich auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) an). Dieses Beispiel verwendet JavaScript, damit Benutzer zwischen verschiedenen Untertiteln wählen können. Beachten Sie, dass Sie die Untertitel einschalten müssen, indem Sie die Schaltfläche "CC" drücken und eine Option auswählen — Englisch, Deutsch oder Spanisch.

> [!NOTE]
> Texttracks und Transkripte helfen Ihnen auch bei {{Glossary("SEO", "SEO")}}, da Suchmaschinen besonders von Text profitieren. Texttracks ermöglichen es Suchmaschinen sogar, direkt zu einem Punkt mitten im Video zu verlinken.

## Zusammenfassung

Dieses Kapitel hat eine Zusammenfassung der Barrierefreiheitsbedenken für Multimedia-Inhalte gegeben, zusammen mit einigen praktischen Lösungen.

Es ist nicht immer einfach, Multimedia-Inhalte barrierefrei zu machen. Wenn Sie zum Beispiel mit einem immersiven 3D-Spiel oder einer Virtual-Reality-App zu tun haben, ist es ziemlich schwierig, textliche Alternativen für solch eine Erfahrung zu bieten, und Sie könnten argumentieren, dass sehbehinderte Nutzer nicht wirklich zur Zielgruppe für solche Apps gehören.

Sie können jedoch sicherstellen, dass eine solche App eine gute Farbkontrast und klare Präsentation hat, sodass sie für Menschen mit Sehbehinderungen/Farbfehlsichtigkeit wahrnehmbar ist und auch tastaturzugänglich gemacht wird. Denken Sie daran, dass Barrierefreiheit bedeutet, so viel wie möglich zu tun, anstatt ständig nach 100% Barrierefreiheit zu streben, was oft unmöglich ist.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Mobile", "Learn_web_development/Core/Accessibility")}}
