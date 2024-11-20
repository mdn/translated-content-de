---
title: "HTMLMediaElement: waitingforkey-Ereignis"
short-title: waitingforkey
slug: Web/API/HTMLMediaElement/waitingforkey_event
l10n:
  sourceCommit: 400c104648bdf44350cfbeb8fe23f0a244d4e9d8
---

{{APIRef("Encrypted Media Extensions")}}

Das `waitingforkey`-Ereignis wird an einem Medienelement ausgelöst, wenn es erstmals nicht abgespielt werden kann, weil es einen Schlüssel benötigt, um die folgenden Daten zu dekodieren, und die Wiedergabe gestoppt wird.

Wenn der Videorahmen und/oder die Audiodaten für die aktuelle Wiedergabeposition dekodiert wurden, wird [`readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) auf [`HAVE_CURRENT_DATA`](/de/docs/Web/API/HTMLMediaElement/readyState#htmlmediaelement.have_current_data) gesetzt. Andernfalls, auch wenn die Daten zuvor verfügbar waren, aber nicht mehr sind, wird der `readyState` auf [`HAVE_METADATA`](/de/docs/Web/API/HTMLMediaElement/readyState#htmlmediaelement.have_metadata) gesetzt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("waitingforkey", (event) => {});

onwaitingforkey = (event) => {};
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
