---
title: "OfflineAudioContext: complete-Event"
short-title: complete
slug: Web/API/OfflineAudioContext/complete_event
l10n:
  sourceCommit: beb523fb0f01c793c4cb38cc68a0828f7f63263d
---

{{APIRef("Web Audio API")}}

Das `complete`-Event der [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)-Schnittstelle wird ausgelöst, wenn das Rendering eines Offline Audio Contexts abgeschlossen ist.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("complete", (event) => { })

oncomplete = (event) => { }
```

## Ereignistyp

Ein [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("OfflineAudioCompletionEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Elternobjekt, [`Event`](/de/docs/Web/API/Event)_.

- [`OfflineAudioCompletionEvent.renderedBuffer`](/de/docs/Web/API/OfflineAudioCompletionEvent/renderedBuffer) {{ReadOnlyInline}}
  - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der das Ergebnis der Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) enthält.

## Beispiele

Wenn die Verarbeitung abgeschlossen ist, möchten Sie möglicherweise den `complete`-Event-Handler verwenden, um den Benutzer darauf hinzuweisen, dass das Audio jetzt abgespielt werden kann, und den Abspielknopf aktivieren:

```js
const offlineAudioCtx = new OfflineAudioContext();

offlineAudioCtx.addEventListener("complete", () => {
  console.log("Offline audio processing now complete");
  alert("Song processed and ready to play");
  playBtn.disabled = false;
});
```

Sie können den Ereignishandler auch über die `oncomplete`-Eigenschaft einrichten:

```js
const offlineAudioCtx = new OfflineAudioContext();

offlineAudioCtx.oncomplete = () => {
  console.log("Offline audio processing now complete");
  alert("Song processed and ready to play");
  playBtn.disabled = false;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
