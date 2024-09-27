---
title: history.onTitleChanged
slug: Mozilla/Add-ons/WebExtensions/API/history/onTitleChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Titel einer vom Benutzer besuchten Seite aufgezeichnet wird. Um Besuche einer Seite zu verfolgen, verwenden Sie {{WebExtAPIRef("history.onVisited")}}. Da der {{WebExtAPIRef("history.HistoryItem")}}, den dieses Ereignis an seinen Listener übergibt, den Seitentitel nicht enthält, weil der Seitentitel normalerweise nicht bekannt ist, wenn `history.onVisited` gesendet wird, wird der gespeicherte {{WebExtAPIRef("history.HistoryItem")}} stattdessen mit dem Seitentitel aktualisiert, nachdem die Seite geladen wurde und der Titel bekannt ist. Zu diesem Zeitpunkt wird das Ereignis `history.onTitleChanged` ausgelöst. Wenn Sie also die Titel von Seiten wissen müssen, sobald sie besucht werden, hören Sie auf `history.onTitleChanged`.

## Syntax

```js-nolint
browser.history.onTitleChanged.addListener(listener)
browser.history.onTitleChanged.removeListener(listener)
browser.history.onTitleChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zugehört wird, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird ein Objekt mit diesen Eigenschaften übergeben:

    - `id`
      - : `String`. Die eindeutige Kennung für den {{WebExtAPIRef("history.HistoryItem")}} im Zusammenhang mit diesem Besuch.
    - `url`
      - : `String`. URL der besuchten Seite.
    - `title`
      - : `String`. Titel der besuchten Seite.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Hören Sie auf Ereignisse zur Titeländerung und protokollieren Sie die ID, URL und den Titel der besuchten Seiten.

```js
function handleTitleChanged(item) {
  console.log(item.id);
  console.log(item.title);
  console.log(item.url);
}

browser.history.onTitleChanged.addListener(handleTitleChanged);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#event-onVisited) API von Chromium. Diese Dokumentation ist abgeleitet von [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.

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
