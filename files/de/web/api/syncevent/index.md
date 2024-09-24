---
title: SyncEvent
slug: Web/API/SyncEvent
l10n:
  sourceCommit: aa38aff31533096459caed61424a6f20f9807a15
---

{{APIRef("Background Sync")}}{{AvailableInWorkers("service")}}

Die **`SyncEvent`**-Schnittstelle der {{domxref("Background Synchronization API", "", "", "nocode")}} repräsentiert eine Synchronisationsaktion, die auf dem {{domxref("ServiceWorkerGlobalScope")}} eines ServiceWorkers ausgelöst wird.

Diese Schnittstelle erbt von der {{domxref("ExtendableEvent")}}-Schnittstelle.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("SyncEvent.SyncEvent", "SyncEvent()")}}
  - : Erstellt ein neues `SyncEvent`-Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von ihrem Elternteil, {{domxref("ExtendableEvent")}} und {{domxref("Event")}}_.

- {{domxref("SyncEvent.tag")}} {{ReadOnlyInline}}
  - : Gibt den vom Entwickler definierten Bezeichner für dieses `SyncEvent` zurück.
- {{domxref("SyncEvent.lastChance")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Benutzeragent nach dem aktuellen Versuch keine weiteren Synchronisationsversuche unternimmt.

## Instanzmethoden

_Erbt Methoden von ihrem Elternteil, {{domxref("ExtendableEvent")}} und {{domxref("Event")}}_.

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
