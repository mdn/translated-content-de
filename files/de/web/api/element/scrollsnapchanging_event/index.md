---
title: "Element: scrollsnapchanging-Ereignis"
short-title: scrollsnapchanging
slug: Web/API/Element/scrollsnapchanging_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef}}{{SeeCompatTable}}

Das **`scrollsnapchanging`**-Ereignis der [`Element`](/de/docs/Web/API/Element)-Schnittstelle wird auf dem {{Glossary("Scroll_container", "Scroll-Container")}} ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel ansteht, also ausgewählt wird, sobald die aktuelle Scroll-Geste endet.

Dieses Ereignis wird während einer Scroll-Geste jedes Mal ausgelöst, wenn der Benutzer ein potenzielles neues Snap-Ziel erreicht. Beispielsweise kann der Benutzer langsam scrollen, indem er seinen Finger über den Touchscreen zieht, oder die Maustaste auf einer Bildlaufleiste gedrückt halten und die Maus bewegen. `scrollsnapchanging` kann daher während einer einzelnen Scroll-Geste mehrfach ausgelöst werden.

Bei einer Scroll-Geste, die über mehrere potenzielle Snap-Ziele führt, wird es jedoch nicht für alle diese Ziele ausgelöst. Stattdessen wird es nur für das letzte Ziel ausgelöst, an dem der Scrollvorgang möglicherweise einrastet.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("scrollsnapchanging", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onscrollsnapchanging = (event) => { }
```

## Ereignistyp

Ein [`SnapEvent`](/de/docs/Web/API/SnapEvent), das vom allgemeinen Typ [`Event`](/de/docs/Web/API/Event) erbt.

## Beispiele

### Grundlegende Verwendung

Angenommen, wir haben ein {{htmlelement("main")}}-Element mit so viel Inhalt, dass es gescrollt werden kann:

```html
<main>
  <!-- Significant content -->
</main>
```

Mit der CSS-Eigenschaft {{cssxref("scroll-snap-type")}} und weiteren Eigenschaften lässt sich das `<main>`-Element in einen Scroll-Container umwandeln, der beim Scrollen an seinen Kindelementen einrastet. Zum Beispiel:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

Der folgende JavaScript-Code führt dazu, dass das `scrollsnapchanging`-Ereignis auf dem `<main>`-Element ausgelöst wird, wenn eines seiner Kindelemente zu einem anstehenden Snap-Ziel wird. In der Handler-Funktion weisen wir dem Kindelement, auf das die Eigenschaft [`snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) verweist, die Klasse `pending` zu. So kann es beim Auslösen des Ereignisses anders gestaltet werden.

Zu Beginn der Funktion wählen wir alle Elemente aus, denen zuvor die Klasse `pending` zugewiesen wurde, und entfernen die Klasse. Dadurch wird nur das zuletzt anstehende Snap-Ziel entsprechend gestaltet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event)-Ereignis
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event)-Ereignis
- [`SnapEvent`](/de/docs/Web/API/SnapEvent)
- CSS-Eigenschaft {{cssxref("scroll-snap-type")}}
- [CSS-Scroll-Snap-Modul](/de/docs/Web/CSS/Guides/Scroll_snap)
- [Scroll-Snap-Ereignisse verwenden](/de/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) auf developer.chrome.com (2024)
