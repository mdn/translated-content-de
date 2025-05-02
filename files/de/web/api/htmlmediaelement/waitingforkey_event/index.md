---
title: "HTMLMediaElement: waitingforkey Ereignis"
short-title: waitingforkey
slug: Web/API/HTMLMediaElement/waitingforkey_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Encrypted Media Extensions")}}

Das `waitingforkey` Ereignis wird bei einem Medien-Element ausgelöst, wenn es erstmals nicht in der Lage ist, abzuspielen, weil es einen Schlüssel benötigt, um die folgenden Daten zu dekodieren, und die Wiedergabe gestoppt wird.

Wenn der Videorahmen und/oder die Audiodaten für die aktuelle Wiedergabeposition dekodiert wurden, wird [`readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) auf [`HAVE_CURRENT_DATA`](/de/docs/Web/API/HTMLMediaElement/readyState#htmlmediaelement.have_current_data) gesetzt. Andernfalls, einschließlich wenn die Daten zuvor verfügbar waren, aber nicht mehr sind, wird `readyState` auf [`HAVE_METADATA`](/de/docs/Web/API/HTMLMediaElement/readyState#htmlmediaelement.have_metadata) gesetzt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("waitingforkey", (event) => { })

onwaitingforkey = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
