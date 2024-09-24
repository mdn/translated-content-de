---
title: StorageManager
slug: Web/API/StorageManager
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{securecontext_header}}{{APIRef("Storage")}} {{AvailableInWorkers}}

Die **`StorageManager`**-Schnittstelle der [Storage API](/de/docs/Web/API/Storage_API) bietet eine Schnittstelle zur Verwaltung von Persistenzberechtigungen und zur Schätzung des verfügbaren Speichers. Sie können eine Referenz auf diese Schnittstelle entweder über {{domxref("navigator.storage")}} oder {{domxref("WorkerNavigator.storage")}} erhalten.

## Instanzmethoden

- {{domxref("StorageManager.estimate()")}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das zu einem Objekt aufgelöst wird, das Nutzungs- und Quotenwerte für Ihr Ursprung enthält.
- {{domxref("StorageManager.getDirectory()")}}
  - : Wird verwendet, um eine Referenz auf ein {{domxref("FileSystemDirectoryHandle")}}-Objekt zu erhalten, das den Zugriff auf ein Verzeichnis und dessen Inhalte ermöglicht, das im [ursprungsprivaten Dateisystem](/de/docs/Web/API/File_System_API/Origin_private_file_system) gespeichert ist. Gibt ein {{jsxref('Promise')}} zurück, das mit einem {{domxref("FileSystemDirectoryHandle")}}-Objekt erfüllt wird.
- {{domxref("StorageManager.persist()")}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das zu `true` aufgelöst wird, wenn der Benutzeragent in der Lage ist, den Speicher Ihrer Seite zu persistieren.
- {{domxref("StorageManager.persisted()")}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das zu `true` aufgelöst wird, wenn die Persistenzberechtigung für den Speicher Ihrer Seite bereits erteilt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
