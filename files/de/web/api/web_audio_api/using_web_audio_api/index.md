---
title: Verwendung der Web Audio API
slug: Web/API/Web_Audio_API/Using_Web_Audio_API
l10n:
  sourceCommit: 4ac938c14e06a9cf0e322fc614576f0f9819e674
---

{{DefaultAPISidebar("Web Audio API")}}

Schauen wir uns an, wie man mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API) beginnt. Wir werden kurz einige Konzepte betrachten und dann ein einfaches Boombox-Beispiel untersuchen, das es uns ermöglicht, einen Audiotrack zu laden, abzuspielen und zu pausieren sowie die Lautstärke und das Stereo-Panning zu ändern.

Die Web Audio API ersetzt nicht das {{HTMLElement("audio")}}-Medienelement, sondern ergänzt es, ähnlich wie {{HTMLElement("canvas")}} neben dem {{HTMLElement("img")}}-Element existiert. Ihr Anwendungsfall wird entscheiden, welche Werkzeuge Sie zur Implementierung von Audio verwenden. Wenn Sie die Wiedergabe eines Audiotracks steuern möchten, bietet das `<audio>`-Medienelement eine bessere, schnellere Lösung als die Web Audio API. Wenn Sie komplexere Audiobearbeitung sowie Wiedergabe durchführen möchten, bietet die Web Audio API viel mehr Leistung und Kontrolle.

Ein leistungsstarkes Merkmal der Web Audio API ist, dass sie keine strikte "Soundaufrufbegrenzung" hat. Zum Beispiel gibt es keine Obergrenze von 32 oder 64 gleichzeitigen Soundaufrufen. Einige Prozessoren können möglicherweise mehr als 1.000 gleichzeitige Klänge ohne Stottern abspielen.

## Beispielcode

Unsere Boombox sieht so aus:

![Ein Boombox mit Wiedergabe-, Pan- und Lautstärkereglern](boombox.png)

Beachten Sie das Retro-Kassettendeck mit einem Wiedergabeknopf sowie Lautstärke- und Pan-Reglern, um die Lautstärke und das Stereo-Panning zu ändern. Wir könnten dies deutlich komplexer gestalten, aber dies ist ideal für einfaches Lernen in diesem Stadium.

[Sehen Sie das endgültige Demo hier live](https://mdn.github.io/webaudio-examples/audio-basics/), oder sehen Sie sich den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/audio-basics) an.

## Audiografen

Alles innerhalb der Web Audio API basiert auf dem Konzept eines Audiografen, der aus Knoten besteht.

Die Web Audio API behandelt Audio-Operationen innerhalb eines **Audio-Kontextes** und wurde so konzipiert, dass sie **modulares Routing** ermöglicht. Grundlegende Audio-Operationen werden mit **Audioknoten** durchgeführt, die miteinander verbunden sind, um einen **Audio-Routing-Graphen** zu bilden. Sie haben Eingabeknoten, die die Quelle der Klänge sind, die Sie manipulieren, Modifikationsknoten, die diese Klänge nach Bedarf ändern, und Ausgabeknoten (Ziele), die es Ihnen ermöglichen, diese Klänge zu speichern oder zu hören.

Mehrere Audioquellen mit unterschiedlichen Kanallayouts werden unterstützt, sogar innerhalb eines einzelnen Kontextes. Dank dieses modularen Designs können Sie komplexe Audiofunktionen mit dynamischen Effekten erstellen.

## Audiokontext

Um überhaupt mit der Web Audio API arbeiten zu können, müssen wir eine Instanz des Audiokontextes erstellen. Dies gibt uns dann Zugriff auf alle Funktionen und Möglichkeiten der API.

```js
const audioContext = new AudioContext();
```

Was passiert also dabei? Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) wird automatisch für uns erstellt und zu einem Online-Audiokontext erweitert. Das möchten wir, da wir vorhaben, Live-Sound abzuspielen.

> [!NOTE]
> Wenn Sie Audio-Daten nur verarbeiten möchten, zum Beispiel puffern und streamen, aber nicht abspielen, sollten Sie in Betracht ziehen, einen [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) zu erstellen.

## Klang laden

