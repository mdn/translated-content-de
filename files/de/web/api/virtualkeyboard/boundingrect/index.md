---
title: "VirtualKeyboard: boundingRect-Eigenschaft"
short-title: boundingRect
slug: Web/API/VirtualKeyboard/boundingRect
l10n:
  sourceCommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`boundingRect`**-Eigenschaft der Schnittstelle {{domxref("VirtualKeyboard")}} enthält ein {{domxref("DOMRect")}}, das die Position und Größe der virtuellen Bildschirmtastatur angibt, die über die Webseite gelegt wird.

Die virtuelle Bildschirmtastatur wird den Viewport überlagern, wenn die {{domxref("VirtualKeyboard_API", "Virtual Keyboard API", "", "nocode")}} verwendet wird, um zu verhindern, dass der Browser den Viewport automatisch anpasst. Dies wird erreicht, indem die Eigenschaft {{domxref("VirtualKeyboard.overlaysContent", "overlaysContent")}} auf `true` gesetzt wird.

## Wert

Ein {{domxref("DOMRect")}}, welches die Position und Größe der virtuellen Tastatur im Viewport angibt.

Die `x`, `y`, `width` und `height` Koordinaten des Rechtecks sind nützlich, um Inhalte auf der Webseite neu zu positionieren, die sichtbar bleiben müssen, selbst wenn die virtuelle Tastatur angezeigt wird.

```js
const { x, y, width, height } = navigator.virtualKeyboard.boundingRect;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("VirtualKeyboard_API", "Die VirtualKeyboard API", "", "nocode")}}
- [Volle Kontrolle mit der VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
