---
title: Verwendung der Web Audio API
slug: Web/API/Web_Audio_API/Using_Web_Audio_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Web Audio API")}}

Lassen Sie uns einen Blick darauf werfen, wie man mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API) beginnt. Wir werden kurz einige Konzepte betrachten und dann ein einfaches Boombox-Beispiel studieren, das es uns ermöglicht, einen Audiotrack zu laden, abzuspielen und zu pausieren sowie die Lautstärke und das Stereo-Panning zu ändern.

Die Web Audio API ersetzt nicht das {{HTMLElement("audio")}}-Medienelement, sondern ergänzt es, genauso wie {{HTMLElement("canvas")}} in Verbindung mit dem {{HTMLElement("img")}}-Element existiert. Ihr Anwendungsfall bestimmt, welche Werkzeuge Sie zur Implementierung von Audio verwenden. Wenn Sie die Wiedergabe eines Audiotracks steuern möchten, bietet das `<audio>`-Medienelement eine bessere, schnellere Lösung als die Web Audio API. Wenn Sie komplexere Audiobearbeitung sowie Wiedergabe durchführen möchten, bietet die Web Audio API wesentlich mehr Leistung und Kontrolle.

Ein leistungsstarkes Merkmal der Web Audio API ist, dass es keine strikte "Soundaufrufbegrenzung" gibt. Zum Beispiel gibt es keine Begrenzung auf 32 oder 64 Soundaufrufe gleichzeitig. Einige Prozessoren können mehr als 1.000 gleichzeitige Klänge ohne Stottern wiedergeben.

## Beispielcode

Unsere Boombox sieht so aus:

![Ein Boombox mit Wiedergabe-, Pan- und Lautstärkereglern](boombox.png)

Beachten Sie das Retro-Kassettendeck mit einem Wiedergabeknopf sowie Lautstärke- und Pan-Schiebereglern, mit denen Sie die Lautstärke und das Stereo-Panning ändern können. Wir könnten dies viel komplexer gestalten, aber dies ist ideal zum einfachen Lernen in dieser Phase.

[Schauen Sie sich das endgültige Demo hier auf CodePen an](https://codepen.io/Rumyra/pen/qyMzqN/), oder sehen Sie sich den [Quellcode auf GitHub an](https://github.com/mdn/webaudio-examples/tree/main/audio-basics).

## Audiographen

Alles innerhalb der Web Audio API basiert auf dem Konzept eines Audiographen, der aus Knoten besteht.

Die Web Audio API bearbeitet Audio-Operationen innerhalb eines **Audio-Kontexts** und wurde entwickelt, um **modulares Routing** zu ermöglichen. Grundlegende Audio-Operationen werden mit **Audioknoten** durchgeführt, die miteinander verbunden werden, um einen **Audio-Routing-Graphen** zu bilden. Sie haben Eingangsknoten, die die Quelle der Klänge sind, die Sie manipulieren, Modifikationsknoten, die diese Klänge nach Wunsch ändern, und Ausgangsknoten (Ziele), die es Ihnen ermöglichen, diese Klänge zu speichern oder zu hören.

Mehrere Audioquellen mit unterschiedlichen Kanal-Layouts werden unterstützt, sogar innerhalb eines einzelnen Kontexts. Aufgrund dieses modularen Designs können Sie komplexe Audiofunktionen mit dynamischen Effekten erstellen.

## Audiokontext

Um mit der Web Audio API etwas machen zu können, müssen wir eine Instanz des Audiokontexts erstellen. Dies gibt uns dann Zugriff auf alle Funktionen und Funktionalitäten der API.

```js
const audioContext = new AudioContext();
```

Was passiert, wenn wir dies tun? Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) wird automatisch für uns erstellt und zu einem Online-Audio-Kontext erweitert. Wir wollen dies, da wir darauf abzielen, Live-Sound abzuspielen.

> [!NOTE]
> Wenn Sie nur Audiodaten verarbeiten möchten, zum Beispiel puffern und streamen, aber nicht abspielen, möchten Sie möglicherweise einen [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) erstellen.

## Laden von Sound

