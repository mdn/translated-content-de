---
title: HTMLFencedFrameElement
slug: Web/API/HTMLFencedFrameElement
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`HTMLFencedFrameElement`** Schnittstelle repräsentiert ein {{htmlelement("fencedframe")}}-Element in JavaScript und bietet Konfigurationseigenschaften.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFencedFrameElement.allow`](/de/docs/Web/API/HTMLFencedFrameElement/allow) {{experimental_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>`-`allow`-Attributs ab und setzt ihn. Dieses Attribut steht für eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), die auf den Inhalt angewendet wird, wenn er erstmals eingebettet wird.
- [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) {{experimental_inline}}
  - : ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das die Navigation eines {{htmlelement("fencedframe")}} repräsentiert, d.h. welchen Inhalt es anzeigt. Ein `FencedFrameConfig` wird aus einer Quelle wie der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) zurückgegeben.
- [`HTMLFencedFrameElement.height`](/de/docs/Web/API/HTMLFencedFrameElement/height) {{experimental_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>`-`height`-Attributs ab und setzt ihn, der die Höhe des Elements spezifiziert.
- [`HTMLFencedFrameElement.width`](/de/docs/Web/API/HTMLFencedFrameElement/width) {{experimental_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>`-`width`-Attributs ab und setzt ihn, der die Breite des Elements spezifiziert.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine nutzende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` von einer Anzeigenausschreibung der Protected Audience API, die dann verwendet wird, um die gewinnende Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> **Hinweis:** `resolveToConfig: true` muss in den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn dies nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} auf einen URN aufgelöst, der nur in einem {{htmlelement("iframe")}} verwendet werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
