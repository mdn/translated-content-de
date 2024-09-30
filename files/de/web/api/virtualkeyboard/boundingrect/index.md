---
title: "VirtualKeyboard: boundingRect-Eigenschaft"
short-title: boundingRect
slug: Web/API/VirtualKeyboard/boundingRect
l10n:
  sourceCommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`boundingRect`**-Eigenschaft der [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-Schnittstelle enthält ein [`DOMRect`](/de/docs/Web/API/DOMRect), das die Position und Größe der Bildschirmtastatur angibt, die die Webseite überlagert.

Die Bildschirmtastatur wird den Viewport überlagern, wenn die [Virtual Keyboard API](/de/docs/Web/API/VirtualKeyboard_API) verwendet wird, um zu verhindern, dass der Browser den Viewport automatisch ändert. Dies geschieht durch Setzen der [`overlaysContent`](/de/docs/Web/API/VirtualKeyboard/overlaysContent)-Eigenschaft auf `true`.

## Wert

Ein [`DOMRect`](/de/docs/Web/API/DOMRect), das die Position und Größe der virtuellen Tastatur im Viewport angibt.

Die `x`-, `y`-, `width`- und `height`-Koordinaten des Rechtecks sind nützlich, um Inhalte auf der Webseite neu zu positionieren, die sichtbar bleiben müssen, selbst wenn die virtuelle Tastatur angezeigt wird.

```js
const { x, y, width, height } = navigator.virtualKeyboard.boundingRect;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API)
- [Volle Kontrolle mit der VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
