---
title: "HTMLMediaElement: waitingforkey-Ereignis"
short-title: waitingforkey
slug: Web/API/HTMLMediaElement/waitingforkey_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("Encrypted Media Extensions")}}

Das `waitingforkey`-Ereignis wird bei einem Medienelement ausgelöst, wenn es erstmals nicht wiedergegeben werden kann, weil zum Decodieren der folgenden Daten ein Schlüssel benötigt wird. Die Wiedergabe wird dabei angehalten.

Wenn das Videobild und/oder die Audiodaten für die aktuelle Wiedergabeposition decodiert wurden, wird [`readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) auf [`HAVE_CURRENT_DATA`](/de/docs/Web/API/HTMLMediaElement/readyState#htmlmediaelement.have_current_data) gesetzt.
Andernfalls wird `readyState` auf [`HAVE_METADATA`](/de/docs/Web/API/HTMLMediaElement/readyState#htmlmediaelement.have_metadata) gesetzt. Das gilt auch, wenn die Daten zuvor verfügbar waren, es aber nicht mehr sind.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("waitingforkey", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
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
