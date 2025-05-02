---
title: "Dokument: scrollsnapchange-Ereignis"
short-title: scrollsnapchange
slug: Web/API/Document/scrollsnapchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchange`**-Ereignis des [`Document`](/de/docs/Web/API/Document)-Interfaces wird am Dokument-Scroll-Container ausgelöst, wenn am Ende eines Scrollvorgangs ein neues Scroll-Snap-Ziel ausgewählt wird.

Dieses Ereignis funktioniert ähnlich wie das [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis des [`Element`](/de/docs/Web/API/Element)-Interfaces, mit dem Unterschied, dass das gesamte HTML-Dokument als Scroll-Snap-Container festgelegt werden muss (d.h. {{cssxref("scroll-snap-type")}} ist auf das {{htmlelement("html")}}-Element gesetzt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

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

Das `<main>`-Element kann mit einer Kombination von CSS-Eigenschaften in einen Scroll-Container verwandelt werden, zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Wir können dann ein Scroll-Snap-Verhalten auf dem scrollenden Inhalt implementieren, indem wir die {{cssxref("scroll-snap-type")}}-Eigenschaft auf dem {{htmlelement("html")}}-Element angeben:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Beispiel würde das `scrollsnapchange`-Ereignis auf dem HTML-Dokument auslösen, wenn ein Kind des `<main>`-Elements zu einem neu ausgewählten Snap-Ziel wird. In der Handlerfunktion setzen wir eine `selected`-Klasse auf das Kind, auf das durch [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) verwiesen wird. Diese kann verwendet werden, um es so zu stylen, dass es aussieht, als wäre es ausgewählt worden (zum Beispiel mit einer Animation), wenn das Ereignis ausgelöst wird.

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

- [`scrollsnapchanging`](/de/docs/Web/API/Document/scrollsnapchanging_event) Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event) Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS-Eigenschaft {{cssxref("scroll-snap-type")}}
- [CSS-Scroll-Snap-Modul](/de/docs/Web/CSS/CSS_scroll_snap)
- [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
