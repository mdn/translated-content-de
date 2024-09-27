---
title: Verwendung der Web Audio API
slug: Web/API/Web_Audio_API/Using_Web_Audio_API
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("Web Audio API")}}

Lassen Sie uns einen Blick darauf werfen, wie Sie mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API) beginnen können. Wir werden uns kurz einige Konzepte ansehen und dann ein einfaches Boombox-Beispiel studieren, mit dem wir einen Audiotrack laden, abspielen und pausieren sowie die Lautstärke und das Stereo-Panning ändern können.

Die Web Audio API ersetzt nicht das {{HTMLElement("audio")}}-Media-Element, sondern ergänzt es, genau wie {{HTMLElement("canvas")}} neben dem {{HTMLElement("img")}}-Element existiert. Ihr Anwendungsfall bestimmt, welche Tools Sie zur Implementierung von Audio verwenden. Wenn Sie die Wiedergabe eines Audiotracks steuern möchten, bietet das `<audio>`-Media-Element eine bessere, schnellere Lösung als die Web Audio API. Wenn Sie komplexere Audioverarbeitung sowie die Wiedergabe durchführen möchten, bietet die Web Audio API weitaus mehr Leistung und Kontrolle.

Ein leistungsstarkes Merkmal der Web Audio API ist, dass sie keine strikte "Soundrufbeschränkung" hat. Zum Beispiel gibt es keine Obergrenze von 32 oder 64 gleichzeitigen Soundaufrufen. Einige Prozessoren können in der Lage sein, mehr als 1.000 gleichzeitige Sounds ohne Stottern abzuspielen.

## Beispielcode

Unsere Boombox sieht so aus:

![Eine Boombox mit Wiedergabe-, Pan- und Lautstärkeregelungen](boombox.png)

Beachten Sie das Retro-Kassettendeck mit einem Wiedergabeknopf und Vol- sowie Pan-Schiebereglern, um die Lautstärke und das Stereo-Panning zu ändern. Wir könnten dies viel komplexer gestalten, aber für den anfänglichen Lernprozess ist dies ideal.

[Sehen Sie sich das abschließende Demo hier auf Codepen an](https://codepen.io/Rumyra/pen/qyMzqN/), oder sehen Sie den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/audio-basics).

## Audiografiken

Alles innerhalb der Web Audio API basiert auf dem Konzept eines Audiografik, das aus Knoten besteht.

Die Web Audio API verarbeitet Audiooperationen in einem **Audio-Kontext** und wurde entwickelt, um **modulare Leitung** zu ermöglichen. Grundlegende Audiooperationen werden mit **Audio-Knoten** durchgeführt, die miteinander verbunden sind, um eine **Audio-Leitungsgrafik** zu bilden. Sie haben Eingangsknoten, die die Quelle der Sounds sind, die Sie manipulieren, Modifikationsknoten, die diese Sounds nach Wunsch ändern, und Ausgangsknoten (Ziele), die es Ihnen ermöglichen, diese Sounds zu speichern oder zu hören.

Mehrere Audioquellen mit unterschiedlichen Kanalbelegungen werden unterstützt, sogar innerhalb eines einzelnen Kontextes. Aufgrund dieses modularen Designs können Sie komplexe Audiofunktionen mit dynamischen Effekten erstellen.

## Audio-Kontext

Um mit der Web Audio API etwas tun zu können, müssen wir eine Instanz des Audio-Kontextes erstellen. Dadurch erhalten wir Zugriff auf alle Funktionen und Fähigkeiten der API.

```js
const audioContext = new AudioContext();
```

Was passiert, wenn wir das tun? Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) wird für uns automatisch erstellt und zu einem Online-Audiokontext erweitert. Das wollen wir, weil wir live Sound abspielen möchten.

> [!NOTE]
> Wenn Sie nur Audiodaten verarbeiten möchten, z. B. puffern und streamen, aber nicht abspielen, sollten Sie darüber nachdenken, ein [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) zu erstellen.

## Sound laden

