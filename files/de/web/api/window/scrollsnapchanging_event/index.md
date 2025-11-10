---
title: "Window: scrollsnapchanging Ereignis"
short-title: scrollsnapchanging
slug: Web/API/Window/scrollsnapchanging_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchanging`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird im `window` ausgelöst, wenn der Browser feststellt, dass ein neues Ziel für das Scroll-Snap ansteht, das ausgewählt wird, wenn die aktuelle Scroll-Geste endet.

Dieses Ereignis funktioniert ähnlich wie das [`Element`](/de/docs/Web/API/Element)-Schnittstelle [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis, mit dem Unterschied, dass das gesamte HTML-Dokument als Scroll-Snap-Container festgelegt werden muss (d.h. {{cssxref("scroll-snap-type")}} wird auf das {{htmlelement("html")}}-Element gesetzt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("scrollsnapchanging", (event) => { })

onscrollsnapchanging = (event) => { }
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), welches von dem generischen [`Event`](/de/docs/Web/API/Event)-Typ erbt.

## Beispiele

### Grundlegende Verwendung

Angenommen, wir haben ein {{htmlelement("main")}}-Element, das wesentlichen Inhalt enthält, der ein Scrollen verursacht:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element kann unter Verwendung einer Kombination von CSS-Eigenschaften in einen Scroll-Container umgewandelt werden, zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Wir können dann das Scroll-Snap-Verhalten auf den scrollenden Inhalt umsetzen, indem wir die {{cssxref("scroll-snap-type")}}-Eigenschaft auf das {{htmlelement("html")}}-Element anwenden:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Snippet würde das `scrollsnapchanging`-Ereignis im HTML-Dokument auslösen, wenn ein Kind des `<main>`-Elements zu einem anstehenden Snap-Ziel wird. In der Handler-Funktion setzen wir eine `pending`-Klasse auf das Kind, das durch die [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Eigenschaft referenziert wird, welche verwendet werden könnte, um es anders zu stylen, wenn das Ereignis ausgelöst wird.

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

Zu Beginn der Funktion wählen wir alle Elemente aus, die zuvor die `pending`-Klasse angewendet hatten, und entfernen diese, sodass nur das zuletzt anstehende Snap-Ziel gestylt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event) Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event) Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS {{cssxref("scroll-snap-type")}} Eigenschaft
- [CSS Scroll Snap Modul](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Verwendung von Scroll Snap-Ereignissen](/de/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
