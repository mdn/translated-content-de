---
title: HashChangeEvent
slug: Web/API/HashChangeEvent
l10n:
  sourceCommit: 5b8e6663f4a6d7eea401de5b85d58661bf080c8e
---

{{APIRef("HTML DOM")}}

Die **`HashChangeEvent`**-Schnittstelle stellt Ereignisse dar, die ausgelöst werden, wenn sich der Fragmentbezeichner der URL geändert hat.

Der Fragmentbezeichner ist der Teil der URL, der auf das `#`-Symbol folgt (und dieses einschließt).

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("HashChangeEvent.HashChangeEvent", "HashChangeEvent()")}}
  - : Erstellt ein neues `HashChangeEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch die Eigenschaften ihres Elternteils, {{domxref("Event")}}._

- {{domxref("HashChangeEvent.newURL")}} {{ReadOnlyInline}}
  - : Die neue URL, zu der das Fenster navigiert.
- {{domxref("HashChangeEvent.oldURL")}} {{ReadOnlyInline}}
  - : Die vorherige URL, von der das Fenster navigiert wurde.

## Instanz-Methoden

_Diese Schnittstelle hat keine eigenen Methoden, erbt jedoch die Methoden ihres Elternteils, {{domxref("Event")}}._

## Beispiele

### Einfache Beispiel

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

- {{domxref("window.hashchange_event", "hashchange")}}
- {{domxref("window.popstate_event", "popstate")}}
