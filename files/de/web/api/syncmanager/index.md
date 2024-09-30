---
title: SyncManager
slug: Web/API/SyncManager
l10n:
  sourceCommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{APIRef("Background Sync")}}{{AvailableInWorkers}}

Die **`SyncManager`**-Schnittstelle der [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API) bietet eine Schnittstelle zum Registrieren und Auflisten von Sync-Registrierungen.

## Instanzeigenschaften

Keine.

## Instanzmethoden

- [`SyncManager.register()`](/de/docs/Web/API/SyncManager/register)
  - : Erstellt eine neue Sync-Registrierung und gibt ein {{jsxref("Promise")}} zurück.
- [`SyncManager.getTags()`](/de/docs/Web/API/SyncManager/getTags)
  - : Gibt eine Liste von entwicklerdefinierten Identifikatoren für `SyncManager`-Registrierungen zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
