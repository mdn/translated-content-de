---
title: "HTMLMediaElement: encrypted-Event"
short-title: encrypted
slug: Web/API/HTMLMediaElement/encrypted_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Encrypted Media Extensions")}}

Das `encrypted`-Event wird ausgelöst, wenn Initialisierungsdaten im Medium gefunden werden, die darauf hinweisen, dass es verschlüsselt ist.

Dieses Ereignis ist nicht abbruchfähig und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("encrypted", (event) => { })

onencrypted = (event) => { }
```

## Ereignistyp

Ein [`MediaEncryptedEvent`](/de/docs/Web/API/MediaEncryptedEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaEncryptedEvent")}}

## Ereigniseigenschaften

- [`MediaEncryptedEvent.initDataType`](/de/docs/Web/API/MediaEncryptedEvent/initDataType) {{ReadOnlyInline}}
  - : Gibt eine groß- und kleinschreibungssensitive Zeichenkette mit dem _Typ_ des Formats der gefundenen Initialisierungsdaten zurück.
- [`MediaEncryptedEvent.initData`](/de/docs/Web/API/MediaEncryptedEvent/initData) {{ReadOnlyInline}}
  - : Gibt einen {{jsxref("ArrayBuffer")}} zurück, der die gefundenen Initialisierungsdaten enthält. Wenn es keine Initialisierungsdaten gibt, die mit dem Format verbunden sind, gibt es `null` zurück.

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
