---
title: "WorkerNavigator: storage-Eigenschaft"
short-title: storage
slug: Web/API/WorkerNavigator/storage
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{securecontext_header}}{{APIRef("Storage")}}{{AvailableInWorkers("worker")}}

Die **`storage`** schreibgeschützte Eigenschaft des [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Interfaces gibt das Singleton-Objekt [`StorageManager`](/de/docs/Web/API/StorageManager) zurück, das verwendet wird, um auf die allgemeinen Speicherkapazitäten des Browsers für die aktuelle Website oder App zuzugreifen. Das zurückgegebene Objekt ermöglicht es Ihnen, die Persistenz von Datenspeichern zu überprüfen und zu konfigurieren und ungefähr zu erfahren, wie viel zusätzlicher Speicherplatz Ihr Browser für die lokale Speicherung zur Verfügung hat.

## Wert

Ein [`StorageManager`](/de/docs/Web/API/StorageManager)-Objekt, das Sie verwenden können, um die Persistenz für gespeicherte Daten aufrechtzuerhalten und um grob zu bestimmen, wie viel Platz für die Speicherung von Daten verfügbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`StorageManager`](/de/docs/Web/API/StorageManager)
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
