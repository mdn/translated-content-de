---
title: Verwenden der Web Audio API
slug: Web/API/Web_Audio_API/Using_Web_Audio_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Web Audio API")}}

Schauen wir uns an, wie man mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API) anfängt. Wir betrachten kurz einige Konzepte und studieren anschließend ein einfaches Boombox-Beispiel, das uns ermöglicht, einen Audiotrack zu laden, abzuspielen, zu pausieren und die Lautstärke sowie das Stereo-Panning zu ändern.

Die Web Audio API ersetzt nicht das {{HTMLElement("audio")}} Media-Element, sondern ergänzt es, ähnlich wie {{HTMLElement("canvas")}} neben dem {{HTMLElement("img")}} Element existiert. Ihr Anwendungsfall wird bestimmen, welche Tools Sie zur Implementierung von Audio verwenden. Wenn Sie die Wiedergabe eines Audiotracks steuern möchten, bietet das `<audio>` Media-Element eine bessere und schnellere Lösung als die Web Audio API. Wenn Sie jedoch eine komplexere Audioverarbeitung sowie die Wiedergabe durchführen möchten, bietet die Web Audio API viel mehr Leistung und Kontrolle.

Ein leistungsstarkes Merkmal der Web Audio API ist, dass sie keine strikte Begrenzung der "Soundaufrufe" hat. Zum Beispiel gibt es keine Obergrenze von 32 oder 64 Soundaufrufen gleichzeitig. Einige Prozessoren können mehr als 1.000 gleichzeitige Sounds ohne Stottern abspielen.

## Beispielcode

Unsere Boombox sieht folgendermaßen aus:

![Ein Boombox mit Wiedergabe-, Pan- und Lautstärkereglern](boombox.png)

Beachten Sie das Retro-Kassettendeck mit Play-Button sowie den Volumen- und Pan-Slidern, mit denen Sie die Lautstärke und das Stereo-Panning ändern können. Wir könnten dies viel komplexer gestalten, aber dies ist ideal für einfaches Lernen in diesem Stadium.

[Sehen Sie sich das endgültige Demo hier auf CodePen an](https://codepen.io/Rumyra/pen/qyMzqN/), oder sehen Sie sich den [Quellcode auf GitHub an](https://github.com/mdn/webaudio-examples/tree/main/audio-basics).

## Audiographen

Alles innerhalb der Web Audio API basiert auf dem Konzept eines Audiographen, der aus Knoten besteht.

Die Web Audio API bearbeitet Audiooperationen innerhalb eines **Audio-Kontextes** und wurde entwickelt, um **modulares Routing** zu ermöglichen. Grundlegende Audiooperationen werden mit **Audio-Knoten** ausgeführt, die miteinander verbunden sind, um einen **Audio-Routing-Graphen** zu bilden. Sie haben Eingabeknoten, die die Quelle der zu manipulierenden Klänge sind, Modifikationsknoten, die diese Klänge nach Wunsch ändern, und Ausgabeknoten (Ziele), die es Ihnen ermöglichen, diese Klänge zu speichern oder zu hören.

Mehrere Audioquellen mit unterschiedlichen Kanallayouts werden unterstützt, auch innerhalb eines einzigen Kontextes. Aufgrund dieses modularen Designs können Sie komplexe Audiofunktionen mit dynamischen Effekten erstellen.

## Audiokontext

Um irgendetwas mit der Web Audio API machen zu können, müssen wir eine Instanz des Audiokontextes erstellen. Dies ermöglicht uns dann den Zugriff auf alle Funktionen und Funktionalitäten der API.

```js
const audioContext = new AudioContext();
```

Was passiert also, wenn wir dies tun? Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) wird automatisch für uns erstellt und zu einem Online-Audiokontext erweitert. Das wollen wir, da wir Live-Sound abspielen möchten.

> [!NOTE]
> Wenn Sie lediglich Audiodaten verarbeiten möchten, beispielsweise puffern und streamen, aber nicht abspielen, sollten Sie in Betracht ziehen, einen [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) zu erstellen.

## Sound laden

