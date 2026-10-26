---
title: "Dokument: scrollsnapchange-Ereignis"
short-title: scrollsnapchange
slug: Web/API/Document/scrollsnapchange_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchange`**-Ereignis der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wird am {{Glossary("Scroll_container", "Scroll-Container")}} des Dokuments am Ende eines Scrollvorgangs ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wird.

Dieses Ereignis funktioniert weitgehend wie das [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis der [`Element`](/de/docs/Web/API/Element)-Schnittstelle. Allerdings muss das gesamte HTML-Dokument als Scroll-Snap-Container festgelegt sein (d.h. {{cssxref("scroll-snap-type")}} ist auf dem {{htmlelement("html")}}-Element gesetzt).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("scrollsnapchange", (event) => { })
```

Alternativ können Sie ihn der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onscrollsnapchange = (event) => { }
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), das vom allgemeinen Typ [`Event`](/de/docs/Web/API/Event) erbt.

## Beispiele

### Grundlegende Verwendung

Angenommen, wir haben ein {{htmlelement("main")}}-Element, das so viel Inhalt enthält, dass gescrollt werden muss:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element lässt sich beispielsweise durch eine Kombination von CSS-Eigenschaften in einen Scroll-Container umwandeln:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Anschließend können wir ein Scroll-Snap-Verhalten für den scrollbaren Inhalt implementieren, indem wir die Eigenschaft {{cssxref("scroll-snap-type")}} auf dem {{htmlelement("html")}}-Element festlegen:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Codefragment bewirkt, dass das `scrollsnapchange`-Ereignis auf dem HTML-Dokument ausgelöst wird, wenn ein Kindelement des `<main>`-Elements zum neu ausgewählten Snap-Ziel wird. In der Handler-Funktion weisen wir dem Kindelement, auf das [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) verweist, die Klasse `selected` zu. Damit könnte es beim Auslösen des Ereignisses so gestaltet werden, dass es ausgewählt aussieht – beispielsweise durch eine Animation.

```js
document.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.classList.add("selected");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchanging`](/de/docs/Web/API/Document/scrollsnapchanging_event)-Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event)-Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS-Eigenschaft {{cssxref("scroll-snap-type")}}
- [CSS-Scroll-Snap-Modul](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Scroll-Snap-Ereignisse verwenden](/de/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Scroll-Snap-Ereignisse](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
