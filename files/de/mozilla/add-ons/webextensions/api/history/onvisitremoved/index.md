---
title: history.onVisitRemoved
slug: Mozilla/Add-ons/WebExtensions/API/history/onVisitRemoved
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Seite vollständig aus dem Browser-Verlauf entfernt wird.

- Wenn alle Besuche einer einzelnen Seite entfernt werden (beispielsweise durch die Verwendung von {{WebExtAPIRef("history.deleteUrl")}}), wird dieses Ereignis einmal ausgelöst.
- Wenn ein Bereich von Besuchen entfernt wird (beispielsweise durch die Verwendung von {{WebExtAPIRef("history.deleteRange")}} oder einer Browserfunktion wie "Neueste Chronik löschen"), wird es einmal für jede Seite ausgelöst, deren Besuche alle innerhalb des gelöschten Bereichs liegen.
- Wenn der gesamte Verlauf des Browsers gelöscht wird (beispielsweise durch die Verwendung von {{WebExtAPIRef("history.deleteAll")}}), wird es nur einmal ausgelöst.

## Syntax

```js-nolint
browser.history.onVisitRemoved.addListener(listener)
browser.history.onVisitRemoved.removeListener(listener)
browser.history.onVisitRemoved.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn der Listener registriert ist, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion wird dieses Argument übergeben:
    - `removed`
      - : `object`. Details zur Entfernung. Dies ist ein Objekt, das zwei Eigenschaften enthält: ein boolesches `allHistory` und ein Array `urls`.
        - Wenn dieses Ereignis ausgelöst wird, weil der gesamte Verlauf gelöscht wurde, ist `allHistory` `true` und `urls` ist ein leeres Array.
        - Andernfalls ist `allHistory` `false` und `urls` enthält ein Element, das die URL der entfernten Seite ist.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
function onRemoved(removed) {
  if (removed.allHistory) {
    console.log("All history removed");
  } else if (removed.urls.length) {
    console.log(`URL removed: ${removed.urls[0]}`);
  }
}

browser.history.onVisitRemoved.addListener(onRemoved);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#event-onVisitRemoved). Diese Dokumentation stammt aus [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.

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
