---
title: Verwendung der Web Audio API
slug: Web/API/Web_Audio_API/Using_Web_Audio_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Web Audio API")}}

Lassen Sie uns einen Blick darauf werfen, wie man mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API) beginnt. Wir werden kurz einige Konzepte betrachten und dann ein einfaches Boombox-Beispiel studieren, das es uns ermöglicht, eine Audiospur zu laden, abzuspielen und zu pausieren, sowie deren Lautstärke und Stereo-Panning zu ändern.

Die Web Audio API ersetzt nicht das {{HTMLElement("audio")}} Medien-Element, sondern ergänzt es, ebenso wie {{HTMLElement("canvas")}} neben dem {{HTMLElement("img")}} Element existiert. Ihr Anwendungsfall bestimmt, welche Werkzeuge Sie zur Audioimplementierung verwenden. Wenn Sie die Wiedergabe einer Audiospur steuern möchten, bietet das `<audio>` Medien-Element eine bessere, schnellere Lösung als die Web Audio API. Wenn Sie jedoch komplexere Audioverarbeitung sowie Wiedergabe wünschen, bietet die Web Audio API weitaus mehr Leistung und Kontrolle.

Ein leistungsstarkes Merkmal der Web Audio API ist, dass es keine strikte "Soundanrufbegrenzung" gibt. Beispielsweise gibt es kein Limit von 32 oder 64 gleichzeitig abgespielten Sounds. Einige Prozessoren können mehr als 1.000 gleichzeitige Sounds ohne Ruckeln spielen.

## Beispielcode

Unsere Boombox sieht so aus:

![Eine Boombox mit Wiedergabe-, Pan- und Lautstärkereglern](boombox.png)

Beachten Sie das Retro-Kassettenlaufwerk mit einem Wiedergabeknopf sowie den Volumen- und Pan-Schiebereglern, die es Ihnen ermöglichen, die Lautstärke und das Stereo-Panning zu ändern. Wir könnten dies viel komplexer gestalten, aber es ist ideal für einfaches Lernen in dieser Phase.

[Schauen Sie sich das endgültige Demo auf CodePen an](https://codepen.io/Rumyra/pen/qyMzqN/), oder sehen Sie den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/audio-basics).

## Audio-Graphen

Alles innerhalb der Web Audio API basiert auf dem Konzept eines Audio-Graphen, der aus Knoten besteht.

Die Web Audio API handhabt Audio-Operationen innerhalb eines **Audio-Kontexts** und ist so konzipiert, dass sie **modulares Routing** ermöglicht. Grundlegende Audio-Operationen werden mit **Audio-Knoten** durchgeführt, die miteinander verbunden sind, um einen **Audio-Routing-Graphen** zu bilden. Sie haben Eingabeknoten, die die Quelle der Sounds sind, die Sie manipulieren, Modifikationsknoten, die diese Sounds nach Wunsch ändern, und Ausgabeknoten (Ziele), die es Ihnen ermöglichen, diese Sounds zu speichern oder zu hören.

Es werden mehrere Audioquellen mit unterschiedlichen Kanal-Layouts unterstützt, selbst innerhalb eines einzelnen Kontextes. Aufgrund dieses modularen Designs können Sie komplexe Audiofunktionen mit dynamischen Effekten erstellen.

## Audio-Kontext

Um mit der Web Audio API irgendetwas anstellen zu können, müssen wir eine Instanz des Audio-Kontexts erstellen. Dies gibt uns dann Zugang zu allen Funktionen und Fähigkeiten der API.

```js
const audioContext = new AudioContext();
```

Was passiert, wenn wir dies tun? Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) wird für uns automatisch erstellt und zu einem Online-Audio-Kontext erweitert. Das wollen wir, da wir vorhaben, Live-Sound abzuspielen.

> [!NOTE]
> Wenn Sie nur Audiodaten verarbeiten möchten, zum Beispiel sie puffern und streamen, aber nicht abspielen, sollten Sie in Erwägung ziehen, einen [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) zu erstellen.

## Laden von Sound

