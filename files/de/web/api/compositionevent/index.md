---
title: CompositionEvent
slug: Web/API/CompositionEvent
l10n:
  sourceCommit: cede06423af0242a18670246e1b25562d21c0004
---

{{APIRef("UI Events")}}

Das DOM **`CompositionEvent`** repräsentiert Ereignisse, die auftreten, weil der Benutzer indirekt Text eingibt.

{{InheritanceDiagram}}

## Konstruktor

- [`CompositionEvent()`](/de/docs/Web/API/CompositionEvent/CompositionEvent)
  - : Erstellt eine neue `CompositionEvent` Objektinstanz.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent), und ihres Vorfahren — [`Event`](/de/docs/Web/API/Event)._

- [`CompositionEvent.data`](/de/docs/Web/API/CompositionEvent/data) {{ReadOnlyInline}}
  - : Gibt die Zeichen zurück, die von der Eingabemethode generiert wurden, die das Ereignis ausgelöst hat; sie variieren je nach Art des Ereignisses, das das `CompositionEvent`-Objekt erzeugte.
- [`CompositionEvent.locale`](/de/docs/Web/API/CompositionEvent/locale) {{ReadOnlyInline}} {{deprecated_inline}} {{Non-standard_Inline}}
  - : Gibt das Gebietsschema der aktuellen Eingabemethode zurück (zum Beispiel das Tastaturlayout-Gebietsschema, wenn die Komposition mit einem {{Glossary("Input_method_editor", "Input method editor")}} verbunden ist).

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden ihrer Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent), und ihres Vorfahren — [`Event`](/de/docs/Web/API/Event)._

- [`CompositionEvent.initCompositionEvent()`](/de/docs/Web/API/CompositionEvent/initCompositionEvent) {{deprecated_inline}}
  - : Initialisiert die Attribute eines `CompositionEvent` Objekts.

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
