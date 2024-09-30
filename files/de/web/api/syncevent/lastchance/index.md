---
title: "SyncEvent: lastChance-Eigenschaft"
short-title: lastChance
slug: Web/API/SyncEvent/lastChance
l10n:
  sourceCommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{APIRef("Background Sync")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte Eigenschaft **`lastChance`** des [`SyncEvent`](/de/docs/Web/API/SyncEvent)-Interfaces gibt `true` zurück, wenn der Benutzeragent nach dem aktuellen Versuch keine weiteren Synchronisationsversuche unternimmt. Dies ist der Wert, der im `lastChance`-Parameter des [`SyncEvent()`](/de/docs/Web/API/SyncEvent/SyncEvent)-Konstruktors übergeben wird.

## Wert

Ein boolescher Wert, der angibt, ob der Benutzeragent nach dem aktuellen Versuch keine weiteren Synchronisationsversuche unternimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
