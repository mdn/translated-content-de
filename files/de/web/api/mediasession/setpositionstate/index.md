---
title: "MediaSession: setPositionState()-Methode"
short-title: setPositionState()
slug: Web/API/MediaSession/setPositionState
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Media Session API")}}

Die **`setPositionState()`**-Methode des
{{domxref("MediaSession")}}-Interfaces wird verwendet, um die aktuelle Wiedergabeposition und -geschwindigkeit des Dokuments für die Darstellung auf dem Gerät des Benutzers in einer beliebigen Oberfläche zu aktualisieren, die Details über laufende Medien bereitstellt. Dies kann besonders nützlich sein, wenn Ihr Code einen Player für einen Medientyp implementiert, der nicht direkt vom Browser unterstützt wird.

Rufen Sie diese Methode auf dem
{{domxref("navigator.mediaSession", "mediaSession")}}-Objekt des `navigator`-Objekts auf.

## Syntax

```js-nolint
setPositionState()
setPositionState(stateDict)
```

### Parameter

- `stateDict` {{optional_inline}}

  - : Ein Objekt, das aktualisierte Informationen über die Wiedergabeposition und -geschwindigkeit der laufenden Medien des Dokuments bereitstellt. Wenn das Objekt leer ist, werden die vorhandenen Informationen zum Wiedergabestatus gelöscht. Dieses Objekt kann die folgenden Parameter enthalten:

    - `duration` {{optional_inline}}
      - : Ein Gleitkommawert, der die Gesamtdauer des aktuellen Mediums in Sekunden angibt. Dies sollte immer eine positive Zahl sein, wobei positive Unendlichkeit ({{jsxref("Infinity")}}) Medien ohne definiertes Ende angibt, wie z. B. einen Live-Stream.
    - `playbackRate` {{optional_inline}}
      - : Ein Gleitkommawert, der die Geschwindigkeit angibt, mit der das Medium abgespielt wird, als Verhältnis relativ zu seiner normalen Wiedergabegeschwindigkeit. Ein Wert von 1 bedeutet normales Abspielen, 2 bedeutet doppelte Geschwindigkeit und so weiter. Negative Werte weisen darauf hin, dass das Medium rückwärts abgespielt wird; -1 bedeutet Wiedergabe in normaler Geschwindigkeit, aber rückwärts, -2 ist doppelte Geschwindigkeit rückwärts und so weiter.
    - `position` {{optional_inline}}
      - : Ein Gleitkommawert, der die zuletzt gemeldete Wiedergabeposition des Mediums in Sekunden angibt. Dies muss immer ein positiver Wert sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Dieser Fehler kann in einer Vielzahl von Umständen auftreten:

    - Die angegebene `duration` des Objekts fehlt, ist negativ oder `null`.
    - Die `position` ist entweder negativ oder größer als `duration`.
    - Die `playbackRate` ist null.

## Beispiele

Unten ist eine Funktion, die den Positionszustand des aktuellen
{{domxref('MediaSession')}}-Tracks aktualisiert.

```js
function updatePositionState() {
  navigator.mediaSession.setPositionState({
    duration: audioEl.duration,
    playbackRate: audioEl.playbackRate,
    position: audioEl.currentTime,
  });
}
```

Wir können diese Funktion verwenden, wenn wir die {{domxref('MediaMetadata')}} aktualisieren und innerhalb von Rückrufen für Aktionen, wie unten gezeigt.

```js
navigator.mediaSession.setActionHandler("seekbackward", (details) => {
  // unsere Zeit zum Überspringen
  const skipTime = details.seekOffset || 10;

  // unsere Position setzen
  audioEl.currentTime = Math.max(audioEl.currentTime - skipTime, 0);
  updatePositionState();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
