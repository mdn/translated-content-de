---
title: "Element: scrollsnapchange-Ereignis"
short-title: scrollsnapchange
slug: Web/API/Element/scrollsnapchange_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchange`**-Ereignis der [`Element`](/de/docs/Web/API/Element)-Schnittstelle wird am {{Glossary("Scroll_container", "Scroll-Container")}} ausgelöst, wenn am Ende eines Scrollvorgangs ein neues Scroll-Snap-Ziel ausgewählt wurde – unmittelbar bevor das zugehörige [`scrollend`](/de/docs/Web/API/Element/scrollend_event)-Ereignis ausgelöst wird.

Ein Scrollvorgang endet, wenn die nutzende Person das Scrollen innerhalb eines Scroll-Containers abschließt – beispielsweise per Touch-Geste oder durch Ziehen des Mauszeigers über eine Scrollleiste – und die Geste beendet.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("scrollsnapchange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onscrollsnapchange = (event) => { }
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

Das `<main>`-Element lässt sich mithilfe der CSS-Eigenschaft {{cssxref("scroll-snap-type")}} und weiterer Eigenschaften in einen Scroll-Container umwandeln, der beim Scrollen an seinen Kindelementen einrastet. Zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

Der folgende JavaScript-Code bewirkt, dass das `scrollsnapchange`-Ereignis auf dem `<main>`-Element ausgelöst wird, wenn eines seiner Kindelemente zum neu ausgewählten Snap-Ziel wird. In der Handler-Funktion weisen wir dem Kindelement, auf das die Eigenschaft [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) verweist, die Klasse `selected` zu. Damit lässt es sich beim Auslösen des Ereignisses als ausgewählt darstellen, beispielsweise durch eine Animation.

```js
const scrollingElem = document.querySelector("main");

scrollingElem.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.classList.add("selected");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event)-Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event)-Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS-Eigenschaft {{cssxref("scroll-snap-type")}}
- [CSS-Scroll-Snap-Modul](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Scroll-Snap-Ereignisse verwenden](/de/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
