---
title: Grundlagen für Audio in verschiedenen Browsern
slug: Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Dieser Artikel bietet:

- einen grundlegenden Leitfaden zur Erstellung eines HTML-Audioplayers, der in verschiedenen Browsern funktioniert, mit Erklärungen zu allen zugehörigen Attributen, Eigenschaften und Ereignissen
- einen Leitfaden zu benutzerdefinierten Steuerelementen, die mit der Media API erstellt wurden

## Einfaches Audio-Beispiel

Der folgende Code ist ein Beispiel für eine grundlegende Audio-Implementierung mit HTML5:

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

- Hier definieren wir ein {{ htmlelement("audio") }}-Element mit mehreren Quellen — wir tun dies, da nicht alle Browser dieselben Audioformate unterstützen. Um eine angemessene Abdeckung zu gewährleisten, sollten wir mindestens zwei verschiedene Formate angeben. Die beiden Formate, die die maximale Abdeckung bieten, sind mp3 und ogg vorbis.
- Wir tun dies mithilfe des {{ htmlelement("source") }}-Elements, das die Attribute `src` und `type` annimmt.

  - `src` enthält den Pfad zur zu ladenden Audiodatei (relativ oder absolut).
  - `type` wird verwendet, um den Browser über den Dateityp zu informieren. Wenn es weggelassen wird, versuchen die meisten Browser, dies anhand der Dateierweiterung zu erraten.

- Wenn das {{ htmlelement("audio") }}-Element nicht unterstützt wird, werden {{ htmlelement("audio") }} und {{ htmlelement("source") }} ignoriert. Wenn jedoch unterstützter Text oder Elemente innerhalb von {{ htmlelement("audio") }} definiert sind, werden diese angezeigt oder ausgeführt. Daher ist der ideale Ort, um einen Fallback zu erstellen oder über die Inkompatibilität zu informieren, vor dem schließenden `</audio>`-Tag. In diesem Fall haben wir einen einfachen Absatz bereitgestellt, der einen Link zum direkten Herunterladen des Audios enthält.
- Das `controls`-Attribut im {{ htmlelement("audio") }}-Element wird angegeben, wenn wir vom Browser standardmäßige Wiedergabesteuerelemente benötigen. Wenn Sie dieses Attribut nicht angeben, erscheinen keine Steuerelemente — und Sie müssen stattdessen Ihre eigenen Steuerelemente erstellen und deren Funktionalität mithilfe der Media API programmieren (siehe unten). Dies kann jedoch ein guter Ansatz sein, da die Standardsteuerelemente in verschiedenen Browsern unterschiedlich aussehen. Das Erstellen eigener Steuerelemente sorgt für ein konsistentes Erscheinungsbild der Steuerelemente in allen Browsern.

## HTML-Audio im Detail

Nachdem wir nun ein einfaches Beispiel betrachtet haben, lassen Sie uns die verschiedenen Aspekte von HTML-Audio im Detail erforschen.

### Audio-HTML-Attribute

Wir können eine Reihe von Attributen mit dem Audio-Tag angeben, um weiter zu bestimmen, wie das Audio initialisiert wird.

#### autoplay

Die Angabe von `autoplay` bewirkt, dass das Audio so schnell wie möglich und ohne Benutzereingriff abgespielt wird — kurz gesagt, das Audio wird automatisch abgespielt.

```html
<audio autoplay>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert, und seine Verwendung wird nicht empfohlen, es sei denn, es ist wirklich notwendig. Selbststartende Audiodateien (und Videos) sind in der Regel sehr störend. Zudem haben Browser Richtlinien, die das automatische Abspielen in vielen Situationen vollständig blockieren. Einzelheiten finden Sie im [Leitfaden für Autoplay für Media- und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide).

#### loop

Das `loop`-Attribut sorgt dafür, dass beim Erreichen des Endes des Audioclips der Audioclip zum Anfang springt und erneut abgespielt wird.

```html
<audio loop>…</audio>
```

#### muted

Wenn Sie möchten, dass das Audio stummgeschaltet beginnt (ohne Lautstärke), fügen Sie das `muted`-Attribut hinzu.

```html
<audio muted>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert.

#### preload

Das `preload`-Attribut ermöglicht es Ihnen, eine Präferenz dafür anzugeben, wie der Browser das Audio vorlädt, mit anderen Worten, welchen Teil der Datei er herunterlädt, wenn das {{ htmlelement("audio") }}-Element initialisiert wird und bevor die Wiedergabetaste gedrückt wird.

`preload` kann 3 verschiedene Werte annehmen:

