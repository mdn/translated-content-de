---
title: storage.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/storage/onChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn {{WebExtAPIRef('storage.StorageArea.set','storageArea.set')}}, {{WebExtAPIRef('storage.StorageArea.remove','storageArea.remove')}} oder {{WebExtAPIRef('storage.StorageArea.clear','storageArea.clear')}} auf einem Speicherbereich ausgeführt wird und Details nur der geänderten Schlüssel zurückgibt. Ein Callback wird nur aufgerufen, wenn es Änderungen an den zugrunde liegenden Daten gibt.

> [!NOTE]
> In Firefox umfassen die zurückgegebenen Informationen alle Schlüssel innerhalb des Speicherbereichs, gegen den {{WebExtAPIRef('storage.StorageArea.set','storageArea.set')}} ausgeführt wurde, unabhängig davon, ob sie geändert wurden oder nicht. Auch kann ein Callback aufgerufen werden, wenn es keine Änderung an den zugrunde liegenden Daten gibt. Details der geänderten Elemente werden ermittelt, indem das {{WebExtAPIRef('storage.StorageChange')}}-Objekt jedes zurückgegebenen Schlüssels untersucht wird. Siehe [Firefox Bug 1833153](https://bugzil.la/1833153).

## Syntax

```js-nolint
browser.storage.onChanged.addListener(listener)
browser.storage.onChanged.removeListener(listener)
browser.storage.onChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, diesem Ereignis zuzuhören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es registriert ist, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `changes`
      - : `object`. Objekt, das die Änderung beschreibt. Der Name jeder Eigenschaft ist der Name jedes Schlüssels. Der Wert jedes Schlüssels ist ein {{WebExtAPIRef('storage.StorageChange')}}-Objekt, das die Änderung dieses Elements beschreibt.
    - `areaName`
      - : `string`. Der Name des Speicherbereichs (`"sync"`, `"local"` oder `"managed"`), auf den die Änderungen angewendet wurden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
/*
Protokolliere den geänderten Speicherbereich,
und protokolliere dann für jedes geänderte Element
dessen alten Wert und neuen Wert.
*/
function logStorageChange(changes, area) {
  console.log(`Change in storage area: ${area}`);

  const changedItems = Object.keys(changes);

  for (const item of changedItems) {
    console.log(`${item} has changed:`);
    console.log("Old value: ", changes[item].oldValue);
    console.log("New value: ", changes[item].newValue);
  }
}

browser.storage.onChanged.addListener(logStorageChange);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#event-onChanged) API. Diese Dokumentation stammt aus [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.

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
