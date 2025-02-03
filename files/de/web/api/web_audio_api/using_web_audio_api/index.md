---
title: Verwendung der Web Audio API
slug: Web/API/Web_Audio_API/Using_Web_Audio_API
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{DefaultAPISidebar("Web Audio API")}}

Lassen Sie uns einen Blick darauf werfen, wie man mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API) beginnt. Wir werden kurz einige Konzepte betrachten und dann ein einfaches Boombox-Beispiel studieren, das es uns ermöglicht, eine Audiospur zu laden, abzuspielen und zu pausieren sowie die Lautstärke und das Stereo-Panning zu ändern.

Die Web Audio API ersetzt nicht das {{HTMLElement("audio")}}-Medienelement, sondern ergänzt es, genau wie {{HTMLElement("canvas")}} neben dem {{HTMLElement("img")}}-Element existiert. Ihr Anwendungsfall wird bestimmen, welche Werkzeuge Sie für die Implementierung von Audio verwenden. Wenn Sie die Wiedergabe einer Audiospur kontrollieren möchten, bietet das `<audio>`-Medienelement eine bessere, schnellere Lösung als die Web Audio API. Wenn Sie komplexere Audioverarbeitung sowie Wiedergabe durchführen möchten, bietet die Web Audio API wesentlich mehr Macht und Kontrolle.

Ein leistungsstarkes Merkmal der Web Audio API ist, dass sie keine strikte Begrenzung für "Soundaufrufe" hat. Zum Beispiel gibt es keine Obergrenze von 32 oder 64 gleichzeitigen Soundaufrufen. Einige Prozessoren können mehr als 1.000 gleichzeitige Sounds ohne Stottern abspielen.

## Beispielcode

Unsere Boombox sieht so aus:

![Eine Boombox mit Wiedergabe-, Panning- und Lautstärkereglern](boombox.png)

Beachten Sie das Retro-Kassettendeck mit einer Wiedergabetaste und Lautstärke- und Pan-Schiebereglern, um die Lautstärke und das Stereo-Panning zu ändern. Wir könnten es viel komplexer machen, aber das ist ideal für einfaches Lernen in diesem Stadium.

[Sehen Sie sich das endgültige Demo hier auf CodePen an](https://codepen.io/Rumyra/pen/qyMzqN/), oder sehen Sie sich den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/audio-basics) an.

## Audiografen

Alles innerhalb der Web Audio API basiert auf dem Konzept eines Audiografen, der aus Knoten besteht.

Die Web Audio API verarbeitet Audiooperationen innerhalb eines **Audiokontexts** und wurde entwickelt, um **modulares Routing** zu ermöglichen. Grundlegende Audiooperationen werden mit **Audioknoten** durchgeführt, die miteinander verbunden werden, um einen **Audio-Routing-Grafen** zu bilden. Sie haben Eingangsknoten, die die Quelle der Sounds sind, die Sie manipulieren, Modifikationsknoten, die diese Sounds nach Bedarf verändern, und Ausgangsknoten (Ziele), die es Ihnen ermöglichen, diese Sounds zu speichern oder zu hören.

Es werden mehrere Audioquellen mit unterschiedlichen Kanallayouts unterstützt, sogar innerhalb eines einzigen Kontexts. Aufgrund dieses modularen Designs können Sie komplexe Audiofunktionen mit dynamischen Effekten erstellen.

## Audiokontext

Um mit der Web Audio API etwas tun zu können, müssen wir eine Instanz des Audiokontexts erstellen. Dadurch erhalten wir Zugriff auf alle Funktionen der API.

```js
const audioContext = new AudioContext();
```

Was passiert, wenn wir das tun? Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) wird automatisch für uns erstellt und zu einem Online-Audiokontext erweitert. Das wollen wir, weil wir Live-Ton abspielen möchten.

> [!NOTE]
> Wenn Sie nur Audiodaten verarbeiten möchten, um sie beispielsweise zu puffern und zu streamen, jedoch nicht abzuspielen, könnten Sie in Betracht ziehen, einen [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) zu erstellen.

## Sound laden

