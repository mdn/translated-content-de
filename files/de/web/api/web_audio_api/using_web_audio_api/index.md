---
title: Verwendung der Web Audio API
slug: Web/API/Web_Audio_API/Using_Web_Audio_API
l10n:
  sourceCommit: 6030ef1aadf967b80e2c79c3d3463cccc8ea0c95
---

{{DefaultAPISidebar("Web Audio API")}}

Werfen wir einen Blick darauf, wie man mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API) beginnt. Wir werden kurz einige Konzepte untersuchen und dann ein einfaches Boombox-Beispiel studieren, das uns ermöglicht, einen Audiotrack zu laden, abzuspielen, zu pausieren und dessen Lautstärke sowie Stereo-Panorama zu ändern.

Die Web Audio API ersetzt nicht das {{HTMLElement("audio")}} Medienelement, sondern ergänzt es, genau wie {{HTMLElement("canvas")}} neben dem {{HTMLElement("img")}} Element koexistiert. Ihr Anwendungsfall bestimmt, welche Werkzeuge Sie zur Implementierung von Audio verwenden. Wenn Sie die Wiedergabe eines Audiotracks steuern möchten, bietet das `<audio>` Medienelement eine bessere, schnellere Lösung als die Web Audio API. Wenn Sie komplexere Audiobearbeitungen sowie die Wiedergabe durchführen möchten, bietet die Web Audio API viel mehr Leistung und Kontrolle.

Ein leistungsstarkes Merkmal der Web Audio API ist, dass sie keine strikte "Sound-Anruf-Beschränkung" hat. Zum Beispiel gibt es kein Limit von 32 oder 64 Soundanrufen gleichzeitig. Einige Prozessoren können mehr als 1.000 gleichzeitige Sounds ohne Stottern abspielen.

## Beispielcode

Unser Boombox sieht so aus:

![Ein Boombox mit Wiedergabe-, Panorama- und Lautstärkereglern](boombox.png)

Beachten Sie das Retro-Kassettendeck mit einem Wiedergabeknopf und Lautstärken- sowie Panorama-Reglern, um die Lautstärke und das Stereo-Panorama zu ändern. Wir könnten dies viel komplexer machen, aber dies ist ideal für einfaches Lernen an diesem Punkt.

[Sehen Sie sich hier die endgültige Demo live an](https://mdn.github.io/webaudio-examples/audio-basics/) oder den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/audio-basics).

## Audiografiken

Alles innerhalb der Web Audio API basiert auf dem Konzept eines Audiografen, der aus Knoten besteht.

Die Web Audio API bearbeitet Audio-Operationen innerhalb eines **Audio-Kontexts** und wurde entwickelt, um **modulares Routing** zu ermöglichen. Grundlegende Audio-Operationen werden mit **Audio-Knoten** durchgeführt, die miteinander verbunden sind, um ein **Audio-Routing-Diagramm** zu bilden. Sie haben Eingangsknoten, die die Quelle der zu bearbeitenden Klänge sind, Änderungsknoten, die diese Klänge nach Wunsch ändern, und Ausgangsknoten (Ziele), die es Ihnen ermöglichen, diese Klänge zu speichern oder anzuhören.

Verschiedene Audioquellen mit unterschiedlichen Kanal-Layouts werden unterstützt, sogar innerhalb eines einzigen Kontexts. Aufgrund dieses modularen Designs können Sie komplexe Audiofunktionen mit dynamischen Effekten erstellen.

## Audio-Kontext

Um etwas mit der Web Audio API machen zu können, müssen wir eine Instanz des Audio-Kontexts erstellen. Dies gibt uns dann Zugang zu allen Funktionen und Möglichkeiten der API.

```js
const audioContext = new AudioContext();
```

Was passiert, wenn wir das tun? Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) wird automatisch für uns erstellt und zu einem Online-Audiokontext erweitert. Das wollen wir, weil wir Live-Sound abspielen möchten.

> [!NOTE]
> Wenn Sie nur Audiodaten verarbeiten, sie zum Beispiel puffern und streamen, aber nicht abspielen möchten, sollten Sie erwägen, einen [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) zu erstellen.

## Laden von Sound

