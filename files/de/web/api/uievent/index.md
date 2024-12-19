---
title: UIEvent
slug: Web/API/UIEvent
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("UI Events")}}

Das **`UIEvent`**-Interface repräsentiert einfache Benutzeroberflächenereignisse.

`UIEvent` leitet sich von [`Event`](/de/docs/Web/API/Event) ab. Obwohl die Methode [`UIEvent.initUIEvent()`](/de/docs/Web/API/UIEvent/initUIEvent) für die Abwärtskompatibilität beibehalten wird, sollten Sie ein `UIEvent`-Objekt mit dem [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent)-Konstruktor erstellen.

Mehrere Schnittstellen sind direkte oder indirekte Nachkommen dieser: [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`TouchEvent`](/de/docs/Web/API/TouchEvent), [`FocusEvent`](/de/docs/Web/API/FocusEvent), [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent), [`WheelEvent`](/de/docs/Web/API/WheelEvent), [`InputEvent`](/de/docs/Web/API/InputEvent) und [`CompositionEvent`](/de/docs/Web/API/CompositionEvent).

{{InheritanceDiagram}}

## Konstruktoren

- [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent)
  - : Erstellt ein `UIEvent`-Objekt.

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`UIEvent.detail`](/de/docs/Web/API/UIEvent/detail) {{ReadOnlyInline}}
  - : Gibt ein `long` zurück mit Details über das Ereignis, abhängig vom Ereignistyp.
- [`UIEvent.sourceCapabilities`](/de/docs/Web/API/UIEvent/sourceCapabilities) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Instanz des `InputDeviceCapabilities`-Interfaces zurück, die Informationen über das physische Gerät bereitstellt, das ein Berührungsereignis generiert hat.
- [`UIEvent.view`](/de/docs/Web/API/UIEvent/view) {{ReadOnlyInline}}
  - : Gibt ein {{Glossary("WindowProxy", "WindowProxy")}} zurück, das die Ansicht enthält, die das Ereignis erzeugt hat.
- [`UIEvent.which`](/de/docs/Web/API/UIEvent/which) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt den numerischen `keyCode` der gedrückten Taste zurück oder den Zeichencode (`charCode`) für eine alphanumerische gedrückte Taste.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`UIEvent.initUIEvent()`](/de/docs/Web/API/UIEvent/initUIEvent) {{Deprecated_Inline}}
  - : Initialisiert ein `UIEvent`-Objekt. Wenn das Ereignis bereits ausgelöst wurde, tut diese Methode nichts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`Event`](/de/docs/Web/API/Event)
