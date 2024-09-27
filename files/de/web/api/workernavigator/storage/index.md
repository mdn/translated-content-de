---
title: "WorkerNavigator: storage-Eigenschaft"
short-title: storage
slug: Web/API/WorkerNavigator/storage
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{securecontext_header}}{{APIRef("Storage")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`storage`**-Eigenschaft des [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Interfaces gibt das Singleton-Objekt [`StorageManager`](/de/docs/Web/API/StorageManager) zurück, das verwendet wird, um auf die allgemeinen Speichermöglichkeiten des Browsers für die aktuelle Website oder App zuzugreifen. Das zurückgegebene Objekt erlaubt es, die Persistenz von Datenspeichern zu prüfen und zu konfigurieren sowie ungefähr zu erfahren, wie viel Speicherplatz der Browser für die lokale Speicherung noch verfügbar hat.

## Wert

Ein [`StorageManager`](/de/docs/Web/API/StorageManager)-Objekt, das verwendet werden kann, um die Persistenz für gespeicherte Daten aufrechtzuerhalten und um grob zu bestimmen, wie viel Platz für die Speicherung von Daten vorhanden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`StorageManager`](/de/docs/Web/API/StorageManager)
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
