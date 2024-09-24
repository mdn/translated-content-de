---
title: HTMLFencedFrameElement
slug: Web/API/HTMLFencedFrameElement
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Das **`HTMLFencedFrameElement`**-Interface repräsentiert ein {{htmlelement("fencedframe")}}-Element in JavaScript und bietet Konfigurationseigenschaften.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil {{domxref("HTMLElement")}}._

- {{domxref("HTMLFencedFrameElement.allow")}} {{experimental_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>`-`allow`-Attributs ab und legt ihn fest, welches eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) darstellt, die auf den Inhalt angewendet wird, wenn er erstmals eingebettet wird.
- {{domxref("HTMLFencedFrameElement.config")}} {{experimental_inline}}
  - : ein {{domxref("FencedFrameConfig")}}-Objekt, welches die Navigation eines {{htmlelement("fencedframe")}} darstellt, d. h., welcher Inhalt darin angezeigt wird. Ein `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) zurückgegeben.
- {{domxref("HTMLFencedFrameElement.height")}} {{experimental_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>`-`height`-Attributs ab und legt ihn fest, welches die Höhe des Elements angibt.
- {{domxref("HTMLFencedFrameElement.width")}} {{experimental_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>`-`width`-Attributs ab und legt ihn fest, welches die Breite des Elements angibt.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine nutzende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein {{domxref("FencedFrameConfig")}}-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` von einer Anzeigenausschreibung der Protected Audience API, das dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> **Note:** `resolveToConfig: true` muss in den Aufruf von `runAdAuction()` übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} zu einer URN aufgelöst, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