Jetzt benötigt der von uns erstellte Audiokontext noch etwas Sound, um abgespielt zu werden. Es gibt einige Möglichkeiten, dies mit der API zu tun. Beginnen wir mit einer einfachen Methode — da wir eine Boombox haben, möchten wir höchstwahrscheinlich einen vollständigen Songtrack abspielen. Auch aus Gründen der Barrierefreiheit ist es schön, diesen Track im DOM sichtbar zu machen. Wir stellen den Song auf der Seite über ein {{htmlelement("audio")}}-Element bereit.

```html
<audio src="myCoolTrack.mp3"></audio>
```

> [!NOTE]
> Wenn die Sounddatei, die Sie laden, sich auf einem anderen Domain befindet, müssen Sie das `crossorigin`-Attribut verwenden. Weitere Informationen finden Sie unter [Cross Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS).

Um alle Vorteile der Web Audio API zu nutzen, müssen wir die Quelle aus diesem Element nehmen und sie in den von uns erstellten Kontext "einspeisen". Zum Glück gibt es eine Methode, die genau das ermöglicht — [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource):

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

> [!NOTE]
> Das oben gezeigte `<audio>`-Element wird im DOM durch ein Objekt vom Typ [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) dargestellt, das mit einer eigenen Funktionalität ausgestattet ist. All dies bleibt erhalten; wir ermöglichen lediglich, dass der Sound der Web Audio API zur Verfügung steht.

## Sound steuern

Beim Abspielen von Sound im Web ist es wichtig, dem Benutzer die Kontrolle über den Sound zu geben. Abhängig vom Anwendungsfall gibt es unzählige Optionen, aber wir werden die Funktionen zum Abspielen/Pausieren des Sounds, zum Ändern der Lautstärke und zum Panning des Tracks von links nach rechts bereitstellen.

Das programmatische Steuern von Sound über JavaScript-Code wird von den Autoplay-Richtlinien der Browser abgedeckt und wird wahrscheinlich ohne Erlaubnis blockiert (oder durch eine Zulassungsliste). Autoplay-Richtlinien erfordern in der Regel entweder eine ausdrückliche Erlaubnis oder eine Benutzerinteraktion mit der Seite, bevor Skripte zur Wiedergabe von Audio führen können.

Diese speziellen Anforderungen bestehen im Wesentlichen, weil unerwartete Geräusche störend und aufdringlich sein und zu Zugänglichkeitsproblemen führen können. Weitere Informationen finden Sie in unserem Artikel [Autoplay-Leitfaden für Media und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide).

Da unsere Skripte Audio als Reaktion auf ein Benutzerereignis (z. B. einen Klick auf einen Wiedergabeknopf) abspielen, sind wir in einer guten Ausgangslage und sollten keine Probleme mit der Autoplay-Blockierung haben. Sehen wir uns also zunächst unsere Funktionen zum Abspielen und Pausieren an. Wir haben einen Wiedergabeknopf, der sich in einen Pausenknopf ändert, wenn der Track abgespielt wird:

```html
<button data-playing="false" role="switch" aria-checked="false">
  <span>Play/Pause</span>
</button>
```

Bevor wir unseren Track abspielen können, müssen wir unsere Audiografik vom Audiosource-/Eingabeknoten zum Ziel verbinden.

