---
title: runtime.getBackgroundPage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getBackgroundPage
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ruft das [`Window`](/de/docs/Web/API/Window)-Objekt für die Hintergrundseite ab, die innerhalb der aktuellen Erweiterung ausgeführt wird. Wenn die Hintergrundseite nicht persistent ist (eine Ereignisseite) und nicht läuft, wird die Hintergrundseite gestartet.

Dies bietet eine bequeme Möglichkeit für andere privilegierte Erweiterungsskripte, direkten Zugriff auf den Geltungsbereich des Hintergrundskripts zu erhalten. Dadurch können sie auf Variablen zugreifen oder Funktionen aufrufen, die in diesem Geltungsbereich definiert sind. "Privilegiertes Skript" umfasst hier Skripte, die in [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) ausgeführt werden, oder Skripte, die in [Browser-Aktions](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button)- oder [Seiten-Aktions](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)-Popups ausgeführt werden, jedoch _nicht_ [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts).

Beachten Sie, dass Variablen, die mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) oder [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) deklariert wurden, nicht im `Window`-Objekt erscheinen, das von dieser Funktion zurückgegeben wird.

**Bitte beachten Sie auch, dass diese Methode in einem privaten Fenster in Firefox nicht verwendet werden kann** - sie gibt immer `null` zurück. Weitere Informationen finden Sie im [zugehörigen Bug bei Bugzilla](https://bugzil.la/1329304).

Wenn die Hintergrundseite eine Ereignisseite ist, stellt das System sicher, dass sie geladen ist, bevor das Versprechen gelöst wird.

Dies ist eine asynchrone Funktion, die ein {{JSxRef("Promise")}} zurückgibt.

> [!NOTE]
> In Firefox kann diese Methode im Privaten Modus nicht verwendet werden — sie gibt immer `null` zurück. Weitere Informationen finden Sie unter [Firefox Bug 1329304](https://bugzil.la/1329304).
>
> In Chrome ist diese Methode nur mit persistenten Hintergrundseiten verfügbar, die in Manifest V3 nicht verfügbar sind. Daher sollten Sie in Betracht ziehen, Manifest V2 zu verwenden. Weitere Details finden Sie unter [Migration zu einem Service Worker](https://developer.chrome.com/docs/extensions/develop/migrate/to-service-workers).
>
> Erwägen Sie die Verwendung von {{WebExtAPIRef("runtime.sendMessage","runtime.sendMessage()")}} oder {{WebExtAPIRef("runtime.connect","runtime.connect()")}}, die in beiden oben genannten Szenarien korrekt funktionieren.

## Syntax

```js-nolint
let gettingPage = browser.runtime.getBackgroundPage()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit dem [`Window`](/de/docs/Web/API/Window)-Objekt der Hintergrundseite erfüllt wird, falls vorhanden. Wenn die Erweiterung keine Hintergrundseite enthält, wird das Versprechen mit einer Fehlermeldung abgelehnt.

## Beispiele

Angenommen, ein [Hintergrundskript](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) definiert eine Funktion `foo()`:

```js
// background.js

function foo() {
  console.log("I'm defined in background.js");
}
```

Ein Skript, das in einem [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) läuft, kann diese Funktion direkt so aufrufen:

```js
// popup.js

function onGot(page) {
  page.foo();
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let getting = browser.runtime.getBackgroundPage();
getting.then(onGot, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-getBackgroundPage)-API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

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
