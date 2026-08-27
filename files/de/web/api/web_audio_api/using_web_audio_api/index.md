---
title: Verwendung der Web Audio API
slug: Web/API/Web_Audio_API/Using_Web_Audio_API
l10n:
  sourceCommit: 3143a6094e7b87cf1a96b61f9551fb4d95049777
---

{{DefaultAPISidebar("Web Audio API")}}

Lassen Sie uns einen Blick darauf werfen, wie man mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API) anfängt. Wir werden kurz einige Konzepte betrachten und dann ein einfaches Boombox-Beispiel studieren, das es uns ermöglicht, einen Audiotrack zu laden, ihn abzuspielen, zu pausieren und seine Lautstärke sowie das Stereo-Panning zu ändern.

Die Web Audio API ersetzt nicht das {{HTMLElement("audio")}}-Medienelement, sondern ergänzt es, genau wie {{HTMLElement("canvas")}} neben dem {{HTMLElement("img")}}-Element existiert. Ihr Anwendungsfall bestimmt, welche Werkzeuge Sie zur Implementierung von Audio verwenden. Wenn Sie die Wiedergabe eines Audiotracks steuern möchten, bietet das `<audio>`-Medienelement eine bessere und schnellere Lösung als die Web Audio API. Wenn Sie jedoch komplexere Audiobearbeitung sowie Wiedergabe durchführen möchten, bietet die Web Audio API viel mehr Leistung und Kontrolle.

Ein leistungsstarkes Merkmal der Web Audio API ist, dass sie keine strikte "Soundaufrufbegrenzung" hat. Beispielsweise gibt es keine Obergrenze von 32 oder 64 gleichzeitigen Soundaufrufen. Einige Prozessoren können mehr als 1.000 gleichzeitige Sounds ohne Stottern abspielen.

## Beispielcode

Unsere Boombox sieht so aus:

![Ein Boombox mit Play-, Pan- und Lautstärkereglern](boombox.png)

Beachten Sie das Retro-Kassettendeck mit einem Play-Button sowie den Volumen- und Pan-Schiebereglern, die es Ihnen ermöglichen, die Lautstärke und das Stereo-Panning zu ändern. Wir könnten dies viel komplizierter gestalten, aber dies ist ideal zum einfachen Lernen in diesem Stadium.

[Sehen Sie sich hier die endgültige Demo live an](https://mdn.github.io/webaudio-examples/audio-basics/), oder sehen Sie sich den [Quellcode auf GitHub an](https://github.com/mdn/webaudio-examples/tree/main/audio-basics).

## Audiografiken

Alles innerhalb der Web Audio API basiert auf dem Konzept eines Audiografen, der aus Knoten besteht.

Die Web Audio API führt Audio-Operationen innerhalb eines **Audio-Kontexts** durch und wurde entwickelt, um **modulares Routing** zu ermöglichen. Grundlegende Audio-Operationen werden mit **Audioknoten** durchgeführt, die miteinander verbunden sind, um einen **Audio-Routing-Grafen** zu bilden. Sie haben Eingangsknoten, die die Quelle der von Ihnen manipulierten Sounds sind, Modifikationsknoten, die diese Sounds nach Bedarf ändern, und Ausgangsknoten (Ziele), die es Ihnen ermöglichen, diese Sounds zu speichern oder zu hören.

Mehrere Audioquellen mit unterschiedlichen Kanal-Layouts werden unterstützt, auch innerhalb eines einzelnen Kontexts. Aufgrund dieses modularen Designs können Sie komplexe Audiofunktionen mit dynamischen Effekten erstellen.

## Audio-Kontext

Um mit der Web Audio API irgendetwas machen zu können, müssen wir eine Instanz des Audio-Kontexts erstellen. Dies gibt uns dann Zugriff auf alle Funktionen und Features der API.

```js
const audioContext = new AudioContext();
```

Was passiert also, wenn wir das tun? Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) wird automatisch für uns erstellt und zu einem Online-Audiokontext erweitert. Das wollen wir, weil wir live Sound abspielen möchten.

> [!NOTE]
> Wenn Sie nur Audiodaten verarbeiten möchten, zum Beispiel puffern und streamen, aber nicht abspielen, möchten Sie vielleicht über die Erstellung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) nachdenken.

## Sound laden

