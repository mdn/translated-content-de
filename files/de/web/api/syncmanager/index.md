---
title: SyncManager
slug: Web/API/SyncManager
l10n:
  sourceCommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{APIRef("Background Sync")}}{{AvailableInWorkers}}

Die **`SyncManager`**-Schnittstelle der {{domxref("Background Synchronization API", "", "", "nocode")}} bietet eine Schnittstelle zum Registrieren und Auflisten von Synchronisierungsregistrierungen.

## Instanzeigenschaften

Keine.

## Instanzmethoden

- {{domxref("SyncManager.register()")}}
  - : Erstellen Sie eine neue Synchronisierungsregistrierung und geben Sie ein {{jsxref("Promise")}} zurück.
- {{domxref("SyncManager.getTags()")}}
  - : Gibt eine Liste von Entwickler-definierten Bezeichnern für `SyncManager`-Registrierungen zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