Wir haben bereits einen Eingabeknoten erstellt, indem wir unser Audioelement in die API eingefügt haben. In der Regel müssen Sie keinen Ausgabeknoten erstellen. Sie können einfach Ihre anderen Knoten mit [`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination) verbinden, das die Situation für Sie regelt:

```js
track.connect(audioContext.destination);
```

Eine gute Möglichkeit, sich diese Knoten vorzustellen, besteht darin, eine Audiografik zu zeichnen, um sie zu visualisieren. So sieht unsere aktuelle Audiografik aus:

![Eine Audiografik mit einer Audiosource, die mit dem Standardziel verbunden ist](graph1.jpg)

Jetzt können wir die Funktionen für Abspielen und Pausieren hinzufügen.

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

Wir müssen auch berücksichtigen, was zu tun ist, wenn der Track abgespielt ist. Unser `HTMLMediaElement` löst ein `ended`-Ereignis aus, sobald es abgespielt ist. Wir können darauf hören und entsprechend Code ausführen:

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

Lassen Sie uns in einige grundlegende Modifikationsknoten eintauchen, um den Sound zu ändern, den wir haben. Hier kommt die Web Audio API wirklich zur Geltung. Zuallererst ändern wir die Lautstärke. Dies kann mit einem [`GainNode`](/de/docs/Web/API/GainNode) erfolgen, der repräsentiert, wie groß unsere Schallwelle ist.

Es gibt zwei Möglichkeiten, Knoten mit der Web Audio API zu erstellen. Sie können die Factory-Methode im Kontext selbst verwenden (z. B. `audioContext.createGain()`) oder den Konstruktor des Knotens (z. B. `new GainNode()`). Wir verwenden in unserem Code die Factory-Methode:

```js
const gainNode = audioContext.createGain();
```

Jetzt müssen wir unsere Audiografik von zuvor aktualisieren, damit der Eingang mit dem Gain verbunden ist und der Gain-Knoten mit dem Ziel:

```js
track.connect(gainNode).connect(audioContext.destination);
```

Dies wird unsere Audiografik so aussehen lassen:

![Eine Audiografik mit einer Audiosource, die mit einem Gain-Knoten verbunden ist, der die Audiosource modifiziert und dann zum Standardziel weitergeht](graph2.jpg)

Der Standardwert für Gain ist 1; das hält die aktuelle Lautstärke gleich. Gain kann auf ein Minimum von etwa -3,4028235E38 und ein Maximum von etwa 3,4028235E38 gesetzt werden (Float-Zahlenbereich in JavaScript). Hier lassen wir die Boombox den Gain auf bis zu 2 (doppelte Lautstärke) und auf 0 (was das Sound effektiv stumm schaltet) bewegen.

Geben wir dem Benutzer die Kontrolle darüber — wir verwenden ein [Range-Input](/de/docs/Web/HTML/Element/input/range):

```html
<input type="range" id="volume" min="0" max="2" value="1" step="0.01" />
```

> [!NOTE]
> Range-Inputs sind ein wirklich praktischer Eingabetyp zur Aktualisierung von Werten in Audio-Knoten. Sie können die Bereiche von Werten festlegen und direkt mit den Parametern des Audio-Knotens verwenden.

Lassen Sie uns den Wert dieses Inputs erfassen und den Gain-Wert aktualisieren, wenn der Eingabeknoten durch den Benutzer geändert wird:

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
> Die Werte von Knotenobjekten (z. B. `GainNode.gain`) sind keine einfachen Werte; sie sind tatsächlich Objekte des Typs [`AudioParam`](/de/docs/Web/API/AudioParam) — dies sind Parameter. Deshalb müssen wir die `value`-Eigenschaft von `GainNode.gain` setzen, anstatt den Wert direkt auf `gain` zu setzen. Dies macht sie viel flexibler und ermöglicht es, dem Parameter eine spezifische Menge von Werten zu übergeben, zwischen denen über einen bestimmten Zeitraum gewechselt wird.

Großartig, jetzt kann der Benutzer die Lautstärke des Tracks ändern! Der Gain-Knoten ist der perfekte Knoten, wenn Sie Stummschaltungsfunktionen hinzufügen möchten.

## Hinzufügen von Stereo-Panning zu unserer App

Lassen Sie uns einen weiteren Modifikationsknoten hinzufügen, um zu üben, was wir gerade gelernt haben.

Es gibt einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)-Knoten, der das Gleichgewicht des Sounds zwischen den linken und rechten Lautsprechern verändert, wenn der Benutzer Stereo-Funktionen hat.

> [!NOTE]
> Der `StereoPannerNode` ist für einfache Fälle gedacht, in denen Sie nur Stereo-Panning von links nach rechts wünschen.
> Es gibt auch einen [`PannerNode`](/de/docs/Web/API/PannerNode), der eine große Kontrolle über 3D-Raum oder Klang _Spatialization_ ermöglicht, um komplexere Effekte zu erzeugen.
> Dieser wird in Spielen und 3D-Apps verwendet, um zum Beispiel Vögel zu simulieren, die über den Benutzer hinwegfliegen, oder um Sounds zu erzeugen, die von hinten kommen.

Um es zu visualisieren, gestalten wir unsere Audiografik so, dass sie folgendermaßen aussieht:

![Ein Bild, das die Audiografik mit einem Eingangsknoten, zwei Modifikationsknoten (einem Gain-Knoten und einem Stereo-Pan-Knoten) und einem Zielknoten zeigt.](graphpan.jpg)

Diesmal verwenden wir die Konstruktormethode zum Erstellen eines Knotens. Wenn wir dies tun, müssen wir den Kontext und alle Optionen übergeben, die der bestimmte Knoten erfordern kann:

```js
const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);
```

> [!NOTE]
> Die Konstruktormethode zum Erstellen von Knoten wird derzeit nicht von allen Browsern unterstützt. Die älteren Factory-Methoden sind weiter verbreitet.

Hier reicht unser Wertebereich von -1 (ganz links) bis 1 (ganz rechts). Verwenden wir erneut einen Eingabetyp, um diesen Parameter zu variieren:

```html
<input type="range" id="panner" min="-1" max="1" value="0" step="0.01" />
```

Wir verwenden die Werte dieses Inputs, um unsere Panner-Werte auf dieselbe Weise anzupassen, wie wir es zuvor getan haben:

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

Lassen Sie uns unsere Audiografik wieder anpassen, um alle Knoten miteinander zu verbinden:

```js
track.connect(gainNode).connect(panner).connect(audioContext.destination);
```

Das Einzige, was noch zu tun bleibt, ist, die App auszuprobieren: [Sehen Sie sich das abschließende Demo hier auf Codepen an](https://codepen.io/Rumyra/pen/qyMzqN/).

## Zusammenfassung

Großartig! Wir haben eine Boombox, die unser 'Tape' abspielt, und wir können die Lautstärke und das Stereo-Panning anpassen, was uns eine ziemlich grundlegende, funktionierende Audiografik bietet.

Das umfasst einige Grundlagen, die Sie benötigen, um Audio zu Ihrer Website oder Web-App hinzuzufügen. Die Web Audio API bietet noch viel mehr Funktionen, aber sobald Sie das Konzept der Knoten und das Zusammenstellen Ihrer Audiografik verstanden haben, können wir uns komplexeren Funktionen zuwenden.

## Weitere Beispiele

Es gibt weitere Beispiele, um mehr über die Web Audio API zu lernen.

Der [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) ist ein lustiger Stimmenmanipulator und eine Web-App zur Klangvisualisierung, mit der Sie verschiedene Effekte und Visualisierungen auswählen können. Die Anwendung ist ziemlich rudimentär, aber sie demonstriert die gleichzeitige Nutzung mehrerer Funktionen der Web Audio API. ([Führen Sie den Voice-change-O-matic live aus](https://mdn.github.io/webaudio-examples/voice-change-o-matic/)).

![Eine Benutzeroberfläche mit einer angezeigten Schallwelle und Optionen zur Auswahl von Stimmeffekten und Visualisierungen.](voice-change-o-matic.png)

Eine weitere speziell entwickelte Anwendung, um die Web Audio API zu demonstrieren, ist das [Violent Theremin](https://mdn.github.io/webaudio-examples/violent-theremin/), eine einfache Webanwendung, mit der Sie Tonhöhe und Lautstärke ändern können, indem Sie den Mauszeiger bewegen. Es bietet auch eine psychedelische Lichtshow ([siehe Violent Theremin Quellcode](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin)).

![Eine Seite voller Regenbogenfarben, mit zwei Buttons, die als Clear screen und mute beschriftet sind.](violent-theremin.png)

Siehe auch unser [webaudio-examples Repo](https://github.com/mdn/webaudio-examples) für weitere Beispiele.
