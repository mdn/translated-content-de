---
title: Verwendung der Web Audio API
slug: Web/API/Web_Audio_API/Using_Web_Audio_API
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{DefaultAPISidebar("Web Audio API")}}

Lassen Sie uns einen Blick auf den Einstieg in die [Web Audio API](/de/docs/Web/API/Web_Audio_API) werfen. Wir werden kurz einige Konzepte betrachten und dann ein einfaches Boombox-Beispiel studieren, das es uns ermöglicht, eine Audiospur zu laden, sie abzuspielen und zu pausieren sowie die Lautstärke und die Stereoposition zu ändern.

Die Web Audio API ersetzt nicht das {{HTMLElement("audio")}}-Medienelement, sondern ergänzt es, ähnlich wie {{HTMLElement("canvas")}} neben dem {{HTMLElement("img")}}-Element koexistiert. Ihr Anwendungsfall bestimmt, welche Werkzeuge Sie zur Implementierung von Audio verwenden. Wenn Sie die Wiedergabe einer Audiospur steuern möchten, bietet das `<audio>`-Medienelement eine bessere und schnellere Lösung als die Web Audio API. Wenn Sie komplexere Audiobearbeitung sowie Wiedergabe durchführen möchten, bietet die Web Audio API deutlich mehr Leistung und Kontrolle.

Ein leistungsstarkes Merkmal der Web Audio API ist, dass sie kein striktes "Sound-Call-Limit" hat. Zum Beispiel gibt es keine Obergrenze von 32 oder 64 gleichzeitigen Sound-Calls. Einige Prozessoren können möglicherweise mehr als 1.000 gleichzeitige Sounds ohne Ruckeln abspielen.

## Beispielcode

Unsere Boombox sieht folgendermaßen aus:

![Eine Boombox mit Steuerelementen für Wiedergabe, Panoramierung und Lautstärke](boombox.png)

Beachten Sie das Retro-Kassettendeck mit einem Wiedergabeknopf und den Volumen- und Pan-Slidern, um die Lautstärke und das Stereo-Panning zu ändern. Wir könnten das viel komplexer gestalten, aber dies ist ideal für einfaches Lernen in diesem Stadium.

[Hier auf CodePen die endgültige Demo ansehen](https://codepen.io/Rumyra/pen/qyMzqN/) oder den [Quellcode auf GitHub ansehen](https://github.com/mdn/webaudio-examples/tree/main/audio-basics).

## Audiographen

Alles innerhalb der Web Audio API basiert auf dem Konzept eines Audiographen, der aus Knoten besteht.

Die Web Audio API führt Audio-Operationen innerhalb eines **Audio-Kontexts** aus und wurde für ein **modulares Routing** konzipiert. Grundlegende Audio-Operationen werden mit **Audio-Knoten** ausgeführt, die miteinander verbunden sind, um einen **Audio-Routing-Graphen** zu bilden. Sie haben Eingabeknoten, die die Quelle der zu manipulieren Klänge sind, Modifikationsknoten, die diese Klänge nach Bedarf verändern, und Ausgabeknoten (Ziele), die es Ihnen ermöglichen, diese Klänge zu speichern oder zu hören.

Mehrere Audioquellen mit unterschiedlichen Kanal-Layouts werden unterstützt, sogar innerhalb eines einzigen Kontexts. Aufgrund dieses modularen Designs können Sie komplexe Audio-Funktionen mit dynamischen Effekten erstellen.

## Audiokontext

Um mit der Web Audio API etwas machen zu können, müssen wir eine Instanz des Audiokontexts erstellen. Dies gibt uns dann Zugriff auf alle Funktionen und Möglichkeiten der API.

```js
const audioContext = new AudioContext();
```

Was passiert, wenn wir dies tun? Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) wird automatisch für uns erstellt und zu einem Online-Audiokontext erweitert. Wir wollen dies, weil wir vorhaben, Live-Sound abzuspielen.

> [!NOTE]
> Wenn Sie lediglich Audiodaten verarbeiten möchten, zum Beispiel puffern und streamen, diese aber nicht abspielen, sollten Sie überlegen, einen [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) zu erstellen.

