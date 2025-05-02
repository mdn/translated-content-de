---
title: "Element: scrollsnapchange Event"
short-title: scrollsnapchange
slug: Web/API/Element/scrollsnapchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchange`**-Ereignis der [`Element`](/de/docs/Web/API/Element)-Schnittstelle wird am {{Glossary("Scroll_container", "Scroll-Container")}} am Ende eines Scroll-Vorgangs ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wurde, kurz bevor das entsprechende [`scrollend`](/de/docs/Web/API/Element/scrollend_event)-Ereignis ausgelöst wird.

Ein Scroll-Vorgang endet, wenn der Benutzer das Scrollen innerhalb eines Scroll-Containers beendet — zum Beispiel durch eine Berührungsgeste oder durch Ziehen mit dem Mauszeiger auf einer Bildlaufleiste — und die Geste loslässt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("scrollsnapchange", (event) => { })

onscrollsnapchange = (event) => { }
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), das von dem generischen [`Event`](/de/docs/Web/API/Event)-Typ erbt.

## Beispiele

### Grundlegende Verwendung

Nehmen wir an, wir haben ein {{htmlelement("main")}}-Element, das signifikanten Inhalt enthält, der es zum Scrollen bringt:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element kann in einen Scroll-Container umgewandelt werden, der beim Scrollen zu seinen untergeordneten Elementen schnappt, indem eine Kombination von CSS {{cssxref("scroll-snap-type")}}-Eigenschaften und anderen Eigenschaften verwendet wird. Zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Beispiel sorgt dafür, dass das `scrollsnapchange`-Ereignis auf dem `<main>`-Element ausgelöst wird, wenn eines seiner Kinder zu einem neu ausgewählten Snap-Ziel wird. In der Handlerfunktion setzen wir eine `selected`-Klasse auf das Kind, das durch die [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Eigenschaft referenziert wird, die verwendet werden könnte, um es so zu stylen, dass es wie ausgewählt aussieht (zum Beispiel mit einer Animation), wenn das Ereignis ausgelöst wird.

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
- CSS {{cssxref("scroll-snap-type")}}-Eigenschaft
- [CSS Scroll Snap Modul](/de/docs/Web/CSS/CSS_scroll_snap)
- [Verwendung von Scroll Snap Events](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
