---
title: "Element: scrollsnapchanging Ereignis"
short-title: scrollsnapchanging
slug: Web/API/Element/scrollsnapchanging_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchanging`** Ereignis der [`Element`](/de/docs/Web/API/Element) Schnittstelle wird auf dem {{Glossary("Scroll_container", "Scroll-Container")}} ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel aussteht, d.h. es wird gewählt, wenn die aktuelle Scroll-Geste endet.

Speziell löst dieses Ereignis während einer Scroll-Geste aus, jedes Mal, wenn der Benutzer über potenzielle neue Snap-Ziele fährt. Zum Beispiel könnte der Benutzer langsam scrollen, indem er den Finger auf einem Touchscreen-Gerät zieht, oder die Maustaste auf einer Scroll-Leiste gedrückt hält und die Maus bewegt. `scrollsnapchanging` kann daher mehrmals für jede Scroll-Geste ausgelöst werden.

Es wird jedoch nicht für alle potenziellen Snap-Ziele ausgelöst, wenn eine Scroll-Geste über mehrere Snap-Ziele fährt. Vielmehr wird es nur für das letzte Ziel ausgelöst, auf dem das Snapping potenziell ruht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("scrollsnapchanging", (event) => { })

onscrollsnapchanging = (event) => { }
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), der vom generischen [`Event`](/de/docs/Web/API/Event) Typ erbt.

## Beispiele

### Grundlegende Verwendung

Angenommen, wir haben ein {{htmlelement("main")}} Element, das bedeutenden Inhalt enthält, der Scrollen verursacht:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>` Element kann in einen Scroll-Container verwandelt werden, der beim Scrollen zu seinen Kindern schnappt, indem eine Kombination der CSS-Eigenschaft {{cssxref("scroll-snap-type")}} und andere Eigenschaften verwendet werden. Zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Snippet würde das `scrollsnapchanging` Ereignis auf dem `<main>` Element auslösen, wenn eines seiner Kinder zu einem ausstehenden Snap-Ziel wird. In der Handler-Funktion setzen wir eine `pending` Klasse auf das Kind, das durch die [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) Eigenschaft referenziert wird, die verwendet werden könnte, um es anders zu stylen, wenn das Ereignis ausgelöst wird.

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

Zu Beginn der Funktion wählen wir alle Elemente aus, auf die zuvor die `pending` Klasse angewendet wurde, und entfernen sie, sodass nur das aktuellste ausstehende Snap-Ziel gestylt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event) Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS {{cssxref("scroll-snap-type")}} Eigenschaft
- [CSS Scroll Snap Modul](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
