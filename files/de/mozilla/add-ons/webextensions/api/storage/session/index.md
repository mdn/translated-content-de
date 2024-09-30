---
title: storage.session
slug: Mozilla/Add-ons/WebExtensions/API/storage/session
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Repräsentiert den `session` Speicherbereich. Elemente im `session` Speicher werden für die Dauer der Browsersitzung im Speicher gehalten und nicht auf die Festplatte geschrieben. Standardmäßig wird er nicht für Inhalts-Skripte zugänglich gemacht, aber dieses Verhalten kann durch {{WebExtAPIRef("storage.StorageArea.setAccessLevel", "storage.session.setAccessLevel()")}} verändert werden.

Die Menge an Daten, die eine Erweiterung im Session-Speicherbereich speichern kann, ist auf 10 MB begrenzt, sofern nicht anders in der [Browser-Kompatibilitätstabelle](#browser-kompatibilität) angegeben.

Wenn der Browser beendet wird, werden alle Session-Daten gelöscht. Wenn die Erweiterung deinstalliert wird, werden die zugehörigen Sitzungsdaten gelöscht.

## Methoden

Das `session` Objekt implementiert die auf dem {{WebExtAPIRef("storage.StorageArea")}} Typ definierten Methoden:

- {{WebExtAPIRef("storage.StorageArea.get()", "storage.session.get()")}}
  - : Ruft ein oder mehrere Elemente aus dem Speicherbereich ab.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.session.getBytesInUse()")}}
  - : Ermittelt die Menge des Speicherplatzes (in Bytes), die für ein oder mehrere Elemente im Speicherbereich genutzt wird.
- {{WebExtAPIRef("storage.StorageArea.set()", "storage.session.set()")}}
  - : Speichert ein oder mehrere Elemente im Speicherbereich. Wenn das Element bereits existiert, wird sein Wert aktualisiert.
- {{WebExtAPIRef("storage.StorageArea.setAccessLevel", "storage.session.setAccessLevel()")}}
  - : Legt die Zugangsebene für den Speicherbereich fest.
- {{WebExtAPIRef("storage.StorageArea.remove()", "storage.session.remove()")}}
  - : Entfernt ein oder mehrere Elemente aus dem Speicherbereich.
- {{WebExtAPIRef("storage.StorageArea.clear()", "storage.session.clear()")}}
  - : Entfernt alle Elemente aus dem Speicherbereich.

## Ereignisse

Das `session` Objekt implementiert die auf dem {{WebExtAPIRef("storage.StorageArea")}} Typ definierten Ereignisse:

- {{WebExtAPIRef("storage.StorageArea.onChanged", "storage.session.onChanged")}}
  - : Wird ausgelöst, wenn sich ein oder mehrere Elemente im Speicherbereich ändern.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#property-session) API von Chromium. Diese Dokumentation stammt aus [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.

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
