---
title: storage.StorageArea.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/onChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Löst aus, wenn sich ein oder mehrere Elemente in einem Speicherbereich ändern, und gibt Details zu den geänderten Schlüsseln zurück. Im Vergleich zu {{WebExtAPIRef("storage.onChanged")}} ermöglicht dieses Ereignis das Lauschen auf Änderungen in einem der Speicherbereiche: `local`, `managed`, `session` und `sync`.

> [!NOTE]
> In Firefox umfasst die zurückgegebene Information alle Schlüssel innerhalb des Speicherbereichs. Zudem kann der Callback aufgerufen werden, wenn es keine Änderung an den zugrundeliegenden Daten gibt. Details zu den geänderten Elementen finden Sie, indem Sie jedes zurückgegebene Schlüsselobjekt {{WebExtAPIRef('storage.StorageChange')}} untersuchen. Siehe [Firefox Bug 1833153](https://bugzil.la/1833153).

## Syntax

```js-nolint
// local can also be sync, managed, or session
browser.storage.local.onChanged.addListener(listener)
browser.storage.local.onChanged.removeListener(listener)
browser.storage.local.onChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `changes`
      - : `object`. Objekt, das die Änderung beschreibt. Es enthält eine Eigenschaft für jeden geänderten Schlüssel. Der Name der Eigenschaft ist der Name des geänderten Schlüssels, und sein Wert ist ein {{WebExtAPIRef('storage.StorageChange')}} Objekt, das die Änderung an diesem Element beschreibt.

## Beispiele

```js
/*
Log the old value and its new value of
changes in the local storage.
*/
function logStorageChange(changes) {
  const changedItems = Object.keys(changes);

  for (const item of changedItems) {
    console.log(`${item} has changed:`);
    console.log("Old value: ", changes[item].oldValue);
    console.log("New value: ", changes[item].newValue);
  }
}

browser.storage.local.onChanged.addListener(logStorageChange);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#event-StorageArea-onChanged) API. Diese Dokumentation leitet sich von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code ab.

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
