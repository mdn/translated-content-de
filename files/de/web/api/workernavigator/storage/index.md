---
title: "WorkerNavigator: storage-Eigenschaft"
short-title: storage
slug: Web/API/WorkerNavigator/storage
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{securecontext_header}}{{APIRef("Storage")}}{{AvailableInWorkers("worker")}}

Die **`storage`**-Eigenschaft des {{domxref("WorkerNavigator")}}-Interfaces ist eine schreibgeschützte Eigenschaft, die das Singleton-{{domxref("StorageManager")}}-Objekt zurückgibt, das verwendet wird, um auf die allgemeinen Speichermöglichkeiten des Browsers für die aktuelle Seite oder App zuzugreifen. Das zurückgegebene Objekt ermöglicht es Ihnen, die Persistenz von Datenspeichern zu prüfen und zu konfigurieren und ungefähr zu erfahren, wie viel Speicherplatz Ihr Browser noch für die lokale Speicherung zur Verfügung hat.

## Wert

Ein {{domxref("StorageManager")}}-Objekt, das Sie verwenden können, um die Persistenz für gespeicherte Daten beizubehalten und um ungefähr zu bestimmen, wie viel Platz für die Speicherung von Daten zur Verfügung steht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("StorageManager")}}
- {{domxref("WorkerNavigator")}}
