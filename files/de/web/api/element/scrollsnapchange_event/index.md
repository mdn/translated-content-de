---
title: "Element: scrollsnapchange-Ereignis"
short-title: scrollsnapchange
slug: Web/API/Element/scrollsnapchange_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchange`**-Ereignis der [`Element`](/de/docs/Web/API/Element)-Schnittstelle wird am {{Glossary("Scroll_container", "Scroll-Container")}} am Ende eines Scroll-Vorgangs ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wurde, unmittelbar bevor das entsprechende [`scrollend`](/de/docs/Web/API/Element/scrollend_event)-Ereignis ausgelöst wird.

Ein Scroll-Vorgang endet, wenn der Benutzer das Scrollen innerhalb eines Scroll-Containers beendet - zum Beispiel mithilfe einer Touch-Geste oder durch Ziehen des Mauszeigers auf einer Scroll-Leiste - und die Geste loslässt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("scrollsnapchange", (event) => { })

onscrollsnapchange = (event) => { }
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), das vom generischen [`Event`](/de/docs/Web/API/Event)-Typ erbt.

## Beispiele

### Grundlegende Verwendung

Angenommen, wir haben ein {{htmlelement("main")}}-Element, das signifikanten Inhalt enthält, der es zum Scrollen bringt:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element kann mit einer Kombination aus der CSS-Eigenschaft {{cssxref("scroll-snap-type")}} und anderen Eigenschaften in einen Scroll-Container umgewandelt werden, der beim Scrollen zu seinen untergeordneten Elementen schnappt. Zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Snippet würde das `scrollsnapchange`-Ereignis auf dem `<main>`-Element auslösen, wenn eines seiner Kinder zu einem neu ausgewählten Snap-Ziel wird. In der Handler-Funktion setzen wir eine `selected`-Klasse auf das Kind, das durch die Eigenschaft [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) referenziert wird. Diese Klasse kann verwendet werden, um es so zu stylen, dass es wie ausgewählt aussieht (zum Beispiel mit einer Animation), wenn das Ereignis ausgelöst wird.

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
- CSS-Eigenschaft {{cssxref("scroll-snap-type")}}
- [CSS Scroll Snap Modul](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Verwenden von Scroll Snap-Ereignissen](/de/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