Nun muss der erstellte Audiokontext einige Sounds erhalten, die durch ihn abgespielt werden können. Es gibt einige Möglichkeiten, dies mit der API zu tun. Beginnen wir mit einer einfachen Methode - da wir eine Boombox haben, möchten wir wahrscheinlich einen vollständigen Songtrack abspielen. Auch zur Verbesserung der Barrierefreiheit ist es schön, diesen Track im DOM verfügbar zu machen. Wir werden den Song auf der Seite mithilfe eines {{htmlelement("audio")}}-Elements verfügbar machen.

```html
<audio src="myCoolTrack.mp3"></audio>
```

> [!NOTE]
> Wenn die geladene Sounddatei auf einer anderen Domain liegt, müssen Sie das `crossorigin`-Attribut verwenden; siehe [Cross Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS) für weitere Informationen.

Um alle schönen Dinge nutzen zu können, die uns die Web Audio API bietet, müssen wir die Quelle von diesem Element nehmen und _in_ den von uns erstellten Kontext einleiten. Zum Glück gibt es eine Methode, die uns genau das ermöglicht — [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource):

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

> [!NOTE]
> Das oben gezeigte `<audio>`-Element wird im DOM durch ein Objekt des Typs [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) dargestellt, das über seine eigene Funktionalität verfügt. All dies bleibt intakt; wir ermöglichen lediglich, dass der Sound für die Web Audio API verfügbar ist.

## Sound steuern

Beim Abspielen von Sound im Web ist es wichtig, dem Benutzer die Kontrolle zu ermöglichen. Abhängig vom Anwendungsfall gibt es unzählige Optionen, aber wir werden die Möglichkeit bieten, den Sound abzuspielen/anzuhalten, die Lautstärke zu ändern und ihn von links nach rechts zu pannen.

Die programmatische Steuerung von Sound durch JavaScript-Code wird von den Autoplay-Richtlinien der Browser abgedeckt, da sie wahrscheinlich ohne die Erlaubnis des Benutzers blockiert werden (oder auf einer Erlaubnisliste). Autoplay-Richtlinien erfordern typischerweise entweder eine ausdrückliche Erlaubnis oder einen Benutzer-Engagement mit der Seite, bevor Skripte Audio abspielen können.

Diese speziellen Anforderungen sind im Wesentlichen vorhanden, weil unerwartete Geräusche lästig und aufdringlich sein können und Barrierefreiheitsprobleme verursachen können. Sie können mehr darüber in unserem Artikel [Autoplay Leitfaden für Medienelemente und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay) erfahren.

Da unsere Skripte Audio als Reaktion auf ein Benutzereingabeereignis abspielen (einen Klick auf eine Wiedergabetaste beispielsweise), sind wir gut aufgestellt und sollten keine Probleme durch Autoplay-Blockierung haben. Beginnen wir also mit unserer Wiedergabe- und Pausenfunktionalität. Wir haben eine Wiedergabetaste, die zu einer Pausetaste wechselt, wenn der Track abgespielt wird:

```html
<button data-playing="false" role="switch" aria-checked="false">
  <span>Play/Pause</span>
</button>
```

Bevor wir unseren Track abspielen können, müssen wir unser Audiograf von der Audioquelle/dem Eingabeknoten zum Ziel verbinden.

