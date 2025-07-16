---
title: devtools.panels.create()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/create
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Fügt den Entwicklertools ein neues Panel hinzu.

Diese Funktion benötigt: einen Titel, eine URL zu einer Icon-Datei und eine URL zu einer HTML-Datei. Es erstellt ein neues Panel in den Entwicklertools, dessen Inhalt durch die HTML-Datei festgelegt wird. Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das zu einem [`ExtensionPanel`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel)-Objekt aufgelöst wird, das das neue Panel repräsentiert.

## Syntax

```js-nolint
let creating = browser.devtools.panels.create(
  title,       // string
  iconPath,    // string
  pagePath     // string
)
```

### Parameter

- `title`
  - : `string`. Der Titel des Panels. Dieser erscheint in der Tab-Leiste am oberen Rand des Entwicklertools-Fensters und ist die Hauptmöglichkeit, wie der Benutzer Ihr Panel identifizieren kann.
- `iconPath`
  - : `string`. Spezifiziert ein Icon, das neben dem Titel angezeigt wird. Es wird als URL zu einer Bilddatei bereitgestellt, die mit Ihrer Erweiterung gebündelt wurde. Auf Chromium-basierten Browsern und Safari wird diese URL als absolut aufgelöst, während Firefox diese URL relativ zur aktuellen Erweiterungsseite auflöst (es sei denn, sie wird als absolute URL angegeben, z.B. "/icons/panel.png").
- `pagePath`
  - : string. Spezifiziert eine HTML-Datei, die den Inhalt des Panels definiert. Sie wird als URL zu einer HTML-Datei bereitgestellt, die mit Ihrer Erweiterung gebündelt ist. Die URL kann als absolute URL oder relativ zur aktuellen Erweiterungsseite aufgelöst werden. Siehe die Daten zur Browser-Kompatibilität für weitere Informationen. Die HTML-Datei kann CSS- und JavaScript-Dateien enthalten, genau wie eine normale Webseite. Das JavaScript, das im Panel läuft, kann die Entwicklertools-APIs verwenden. Siehe [Erweiterung der Entwicklertools](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools).

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem [`ExtensionPanel`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel)-Objekt erfüllt wird, das das neue Panel repräsentiert.

## Beispiele

Ein neues Panel erstellen und Listener für seine onShown- und onHidden-Ereignisse hinzufügen:

```js
function handleShown() {
  console.log("panel is being shown");
}

function handleHidden() {
  console.log("panel is being hidden");
}

browser.devtools.panels
  .create(
    "My Panel", // title
    "/icons/star.png", // icon
    "/devtools/panel/panel.html", // content
  )
  .then((newPanel) => {
    newPanel.onShown.addListener(handleShown);
    newPanel.onHidden.addListener(handleHidden);
  });
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels)-API von Chromium.

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
