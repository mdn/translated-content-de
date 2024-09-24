---
title: CompositionEvent
slug: Web/API/CompositionEvent
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("UI Events")}}

Das DOM **`CompositionEvent`** repräsentiert Ereignisse, die auftreten, wenn der Benutzer Text indirekt eingibt.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("CompositionEvent.CompositionEvent()", "CompositionEvent()")}}
  - : Erstellt eine neue Instanz eines `CompositionEvent`-Objekts.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, {{domxref("UIEvent")}}, und ihrem Vorfahren — {{domxref("Event")}}._

- {{domxref("CompositionEvent.data")}} {{ReadOnlyInline}}
  - : Gibt die Zeichen zurück, die von der Eingabemethode erzeugt wurden, die das Ereignis ausgelöst hat; es variiert je nach Typ des Ereignisses, das das `CompositionEvent`-Objekt erzeugt hat.
- {{domxref("CompositionEvent.locale")}} {{ReadOnlyInline}} {{deprecated_inline}} {{Non-standard_Inline}}
  - : Gibt das Gebietsschema der aktuellen Eingabemethode zurück (zum Beispiel das Tastaturlayout-Gebietsschema, wenn die Zusammensetzung mit {{glossary("IME")}} verbunden ist).

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, {{domxref("UIEvent")}}, und ihrem Vorfahren — {{domxref("Event")}}._

- {{domxref("CompositionEvent.initCompositionEvent()")}} {{deprecated_inline}}
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