Jetzt benötigt der erstellte Audiokontext noch etwas Klang, den er abspielen kann. Die API bietet hierfür einige Möglichkeiten. Fangen wir mit einer einfachen Methode an — da wir eine Boombox haben, möchten wir wahrscheinlich einen ganzen Songtrack abspielen. Zur besseren Zugänglichkeit ist es auch schön, diesen Track im DOM verfügbar zu machen. Wir stellen den Song auf der Seite über ein {{htmlelement("audio")}}-Element bereit.

```html
<audio src="myCoolTrack.mp3"></audio>
```

> [!NOTE]
> Wenn die geladene Audiodatei von einer anderen Domäne stammt, müssen Sie das `crossorigin`-Attribut verwenden; siehe [Cross Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) für weitere Informationen.

Um alle netten Dinge zu nutzen, die wir mit der Web Audio API bekommen, müssen wir die Quelle aus diesem Element holen und sie in den erstellten Kontext _einspeisen_. Zum Glück gibt es eine Methode, die genau das ermöglicht — [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource):

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

> [!NOTE]
> Das oben erwähnte `<audio>`-Element wird im DOM durch ein Objekt vom Typ [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) dargestellt, das seinen eigenen Funktionsumfang mitbringt. All dies bleibt intakt; wir machen lediglich den Klang für die Web Audio API verfügbar.

## Steuerung des Klangs

Beim Abspielen von Klang im Web ist es wichtig, den Benutzern die Kontrolle darüber zu geben. Abhängig vom Anwendungsfall gibt es unzählige Optionen, aber wir bieten Funktionen zum Abspielen/Pausieren des Klangs, Ändern der Lautstärke des Tracks und Verschieben von links nach rechts.

Die programmgesteuerte Steuerung von Klang aus JavaScript-Code wird durch die Autoplay-Richtlinien der Browser abgedeckt, da solche ohne Erlaubnis des Benutzers (oder einer Positivliste) wahrscheinlich blockiert werden. Autoplay-Richtlinien erfordern in der Regel entweder eine ausdrückliche Erlaubnis oder eine Benutzerinteraktion mit der Seite, bevor Skripte die Wiedergabe von Audio auslösen können.

Diese speziellen Anforderungen bestehen im Wesentlichen, weil unerwartete Klänge störend und aufdringlich sein können und Zugänglichkeitsprobleme verursachen können. Weitere Informationen dazu finden Sie in unserem Artikel [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay).

Da unsere Skripte Audio als Reaktion auf ein Benutzer-Eingabeereignis abspielen (z.B. ein Klick auf einen Wiedergabe-Knopf), sind wir in guter Verfassung und sollten keine Probleme mit Autoplay-Blockierungen haben. Beginnen wir also, indem wir uns unsere Abspiel- und Pausenfunktionalität ansehen. Wir haben einen Wiedergabe-Knopf, der sich in einen Pause-Knopf verwandelt, wenn der Track spielt:

```html
<button data-playing="false" role="switch" aria-checked="false">
  <span>Play/Pause</span>
</button>
```

Bevor wir unseren Track abspielen können, müssen wir unseren Audiografen vom Audiostart/Eingabeknoten zum Ziel verbinden.