## Laden von Sound

Der von uns erstellte Audiokontext benötigt nun Sound zum Abspielen. Es gibt ein paar Möglichkeiten, dies mit der API zu tun. Beginnen wir mit einer einfachen Methode — da wir eine Boombox haben, möchten wir höchstwahrscheinlich einen vollständigen Song-Track abspielen. Auch der Zugänglichkeit halber ist es schön, diesen Track im DOM offenzulegen. Wir werden den Song auf der Seite mithilfe eines {{htmlelement("audio")}}-Elements darstellen.

```html
<audio src="myCoolTrack.mp3"></audio>
```

> [!NOTE]
> Wenn die zu ladende Sounddatei auf einer anderen Domain als der aktuellen liegt, müssen Sie das `crossorigin`-Attribut verwenden; sehen Sie [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS) für weitere Informationen.

Um all die netten Dinge verwenden zu können, die uns die Web Audio API bietet, müssen wir die Quelle von diesem Element holen und sie in den von uns erstellten Kontext _leiten_. Zum Glück gibt es eine Methode, die uns genau das ermöglicht — [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource):

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

> [!NOTE]
> Das oben gezeigte `<audio>`-Element wird im DOM durch ein Objekt vom Typ [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) dargestellt, das über einen eigenen Funktionsumfang verfügt. All diese Funktionalität bleibt erhalten; wir ermöglichen lediglich, dass der Sound für die Web Audio API verfügbar ist.

## Steuerung von Sound

Beim Abspielen von Sound im Web ist es wichtig, dass der Benutzer ihn steuern kann. Abhängig vom Anwendungsfall gibt es eine Vielzahl von Optionen, aber wir bieten die Möglichkeit, den Sound abzuspielen/zu pausieren, die Lautstärke des Tracks zu ändern und ihn von links nach rechts zu pannen.

Die programmgesteuerte Steuerung von Sound aus JavaScript-Code wird durch die Autoplay-Richtlinien der Browser abgedeckt, sodass es wahrscheinlich blockiert wird, ohne dass die Erlaubnis des Benutzers (oder eine Ausnahmeliste) erteilt wird. Autoplay-Richtlinien erfordern normalerweise entweder eine explizite Erlaubnis oder eine Benutzerinteraktion mit der Seite, bevor Skripte Audio abspielen können.

Diese speziellen Anforderungen existieren im Wesentlichen, da unerwartete Sounds störend und aufdringlich sein können und Barrierefreiheitsprobleme verursachen können. Sie können mehr darüber in unserem Artikel [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide) erfahren.

Da unsere Skripte Audio als Reaktion auf ein Benutzereingabeereignis abspielen (zum Beispiel einen Klick auf einen Wiedergabeknopf), sollten wir keine Probleme durch Autoplay-Blockierungen haben. Lassen Sie uns also mit der Betrachtung unserer Wiedergabe- und Pausen-Funktionalität beginnen. Wir haben einen Wiedergabeknopf, der zu einem Pausenknopf wird, wenn der Track abgespielt wird:

```html
<button data-playing="false" role="switch" aria-checked="false">
  <span>Play/Pause</span>
</button>
```

Bevor wir unseren Track abspielen können, müssen wir unseren Audiographen vom Audioquellen-/Eingabeknoten zum Ziel verbinden.

