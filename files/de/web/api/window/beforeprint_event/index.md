---
title: "Window: beforeprint-Ereignis"
short-title: beforeprint
slug: Web/API/Window/beforeprint_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`beforeprint`**-Ereignis wird ausgelöst, wenn das zugehörige Dokument gedruckt oder zur Druckvorschau vorbereitet wird.

Die [`afterprint`](/de/docs/Web/API/Window/afterprint_event)- und `beforeprint`-Ereignisse ermöglichen es Seiten, ihren Inhalt zu verändern, bevor der Druck beginnt (zum Beispiel um ein Banner zu entfernen) und diese Änderungen dann nach Abschluss des Drucks rückgängig zu machen. Im Allgemeinen sollten Sie die Verwendung von [`@media print`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_types) CSS-At-Rules bevorzugen, aber in einigen Fällen kann es notwendig sein, diese Ereignisse zu verwenden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

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

Verwendung der `onbeforeprint`-Ereignishandler-Eigenschaft:

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
