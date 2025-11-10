---
title: history.onVisited
slug: Mozilla/Add-ons/WebExtensions/API/history/onVisited
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird jedes Mal ausgelöst, wenn der Benutzer eine Seite besucht. Ein {{WebExtAPIRef("history.HistoryItem")}}-Objekt wird an den Listener übergeben. Dieses Ereignis wird ausgelöst, bevor die Seite geladen ist.

## Syntax

```js-nolint
browser.history.onVisited.addListener(listener)
browser.history.onVisited.removeListener(listener)
browser.history.onVisited.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `result`
      - : {{WebExtAPIRef('history.HistoryItem')}}. Ein Objekt, das das Element im Verlauf des Browsers darstellt.

        Zu dem Zeitpunkt, an dem dieses Ereignis gesendet wird, kennt der Browser den Titel der Seite noch nicht. Wenn der Browser diese Seite bereits besucht hat und sich an ihren alten Titel erinnert, dann enthält das Objekt `HistoryItem.title` den alten Titel der Seite. Wenn der Browser keinen Eintrag über den alten Titel der Seite hat, dann ist `HistoryItem.title` leer. Um die Titel der Seiten sofort zu erhalten, sobald sie bekannt sind, horchen Sie auf {{WebExtAPIRef("history.onTitleChanged")}}.

## Beispiele

Hören Sie Besuche ab und protokollieren Sie die URL und die Besuchszeit.

```js
function onVisited(historyItem) {
  console.log(historyItem.url);
  console.log(new Date(historyItem.lastVisitTime));
}

browser.history.onVisited.addListener(onVisited);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#event-onVisited) API von Chromium. Diese Dokumentation stammt aus [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.

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
