---
title: "Window: beforeprint-Event"
short-title: beforeprint
slug: Web/API/Window/beforeprint_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}

Das **`beforeprint`**-Event wird ausgelöst, wenn das zugehörige Dokument gedruckt oder für den Druckvorgang in der Vorschau angezeigt werden soll.

Die [`afterprint`](/de/docs/Web/API/Window/afterprint_event)- und `beforeprint`-Ereignisse ermöglichen es Seiten, ihren Inhalt zu ändern, bevor der Druck beginnt (zum Beispiel, um ein Banner zu entfernen) und diese Änderungen nach Abschluss des Drucks wieder zurückzusetzen. Im Allgemeinen sollten Sie die Verwendung einer [`@media print`](/de/docs/Web/CSS/Guides/Media_queries/Using#targeting_media_types) CSS-Regel bevorzugen, aber es kann notwendig sein, diese Ereignisse in einigen Fällen zu verwenden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder legen Sie eine Ereignishandlereigenschaft fest.

```js-nolint
addEventListener("beforeprint", (event) => { })

onbeforeprint = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Verwendung von `addEventListener()`:

```js
window.addEventListener("beforeprint", (event) => {
  console.log("Before print");
});
```

Verwendung der `onbeforeprint` Ereignishandlereigenschaft:

```js
window.onbeforeprint = (event) => {
  console.log("Before print");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`afterprint`](/de/docs/Web/API/Window/afterprint_event)
