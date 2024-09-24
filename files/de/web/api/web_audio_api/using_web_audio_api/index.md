---
title: Verwenden der Web Audio API
slug: Web/API/Web_Audio_API/Using_Web_Audio_API
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("Web Audio API")}}

Werfen wir einen Blick darauf, wie man mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API) anfängt. Wir werden kurz einige Konzepte betrachten und uns dann ein einfaches Boombox-Beispiel ansehen, das es uns ermöglicht, einen Audiotrack zu laden, abzuspielen, zu pausieren und die Lautstärke sowie das Stereopanorama zu ändern.

Die Web Audio API ersetzt nicht das {{HTMLElement("audio")}}-Medienelement, sondern ergänzt es wie {{HTMLElement("canvas")}} neben dem {{HTMLElement("img")}} -Element existiert. Ihr Anwendungsfall bestimmt, welche Werkzeuge Sie zur Implementierung von Audio verwenden. Wenn Sie die Wiedergabe eines Audiotracks steuern möchten, bietet das `<audio>`-Medienelement eine bessere, schnellere Lösung als die Web Audio API. Wenn Sie komplexere Audioverarbeitung durchführen möchten, bietet die Web Audio API viel mehr Leistung und Kontrolle.

Ein leistungsstarkes Merkmal der Web Audio API ist, dass sie keine strikte "Soundaufrufbegrenzung" hat. Beispielsweise gibt es keine Obergrenze von 32 oder 64 Soundaufrufen gleichzeitig. Einige Prozessoren können mehr als 1.000 gleichzeitige Sounds ohne Stottern abspielen.

## Beispielcode

Unsere Boombox sieht folgendermaßen aus:

![Eine Boombox mit Wiedergabe-, Panorama- und Lautstärkereglern](boombox.png)

Beachten Sie das Retro-Kassettenrekorder mit einem Wiedergabeknopf und Reglern für Lautstärke und Stereopanorama, um die Lautstärke und das Stereopanorama zu ändern. Wir könnten dies viel komplexer gestalten, aber für ein einfaches Lernen ist dies in diesem Stadium ideal.

