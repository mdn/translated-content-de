---
title: "Window: scrollsnapchanging-Ereignis"
short-title: scrollsnapchanging
slug: Web/API/Window/scrollsnapchanging_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchanging`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird im `window` ausgelöst, wenn der Browser erkennt, dass ein neues Ziel für das Scroll-Snap bevorsteht, d.h. es wird ausgewählt, wenn die aktuelle Scroll-Geste endet.

Dieses Ereignis funktioniert ähnlich wie das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, mit der Ausnahme, dass das gesamte HTML-Dokument als Scroll-Snap-Container festgelegt werden muss (d.h. {{cssxref("scroll-snap-type")}} wird auf das {{htmlelement("html")}}-Element gesetzt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("scrollsnapchanging", (event) => { })

onscrollsnapchanging = (event) => { }
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), der von dem generischen [`Event`](/de/docs/Web/API/Event)-Typ erbt.

## Beispiele

### Grundlegende Verwendung

Angenommen, wir haben ein {{htmlelement("main")}}-Element mit erheblichem Inhalt, der es zum Scrollen veranlasst:

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

Wir können dann ein Scroll-Snap-Verhalten für den scrollenden Inhalt implementieren, indem wir die {{cssxref("scroll-snap-type")}}-Eigenschaft auf das {{htmlelement("html")}}-Element anwenden:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Snippet würde das `scrollsnapchanging`-Ereignis auf dem HTML-Dokument auslösen, wenn ein Kind des `<main>`-Elements zu einem bevorstehenden Snap-Ziel wird. In der Handler-Funktion setzen wir eine `pending`-Klasse auf das Kind, das durch die [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Eigenschaft referenziert wird, welche verwendet werden könnte, um es anders zu stylen, wenn das Ereignis ausgelöst wird.

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

Zu Beginn der Funktion wählen wir alle Elemente aus, die zuvor die `pending`-Klasse hatten, und entfernen sie, sodass nur das jüngste bevorstehende Snap-Ziel gestylt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event)-Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event)-Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS {{cssxref("scroll-snap-type")}}-Eigenschaft
- [CSS Scroll Snap Modul](/de/docs/Web/CSS/CSS_scroll_snap)
- [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
