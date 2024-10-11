---
title: "Element: scrollsnapchange Ereignis"
short-title: scrollsnapchange
slug: Web/API/Element/scrollsnapchange_event
l10n:
  sourceCommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchange`** Ereignis der [`Element`](/de/docs/Web/API/Element) Schnittstelle wird am {{Glossary("Scroll_container", "Scroll-Container")}} am Ende eines Scrollvorgangs ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wurde, und zwar direkt bevor das zugehörige [`scrollend`](/de/docs/Web/API/Element/scrollend_event) Ereignis ausgelöst wird.

Ein Scrollvorgang endet, wenn der Benutzer das Scrollen innerhalb eines Scroll-Containers abschließt – zum Beispiel mit einer Berührungsgeste oder durch Ziehen des Mauszeigers auf einer Scrollleiste – und die Geste loslässt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("scrollsnapchange", (event) => {});

onscrollsnapchange = (event) => {};
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), das vom generischen [`Event`](/de/docs/Web/API/Event) Typ erbt.

## Beispiele

### Grundlegende Verwendung

Angenommen, wir haben ein {{htmlelement("main")}} Element, das bedeutenden Inhalt enthält, der dazu führt, dass es scrollbar ist:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>` Element kann in einen Scroll-Container umgewandelt werden, der bei Scrollen zu seinen Kindern schnallt, indem eine Kombination der CSS {{cssxref("scroll-snap-type")}} Eigenschaft und anderer Eigenschaften verwendet wird. Zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

Der folgende JavaScript-Schnipsel würde dazu führen, dass das `scrollsnapchange` Ereignis auf dem `<main>` Element ausgelöst wird, wenn eines seiner Kinder zu einem neu ausgewählten Snap-Ziel wird. In der Handler-Funktion setzen wir eine `selected` Klasse auf das Kind, auf das durch die [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) Eigenschaft verwiesen wird, die verwendet werden könnte, um es zu stylen, sodass es wie ausgewählt aussieht (zum Beispiel mit einer Animation), wenn das Ereignis ausgelöst wird.

```js
const scrollingElem = document.querySelector("main");

scrollingElem.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.classList.add("selected");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event) Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS {{cssxref("scroll-snap-type")}} Eigenschaft
- [CSS scroll snap Modul](/de/docs/Web/CSS/CSS_scroll_snap)
- [Verwenden von Scroll Snap Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
