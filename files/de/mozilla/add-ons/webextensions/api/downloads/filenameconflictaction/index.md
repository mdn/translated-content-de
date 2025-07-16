---
title: downloads.FilenameConflictAction
slug: Mozilla/Add-ons/WebExtensions/API/downloads/FilenameConflictAction
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Der Typ `FilenameConflictAction` der {{WebExtAPIRef("downloads")}} API gibt an, was zu tun ist, wenn der Name einer heruntergeladenen Datei mit einer vorhandenen Datei in Konflikt steht.

Dieser Typ definiert die Werte, die für die Eigenschaft `conflictAction` des `options`-Parameters der Funktion {{WebExtAPIRef("downloads.download")}} verwendet werden können.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- `"uniquify"`
  - : Der Browser wird den Dateinamen ändern, um ihn eindeutig zu machen.
- `"overwrite"`
  - : Der Browser wird die alte Datei mit der neu heruntergeladenen Datei überschreiben.
- `"prompt"`
  - : Der Browser wird den Benutzer auffordern, zu wählen, ob der Dateiname eindeutig gemacht oder die alte Datei überschrieben werden soll.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-FilenameConflictAction) API von Chromium.

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
