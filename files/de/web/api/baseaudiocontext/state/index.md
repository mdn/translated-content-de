---
title: "BaseAudioContext: Zustands-Eigenschaft"
short-title: Zustand
slug: Web/API/BaseAudioContext/state
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft `state` der {{ domxref("BaseAudioContext") }}
Schnittstelle gibt den aktuellen Zustand des `AudioContext` zurück.

## Wert

Ein String. Mögliche Werte sind:

- `suspended`
  - : Der Audiokontext wurde ausgesetzt (mit der
    {{domxref("AudioContext.suspend()")}} Methode.)
- `running`
  - : Der Audiokontext läuft normal.
- `closed`
  - : Der Audiokontext wurde geschlossen (mit der
    {{domxref("AudioContext.close()")}} Methode.)

## Beispiele

### Umgang mit Zustandsänderungen

Das folgende Beispiel stammt aus unserem [AudioContext-Zustände-Demo](https://github.com/mdn/webaudio-examples) ([sehen Sie es live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) Der {{domxref("BaseAudioContext.statechange_event", "onstatechange")}} Handler wird verwendet, um den aktuellen Zustand jedes Mal in die Konsole zu protokollieren, wenn er sich ändert.

```js
audioCtx.onstatechange = () => {
  console.log(audioCtx.state);
};
```

### Wiederaufnahme von unterbrochenen Wiedergabezuständen in iOS Safari

In iOS Safari, wenn ein Benutzer die Seite verlässt (z.B. Tabwechsel, Minimieren des Browsers oder Ausschalten des Bildschirms),
wechselt der Zustand des Audiokontexts zu "unterbrochen" und muss fortgesetzt werden. Zum Beispiel:

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
