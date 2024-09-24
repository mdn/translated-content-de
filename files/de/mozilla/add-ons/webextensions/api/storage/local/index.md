---
title: storage.local
slug: Mozilla/Add-ons/WebExtensions/API/storage/local
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Repräsentiert den `local`-Speicherbereich. Elemente im `local`-Speicher sind lokal auf dem Rechner, auf dem die Erweiterung installiert ist.

Der Browser kann die Menge an Daten einschränken, die eine Erweiterung im lokalen Speicherbereich speichern kann. Zum Beispiel:

- In Chrome ist eine Erweiterung darauf beschränkt, 5 MB an Daten mit dieser API zu speichern, es sei denn, sie hat die [Berechtigung `"unlimitedStorage"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#unlimited_storage).
- In Firefox unterliegt die Menge an Daten, die eine Erweiterung speichern kann, denselben [Speichergrenzen](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#storage_limits) wie für IndexedDB-Datenbanken. Erweiterungen, die mehr Daten als diese Grenze speichern möchten, benötigen die Berechtigung ["unlimitedStorage"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#unlimited_storage). Allerdings kann es vorkommen, dass Erweiterungen mit der Berechtigung "unlimitedStorage" einen Fehler bezüglich überschrittener Kontingente erhalten, wenn der belegte Speicher den globalen Grenzwert überschreitet.

Wenn die Erweiterung deinstalliert wird, wird ihr zugehöriger lokaler Speicher gelöscht.

Außerdem können Sie in Firefox den Browser daran hindern, den lokalen Speicher bei der Deinstallation zu löschen, indem Sie `about:config` aufrufen und diese Browsereinstellungen auf `true` setzen: `"keepUuidOnUninstall"` und `"keepStorageOnUninstall"`. Diese Funktion wird bereitgestellt, um Entwicklern zu helfen, ihre Erweiterungen zu testen. Erweiterungen selbst können diese Einstellungen nicht ändern.

Auch wenn diese API {{domxref("Window.localStorage")}} ähnelt, wird empfohlen, `Window.localStorage` im Erweiterungscode nicht zu verwenden. Firefox löscht die von Erweiterungen mit der localStorage API gespeicherten Daten in verschiedenen Szenarien, in denen Nutzer ihre Browserhistorie und Daten aus Datenschutzgründen löschen. Daten, die mit der `storage.local` API gespeichert werden, bleiben in diesen Szenarien korrekt erhalten.

## Methoden

Das `local`-Objekt implementiert die Methoden, die auf dem {{WebExtAPIRef("storage.StorageArea")}}-Typ definiert sind:

- {{WebExtAPIRef("storage.StorageArea.get()", "storage.local.get()")}}
  - : Ruft ein oder mehrere Elemente aus dem Speicherbereich ab.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.local.getBytesInUse()")}}
  - : Ermittelt die Menge des belegten Speicherplatzes (in Bytes) für ein oder mehrere Elemente im Speicherbereich.
- {{WebExtAPIRef("storage.StorageArea.set()", "storage.local.set()")}}
  - : Speichert ein oder mehrere Elemente im Speicherbereich. Wenn das Element existiert, wird sein Wert aktualisiert.
- {{WebExtAPIRef("storage.StorageArea.remove()", "storage.local.remove()")}}
  - : Entfernt ein oder mehrere Elemente aus dem Speicherbereich.
- {{WebExtAPIRef("storage.StorageArea.clear()", "storage.local.clear()")}}
  - : Entfernt alle Elemente aus dem Speicherbereich.

## Ereignisse

Das `local`-Objekt implementiert die Ereignisse, die auf dem {{WebExtAPIRef("storage.StorageArea")}}-Typ definiert sind:

- {{WebExtAPIRef("storage.StorageArea.onChanged", "storage.local.onChanged")}}
  - : Wird ausgelöst, wenn sich ein oder mehrere Elemente im Speicherbereich ändern.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#property-local)-API von Chromium. Diese Dokumentation ist abgeleitet von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.

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
