---
title: "Element: scrollsnapchanging Ereignis"
short-title: scrollsnapchanging
slug: Web/API/Element/scrollsnapchanging_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchanging`** Ereignis der [`Element`](/de/docs/Web/API/Element) Schnittstelle wird im {{Glossary("Scroll_container", "Scroll-Container")}} ausgelöst, wenn der Browser feststellt, dass ein neues Ziel für das Scroll-Snap ansteht, d.h. es wird ausgewählt, wenn die aktuelle Scrollgeste endet.

Dieses Ereignis wird spezifisch während einer Scrollgeste ausgelöst, jedes Mal, wenn der Benutzer über potenzielle neue Snap-Ziele bewegt. Zum Beispiel könnte der Benutzer langsam scrollen, indem er seinen Finger auf einem Touchscreen-Gerät bewegt, oder die Maustaste auf einer Bildlaufleiste gedrückt hält und die Maus bewegt. `scrollsnapchanging` kann daher mehrmals für jede Scrollgeste ausgelöst werden.

Es wird jedoch nicht für alle potenziellen Snap-Ziele einer Scrollgeste ausgelöst, die über mehrere Snap-Ziele hinweg bewegt wird. Vielmehr wird es nur für das letzte Ziel ausgelöst, auf dem das Snap möglicherweise verbleibt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("scrollsnapchanging", (event) => { })

onscrollsnapchanging = (event) => { }
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), welches von dem generischen [`Event`](/de/docs/Web/API/Event) Typ erbt.

## Beispiele

### Grundlegende Verwendung

Angenommen, wir haben ein {{htmlelement("main")}} Element mit erheblichem Inhalt, der zum Scrollen führt:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>` Element kann in einen Scroll-Container verwandelt werden, der beim Scrollen zu seinen Kindern schnappt, indem eine Kombination der CSS-Eigenschaften {{cssxref("scroll-snap-type")}} und anderer Eigenschaften verwendet wird. Zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

Das folgende JavaScript-Snippet würde das `scrollsnapchanging` Ereignis beim `<main>` Element auslösen, wenn eines seiner Kinder ein ausstehendes Snap-Ziel wird. In der Handler-Funktion setzen wir eine `pending` Klasse auf das durch die [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) Eigenschaft referenzierte Kind, die verwendet werden könnte, um es anders zu stylen, wenn das Ereignis ausgelöst wird.

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

Zu Beginn der Funktion wählen wir alle Elemente aus, die zuvor die `pending` Klasse angewendet hatten und entfernen diese, sodass nur das neueste ausstehende Snap-Ziel gestylt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event) Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS {{cssxref("scroll-snap-type")}} Eigenschaft
- [CSS scroll snap Modul](/de/docs/Web/CSS/CSS_scroll_snap)
- [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll-Snap-Ereignisse](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
