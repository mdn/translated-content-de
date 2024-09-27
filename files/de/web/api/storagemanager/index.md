---
title: StorageManager
slug: Web/API/StorageManager
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{securecontext_header}}{{APIRef("Storage")}} {{AvailableInWorkers}}

Das **`StorageManager`**-Interface der [Storage API](/de/docs/Web/API/Storage_API) bietet eine Schnittstelle zur Verwaltung von Persistenzberechtigungen und zur Schätzung des verfügbaren Speichers. Sie können einen Verweis auf dieses Interface über entweder [`navigator.storage`](/de/docs/Web/API/Navigator/storage) oder [`WorkerNavigator.storage`](/de/docs/Web/API/WorkerNavigator/storage) erhalten.

## Instanzmethoden

- [`StorageManager.estimate()`](/de/docs/Web/API/StorageManager/estimate)
  - : Gibt ein {{jsxref('Promise')}} zurück, das zu einem Objekt mit Nutzungs- und Quotenangaben für Ihren Ursprung aufgelöst wird.
- [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory)
  - : Wird verwendet, um einen Verweis auf ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt zu erhalten, das den Zugriff auf ein Verzeichnis und dessen Inhalte ermöglicht, die im [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) gespeichert sind. Gibt ein {{jsxref('Promise')}} zurück, das mit einem [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erfüllt wird.
- [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist)
  - : Gibt ein {{jsxref('Promise')}} zurück, das zu `true` aufgelöst wird, wenn der Benutzeragent in der Lage ist, den Speicher Ihrer Website zu sichern.
- [`StorageManager.persisted()`](/de/docs/Web/API/StorageManager/persisted)
  - : Gibt ein {{jsxref('Promise')}} zurück, das zu `true` aufgelöst wird, wenn die Speicherung für Ihre Website bereits gesichert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
