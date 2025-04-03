---
title: Zugängliche Multimedia
slug: Learn_web_development/Core/Accessibility/Multimedia
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Mobile", "Learn_web_development/Core/Accessibility")}}

Eine weitere Kategorie von Inhalten, die Zugänglichkeitsprobleme verursachen kann, ist Multimedia. Video-, Audio- und Bildinhalte müssen mit entsprechenden Textalternativen versehen werden, damit sie von unterstützenden Technologien und deren Nutzern verstanden werden können. Dieser Artikel zeigt, wie.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und Zugänglichkeitsbest-Praktiken, wie sie in den vorherigen Lektionen des Moduls vermittelt wurden.</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Probleme mit nativen Medienplayern und wie Sie Ihre eigenen erstellen.</li>
          <li>Der Zweck von Audiotranskripten und Textspuren (Untertitel, Übersetzungen usw.), um Audio- und Videoinhalte zugänglich zu machen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Multimedia und Zugänglichkeit

Bisher in diesem Modul haben wir eine Vielzahl von Inhalten betrachtet und was getan werden muss, um deren Zugänglichkeit sicherzustellen, angefangen bei einfachem Textinhalt über Datentabellen, Bilder, native Steuerelemente wie Formularelemente und Schaltflächen bis hin zu komplexeren Markup-Strukturen (mit [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)-Attributen).

Dieser Artikel hingegen betrachtet eine andere allgemeine Inhaltsklasse, für die es wohl nicht so einfach ist, die Zugänglichkeit sicherzustellen — Multimedia. Bilder, Audio-Tracks, Videos, {{htmlelement("canvas")}}-Elemente usw. sind nicht so leicht von Bildschirmlesegeräten zu verstehen oder mit der Tastatur zu navigieren, und wir müssen ihnen unter die Arme greifen.

Aber keine Sorge — hier helfen wir Ihnen, die Techniken zu navigieren, die verfügbar sind, um Multimedia zugänglicher zu machen.

## Einfache Bilder

Wir haben bereits einfache Textalternativen für HTML-Bilder in unserem Artikel [HTML: A good basis for accessibility](/de/docs/Learn_web_development/Core/Accessibility/HTML) behandelt — Sie können dort für die vollständigen Details nachschlagen. Kurz gesagt, Sie sollten sicherstellen, dass visuelle Inhalte, wo möglich, eine alternative Textbeschreibung haben, die von Bildschirmlesegeräten aufgenommen und den Nutzern vorgelesen werden kann.

Beispielsweise:

```html
<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
```

## Zugängliche Audio- und Videosteuerungen

Die Implementierung von Steuerungen für webbasierte Audio-/Video-Inhalte sollte doch kein Problem sein, oder? Schauen wir es uns genauer an.

### Das Problem mit nativen HTML-Steuerelementen

