---
title: "OfflineAudioContext: complete Ereignis"
short-title: complete
slug: Web/API/OfflineAudioContext/complete_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Web Audio API")}}

Das `complete`-Ereignis der [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)-Schnittstelle wird ausgelöst, wenn das Rendern eines Offline-Audio-Kontexts abgeschlossen ist.

Dieses Ereignis kann nicht abgebrochen werden und es blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("complete", (event) => { })

oncomplete = (event) => { }
```

## Ereignistyp

Ein [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("OfflineAudioCompletionEvent")}}

## Beispiele

Wenn die Verarbeitung abgeschlossen ist, könnten Sie den `complete`-Ereignishandler verwenden, um den Benutzer darauf hinzuweisen, dass das Audio jetzt abgespielt werden kann, und den Abspielknopf aktivieren:

```js
const offlineAudioCtx = new OfflineAudioContext();

offlineAudioCtx.addEventListener("complete", () => {
  console.log("Offline audio processing now complete");
  alert("Song processed and ready to play");
  playBtn.disabled = false;
});
```

Sie können den Ereignishandler auch mit der `oncomplete`-Eigenschaft einrichten:

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
