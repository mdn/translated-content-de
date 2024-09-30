---
title: SyncEvent
slug: Web/API/SyncEvent
l10n:
  sourceCommit: aa38aff31533096459caed61424a6f20f9807a15
---

{{APIRef("Background Sync")}}{{AvailableInWorkers("service")}}

Die **`SyncEvent`**-Schnittstelle der [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API) repräsentiert eine Synchronisationsaktion, die auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) eines ServiceWorkers ausgelöst wird.

Diese Schnittstelle erbt von der [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)-Schnittstelle.

{{InheritanceDiagram}}

## Konstruktor

- [`SyncEvent()`](/de/docs/Web/API/SyncEvent/SyncEvent)
  - : Erstellt ein neues `SyncEvent`-Objekt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) und [`Event`](/de/docs/Web/API/Event)_.

- [`SyncEvent.tag`](/de/docs/Web/API/SyncEvent/tag) {{ReadOnlyInline}}
  - : Gibt den vom Entwickler definierten Bezeichner für dieses `SyncEvent` zurück.
- [`SyncEvent.lastChance`](/de/docs/Web/API/SyncEvent/lastChance) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Benutzeragent nach dem aktuellen Versuch keine weiteren Synchronisationsversuche unternehmen wird.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent) und [`Event`](/de/docs/Web/API/Event)_.

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