1. `none`: Nichts herunterladen, bevor die Wiedergabetaste gedrückt wird.
2. `metadata`: Die Audiodaten-Metadaten herunterladen; dies ist in der Regel die beste Option, da es Ihnen ermöglicht, Informationen wie die Audiolänge anzuzeigen und dem Browser zu ermöglichen zu ermitteln, welche Audiodatei verwendet werden soll.
3. `auto`: Die gesamte Audiodatei so schnell wie möglich herunterladen. Dies ist in der Regel keine gute Option, es sei denn, Sie können garantieren, dass Ihre Benutzer über eine schnelle Netzwerkverbindung verfügen.

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert.

```html
<audio preload="auto">…</audio>
```

#### controls

Wir geben das `controls`-Attribut an, wenn wir vom Browser seine standardmäßigen Wiedergabesteuerelemente benötigen.

```html
<audio controls>…</audio>
```

#### src

Wie oben erwähnt, können Sie das {{ htmlelement("source") }}-Element verwenden, um eine oder mehrere Quell-Audiodateien anzugeben. Alternativ können Sie das `src`-Attribut direkt im {{ htmlelement("audio") }}-Element verwenden, um eine einzelne Quelldatei anzugeben.

```html
<audio src="audio-file.mp3">…</audio>
```

#### type

Wie oben erwähnt, ist es eine gute Praxis, ein `type`-Attribut zusammen mit dem `src`-Attribut anzugeben, um sicherzustellen, dass der Browser weiß, um welchen Dateityp es sich handelt. Das `type`-Attribut gibt den MIME-Typ oder Internet Media Type der Datei an.

```html
<audio src="audio-file.mp3" type="audio/mpeg">…</audio>
```

### Manipulation des Audio-Elements mit JavaScript

Zusätzlich zur Möglichkeit, verschiedene Attribute in HTML anzugeben, bietet das {{ htmlelement("audio") }}-Element mehrere Eigenschaften und Methoden, die Sie über JavaScript manipulieren können.

Angenommen, wir haben folgendes HTML:

```html
<audio id="my-audio" src="audio-file.mp3">…</audio>
```

Sie können das {{htmlelement("audio") }}-Element so abrufen:

```js
const audio = document.getElementById("my-audio");
```

Alternativ können Sie ein neues Element erstellen. Hier ist ein Beispiel für die Erstellung eines {{ htmlelement("audio") }}-Elements, das Medium zum Abspielen festzulegen, abzuspielen und zu pausieren und dann von 5 Sekunden in das Audio einzusteigen:

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

Lassen Sie uns die verfügbaren Eigenschaften und Methoden im Detail erforschen.

#### play

Die `play()`-Methode wird verwendet, um das Audio abzuspielen. Sie nimmt keine Parameter an.

```js
audio.play();
```

#### pause

Die `pause()`-Methode wird verwendet, um das Audio zu pausieren. Sie nimmt keine Parameter an.

```js
audio.pause();
```

