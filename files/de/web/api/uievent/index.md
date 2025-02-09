---
title: UIEvent
slug: Web/API/UIEvent
l10n:
  sourceCommit: 63d0c539650bee867018575bb45c14114f154997
---

{{APIRef("UI Events")}}

Das **`UIEvent`**-Interface repräsentiert einfache Benutzeroberflächenereignisse. Es ist Teil der [UI Events](/de/docs/Web/API/UI_Events)-API, die verschiedene Ereignistypen und Schnittstellen im Zusammenhang mit Benutzerinteraktionen umfasst.

`UIEvent` leitet sich von [`Event`](/de/docs/Web/API/Event) ab. Obwohl die Methode [`UIEvent.initUIEvent()`](/de/docs/Web/API/UIEvent/initUIEvent) aus Gründen der Rückwärtskompatibilität beibehalten wird, sollten Sie ein `UIEvent`-Objekt mit dem [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent)-Konstruktor erstellen.

Mehrere Schnittstellen sind direkte oder indirekte Nachfolger von `UIEvent`: [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`TouchEvent`](/de/docs/Web/API/TouchEvent), [`FocusEvent`](/de/docs/Web/API/FocusEvent), [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent), [`WheelEvent`](/de/docs/Web/API/WheelEvent), [`InputEvent`](/de/docs/Web/API/InputEvent) und [`CompositionEvent`](/de/docs/Web/API/CompositionEvent).

{{InheritanceDiagram}}

## Konstruktoren

- [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent)
  - : Erstellt ein `UIEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihres Elternteils, [`Event`](/de/docs/Web/API/Event)._

- [`UIEvent.detail`](/de/docs/Web/API/UIEvent/detail) {{ReadOnlyInline}}
  - : Gibt ein `long` mit Details über das Ereignis zurück, abhängig vom Ereignistyp.
- [`UIEvent.sourceCapabilities`](/de/docs/Web/API/UIEvent/sourceCapabilities) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Instanz der `InputDeviceCapabilities`-Schnittstelle zurück, die Informationen über das physische Gerät bereitstellt, das ein Touch-Ereignis erzeugt hat.
- [`UIEvent.view`](/de/docs/Web/API/UIEvent/view) {{ReadOnlyInline}}
  - : Gibt einen {{Glossary("WindowProxy", "WindowProxy")}} zurück, der die Ansicht enthält, die das Ereignis generiert hat.
- [`UIEvent.which`](/de/docs/Web/API/UIEvent/which) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt den numerischen `keyCode` der gedrückten Taste oder den Zeichen-Code (`charCode`) für eine gedrückte alphanumerische Taste zurück.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden ihres Elternteils, [`Event`](/de/docs/Web/API/Event)._

- [`UIEvent.initUIEvent()`](/de/docs/Web/API/UIEvent/initUIEvent) {{Deprecated_Inline}}
  - : Initialisiert ein `UIEvent`-Objekt. Wenn das Ereignis bereits ausgelöst wurde, bewirkt diese Methode nichts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [UI Events API](/de/docs/Web/API/UI_Events)
- [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`Event`](/de/docs/Web/API/Event)
