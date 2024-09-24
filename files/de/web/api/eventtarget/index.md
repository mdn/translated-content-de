---
title: EventTarget
slug: Web/API/EventTarget
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`EventTarget`**-Interface wird von Objekten implementiert, die Ereignisse empfangen können und möglicherweise Listener für diese haben.
Mit anderen Worten, jedes Ziel von Ereignissen implementiert die drei mit diesem Interface verbundenen Methoden.

{{domxref("Element")}}, und seine Kinder, sowie {{domxref("Document")}} und {{domxref("Window")}}, sind die häufigsten Ereignisziele,
aber auch andere Objekte können Ereignisziele sein.
Zum Beispiel sind {{domxref("IDBRequest")}}, {{domxref("AudioNode")}} und {{domxref("AudioContext")}} ebenfalls Ereignisziele.

Viele Ereignisziele (einschließlich Elemente, Dokumente und Fenster) unterstützen auch das Setzen von [Ereignis-Handlern](/de/docs/Web/Events/Event_handlers) über `onevent`-Eigenschaften und -Attribute.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("EventTarget.EventTarget()", "EventTarget()")}}
  - : Erstellt eine neue Instanz eines `EventTarget`-Objekts.

## Instanzmethoden

- {{domxref("EventTarget.addEventListener()")}}
  - : Registriert einen Ereignis-Handler für einen bestimmten Ereignistyp auf dem `EventTarget`.
- {{domxref("EventTarget.removeEventListener()")}}
  - : Entfernt einen Ereignis-Listener vom `EventTarget`.
- {{domxref("EventTarget.dispatchEvent()")}}
  - : Versendet ein Ereignis an dieses `EventTarget`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ereignis-Referenz](/de/docs/Web/Events) – die in der Plattform verfügbaren Ereignisse.
- [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Event")}}-Interface
