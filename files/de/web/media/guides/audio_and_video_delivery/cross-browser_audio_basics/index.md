---
title: Cross-browser Audio-Grundlagen
slug: Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

Dieser Artikel bietet:

- Einen grundlegenden Leitfaden zum Erstellen eines plattformübergreifenden HTML-Audioplayers mit Erklärungen zu allen damit verbundenen Attributen, Eigenschaften und Ereignissen
- Einen Leitfaden zu benutzerdefinierten Steuerelementen, die mit der Media-API erstellt wurden

## Einfaches Audio-Beispiel

Der untenstehende Code ist ein Beispiel für eine einfache Audio-Implementierung mit HTML5:

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
> Sie können auch eine MP4-Datei anstelle von MP3 verwenden. MP4-Dateien enthalten in der Regel [AAC](https://en.wikipedia.org/wiki/Advanced_Audio_Coding)-codierte Audiodaten. Sie können `type="audio/mp4"` verwenden. (Derzeit unterstützen Browser, die mp3 unterstützen, auch mp4-Audio).

- Hier definieren wir ein {{htmlelement("audio")}}-Element mit mehreren Quellen – wir tun dies, weil nicht alle Browser dieselben Audioformate unterstützen. Um eine angemessene Abdeckung zu gewährleisten, sollten wir mindestens zwei verschiedene Formate angeben. Die beiden Formate, die die maximale Abdeckung bieten, sind mp3 und ogg vorbis.
- Wir tun dies mit dem {{htmlelement("source")}}-Element, das die Attribute `src` und `type` verwendet.

  - `src` enthält den Pfad zur zu ladenden Audiodatei (relativ oder absolut).
  - `type` wird verwendet, um den Browser über den Dateityp zu informieren. Wenn es weggelassen wird, versuchen die meisten Browser, dies anhand der Dateierweiterung zu erraten.

- Wenn das {{htmlelement("audio")}}-Element nicht unterstützt wird, werden {{htmlelement("audio")}} und {{htmlelement("source")}} ignoriert. Jeglicher unterstützter Text oder Elemente, die Sie innerhalb von {{htmlelement("audio")}} definieren, werden jedoch angezeigt oder ausgeführt. Der ideale Ort, um eine Fallback-Lösung zu schaffen oder auf Inkompatibilität hinzuweisen, ist vor dem abschließenden `</audio>`-Tag. In diesem Fall haben wir einen Absatz mit einem Link bereitgestellt, um das Audio direkt herunterzuladen.
- Das `controls`-Attribut im {{htmlelement("audio")}}-Element wird angegeben, wenn wir vom Browser verlangen, uns mit den Standardwiedergabesteuerelementen zu versorgen. Wenn Sie dieses Attribut nicht angeben, werden keine Steuerelemente angezeigt – und Sie müssen stattdessen Ihre eigenen Steuerelemente erstellen und deren Funktionalität mit der Media-API programmieren (siehe unten). Dies kann jedoch ein guter Ansatz sein, da die Standardsteuerelemente je nach Browser unterschiedlich aussehen. Das Erstellen eigener Steuerelemente stellt ein einheitliches Erscheinungsbild über alle Browser hinweg sicher.

## HTML-Audio im Detail

Nachdem wir uns ein einfaches Beispiel angesehen haben, lassen Sie uns nun die verschiedenen Aspekte von HTML-Audio genauer betrachten.

### Audio-HTML-Attribute

Wir können eine Reihe von Attributen mit dem Audio-Element angeben, um weiter zu bestimmen, wie Audio initialisiert wird.

#### autoplay

Das Angeben von `autoplay` bewirkt, dass das Audio so schnell wie möglich und ohne jegliche Benutzerinteraktion zu spielen beginnt – kurz gesagt, das Audio wird automatisch abgespielt.

```html
<audio autoplay>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen häufig ignoriert, und seine Verwendung wird nicht empfohlen, es sei denn, sie ist wirklich notwendig. Automatisch abgespieltes Audio (und Video) ist in der Regel sehr störend. Zudem haben Browser Richtlinien, die das automatische Abspielen unter vielen Umständen vollständig blockieren. Weitere Einzelheiten finden Sie im [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay).

#### loop

Das `loop`-Attribut stellt sicher, dass das Audioclip am Ende des Clips wieder zum Anfang zurückspringt und erneut abspielt.

```html
<audio loop>…</audio>
```

#### muted

Wenn Sie möchten, dass das Audio von Anfang an stummgeschaltet wird (kein Ton), fügen Sie das `muted`-Attribut hinzu.

```html
<audio muted>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen häufig ignoriert.

#### preload

Das `preload`-Attribut ermöglicht es Ihnen, eine Präferenz dafür anzugeben, wie der Browser das Audio vorlädt, mit anderen Worten, welcher Teil der Datei heruntergeladen wird, wenn das {{htmlelement("audio")}}-Element initialisiert wird und bevor der Wiedergabebutton gedrückt wird.

`preload` kann drei verschiedene Werte annehmen:

1. `none`: Nichts herunterladen, bevor der Wiedergabeknopf gedrückt wird.
2. `metadata`: Herunterladen der Audiodaten-Metadaten; dies ist normalerweise die beste Option, da es Ihnen erlaubt, Informationen wie die Audiolänge anzuzeigen und dem Browser zu erlauben, herauszufinden, welche Audiodatei verwendet werden soll.
3. `auto`: Die gesamte Audiodatei so schnell wie möglich herunterladen. Dies ist im Allgemeinen keine gute Option, es sei denn, Sie können garantieren, dass Ihre Benutzer über eine schnelle Netzwerkverbindung verfügen.

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen häufig ignoriert.

```html
<audio preload="auto">…</audio>
```

#### controls

Wir geben das `controls`-Attribut an, wenn wir vom Browser verlangen, uns mit den Standardwiedergabesteuerelementen zu versorgen.

```html
<audio controls>…</audio>
```

#### src

Wie oben erwähnt, können Sie das {{htmlelement("source")}}-Element verwenden, um eine oder mehrere Quellaudiodateien anzugeben. Alternativ können Sie das `src`-Attribut direkt im {{htmlelement("audio")}}-Element verwenden, um eine einzige Quelldatei anzugeben.

```html
<audio src="audio-file.mp3">…</audio>
```

#### type

Wie oben erwähnt, ist es eine gute Praxis, neben dem `src`-Attribut ein `type`-Attribut anzugeben, um sicherzustellen, dass der Browser weiß, welcher Typ von Datei angegeben wird. Das `type`-Attribut gibt den MIME-Typ oder Internet Media Type der Datei an.

```html
<audio src="audio-file.mp3" type="audio/mpeg">…</audio>
```

### Manipulation des Audio-Elements mit JavaScript

Zusätzlich zur Möglichkeit, verschiedene Attribute in HTML anzugeben, ist das {{htmlelement("audio")}}-Element vollständig mit mehreren Eigenschaften und Methoden ausgestattet, die Sie über JavaScript manipulieren können.

Mit folgendem HTML:

```html
<audio id="my-audio" src="audio-file.mp3">…</audio>
```

Sie können das {{htmlelement("audio")}}-Element so erfassen:

```js
const audio = document.getElementById("my-audio");
```

Alternativ können Sie ein neues Element erstellen. Hier ist ein Beispiel für das Erstellen eines {{htmlelement("audio")}}-Elements, das Einstellen des abzuspielenden Mediums, das Abspielen und Pausieren und das Abspielen ab 5 Sekunden im Audio:

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

Lassen Sie uns die verfügbaren Eigenschaften und Methoden genauer untersuchen.

#### play

Die `play()`-Methode wird verwendet, um das Audio abzuspielen. Sie hat keine Parameter.

```js
audio.play();
```

#### pause

Die `pause()`-Methode wird verwendet, um das Audio anzuhalten. Sie hat keine Parameter.

```js
audio.pause();
```

> [!NOTE]
> Es gibt keine Stop-Methode – um eine Stop-Funktion zu implementieren, müssen Sie das Medium anhalten und dann den Wert der [`currentTime`](#currenttime)-Eigenschaft auf 0 setzen.

#### canPlayType

Die `canPlayType()`-Methode fragt den Browser, ob ein bestimmter Audiodateityp unterstützt wird. Sie nimmt den MIME-Typ des zu überprüfenden Typs als Parameter.

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
> Eine sehr frühe Spezifikation sah vor, dass der Browser `no` zurückgeben sollte, anstelle eines leeren Strings, aber glücklicherweise sind die Benutzer älterer Browser, die diese Spezifikation implementieren, heutzutage sehr selten.

#### currentTime

Die `currentTime`-Eigenschaft erhält oder setzt die aktuelle Zeit, zu der das Audio abspielen soll. Dies ist in vielerlei Hinsicht nützlich, zum Beispiel, da `play()` keinen Parameter nimmt, müssen wir den Punkt, ab dem abgespielt werden soll, separat setzen, wenn wir nicht möchten, dass er 0 ist.

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

Die JavaScript-Media-API ermöglicht es Ihnen, Ihren eigenen benutzerdefinierten Player zu erstellen. Werfen wir einen Blick auf ein sehr minimales Beispiel. Wir können HTML und JavaScript kombinieren, um einen Player mit einem Abspiel- und einem Pausenknopf zu erstellen. Zuerst richten wir das Audio im HTML ein, ohne das `controls`-Attribut, da wir unsere eigenen Steuerelemente erstellen:

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

Als nächstes fügen wir mithilfe von JavaScript Funktionalität an den Player an:

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

## Medienlade-Ereignisse

Oben haben wir gezeigt, wie Sie einen Audioplayer erstellen können, aber was ist, wenn wir Fortschritte, Pufferung anzeigen und die Tasten erst aktivieren möchten, wenn das Medium abspielbereit ist? Glücklicherweise gibt es eine Reihe von Ereignissen, die wir verwenden können, um unserem Player genau mitzuteilen, was passiert.

Werfen wir zuerst einen Blick auf den Medienladeprozess in der Reihenfolge:

### loadstart

Das `loadstart`-Ereignis teilt uns mit, dass der Ladeprozess begonnen hat und der Browser sich mit dem Medium verbindet.

```js
audio.addEventListener("loadstart", () => {
  // Grabbing the file
});
```

### durationchange

Wenn Sie nur wissen möchten, sobald die Dauer Ihres Mediums festgelegt ist, ist dies das Ereignis für Sie. Dies kann nützlich sein, da der Anfangswert für die Dauer `NaN` (Not a Number) ist, den Sie Ihren Benutzern wahrscheinlich nicht anzeigen möchten.

```js
audio.addEventListener("durationchange", () => {
  // You can display the duration now
});
```

### loadedmetadata

Metadaten können aus mehr bestehen als nur aus der Dauer – wenn Sie warten möchten, bis alle Metadaten heruntergeladen sind, bevor Sie etwas unternehmen, können Sie das `loadedmetadata`-Ereignis erkennen.

```js
audio.addEventListener("loadedmetadata", () => {
  // You can display the duration now
});
```

### loadeddata

Das `loadeddata`-Ereignis wird ausgelöst, wenn das erste Stück des Mediums eintrifft. Der Abspielkopf ist in Position, aber noch nicht ganz abspielbereit.

```js
audio.addEventListener("loadeddata", () => {
  // You could display the playhead now
});
```

### progress

Das `progress`-Ereignis zeigt an, dass der Download des Mediums noch im Gange ist. Es ist eine gute Praxis, an diesem Punkt eine Art 'Loader' anzuzeigen.

```js
audio.addEventListener("progress", () => {
  // you could let the user know the media is downloading
});
```

### canplay

`canplay` ist ein nützliches Ereignis, das Sie erkennen sollten, wenn Sie feststellen möchten, ob das Medium abspielbereit ist. Sie könnten zum Beispiel benutzerdefinierte Steuerelemente deaktivieren, bis dieses Ereignis eintritt.

```js
audio.addEventListener("canplay", () => {
  // Audio is ready to play
});
```

### canplaythrough

`canplaythrough` ist ähnlich wie `canplay`, aber es lässt Sie wissen, dass das Medium bereit ist, ganz durchgespielt zu werden (das heißt, die Datei wurde vollständig heruntergeladen, oder es wird geschätzt, dass sie rechtzeitig heruntergeladen wird, sodass keine Pufferunterbrechungen auftreten).

```js
audio.addEventListener("canplaythrough", () => {
  // Audio is ready to play all the way through
});
```

### Reihenfolge der Medienladeereignisse

Zusammenfassend sind die Reihenfolge der Medienladeereignisse:

`loadstart` > `durationchange` > `loadedmetadata` > `loadeddata` > `progress` > `canplay` > `canplaythrough`

### Ladeunterbrechungs-Ereignisse

Wir haben auch einige Ereignisse zur Verfügung, die ausgelöst werden, wenn es zu einer Unterbrechung im Medienladeprozess kommt.

- suspend
  - : Mediendaten werden nicht mehr abgerufen, obwohl die Datei nicht vollständig heruntergeladen wurde.
- abort
  - : Der Download der Mediendaten wurde abgebrochen, aber nicht aufgrund eines Fehlers.
- error
  - : Ein Fehler tritt auf, während Mediendaten heruntergeladen werden.
- emptied
  - : Der Medienspeicher wurde geleert, möglicherweise aufgrund eines Fehlers oder weil die `load()`-Methode aufgerufen wurde, um ihn neu zu laden.
- stalled
  - : Mediendaten sind unerwartet nicht mehr verfügbar.

## Medienwiedergabe-Ereignisse

Wir haben auch eine andere Reihe von Ereignissen, die nützlich sind, um auf den Zustand der Medienwiedergabe zu reagieren.

### timeupdate

Das `timeupdate`-Ereignis wird jedes Mal ausgelöst, wenn sich die `currentTime`-Eigenschaft ändert. In der Praxis geschieht dies alle 250 Millisekunden. Dieses Ereignis kann verwendet werden, um die Anzeige des Wiedergabefortschritts auszulösen.

```js
audio.addEventListener("timeupdate", () => {
  // Update something related to playback progress
});
```

### playing

Das `playing`-Ereignis wird gestartet, wenn die Wiedergabe bereit ist, nach dem Anhalten aufgrund eines Mangels an Mediendaten zu starten.

### waiting

Das `waiting`-Ereignis wird ausgelöst, wenn die Wiedergabe aufgrund eines Mangels an Mediendaten gestoppt wurde, obwohl erwartet wird, dass sie wieder aufgenommen wird, sobald Daten verfügbar sind.

### play

Das `play`-Ereignis wird nach der Rückgabe der `play()`-Methode oder wenn das `autoplay`-Attribut die Wiedergabe ausgelöst hat, initiiert. Dies ist der Moment, in dem sich der Zustand des Mediums von angehalten zu abgespielt ändert.

### pause

Das `pause`-Ereignis wird ausgelöst, nachdem die `pause()`-Methode zurückgegeben wurde. Dies ist der Moment, in dem die Zustände von abgespielt zu angehalten gewechselt werden.

### ended

Das `ended`-Ereignis wird initiiert, wenn das Ende des Mediums erreicht wird.

```js
audio.addEventListener("ended", () => {
  // Do something once audio track has finished playing
});
```

### volumechange

Das `volumechange`-Ereignis zeigt an, dass sich die Lautstärke geändert hat, einschließlich des Stummschaltens.

## Ein Audioplayer mit Feedback

Betrachten Sie diesen HTML-Ausschnitt:

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
  <button id="play" style="display:none">play</button>
  <button id="pause" style="display:none">pause</button>
</div>
<div id="progress">
  <div id="bar"></div>
</div>
```

So gestylt:

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
```

Nun verbinden wir das Ganze mit JavaScript:

```js
window.onload = () => {
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
};
```

Sie sollten so etwas erhalten:

![Ein einfacher Audioplayer mit Abspiel-/Pauseknopf und Fortschrittsbalken](simpleplayer.png)

### Suchen mit dem Fortschrittsbalken

Dies ist ein guter Anfang, aber es wäre schön, das Audio mit dem Fortschrittsbalken zu navigieren. Glücklicherweise ist dies nicht allzu schwer zu implementieren.

Zuerst aktualisieren wir kurz das CSS des Fortschrittsbalkens, um den Handzeiger beim Überfahren darzustellen:

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

Ok, wir nähern uns dem Ziel, aber es gibt noch ein weiteres nützliches Detail, das wir anzeigen können: wie viel Audio im Voraus gepuffert oder heruntergeladen wurde.

Es gibt ein paar Eigenschaften, die wir noch nicht betrachtet haben: `buffered` und `seekable`.

#### buffered

Diese Eigenschaft teilt uns mit, welche Teile des Audios gepuffert (im Voraus heruntergeladen) wurden. Sie gibt ein sogenanntes `TimeRanges`-Objekt zurück.

```js
bufferedTimeRanges = audio.buffered;
```

#### seekable

Die `seekable`-Eigenschaft informiert Sie darüber, ob Sie direkt zu diesem Teil des Mediums springen können, ohne weitere Pufferung.

```js
seekableTimeRanges = audio.seekable;
```

#### Pufferungsereignisse

Es gibt auch ein paar Ereignisse, die mit der Pufferung zusammenhängen:

- `seeking`
  - : Das `seeking`-Ereignis wird ausgelöst, wenn im Medium gesucht wird.
- `seeked`
  - : `seeked` tritt auf, wenn das `seeking`-Attribut zu `false` ändert.

> [!NOTE]
> Mehr über [Pufferung, Suchen und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges) lesen Sie anderswo.

## Siehe auch

- [Pufferung, Suchen und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
- [HTMLMediaElement-Ereignisse](/de/docs/Web/API/HTMLMediaElement#events)
- [Ereignisreferenz > Medien](/de/docs/Web/Events#media)
- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Einen plattformübergreifenden Videoplayer erstellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player)
- [jPlayer](https://jplayer.org/): Eine Open-Source-Bibliothek für Audio und Video für jQuery und Zepto.
