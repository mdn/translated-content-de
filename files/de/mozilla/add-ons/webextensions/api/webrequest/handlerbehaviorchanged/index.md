---
title: webRequest.handlerBehaviorChanged()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/handlerBehaviorChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Diese Funktion kann verwendet werden, um sicherzustellen, dass Ereignis-Listener korrekt angewendet werden, wenn sich Seiten im In-Memory-Cache des Browsers befinden. Wenn der Browser eine Seite geladen hat und die Seite neu geladen wird, kann der Browser die Seite aus seinem In-Memory-Cache neu laden. In diesem Fall werden keine Ereignisse für die Anfrage ausgelöst.

Angenommen, die Aufgabe einer Erweiterung besteht darin, Webanfragen gegen ein Muster zu blockieren, und folgendes Szenario tritt ein:

- Der Benutzer lädt eine Seite, die eine bestimmte Anfrage enthält, und das Muster erlaubt die Anfrage.
- Die Ressource wird geladen und im Speicher zwischengespeichert.
- Die Muster der Erweiterung werden so aktualisiert, dass die Ressource nicht mehr erlaubt wäre.
- Der Benutzer lädt die Seite neu.

Da die Seite aus dem Speicher-Cache neu geladen wird, wird der Listener möglicherweise nicht erneut aufgerufen, und die Anfrage wird trotz der neuen Richtlinie der Erweiterung geladen.

Die Funktion `handlerBehaviorChanged()` wurde entwickelt, um dieses Problem zu lösen. Sie leert den In-Memory-Cache, sodass das Neuladen von Seiten Ereignis-Listener auslöst.

Da `handlerBehaviorChanged()` den Cache leert, kann dies teuer und schlecht für die Leistung sein. Das WebRequest-Modul definiert eine schreibgeschützte Eigenschaft {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", "MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}: Mehr Aufrufe als diese Anzahl in 10 Minuten haben keine Wirkung.

Die Implementierung des Cachings und damit die Notwendigkeit dieser Funktion variiert von Browser zu Browser, sodass diese Funktion in einigen Browsern nichts bewirkt.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let flushingCache = browser.webRequest.handlerBehaviorChanged()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn der Vorgang abgeschlossen ist.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Im folgenden Code-Snippet leeren wir den In-Memory-Cache durch einen Aufruf von `handlerBehaviorChanged()` und melden diese Aktion, indem wir eine entsprechende Nachricht an die Konsole ausgeben.

```js
function onFlushed() {
  console.log(`In-memory cache flushed`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let flushingCache = browser.webRequest.handlerBehaviorChanged();
flushingCache.then(onFlushed, onError);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#method-handlerBehaviorChanged) API von Chromium. Diese Dokumentation stammt aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

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
