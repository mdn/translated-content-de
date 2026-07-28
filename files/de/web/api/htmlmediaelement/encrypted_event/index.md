---
title: "HTMLMediaElement: encrypted-Ereignis"
short-title: encrypted
slug: Web/API/HTMLMediaElement/encrypted_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Encrypted Media Extensions")}}

Das `encrypted`-Ereignis wird ausgelöst, wenn Initialisierungsdaten in den Medien gefunden werden, die anzeigen, dass sie verschlüsselt sind.

Dieses Ereignis ist nicht abbrechbar und wird nicht gebubbles.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("encrypted", (event) => { })

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
