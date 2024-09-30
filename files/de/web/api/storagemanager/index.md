---
title: StorageManager
slug: Web/API/StorageManager
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{securecontext_header}}{{APIRef("Storage")}} {{AvailableInWorkers}}

Das **`StorageManager`** Interface der [Storage API](/de/docs/Web/API/Storage_API) bietet eine Schnittstelle zur Verwaltung von Persistenzberechtigungen und zur Abschätzung des verfügbaren Speichers. Sie können eine Referenz auf dieses Interface entweder über [`navigator.storage`](/de/docs/Web/API/Navigator/storage) oder [`WorkerNavigator.storage`](/de/docs/Web/API/WorkerNavigator/storage) erhalten.

## Instanzmethoden

- [`StorageManager.estimate()`](/de/docs/Web/API/StorageManager/estimate)
  - : Gibt ein {{jsxref('Promise')}} zurück, das in ein Objekt aufgelöst wird, das Nutzungs- und Quota-Zahlen für Ihren Ursprung enthält.
- [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory)
  - : Wird verwendet, um eine Referenz auf ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) Objekt zu erhalten, das Zugriff auf ein Verzeichnis und dessen Inhalt im [origin privaten Dateisystem](/de/docs/Web/API/File_System_API/Origin_private_file_system) ermöglicht. Gibt ein {{jsxref('Promise')}} zurück, das sich mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) Objekt erfüllt.
- [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist)
  - : Gibt ein {{jsxref('Promise')}} zurück, das auf `true` aufgelöst wird, wenn der Benutzeragent den Speicher Ihrer Website beibehalten kann.
- [`StorageManager.persisted()`](/de/docs/Web/API/StorageManager/persisted)
  - : Gibt ein {{jsxref('Promise')}} zurück, das auf `true` aufgelöst wird, wenn die Persistenz für den Speicher Ihrer Website bereits gewährt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
