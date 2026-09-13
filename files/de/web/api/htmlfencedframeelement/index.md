---
title: HTMLFencedFrameElement
slug: Web/API/HTMLFencedFrameElement
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("Fenced Frame API")}}

Die **`HTMLFencedFrameElement`**-Schnittstelle repräsentiert ein {{htmlelement("fencedframe")}}-Element in JavaScript und bietet Konfigurationseigenschaften.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternobjekt, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFencedFrameElement.allow`](/de/docs/Web/API/HTMLFencedFrameElement/allow) {{deprecated_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>`-`allow`-Attributs ab und setzt ihn. Dieses Attribut stellt eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) dar, die auf den Inhalt angewendet wird, wenn er erstmals eingebettet wird.
- [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) {{deprecated_inline}}
  - : Ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das die Navigation eines {{htmlelement("fencedframe")}} darstellt, d.h. welchen Inhalt es anzeigt. Ein `FencedFrameConfig` wird aus einer Quelle wie der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) zurückgegeben.
- [`HTMLFencedFrameElement.height`](/de/docs/Web/API/HTMLFencedFrameElement/height) {{deprecated_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>`-`height`-Attributs ab und setzt ihn. Dieses Attribut gibt die Höhe des Elements an.
- [`HTMLFencedFrameElement.width`](/de/docs/Web/API/HTMLFencedFrameElement/width) {{deprecated_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>`-`width`-Attributs ab und setzt ihn. Dieses Attribut gibt die Breite des Elements an.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, wird eine API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) genutzt, um ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt zu generieren, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` festgelegt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` aus einer Anzeigenausschreibung der Protected Audience API, das verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // … auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> [!NOTE]
> `resolveToConfig: true` muss beim Aufruf von `runAdAuction()` übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} zu einem URN aufgelöst, das nur in einem {{htmlelement("iframe")}} verwendet werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
