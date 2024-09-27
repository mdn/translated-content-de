---
title: CompositionEvent
slug: Web/API/CompositionEvent
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("UI Events")}}

Das DOM **`CompositionEvent`** repräsentiert Ereignisse, die auftreten, wenn der Benutzer indirekt Text eingibt.

{{InheritanceDiagram}}

## Konstruktor

- [`CompositionEvent()`](/de/docs/Web/API/CompositionEvent/CompositionEvent)
  - : Erstellt eine neue Instanz eines `CompositionEvent`-Objekts.

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`UIEvent`](/de/docs/Web/API/UIEvent), und ihrem Vorfahren — [`Event`](/de/docs/Web/API/Event)._

- [`CompositionEvent.data`](/de/docs/Web/API/CompositionEvent/data) {{ReadOnlyInline}}
  - : Gibt die Zeichen zurück, die durch die Eingabemethode erzeugt wurden, die das Ereignis ausgelöst hat; es variiert je nach Typ des Ereignisses, das das `CompositionEvent`-Objekt erzeugt hat.
- [`CompositionEvent.locale`](/de/docs/Web/API/CompositionEvent/locale) {{ReadOnlyInline}} {{deprecated_inline}} {{Non-standard_Inline}}
  - : Gibt das Gebietsschema der aktuellen Eingabemethode zurück (zum Beispiel das Tastaturlayout-Gebietsschema, wenn die Zusammensetzung mit [IME](/de/docs/Glossary/IME) verbunden ist).

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, [`UIEvent`](/de/docs/Web/API/UIEvent), und ihrem Vorfahren — [`Event`](/de/docs/Web/API/Event)._

- [`CompositionEvent.initCompositionEvent()`](/de/docs/Web/API/CompositionEvent/initCompositionEvent) {{deprecated_inline}}
  - : Initialisiert die Attribute eines `CompositionEvent`-Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [compositionstart](/de/docs/Web/API/Element/compositionstart_event)
- [compositionend](/de/docs/Web/API/Element/compositionend_event)
- [compositionupdate](/de/docs/Web/API/Element/compositionupdate_event)
- [UIEvent](/de/docs/Web/API/UIEvent)
- [Event](/de/docs/Web/API/Event)
