---
title: "Window: scrollsnapchanging-Ereignis"
short-title: scrollsnapchanging
slug: Web/API/Window/scrollsnapchanging_event
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchanging`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird auf dem `window` ausgelöst, wenn der Browser einen neuen Zielpunkt für das Scroll-Snap identifiziert, d.h. er wird ausgewählt, wenn die aktuelle Scroll-Geste endet.

Dieses Ereignis funktioniert ähnlich wie das [`Element`](/de/docs/Web/API/Element)-Schnittstellenereignis [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event), außer dass das gesamte HTML-Dokument als Scroll-Snap-Container eingestellt sein muss (d.h. {{cssxref("scroll-snap-type")}} wird auf dem {{htmlelement("html")}}-Element gesetzt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("scrollsnapchanging", (event) => {});

onscrollsnapchanging = (event) => {};
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), der vom generischen [`Event`](/de/docs/Web/API/Event)-Typ erbt.

## Beispiele

### Grundlegende Verwendung

Angenommen, wir haben ein {{htmlelement("main")}}-Element, das umfangreichen Inhalt enthält, der zum Scrollen führt:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element kann mithilfe einer Kombination von CSS-Eigenschaften in einen Scroll-Container umgewandelt werden, zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Wir können dann ein Scroll-Snap-Verhalten für den scrollenden Inhalt implementieren, indem wir die {{cssxref("scroll-snap-type")}}-Eigenschaft auf dem {{htmlelement("html")}}-Element spezifizieren:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Snippet würde das `scrollsnapchanging`-Ereignis auf dem HTML-Dokument auslösen, wenn ein Kind des `<main>`-Elements ein ausstehendes Snap-Ziel wird. In der Handler-Funktion setzen wir eine `pending`-Klasse auf das Kind, das durch die [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Eigenschaft referenziert wird, die verwendet werden könnte, um es anders zu gestalten, wenn das Ereignis ausgelöst wird.

```js
window.addEventListener("scrollsnapchanging", (event) => {
  // remove previously-set "pending" classes
  const pendingElems = document.querySelectorAll(".pending");
  pendingElems.forEach((elem) => {
    elem.classList.remove("pending");
  });

  // Set current pending snap target class to "pending"
  event.snapTargetBlock.classList.add("pending");
});
```

Zu Beginn der Funktion wählen wir alle Elemente aus, die zuvor die `pending`-Klasse angewendet hatten, und entfernen sie, damit nur das aktuellste ausstehende Snap-Ziel formatiert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event)-Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event)-Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS {{cssxref("scroll-snap-type")}}-Eigenschaft
- [CSS scroll snap module](/de/docs/Web/CSS/CSS_scroll_snap)
- [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
