---
title: "Dokument: scrollsnapchanging Ereignis"
short-title: scrollsnapchanging
slug: Web/API/Document/scrollsnapchanging_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchanging`**-Ereignis des [`Document`](/de/docs/Web/API/Document) Interfaces wird auf dem {{Glossary("Scroll_container", "Scroll-Container")}} ausgelöst, wenn der Browser feststellt, dass ein neues Ziel für das Scroll-Schnappen bevorsteht, d.h. es wird ausgewählt, wenn das aktuelle Scroll-Gesten endet.

Dieses Ereignis funktioniert ähnlich wie das [`Element`](/de/docs/Web/API/Element) Interface-Ereignis [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event), außer dass das gesamte HTML-Dokument als Scroll-Snap-Container festgelegt sein muss (d.h. {{cssxref("scroll-snap-type")}} ist auf dem {{htmlelement("html")}} Element gesetzt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("scrollsnapchanging", (event) => { })

onscrollsnapchanging = (event) => { }
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), das vom generischen [`Event`](/de/docs/Web/API/Event) Typ erbt.

## Beispiele

### Grundlegende Verwendung

Angenommen, wir haben ein {{htmlelement("main")}} Element, das signifikante Inhalte enthält, die ein Scrollen verursachen:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>` Element kann durch eine Kombination von CSS-Eigenschaften in einen Scroll-Container verwandelt werden, zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Wir können dann ein Scroll-Snap-Verhalten auf den scrollenden Inhalt implementieren, indem wir die {{cssxref("scroll-snap-type")}} Eigenschaft auf dem {{htmlelement("html")}} Element spezifizieren:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Snippet würde das `scrollsnapchanging` Ereignis auf dem HTML-Dokument auslösen, wenn ein Kind des `<main>` Elements ein anstehendes Snap-Ziel wird. In der Handler-Funktion setzen wir eine `pending` Klasse auf das Kind, das durch die [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) Eigenschaft referenziert wird, die verwendet werden könnte, um es anders zu stylen, wenn das Ereignis ausgelöst wird.

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

Zu Beginn der Funktion wählen wir alle Elemente aus, denen zuvor die `pending` Klasse zugewiesen wurde, und entfernen diese, sodass nur das neueste anstehende Snap-Ziel gestylt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchange`](/de/docs/Web/API/Document/scrollsnapchange_event) Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event) Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS {{cssxref("scroll-snap-type")}} Eigenschaft
- [CSS-Scroll-Snap-Modul](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Scroll-Snap-Ereignisse](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
