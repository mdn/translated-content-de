---
title: cookies.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/cookies/onChanged
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Das `onChanged` Ereignis der {{WebExtAPIRef("cookies")}} API wird ausgelöst, wenn ein Cookie, auf das die Erweiterung zugreifen kann, gesetzt oder entfernt wird.

> [!NOTE]
> Wenn [Speicherpartitionierung](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) aktiv ist, enthält `cookies.Cookie.partitionKey` die Beschreibung der Speicherpartition des Cookies. Beim Ändern von Cookies ist es wichtig, diesen Wert an {{WebExtAPIRef("cookies.set()")}} oder {{WebExtAPIRef("cookies.remove()")}} zu übergeben, um sicherzustellen, dass die Erweiterung mit dem richtigen Cookie arbeitet.

Beachten Sie, dass die Aktualisierung der Eigenschaften eines Cookies als ein zweistufiger Prozess implementiert wird:

1. Zuerst wird das zu aktualisierende Cookie entfernt, was eine Benachrichtigung mit einer {{WebExtAPIRef("cookies.OnChangedCause")}} von `overwrite` erzeugt.
2. Anschließend wird ein neues Cookie mit den aktualisierten Werten geschrieben, was eine zweite Benachrichtigung mit einer {{WebExtAPIRef("cookies.OnChangedCause")}} von `explicit` erzeugt.

## Syntax

```js-nolint
browser.cookies.onChanged.addListener(listener)
browser.cookies.onChanged.removeListener(listener)
browser.cookies.onChanged.hasListener(listener)
```

Diese API ist auch als `browser.cookies.onChanged.*` verfügbar.

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, ansonsten `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion werden folgende Argumente übergeben:
    - `changeInfo`
      - : Ein `object`, das Details der Änderung enthält, die aufgetreten ist. Seine Eigenschaften sind:
        - `removed`
          - : Ein `boolean`, der auf `true` gesetzt ist, wenn ein Cookie entfernt wurde, und auf `false`, wenn nicht.
        - `cookie`
          - : Ein {{WebExtAPIRef('cookies.Cookie')}} Objekt, das Informationen über das gesetzte oder entfernte Cookie enthält.
        - `cause`
          - : Ein {{WebExtAPIRef('cookies.OnChangedCause')}} Wert, der den zugrundeliegenden Grund für die Änderung des Cookies darstellt.

## Beispiele

Dieses Beispiel hört auf `onChanged` Ereignisse und protokolliert Details aus dem `changeInfo` Argument:

```js
browser.cookies.onChanged.addListener((changeInfo) => {
  console.log(
    `Cookie changed: \n` +
      ` * Cookie: ${JSON.stringify(changeInfo.cookie)}\n` +
      ` * Cause: ${changeInfo.cause}\n` +
      ` * Removed: ${changeInfo.removed}`,
  );
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#event-onChanged) API von Chromium. Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

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
