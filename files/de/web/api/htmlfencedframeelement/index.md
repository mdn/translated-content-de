---
title: HTMLFencedFrameElement
slug: Web/API/HTMLFencedFrameElement
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Das **`HTMLFencedFrameElement`**-Interface repräsentiert ein {{htmlelement("fencedframe")}}-Element in JavaScript und bietet Konfigurationseigenschaften.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem übergeordneten [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFencedFrameElement.allow`](/de/docs/Web/API/HTMLFencedFrameElement/allow) {{experimental_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>`-`allow`-Attributs ab und setzt diesen, welches eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) darstellt, die auf den Inhalt angewendet wird, wenn er erstmals eingebettet wird.
- [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) {{experimental_inline}}
  - : Ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das die Navigation eines {{htmlelement("fencedframe")}} darstellt, d.h. welcher Inhalt darin angezeigt wird. Ein `FencedFrameConfig` wird aus einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) zurückgegeben.
- [`HTMLFencedFrameElement.height`](/de/docs/Web/API/HTMLFencedFrameElement/height) {{experimental_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>`-`height`-Attributs ab und setzt diesen, welches die Höhe des Elements spezifiziert.
- [`HTMLFencedFrameElement.width`](/de/docs/Web/API/HTMLFencedFrameElement/width) {{experimental_inline}}
  - : Ruft den Wert des entsprechenden `<fencedframe>`-`width`-Attributs ab und setzt diesen, welches die Breite des Elements spezifiziert.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine verwendende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Im folgenden Beispiel wird ein `FencedFrameConfig` von einer Anzeigenauktion der Protected Audience API abgerufen und dann verwendet, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> **Note:** `resolveToConfig: true` muss bei dem Aufruf von `runAdAuction()` übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt wird, wird die resultierende {{jsxref("Promise")}} auf einen URN aufgelöst, der nur in einem {{htmlelement("iframe")}} verwendet werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
