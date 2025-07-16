---
title: runtime.lastError
slug: Mozilla/Add-ons/WebExtensions/API/runtime/lastError
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Dieser Wert wird verwendet, um eine Fehlermeldung von einer asynchronen API zu melden, wenn der asynchronen API ein Callback übergeben wird. Dies ist nützlich für Erweiterungen, die die auf Callback basierende Version der WebExtension-APIs verwenden.

Es ist nicht erforderlich, diese Eigenschaft zu überprüfen, wenn Sie die auf Versprechen basierende Version der APIs verwenden: Stattdessen übergeben Sie einen Fehler-Handler an das Versprechen:

```js
const gettingCookies = browser.cookies.getAll();
gettingCookies.then(onGot, onError);
```

Die `runtime.lastError`-Eigenschaft wird gesetzt, wenn eine asynchrone Funktion eine Fehlerbedingung hat, die sie ihrem Aufrufer melden muss.

Wenn Sie eine asynchrone Funktion aufrufen, die `lastError` setzen könnte, wird erwartet, dass Sie den Fehler überprüfen, wenn Sie das Ergebnis der Funktion verarbeiten. Wenn `lastError` gesetzt wurde und Sie es nicht innerhalb der Callback-Funktion überprüfen, wird ein Fehler ausgelöst.

## Syntax

```js-nolint
let myError = browser.runtime.lastError;  // null or Error object
```

### Wert

Ein {{jsxref("Error")}} Objekt, das den Fehler darstellt. Die {{jsxref("Error.message", "message")}}-Eigenschaft ist ein `string` mit einer menschenlesbaren Beschreibung des Fehlers. Wenn `lastError` nicht gesetzt wurde, ist der Wert `null`.

## Beispiele

Setzen Sie ein Cookie und verwenden Sie ein Callback, um das neue Cookie zu protokollieren oder einen Fehler zu melden:

```js
function logCookie(c) {
  if (browser.runtime.lastError) {
    console.error(browser.runtime.lastError);
  } else {
    console.log(c);
  }
}

browser.cookies.set({ url: "https://developer.mozilla.org/" }, logCookie);
```

Dasselbe, aber mit einem Versprechen, um das Ergebnis von `setCookie()` zu bearbeiten:

```js
function logCookie(c) {
  console.log(c);
}

function logError(e) {
  console.error(e);
}

const setCookie = browser.cookies.set({
  url: "https://developer.mozilla.org/",
});

setCookie.then(logCookie, logError);
```

> [!NOTE]
> `runtime.lastError` ist ein Alias für {{WebExtAPIRef("extension.lastError")}}. Sie werden zusammen gesetzt, und die Überprüfung eines von beiden wird funktionieren.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#property-lastError) API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

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
