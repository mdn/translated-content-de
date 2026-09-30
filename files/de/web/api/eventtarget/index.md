---
title: EventTarget
slug: Web/API/EventTarget
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`EventTarget`**-Schnittstelle wird von Objekten implementiert, die Ereignisse empfangen können und für die Listener registriert sein können. Anders ausgedrückt: Jedes Ziel eines Ereignisses implementiert die Methoden dieser Schnittstelle.

[`Element`](/de/docs/Web/API/Element) und seine untergeordneten Elemente sowie [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) sind die häufigsten Ereignisziele. Auch andere Objekte können Ereignisziele sein, beispielsweise [`IDBRequest`](/de/docs/Web/API/IDBRequest), [`AudioNode`](/de/docs/Web/API/AudioNode) und [`AudioContext`](/de/docs/Web/API/AudioContext).

Viele Ereignisziele (darunter Elemente, Dokumente und Fenster) unterstützen außerdem die [Registrierung von Event-Handlern](/de/docs/Web/API/Document_Object_Model/Events#registering_event_handlers) über `onevent`-Eigenschaften und -Attribute.

{{InheritanceDiagram}}

## Konstruktor

- [`EventTarget()`](/de/docs/Web/API/EventTarget/EventTarget)
  - : Erstellt eine neue Instanz eines `EventTarget`-Objekts.

## Instanzmethoden

- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
  - : Registriert einen Event-Handler für einen bestimmten Ereignistyp auf dem `EventTarget`.
- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
  - : Entfernt einen Event-Listener vom `EventTarget`.
- [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent)
  - : Löst ein Ereignis auf diesem `EventTarget` aus.
- [`EventTarget.when()`](/de/docs/Web/API/EventTarget/when) {{experimental_inline}}
  - : Gibt ein [`Observable`](/de/docs/Web/API/Observable)-Objekt zurück, das einen Stream von Ereignissen repräsentiert, die auf dem Ereignisziel ausgelöst werden, auf dem die Methode aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ereignisindex](/de/docs/Web/API/Document_Object_Model/Events#event_index)
- [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`Event`](/de/docs/Web/API/Event)-Schnittstelle