Wir haben bereits einen Eingabeknoten erstellt, indem wir unser Audioelement in die API übergeben haben. In den meisten Fällen müssen Sie keinen Ausgabeknoten erstellen, Sie können einfach Ihre anderen Knoten mit [`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination) verbinden, was die Situation für Sie handhabt:

```js
track.connect(audioContext.destination);
```

Eine gute Möglichkeit, sich diese Knoten vorzustellen, ist, einen Audiografen zu zeichnen, damit Sie ihn visualisieren können. So sieht unser aktueller Audiograf aus:

![ein Audiograf mit einem Audiosymbol, das mit dem Standardziel verbunden ist](graph1.jpg)

Jetzt können wir die Abspiel- und Pausenfunktionalität hinzufügen.

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

Wir müssen auch berücksichtigen, was zu tun ist, wenn der Track fertig abgespielt ist. Unser `HTMLMediaElement` löst ein `ended`-Ereignis aus, sobald es zu Ende gespielt hat, sodass wir darauf hören und entsprechend Code ausführen können:

```js
audioElement.addEventListener(
  "ended",
  () => {
    playButton.dataset.playing = "false";
  },
  false,
);
```

## Veränderung des Klangs

Lassen Sie uns einige grundlegende Modifikationsknoten untersuchen, um den Klang, den wir haben, zu ändern. Hier kommt die Web Audio API wirklich zum Tragen. Zuerst ändern wir die Lautstärke. Dies kann mit einem [`GainNode`](/de/docs/Web/API/GainNode) gemacht werden, der darstellt, wie groß unsere Klangwelle ist.

Es gibt zwei Möglichkeiten, Knoten mit der Web Audio API zu erstellen. Sie können die Fabrikmethode auf dem Kontext selbst verwenden (z.B. `audioContext.createGain()`) oder über einen Konstruktor des Knotens (z.B. `new GainNode()`). Wir werden die Fabrikmethode in unserem Code verwenden:

```js
const gainNode = audioContext.createGain();
```

Jetzt müssen wir unseren Audiografen von vorher aktualisieren, sodass die Eingabe mit dem Gain verbunden ist, dann der Gain-Knoten mit dem Ziel verbunden ist:

```js
track.connect(gainNode).connect(audioContext.destination);
```

Dies lässt unseren Audiografen folgendermaßen aussehen:

![ein Audiograf mit einem Audiosymbol, verbunden mit einem Gain-Knoten, der die Audioquelle modifiziert, und dann zum Standardziel führend](graph2.jpg)

Der Standardwert für Gain ist 1; dies hält die aktuelle Lautstärke gleich. Gain kann auf ein Minimum von etwa -3.4028235E38 und ein Maximum von etwa 3.4028235E38 (Gleitkommazahlbereich in JavaScript) eingestellt werden. Hier lassen wir die Boombox den Gain auf bis zu 2 (doppelte ursprüngliche Lautstärke) und herunter auf 0 (dies wird unseren Sound effektiv stumm schalten) ändern.

Lassen Sie uns dem Benutzer die Kontrolle darüber geben — wir verwenden ein [Range-Input](/de/docs/Web/HTML/Reference/Elements/input/range):

```html
<input type="range" id="volume" min="0" max="2" value="1" step="0.01" />
```

> [!NOTE]
> Range-Inputs sind eine wirklich praktische Eingabeart, um Werte für Audioknoten zu aktualisieren. Sie können den Bereich eines Range-Eingabefeldes festlegen und diese direkt mit den Parametern des Audioknotens verwenden.

Greifen wir also den Wert dieser Eingabe ab und aktualisieren den Gain-Wert, wenn der Eingabeknoten von der Benutzer geändert wird:

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
> Die Werte von Knotenobjekten (z.B. `GainNode.gain`) sind keine einfachen Werte; sie sind tatsächlich Objekte vom Typ [`AudioParam`](/de/docs/Web/API/AudioParam) — diese werden Parameter genannt. Deshalb müssen wir `GainNode.gain`'s `value`-Eigenschaft setzen, anstatt den Wert direkt auf `gain` zu setzen. Dies ermöglicht es, sie viel flexibler zu gestalten und eine spezifische Anzahl von Werten über eine bestimmte Zeitspanne hinweg zu ändern, zum Beispiel.

Großartig, jetzt kann der Benutzer die Lautstärke des Tracks ändern! Der Gain-Knoten ist der perfekte Knoten, wenn Sie Stummschaltungsfunktionen hinzufügen möchten.

## Hinzufügen von Stereo-Panning zu unserer App

Fügen wir einen weiteren Modifikationsknoten hinzu, um zu üben, was wir gerade gelernt haben.

Es gibt einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)-Knoten, der das Gleichgewicht des Klangs zwischen den linken und rechten Lautsprechern ändert, wenn der Benutzer Stereo-Fähigkeiten hat.

> [!NOTE]
> Der `StereoPannerNode` ist für einfache Fälle gedacht, in denen Sie einfach nur Stereo-Panning von links nach rechts wünschen.
> Es gibt auch einen [`PannerNode`](/de/docs/Web/API/PannerNode), der eine sehr große Kontrolle über 3D-Raum oder _Sound-Räumlichkeit_ ermöglicht, um komplexere Effekte zu erzeugen.
> Dies wird in Spielen und 3D-Anwendungen verwendet, um zum Beispiel Vögel, die über den Kopf fliegen, oder Klang, der von hinten kommt, zu erzeugen.

Um es zu visualisieren, werden wir unseren Audiografen so aussehen lassen:

![Ein Bild, das einen Audiografen zeigt, mit einem Eingabeknoten, zwei Modifikationsknoten (ein Gain-Knoten und ein Stereo-Panner-Knoten) und einem Zielknoten.](graphpan.jpg)

Lassen Sie uns dieses Mal die Konstruktor-Methode zur Erstellung eines Knotens verwenden. Wenn wir es auf diese Weise tun, müssen wir den Kontext und alle Optionen, die der spezifische Knoten nehmen kann, übergeben:

```js
const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);
```

> [!NOTE]
> Die Konstruktor-Methode zur Erstellung von Knoten wird derzeit nicht von allen Browsern unterstützt. Die älteren Fabrikmethoden werden weitreichender unterstützt.

Hier reicht unser Wertebereich von -1 (ganz links) bis 1 (ganz rechts). Lassen Sie uns erneut einen Eingabetyp Range verwenden, um diesen Parameter zu variieren:

```html
<input type="range" id="panner" min="-1" max="1" value="0" step="0.01" />
```

Wir verwenden die Werte dieser Eingabe, um unsere Panner-Werte ähnlich wie vorher anzupassen:

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

Lassen Sie uns unseren Audiografen erneut anpassen, um alle Knoten miteinander zu verbinden:

```js
track.connect(gainNode).connect(panner).connect(audioContext.destination);
```

Das letzte, was zu tun bleibt, ist unsere App auszuprobieren: [Sehen Sie das endgültige Demo hier live](https://mdn.github.io/webaudio-examples/audio-basics/).

## Zusammenfassung

Großartig! Wir haben eine Boombox, die unser 'Band' abspielt und wir können die Lautstärke und das Stereo-Panning anpassen, was uns einen ziemlich grundlegenden funktionierenden Audiografen gibt.

Dies deckt einige Grundlagen ab, die Sie benötigen würden, um Audio zu Ihrer Website oder Web-App hinzuzufügen. Die Web Audio API bietet noch viel mehr Funktionen, aber sobald Sie das Konzept von Knoten und das Zusammensetzen Ihres Audiografen verstanden haben, können wir uns komplexeren Funktionen zuwenden.

## Weitere Beispiele

Es gibt weitere Beispiele, um mehr über die Web Audio API zu lernen.

Der [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) ist eine unterhaltsame Stimmveränderer- und Klangvisualisierungs-Web-App, die es Ihnen ermöglicht, verschiedene Effekte und Visualisierungen auszuwählen. Die Anwendung ist ziemlich einfach, aber sie demonstriert die gleichzeitige Verwendung mehrerer Funktionen der Web Audio API. ([führen Sie den Voice-change-O-matic live aus](https://mdn.github.io/webaudio-examples/voice-change-o-matic/)).

![Eine Benutzeroberfläche mit einer angezeigten Klangwelle und Optionen zur Auswahl von Stimmeffekten und Visualisierungen.](voice-change-o-matic.png)

Eine andere Anwendung, die speziell entwickelt wurde, um die Web Audio API zu demonstrieren, ist das [Violent Theremin](https://mdn.github.io/webaudio-examples/violent-theremin/), eine einfache Web-App, die es Ihnen ermöglicht, Höhe und Lautstärke zu ändern, indem Sie Ihren Mauszeiger bewegen. Es bietet auch eine psychedelische Lichtshow ([sehen Sie sich den Quellcode des Violent Theremin an](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin)).

![Eine Seite voller Regenbogenfarben, mit zwei Knöpfen beschriftet Clear screen und Mute.](violent-theremin.png)

Sehen Sie sich auch unser [webaudio-examples-Repository](https://github.com/mdn/webaudio-examples) für weitere Beispiele an.
