---
title: Medienpufferung, Suche und Zeitbereiche
slug: Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Manchmal ist es nützlich zu wissen, wie viel {{htmlelement("audio") }} oder {{htmlelement("video") }} heruntergeladen wurde oder ohne Verzögerung abspielbar ist — ein gutes Beispiel hierfür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel erläutert, wie man eine Puffer-/Suchleiste mithilfe von [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Medien-API erstellt.

## Gepuffert

Das `buffered`-Attribut zeigt uns, welche Teile des Mediums heruntergeladen wurden. Es gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das uns mitteilt, welche Medienstücke heruntergeladen wurden. Dies ist normalerweise zusammenhängend, kann jedoch Lücken enthalten, wenn der Benutzer während der Pufferung des Mediums hin- und herspringt.

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

`TimeRanges` sind eine Serie nicht überlappender Zeitbereiche, mit Start- und Endzeiten. ([mehr über TimeRanges erfahren](/de/docs/Web/API/TimeRanges)).

Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt besteht aus den folgenden Eigenschaften:

- `length`: Die Anzahl der Zeitbereiche im Objekt.
- `start(index)`: Die Startzeit eines Zeitbereichs in Sekunden.
- `end(index)`: Die Endzeit eines Zeitbereichs in Sekunden.

Ohne Benutzereingriffe gibt es normalerweise nur einen Zeitbereich, aber wenn Sie im Medium hin und her springen, können mehrere Zeitbereiche erscheinen, wie durch die untenstehende Visualisierung veranschaulicht. Diese repräsentiert zwei gepufferte Zeitbereiche — einen von 0 bis 5 Sekunden und den zweiten von 15 bis 19 Sekunden.

```plain
------------------------------------------------------
|=============|                    |===========|     |
------------------------------------------------------
0             5                    15          19    21
```

Für diese Audiobeispiel hätte das zugehörige [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt die folgenden verfügbaren Eigenschaften:

```js
audio.buffered.length; // returns 2
audio.buffered.start(0); // returns 0
audio.buffered.end(0); // returns 5
audio.buffered.start(1); // returns 15
audio.buffered.end(1); // returns 19
```

Um gepufferte Zeitbereiche auszuprobieren und zu visualisieren, können wir ein bisschen HTML schreiben:

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

und ein bisschen JavaScript:

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

Dies funktioniert besser mit längeren Audio- oder Videodateien, aber drücken Sie Play und klicken Sie in der Player-Fortschrittsleiste, und Sie sollten so etwas wie dies erhalten. Jedes rote gefüllte weiße Rechteck repräsentiert einen Zeitbereich.

![Ein Audioplayer mit Wiedergabeschaltfläche, Suchleiste und Lautstärkeregelung, mit einer Reihe roter Rechtecke darunter, die Zeitbereiche darstellen.](bufferedtimeranges.png)

> [!NOTE]
> Sie können den [Timerange-Code live auf JS Bin sehen](https://jsbin.com/memazaro/1/edit).

## Suchbar

Das `seekable`-Attribut gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück und informiert uns darüber, welche Teile des Mediums ohne Verzögerung abgespielt werden können; dies ist unabhängig davon, ob dieser Teil heruntergeladen wurde oder nicht. Einige Teile des Mediums können suchbar, aber nicht gepuffert sein, wenn Bytebereichsanfragen auf dem Server aktiviert sind. Bytebereichsanfragen ermöglichen es, Teile der Mediendatei vom Server zu liefern, sodass sie fast sofort abspielbereit sind — daher sind sie suchbar. Weitere Informationen zu Bytebereichsanfragen finden Sie unter [HTTP Range Requests](/de/docs/Web/HTTP/Guides/Range_requests).

```js
const seekableTimeRanges = audio.seekable;
```

## Erstellung unseres eigenen Pufferungs-Feedbacks

Wenn wir unseren eigenen benutzerdefinierten Player erstellen möchten, möchten wir möglicherweise Feedback dazu geben, wie viel des Mediums abspielbereit ist. In der Praxis ist es eine gute Möglichkeit, das `seekable`-Attribut zu verwenden, obwohl wir oben gesehen haben, dass suchbare Teile des Mediums nicht unbedingt zusammenhängend sind — sie sind es jedoch häufig und wir können diese Informationen sicher approximieren, um dem Benutzer eine Vorstellung davon zu geben, welche Teile des Mediums direkt abgespielt werden können. Wir können diesen Punkt im Medium mit der folgenden Codezeile finden:

```js
const seekableEnd = audio.seekable.end(audio.seekable.length - 1);
```

> [!NOTE] > `audio.seekable.end(audio.seekable.length - 1)` teilt uns tatsächlich den Endpunkt des letzten suchbaren Zeitbereichs mit (nicht aller suchbaren Medien). In der Praxis ist dies ausreichend, da der Browser entweder Bereichsanfragen ermöglicht oder nicht. Wenn nicht, entspricht `audio.seekable` `audio.buffered`, was einen gültigen Hinweis auf das Ende der suchbaren Medien gibt. Wenn Bereichsanfragen aktiviert sind, wird dieser Wert normalerweise fast sofort zur Gesamtdauer des Mediums.

Es ist vielleicht besser, einen Hinweis darauf zu geben, wie viel Medium tatsächlich heruntergeladen wurde — dies ist, was die nativen Player des Browsers anzuzeigen scheinen.

Bauen wir dies also. Das HTML für unseren Player sieht folgendermaßen aus:

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

Wir verwenden das folgende CSS, um die Pufferanzeige zu stylen:

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

Und das folgende JavaScript bietet unsere Funktionalität:

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

Das `progress`-Ereignis wird ausgelöst, wenn Daten heruntergeladen werden. Dies ist ein gutes Ereignis, um darauf zu reagieren, wenn wir den Download- oder Pufferfortschritt anzeigen möchten.

Das `timeupdate`-Ereignis wird viermal pro Sekunde ausgelöst, während das Medium abgespielt wird. Hier erhöhen wir unsere Abspielfortschrittsleiste.

Dies sollte Ihnen Ergebnisse ähnlich dem folgenden liefern, wobei die hellgraue Leiste den gepufferten Fortschritt und die grüne Leiste den abgespielten Fortschritt zeigt:

![Ein Audioplayer mit Wiedergabeschaltfläche, Suchleiste und Lautstärkeregelung, und einer Fortschrittsleiste unter den Bedienelementen. Die Fortschrittsleiste hat einen grünen Abschnitt, um das abgespielte Video anzuzeigen, und einen hellgrauen Abschnitt, um anzuzeigen, wie viel gepuffert wurde.](bufferedprogress.png)

> [!NOTE]
> Sie können den [Pufferungscode live auf JS Bin sehen](https://jsbin.com/badimipi/1/edit).

## Ein kurzes Wort über Abgespielt

Es lohnt sich, die `played`-Eigenschaft zu erwähnen — sie teilt uns mit, welche Zeitbereiche im Medium abgespielt wurden. Beispiel:

```js
const played = audio.played; // returns a TimeRanges object
```

Dies könnte nützlich sein, um die Teile Ihres Mediums zu bestimmen, die am häufigsten gehört oder angesehen werden.
