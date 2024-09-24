---
title: "HTMLMediaElement: verschlüsseltes Ereignis"
short-title: verschlüsselt
slug: Web/API/HTMLMediaElement/encrypted_event
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}

Das `encrypted` Ereignis wird ausgelöst, wenn Initialisierungsdaten in den Medien gefunden werden, was darauf hinweist, dass es verschlüsselt ist.

Dieses Ereignis ist nicht abbruchfähig und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("encrypted", (event) => {});

onencrypted = (event) => {};
```

## Ereignistyp

Ein {{domxref("MediaEncryptedEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MediaEncryptedEvent")}}

## Ereigniseigenschaften

- {{domxref("MediaEncryptedEvent.initDataType")}} {{ReadOnlyInline}}
  - : Gibt eine groß-/kleinsensitiven Zeichenfolge mit dem _Typ_ des Formats der gefundenen Initialisierungsdaten zurück.
- {{domxref("MediaEncryptedEvent.initData")}} {{ReadOnlyInline}}
  - : Gibt einen {{jsxref("ArrayBuffer")}} zurück, der die gefundenen Initialisierungsdaten enthält. Wenn keine Initialisierungsdaten mit dem Format verknüpft sind, wird `null` zurückgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- {{domxref("MediaEncryptedEvent")}}
