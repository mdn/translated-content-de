---
title: "Window: afterprint Ereignis"
short-title: afterprint
slug: Web/API/Window/afterprint_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}

Das **`afterprint`** Ereignis wird ausgelöst, nachdem das zugehörige Dokument mit dem Drucken begonnen hat oder die Druckvorschau geschlossen wurde.

Die [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event) und `afterprint` Ereignisse ermöglichen es Seiten, ihren Inhalt vor dem Beginn des Druckens zu ändern (vielleicht um z. B. ein Banner zu entfernen) und diese Änderungen dann nach Abschluss des Druckens wieder zurückzusetzen. Im Allgemeinen sollten Sie die Verwendung einer [`@media print`](/de/docs/Web/CSS/Guides/Media_queries/Using#targeting_media_types) CSS-Regel bevorzugen, aber es kann in einigen Fällen notwendig sein, diese Ereignisse zu verwenden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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