Jetzt muss der von uns erstellte Audio-Kontext mit irgendeinem Sound zum Abspielen gefüttert werden. Es gibt einige Möglichkeiten, dies mit der API zu tun. Beginnen wir mit einer einfachen Methode — da wir eine Boombox haben, möchten wir höchstwahrscheinlich einen vollständigen Songtrack abspielen. Auch für die Zugänglichkeit ist es schön, diesen Track im DOM zugänglich zu machen. Wir werden das Lied auf der Seite mit einem {{htmlelement("audio")}} Element sichtbar machen.

```html
<audio src="myCoolTrack.mp3"></audio>
```

> [!NOTE]
> Wenn die geladene Sounddatei auf einer anderen Domain liegt, müssen Sie das `crossorigin` Attribut verwenden; siehe [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) für mehr Informationen.

Um alle Vorteile der Web Audio API nutzen zu können, müssen wir die Quelle aus diesem Element entnehmen und _in_ den von uns erstellten Kontext einfügen. Zum Glück gibt es eine Methode, die genau das ermöglicht — [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource):

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

> [!NOTE]
> Das oben gezeigte `<audio>` Element wird im DOM durch ein Objekt vom Typ [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) dargestellt, das über einen eigenen Satz von Funktionen verfügt. All dies bleibt intakt; wir ermöglichen lediglich, dass der Sound für die Web Audio API verfügbar ist.

## Steuerung des Sounds

Beim Abspielen von Sound im Web ist es wichtig, dem Benutzer die Kontrolle zu ermöglichen. Je nach Anwendungsfall gibt es eine Vielzahl von Optionen, aber wir werden die Funktionalität bereitstellen, um den Sound abzuspielen/zu pausieren, die Lautstärke des Tracks zu ändern und es von links nach rechts zu verschieben.

Das programmatische Steuern von Sound aus JavaScript-Code wird durch die Autoplay-Richtlinien der Browser abgedeckt, es ist daher wahrscheinlich, dass eine Wiedergabe blockiert wird, sofern keine Erlaubnis durch den Benutzer (oder eine Erlaubnisliste) erteilt wird. Autoplay-Richtlinien erfordern in der Regel entweder eine ausdrückliche Genehmigung oder ein Benutzerengagement mit der Seite, bevor Skripte Audio abspielen können.

Diese besonderen Anforderungen bestehen im Wesentlichen, weil unerwartete Sounds störend und aufdringlich sein können und Barrierefreiheitsprobleme verursachen können. Sie können mehr darüber in unserem Artikel [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay) erfahren.

Da unsere Skripte Audio als Reaktion auf ein Benutzereingabeereignis abspielen (zum Beispiel ein Klick auf einen Wiedergabeknopf), sind wir in einer guten Position und sollten keine Probleme mit der Sperrung der automatischen Wiedergabe haben. Also, lassen Sie uns mit der Betrachtung unserer Wiedergabe- und Pausenfunktion beginnen. Wir haben einen Wiedergabeknopf, der zu einem Pausenknopf wird, wenn der Track abgespielt wird:

```html
<button data-playing="false" role="switch" aria-checked="false">
  <span>Play/Pause</span>
</button>
```

Bevor wir unseren Track abspielen können, müssen wir unseren Audiographen von der Audioquelle/Eingabeknoten zum Ziel verbinden.

