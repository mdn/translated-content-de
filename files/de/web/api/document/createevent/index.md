---
title: "Document: createEvent() Methode"
short-title: createEvent()
slug: Web/API/Document/createEvent
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}

> [!WARNING]
> Viele Methoden, die mit `createEvent` verwendet werden, wie `initCustomEvent`, sind veraltet.
> Verwenden Sie stattdessen [Event-Konstruktoren](/de/docs/Web/API/CustomEvent).

Erstellt ein [Ereignis](/de/docs/Web/API/Event) des angegebenen Typs. Das zurückgegebene Objekt sollte zunächst initialisiert und kann dann an [`EventTarget.dispatchEvent`](/de/docs/Web/API/EventTarget/dispatchEvent) übergeben werden.

## Syntax

```js-nolint
createEvent(type)
```

### Parameter

- `type`
  - : Ein String, der den Typ des zu erstellenden Ereignisses darstellt. Mögliche Ereignistypen sind `"UIEvents"`, `"MouseEvents"`, `"MutationEvents"` und `"HTMLEvents"`. Siehe den Abschnitt [Anmerkungen](#anmerkungen) für Details.

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

## Anmerkungen

Ereignistyp-Strings, die für die Übergabe an `createEvent()` geeignet sind, sind im [DOM-Standard — siehe die Tabelle in Schritt 2](https://dom.spec.whatwg.org/#dom-document-createevent) aufgeführt. Beachten Sie, dass die meisten Ereignisobjekte inzwischen Konstruktoren haben, die der moderne empfohlene Weg zur Erstellung von Ereignisobjektinstanzen sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ereignisse erstellen und auslösen](/de/docs/Web/Events/Creating_and_triggering_events)
