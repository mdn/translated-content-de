---
title: HashChangeEvent
slug: Web/API/HashChangeEvent
l10n:
  sourceCommit: 5b8e6663f4a6d7eea401de5b85d58661bf080c8e
---

{{APIRef("HTML DOM")}}

Die **`HashChangeEvent`**-Schnittstelle repräsentiert Ereignisse, die ausgelöst werden, wenn sich der Fragmentbezeichner der URL geändert hat.

Der Fragmentbezeichner ist der Teil der URL, der auf das Symbol `#` folgt (und es einschließt).

{{InheritanceDiagram}}

## Konstruktor

- [`HashChangeEvent()`](/de/docs/Web/API/HashChangeEvent/HashChangeEvent)
  - : Erstellt ein neues `HashChangeEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch die Eigenschaften ihres Elternteils, [`Event`](/de/docs/Web/API/Event)._

- [`HashChangeEvent.newURL`](/de/docs/Web/API/HashChangeEvent/newURL) {{ReadOnlyInline}}
  - : Die neue URL, zu der das Fenster navigiert.
- [`HashChangeEvent.oldURL`](/de/docs/Web/API/HashChangeEvent/oldURL) {{ReadOnlyInline}}
  - : Die vorherige URL, von der das Fenster navigiert wurde.

## Instanz-Methoden

_Diese Schnittstelle hat keine eigenen Methoden, erbt jedoch die Methoden ihres Elternteils, [`Event`](/de/docs/Web/API/Event)._

## Beispiele

### Einfaches Beispiel

```js
function locationHashChanged() {
  if (location.hash === "#somecoolfeature") {
    somecoolfeature();
  }
}

window.addEventListener("hashchange", locationHashChanged);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandte Ereignisse

- [`hashchange`](/de/docs/Web/API/Window/hashchange_event)
- [`popstate`](/de/docs/Web/API/Window/popstate_event)