Nun, der von uns erstellte Audiokontext benötigt etwas Sound, um durch ihn abgespielt zu werden. Es gibt einige Möglichkeiten, dies mit der API zu tun. Beginnen wir mit einer einfachen Methode — da wir eine Boombox haben, möchten wir wahrscheinlich einen vollständigen Songtrack abspielen. Außerdem ist es der Barrierefreiheit zuliebe schön, diesen Track im DOM zugänglich zu machen. Wir werden den Song auf der Seite mit einem {{htmlelement("audio")}}-Element sichtbar machen.

```html
<audio src="myCoolTrack.mp3"></audio>
```

> [!NOTE]
> Wenn die Sounddatei, die Sie laden, auf einer anderen Domain gehostet wird, müssen Sie das `crossorigin`-Attribut verwenden; siehe [Cross Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) für weitere Informationen.

Um alle schönen Dinge zu nutzen, die wir mit der Web Audio API erhalten, müssen wir die Quelle aus diesem Element erfassen und in den von uns erstellten Kontext _einbinden_. Glücklicherweise gibt es eine Methode, die genau dies ermöglicht — [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource):

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

> [!NOTE]
> Das `<audio>`-Element oben wird im DOM durch ein Objekt des Typs [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) repräsentiert, das über eine eigene Funktionalität verfügt. All dies bleibt intakt; wir machen lediglich den Sound für die Web Audio API verfügbar.

## Sound steuern

Wenn Sie Sound im Web abspielen, ist es wichtig, dem Benutzer die Kontrolle darüber zu geben. Abhängig vom Anwendungsfall gibt es unzählige Optionen, aber wir werden die Funktionalität bereitstellen, um den Sound abzuspielen/pausieren, die Lautstärke des Tracks zu ändern und ihn von links nach rechts zu verschieben.

Das programmatische Steuern von Sound durch JavaScript-Code wird von den Autoplay-Richtlinien der Browser abgedeckt, weshalb es wahrscheinlich ohne Erlaubnis des Benutzers (oder einer Whitelist) blockiert wird. Autoplay-Richtlinien erfordern in der Regel entweder eine ausdrückliche Erlaubnis oder eine Benutzerinteraktion mit der Seite, bevor Skripte das Abspielen von Audio auslösen können.

Diese speziellen Anforderungen bestehen im Wesentlichen, weil unerwartete Sounds störend und aufdringlich sein können und Barrierefreiheitsprobleme verursachen können. Mehr darüber erfahren Sie in unserem Artikel [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay).

Da unsere Skripte Audio als Antwort auf ein Benutzereingabeereignis (z. B. einen Klick auf einen Play-Button) abspielen, sind wir in guter Form und sollten keine Probleme mit Autoplay-Blockierungen haben. Lassen Sie uns also mit unserer Play- und Pause-Funktionalität beginnen. Wir haben einen Play-Button, der sich zu einem Pause-Button ändert, wenn der Track abgespielt wird:

```html
<button data-playing="false" role="switch" aria-checked="false">
  <span>Play/Pause</span>
</button>
```

Bevor wir unseren Track abspielen können, müssen wir unseren Audiografen vom Audioquelleingangsknoten zum Ziel verbinden.

