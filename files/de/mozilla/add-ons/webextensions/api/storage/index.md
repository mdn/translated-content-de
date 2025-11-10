---
title: storage
slug: Mozilla/Add-ons/WebExtensions/API/storage
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ermöglicht Erweiterungen das Speichern und Abrufen von Daten sowie das Lauschen auf Änderungen an gespeicherten Elementen.

Das Speichersystem basiert auf der [Web Storage API](/de/docs/Web/API/Web_Storage_API) mit einigen Unterschieden. Zu den Unterschieden gehören unter anderem:

- Es ist asynchron.
- Werte sind auf die Erweiterung beschränkt, nicht auf eine spezifische Domain (d.h. derselbe Satz von Schlüssel/Wert-Paaren ist in allen Skripten im Hintergrundkontext und in Inhalts-Skripten verfügbar).
- Die gespeicherten Werte können beliebige JSON-ifizierbare Werte sein, nicht nur [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String). Das schließt unter anderem [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) ein, aber nur, wenn deren Inhalte als JSON dargestellt werden können, was DOM-Knoten nicht umfasst. Sie müssen Ihre Werte nicht in JSON `Strings` umwandeln, bevor Sie sie speichern; sie werden jedoch intern als JSON dargestellt, was die Anforderung erklärt, dass sie JSON-ifizierbar sein müssen.
- Mehrere Schlüssel/Wert-Paare können in einem einzigen API-Aufruf gesetzt oder abgerufen werden.

Um diese API zu nutzen, müssen Sie die `"storage"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei aufnehmen.

Jede Erweiterung hat ihren eigenen Speicherbereich, der in verschiedene Speicherarten unterteilt werden kann.

Obwohl diese API ähnlich wie [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) ist, wird empfohlen, `Window.localStorage` nicht im Erweiterungscode zu verwenden, um erweiterungsbezogene Daten zu speichern. Firefox wird Daten, die von Erweiterungen unter Verwendung der localStorage-API gespeichert werden, in verschiedenen Szenarien löschen, in denen Benutzer ihren Browserverlauf und ihre Daten aus Datenschutzgründen löschen. Daten, die mit der [`storage.local`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) API gespeichert werden, werden in diesen Szenarien korrekt beibehalten.

Sie können die gespeicherten Daten unter dem Element Erweiterungsspeicher im [Speicherinspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) Tab des [Entwicklerwerkzeugkastens](https://extensionworkshop.com/documentation/develop/debugging/) untersuchen, zugänglich über `about:debugging`.

> [!NOTE]
> Der Speicherbereich ist nicht verschlüsselt und sollte nicht zur Speicherung vertraulicher Benutzerinformationen verwendet werden.

## Typen

- {{WebExtAPIRef("storage.StorageArea")}}
  - : Ein Objekt, das einen Speicherbereich repräsentiert.
- {{WebExtAPIRef("storage.StorageChange")}}
  - : Ein Objekt, das eine Änderung in einem Speicherbereich repräsentiert.

## Eigenschaften

`storage` hat vier Eigenschaften, die die verschiedenen Arten verfügbarer Speicherbereiche repräsentieren.

- {{WebExtAPIRef("storage.local")}}
  - : Repräsentiert den `local` Speicherbereich. Elemente im `local` Speicher sind lokal auf dem Rechner, auf dem die Erweiterung installiert wurde.
- {{WebExtAPIRef("storage.managed")}}
  - : Repräsentiert den `managed` Speicherbereich. Elemente im `managed` Speicher werden vom Domain-Administrator gesetzt und sind für die Erweiterung schreibgeschützt. Ein Versuch, diesen Namensraum zu ändern, führt zu einem Fehler.
- {{WebExtAPIRef("storage.session")}}
  - : Repräsentiert den `session` Speicherbereich. Elemente im `session` Speicher werden im Speicher gespeichert und nicht auf die Festplatte geschrieben.
- {{WebExtAPIRef("storage.sync")}}
  - : Repräsentiert den `sync` Speicherbereich. Elemente im `sync` Speicher werden vom Browser synchronisiert und sind über alle Instanzen dieses Browsers, in denen der Benutzer angemeldet ist, geräteübergreifend verfügbar.

## Ereignisse

- {{WebExtAPIRef("storage.onChanged")}}
  - : Wird ausgelöst, wenn sich ein oder mehrere Elemente in einem der Speicherbereiche ändern.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API. Diese Dokumentation stammt aus [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.

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
