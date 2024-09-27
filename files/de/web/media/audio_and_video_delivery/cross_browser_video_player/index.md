---
title: Erstellen eines plattformübergreifenden Video-Players
slug: Web/Media/Audio_and_video_delivery/cross_browser_video_player
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Dieser Artikel beschreibt einen einfachen HTML-Video-Player, der die Media- und Fullscreen-APIs verwendet. Zusätzlich zur Vollbildanzeige bietet der Player benutzerdefinierte Steuerelemente anstelle der standardmäßigen Browsereinstellungen. Die Player-Steuerelemente werden nicht über das für die Funktionalität notwendige Maß hinaus gestaltet; eine vollständige Gestaltung des Players wird in einem zukünftigen Artikel behandelt.

## Funktionales Beispiel

Unser Beispiel-Video-Player zeigt einen Clip aus einem Open-Source-Film namens [Tears of Steel](https://mango.blender.org/about/) und enthält typische Videosteuerungen.

![eine Aufnahme eines Video-Players mit mehreren Steuertasten wie Play, Pause und Stopp. Das Video zeigt eine Gruppe von Männern, die gegen eine Gruppe von Robotern kämpfen.](video-player-example.png)

## HTML-Markup

Zu Beginn schauen wir uns das HTML an, das den Player bildet.

### Das Video

Zuerst wird das {{ htmlelement("video") }}-Element definiert, eingebettet in ein {{ htmlelement("figure") }}-Element, das als Videobehälter fungiert. Für jeden, der mit HTML-Markup und dem {{ htmlelement("video") }}-Element vertraut ist, sollte hier nichts Überraschendes dabei sein.

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
    <!-- Offer download -->
    <a href="video/tears-of-steel-battle-clip-medium.mp4">Download MP4</a>
  </video>
  <figcaption>
    &copy; Blender Foundation |
    <a href="http://mango.blender.org">mango.blender.org</a>
  </figcaption>
</figure>
```

Obwohl dieser Player sein eigenes benutzerdefiniertes Steuerelement-Set definiert, wird das `controls`-Attribut dennoch zum {{ htmlelement("video") }}-Element hinzugefügt, und das Standard-Steuerelement-Set des Players wird später mit JavaScript ausgeschaltet. Auf diese Weise haben Benutzer, die JavaScript deaktiviert haben (aus welchen Gründen auch immer), immer noch Zugriff auf die nativen Steuerelemente des Browsers.

Für das Video wird ein Posterbild definiert und das `preload`-Attribut auf `metadata` gesetzt, was den Browser darüber informiert, dass er zunächst nur versuchen soll, die Metadaten aus der Videodatei zu laden und nicht die gesamte Videodatei. Dies stellt dem Player Daten wie Videodauer und Format zur Verfügung.

Dem Player werden drei verschiedene Videoquellen zur Verfügung gestellt: MP4, WebM und Ogg. Die Verwendung dieser unterschiedlichen Quellenformate bietet die beste Chance, auf allen Browsern, die HTML-Video unterstützen, unterstützt zu werden. Weitere Informationen zu Videoformaten und Browser-Kompatibilität finden Sie unter [unterstützte Medienformate](/de/docs/Web/Media/Formats#browser_compatibility).

Der obige Code würde die Wiedergabe des Videos in den meisten Browsern mit dem Standard-Steuerelement-Set des Browsers ermöglichen. Der nächste Schritt besteht darin, ein benutzerdefiniertes Steuerelement-Set ebenfalls in HTML zu definieren, das zur Steuerung des Videos verwendet wird.

### Die Steuerelemente

Die meisten standardmäßigen Videosteuerungen in Browsern bieten folgende Funktionen:

- Abspielen/Pause
- Stummschaltung
- Lautstärkeregelung
- Fortschrittsbalken
- Vorwärtsspringen
- Vollbildmodus

Das benutzerdefinierte Steuerelement-Set wird diese Funktionalität ebenfalls unterstützen, mit der zusätzlichen Funktion einer Stopp-Taste.

Auch hier ist das HTML ziemlich einfach und verwendet eine ungeordnete Liste mit `list-style-type:none`, um die Steuerelemente einzuschließen, wobei jedes ein Listenelement mit `float:left` ist. Für den Fortschrittsbalken wird das `progress`-Element verwendet. Diese Liste wird nach dem {{ htmlelement("video") }}-Element, jedoch innerhalb des {{ htmlelement("figure") }}-Elements eingefügt (dies ist wichtig für die Vollbildfunktionalität, die später erklärt wird).

```html
<ul id="video-controls" class="controls">
  <li><button id="playpause" type="button">Play/Pause</button></li>
  <li><button id="stop" type="button">Stop</button></li>
  <li class="progress">
    <progress id="progress" value="0" min="0"></progress>
  </li>
  <li><button id="mute" type="button">Mute/Unmute</button></li>
  <li><button id="volinc" type="button">Vol+</button></li>
  <li><button id="voldec" type="button">Vol-</button></li>
  <li><button id="fs" type="button">Fullscreen</button></li>
</ul>
```

Jede Taste erhält eine `id`, sodass sie einfach mit JavaScript zugänglich ist.

Die Steuerelemente sind zunächst mit einem CSS `display:none` versteckt und werden mit JavaScript aktiviert. Wenn ein Benutzer JavaScript deaktiviert hat, wird das benutzerdefinierte Steuerelement-Set nicht angezeigt, und er kann ungehindert das Standard-Steuerelement-Set des Browsers verwenden.

Natürlich ist dieses benutzerdefinierte Steuerelement-Set derzeit nutzlos und tut nichts: Lassen Sie uns die Situation mit JavaScript verbessern.

## Verwendung der Media API

HTML bietet eine JavaScript [Media API](/de/docs/Web/API/HTMLMediaElement), die Entwicklern Zugriff auf und Kontrolle über HTML-Medien ermöglicht. Diese API wird verwendet, um das oben definierte benutzerdefinierte Steuerelement-Set tatsächlich funktional zu machen. Zusätzlich wird die Vollbildtaste die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) verwenden, eine weitere W3C-API, die die Fähigkeit von Webbrowsern steuert, Apps im Vollbildmodus anzuzeigen.

### Einrichtung

Bevor man sich mit den einzelnen Tasten befasst, sind einige Initialisierungsaufrufe erforderlich.

Zunächst ist es sinnvoll, zu überprüfen, ob der Browser das {{ htmlelement("video") }}-Element tatsächlich unterstützt und das benutzerdefinierte Steuerelement-Set nur dann einzurichten, wenn dies der Fall ist. Dies erfolgt durch die Überprüfung, ob ein erstelltes {{ htmlelement("video") }}-Element [die `canPlayType()`-Methode](/de/docs/Web/API/HTMLMediaElement/canPlayType) unterstützt, die jedes unterstützte HTML-{{ htmlelement("video") }}-Element haben sollte.

```js
const supportsVideo = !!document.createElement("video").canPlayType;
if (supportsVideo) {
  // set up custom controls
  // …
}
```

Sobald bestätigt wurde, dass der Browser HTML-Video tatsächlich unterstützt, ist es Zeit, die benutzerdefinierten Steuerelemente einzurichten. Es werden Variablen benötigt, die auf HTML-Elemente verweisen:

```js
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
```

Wie bereits erwähnt, müssen jetzt die Standard-Steuerelemente des Browsers deaktiviert und die benutzerdefinierten angezeigt werden:

```js
// Hide the default controls
video.controls = false;

// Display the user defined video controls
videoControls.style.display = "block";
```

Sind diese Schritte erledigt, wird nun eine Variable benötigt, die auf jede der Tasten verweist:

```js
const playpause = document.getElementById("playpause");
const stop = document.getElementById("stop");
const mute = document.getElementById("mute");
const volinc = document.getElementById("volinc");
const voldec = document.getElementById("voldec");
const progress = document.getElementById("progress");
const fullscreen = document.getElementById("fs");
```

Mit diesen Handles können jetzt Events an jede der benutzerdefinierten Steuertasten angehängt werden, um sie interaktiv zu machen. Die meisten dieser Tasten benötigen einen einfachen `click`-Event-Listener, der hinzugefügt wird, und eine im Media API definierte Methode und/oder Attribute, die am Video aufgerufen/geprüft werden.

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

Wenn ein `click`-Event auf der Abspielen/Pause-Taste erkannt wird, überprüft der Handler zunächst, ob das Video pausiert ist oder endet (über die `paused`- und `ended`-Attribute der Media API); falls ja, verwendet er die `play()`-Methode, um das Video abzuspielen. Andernfalls muss das Video abgespielt werden, sodass es mit der `pause()`-Methode pausiert wird.

### Stopp

```js
stop.addEventListener("click", (e) => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});
```

Die Media API hat keine `stop`-Methode, um dies zu simulieren, wird das Video angehalten und sein `currentTime` (d. h. die aktuelle Abspielposition des Videos) und die Position des {{ htmlelement("progress") }}-Elements auf 0 gesetzt (mehr dazu später beim {{ htmlelement("progress") }}-Element).

### Stummschaltung

```js
mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
});
```

Die Stummschalttaste ist eine einfach umschaltbare Taste, die das `muted`-Attribut der Media API verwendet, um das Video stummzuschalten: Dies ist ein boolescher Wert, der anzeigt, ob das Video stummgeschaltet ist oder nicht. Um die Umschaltung zu ermöglichen, wird es auf das Gegenteil von sich selbst gesetzt.

### Lautstärke

```js
volinc.addEventListener("click", (e) => {
  alterVolume("+");
});
voldec.addEventListener("click", (e) => {
  alterVolume("-");
});
```

Zwei Lautstärkereglertasten wurden definiert, eine zum Erhöhen und eine zum Verringern der Lautstärke. Eine benutzerdefinierte Funktion, `alterVolume(direction)`, wurde erstellt, die dies behandelt:

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

Diese Funktion verwendet das `volume`-Attribut der Media API, das den aktuellen Lautstärkewert des Videos hält. Gültige Werte für dieses Attribut sind 0 und 1 und alles dazwischen. Die Funktion prüft den `dir`-Parameter, der anzeigt, ob die Lautstärke erhöht (+) oder verringert (-) werden soll, und handelt entsprechend. Die Funktion ist so definiert, dass die `volume`-Attribut des Videos in Schritten von 0.1 erhöht oder verringert wird und sicherstellt, dass es nicht unter 0 oder über 1 geht.

### Fortschritt

Beim oben im HTML definierten {{ htmlelement("progress") }}-Element wurden nur zwei Attribute gesetzt, `value` und `min`, beide mit einem Wert von 0. Die Funktion dieser Attribute ist selbsterklärend, wobei `min` den minimal erlaubten Wert des `progress`-Elements und `value` seinen aktuellen Wert angibt. Es muss auch einen Maximalwert haben, damit es seinen Bereich korrekt anzeigen kann, und dies kann über das `max`-Attribut geschehen, das auf die maximale Abspielzeit des Videos gesetzt werden muss. Diese wird aus dem `duration`-Attribut des Videos erhalten, das wiederum Teil der Media API ist.

Idealerweise ist der korrekte Wert des `duration`-Attributs des Videos verfügbar, wenn das `loadedmetadata`-Event ausgelöst wird, das auftritt, wenn die Metadaten des Videos geladen wurden:

```js
video.addEventListener("loadedmetadata", () => {
  progress.setAttribute("max", video.duration);
});
```

Leider kann in einigen mobilen Browsern, wenn das `loadedmetadata`-Event ausgelöst wird — falls es überhaupt ausgelöst wird — `video.duration` möglicherweise nicht den korrekten Wert oder gar keinen Wert haben. Es muss also etwas anderes getan werden. Mehr dazu weiter unten.

Ein weiteres Event, `timeupdate`, wird regelmäßig ausgelöst, während das Video abgespielt wird. Dieses Event eignet sich ideal, um den Wert des Fortschrittsbalkens zu aktualisieren, indem es auf den Wert des `currentTime`-Attributs des Videos gesetzt wird, was angibt, wie weit das Video derzeit abgespielt wird.

```js
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
});
```

Wenn das `timeupdate`-Event ausgelöst wird, wird das `value`-Attribut des `progress`-Elements auf die `currentTime` des Videos gesetzt. Dieser Bereich hat eine solide CSS-Hintergrundfarbe, die ihm hilft, dasselbe visuelle Feedback als ein {{ htmlelement("progress") }}-Element zu bieten.

Zurück zum oben erwähnten `video.duration`-Problem, wenn das `timeupdate`-Event ausgelöst wird, sollte das `duration`-Attribut des Videos nun in den meisten mobilen Browsern den korrekten Wert haben. Davon kann Gebrauch gemacht werden, um den `max`-Attribut des `progress`-Elements einzustellen, falls er derzeit nicht gesetzt ist:

```js
video.addEventListener("timeupdate", () => {
  if (!progress.getAttribute("max"))
    progress.setAttribute("max", video.duration);
  progress.value = video.currentTime;
});
```

> [!NOTE]
> Weitere Informationen und Ideen zu Fortschrittsbalken und Pufferrückmeldungen finden Sie unter [Medienpufferung, Suche und Zeitbereiche](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges).

### Vorwärtsspringen

Ein weiteres Merkmal der meisten Standard-Videokontrollsets von Browsern ist die Möglichkeit, auf den Fortschrittsbalken des Videos zu klicken, um zu einem anderen Punkt im Video zu "springen". Dies kann auch erreicht werden, indem ein einfacher `click`-Event-Listener zum `progress`-Element hinzugefügt wird:

```js
progress.addEventListener("click", (e) => {
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});
```

Diese Codezeile verwendet die geklickte Position, um (ungefähr) zu berechnen, wo im `progress`-Element der Benutzer geklickt hat, und bewegt das Video zu dieser Position, indem das `currentTime`-Attribut gesetzt wird.

### Vollbild

Die Fullscreen-API sollte einfach zu verwenden sein: Der Benutzer klickt auf eine Taste, wenn das Video im Vollbildmodus ist: abbrechen, sonst Vollbildmodus aktivieren.

Die Vollbildtaste wird verborgen, wenn die Fullscreen-API nicht aktiviert ist:

```js
if (!document?.fullscreenEnabled) {
  fullscreen.style.display = "none";
}
```

Die Vollbildtaste muss tatsächlich etwas tun. Wie die anderen Tasten wird ein `click`-Event-Handler angehängt, der eine benutzerdefinierte Funktion `handleFullscreen` aufruft:

```js
fullscreen.addEventListener("click", (e) => {
  handleFullscreen();
});
```

Die `handleFullscreen`-Funktion ist wie folgt definiert:

```js
function handleFullscreen() {
  if (document.fullscreenElement !== null) {
    // The document is in fullscreen mode
    document.exitFullscreen();
    setFullscreenData(false);
  } else {
    // The document is not in fullscreen mode
    videoContainer.requestFullscreen();
    setFullscreenData(true);
  }
}
```

Wenn sich der Browser derzeit im Vollbildmodus befindet, muss dieser beendet und umgekehrt. Interessanterweise muss `document` verwendet werden, um den Vollbildmodus zu beenden/abzubrechen, während jedes HTML-Element den Vollbildmodus anfordern kann, hier wird der `videoContainer` verwendet, da er auch die benutzerdefinierten Steuerelemente enthält, die ebenfalls mit dem Video im Vollbildmodus erscheinen sollten.

Eine weitere benutzerdefinierte Funktion — `setFullscreenData()` — wird ebenfalls aufgerufen, die den Wert eines `data-fullscreen`-Attributs am `videoContainer` setzt (dies nutzt [`data-states`](https://ultimatecourses.com/blog/stop-toggling-classes-with-js-use-behaviour-driven-dom-manipulation-with-data-states#data-state-attributes)).

```js
function setFullscreenData(state) {
  videoContainer.setAttribute("data-fullscreen", !!state);
}
```

Diese wird verwendet, um einige grundlegende CSS zu setzen, um das Styling der benutzerdefinierten Steuerelemente zu verbessern, wenn sie im Vollbildmodus sind (siehe den Beispielcode für weitere Details). Wenn ein Video in den Vollbildmodus wechselt, wird normalerweise eine Nachricht angezeigt, die anzeigt, dass der Benutzer die _Esc_-Taste drücken kann, um den Vollbildmodus zu beenden, daher muss der Code auch relevante Events naschen, um die `setFullscreenData()`-Funktion aufzurufen, um sicherzustellen, dass das Control-Styling korrekt ist:

```js
document.addEventListener("fullscreenchange", (e) => {
  setFullscreenData(!!document.fullscreenElement);
});
```

## Siehe auch

- {{ htmlelement("video") }} für Referenzmaterial
- [Verwendung von HTML Audio und Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) für weitere Techniken
- [Von den HTML-Audio- und Videoelementen unterstützte Medienformate](/de/docs/Web/Media/Formats)
