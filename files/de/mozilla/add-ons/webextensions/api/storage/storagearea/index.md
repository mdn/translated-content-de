---
title: storage.StorageArea
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

StorageArea ist ein Objekt, das einen Speicherbereich repräsentiert.

## Typ

Werte dieses Typs sind Objekte.

## Methoden

- {{WebExtAPIRef("storage.StorageArea.get()")}}
  - : Ruft ein oder mehrere Elemente aus dem Speicherbereich ab.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}}
  - : Ermittelt die Menge des Speicherplatzes (in Bytes), die von einem oder mehreren gespeicherten Elementen im Speicherbereich verwendet wird.
- {{WebExtAPIRef("storage.StorageArea.set()")}}
  - : Speichert ein oder mehrere Elemente im Speicherbereich. Wenn ein Element bereits existiert, wird dessen Wert aktualisiert.
- {{WebExtAPIRef("storage.StorageArea.setAccessLevel()")}}
  - : Legt das Zugriffslevel für den Speicherbereich fest.
- {{WebExtAPIRef("storage.StorageArea.remove()")}}
  - : Entfernt ein oder mehrere Elemente aus dem Speicherbereich.
- {{WebExtAPIRef("storage.StorageArea.clear()")}}
  - : Entfernt alle Elemente aus dem Speicherbereich.

## Ereignisse

- {{WebExtAPIRef("storage.StorageArea.onChanged")}}
  - : Wird ausgelöst, wenn sich ein oder mehrere Elemente im Speicherbereich ändern.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#type-StorageArea) API von Chromium. Diese Dokumentation stammt aus [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
