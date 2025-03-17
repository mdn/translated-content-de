---
title: "Dokument: scrollsnapchange-Ereignis"
short-title: scrollsnapchange
slug: Web/API/Document/scrollsnapchange_event
l10n:
  sourceCommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchange`**-Ereignis der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wird am Ende einer Scroll-Operation auf dem Dokument-{{Glossary("Scroll_container", "Scroll-Container")}} ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wird.

Dieses Ereignis funktioniert ähnlich wie das [`Element`](/de/docs/Web/API/Element)-Schnittstellenereignis [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event), mit der Ausnahme, dass das gesamte HTML-Dokument als Scroll-Snap-Container festgelegt werden muss (d.h. {{cssxref("scroll-snap-type")}} wird auf dem {{htmlelement("html")}}-Element gesetzt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("scrollsnapchange", (event) => {});

onscrollsnapchange = (event) => {};
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), das vom generischen [`Event`](/de/docs/Web/API/Event)-Typ erbt.

## Beispiele

### Grundlegende Verwendung

Angenommen, wir haben ein {{htmlelement("main")}}-Element, das erheblichen Inhalt enthält, der es scrollen lässt:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element kann mit einer Kombination von CSS-Eigenschaften in einen Scroll-Container verwandelt werden, beispielsweise:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Wir können dann das Scroll-Snap-Verhalten auf dem scrollenden Inhalt implementieren, indem wir die Eigenschaft {{cssxref("scroll-snap-type")}} auf dem {{htmlelement("html")}}-Element angeben:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Der folgende JavaScript-Ausschnitt würde das `scrollsnapchange`-Ereignis auf dem HTML-Dokument auslösen, wenn ein Kind des `<main>`-Elements ein neu ausgewähltes Snap-Ziel wird. In der Handlerfunktion setzen wir eine `selected`-Klasse auf das Kind, auf das durch die [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) verwiesen wird, die verwendet werden könnte, um es so zu gestalten, dass es wie ausgewählt aussieht (z. B. mit einer Animation), wenn das Ereignis ausgelöst wird.

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
- [CSS Scroll-Snap-Modul](/de/docs/Web/CSS/CSS_scroll_snap)
- [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
