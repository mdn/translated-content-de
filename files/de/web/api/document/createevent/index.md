---
title: "Dokument: Methode createEvent()"
short-title: createEvent()
slug: Web/API/Document/createEvent
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("DOM")}}{{deprecated_header}}

> [!WARNING]
> Viele Methoden, die mit `createEvent` verwendet werden, wie `initCustomEvent`, sind veraltet.
> Verwenden Sie stattdessen [Ereignis-Konstruktoren](/de/docs/Web/API/CustomEvent).

Erstellt ein [Ereignis](/de/docs/Web/API/Event) des angegebenen Typs. Das
zurückgegebene Objekt sollte zuerst initialisiert werden und kann dann an
[`EventTarget.dispatchEvent`](/de/docs/Web/API/EventTarget/dispatchEvent) übergeben werden.

## Syntax

```js-nolint
createEvent(type)
```

### Parameter

- `type`
  - : Ein String, der den Typ des zu erstellenden Ereignisses repräsentiert. Mögliche Ereignistypen sind `"UIEvents"`, `"MouseEvents"`, `"MutationEvents"` und `"HTMLEvents"`. Weitere Details finden Sie im Abschnitt [Anmerkungen](#anmerkungen).

### Rückgabewert

Ein [Ereignis](/de/docs/Web/API/Event)-Objekt.

## Beispiele

```js
// Create the event.
const event = document.createEvent("Event");

// Define that the event name is 'build'.
event.initEvent("build", true, true);

// Listen for the event.
elem.addEventListener("build", (e) => {
  // e.target matches elem
});

// Target can be any Element or other EventTarget.
elem.dispatchEvent(event);
```

## Anmerkungen

Ereignistyp-Strings, die für die Übergabe an `createEvent()` geeignet sind, sind im
[DOM-Standard — siehe die Tabelle in Schritt 2](https://dom.spec.whatwg.org/#dom-document-createevent) aufgelistet. Beachten Sie, dass die meisten Ereignisobjekte jetzt Konstruktoren haben, die die moderne empfohlene Methode zur Erstellung von Ereignisobjektinstanzen sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erstellen und Auslösen von Ereignissen](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events)
