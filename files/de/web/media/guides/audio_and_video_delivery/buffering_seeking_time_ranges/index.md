---
title: Medienpufferung, Suche und Zeitbereiche
slug: Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

Manchmal ist es nützlich zu wissen, wie viel von einem {{htmlelement("audio")}}- oder {{htmlelement("video")}}-Element heruntergeladen oder ohne Verzögerung abspielbar ist — ein gutes Beispiel dafür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel erklärt, wie man eine Puffer-/Suchleiste unter Verwendung von [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Medien-API erstellt.

## Gepuffert (Buffered)

Das `buffered`-Attribut zeigt uns, welche Teile des Mediums heruntergeladen wurden. Es gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das uns verrät, welche Medienabschnitte heruntergeladen wurden. Dies ist normalerweise zusammenhängend, aber wenn der Benutzer während der Pufferung des Mediums hin und her springt, kann es Lücken enthalten.

Dies funktioniert mit {{htmlelement("audio")}} oder {{htmlelement("video")}}; betrachten wir zunächst ein Audio-Beispiel:

```html
<audio id="my-audio" controls src="music.mp3"></audio>
```

Wir können auf diese Attribute wie folgt zugreifen:

```js
const audio = document.getElementById("my-audio");
const bufferedTimeRanges = audio.buffered;
```

## TimeRanges-Objekt

TimeRanges sind eine Serie nicht überlappender Zeitbereiche mit Start- und Endzeiten. ([mehr über TimeRanges erfahren](/de/docs/Web/API/TimeRanges)).

Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt besteht aus den folgenden Eigenschaften:

- `length`: Die Anzahl der Zeitbereiche im Objekt.
- `start(index)`: Die Startzeit, in Sekunden, eines Zeitbereichs.
- `end(index)`: Die Endzeit, in Sekunden, eines Zeitbereichs.

Ohne Benutzerinteraktion gibt es normalerweise nur einen Zeitbereich, aber wenn Sie im Medium hin und her springen, können mehrere Zeitbereiche erscheinen, wie in der folgenden Visualisierung dargestellt. Diese repräsentiert zwei gepufferte Zeitbereiche — einen von 0 bis 5 Sekunden und den zweiten von 15 bis 19 Sekunden.

```plain
------------------------------------------------------
|=============|                    |===========|     |
------------------------------------------------------
0             5                    15          19    21
```

Für dieses Audio-Beispiel hätte das zugehörige [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt die folgenden verfügbaren Eigenschaften:

```js
audio.buffered.length; // returns 2
audio.buffered.start(0); // returns 0
audio.buffered.end(0); // returns 5
audio.buffered.start(1); // returns 15
audio.buffered.end(1); // returns 19
```

Um gepufferte Zeitbereiche auszuprobieren und zu visualisieren, können wir ein wenig HTML schreiben:

```html
<p>
  <audio id="my-audio" controls>
    <source src="music.mp3" type="audio/mpeg" />
  </audio>
</p>
<p>
  <canvas id="my-canvas" width="300" height="20"> </canvas>
</p>
```

und ein wenig JavaScript:

```js
window.onload = () => {
  const audio = document.getElementById("my-audio");
  const canvas = document.getElementById("my-canvas");
  const context = canvas.getContext("2d");

  context.fillStyle = "lightgray";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "red";
  context.strokeStyle = "white";

  const inc = canvas.width / audio.duration;

  // Display TimeRanges

  audio.addEventListener("seeked", () => {
    for (let i = 0; i < audio.buffered.length; i++) {
      const startX = audio.buffered.start(i) * inc;
      const endX = audio.buffered.end(i) * inc;
      const width = endX - startX;

      context.fillRect(startX, 0, width, canvas.height);
      context.rect(startX, 0, width, canvas.height);
      context.stroke();
    }
  });
};
```

Dies funktioniert besser mit längeren Audio- oder Videodateien, aber drücken Sie auf "Play" und klicken Sie in der Fortschrittsleiste des Players, und Sie sollten etwas in dieser Art erhalten. Jedes mit rotem Rand gefüllte weiße Rechteck stellt einen Zeitbereich dar.

![Ein einfacher Audioplayer mit Play-Taste, Suchleiste und Lautstärkeregelung, mit einer Reihe von roten Rechtecken darunter, die Zeitbereiche darstellen.](bufferedtimeranges.png)

> [!NOTE]
> Sie können den [laufenden Timerange-Code auf JS Bin live sehen](https://jsbin.com/memazaro/1/edit).

## Suchbereiche (Seekable)

Das `seekable`-Attribut gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück und zeigt uns, welche Teile des Mediums ohne Verzögerung abgespielt werden können; das ist unabhängig davon, ob dieser Teil heruntergeladen wurde oder nicht. Einige Teile des Mediums können seekable, aber nicht gepuffert sein, wenn Bytebereich-Anfragen auf dem Server aktiviert sind. Bytebereich-Anfragen erlauben es, Teile der Mediendatei vom Server zu liefern, und können so fast sofort abspielbereit sein — daher sind sie suchbar. Weitere Informationen zu Bytebereich-Anfragen finden Sie unter [HTTP-Range-Anfragen](/de/docs/Web/HTTP/Range_requests).

```js
const seekableTimeRanges = audio.seekable;
```

## Erstellung unseres eigenen Puffer-Feedbacks

Wenn wir unseren eigenen benutzerdefinierten Player erstellen möchten, möchten wir möglicherweise Feedback darüber geben, wie viel des Mediums abspielbereit ist. In der Praxis ist ein guter Weg, dies zu tun, die Verwendung des `seekable`-Attributs, obwohl, wie wir oben gesehen haben, die suchbaren Teile des Mediums nicht unbedingt zusammenhängend sind — sie sind es oft jedoch, und wir können diese Information sicher approximieren, um dem Benutzer einen Hinweis darauf zu geben, welche Teile des Mediums direkt abgespielt werden können. Wir können diesen Punkt im Medium mit der folgenden Codezeile finden:

```js
const seekableEnd = audio.seekable.end(audio.seekable.length - 1);
```

> **Hinweis:** `audio.seekable.end(audio.seekable.length - 1)` teilt uns tatsächlich den Endpunkt des letzten suchbaren Zeitbereichs mit (nicht aller suchbaren Medien). In der Praxis ist dies ausreichend, da der Browser entweder Bereichsanforderungen ermöglicht oder nicht. Wenn nicht, ist `audio.seekable` gleich `audio.buffered`, was einen gültigen Hinweis auf das Ende der suchbaren Medien gibt. Wenn Bereichsanforderungen aktiviert sind, wird dieser Wert normalerweise fast sofort zur Dauer des Mediums.

Es ist vielleicht besser, einen Hinweis darauf zu geben, wie viel Medium tatsächlich heruntergeladen wurde — dies scheint das anzuzeigen, was die nativen Player des Browsers darstellen.

Also bauen wir das. Das HTML für unseren Player sieht so aus:

```html
<audio id="my-audio" preload controls>
  <source src="music.mp3" type="audio/mpeg" />
</audio>
<div class="buffered">
  <span id="buffered-amount"></span>
</div>
<div class="progress">
  <span id="progress-amount"></span>
</div>
```

Wir verwenden das folgende CSS, um die Pufferanzeige zu gestalten:

```css
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

Und das folgende JavaScript sorgt für unsere Funktionalität:

```js
window.onload = () => {
  const audio = document.getElementById("my-audio");

  audio.addEventListener("progress", () => {
    const duration = audio.duration;
    if (duration > 0) {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (
          audio.buffered.start(audio.buffered.length - 1 - i) <
          audio.currentTime
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
};
```

Das Progress-Ereignis wird ausgelöst, wenn Daten heruntergeladen werden. Dies ist ein gutes Ereignis, um darauf zu reagieren, wenn wir den Download- oder Pufferfortschritt anzeigen möchten.

Das Timeupdate-Ereignis wird viermal pro Sekunde ausgelöst, während das Medium abgespielt wird, und dort erhöhen wir unsere Spiel-Fortschrittsleiste.

Dies sollte Ihnen ein Ergebnis ähnlich dem folgenden liefern, wobei die hellgraue Leiste den Pufferfortschritt und die grüne Leiste den Abspiel-Fortschritt anzeigt:

![Ein einfacher Audioplayer mit Play-Taste, Suchleiste und Lautstärkeregelung und einer Fortschrittsleiste unter den Bedienelementen. Die Fortschrittsleiste hat einen grünen Abschnitt, um das abgespielte Video anzuzeigen, und einen hellgrauen Abschnitt, um zu zeigen, wie viel gepuffert wurde.](bufferedprogress.png)

> [!NOTE]
> Sie können den [laufenden Pufferungscode auf JS Bin live sehen](https://jsbin.com/badimipi/1/edit).

## Ein kurzes Wort über "Played"

Es ist erwähnenswert, dass die `played`-Eigenschaft uns mitteilt, welche Zeitbereiche im Medium abgespielt wurden. Zum Beispiel:

```js
const played = audio.played; // returns a TimeRanges object
```

Dies könnte nützlich sein, um festzustellen, welche Teile Ihres Mediums am meisten gehört oder angesehen werden.
