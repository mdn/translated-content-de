---
title: storage.managed
slug: Mozilla/Add-ons/WebExtensions/API/storage/managed
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("storage.StorageArea")}} Objekt, das den `managed` Speicherbereich repräsentiert. Elemente im `managed` Speicher werden vom Domain-Administrator oder anderen nativen Anwendungen, die auf dem Computer des Benutzers installiert sind, festgelegt und sind für die Erweiterung schreibgeschützt. Versuche, diesen Speicherbereich zu ändern, führen zu einem Fehler.

## Bereitstellung von verwaltetem Speicher

Das Verfahren zur Bereitstellung von verwaltetem Speicher variiert zwischen den Browsern. Für Anweisungen zu Chrome siehe den Artikel ["Manifest für Speicherbereiche"](https://developer.chrome.com/docs/extensions/reference/manifest/storage).

Für Firefox müssen Sie eine JSON-Manifestdatei in einem bestimmten Format und Standort erstellen. Für die Details zur Manifestsyntax und zum Standort siehe [Native Manifeste](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

Hier ist ein Beispielmanifest:

```json
{
  "name": "favourite-colour-examples@mozilla.org",
  "description": "ignored",
  "type": "storage",
  "data": {
    "colour": "management thinks it should be blue!"
  }
}
```

Mit diesem Manifest könnte die [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour) Erweiterung auf die Daten mit folgendem Code zugreifen:

```js
let storageItem = browser.storage.managed.get("colour");
storageItem.then((res) => {
  console.log(`Managed colour is: ${res.colour}`);
});
```

## Methoden

Das `managed` Objekt implementiert die auf dem {{WebExtAPIRef("storage.StorageArea")}} Typ definierten Methoden:

- {{WebExtAPIRef("storage.StorageArea.get()", "storage.managed.get()")}}
  - : Ruft ein oder mehrere Elemente aus dem Speicherbereich ab.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.managed.getBytesInUse()")}}
  - : Gibt den für ein oder mehrere Elemente im Speicherbereich genutzten Speicherplatz (in Bytes) zurück.

## Ereignisse

Das `managed` Objekt implementiert die auf dem {{WebExtAPIRef("storage.StorageArea")}} Typ definierten Ereignisse:

- {{WebExtAPIRef("storage.StorageArea.onChanged", "storage.managed.onChanged")}}
  - : Wird ausgelöst, wenn sich ein oder mehrere Elemente im Speicherbereich ändern.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#property-managed) API von Chromium. Diese Dokumentation leitet sich von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code ab.

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
