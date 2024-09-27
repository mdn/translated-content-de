---
title: VirtualKeyboard
slug: Web/API/VirtualKeyboard
l10n:
  sourceCommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{SeeCompatTable}}{{APIRef("VirtualKeyboard API")}}{{securecontext_header}}

Die **`VirtualKeyboard`**-Schnittstelle der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API) ist auf Geräten nützlich, die über virtuelle Bildschirmeingabetastaturen verfügen, wie z. B. Tablets, Mobiltelefone oder andere Geräte, bei denen eine Hardwaretastatur möglicherweise nicht verfügbar ist.

Die `VirtualKeyboard`-Schnittstelle ermöglicht es, sich von der automatischen Art und Weise, wie Browser mit virtuellen Bildschirmeingabetastaturen umgehen, abzumelden, indem die Höhe des Ansichtsfensters reduziert wird, um Platz für die virtuelle Tastatur zu schaffen. Sie können verhindern, dass der Browser die Größe des Ansichtsfensters ändert, die Position und Größe der virtuellen Tastatur erkennt — um das Layout Ihrer Webseite als Folge anzupassen — und die virtuelle Tastatur programmatisch anzuzeigen oder auszublenden.

Sie greifen auf die `VirtualKeyboard`-Schnittstelle zu, indem Sie [`navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) verwenden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Die `VirtualKeyboard`-Schnittstelle erbt Eigenschaften von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VirtualKeyboard.boundingRect`](/de/docs/Web/API/VirtualKeyboard/boundingRect) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`DOMRect`](/de/docs/Web/API/DOMRect), das die Geometrie der virtuellen Tastatur beschreibt.
- [`VirtualKeyboard.overlaysContent`](/de/docs/Web/API/VirtualKeyboard/overlaysContent) {{Experimental_Inline}}
  - : Ein {{jsxref('Boolean')}}, das definiert, ob der Browser die virtuelle Bildschirmeingabetastatur weiter verwalten soll.

## Instanz-Methoden

_Die `VirtualKeyboard`-Schnittstelle erbt Methoden von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`VirtualKeyboard.show()`](/de/docs/Web/API/VirtualKeyboard/show) {{experimental_inline}}
  - : Zeigt die virtuelle Tastatur an.
- [`VirtualKeyboard.hide()`](/de/docs/Web/API/VirtualKeyboard/hide) {{experimental_inline}}
  - : Blendet die virtuelle Tastatur aus.

## Ereignisse

- [`geometrychange`](/de/docs/Web/API/VirtualKeyboard/geometrychange_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich die Geometrie der virtuellen Bildschirmeingabetastatur ändert, was passiert, wenn die virtuelle Tastatur erscheint oder verschwindet.

## Beispiel

Das folgende Beispiel zeigt, wie Sie sich vom automatischen Verhalten der virtuellen Tastatur abmelden und die Geometrie der virtuellen Tastatur auf der Webseite erkennen können:

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
