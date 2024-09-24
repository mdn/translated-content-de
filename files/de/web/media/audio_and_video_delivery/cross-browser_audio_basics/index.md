---
title: Grundlagen der plattformübergreifenden Audiowiedergabe
slug: Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Dieser Artikel bietet:

- eine grundlegende Anleitung zur Erstellung eines plattformübergreifenden HTML-Audioplayers, bei dem alle zugehörigen Attribute, Eigenschaften und Ereignisse erklärt werden
- eine Anleitung für benutzerdefinierte Steuerungen, die mit der Media API erstellt wurden

## Einfaches Audio-Beispiel

Der folgende Code ist ein Beispiel für eine einfache Audio-Implementierung unter Verwendung von HTML5:

```html
<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg" />
  <source src="audiofile.ogg" type="audio/ogg" />
  <!-- Fallback für nicht unterstützende Browser -->
  <p>
    Ihr Browser unterstützt kein HTML-Audio, aber Sie können die Musik
    trotzdem <a href="audiofile.mp3">herunterladen</a>.
  </p>
</audio>
```

> [!NOTE]
> Sie können auch eine MP4-Datei anstelle von MP3 verwenden. MP4-Dateien enthalten typischerweise [AAC](https://en.wikipedia.org/wiki/Advanced_Audio_Coding) codiertes Audio. Sie können `type="audio/mp4"` verwenden. (Derzeit unterstützen Browser, die mp3 unterstützen, auch mp4-Audio).

- Hier definieren wir ein {{ htmlelement("audio") }}-Element mit mehreren Quellen — wir tun dies, da nicht alle Browser dieselben Audioformate unterstützen. Um eine angemessene Abdeckung sicherzustellen, sollten wir mindestens zwei verschiedene Formate angeben. Die beiden Formate, die die größte Abdeckung bieten, sind mp3 und ogg vorbis.
- Wir machen dies durch das {{ htmlelement("source") }}-Element, das die Attribute `src` und `type` annimmt.

  - `src` enthält den Pfad zur zu ladenden Audiodatei (relativ oder absolut).
  - `type` wird verwendet, um den Browser über den Dateityp zu informieren. Wenn dies ausgelassen wird, versuchen die meisten Browser, dies anhand der Dateierweiterung zu erraten.

- Wenn das {{ htmlelement("audio") }}-Element nicht unterstützt wird, werden {{ htmlelement("audio") }} und {{ htmlelement("source") }} ignoriert. Allerdings wird jeder unterstützte Text oder jedes von Ihnen definierte Element innerhalb von {{ htmlelement("audio") }} angezeigt oder ausgeführt. Der ideale Platz für einen Fallback oder einen Hinweis auf Inkompatibilität ist also vor dem abschließenden `</audio>`-Tag. In diesem Fall haben wir einen einfachen Absatz mit einem Link zum direkten Herunterladen des Audios bereitgestellt.
- Das `controls`-Attribut am {{ htmlelement("audio") }}-Element wird angegeben, wenn wir vom Browser die Bereitstellung der Standardwiedergabesteuerungen benötigen. Wenn Sie dieses Attribut nicht angeben, erscheinen keine Steuerungen — und Sie müssen stattdessen Ihre eigenen Steuerungen erstellen und deren Funktionalität mit der Media API programmieren (siehe unten). Dies kann jedoch ein guter Ansatz sein, da die Standardsteuerungen in verschiedenen Browsern unterschiedlich aussehen. Eigene Steuerungen zu erstellen, gewährleistet ein einheitliches Erscheinungsbild der Steuerungen über alle Browser hinweg.

## HTML-Audio im Detail

Nachdem wir ein einfaches Beispiel betrachtet haben, wollen wir nun die verschiedenen Aspekte von HTML-Audio im Detail erkunden.

### Audio-HTML-Attribute

Wir können eine Anzahl von Attributen mit dem audio-Tag angeben, um die Art und Weise, wie Audio initialisiert wird, weiter zu bestimmen.

#### autoplay

Die Angabe von `autoplay` bewirkt, dass das Audio so schnell wie möglich und ohne Benutzerinteraktion startet — kurz gesagt, das Audio wird automatisch abgespielt.

```html
<audio autoplay>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert, und seine Verwendung wird nicht empfohlen, es sei denn, es ist wirklich notwendig. Automatisch abgespieltes Audio (und Video) ist in der Regel wirklich lästig. Außerdem haben Browser Richtlinien, die das automatische Abspielen in vielen Situationen vollständig blockieren. Siehe den [Autoplay-Leitfaden für Media- und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide) für Details.

#### loop

Das `loop`-Attribut stellt sicher, dass das Audio beim Erreichen des Endes des Audioclips an den Anfang springt und erneut abgespielt wird.

```html
<audio loop>…</audio>
```

#### muted

Wenn Sie möchten, dass das Audio stummgeschaltet startet (keine Lautstärke), fügen Sie das `muted`-Attribut hinzu.

```html
<audio muted>…</audio>
```

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert.

#### preload

Das `preload`-Attribut ermöglicht es Ihnen, eine Präferenz anzugeben, wie der Browser das Audio vorlädt, mit anderen Worten, welchen Teil der Datei er herunterlädt, wenn das {{ htmlelement("audio") }}-Element initialisiert wird und bevor der Wiedergabe-Button gedrückt wird.

`preload` kann drei verschiedene Werte annehmen:

1. `none`: Nichts herunterladen, bevor der Wiedergabe-Button gedrückt wird.
2. `metadata`: Die Audiodaten-Metadaten herunterladen; dies ist in der Regel die beste Option, da sie Ihnen erlaubt, auf Informationen wie die Audiolänge zuzugreifen und diese anzuzeigen und dem Browser zu ermöglichen, herauszufinden, welche Audiodatei er verwenden soll.
3. `auto`: Die gesamte Audiodatei so schnell wie möglich herunterladen. Dies ist im Allgemeinen keine gute Option, es sei denn, Sie können garantieren, dass Ihre Benutzer über eine schnelle Netzwerkverbindung verfügen.

> [!NOTE]
> Dieser Wert wird auf mobilen Plattformen oft ignoriert.

```html
<audio preload="auto">…</audio>
```

#### controls

Wir spezifizieren das `controls`-Attribut, wenn wir vom Browser benötigen, dass er uns seine Standard-Wiedergabesteuerungen bereitstellt.

```html
<audio controls>…</audio>
```

#### src

Wie oben erwähnt, können Sie das {{ htmlelement("source") }}-Element verwenden, um eine oder mehrere Quell-Audiodateien anzugeben. Alternativ können Sie das `src`-Attribut direkt am {{ htmlelement("audio") }}-Element einschließen, um eine einzelne Quelldatei anzugeben.

```html
<audio src="audiofile.mp3">…</audio>
```

#### type

Wie oben erwähnt, um sicherzustellen, dass der Browser weiß, welcher Dateityp angegeben wird, ist es eine gute Praxis, ein `type`-Attribut zusammen mit dem `src`-Attribut anzugeben. Das `type`-Attribut gibt den MIME-Typ oder Internet Media Type der Datei an.

```html
<audio src="audiofile.mp3" type="audio/mpeg">…</audio>
```

### Manipulation des Audio-Elements mit JavaScript

Zusätzlich zur Möglichkeit, verschiedene Attribute in HTML anzugeben, bietet das {{ htmlelement("audio") }}-Element mehrere Eigenschaften und Methoden, die Sie über JavaScript manipulieren können.

Angenommen, das folgende HTML:

```html
<audio id="my-audio" src="audiofile.mp3">…</audio>
```

Sie können das {{ htmlelement("audio") }}-Element so abrufen:

```js
const audio = document.getElementById("my-audio");
```

Alternativ können Sie ein neues Element erstellen. Hier ist ein Beispiel, wie Sie ein {{ htmlelement("audio") }}-Element erstellen, das Medien zum Abspielen festlegt, abspielt und pausiert, und dann ab 5 Sekunden in das Audio abspielt:

```js
const audio = document.createElement("audio");

if (audio.canPlayType("audio/mpeg")) {
  audio.setAttribute("src", "audiofile.mp3");
}

if (audio.canPlayType("audio/ogg")) {
  audio.setAttribute("src", "audiofile.ogg");
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

Die `play()`-Methode wird verwendet, um das Audio abzuspielen. Sie nimmt keine Parameter.

```js
audio.play();
```

#### pause

Die `pause()`-Methode wird verwendet, um das Audio anzuhalten. Sie nimmt keine Parameter.

```js
audio.pause();
```

> [!NOTE]
> Es gibt keine Stopp-Methode — um eine Stop-Funktion umzusetzen, müssten Sie das Medium pausieren und dann den Wert der [`currentTime`](#currenttime)-Eigenschaft auf 0 setzen.

#### canPlayType

Die `canPlayType()`-Methode fragt den Browser, ob ein bestimmter Audio-Dateityp unterstützt wird. Sie nimmt den MIME-Typ des zu prüfenden Typs als Parameter.

```js
if (audio.canPlayType("audio/mpeg")) {
  // Unterstützt.
  // Tun Sie hier etwas!
}
```

`canPlayType()` gibt eines von drei Werten zurück:

1. `probably`
2. `maybe`
3. "" (ein leerer String)

In der Praxis prüfen wir normalerweise, ob das Ergebnis wahr oder falsch ist. Nicht-leere Strings sind wahr.

> [!NOTE]
> Eine sehr frühe Spezifikation gab an, dass der Browser `no` anstelle eines leeren Strings zurückgeben sollte, aber glücklicherweise sind die Anzahl der Personen, die ältere Browser verwenden, die diese Version der Spezifikation implementieren, gering und selten.

#### currentTime

Die `currentTime`-Eigenschaft erhält oder setzt die aktuelle Zeit, bei der das Audio abgespielt werden soll. Dies ist auf viele Arten nützlich, zum Beispiel da `play()` keinen Parameter nimmt, müssen wir den Punkt, von dem aus abgespielt werden soll, separat festlegen, wenn er nicht 0 sein soll.

Der Wert von `currentTime` ist eine Zahl, die die Zeit in Sekunden darstellt.

```js
if (audio.currentTime > 5) {
  audio.currentTime = 3;
}
```

#### volume

Die `volume`-Eigenschaft ermöglicht es uns, die Lautstärke des Audios zu setzen, als eine Zahl zwischen 0 und 1.

```js
// Setzen Sie die Lautstärke auf 50 %
audio.volume = 0.5;
```

## Erstellen Ihres eigenen benutzerdefinierten Audioplayers

Die JavaScript Media API ermöglicht es Ihnen, Ihren eigenen benutzerdefinierten Player zu erstellen. Lassen Sie uns ein sehr minimales Beispiel betrachten. Wir können HTML und JavaScript kombinieren, um einen sehr einfachen Player mit einem Play- und einem Pause-Button zu erstellen. Zuerst richten wir das Audio im HTML ein, ohne das `controls`-Attribut, da wir unsere eigenen Steuerungen erstellen:

```html
<audio id="my-audio">
  <source src="audiofile.mp3" type="audio/mpeg" />
  <source src="audiofile.ogg" type="audio/ogg" />
  <!-- Fallback hier platzieren, da <audio> unterstützende Browser es ignorieren werden -->
  <p>Herunterladen<a href="audiofile.mp3">audiofile.mp3</a></p>
</audio>

<!-- Benutzerdefinierte Play- und Pause-Buttons -->
<button id="play">play</button>
<button id="pause">pause</button>
```

Als nächstes fügen wir dem Player etwas Funktionalität mit JavaScript hinzu:

```js
window.onload = () => {
  const audio = document.getElementById("my-audio");
  const play = document.getElementById("play");
  const pause = document.getElementById("pause");

  // Funktionen mit den 'onclick'-Ereignissen verknüpfen
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

Oben haben wir gezeigt, wie Sie einen sehr einfachen Audioplayer erstellen können, aber was, wenn wir den Fortschritt, das Puffern zeigen und die Buttons nur aktivieren möchten, wenn das Medium bereit zum Abspielen ist? Glücklicherweise gibt es eine Anzahl von Ereignissen, die wir verwenden können, um unseren Player genau wissen zu lassen, was passiert.

Zuerst werfen wir einen Blick auf den Medienladeprozess in der Reihenfolge:

### loadstart

Das `loadstart`-Ereignis teilt uns mit, dass der Ladeprozess begonnen hat und der Browser mit dem Medium verbindet.

```js
audio.addEventListener("loadstart", () => {
  // Datei wird geladen
});
```

### durationchange

Wenn Sie nur wissen möchten, sobald die Dauer Ihres Mediums feststeht, ist dies das Ereignis für Sie. Dies kann nützlich sein, da der Anfangswert für die Dauer `NaN` (Not a Number) ist, was Sie wahrscheinlich nicht Ihren Benutzern anzeigen möchten.

```js
audio.addEventListener("durationchange", () => {
  // Sie können die Dauer jetzt anzeigen
});
```

### loadedmetadata

Metadaten können mehr als nur Dauer enthalten — wenn Sie warten möchten, bis alle Metadaten heruntergeladen sind, bevor Sie etwas tun, können Sie das `loadedmetadata`-Ereignis feststellen.

```js
audio.addEventListener("loadedmetadata", () => {
  // Sie können die Dauer jetzt anzeigen
});
```

### loadeddata

Das `loadeddata`-Ereignis wird ausgelöst, wenn das erste Stück des Mediums angekommen ist. Der Playhead ist in Position, aber noch nicht ganz bereit zum Abspielen.

```js
audio.addEventListener("loadeddata", () => {
  // Sie könnten den Playhead jetzt anzeigen
});
```

### progress

Das `progress`-Ereignis zeigt an, dass der Download von Medien noch im Gange ist. Es ist eine gute Praxis, zu diesem Zeitpunkt eine Art "Ladeanzeige" anzuzeigen.

```js
audio.addEventListener("progress", () => {
  // Sie könnten dem Benutzer mitteilen, dass das Medium heruntergeladen wird
});
```

### canplay

`canplay` ist ein nützliches Ereignis, das Sie feststellen sollten, wenn Sie bestimmen möchten, ob das Medium bereit zum Abspielen ist. Sie könnten beispielsweise benutzerdefinierte Steuerungen deaktivieren, bis dieses Ereignis eintritt.

```js
audio.addEventListener("canplay", () => {
  // Das Audio ist bereit zum Abspielen
});
```

### canplaythrough

`canplaythrough` ist ähnlich wie `canplay`, aber es informiert Sie darüber, dass das Medium bereit ist, vollständig abgespielt zu werden (das heißt, dass die Datei vollständig heruntergeladen wurde oder es geschätzt wird, dass sie rechtzeitig heruntergeladen wird, sodass keine Pufferstopps auftreten).

```js
audio.addEventListener("canplaythrough", () => {
  // Das Audio ist bereit, vollständig abgespielt zu werden
});
```

### Ereignisreihenfolge beim Laden von Medien

Um zusammenzufassen, die Reihenfolge der Medienladeereignisse ist:

`loadstart` > `durationchange` > `loadedmetadata` > `loadeddata` > `progress` > `canplay` > `canplaythrough`

### Ereignisse bei Ladeunterbrechung

Wir haben auch einige Ereignisse, die ausgelöst werden, wenn es eine Art Unterbrechung im Medienladeprozess gibt.

- suspend
  - : Mediendaten werden nicht mehr abgerufen, obwohl die Datei nicht vollständig heruntergeladen wurde.
- abort
  - : Mediendaten-Download wurde abgebrochen, aber nicht aufgrund eines Fehlers.
- error
  - : Ein Fehler wird beim Herunterladen der Mediendaten festgestellt.
- emptied
  - : Der Mediapuffer wurde geleert, möglicherweise aufgrund eines Fehlers oder weil die Methode load() aufgerufen wurde, um es neu zu laden.
- stalled
  - : Mediendaten sind uner erwartet nicht mehr verfügbar.

## Medienwiedergabeereignisse

Wir haben auch eine weitere Reihe von Ereignissen, die nützlich sind, um auf den Zustand der Medienwiedergabe zu reagieren.

### timeupdate

Das `timeupdate`-Ereignis wird jedes Mal ausgelöst, wenn sich die `currentTime`-Eigenschaft ändert. In der Praxis geschieht dies etwa alle 250 Millisekunden. Dieses Ereignis kann verwendet werden, um die Anzeige des Wiedergabefortschritts zu starten.

```js
audio.addEventListener("timeupdate", () => {
  // Aktualisieren Sie etwas im Zusammenhang mit dem Wiedergabefortschritt
});
```

### playing

Das `playing`-Ereignis wird initiiert, wenn die Wiedergabe bereit ist, nach einer Pause aufgrund eines Mangels an Mediendaten zu starten.

### waiting

Das `waiting`-Ereignis wird ausgelöst, wenn die Wiedergabe aufgrund eines Mangels an Mediendaten gestoppt wurde, obwohl sie erwartet wird, sobald Daten verfügbar werden.

### play

Das `play`-Ereignis wird initiiert, nachdem die Methode `play()` zurückgegeben wurde oder wenn das `autoplay`-Attribut dazu geführt hat, dass die Wiedergabe beginnt. Dies ist, wenn sich der Zustand des Mediums von pausiert zu abgespielt ändert.

### pause

Das `pause`-Ereignis wird ausgelöst, nachdem die Methode `pause()` zurückgegeben wurde. Dies ist, wenn sich die Zustände von abgespielt zu pausiert ändern.

### ended

Das `ended`-Ereignis wird initiiert, wenn das Ende des Mediums erreicht ist.

```js
audio.addEventListener("ended", () => {
  // Tun Sie etwas, sobald der Audiotrack beendet ist
});
```

### volumechange

Das `volumechange`-Ereignis zeigt an, dass sich die Lautstärke geändert hat, einschließlich, wenn sie stummgeschaltet wurde.

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
  <!-- Fallback hier platzieren, da <audio> unterstützende Browser es ignorieren werden -->
  <a href="audiofile.mp3">audiofile.mp3</a>
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

Gestaltet wie folgt:

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

Nun lassen Sie uns dieses Ding mit JavaScript verbinden:

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

  // Überprüfen, ob das Medium bereit ist, bevor die Steuerungen angezeigt werden
  if (audio.paused) {
    displayControls();
  } else {
    // noch nicht bereit - auf das canplay-Ereignis warten
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

  // Fortschritt anzeigen
  audio.addEventListener("timeupdate", () => {
    // Prozentangabe setzen
    bar.style.width = `${Math.floor(
      (audio.currentTime / audio.duration) * 100,
    )}%`;
  });
};
```

Sie sollten am Ende mit etwas wie diesem dastehen:

![Ein einfacher Audioplayer mit Play/Pause-Button und Fortschrittsanzeige](simpleplayer.png)

### Suchen mit der Suchleiste

Dies ist ein guter Anfang, aber es wäre schön, wenn man das Audio über die Fortschrittsleiste navigieren könnte. Glücklicherweise ist es nicht allzu schwer, dies zu implementieren.

Zuerst führen wir ein schnelles Update auf die CSS der Fortschrittsleiste durch, um den Handcursor beim Überfahren anzuzeigen:

```css
#progress {
  margin-left: 80px;
  border: 1px solid black;
  cursor: pointer;
}
```

Dann fügen wir den Code hinzu, der den Klick erkennt und den "Playhead" an die richtige Position bewegt:

```js
const progress = document.getElementById("progress");

progress.addEventListener("click", (e) => {
  // Berechnen Sie die normalisierte Position, auf die geklickt wurde
  const clickPosition = (e.pageX - progress.offsetLeft) / progress.offsetWidth;
  const clickTime = clickPosition * audio.duration;

  // Bewegen Sie den Playhead an die richtige Position
  audio.currentTime = clickTime;
});
```

### Pufferung

Okay, wir nähern uns dem Ziel, aber es gibt ein weiteres nützliches Stück Information, das wir anzeigen können: die Menge an Audio, die gepuffert oder im Voraus heruntergeladen wurde.

Es gibt ein paar Eigenschaften, die wir noch nicht betrachtet haben, `buffered` und `seekable`.

#### buffered

Diese Eigenschaft lässt uns wissen, welche Teile des Audios gepuffert (im Voraus heruntergeladen) worden sind. Sie gibt ein sogenanntes `TimeRanges`-Objekt zurück.

```js
bufferedTimeRanges = audio.buffered;
```

#### seekable

Die `seekable`-Eigenschaft informiert Sie darüber, ob Sie direkt zu diesem Teil des Mediums springen können, ohne weiter zu puffern.

```js
seekableTimeRanges = audio.seekable;
```

#### Pufferereignisse

Es gibt auch ein paar Ereignisse in Bezug auf das Puffern:

- `seeking`
  - : Das `seeking`-Ereignis wird ausgelöst, wenn Medien gesucht werden.
- `seeked`
  - : `seeked` tritt auf, wenn sich das `seeking`-Attribut in `false` ändert.

> [!NOTE]
> Sie können mehr über [Pufferung, Suchen und Zeitbereiche](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges) anderswo lesen.

## Siehe auch

- [Pufferung, Suchen und Zeitbereiche](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges)
- [HTMLMediaElement-Ereignisse](/de/docs/Web/API/HTMLMediaElement#events)
- [Ereignisreferenz > Medien](/de/docs/Web/Events#media)
- [Verwendung von HTML-Audio und -Video](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Erstellung eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player)
- [jPlayer](https://jplayer.org/): Eine Open-Source-Audio- und Videobibliothek für jQuery und Zepto.
