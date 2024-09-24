---
title: Medienpufferung, Suchlauf und Zeitbereiche
slug: Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges
l10n:
  sourceCommit: 492065b0932dca9708efd0051bd687b590e3f9d4
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Manchmal ist es nützlich zu wissen, wie viel {{htmlelement("audio") }} oder {{htmlelement("video") }} heruntergeladen wurde oder ohne Verzögerung abspielbar ist — ein gutes Beispiel dafür ist die gepufferte Fortschrittsleiste eines Audio- oder Videoplayers. Dieser Artikel behandelt, wie man eine Puffer/Suchleiste mit [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Media API erstellt.

## Buffered

Das `buffered`-Attribut gibt an, welche Teile des Mediums heruntergeladen wurden. Es gibt ein {{ domxref("TimeRanges") }}-Objekt zurück, das angibt, welche Medienabschnitte heruntergeladen wurden. Dies ist normalerweise zusammenhängend, aber wenn der Benutzer hin und her springt, während das Medium gepuffert wird, kann es Löcher enthalten.

Dies funktioniert mit {{htmlelement("audio") }} oder {{htmlelement("video") }}; betrachten wir zunächst ein einfaches Audio-Beispiel:

```html
<audio id="my-audio" controls src="music.mp3"></audio>
```

Wir können auf diese Attribute wie folgt zugreifen:

```js
const audio = document.getElementById("my-audio");
const bufferedTimeRanges = audio.buffered;
```

## TimeRanges-Objekt

TimeRanges sind eine Reihe von nicht überlappenden Zeitbereichen mit Start- und Endzeiten. ([Erfahren Sie mehr über TimeRanges](/de/docs/Web/API/TimeRanges)).

Ein {{ domxref("TimeRanges") }}-Objekt besteht aus den folgenden Eigenschaften:

- `length`: Die Anzahl der Zeitbereiche im Objekt.
- `start(index)`: Die Startzeit, in Sekunden, eines Zeitbereichs.
- `end(index)`: Die Endzeit, in Sekunden, eines Zeitbereichs.

Ohne Benutzereingriff gibt es normalerweise nur einen Zeitbereich, aber wenn Sie im Medium hin und her springen, können mehr als ein Zeitbereich erscheinen, wie in der folgenden Visualisierung dargestellt. Diese zeigt zwei gepufferte Zeitbereiche — einen von 0 bis 5 Sekunden und den zweiten von 15 bis 19 Sekunden.

```plain
------------------------------------------------------
|=============|                    |===========|     |
------------------------------------------------------
0             5                    15          19    21
```

Für diese Audioinstanz hätte das zugehörige {{ domxref("TimeRanges") }}-Objekt die folgenden verfügbaren Eigenschaften:

```js
audio.buffered.length; // gibt 2 zurück
audio.buffered.start(0); // gibt 0 zurück
audio.buffered.end(0); // gibt 5 zurück
audio.buffered.start(1); // gibt 15 zurück
audio.buffered.end(1); // gibt 19 zurück
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

  // Anzeige TimeRanges

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

Dies funktioniert besser mit längeren Audio- oder Videostücken, aber drücken Sie "Play" und klicken Sie auf die Fortschrittsleiste des Players, und Sie sollten etwas Ähnliches wie dies erhalten. Jedes rot gefüllte weiße Rechteck repräsentiert einen Zeitbereich.

![Ein einfacher Audioplayer mit Wiedergabeknopf, Suchleiste und Lautstärkeregelung, mit einer Reihe von roten Rechtecken darunter, die Zeitbereiche darstellen.](bufferedtimeranges.png)

> [!NOTE]
> Sie können den [timerange code live auf JS Bin sehen](https://jsbin.com/memazaro/1/edit).

## Seekable

Das `seekable`-Attribut gibt ein {{ domxref("TimeRanges") }}-Objekt zurück und zeigt an, welche Teile des Mediums ohne Verzögerung abgespielt werden können; dies ist unabhängig davon, ob dieser Teil heruntergeladen wurde oder nicht. Einige Teile des Mediums können durchsuchbar, aber nicht gepuffert sein, wenn Byte-Range-Anfragen auf dem Server aktiviert sind. Byte-Range-Anfragen ermöglichen es, Teile der Mediendatei vom Server zu liefern und somit fast sofort abspielbereit zu sein — daher sind sie durchsuchbar.
Weitere Informationen zu Byte-Range-Anfragen finden Sie unter [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Range_requests).

```js
const seekableTimeRanges = audio.seekable;
```

## Eigene Pufferanzeige erstellen

Wenn wir unseren eigenen benutzerdefinierten Player erstellen möchten, möchten wir möglicherweise Rückmeldung darüber geben, wie viel vom Medium abspielbereit ist. In der Praxis ist es eine gute Möglichkeit, das `seekable`-Attribut zu verwenden, obwohl, wie wir oben gesehen haben, durchsuchbare Teile des Mediums nicht unbedingt zusammenhängend sind — sie sind es jedoch oft und wir können diese Information sicher annähern, um dem Benutzer anzuzeigen, welche Teile des Mediums direkt abgespielt werden können. Wir können diesen Punkt im Medium mit der folgenden Zeile Code finden:

```js
const seekableEnd = audio.seekable.end(audio.seekable.length - 1);
```

> **Hinweis:** `audio.seekable.end(audio.seekable.length - 1)` sagt uns eigentlich den Endpunkt des letzten durchsuchbaren Zeitbereichs (nicht aller durchsuchbaren Medien). In der Praxis ist das gut genug, da der Browser entweder Bereichsanfragen aktiviert oder nicht. Wenn nicht, wird `audio.seekable` gleich `audio.buffered` sein, was eine gültige Angabe über das Ende des durchsuchbaren Mediums geben wird. Wenn Bereichsanfragen aktiviert sind, wird dieser Wert normalerweise fast sofort zur Dauer des Mediums.

Es ist vielleicht besser, einen Hinweis darauf zu geben, wie viel Medium tatsächlich heruntergeladen wurde — das ist, was die nativen Player des Browsers anzeigen.

Also los geht's. Das HTML für unseren Player sieht folgendermaßen aus:

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

Und das folgende JavaScript stellt unsere Funktionalität bereit:

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

Das Fortschrittsereignis wird ausgelöst, wenn Daten heruntergeladen werden. Dies ist ein gutes Ereignis, um darauf zu reagieren, wenn wir den Download- oder Pufferfortschritt anzeigen wollen.

Das timeupdate-Ereignis wird viermal pro Sekunde ausgelöst, wenn das Medium abgespielt wird, und dort erhöhen wir unsere Fortschrittsleiste für das Abspielen.

Das sollte Ihnen Ergebnisse ähnlich wie die folgenden geben, wobei die hellgraue Leiste den gepufferten Fortschritt und die grüne Leiste den abgespielten Fortschritt anzeigt:

![Ein einfacher Audioplayer mit Wiedergabeknopf, Suchleiste und Lautstärkeregelung sowie einer Fortschrittsleiste unter den Steuerelementen. Die Fortschrittsleiste hat einen grünen Abschnitt, um das abgespielte Video zu zeigen, und einen hellgrauen Abschnitt, um anzuzeigen, wie viel gepuffert wurde.](bufferedprogress.png)

> [!NOTE]
> Sie können den [Pufferungscode live auf JS Bin sehen](https://jsbin.com/badimipi/1/edit).

## Ein kurzes Wort über Played

Es ist erwähnenswert, dass die `played`-Eigenschaft uns angibt, welche Zeitbereiche innerhalb des Mediums abgespielt wurden. Zum Beispiel:

```js
const played = audio.played; // gibt ein TimeRanges Objekt zurück
```

Dies könnte nützlich sein, um die Teile Ihres Mediums festzustellen, die am meisten gehört oder gesehen werden.
