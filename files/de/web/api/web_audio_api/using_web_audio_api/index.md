---
title: Verwendung der Web Audio API
slug: Web/API/Web_Audio_API/Using_Web_Audio_API
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{DefaultAPISidebar("Web Audio API")}}

Lassen Sie uns einen Blick darauf werfen, wie man mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API) beginnt. Wir werden kurz einige Konzepte betrachten und dann ein einfaches Boombox-Beispiel studieren, das es uns ermöglicht, einen Audiotrack zu laden, abzuspielen und anzuhalten sowie die Lautstärke und die Stereoverteilung zu ändern.

Die Web Audio API ersetzt nicht das {{HTMLElement("audio")}} Medien-Element, sondern ergänzt es, genau wie {{HTMLElement("canvas")}} neben dem {{HTMLElement("img")}} Element koexistiert. Ihr Anwendungsfall bestimmt, welche Werkzeuge Sie verwenden, um Audio zu implementieren. Wenn Sie die Wiedergabe eines Audiotracks steuern möchten, bietet das `<audio>` Medien-Element eine bessere und schnellere Lösung als die Web Audio API. Wenn Sie jedoch komplexere Audiobearbeitungen sowie Wiedergabe durchführen möchten, bietet die Web Audio API wesentlich mehr Macht und Kontrolle.

Ein leistungsstarkes Merkmal der Web Audio API ist, dass es keine strikte "Soundaufrufbegrenzung" gibt. Beispielsweise gibt es keine Obergrenze von 32 oder 64 Soundaufrufen zur gleichen Zeit. Einige Prozessoren können mehr als 1.000 gleichzeitige Sounds ohne Stottern abspielen.

## Beispielcode

Unsere Boombox sieht so aus:

![Ein Boombox mit Steuerungen für Wiedergabe, Pan und Lautstärke](boombox.png)

Beachten Sie das Retro-Kassettendeck mit einer Wiedergabetaste und Lautstärke- und Pan-Schiebereglern, um die Lautstärke und Stereoverteilung zu ändern. Wir könnten dies viel komplexer gestalten, aber zu diesem Zeitpunkt ist es ideal für einfaches Lernen.

[Sehen Sie sich das endgültige Demo hier live an](https://mdn.github.io/webaudio-examples/audio-basics/) oder sehen Sie sich den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/audio-basics) an.

## Audiographen

Alles innerhalb der Web Audio API basiert auf dem Konzept eines Audiographen, der aus Knoten besteht.

Die Web Audio API verarbeitet Audiooperationen innerhalb eines **Audiokontexts** und wurde entwickelt, um **modularen Routing** zu ermöglichen. Grundlegende Audiooperationen werden mit **Audioknoten** durchgeführt, die miteinander verbunden sind, um einen **Audio-Routing-Graphen** zu bilden. Sie haben Eingabeknoten, die die Quelle der Sounds sind, die Sie manipulieren, Modifikationsknoten, die diese Sounds nach Bedarf ändern, und Ausgabeknoten (Ziele), die es Ihnen ermöglichen, diese Sounds zu speichern oder zu hören.

Mehrere Audioquellen mit unterschiedlichen Kanal-Layouts werden unterstützt, sogar innerhalb eines einzelnen Kontexts. Aufgrund dieses modularen Designs können Sie komplexe Audiofunktionen mit dynamischen Effekten erstellen.

## Audiokontext

Um irgendetwas mit der Web Audio API machen zu können, müssen wir eine Instanz des Audiokontexts erstellen. Dies gibt uns dann Zugang zu allen Funktionen und Eigenschaften der API.

```js
const audioContext = new AudioContext();
```

Was passiert also, wenn wir dies tun? Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) wird für uns automatisch erstellt und zu einem Online-Audiokontext erweitert. Das möchten wir, weil wir live Sound abspielen möchten.

> [!NOTE]
> Wenn Sie nur Audiodaten verarbeiten möchten, z.B. zwischenspeichern und streamen, sie aber nicht abspielen möchten, sollten Sie möglicherweise die Erstellung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) in Betracht ziehen.

## Sound laden

