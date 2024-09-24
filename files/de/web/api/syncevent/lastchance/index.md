---
title: "SyncEvent: lastChance-Eigenschaft"
short-title: lastChance
slug: Web/API/SyncEvent/lastChance
l10n:
  sourceCommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{APIRef("Background Sync")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`lastChance`**-Eigenschaft der
{{domxref("SyncEvent")}}-Schnittstelle gibt `true` zurück, wenn der Benutzeragent nach dem aktuellen Versuch keine weiteren Synchronisierungsversuche unternehmen wird. Dies ist der Wert, der im `lastChance`-Parameter des {{domxref("SyncEvent.SyncEvent","SyncEvent()")}}-Konstruktors übergeben wird.

## Wert

Ein boolescher Wert, der angibt, ob der Benutzeragent nach dem aktuellen Versuch keine weiteren Synchronisierungsversuche unternehmen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
