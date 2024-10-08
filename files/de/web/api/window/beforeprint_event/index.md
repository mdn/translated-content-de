---
title: "Window: beforeprint Ereignis"
short-title: beforeprint
slug: Web/API/Window/beforeprint_event
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef}}

Das **`beforeprint`**-Ereignis wird ausgelöst, wenn das zugehörige Dokument gedruckt oder zur Druckvorschau angezeigt werden soll.

Die [`afterprint`](/de/docs/Web/API/Window/afterprint_event)- und `beforeprint`-Ereignisse erlauben es Seiten, ihren Inhalt zu ändern, bevor der Druckvorgang beginnt (zum Beispiel um ein Banner zu entfernen) und diese Änderungen nach dem Abschluss des Drucks wieder rückgängig zu machen. Im Allgemeinen sollten Sie bevorzugt eine [`@media print`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_types) CSS-Regel verwenden, aber es kann in einigen Fällen notwendig sein, diese Ereignisse zu nutzen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("beforeprint", (event) => {});
onbeforeprint = (event) => {};
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

Verwendung der `onbeforeprint`-Ereignishandlereigenschaft:

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
