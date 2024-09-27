---
title: cookies.CookieStore
slug: Mozilla/Add-ons/WebExtensions/API/cookies/CookieStore
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Typ `CookieStore` der {{WebExtAPIRef("cookies")}} API repräsentiert einen Cookie-Speicher im Browser.

Fenster in verschiedenen Browsing-Modi können unterschiedliche Cookie-Speicher verwenden. Beispielsweise verwendet ein Fenster im privaten Modus/Inkognito-Modus einen separaten Cookie-Speicher von einem nicht-privaten/Inkognito-Fenster. Außerdem kann ein Fenster mehrere Cookie-Speicher haben, wenn in Firefox [Container-Tabs](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) verwendet werden.

Weitere Informationen zu Cookie-Speichern finden Sie unter [Arbeiten mit der Cookies API](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API#cookie_stores).

## Typ

Werte dieses Typs sind Objekte, die die folgenden Eigenschaften enthalten können:

- `id`
  - : Ein `string`, der den eindeutigen Bezeichner für den Cookie-Speicher darstellt.
- `incognito` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob es sich um einen Inkognito-Cookie-Speicher handelt.
    Diese Eigenschaft wird in Chrome oder Safari nicht unterstützt. Sie können jedoch Inkognito-Cookie-Speicher in Chrome daran erkennen, dass ihre `id` immer "1" ist.
- `tabIds`
  - : Ein `array` von `integers`, das alle Browser-Tabs identifiziert, die diesen Cookie-Speicher gemeinsam nutzen.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Im folgenden Ausschnitt wird die Methode {{WebExtAPIRef("cookies.getAllCookieStores()")}} verwendet, um alle derzeit im Browser verfügbaren Cookie-Speicher abzurufen und die ID jedes Cookie-Speichers sowie die Tabs, die derzeit jeden Cookie-Speicher gemeinsam nutzen, auszugeben.

```js
function logStores(cookieStores) {
  for (const store of cookieStores) {
    console.log(`Cookie store: ${store.id}\n Tab IDs: ${store.tabIds}`);
  }
}

browser.cookies.getAllCookieStores().then(logStores);
```

Der folgende Code-Schnipsel holt alle Cookie-Speicher und protokolliert dann die Gesamtanzahl der Speicher und wie viele dieser Speicher Inkognito sind.

```js
browser.cookies.getAllCookieStores().then((stores) => {
  const incognitoStores = stores.map((store) => store.incognito);
  console.log(
    `Of ${stores.length} cookie stores, ${incognitoStores.length} are incognito.`,
  );
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#type-CookieStore) API. Diese Dokumentation stammt aus [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

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
