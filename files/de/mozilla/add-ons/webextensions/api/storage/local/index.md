---
title: storage.local
slug: Mozilla/Add-ons/WebExtensions/API/storage/local
l10n:
  sourceCommit: c4c42a1573a65a808f085999a4d8d97199e142d1
---

{{AddonSidebar}}

Repräsentiert den `local`-Speicherbereich. Elemente im `local`-Speicher sind lokal auf dem Computer, auf dem die Erweiterung installiert ist.

Der Browser kann die Menge der Daten einschränken, die eine Erweiterung im lokalen Speicherbereich speichern kann. Zum Beispiel:

- In Chrome ist eine Erweiterung darauf beschränkt, 5MB an Daten mit dieser API zu speichern, es sei denn, sie hat die [Berechtigung `"unlimitedStorage"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#unlimited_storage).
- In Firefox unterliegt die Menge der Daten, die eine Erweiterung speichern kann, den gleichen [Speicherbeschränkungen](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_much_data_can_be_stored) wie bei IndexedDB-Datenbanken. Erweiterungen, die mehr Daten speichern möchten als dieses Limit, benötigen die [Berechtigung "unlimitedStorage"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#unlimited_storage). Erweiterungen mit der "unlimitedStorage"-Berechtigung können jedoch einen Quota-Exceeded-Fehler erhalten, wenn der von Speicher genutzte Speicherplatz das globale Limit überschreitet.

Wenn die Erweiterung deinstalliert wird, wird ihr zugehöriger lokaler Speicher gelöscht.

Auch in Firefox können Sie verhindern, dass der Browser den lokalen Speicher bei Deinstallation löscht, indem Sie `about:config` aufrufen und diese Browsereinstellungen auf `true` setzen: `"keepUuidOnUninstall"` und `"keepStorageOnUninstall"`. Diese Funktion hilft Entwicklern, ihre Erweiterungen zu testen. Die Erweiterungen selbst können diese Einstellungen nicht ändern.

Obwohl diese API ähnlich der API [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) ist, wird empfohlen, dass Sie `Window.localStorage` im Erweiterungscode nicht verwenden. Firefox löscht die von Erweiterungen mithilfe der localStorage-API gespeicherten Daten in verschiedenen Szenarien, in denen Benutzer ihren Browserverlauf und ihre Daten aus Datenschutzgründen löschen. Daten, die mit der API `storage.local` gespeichert werden, bleiben in diesen Szenarien korrekt bestehen.

## Methoden

Das Objekt `local` implementiert die Methoden, die auf dem Typ {{WebExtAPIRef("storage.StorageArea")}} definiert sind:

- {{WebExtAPIRef("storage.StorageArea.get()", "storage.local.get()")}}
  - : Ruft ein oder mehrere Elemente aus dem Speicherbereich ab.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.local.getBytesInUse()")}}
  - : Ermittelt den Speicherplatz (in Bytes), der für ein oder mehrere Elemente im Speicherbereich verwendet wird.
- {{WebExtAPIRef("storage.StorageArea.set()", "storage.local.set()")}}
  - : Speichert ein oder mehrere Elemente im Speicherbereich. Wenn das Element existiert, wird sein Wert aktualisiert.
- {{WebExtAPIRef("storage.StorageArea.remove()", "storage.local.remove()")}}
  - : Entfernt ein oder mehrere Elemente aus dem Speicherbereich.
- {{WebExtAPIRef("storage.StorageArea.clear()", "storage.local.clear()")}}
  - : Entfernt alle Elemente aus dem Speicherbereich.

## Ereignisse

Das Objekt `local` implementiert die Ereignisse, die auf dem Typ {{WebExtAPIRef("storage.StorageArea")}} definiert sind:

- {{WebExtAPIRef("storage.StorageArea.onChanged", "storage.local.onChanged")}}
  - : Wird ausgelöst, wenn sich ein oder mehrere Elemente im Speicherbereich ändern.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#property-local) API. Diese Dokumentation stammt aus [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
