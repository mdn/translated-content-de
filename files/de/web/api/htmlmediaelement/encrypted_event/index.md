---
title: "HTMLMediaElement: encrypted Ereignis"
short-title: encrypted
slug: Web/API/HTMLMediaElement/encrypted_event
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}

Das `encrypted` Ereignis wird ausgelöst, wenn Initialisierungsdaten in den Medien gefunden werden, was darauf hinweist, dass sie verschlüsselt sind.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("encrypted", (event) => {});

onencrypted = (event) => {};
```

## Ereignistyp

Ein [`MediaEncryptedEvent`](/de/docs/Web/API/MediaEncryptedEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaEncryptedEvent")}}

## Ereigniseigenschaften

- [`MediaEncryptedEvent.initDataType`](/de/docs/Web/API/MediaEncryptedEvent/initDataType) {{ReadOnlyInline}}
  - : Gibt einen Groß-/Kleinschreibung beachtenden String mit dem _Type_ des Formats der gefundenen Initialisierungsdaten zurück.
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
