---
title: Speicherung
slug: Mozilla/Add-ons/WebExtensions/API/storage
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ermöglicht Erweiterungen das Speichern und Abrufen von Daten sowie das Überwachen von Änderungen an gespeicherten Elementen.

Das Speichersystem basiert auf der [Web Storage API](/de/docs/Web/API/Web_Storage_API) mit einigen Unterschieden. Zu den Unterschieden gehören unter anderem:

- Es ist asynchron.
- Werte sind auf die Erweiterung beschränkt, nicht auf eine bestimmte Domain (d.h. das gleiche Set von Schlüssel/Wert-Paaren ist in allen Skripten im Hintergrundkontext und Inhalteskripten verfügbar).
- Die gespeicherten Werte können beliebige JSON-ifizierbare Werte sein, nicht nur [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String). Dazu gehören unter anderem: [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), aber nur, wenn deren Inhalt als JSON dargestellt werden kann, was DOM-Knoten ausschließt. Sie müssen Ihre Werte nicht in JSON-`Strings` umwandeln, bevor Sie sie speichern, aber sie werden intern als JSON dargestellt, daher die Anforderung, dass sie JSON-ifizierbar sind.
- Mehrere Schlüssel/Wert-Paare können in einem einzigen API-Aufruf gesetzt oder abgerufen werden.

Um diese API zu verwenden, müssen Sie die `"storage"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihre Datei [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) aufnehmen.

Jede Erweiterung hat ihren eigenen Speicherbereich, der in verschiedene Speicherarten unterteilt werden kann.

Obwohl diese API {{domxref("Window.localStorage")}} ähnelt, wird empfohlen, `Window.localStorage` im Erweiterungscode nicht zur Speicherung von erweiterungsbezogenen Daten zu verwenden. Firefox löscht Daten, die von Erweiterungen mit der localStorage-API gespeichert wurden, in verschiedenen Szenarien, in denen Benutzer ihre Browserverläufe und -daten aus Datenschutzgründen löschen, während Daten, die mit der [`storage.local`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) API gespeichert werden, in diesen Szenarien korrekt beibehalten werden.

Sie können die gespeicherten Daten im Abschnitt Erweiterungsspeicher im [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) Reiter der [Entwicklungstools](https://extensionworkshop.com/documentation/develop/debugging/) untersuchen, zugänglich über `about:debugging`.

> [!NOTE]
> Der Speicherbereich ist nicht verschlüsselt und sollte nicht zur Speicherung vertraulicher Benutzerinformationen verwendet werden.

## Typen

- {{WebExtAPIRef("storage.StorageArea")}}
  - : Ein Objekt, das einen Speicherbereich repräsentiert.
- {{WebExtAPIRef("storage.StorageChange")}}
  - : Ein Objekt, das eine Änderung in einem Speicherbereich darstellt.

## Eigenschaften

`storage` hat vier Eigenschaften, die die verschiedenen Arten von verfügbaren Speicherbereichen darstellen.

- {{WebExtAPIRef("storage.local")}}
  - : Repräsentiert den `local`-Speicherbereich. Elemente im `local`-Speicher sind lokal auf dem Computer, auf dem die Erweiterung installiert wurde.
- {{WebExtAPIRef("storage.managed")}}
  - : Repräsentiert den `managed`-Speicherbereich. Elemente im `managed`-Speicher werden vom Domain-Administrator festgelegt und sind für die Erweiterung schreibgeschützt. Der Versuch, diesen Namensraum zu ändern, führt zu einem Fehler.
- {{WebExtAPIRef("storage.session")}}
  - : Repräsentiert den `session`-Speicherbereich. Elemente im `session`-Speicher werden im Speicher gehalten und nicht auf die Festplatte geschrieben.
- {{WebExtAPIRef("storage.sync")}}
  - : Repräsentiert den `sync`-Speicherbereich. Elemente im `sync`-Speicher werden vom Browser synchronisiert und sind über alle Instanzen dieses Browsers, in die sich der Benutzer angemeldet hat, auf verschiedenen Geräten verfügbar.

## Ereignisse

- {{WebExtAPIRef("storage.onChanged")}}
  - : Wird ausgelöst, wenn sich eines oder mehrere Elemente in einem der Speicherbereiche ändern.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API. Diese Dokumentation ist von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code abgeleitet.

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
