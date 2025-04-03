---
title: storage
slug: Mozilla/Add-ons/WebExtensions/API/storage
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{AddonSidebar}}

Ermöglicht es Erweiterungen, Daten zu speichern und abzurufen sowie Änderungen an gespeicherten Elementen zu überwachen.

Das Speichersystem basiert auf der [Web Storage API](/de/docs/Web/API/Web_Storage_API), mit einigen Unterschieden. Zu diesen Unterschieden gehören unter anderem:

- Es ist asynchron.
- Werte sind auf die Erweiterung begrenzt und nicht auf eine bestimmte Domain (d.h. dasselbe Set von Schlüssel-/Werte-Paaren ist für alle Skripte im Hintergrundkontext und in Inhaltsskripten verfügbar).
- Die gespeicherten Werte können beliebige JSON-konvertierbare Werte sein, nicht nur [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String). Dazu gehören unter anderem: [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), jedoch nur, wenn deren Inhalte als JSON dargestellt werden können, was keine DOM-Knoten umfasst. Sie müssen Ihre Werte vor der Speicherung nicht in JSON-`Strings` umwandeln, aber sie werden intern als JSON dargestellt, weshalb sie JSON-konvertierbar sein müssen.
- Mehrere Schlüssel-/Werte-Paare können in einem einzigen API-Aufruf gesetzt oder abgerufen werden.

Um diese API zu verwenden, müssen Sie die `"storage"`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei einfügen.

Jede Erweiterung hat ihren eigenen Speicherbereich, der in verschiedene Speicherarten aufgeteilt werden kann.

Obwohl diese API [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) ähnelt, wird empfohlen, `Window.localStorage` im Erweiterungscode nicht zu verwenden, um erweiterungsbezogene Daten zu speichern. Firefox löscht Daten, die von Erweiterungen mit der localStorage-API gespeichert wurden, in verschiedenen Szenarien, in denen Benutzer ihren Browserverlauf und ihre Daten aus Datenschutzgründen löschen, während Daten, die mit der [`storage.local`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/local)-API gespeichert werden, in diesen Szenarien korrekt erhalten bleiben.

Sie können die gespeicherten Daten unter dem Punkt "Extension Storage" im [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) im [Entwicklerwerkzeugkasten](https://extensionworkshop.com/documentation/develop/debugging/) einsehen, der über `about:debugging` zugänglich ist.

> [!NOTE]
> Der Speicherbereich ist nicht verschlüsselt und sollte nicht zur Speicherung vertraulicher Benutzerdaten verwendet werden.

## Arten

- {{WebExtAPIRef("storage.StorageArea")}}
  - : Ein Objekt, das einen Speicherbereich darstellt.
- {{WebExtAPIRef("storage.StorageChange")}}
  - : Ein Objekt, das eine Änderung an einem Speicherbereich darstellt.

## Eigenschaften

`storage` hat vier Eigenschaften, die die verschiedenen Arten von verfügbaren Speicherbereichen darstellen.

- {{WebExtAPIRef("storage.local")}}
  - : Repräsentiert den `local`-Speicherbereich. Elemente im `local`-Speicher sind lokal auf dem Computer, auf dem die Erweiterung installiert wurde.
- {{WebExtAPIRef("storage.managed")}}
  - : Repräsentiert den `managed`-Speicherbereich. Elemente im `managed`-Speicher werden vom Domain-Administrator gesetzt und sind für die Erweiterung schreibgeschützt. Ein Versuch, diesen Namensraum zu modifizieren, führt zu einem Fehler.
- {{WebExtAPIRef("storage.session")}}
  - : Repräsentiert den `session`-Speicherbereich. Elemente im `session`-Speicher werden im Speicher abgelegt und nicht auf der Festplatte gespeichert.
- {{WebExtAPIRef("storage.sync")}}
  - : Repräsentiert den `sync`-Speicherbereich. Elemente im `sync`-Speicher werden vom Browser synchronisiert und sind auf allen Instanzen dieses Browsers verfügbar, in die der Benutzer eingeloggt ist, über verschiedene Geräte hinweg.

## Ereignisse

- {{WebExtAPIRef("storage.onChanged")}}
  - : Wird ausgelöst, wenn sich ein oder mehrere Elemente in einem der Speicherbereiche ändern.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage)-API von Chromium. Diese Dokumentation stammt aus [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.

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
