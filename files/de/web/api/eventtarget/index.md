---
title: EventTarget
slug: Web/API/EventTarget
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`EventTarget`**-Interface wird von Objekten implementiert, die Ereignisse empfangen können und möglicherweise Listener für diese haben.
Mit anderen Worten, jedes Ziel von Ereignissen implementiert die drei mit diesem Interface verbundenen Methoden.

[`Element`](/de/docs/Web/API/Element) und seine Kinder, ebenso wie [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window), sind die häufigsten Ereignisziele,
aber auch andere Objekte können Ereignisziele sein.
Zum Beispiel sind [`IDBRequest`](/de/docs/Web/API/IDBRequest), [`AudioNode`](/de/docs/Web/API/AudioNode) und [`AudioContext`](/de/docs/Web/API/AudioContext) ebenfalls Ereignisziele.

Viele Ereignisziele (einschließlich Elemente, Dokumente und Fenster) unterstützen auch das Setzen von [Ereignishandlern](/de/docs/Web/Events/Event_handlers) über `onevent`-Eigenschaften und Attribute.

{{InheritanceDiagram}}

## Konstruktor

- [`EventTarget()`](/de/docs/Web/API/EventTarget/EventTarget)
  - : Erstellt eine neue Instanz eines `EventTarget`-Objekts.

## Instanzmethoden

- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
  - : Registriert einen Ereignishandler für einen bestimmten Ereignistyp auf dem `EventTarget`.
- [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener)
  - : Entfernt einen Ereignislistener vom `EventTarget`.
- [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent)
  - : Löst ein Ereignis auf diesem `EventTarget` aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ereignisreferenz](/de/docs/Web/Events) – die im Plattform verfügbaren Ereignisse.
- [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events)
- [`Event`](/de/docs/Web/API/Event)-Schnittstelle
