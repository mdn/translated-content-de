---
title: cookies.set()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/set
l10n:
  sourceCommit: f5218067dfa081ec5b03746451c1fffc92f5cc01
---

{{AddonSidebar}}

Die **`set()`**-Methode der {{WebExtAPIRef("cookies")}} API setzt ein Cookie mit den angegebenen Cookie-Daten. Diese Methode entspricht dem Senden eines HTTP-`Set-Cookie`-Headers während einer Anfrage an eine gegebene URL.

Um diese Methode zu verwenden, muss eine Erweiterung über die Berechtigung `"cookies"` und die entsprechenden Host-Berechtigungen verfügen. Weitere Details finden Sie unter [`cookie`-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#permissions).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let setting = browser.cookies.set(
  details               // object
)
```

### Parameter

- `details`

  - : Ein `object`, das die Details des Cookies enthält, das Sie setzen möchten. Es kann folgende Eigenschaften haben:

    - `domain` {{optional_inline}}
      - : Ein `string`, der die Domain des Cookies darstellt. Wenn weggelassen, wird das Cookie zu einem Host-only-Cookie.
    - `expirationDate` {{optional_inline}}
      - : Eine `number`, die das Ablaufdatum des Cookies als Anzahl der Sekunden seit der UNIX-Epoche darstellt. Wenn weggelassen, wird das Cookie zu einem Sitzungscookie.
    - `firstPartyDomain` {{optional_inline}}
      - : Ein `string`, der die Erstanbieter-Domain darstellt, mit der das Cookie verknüpft ist. Diese Eigenschaft muss angegeben werden, wenn der Browser die Erstanbieter-Isolation aktiviert hat. Siehe [Erstanbieter-Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
    - `httpOnly` {{optional_inline}}
      - : Ein `boolean`, das angibt, ob das Cookie als HttpOnly (`true`) markiert ist oder nicht (false). Wenn weggelassen, ist der Standardwert false.
    - `name` {{optional_inline}}
      - : Ein `string`, der den Namen des Cookies darstellt. Wenn weggelassen, ist dies standardmäßig leer.
    - `partitionKey` {{optional_inline}}

      - : Ein `object`, das die [Speicherpartition](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) darstellt, in der das Cookie gesetzt wird. Fügen Sie dieses Objekt hinzu, um ein Cookie in partitioniertem Speicher zu setzen. Dieses Objekt enthält:

        - `topLevelSite` {{optional_inline}}
          - : Ein `string`, der die Erstanbieter-URL der obersten Seiten-Speicherpartition darstellt, die das Cookie enthält.

    - `path` {{optional_inline}}
      - : Ein `string`, der den Pfad des Cookies darstellt. Wenn weggelassen, ist der Standardwert der Pfadanteil des URL-Parameters.
    - `sameSite` {{optional_inline}}
      - : Ein {{WebExtAPIRef("cookies.SameSiteStatus")}}-Wert, der den SameSite-Status des Cookies angibt. Wenn weggelassen, ist der Standardwert `unspecified`.
    - `secure` {{optional_inline}}
      - : Ein `boolean`, das angibt, ob das Cookie als sicher (`true`) markiert ist oder nicht (false). Wenn weggelassen, ist der Standardwert false.
    - `storeId` {{optional_inline}}
      - : Ein `string`, der die ID des Cookie-Speichers darstellt, in dem das Cookie gesetzt werden soll. Wenn weggelassen, wird das Cookie im Cookie-Speicher des aktuellen Ausführungskontexts gesetzt.
    - `url`
      - : Ein `string`, der die Anfrage-URI darstellt, die mit dem Cookie verknüpft wird. Dieser Wert kann die Standardwerte für Domain und Pfad des erstellten Cookies beeinflussen. Wenn keine Host-Berechtigungen für diese URL in der Manifestdatei angegeben sind, schlägt der Methodenaufruf fehl.
    - `value` {{optional_inline}}
      - : Ein `string`, der den Wert des Cookies darstellt. Wenn weggelassen, ist dies standardmäßig leer.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('cookies.Cookie')}}-Objekt erfüllt wird, das Details über das gesetzte Cookie enthält.

Wenn es mehr als ein Cookie mit demselben Namen für eine URL gibt, wird das Cookie mit dem längsten Pfad zurückgegeben. Für Cookies mit gleicher Pfadlänge wird das Cookie mit der frühesten Erstellungszeit zurückgegeben.

> [!NOTE]
> Vor Firefox 133, wenn es mehr als ein Cookie mit demselben Namen gab, gab Firefox das Cookie mit der frühesten Erstellungszeit zurück.

Wenn der Aufruf fehlschlägt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel setzt ein Cookie für das Dokument des aktiven Tabs:

```js
let getActive = browser.tabs.query({ active: true, currentWindow: true });
getActive.then(setCookie);

function setCookie(tabs) {
  browser.cookies.set({
    url: tabs[0].url,
    name: "favorite-color",
    value: "red",
  });
}
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-set) API. Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

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
