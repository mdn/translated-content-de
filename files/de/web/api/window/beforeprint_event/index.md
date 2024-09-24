---
title: "Window: beforeprint Ereignis"
short-title: beforeprint
slug: Web/API/Window/beforeprint_event
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef}}

Das **`beforeprint`** Ereignis wird ausgelöst, wenn das zugehörige Dokument gedruckt oder zur Druckvorschau vorbereitet wird.

Die {{domxref("Window.afterprint_event", "afterprint")}} und `beforeprint` Ereignisse ermöglichen es Seiten, ihren Inhalt zu ändern, bevor das Drucken beginnt (zum Beispiel, um ein Banner zu entfernen) und diese Änderungen nach Abschluss des Druckvorgangs zurückzusetzen. Im Allgemeinen sollten Sie die Verwendung einer [`@media print`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_types) CSS At-Regel bevorzugen, aber in einigen Fällen kann es notwendig sein, diese Ereignisse zu verwenden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("beforeprint", (event) => {});
onbeforeprint = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

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

- Verwandte Ereignisse: {{domxref("Window/afterprint_event", "afterprint")}}
