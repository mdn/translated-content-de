---
title: "OfflineAudioContext: complete-Ereignis"
short-title: complete
slug: Web/API/OfflineAudioContext/complete_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Audio API")}}

Das `complete`-Ereignis der [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)-Schnittstelle wird ausgelöst, wenn das Rendern eines offline Audio-Kontextes abgeschlossen ist.

Dieses Ereignis kann nicht abgebrochen werden und propagiert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("complete", (event) => { })

oncomplete = (event) => { }
```

## Ereignistyp

Ein [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("OfflineAudioCompletionEvent")}}

## Ereigniseigenschaften

_Erbt außerdem Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)_.

- [`OfflineAudioCompletionEvent.renderedBuffer`](/de/docs/Web/API/OfflineAudioCompletionEvent/renderedBuffer) {{ReadOnlyInline}}
  - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der das Ergebnis der Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) enthält.

## Beispiele

Wenn die Verarbeitung abgeschlossen ist, können Sie den `complete`-Ereignishandler verwenden, um den Benutzer darauf hinzuweisen, dass das Audio jetzt abgespielt werden kann, und den Abspielknopf aktivieren:

```js
const offlineAudioCtx = new OfflineAudioContext();

offlineAudioCtx.addEventListener("complete", () => {
  console.log("Offline audio processing now complete");
  showModalDialog("Song processed and ready to play");
  playBtn.disabled = false;
});
```

Sie können den Ereignishandler auch mit der `oncomplete`-Eigenschaft einrichten:

```js
const offlineAudioCtx = new OfflineAudioContext();

offlineAudioCtx.oncomplete = () => {
  console.log("Offline audio processing now complete");
  showModalDialog("Song processed and ready to play");
  playBtn.disabled = false;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
