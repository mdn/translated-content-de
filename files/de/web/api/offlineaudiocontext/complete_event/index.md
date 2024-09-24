---
title: "OfflineAudioContext: complete Ereignis"
short-title: complete
slug: Web/API/OfflineAudioContext/complete_event
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Web Audio API")}}

Das `complete`-Ereignis der {{domxref("OfflineAudioContext")}}-Schnittstelle wird ausgelöst, wenn das Rendering eines Offline-Audio-Kontexts abgeschlossen ist.

Dieses Ereignis ist nicht abfangbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("complete", (event) => {});

oncomplete = (event) => {};
```

## Ereignistyp

Ein {{domxref("OfflineAudioCompletionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("OfflineAudioCompletionEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Objekt, {{domxref("Event")}}_.

- {{domxref("OfflineAudioCompletionEvent.renderedBuffer")}} {{ReadOnlyInline}}
  - : Ein {{domxref("AudioBuffer")}}, der das Ergebnis der Verarbeitung eines {{domxref("OfflineAudioContext")}} enthält.

## Beispiele

Wenn die Verarbeitung abgeschlossen ist, möchten Sie möglicherweise den `complete`-Ereignis-Handler verwenden, um den Benutzer darauf hinzuweisen, dass das Audio jetzt abgespielt werden kann, und den Wiedergabeknopf aktivieren:

```js
const offlineAudioCtx = new OfflineAudioContext();

offlineAudioCtx.addEventListener("complete", () => {
  console.log("Offline audio processing now complete");
  showModalDialog("Song processed and ready to play");
  playBtn.disabled = false;
});
```

Sie können auch den Ereignis-Handler über die `oncomplete`-Eigenschaft einrichten:

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
