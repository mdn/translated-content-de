---
title: UIEvent
slug: Web/API/UIEvent
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{APIRef("UI Events")}}

Die **`UIEvent`**-Schnittstelle repräsentiert einfache Benutzeroberflächenereignisse.

`UIEvent` leitet sich von {{domxref("Event")}} ab. Obwohl die Methode {{domxref("UIEvent.initUIEvent()")}} aus Gründen der Rückwärtskompatibilität beibehalten wird, sollten Sie ein `UIEvent`-Objekt unter Verwendung des {{domxref("UIEvent.UIEvent", "UIEvent()")}}-Konstruktors erstellen.

Mehrere Schnittstellen sind direkte oder indirekte Nachkommen dieser: {{domxref("MouseEvent")}}, {{domxref("TouchEvent")}}, {{domxref("FocusEvent")}}, {{domxref("KeyboardEvent")}}, {{domxref("WheelEvent")}}, {{domxref("InputEvent")}} und {{domxref("CompositionEvent")}}.

{{InheritanceDiagram}}

## Konstruktoren

- {{domxref("UIEvent.UIEvent()", "UIEvent()")}}
  - : Erstellt ein `UIEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihres Elternteils, {{domxref("Event")}}._

- {{domxref("UIEvent.detail")}} {{ReadOnlyInline}}
  - : Gibt ein `long` mit Details über das Ereignis zurück, je nach Ereignistyp.
- {{domxref("UIEvent.sourceCapabilities")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Instanz der Schnittstelle `InputDeviceCapabilities` zurück, die Informationen über das physische Gerät bietet, das das Berührungsereignis erzeugt hat.
- {{domxref("UIEvent.view")}} {{ReadOnlyInline}}
  - : Gibt einen {{glossary("WindowProxy")}} zurück, der die Ansicht enthält, die das Ereignis erzeugt hat.
- {{domxref("UIEvent.which")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt den numerischen `keyCode` der gedrückten Taste oder den Zeichencode (`charCode`) für eine alphanumerische gedrückte Taste zurück.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden ihres Elternteils, {{domxref("Event")}}._

- {{domxref("UIEvent.initUIEvent()")}} {{Deprecated_Inline}}
  - : Initialisiert ein `UIEvent`-Objekt. Wenn das Ereignis bereits gesendet wurde, führt diese Methode nichts aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Event")}}