Nun braucht der erstellte Audiokontext einige Sounds, die er abspielen kann. Mit der API gibt es einige Möglichkeiten, dies zu tun. Beginnen wir mit einer einfachen Methode – da wir eine Boombox haben, möchten wir höchstwahrscheinlich einen vollständigen Songtrack abspielen. Auch für die Barrierefreiheit ist es schön, diesen Track im DOM anzuzeigen. Wir machen den Song auf der Seite über ein {{htmlelement("audio")}} Element verfügbar.

```html
<audio src="myCoolTrack.mp3"></audio>
```

> [!NOTE]
> Wenn sich die geladene Sounddatei auf einer anderen Domain befindet, müssen Sie das `crossorigin` Attribut verwenden; siehe [Cross Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) für weitere Informationen.

Um alle schönen Dinge nutzen zu können, die wir mit der Web Audio API erhalten, müssen wir die Quelle von diesem Element greifen und sie in den Kontext, den wir erstellt haben, _einspeisen_. Zum Glück gibt es eine Methode, die es uns ermöglicht, genau das zu tun — [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource):

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

> [!NOTE]
> Das `<audio>` Element oben wird im DOM durch ein Objekt des Typs [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) dargestellt, das über seine eigene Funktionalität verfügt. All dies bleibt intakt; wir ermöglichen lediglich, dass der Klang für die Web Audio API verfügbar ist.

## Sound steuern

Beim Abspielen von Sound im Web ist es wichtig, dem Benutzer Kontrolle zu ermöglichen. Abhängig vom Anwendungsfall gibt es eine Vielzahl von Optionen, aber wir werden die Funktionalität bieten, den Sound abzuspielen/pausieren, die Lautstärke des Tracks zu ändern und ihn von links nach rechts zu pannen.

Das programmatische Steuern von Sound aus JavaScript-Code wird von den Autoplay-Richtlinien der Browser abgedeckt, da dies ohne Erlaubnis wahrscheinlich blockiert wird (oder eine Liste von Ausnahmen). Autoplay-Richtlinien erfordern normalerweise entweder eine ausdrückliche Erlaubnis oder eine Benutzerinteraktion mit der Seite, bevor Skripte das Abspielen von Audio auslösen können.

Diese speziellen Anforderungen bestehen im Wesentlichen, weil unerwartete Klänge ärgerlich und aufdringlich sein können und Barrierefreiheitsprobleme verursachen können. Sie können mehr darüber in unserem Artikel [Autoplay-Leitfaden für Media- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay) erfahren.

Da unsere Skripte Audio als Reaktion auf ein Benutzereingabereignis (z.B. ein Klick auf einen Wiedergabeknopf) abspielen, sind wir in guter Form und sollten keine Probleme durch Autoplay-Blockierungen haben. Lassen Sie uns also mit einem Blick auf unsere Abspiel- und Pausenfunktionalität beginnen. Wir haben einen Wiedergabeknopf, der sich in einen Pausenknopf ändert, wenn der Track abgespielt wird:

```html
<button data-playing="false" role="switch" aria-checked="false">
  <span>Play/Pause</span>
</button>
```

Bevor wir unseren Track abspielen können, müssen wir unseren Audiographen vom Audioquellen-/Eingangsknoten bis zum Ziel anschließen.

