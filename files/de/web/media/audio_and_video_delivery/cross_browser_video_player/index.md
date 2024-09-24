---
title: Erstellen eines plattformübergreifenden Videoplayers
slug: Web/Media/Audio_and_video_delivery/cross_browser_video_player
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Dieser Artikel beschreibt einen einfachen HTML-Videoplayer, der die Media- und Fullscreen-APIs verwendet. Zusätzlich zur Funktion im Vollbildmodus verfügt der Player über benutzerdefinierte Steuerelemente anstelle der standardmäßigen Browser-Controls. Die Steuerelemente des Players werden über die Grundfunktionen hinaus nicht gestylt; das vollständige Styling des Players wird in einem zukünftigen Artikel behandelt.

## Funktionierendes Beispiel

Unser Beispiel-Videoplayer zeigt einen Clip aus einem Open-Source-Film namens [Tears of Steel](https://mango.blender.org/about/) und enthält typische Videosteuerungen.

![Ein Screenshot eines Videoplayers mit mehreren Steuerelement-Schaltflächen wie Abspielen, Pause und Stoppen. Das Video zeigt eine Gruppe von Männern, die gegen eine Gruppe von Robotern kämpfen.](video-player-example.png)

## HTML Markup

Um zu beginnen, betrachten wir das HTML, das den Player bildet.

### Das Video

Zuerst wird das {{ htmlelement("video") }}-Element definiert, eingebettet in ein {{ htmlelement("figure") }}-Element, das als Videocontainer fungiert. Für jemanden, der mit HTML-Markup und dem {{ htmlelement("video") }}-Element vertraut ist, sollte hier nichts Überraschendes vorkommen.

```html
<figure id="videoContainer">
  <video id="video" controls preload="metadata" poster="img/poster.jpg">
    <source
      src="video/tears-of-steel-battle-clip-medium.mp4"
      type="video/mp4" />
    <source
      src="video/tears-of-steel-battle-clip-medium.webm"
      type="video/webm" />
    <source
      src="video/tears-of-steel-battle-clip-medium.ogg"
      type="video/ogg" />
    <!-- Angebot zum Herunterladen -->
    <a href="video/tears-of-steel-battle-clip-medium.mp4">MP4 herunterladen</a>
  </video>
  <figcaption>
    &copy; Blender Foundation |
    <a href="http://mango.blender.org">mango.blender.org</a>
  </figcaption>
</figure>
```

Obwohl dieser Player ein eigenes benutzerdefiniertes Steuerelementsatz definiert, wird das `controls`-Attribut dennoch dem {{ htmlelement("video") }}-Element hinzugefügt, und die Standard-Steuerelemente des Players werden später mit JavaScript deaktiviert. Auf diese Weise können Benutzer, die JavaScript deaktiviert haben (aus welchem Grund auch immer), immer noch auf die nativen Steuerelemente des Browsers zugreifen.

Ein Posterbild ist für das Video definiert, und das `preload`-Attribut ist auf `metadata` gesetzt, was den Browser informiert, dass er zunächst nur versuchen sollte, die Metadaten aus der Videodatei zu laden, anstatt die gesamte Videodatei. Dies stellt dem Player Daten wie Videodauer und -format zur Verfügung.

Für den Player werden drei verschiedene Videoquellen bereitgestellt: MP4, WebM und Ogg. Die Verwendung dieser unterschiedlichen Quellformate bietet die beste Chance, in allen Browsern, die HTML-Video unterstützen, unterstützt zu werden. Für weitere Informationen zu Videoformaten und Browserkompatibilität siehe [unterstützte Medienformate](/de/docs/Web/Media/Formats#browser_compatibility).

Der obige Code würde die Wiedergabe des Videos in den meisten Browsern mit dem Standard-Steuerelementsatz des Browsers ermöglichen. Der nächste Schritt besteht darin, einen benutzerdefinierten Steuerelementsatz ebenfalls in HTML zu definieren, der zur Steuerung des Videos verwendet wird.

### Der Steuerelementsatz

Die meisten Standard-Videosteuerungen von Browsern bieten die folgende Funktionalität:

- Abspielen/Pause
- Stummschalten
- Lautstärkeregelung
- Fortschrittsleiste
- Vorspulen
- Vollbildmodus

Der benutzerdefinierte Steuerelementsatz wird auch diese Funktionalität unterstützen, mit der Ergänzung einer Stoppschaltfläche.

Wieder einmal ist das HTML recht einfach und verwendet eine ungeordnete Liste mit `list-style-type:none`, um die Steuerelemente einzuschließen, von denen jedes ein Listenelement mit `float:left` ist. Für die Fortschrittsleiste wird das `progress`-Element genutzt. Diese Liste wird nach dem {{ htmlelement("video") }}-Element, aber innerhalb des {{ htmlelement("figure") }}-Elements eingefügt (dies ist wichtig für die Vollbildfunktionalität, die später erläutert wird).

```html
<ul id="video-controls" class="controls">
  <li><button id="playpause" type="button">Abspielen/Pause</button></li>
  <li><button id="stop" type="button">Stopp</button></li>
  <li class="progress">
    <progress id="progress" value="0" min="0"></progress>
  </li>
  <li><button id="mute" type="button">Stummschalten/Entstummung</button></li>
  <li><button id="volinc" type="button">Vol+</button></li>
  <li><button id="voldec" type="button">Vol-</button></li>
  <li><button id="fs" type="button">Vollbild</button></li>
</ul>
```

Jede Schaltfläche erhält eine `id`, damit sie leicht mit JavaScript zugänglich ist.

Die Steuerelemente sind anfangs mit einem CSS-`display:none` ausgeblendet und werden mit JavaScript aktiviert. Wenn ein Benutzer JavaScript deaktiviert hat, wird der benutzerdefinierte Steuerelementsatz nicht angezeigt und er kann die Standard-Steuerelemente des Browsers ungehindert verwenden.

Natürlich ist dieser benutzerdefinierte Steuerelementsatz derzeit nutzlos und bewirkt nichts: Verbessern wir die Situation mit JavaScript.

## Verwendung der Media-API

HTML verfügt über eine JavaScript [Media-API](/de/docs/Web/API/HTMLMediaElement), die Entwicklern Zugriff auf und Kontrolle über HTML-Medien ermöglicht. Diese API wird verwendet, um das oben definierte benutzerdefinierte Steuerelementsatz tatsächlich funktional zu machen. Darüber hinaus wird die Vollbild-Schaltfläche die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) verwenden, einer weiteren W3C-API, die die Fähigkeit von Webbrowsern steuert, Apps im Vollbildmodus darzustellen.

### Setup

Bevor man sich mit den einzelnen Schaltflächen befasst, sind einige Initialisierungsaufrufe erforderlich.

Zunächst ist es eine gute Idee, zu prüfen, ob der Browser das {{ htmlelement("video") }}-Element tatsächlich unterstützt, und die benutzerdefinierten Steuerelemente nur dann einzurichten, wenn er es tut. Dies geschieht, indem überprüft wird, ob ein erstelltes {{ htmlelement("video") }}-Element [die Methode `canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) unterstützt, die jedes unterstützte HTML-{{ htmlelement("video") }}-Element haben sollte.

```js
const supportsVideo = !!document.createElement("video").canPlayType;
if (supportsVideo) {
  // Benutzerdefinierte Steuerelemente einrichten
  // …
}
```

Nachdem bestätigt wurde, dass der Browser HTML-Video unterstützt, ist es an der Zeit, die benutzerdefinierten Steuerelemente einzurichten. Es sind Variablen erforderlich, die auf HTML-Elemente verweisen:

```js
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
```

Wie bereits erwähnt, müssen nun die Standard-Steuerelemente des Browsers deaktiviert und die benutzerdefinierten Steuerelemente angezeigt werden:

```js
// Die Standard-Steuerelemente ausblenden
video.controls = false;

// Benutzerdefinierte Videosteuerungen anzeigen
videoControls.style.display = "block";
```

Damit benötigen wir nun eine Variable, die auf jede der Schaltflächen verweist:

```js
const playpause = document.getElementById("playpause");
const stop = document.getElementById("stop");
const mute = document.getElementById("mute");
const volinc = document.getElementById("volinc");
const voldec = document.getElementById("voldec");
const progress = document.getElementById("progress");
const fullscreen = document.getElementById("fs");
```

Mit diesen Handles können jetzt Ereignisse an jede der benutzerdefinierten Steuerungsschaltflächen angehängt werden, um sie interaktiv zu machen. Die meisten dieser Schaltflächen erfordern, dass ein einfacher `click`-Ereignis-Listener hinzugefügt wird, und eine in der Media-API definierte Methode und/oder Attribute auf das Video angewendet/geprüft werden.

### Abspielen/Pause

```js
playpause.addEventListener("click", (e) => {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
});
```

Wenn ein `click`-Ereignis auf der Abspielen/Pause-Schaltfläche festgestellt wird, überprüft der Handler zuerst, ob das Video derzeit pausiert ist oder beendet wurde (über die `paused`- und `ended`-Attribute der Media-API); wenn ja, verwendet es die `play()`-Methode, um das Video wiederzugeben. Andernfalls muss das Video abgespielt werden, so dass es mit der `pause()`-Methode pausiert wird.

### Stopp

```js
stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});
```

Die Media-API hat keine `stop`-Methode, daher wird das Video angehalten, um dies zu imitieren, und sein `currentTime` (d.h. die aktuelle Wiedergabeposition des Videos) sowie die Position des {{ htmlelement("progress") }}-Elements wird auf 0 gesetzt (mehr dazu über das {{ htmlelement("progress") }}-Element später).

### Stummschalten

```js
mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
});
```

Die Stummschalt-Schaltfläche ist eine einfache Umschaltschaltfläche, die das `muted`-Attribut der Media-API verwendet, um das Video stummzuschalten: Dies ist ein boolescher Wert, der anzeigt, ob das Video stummgeschaltet ist oder nicht. Um es zu toggeln, setzen wir es auf das Inverse von sich selbst.

### Lautstärke

```js
volinc.addEventListener("click", (e) => {
  alterVolume("+");
});
voldec.addEventListener("click", (e) => {
  alterVolume("-");
});
```

Es wurden zwei Lautstärkeregler-Schaltflächen definiert, eine zur Erhöhung und eine zur Verringerung der Lautstärke. Eine Benutzer-definierte Funktion `alterVolume(direction)` wurde erstellt, die sich darum kümmert:

```js
function alterVolume(dir) {
  const currentVolume = Math.floor(video.volume * 10) / 10;
  if (dir === "+" && currentVolume < 1) {
    video.volume += 0.1;
  } else if (dir === "-" && currentVolume > 0) {
    video.volume -= 0.1;
  }
}
```

Diese Funktion nutzt das `volume`-Attribut der Media-API, das den aktuellen Lautstärkewert des Videos hält. Gültige Werte für dieses Attribut sind 0 und 1 sowie alles dazwischen. Die Funktion überprüft den `dir`-Parameter, der angibt, ob die Lautstärke erhöht (+) oder verringert (-) werden soll, und handelt entsprechend. Die Funktion ist so definiert, dass sie das `volume`-Attribut des Videos in Schritten von 0.1 erhöht oder verringert und sicherstellt, dass es nicht unter 0 oder über 1 geht.

### Fortschritt

Als das {{ htmlelement("progress") }}-Element im HTML oben definiert wurde, wurden nur zwei Attribute gesetzt, `value` und `min`, die beide auf 0 gesetzt sind. Die Funktion dieser Attribute erklärt sich von selbst, wobei `min` den minimal zulässigen Wert des `progress`-Elements und `value` den aktuellen Wert angibt. Es muss auch ein maximaler Wert gesetzt werden, damit es seinen Bereich korrekt anzeigen kann, und dies kann über das `max`-Attribut erfolgen, das auf die maximale Wiedergabezeit des Videos gesetzt werden muss. Dies wird aus dem `duration`-Attribut des Videos gewonnen, das wiederum Teil der Media-API ist.

Idealerweise steht der korrekte Wert des `duration`-Attributs des Videos zur Verfügung, wenn das `loadedmetadata`-Ereignis ausgelöst wird, das auftritt, wenn die Metadaten des Videos geladen wurden:

```js
video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
```

Leider hat das `duration`-Attribut des Videos in einigen mobilen Browsern möglicherweise nicht den korrekten Wert oder sogar überhaupt keinen Wert, wenn `loadedmetadata` ausgelöst wird — wenn es überhaupt ausgelöst _wird_. Daher muss etwas anderes getan werden. Mehr dazu weiter unten.

Ein weiteres Ereignis, `timeupdate`, wird periodisch ausgelöst, während das Video abgespielt wird. Dieses Ereignis eignet sich ideal zum Aktualisieren des Wertes der Fortschrittsleiste, indem der Wert des `currentTime`-Attributs des Videos festgelegt wird, das angibt, wie weit das Video derzeit wiedergegeben wird.

```js
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
});
```

Da das `timeupdate`-Ereignis ausgelöst wird, wird das `value`-Attribut des `progress`-Elements auf das `currentTime`-Attribut des Videos gesetzt. Dieser Spann hat eine solide CSS-Hintergrundfarbe, die ihm hilft, das gleiche visuelle Feedback wie ein {{ htmlelement("progress") }}-Element zu bieten.

Zurück zu dem oben erwähnten `video.duration`-Problem, wenn das `timeupdate`-Ereignis ausgelöst wird, sollte das `duration`-Attribut des Videos in den meisten mobilen Browsern nun den korrekten Wert haben. Dies kann genutzt werden, um das `max`-Attribut des `progress`-Elements zu setzen, falls es derzeit nicht gesetzt ist:

```js
video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});
```

> [!NOTE]
> Für weitere Informationen und Ideen zu Fortschrittsleisten und Pufferungsrückmeldungen lesen Sie [Media buffering, seeking, and time ranges](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges).

### Vorspulen

Ein weiteres Merkmal der meisten Standard-Videosteuerungen der Browser ist die Möglichkeit, auf die Fortschrittsleiste des Videos zu klicken, um zu einem anderen Punkt im Video "vorzuspulen". Dies kann auch erreicht werden, indem ein einfacher `click`-Ereignis-Listener zum `progress`-Element hinzugefügt wird:

```js
progress.addEventListener("click", (e) => {
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

Dieser Code nutzt die angeklickte Position, um (grob) herauszufinden, wo im `progress`-Element der Benutzer geklickt hat, und um das Video auf diese Position zu verschieben, indem das `currentTime`-Attribut des Videos gesetzt wird.

### Vollbild

Die Fullscreen-API sollte einfach zu verwenden sein: Der Benutzer klickt auf eine Schaltfläche, wenn das Video im Vollbildmodus ist: beenden, andernfalls in den Vollbildmodus wechseln.

Die Vollbild-Schaltfläche wird ausgeblendet, wenn die Fullscreen-API nicht aktiviert ist:

```js
if (!document?.fullscreenEnabled) {
  fullscreen.style.display = "none";
}
```

Die Vollbild-Schaltfläche muss tatsächlich etwas bewirken. Wie bei den anderen Schaltflächen ist ein `click`-Ereignis-Handler angehängt, der eine benutzerdefinierte Funktion `handleFullscreen` aufruft:

```js
fullscreen.addEventListener("click", (e) => {
  handleFullscreen();
});
```

Die Funktion `handleFullscreen` ist wie folgt definiert:

```js
function handleFullscreen() {
  if (document.fullscreenElement !== null) {
    // Das Dokument befindet sich im Vollbildmodus
    document.exitFullscreen();
    setFullscreenData(false);
  } else {
    // Das Dokument befindet sich nicht im Vollbildmodus
    videoContainer.requestFullscreen();
    setFullscreenData(true);
  }
}
```

Wenn der Browser derzeit im Vollbildmodus ist, muss er beendet werden, und umgekehrt. Interessanterweise muss `document` verwendet werden, um den Vollbildmodus zu verlassen/abzubrechen, während jedes HTML-Element den Vollbildmodus anfordern kann. Hier wird der `videoContainer` verwendet, da er auch die benutzerdefinierten Steuerungen enthält, die zusammen mit dem Video im Vollbildmodus angezeigt werden sollen.

Eine weitere benutzerdefinierte Funktion — `setFullscreenData()` — wird ebenfalls aufgerufen, die den Wert eines `data-fullscreen`-Attributs am `videoContainer` setzt (dies nutzt [`data-states`](https://ultimatecourses.com/blog/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states#data-state-attributes)).

```js
function setFullscreenData(state) {
  videoContainer.setAttribute("data-fullscreen", !!state);
}
```

Dies wird verwendet, um einige grundlegende CSS zu setzen, um das Styling der benutzerdefinierten Steuerungen zu verbessern, wenn sie sich im Vollbildmodus befinden (siehe den Beispielcode für weitere Details). Wenn ein Video in den Vollbildmodus wechselt, wird normalerweise eine Nachricht angezeigt, die darauf hinweist, dass der Benutzer die _Escape_-Taste drücken kann, um den Vollbildmodus zu verlassen. Der Code muss also auch relevante Ereignisse überwachen, um die Funktion `setFullscreenData()` aufzurufen und sicherzustellen, dass das Steuerungsstyling korrekt ist:

```js
document.addEventListener("fullscreenchange", (e) => {
  setFullscreenData(!!document.fullscreenElement);
});
```

## Siehe auch

- {{ htmlelement("video") }} für Referenzmaterial
- [Verwenden von HTML-Audio und -Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) für mehr Techniken
- [Media-Formate, die von HTML-Audio- und Video-Elementen unterstützt werden](/de/docs/Web/Media/Formats)
