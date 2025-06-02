---
title: Grundlagen zu plattformübergreifendem Audio
slug: Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

Dieser Artikel bietet:

- einen grundlegenden Leitfaden zur Erstellung eines plattformübergreifenden HTML-Audioplayers mit allen zugehörigen Attributen, Eigenschaften und Ereignissen erklärt
- einen Leitfaden zu benutzerdefinierten Steuerelementen, die mit der Media API erstellt wurden

## Einfaches Audio-Beispiel

Der folgende Code ist ein Beispiel für eine grundlegende Audioimplementierung mit HTML5:

```html
<audio controls>
  <source src="audio-file.mp3" type="audio/mpeg" />
  <source src="audio-file.ogg" type="audio/ogg" />
  <!-- fallback for non-supporting browsers goes here -->
  <p>
    Your browser does not support HTML audio, but you can still
    <a href="audio-file.mp3">download the music</a>.
  </p>
</audio>
```

> [!NOTE]
> Sie können auch eine MP4-Datei anstelle von MP3 verwenden. MP4-Dateien enthalten typischerweise [AAC](https://en.wikipedia.org/wiki/Advanced_Audio_Coding)-kodiertes Audio. Sie können `type="audio/mp4"` verwenden. (Derzeit unterstützen Browser, die mp3 unterstützen, auch mp4-Audio.)

- Hier definieren wir ein {{ htmlelement("audio") }}-Element mit mehreren Quellen – dies tun wir, da nicht alle Browser die gleichen Audioformate unterstützen. Um eine angemessene Abdeckung sicherzustellen, sollten wir mindestens zwei verschiedene Formate angeben. Die beiden Formate, die die maximale Abdeckung bieten, sind mp3 und ogg vorbis.
- Dies erreichen wir mit dem {{ htmlelement("source") }}-Element, das die Attribute `src` und `type` verwendet.

  - `src` enthält den Pfad zur zu ladenden Audiodatei (relativ oder absolut).
  - `type` wird verwendet, um den Browser über den Dateityp zu informieren. Wenn es weggelassen wird, versuchen die meisten Browser, dies aus der Dateiendung zu erraten.

- Wenn das {{ htmlelement("audio") }}-Element nicht unterstützt wird, werden {{ htmlelement("audio") }} und {{ htmlelement("source") }} ignoriert. Allerdings wird jeder unterstützte Text oder jedes definierte Element innerhalb des {{ htmlelement("audio") }}-Tags angezeigt oder ausgeführt. Daher ist der ideale Ort, um auf Inkompatibilität hinzuweisen oder eine Fallback-Lösung zu erstellen, vor dem schließenden `</audio>`-Tag. In diesem Fall haben wir einen Absatz bereitgestellt, der einen Link zum direkten Herunterladen des Audios enthält.
- Das `controls`-Attribut im {{ htmlelement("audio") }}-Element wird angegeben, wenn der Browser die Standard-Wiedergabesteuerungen bereitstellen soll. Wenn Sie dieses Attribut nicht angeben, werden keine Steuerungen angezeigt – und Sie müssen stattdessen Ihre eigenen Steuerungen erstellen und deren Funktionalität mit der Media API programmieren (siehe unten). Dies kann jedoch ein guter Ansatz sein, da die Standardsteuerungen in verschiedenen Browsern unterschiedlich aussehen. Das Erstellen eigener Steuerungen stellt sicher, dass das Aussehen der Steuerungen in allen Browsern konsistent ist.

## HTML-Audio im Detail

Nachdem wir nun ein einfaches Beispiel betrachtet haben, lassen Sie uns nun die verschiedenen Aspekte von HTML-Audio im Detail erkunden.

### Audio-HTML-Attribute

Mit dem Audioelement können wir eine Anzahl von Attributen festlegen, um genauer zu bestimmen, wie Audio initialisiert wird.

#### autoplay

Die Angabe von `autoplay` sorgt dafür, dass das Audio so schnell wie möglich und ohne Benutzerinteraktion zu spielen beginnt — kurz gesagt, das Audio wird automatisch abgespielt.

```html
<audio autoplay>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen häufig ignoriert und seine Verwendung wird nicht empfohlen, es sei denn, sie ist wirklich notwendig. Automatisch abgespieltes Audio (und Video) ist in der Regel wirklich störend. Zudem haben Browser Richtlinien, die das automatische Abspielen in vielen Situationen vollständig blockieren. Weitere Informationen finden Sie im [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay).

#### loop

Das `loop`-Attribut sorgt dafür, dass das Audioclip am Ende zurück zum Anfang springt und erneut zu spielen beginnt.

```html
<audio loop>…</audio>
```

#### muted

Wenn das Audio stumm (ohne Ton) starten soll, fügen Sie das `muted`-Attribut hinzu.

```html
<audio muted>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen häufig ignoriert.

#### preload

Das `preload`-Attribut ermöglicht es Ihnen, eine Präferenz dafür anzugeben, wie der Browser das Audio vorlädt, d.h. welchen Teil der Datei er herunterlädt, wenn das {{ htmlelement("audio") }}-Element initialisiert wird und bevor der Wiedergabeknopf gedrückt wird.

`preload` kann 3 verschiedene Werte annehmen:

1. `none`: Nichts herunterladen, bevor der Wiedergabeknopf gedrückt wird.
2. `metadata`: Die Audio-Metadaten herunterladen; dies ist in der Regel die beste Option, da es Ihnen ermöglicht, Informationen wie Audio-Länge zuzugreifen und anzuzeigen und dem Browser ermöglicht, herauszufinden, welche Audiodatei verwendet werden sollte.
3. `auto`: Die gesamte Audiodatei so schnell wie möglich herunterladen. Dies ist in der Regel keine gute Option, es sei denn, Sie können garantieren, dass Ihre Benutzer über eine schnelle Netzwerkverbindung verfügen.

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen häufig ignoriert.

```html
<audio preload="auto">…</audio>
```

#### controls

Wir geben das `controls`-Attribut an, wenn der Browser die Standard-Wiedergabesteuerungen bereitstellen soll.

```html
<audio controls>…</audio>
```

#### src

Wie oben erwähnt, können Sie das {{ htmlelement("source") }}-Element verwenden, um eine oder mehrere Quell-Audiodateien anzugeben. Alternativ können Sie das `src`-Attribut direkt im {{ htmlelement("audio") }}-Element verwenden, um eine einzelne Quelldatei anzugeben.

```html
<audio src="audio-file.mp3">…</audio>
```

#### type

Wie oben erwähnt, ist es eine gute Praxis, ein `type`-Attribut zusammen mit dem `src`-Attribut anzugeben, um sicherzustellen, dass der Browser weiß, welchen Dateityp er erhält. Das `type`-Attribut gibt den MIME-Typ oder Internet Media Type der Datei an.

```html
<audio src="audio-file.mp3" type="audio/mpeg">…</audio>
```

### Manipulation des Audioelements mit JavaScript

Zusätzlich zur Möglichkeit, verschiedene Attribute in HTML festzulegen, verfügt das {{ htmlelement("audio") }}-Element über mehrere Eigenschaften und Methoden, die Sie über JavaScript manipulieren können.

Gegeben folgendes HTML:

```html
<audio id="my-audio" src="audio-file.mp3">…</audio>
```

Sie können das {{htmlelement("audio") }}-Element so erfassen:

```js
const audio = document.getElementById("my-audio");
```

Alternativ können Sie ein neues Element erstellen. Hier ist ein Beispiel für das Erstellen eines {{ htmlelement("audio") }}-Elements, das Festlegen der abzuspielenden Medien, das Abspielen und Anhalten sowie das Abspielen ab 5 Sekunden in das Audio:

```js
const audio = document.createElement("audio");

if (audio.canPlayType("audio/mpeg")) {
  audio.setAttribute("src", "audio-file.mp3");
}

if (audio.canPlayType("audio/ogg")) {
  audio.setAttribute("src", "audio-file.ogg");
}

alert("play");

audio.play();

alert("stop");

audio.pause();

alert("play from 5 seconds in");

audio.currentTime = 5;
audio.play();
```

Lassen Sie uns die verfügbaren Eigenschaften und Methoden näher untersuchen.

#### play

Die `play()`-Methode wird verwendet, um den Audio abzuspielen. Sie nimmt keine Parameter.

```js
audio.play();
```

#### pause

Die `pause()`-Methode wird verwendet, um den Audio anzuhalten. Sie nimmt keine Parameter.

```js
audio.pause();
```

> [!NOTE]
> Es gibt keine Stoppmethode – um eine Stopfunktion zu implementieren, müssen Sie die Medien anhalten und dann den Wert der [`currentTime`](#currenttime)-Eigenschaft auf 0 setzen.

#### canPlayType

Die `canPlayType()`-Methode fragt den Browser, ob ein bestimmter Audiotyp unterstützt wird. Sie nimmt den Mime-Typ des zu überprüfenden Typs als Parameter.

```js
if (audio.canPlayType("audio/mpeg")) {
  // It's supported.
  // Do something here!
}
```

`canPlayType()` gibt einen von drei Werten zurück:

1. `probably`
2. `maybe`
3. "" (ein leerer String)

In der Praxis überprüfen wir normalerweise, ob das Ergebnis wahr oder falsch ist. Nicht-leere Strings sind wahr.

> [!NOTE]
> Eine sehr frühe Spezifikation gab an, dass der Browser `no` anstelle eines leeren Strings zurückgeben sollte, aber glücklicherweise sind die Anzahl der Personen, die ältere Browser verwenden, die diese Version der Spezifikation implementieren, sehr gering und weit entfernt.

#### currentTime

Die `currentTime`-Eigenschaft ruft die aktuelle Zeit ab oder legt diese fest, zu der das Audio abgespielt werden soll. Dies ist in vielerlei Hinsicht nützlich, zum Beispiel, da `play()` keinen Parameter nimmt, müssen wir den Punkt, von dem abgespielt werden soll, separat festlegen, wenn wir nicht wollen, dass er 0 ist.

Der Wert von `currentTime` ist eine Zahl, die die Zeit in Sekunden darstellt.

```js
if (audio.currentTime > 5) {
  audio.currentTime = 3;
}
```

#### volume

Die `volume`-Eigenschaft erlaubt es uns, die Lautstärke des Audios festzulegen, als eine Zahl zwischen 0 und 1.

```js
// set the volume at 50%
audio.volume = 0.5;
```

## Erstellen Ihres eigenen benutzerdefinierten Audioplayers

Die JavaScript-Medien-API ermöglicht es Ihnen, Ihren eigenen benutzerdefinierten Player zu erstellen. Lassen Sie uns ein sehr minimales Beispiel betrachten. Wir können HTML und JavaScript kombinieren, um einen Player mit einem Wiedergabe- und einem Pausenschalter zu erstellen. Zuerst richten wir das Audio im HTML ein, ohne das `controls`-Attribut, da wir unsere eigenen Steuerelemente erstellen:

```html
<audio id="my-audio">
  <source src="audio-file.mp3" type="audio/mpeg" />
  <source src="audio-file.ogg" type="audio/ogg" />
  <!-- place fallback here as <audio> supporting browsers will ignore it -->
  <p>Download<a href="audio-file.mp3">audio-file.mp3</a></p>
</audio>

<!-- custom play and pause buttons -->
<button id="play">play</button>
<button id="pause">pause</button>
```

Als Nächstes fügen wir einige Funktionalitäten für den Player mit JavaScript hinzu:

```js
window.onload = () => {
  const audio = document.getElementById("my-audio");
  const play = document.getElementById("play");
  const pause = document.getElementById("pause");

  // associate functions with the 'onclick' events
  play.onclick = playAudio;
  pause.onclick = pauseAudio;

  function playAudio() {
    audio.play();
  }

  function pauseAudio() {
    audio.pause();
  }
};
```

## Medienladereignisse

Oben haben wir gezeigt, wie Sie einen Audioplayer erstellen können, aber was, wenn wir Fortschritte, Pufferung anzeigen und die Tasten nur aktivieren möchten, wenn die Medien bereit sind, abgespielt zu werden? Glücklicherweise gibt es eine Reihe von Ereignissen, die wir nutzen können, um unseren Player genau zu informieren, was passiert.

Zuerst schauen wir uns den Medialadeprozess in der richtigen Reihenfolge an:

### loadstart

Das `loadstart`-Ereignis teilt uns mit, dass der Ladeprozess gestartet hat und der Browser eine Verbindung zum Medium herstellt.

```js
audio.addEventListener("loadstart", () => {
  // Grabbing the file
});
```

### durationchange

Wenn Sie nur wissen wollen, sobald die Dauer Ihrer Medien festgelegt ist, ist dies das Ereignis für Sie. Dies kann nützlich sein, da der Anfangswert für Dauer `NaN` (Not a Number) ist, was Sie Ihren Benutzern wahrscheinlich nicht anzeigen möchten.

```js
audio.addEventListener("durationchange", () => {
  // You can display the duration now
});
```

### loadedmetadata

Metadaten können aus mehr als nur der Dauer bestehen – wenn Sie warten möchten, bis alle Metadaten heruntergeladen sind, bevor Sie etwas tun, können Sie das `loadedmetadata`-Ereignis erkennen.

```js
audio.addEventListener("loadedmetadata", () => {
  // You can display the duration now
});
```

### loadeddata

Das `loadeddata`-Ereignis wird ausgelöst, wenn das erste Stück Medien ankommt. Der Spielkopf ist in Position, aber noch nicht ganz bereit zu spielen.

```js
audio.addEventListener("loadeddata", () => {
  // You could display the playhead now
});
```

### progress

Das `progress`-Ereignis zeigt an, dass das Herunterladen von Medien noch im Gange ist. Es ist gute Praxis, an diesem Punkt eine Art 'Lader' anzuzeigen.

```js
audio.addEventListener("progress", () => {
  // you could let the user know the media is downloading
});
```

### canplay

`canplay` ist ein nützliches Ereignis, das Sie erkennen können, um festzustellen, ob die Medien bereit sind, abgespielt zu werden. Sie könnten beispielsweise benutzerdefinierte Steuerungen deaktivieren, bis dieses Ereignis eintritt.

```js
audio.addEventListener("canplay", () => {
  // Audio is ready to play
});
```

### canplaythrough

`canplaythrough` ist ähnlich wie `canplay`, informiert Sie jedoch darüber, dass die Medien bereit sind, vollständig abgespielt zu werden (das heißt, die Datei wurde vollständig heruntergeladen oder es wird geschätzt, dass sie rechtzeitig heruntergeladen wird, sodass Pufferstopps nicht auftreten).

```js
audio.addEventListener("canplaythrough", () => {
  // Audio is ready to play all the way through
});
```

### Reihenfolge der Medienladereignnisse

Um es zusammenzufassen, die Reihenfolge der Medienladereignisse lautet:

`loadstart` > `durationchange` > `loadedmetadata` > `loadeddata` > `progress` > `canplay` > `canplaythrough`

### Unterbrechung der Ladeereignisse

Wir haben auch einige Ereignisse zur Verfügung, die ausgelöst werden, wenn es irgendeine Art von Unterbrechung im Medienladeprozess gibt.

- suspend
  - : Mediendaten werden nicht mehr abgefragt, obwohl die Datei nicht vollständig heruntergeladen wurde.
- abort
  - : Das Herunterladen der Mediendaten wurde abgebrochen, jedoch nicht aufgrund eines Fehlers.
- error
  - : Beim Herunterladen der Mediendaten tritt ein Fehler auf.
- emptied
  - : Der Medienpuffer wurde geleert, möglicherweise aufgrund eines Fehlers oder weil die `load()`-Methode aufgerufen wurde, um sie neu zu laden.
- stalled
  - : Mediendaten sind unerwartet nicht mehr verfügbar.

## Medienwiedergabeereignisse

Wir haben auch eine weitere Reihe von Ereignissen, die nützlich sind, um auf den Zustand der Medienwiedergabe zu reagieren.

### timeupdate

Das `timeupdate`-Ereignis wird jedes Mal ausgelöst, wenn sich die `currentTime`-Eigenschaft ändert. In der Praxis geschieht dies alle 250 Millisekunden. Dieses Ereignis kann verwendet werden, um den Fortschritt der Wiedergabe anzuzeigen.

```js
audio.addEventListener("timeupdate", () => {
  // Update something related to playback progress
});
```

### playing

Das `playing`-Ereignis wird initiiert, wenn die Wiedergabe bereit ist zu starten, nachdem sie aufgrund von Medienfehlstand unterbrochen wurde.

### waiting

Das `waiting`-Ereignis wird ausgelöst, wenn die Wiedergabe aufgrund von Medienfehlstand gestoppt wurde, obwohl erwartet wird, dass sie fortgesetzt wird, sobald Daten verfügbar sind.

### play

Das `play`-Ereignis wird initiiert, nachdem die `play()`-Methode zurückgegeben wurde oder wenn das `autoplay`-Attribut die Wiedergabe veranlasst hat zu beginnen. Dies ist der Zeitpunkt, an dem der Zustand der Medien von pausiert zu spielen wechselt.

### pause

Das `pause`-Ereignis wird ausgelöst, nachdem die `pause()`-Methode zurückgegeben wurde. Dies ist der Zeitpunkt, an dem der Zustand der Medien von spielen zu pausiert wechselt.

### ended

Das `ended`-Ereignis wird initiiert, wenn das Ende der Medien erreicht ist.

```js
audio.addEventListener("ended", () => {
  // Do something once audio track has finished playing
});
```

### volumechange

Das `volumechange`-Ereignis zeigt an, dass sich die Lautstärke geändert hat; das beinhaltet auch das Stummschalten.

## Ein Audioplayer mit Rückmeldung

Betrachten Sie dieses HTML-Snippet:

```html
<audio id="my-audio">
  <source
    src="http://jPlayer.org/audio/mp3/Miaow-07-Bubble.mp3"
    type="audio/mpeg" />
  <source
    src="http://jPlayer.org/audio/ogg/Miaow-07-Bubble.ogg"
    type="audio/ogg" />
  <!-- place fallback here as <audio> supporting browsers will ignore it -->
  <a href="audio-file.mp3">audio-file.mp3</a>
</audio>

<div id="controls">
  <span id="loading">loading</span>
  <button id="play">play</button>
  <button id="pause">pause</button>
</div>
<div id="progress">
  <div id="bar"></div>
</div>
```

Stilisiert wie folgt:

```css
#controls {
  width: 80px;
  float: left;
}

#progress {
  margin-left: 80px;
  border: 1px solid black;
}

#bar {
  height: 20px;
  background-color: green;
  width: 0;
}

#play,
#pause {
  display: none; /* hide until media is ready */
}
```

Nun lassen Sie uns das Ganze mit JavaScript verbinden:

```js
const audio = document.getElementById("my-audio");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const loading = document.getElementById("loading");
const bar = document.getElementById("bar");

function displayControls() {
  loading.style.display = "none";
  play.style.display = "block";
}

// Check that the media is ready before displaying the controls
if (audio.paused) {
  displayControls();
} else {
  // not ready yet - wait for canplay event
  audio.addEventListener("canplay", () => {
    displayControls();
  });
}

play.addEventListener("click", () => {
  audio.play();
  play.style.display = "none";
  pause.style.display = "block";
});

pause.addEventListener("click", () => {
  audio.pause();
  pause.style.display = "none";
  play.style.display = "block";
});

// Display progress
audio.addEventListener("timeupdate", () => {
  // Sets the percentage
  bar.style.width = `${Math.floor(
    (audio.currentTime / audio.duration) * 100,
  )}%`;
});
```

Sie sollten mit etwas Ähnlichem enden:

![Ein einfacher Audioplayer mit Wiedergabe-/Pause-Schalter und Suchleiste](simpleplayer.png)

### Suchen mit der Suchleiste

Das ist ein guter Anfang, aber es wäre schön, wenn man das Audio über die Fortschrittsleiste navigieren könnte. Glücklicherweise ist dies nicht allzu schwer zu implementieren.

Zuerst führen wir ein schnelles Update der Fortschrittsleisten-CSS durch, um den Handzeiger beim Überfahren anzuzeigen:

```css
#progress {
  margin-left: 80px;
  border: 1px solid black;
  cursor: pointer;
}
```

Dann fügen wir den Code hinzu, der den Klick erkennt und den 'Spielkopf' an die richtige Position bewegt:

```js
const progress = document.getElementById("progress");

progress.addEventListener("click", (e) => {
  // Calculate the normalized position clicked
  const clickPosition = (e.pageX - progress.offsetLeft) / progress.offsetWidth;
  const clickTime = clickPosition * audio.duration;

  // Move the playhead to the correct position
  audio.currentTime = clickTime;
});
```

### Pufferung

OK, wir kommen dem näher, aber es gibt noch ein weiteres nützliches Stück Information, das wir anzeigen können: die Menge an Audio, die vorab gepuffert oder heruntergeladen wurde.

Es gibt ein Paar Eigenschaften, die wir noch nicht betrachtet haben, `buffered` und `seekable`.

#### buffered

Diese Eigenschaft lässt uns wissen, welche Teile des Audios gepuffert (im Voraus heruntergeladen) wurden. Sie gibt ein Objekt namens `TimeRanges` zurück.

```js
bufferedTimeRanges = audio.buffered;
```

#### seekable

Die `seekable`-Eigenschaft informiert darüber, ob Sie direkt zu diesem Teil der Medien springen können, ohne weiteres Puffern.

```js
seekableTimeRanges = audio.seekable;
```

#### Pufferereignisse

Es gibt auch ein Paar von Ereignissen, die mit der Pufferung zusammenhängen:

- `seeking`
  - : Das `seeking`-Ereignis wird ausgelöst, wenn Medien gesucht werden.
- `seeked`
  - : `seeked` tritt auf, wenn sich das `seeking`-Attribut auf `false` ändert.

> [!NOTE]
> Sie können mehr über [Pufferung, Suche und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges) an anderer Stelle lesen.

## Siehe auch

- [Pufferung, Suche und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
- [HTMLMediaElement-Ereignisse](/de/docs/Web/API/HTMLMediaElement#events)
- [Ereignisreferenz > Medien](/de/docs/Web/Events#media)
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
- [jPlayer](https://jplayer.org/): Eine Open-Source-Audio- und Video-Bibliothek für jQuery und Zepto.