Nun, der von uns erstellte Audiokontext benötigt einige Klänge, um sie abzuspielen. Es gibt einige Möglichkeiten, dies mit der API zu tun. Beginnen wir mit einer einfachen Methode — da wir eine Boombox haben, möchten wir höchstwahrscheinlich einen vollständigen Songtrack abspielen. Auch für die Barrierefreiheit ist es schön, diesen Track im DOM verfügbar zu machen. Wir werden den Song auf der Seite mit einem {{htmlelement("audio")}}-Element verfügbar machen.

```html
<audio src="myCoolTrack.mp3"></audio>
```

> [!NOTE]
> Wenn die Audiodatei, die Sie laden, auf einer anderen Domain gehalten wird, müssen Sie das `crossorigin`-Attribut verwenden; siehe [Cross Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) für weitere Informationen.

Um all die schönen Dinge zu nutzen, die wir mit der Web Audio API erhalten, müssen wir die Quelle aus diesem Element holen und in den von uns erstellten Kontext „pipe“. Glücklicherweise gibt es eine Methode, die es uns ermöglicht, genau das zu tun — [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource):

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

> [!NOTE]
> Das oben genannte `<audio>`-Element wird im DOM durch ein Objekt vom Typ [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) dargestellt, das mit einem eigenen Funktionsumfang ausgestattet ist. All dies bleibt intakt; wir ermöglichen lediglich, dass der Sound für die Web Audio API verfügbar ist.

## Steuerung des Sounds

Beim Abspielen von Sound im Web ist es wichtig, dem Benutzer die Kontrolle zu ermöglichen. Abhängig vom Anwendungsfall gibt es eine Vielzahl von Optionen, aber wir werden Funktionalitäten bereitstellen, um den Sound abzuspielen/zu pausieren, die Lautstärke des Tracks zu ändern und ihn von links nach rechts zu pannen.

Das programmatische Steuern von Sound mittels JavaScript-Code wird von den Autoplay-Richtlinien der Browser abgedeckt und wird daher wahrscheinlich ohne erteilte Erlaubnis vom Benutzer (oder einer Whitelist) blockiert. Autoplay-Richtlinien erfordern typischerweise entweder eine ausdrückliche Genehmigung oder ein Benutzerengagement mit der Seite, bevor Skripte die Wiedergabe von Audio auslösen können.

Diese speziellen Anforderungen bestehen im Wesentlichen, weil unerwartete Geräusche störend und eindringlich sein können und Barrierefreiheitsprobleme verursachen können. Mehr darüber erfahren Sie in unserem Artikel [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay).

Da unsere Skripte Audio als Reaktion auf ein Benutzer-Ereignis (z. B. ein Klick auf eine Wiedergabe-Schaltfläche) abspielen, sind wir in guter Form und sollten keine Probleme mit dem Autoplay-Blocker haben. Lassen Sie uns also mit Blick auf unsere Play- und Pause-Funktionalität beginnen. Wir haben eine Wiedergabe-Schaltfläche, die sich zu einer Pause-Schaltfläche ändert, wenn der Track abgespielt wird:

```html
<button data-playing="false" role="switch" aria-checked="false">
  <span>Play/Pause</span>
</button>
```

Bevor wir unseren Track abspielen können, müssen wir unseren Audiographen vom Audio-Quellen-/Eingabeknoten mit dem Ziel verbinden.

