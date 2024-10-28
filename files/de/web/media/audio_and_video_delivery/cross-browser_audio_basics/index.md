---
title: Grundlagen für plattformübergreifende Audio-Anwendung
slug: Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Dieser Artikel bietet:

- einen grundlegenden Leitfaden zur Erstellung eines plattformübergreifenden HTML-Audioplayers, bei dem alle zugehörigen Attribute, Eigenschaften und Ereignisse erklärt werden
- einen Leitfaden zu benutzerdefinierten Steuerungen, die mithilfe der Media API erstellt wurden

## Grundlegendes Audio-Beispiel

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
> Sie können auch eine MP4-Datei anstelle eines MP3 verwenden. MP4-Dateien enthalten typischerweise [AAC](https://en.wikipedia.org/wiki/Advanced_Audio_Coding) kodiertes Audio. Sie können `type="audio/mp4"` verwenden. (Derzeit unterstützen Browser, die mp3 unterstützen, auch mp4-Audio).

- Hier definieren wir ein {{ htmlelement("audio") }} Element mit mehreren Quellen – dies tun wir, da nicht alle Browser dieselben Audioformate unterstützen. Um eine angemessene Abdeckung sicherzustellen, sollten wir mindestens zwei verschiedene Formate angeben. Die beiden Formate, die die maximale Abdeckung bieten, sind mp3 und ogg vorbis.
- Wir tun dies mit dem {{ htmlelement("source") }} Element, das die Attribute `src` und `type` benötigt.

  - `src` enthält den Pfad zur zu ladenden Audiodatei (relativ oder absolut).
  - `type` wird verwendet, um den Browser über den Dateityp zu informieren. Wenn es weggelassen wird, versuchen die meisten Browser, dies anhand der Dateierweiterung zu erraten.

- Wenn das {{ htmlelement("audio") }} Element nicht unterstützt wird, werden {{ htmlelement("audio") }} und {{ htmlelement("source") }} ignoriert. Allerdings wird jeder unterstützte Text oder Elemente, die Sie innerhalb von {{ htmlelement("audio") }} definieren, angezeigt oder ausgeführt. Der ideale Ort, um einen Fallback zu erstellen oder über Inkompatibilität zu informieren, ist also vor dem schließenden `</audio>` Tag. In diesem Fall haben wir einen einfachen Absatz bereitgestellt, der einen Link zum direkten Herunterladen der Audio-Datei enthält.
- Das `controls` Attribut im {{ htmlelement("audio") }} Element wird spezifiziert, wenn wir vom Browser verlangen, dass er uns mit Standard-Wiedergabesteuerungen versorgt. Wenn Sie dieses Attribut nicht angeben, werden keine Steuerungen angezeigt – und Sie müssen Ihre eigenen Steuerungen erstellen und deren Funktionalität mit der Media API programmieren (siehe unten). Dies kann jedoch ein guter Ansatz sein, da die Standardsteuerungen in verschiedenen Browsern unterschiedlich aussehen. Das Erstellen eigener Steuerungen gewährleistet ein einheitliches Erscheinungsbild der Steuerungen in allen Browsern.

## HTML Audio im Detail

Nun haben wir uns ein einfaches Beispiel angesehen, lassen Sie uns nun die verschiedenen Aspekte von HTML Audio genauer erkunden.

### Audio HTML Attribute

Wir können mit dem Audio-Tag eine Reihe von Attributen angeben, um die Art und Weise, wie das Audio initialisiert wird, weiter zu bestimmen.

#### autoplay

Das Festlegen von `autoplay` bewirkt, dass das Audio so schnell wie möglich und ohne Benutzereingriff gestartet wird – kurz gesagt, das Audio wird automatisch abgespielt.

```html
<audio autoplay>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert, und seine Verwendung wird nicht empfohlen, es sei denn, es ist wirklich notwendig. Automatisch abgespieltes Audio (und Video) ist normalerweise sehr störend. Außerdem haben Browser Richtlinien, die das automatische Abspielen in vielen Situationen vollständig blockieren. Weitere Details finden Sie im [Leitfaden zum automatischen Abspielen von Medien und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide).

#### loop

Das `loop` Attribut sorgt dafür, dass beim Erreichen des Endes des Audioclips der Audioclip wieder zum Anfang springt und erneut abgespielt wird.

```html
<audio loop>…</audio>
```

#### muted

Wenn Sie möchten, dass das Audio stummgeschaltet (ohne Lautstärke) startet, fügen Sie das `muted` Attribut hinzu.

```html
<audio muted>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert.

#### preload

Das `preload` Attribut ermöglicht es Ihnen, eine Präferenz für das Preloading des Audios durch den Browser anzugeben, also welcher Teil der Datei heruntergeladen wird, wenn das {{ htmlelement("audio") }} Element initialisiert wird und bevor die Wiedergabetaste gedrückt wird.

`preload` kann 3 verschiedene Werte annehmen:

1. `none`: Laden Sie nichts herunter, bevor die Wiedergabetaste gedrückt wird.
2. `metadata`: Laden Sie die Audio-Metadaten; dies ist normalerweise die beste Option, da es Ihnen ermöglicht, Informationen wie die Audiolänge anzuzeigen und dem Browser zu ermöglichen, zu ermitteln, welche Audiodatei er verwenden soll.
3. `auto`: Laden Sie die gesamte Audiodatei so schnell wie möglich herunter. Dies ist im Allgemeinen keine gute Option, es sei denn, Sie können garantieren, dass Ihre Benutzer eine schnelle Netzwerkverbindung haben.

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert.

```html
<audio preload="auto">…</audio>
```

#### controls

Wir geben das `controls` Attribut an, wenn wir vom Browser verlangen, dass er uns mit seinen Standard-Wiedergabesteuerungen versorgt.

```html
<audio controls>…</audio>
```

#### src

Wie oben erwähnt, können Sie das {{ htmlelement("source") }} Element verwenden, um eine oder mehrere Audioquellen anzugeben. Alternativ können Sie das `src` Attribut direkt auf das {{ htmlelement("audio") }} Element setzen, um eine einzige Quelle zu spezifizieren.

```html
<audio src="audio-file.mp3">…</audio>
```

#### type

Wie oben erwähnt, ist es eine gute Praxis, ein `type` Attribut zusammen mit dem `src` Attribut anzugeben, um sicherzustellen, dass der Browser weiß, welche Art von Datei angegeben wird. Das `type` Attribut gibt den MIME-Typ oder Internet Media Type der Datei an.

```html
<audio src="audio-file.mp3" type="audio/mpeg">…</audio>
```

### Manipulation des Audio-Elements mit JavaScript

Neben der Möglichkeit, verschiedene Attribute in HTML anzugeben, ist das {{ htmlelement("audio") }} Element mit mehreren Eigenschaften und Methoden versehen, die Sie über JavaScript manipulieren können.

Angenommen, wir haben folgendes HTML:

```html
<audio id="my-audio" src="audio-file.mp3">…</audio>
```

Sie können das {{ htmlelement("audio") }} Element so abrufen:

```js
const audio = document.getElementById("my-audio");
```

Alternativ können Sie ein neues Element erstellen. Hier ist ein Beispiel für das Erstellen eines {{ htmlelement("audio") }} Elements, das Einstellen des abzuspielenden Mediums, das Abspielen und Pausieren und dann das Abspielen ab 5 Sekunden in das Audio:

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

Die `play()` Methode wird verwendet, um das Audio abzuspielen. Sie benötigt keine Parameter.

```js
audio.play();
```

#### pause

Die `pause()` Methode wird verwendet, um das Audio anzuhalten. Sie benötigt keine Parameter.

```js
audio.pause();
```

> [!NOTE]
> Es gibt keine Stop-Methode – um eine Stop-Funktion zu implementieren, müssten Sie das Medium anhalten und dann die [`currentTime`](#currenttime) Eigenschaft auf 0 setzen.

#### canPlayType

Die `canPlayType()` Methode fragt den Browser, ob ein bestimmter Audio-Dateityp unterstützt wird. Sie nimmt den MIME-Typ des zu prüfenden Typs als Parameter.

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
> Eine sehr frühe Spezifikation gab an, dass der Browser `no` zurückgeben sollte, anstelle eines leeren Strings, aber zum Glück gibt es nur wenige Nutzer älterer Browser, die diese Version der Spezifikation implementiert haben.

#### currentTime

Die `currentTime` Eigenschaft erhält oder setzt die aktuelle Zeit, die das Audio abspielen soll. Dies ist auf viele Arten nützlich, zum Beispiel, da `play()` keinen Parameter nimmt, müssen wir den Punkt, ab dem abgespielt werden soll, separat setzen, wenn wir nicht möchten, dass es 0 ist.

Der Wert von `currentTime` ist eine Zahl, die die Zeit in Sekunden darstellt.

```js
if (audio.currentTime > 5) {
  audio.currentTime = 3;
}
```

#### volume

Die `volume` Eigenschaft ermöglicht es uns, die Lautstärke des Audios zwischen 0 und 1 zu setzen.

```js
// set the volume at 50%
audio.volume = 0.5;
```

## Erstellen eines eigenen benutzerdefinierten Audioplayers

Die JavaScript-Media-API ermöglicht es Ihnen, Ihren eigenen benutzerdefinierten Player zu erstellen. Werfen wir einen Blick auf ein sehr minimales Beispiel. Wir können HTML und JavaScript kombinieren, um einen sehr einfachen Player mit einer Wiedergabe- und einer Pausetaste zu erstellen. Zuerst richten wir das Audio im HTML ohne das `controls` Attribut ein, da wir unsere eigenen Steuerungen erstellen:

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

Als nächstes fügen wir dem Player mit JavaScript einige Funktionen hinzu:

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

## Medienladeereignisse

Oben haben wir gezeigt, wie Sie einen sehr einfachen Audioplayer erstellen können, aber was ist, wenn wir Fortschritte, Puffern anzeigen und die Tasten nur dann aktivieren möchten, wenn das Medium abspielbereit ist? Glücklicherweise gibt es eine Vielzahl von Ereignissen, die wir nutzen können, um unseren Player genau wissen zu lassen, was passiert.

Werfen wir zunächst einen Blick auf den Medienladeprozess in der Reihenfolge:

### loadstart

Das `loadstart` Ereignis informiert uns darüber, dass der Ladeprozess begonnen hat und der Browser sich mit dem Medium verbindet.

```js
audio.addEventListener("loadstart", () => {
  //grabbing the file
});
```

### durationchange

Wenn Sie nur wissen möchten, sobald die Dauer Ihres Mediums festgelegt ist, ist das das Ereignis für Sie. Dies kann nützlich sein, da der anfängliche Wert für die Dauer `NaN` (Not a Number) ist, was Sie Ihren Benutzern wahrscheinlich nicht anzeigen möchten.

```js
audio.addEventListener("durationchange", () => {
  //you can display the duration now
});
```

### loadedmetadata

Metadaten können aus mehr als nur der Dauer bestehen – wenn Sie darauf warten möchten, dass alle Metadaten heruntergeladen sind, bevor etwas gemacht wird, können Sie das `loadedmetadata` Ereignis erfassen.

```js
audio.addEventListener("loadedmetadata", () => {
  //you can display the duration now
});
```

### loadeddata

Das `loadeddata` Ereignis wird ausgelöst, wenn das erste Medienstück eintrifft. Der Spielkopf ist in Position, aber noch nicht ganz bereit zu spielen.

```js
audio.addEventListener("loadeddata", () => {
  //you could display the playhead now
});
```

### progress

Das `progress` Ereignis zeigt an, dass das Herunterladen von Medien noch im Gange ist. Es ist eine gute Praxis, zu diesem Zeitpunkt eine Art "Ladeanzeige" anzuzeigen.

```js
audio.addEventListener("progress", () => {
  // you could let the user know the media is downloading
});
```

### canplay

`canplay` ist ein nützliches Ereignis, das Sie erfassen sollten, wenn Sie feststellen möchten, ob das Medium abspielbereit ist. Sie könnten zum Beispiel benutzerdefinierte Steuerungen deaktivieren, bis dieses Ereignis eintritt.

```js
audio.addEventListener("canplay", () => {
  //audio is ready to play
});
```

### canplaythrough

`canplaythrough` ist ähnlich wie `canplay`, aber es informiert Sie darüber, dass das Medium bereit ist, vollständig abgespielt zu werden (das heißt, die Datei wurde vollständig heruntergeladen oder es wird erwartet, dass sie rechtzeitig heruntergeladen wird, sodass kein Pufferstopp auftritt).

```js
audio.addEventListener("canplaythrough", () => {
  //audio is ready to play all the way through
});
```

### Reihenfolge der Medienladeereignisse

Um zusammenzufassen, die Reihenfolge der Medienladeereignisse ist:

`loadstart` > `durationchange` > `loadedmetadata` > `loadeddata` > `progress` > `canplay` > `canplaythrough`

### Unterbrechungsevents beim Laden

Es stehen uns auch einige Ereignisse zur Verfügung, die ausgelöst werden, wenn es eine Art Unterbrechung im Medienladeprozess gibt.

- suspend
  - : Mediendaten werden nicht mehr abgerufen, obwohl die Datei nicht vollständig heruntergeladen wurde.
- abort
  - : Der Download von Mediendaten wurde abgebrochen, jedoch nicht aufgrund eines Fehlers.
- error
  - : Ein Fehler tritt beim Herunterladen von Mediendaten auf.
- emptied
  - : Der Medienpuffer ist leer geworden, möglicherweise aufgrund eines Fehlers oder weil die `load()` Methode aufgerufen wurde, um ihn neu zu laden.
- stalled
  - : Mediendaten sind unerwartet nicht mehr verfügbar.

## Medienabspielereignisse

Wir haben auch eine weitere Reihe von Ereignissen, die nützlich sind, um auf den Zustand der Medienwiedergabe zu reagieren.

### timeupdate

Das `timeupdate` Ereignis wird jedes Mal ausgelöst, wenn sich die `currentTime` Eigenschaft ändert. In der Praxis tritt dies alle 250 Millisekunden auf. Dieses Ereignis kann verwendet werden, um die Anzeige des Wiedergabefortschritts auszulösen.

```js
audio.addEventListener("timeupdate", () => {
  //update something related to playback progress
});
```

### playing

Das `playing` Ereignis wird initiiert, wenn die Wiedergabe bereit ist, nach einer Pause aufgrund fehlender Mediendaten zu starten.

### waiting

Das `waiting` Ereignis wird ausgelöst, wenn die Wiedergabe aufgrund fehlender Mediendaten gestoppt wird, obwohl erwartet wird, dass sie fortgesetzt wird, sobald Daten verfügbar sind.

### play

Das `play` Ereignis wird initiiert, nachdem die `play()` Methode zurückgekehrt ist oder wenn das `autoplay` Attribut die Wiedergabe ausgelöst hat. Dies ist der Zeitpunkt, an dem der Zustand des Mediums von angehalten zu abgespielt wechselt.

### pause

Das `pause` Ereignis wird ausgelöst, nachdem die `pause()` Methode zurückgegeben wurde. Dies ist der Moment, in dem der Zustand von abgespielt zu angehalten wechselt.

### ended

Das `ended` Ereignis wird initiiert, wenn das Ende des Mediums erreicht ist.

```js
audio.addEventListener("ended", () => {
  //do something once audio track has finished playing
});
```

### volumechange

Das `volumechange` Ereignis zeigt an, dass sich die Lautstärke geändert hat; dazu gehört auch das Stummschalten.

## Ein Audioplayer mit Rückmeldung

Betrachten Sie diesen HTML-Schnipsel:

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

Nun lassen Sie uns das mit JavaScript verbinden:

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

Sie sollten etwas wie dies erhalten:

![Ein einfacher Audioplayer mit Wiedergabe-/Pause-Taste und Suchleiste](simpleplayer.png)

### Suche mit der Suchleiste

Das ist ein guter Anfang, aber es wäre schön, wenn wir das Audio über die Fortschrittsleiste navigieren könnten. Zum Glück ist es nicht allzu schwierig, dies zu implementieren.

Zuerst aktualisieren wir die CSS der Fortschrittsleiste, um den Handzeiger beim Überfahren anzuzeigen:

```css
#progress {
  margin-left: 80px;
  border: 1px solid black;
  cursor: pointer;
}
```

Dann fügen wir den Code hinzu, der den Klick erkennt und den "Kopf" in die richtige Position bewegt:

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

### Puffern

Okay, wir nähern uns dem Ziel, aber es gibt noch ein weiteres nützliches Informationen, die wir anzeigen können: wie viel Audio bereits gepuffert oder im Voraus heruntergeladen wurde.

Es gibt ein paar Eigenschaften, die wir noch nicht betrachtet haben, `buffered` und `seekable`.

#### buffered

Diese Eigenschaft informiert uns darüber, welche Teile des Audios gepuffert (im Voraus heruntergeladen) wurden. Sie gibt ein sogenanntes `TimeRanges` Objekt zurück.

```js
bufferedTimeRanges = audio.buffered;
```

#### seekable

Die seekable Eigenschaft informiert Sie, ob Sie direkt zu diesem Teil des Mediums springen können, ohne weiteres Puffern.

```js
seekableTimeRanges = audio.seekable;
```

#### Pufferereignisse

Es gibt auch ein paar Ereignisse, die mit dem Puffern zusammenhängen:

- `seeking`
  - : Das `seeking` Ereignis wird ausgelöst, wenn ein Medium gesucht wird.
- `seeked`
  - : `seeked` tritt auf, wenn das `seeking` Attribut auf `false` geändert wird.

> [!NOTE]
> Sie können mehr über [Puffern, Suchen und Zeitfenster](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges) an anderer Stelle lesen.

## Siehe auch

- [Puffern, Suchen und Zeitfenster](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges)
- [HTMLMediaElement Ereignisse](/de/docs/Web/API/HTMLMediaElement#events)
- [Ereignisreferenz > Medien](/de/docs/Web/Events#media)
- [Verwendung von HTML Audio und Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player)
- [jPlayer](https://jplayer.org/): Eine Open-Source-Audio- und Videobibliothek für jQuery und Zepto.
