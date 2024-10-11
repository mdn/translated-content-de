---
title: "Dokument: scrollsnapchanging Ereignis"
short-title: scrollsnapchanging
slug: Web/API/Document/scrollsnapchanging_event
l10n:
  sourceCommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchanging`**-Ereignis des [`Document`](/de/docs/Web/API/Document) Interfaces wird auf dem {{Glossary("Scroll_container", "Scroll-Container")}} ausgelöst, wenn der Browser ein neues Scroll-Snap-Ziel als ausstehend bestimmt, d. h. es wird ausgewählt, wenn die aktuelle Scroll-Geste endet.

Dieses Ereignis funktioniert ähnlich wie das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) Ereignis des [`Element`](/de/docs/Web/API/Element) Interfaces, außer dass das gesamte HTML-Dokument als Scroll-Snap-Container festgelegt werden muss (d. h., {{cssxref("scroll-snap-type")}} ist auf dem {{htmlelement("html")}} Element festgelegt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("scrollsnapchanging", (event) => {});

onscrollsnapchanging = (event) => {};
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), das vom generischen [`Event`](/de/docs/Web/API/Event) Typ erbt.

## Beispiele

### Grundlegende Nutzung

Angenommen, wir haben ein {{htmlelement("main")}} Element, das umfangreiche Inhalte enthält, die es zum Scrollen bringen:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>` Element kann mit einer Kombination von CSS-Eigenschaften in einen Scroll-Container verwandelt werden, zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Wir können dann das Scroll-Snap-Verhalten auf den scrollenden Inhalt implementieren, indem wir die {{cssxref("scroll-snap-type")}} Eigenschaft auf das {{htmlelement("html")}} Element spezifizieren:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Snippet würde dazu führen, dass das `scrollsnapchanging`-Ereignis auf dem HTML-Dokument ausgelöst wird, wenn ein Kind des `<main>` Elements ein ausstehendes Snap-Ziel wird. In der Handler-Funktion setzen wir eine `pending` Klasse auf das Kind, auf das durch die [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) Eigenschaft verwiesen wird, die verwendet werden könnte, um es unterschiedlich zu stylen, wenn das Ereignis ausgelöst wird.

```js
document.addEventListener("scrollsnapchanging", (event) => {
  // remove previously-set "pending" classes
  const pendingElems = document.querySelectorAll(".pending");
  pendingElems.forEach((elem) => {
    elem.classList.remove("pending");
  });

  // Set current pending snap target class to "pending"
  event.snapTargetBlock.classList.add("pending");
});
```

Zu Beginn der Funktion wählen wir alle Elemente aus, die zuvor die `pending` Klasse angewendet hatten und entfernen diese, sodass nur das aktuellste ausstehende Snap-Ziel gestylt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchange`](/de/docs/Web/API/Document/scrollsnapchange_event) Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event) Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS {{cssxref("scroll-snap-type")}} Eigenschaft
- [CSS Scroll Snap Modul](/de/docs/Web/CSS/CSS_scroll_snap)
- [Verwendung von Scroll Snap Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