> [!NOTE]
> Es gibt keine Stop-Methode — um eine Stopp-Funktion zu implementieren, müssten Sie das Medium pausieren und dann den Wert der [`currentTime`](#currenttime)-Eigenschaft auf 0 setzen.

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

In der Praxis prüfen wir normalerweise, ob das Ergebnis wahr oder falsch ist. Nicht-leere Strings sind wahr.

> [!NOTE]
> Eine sehr frühe Spezifikation sah vor, dass der Browser `no` anstelle eines leeren Strings zurückgeben sollte, aber zum Glück ist die Anzahl der Benutzer älterer Browser, die diese Version der Spezifikation implementieren, sehr gering.

#### currentTime

Die `currentTime`-Eigenschaft erhält oder setzt die aktuelle Zeit, zu der das Audio abgespielt werden sollte. Dies ist auf viele Arten nützlich, zum Beispiel, da `play()` keinen Parameter annimmt, müssen wir den Punkt, von dem aus abgespielt werden soll, separat festlegen, wenn er nicht 0 sein soll.

Der Wert von `currentTime` ist eine Zahl, die die Zeit in Sekunden repräsentiert.

```js
if (audio.currentTime > 5) {
  audio.currentTime = 3;
}
```

#### volume

Die `volume`-Eigenschaft ermöglicht es uns, die Lautstärke des Audios als Zahl zwischen 0 und 1 zu setzen.

```js
// set the volume at 50%
audio.volume = 0.5;
```

## Eigenen benutzerdefinierten Audioplayer erstellen

Die JavaScript Media API ermöglicht es Ihnen, Ihren eigenen benutzerdefinierten Player zu erstellen. Schauen wir uns ein sehr minimales Beispiel an. Wir können HTML und JavaScript kombinieren, um einen sehr einfachen Player mit einer Wiedergabe- und einer Pausentaste zu erstellen. Zuerst richten wir das Audio im HTML ein, ohne das `controls`-Attribut, da wir unsere eigenen Steuerelemente erstellen:

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

Als nächstes fügen wir dem Player etwas Funktionalität hinzu, indem wir JavaScript verwenden:

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

## Medialade-Ereignisse

Oben haben wir gezeigt, wie Sie einen sehr einfachen Audioplayer erstellen können, aber was, wenn wir den Fortschritt, das Puffern anzeigen und die Tasten nur aktivieren möchten, wenn das Medium bereit zum Abspielen ist? Glücklicherweise gibt es eine Reihe von Ereignissen, die wir verwenden können, um unserem Player genau mitzuteilen, was passiert.

Zunächst werfen wir einen Blick auf den Medienladeprozess in der Reihenfolge:

### loadstart

Das `loadstart`-Ereignis teilt uns mit, dass der Ladeprozess begonnen hat und der Browser eine Verbindung zum Medium herstellt.

```js
audio.addEventListener("loadstart", () => {
  //grabbing the file
});
```

### durationchange

Wenn Sie nur wissen möchten, sobald die Dauer Ihres Mediums festgelegt ist, ist dies das Ereignis für Sie. Dies kann nützlich sein, da der anfängliche Wert für die Dauer `NaN` (Not a Number, keine Zahl) ist, was Sie wahrscheinlich nicht Ihren Benutzern anzeigen möchten.

```js
audio.addEventListener("durationchange", () => {
  //you can display the duration now
});
```

### loadedmetadata

Metadaten können aus mehr als nur der Dauer bestehen — wenn Sie warten möchten, bis alle Metadaten heruntergeladen sind, bevor Sie etwas tun, können Sie das `loadedmetadata`-Ereignis erkennen.

```js
audio.addEventListener("loadedmetadata", () => {
  //you can display the duration now
});
```

### loadeddata

Das `loadeddata`-Ereignis wird ausgelöst, wenn das erste Stück des Mediums ankommt. Der Wiedergabekopf ist in Position, aber noch nicht ganz bereit zum Abspielen.

```js
audio.addEventListener("loadeddata", () => {
  //you could display the playhead now
});
```

### progress

Das `progress`-Ereignis zeigt an, dass das Herunterladen von Medien noch im Gange ist. Es ist gute Praxis, an diesem Punkt eine Art "Lader" anzuzeigen.

```js
audio.addEventListener("progress", () => {
  // you could let the user know the media is downloading
});
```

### canplay

`canplay` ist ein nützliches Ereignis, um festzustellen, ob das Medium bereit ist, abgespielt zu werden. Sie könnten zum Beispiel benutzerdefinierte Steuerelemente deaktivieren, bis dieses Ereignis auftritt.

```js
audio.addEventListener("canplay", () => {
  //audio is ready to play
});
```

### canplaythrough

`canplaythrough` ist ähnlich wie `canplay`, gibt Ihnen jedoch Bescheid, dass das Medium bereit ist, ganz abgespielt zu werden (das bedeutet, dass die Datei vollständig heruntergeladen wurde, oder es wird geschätzt, dass sie rechtzeitig heruntergeladen wird, sodass keine Pufferunterbrechungen auftreten).

```js
audio.addEventListener("canplaythrough", () => {
  //audio is ready to play all the way through
});
```

### Reihenfolge der Medienlade-Ereignisse

Zur Erinnerung, die Reihenfolge der Medienlade-Ereignisse ist:

`loadstart` > `durationchange` > `loadedmetadata` > `loadeddata` > `progress` > `canplay` > `canplaythrough`

### Ladeunterbrechungs-Ereignisse

Es gibt auch einige Ereignisse, die auftreten, wenn es eine Art von Unterbrechung im Medienladeprozess gibt.

- suspend
  - : Mediendaten werden nicht länger abgerufen, obwohl die Datei nicht vollständig heruntergeladen wurde.
- abort
  - : Der Download von Mediendaten wurde abgebrochen, jedoch nicht aufgrund eines Fehlers.
- error
  - : Ein Fehler tritt beim Herunterladen von Mediendaten auf.
- emptied
  - : Der Medienpuffer wurde entleert, möglicherweise aufgrund eines Fehlers oder weil die `load()`-Methode aufgerufen wurde, um ihn neu zu laden.
- stalled
  - : Mediendaten sind unerwartet nicht mehr verfügbar.

## Medienwiedergabe-Ereignisse

Wir haben auch eine weitere Reihe von Ereignissen, die nützlich sind, um auf den Zustand der Medienwiedergabe zu reagieren.

### timeupdate

Das `timeupdate`-Ereignis wird jedes Mal ausgelöst, wenn sich die `currentTime`-Eigenschaft ändert. In der Praxis erfolgt dies alle 250 Millisekunden. Dieses Ereignis kann verwendet werden, um die Anzeige des Wiedergabefortschritts auszulösen.

```js
audio.addEventListener("timeupdate", () => {
  //update something related to playback progress
});
```

### playing

Das `playing`-Ereignis wird eingeleitet, wenn die Wiedergabe bereit ist, nach einer Pause aufgrund fehlender Mediendaten zu starten.

### waiting

Das `waiting`-Ereignis wird ausgelöst, wenn die Wiedergabe aufgrund von fehlenden Mediendaten gestoppt wird, obwohl erwartet wird, dass die Wiedergabe fortgesetzt wird, sobald Daten verfügbar sind.

### play

Das `play`-Ereignis wird eingeleitet, nachdem die `play()`-Methode zurückkehrt oder wenn das `autoplay`-Attribut die Wiedergabe gestartet hat. Dies ist der Zeitpunkt, zu dem der Zustand des Mediums von Pause zu Abspielen wechselt.

### pause

Das `pause`-Ereignis wird ausgelöst, nachdem die `pause()`-Methode zurückkehrt. Dies ist der Zeitpunkt, an dem der Zustand von Abspielen zu Pause wechselt.

### ended

Das `ended`-Ereignis wird eingeleitet, wenn das Ende des Mediums erreicht ist.

```js
audio.addEventListener("ended", () => {
  //do something once audio track has finished playing
});
```

### volumechange

Das `volumechange`-Ereignis zeigt an, dass sich die Lautstärke geändert hat; das schließt das Stummschalten ein.

## Ein Audioplayer mit Rückmeldung

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

Gestylt wie folgt:

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

Sie sollten letztendlich etwas wie dies erhalten:

![Ein einfacher Audioplayer mit Wiedergabe-/Pause-Taste und Suchleiste](simpleplayer.png)

### Suchen mit der Suchleiste

Dies ist ein guter Anfang, aber es wäre schön, mit der Fortschrittsleiste im Audio navigieren zu können. Glücklicherweise ist dies nicht allzu schwierig zu implementieren.

Zuerst machen wir ein schnelles Update am CSS der Fortschrittsleiste, um den Handzeiger bei Hover anzuzeigen:

```css
#progress {
  margin-left: 80px;
  border: 1px solid black;
  cursor: pointer;
}
```

Dann fügen wir den Code hinzu, der den Klick erkennt und den 'playhead' auf die richtige Position bewegt:

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

Okay, wir nähern uns dem Ziel, aber es gibt noch eine nützliche Information, die wir anzeigen können: die Menge an Audio, die im Voraus gepuffert oder heruntergeladen wurde.

Es gibt ein paar Eigenschaften, die wir noch nicht betrachtet haben, `buffered` und `seekable`.

#### buffered

Diese Eigenschaft gibt uns Auskunft darüber, welche Teile des Audios gepuffert (im Voraus heruntergeladen) wurden. Sie gibt ein sogenanntes `TimeRanges`-Objekt zurück.

```js
bufferedTimeRanges = audio.buffered;
```

#### seekable

Die seekable-Eigenschaft informiert Sie darüber, ob Sie direkt zu diesem Teil des Mediums springen können, ohne weiteres Puffern.

```js
seekableTimeRanges = audio.seekable;
```

#### Pufferevents

Es gibt auch ein paar Ereignisse im Zusammenhang mit dem Puffern:

- `seeking`
  - : Das `seeking`-Ereignis wird ausgelöst, wenn im Medium gesucht wird.
- `seeked`
  - : `seeked` tritt auf, wenn das `seeking`-Attribut auf `false` geändert wird.

> [!NOTE]
> Mehr über [Buffering, Seeking und Zeitbereiche](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges) können Sie andernorts lesen.

## Siehe auch

- [Buffering, Seeking und Zeitbereiche](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges)
- [HTMLMediaElement-Ereignisse](/de/docs/Web/API/HTMLMediaElement#events)
- [Ereignisreferenz > Medien](/de/docs/Web/Events#media)
- [HTML Video und Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Erstellen eines Videoplayers für verschiedene Browser](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player)
- [jPlayer](https://jplayer.org/): Eine Open-Source-Audio- und Videobibliothek für jQuery und Zepto.
