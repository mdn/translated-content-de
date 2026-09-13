---
title: "Dokument: createEvent() Methode"
short-title: createEvent()
slug: Web/API/Document/createEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}

> [!WARNING]
> Viele Methoden, die mit `createEvent` verwendet werden, wie `initCustomEvent`, sind veraltet.
> Nutzen Sie stattdessen [event constructors](/de/docs/Web/API/CustomEvent).

Erzeugt ein [Event](/de/docs/Web/API/Event) des angegebenen Typs. Das zurückgegebene Objekt sollte zuerst initialisiert werden und kann dann an [`EventTarget.dispatchEvent`](/de/docs/Web/API/EventTarget/dispatchEvent) übergeben werden.

## Syntax

```js-nolint
createEvent(type)
```

### Parameter

- `type`
  - : Ein String, der den Typ des zu erstellenden Events darstellt. Mögliche Event-Typen umfassen `"UIEvents"`, `"MouseEvents"`, `"MutationEvents"` und `"HTMLEvents"`. Siehe den Abschnitt [Anmerkungen](#anmerkungen) für Details.

### Rückgabewert

Ein [Event](/de/docs/Web/API/Event)-Objekt.

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

Ereignistyp-Strings, die für die Übergabe an `createEvent()` geeignet sind, sind im [DOM-Standard — siehe die Tabelle in Schritt 2](https://dom.spec.whatwg.org/#dom-document-createevent) aufgelistet. Beachten Sie, dass die meisten Ereignisobjekte jetzt Konstruktoren haben, was die moderne empfohlene Methode zum Erstellen von Ereignisobjektinstanzen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erstellen und Auslösen von Ereignissen](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events)
