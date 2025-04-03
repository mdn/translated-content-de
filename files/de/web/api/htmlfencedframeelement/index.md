---
title: HTMLFencedFrameElement
slug: Web/API/HTMLFencedFrameElement
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`HTMLFencedFrameElement`** Schnittstelle repräsentiert ein {{htmlelement("fencedframe")}} Element in JavaScript und stellt Konfigurationseigenschaften bereit.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFencedFrameElement.allow`](/de/docs/Web/API/HTMLFencedFrameElement/allow) {{experimental_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>` `allow` Attributs ab und setzt diesen. Dieses Attribut repräsentiert eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), die auf den Inhalt angewendet wird, wenn er zuerst eingebettet wird.
- [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) {{experimental_inline}}
  - : ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig) Objekt, das die Navigation eines {{htmlelement("fencedframe")}} repräsentiert, d.h. welcher Inhalt darin angezeigt wird. Ein `FencedFrameConfig` wird aus einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) zurückgegeben.
- [`HTMLFencedFrameElement.height`](/de/docs/Web/API/HTMLFencedFrameElement/height) {{experimental_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>` `height` Attributs ab und setzt diesen, welches die Höhe des Elements angibt.
- [`HTMLFencedFrameElement.width`](/de/docs/Web/API/HTMLFencedFrameElement/width) {{experimental_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>` `width` Attributs ab und setzt diesen, welches die Breite des Elements angibt.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine nutzende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig) Objekt, das dann als Wert der `config` Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält eine `FencedFrameConfig` von einer Werbeauktion der Protected Audience API, die dann verwendet wird, um die gewinnende Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> **Note:** `resolveToConfig: true` muss im `runAdAuction()` Aufruf übergeben werden, um ein `FencedFrameConfig` Objekt zu erhalten. Falls es nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} auf eine URN aufgelöst, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
