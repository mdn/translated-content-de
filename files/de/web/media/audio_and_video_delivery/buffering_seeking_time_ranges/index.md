---
title: Medienpuffer, Suchen und Zeitbereiche
slug: Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{QuickLinksWithSubPages("/de/docs/Web/Media")}}

Manchmal ist es nützlich zu wissen, wie viel {{htmlelement("audio") }} oder {{htmlelement("video") }} heruntergeladen oder ohne Verzögerung abspielbar ist — ein gutes Beispiel dafür ist die gepufferte Fortschrittsanzeige eines Audio- oder Videoplayers. Dieser Artikel erläutert, wie Sie eine Puffer-/Suchleiste mithilfe von [TimeRanges](/de/docs/Web/API/TimeRanges) und anderen Funktionen der Medien-API erstellen können.

## Buffered

Das `buffered`-Attribut informiert uns darüber, welche Teile des Mediums heruntergeladen wurden. Es gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das uns mitteilt, welche Teile des Mediums heruntergeladen wurden. Dies ist normalerweise zusammenhängend, kann jedoch Lücken enthalten, wenn der Benutzer, während das Medium gepuffert wird, hin und her springt.

Dies funktioniert mit {{htmlelement("audio") }} oder {{htmlelement("video") }}; betrachten wir vorerst ein Audio-Beispiel:

```html
<audio id="my-audio" controls src="music.mp3"></audio>
```

Wir können auf diese Attribute wie folgt zugreifen:

```js
const audio = document.getElementById("my-audio");
const bufferedTimeRanges = audio.buffered;
```

## TimeRanges Objekt

TimeRanges sind eine Reihe von nicht überlappenden Zeitbereichen mit Start- und Stoppzeiten. ([mehr über TimeRanges erfahren](/de/docs/Web/API/TimeRanges)).

Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt besteht aus den folgenden Eigenschaften:

- `length`: Die Anzahl der Zeitbereiche im Objekt.
- `start(index)`: Die Startzeit eines Zeitbereichs in Sekunden.
- `end(index)`: Die Endzeit eines Zeitbereichs in Sekunden.

Ohne Benutzereingriff gibt es normalerweise nur einen Zeitbereich, aber wenn Sie im Medium hin- und herspringen, können mehr als ein Zeitbereich erscheinen, wie in der unten stehenden Visualisierung dargestellt. Dies repräsentiert zwei gepufferte Zeitbereiche — der eine reicht von 0 bis 5 Sekunden und der zweite von 15 bis 19 Sekunden.

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

Dies funktioniert besser mit längeren Audio- oder Videostücken, aber drücken Sie Play und klicken Sie in der Player-Fortschrittsleiste herum und Sie sollten etwas Ähnliches erhalten. Jedes rot gefüllte weiße Rechteck repräsentiert einen Zeitbereich.

![Ein einfacher Audioplayer mit Wiedergabetaste, Suchleiste und Lautstärkeregelung, mit einer Reihe roter Rechtecke darunter, die Zeitbereiche repräsentieren.](bufferedtimeranges.png)

> [!NOTE]
> Sie können den [timerange code live auf JS Bin sehen](https://jsbin.com/memazaro/1/edit).

## Seekable

Das `seekable`-Attribut gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück und informiert uns darüber, welche Teile des Mediums ohne Verzögerung abgespielt werden können, unabhängig davon, ob dieser Teil heruntergeladen wurde oder nicht. Einige Teile des Mediums können suchbar, aber nicht gepuffert sein, wenn Bereichsanforderungen auf dem Server aktiviert sind. Bereichsanforderungen ermöglichen das Liefern von Teilen der Mediendatei vom Server, sodass sie fast sofort abspielbereit sind — daher sind sie suchbar. Weitere Informationen zu Bereichsanforderungen finden Sie unter [HTTP range requests](/de/docs/Web/HTTP/Range_requests).

```js
const seekableTimeRanges = audio.seekable;
```

## Eigene Pufferanzeige erstellen

Wenn wir unseren eigenen benutzerdefinierten Player erstellen möchten, sollten wir Rückmeldungen geben, wie viel des Mediums abspielbereit ist. In der Praxis ist es eine gute Möglichkeit, das `seekable`-Attribut zu verwenden, auch wenn wir oben gesehen haben, dass suchbare Teile des Mediums nicht unbedingt zusammenhängend sind — sie sind es jedoch oft, und wir können diese Information sicher approximieren, um dem Benutzer zu zeigen, welche Teile des Mediums direkt abgespielt werden können. Wir können diesen Punkt im Medium mit folgender Codezeile finden:

```js
const seekableEnd = audio.seekable.end(audio.seekable.length - 1);
```

> **Hinweis:** `audio.seekable.end(audio.seekable.length - 1)` sagt uns tatsächlich den Endpunkt des letzten suchbaren Zeitbereichs (nicht des gesamten suchbaren Mediums). In der Praxis ist dies ausreichend, da der Browser entweder Bereichsanforderungen ermöglicht oder nicht. Wenn er es nicht tut, ist `audio.seekable` gleich `audio.buffered`, was eine gültige Angabe des Endes des suchbaren Mediums gibt. Wenn Bereichsanforderungen aktiviert sind, wird dieser Wert normalerweise fast sofort zur Dauer des Mediums.

Es ist vielleicht besser, einen Hinweis darauf zu geben, wie viel Medium tatsächlich heruntergeladen wurde — das scheint das zu sein, was die nativen Player des Browsers anzeigen.

Lassen Sie uns das aufbauen. Das HTML für unseren Player sieht folgendermaßen aus:

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

Das `progress` Event wird ausgelöst, wenn Daten heruntergeladen werden. Dies ist ein gutes Ereignis, auf das wir reagieren können, wenn wir Download- oder Pufferfortschritte anzeigen möchten.

Das `timeupdate` Event wird viermal pro Sekunde ausgelöst, während das Medium abgespielt wird, und genau dort erhöhen wir unsere Abspielfortschrittsleiste.

Dies sollte Ihnen Ergebnisse ähnlich dem Folgenden geben, wobei der hellgraue Balken den Pufferfortschritt und der grüne Balken den Abspielfortschritt anzeigt:

![Ein einfacher Audioplayer mit Wiedergabetaste, Suchleiste und Lautstärkeregelung und einem Fortschrittsbalken unter den Steuerungen. Der Fortschrittsbalken hat einen grünen Abschnitt, um das gespielte Video zu zeigen, und einen hellgrauen Abschnitt, um zu zeigen, wie viel gepuffert wurde.](bufferedprogress.png)

> [!NOTE]
> Sie können den [buffering code live auf JS Bin sehen](https://jsbin.com/badimipi/1/edit).

## Ein kurzes Wort zu Played

Es lohnt sich, die `played`-Eigenschaft zu erwähnen — sie teilt uns mit, welche Zeitbereiche im Medium abgespielt wurden. Zum Beispiel:

```js
const played = audio.played; // returns a TimeRanges object
```

Dies könnte nützlich sein, um festzustellen, welche Teile Ihrer Medien am häufigsten gehört oder angesehen werden.
