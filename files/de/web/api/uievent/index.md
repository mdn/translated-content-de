---
title: UIEvent
slug: Web/API/UIEvent
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{APIRef("UI Events")}}

Die **`UIEvent`**-Schnittstelle repräsentiert einfache Benutzeroberflächenereignisse.

`UIEvent` leitet sich von [`Event`](/de/docs/Web/API/Event) ab. Obwohl die Methode [`UIEvent.initUIEvent()`](/de/docs/Web/API/UIEvent/initUIEvent) aus Gründen der Abwärtskompatibilität beibehalten wird, sollten Sie ein `UIEvent`-Objekt mit dem [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent) Konstruktor erstellen.

Verschiedene Schnittstellen sind direkte oder indirekte Nachkommen dieser Schnittstelle: [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`TouchEvent`](/de/docs/Web/API/TouchEvent), [`FocusEvent`](/de/docs/Web/API/FocusEvent), [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent), [`WheelEvent`](/de/docs/Web/API/WheelEvent), [`InputEvent`](/de/docs/Web/API/InputEvent) und [`CompositionEvent`](/de/docs/Web/API/CompositionEvent).

{{InheritanceDiagram}}

## Konstruktoren

- [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent)
  - : Erstellt ein `UIEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihres Elternteils, [`Event`](/de/docs/Web/API/Event)._

- [`UIEvent.detail`](/de/docs/Web/API/UIEvent/detail) {{ReadOnlyInline}}
  - : Gibt ein `long` mit Details über das Ereignis zurück, abhängig vom Ereignistyp.
- [`UIEvent.sourceCapabilities`](/de/docs/Web/API/UIEvent/sourceCapabilities) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Instanz der `InputDeviceCapabilities`-Schnittstelle zurück, die Informationen über das physische Gerät liefert, das ein Berührungsereignis erzeugt hat.
- [`UIEvent.view`](/de/docs/Web/API/UIEvent/view) {{ReadOnlyInline}}
  - : Gibt einen [WindowProxy](/de/docs/Glossary/WindowProxy) zurück, der die Ansicht enthält, die das Ereignis erzeugt hat.
- [`UIEvent.which`](/de/docs/Web/API/UIEvent/which) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt den numerischen `keyCode` der gedrückten Taste oder den Zeichenkode (`charCode`) für eine alphanumerische Taste zurück.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden ihres Elternteils, [`Event`](/de/docs/Web/API/Event)._

- [`UIEvent.initUIEvent()`](/de/docs/Web/API/UIEvent/initUIEvent) {{Deprecated_Inline}}
  - : Initialisiert ein `UIEvent`-Objekt. Wenn das Ereignis bereits gesendet wurde, macht diese Methode nichts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events)
- [`Event`](/de/docs/Web/API/Event)
