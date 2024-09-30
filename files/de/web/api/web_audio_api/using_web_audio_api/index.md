---
title: Verwendung der Web Audio API
slug: Web/API/Web_Audio_API/Using_Web_Audio_API
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("Web Audio API")}}

Lassen Sie uns einen Blick darauf werfen, wie man mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API) anfängt. Wir werden kurz einige Konzepte betrachten und dann ein einfaches Boombox-Beispiel studieren, das es uns ermöglicht, einen Audiotrack zu laden, ihn abzuspielen und zu pausieren sowie Lautstärke und Stereo-Panning zu ändern.

Die Web Audio API ersetzt nicht das {{HTMLElement("audio")}}-Medienelement, sondern ergänzt es, genau wie {{HTMLElement("canvas")}} neben dem {{HTMLElement("img")}}-Element koexistiert. Ihr Anwendungsfall wird bestimmen, welche Werkzeuge Sie zur Implementierung von Audio verwenden. Wenn Sie die Wiedergabe eines Audiotracks steuern möchten, bietet das `<audio>`-Medienelement eine bessere, schnellere Lösung als die Web Audio API. Wenn Sie komplexere Audiobearbeitungen zusammen mit der Wiedergabe durchführen möchten, bietet die Web Audio API viel mehr Leistung und Kontrolle.

Ein leistungsstarkes Merkmal der Web Audio API ist, dass sie keine strikte "Soundaufrufbegrenzung" hat. So gibt es beispielsweise keine Obergrenze von 32 oder 64 Soundaufrufen gleichzeitig. Einige Prozessoren können mehr als 1.000 gleichzeitige Sounds ohne Stottern abspielen.

## Beispielcode

Unsere Boombox sieht so aus:

![Eine Boombox mit Steuerungen für Abspielen, Panning und Lautstärke](boombox.png)

Beachten Sie das Retro-Kassettenlaufwerk mit einem Wiedergabeknopf sowie Lautstärke- und Panning-Regler, die es Ihnen ermöglichen, Lautstärke und Stereo-Panning zu ändern. Wir könnten dies viel komplexer gestalten, aber dies ist ideal für einfaches Lernen in dieser Phase.

[Schauen Sie sich das endgültige Demo hier auf Codepen an](https://codepen.io/Rumyra/pen/qyMzqN/), oder sehen Sie sich den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/audio-basics) an.

## Audiografen

Alles innerhalb der Web Audio API basiert auf dem Konzept eines Audiografen, der aus Knoten besteht.

Die Web Audio API führt Audio-Operationen innerhalb eines **Audio-Kontextes** aus und wurde entwickelt, um **modulares Routing** zu ermöglichen. Grundlegende Audio-Operationen werden mit **Audio-Knoten** durchgeführt, die miteinander verbunden sind, um einen **Audio-Routing-Grafen** zu bilden. Sie haben Eingangsknoten, die die Quelle der Klänge sind, die Sie bearbeiten, Änderungsknoten, die diese Klänge nach Wunsch verändern, und Ausgangsknoten (Ziele), die es Ihnen ermöglichen, diese Klänge zu speichern oder zu hören.

Es werden mehrere Audioquellen mit unterschiedlichen Kanal-Layouts unterstützt, auch innerhalb eines einzelnen Kontextes. Aufgrund dieses modularen Designs können Sie komplexe Audiofunktionen mit dynamischen Effekten erstellen.

## Audio-Kontext

Um mit der Web Audio API irgendetwas tun zu können, müssen wir eine Instanz des Audio-Kontextes erstellen. Dies gibt uns dann Zugriff auf alle Funktionen und Eigenschaften der API.

```js
const audioContext = new AudioContext();
```

Was passiert also, wenn wir dies tun? Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) wird automatisch für uns erstellt und zu einem Online-Audio-Kontext erweitert. Dies wollen wir, weil wir live Klang abspielen möchten.

> [!NOTE]
> Wenn Sie nur Audiodaten verarbeiten wollen, z.B. Puffern und Streamen, ohne sie abzuspielen, sollten Sie erwägen, einen [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) zu erstellen.

## Laden von Sounds

