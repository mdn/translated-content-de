---
title: "Window: scrollsnapchanging-Ereignis"
short-title: scrollsnapchanging
slug: Web/API/Window/scrollsnapchanging_event
l10n:
  sourceCommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchanging`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird auf dem `window` ausgelöst, wenn der Browser feststellt, dass ein neues Ziel für den Scroll-Snap in Vorbereitung ist, d.h. es wird ausgewählt, wenn die aktuelle Scroll-Geste endet.

Dieses Ereignis funktioniert in ähnlicher Weise wie das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, außer dass das gesamte HTML-Dokument als Scroll-Snap-Container festgelegt sein muss (d.h. {{cssxref("scroll-snap-type")}} ist auf dem {{htmlelement("html")}}-Element gesetzt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Eigenschaft für den Ereignishandler.

```js
addEventListener("scrollsnapchanging", (event) => {});

onscrollsnapchanging = (event) => {};
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), der vom generischen [`Event`](/de/docs/Web/API/Event)-Typ erbt.

## Beispiele

### Grundlegende Verwendung

Angenommen, wir haben ein {{htmlelement("main")}}-Element, das signifikanten Inhalt enthält, der zum Scrollen führt:

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

Wir können dann das Verhalten des Scroll-Snap auf dem scrollenden Inhalt implementieren, indem wir die Eigenschaft {{cssxref("scroll-snap-type")}} auf dem {{htmlelement("html")}}-Element angeben:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Snippet bewirkt, dass das `scrollsnapchanging`-Ereignis auf dem HTML-Dokument ausgelöst wird, wenn ein Kind des `<main>`-Elements ein Ziel für den Snap wird. In der Handler-Funktion setzen wir eine `pending`-Klasse auf das Kind, das durch die [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Eigenschaft referenziert wird, die verwendet werden könnte, um es anders zu stylen, wenn das Ereignis ausgelöst wird.

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

Zu Beginn der Funktion wählen wir alle Elemente aus, die zuvor die `pending`-Klasse angewendet hatten, und entfernen sie, so dass nur das neueste Ziel für den Snap gestylt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event) Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event) Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS {{cssxref("scroll-snap-type")}}-Eigenschaft
- [CSS scroll snap module](/de/docs/Web/CSS/CSS_scroll_snap)
- [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
