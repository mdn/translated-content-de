---
title: browserAction.setBadgeBackgroundColor()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setBadgeBackgroundColor
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Legt die Hintergrundfarbe für das Badge fest. Tabs ohne eine spezifische Badge-Hintergrundfarbe erben die globale Badge-Hintergrundfarbe, die in Firefox standardmäßig `[217, 0, 0, 255]` ist.

Ab Firefox 63, solange die Badge-Textfarbe nicht explizit mit {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} gesetzt wurde, wird die Badge-Textfarbe automatisch auf Schwarz oder Weiß gesetzt, um den Kontrast mit der angegebenen Badge-Hintergrundfarbe zu maximieren. Zum Beispiel, wenn Sie die Badge-Hintergrundfarbe auf Weiß setzen, wird die Standard-Badge-Textfarbe auf Schwarz gesetzt und umgekehrt.

Andere Browser verwenden immer eine weiße Textfarbe, daher könnte es vorzuziehen sein, eine dunkle Hintergrundfarbe einzustellen, um sicherzustellen, dass der Text lesbar ist.

## Syntax

```js-nolint
browser.browserAction.setBadgeBackgroundColor(
  details // object
)
```

### Parameter

- `details`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `color`

      - : Die Farbe, angegeben als eine der folgenden:
        - ein String: jeder CSS [\<color>](/de/docs/Web/CSS/color_value) Wert, zum Beispiel `"red"`, `"#FF0000"`, oder `"rgb(255 0 0)"`. Wenn der String keine gültige Farbe ist, wird das zurückgegebene Promise abgelehnt und die Hintergrundfarbe wird nicht geändert.
        - ein {{WebExtAPIRef('browserAction.ColorArray')}} Objekt.
        - `null`. Wenn eine `tabId` angegeben ist, entfernt es die tab-spezifische Badge-Hintergrundfarbe, sodass der Tab die globale Badge-Hintergrundfarbe erbt. Andernfalls wird die globale Badge-Hintergrundfarbe auf den Standardwert zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt die Badge-Hintergrundfarbe nur für den angegebenen Tab. Die Farbe wird zurückgesetzt, wenn der Benutzer in diesem Tab zu einer neuen Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt die Badge-Hintergrundfarbe nur für das angegebene Fenster.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und die Farbe wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird stattdessen die globale Badge-Hintergrundfarbe gesetzt.

## Browser-Kompatibilität

{{Compat}}

Die Standardfarbe in Firefox ist: `[217, 0, 0, 255]`.

## Beispiele

Eine Hintergrundfarbe, die anfänglich rot ist und beim Klicken auf die Browseraktion grün wird:

```js
browser.browserAction.setBadgeText({ text: "1234" });
browser.browserAction.setBadgeBackgroundColor({ color: "red" });

browser.browserAction.onClicked.addListener(() => {
  browser.browserAction.setBadgeBackgroundColor({ color: "green" });
});
```

Setzen Sie die Badge-Hintergrundfarbe nur für den aktiven Tab:

```js
browser.browserAction.setBadgeText({ text: "1234" });
browser.browserAction.setBadgeBackgroundColor({ color: "red" });

browser.browserAction.onClicked.addListener((tab) => {
  browser.browserAction.setBadgeBackgroundColor({
    color: "green",
    tabId: tab.id,
  });
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setBadgeBackgroundColor) API von Chromium. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

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
