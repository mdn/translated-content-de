---
title: "OfflineAudioContext: complete-Ereignis"
short-title: complete
slug: Web/API/OfflineAudioContext/complete_event
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Web Audio API")}}

Das `complete`-Ereignis der [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)-Schnittstelle wird ausgelöst, wenn das Rendering eines Offline-Audio-Kontexts abgeschlossen ist.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("complete", (event) => {});

oncomplete = (event) => {};
```

## Ereignistyp

Ein [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("OfflineAudioCompletionEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Elternobjekt, [`Event`](/de/docs/Web/API/Event)_.

- [`OfflineAudioCompletionEvent.renderedBuffer`](/de/docs/Web/API/OfflineAudioCompletionEvent/renderedBuffer) {{ReadOnlyInline}}
  - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der das Ergebnis der Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) enthält.

## Beispiele

Wenn die Verarbeitung abgeschlossen ist, möchten Sie möglicherweise den `complete`-Ereignishandler verwenden, um den Benutzer darauf hinzuweisen, dass das Audio jetzt abgespielt werden kann, und die Abspielen-Schaltfläche aktivieren:

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
