---
title: "Window: scrollsnapchange Event"
short-title: scrollsnapchange
slug: Web/API/Window/scrollsnapchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchange`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird am Ende eines Scroll-Vorgangs auf dem `window` ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wird.

Dieses Ereignis funktioniert ähnlich wie das [`Element`](/de/docs/Web/API/Element)-Schnittstellenereignis [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event), mit dem Unterschied, dass das gesamte HTML-Dokument als Scroll-Snap-Container festgelegt werden muss (d.h. {{cssxref("scroll-snap-type")}} ist auf dem {{htmlelement("html")}}-Element gesetzt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("scrollsnapchange", (event) => { })

onscrollsnapchange = (event) => { }
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), das vom generischen [`Event`](/de/docs/Web/API/Event)-Typ erbt.

## Beispiele

### Grundlegende Nutzung

Angenommen, wir haben ein {{htmlelement("main")}}-Element, das signifikanten Inhalt enthält, der zum Scrollen führt:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element kann mithilfe einer Kombination von CSS-Eigenschaften in einen Scroll-Container verwandelt werden, zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Wir können dann das Scroll-Snapping-Verhalten auf den scrollenden Inhalt umsetzen, indem wir die Eigenschaft {{cssxref("scroll-snap-type")}} auf dem {{htmlelement("html")}}-Element spezifizieren:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Fragment würde das `scrollsnapchange`-Ereignis auf dem HTML-Dokument auslösen, wenn ein Kind des `<main>`-Elements ein neu gewähltes Snap-Ziel wird. In der Handler-Funktion setzen wir eine `selected`-Klasse auf das Kind, das durch das [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) referenziert wird, die beispielsweise verwendet werden könnte, um es so zu stylen, dass es wie ausgewählt aussieht (zum Beispiel mit einer Animation), wenn das Ereignis ausgelöst wird.

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
- CSS-{{cssxref("scroll-snap-type")}}-Eigenschaft
- [CSS Scroll Snap Modul](/de/docs/Web/CSS/CSS_scroll_snap)
- [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
