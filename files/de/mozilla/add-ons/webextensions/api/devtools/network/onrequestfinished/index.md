---
title: devtools.network.onRequestFinished
slug: Mozilla/Add-ons/WebExtensions/API/devtools/network/onRequestFinished
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Netzwerkanforderung abgeschlossen ist und ihre Details der Erweiterung zur Verfügung stehen.

Die Anforderung wird als ein [HAR-Eintragsobjekt](http://www.softwareishard.com/blog/har-12-spec/#entries) angegeben, dem auch eine asynchrone Methode `getContent()` zugewiesen ist, die den Inhalt des Antwortkörpers abruft.

Bitte beachten Sie, dass Ihre Erweiterung zwar jederzeit einen Listener hinzufügen kann, er jedoch erst ausgelöst wird, nachdem der Benutzer das [Netzwerkfenster](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) des Browsers mindestens einmal aktiviert hat.

## Syntax

```js-nolint
browser.devtools.network.onRequestFinished.addListener(listener)
browser.devtools.network.onRequestFinished.removeListener(listener)
browser.devtools.network.onRequestFinished.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Beendet das Anhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

    - `request`
      - : `object`. Ein Objekt, das die Anforderung darstellt. Dieses Objekt ist ein einzelnes [HAR-Eintragsobjekt](http://www.softwareishard.com/blog/har-12-spec/#entries). Es definiert auch eine asynchrone Methode `getContent()`, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt, das mit einem Array von zwei Elementen aufgelöst wird. Das erste Element ist der HTTP-Antwortkörper als Zeichenkette, während das zweite Element der [MIME-Typ](/de/docs/Glossary/MIME_type) der HTTP-Antwort ebenfalls als Zeichenkette ist.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Hinzufügen eines Listeners, der die Server-IP-Adresse und den Antwortkörper für jede Netzwerkanforderung protokolliert.

```js
function handleRequestFinished(request) {
  console.log("Server IP: ", request.serverIPAddress);
  request.getContent().then(([content, mimeType]) => {
    console.log("Content: ", content);
    console.log("MIME type: ", mimeType);
  });
}

browser.devtools.network.onRequestFinished.addListener(handleRequestFinished);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) API.

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
