---
title: browserAction.setBadgeTextColor()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setBadgeTextColor
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Legt die Textfarbe für das Badge der Browser-Aktion fest. Tabs ohne eine spezifische Badge-Textfarbe erben die globale Badge-Textfarbe.

## Syntax

```js-nolint
browser.browserAction.setBadgeTextColor(
  details // object
)
```

### Parameter

- `details`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `color`

      - : Die Farbe, angegeben als eine der folgenden Möglichkeiten:
        - ein String: ein beliebiger CSS [\<color>](/de/docs/Web/CSS/color_value) Wert, zum Beispiel `"red"`, `"#FF0000"` oder `"rgb(255 0 0)"`. Wenn der String keine gültige Farbe darstellt, wird das zurückgegebene Versprechen abgelehnt und die Textfarbe wird nicht geändert.
        - ein {{WebExtAPIRef('browserAction.ColorArray')}} Objekt.
        - `null`. Wenn eine `tabId` angegeben ist, entfernt es die tab-spezifische Badge-Textfarbe, sodass der Tab die globale Badge-Textfarbe erbt. Andernfalls wird die globale Badge-Textfarbe auf den Standardwert zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Legt die Badge-Textfarbe nur für den angegebenen Tab fest. Die Farbe wird zurückgesetzt, wenn der Benutzer diesen Tab auf eine neue Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Legt die Badge-Textfarbe nur für das angegebene Fenster fest.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und die Farbe wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird stattdessen die globale Badge-Textfarbe festgelegt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Eine Badge-Textfarbe, die als Rot beginnt und Grün wird, wenn auf die Browser-Aktion geklickt wird:

```js
browser.browserAction.setBadgeText({ text: "1234" });
browser.browserAction.setBadgeTextColor({ color: "red" });

browser.browserAction.onClicked.addListener(() => {
  browser.browserAction.setBadgeTextColor({ color: "green" });
});
```

Setzen Sie die Badge-Textfarbe nur für den aktiven Tab:

```js
browser.browserAction.setBadgeText({ text: "1234" });
browser.browserAction.setBadgeTextColor({ color: "red" });

browser.browserAction.onClicked.addListener((tab) => {
  browser.browserAction.setBadgeTextColor({
    color: "green",
    tabId: tab.id,
  });
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setBadgeBackgroundColor) API. Diese Dokumentation leitet sich von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code ab.

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
