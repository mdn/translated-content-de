---
title: "Dokument: scrollsnapchanging Ereignis"
short-title: scrollsnapchanging
slug: Web/API/Document/scrollsnapchanging_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchanging`** Ereignis der [`Document`](/de/docs/Web/API/Document) Schnittstelle wird am {{Glossary("Scroll_container", "Scroll-Container")}} ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel in der Warteschleife steht, d.h. es wird ausgewählt, wenn die aktuelle Scroll-Geste endet.

Dieses Ereignis funktioniert im Wesentlichen genauso wie das [`Element`](/de/docs/Web/API/Element) Schnittstellen-Erereignis [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event), außer dass das gesamte HTML-Dokument als Scroll-Snap-Container festgelegt werden muss (d.h. {{cssxref("scroll-snap-type")}} ist auf das {{htmlelement("html")}} Element gesetzt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("scrollsnapchanging", (event) => { })

onscrollsnapchanging = (event) => { }
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), das vom generischen [`Event`](/de/docs/Web/API/Event) Typ erbt.

## Beispiele

### Grundlegende Nutzung

Angenommen, wir haben ein {{htmlelement("main")}} Element, das signifikanten Inhalt enthält, welcher das Scrollen verursacht:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>` Element kann mit einer Kombination aus CSS-Eigenschaften in einen Scroll-Container umgewandelt werden, zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Wir können dann das Scroll-Snapping-Verhalten auf den scrollbaren Inhalt implementieren, indem wir die {{cssxref("scroll-snap-type")}} Eigenschaft auf dem {{htmlelement("html")}} Element angeben:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Der folgende JavaScript-Schnipsel würde dazu führen, dass das `scrollsnapchanging` Ereignis im HTML-Dokument ausgelöst wird, wenn ein Kind des `<main>` Elements ein schwebendes Snap-Ziel wird. In der Handler-Funktion setzen wir eine `pending` Klasse auf das Kind, auf das die [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) Eigenschaft verweist, die verwendet werden könnte, um es bei Auftreten des Ereignisses anders zu stylen.

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

Zu Beginn der Funktion wählen wir alle Elemente aus, die zuvor die `pending` Klasse angewendet hatten, und entfernen sie, sodass nur das aktuellste schwebende Snap-Ziel gestylt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchange`](/de/docs/Web/API/Document/scrollsnapchange_event) Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event) Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS {{cssxref("scroll-snap-type")}} Eigenschaft
- [CSS scroll snap Modul](/de/docs/Web/CSS/CSS_scroll_snap)
- [Verwendung von scroll snap Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
