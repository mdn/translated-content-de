---
title: "Window: afterprint Ereignis"
short-title: afterprint
slug: Web/API/Window/afterprint_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Das **`afterprint`**-Ereignis wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.

Die [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event)- und `afterprint`-Ereignisse ermöglichen es Webseiten, ihren Inhalt vor dem Drucken zu ändern (z. B. um ein Banner zu entfernen) und diese Änderungen nach dem Druckvorgang wieder rückgängig zu machen. Im Allgemeinen sollten Sie die Verwendung einer [`@media print`](/de/docs/Web/CSS/Guides/Media_queries/Using#targeting_media_types) CSS-Regel bevorzugen, aber in einigen Fällen kann es notwendig sein, diese Ereignisse zu verwenden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("afterprint", (event) => { })

onafterprint = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Verwendung von `addEventListener()`:

```js
window.addEventListener("afterprint", (event) => {
  console.log("After print");
});
```

Verwendung der `onafterprint` Ereignis-Handler-Eigenschaft:

```js
window.onafterprint = (event) => {
  console.log("After print");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event)
