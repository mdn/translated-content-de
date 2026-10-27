---
title: "Window: beforeprint-Ereignis"
short-title: beforeprint
slug: Web/API/Window/beforeprint_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("HTML DOM")}}

Das Ereignis **`beforeprint`** wird ausgelöst, wenn das zugehörige Dokument gedruckt oder in der Druckvorschau angezeigt werden soll.

Die Ereignisse [`afterprint`](/de/docs/Web/API/Window/afterprint_event) und `beforeprint` ermöglichen es Seiten, ihren Inhalt vor Beginn des Druckvorgangs zu ändern (etwa um ein Banner zu entfernen) und diese Änderungen nach Abschluss des Druckvorgangs wieder rückgängig zu machen. Im Allgemeinen sollten Sie dafür die CSS-At-Regel [`@media print`](/de/docs/Web/CSS/Guides/Media_queries/Using#targeting_media_types) verwenden. In manchen Fällen kann jedoch die Verwendung dieser Ereignisse erforderlich sein.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("beforeprint", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
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

Verwendung der Event-Handler-Eigenschaft `onbeforeprint` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onbeforeprint` hinzugefügte Event-Listener ersetzt werden):

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

- Zugehöriges Ereignis: [`afterprint`](/de/docs/Web/API/Window/afterprint_event)