Nun braucht der Audio-Kontext, den wir erstellt haben, etwas Sound, um ihn abzuspielen. Es gibt einige Möglichkeiten, dies mit der API zu tun. Beginnen wir mit einer einfachen Methode – da wir ein Boombox haben, möchten wir wahrscheinlich einen vollständigen Songtrack abspielen. Auch aus Gründen der Barrierefreiheit ist es gut, diesen Track im DOM sichtbar zu machen. Wir werden den Song auf der Seite mit einem {{htmlelement("audio")}} Element anzeigen.

```html
<audio src="myCoolTrack.mp3"></audio>
```

> [!NOTE]
> Wenn die Sounddatei, die Sie laden, auf einem anderen Domain gehostet wird, müssen Sie das `crossorigin` Attribut verwenden; siehe [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) für weitere Informationen.

Um alle Vorteile der Web Audio API nutzen zu können, müssen wir die Quelle aus diesem Element entnehmen und in den von uns erstellten Kontext _einfügen_. Glücklicherweise gibt es eine Methode, die es uns ermöglicht, genau das zu tun — [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource):

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

> [!NOTE]
> Das `<audio>` Element oben wird im DOM durch ein Objekt des Typs [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) dargestellt, das mit einem eigenen Funktionsumfang kommt. All dies bleibt intakt; wir ermöglichen lediglich, dass der Sound der Web Audio API zur Verfügung steht.

## Kontrolle des Sounds

Beim Abspielen von Sound im Web ist es wichtig, dem Benutzer die Kontrolle darüber zu ermöglichen. Abhängig vom Anwendungsfall gibt es unzählige Optionen, aber wir werden Funktionalitäten bereitstellen, um den Sound abzuspielen/zu pausieren, die Lautstärke des Tracks zu ändern und ihn von links nach rechts zu verschieben.

Das steuern von Audio programmgesteuert durch JavaScript unterliegt den Autoplay-Unterstützungsrichtlinien der Browser, weshalb es wahrscheinlich blockiert wird, wenn keine Erlaubnis vom Benutzer erteilt wurde (oder eine Positivliste vorhanden ist). Autoplay-Richtlinien erfordern in der Regel entweder eine explizite Erlaubnis oder eine Benutzerinteraktion mit der Seite, bevor Skripte den Audio-Trigger aktivieren können.

Diese speziellen Anforderungen bestehen im Wesentlichen, weil unerwartete Sounds störend und aufdringlich sein können und Barrierefreiheitsprobleme verursachen können. Sie können mehr darüber in unserem Artikel [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay) erfahren.

Da unsere Skripte Audio als Reaktion auf ein Benutzereingabeereignis abspielen (z. B. ein Klick auf eine Wiedergabetaste), sind wir in guter Form und sollten keine Probleme durch Autoplay-Blockierung haben. Lassen Sie uns also mit unserer Wiedergabe- und Pausenfunktion beginnen. Wir haben eine Wiedergabetaste, die sich in eine Pausentaste ändert, wenn der Track abgespielt wird:

```html
<button data-playing="false" role="switch" aria-checked="false">
  <span>Play/Pause</span>
</button>
```

Bevor wir unseren Track abspielen können, müssen wir unseren Audiografen vom Audioquellen-/Eingabeknoten zum Ziel verbinden.

