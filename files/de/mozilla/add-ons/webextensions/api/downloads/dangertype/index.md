---
title: downloads.DangerType
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DangerType
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Der Typ `DangerType` der {{WebExtAPIRef("downloads")}} API definiert eine Reihe möglicher Gründe, warum eine herunterladbare Datei als gefährlich angesehen werden könnte.

Die `danger`-Eigenschaft eines {{WebExtAPIRef('downloads.DownloadItem')}} enthält einen String, der aus den in diesem Typ definierten Werten stammt.

> [!NOTE]
> Diese Zeichenfolgenkonstanten werden sich niemals ändern, jedoch kann sich die Menge der DangerTypes ändern.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- `file`
  - : Der Dateiname des Downloads ist verdächtig.
- `url`
  - : Die URL des Downloads ist als bösartig bekannt.
- `content`
  - : Die heruntergeladene Datei ist als bösartig bekannt.
- `uncommon`
  - : Die URL des Downloads wird nicht häufig heruntergeladen.
- `host`
  - : Der Download stammt von einem Host, der bekannt dafür ist, bösartige Binärdateien zu verbreiten.
- `unwanted`
  - : Der Download ist möglicherweise unerwünscht oder unsicher.
- `safe`
  - : Der Download stellt keine bekannte Gefahr für den Computer des Benutzers dar.
- `accepted`
  - : Der Benutzer hat den gefährlichen Download akzeptiert.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DangerType) API von Chromium.

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
