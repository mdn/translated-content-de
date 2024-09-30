---
title: storage.local
slug: Mozilla/Add-ons/WebExtensions/API/storage/local
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Repräsentiert den `local` Speicherbereich. Elemente im `local` Speicher sind lokal auf dem Rechner, auf dem die Erweiterung installiert ist.

Der Browser kann die Menge der Daten einschränken, die eine Erweiterung im lokalen Speicherbereich speichern kann. Zum Beispiel:

- In Chrome ist eine Erweiterung auf das Speichern von 5MB Daten mit dieser API beschränkt, es sei denn, sie hat die [`"unlimitedStorage"` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#unlimited_storage).
- In Firefox unterliegt die Menge der Daten, die eine Erweiterung speichern kann, denselben [Speichergrenzen](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#storage_limits) wie bei IndexedDB-Datenbanken. Erweiterungen, die beabsichtigen, mehr Daten als dieses Limit zu speichern, benötigen die ["unlimitedStorage"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#unlimited_storage) Berechtigung. Allerdings können Erweiterungen mit der "unlimitedStorage" Berechtigung einen Quota-Exceeded-Fehler erhalten, wenn der durch den Speicher genutzte Speicherplatz das globale Limit überschreitet.

Wenn die Erweiterung deinstalliert wird, wird der zugehörige lokale Speicher gelöscht.

Außerdem können Sie in Firefox verhindern, dass der Browser den lokalen Speicher bei der Deinstallation löscht, indem Sie `about:config` aufrufen und diese Browsereinstellungen auf `true` setzen: `"keepUuidOnUninstall"` und `"keepStorageOnUninstall"`. Diese Funktionalität wird bereitgestellt, um Entwicklern zu helfen, ihre Erweiterungen zu testen. Erweiterungen selbst können diese Einstellungen nicht ändern.

Obwohl diese API der [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) ähnelt, wird empfohlen, `Window.localStorage` nicht im Erweiterungscode zu verwenden. Firefox löscht Daten, die von Erweiterungen über die localStorage-API gespeichert werden, in verschiedenen Szenarien, in denen Benutzer ihren Browserverlauf und ihre Daten aus Datenschutzgründen löschen. Daten, die mit der `storage.local` API gespeichert werden, werden in diesen Szenarien korrekt gespeichert.

## Methoden

Das `local` Objekt implementiert die Methoden, die im {{WebExtAPIRef("storage.StorageArea")}} Typ definiert sind:

- {{WebExtAPIRef("storage.StorageArea.get()", "storage.local.get()")}}
  - : Ruft ein oder mehrere Elemente aus dem Speicherbereich ab.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.local.getBytesInUse()")}}
  - : Ermittelt die Speichermenge (in Bytes), die für ein oder mehrere Elemente im Speicherbereich verwendet wird.
- {{WebExtAPIRef("storage.StorageArea.set()", "storage.local.set()")}}
  - : Speichert ein oder mehrere Elemente im Speicherbereich. Wenn das Element existiert, wird dessen Wert aktualisiert.
- {{WebExtAPIRef("storage.StorageArea.remove()", "storage.local.remove()")}}
  - : Entfernt ein oder mehrere Elemente aus dem Speicherbereich.
- {{WebExtAPIRef("storage.StorageArea.clear()", "storage.local.clear()")}}
  - : Entfernt alle Elemente aus dem Speicherbereich.

## Ereignisse

Das `local` Objekt implementiert die Ereignisse, die im {{WebExtAPIRef("storage.StorageArea")}} Typ definiert sind:

- {{WebExtAPIRef("storage.StorageArea.onChanged", "storage.local.onChanged")}}
  - : Wird ausgelöst, wenn sich ein oder mehrere Elemente im Speicherbereich ändern.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#property-local) API. Diese Dokumentation ist abgeleitet von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
