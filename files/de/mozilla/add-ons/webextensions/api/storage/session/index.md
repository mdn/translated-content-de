---
title: storage.session
slug: Mozilla/Add-ons/WebExtensions/API/storage/session
l10n:
  sourceCommit: 89d941878af42738cbd429acaa06789db7fa55f6
---

Repräsentiert den `session`-Speicherbereich. Elemente im `session`-Speicher werden für die Dauer der Browsersitzung im Speicher abgelegt und nicht auf die Festplatte übertragen.
Standardmäßig ist er für Inhalts-Skripte nicht zugänglich, dieses Verhalten kann jedoch durch {{WebExtAPIRef("storage.StorageArea.setAccessLevel", "storage.session.setAccessLevel()")}} geändert werden.

Die Datenmenge, die eine Erweiterung im Sitzungsspeicherbereich speichern kann, ist auf 10 MB begrenzt, es sei denn, in der [Browser-Kompatibilitätstabelle](#browser-kompatibilität) wird etwas anderes angegeben.

Wenn der Browser beendet wird, wird der gesamte Sitzungspeicher gelöscht. Wird die Erweiterung deinstalliert, wird der zugehörige Sitzungspeicher gelöscht.

## Eigenschaften

- {{WebExtAPIRef("storage.session.QUOTA_BYTES")}}
  - : Die maximale Datenmenge (in Byte), die im Sitzungsspeicher gespeichert werden kann.

## Methoden

Das `session`-Objekt implementiert die Methoden, die auf dem Typ {{WebExtAPIRef("storage.StorageArea")}} definiert sind:

- {{WebExtAPIRef("storage.StorageArea.get()", "storage.session.get()")}}
  - : Ruft ein oder mehrere Elemente aus dem Speicherbereich ab.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.session.getBytesInUse()")}}
  - : Liefert die Menge des Speicherplatzes (in Byte), die für ein oder mehrere Elemente im Speicherbereich genutzt wird.
- {{WebExtAPIRef("storage.StorageArea.getKeys()", "storage.session.getKeys()")}}
  - : Ruft die Schlüssel aller Elemente im Speicherbereich ab.
- {{WebExtAPIRef("storage.StorageArea.set()", "storage.session.set()")}}
  - : Speichert ein oder mehrere Elemente im Speicherbereich. Wenn das Element bereits existiert, wird dessen Wert aktualisiert.
- {{WebExtAPIRef("storage.StorageArea.setAccessLevel", "storage.session.setAccessLevel()")}}
  - : Legt die Zugriffsebene für den Speicherbereich fest.
- {{WebExtAPIRef("storage.StorageArea.remove()", "storage.session.remove()")}}
  - : Entfernt ein oder mehrere Elemente aus dem Speicherbereich.
- {{WebExtAPIRef("storage.StorageArea.clear()", "storage.session.clear()")}}
  - : Entfernt alle Elemente aus dem Speicherbereich.

## Ereignisse

Das `session`-Objekt implementiert die Ereignisse, die auf dem Typ {{WebExtAPIRef("storage.StorageArea")}} definiert sind:

- {{WebExtAPIRef("storage.StorageArea.onChanged", "storage.session.onChanged")}}
  - : Wird ausgelöst, wenn sich ein oder mehrere Elemente im Speicherbereich ändern.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#property-session) API. Diese Dokumentation leitet sich von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code ab.

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
