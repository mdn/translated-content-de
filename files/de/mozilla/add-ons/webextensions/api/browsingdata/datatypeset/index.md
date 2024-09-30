---
title: browsingData.DataTypeSet
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/DataTypeSet
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Typ **`browsingData.DataTypeSet`** beschreibt eine Menge von Datentypen.

Er enthält eine Anzahl von boolean-Eigenschaften. Der Name jeder Eigenschaft ist der Name eines bestimmten Typs von Browser-Daten: "downloads", "history" und so weiter. Alle Eigenschaften sind optional.

Dieser Typ wird verwendet:

- in {{WebExtAPIRef("browsingData.remove()")}} um zu beschreiben, welche Datentypen entfernt werden sollen
- in {{WebExtAPIRef("browsingData.settings()")}} um zu beschreiben, welche Datentypen derzeit in der "Chronik löschen"-Funktion des Browsers ausgewählt sind.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cache` {{optional_inline}}
  - : `boolean`. Der Cache des Browsers.
- `cookies` {{optional_inline}}
  - : `boolean`. Beim Surfen erworbene Cookies.
- `downloads` {{optional_inline}}
  - : `boolean`. Die Download-Historie des Nutzers.
- `fileSystems` {{optional_inline}}
  - : `boolean`. Dateisysteme der Websites.
- `formData` {{optional_inline}}
  - : `boolean`. Gespeicherte Formulardaten, für die Autovervollständigung.
- `history` {{optional_inline}}
  - : `boolean`. Die Surf-Historie des Nutzers.
- `indexedDB` {{optional_inline}}
  - : `boolean`. IndexedDB-Daten.
- `localStorage` {{optional_inline}}
  - : `boolean`. Daten des lokalen Speichers.
- `passwords` {{optional_inline}}
  - : `boolean`. Gespeicherte Passwörter, für die Autovervollständigung.
- `pluginData` {{optional_inline}}
  - : `boolean`. Gespeicherte Daten, die mit Plugins verbunden sind.
- `serverBoundCertificates` {{optional_inline}}
  - : `boolean`. Gespeicherte servergebundene Zertifikate.
- `serviceWorkers` {{optional_inline}}
  - : `boolean`. Von Service-Workern zwischengespeicherte Daten.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API von Chromium.

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
