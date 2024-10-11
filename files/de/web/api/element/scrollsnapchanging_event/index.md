---
title: "Element: scrollsnapchanging Event"
short-title: scrollsnapchanging
slug: Web/API/Element/scrollsnapchanging_event
l10n:
  sourceCommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchanging`** Ereignis der [`Element`](/de/docs/Web/API/Element) Schnittstelle wird auf dem {{Glossary("Scroll_container", "Scroll-Container")}} ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel ansteht, d.h. es wird ausgewählt, wenn die aktuelle Scroll-Geste endet.

Insbesondere wird dieses Ereignis während einer Scroll-Geste ausgelöst, jedes Mal, wenn der Benutzer über potenzielle neue Snap-Ziele bewegt. Zum Beispiel könnte der Benutzer langsam scrollen, indem er seinen Finger auf einem Touchscreen-Gerät bewegt, oder die Maustaste auf einer Scroll-Leiste gedrückt hält und die Maus bewegt. `scrollsnapchanging` kann daher mehrmals für jede Scroll-Geste ausgelöst werden.

Es wird jedoch nicht bei allen potenziellen Snap-Zielen für eine Scroll-Geste ausgelöst, die über mehrere Snap-Ziele bewegt. Vielmehr wird es nur für das letzte Ziel ausgelöst, auf dem das Snapping potenziell ruhen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("scrollsnapchanging", (event) => {});

onscrollsnapchanging = (event) => {};
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), welches von dem generischen [`Event`](/de/docs/Web/API/Event) Typ erbt.

## Beispiele

### Grundlegende Nutzung

Angenommen, wir haben ein {{htmlelement("main")}}-Element, das erheblichen Inhalt enthält, wodurch es scrollt:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element kann in einen Scroll-Container verwandelt werden, der zu seinen Kindern schnellt, wenn gescrollt wird, indem eine Kombination der CSS {{cssxref("scroll-snap-type")}} Eigenschaft und andere Eigenschaften verwendet werden. Zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Beispiel würde das `scrollsnapchanging` Ereignis auf dem `<main>`-Element auslösen, wenn eines seiner Kinder ein anstehendes Snap-Ziel wird. In der Handler-Funktion setzen wir eine `pending`-Klasse auf das Kind, auf das durch die [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) Eigenschaft verwiesen wird, die verwendet werden könnte, um es anders zu stylen, wenn das Ereignis ausgelöst wird.

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

Zu Beginn der Funktion wählen wir alle Elemente aus, auf die zuvor die `pending`-Klasse angewendet wurde, und entfernen diese, sodass nur das zuletzt anstehende Snap-Ziel gestylt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event) Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS {{cssxref("scroll-snap-type")}} Eigenschaft
- [CSS scroll snap module](/de/docs/Web/CSS/CSS_scroll_snap)
- [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