Jetzt benötigt der von uns erstellte Audio-Kontext einige Sounds, um sie durch ihn abzuspielen. Es gibt einige Möglichkeiten, dies mit der API zu tun. Beginnen wir mit einer einfachen Methode — da wir eine Boombox haben, möchten wir höchstwahrscheinlich einen vollständigen Song abspielen. Außerdem ist es für die Barrierefreiheit schön, diesen Track im DOM verfügbar zu machen. Wir werden den Song auf der Seite mit einem {{htmlelement("audio")}}-Element sichtbar machen.

```html
<audio src="myCoolTrack.mp3"></audio>
```

> [!NOTE]
> Wenn die Sounddatei, die Sie laden, in einer anderen Domain gehalten wird, müssen Sie das `crossorigin`-Attribut verwenden; siehe [Cross Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS) für weitere Informationen.

Um all die schönen Dinge verwenden zu können, die wir mit der Web Audio API erhalten, müssen wir die Quelle aus diesem Element entnehmen und in den von uns erstellten Kontext _einbinden_. Glücklicherweise gibt es eine Methode, die es uns ermöglicht, genau das zu tun — [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource):

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

> [!NOTE]
> Das `<audio>`-Element oben ist im DOM durch ein Objekt vom Typ [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) dargestellt, das mit eigenen Funktionalitäten ausgestattet ist. All dies bleibt intakt; wir machen den Sound lediglich in der Web Audio API verfügbar.

## Steuerung von Sound

Beim Abspielen von Sound im Web ist es wichtig, dem Benutzer die Kontrolle zu ermöglichen. Abhängig vom Anwendungsfall gibt es eine Vielzahl von Optionen, aber wir werden die Funktionalität zum Abspielen/Pausieren des Sounds, zur Änderung der Lautstärke und zum Panning von links nach rechts bereitstellen.

Die Steuerung von Sound programmgesteuert durch JavaScript-Code wird durch die Richtlinien zur Autoplay-Unterstützung der Browser abgedeckt, daher ist es wahrscheinlich, dass sie blockiert wird, solange keine Erlaubnis vom Benutzer gewährt wurde (oder es eine Positivliste gibt). Autoplay-Richtlinien erfordern typischerweise entweder eine ausdrückliche Erlaubnis oder eine Benutzerinteraktion mit der Seite, bevor Skripte das Abspielen von Audio auslösen können.

Diese besonderen Anforderungen bestehen im Wesentlichen, weil unerwartete Sounds unangenehm und aufdringlich sein können und Barrierefreiheitsprobleme verursachen können. Weitere Informationen hierzu finden Sie in unserem Artikel [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide).

Da unsere Skripte Audio als Reaktion auf ein Benutzereingabeereignis abspielen (zum Beispiel einem Klick auf einen Wiedergabeknopf), sind wir gut aufgestellt und sollten keine Probleme durch Autoplay-Blockierungen haben. Also, lassen Sie uns mit unserer Abspiel- und Pausen-Funktionalität beginnen. Wir haben einen Wiedergabeknopf, der sich in einen Pausenknopf verwandelt, sobald der Track läuft:

```html
<button data-playing="false" role="switch" aria-checked="false">
  <span>Play/Pause</span>
</button>
```

Bevor wir unseren Track abspielen können, müssen wir unseren Audiografen vom Audioquellen-/Eingabeknoten zum Ziel verbinden.

