---
title: VirtualKeyboard
slug: Web/API/VirtualKeyboard
l10n:
  sourceCommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{SeeCompatTable}}{{APIRef("VirtualKeyboard API")}}{{securecontext_header}}

Das **`VirtualKeyboard`**-Interface der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API) ist nützlich auf Geräten mit Bildschirmtastaturen, wie Tablets, Mobiltelefone oder andere Geräte, auf denen möglicherweise keine Hardwaretastatur verfügbar ist.

Das `VirtualKeyboard`-Interface ermöglicht es, die automatische Handhabung von Bildschirmtastaturen durch Browser zu umgehen, die die Höhe des Viewports reduzieren, um Platz für die Bildschirmtastatur zu schaffen. Sie können verhindern, dass der Browser die Größe des Viewports ändert, die Position und Größe der Bildschirmtastatur erkennen — und als Folge das Layout Ihrer Webseite anpassen — sowie die Bildschirmtastatur programmatisch anzeigen oder ausblenden.

Sie greifen auf das `VirtualKeyboard`-Interface über {{domxref("navigator.virtualKeyboard")}} zu.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Das `VirtualKeyboard`-Interface erbt Eigenschaften von seinem Elternteil, {{domxref("EventTarget")}}._

- {{DOMxRef("VirtualKeyboard.boundingRect")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{domxref("DOMRect")}}, das die Geometrie der Bildschirmtastatur beschreibt.
- {{DOMxRef("VirtualKeyboard.overlaysContent")}} {{Experimental_Inline}}
  - : Ein {{jsxref('Boolean')}}, der definiert, ob der Browser die Bildschirmtastatur nicht mehr handhaben soll.

## Instanz-Methoden

_Das `VirtualKeyboard`-Interface erbt Methoden von seinem Elternteil, {{domxref("EventTarget")}}._

- {{domxref('VirtualKeyboard.show()')}} {{experimental_inline}}
  - : Zeigen Sie die Bildschirmtastatur an.
- {{domxref('VirtualKeyboard.hide()')}} {{experimental_inline}}
  - : Blenden Sie die Bildschirmtastatur aus.

## Ereignisse

- {{domxref("VirtualKeyboard.geometrychange_event", "geometrychange")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich die Geometrie der Bildschirmtastatur ändert, was passiert, wenn die Bildschirmtastatur ein- oder ausgeblendet wird.

## Beispiel

Das folgende Beispiel zeigt, wie man das automatische Verhalten der Bildschirmtastatur umgehen und die Geometrie der Bildschirmtastatur auf der Webseite erkennen kann:

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {
    const { x, y, width, height } = event.target.boundingRect;
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("VirtualKeyboard_API", "Die VirtualKeyboard API", "", "nocode")}}
- [Volle Kontrolle mit der VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
