---
title: Barrierefreie Multimedia-Inhalte
slug: Learn/Accessibility/Multimedia
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/WAI-ARIA_basics","Learn/Accessibility/Mobile", "Learn/Accessibility")}}

Eine weitere Kategorie von Inhalten, die Barrierefreiheitsprobleme verursachen kann, ist Multimedia. Video-, Audio- und Bildinhalte benötigen geeignete textuelle Alternativen, damit sie von unterstützenden Technologien und deren Nutzern verstanden werden können. Dieser Artikel zeigt, wie das geht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML, CSS, JavaScript und ein Verständnis von
        <a href="/de/docs/Learn/Accessibility/What_is_accessibility"
          >was Barrierefreiheit ist</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Barrierefreiheitsprobleme hinter Multimedia zu verstehen und wie man sie überwinden kann.
      </td>
    </tr>
  </tbody>
</table>

## Multimedia und Barrierefreiheit

Bisher in diesem Modul haben wir uns eine Vielzahl von Inhalten angesehen und was getan werden muss, um deren Barrierefreiheit sicherzustellen – von einfachen Textinhalten über Datentabellen, Bilder, native Steuerelemente wie Formularelemente und Schaltflächen bis hin zu komplexeren Markup-Strukturen (mit [WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics)-Attributen).

Dieser Artikel hingegen befasst sich mit einer weiteren allgemeinen Inhaltsklasse, bei der es nicht so einfach ist, die Barrierefreiheit sicherzustellen – Multimedia. Bilder, Tonspuren, Videos, {{htmlelement("canvas")}}-Elemente usw. sind nicht so leicht von Bildschirmlesern zu verstehen oder mit der Tastatur zu navigieren, weshalb wir ihnen helfen müssen.

Aber verzweifeln Sie nicht – hier werden wir Ihnen helfen, die Techniken zu verstehen, die zur Verfügung stehen, um Multimedia-Inhalte barrierefreier zu gestalten.

## Einfache Bilder

Wir haben bereits in unserem Artikel [HTML: Eine gute Basis für Barrierefreiheit](/de/docs/Learn/Accessibility/HTML) einfache Textalternativen für HTML-Bilder behandelt – Sie können dort die vollständigen Details nachlesen. Kurz gesagt sollten Sie sicherstellen, dass visuelle Inhalte, soweit möglich, über einen alternativen Text verfügen, den Bildschirmleser erfassen und ihren Nutzern vorlesen können.

Zum Beispiel:

```html
<img
  src="dinosaur.png"
  alt="Ein roter Tyrannosaurus Rex: Ein zweibeiniges Dinosaurier, das aufrecht wie ein Mensch steht, mit kleinen Armen und einem großen Kopf mit vielen scharfen Zähnen." />
```

## Zugängliche Audio- und Videosteuerungen

Die Implementierung von Steuerungen für webbasierte Audio- oder Videoinhalte sollte doch kein Problem sein, oder? Lassen Sie uns das genauer untersuchen.

### Das Problem mit nativen HTML-Steuerungen