HTML-Video- und Audio-Instanzen kommen sogar mit einer Reihe eingebauter Steuerelemente, die es Ihnen ermöglichen, das Medium sofort zu steuern. Zum Beispiel (siehe `native-controls.html` [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/native-controls.html) und [live](https://mdn.github.io/learning-area/accessibility/multimedia/native-controls.html)):

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

Das `controls`-Attribut bietet Play/Pause-Tasten, eine Suchleiste usw. — die grundlegenden Steuerelemente, die Sie von einem Medienplayer erwarten würden. So sieht es in Firefox und Chrome aus:

![Screenshot der Videosteuerungen in Firefox](native-controls-firefox.png)

![Screenshot der Videosteuerungen in Chrome](native-controls-chrome.png)

Es gibt jedoch Probleme mit diesen Steuerelementen:

- Sie sind in den meisten Browsern nicht tastaturzugänglich, d.h. Sie können nicht zwischen den Steuerelementen im nativen Player wechseln. Opera und Chrome bieten dies bis zu einem gewissen Grad, aber es ist immer noch nicht ideal.
- Verschiedene Browser bieten den nativen Steuerelementen unterschiedliche Stil- und Funktionalitäten, und sie sind nicht stilisierbar, was bedeutet, dass sie nicht so leicht an ein Site-Styleguide angepasst werden können.

Um dies zu beheben, können wir unsere eigenen benutzerdefinierten Steuerelemente erstellen. Schauen wir uns an, wie.

### Erstellen benutzerdefinierter Audio- und Videosteuerungen

HTML-Video und -Audio teilen eine API — das HTML-Medienelement —, das es Ihnen erlaubt, benutzerdefinierte Funktionen auf Tasten und andere Steuerungen abzubilden — beides definieren Sie selbst.

Nehmen wir das obige Video-Beispiel und fügen ihm benutzerdefinierte Steuerungen hinzu.

#### Grundlegende Einrichtung

Zuerst holen Sie sich eine Kopie unserer Dateien [custom-controls-start.html](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls-start.html), [custom-controls.css](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls.css), [rabbit320.mp4](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.mp4), und [rabbit320.webm](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.webm) und speichern Sie sie in einem neuen Verzeichnis auf Ihrer Festplatte.

Erstellen Sie eine neue Datei namens main.js und speichern Sie sie im selben Verzeichnis.

Schauen wir uns zunächst das HTML für den Videoplayer im HTML an:

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

#### Grundlegende JavaScript-Einrichtung

Wir haben einige einfache Steuerschaltflächen unter unserem Video eingefügt. Diese Steuerungen werden natürlich standardmäßig nichts tun; um Funktionalität hinzuzufügen, verwenden wir JavaScript.

Zuerst müssen wir Referenzen zu jedem der Steuerungselemente speichern — fügen Sie folgendes an den Anfang Ihrer JavaScript-Datei hinzu:

```js
const playPauseBtn = document.querySelector(".play-pause");
const stopBtn = document.querySelector(".stop");
const rwdBtn = document.querySelector(".rwd");
const fwdBtn = document.querySelector(".fwd");
const timeLabel = document.querySelector(".time");
```

Als nächstes müssen wir eine Referenz zum Video-/Audio-Player selbst erhalten — fügen Sie diese Zeile unter den vorherigen Zeilen hinzu:

```js
const player = document.querySelector("video");
```

Dies hält eine Referenz zu einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt, das mehrere nützliche Eigenschaften und Methoden zur Verfügung hat, die verwendet werden können, um Funktionalität mit unseren Tasten zu verbinden.

Bevor wir uns der Erstellung unserer Tastenfunktionalität widmen, entfernen wir die nativen Steuerungen, damit sie uns nicht bei unseren benutzerdefinierten Steuerungen im Weg stehen. Fügen Sie folgendes an das Ende Ihres JavaScript-Codes hinzu:

```js
player.removeAttribute("controls");
```

Dies auf diese Weise zu tun hat den Vorteil, dass, wenn unser JavaScript aus irgendeinem Grund fehlschlägt, der Benutzer immer noch einige Steuerungen zur Verfügung hat.

#### Verkabelung unserer Tasten

Zuerst richten wir die Play/Pause-Taste ein. Wir können erreichen, dass sie zwischen Abspielen und Pause umschaltet mit einer einfachen konditionalen Funktion, wie die folgende. Fügen Sie sie am Ende Ihres Codes hinzu:

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

Als nächstes fügen Sie diesen Code ans Ende hinzu, der die Stop-Taste kontrolliert:

```js
stopBtn.onclick = () => {
  player.pause();
  player.currentTime = 0;
  playPauseBtn.textContent = "Play";
};
```

Es gibt keine `stop()`-Funktion für [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)s, daher pausieren wir sie anstattdessen und setzen gleichzeitig die `currentTime` auf 0.

Als Nächstes unsere Rückspul- und Vorwärtstasten — fügen Sie die folgenden Blöcke an das Ende Ihres Codes hinzu:

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

Diese sind sehr einfach und fügen dem `currentTime` jedes Mal, wenn sie geklickt werden, 3 Sekunden hinzu oder ziehen sie ab. In einem realen Videoplayer würden Sie wahrscheinlich eine aufwendigere Suchleiste oder ähnliches wünschen.

Beachten Sie, dass wir auch prüfen, ob die `currentTime` größer als die gesamte Medien`dauer` ist oder ob das Medium nicht spielt, wenn die `fwdBtn` gedrückt wird. Wenn eine der Bedingungen wahr ist, stoppen wir das Video, um zu verhindern, dass die Benutzeroberfläche falsch reagiert, wenn versucht wird, vorwärts zu gehen, wenn das Video nicht spielt, oder schneller als das Ende des Videos.

Schließlich fügen Sie das Folgende am Ende des Codes hinzu, um die Anzeige der verstrichenen Zeit zu steuern:

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

Jedes Mal, wenn die Zeit aktualisiert wird (einmal pro Sekunde), starten wir diese Funktion. Es wird die Anzahl der Minuten und Sekunden vom gegebenen `currentTime`-Wert berechnet (der in Sekunden ist), fügt eine führende 0 hinzu, wenn entweder der Minuten- oder Sekundenwert weniger als 10 ist und dann erstellt die Anzeige und fügt sie dem Zeitlabel hinzu.

#### Weiterführende Lektüre

Dies gibt Ihnen eine grundlegende Idee davon, wie Sie benutzerdefinierte Player-Funktionalität zu Video-/Audioplayer-Instanzen hinzufügen können. Weitere Informationen darüber, wie man komplexere Funktionen zu Video-/Audioplayern hinzufügt, finden Sie in:

- [Audio- und Videolieferung](/de/docs/Web/Media/Guides/Audio_and_video_delivery)
- [Grundlagen der Videoplayer-Stylingerstellung](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics)
- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)

Wir haben auch ein fortgeschrittenes Beispiel erstellt, um zu zeigen, wie Sie ein objektorientiertes System erstellen könnten, das jeden Video- und Audioplayer auf der Seite findet (egal wie viele es sind) und unsere benutzerdefinierten Steuerelemente hinzufügt. Siehe [custom-controls-oojs](https://mdn.github.io/learning-area/accessibility/multimedia/custom-controls-OOJS/) (auch [sehen Sie den Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/custom-controls-OOJS)).

## Audio-Transkripte

Um gehörlosen Menschen den Zugang zu Audioinhalten zu ermöglichen, müssen Sie Texttranskripte erstellen. Diese können entweder auf derselben Seite wie das Audio auf irgendeine Weise enthalten sein oder auf einer separaten Seite eingefügt und verlinkt sein.

Bei der tatsächlichen Erstellung des Transkripts haben Sie folgende Möglichkeiten:

- Kommerzielle Dienstleistungen — Sie könnten einen Profi für die Transkription bezahlen, siehe zum Beispiel Unternehmen wie [Scribie](https://scribie.com/), [Casting Words](https://castingwords.com/) oder [Rev](https://www.rev.com/). Schauen Sie sich um und fragen Sie um Rat, um sicherzustellen, dass Sie ein seriöses Unternehmen finden, mit dem Sie effektiv zusammenarbeiten können.
- Gemeinschafts-/Grassroots-/Eigenabschrift — Wenn Sie Teil einer aktiven Gemeinschaft oder eines Teams an Ihrem Arbeitsplatz sind, dann könnten Sie sie um Hilfe bei den Übersetzungen bitten. Sie könnten es sogar selbst versuchen.
- Automatisierte Dienste — Es gibt KI-Dienste, wie [Trint](https://trint.com/) oder [Transcribear](https://transcribear.com/). Laden Sie eine Video-/Audiodatei auf die Seite hoch, und sie transkribiert diese automatisch für Sie. Auf YouTube können Sie automatische Untertitel/Transkripte erstellen lassen. Je nachdem, wie klar das gesprochene Audio ist, wird die Qualität des Transkriptes stark variieren.

Wie bei den meisten Dingen im Leben bekommen Sie meistens das, wofür Sie bezahlen; verschiedene Dienste werden in ihrer Genauigkeit und der zur Erstellung des Transkriptes benötigten Zeit variieren. Wenn Sie ein seriöses Unternehmen oder einem KI-Dienst für die Transkription bezahlen, bekommen Sie es wahrscheinlich schnell und in hoher Qualität. Wenn Sie nicht dafür zahlen wollen, wird es wahrscheinlich in niedrigerer Qualität und/oder langsam erledigt werden.

Es ist nicht akzeptabel, eine Audio-Ressource zu veröffentlichen, aber das Versprechen abzugeben, das Transkript später zu veröffentlichen — solche Versprechen werden oft nicht gehalten, was das Vertrauen zwischen Ihnen und Ihren Nutzern untergräbt. Falls das Audio, das Sie präsentieren, etwas wie ein persönliches Treffen oder eine live gesprochene Aufführung ist, wäre es akzeptabel, während der Aufführung Notizen zu machen, sie zusammen mit dem Audio vollständig zu veröffentlichen und dann Hilfe bei der Bereinigung der Notizen zu suchen.

### Transkriptbeispiele

Wenn Sie einen automatisierten Dienst nutzen, müssen Sie wahrscheinlich die Benutzeroberfläche verwenden, die das Tool bereitstellt. Beispielweise werfen Sie einen Blick auf unser Video [Wait, ARIA Roles Have Categories?](https://www.youtube.com/watch?v=mwF-PpJOjMs) und wählen Sie das Drei-Punkte-Menü (. . .) _> Transkript anzeigen_. Sie werden das Transkript in einem separaten Fenster sehen.

Wenn Sie Ihre eigene Benutzeroberfläche erstellen, um Ihr Audio und das zugehörige Transkript zu präsentieren, können Sie es so machen, wie Sie wollen, aber es könnte sinnvoll sein, es in einem ein-/ausblendbaren Fenster zu integrieren; siehe unser Beispiel [audio-transcript-ui](https://mdn.github.io/learning-area/accessibility/multimedia/audio-transcript-ui/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/audio-transcript-ui)).

### Audio-Beschreibungen

In Fällen, in denen Bilder zu Ihrem Audio gehören, müssen Sie Audio-Beschreibungen irgendeiner Art zur Verfügung stellen, um diesen zusätzlichen Inhalt zu beschreiben.

In vielen Fällen wird dies in Form eines Videos sein, in welchem Fall Sie Untertitel unter Nutzung der im nächsten Abschnitt des Artikels beschriebenen Techniken implementieren können.

Es gibt jedoch einige Randfälle. Sie könnten zum Beispiel eine Audioaufnahme eines Treffens haben, das sich auf eine begleitende Ressource wie eine Tabelle oder ein Diagramm bezieht. In solchen Fällen sollten Sie sicherstellen, dass die Ressourcen zusammen mit dem Audio + Transkript bereitgestellt werden und speziell auf sie in den Stellen verlinken, in denen sie im Transkript erwähnt werden. Dies wird natürlich allen Nutzern helfen, nicht nur Menschen, die gehörlos sind.

> [!NOTE]
> Ein Audiotranskript wird im Allgemeinen mehreren Benutzergruppen helfen. Neben dem Zugang zu den Informationen im Audio für gehörlose Nutzer, denken Sie an einen Nutzer mit einer langsamen Internetverbindung, der das Audio nicht herunterladen möchte. Denken Sie auch an einen Nutzer in einer lauten Umgebung wie einer Kneipe oder Bar, der versucht, auf die Informationen zuzugreifen, sie aber wegen des Lärms nicht hören kann.

## Video-Textspuren

Um Videos für Gehörlose, Sehbehinderte oder andere Benutzergruppen (wie solche mit niedriger Bandbreite oder Nutzer, die die Sprache, in der das Video aufgenommen wurde, nicht verstehen) zugänglich zu machen, müssen Sie Textspuren zusammen mit Ihrem Videoinhalt einschließen.

> [!NOTE]
> Textspuren sind auch nützlich für potenziell jeden Benutzer, nicht nur für Menschen mit Behinderungen. Manche Nutzer können das Audio beispielsweise nicht hören, weil sie sich in lauten Umgebungen befinden (wie eine volle Bar, in der ein Sportspiel gezeigt wird) oder möchten keine anderen stören, wenn sie sich in einer ruhigen Umgebung befinden (wie eine Bibliothek).

Dies ist kein neues Konzept — Fernsehdienste bieten seit langem geschlossene Untertitel an:

![Bild von einem alten Cartoon mit geschlossenen Untertiteln "Gute Arbeit, Goldie. Weiter so!"](closed-captions.png)

Viele Länder bieten englische Filme mit Untertiteln in ihrer eigenen Sprache an, und verschiedene Sprachuntertitel sind oft auf DVDs verfügbar, wie unten dargestellt:

![Ein englischer Film mit deutschen Untertiteln "Emo, warum erkennst du nicht die Schönheit dieses Ortes?"](subtitles_german.png)

Es gibt verschiedene Arten von Textspuren für unterschiedliche Zwecke. Die Haupttypen, die Sie begegnen werden, sind:

- Untertitel — Sie sind für die gehörlosen Nutzer, die nicht den Audiotrack hören können, und umfassen die gesprochenen Wörter und kontextuelle Informationen wie wer die Wörter gesprochen hat, ob die Personen verärgert oder traurig waren und welche Stimmung die Musik derzeit erzeugt.
- Übersetzungen — Enthalten Übersetzungen des Audio-Dialogs für Nutzer, die die gesprochene Sprache nicht verstehen.
- Beschreibungen — Diese enthalten Beschreibungen für sehbehinderte Menschen, die das Video nicht sehen können, zum Beispiel, wie die Szene aussieht.
- Kapitelüberschriften — Kapitelmarkierungen, die dem Nutzer helfen sollen, die Medienressource zu navigieren.

### Implementierung von HTML-Video-Textspuren

Textspuren, die mit HTML-Video angezeigt werden, müssen in WebVTT geschrieben werden, einem Textformat, das mehrere Textblöcke zusammen mit Metadaten wie zu welchem Zeitpunkt im Video Sie jeden Textblock anzeigen möchten, und sogar eingeschränkte Stil-/Positionierungsinformationen enthält. Diese Textblöcke werden Cues genannt.

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

Um dies zusammen mit der HTML-Medienwiedergabe angezeigt zu bekommen, müssen Sie:

- Speichern Sie sie als .vtt-Datei an einem sinnvollen Ort.
- Verlinken Sie die .vtt-Datei mit dem {{htmlelement("track")}}-Element. `<track>` sollte innerhalb `<audio>` oder `<video>` platziert werden, aber nach allen `<source>`-Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Element/track#kind)-Attribut, um anzugeben, ob die Cues Untertitel, Beschriftungen oder Beschreibungen sind. Verwenden Sie außerdem [`srclang`](/de/docs/Web/HTML/Element/track#srclang), um dem Browser mitzuteilen, in welcher Sprache Sie die Untertitel geschrieben haben.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

Dies wird zu einem Video führen, das Untertitel anzeigt, ähnlich wie dies:

![Video-Player mit Standardsteuerungen wie Abspielen, Stop, Lautstärke und Untertitel Ein/Aus. Das Video zeigt eine Szene von einem Mann mit einer speerähnlichen Waffe, und ein Untertitel lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für mehr Details siehe [Hinzufügen von Untertiteln zu HTML-Video](/de/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie können [das Beispiel](https://iandevlin.github.io/mdn/video-player-with-captions/) finden, das zu diesem Artikel auf GitHub gehört, geschrieben von Ian Devlin (siehe auch den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions)). Dieses Beispiel verwendet JavaScript, um es den Nutzern zu ermöglichen, zwischen verschiedenen Untertiteln zu wählen. Beachten Sie, dass um die Untertitel zu aktivieren, Sie die "CC"-Taste drücken müssen und eine Option auswählen — Englisch, Deutsch oder Spanisch.

> [!NOTE]
> Textspuren und Transkripte helfen Ihnen auch bei {{Glossary("SEO", "SEO")}}, da Suchmaschinen insbesondere auf Text gedeihen. Textspuren erlauben sogar Suchmaschinen, direkt zu einem Punkt im Video zu verlinken.

## Zusammenfassung

Dieses Kapitel hat einen Überblick über Zugänglichkeitsaspekte für Multimedia-Inhalte sowie einige praktische Lösungen gegeben.

Es ist nicht immer einfach, Multimedia zugänglich zu machen. Wenn Sie beispielsweise mit einem immersiven 3D-Spiel oder einer virtuellen Realität-App zu tun haben, ist es ziemlich schwierig, Textalternativen für ein solches Erlebnis bereitzustellen, und Sie könnten argumentieren, dass sehbehinderte Nutzer nicht wirklich in der Zielgruppe für solche Apps sind.

Sie können jedoch sicherstellen, dass eine solche App ausreichend Farbkontrast und klare Präsentation hat, damit sie für Menschen mit geringem Sehvermögen/Farbblindheit sichtbar ist, und sie auch tastaturfreundlich machen. Denken Sie daran, dass es bei der Zugänglichkeit darum geht, so viel wie möglich zu tun, anstatt ständig 100 % Zugänglichkeit anzustreben, was oft unmöglich ist.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Mobile", "Learn_web_development/Core/Accessibility")}}
