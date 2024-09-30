---
title: HTMLFencedFrameElement
slug: Web/API/HTMLFencedFrameElement
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`HTMLFencedFrameElement`**-Schnittstelle repräsentiert ein {{htmlelement("fencedframe")}}-Element in JavaScript und bietet Konfigurationseigenschaften.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFencedFrameElement.allow`](/de/docs/Web/API/HTMLFencedFrameElement/allow) {{experimental_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>`-`allow`-Attributs ab und setzt ihn. Dieses Attribut stellt eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) dar, die auf den Inhalt angewendet wird, wenn dieser erstmalig eingebettet wird.
- [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) {{experimental_inline}}
  - : Ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das die Navigation eines {{htmlelement("fencedframe")}} darstellt, d.h. welchen Inhalt es zeigen wird. Ein `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) zurückgegeben.
- [`HTMLFencedFrameElement.height`](/de/docs/Web/API/HTMLFencedFrameElement/height) {{experimental_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>`-`height`-Attributs ab und setzt ihn, welches die Höhe des Elements angibt.
- [`HTMLFencedFrameElement.width`](/de/docs/Web/API/HTMLFencedFrameElement/width) {{experimental_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>`-`width`-Attributs ab und setzt ihn, welches die Breite des Elements angibt.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine API (wie z. B. [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` festgelegt wird.

Das folgende Beispiel erhält eine `FencedFrameConfig` von einer Anzeigenauktion der Protected Audience API, die dann verwendet wird, um die gewinnende Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> **Note:** `resolveToConfig: true` muss im Aufruf von `runAdAuction()` übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird die resultierende {{jsxref("Promise")}} in eine URN aufgelöst, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