HTML-Video- und Audioinstanzen bieten sogar einen Satz integrierter Steuerungselemente, die es Ihnen ermöglichen, die Medien direkt zu steuern. Zum Beispiel (siehe `native-controls.html` [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/native-controls.html) und [live](https://mdn.github.io/learning-area/accessibility/multimedia/native-controls.html)):

```html
<audio controls>
  <source src="viper.mp3" type="audio/mp3" />
  <source src="viper.ogg" type="audio/ogg" />
  <p>
    Ihr Browser unterstützt HTML-Audio nicht. Hier ist stattdessen ein
    <a href="viper.mp3">Link zum Audio</a>.
  </p>
</audio>

<br />

<video controls>
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    Ihr Browser unterstützt HTML-Video nicht. Hier ist stattdessen ein
    <a href="rabbit320.mp4">Link zum Video</a>.
  </p>
</video>
```

Das Attribut `controls` bietet Play/Pause-Tasten, eine Suchleiste usw. – die grundlegenden Steuerungen, die Sie von einem Mediaplayer erwarten würden. So sieht es in Firefox und Chrome aus:

![Screenshot der Video-Steuerungen in Firefox](native-controls-firefox.png)

![Screenshot der Video-Steuerungen in Chrome](native-controls-chrome.png)

Allerdings gibt es Probleme mit diesen Steuerungen:

- Sie sind in den meisten Browsern nicht tastaturzugänglich, d.h. Sie können nicht zwischen den Steuerungen im nativen Player hin- und herwechseln. Opera und Chrome bieten dies in gewissem Maße, aber es ist immer noch nicht ideal.
- Verschiedene Browser geben den nativen Steuerungen unterschiedliche Stile und Funktionalitäten, und sie sind nicht stylbar, was bedeutet, dass sie nicht einfach an ein Site-Styleguide angepasst werden können.

Um dies zu beheben, können wir unsere eigenen benutzerdefinierten Steuerungselemente erstellen. Lassen Sie uns anschauen, wie.

### Erstellen von benutzerdefinierten Audio- und Videosteuerungen

HTML-Video und -Audio teilen sich eine API – HTML Media Element – die es Ihnen ermöglicht, benutzerdefinierte Funktionen auf Schaltflächen und andere Steuerungen abzubilden, die Sie selbst definieren.

Nehmen wir das obige Video-Beispiel und fügen wir ihm benutzerdefinierte Steuerungen hinzu.

#### Grundsetup

Zuerst kopieren Sie unsere [custom-controls-start.html](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls-start.html), [custom-controls.css](https://github.com/mdn/learning-area/blob/main/accessibility/multimedia/custom-controls.css), [rabbit320.mp4](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.mp4) und [rabbit320.webm](https://raw.githubusercontent.com/mdn/learning-area/master/accessibility/multimedia/rabbit320.webm) Dateien und speichern Sie sie in einem neuen Verzeichnis auf Ihrer Festplatte.

Erstellen Sie eine neue Datei namens main.js und speichern Sie sie im gleichen Verzeichnis.

Schauen wir uns zuerst das HTML für den Videoplayer an, in dem HTML:

```html
<section class="player">
  <video controls>
    <source src="rabbit320.mp4" type="video/mp4" />
    <source src="rabbit320.webm" type="video/webm" />
    <p>
      Ihr Browser unterstützt HTML-Video nicht. Hier ist stattdessen ein
      <a href="rabbit320.mp4">Link zum Video</a>.
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

#### Grundsetup in JavaScript

Wir haben einige einfache Steuerelemente unter unserem Video eingefügt. Diese Steuerungen tun natürlich standardmäßig nichts; um ihnen Funktionalität hinzuzufügen, verwenden wir JavaScript.

Zuerst müssen wir Referenzen für jedes der Steuerelemente speichern – fügen Sie die folgenden Zeilen am Anfang Ihrer JavaScript-Datei hinzu:

```js
const playPauseBtn = document.querySelector(".playpause");
const stopBtn = document.querySelector(".stop");
const rwdBtn = document.querySelector(".rwd");
const fwdBtn = document.querySelector(".fwd");
const timeLabel = document.querySelector(".time");
```

Als nächstes müssen wir eine Referenz auf den Video/Audio-Player selbst holen — fügen Sie diese Zeile unter den vorherigen Zeilen hinzu:

```js
const player = document.querySelector("video");
```

Dies hält eine Referenz zu einem {{domxref("HTMLMediaElement")}}-Objekt, das mehrere nützliche Eigenschaften und Methoden verfügbar hat, die verwendet werden können, um Funktionalität mit unseren Buttons zu verbinden.

Bevor wir zur Erstellung der Funktionalität unserer Buttons übergehen, entfernen wir die nativen Steuerungen, damit sie unseren benutzerdefinierten Steuerungen nicht im Weg stehen. Fügen Sie folgendes, wieder am Ende Ihres JavaScripts, hinzu:

```js
player.removeAttribute("controls");
```

Dies in dieser Reihenfolge zu tun, anstatt das `controls`-Attribut von Anfang an nicht einzuschließen, hat den Vorteil, dass der Nutzer, falls unser JavaScript aus irgendeinem Grund fehlschlägt, dennoch einige Steuerungen zur Verfügung hat.

#### Unsere Buttons verbinden

Zuerst richten wir den Play/Pause-Button ein. Wir können ihn so steuern, dass er mit einer einfachen Bedingungsfunktion zwischen Play und Pause umschaltet, wie der folgende. Fügen Sie es Ihrem Code, am Ende, hinzu:

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

Als nächstes fügen Sie diesen Code am Ende hinzu, der die Stop-Taste steuert:

```js
stopBtn.onclick = () => {
  player.pause();
  player.currentTime = 0;
  playPauseBtn.textContent = "Play";
};
```

Es gibt keine `stop()`-Funktion auf {{domxref("HTMLMediaElement")}}s, deshalb pausieren wir sie stattdessen und setzen gleichzeitig die `currentTime` auf 0.

Als nächstes unsere Rückspul- und Vorspultasten – fügen Sie die folgenden Blöcke am Ende Ihres Codes hinzu:

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

Diese sind sehr einfach und addieren oder subtrahieren bei jedem Klick 3 Sekunden von der `currentTime`. In einem echten Videoplayer möchten Sie wahrscheinlich eine aufwändigere Suchleiste oder Ähnliches haben.

Beachten Sie, dass wir auch prüfen, ob die `currentTime` mehr als die gesamte Mediendauer beträgt oder ob die Medien nicht abgespielt werden, wenn die `fwdBtn` gedrückt wird. Wenn eine der Bedingungen zutrifft, stoppen wir das Video, um zu vermeiden, dass die Benutzeroberfläche schief geht, wenn der Benutzer versucht schnell vorzuspulen, wenn das Video nicht abgespielt wird, oder schnell über das Ende des Videos hinaus spult.

Zuletzt fügen wir dem Code Folgendes hinzu, um die Anzeige der abgelaufenen Zeit zu steuern:

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

Jedes Mal, wenn die Zeit aktualisiert wird (einmal pro Sekunde), feuern wir diese Funktion ab. Sie berechnet die Anzahl der Minuten und Sekunden aus dem angegebenen `currentTime`-Wert (der in Sekunden angegeben ist), fügt eine führende Null hinzu, wenn der Minuten- oder Sekundenwert kleiner als 10 ist, und erstellt die Anzeigeanzeige und fügt sie dem Zeitlabel hinzu.

#### Weiterführende Literatur

Dies gibt Ihnen eine grundlegende Vorstellung davon, wie Sie benutzerdefinierte Player-Funktionalität zu Video-/Audioplayer-Instanzen hinzufügen können. Weitere Informationen zum Hinzufügen komplexerer Funktionen zu Video-/Audioplayern finden Sie unter:

- [Audio und Video Bereitstellung](/de/docs/Web/Media/Audio_and_video_delivery)
- [Grundlagen der Videoplayer-Stilgebung](/de/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics)
- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player)

Wir haben auch ein fortgeschritteneres Beispiel erstellt, um zu zeigen, wie Sie ein objektorientiertes System erstellen könnten, das jeden Video- und Audioplayer auf der Seite findet (egal wie viele es gibt) und unsere benutzerdefinierten Steuerungen darauf anwendet. Siehe [custom-controls-oojs](https://mdn.github.io/learning-area/accessibility/multimedia/custom-controls-OOJS/) (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/custom-controls-OOJS)).

## Audiotranskriptionen

Um tauben Menschen den Zugang zu Audioinhalten zu ermöglichen, müssen Sie Texttranskriptionen erstellen. Diese können entweder auf der gleichen Seite wie das Audio auf irgendeine Weise integriert oder auf einer separaten Seite eingeschlossen und verlinkt werden.

In Bezug auf die eigentliche Erstellung der Transkription haben Sie folgende Optionen:

- Kommerzielle Dienste – Sie könnten einen Profi für die Transkription bezahlen, sehen Sie zum Beispiel Unternehmen wie [Scribie](https://scribie.com/), [Casting Words](https://castingwords.com/) oder [Rev](https://www.rev.com/). Sehen Sie sich um und fragen Sie nach Rat, um sicherzustellen, dass Sie ein seriöses Unternehmen finden, mit dem Sie effektiv zusammenarbeiten können.
- Community/Graswurzel/Selbstranskription – Wenn Sie Teil einer aktiven Community oder eines Teams an Ihrem Arbeitsplatz sind, könnten Sie diese um Hilfe beim Übersetzen bitten. Sie könnten sogar selbst versuchen, sie zu erstellen.
- Automatisierte Dienste – Es gibt verfügbare KI-Dienste, wie [Trint](https://trint.com/) oder [Transcribear](https://transcribear.com/). Laden Sie eine Video-/Audiodatei auf die Website hoch, und sie wird automatisch für Sie transkribiert. Auf YouTube können Sie die automatisierte Untertitelung/Transkription wählen. Je nachdem, wie klar das gesprochene Audio ist, wird die Qualität der resultierenden Transkription stark variieren.

Wie bei den meisten Dingen im Leben bekommen Sie in der Regel das, wofür Sie bezahlen; unterschiedliche Dienste werden in Genauigkeit und Zeit zur Erstellung der Transkription variieren. Wenn Sie ein seriöses Unternehmen oder einen AI-Service für die Transkription bezahlen, werden Sie wahrscheinlich schnell und in hoher Qualität fertig. Wenn Sie nicht dafür zahlen wollen, werden Sie es wahrscheinlich in niedrigerer Qualität und/oder langsam erledigt bekommen.

Es ist nicht in Ordnung, eine Audioressource zu veröffentlichen, aber zu versprechen, die Transkription später zu veröffentlichen — solche Versprechen werden oft nicht gehalten, was das Vertrauen zwischen Ihnen und Ihren Nutzern untergraben wird. Wenn es sich bei dem Audio, das Sie präsentieren, um ein persönliches Treffen oder eine Live-Performance handelt, wäre es akzeptabel, während der Veranstaltung grobe Notizen zu machen, diese zusammen mit dem Audio zu veröffentlichen und dann um Hilfe bei der Bereinigung der Notizen zu bitten.

### Transkriptionsbeispiele

Wenn Sie einen automatisierten Dienst verwenden, müssen Sie wahrscheinlich die Benutzeroberfläche verwenden, die das Tool bereitstellt. Beispielhaft können Sie unser [Wait, ARIA Roles Have Categories?](https://www.youtube.com/watch?v=mwF-PpJOjMs) Video ansehen und das Drei-Punkte-Menü (. . .) _> Transkript anzeigen wählen_. Sie werden das Transkript in einem separaten Panel sehen.

Wenn Sie Ihre eigene Benutzeroberfläche erstellen, um Ihr Audio und das dazugehörige Transkript zu präsentieren, können Sie dies beliebig tun, aber es könnte Sinn machen, es in einem ein- und ausblendbaren Panel zu integrieren; siehe unser [audio-transcript-ui](https://mdn.github.io/learning-area/accessibility/multimedia/audio-transcript-ui/) Beispiel (auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/audio-transcript-ui)).

### Audiobeschreibungen

In Fällen, in denen visuelle Inhalte Ihr Audio begleiten, müssen Sie Audiobeschreibungen bereitstellen, um diesen zusätzlichen Inhalt zu beschreiben.

In vielen Fällen wird dies in Form von Videos erfolgen, in welchem Fall Sie Untertitel mit den Techniken umsetzen können, die im nächsten Abschnitt des Artikels beschrieben werden.

Es gibt jedoch einige Sonderfälle. Sie könnten zum Beispiel eine Audioaufnahme einer Besprechung haben, die auf eine begleitende Ressource wie eine Tabelle oder ein Diagramm verweist. In solchen Fällen sollten Sie sicherstellen, dass die Ressourcen zusammen mit dem Audio + Transkript bereitgestellt werden und speziell an den Stellen verlinkt sind, an denen darauf im Transkript verwiesen wird. Dies hilft natürlich allen Nutzern, nicht nur tauben Menschen.

> [!NOTE]
> Ein Audiotranskript wird allgemein mehreren Nutzergruppen helfen. Neben tauben Nutzern, die Zugang zu den im Audio enthaltenen Informationen erhalten, denken Sie auch an einen Nutzer mit einer niedrigen Bandbreitenverbindung, der das Herunterladen des Audios als unpraktisch empfindet. Denken Sie auch an einen Nutzer in einer lauten Umgebung wie einer Kneipe oder Bar, der versucht, auf die Informationen zuzugreifen, diese aber nicht über den Lärm hören kann.

## Videotextspuren

Um Videos für gehörlose, sehbehinderte oder andere Benutzergruppen (wie solche mit niedriger Bandbreite, oder die die Sprache, in der das Video aufgenommen wurde, nicht verstehen) zugänglich zu machen, müssen Textspuren zusammen mit Ihren Videoinhalten hinzugefügt werden.

> [!NOTE]
> Textspuren sind auch für potenziell jeden Benutzer nützlich, nicht nur für solche mit Behinderungen. Zum Beispiel können einige Benutzer den Ton nicht hören, weil sie sich in lauten Umgebungen befinden (wie in einer überfüllten Bar, wenn ein Sportspiel gezeigt wird) oder möchten andere nicht stören, wenn sie sich an einem ruhigen Ort befinden (wie in einer Bibliothek).

Dies ist kein neues Konzept – Fernsehdienste bieten seit geraumer Zeit geschlossene Untertitel an:

![Frame aus einem altmodischen Cartoon mit geschlossenen Untertiteln "Good work, Goldie. Keep it up!"](closed-captions.png)

Viele Länder bieten englische Filme mit Untertiteln in ihrer eigenen Sprache an, und auf DVDs sind oft Untertitel in verschiedenen Sprachen verfügbar, wie unten gezeigt:

![Ein englischer Film mit deutschen Untertiteln "Emo, warum erkennst du nicht die Schonheit dieses Ortes?"](subtitles_german.png)

Es gibt verschiedene Arten von Textspuren für unterschiedliche Zwecke. Die Haupttypen, auf die Sie stoßen werden, sind:

- Untertitel — Diese sind für taube Benutzer, die die Tonspur nicht hören können, einschließlich der gesprochenen Wörter und kontextueller Informationen wie wer die Wörter gesprochen hat, ob die Personen wütend oder traurig waren und welche Stimmung die Musik derzeit schafft.
- Untertitel mit Übersetzung – Enthalten Übersetzungen des Audiodialogs für Benutzer, die die gesprochene Sprache nicht verstehen.
- Beschreibungen — Diese enthalten Beschreibungen für sehbehinderte Menschen, die das Video nicht sehen können, beispielsweise wie die Szene aussieht.
- Kapitelmarkierungen — Kapitelmarker, die dem Benutzer helfen sollen, die Medientressource zu navigieren.

### Umsetzen von HTML-Videotextspuren

Textspuren, die mit HTML-Video angezeigt werden, müssen in WebVTT geschrieben werden, einem Textformat, das mehrere Textzeichenfolgen zusammen mit Metadaten wie der Zeit im Video, zu der jede Textzeichenfolge angezeigt werden soll, und sogar eingeschränkten Stil-/Positionierungsinformationen enthält. Diese Textzeichenfolgen werden als Untertiteln bezeichnet.

Eine typische WebVTT-Datei könnte etwa so aussehen:

```plain
WEBVTT

1
00:00:22.230 --> 00:00:24.606
Das ist der erste Untertitel.

2
00:00:30.739 --> 00:00:34.074
Das ist der zweite.

…
```

Um dies gemeinsam mit der HTML-Medienwiedergabe anzeigen zu lassen, müssen Sie:

- Es als .vtt-Datei an einem sinnvollen Ort speichern.
- Die .vtt-Datei mit dem {{htmlelement("track")}}-Element verlinken. `<track>` sollte innerhalb von `<audio>` oder `<video>` platziert werden, jedoch nach allen `<source>`-Elementen. Verwenden Sie das [`kind`](/de/docs/Web/HTML/Element/track#kind)-Attribut, um anzugeben, ob es sich bei den Cue-Punkten um Untertitel, Beschreibungen oder Übersetzungen handelt. Außerdem verwenden Sie [`srclang`](/de/docs/Web/HTML/Element/track#srclang), um dem Browser mitzuteilen, in welcher Sprache Sie die Untertitel geschrieben haben.

Hier ist ein Beispiel:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

Das Ergebnis wird ein Video sein, das mit Untertiteln angezeigt wird, die ungefähr so aussehen:

![Videoplayer mit Standardsteuerungen wie Abspielen, Stoppen, Lautstärke und Untertitel An/Aus. Das laufende Video zeigt eine Szene eines Mannes, der einen speerartigen Waffe hält, und eine Bildunterschrift lautet "Esta hoja tiene pasado oscuro."](video-player-with-captions.png)

Für weitere Details siehe [Hinzufügen von Untertiteln und Untertitelungen zu HTML5-Video](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Sie finden [das Beispiel](https://iandevlin.github.io/mdn/video-player-with-captions/), das diesen Artikel auf GitHub begleitet, geschrieben von Ian Devlin (siehe den [Quellcode](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) auch). Dieses Beispiel verwendet JavaScript, um Benutzern das Auswählen zwischen verschiedenen Untertiteln zu ermöglichen. Beachten Sie, dass Sie zum Einschalten der Untertitel die Taste "CC" drücken und eine Option auswählen müssen — Englisch, Deutsch oder Spanisch.

> [!NOTE]
> Textspuren und Transkriptionen helfen Ihnen auch bei der {{glossary("SEO")}}, da Suchmaschinen vor allem durch Text gedeihen. Textspuren ermöglichen es Suchmaschinen sogar, direkt zu einer Stelle im Video zu verlinken.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern?

Wir haben keinen neuen Satz von Bewertungen für diesen Artikel erstellt, da bereits Bewertungen in unserem Modul [HTML Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding) verfügbar sind, die Ihr Wissen über die hier vorgestellten Informationen testen. Wenn Sie es noch nicht getan haben, probieren Sie die Bewertungen bei [Testen Sie Ihre Fähigkeiten: HTML-Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML/Test_your_skills:_HTML_images) und [Testen Sie Ihre Fähigkeiten: Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding) aus.

## Zusammenfassung

Dieses Kapitel hat einen Überblick über die Barrierefreiheitsbedenken bei Multimedia-Inhalten gegeben, zusammen mit einigen praktischen Lösungen.

Es ist nicht immer einfach, Multimedia barrierefrei zu machen. Wenn Sie zum Beispiel ein immersives 3D-Spiel oder eine Virtual-Reality-App behandeln, ist es ziemlich schwierig, Textalternativen für so ein Erlebnis bereitzustellen, und Sie könnten argumentieren, dass sehbehinderte Nutzer nicht wirklich zur Zielgruppe solcher Apps gehören.

Sie können jedoch sicherstellen, dass eine solche App einen ausreichenden Farbkontrast hat und klar genug präsentiert wird, um für Menschen mit Sehschwäche/Farbenblindheit wahrnehmbar zu sein, und sie auch tastaturzugänglich machen. Denken Sie daran, dass Barrierefreiheit bedeutet, so viel wie möglich zu tun, anstatt stets nach 100% Barrierefreiheit zu streben, was oft unmöglich ist.

{{PreviousMenuNext("Learn/Accessibility/WAI-ARIA_basics","Learn/Accessibility/Mobile", "Learn/Accessibility")}}
