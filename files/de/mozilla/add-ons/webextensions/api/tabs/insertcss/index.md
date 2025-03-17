---
title: tabs.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{AddonSidebar}}

Fügt CSS in eine Seite ein.

> [!NOTE]
> Bei der Verwendung von Manifest V3 oder höher sollten Sie {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}} verwenden, um CSS einzufügen und zu entfernen.

Um diese API zu nutzen, müssen Sie die Berechtigung für die URL der Seite haben, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder durch die Verwendung der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Sie können nur CSS in Seiten einfügen, deren URL durch ein [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) ausgedrückt werden kann, d.h. ihr Schema muss "http", "https" oder "file" sein. Das bedeutet, dass Sie kein CSS in die integrierten Seiten des Browsers einfügen können, wie etwa about:debugging, about:addons oder die Seite, die geöffnet wird, wenn Sie einen neuen leeren Tab öffnen.

> [!NOTE]
> Firefox löst URLs in eingefügten CSS-Dateien relativ zur CSS-Datei selbst auf, und nicht relativ zur Seite, in die sie eingefügt wird.

Das eingefügte CSS kann wieder entfernt werden, indem {{WebExtAPIRef("tabs.removeCSS()")}} aufgerufen wird.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt (nur in Firefox).

## Syntax

```js-nolint
let inserting = browser.tabs.insertCSS(
  tabId,           // optional integer
  details          // object
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, in den das CSS eingefügt werden soll. Standardmäßig wird der aktive Tab des aktuellen Fensters verwendet.
- `details`

  - : Ein Objekt mit der Beschreibung des einzufügenden CSS. Es enthält folgende Eigenschaften:

    - `allFrames` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das CSS in alle Frames der aktuellen Seite eingefügt. Wenn `false`, wird das CSS nur in den Hauptframe eingefügt. Standardwert ist `false`.
    - `code` {{optional_inline}}
      - : `string`. Code, der als Text-String eingefügt werden soll.
    - `cssOrigin` {{optional_inline}}

      - : `string`. Dies kann einen der beiden Werte annehmen: "user", um das CSS als Benutzer-Stylesheet hinzuzufügen, oder "author", um es als Autor-Stylesheet hinzuzufügen. Wenn diese Option weggelassen wird, wird das CSS als Autor-Stylesheet hinzugefügt.

        - "user" ermöglicht es Ihnen, zu verhindern, dass Websites das eingefügte CSS überschreiben: siehe [Kaskadierungsreihenfolge](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order).
        - "author"-Stylesheets verhalten sich so, als ob sie nach allen anderen Autor-Regeln eingefügt werden, die von der Webseite angegeben wurden. Dies umfasst auch alle dynamisch durch Skripte der Seite hinzugefügten Autor-Stylesheets, selbst wenn diese Hinzufügung nach Abschluss des `insertCSS`-Aufrufs erfolgt.

    - `file` {{optional_inline}}
      - : `string`. Pfad zu einer Datei, die den einzufügenden Code enthält. In Firefox werden relative URLs relativ zur aktuellen Seiten-URL aufgelöst. In Chrome werden diese URLs relativ zur Basis-URL der Erweiterung aufgelöst. Damit es browserübergreifend funktioniert, können Sie den Pfad als absolute URL angeben, beginnend im Wurzelverzeichnis der Erweiterung, z. B.: `"/path/to/stylesheet.css"`.
    - `frameId` {{optional_inline}}
      - : `integer`. Der Frame, in den das CSS eingefügt werden soll. Standardwert ist `0` (der Hauptframe).
    - `matchAboutBlank` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Code in eingebettete "about:blank"- und "about:srcdoc"-Frames eingefügt, sofern Ihre Erweiterung Zugriff auf deren übergeordnetes Dokument hat. Der Code kann nicht in übergeordnete about:-Frames eingefügt werden. Standardwert ist `false`.
    - `runAt` {{optional_inline}}
      - : {{WebExtAPIRef('extensionTypes.RunAt')}}. Der früheste Zeitpunkt, zu dem der Code in den Tab eingefügt wird. Standardwert ist "document_idle".

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das gesamte CSS eingefügt wurde. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung zurückgewiesen.

## Beispiele

Dieses Beispiel fügt CSS, das aus einem String stammt, in den aktuell aktiven Tab ein.

```js
let css = "body { border: 20px dotted pink; }";

browser.browserAction.onClicked.addListener(() => {
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let insertingCSS = browser.tabs.insertCSS({ code: css });
  insertingCSS.then(null, onError);
});
```

Dieses Beispiel fügt CSS ein, das aus einer Datei geladen wird, die mit der Erweiterung geliefert wird. Das CSS wird in den Tab eingefügt, dessen ID 2 ist:

```js
browser.browserAction.onClicked.addListener(() => {
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let insertingCSS = browser.tabs.insertCSS(2, { file: "content-style.css" });
  insertingCSS.then(null, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-insertCSS)-API von Chromium. Diese Dokumentation wurde aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code abgeleitet.

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
