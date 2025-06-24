---
title: tabs.onMoved
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onMoved
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Tab innerhalb eines Fensters verschoben wird.

Es wird nur ein Verschiebungsereignis ausgelöst, das den Tab darstellt, den der Benutzer direkt verschoben hat. Verschiebungsereignisse werden nicht für die anderen Tabs ausgelöst, die daraufhin verschoben werden müssen. Dieses Ereignis wird nicht ausgelöst, wenn ein Tab zwischen Fenstern verschoben wird. Siehe dafür {{WebExtAPIRef('tabs.onDetached')}}.

## Syntax

```js-nolint
browser.tabs.onMoved.addListener(listener)
browser.tabs.onMoved.removeListener(listener)
browser.tabs.onMoved.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, `false` andernfalls.

## `addListener`-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:
    - `tabId`
      - : `integer`. ID des Tabs, den der Benutzer verschoben hat.
    - `moveInfo`
      - : `object`. Informationen über die Verschiebung. Siehe den [moveInfo](#moveinfo_2)-Abschnitt für weitere Details.

## Zusätzliche Objekte

### moveInfo

- `windowId`
  - : `integer`. ID des Fensters dieses Tabs.
- `fromIndex`
  - : `integer`. Ursprünglicher Index dieses Tabs im Fenster.
- `toIndex`
  - : `integer`. Endgültiger Index dieses Tabs im Fenster.

## Beispiele

Hören Sie auf und protokollieren Sie Verschiebungsereignisse:

```js
function handleMoved(tabId, moveInfo) {
  console.log(
    `Tab ${tabId} moved from ${moveInfo.fromIndex} to ${moveInfo.toIndex}`,
  );
}

browser.tabs.onMoved.addListener(handleMoved);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der `chrome.tabs`-API von Chromium. Diese Dokumentation leitet sich aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code ab.

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
