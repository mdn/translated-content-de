---
title: Medienpufferung, Suchvorgänge und Zeitbereiche
slug: Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges
l10n:
  sourceCommit: a318c45b5f0b4b8448d9c6b857206552e0e82980
---

Manchmal ist es nützlich zu wissen, wie viel {{htmlelement("audio") }} oder {{htmlelement("video") }} heruntergeladen oder ohne Verzögerung abspielbar ist — ein gutes Beispiel dafür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel behandelt, wie man eine Puffer-/Suchleiste unter Verwendung von [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Media-API erstellt.

## Gepuffert

Das `buffered`-Attribut zeigt an, welche Teile des Mediums heruntergeladen wurden. Es gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das uns mitteilt, welche Medienabschnitte heruntergeladen wurden. Normalerweise sind diese zusammenhängend, aber wenn der Benutzer hin und her springt, während das Medium gepuffert wird, können Lücken entstehen.

Dies funktioniert mit {{htmlelement("audio") }} oder {{htmlelement("video") }}; betrachten wir zunächst ein Audio-Beispiel:

```html
<audio id="my-audio" controls src="music.mp3"></audio>
```

Wir können auf diese Attribute wie folgt zugreifen:

```js
const audio = document.getElementById("my-audio");
const bufferedTimeRanges = audio.buffered;
```

## TimeRanges-Objekt

TimeRanges sind eine Serie nicht überlappender Zeitbereiche mit Start- und Stoppzeiten. ([Erfahren Sie mehr über TimeRanges](/de/docs/Web/API/TimeRanges)).

Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt besteht aus den folgenden Eigenschaften:

- `length`: Die Anzahl der Zeitbereiche im Objekt.
- `start(index)`: Die Startzeit eines Zeitbereichs in Sekunden.
- `end(index)`: Die Endzeit eines Zeitbereichs in Sekunden.

Ohne Benutzereingriff gibt es normalerweise nur einen Zeitbereich, aber wenn Sie im Medium hin und her springen, können mehrere Zeitbereiche erscheinen, wie in der folgenden Visualisierung dargestellt. Diese zeigt zwei gepufferte Zeitbereiche — einer von 0 bis 5 Sekunden und ein zweiter von 15 bis 19 Sekunden.

```plain
------------------------------------------------------
|=============|                    |===========|     |
------------------------------------------------------
0             5                    15          19    21
```

Für diese Audioinstanz hätte das zugehörige [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt die folgenden verfügbaren Eigenschaften:

```js
audio.buffered.length; // returns 2
audio.buffered.start(0); // returns 0
audio.buffered.end(0); // returns 5
audio.buffered.start(1); // returns 15
audio.buffered.end(1); // returns 19
```

Um gepufferte Zeitbereiche auszuprobieren und zu visualisieren, können wir ein bisschen HTML schreiben:

```html live-sample___timeranges
<p>
  <audio id="my-audio" controls>
    <source
      src="https://cdn.freesound.org/previews/155/155386_326032-lq.mp3"
      type="audio/mpeg" />
  </audio>
</p>
<p>
  <canvas id="my-canvas" width="300" height="20"> </canvas>
</p>
```

```css hidden live-sample___timeranges
#my-audio,
#my-canvas {
  width: 100%;
}
```

und ein bisschen JavaScript:

```js live-sample___timeranges
const audio = document.getElementById("my-audio");
const canvas = document.getElementById("my-canvas");
const context = canvas.getContext("2d");

context.fillStyle = "lightgray";
context.fillRect(0, 0, canvas.width, canvas.height);
context.fillStyle = "red";
context.strokeStyle = "white";

// Display TimeRanges
audio.addEventListener("seeked", () => {
  const inc = canvas.width / audio.duration;
  for (let i = 0; i < audio.buffered.length; i++) {
    const startX = audio.buffered.start(i) * inc;
    const endX = audio.buffered.end(i) * inc;
    const width = endX - startX;

    context.fillRect(startX, 0, width, canvas.height);
    context.rect(startX, 0, width, canvas.height);
    context.stroke();
  }
});
```

Dies funktioniert besser mit längeren Audio- oder Videostücken, aber drücken Sie auf Wiedergabe und klicken Sie auf die Player-Fortschrittsleiste, und Sie sollten Segmente in Rot sehen. Jedes rot gefüllte weiße Rechteck stellt einen Zeitbereich dar.

{{EmbedLiveSample("timeranges", "", 200)}}

## Suchbar

Das `seekable`-Attribut gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück und zeigt an, welche Teile des Mediums ohne Verzögerung abgespielt werden können; dies unabhängig davon, ob dieser Teil heruntergeladen wurde oder nicht. Einige Teile des Mediums können suchbar, aber nicht gepuffert sein, wenn auf dem Server Bytebereich-Anfragen aktiviert sind. Bytebereich-Anfragen ermöglichen es, Teile der Mediendatei vom Server zu liefern und können somit fast sofort abspielbar sein — daher sind sie suchbar.
Für weitere Informationen zu Bytebereich-Anfragen siehe [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests).

```js
const seekableTimeRanges = audio.seekable;
```

## Eigene Pufferanzeige erstellen

Wenn wir unseren eigenen benutzerdefinierten Player erstellen möchten, könnten wir Feedback darüber geben wollen, wie viel des Mediums abspielbereit ist. Praktisch ist es eine gute Möglichkeit, das `seekable`-Attribut zu verwenden, obwohl, wie wir oben gesehen haben, die suchbaren Teile des Mediums nicht unbedingt zusammenhängend sind — sie sind es jedoch oft und wir können diese Information sicher approximieren, um dem Benutzer einen Hinweis darauf zu geben, welche Teile des Mediums direkt abgespielt werden können. Wir können diesen Punkt im Medium mit der folgenden Codezeile finden:

```js
const seekableEnd = audio.seekable.end(audio.seekable.length - 1);
```

> [!NOTE]
> `audio.seekable.end(audio.seekable.length - 1)` gibt tatsächlich den Endpunkt des letzten suchbaren Zeitbereichs an (nicht aller suchbaren Medien). Praktisch ist das gut genug, da der Browser entweder Bereichsanfragen ermöglicht oder nicht. Wenn nicht, dann entspricht `audio.seekable` `audio.buffered`, was einen gültigen Hinweis auf das Ende der suchbaren Medien liefert. Wenn Bereichsanfragen aktiviert sind, wird dieser Wert normalerweise fast sofort zur Dauer des Mediums.

Es ist vielleicht besser, einen Hinweis darauf zu geben, wie viel Medium tatsächlich heruntergeladen wurde — das scheint es, was die nativen Player der Browser anzeigen.

Beginnen wir also damit. Das HTML für unseren Player sieht folgendermaßen aus:

```html live-sample___buffered-progress
<audio id="my-audio" preload controls>
  <source
    src="https://cdn.freesound.org/previews/155/155386_326032-lq.mp3"
    type="audio/mpeg" />
</audio>
<div class="buffered">
  <span id="buffered-amount"></span>
</div>
<div class="progress">
  <span id="progress-amount"></span>
</div>
```

Wir verwenden das folgende CSS, um die Pufferanzeige zu gestalten:

```css live-sample___buffered-progress
.buffered {
  height: 20px;
  position: relative;
  background: #555;
  width: 300px;
}

#buffered-amount {
  display: block;
  height: 100%;
  background-color: #777;
  width: 0;
}

.progress {
  margin-top: -20px;
  height: 20px;
  position: relative;
  width: 300px;
}

#progress-amount {
  display: block;
  height: 100%;
  background-color: #595;
  width: 0;
}
```

Und das folgende JavaScript stellt unsere Funktionalität bereit:

```js live-sample___buffered-progress
const audio = document.getElementById("my-audio");

audio.addEventListener("progress", () => {
  const duration = audio.duration;
  if (duration > 0) {
    for (let i = 0; i < audio.buffered.length; i++) {
      if (
        audio.buffered.start(audio.buffered.length - 1 - i) < audio.currentTime
      ) {
        document.getElementById("buffered-amount").style.width = `${
          (audio.buffered.end(audio.buffered.length - 1 - i) * 100) / duration
        }%`;
        break;
      }
    }
  }
});

audio.addEventListener("timeupdate", () => {
  const duration = audio.duration;
  if (duration > 0) {
    document.getElementById("progress-amount").style.width = `${
      (audio.currentTime / duration) * 100
    }%`;
  }
});
```

Das Progress-Event wird ausgelöst, wenn Daten heruntergeladen werden, dies ist ein gutes Event, um darauf zu reagieren, wenn wir den Download- oder Pufferungsfortschritt anzeigen möchten.

Das Timeupdate-Event wird 4 mal pro Sekunde ausgelöst, während das Medium abgespielt wird, und dort wird unsere Abspielfortschrittsanzeige inkrementiert.

Dieses Mal sollten Sie zwei Arten von Segmenten sehen. Die hellgraue Leiste stellt den gepufferten Fortschritt dar und die grüne Leiste den gespielten Fortschritt.

{{EmbedLiveSample("buffered-progress", "", 200)}}

## Ein kurzes Wort zu Gespielt

Es lohnt sich, die `played`-Eigenschaft zu erwähnen — diese gibt an, welche Zeitbereiche innerhalb des Mediums abgespielt wurden. Zum Beispiel:

```js
const played = audio.played; // returns a TimeRanges object
```

Dies könnte nützlich sein, um festzustellen, welche Teile Ihres Mediums am meisten gehört oder angesehen wurden.
