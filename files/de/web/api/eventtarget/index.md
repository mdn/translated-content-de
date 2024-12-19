---
title: EventTarget
slug: Web/API/EventTarget
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`EventTarget`** Interface wird von Objekten implementiert, die Ereignisse empfangen können und möglicherweise Listener für sie haben.
Mit anderen Worten, jedes Ziel von Ereignissen implementiert die drei mit diesem Interface verbundenen Methoden.

[`Element`](/de/docs/Web/API/Element) und seine Kinder sowie [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) sind die häufigsten Ereignisziele, 
aber andere Objekte können ebenfalls Ereignisziele sein.
Zum Beispiel sind [`IDBRequest`](/de/docs/Web/API/IDBRequest), [`AudioNode`](/de/docs/Web/API/AudioNode) und [`AudioContext`](/de/docs/Web/API/AudioContext) auch Ereignisziele.

Viele Ereignisziele (einschließlich Elemente, Dokumente und Fenster) unterstützen auch das Festlegen von [Ereignishandlern](/de/docs/Web/Events/Event_handlers) über `onevent` Eigenschaften und Attribute.

{{InheritanceDiagram}}

## Konstruktor

- [`EventTarget()`](/de/docs/Web/API/EventTarget/EventTarget)
  - : Erstellt eine neue Instanz eines `EventTarget`-Objekts.

## Instanzmethoden

- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
  - : Registriert einen Ereignishandler eines bestimmten Ereignistyps auf dem `EventTarget`.
- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
  - : Entfernt einen Ereignislistener vom `EventTarget`.
- [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent)
  - : Sendet ein Ereignis an dieses `EventTarget`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ereignisreferenz](/de/docs/Web/Events) – die im Plattform verfügbaren Ereignisse.
- [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`Event`](/de/docs/Web/API/Event) Interface
