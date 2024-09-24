---
title: "Dokument: Methode createEvent()"
short-title: createEvent()
slug: Web/API/Document/createEvent
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}

> [!WARNING]
> Viele Methoden, die mit `createEvent` verwendet werden, wie beispielsweise `initCustomEvent`, sind veraltet.
> Verwenden Sie stattdessen [Event-Konstruktoren](/de/docs/Web/API/CustomEvent).

Erstellt ein [Ereignis](/de/docs/Web/API/Event) des angegebenen Typs. Das
zurückgegebene Objekt sollte zuerst initialisiert werden und kann dann an
{{domxref("EventTarget.dispatchEvent")}} übergeben werden.

## Syntax

```js-nolint
createEvent(type)
```

### Parameter

- `type`
  - : Ein String, der den Typ des zu erstellenden Ereignisses darstellt. Mögliche Ereignistypen sind `"UIEvents"`, `"MouseEvents"`, `"MutationEvents"` und `"HTMLEvents"`. Siehe den Abschnitt [Anmerkungen](#anmerkungen) für Details.

### Rückgabewert

Ein [Event](/de/docs/Web/API/Event)-Objekt.

## Beispiele

```js
// Erstellen Sie das Ereignis.
const event = document.createEvent("Event");

// Definieren Sie, dass der Ereignisname 'build' ist.
event.initEvent("build", true, true);

// Hören Sie auf das Ereignis.
elem.addEventListener(
  "build",
  (e) => {
    // e.target entspricht elem
  },
  false,
);

// Ziel kann jedes Element oder ein anderer EventTarget sein.
elem.dispatchEvent(event);
```

## Anmerkungen

Ereignistyp-Strings, die für `createEvent()` geeignet sind, sind im
[DOM-Standard — siehe die Tabelle in Schritt 2](https://dom.spec.whatwg.org/#dom-document-createevent) aufgeführt. Beachten Sie, dass die meisten Ereignisobjekte jetzt Konstruktoren haben, die die modern empfohlene Methode zum Erstellen von Ereignisobjektinstanzen sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events)
