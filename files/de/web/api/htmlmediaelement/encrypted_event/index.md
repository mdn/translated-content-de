---
title: "HTMLMediaElement: encrypted Event"
short-title: encrypted
slug: Web/API/HTMLMediaElement/encrypted_event
l10n:
  sourceCommit: 400c104648bdf44350cfbeb8fe23f0a244d4e9d8
---

{{APIRef("Encrypted Media Extensions")}}

Das `encrypted`-Ereignis wird ausgelöst, wenn Initialisierungsdaten im Medium gefunden werden, die darauf hinweisen, dass es verschlüsselt ist.

Dieses Ereignis kann nicht abgebrochen werden und es wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("encrypted", (event) => {});

onencrypted = (event) => {};
```

## Ereignistyp

Ein [`MediaEncryptedEvent`](/de/docs/Web/API/MediaEncryptedEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaEncryptedEvent")}}

## Ereigniseigenschaften

- [`MediaEncryptedEvent.initDataType`](/de/docs/Web/API/MediaEncryptedEvent/initDataType) {{ReadOnlyInline}}
  - : Gibt einen groß-/kleinschreibungssensitiven Zeichenfolgenwert mit dem _Typ_ des Formats der gefundenen Initialisierungsdaten zurück.
- [`MediaEncryptedEvent.initData`](/de/docs/Web/API/MediaEncryptedEvent/initData) {{ReadOnlyInline}}
  - : Gibt einen {{jsxref("ArrayBuffer")}} zurück, der die gefundenen Initialisierungsdaten enthält. Wenn keine Initialisierungsdaten mit dem Format verknüpft sind, wird `null` zurückgegeben.

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
