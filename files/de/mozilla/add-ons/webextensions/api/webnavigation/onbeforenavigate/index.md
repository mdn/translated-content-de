---
title: webNavigation.onBeforeNavigate
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onBeforeNavigate
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Browser kurz davor ist, ein Navigationsevent zu starten.

## Syntax

```js-nolint
browser.webNavigation.onBeforeNavigate.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onBeforeNavigate.removeListener(listener)
browser.webNavigation.onBeforeNavigate.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören für dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, ansonsten `false`.

## Syntax von addListener

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `details`
      - : `object`. Details über das Navigationsevent. Siehe den Abschnitt [details](#details_2) für weitere Informationen.

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt, das eine einzelne Eigenschaft `url` enthält, die ein `Array` von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist. Wenn Sie diesen Parameter einschließen, wird das Ereignis nur für Übergänge zu URLs ausgelöst, die mit mindestens einem `UrlFilter` im Array übereinstimmen. Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst.

## Zusätzliche Objekte

### details

- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Navigation stattfinden wird.
- `url`
  - : `string`. Die URL, zu der der angegebene Frame navigieren wird.
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt war, repräsentierte er die ID des Prozesses, der den Renderer für diesen Tab ausführte.
- `frameId`
  - : `integer`. Frame, in dem die Navigation stattfinden wird. `0` bedeutet, dass die Navigation im obersten Browsing-Kontext des Tabs stattfindet, nicht in einem verschachtelten {{HTMLElement("iframe")}}. Ein positiver Wert bedeutet, dass die Navigation in einem verschachtelten iframe stattfindet. Frame-IDs sind einzigartig für einen gegebenen Tab und Prozess.
- `parentFrameId`
  - : `integer`. ID des übergeordneten Frames dieses Frames. Wird auf `-1` gesetzt, wenn dies ein oberstes Frame ist.
- `timeStamp`
  - : `number`. Die Zeit, zu der der Browser kurz davor ist, mit der Navigation zu beginnen, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokolliert die Ziel-URLs für `onBeforeNavigate`, wenn der Hostname des Ziels "example.com" enthält oder mit "developer" beginnt.

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnBefore(details) {
  console.log(`onBeforeNavigate to: ${details.url}`);
}

browser.webNavigation.onBeforeNavigate.addListener(logOnBefore, filter);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API. Diese Dokumentation basiert auf [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

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