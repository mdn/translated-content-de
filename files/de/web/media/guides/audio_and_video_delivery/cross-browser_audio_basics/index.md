---
title: Grundlagen von plattformübergreifendem Audio
slug: Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

Dieser Artikel bietet:

- einen grundlegenden Leitfaden zur Erstellung eines plattformübergreifenden HTML-Audioplayers mit Erklärungen zu allen zugehörigen Attributen, Eigenschaften und Ereignissen
- einen Leitfaden zu benutzerdefinierten Steuerelementen, die mit der Media-API erstellt wurden

## Einfaches Audio-Beispiel

Der nachstehende Code ist ein Beispiel für eine einfache Audioimplementierung mit HTML5:

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
> Sie können auch eine MP4-Datei anstelle von MP3 verwenden. MP4-Dateien enthalten typischerweise [AAC](https://en.wikipedia.org/wiki/Advanced_Audio_Coding) kodiertes Audio. Sie können `type="audio/mp4"` verwenden. (Derzeit unterstützen Browser, die mp3 unterstützen, auch mp4-Audio).

- Hier definieren wir ein {{ htmlelement("audio") }}-Element mit mehreren Quellen — dies tun wir, da nicht alle Browser die gleichen Audioformate unterstützen. Um eine angemessene Abdeckung sicherzustellen, sollten wir mindestens zwei verschiedene Formate angeben. Die beiden Formate, die die maximale Abdeckung bieten, sind mp3 und ogg vorbis.
- Dies erreichen wir mit dem {{ htmlelement("source") }}-Element, das die Attribute `src` und `type` verwendet.
  - `src` enthält den Pfad zur zu ladenden Audiodatei (relativ oder absolut).
  - `type` wird verwendet, um den Browser über den Dateityp zu informieren. Wenn es weggelassen wird, versuchen die meisten Browser, diesen aus der Dateierweiterung zu erraten.

- Wenn das {{ htmlelement("audio") }}-Element nicht unterstützt wird, werden {{ htmlelement("audio") }} und {{ htmlelement("source") }} ignoriert. Jedoch wird jeder unterstützte Text oder jedes Element, das Sie innerhalb von {{ htmlelement("audio") }} definieren, angezeigt oder ausgeführt. Daher ist vor dem abschließenden `</audio>`-Tag der ideale Ort, um einen Fallback zu erstellen oder über Inkompatibilitäten zu informieren. In diesem Fall haben wir einen Absatz bereitgestellt, der einen Link zum direkten Herunterladen des Audios enthält.
- Das `controls`-Attribut des {{ htmlelement("audio") }}-Elements wird angegeben, wenn der Browser uns die standardmäßigen Wiedergabesteuerelemente bereitstellen soll. Wenn Sie dieses Attribut nicht angeben, erscheinen keine Steuerelemente — und Sie müssen stattdessen Ihre eigenen Steuerelemente erstellen und deren Funktionalität mit der Media-API programmieren (siehe unten). Das kann jedoch ein guter Ansatz sein, da die Standardsteuerungen in verschiedenen Browsern unterschiedlich aussehen. Das Erstellen Ihrer eigenen Steuerelemente sorgt dafür, dass die Steuerelemente in allen Browsern einheitlich aussehen.

## HTML-Audio im Detail

Nachdem wir uns ein einfaches Beispiel angesehen haben, betrachten wir nun die verschiedenen Aspekte von HTML-Audio im Detail.

### Audio HTML-Attribute

Wir können dem Audioelement eine Reihe von Attributen zuweisen, um weiter zu bestimmen, wie Audio initialisiert wird.

#### autoplay

Die Angabe von `autoplay` bewirkt, dass das Audio so schnell wie möglich und ohne Benutzerinteraktion beginnt — kurz gesagt, das Audio wird automatisch abgespielt.

```html
<audio autoplay>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert, und seine Verwendung wird nicht empfohlen, es sei denn, es ist wirklich notwendig. Automatisch abgespielter Ton (und Video) ist normalerweise sehr störend. Außerdem haben Browser Richtlinien, die das Autoplay in vielen Situationen vollständig blockieren. Weitere Details finden Sie im [Leitfaden zum automatischen Abspielen für Media- und Webaudio-APIs](/de/docs/Web/Media/Guides/Autoplay).

#### loop

Das `loop`-Attribut sorgt dafür, dass das Audio bei Erreichen des Endes des Audio-Clips zum Anfang zurückspringt und erneut abgespielt wird.

```html
<audio loop>…</audio>
```

#### muted

Wenn Sie möchten, dass das Audio stumm geschaltet beginnt (kein Ton), fügen Sie das `muted`-Attribut hinzu.

```html
<audio muted>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert.

#### preload

Das `preload`-Attribut ermöglicht es Ihnen, eine Präferenz dafür anzugeben, wie der Browser das Audio vorlädt, also welchen Teil der Datei er herunterlädt, wenn das {{ htmlelement("audio") }}-Element initialisiert wird, und bevor der Wiedergabeknopf gedrückt wird.

`preload` kann 3 verschiedene Werte annehmen:

1. `none`: Lade nichts herunter, bevor der Wiedergabeknopf gedrückt wird.
2. `metadata`: Lade die Audiometadaten herunter; dies ist normalerweise die beste Option, da es Ihnen ermöglicht, Informationen wie die Audiolänge zuzugreifen und anzuzeigen, sowie es dem Browser ermöglicht, herauszufinden, welche Audiodatei er verwenden soll.
3. `auto`: Lade die gesamte Audiodatei so schnell wie möglich herunter. Dies ist im Allgemeinen keine gute Option, es sei denn, Sie können garantieren, dass Ihre Benutzer eine schnelle Netzverbindung haben.

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert.

```html
<audio preload="auto">…</audio>
```

#### controls

Wir geben das `controls`-Attribut an, wenn wir benötigen, dass der Browser uns die standardmäßigen Wiedergabesteuerelemente bereitstellt.

```html
<audio controls>…</audio>
```

#### src

Wie oben erwähnt, können Sie das {{ htmlelement("source") }}-Element verwenden, um eine oder mehrere Quellen-Audiodateien anzugeben. Alternativ können Sie das `src`-Attribut direkt auf das {{ htmlelement("audio") }}-Element setzen, um eine einzelne Quelldatei anzugeben.

```html
<audio src="audio-file.mp3">…</audio>
```

#### type

Wie oben erwähnt, um sicherzustellen, dass der Browser weiß, welcher Dateityp angegeben wird, ist es eine gute Praxis, ein `type`-Attribut zusammen mit dem `src`-Attribut anzugeben. Das `type`-Attribut spezifiziert den MIME-Typ oder Internet-Mediatyp der Datei.

```html
<audio src="audio-file.mp3" type="audio/mpeg">…</audio>
```

### Manipulation des Audioelements mit JavaScript

Zusätzlich zur Möglichkeit, verschiedene Attribute in HTML anzugeben, bietet das {{ htmlelement("audio") }}-Element eine Reihe von Eigenschaften und Methoden, die Sie mit JavaScript manipulieren können.

Angenommen, das folgende HTML:

```html
<audio id="my-audio" src="audio-file.mp3">…</audio>
```

Sie können das {{htmlelement("audio") }}-Element so abrufen:

```js
const audio = document.getElementById("my-audio");
```

Alternativ können Sie ein neues Element erstellen. Hier ist ein Beispiel für das Erstellen eines {{ htmlelement("audio") }}-Elements, das Einstellen der Medien zur Wiedergabe, des Startens und Anhaltens und dann des Abspielens ab 5 Sekunden im Audio:

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

Lassen Sie uns die verfügbaren Eigenschaften und Methoden im Detail erkunden.

#### play

Die `play()`-Methode wird verwendet, um das Audio zum Abspielen zu bringen. Sie nimmt keine Parameter.

```js
audio.play();
```

#### pause

Die `pause()`-Methode wird verwendet, um das Audio anzuhalten. Sie nimmt keine Parameter.

```js
audio.pause();
```

> [!NOTE]
> Es gibt keine stopp-Methode — um eine Stopp-Funktion zu implementieren, müssen Sie die Medien pausieren und dann die [`currentTime`](#currenttime)-Eigenschaft auf 0 setzen.

#### canPlayType

Die `canPlayType()`-Methode fragt den Browser, ob ein bestimmter Audio-Dateityp unterstützt wird. Sie nimmt den MIME-Typ des Typs, der geprüft werden soll, als Parameter.

```js
if (audio.canPlayType("audio/mpeg")) {
  // It's supported.
  // Do something here!
}
```

`canPlayType()` gibt einen von drei Werten zurück:

1. `probably`
2. `maybe`
3. "" (eine leere Zeichenfolge)

In der Praxis prüfen wir normalerweise, ob das Ergebnis wahr oder falsch ist. Nicht leere Zeichenfolgen sind wahr.

> [!NOTE]
> Eine sehr frühe Spezifikation besagte, dass der Browser `no` anstelle einer leeren Zeichenfolge zurückgeben sollte, aber glücklicherweise ist die Zahl der Personen, die ältere Browser verwenden, die diese Spezifikation implementieren, sehr gering.

#### currentTime

Die `currentTime`-Eigenschaft ruft die aktuelle Zeit ab oder setzt sie, in der das Audio abspielen soll. Dies ist auf viele Arten nützlich, da `play()` keinen Parameter nimmt und wir den Punkt, von dem aus es spielt, separat einstellen müssen, wenn wir nicht wollen, dass er bei 0 beginnt.

Der Wert von `currentTime` ist eine Zahl, die die Zeit in Sekunden darstellt.

```js
if (audio.currentTime > 5) {
  audio.currentTime = 3;
}
```

#### volume

Die `volume`-Eigenschaft ermöglicht es uns, die Lautstärke des Audios als Zahl zwischen 0 und 1 festzulegen.

```js
// set the volume at 50%
audio.volume = 0.5;
```

## Erstellen eines eigenen benutzerdefinierten Audioplayers

Die JavaScript Media-API ermöglicht es Ihnen, Ihren eigenen benutzerdefinierten Player zu erstellen. Lassen Sie uns einen Blick auf ein sehr minimales Beispiel werfen. Wir können HTML und JavaScript kombinieren, um einen Player mit einer Wiedergabe- und einer Pausentaste zu erstellen. Zuerst richten wir das Audio im HTML ein, ohne das `controls`-Attribut, da wir unsere eigenen Steuerelemente erstellen:

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

Als nächstes fügen wir dem Player Funktionalität unter Verwendung von JavaScript hinzu:

```js
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
```

## Medienladeereignisse

Oben haben wir gezeigt, wie Sie einen Audioplayer erstellen können, aber was ist, wenn wir Fortschritte, Pufferung anzeigen und die Tasten erst aktivieren möchten, wenn die Medien bereit zum Abspielen sind? Zum Glück gibt es eine Reihe von Ereignissen, die wir verwenden können, um unserem Player genau mitzuteilen, was passiert.

Zuerst werfen wir einen Blick auf den Medienladeprozess in der Reihenfolge:

### loadstart

Das `loadstart`-Ereignis teilt uns mit, dass der Ladeprozess begonnen hat und der Browser sich mit den Medien verbindet.

```js
audio.addEventListener("loadstart", () => {
  // Grabbing the file
});
```

### durationchange

Wenn Sie nur wissen möchten, wann die Dauer Ihrer Medien feststeht, ist dies das Ereignis für Sie. Dies kann nützlich sein, weil der anfängliche Wert für die Dauer `NaN` (Not a Number) ist, was Sie wahrscheinlich nicht Ihren Benutzern anzeigen möchten.

```js
audio.addEventListener("durationchange", () => {
  // You can display the duration now
});
```

### loadedmetadata

Metadaten können aus mehr als nur Dauer bestehen — wenn Sie warten möchten, bis alle Metadaten heruntergeladen sind, bevor Sie etwas tun, können Sie das `loadedmetadata`-Ereignis erfassen.

```js
audio.addEventListener("loadedmetadata", () => {
  // You can display the duration now
});
```

### loadeddata

Das `loadeddata`-Ereignis wird ausgelöst, wenn das erste bisschen Medien eintrifft. Der Abspielkopf ist in Position, aber noch nicht ganz bereit, um zu spielen.

```js
audio.addEventListener("loadeddata", () => {
  // You could display the playhead now
});
```

### progress

Das `progress`-Ereignis zeigt an, dass der Download der Medien fortschreitet. Es ist eine gute Praxis, an diesem Punkt eine Art 'Lader' anzuzeigen.

```js
audio.addEventListener("progress", () => {
  // you could let the user know the media is downloading
});
```

### canplay

`canplay` ist ein nützliches Ereignis, das Sie erfassen sollten, wenn Sie feststellen möchten, ob die Medien bereit sind, abgespielt zu werden. Sie könnten zum Beispiel benutzerdefinierte Steuerelemente deaktivieren, bis dieses Ereignis auftritt.

```js
audio.addEventListener("canplay", () => {
  // Audio is ready to play
});
```

### canplaythrough

`canplaythrough` ähnelt `canplay`, aber es teilt Ihnen mit, dass die Medien bereit sind, vollständig abgespielt zu werden (das heißt, die Datei ist vollständig heruntergeladen, oder es wird geschätzt, dass sie rechtzeitig heruntergeladen sein wird, sodass keine Pufferstops auftreten).

```js
audio.addEventListener("canplaythrough", () => {
  // Audio is ready to play all the way through
});
```

### Reihenfolge der Medienladeereignisse

Um zusammenzufassen, die Reihenfolge der Medienladeereignisse ist:

`loadstart` > `durationchange` > `loadedmetadata` > `loadeddata` > `progress` > `canplay` > `canplaythrough`

### Ereignisse bei Ladeunterbrechungen

Wir haben auch einige Ereignisse verfügbar, die ausgelöst werden, wenn eine Art Unterbrechung im Medienladeprozess auftritt.

- suspend
  - : Die Mediendaten werden nicht mehr geladen, obwohl die Datei noch nicht vollständig heruntergeladen wurde.
- abort
  - : Der Download der Mediendaten wurde abgebrochen, jedoch nicht aufgrund eines Fehlers.
- error
  - : Ein Fehler tritt auf, während Mediendaten heruntergeladen werden.
- emptied
  - : Der Medienpuffer wurde geleert, möglicherweise aufgrund eines Fehlers oder weil die Methode load() zum erneuten Laden aufgerufen wurde.
- stalled
  - : Mediendaten sind unerwartet nicht mehr verfügbar.

## Medienwiedergabeereignisse

Wir haben auch eine weitere Reihe von Ereignissen, die nützlich sind, um auf den Zustand der Medienwiedergabe zu reagieren.

### timeupdate

Das `timeupdate`-Ereignis wird jedes Mal ausgelöst, wenn sich die `currentTime`-Eigenschaft ändert. In der Praxis geschieht dies alle 250 Millisekunden. Dieses Ereignis kann verwendet werden, um das Anzeigen von Wiedergabe-Fortschritten auszulösen.

```js
audio.addEventListener("timeupdate", () => {
  // Update something related to playback progress
});
```

### playing

Das `playing`-Ereignis wird initiiert, wenn das Abspielen bereit zum Starten ist, nachdem es aufgrund fehlender Mediendaten angehalten wurde.

### waiting

Das `waiting`-Ereignis wird ausgelöst, wenn die Wiedergabe aufgrund fehlender Mediendaten gestoppt wurde, obwohl erwartet wird, dass sie wieder aufgenommen wird, sobald Daten verfügbar sind.

### play

Das `play`-Ereignis wird initiiert, nachdem die `play()`-Methode zurückgegeben wurde oder wenn das `autoplay`-Attribut die Wiedergabe veranlasst hat. Dies ist, wenn der Zustand des Mediums von pausiert zu abspielend wechselt.

### pause

Das `pause`-Ereignis wird ausgelöst, nachdem die `pause()`-Methode zurückgegeben wurde. Dies ist, wenn der Zustand von abspielend zu pausiert wechselt.

### ended

Das `ended`-Ereignis wird initiiert, wenn das Ende der Medien erreicht ist.

```js
audio.addEventListener("ended", () => {
  // Do something once audio track has finished playing
});
```

### volumechange

Das `volumechange`-Ereignis zeigt an, dass sich die Lautstärke geändert hat; dazu gehört auch das Stummschalten.

## Ein Audioplayer mit Feedback

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

Gestylt so:

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

Sie sollten mit etwas wie diesem enden:

![Ein einfacher Audioplayer mit Wiedergabe/Pause-Taste und Suchleiste](simpleplayer.png)

### Navigation mit der Suchleiste

Dies ist ein guter Anfang, aber es wäre schön, das Audio mit der Fortschrittsleiste navigieren zu können. Zum Glück ist es nicht allzu schwierig, dies zu implementieren.

Zuerst aktualisieren wir das CSS der Fortschrittsleiste kurz, um den Handzeiger beim Hover anzuzeigen:

```css
#progress {
  margin-left: 80px;
  border: 1px solid black;
  cursor: pointer;
}
```

Dann fügen wir den Code hinzu, der den Klick erkennt und den 'Abspielkopf' an die richtige Position bewegt:

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

Okay, wir kommen voran, aber es gibt noch ein weiteres nützliches Stück Information, das wir anzeigen können: Wie viel Audio bereits gepuffert oder im Voraus heruntergeladen wurde.

Es gibt ein paar Eigenschaften, die wir noch nicht betrachtet haben, `buffered` und `seekable`.

#### buffered

Diese Eigenschaft informiert uns darüber, welche Teile des Audios gepuffert wurden (im Voraus heruntergeladen). Sie gibt ein sogenanntes `TimeRanges`-Objekt zurück.

```js
bufferedTimeRanges = audio.buffered;
```

#### seekable

Die Eigenschaft seekable informiert Sie darüber, ob Sie direkt zu diesem Teil der Medien springen können, ohne weiteres Puffern.

```js
seekableTimeRanges = audio.seekable;
```

#### Pufferereignisse

Es gibt auch ein paar Ereignisse, die mit dem Puffern zusammenhängen:

- `seeking`
  - : Das `seeking`-Ereignis wird ausgelöst, wenn nach Medien gesucht wird.
- `seeked`
  - : `seeked` tritt auf, wenn sich das `seeking`-Attribut auf `false` ändert.

> [!NOTE]
> Weitere Informationen können Sie in der [Pufferung, Suche und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges) nachlesen.

## Siehe auch

- [Pufferung, Suche und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
- [HTMLMediaElement-Ereignisse](/de/docs/Web/API/HTMLMediaElement#events)
- [Ereignisreferenz > Medien](/de/docs/Web/API/Document_Object_Model/Events#media)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
- [jPlayer](https://jplayer.org/): Eine Open-Source-Audio- und Videobibliothek für jQuery und Zepto.
