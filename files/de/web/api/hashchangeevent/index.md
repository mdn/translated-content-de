---
title: HashChangeEvent
slug: Web/API/HashChangeEvent
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("HTML DOM")}}

Das **`HashChangeEvent`**-Interface repräsentiert Ereignisse, die ausgelöst werden, wenn sich der Fragmentbezeichner der URL geändert hat.

Der Fragmentbezeichner ist der Teil der URL, der dem `#`-Symbol folgt (und es einschließt).

{{InheritanceDiagram}}

## Konstruktor

- [`HashChangeEvent()`](/de/docs/Web/API/HashChangeEvent/HashChangeEvent)
  - : Erstellt ein neues `HashChangeEvent`-Objekt.

## Instanzeigenschaften

_Diese Schnittstelle erbt auch die Eigenschaften ihres Elternteils, [`Event`](/de/docs/Web/API/Event)._

- [`HashChangeEvent.newURL`](/de/docs/Web/API/HashChangeEvent/newURL) {{ReadOnlyInline}}
  - : Die neue URL, zu der das Fenster navigiert.
- [`HashChangeEvent.oldURL`](/de/docs/Web/API/HashChangeEvent/oldURL) {{ReadOnlyInline}}
  - : Die vorherige URL, von der das Fenster navigiert wurde.

## Instanzmethoden

_Diese Schnittstelle hat keine eigenen Methoden, erbt jedoch die Methoden ihres Elternteils, [`Event`](/de/docs/Web/API/Event)._

## Beispiele

### Einfaches Beispiel

```js
function locationHashChanged() {
  if (location.hash === "#some-cool-feature") {
    someCoolFeature();
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