Wir haben bereits einen Eingangsknoten erstellt, indem wir unser Audioelement in die API übergeben haben. In den meisten Fällen müssen Sie keinen Ausgangsknoten erstellen; Sie können einfach Ihre anderen Knoten mit [`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination) verbinden, was die Situation für Sie regelt:

```js
track.connect(audioContext.destination);
```

Eine gute Möglichkeit, sich diese Knoten vorzustellen, ist, einen Audiografen zu zeichnen, den Sie visualisieren können. So sieht unser aktueller Audiograf aus:

![Ein Audiograf mit einer Audiosignalquelle, die mit dem Standardziel verbunden ist](graph1.jpg)

Jetzt können wir die Play- und Pause-Funktionalität hinzufügen.

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

Wir müssen auch berücksichtigen, was zu tun ist, wenn der Track das Abspielen beendet. Unser `HTMLMediaElement` löst ein `ended`-Ereignis aus, sobald es mit dem Abspielen fertig ist, sodass wir darauf hören und entsprechenden Code ausführen können:

```js
audioElement.addEventListener("ended", () => {
  playButton.dataset.playing = "false";
});
```

## Sound modifizieren

Lassen Sie uns einige grundlegende Modifikationsknoten untersuchen, um den Sound, den wir haben, zu ändern. Dies ist der Punkt, an dem die Web Audio API wirklich nützlich wird. Lassen Sie uns zuerst die Lautstärke ändern. Dies kann mithilfe eines [`GainNode`](/de/docs/Web/API/GainNode) erfolgen, der repräsentiert, wie groß unsere Schallwelle ist.

Es gibt zwei Möglichkeiten, wie Sie mit der Web Audio API Knoten erstellen können. Sie können die Factory-Methode auf dem Kontext selbst verwenden (z.B. `audioContext.createGain()`) oder über einen Konstruktor des Knotens (z.B. `new GainNode()`). Wir werden in unserem Code die Factory-Methode verwenden:

```js
const gainNode = audioContext.createGain();
```

Jetzt müssen wir unseren Audiografen von zuvor aktualisieren, damit der Eingang mit dem Gain verbunden ist und der Gain-Knoten mit dem Ziel verbunden ist:

```js
track.connect(gainNode).connect(audioContext.destination);
```

Dies wird unseren Audiografen folgendermaßen aussehen lassen:

![Ein Audiograf mit einer Audiosignalquelle, die mit einem Gain-Knoten verbunden ist, der die Audioquelle modifiziert, und dann zum Standardziel führt](graph2.jpg)

Der Standardwert für Gain ist 1; dies hält die aktuelle Lautstärke gleich. Gain kann auf ein Minimum von etwa -3.4028235E38 und ein Maximum von etwa 3.4028235E38 (Float-Zahlenbereich in JavaScript) gesetzt werden. Hier erlauben wir der Boombox, den Gain auf bis zu 2 (doppelt so laut wie das Original) und auf bis zu 0 (das wird unseren Sound effektiv stummschalten) zu verschieben.

Lassen Sie uns dem Benutzer die Möglichkeit geben, dies zu tun — wir verwenden dazu einen [Range-Input](/de/docs/Web/HTML/Reference/Elements/input/range):

```html
<input type="range" id="volume" min="0" max="2" value="1" step="0.01" />
```

> [!NOTE]
> Range-Inputs sind ein wirklich praktischer Eingabetyp zum Aktualisieren von Werten auf Audioknoten. Sie können die Werte eines Ranges festlegen und direkt mit den Parametern des Audioknotens verwenden.

Lassen Sie uns also den Wert dieses Inputs erfassen und den Gain-Wert aktualisieren, wenn der Eingabeknoten vom Benutzer geändert wird:

```js
const volumeControl = document.querySelector("#volume");

volumeControl.addEventListener("input", () => {
  gainNode.gain.value = volumeControl.value;
});
```

> [!NOTE]
> Die Werte von Knotenobjekten (z.B. `GainNode.gain`) sind keine einfachen Werte; sie sind tatsächlich Objekte des Typs [`AudioParam`](/de/docs/Web/API/AudioParam) — diese werden als Parameter bezeichnet. Deshalb müssen wir die `value`-Eigenschaft von `GainNode.gain` setzen, anstatt einfach den Wert auf `gain` direkt zu setzen. Dies ermöglicht es, ihnen viel flexibler zu sein, indem sie den Parameter auf einen spezifischen Satz von Werten zu setzen, um diesen über einen bestimmten Zeitraum zu ändern, zum Beispiel.

Großartig, jetzt kann der Benutzer die Lautstärke des Tracks aktualisieren! Der Gain-Knoten ist der perfekte Knoten, wenn Sie eine Stummfunktion hinzufügen möchten.

## Hinzufügen von Stereo-Panning zu unserer App

Lassen Sie uns einen weiteren Modifikationsknoten hinzufügen, um das, was wir gerade gelernt haben, zu üben.

Es gibt einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode), der das Gleichgewicht des Sounds zwischen den linken und rechten Lautsprechern ändert, wenn der Benutzer über Stereo-Fähigkeiten verfügt.

> [!NOTE]
> Der `StereoPannerNode` ist für einfache Fälle gedacht, in denen Sie nur ein Stereo-Panning von links nach rechts wünschen.
> Es gibt auch einen [`PannerNode`](/de/docs/Web/API/PannerNode), der eine Vielzahl von Steuerungsmöglichkeiten über den 3D-Raum oder die _Raumklangbildung_ bietet, um komplexere Effekte zu erstellen.
> Dies wird in Spielen und 3D-Apps verwendet, um Vögel zu simulieren, die über den Kopf fliegen, oder um Sound von hinten kommen zu lassen, zum Beispiel.

Um es zu visualisieren, gestalten wir unseren Audiografen folgendermaßen:

![Ein Bild, das den Audiografen mit einem Eingabeknoten, zwei Modifikationsknoten (einem Gain-Node und einem Stereo-Panner-Node) und einem Zielknoten zeigt.](graphpan.jpg)

Lassen Sie uns diesmal die Konstruktor-Methode verwenden, um einen Knoten zu erstellen. Wenn wir es auf diese Weise tun, müssen wir den Kontext und alle Optionen, die der spezielle Knoten erfordert, übergeben:

```js
const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);
```

> [!NOTE]
> Die Konstruktor-Methode zur Erstellung von Knoten wird derzeit nicht von allen Browsern unterstützt. Die älteren Factory-Methoden werden breiter unterstützt.

Hier reichen unsere Werte von -1 (ganz links) bis 1 (ganz rechts). Lassen Sie uns wieder einen Range-Input verwenden, um diesen Parameter zu variieren:

```html
<input type="range" id="panner" min="-1" max="1" value="0" step="0.01" />
```

Wir verwenden die Werte aus diesem Input, um unsere Panner-Werte auf die gleiche Weise wie zuvor anzupassen:

```js
const pannerControl = document.querySelector("#panner");

