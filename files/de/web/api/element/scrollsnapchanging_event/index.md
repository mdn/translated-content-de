---
title: "Element: scrollsnapchanging-Event"
short-title: scrollsnapchanging
slug: Web/API/Element/scrollsnapchanging_event
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchanging`**-Event der [`Element`](/de/docs/Web/API/Element)-Schnittstelle wird auf dem {{Glossary("Scroll_container", "Scroll-Container")}} ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel ansteht, d.h. es wird ausgewählt, wenn die aktuelle Scroll-Geste endet.

Dieses Ereignis wird spezifisch während einer Scroll-Geste ausgelöst, jedes Mal, wenn der Benutzer über potenzielle neue Snap-Ziele fährt. Zum Beispiel könnte der Benutzer langsam scrollen, indem er seinen Finger auf einem Touchscreen-Gerät zieht, oder die Maustaste auf einer Scroll-Leiste gedrückt hält und die Maus bewegt. `scrollsnapchanging` kann daher mehrfach für jede Scroll-Geste ausgelöst werden.

Es wird jedoch nicht bei allen potenziellen Snap-Zielen für eine Scroll-Geste ausgelöst, die sich über mehrere Snap-Ziele bewegt. Vielmehr wird es nur für das letzte Ziel ausgelöst, auf dem das Snapping potenziell zur Ruhe kommt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("scrollsnapchanging", (event) => {});

onscrollsnapchanging = (event) => {};
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), das vom generischen [`Event`](/de/docs/Web/API/Event)-Typ erbt.

## Beispiele

### Grundlegende Nutzung

Angenommen, wir haben ein {{htmlelement("main")}}-Element, das signifikanten Inhalt enthält, der es zum Scrollen bringt:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element kann in einen Scroll-Container umgewandelt werden, der beim Scrollen zu seinen Kindern snappt, indem eine Kombination der CSS-Eigenschaft {{cssxref("scroll-snap-type")}} und anderer Eigenschaften verwendet wird. Zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Snippet würde das `scrollsnapchanging`-Ereignis auf dem `<main>`-Element auslösen, wenn eines seiner Kinder ein anstehendes Snap-Ziel wird. In der Handler-Funktion setzen wir eine `pending`-Klasse auf das Kind, auf das durch die [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Eigenschaft verwiesen wird, die verwendet werden könnte, um es anders zu stylen, wenn das Ereignis ausgelöst wird.

```js
scrollingElem.addEventListener("scrollsnapchanging", (event) => {
  // remove previously-set "pending" classes
  const pendingElems = document.querySelectorAll(".pending");
  pendingElems.forEach((elem) => {
    elem.classList.remove("pending");
  });

  // Set current pending snap target class to "pending"
  event.snapTargetBlock.classList.add("pending");
});
```

Zu Beginn der Funktion wählen wir alle Elemente aus, die zuvor die Klasse `pending` angewendet hatten, und entfernen sie, sodass nur das neueste anstehende Snap-Ziel gestylt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event) Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS {{cssxref("scroll-snap-type")}}-Eigenschaft
- [CSS Scroll Snap Modul](/de/docs/Web/CSS/CSS_scroll_snap)
- [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
