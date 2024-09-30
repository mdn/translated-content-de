---
title: VirtualKeyboard
slug: Web/API/VirtualKeyboard
l10n:
  sourceCommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{SeeCompatTable}}{{APIRef("VirtualKeyboard API")}}{{securecontext_header}}

Die **`VirtualKeyboard`**-Schnittstelle der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API) ist auf Geräten nützlich, die Bildschirm-Tastaturen haben, wie Tablets, Mobiltelefone oder andere Geräte, bei denen möglicherweise keine Hardwaretastatur verfügbar ist.

Die `VirtualKeyboard`-Schnittstelle ermöglicht es, das automatische Verhalten der Webbrowser in Bezug auf Bildschirm-Tastaturen zu umgehen, indem die Höhe des Viewports reduziert wird, um Platz für die Bildschirm-Tastatur zu schaffen. Sie können verhindern, dass der Browser die Größe des Viewports ändert, die Position und Größe der Bildschirm-Tastatur erkennen und das Layout Ihrer Webseite entsprechend anpassen sowie die Bildschirm-Tastatur programmatisch ein- oder ausblenden.

Sie greifen auf die `VirtualKeyboard`-Schnittstelle über [`navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) zu.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Die `VirtualKeyboard`-Schnittstelle erbt Eigenschaften von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VirtualKeyboard.boundingRect`](/de/docs/Web/API/VirtualKeyboard/boundingRect) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMRect`](/de/docs/Web/API/DOMRect), das die Geometrie der Bildschirm-Tastatur beschreibt.
- [`VirtualKeyboard.overlaysContent`](/de/docs/Web/API/VirtualKeyboard/overlaysContent) {{Experimental_Inline}}
  - : Ein {{jsxref('Boolean')}}, der bestimmt, ob der Browser die Bildschirm-Tastatur aufhören soll zu verwalten.

## Instanz-Methoden

_Die `VirtualKeyboard`-Schnittstelle erbt Methoden von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VirtualKeyboard.show()`](/de/docs/Web/API/VirtualKeyboard/show) {{experimental_inline}}
  - : Zeigt die Bildschirm-Tastatur an.
- [`VirtualKeyboard.hide()`](/de/docs/Web/API/VirtualKeyboard/hide) {{experimental_inline}}
  - : Verbirgt die Bildschirm-Tastatur.

## Ereignisse

- [`geometrychange`](/de/docs/Web/API/VirtualKeyboard/geometrychange_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich die Geometrie der Bildschirm-Tastatur ändert, was passiert, wenn die Bildschirm-Tastatur erscheint oder verschwindet.

## Beispiel

Das folgende Beispiel demonstriert, wie man das automatische Verhalten der Bildschirm-Tastatur umgeht und die Geometrie der Bildschirm-Tastatur auf der Webseite erkennt:

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

- [Die VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API)
- [Volle Kontrolle mit der VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
