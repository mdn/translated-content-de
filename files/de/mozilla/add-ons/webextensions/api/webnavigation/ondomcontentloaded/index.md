---
title: webNavigation.onDOMContentLoaded
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onDOMContentLoaded
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn das [DOMContentLoaded](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis auf der Seite ausgelöst wird. Zu diesem Zeitpunkt ist das Dokument geladen und geparst, und das DOM ist vollständig erstellt, jedoch sind verlinkte Ressourcen wie Bilder, Stylesheets und Subframes möglicherweise noch nicht geladen.

## Syntax

```js-nolint
browser.webNavigation.onDOMContentLoaded.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onDOMContentLoaded.removeListener(listener)
browser.webNavigation.onDOMContentLoaded.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, auf dieses Ereignis zu hören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es hört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `details`
      - : `object`. Details zum Navigationsereignis. Weitere Informationen finden Sie im Abschnitt [details](#details).

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt, das eine einzelne Eigenschaft `url` enthält, die ein {{jsxref("Array")}} von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist. Wenn Sie diesen Parameter einfügen, wird das Ereignis nur für Übergänge zu URLs ausgelöst, die mindestens einem `UrlFilter` im Array entsprechen. Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst.

## Zusätzliche Objekte

### details

- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Navigation stattgefunden hat.
- `url`
  - : `string`. Die URL, zu der das gegebene Frame navigiert wurde.
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt war, repräsentierte er die ID des Prozesses, der den Renderer für diesen Tab ausführte.
- `frameId`
  - : `integer`. Frame, in dem die Navigation stattfindet. `0` bedeutet, dass die Navigation im Top-Level-Browsing-Kontext des Tabs stattfindet, nicht in einem verschachtelten {{HTMLElement("iframe")}}. Ein positiver Wert bedeutet, dass die Navigation in einem verschachtelten iframe stattfindet. Frame-IDs sind für einen gegebenen Tab und Prozess eindeutig.
- `timeStamp`
  - : `number`. Die Zeit, zu der `DOMContentLoaded` ausgelöst wurde, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokolliert die Ziel-URLs für `onDOMContentLoaded`, wenn der Hostname der Ziel-URL "example.com" enthält oder mit "developer" beginnt.

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnDOMContentLoaded(details) {
  console.log(`onDOMContentLoaded: ${details.url}`);
}

browser.webNavigation.onDOMContentLoaded.addListener(
  logOnDOMContentLoaded,
  filter,
);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API. Diese Dokumentation stammt von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

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
