---
title: "MediaSession: Methode setPositionState()"
short-title: setPositionState()
slug: Web/API/MediaSession/setPositionState
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Media Session API")}}

Die **`setPositionState()`**-Methode des
[`MediaSession`](/de/docs/Web/API/MediaSession)-Interfaces wird verwendet, um die Medienwiedergabeposition und -geschwindigkeit des aktuellen Dokuments für die Präsentation durch das Gerät des Benutzers in jeder Art von Schnittstelle zu aktualisieren, die Details über laufende Medien bereitstellt. Dies kann besonders nützlich sein, wenn Ihr Code einen Player für Medientypen implementiert, die vom Browser nicht direkt unterstützt werden.

Rufen Sie diese Methode am `navigator`-Objekt auf, das
[`mediaSession`](/de/docs/Web/API/Navigator/mediaSession)-Objekt enthält.

## Syntax

```js-nolint
setPositionState()
setPositionState(stateDict)
```

### Parameter

- `stateDict` {{optional_inline}}

  - : Ein Objekt, das aktualisierte Informationen über die Wiedergabeposition und -geschwindigkeit der laufenden Medien des Dokuments bereitstellt. Wenn das Objekt leer ist, werden die vorhandenen Wiedergabezustandsinformationen gelöscht. Dieses Objekt kann die folgenden Parameter enthalten:

    - `duration` {{optional_inline}}
      - : Ein Gleitkommawert, der die Gesamtdauer der aktuellen Medien in Sekunden angibt. Dies sollte immer eine positive Zahl sein, wobei positiv unendlich ({{jsxref("Infinity")}}) für Medien ohne definiertes Ende steht, wie ein Live-Stream.
    - `playbackRate` {{optional_inline}}
      - : Ein Gleitkommawert, der die Geschwindigkeit angibt, mit der die Medien abgespielt werden, als Verhältnis relativ zu ihrer normalen Wiedergabegeschwindigkeit. Ein Wert von 1 bedeutet normale Geschwindigkeit, 2 doppelte Geschwindigkeit und so weiter. Negative Werte bedeuten, dass die Medien rückwärts abgespielt werden; -1 bedeutet Wiedergabe mit normaler Geschwindigkeit rückwärts, -2 doppelte Geschwindigkeit rückwärts und so weiter.
    - `position` {{optional_inline}}
      - : Ein Gleitkommawert, der die zuletzt gemeldete Wiedergabeposition der Medien in Sekunden angibt. Dies muss immer ein positiver Wert sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Dieser Fehler kann unter verschiedenen Umständen auftreten:

    - Das angegebene Objekt hat `duration` nicht, ist negativ oder `null`.
    - `position` ist entweder negativ oder größer als `duration`.
    - `playbackRate` ist null.

## Beispiele

Unten ist eine Funktion, die den Positionszustand des aktuellen
[`MediaSession`](/de/docs/Web/API/MediaSession)-Tracks aktualisiert.

```js
function updatePositionState() {
  navigator.mediaSession.setPositionState({
    duration: audioEl.duration,
    playbackRate: audioEl.playbackRate,
    position: audioEl.currentTime,
  });
}
```

Wir können diese Funktion beim Aktualisieren von [`MediaMetadata`](/de/docs/Web/API/MediaMetadata) und innerhalb von Rückruffunktionen für Aktionen nutzen, wie im folgenden Beispiel.

```js
navigator.mediaSession.setActionHandler("seekbackward", (details) => {
  // our time to skip
  const skipTime = details.seekOffset || 10;

  // set our position
  audioEl.currentTime = Math.max(audioEl.currentTime - skipTime, 0);
  updatePositionState();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
