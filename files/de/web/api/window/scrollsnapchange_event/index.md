---
title: "Window: scrollsnapchange Event"
short-title: scrollsnapchange
slug: Web/API/Window/scrollsnapchange_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchange`** Ereignis der [`Window`](/de/docs/Web/API/Window) Schnittstelle wird am `window` am Ende eines Scrollvorgangs ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wird.

Dieses Ereignis funktioniert ähnlich wie das [`Element`](/de/docs/Web/API/Element) Schnittstelle's [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) Ereignis, außer dass das gesamte HTML-Dokument als Scroll-Snap-Container festgelegt werden muss (d.h. {{cssxref("scroll-snap-type")}} wird auf dem {{htmlelement("html")}} Element gesetzt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("scrollsnapchange", (event) => { })

onscrollsnapchange = (event) => { }
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), das vom generischen [`Event`](/de/docs/Web/API/Event) Typ erbt.

## Beispiele

### Grundlegende Verwendung

Angenommen, wir haben ein {{htmlelement("main")}} Element, das erheblichen Inhalt enthält, der dazu führt, dass es scrollt:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>` Element kann durch eine Kombination von CSS-Eigenschaften in einen Scroll-Container verwandelt werden, zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Wir können dann das Scroll-Snapping-Verhalten auf den scrollenden Inhalt implementieren, indem wir die {{cssxref("scroll-snap-type")}} Eigenschaft auf das {{htmlelement("html")}} Element festlegen:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Snippet würde bewirken, dass das `scrollsnapchange` Ereignis im HTML-Dokument ausgelöst wird, wenn ein Kind des `<main>` Elements ein neu ausgewähltes Snap-Ziel wird. In der Handler-Funktion setzen wir eine `selected` Klasse auf das Kind, auf das durch den [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) verwiesen wird, die verwendet werden könnte, um es so zu stylen, dass es wie ausgewählt aussieht (zum Beispiel mit einer Animation), wenn das Ereignis ausgelöst wird.

```js
window.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.classList.add("selected");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchanging`](/de/docs/Web/API/Window/scrollsnapchanging_event) Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event) Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS {{cssxref("scroll-snap-type")}} Eigenschaft
- [CSS Scroll Snap Modul](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Verwendung von Scroll Snap-Ereignissen](/de/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
