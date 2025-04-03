---
title: "Dokument: scrollsnapchanging Ereignis"
short-title: scrollsnapchanging
slug: Web/API/Document/scrollsnapchanging_event
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchanging`** Ereignis des [`Document`](/de/docs/Web/API/Document)-Interfaces wird im {{Glossary("Scroll_container", "Scroll-Container")}} ausgelöst, wenn der Browser bestimmt, dass ein neues Scroll-Snap-Ziel ansteht, d.h. es wird ausgewählt, wenn die aktuelle Scroll-Geste endet.

Dieses Ereignis funktioniert ähnlich wie das [`Element`](/de/docs/Web/API/Element)-Interface-Ereignis [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event), außer dass das gesamte HTML-Dokument als der Scroll-Snap-Container gesetzt werden muss (d.h. {{cssxref("scroll-snap-type")}} ist auf das {{htmlelement("html")}}-Element gesetzt).

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

Angenommen, wir haben ein {{htmlelement("main")}}-Element, das signifikanten Inhalt enthält, der es zwingt zu scrollen:

```html
<main>
  <!-- Significant content -->
</main>
```

Das `<main>`-Element kann durch eine Kombination von CSS-Eigenschaften in einen Scroll-Container umgewandelt werden, zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

Wir können dann das Scroll-Snapping-Verhalten auf den scrollenden Inhalt implementieren, indem wir die {{cssxref("scroll-snap-type")}}-Eigenschaft auf das {{htmlelement("html")}}-Element anwenden:

```css
html {
  scroll-snap-type: block mandatory;
}
```

Der folgende JavaScript-Ausschnitt würde das `scrollsnapchanging`-Ereignis auf dem HTML-Dokument auslösen, wenn ein Kind des `<main>`-Elements ein anstehendes Snap-Ziel wird. In der Handler-Funktion setzen wir eine `pending`-Klasse auf das Kind, das durch die [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock)-Eigenschaft referenziert wird, die verwendet werden könnte, um es anders zu stylen, wenn das Ereignis ausgelöst wird.

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

Am Anfang der Funktion wählen wir alle Elemente aus, die zuvor die `pending`-Klasse hatten, und entfernen sie, damit nur das aktuellste anstehende Snap-Ziel gestylt wird.

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
- [Verwendung von Scroll-Snap-Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
