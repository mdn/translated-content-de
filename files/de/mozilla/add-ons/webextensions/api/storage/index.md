---
title: storage
slug: Mozilla/Add-ons/WebExtensions/API/storage
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ermöglicht es Erweiterungen, Daten zu speichern und abzurufen und auf Änderungen gespeicherter Elemente zu reagieren.

Das Speichersystem basiert auf der [Web Storage API](/de/docs/Web/API/Web_Storage_API), weist jedoch einige Unterschiede auf. Zu den Unterschieden gehören unter anderem:

- Es ist asynchron.
- Werte sind auf die Erweiterung beschränkt und nicht auf eine bestimmte Domain (d.h. derselbe Satz von Schlüssel/Wert-Paaren ist für alle Skripte im Hintergrundkontext und Inhaltsskripte verfügbar).
- Die gespeicherten Werte können jeden JSON-ifizierbaren Wert umfassen, nicht nur [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String). Dazu gehören unter anderem: [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) und [`Object`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), allerdings nur, wenn deren Inhalte als JSON dargestellt werden können, was keine DOM-Knoten einschließt. Es ist nicht erforderlich, Ihre Werte vor dem Speichern in JSON-`Strings` umzuwandeln, aber sie werden intern als JSON dargestellt, was die Anforderung begründet, dass sie JSON-ifizierbar sein müssen.
- Mehrere Schlüssel/Wert-Paare können in demselben API-Aufruf gesetzt oder abgerufen werden.

Um diese API zu verwenden, müssen Sie die `"storage"`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei einschließen.

Jede Erweiterung hat ihren eigenen Speicherbereich, der in verschiedene Speicherarten unterteilt werden kann.

Obwohl diese API ähnlich wie [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) ist, wird empfohlen, `Window.localStorage` im Erweiterungscode nicht zu verwenden, um erweiterungsbezogene Daten zu speichern. Firefox wird Daten, die von Erweiterungen mit der localStorage-API gespeichert wurden, in verschiedenen Szenarien löschen, in denen Benutzer ihren Browserverlauf und -daten aus Datenschutzgründen löschen, während Daten, die mit der [`storage.local`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/local)-API gespeichert wurden, in diesen Szenarien korrekt erhalten bleiben.

Sie können die gespeicherten Daten unter dem Punkt Extension Storage im [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) Reiter der [Entwickler-Toolbox](https://extensionworkshop.com/documentation/develop/debugging/) überprüfen, zugänglich über `about:debugging`.

> [!NOTE]
> Der Speicherbereich ist nicht verschlüsselt und sollte nicht zum Speichern vertraulicher Benutzerinformationen verwendet werden.

## Arten

- {{WebExtAPIRef("storage.StorageArea")}}
  - : Ein Objekt, das einen Speicherbereich repräsentiert.
- {{WebExtAPIRef("storage.StorageChange")}}
  - : Ein Objekt, das eine Änderung an einem Speicherbereich darstellt.

## Eigenschaften

`storage` hat vier Eigenschaften, die die verschiedenen verfügbaren Speicherbereiche darstellen.

- {{WebExtAPIRef("storage.local")}}
  - : Repräsentiert den `local` Speicherbereich. Elemente im `local` Speicher sind lokal auf dem Computer, auf dem die Erweiterung installiert wurde.
- {{WebExtAPIRef("storage.managed")}}
  - : Repräsentiert den `managed` Speicherbereich. Elemente im `managed` Speicher werden vom Domain-Administrator festgelegt und sind für die Erweiterung nur lesbar. Der Versuch, diesen Namensraum zu ändern, führt zu einem Fehler.
- {{WebExtAPIRef("storage.session")}}
  - : Repräsentiert den `session` Speicherbereich. Elemente im `session` Speicher werden im Speicher gehalten und nicht auf die Festplatte geschrieben.
- {{WebExtAPIRef("storage.sync")}}
  - : Repräsentiert den `sync` Speicherbereich. Elemente im `sync` Speicher werden vom Browser synchronisiert und sind über alle Instanzen dieses Browsers hinweg verfügbar, bei denen sich der Benutzer angemeldet hat, über verschiedene Geräte hinweg.

## Ereignisse

- {{WebExtAPIRef("storage.onChanged")}}
  - : Wird ausgelöst, wenn sich ein oder mehrere Elemente in einem der Speicherbereiche ändern.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API. Diese Dokumentation ist abgeleitet von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.

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
