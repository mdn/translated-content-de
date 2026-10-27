---
title: "Window: afterprint-Ereignis"
short-title: afterprint
slug: Web/API/Window/afterprint_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("HTML DOM")}}

Das **`afterprint`**-Ereignis wird ausgelöst, nachdem der Druckvorgang für das zugehörige Dokument begonnen hat oder die Druckvorschau geschlossen wurde.

Mit den Ereignissen [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event) und `afterprint` können Seiten ihren Inhalt vor Beginn des Druckvorgangs ändern (beispielsweise ein Banner entfernen) und diese Änderungen nach Abschluss des Druckvorgangs rückgängig machen. Im Allgemeinen sollten Sie dafür vorzugsweise die CSS-At-Regel [`@media print`](/de/docs/Web/CSS/Guides/Media_queries/Using#targeting_media_types) verwenden. In manchen Fällen kann es jedoch erforderlich sein, diese Ereignisse zu nutzen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("afterprint", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
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

Verwendung der Event-Handler-Eigenschaft `onafterprint` (beachten Sie jedoch, dass dadurch andere über `onafterprint` hinzugefügte Event-Listener ersetzt werden, sofern vorhanden):

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