Nun, der von uns erstellte Audiokontext benötigt etwas Sound, um ihn abzuspielen. Es gibt mehrere Möglichkeiten, dies mit der API zu tun. Beginnen wir mit einer einfachen Methode - da wir eine Boombox haben, möchten wir höchstwahrscheinlich einen vollständigen Songtrack abspielen. Auch aus Gründen der Barrierefreiheit ist es schön, diesen Track im DOM offenzulegen. Wir werden den Song auf der Seite mit einem {{htmlelement("audio")}} Element offenlegen.

```html
<audio src="myCoolTrack.mp3"></audio>
```

> [!NOTE]
> Wenn sich die von Ihnen geladene Sounddatei auf einer anderen Domain befindet, müssen Sie das `crossorigin` Attribut verwenden; lesen Sie [Cross Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) für weitere Informationen.

Um all die schönen Dinge nutzen zu können, die wir mit der Web Audio API erhalten, müssen wir die Quelle aus diesem Element nehmen und in den von uns erstellten Kontext _einleiten_. Glücklicherweise gibt es eine Methode, die uns genau das ermöglicht — [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource):

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

> [!NOTE]
> Das obige `<audio>` Element wird im DOM durch ein Objekt vom Typ [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) dargestellt, welches über eine eigene Funktionsvielfalt verfügt. All dies bleibt intakt; wir ermöglichen lediglich, dass der Sound für die Web Audio API verfügbar ist.

## Soundsteuerung

Beim Abspielen von Sound im Web ist es wichtig, dem Benutzer die Kontrolle zu ermöglichen. Abhängig vom Anwendungsfall gibt es eine Vielzahl von Optionen, aber wir werden die Möglichkeit bieten, den Sound abzuspielen/anzuhalten, die Lautstärke zu ändern und die Stereoposition von links nach rechts zu verschieben.

Das Programmieren von Sound steuern durch JavaScript-Code wird durch die Autoplay-Richtlinien der Browser abgedeckt, wodurch es ohne Erlaubnis des Benutzers oder einer Allowlist blockiert werden kann. Autoplay-Richtlinien erfordern in der Regel entweder eine ausdrückliche Erlaubnis oder ein Benutzerinteraktion mit der Seite, bevor Skripte das Abspielen von Audio auslösen können.

Diese speziellen Anforderungen bestehen im Wesentlichen, weil unerwartete Sounds lästig und aufdringlich sein und Barrierefreiheitsprobleme verursachen können. Sie können mehr darüber in unserem Artikel [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay) erfahren.

Da unsere Skripte Audio als Antwort auf ein Benutzereingabeereignis abspielen (zum Beispiel ein Klick auf einen Wiedergabeknopf), sind wir auf der sicheren Seite und sollten keine Probleme mit der Autoplay-Blockierung haben. Lassen Sie uns also mit der Betrachtung unserer Abspiel- und Pausenfunktionalität beginnen. Wir haben einen Wiedergabeknopf, der sich in einen Pausenknopf ändert, wenn der Track abgespielt wird:

```html
<button data-playing="false" role="switch" aria-checked="false">
  <span>Play/Pause</span>
</button>
```

Bevor wir unseren Track abspielen können, müssen wir unseren Audiographen vom Audioquelle/Eingabeknoten zum Ziel verbinden.

