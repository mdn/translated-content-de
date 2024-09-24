---
title: "Navigator: storage-Eigenschaft"
short-title: storage
slug: Web/API/Navigator/storage
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{securecontext_header}}{{APIRef("Storage")}}

Die **`Navigator.storage`**
Schreibgeschützte Eigenschaft gibt das Singleton-{{domxref("StorageManager")}}-Objekt zurück, das verwendet wird, um auf die gesamten Speichermöglichkeiten des Browsers für die aktuelle Website oder App zuzugreifen.
Das zurückgegebene Objekt ermöglicht es Ihnen, die Persistenz von Datenspeichern zu prüfen und zu konfigurieren sowie annähernd zu erfahren, wie viel zusätzlichen Speicher Ihr Browser für die lokale Speicherung zur Verfügung hat.

## Wert

Ein {{domxref("StorageManager")}}-Objekt, das Sie verwenden können, um die Persistenz für gespeicherte Daten zu erhalten und um ungefähr zu bestimmen, wie viel Speicherplatz für die Speicherung von Daten vorhanden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("StorageManager")}}
- {{domxref("Navigator")}}
