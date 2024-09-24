---
title: runtime.onInstalled
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn die Erweiterung erstmals installiert wird, wenn die Erweiterung auf eine neue Version aktualisiert wird und wenn der Browser auf eine neue Version aktualisiert wird.

Beachten Sie, dass `runtime.onInstalled` nicht dasselbe ist wie {{WebExtAPIRef("management.onInstalled")}}. Das `runtime.onInstalled`-Ereignis wird nur für Ihre Erweiterung ausgelöst. Das `browser.management.onInstalled`-Ereignis wird für alle Erweiterungen ausgelöst.

## Syntax

```js-nolint
browser.runtime.onInstalled.addListener(listener)
browser.runtime.onInstalled.removeListener(listener)
browser.runtime.onInstalled.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Hören auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `function`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion werden folgende Argumente übergeben:

    - `details`

      - : Ein Objekt mit den folgenden Eigenschaften:

        - `id` {{optional_inline}}
          - : `string`. Die ID der importierten gemeinsamen Modul-Erweiterung, die aktualisiert wurde. Dies ist nur vorhanden, wenn der `reason`-Wert `shared_module_update` ist.
        - `previousVersion` {{optional_inline}}
          - : `string`. Die vorherige Version der gerade aktualisierten Erweiterung. Dies ist nur vorhanden, wenn der `reason`-Wert `update` ist.
        - `reason`
          - : Ein {{WebExtAPIRef('runtime.OnInstalledReason')}} Wert, der den Grund angibt, warum dieses Ereignis gesendet wird.
        - `temporary`
          - : `boolean`. Wahr, wenn das Add-on vorübergehend installiert wurde. Zum Beispiel mit der „about:debugging“-Seite in Firefox oder mit [web-ext run](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/). Andernfalls falsch.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Wenn die Erweiterung installiert wird, protokollieren Sie den Installationsgrund und öffnen Sie <https://example.com>:

```js
function handleInstalled(details) {
  console.log(details.reason);
  browser.tabs.create({
    url: "https://example.com",
  });
}

browser.runtime.onInstalled.addListener(handleInstalled);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der API von Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onInstalled). Diese Dokumentation ist aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code abgeleitet.

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