Wir haben bereits einen Eingabeknoten erstellt, indem wir unser Audioelement in die API eingebracht haben. Meistens müssen Sie keinen Ausgabeknoten erstellen, Sie können einfach Ihre anderen Knoten mit [`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination) verbinden, das die Situation für Sie handhabt:

```js
track.connect(audioContext.destination);
```

Eine gute Möglichkeit, sich diese Knoten vorzustellen, besteht darin, einen Audiographen zu zeichnen, damit Sie diesen visualisieren können. So sieht unser aktueller Audiograph aus:

![Ein Audiograph mit einer Audioquellen-Element und der Verbindung zum Standardziel](graph1.jpg)

Jetzt können wir die Abspiel- und Pausenfunktionalität hinzufügen.

```js
// Select our play button
const playButton = document.querySelector("button");

playButton.addEventListener("click", () => {
  // Check if context is in suspended state (autoplay policy)
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  // Play or pause track depending on state
  if (playButton.dataset.playing === "false") {
    audioElement.play();
    playButton.dataset.playing = "true";
  } else if (playButton.dataset.playing === "true") {
    audioElement.pause();
    playButton.dataset.playing = "false";
  }
});
```

Wir müssen auch berücksichtigen, was zu tun ist, wenn der Track mit dem Abspielen fertig ist. Unser `HTMLMediaElement` löst ein `ended` Ereignis aus, sobald es das Abspielen beendet hat, sodass wir darauf horchen und entsprechend Code ausführen können:

```js
audioElement.addEventListener("ended", () => {
  playButton.dataset.playing = "false";
});
```

## Soundmodifizierung

Lassen Sie uns einige grundlegende Modifikationsknoten betrachten, um den Klang zu verändern, den wir haben. Hier beginnt die Web Audio API wirklich nützlich zu werden. Beginnen wir mit der Änderung der Lautstärke. Dies kann mit einem [`GainNode`](/de/docs/Web/API/GainNode) erreicht werden, der darstellt, wie groß unsere Schallwelle ist.

Es gibt zwei Möglichkeiten, Knoten mit der Web Audio API zu erstellen. Sie können die Fabrikmethode im Kontext selbst verwenden (z.B. `audioContext.createGain()`) oder über einen Konstruktor des Knotens (z.B. `new GainNode()`). Wir werden in unserem Code die Fabrikmethode verwenden:

```js
const gainNode = audioContext.createGain();
```

Nun müssen wir unseren vorherigen Audiographen aktualisieren, sodass der Eingang an den Gain angeschlossen ist, dann der Gain-Knoten an das Ziel angeschlossen ist:

```js
track.connect(gainNode).connect(audioContext.destination);
```

Dies wird unseren Audiographen so aussehen lassen:

![Ein Audiograph mit einer Audioquellen-Element, verbunden mit einem Gain-Knoten, der die Audioquelle modifiziert, und anschließend zum Standardziel führt](graph2.jpg)

Der Standardwert für Gain ist 1; dies hält die aktuelle Lautstärke gleich. Gain kann auf ein Minimum von etwa -3.4028235E38 und ein Maximum von etwa 3.4028235E38 (Gleitkommazahlenbereich in JavaScript) eingestellt werden. Hier werden wir der Boombox erlauben, den Gain bis zu 2 (doppelte ursprüngliche Lautstärke) und auf 0 nach unten zu bewegen (dies wird unseren Sound effektiv stummschalten).

Lassen Sie uns dem Benutzer die Kontrolle darüber geben – wir verwenden ein [Range-Input](/de/docs/Web/HTML/Reference/Elements/input/range):

```html
<input type="range" id="volume" min="0" max="2" value="1" step="0.01" />
```

> [!NOTE]
> Range-Inputs sind ein wirklich praktischer Input-Typ, um Werte auf Audioknoten zu aktualisieren. Sie können die Werte eines Range-Bereichs festlegen und sie direkt mit den Parametern des Audioknotens verwenden.

Lassen Sie uns den Wert dieses Inputs greifen und den Gain-Wert aktualisieren, wenn der Eingabeknoten seinen Wert durch den Benutzer geändert hat:

```js
const volumeControl = document.querySelector("#volume");

volumeControl.addEventListener("input", () => {
  gainNode.gain.value = volumeControl.value;
});
```

> [!NOTE]
> Die Werte von Knoten-Objekten (z.B. `GainNode.gain`) sind keine einfachen Werte; sie sind tatsächlich Objekte vom Typ [`AudioParam`](/de/docs/Web/API/AudioParam) – diese werden Parameter genannt. Deshalb müssen wir die `value` Eigenschaft von `GainNode.gain` setzen, anstatt den Wert direkt auf `gain` zu setzen. Dies ermöglicht es ihnen, viel flexibler zu sein, indem sie dem Parameter einen spezifischen Satz von Werten übergeben können, um sich innerhalb eines festgelegten Zeitraums zu ändern.

Großartig, nun kann der Benutzer die Lautstärke des Tracks anpassen! Der Gain-Knoten ist der perfekte Knoten, um eine Stummfunktion hinzuzufügen.

## Stereoverteilung zu unserer App hinzufügen

Lassen Sie uns einen weiteren Modifikationsknoten hinzufügen, um zu üben, was wir gerade gelernt haben.

Es gibt einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode) Knoten, der die Balance des Sounds zwischen den linken und rechten Lautsprechern verändert, wenn der Benutzer Stereo-Fähigkeiten hat.

> [!NOTE]
> Der `StereoPannerNode` ist für einfache Fälle gedacht, in denen Sie nur eine Stereoverteilung von links nach rechts wünschen.
> Es gibt auch einen [`PannerNode`](/de/docs/Web/API/PannerNode), der eine große Kontrolle über den 3D-Raum ermöglicht, oder Sound _spatialization_, um komplexere Effekte zu erzeugen.
> Dies wird in Spielen und 3D-Apps verwendet, um beispielsweise Vögel über Kopf fliegen zu lassen oder Sound von hinten auf den Benutzer zukommen zu lassen.

Um es zu visualisieren, werden wir unseren Audiographen so aussehen lassen:

![Eine Abbildung, die den Audiographen mit einem Eingabeknoten, zwei Modifikationsknoten (einem Gain-Knoten und einem Stereopan-Knoten) und einem Zielknoten zeigt.](graphpan.jpg)

Lassen Sie uns diesmal die Konstruktor-Methode verwenden, um einen Knoten zu erstellen. Wenn wir es auf diese Weise tun, müssen wir den Kontext und alle Optionen, die der bestimmte Knoten möglicherweise benötigt, übergeben:

```js
const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);
```

> [!NOTE]
> Die Konstruktor-Methode zur Erstellung von Knoten wird derzeit nicht von allen Browsern unterstützt. Die älteren Fabrikmethoden werden breiter unterstützt.

Hier reicht unser Bereich von -1 (ganz links) bis 1 (ganz rechts). Wieder verwenden wir ein Range-Eingabetyp, um diesen Parameter zu variieren:

```html
<input type="range" id="panner" min="-1" max="1" value="0" step="0.01" />
```

Wir verwenden die Werte aus diesem Input, um unsere Panner-Werte auf die gleiche Weise anzupassen wie zuvor:

```js
const pannerControl = document.querySelector("#panner");

