---
title: tabs.onHighlighted
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onHighlighted
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn sich die Menge der hervorgehobenen Tabs in einem Fenster ändert.

Beachten Sie, dass Firefox vor Version 63 das Konzept der Hervorhebung mehrerer Tabs nicht kannte, weshalb dieses Ereignis lediglich ein Alias für {{WebExtAPIRef("tabs.onActivated")}} war.

## Syntax

```js-nolint
browser.tabs.onHighlighted.addListener(listener)
browser.tabs.onHighlighted.removeListener(listener)
browser.tabs.onHighlighted.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die ausgeführt wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `highlightInfo`
      - : `object`. ID(s) der hervorgehobenen Tabs und ID ihres Fensters. Siehe den Abschnitt [highlightInfo](#highlightinfo_2) für weitere Details.

## Zusätzliche Objekte

### highlightInfo

- `windowId`
  - : `integer`. ID des Fensters, dessen Tabs sich geändert haben.
- `tabIds`
  - : `array` von `integer`. IDs der hervorgehobenen Tabs im Fenster.

## Beispiele

Abhören von Hervorhebungsereignissen und Protokollierung der IDs hervorgehobener Tabs:

```js
function handleHighlighted(highlightInfo) {
  console.log(`Highlighted tabs: ${highlightInfo.tabIds}`);
}

browser.tabs.onHighlighted.addListener(handleHighlighted);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onHighlighted) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium Code.

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