pannerControl.addEventListener("input", () => {
  panner.pan.value = pannerControl.value;
});
```

Passen wir unseren Audiografen erneut an, um alle Knoten miteinander zu verbinden:

```js
track.connect(gainNode).connect(panner).connect(audioContext.destination);
```

Das einzige, was noch zu tun ist, ist die App auszuprobieren: [Sehen Sie sich hier die endgültige Demo live an](https://mdn.github.io/webaudio-examples/audio-basics/).

## Zusammenfassung

Großartig! Wir haben eine Boombox, die unser 'Tape' abspielt, und wir können die Lautstärke und das Stereo-Panning anpassen, was uns einen ziemlich grundlegenden, funktionierenden Audiografen gibt.

Dies macht eine ganze Reihe von Grundlagen aus, die Sie benötigen, um Audio zu Ihrer Website oder Web-App hinzuzufügen. Es gibt viel mehr Funktionalität in der Web Audio API, aber sobald Sie das Konzept der Knoten und des Aufbaus Ihres Audiografen verstanden haben, können wir uns mit komplizierteren Funktionen befassen.

## Weitere Beispiele

Es gibt weitere Beispiele, um mehr über die Web Audio API zu erfahren.

Der [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) ist eine unterhaltsame Stimmenmanipulations- und Schallvisualisierungs-App, mit der Sie verschiedene Effekte und Visualisierungen auswählen können. Die Anwendung ist ziemlich rudimentär, aber sie demonstriert die gleichzeitige Nutzung mehrerer Funktionen der Web Audio API. ([Führen Sie den Voice-change-O-matic live aus](https://mdn.github.io/webaudio-examples/voice-change-o-matic/)).

![Eine Benutzeroberfläche mit einer Schallwelle, die angezeigt wird, und Optionen zur Auswahl von Stimmeneffekten und Visualisierungen.](voice-change-o-matic.png)

Eine andere speziell zur Demonstration der Web Audio API entwickelte Anwendung ist das [Violent Theremin](https://mdn.github.io/webaudio-examples/violent-theremin/), eine einfache Webanwendung, die es Ihnen ermöglicht, Tonhöhe und Lautstärke durch Bewegen Ihres Mauszeigers zu ändern. Es bietet auch eine psychedelische Lichtshow ([siehe den Violent Theremin Quellcode](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin)).

![Eine Seite voller Regenbogenfarben mit zwei Buttons, die mit Bildschirm löschen und stumm beschriftet sind.](violent-theremin.png)

Siehe auch unser [webaudio-examples Repo](https://github.com/mdn/webaudio-examples) für weitere Beispiele.