Wir haben bereits einen Eingabeknoten erstellt, indem wir unser Audioelement in die API geleitet haben. Meistens müssen Sie keinen Ausgabeknoten erstellen, Sie können einfach Ihre anderen Knoten mit [`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination) verbinden, das dies für Sie handhabt:

```js
track.connect(audioContext.destination);
```

Eine gute Möglichkeit, sich diese Knoten vorzustellen, besteht darin, einen Audiographen zu zeichnen, damit Sie ihn visualisieren können. So sieht unser aktueller Audiograph aus:

![Ein Audiograph mit einer Audioelementquelle, die mit dem Standardziel verbunden ist](graph1.jpg)

Jetzt können wir die Wiedergabe- und Pausenfunktionalität hinzufügen.

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

Wir müssen auch berücksichtigen, was zu tun ist, wenn der Track das Abspielen beendet. Unser `HTMLMediaElement` löst ein `ended`-Ereignis aus, sobald es das Abspielen beendet hat, sodass wir darauf hören und entsprechend Code ausführen können:

```js
audioElement.addEventListener(
  "ended",
  () => {
    playButton.dataset.playing = "false";
  },
  false,
);
```

## Modifikation von Sound

Lassen Sie uns einige grundlegende Modifikationsknoten untersuchen, um den Sound, den wir haben, zu ändern. Dies ist der Punkt, an dem die Web Audio API wirklich nützlich wird. Zuerst ändern wir die Lautstärke. Dies kann mit einem [`GainNode`](/de/docs/Web/API/GainNode) geschehen, der repräsentiert, wie groß unsere Schallwelle ist.

Es gibt zwei Möglichkeiten, wie Sie Knoten mit der Web Audio API erstellen können. Sie können die Fabrikmethode im Kontext selbst verwenden (z. B. `audioContext.createGain()`) oder über einen Konstruktor des Knotens (z. B. `new GainNode()`) erstellen. Wir verwenden die Fabrikmethode in unserem Code:

```js
const gainNode = audioContext.createGain();
```

Nun müssen wir unseren Audiographen von zuvor aktualisieren, damit der Eingang mit dem Gain verbunden ist und der Gain-Knoten dann mit dem Ziel verbunden ist:

```js
track.connect(gainNode).connect(audioContext.destination);
```

Dies wird unseren Audiographen wie folgt aussehen lassen:

![Ein Audiograph mit einer Audioelementquelle, die mit einem Gain-Knoten verbunden ist, der die Audioquelle modifiziert und dann zum Standardziel geht](graph2.jpg)

Der Standardwert für Gain ist 1; dies hält die aktuelle Lautstärke gleich. Gain kann auf ein Minimum von etwa -3.4028235E38 und ein Maximum von etwa 3.4028235E38 (Float-Wertebereich in JavaScript) gesetzt werden. Hier erlauben wir der Boombox, den Gain bis zu 2 (das Doppelte der ursprünglichen Lautstärke) und auf 0 herabzusetzen (dies wird unseren Sound effektiv stummschalten).

Lassen Sie uns dem Benutzer die Kontrolle darüber geben — wir verwenden ein [Range Input](/de/docs/Web/HTML/Element/input/range):

```html
<input type="range" id="volume" min="0" max="2" value="1" step="0.01" />
```

> [!NOTE]
> Range Inputs sind ein wirklich hilfreicher Eingabetyp, um Werte auf Audioknoten zu aktualisieren. Sie können die Werte einer Range angeben und direkt mit den Parametern der Audioknoten verwenden.

Lassen Sie uns also den Wert dieses Inputs erfassen und den Gain-Wert aktualisieren, wenn der Eingabeknoten seinen Wert durch den Benutzer ändern lässt:

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
> Die Werte von Knotenobjekten (z. B. `GainNode.gain`) sind keine einfachen Werte; sie sind tatsächlich Objekte vom Typ [`AudioParam`](/de/docs/Web/API/AudioParam) — diese werden als Parameter bezeichnet. Deshalb müssen wir die `value`-Eigenschaft von `GainNode.gain` festlegen, anstatt den Wert direkt auf `gain` zu setzen. Dies ermöglicht es ihnen, viel flexibler zu sein, indem sie beispielsweise eine bestimmte Menge an Werten über einen bestimmten Zeitraum hinweg ändern können.

Großartig, jetzt kann der Benutzer die Lautstärke des Tracks ändern! Der Gain-Knoten ist der perfekte Knoten, wenn Sie Stummschaltfunktionalität hinzufügen möchten.

## Hinzufügung von Stereo-Panning zu unserer App

Lassen Sie uns einen weiteren Modifikationsknoten hinzufügen, um das, was wir gerade gelernt haben, zu üben.

Es gibt einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)-Knoten, der das Gleichgewicht des Sounds zwischen den linken und rechten Lautsprechern ändert, wenn der Benutzer Stereo-Fähigkeiten hat.

> [!NOTE]
> Der `StereoPannerNode` ist für einfache Fälle gedacht, in denen Sie nur Stereo-Panning von links nach rechts wünschen.
> Es gibt auch einen [`PannerNode`](/de/docs/Web/API/PannerNode), der eine große Kontrolle über den 3D-Raum oder _Spatialization_ des Sounds bietet, um komplexere Effekte zu erstellen.
> Dies wird in Spielen und 3D-Apps verwendet, um beispielsweise Vögel über einem fliegen zu lassen oder Sound, der von hinten kommt.

Um es zu visualisieren, gestalten wir unseren Audiographen wie folgt:

![Ein Bild, das den Audiographen zeigt, mit einem Eingabeknoten, zwei Modifikationsknoten (ein Gain-Knoten und ein Stereo-Panner-Knoten) und einem Zielknoten](graphpan.jpg)

Lassen Sie uns dieses Mal die Knoten mit der Konstruktor-Methode erstellen. Wenn wir es auf diese Weise tun, müssen wir den Kontext und alle Optionen, die der jeweilige Knoten haben kann, übergeben:

```js
const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);
```

> [!NOTE]
> Die Konstruktor-Methode zum Erstellen von Knoten wird derzeit nicht von allen Browsern unterstützt. Die älteren Fabrikmethoden werden breiter unterstützt.

Hier reicht unser Wertebereich von -1 (ganz links) bis 1 (ganz rechts). Verwenden wir erneut einen Range-Input-Typ, um diesen Parameter zu variieren:

```html
<input type="range" id="panner" min="-1" max="1" value="0" step="0.01" />
```

Wir verwenden die Werte dieses Inputs, um unsere Panner-Werte wie zuvor anzupassen:

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

Lassen Sie uns unseren Audiographen wieder anpassen, um alle Knoten miteinander zu verbinden:

```js
track.connect(gainNode).connect(panner).connect(audioContext.destination);
```

Das Einzige, was noch zu tun ist, ist die App auszuprobieren: [Hier auf CodePen die endgültige Demo ansehen](https://codepen.io/Rumyra/pen/qyMzqN/).

## Zusammenfassung

Großartig! Wir haben eine Boombox, die unser 'Tape' abspielt, und wir können die Lautstärke und das Stereo-Panning anpassen. Damit haben wir einen ziemlich einfachen funktionierenden Audiographen.

Dies umfasst einige Grundlagen, die Sie benötigen, um Audio zu Ihrer Website oder Web-App hinzuzufügen. Es gibt viel mehr Funktionalität in der Web Audio API, aber sobald Sie das Konzept der Knoten und das Zusammenstellen Ihres Audiographen verstanden haben, können wir uns komplexeren Funktionen zuwenden.

## Weitere Beispiele

Es gibt weitere Beispiele, um mehr über die Web Audio API zu lernen.

Der [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) ist ein unterhaltsamer Sprachmanipulator und Sound-Visualisierungs-Web-App, mit der Sie verschiedene Effekte und Visualisierungen auswählen können. Die Anwendung ist ziemlich rudimentär, aber sie demonstriert die gleichzeitige Nutzung mehrerer Funktionen der Web Audio API. ([Voice-change-O-matic live ausführen](https://mdn.github.io/webaudio-examples/voice-change-o-matic/)).

![Eine Benutzeroberfläche mit einer angezeigten Schallwelle und Optionen zur Auswahl von Stimmeneffekten und Visualisierungen.](voice-change-o-matic.png)

Eine weitere Anwendung, die speziell zur Demonstration der Web Audio API entwickelt wurde, ist das [Violent Theremin](https://mdn.github.io/webaudio-examples/violent-theremin/), eine einfache Webanwendung, mit der Sie Tonhöhe und Lautstärke durch Bewegen Ihres Mauszeigers ändern können. Sie bietet auch eine psychedelische Lichtshow ([siehe Quellcode des Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin)).

![Eine Seite voller Regenbogenfarben mit zwei Schaltflächen, die als Klarer Bildschirm und Stummschalten bezeichnet sind.](violent-theremin.png)

Sehen Sie sich auch unser [webaudio-examples repo](https://github.com/mdn/webaudio-examples) für weitere Beispiele an.