[Schauen Sie sich das finale Demo hier auf Codepen an](https://codepen.io/Rumyra/pen/qyMzqN/), oder sehen Sie sich den [Quellcode auf GitHub an](https://github.com/mdn/webaudio-examples/tree/main/audio-basics).

## Audiografiken

Alles innerhalb der Web Audio API basiert auf dem Konzept einer Audiografik, die aus Knoten besteht.

Die Web Audio API verarbeitet Audiooperationen innerhalb eines **Audiokontexts** und wurde entwickelt, um **modulares Routing** zu ermöglichen. Grundlegende Audiooperationen werden mit **Audioknoten** durchgeführt, die miteinander verbunden werden, um eine **Audiorouting-Grafik** zu bilden. Sie haben Eingangsknoten, welche die Quelle der Klänge sind, die Sie manipulieren, Modifikationsknoten, die diese Klänge nach Wunsch ändern, und Ausgangsknoten (Ziele), die es Ihnen ermöglichen, diese Klänge zu speichern oder zu hören.

Es werden mehrere Audioquellen mit unterschiedlichen Kanal-Layouts unterstützt, selbst innerhalb eines einzigen Kontexts. Aufgrund dieses modularen Designs können Sie komplexe Audiofunktionen mit dynamischen Effekten erstellen.

## Audiokontext

Um überhaupt etwas mit der Web Audio API tun zu können, müssen wir eine Instanz des Audiokontexts erstellen. Dies gibt uns dann Zugang zu allen Funktionen und Features der API.

```js
const audioContext = new AudioContext();
```

Was passiert also, wenn wir dies tun? Ein {{domxref("BaseAudioContext")}} wird automatisch für uns erstellt und zu einem Online-Audiokontext erweitert. Das wollen wir, weil wir daran interessiert sind, Live-Sound abzuspielen.

> [!NOTE]
> Wenn Sie nur Audiodaten verarbeiten möchten, zum Beispiel puffern und streamen, ohne sie abzuspielen, sollten Sie in Erwägung ziehen, einen {{domxref("OfflineAudioContext")}} zu erstellen.

## Sound laden

Nun, der von uns erstellte Audiokontext benötigt etwas Sound, um durch ihn abgespielt zu werden. Es gibt einige Möglichkeiten, dies mit der API zu tun. Beginnen wir mit einer einfachen Methode — da wir eine Boombox haben, möchten wir höchstwahrscheinlich einen vollständigen Songtrack abspielen. Aus Gründen der Zugänglichkeit ist es auch schön, diesen Track im DOM zu veröffentlichen. Wir machen das Lied auf der Seite sichtbar, indem wir ein {{htmlelement("audio")}}-Element verwenden.

```html
<audio src="myCoolTrack.mp3"></audio>
```

> [!NOTE]
> Wenn die von Ihnen geladene Sounddatei auf einer anderen Domain gehostet wird, müssen Sie das `crossorigin`-Attribut verwenden; siehe [Cross Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS) für weitere Informationen.

Um all die schönen Dinge zu nutzen, die wir mit der Web Audio API bekommen, müssen wir die Quelle aus diesem Element greifen und sie in den von uns erstellten Kontext "einschleusen". Glücklicherweise gibt es eine Methode, die uns ermöglicht, genau das zu tun — {{domxref("AudioContext.createMediaElementSource")}}:

```js
// das Audioelement holen
const audioElement = document.querySelector("audio");

// es in den Audiokontext übergeben
const track = audioContext.createMediaElementSource(audioElement);
```

> [!NOTE]
> Das oben erwähnte `<audio>`-Element wird im DOM durch ein Objekt vom Typ {{domxref("HTMLMediaElement")}} dargestellt, das mit einem eigenen Satz von Funktionen ausgestattet ist. All dies bleibt intakt; wir ermöglichen lediglich, dass der Sound für die Web Audio API verfügbar ist.

## Sound steuern

Wenn Sie Sound im Web abspielen, ist es wichtig, dass Sie dem Benutzer die Möglichkeit geben, ihn zu steuern. Abhängig vom Anwendungsfall gibt es eine Vielzahl von Optionen, aber wir werden die Funktionalität bieten, den Sound abzuspielen/zu pausieren, die Lautstärke des Tracks zu ändern und ihn von links nach rechts zu pannen.

Das programmatische Steuern von Sound aus JavaScript-Code unterliegt den Autoplay-Richtlinien der Browser und wird daher wahrscheinlich blockiert, wenn dem Benutzer keine Erlaubnis erteilt wurde (oder eine Allowlist vorhanden ist). Autoplay-Richtlinien erfordern in der Regel entweder eine explizite Erlaubnis oder ein Benutzer-Engagement mit der Seite, bevor Skripte das Abspielen von Audio auslösen können.

Diese speziellen Anforderungen bestehen im Wesentlichen, weil unerwartete Geräusche störend und aufdringlich sein können und Barrierefreiheitsprobleme verursachen können. Sie können mehr darüber in unserem Artikel [Autoplay-Richtlinien für Medien und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide) erfahren.

Da unser Skript Audio als Reaktion auf ein Benutzer-Eingabereignis abspielt (ein Klick auf einen Play-Button zum Beispiel), sind wir in guter Form und sollten keine Probleme mit Autoplay-Blocking haben. Schauen wir uns also zunächst unsere Play- und Pause-Funktionalität an. Wir haben einen Play-Button, der zu einem Pause-Button wird, wenn der Track abgespielt wird:

```html
<button data-playing="false" role="switch" aria-checked="false">
  <span>Play/Pause</span>
</button>
```

Bevor wir unseren Track abspielen können, müssen wir unsere Audiografik von der Audioquelle/Dem Eingangsknoten zum Ziel verbinden.

Wir haben bereits einen Eingangsknoten erstellt, indem wir unser Audioelement in die API übergeben haben. Im Allgemeinen müssen Sie kein Ausgabeknoten erstellen, Sie können Ihre anderen Knoten einfach mit {{domxref("BaseAudioContext.destination")}} verbinden, das die Situation für Sie regelt:

```js
track.connect(audioContext.destination);
```

Eine gute Möglichkeit, sich diese Knoten vorzustellen, ist, eine Audiografik zu zeichnen, damit Sie sie visualisieren können. So sieht unsere aktuelle Audiografik aus:

![eine Audiografik mit einem Audioelement als Quelle, das mit dem Standardziel verbunden ist](graph1.jpg)

Jetzt können wir die Play- und Pause-Funktionalität hinzufügen.

```js
// Unseren Play-Button auswählen
const playButton = document.querySelector("button");

playButton.addEventListener(
  "click",
  () => {
    // Überprüfen, ob der Kontext im Suspended-Status ist (Autoplay-Richtlinie)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // Track abspielen oder pausieren, je nach Status
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

Wir müssen auch berücksichtigen, was zu tun ist, wenn der Track das Abspielen beendet. Unser `HTMLMediaElement` löst ein `ended`-Ereignis aus, sobald es das Abspielen beendet hat. Daher können wir darauf hören und entsprechend Code ausführen:

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

Lassen Sie uns einige grundlegende Modifikationsknoten untersuchen, um den Sound zu ändern, den wir haben. Hier beginnt die Web Audio API, wirklich nützlich zu werden. Zuerst ändern wir die Lautstärke. Dies kann mit einem {{domxref("GainNode")}} durchgeführt werden, der darstellt, wie groß unsere Tonwelle ist.

Es gibt zwei Möglichkeiten, Knoten mit der Web Audio API zu erstellen. Sie können die Fabrikmethode im Kontext selbst verwenden (z.B. `audioContext.createGain()`) oder über einen Konstruktor des Knotens (z.B. `new GainNode()`). Wir verwenden die Fabrikmethode in unserem Code:

```js
const gainNode = audioContext.createGain();
```

Jetzt müssen wir unsere vorherige Audiografik aktualisieren, sodass der Eingang mit dem Gain verbunden ist und dann der Gain-Knoten mit dem Ziel verbunden ist:

```js
track.connect(gainNode).connect(audioContext.destination);
```

Dies lässt unsere Audiografik so aussehen:

![eine Audiografik mit einem Audioelement als Quelle, verbunden mit einem Gain-Knoten, der die Audioquelle modifiziert, und dann zum Standardziel](graph2.jpg)

Der Standardwert für Gain ist 1; dies hält die aktuelle Lautstärke gleich. Gain kann auf ein Minimum von etwa -3.4028235E38 und ein Maximum von etwa 3.4028235E38 festgelegt werden (Bereich der Fließkommazahl in JavaScript). Hier erlauben wir es der Boombox, den Gain bis zu 2 zu erhöhen (doppelte Lautstärke) und bis zu 0 zu verringern (dies macht unseren Sound effektiv stumm).

Lassen Sie uns dem Benutzer die Kontrolle geben, dies zu tun — wir verwenden einen [Range Input](/de/docs/Web/HTML/Element/input/range):

```html
<input type="range" id="volume" min="0" max="2" value="1" step="0.01" />
```

> [!NOTE]
> Range-Inputs sind eine wirklich praktische Eingabeart, um Werte auf Audioknoten zu aktualisieren. Sie können die Werte eines Bereichs angeben und diese direkt mit den Parametern des Audioknotens verwenden.

Lassen Sie uns diesen Wert der Eingabe holen und den Gain-Wert aktualisieren, wenn der Eingabeknoten seinen Wert durch den Benutzer geändert hat:

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
> Die Werte von Knotenobjekten (z.B. `GainNode.gain`) sind keine einfachen Werte; sie sind tatsächlich Objekte vom Typ {{domxref("AudioParam")}} — diese werden Parameter genannt. Deshalb müssen wir die `value`-Eigenschaft von `GainNode.gain` setzen, anstatt den Wert direkt auf `gain` zu setzen. Dies ermöglicht es ihnen, viel flexibler zu sein, indem sie dem Parameter beispielsweise einen spezifischen Satz von Werten übergeben können, zwischen denen in einem bestimmten Zeitraum gewechselt wird.

Großartig, jetzt kann der Benutzer die Lautstärke des Tracks aktualisieren! Der Gain-Knoten ist der perfekte Knoten, den Sie verwenden können, wenn Sie Stummschaltfunktionalität hinzufügen möchten.

## Stereo-Panning zu unserer App hinzufügen

Lassen Sie uns einen weiteren Modifikationsknoten hinzufügen, um zu üben, was wir gerade gelernt haben.

Es gibt einen {{domxref("StereoPannerNode")}}, der das Gleichgewicht des Sounds zwischen den linken und rechten Lautsprechern verändert, wenn der Benutzer über Stereofähigkeiten verfügt.

> [!NOTE]
> Der `StereoPannerNode` ist für einfache Fälle gedacht, in denen Sie nur eine Stereopanning von links nach rechts wünschen.
> Es gibt auch einen {{domxref("PannerNode")}}, der eine große Kontrolle über den 3D-Raum oder die Sound- _Spatialisierung_ ermöglicht, um komplexere Effekte zu erzeugen.
> Dies wird in Spielen und 3D-Apps verwendet, um beispielsweise Vögel, die über den Kopf fliegen, oder Sounds, die von hinten kommen, zu erzeugen.

Um es zu visualisieren, werden wir unsere Audiografik so gestalten:

![Ein Bild zeigt die Audiografik mit einem Eingangsknoten, zwei Modifikationsknoten (ein Gain-Knoten und ein Stereo-Panning-Knoten) und ein Zielknoten.](graphpan.jpg)

Lassen Sie uns diesmal die Konstruktor-Methode zur Erstellung eines Knotens verwenden. Wenn wir es auf diese Weise tun, müssen wir den Kontext und alle Optionen, die der jeweilige Knoten haben könnte, übergeben:

```js
const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);
```

> [!NOTE]
> Die Nutzung der Konstruktor-Methode zur Erstellung von Knoten wird derzeit nicht von allen Browsern unterstützt. Die älteren Fabrikmethoden werden breiter unterstützt.

Hier reichen unsere Werte von -1 (ganz links) bis 1 (ganz rechts). Auch hier verwenden wir eine Range-Input, um diesen Parameter zu variieren:

```html
<input type="range" id="panner" min="-1" max="1" value="0" step="0.01" />
```

Wir nutzen die Werte dieser Eingabe, um unsere Panner-Werte auf die gleiche Weise anzupassen, wie wir es zuvor getan haben:

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

Lassen Sie uns unsere Audiografik erneut anpassen, um alle Knoten miteinander zu verbinden:

```js
track.connect(gainNode).connect(panner).connect(audioContext.destination);
```

Das Einzige, was noch zu tun bleibt, ist die App auszuprobieren: [Schauen Sie sich das finale Demo hier auf Codepen an](https://codepen.io/Rumyra/pen/qyMzqN/).

## Zusammenfassung

Großartig! Wir haben eine Boombox, die unser 'Band' abspielt, und wir können die Lautstärke und das Stereopanorama anpassen, was uns eine ziemlich grundlegende funktionierende Audiografik bietet.

Dies umfasst einige Grundlagen, die Sie benötigen, um Audio zu Ihrer Website oder Web-App hinzuzufügen. Die Web Audio API bietet noch viel mehr Funktionen, aber sobald Sie das Konzept von Knoten und den Aufbau Ihrer Audiografik verstanden haben, können wir uns komplexeren Funktionen zuwenden.

## Weitere Beispiele

Es gibt weitere Beispiele, die Ihnen helfen, mehr über die Web Audio API zu lernen.

Der [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) ist ein lustiger Stimmmanipulator und Klangvisualisierungs-Web-App, die Ihnen ermöglicht, verschiedene Effekte und Visualisierungen auszuwählen. Die Anwendung ist recht einfach gehalten, demonstriert jedoch den gleichzeitigen Einsatz mehrerer Funktionen der Web Audio API. ([Ausführen des Voice-change-O-matic live](https://mdn.github.io/webaudio-examples/voice-change-o-matic/)).

![Eine Benutzeroberfläche mit einer Schallwelle, die angezeigt wird, und Optionen zur Auswahl von Stimmeffekten und Visualisierungen.](voice-change-o-matic.png)

Eine weitere speziell zur Demonstration der Web Audio API entwickelte Anwendung ist das [Violent Theremin](https://mdn.github.io/webaudio-examples/violent-theremin/), eine einfache Web-Anwendung, die es Ihnen ermöglicht, Tonhöhe und Lautstärke durch Bewegen des Mauszeigers zu ändern. Es bietet auch eine psychedelische Lichtshow ([siehe Violent Theremin Source Code](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin)).

![Eine Seite voller Regenbogenfarben mit zwei Schaltflächen, die Bildschirm löschen und stummschalten beschriftet sind.](violent-theremin.png)

Sehen Sie sich auch unser [webaudio-examples-Repo](https://github.com/mdn/webaudio-examples) für weitere Beispiele an.