Wir haben bereits einen Eingangsknoten erstellt, indem wir unser Audioelement in die API übergeben haben. Meistens müssen Sie keinen Ausgabeknoten erstellen, Sie können einfach Ihre anderen Knoten an [`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination) anschließen, das die Situation für Sie handhabt:

```js
track.connect(audioContext.destination);
```

Ein guter Weg, diese Knoten zu visualisieren, ist das Zeichnen eines Audiographen, damit Sie ihn sich vorstellen können. So sieht unser aktueller Audiograph aus:

![ein Audiograph mit einer Audioelementquelle, die mit dem Standard-Ziel verbunden ist](graph1.jpg)

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

Wir müssen auch berücksichtigen, was zu tun ist, wenn der Track zu Ende gespielt ist. Unser `HTMLMediaElement` löst ein `ended` Ereignis aus, wenn es fertig gespielt hat, sodass wir darauf hören und entsprechend Code ausführen können:

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

Lassen Sie uns einige grundlegende Modifikationsknoten untersuchen, um den Sound zu ändern, den wir haben. Hier beginnt die Web Audio API wirklich nützlich zu werden. Zunächst einmal lassen Sie uns die Lautstärke ändern. Dies kann mithilfe eines [`GainNode`](/de/docs/Web/API/GainNode) geschehen, der darstellt, wie groß unsere Klangwelle ist.

Es gibt zwei Möglichkeiten, wie Sie Knoten mit der Web Audio API erstellen können. Sie können die Fabrikmethode im Kontext selbst verwenden (z.B. `audioContext.createGain()`) oder über einen Konstruktor des Knotens (z.B. `new GainNode()`). Wir werden die Fabrikmethode in unserem Code verwenden:

```js
const gainNode = audioContext.createGain();
```

Nun müssen wir unseren Audiographen von vorher aktualisieren, sodass der Eingang mit dem Gain verbunden ist und dann der Gain-Knoten mit dem Ziel verbunden wird:

```js
track.connect(gainNode).connect(audioContext.destination);
```

Dies wird unseren Audiographen so aussehen lassen:

![ein Audiograph mit einer Audioelementquelle, die mit einem Gain-Knoten verbunden ist, der die Audioquelle modifiziert, und dann zum Standardziel geht](graph2.jpg)

Der Standardwert für Gain ist 1; dies hält die aktuelle Lautstärke gleich. Gain kann auf ein Minimum von etwa -3.4028235E38 und ein Maximum von etwa 3.4028235E38 eingestellt werden (Float-Wertbereich in JavaScript). Hier werden wir es der Boombox erlauben, den Gain auf bis zu 2 (doppelte ursprüngliche Lautstärke) zu erhöhen und auf 0 (dies wird unseren Sound effektiv stummschalten) zu senken.

Lassen Sie uns dem Benutzer die Kontrolle darüber geben — wir verwenden ein [Range-Input](/de/docs/Web/HTML/Reference/Elements/input/range):

```html
<input type="range" id="volume" min="0" max="2" value="1" step="0.01" />
```

> [!NOTE]
> Range-Inputs sind eine wirklich praktische Eingabeart, um Werte auf Audioknoten zu aktualisieren. Sie können den Wertebereich eines Range-Inputs festlegen und direkt mit den Parameter der Audioknoten verwenden.

Lassen Sie uns also den Wert dieses Inputs erfassen und den Gain-Wert aktualisieren, wenn der Eingabeknoten seinen Wert durch den Benutzer ändert:

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
> Die Werte von Node-Objekten (z.B. `GainNode.gain`) sind keine einfachen Werte; sie sind tatsächlich Objekte des Typs [`AudioParam`](/de/docs/Web/API/AudioParam) – diese werden Parameter genannt. Deshalb müssen wir die `value`-Eigenschaft von `GainNode.gain` setzen, anstatt den Wert direkt auf `gain` zu setzen. Dies ermöglicht es ihnen, viel flexibler zu sein, da sie es ermöglichen, dem Parameter einen bestimmten Satz von Werten zu übergeben, zwischen denen über einen festgelegten Zeitraum gewechselt wird, beispielsweise.

Großartig, jetzt kann der Benutzer die Lautstärke des Tracks aktualisieren! Der Gain-Knoten ist der perfekte Knoten, wenn Sie Stummschaltfunktionalität hinzufügen möchten.

## Stereo-Panning zu unserer App hinzufügen

Lassen Sie uns einen weiteren Modifikationsknoten hinzufügen, um zu üben, was wir gerade gelernt haben.

Es gibt einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)-Knoten, der das Gleichgewicht des Sounds zwischen den linken und rechten Lautsprechern verändert, wenn der Benutzer Stereo-Fähigkeiten hat.

> [!NOTE]
> Der `StereoPannerNode` ist für einfache Fälle gedacht, in denen Sie nur Stereo-Panning von links nach rechts möchten.
> Es gibt auch einen [`PannerNode`](/de/docs/Web/API/PannerNode), der ein hohes Maß an Kontrolle über einen 3D-Raum oder die Klangspatialisation erlaubt, um komplexere Effekte zu erzeugen.
> Dies wird in Spielen und 3D-Anwendungen verwendet, um beispielsweise Vögel, die über den Kopf fliegen, oder Geräusche, die von hinten kommen, zu erzeugen.

Um dies zu visualisieren, werden wir unseren Audiographen so aussehen lassen:

![Ein Bild, das den Audiographen zeigt, der einen Eingangsknoten, zwei Modifikationsknoten (einen Gain-Knoten und einen Stereo-Panner-Knoten) und einen Zielknoten zeigt.](graphpan.jpg)

Lassen Sie uns diesmal die Konstruktormethode verwenden, um einen Knoten zu erstellen. Wenn wir es auf diese Weise tun, müssen wir den Kontext und alle Optionen, die der jeweilige Knoten akzeptiert, übergeben:

```js
const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);
```

> [!NOTE]
> Die Konstruktormethode zur Erstellung von Knoten wird derzeit nicht von allen Browsern unterstützt. Die älteren Fabrikmethoden sind breiter unterstützt.

Hier reichen unsere Werte von -1 (ganz links) bis 1 (ganz rechts). Lassen Sie uns erneut ein Range-Input verwenden, um diesen Parameter zu variieren:

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

Lassen Sie uns unseren Audiographen erneut anpassen, um alle Knoten miteinander zu verbinden:

```js
track.connect(gainNode).connect(panner).connect(audioContext.destination);
```

Das Einzige, was noch zu tun ist, ist, die App auszuprobieren: [Sehen Sie sich das endgültige Demo hier auf CodePen an](https://codepen.io/Rumyra/pen/qyMzqN/).

## Zusammenfassung

Großartig! Wir haben eine Boombox, die unser 'Tape' abspielt, und wir können die Lautstärke und das Stereo-Panning anpassen, was uns einen ziemlich einfachen funktionierenden Audiographen gibt.

Dies bildet einige grundlegende Anforderungen, die Sie benötigen würden, um Audio zu Ihrer Website oder Web-App hinzuzufügen. Es gibt viel mehr Funktionalität in der Web Audio API, aber sobald Sie das Konzept der Knoten und das Zusammenfügen Ihres Audiographen verstanden haben, können wir uns auf komplexere Funktionalitäten konzentrieren.

## Weitere Beispiele

Es gibt weitere Beispiele, um mehr über die Web Audio API zu lernen.

Der [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) ist eine lustige Sprachmanipulations- und Soundvisualisierungs-Web-App, die es Ihnen ermöglicht, verschiedene Effekte und Visualisierungen auszuwählen. Die Anwendung ist ziemlich rudimentär, zeigt jedoch die gleichzeitige Verwendung mehrerer Web Audio API-Features. ([führen Sie den Voice-change-O-matic live aus](https://mdn.github.io/webaudio-examples/voice-change-o-matic/)).

![Eine Benutzeroberfläche mit einer gezeigten Schallwelle und Optionen zur Auswahl von Stimmeffekten und Visualisierungen.](voice-change-o-matic.png)

Eine weitere Anwendung, die speziell zur Demonstration der Web Audio API entwickelt wurde, ist das [Violent Theremin](https://mdn.github.io/webaudio-examples/violent-theremin/), eine einfache Web-Anwendung, die es Ihnen ermöglicht, Tonhöhe und Lautstärke durch Bewegen des Mauszeigers zu ändern. Es bietet auch eine psychedelische Lightshow ([siehe Violent Theremin Quellcode](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin)).

![Eine Seite voller Regenbogenfarben, mit zwei Schaltflächen, die mit Bildschirm löschen und stummschalten beschriftet sind.](violent-theremin.png)

Sehen Sie sich auch unser [webaudio-examples Repository](https://github.com/mdn/webaudio-examples) für weitere Beispiele an.
