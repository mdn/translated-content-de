---
title: tabs.onZoomChange
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onZoomChange
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Tab vergrößert oder verkleinert wird.

## Syntax

```js-nolint
browser.tabs.onZoomChange.addListener(listener)
browser.tabs.onZoomChange.removeListener(listener)
browser.tabs.onZoomChange.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es hört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `ZoomChangeInfo`
      - : `object`. Informationen über das Zoomereignis. Siehe den Abschnitt [ZoomChangeInfo](#zoomchangeinfo_2) für weitere Details.

## Zusätzliche Objekte

### ZoomChangeInfo

- `tabId`
  - : `integer`. ID des Tabs, der gezoomt wurde.
- `oldZoomFactor`
  - : `number`. Der vorherige Zoomfaktor.
- `newZoomFactor`
  - : `number`. Der neue Zoomfaktor.
- `zoomSettings`
  - : {{WebExtAPIRef('tabs.ZoomSettings')}}. Zoom-Einstellungen für den Tab.

## Beispiele

Hören Sie auf Zoomereignisse und protokollieren Sie die Informationen:

```js
function handleZoomed(zoomChangeInfo) {
  console.log(`Tab: ${zoomChangeInfo.tabId} zoomed`);
  console.log(`Old zoom: ${zoomChangeInfo.oldZoomFactor}`);
  console.log(`New zoom: ${zoomChangeInfo.newZoomFactor}`);
}

browser.tabs.onZoomChange.addListener(handleZoomed);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onZoomChange). Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