pannerControl.addEventListener("input", () => {
  panner.pan.value = pannerControl.value;
});
```

Lassen Sie uns unseren Audiographen erneut anpassen, um alle Knoten miteinander zu verbinden:

```js
track.connect(gainNode).connect(panner).connect(audioContext.destination);
```

Das Einzige, was noch zu tun bleibt, ist die App auszuprobieren: [Sehen Sie sich das endgültige Demo hier live an](https://mdn.github.io/webaudio-examples/audio-basics/).

## Zusammenfassung

Großartig! Wir haben eine Boombox, die unser 'Band' abspielt, und wir können die Lautstärke und Stereoverteilung anpassen, was uns einen ziemlich einfachen, funktionierenden Audiographen gibt.

Dies bildet einige Grundlagen, die Sie benötigen, um Audio zu Ihrer Website oder Web-App hinzuzufügen. Es gibt viel mehr Funktionen in der Web Audio API, aber sobald Sie das Konzept der Knoten und das Zusammenstellen Ihres Audiographen verstanden haben, können wir uns komplexeren Funktionen zuwenden.

## Weitere Beispiele

Es gibt andere Beispiele, um mehr über die Web Audio API zu lernen.

Der [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) ist eine unterhaltsame Stimmmanipulation und Soundvisualisierungs-Web-App, die es Ihnen ermöglicht, verschiedene Effekte und Visualisierungen auszuwählen. Die Anwendung ist ziemlich rudimentär, zeigt jedoch die gleichzeitige Verwendung mehrerer Web Audio API Funktionen. ([Voice-change-O-matic live ausführen](https://mdn.github.io/webaudio-examples/voice-change-o-matic/)).

![Eine Benutzeroberfläche mit einer angezeigten Schallwelle und Optionen zur Auswahl von Stimmeffekten und Visualisierungen.](voice-change-o-matic.png)

Eine weitere speziell entwickelte Anwendung zur Demonstration der Web Audio API ist das [Violent Theremin](https://mdn.github.io/webaudio-examples/violent-theremin/), eine einfache Webanwendung, die es Ihnen ermöglicht, Tonhöhe und Lautstärke durch Bewegen Ihres Mauszeigers zu ändern. Es bietet auch eine psychedelische Lightshow ([siehe Violent Theremin Quellcode](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin)).

![Eine Seite voller Regenbogenfarben mit zwei Tasten mit Beschriftung Clear screen und mute.](violent-theremin.png)

Sehen Sie auch unser [webaudio-examples Repo](https://github.com/mdn/webaudio-examples) für weitere Beispiele.