Wir haben bereits einen Eingabeknoten erstellt, indem wir unser Audioelement in die API übergeben haben. Meistens müssen Sie keinen Ausgabeknoten erstellen; Sie können Ihre anderen Knoten einfach mit [`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination) verbinden, das die Situation für Sie handhabt:

```js
track.connect(audioContext.destination);
```

Eine gute Möglichkeit, sich diese Knoten vorzustellen, besteht darin, einen Audiographen zu zeichnen, um ihn zu visualisieren. So sieht unser aktueller Audiograph aus:

![ein Audiograph mit einer Audio-Elementquelle, die mit dem Standardziel verbunden ist](graph1.jpg)

Jetzt können wir die Wiedergabe- und Pausenfunktion hinzugefügt.

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

Wir müssen auch berücksichtigen, was zu tun ist, wenn der Track zu spielen aufhört. Unser `HTMLMediaElement` löst ein `ended` Ereignis aus, sobald es mit der Wiedergabe fertig ist; daher können wir darauf lauschen und entsprechend Code ausführen:

```js
audioElement.addEventListener(
  "ended",
  () => {
    playButton.dataset.playing = "false";
  },
  false,
);
```

## Soundmodifikation

Lassen Sie uns einige grundlegende Modifikationsknoten untersuchen, um den Sound zu ändern, den wir haben. Hier beginnt die Web Audio API wirklich nützlich zu werden. Zuallererst ändern wir die Lautstärke. Dies kann mit einem [`GainNode`](/de/docs/Web/API/GainNode) erreicht werden, der darstellt, wie groß unsere Schallwelle ist.

Es gibt zwei Möglichkeiten, wie Sie mit der Web Audio API Knoten erstellen können. Sie können die Fabrikmethode im Kontext selbst verwenden (z.B. `audioContext.createGain()`) oder über einen Konstruktor des Knotens (z.B. `new GainNode()`). Wir werden die Fabrikmethode in unserem Code verwenden:

```js
const gainNode = audioContext.createGain();
```

Jetzt müssen wir unseren Audiographen von vorher aktualisieren, damit der Eingang mit dem Gain verbunden ist, dann wird der Gainknoten mit dem Ziel verbunden:

```js
track.connect(gainNode).connect(audioContext.destination);
```

Dadurch sieht unser Audiograph folgendermaßen aus:

![ein Audiograph mit einer Audio-Elementquelle, die mit einem Gain-Knoten verbunden ist, der die Audioquelle modifiziert, und dann zum Standardziel geht](graph2.jpg)

Der Standardwert für Gain ist 1; dies hält die aktuelle Lautstärke unverändert. Gain kann auf ein Minimum von etwa -3.4028235E38 und ein Maximum von etwa 3.4028235E38 (Fließkomma-Zahlenbereich in JavaScript) gesetzt werden. Hier werden wir erlauben, die Lautstärke der Boombox auf bis zu 2 (doppelte ursprüngliche Lautstärke) zu erhöhen und auf 0 zu senken (dies wird unseren Sound effektiv stummschalten).

Geben wir dem Benutzer die Kontrolle darüber — wir verwenden ein [Bereichseingabefeld](/de/docs/Web/HTML/Element/input/range):

```html
<input type="range" id="volume" min="0" max="2" value="1" step="0.01" />
```

> [!NOTE]
> Bereicheingaben sind eine wirklich praktische Eingabeart zum Aktualisieren von Werten auf Audioknoten. Sie können die Werte eines Bereichs angeben und direkt mit den Parametern des Audioknotens verwenden.

Lassen Sie uns den Wert dieser Eingabe erfassen und den Gain-Wert aktualisieren, wenn der Eingabeknoten durch den Benutzer geändert wird:

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
> Die Werte von Knotenobjekten (z.B. `GainNode.gain`) sind keine einfachen Werte; sie sind tatsächlich Objekte vom Typ [`AudioParam`](/de/docs/Web/API/AudioParam) — diese werden Parameter genannt. Deshalb müssen wir die `value`-Eigenschaft von `GainNode.gain` setzen, anstatt den Wert direkt auf `gain` zu setzen. Dies erlaubt es ihnen, viel flexibler zu sein, indem sie die Möglichkeit bieten, dem Parameter einen spezifischen Satz von Werten zu übergeben, zwischen denen in einem bestimmten Zeitraum gewechselt werden soll.

Großartig, jetzt kann der Benutzer die Lautstärke des Tracks anpassen! Der Gain-Knoten ist der perfekte Knoten, um Stummschaltungs-Funktionalität hinzuzufügen.

## Hinzufügen von Stereo-Panning zu unserer App

Lassen Sie uns einen weiteren Modifikationsknoten hinzufügen, um das zu üben, was wir gerade gelernt haben.

Es gibt einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode) Knoten, der das Gleichgewicht des Sounds zwischen den linken und rechten Lautsprechern ändert, wenn der Benutzer über Stereofähigkeiten verfügt.

> [!NOTE]
> Der `StereoPannerNode` ist für einfache Fälle gedacht, bei denen Sie nur Stereo-Panning von links nach rechts wollen.
> Es gibt auch einen [`PannerNode`](/de/docs/Web/API/PannerNode), der einen großen Kontrollumfang über 3D-Raum oder _Raumklang_, was effektiv bedeutet, ermöglicht, um komplexere Effekte zu schaffen.
> Dies wird in Spielen und 3D-Anwendungen verwendet, um beispielsweise Vögel zu simulieren, die über einen hinwegfliegen, oder um einen Klang so zu erzeugen, dass er von hinten kommt.

Um es visuell darzustellen, lassen wir unseren Audiographen so aussehen:

![Ein Bild zeigt den Audiographen mit einem Eingabeknoten, zwei Modifikationsknoten (ein Gain-Knoten und ein Stereo-Panner-Knoten) und einem Zielknoten.](graphpan.jpg)

Lassen Sie uns diesmal die Konstruktormethode zur Erstellung eines Knotens verwenden. Wenn wir dies auf diese Weise tun, müssen wir den Kontext und alle Optionen übergeben, die der bestimmte Knoten möglicherweise benötigt:

```js
const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);
```

> [!NOTE]
> Die Konstruktormethode zur Erstellung von Knoten wird derzeit nicht von allen Browsern unterstützt. Die älteren Fabrikmethoden werden breiter unterstützt.

Hier reichen unsere Werte von -1 (weit links) bis 1 (weit rechts). Lassen Sie uns erneut eine Bereichseingabe verwenden, um diesen Parameter zu variieren:

```html
<input type="range" id="panner" min="-1" max="1" value="0" step="0.01" />
```

Wir verwenden die Werte dieser Eingabe, um unsere Panner-Werte auf die gleiche Weise wie zuvor anzupassen:

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

Lassen Sie uns unseren Audiographen erneut anpassen, um alle Knoten miteinander zu verbinden:

```js
track.connect(gainNode).connect(panner).connect(audioContext.destination);
```

Das einzige, was noch zu tun bleibt, ist die App auszuprobieren: [Schauen Sie sich das endgültige Demo auf CodePen an](https://codepen.io/Rumyra/pen/qyMzqN/).

## Zusammenfassung

Großartig! Wir haben eine Boombox, die unser 'Tape' abspielt und wir können die Lautstärke und das Stereo-Panning anpassen, wodurch wir einen ziemlich grundlegenden funktionierenden Audiographen haben.

Das umfasst ziemlich viele Grundlagen, die Sie benötigen, um Audio zu Ihrer Webseite oder Web-App hinzuzufügen. Die Web Audio API bietet noch viel mehr Funktionalitäten, aber sobald Sie das Konzept der Knoten und das Zusammensetzen Ihres Audiographen verstanden haben, können wir uns komplexeren Funktionalitäten zuwenden.

## Weitere Beispiele

Es gibt weitere Beispiele, um mehr über die Web Audio API zu lernen.

Der [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) ist eine unterhaltsame Stimmenmanipulator- und Soundvisualisierungs-Web-App, die Ihnen ermöglicht, verschiedene Effekte und Visualisierungen auszuwählen. Die Anwendung ist recht rudimentär, zeigt aber die gleichzeitige Nutzung mehrerer Funktionen der Web Audio API. ([Führen Sie den Voice-change-O-matic live aus](https://mdn.github.io/webaudio-examples/voice-change-o-matic/)).

![Eine Benutzeroberfläche mit einer angezeigten Schallwelle und Optionen zur Auswahl von Stimmeffekten und Visualisierungen.](voice-change-o-matic.png)

Eine weitere speziell zur Demonstration der Web Audio API entwickelte Anwendung ist das [Violent Theremin](https://mdn.github.io/webaudio-examples/violent-theremin/), eine einfache Web-Anwendung, die es Ihnen ermöglicht, Tonhöhe und Lautstärke durch Bewegen des Mauszeigers zu ändern. Es bietet auch eine psychedelische Lichtshow ([siehe den Quellcode von Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin)).

![Eine Seite voller Regenbogenfarben mit zwei Schaltflächen, die mit Bildschirm löschen und Stumm beschriftet sind.](violent-theremin.png)

Siehe auch unser [webaudio-examples-Repository](https://github.com/mdn/webaudio-examples) für weitere Beispiele.
