---
title: storage.StorageArea
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea
l10n:
  sourceCommit: 89d941878af42738cbd429acaa06789db7fa55f6
---

StorageArea ist ein Objekt, das einen Speicherbereich darstellt.

## Typ

Werte dieses Typs sind Objekte.

## Methoden

- {{WebExtAPIRef("storage.StorageArea.get()")}}
  - : Ruft ein oder mehrere Elemente aus dem Speicherbereich ab.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}}
  - : Ermittelt den Speicherplatz (in Bytes), der von einem oder mehreren im Speicherbereich gespeicherten Elementen verwendet wird.
- {{WebExtAPIRef("storage.StorageArea.getKeys()")}}
  - : Ruft die Schlüssel aller Elemente im Speicherbereich ab.
- {{WebExtAPIRef("storage.StorageArea.set()")}}
  - : Speichert ein oder mehrere Elemente im Speicherbereich. Wenn ein Element bereits existiert, wird sein Wert aktualisiert.
- {{WebExtAPIRef("storage.StorageArea.setAccessLevel()")}}
  - : Setzt die Zugriffsebene für den Speicherbereich.
- {{WebExtAPIRef("storage.StorageArea.remove()")}}
  - : Entfernt ein oder mehrere Elemente aus dem Speicherbereich.
- {{WebExtAPIRef("storage.StorageArea.clear()")}}
  - : Entfernt alle Elemente aus dem Speicherbereich.

## Ereignisse

- {{WebExtAPIRef("storage.StorageArea.onChanged")}}
  - : Wird ausgelöst, wenn sich ein oder mehrere Elemente im Speicherbereich ändern.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#type-StorageArea) API von Chromium. Diese Dokumentation ist abgeleitet von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
