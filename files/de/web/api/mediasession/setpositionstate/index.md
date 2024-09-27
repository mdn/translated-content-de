---
title: "MediaSession: setPositionState() Methode"
short-title: setPositionState()
slug: Web/API/MediaSession/setPositionState
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Media Session API")}}

Die **`setPositionState()`** Methode der
[`MediaSession`](/de/docs/Web/API/MediaSession)-Schnittstelle wird verwendet, um die aktuelle
Medienwiedergabeposition und -geschwindigkeit des Dokuments zu aktualisieren, damit sie von
Benutzergeräten in jeder Art von Schnittstelle angezeigt werden können, die Details zu laufenden Medien bereitstellt. Dies kann besonders nützlich sein, wenn Ihr Code einen Player für Medientypen implementiert, die vom Browser nicht direkt unterstützt werden.

Rufen Sie diese Methode auf dem `navigator`-Objekt der
[`mediaSession`](/de/docs/Web/API/Navigator/mediaSession)-Objekt auf.

## Syntax

```js-nolint
setPositionState()
setPositionState(stateDict)
```

### Parameter

- `stateDict` {{optional_inline}}

  - : Ein Objekt, das aktualisierte Informationen zur Wiedergabeposition und -geschwindigkeit
    der laufenden Medien des Dokuments bereitstellt. Wenn das Objekt leer ist, werden die vorhandenen
    Wiedergabeinformationen gelöscht. Dieses Objekt kann folgende
    Parameter enthalten:

    - `duration` {{optional_inline}}
      - : Ein Gleitkommawert, der die Gesamtdauer des aktuellen Mediums in Sekunden angibt. Dies sollte immer eine positive Zahl sein, wobei positive Unendlichkeit ({{jsxref("Infinity")}}) Medien ohne definiertes Ende, wie z.B. einen Live-Stream, anzeigt.
    - `playbackRate` {{optional_inline}}
      - : Ein Gleitkommawert, der die Geschwindigkeit angibt, mit der das Medium abgespielt wird, im Verhältnis zu seiner normalen Wiedergabegeschwindigkeit. Ein Wert von 1 bedeutet normale Geschwindigkeit, 2 bedeutet doppelte Geschwindigkeit, und so weiter. Negative Werte bedeuten, dass das Medium rückwärts abgespielt wird; -1 bedeutet Wiedergabe mit normaler Geschwindigkeit, aber rückwärts, -2 bedeutet doppelte Geschwindigkeit rückwärts, und so weiter.
    - `position` {{optional_inline}}
      - : Ein Gleitkommawert, der die zuletzt gemeldete Wiedergabeposition des Mediums in Sekunden angibt. Dies muss immer ein positiver Wert sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Dieser Fehler kann in verschiedenen Situationen auftreten:

    - Die angegebene `duration` des Objekts fehlt, ist negativ oder `null`.
    - Seine `position` ist entweder negativ oder größer als `duration`.
    - Sein `playbackRate` ist null.

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

Wir können diese Funktion verwenden, wenn wir [`MediaMetadata`](/de/docs/Web/API/MediaMetadata) aktualisieren und innerhalb von Rückruffunktionen für Aktionen, wie unten gezeigt.

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
