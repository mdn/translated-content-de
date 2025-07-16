---
title: history.onTitleChanged
slug: Mozilla/Add-ons/WebExtensions/API/history/onTitleChanged
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Titel einer vom Benutzer besuchten Seite aufgezeichnet wird. Um Besuche einer Seite zu überwachen, verwenden Sie {{WebExtAPIRef("history.onVisited")}}. Allerdings enthält das {{WebExtAPIRef("history.HistoryItem")}}, das dieses Ereignis an seinen Zuhörer weitergibt, nicht den Seitentitel, da der Seitentitel in der Regel nicht bekannt ist, wenn `history.onVisited` gesendet wird. Stattdessen wird das gespeicherte {{WebExtAPIRef("history.HistoryItem")}} mit dem Seitentitel aktualisiert, nachdem die Seite geladen wurde und der Titel bekannt ist. Das Ereignis `history.onTitleChanged` wird zu diesem Zeitpunkt ausgelöst. Wenn Sie also die Titel der Seiten wissen müssen, während sie besucht werden, hören Sie auf `history.onTitleChanged`.

## Syntax

```js-nolint
browser.history.onTitleChanged.addListener(listener)
browser.history.onTitleChanged.removeListener(listener)
browser.history.onTitleChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Zuhörer hinzu.
- `removeListener(listener)`
  - : Das Abhören dieses Ereignisses beenden. Das Argument `listener` ist der zu entfernende Zuhörer.
- `hasListener(listener)`
  - : Überprüfen, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, sonst `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird ein Objekt mit folgenden Eigenschaften übergeben:
    - `id`
      - : `String`. Der eindeutige Bezeichner für das mit diesem Besuch verbundene {{WebExtAPIRef("history.HistoryItem")}}.
    - `url`
      - : `String`. URL der besuchten Seite.
    - `title`
      - : `String`. Titel der besuchten Seite.

## Beispiele

Überwachen Sie Ereignisse zum Ändern von Titeln und protokollieren Sie die ID, URL und den Titel der besuchten Seiten.

```js
function handleTitleChanged(item) {
  console.log(item.id);
  console.log(item.title);
  console.log(item.url);
}

browser.history.onTitleChanged.addListener(handleTitleChanged);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#event-onVisited) API. Diese Dokumentation stammt aus [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.

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