Wir haben bereits einen Eingabeknoten erstellt, indem wir unser Audioelement in die API eingebunden haben. Meistens brauchen Sie keinen Ausgabeknoten zu erstellen; Sie können einfach Ihre anderen Knoten mit [`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination) verbinden, was die Situation für Sie handhabt:

```js
track.connect(audioContext.destination);
```

Ein guter Weg, diese Knoten zu visualisieren, ist, einen Audiografen zu zeichnen, so dass man ein Bild davon bekommt. Dies ist unser aktueller Audiograf:

![ein Audiograf mit einer Audioelementquelle, die mit dem Standardziel verbunden ist](graph1.jpg)

Nun können wir die Abspiel- und Pausenfunktionalität hinzufügen.

```js
// Select our play button
const playButton = document.querySelector("button");

playButton.addEventListener(
  "click",
  () => {
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
  },
  false,
);
```

Wir müssen auch berücksichtigen, was zu tun ist, wenn der Track das Abspielen beendet. Unser `HTMLMediaElement` löst ein `ended`-Ereignis aus, sobald es mit dem Abspielen fertig ist, so dass wir darauf hören und entsprechend Code ausführen können:

```js
audioElement.addEventListener(
  "ended",
  () => {
    playButton.dataset.playing = "false";
  },
  false,
);
```

## Veränderung von Sound

Lassen Sie uns in einige grundlegende Änderungsknoten eintauchen, um den Klang zu verändern, den wir haben. Hier beginnt die Web Audio API wirklich nützlich zu werden. Zunächst ändern wir die Lautstärke. Dies kann mit einem [`GainNode`](/de/docs/Web/API/GainNode) gemacht werden, der repräsentiert, wie groß unsere Schallwelle ist.

Es gibt zwei Möglichkeiten, Knoten mit der Web Audio API zu erstellen. Sie können die Fabrikmethode im Kontext selbst verwenden (z.B. `audioContext.createGain()`) oder über einen Konstruktor des Knotens (z.B. `new GainNode()`). Wir werden die Fabrikmethode in unserem Code verwenden:

```js
const gainNode = audioContext.createGain();
```

Nun müssen wir unseren Audiografen von vorhin aktualisieren, damit der Eingang mit dem Gain verbunden ist, dann der Gain-Knoten mit dem Ziel verbunden ist:

```js
track.connect(gainNode).connect(audioContext.destination);
```

Dies lässt unseren Audiografen so aussehen:

![ein Audiograf mit einer Audioelementquelle, die mit einem Gain-Knoten verbunden ist, der die Audioquelle verändert, und dann zum Standardziel geht](graph2.jpg)

Der Standardwert für Gain ist 1; dies hält die aktuelle Lautstärke gleich. Gain kann auf ein Minimum von etwa -3.4028235E38 und ein Maximum von etwa 3.4028235E38 (Gleitkommazahlenbereich in JavaScript) gesetzt werden. Hier erlauben wir der Boombox, den Gain bis auf 2 (doppelte Original-Lautstärke) und bis auf 0 zu bewegen (das wird unseren Sound effektiv stummschalten).

Lassen Sie uns dem Benutzer die Möglichkeit geben, dies zu tun — wir verwenden einen [Bereichs-Input](/de/docs/Web/HTML/Element/input/range):

```html
<input type="range" id="volume" min="0" max="2" value="1" step="0.01" />
```

> [!NOTE]
> Bereichs-Inputs sind ein wirklich praktischer Eingabetyp zum Aktualisieren von Werten auf Audio-Knoten. Sie können die Werte eines Bereichs angeben und sie direkt mit den Parametern des Audio-Knotens verwenden.

Lassen Sie uns diesen Eingabewert erfassen und den Gain-Wert aktualisieren, wenn der Eingabeknoten vom Benutzer geändert wird:

```js
const volumeControl = document.querySelector("#volume");

volumeControl.addEventListener(
  "input",
  () => {
    gainNode.gain.value = volumeControl.value;
  },
  false,
);
```

> [!NOTE]
> Die Werte von Knotenobjekten (z.B. `GainNode.gain`) sind keine einfachen Werte; sie sind tatsächlich Objekte vom Typ [`AudioParam`](/de/docs/Web/API/AudioParam) — diese werden Parameter genannt. Deshalb müssen wir `GainNode.gain`s `value`-Eigenschaft setzen, anstatt den Wert direkt auf `gain` zu setzen. Das ermöglicht es ihnen, viel flexibler zu sein, indem sie zum Beispiel eine spezifische Menge von Werten über einen festgelegten Zeitraum ändernd zu übergeben.

Großartig, jetzt kann der Benutzer die Lautstärke des Tracks aktualisieren! Der Gain-Knoten ist der perfekte Knoten, wenn Sie Stummschaltfunktionen hinzufügen möchten.

## Stereo-Panning zu unserer App hinzufügen

Lassen Sie uns einen weiteren Änderungsknoten hinzufügen, um das, was wir gerade gelernt haben, zu üben.

Es gibt einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)-Knoten, der das Gleichgewicht des Klangs zwischen den linken und rechten Lautsprechern ändert, wenn der Benutzer Stereo-Fähigkeiten hat.

> [!NOTE]
> Der `StereoPannerNode` ist für einfache Fälle, in denen Sie nur Stereo-Panning von links nach rechts möchten.
> Es gibt auch einen [`PannerNode`](/de/docs/Web/API/PannerNode), der eine große Menge Kontrolle über den 3D-Raum oder Sound-_Spatialization_ ermöglicht, um komplexere Effekte zu erstellen.
> Dies wird in Spielen und 3D-Anwendungen verwendet, um beispielsweise Vögel die über Kopf fliegen zu erstellen, oder Sound, der von hinten kommt.

Um dies zu visualisieren, werden wir unseren Audiografen nun so aussehen lassen:

![Ein Bild des Audiografen, das einen Eingabeknoten, zwei Änderungsknoten (einen Gain-Node und einen Stereo-Panner-Node) und einen Zielknoten zeigt.](graphpan.jpg)

Lassen Sie uns diesmal die Knoten-Erstellung mit der Konstruktor-Methode verwenden. Wenn wir es auf diese Weise tun, müssen wir den Kontext und alle Optionen, die der spezifische Knoten erfordern kann, übergeben:

```js
const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);
```

> [!NOTE]
> Die Konstruktor-Methode zur Erstellung von Knoten wird derzeit nicht von allen Browsern unterstützt. Die älteren Fabrikmethoden werden breiter unterstützt.

Hier reichen unsere Werte von -1 (ganz links) bis 1 (ganz rechts). Erneut verwenden wir einen Bereichstyp-Input, um diesen Parameter zu variieren:

```html
<input type="range" id="panner" min="-1" max="1" value="0" step="0.01" />
```

Wir verwenden die Werte aus diesem Input, um unsere Panner-Werte auf die gleiche Weise anzupassen, wie wir es zuvor getan haben:

```js
const pannerControl = document.querySelector("#panner");

