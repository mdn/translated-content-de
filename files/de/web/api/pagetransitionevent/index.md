---
title: PageTransitionEvent
slug: Web/API/PageTransitionEvent
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

Das **`PageTransitionEvent`** Veranstaltungsobjekt ist innerhalb von Handlerfunktionen für die [`pageshow`](/de/docs/Web/API/Window/pageshow_event) und [`pagehide`](/de/docs/Web/API/Window/pagehide_event) Ereignisse verfügbar, die ausgelöst werden, wenn ein Dokument geladen oder entladen wird.

{{InheritanceDiagram}}

## Konstruktor

- [`PageTransitionEvent()`](/de/docs/Web/API/PageTransitionEvent/PageTransitionEvent)
  - : Erstellt ein neues `PageTransitionEvent` Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Objekt, [`Event`](/de/docs/Web/API/Event)._

- [`PageTransitionEvent.persisted`](/de/docs/Web/API/PageTransitionEvent/persisted) {{ReadOnlyInline}}
  - : Gibt an, ob das Dokument aus einem Cache geladen wird.

## Beispiel

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
