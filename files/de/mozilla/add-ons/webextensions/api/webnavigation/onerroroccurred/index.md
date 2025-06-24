---
title: webNavigation.onErrorOccurred
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onErrorOccurred
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ausgelöst, wenn ein Fehler auftritt und die Navigation abgebrochen wird. Dies kann passieren, wenn entweder ein Netzwerkfehler aufgetreten ist oder der Benutzer die Navigation abgebrochen hat.

## Syntax

```js-nolint
browser.webNavigation.onErrorOccurred.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onErrorOccurred.removeListener(listener)
browser.webNavigation.onErrorOccurred.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`, `addListener(listener, filter)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, dieses Ereignis zu überwachen. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen Sie, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt.

    Die `listener`-Funktion wird mit diesen Argumenten aufgerufen:

    - `details`

      - : [`object`](#details). Details über das Navigationsereignis. **`details`** hat die folgenden Eigenschaften:

        - `tabId`
          - : `integer`. Die ID des Tabs, in dem die Navigation stattfand.
        - `url`
          - : `string`. Die URL, zu der der gegebene Frame navigierte.
        - `processId` {{optional_inline}} {{deprecated_inline}}
          - : `integer`. Dieser Wert wird in modernen Browsern nie gesetzt. Früher repräsentierte er die ID des Prozesses, der das Renderer für diesen Tab ausführte.
        - `frameId`

          - : `integer`. Frame, in dem die Navigation stattfand.

            `0` zeigt an, dass die Navigation im übergeordneten Browsing-Kontext des Tabs stattfand, nicht in einem verschachtelten {{HTMLElement("iframe")}}.

            Ein positiver Wert zeigt an, dass die Navigation in einem verschachtelten iframe stattfand.

            Frame-IDs sind eindeutig für einen gegebenen Tab und Prozess.

        - `timeStamp`
          - : `number`. Die Zeit, zu der der Fehler auftrat, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
        - `error`
          - : `string`. Der Fehlercode. Dies ist ein interner Fehlercode und es wird nicht garantiert, dass er gleich bleibt oder zwischen verschiedenen Browsern konsistent ist.

- `filter` {{optional_inline}}

  - : `object`. Ein Objekt mit einer einzigen Eigenschaft `url`, die ein `Array` von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist.

    Wenn Sie diesen Parameter einschließen, wird das Ereignis nur für Übergänge zu URLs ausgelöst, die mindestens einem `UrlFilter` im Array entsprechen.

    Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokolliert die Ziel-URLs für `onErrorOccurred`, wenn der `hostname` der Ziel-URL `"example.com"` enthält oder mit `"developer"` beginnt.

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnErrorOccurred(details) {
  console.log(`onErrorOccurred: ${details.url}`);
  console.log(details.error);
}

browser.webNavigation.onErrorOccurred.addListener(logOnErrorOccurred, filter);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API von Chromium. Diese Dokumentation stammt von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

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
