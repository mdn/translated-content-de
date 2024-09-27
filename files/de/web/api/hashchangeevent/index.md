---
title: HashChangeEvent
slug: Web/API/HashChangeEvent
l10n:
  sourceCommit: 5b8e6663f4a6d7eea401de5b85d58661bf080c8e
---

{{APIRef("HTML DOM")}}

Die Schnittstelle **`HashChangeEvent`** repräsentiert Ereignisse, die ausgelöst werden, wenn sich der Fragmentbezeichner der URL ändert.

Der Fragmentbezeichner ist der Teil der URL, der dem `#`-Symbol folgt (und dieses einschließt).

{{InheritanceDiagram}}

## Konstruktor

- [`HashChangeEvent()`](/de/docs/Web/API/HashChangeEvent/HashChangeEvent)
  - : Erstellt ein neues `HashChangeEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch die Eigenschaften ihrer übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`HashChangeEvent.newURL`](/de/docs/Web/API/HashChangeEvent/newURL) {{ReadOnlyInline}}
  - : Die neue URL, zu der das Fenster navigiert.
- [`HashChangeEvent.oldURL`](/de/docs/Web/API/HashChangeEvent/oldURL) {{ReadOnlyInline}}
  - : Die vorherige URL, von der aus das Fenster navigierte.

## Instanz-Methoden

_Diese Schnittstelle hat keine eigenen Methoden, erbt jedoch die Methoden ihrer übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

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
