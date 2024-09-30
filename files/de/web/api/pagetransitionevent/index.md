---
title: PageTransitionEvent
slug: Web/API/PageTransitionEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

Das **`PageTransitionEvent`**-Ereignisobjekt steht innerhalb von Handlerfunktionen für die Ereignisse [`pageshow`](/de/docs/Web/API/Window/pageshow_event) und [`pagehide`](/de/docs/Web/API/Window/pagehide_event) zur Verfügung, die ausgelöst werden, wenn ein Dokument geladen oder entladen wird.

{{InheritanceDiagram}}

## Konstruktor

- [`PageTransitionEvent()`](/de/docs/Web/API/PageTransitionEvent/PageTransitionEvent)
  - : Erstellt ein neues `PageTransitionEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`PageTransitionEvent.persisted`](/de/docs/Web/API/PageTransitionEvent/persisted) {{ReadOnlyInline}}
  - : Gibt an, ob das Dokument aus einem Cache geladen wird.

## Beispiel

### HTML

```html
<!doctype html>
<html lang="en-US">
  <body></body>
</html>
```

### JavaScript

```js
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    alert("The page was cached by the browser");
  } else {
    alert("The page was NOT cached by the browser");
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`pageshow`](/de/docs/Web/API/Window/pageshow_event) Ereignis
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event) Ereignis
