---
title: action.setBadgeBackgroundColor()
slug: Mozilla/Add-ons/WebExtensions/API/action/setBadgeBackgroundColor
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Legt die Hintergrundfarbe für das Badge fest. Tabs ohne eine bestimmte Hintergrundfarbe für das Badge erben die globale Hintergrundfarbe des Badges, die in Firefox standardmäßig `[217, 0, 0, 255]` ist.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

In Firefox wird, sofern die Textfarbe des Badges nicht explizit mit {{WebExtAPIRef("action.setBadgeTextColor()")}} gesetzt wird, die Textfarbe des Badges automatisch auf Schwarz oder Weiß gesetzt, um den Kontrast mit der angegebenen Hintergrundfarbe des Badges zu maximieren. Wenn Sie beispielsweise die Hintergrundfarbe des Badges auf Weiß setzen, wird die Standard-Badge-Textfarbe auf Schwarz gesetzt und umgekehrt.

Andere Browser verwenden immer eine weiße Textfarbe, daher könnte es vorzuziehen sein, einen dunklen Hintergrund zu setzen, um sicherzustellen, dass der Text lesbar ist.

## Syntax

```js-nolint
browser.action.setBadgeBackgroundColor(
  details // object
)
```

### Parameter

- `details`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `color`
      - : Die Farbe, angegeben als eine der folgenden Optionen:
        - ein String: Jeder CSS [\<color>](/de/docs/Web/CSS/color_value)-Wert, zum Beispiel `"red"`, `"#FF0000"` oder `"rgb(255 0 0)"`. Wenn der String keine gültige Farbe ist, wird das zurückgegebene Versprechen abgelehnt und die Hintergrundfarbe nicht geändert.
        - ein {{WebExtAPIRef('action.ColorArray')}}-Objekt.
        - `null`. Wenn eine `tabId` angegeben ist, wird die tab-spezifische Hintergrundfarbe des Badges entfernt, sodass der Tab die globale Hintergrundfarbe des Badges erbt. Andernfalls wird die globale Hintergrundfarbe des Badges auf den Standardwert zurückgesetzt.

        Die Standardfarbe in Firefox ist: `[217, 0, 0, 255]`.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt die Hintergrundfarbe des Badges nur für den angegebenen Tab. Die Farbe wird zurückgesetzt, wenn der Benutzer diesen Tab auf eine neue Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt die Hintergrundfarbe des Badges nur für das angegebene Fenster.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und die Farbe wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird stattdessen die globale Hintergrundfarbe des Badges gesetzt.

## Beispiele

Eine Hintergrundfarbe, die zunächst rot ist und grün wird, wenn die Browser-Aktion geklickt wird:

```js
browser.action.setBadgeText({ text: "1234" });
browser.action.setBadgeBackgroundColor({ color: "red" });

browser.action.onClicked.addListener(() => {
  browser.action.setBadgeBackgroundColor({ color: "green" });
});
```

Setzt die Hintergrundfarbe des Badges nur für den aktiven Tab:

```js
browser.action.setBadgeText({ text: "1234" });
browser.action.setBadgeBackgroundColor({ color: "red" });

browser.action.onClicked.addListener((tab) => {
  browser.action.setBadgeBackgroundColor({
    color: "green",
    tabId: tab.id,
  });
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-setBadgeBackgroundColor) API. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) in dem Chromium-Code.

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