pannerControl.addEventListener(
  "input",
  () => {
    panner.pan.value = pannerControl.value;
  },
  false,
);
```

Lassen Sie uns unseren Audiografen erneut anpassen, um alle Knoten zu verbinden:

```js
track.connect(gainNode).connect(panner).connect(audioContext.destination);
```

Das Einzige, was noch zu tun bleibt, ist die App auszuprobieren: [Schauen Sie sich das endgültige Demo hier auf Codepen an](https://codepen.io/Rumyra/pen/qyMzqN/).

## Zusammenfassung

Großartig! Wir haben eine Boombox, die unser 'Tape' abspielt, und wir können die Lautstärke und das Stereo-Panning anpassen, was uns ein ziemlich grundlegendes funktionierendes Audiograf liefert.

Dies umfasst eine ganze Menge Grundlagen, die Sie benötigen würden, um Audio zu Ihrer Website oder Web-App hinzuzufügen. Die Web Audio API bietet noch viel mehr Funktionalität, aber wenn Sie das Konzept von Knoten verstehen und Ihren Audiografen zusammenstellen können, können wir uns auf die Betrachtung komplexerer Funktionalitäten konzentrieren.

## Weitere Beispiele

Es gibt andere Beispiele, um mehr über die Web Audio API zu lernen.

Das [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) ist ein unterhaltsamer Stimmenmanipulator und eine Sound-Visualisierungs-Web-App, die es Ihnen ermöglicht, verschiedene Effekte und Visualisierungen auszuwählen. Die Anwendung ist ziemlich rudimentär, zeigt aber die gleichzeitige Verwendung mehrerer Funktionen der Web Audio API. ([Führen Sie das Voice-change-O-matic live aus](https://mdn.github.io/webaudio-examples/voice-change-o-matic/)).

![Eine Benutzeroberfläche mit einer angezeigten Schallwelle und Optionen zur Auswahl von Stimm-Effekten und Visualisierungen.](voice-change-o-matic.png)

Eine weitere Anwendung, die speziell zur Demonstration der Web Audio API entwickelt wurde, ist das [Violent Theremin](https://mdn.github.io/webaudio-examples/violent-theremin/), eine einfache Web-Anwendung, die es Ihnen ermöglicht, Tonhöhe und Lautstärke durch Bewegen Ihrer Mauszeigers zu ändern. Es bietet auch eine psychedelische Lichtshow ([sehen Sie sich den Quellcode von Violent Theremin an](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin)).

![Eine Seite voller Regenbogenfarben, mit zwei Tasten, die Clear screen und mute beschriftet sind.](violent-theremin.png)

Sehen Sie sich auch unser [webaudio-examples repo](https://github.com/mdn/webaudio-examples) für weitere Beispiele an.
