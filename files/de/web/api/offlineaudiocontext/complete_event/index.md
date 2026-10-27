---
title: "OfflineAudioContext: complete-Ereignis"
short-title: complete
slug: Web/API/OfflineAudioContext/complete_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("Web Audio API")}}

Das `complete`-Ereignis der Schnittstelle [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) wird ausgelöst, wenn das Rendern eines Offline-Audiokontexts abgeschlossen ist.

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht im DOM-Baum auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("complete", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
oncomplete = (event) => { }
```

## Ereignistyp

Ein [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("OfflineAudioCompletionEvent")}}

## Beispiele

Wenn die Verarbeitung abgeschlossen ist, können Sie den Event-Handler für `complete` verwenden, um die Benutzer darüber zu informieren, dass die Audiodatei jetzt abgespielt werden kann, und die Wiedergabeschaltfläche zu aktivieren:

```js
const offlineAudioCtx = new OfflineAudioContext(2, 44100 * 40, 44100);

offlineAudioCtx.addEventListener("complete", () => {
  console.log("Offline audio processing now complete");
  alert("Song processed and ready to play");
  playBtn.disabled = false;
});
```

Sie können den Event-Handler auch über die Eigenschaft `oncomplete` einrichten. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `oncomplete` hinzugefügte Event-Listener ersetzt werden:

```js
const offlineAudioCtx = new OfflineAudioContext(2, 44100 * 40, 44100);

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
