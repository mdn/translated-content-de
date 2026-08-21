---
title: "Window: beforeprint-Ereignis"
short-title: beforeprint
slug: Web/API/Window/beforeprint_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Das **`beforeprint`** Ereignis wird ausgelöst, wenn das zugehörige Dokument gedruckt oder für den Druckvorschau vorbereitet wird.

Die [`afterprint`](/de/docs/Web/API/Window/afterprint_event) und `beforeprint` Ereignisse ermöglichen es Seiten, ihren Inhalt zu ändern, bevor der Druckvorgang beginnt (um beispielsweise ein Banner zu entfernen) und diese Änderungen nach Abschluss des Druckvorgangs wieder rückgängig zu machen. Im Allgemeinen sollten Sie die Verwendung einer [`@media print`](/de/docs/Web/CSS/Guides/Media_queries/Using#targeting_media_types) CSS-Regel vorziehen, aber in einigen Fällen kann es notwendig sein, diese Ereignisse zu verwenden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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

Verwendung der `onbeforeprint` Ereignis-Handler-Eigenschaft:

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
