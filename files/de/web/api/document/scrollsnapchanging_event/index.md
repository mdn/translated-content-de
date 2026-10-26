---
title: "Dokument: scrollsnapchanging-Ereignis"
short-title: scrollsnapchanging
slug: Web/API/Document/scrollsnapchanging_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchanging`**-Ereignis des [`Document`](/de/docs/Web/API/Document)-Interfaces wird auf dem {{Glossary("Scroll_container", "Scroll-Container")}} ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel vorgemerkt ist, das heißt, dass es ausgewählt wird, sobald die aktuelle Scroll-Geste endet.

Dieses Ereignis funktioniert weitgehend wie das [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis des [`Element`](/de/docs/Web/API/Element)-Interfaces. Allerdings muss hier das gesamte HTML-Dokument als Scroll-Snap-Container festgelegt sein (das heißt, {{cssxref("scroll-snap-type")}} wird auf dem {{htmlelement("html")}}-Element gesetzt).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("scrollsnapchanging", (event) => { })
```

Alternativ können Sie dem [Event-Handler-Attribut](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces einen Wert zuweisen:

```js-nolint
onscrollsnapchanging = (event) => { }
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), das vom allgemeinen Typ [`Event`](/de/docs/Web/API/Event) erbt.

## Beispiele

### Grundlegende Verwendung

Angenommen, ein {{htmlelement("main")}}-Element enthält so viel Inhalt, dass darin gescrollt werden muss:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element kann mithilfe einer Kombination von CSS-Eigenschaften zu einem Scroll-Container gemacht werden, zum Beispiel:

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

Das folgende JavaScript-Snippet bewirkt, dass das `scrollsnapchanging`-Ereignis auf dem HTML-Dokument ausgelöst wird, wenn ein Kindelement des `<main>`-Elements zu einem vorgemerkten Snap-Ziel wird. In der Handler-Funktion setzen wir die Klasse `pending` auf dem Kindelement, auf das die Eigenschaft [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) verweist. Damit könnte es beim Auslösen des Ereignisses anders gestaltet werden.

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

Zu Beginn der Funktion wählen wir alle Elemente aus, denen zuvor die Klasse `pending` zugewiesen wurde, und entfernen sie. So wird nur das zuletzt vorgemerkte Snap-Ziel entsprechend gestaltet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchange`](/de/docs/Web/API/Document/scrollsnapchange_event)-Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event)-Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS-Eigenschaft {{cssxref("scroll-snap-type")}}
- [CSS-Scroll-Snap-Modul](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Scroll-Snap-Ereignisse verwenden](/de/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Scroll-Snap-Ereignisse](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
