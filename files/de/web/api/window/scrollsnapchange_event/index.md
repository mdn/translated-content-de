---
title: "Window: scrollsnapchange-Ereignis"
short-title: scrollsnapchange
slug: Web/API/Window/scrollsnapchange_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchange`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird am Ende eines Scrollvorgangs auf `window` ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wird.

Dieses Ereignis funktioniert weitgehend wie das [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis der [`Element`](/de/docs/Web/API/Element)-Schnittstelle. Allerdings muss das gesamte HTML-Dokument als Scroll-Snap-Container festgelegt sein (das heißt, {{cssxref("scroll-snap-type")}} muss auf dem {{htmlelement("html")}}-Element gesetzt sein).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("scrollsnapchange", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onscrollsnapchange = (event) => { }
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), das vom generischen Typ [`Event`](/de/docs/Web/API/Event) erbt.

## Beispiele

### Grundlegende Verwendung

Angenommen, wir haben ein {{htmlelement("main")}}-Element mit so viel Inhalt, dass gescrollt werden muss:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element kann durch eine Kombination von CSS-Eigenschaften in einen Scroll-Container umgewandelt werden, zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Anschließend können wir das Scroll-Snap-Verhalten für den scrollbaren Inhalt implementieren, indem wir die Eigenschaft {{cssxref("scroll-snap-type")}} auf dem {{htmlelement("html")}}-Element festlegen:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Snippet bewirkt, dass das `scrollsnapchange`-Ereignis auf dem HTML-Dokument ausgelöst wird, wenn ein Kindelement des `<main>`-Elements zu einem neu ausgewählten Snap-Ziel wird. In der Handler-Funktion weisen wir dem Kindelement, auf das [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) verweist, die Klasse `selected` zu. Damit könnte es beim Auslösen des Ereignisses so gestaltet werden, dass es ausgewählt aussieht, beispielsweise durch eine Animation.

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

- [`scrollsnapchanging`](/de/docs/Web/API/Window/scrollsnapchanging_event)-Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event)-Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS-Eigenschaft {{cssxref("scroll-snap-type")}}
- [CSS-Scroll-Snap-Modul](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Scroll-Snap-Ereignisse verwenden](/de/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
