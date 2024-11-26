---
title: "Dokumentation: createEvent() Methode"
short-title: createEvent()
slug: Web/API/Document/createEvent
l10n:
  sourceCommit: 08e04f121ea7b3a55e6ef47782d2d82fb053ca88
---

{{APIRef("DOM")}}{{deprecated_header}}

> [!WARNING]
> Viele Methoden, die mit `createEvent` verwendet werden, wie zum Beispiel `initCustomEvent`, sind veraltet.
> Verwenden Sie stattdessen [Ereignis-Konstruktoren](/de/docs/Web/API/CustomEvent).

Erstellt ein [Ereignis](/de/docs/Web/API/Event) des angegebenen Typs. Das zurückgegebene Objekt sollte zuerst initialisiert werden und kann dann an [`EventTarget.dispatchEvent`](/de/docs/Web/API/EventTarget/dispatchEvent) übergeben werden.

## Syntax

```js-nolint
createEvent(type)
```

### Parameter

- `type`
  - : Ein String, der den Typ des zu erstellenden Ereignisses darstellt. Mögliche Ereignistypen sind `"UIEvents"`, `"MouseEvents"`, `"MutationEvents"` und `"HTMLEvents"`. Einzelheiten finden Sie im Abschnitt [Hinweise](#hinweise).

### Rückgabewert

Ein [Event](/de/docs/Web/API/Event) Objekt.

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

## Hinweise

Geeignete Ereignistyp-Strings für die Übergabe an `createEvent()` sind im [DOM-Standard — siehe die Tabelle in Schritt 2](https://dom.spec.whatwg.org/#dom-document-createevent) aufgeführt. Beachten Sie, dass die meisten Ereignisobjekte jetzt Konstruktoren haben, die die moderne empfohlene Methode zur Erstellung von Ereignisobjektinstanzen sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events)
