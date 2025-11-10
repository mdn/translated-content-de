---
title: "Dokument: scrollsnapchange Ereignis"
short-title: scrollsnapchange
slug: Web/API/Document/scrollsnapchange_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchange`** Ereignis der [`Document`](/de/docs/Web/API/Document) Schnittstelle wird am Dokument-Scrollcontainer am Ende eines Scrollvorgangs ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wird.

Dieses Ereignis funktioniert ähnlich wie das [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) Ereignis der [`Element`](/de/docs/Web/API/Element) Schnittstelle, mit der Ausnahme, dass das gesamte HTML-Dokument als Scroll-Snap-Container gesetzt werden muss (d.h. {{cssxref("scroll-snap-type")}} ist auf dem {{htmlelement("html")}} Element gesetzt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("scrollsnapchange", (event) => { })

onscrollsnapchange = (event) => { }
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), das vom generischen [`Event`](/de/docs/Web/API/Event) Typ erbt.

## Beispiele

### Grundlegende Verwendung

Angenommen, wir haben ein {{htmlelement("main")}} Element, das erheblichen Inhalt enthält, der zum Scrollen führt:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>` Element kann mithilfe einer Kombination von CSS-Eigenschaften in einen Scroll-Container umgewandelt werden, zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Wir können dann das Scroll-Snap-Verhalten auf dem scrollenden Inhalt umsetzen, indem wir die {{cssxref("scroll-snap-type")}} Eigenschaft auf dem {{htmlelement("html")}} Element spezifizieren:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Snippet würde das `scrollsnapchange` Ereignis auf dem HTML-Dokument auslösen, wenn ein Kind des `<main>` Elements zu einem neu ausgewählten Snap-Ziel wird. In der Handlerfunktion setzen wir eine `selected` Klasse auf das Kind, das durch [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) referenziert wird. Diese Klasse könnte verwendet werden, um es so zu stylen, dass es aussieht, als ob es ausgewählt wurde (zum Beispiel mit einer Animation), wenn das Ereignis ausgelöst wird.

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
- CSS {{cssxref("scroll-snap-type")}} Eigenschaft
- [CSS Scroll Snap Modul](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Verwendung von Scroll Snap Ereignissen](/de/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
