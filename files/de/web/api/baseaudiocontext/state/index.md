---
title: "BaseAudioContext: state-Eigenschaft"
short-title: state
slug: Web/API/BaseAudioContext/state
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ APIRef("Web Audio API") }}

Die `state`-Schreibgeschützte Eigenschaft des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
Interfaces gibt den aktuellen Zustand des `AudioContext` zurück.

## Wert

Ein Zeichenkette. Mögliche Werte sind:

- `suspended`
  - : Der Audio-Kontext wurde angehalten (mit der
    [`AudioContext.suspend()`](/de/docs/Web/API/AudioContext/suspend) Methode.)
- `running`
  - : Der Audio-Kontext läuft normal.
- `closed`
  - : Der Audio-Kontext wurde geschlossen (mit der
    [`AudioContext.close()`](/de/docs/Web/API/AudioContext/close) Methode.)

## Beispiele

### Handhabung von Zustandsänderungen

Das folgende Code-Snippet stammt aus unserem [AudioContext Zustands-Demo](https://github.com/mdn/webaudio-examples) ([sehen Sie es live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) Der [`onstatechange`](/de/docs/Web/API/BaseAudioContext/statechange_event) Handler wird verwendet, um den aktuellen Zustand jedes Mal, wenn er sich ändert, in die Konsole zu protokollieren.

```js
audioCtx.onstatechange = () => {
  console.log(audioCtx.state);
};
```

### Wiederaufnahme unterbrochener Wiedergabestati in iOS Safari

In iOS Safari, wenn ein Benutzer die Seite verlässt (z. B. Tabs wechselt, den Browser minimiert oder
den Bildschirm abschaltet)
ändert sich der Zustand des Audio-Kontexts zu "interrupted" und muss wieder aufgenommen werden. Zum Beispiel:

```js
function play() {
  if (audioCtx.state === "interrupted") {
    audioCtx.resume().then(() => play());
    return;
  }
  // rest of the play() function
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
