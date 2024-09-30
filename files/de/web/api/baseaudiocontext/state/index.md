---
title: "BaseAudioContext: state-Eigenschaft"
short-title: state
slug: Web/API/BaseAudioContext/state
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft `state` des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Interfaces gibt den aktuellen Zustand des `AudioContext` zurück.

## Wert

Ein String. Mögliche Werte sind:

- `suspended`
  - : Der Audio-Kontext wurde angehalten (mit der Methode [`AudioContext.suspend()`](/de/docs/Web/API/AudioContext/suspend).)
- `running`
  - : Der Audio-Kontext läuft normal.
- `closed`
  - : Der Audio-Kontext wurde geschlossen (mit der Methode [`AudioContext.close()`](/de/docs/Web/API/AudioContext/close).)

## Beispiele

### Umgang mit Zustandsänderungen

Der folgende Ausschnitt stammt aus unserem [AudioContext-Zustands-Demo](https://github.com/mdn/webaudio-examples) ([sehen Sie es live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) Der [`onstatechange`](/de/docs/Web/API/BaseAudioContext/statechange_event)-Handler wird verwendet, um den aktuellen Zustand bei jeder Änderung in der Konsole zu protokollieren.

```js
audioCtx.onstatechange = () => {
  console.log(audioCtx.state);
};
```

### Wiederaufnahme unterbrochener Wiedergabestände in iOS Safari

In iOS Safari, wenn ein Benutzer die Seite verlässt (z.B. Tabs wechselt, den Browser minimiert oder den Bildschirm ausschaltet), ändert sich der Zustand des Audio-Kontexts auf "unterbrochen" und muss wieder aufgenommen werden. Beispiel:

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