Wir haben bereits einen Eingabeknoten erstellt, indem wir unser Audio-Element in die API übergeben haben. Meistens müssen Sie keinen Ausgangsknoten erstellen, Sie können einfach Ihre anderen Knoten mit [`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination) verbinden, das die Situation für Sie handhabt:

```js
track.connect(audioContext.destination);
```

Eine gute Möglichkeit, sich diese Knoten vorzustellen, ist das Zeichnen eines Audiografen, um ihn zu visualisieren. So sieht unser aktueller Audiograf aus:

![ein Audiograf mit einer Audioelementquelle, die mit dem Standardziel verbunden ist](graph1.jpg)

Nun können wir die Wiedergabe- und Pausenfunktionen hinzufügen.

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

Wir müssen auch berücksichtigen, was zu tun ist, wenn der Track das Abspielen beendet. Unser `HTMLMediaElement` löst ein `ended` Ereignis aus, sobald es das Abspielen beendet hat, sodass wir daraufhorchen und entsprechend Code ausführen können:

```js
audioElement.addEventListener("ended", () => {
  playButton.dataset.playing = "false";
});
```

## Sound verändern

Lassen Sie uns in einige grundlegende Änderungsknoten eintauchen, um den Sound, den wir haben, zu ändern. Hier beginnt die Web Audio API wirklich nützlich zu werden. Zuerst ändern wir die Lautstärke. Dies kann mit einem [`GainNode`](/de/docs/Web/API/GainNode) erfolgen, der darstellt, wie groß unsere Schallwelle ist.

Es gibt zwei Möglichkeiten, Knoten mit der Web Audio API zu erstellen. Sie können die Fabrikmethode auf dem Kontext selbst verwenden (z. B. `audioContext.createGain()`) oder über einen Konstruktor des Knotens (z. B. `new GainNode()`). Wir verwenden die Fabrikmethode in unserem Code:

```js
const gainNode = audioContext.createGain();
```

Nun müssen wir unseren Audiografen von zuvor aktualisieren, damit der Eingang mit dem Verstärker verbunden ist und dann der Gain-Knoten mit dem Ziel verbunden ist:

```js
track.connect(gainNode).connect(audioContext.destination);
```

Dies wird unseren Audiografen so aussehen lassen:

![ein Audiograf mit einer Audioelementquelle, verbunden mit einem Gain-Knoten, der die Audioquelle verändert, und dann zum Standardziel](graph2.jpg)

Der Standardwert für Gain ist 1; dies hält die aktuelle Lautstärke gleich. Gain kann auf ein Minimum von etwa -3.4028235E38 und ein Maximum von etwa 3.4028235E38 (Float-Zahlenbereich in JavaScript) gesetzt werden. Hier ermöglichen wir es dem Boombox, den Gain auf bis zu 2 zu erhöhen (doppelte Lautstärke) und auf 0 zu senken (dies wird unseren Sound effektiv stummschalten).

Geben wir dem Benutzer die Möglichkeit, dies zu steuern - wir verwenden ein [Bereichseingabefeld](/de/docs/Web/HTML/Reference/Elements/input/range):

```html
<input type="range" id="volume" min="0" max="2" value="1" step="0.01" />
```

> [!NOTE]
> Bereichseingabefelder sind eine sehr praktische Eingabemethode, um Werte an Audioknoten zu aktualisieren. Sie können Werte eines Bereichs angeben und diese direkt mit den Parametern des Audioknotens verwenden.

Lassen Sie uns den Wert dieses Eingabefelds abgreifen und den Gain-Wert aktualisieren, wenn der Eingabeknoten vom Benutzer geändert wird:

```js
const volumeControl = document.querySelector("#volume");

volumeControl.addEventListener("input", () => {
  gainNode.gain.value = volumeControl.value;
});
```

> [!NOTE]
> Die Werte von Knotenobjekten (z. B. `GainNode.gain`) sind keine einfachen Werte; sie sind tatsächlich Objekte des Typs [`AudioParam`](/de/docs/Web/API/AudioParam) - diese werden Parameter genannt. Deshalb müssen wir die `value` Eigenschaft von `GainNode.gain` setzen, anstatt den Wert direkt auf `gain` zu setzen. Dies ermöglicht es ihnen, viel flexibler zu sein, indem sie beispielsweise dem Parameter eine bestimmte Menge an Werten über einen bestimmten Zeitraum geben, die geändert werden sollen.

Großartig, jetzt kann der Benutzer die Lautstärke des Tracks ändern! Der Gain-Knoten ist der perfekte Knoten, um eine Stummfunktion hinzuzufügen.

## Stereo-Panning zu unserer App hinzufügen

Fügen wir einen weiteren Änderungsknoten hinzu, um zu üben, was wir gerade gelernt haben.

Es gibt einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)-Knoten, der das Gleichgewicht des Klangs zwischen den linken und rechten Lautsprechern verändert, wenn der Benutzer über Stereo-Funktionalität verfügt.

> [!NOTE]
> Der `StereoPannerNode` ist für einfache Fälle, in denen Sie nur Stereo-Panning von links nach rechts wünschen.
> Es gibt auch einen [`PannerNode`](/de/docs/Web/API/PannerNode), der eine große Kontrolle über 3D-Raum oder Soundräumlichkeit ermöglicht, um komplexere Effekte zu erzeugen.
> Dies wird in Spielen und 3D-Anwendungen verwendet, um beispielsweise Vögel, die über den Kopf fliegen, oder Geräusche, die von hinten kommen, zu erzeugen.

Um es zu visualisieren, werden wir unseren Audiografen so aussehen lassen:

![Ein Bild, das den Audiografen zeigt, der einen Eingabeknoten, zwei Änderungsknoten (einen Gain-Knoten und einen Stereo-Panner-Knoten) und einen Zielknoten zeigt.](graphpan.jpg)

Lassen Sie uns diesmal die Konstruktor-Methode zum Erstellen eines Knotens verwenden. Wenn wir es auf diese Weise tun, müssen wir den Kontext und alle Optionen, die der spezielle Knoten verwenden kann, übergeben:

```js
const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);
```

> [!NOTE]
> Die Konstruktor-Methode, um Knoten zu erstellen, wird derzeit nicht von allen Browsern unterstützt. Die älteren Fabrikmethoden werden breiter unterstützt.

Hier reicht unser Wertebereich von -1 (ganz links) bis 1 (ganz rechts). Wieder verwenden wir ein Bereichstyp-Eingabefeld, um diesen Parameter zu variieren:

```html
<input type="range" id="panner" min="-1" max="1" value="0" step="0.01" />
```

Wir verwenden die Werte aus diesem Eingabefeld, um unsere Panoramawerte auf die gleiche Weise wie zuvor anzupassen:

```js
const pannerControl = document.querySelector("#panner");

