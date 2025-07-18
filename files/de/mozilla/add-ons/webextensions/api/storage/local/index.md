---
title: storage.local
slug: Mozilla/Add-ons/WebExtensions/API/storage/local
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Repräsentiert den `local`-Speicherbereich. Elemente im `local`-Speicher sind lokal auf dem Rechner, auf dem die Erweiterung installiert ist.

Der Browser kann die Menge an Daten beschränken, die eine Erweiterung im lokalen Speicherbereich speichern kann. Zum Beispiel:

- In Chrome ist eine Erweiterung auf das Speichern von 5 MB Daten mit dieser API beschränkt, es sei denn, sie hat die Berechtigung [`"unlimitedStorage"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#unlimited_storage).
- In Firefox unterliegt die Datenmenge, die eine Erweiterung speichern kann, denselben [Speicherbeschränkungen](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_much_data_can_be_stored) wie bei IndexedDB-Datenbanken. Erweiterungen, die beabsichtigen, mehr Daten als dieses Limit zu speichern, benötigen die Berechtigung ["unlimitedStorage"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#unlimited_storage). Erweiterungen mit der "unlimitedStorage"-Berechtigung können jedoch einen Quota exceeded error erhalten, wenn der durch den Speicher genutzte Speicherplatz das globale Limit überschreitet.

Wenn die Erweiterung deinstalliert wird, wird ihr zugehöriger lokal gespeicherter Speicher gelöscht.

Auch in Firefox können Sie verhindern, dass der Browser den lokalen Speicher beim Deinstallieren löscht, indem Sie `about:config` besuchen und diese Browsereinstellungen auf `true` setzen: `"keepUuidOnUninstall"` und `"keepStorageOnUninstall"`. Diese Funktion wird bereitgestellt, um Entwicklern bei der Testung ihrer Erweiterungen zu helfen. Erweiterungen selbst können diese Voreinstellungen nicht ändern.

Obwohl diese API der [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) ähnlich ist, wird empfohlen, `Window.localStorage` im Erweiterungscode nicht zu verwenden. Firefox löscht Daten, die von Erweiterungen mit der localStorage-API gespeichert wurden, in verschiedenen Szenarien, in denen Benutzer ihren Browserverlauf und ihre Daten aus Datenschutzgründen löschen. Daten, die mit der `storage.local`-API gespeichert werden, bleiben in diesen Szenarien korrekt erhalten.

## Methoden

Das `local`-Objekt implementiert die auf dem Typ {{WebExtAPIRef("storage.StorageArea")}} definierten Methoden:

- {{WebExtAPIRef("storage.StorageArea.get()", "storage.local.get()")}}
  - : Ruft ein oder mehrere Elemente aus dem Speicherbereich ab.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.local.getBytesInUse()")}}
  - : Ermittelt die Menge des Speicherplatzes (in Bytes), die für ein oder mehrere Elemente im Speicherbereich verwendet wird.
- {{WebExtAPIRef("storage.StorageArea.set()", "storage.local.set()")}}
  - : Speichert ein oder mehrere Elemente im Speicherbereich. Wenn das Element existiert, wird sein Wert aktualisiert.
- {{WebExtAPIRef("storage.StorageArea.remove()", "storage.local.remove()")}}
  - : Entfernt ein oder mehrere Elemente aus dem Speicherbereich.
- {{WebExtAPIRef("storage.StorageArea.clear()", "storage.local.clear()")}}
  - : Entfernt alle Elemente aus dem Speicherbereich.

## Ereignisse

Das `local`-Objekt implementiert die auf dem Typ {{WebExtAPIRef("storage.StorageArea")}} definierten Ereignisse:

- {{WebExtAPIRef("storage.StorageArea.onChanged", "storage.local.onChanged")}}
  - : Wird ausgelöst, wenn sich ein oder mehrere Elemente im Speicherbereich ändern.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#property-local) API von Chromium. Diese Dokumentation ist aus [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code abgeleitet.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
