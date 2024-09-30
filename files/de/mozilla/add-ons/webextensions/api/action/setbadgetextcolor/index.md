---
title: action.setBadgeTextColor()
slug: Mozilla/Add-ons/WebExtensions/API/action/setBadgeTextColor
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Legt die Textfarbe für das Badge der Browser-Aktion fest. Tabs ohne eine spezifische Badge-Textfarbe übernehmen die globale Badge-Textfarbe.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

## Syntax

```js-nolint
browser.action.setBadgeTextColor(
  details // object
)
```

### Parameter

- `details`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `color`

      - : Die Farbe, angegeben als eine der folgenden Möglichkeiten:

        - ein String: jeder CSS-[\<color>](/de/docs/Web/CSS/color_value) Wert, zum Beispiel `"red"`, `"#FF0000"` oder `"rgb(255 0 0)"`. Wenn der String keine gültige Farbe ist, wird das zurückgegebene Versprechen abgelehnt und die Textfarbe wird nicht geändert.
        - ein `{{WebExtAPIRef('action.ColorArray')}}` Objekt.
        - `null`. Wenn ein `tabId` angegeben ist, entfernt es die tab-spezifische Badge-Textfarbe, sodass der Tab die globale Badge-Textfarbe übernimmt. Andernfalls wird die globale Badge-Textfarbe auf den Standardwert zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt die Badge-Textfarbe nur für den angegebenen Tab. Die Farbe wird zurückgesetzt, wenn der Benutzer diesen Tab auf eine neue Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt die Badge-Textfarbe nur für das angegebene Fenster.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und die Farbe wird nicht gesetzt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird stattdessen die globale Badge-Textfarbe gesetzt.

## Beispiele

Eine Badge-Textfarbe, die zunächst rot ist und grün wird, wenn auf die Browser-Aktion geklickt wird:

```js
browser.action.setBadgeText({ text: "1234" });
browser.action.setBadgeTextColor({ color: "red" });

browser.action.onClicked.addListener(() => {
  browser.action.setBadgeTextColor({ color: "green" });
});
```

Setzen Sie die Badge-Textfarbe nur für den aktiven Tab:

```js
browser.action.setBadgeText({ text: "1234" });
browser.action.setBadgeTextColor({ color: "red" });

browser.action.onClicked.addListener((tab) => {
  browser.action.setBadgeTextColor({
    color: "green",
    tabId: tab.id,
  });
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-setBadgeBackgroundColor) API. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

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