Wir haben bereits einen Eingabeknoten erstellt, indem wir unser Audio-Element in die API übergeben haben. Für die meisten Fälle müssen Sie keinen Ausgabeknoten erstellen, sondern können Ihre anderen Knoten einfach mit [`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination) verbinden, die die Situation für Sie übernimmt:

```js
track.connect(audioContext.destination);
```

Eine gute Möglichkeit, diese Knoten zu visualisieren, besteht darin, einen Audiographen zu zeichnen, damit Sie ihn visualisieren können. So sieht unser aktueller Audiograph aus:

![ein Audiograph mit einer Audioelementquelle, die mit dem Standardziel verbunden ist](graph1.jpg)

Jetzt können wir die Play- und Pause-Funktionalität hinzufügen.

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

Wir müssen auch berücksichtigen, was zu tun ist, wenn der Track die Wiedergabe beendet hat. Unser `HTMLMediaElement` löst ein `ended`-Ereignis aus, wenn es die Wiedergabe beendet hat, sodass wir darauf hören und den entsprechenden Code ausführen können:

```js
audioElement.addEventListener(
  "ended",
  () => {
    playButton.dataset.playing = "false";
  },
  false,
);
```

## Modifizieren von Sound

Lassen Sie uns in einige grundlegende Modifikationsknoten eintauchen, um den Klang, den wir haben, zu ändern. Hier kommt die Web Audio API wirklich zum Tragen. Zunächst ändern wir die Lautstärke. Dies kann mit einem [`GainNode`](/de/docs/Web/API/GainNode) erreicht werden, der darstellt, wie groß unsere Schallwelle ist.

Es gibt zwei Möglichkeiten, Knoten mit der Web Audio API zu erstellen. Sie können die Fabrikmethode auf dem Kontext selbst verwenden (z.B. `audioContext.createGain()`) oder über einen Konstruktor des Knotens (z.B. `new GainNode()`). Wir verwenden die Fabrikmethode in unserem Code:

```js
const gainNode = audioContext.createGain();
```

Jetzt müssen wir unseren vorherigen Audiographen aktualisieren, sodass der Eingang mit dem Gain verbunden ist und dann der Gain-Knoten mit dem Ziel verbunden ist:

```js
track.connect(gainNode).connect(audioContext.destination);
```

Dies wird unseren Audiographen so aussehen lassen:

![ein Audiograph mit einer Audioelementquelle, verbunden mit einem Gain-Knoten, der die Audioquelle modifiziert, und dann zum Standardziel geht](graph2.jpg)

Der Standardwert für Gain ist 1; dies hält die aktuelle Lautstärke gleich. Gain kann auf ein Minimum von etwa -3.4028235E38 und ein Maximum von etwa 3.4028235E38 (Float-Zahlenbereich in JavaScript) gesetzt werden. Hier erlauben wir der Boombox, den Gain auf bis zu 2 (doppelte Lautstärke) und bis zu 0 (dies wird unseren Sound effektiv stummschalten) zu verändern.

Lassen Sie uns dem Benutzer die Kontrolle darüber geben — wir verwenden ein [Bereichselement](/de/docs/Web/HTML/Element/input/range):

```html
<input type="range" id="volume" min="0" max="2" value="1" step="0.01" />
```

> [!NOTE]
> Bereichseingaben sind ein wirklich praktischer Eingabetyp, um Werte auf Audioknoten zu aktualisieren. Sie können die Werte eines Bereichs angeben und direkt mit den Parametern des Audioknotens verwenden.

Lassen Sie uns den Wert dieser Eingabe erfassen und den Gain-Wert aktualisieren, wenn der Eingabeknoten von den Benutzern geändert wird:

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
> Die Werte von Knotenobjekten (z.B. `GainNode.gain`) sind keine einfachen Werte; sie sind tatsächlich Objekte vom Typ [`AudioParam`](/de/docs/Web/API/AudioParam) — diese werden Parameter genannt. Deshalb müssen wir die `value`-Eigenschaft von `GainNode.gain` setzen, anstatt den Wert direkt auf `gain` zu setzen. Dies ermöglicht ihnen viel mehr Flexibilität, z.B. das Übergeben einer bestimmten Menge an Werten, um zwischen ihnen über einen bestimmten Zeitraum zu wechseln.

Großartig, jetzt kann der Benutzer die Lautstärke des Tracks aktualisieren! Der Gain-Knoten ist der perfekte Knoten, wenn Sie eine Stumm-Schaltfunktion hinzufügen möchten.

## Stereo-Panning zu unserer App hinzufügen

Lassen Sie uns einen weiteren Modifikationsknoten hinzufügen, um zu üben, was wir gerade gelernt haben.

Es gibt einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)-Knoten, der das Gleichgewicht des Sounds zwischen den linken und rechten Lautsprechern ändert, sofern der Benutzer Stereo-Fähigkeiten hat.

> [!NOTE]
> Der `StereoPannerNode` ist für einfache Fälle gedacht, in denen Sie nur Stereo-Panning von links nach rechts wünschen.
> Es gibt auch einen [`PannerNode`](/de/docs/Web/API/PannerNode), der deutlich mehr Kontrolle über den 3D-Raum oder die Klangspatialisation erlaubt, um komplexere Effekte zu erzielen.
> Dies wird in Spielen und 3D-Apps verwendet, um beispielsweise Vögel über den Köpfen fliegen zu lassen oder Geräusche von hinten zu erzeugen.

Um es zu visualisieren, werden wir unseren Audiographen so aussehen lassen:

![Ein Bild zeigt den Audiographen mit einem Eingabeknoten, zwei Modifikationsknoten (ein Gain-Knoten und ein Stereo-Panner-Knoten) und einem Zielknoten.](graphpan.jpg)

Lassen Sie uns dieses Mal die Konstruktormethode zur Erstellung eines Knotens verwenden. Wenn wir es auf diese Weise tun, müssen wir den Kontext und alle Optionen, die der jeweilige Knoten möglicherweise benötigt, übergeben:

```js
const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);
```

> [!NOTE]
> Die Konstruktormethode zur Erstellung von Knoten wird derzeit nicht von allen Browsern unterstützt. Die älteren Fabrikmethoden sind breiter unterstützt.

Hier reichen unsere Werte von -1 (ganz links) bis 1 (ganz rechts). Lassen Sie uns erneut einen Bereichseingabetyp verwenden, um diesen Parameter zu variieren:

```html
<input type="range" id="panner" min="-1" max="1" value="0" step="0.01" />
```

Wir verwenden die Werte aus diesem Eingabefeld, um unsere Panner-Werte auf die gleiche Weise wie zuvor anzupassen:

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

Passen wir unseren Audiographen erneut an, um alle Knoten miteinander zu verbinden:

```js
track.connect(gainNode).connect(panner).connect(audioContext.destination);
```

Das einzige, was noch zu tun bleibt, ist die App auszuprobieren: [Schauen Sie sich das endgültige Demo hier auf CodePen an](https://codepen.io/Rumyra/pen/qyMzqN/).

## Zusammenfassung

Großartig! Wir haben eine Boombox, die unser 'Tape' abspielt, und wir können die Lautstärke und das Stereo-Panning anpassen, was uns einen ziemlich einfachen funktionierenden Audiographen gibt.

Dies macht viele Grundlagen aus, die Sie benötigen würden, um Audio zu Ihrer Website oder Web-App hinzuzufügen. Die Web Audio API bietet noch viel mehr Funktionalität, aber sobald Sie das Konzept der Knoten verstanden und Ihren Audiographen zusammengestellt haben, können wir uns mit komplexeren Funktionen befassen.

## Mehr Beispiele

Es gibt weitere Beispiele, um mehr über die Web Audio API zu lernen.

Der [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) ist eine lustige Sprachmanipulations- und Klangvisualisierungs-Web-App, die es Ihnen ermöglicht, verschiedene Effekte und Visualisierungen auszuwählen. Die Anwendung ist ziemlich rudimentär, zeigt aber die gleichzeitige Nutzung mehrerer Web Audio API-Funktionen. ([führe den Voice-change-O-matic live aus](https://mdn.github.io/webaudio-examples/voice-change-o-matic/)).

![Eine Benutzeroberfläche, die eine Schallwelle zeigt, und Optionen zum Auswählen von Stimmeffekten und Visualisierungen.](voice-change-o-matic.png)

Eine andere Anwendung, die speziell entwickelt wurde, um die Web Audio API zu demonstrieren, ist das [Violent Theremin](https://mdn.github.io/webaudio-examples/violent-theremin/), eine einfache Webanwendung, die es Ihnen ermöglicht, Tonhöhe und Lautstärke durch Bewegen des Mauszeigers zu ändern. Es bietet auch eine psychedelische Lichtshow ([siehe Violent Theremin-Quellcode](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin)).

![Eine Seite voller Regenbogenfarben mit zwei Schaltflächen, die als Clear screen und mute beschriftet sind.](violent-theremin.png)

Siehe auch unser [webaudio-examples Repo](https://github.com/mdn/webaudio-examples) für weitere Beispiele.