pannerControl.addEventListener("input", () => {
  panner.pan.value = pannerControl.value;
});
```

Lassen Sie uns unseren Audiografen erneut anpassen, um alle Knoten zusammen zu verbinden:

```js
track.connect(gainNode).connect(panner).connect(audioContext.destination);
```

Das Einzige, was noch zu tun bleibt, ist, die App auszuprobieren: [Sehen Sie sich hier die endgültige Demo live an](https://mdn.github.io/webaudio-examples/audio-basics/).

## Zusammenfassung

Großartig! Wir haben einen Boombox, der unser 'Tape' abspielt, und wir können die Lautstärke und das Stereo-Panorama anpassen, was uns ein ziemlich einfaches funktionierendes Audiograf gibt.

Dies umfasst einige grundlegende Dinge, die Sie benötigen würden, um Audio zu Ihrer Website oder Web-App hinzuzufügen. Es gibt viel mehr Funktionalität in der Web Audio API, aber sobald Sie das Konzept der Knoten und die Erstellung Ihres Audiografen verstanden haben, können wir uns komplexeren Funktionalitäten zuwenden.

## Weitere Beispiele

Es gibt weitere Beispiele, um mehr über die Web Audio API zu lernen.

Der [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) ist ein lustiger Sprachmanipulator und Klangvisualisierungs-Web-App, mit der Sie verschiedene Effekte und Visualisierungen auswählen können. Die Anwendung ist ziemlich einfach, aber sie demonstriert die gleichzeitige Verwendung mehrerer Web Audio API Funktionen. ([führen Sie den Voice-change-O-matic live aus](https://mdn.github.io/webaudio-examples/voice-change-o-matic/)).

![Eine Benutzeroberfläche mit einer Klangwelle, die angezeigt wird, und Optionen zur Auswahl von Spracheffekten und Visualisierungen.](voice-change-o-matic.png)

Eine weitere Anwendung, die speziell zur Demonstration der Web Audio API entwickelt wurde, ist das [Violent Theremin](https://mdn.github.io/webaudio-examples/violent-theremin/), eine einfache Webanwendung, mit der Sie die Tonhöhe und Lautstärke durch Bewegen des Mauszeigers ändern können. Sie bietet auch eine psychedelische Lichtshow ([siehe Quellcode des Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin)).

![Eine Seite voller Regenbogenfarben, mit zwei Schaltflächen, die mit Bildschirm löschen und stumm beschriftet sind.](violent-theremin.png)

Siehe auch unser [webaudio-examples Repository](https://github.com/mdn/webaudio-examples) für weitere Beispiele.