Wir haben bereits einen Eingabeknoten erstellt, indem wir unser Audioelement in die API gegeben haben. Im Allgemeinen müssen Sie keinen Ausgabeknoten erstellen, Sie können einfach Ihre anderen Knoten mit [`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination) verbinden, das die Situation für Sie regelt:

```js
track.connect(audioContext.destination);
```

Ein guter Weg, diese Knoten zu visualisieren, ist es, einen Audiografen zu zeichnen, damit Sie ihn visualisieren können. So sieht unser aktueller Audiograf aus:

![ein Audiograf mit einer Audioelementquelle, die mit dem Standardziel verbunden ist](graph1.jpg)

Nun können wir die Wiedergabe- und Pausenfunktionalität hinzufügen.

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

Wir müssen auch darüber nachdenken, was zu tun ist, wenn der Track zu Ende gespielt ist. Unser `HTMLMediaElement` löst ein `ended`-Ereignis aus, sobald es zu Ende gespielt ist, sodass wir darauf hören und entsprechend Code ausführen können:

```js
audioElement.addEventListener(
  "ended",
  () => {
    playButton.dataset.playing = "false";
  },
  false,
);
```

## Sound modifizieren

Lassen Sie uns einige grundlegende Modifikationsknoten ansehen, um den Sound zu ändern, den wir haben. Hier wird die Web Audio API wirklich nützlich. Zunächst ändern wir die Lautstärke. Dies kann mit einem [`GainNode`](/de/docs/Web/API/GainNode) durchgeführt werden, der darstellt, wie groß unsere Schallwelle ist.

Es gibt zwei Möglichkeiten, Knoten mit der Web Audio API zu erstellen. Sie können die Fabrikmethode auf dem Kontext selbst verwenden (z. B. `audioContext.createGain()`) oder über einen Konstruktor des Knotens (z. B. `new GainNode()`). Wir werden die Fabrikmethode in unserem Code verwenden:

```js
const gainNode = audioContext.createGain();
```

Nun müssen wir unseren Audiograf vom vorherigen Bild aktualisieren, sodass der Eingang mit dem Gain verbunden ist, dann der Gain-Knoten mit dem Ziel verbunden wird:

```js
track.connect(gainNode).connect(audioContext.destination);
```

Das wird unseren Audiografen so aussehen lassen:

![ein Audiograf mit einer Audioelementquelle, die mit einem Gain-Knoten verbunden ist, der die Audioquelle modifiziert, und dann zum Standardziel geht](graph2.jpg)

Der Standardwert für Gain ist 1; das hält die aktuelle Lautstärke gleich. Gain kann auf ein Minimum von etwa -3.4028235E38 und ein Maximum von etwa 3.4028235E38 gesetzt werden (Gleitkommazahlenbereich in JavaScript). Hier werden wir der Boombox erlauben, das Gain auf maximal 2 (doppelte Original-Lautstärke) zu erhöhen und auf 0 zu reduzieren (dies schaltet den Sound effektiv stumm).

Lassen Sie uns dem Benutzer die Möglichkeit geben, dies zu tun - wir verwenden ein [Bereicheingabe](/de/docs/Web/HTML/Element/input/range):

```html
<input type="range" id="volume" min="0" max="2" value="1" step="0.01" />
```

> [!NOTE]
> Bereicheingaben sind ein sehr praktischer Eingabetyp, um Werte auf Audioknoten zu aktualisieren. Sie können Wertebereiche angeben und diese direkt mit den Parametern des Audioknotens verwenden.

Also lassen Sie uns den Wert dieses Eingabeelements erfassen und den Gain-Wert aktualisieren, wenn der Eingabeknoten seinen Wert durch den Benutzer geändert hat:

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
> Die Werte von Knotenobjekten (z. B. `GainNode.gain`) sind keine einfachen Werte; sie sind tatsächlich Objekte des Typs [`AudioParam`](/de/docs/Web/API/AudioParam) - diese werden Parameter genannt. Aus diesem Grund müssen wir die Eigenschaft `value` von `GainNode.gain` setzen, anstatt den Wert direkt auf `gain` zu setzen. Dadurch sind sie viel flexibler und ermöglichen beispielsweise das Übergeben eines bestimmten Wertsatzes an den Parameter, der über einen bestimmten Zeitraum hinweg geändert werden soll.

Großartig, jetzt kann der Benutzer die Lautstärke des Tracks anpassen! Der Gain-Knoten ist der perfekte Knoten, den Sie verwenden sollten, wenn Sie eine Stummfunktion hinzufügen möchten.

## Stereo-Panning zu unserer Anwendung hinzufügen

Lassen Sie uns einen weiteren Modifikationsknoten hinzufügen, um das, was wir gerade gelernt haben, zu üben.

Es gibt einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)-Knoten, der das Gleichgewicht des Sounds zwischen den linken und rechten Lautsprechern verändert, wenn der Benutzer über stereophone Fähigkeiten verfügt.

> [!NOTE]
> Der `StereoPannerNode` ist für einfache Fälle gedacht, in denen Sie lediglich von links nach rechts pannen möchten.
> Es gibt auch einen [`PannerNode`](/de/docs/Web/API/PannerNode), der eine große Kontrolle über den 3D-Raum oder die Klang _Raumklanggebung_ bietet, um komplexere Effekte zu erzeugen.
> Dies wird in Spielen und 3D-Anwendungen verwendet, um beispielsweise Vögel zu simulieren, die über Kopf fliegen, oder Klang, der von hinten kommt.

Um es zu visualisieren, werden wir unseren Audiografen so aussehen lassen:

![Ein Bild des Audiografen, der einen Eingabeknoten, zwei Modifikationsknoten (einen Gain-Knoten und einen Stereo-Panner-Knoten) und einen Zielknoten zeigt.](graphpan.jpg)

Lassen Sie uns diesmal die Konstruktormethode zum Erstellen eines Knotens verwenden. Wenn wir es auf diese Weise tun, müssen wir den Kontext und alle Optionen übergeben, die der spezifische Knoten haben kann:

```js
const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);
```

> [!NOTE]
> Die Konstruktormethode zum Erstellen von Knoten wird derzeit nicht von allen Browsern unterstützt. Die älteren Fabrikmethoden werden breiter unterstützt.

Hier reicht unser Wertebereich von -1 (ganz links) bis 1 (ganz rechts). Verwenden wir wieder eine Range-Eingabetyp, um diesen Parameter zu variieren:

```html
<input type="range" id="panner" min="-1" max="1" value="0" step="0.01" />
```

Wir verwenden die Werte aus diesem Eingabeelement, um unsere Panning-Werte in gleicher Weise wie zuvor anzupassen:

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

Passen wir unseren Audiografen erneut an, um alle Knoten miteinander zu verbinden:

```js
track.connect(gainNode).connect(panner).connect(audioContext.destination);
```

Das Einzige, was noch zu tun ist, ist die App auszuprobieren: [Sehen Sie sich das endgültige Demo hier auf CodePen an](https://codepen.io/Rumyra/pen/qyMzqN/).

## Zusammenfassung

Großartig! Wir haben eine Boombox, die unser 'Tape' abspielt, und wir können die Lautstärke und das Stereo-Panning anpassen, was uns einen relativ einfachen funktionierenden Audiografen gibt.

Dies deckt ziemlich viele Grundlagen ab, die Sie benötigen würden, um Audio zu Ihrer Website oder Web-App hinzuzufügen. Es gibt viel mehr Funktionen in der Web Audio API, aber sobald Sie das Konzept der Knoten verstanden und Ihren Audiografen zusammengesetzt haben, können Sie sich komplexere Funktionen ansehen.

## Weitere Beispiele

Es gibt weitere Beispiele, um mehr über die Web Audio API zu lernen.

Der [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) ist ein unterhaltsamer Stimmmanipulator und eine Sound-Visualisierungs-Web-App, die es Ihnen ermöglicht, verschiedene Effekte und Visualisierungen auszuwählen. Die Anwendung ist ziemlich rudimentär, aber sie demonstriert die gleichzeitige Nutzung mehrerer Web Audio API-Funktionen. ([Führen Sie den Voice-change-O-matic live aus](https://mdn.github.io/webaudio-examples/voice-change-o-matic/)).

![Eine Benutzeroberfläche mit einer angezeigten Schallwelle und Optionen zur Auswahl von Stimmeffekten und Visualisierungen.](voice-change-o-matic.png)

Eine weitere Anwendung, die speziell entwickelt wurde, um die Web Audio API zu demonstrieren, ist das [Violent Theremin](https://mdn.github.io/webaudio-examples/violent-theremin/), eine einfache Webanwendung, mit der Sie Tonhöhe und Lautstärke ändern können, indem Sie Ihren Mauszeiger bewegen. Es bietet auch eine psychedelische Lichtshow ([siehe den Violent Theremin-Quellcode](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin)).

![Eine Seite voller Regenbogenfarben, mit zwei Schaltflächen, die als Bildschirm löschen und stumm beschriftet sind.](violent-theremin.png)

Siehe auch unser [webaudio-examples Repo](https://github.com/mdn/webaudio-examples) für weitere Beispiele.
