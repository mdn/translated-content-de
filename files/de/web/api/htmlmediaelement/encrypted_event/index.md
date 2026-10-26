---
title: "HTMLMediaElement: encrypted-Ereignis"
short-title: encrypted
slug: Web/API/HTMLMediaElement/encrypted_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("Encrypted Media Extensions")}}

Das Ereignis `encrypted` wird ausgelöst, wenn in einem Medium Initialisierungsdaten gefunden werden, die darauf hinweisen, dass es verschlüsselt ist.

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht im DOM-Baum auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("encrypted", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle verwenden:

```js-nolint
onencrypted = (event) => { }
```

## Ereignistyp

Ein [`MediaEncryptedEvent`](/de/docs/Web/API/MediaEncryptedEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaEncryptedEvent")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- [`MediaEncryptedEvent`](/de/docs/Web/API/MediaEncryptedEvent)
