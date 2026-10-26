---
title: "Window: scrollsnapchanging-Ereignis"
short-title: scrollsnapchanging
slug: Web/API/Window/scrollsnapchanging_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchanging`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird auf `window` ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel vorgemerkt ist, das beim Ende der aktuellen Scroll-Geste ausgewählt wird.

Dieses Ereignis funktioniert weitgehend wie das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis der [`Element`](/de/docs/Web/API/Element)-Schnittstelle. Allerdings muss das gesamte HTML-Dokument als Scroll-Snap-Container festgelegt sein (d.h. {{cssxref("scroll-snap-type")}} ist auf dem {{htmlelement("html")}}-Element gesetzt).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("scrollsnapchanging", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onscrollsnapchanging = (event) => { }
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), das vom allgemeinen Typ [`Event`](/de/docs/Web/API/Event) erbt.

## Beispiele

### Grundlegende Verwendung

Angenommen, wir haben ein {{htmlelement("main")}}-Element mit so viel Inhalt, dass gescrollt werden muss:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element kann durch eine Kombination von CSS-Eigenschaften zu einem Scroll-Container gemacht werden, zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Anschließend können wir Scroll-Snapping für den scrollbaren Inhalt implementieren, indem wir die Eigenschaft {{cssxref("scroll-snap-type")}} auf dem {{htmlelement("html")}}-Element festlegen:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Der folgende JavaScript-Code bewirkt, dass das `scrollsnapchanging`-Ereignis auf dem HTML-Dokument ausgelöst wird, wenn ein Kindelement des `<main>`-Elements als Scroll-Snap-Ziel vorgemerkt wird. In der Handler-Funktion weisen wir dem Kindelement, auf das die Eigenschaft [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) verweist, die Klasse `pending` zu. Damit könnte es beim Auslösen des Ereignisses anders gestaltet werden.

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

Zu Beginn der Funktion wählen wir alle Elemente aus, denen zuvor die Klasse `pending` zugewiesen wurde, und entfernen diese Klasse. So wird nur das zuletzt vorgemerkte Scroll-Snap-Ziel entsprechend gestaltet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchange`](/de/docs/Web/API/Window/scrollsnapchange_event)-Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event)-Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS-Eigenschaft {{cssxref("scroll-snap-type")}}
- [CSS-Scroll-Snap-Modul](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Scroll-Snap-Ereignisse verwenden](/de/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Scroll-Snap-Ereignisse](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
