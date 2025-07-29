---
title: EventTarget
slug: Web/API/EventTarget
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`EventTarget`** Interface wird von Objekten implementiert, die Ereignisse empfangen können und möglicherweise Listener für diese haben.
Mit anderen Worten, jedes Ziel von Ereignissen implementiert die drei Methoden, die mit diesem Interface verbunden sind.

[`Element`](/de/docs/Web/API/Element) und seine Kinder sowie [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) sind die häufigsten Ereignisziele, aber auch andere Objekte können Ereignisziele sein.
Zum Beispiel sind [`IDBRequest`](/de/docs/Web/API/IDBRequest), [`AudioNode`](/de/docs/Web/API/AudioNode) und [`AudioContext`](/de/docs/Web/API/AudioContext) ebenfalls Ereignisziele.

Viele Ereignisziele (einschließlich Elemente, Dokumente und Fenster) unterstützen auch das [Registrieren von Ereignishandlern](/de/docs/Web/API/Document_Object_Model/Events#registering_event_handlers) über `onevent`-Eigenschaften und Attribute.

{{InheritanceDiagram}}

## Konstruktor

- [`EventTarget()`](/de/docs/Web/API/EventTarget/EventTarget)
  - : Erstellt eine neue Instanz eines `EventTarget` Objekts.

## Instanzmethoden

- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
  - : Registriert einen Ereignishandler für einen bestimmten Ereignistyp auf dem `EventTarget`.
- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
  - : Entfernt einen Ereignislistener vom `EventTarget`.
- [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent)
  - : Sendet ein Ereignis an dieses `EventTarget`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ereignisindex](/de/docs/Web/API/Document_Object_Model/Events#event_index)
- [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`Event`](/de/docs/Web/API/Event) Interface
