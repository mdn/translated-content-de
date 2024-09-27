---
title: "MediaSession: playbackState-Eigenschaft"
short-title: playbackState
slug: Web/API/MediaSession/playbackState
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Session API")}}

Die **`playbackState`**-Eigenschaft des
[`MediaSession`](/de/docs/Web/API/MediaSession)-Interfaces gibt an, ob die aktuelle Mediensitzung
wiedergegeben oder pausiert wird.

## Wert

Ein String, der den aktuellen Wiedergabestatus der Mediensitzung angibt.
Der Wert kann einer der folgenden sein:

- `none`
  - : Der Browsing-Kontext kennt den aktuellen Wiedergabestatus derzeit nicht, oder der
    Wiedergabestatus ist zu diesem Zeitpunkt nicht verfügbar.
- `paused`
  - : Die Medien-Sitzung des Browsers ist derzeit pausiert. Die Wiedergabe kann fortgesetzt werden.
- `playing`
  - : Die Medien-Sitzung des Browsers gibt derzeit Medien wieder, die pausiert werden können.

## Beispiel

Das folgende Beispiel richtet zwei Funktionen zum Abspielen und Pausieren ein und verwendet diese dann
als Rückruf mit den entsprechenden Aktionshandlern. Jede Funktion nutzt die
`playbackState`-Eigenschaft, um anzuzeigen, ob die Audiodatei abgespielt oder pausiert wird.

```js
const actionHandlers = [
  // play
  [
    "play",
    async () => {
      // play our audio
      await audioEl.play();
      // set playback state
      navigator.mediaSession.playbackState = "playing";
      // update our status element
      updateStatus(allMeta[index], "Action: play  |  Track is playing…");
    },
  ],
  [
    "pause",
    () => {
      // pause out audio
      audioEl.pause();
      // set playback state
      navigator.mediaSession.playbackState = "paused";
      // update our status element
      updateStatus(allMeta[index], "Action: pause  |  Track has been paused…");
    },
  ],
];

for (const [action, handler] of actionHandlers) {
  try {
    navigator.mediaSession.setActionHandler(action, handler);
  } catch (error) {
    console.log(`The media session action "${action}" is not supported yet.`);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
