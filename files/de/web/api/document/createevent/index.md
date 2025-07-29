---
title: "Dokumentation: createEvent() Methode"
short-title: createEvent()
slug: Web/API/Document/createEvent
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("DOM")}}{{deprecated_header}}

> [!WARNING]
> Viele Methoden, die mit `createEvent` verwendet werden, wie `initCustomEvent`, sind veraltet.
> Verwenden Sie stattdessen [Event-Konstruktoren](/de/docs/Web/API/CustomEvent).

Erstellt ein [Event](/de/docs/Web/API/Event) des angegebenen Typs. Das zurückgegebene Objekt sollte zunächst initialisiert werden und kann dann an [`EventTarget.dispatchEvent`](/de/docs/Web/API/EventTarget/dispatchEvent) übergeben werden.

## Syntax

```js-nolint
createEvent(type)
```

### Parameter

- `type`
  - : Ein String, der den Typ des zu erstellenden Events darstellt. Mögliche Event-Typen sind `"UIEvents"`, `"MouseEvents"`, `"MutationEvents"` und `"HTMLEvents"`. Siehe den Abschnitt [Anmerkungen](#anmerkungen) für Details.

### Rückgabewert

Ein [Event](/de/docs/Web/API/Event)-Objekt.

## Beispiele

```js
// Create the event.
const event = document.createEvent("Event");

// Define that the event name is 'build'.
event.initEvent("build", true, true);

// Listen for the event.
elem.addEventListener(
  "build",
  (e) => {
    // e.target matches elem
  },
  false,
);

// Target can be any Element or other EventTarget.
elem.dispatchEvent(event);
```

## Anmerkungen

Event-Typ-Strings, die für `createEvent()` geeignet sind, sind im [DOM-Standard — siehe die Tabelle in Schritt 2](https://dom.spec.whatwg.org/#dom-document-createevent) aufgeführt. Beachten Sie, dass die meisten Event-Objekte jetzt Konstruktoren haben, die der moderne empfohlene Weg zur Erstellung von Event-Objektinstanzen sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erstellen und Auslösen von Events](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events)
