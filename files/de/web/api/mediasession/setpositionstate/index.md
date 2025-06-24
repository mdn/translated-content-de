---
title: "MediaSession: setPositionState() Methode"
short-title: setPositionState()
slug: Web/API/MediaSession/setPositionState
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Media Session API")}}

Die **`setPositionState()`**-Methode der
[`MediaSession`](/de/docs/Web/API/MediaSession)-Schnittstelle wird verwendet, um die aktuelle Medienwiedergabeposition und -geschwindigkeit des Dokuments zu aktualisieren, damit diese von der Benutzerumgebung in jeglicher Art von Schnittstelle präsentiert werden kann, die Details über laufende Medien bereitstellt. Dies kann besonders nützlich sein, wenn Ihr Code einen Player für Medientypen implementiert, die vom Browser nicht direkt unterstützt werden.

Rufen Sie diese Methode am `navigator`-Objekt, genauer am [`mediaSession`](/de/docs/Web/API/Navigator/mediaSession)-Objekt auf.

## Syntax

```js-nolint
setPositionState()
setPositionState(stateDict)
```

### Parameter

- `stateDict` {{optional_inline}}
  - : Ein Objekt, das aktualisierte Informationen über die Wiedergabeposition und -geschwindigkeit der laufenden Medien des Dokuments bereitstellt. Ist das Objekt leer, werden die vorhandenen Wiedergabezustandsinformationen gelöscht. Dieses Objekt kann die folgenden Parameter enthalten:
    - `duration` {{optional_inline}}
      - : Ein Fließkommawert, der die Gesamtdauer der aktuellen Medien in Sekunden angibt. Dies sollte immer eine positive Zahl sein, wobei positive Unendlichkeit ({{jsxref("Infinity")}}) Medien ohne definiertes Ende kennzeichnet, wie z.B. einen Livestream.
    - `playbackRate` {{optional_inline}}
      - : Ein Fließkommawert, der das Verhältnis angibt, mit dem die Medien im Vergleich zur normalen Wiedergabegeschwindigkeit abgespielt werden. Ein Wert von 1 gibt die normale Geschwindigkeit an, 2 die doppelte Geschwindigkeit, usw. Negative Werte zeigen an, dass die Medien rückwärts abgespielt werden; -1 bedeutet normale Geschwindigkeit, aber rückwärts; -2 ist doppelte Geschwindigkeit rückwärts, und so weiter.
    - `position` {{optional_inline}}
      - : Ein Fließkommawert, der die zuletzt gemeldete Wiedergabeposition der Medien in Sekunden angibt. Dies muss immer ein positiver Wert sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Dieser Fehler kann in verschiedenen Umständen auftreten:
    - Die angegebene `duration` des Objekts fehlt, ist negativ oder `null`.
    - Seine `position` ist entweder negativ oder größer als `duration`.
    - Seine `playbackRate` ist null.

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

Wir können diese Funktion verwenden, wenn wir [`MediaMetadata`](/de/docs/Web/API/MediaMetadata) aktualisieren und innerhalb von Rückrufen für Aktionen, wie unten gezeigt.

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
