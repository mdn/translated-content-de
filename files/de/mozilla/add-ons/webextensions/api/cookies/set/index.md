---
title: cookies.set()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/set
l10n:
  sourceCommit: f7d0598a727aeebbad5fce854f493023b3693a50
---

Setzt ein Cookie. Diese Methode entspricht dem Senden eines HTTP-`Set-Cookie`-Headers während einer Anfrage an eine URL.

Um diese Methode zu verwenden, muss eine Erweiterung die Berechtigung `"cookies"` und relevante Host-Berechtigungen haben. Weitere Informationen finden Sie unter [`cookie` permissions](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#permissions).

## Syntax

```js-nolint
let setting = browser.cookies.set(
  details               // object
)
```

### Parameter

- `details`
  - : Ein `object`, das die Details des Cookies enthält, das Sie setzen möchten. Es kann die folgenden Eigenschaften haben:
    - `domain` {{optional_inline}}
      - : Ein `string`, der die Domain des Cookies darstellt. Wenn weggelassen, wird das Cookie zu einem Host-Only-Cookie.
    - `expirationDate` {{optional_inline}}
      - : Eine `number`, die das Ablaufdatum des Cookies in Sekunden nach dem UNIX-Epoch darstellt. Kann Millisekunden im Bruchteil enthalten. Wenn weggelassen, wird das Cookie zu einem Sitzungscookie.
    - `firstPartyDomain` {{optional_inline}}
      - : Ein `string`, der die First-Party-Domain repräsentiert, mit der das Cookie verknüpft ist. Diese Eigenschaft muss angegeben werden, wenn der Browser die First-Party-Isolierung aktiviert hat. Siehe [First-party isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
    - `httpOnly` {{optional_inline}}
      - : Ein `boolean`, das angibt, ob das Cookie als HttpOnly (`true`) markiert ist oder nicht (false). Wenn weggelassen, ist der Standardwert false.
    - `name` {{optional_inline}}
      - : Ein `string`, das den Namen des Cookies darstellt. Wenn weggelassen, ist dies standardmäßig leer.
    - `partitionKey` {{optional_inline}}
      - : Ein `object`, das die [storage partition](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) darstellt, in der das Cookie gesetzt werden soll. Schließen Sie dieses Objekt ein, um ein Cookie im partitionierten Speicher zu setzen. Dieses Objekt enthält:
        - `topLevelSite` {{optional_inline}}
          - : Ein `string`, das die First-Party-URL der Top-Level-Site-Speicherpartition darstellt, die das Cookie enthält.

    - `path` {{optional_inline}}
      - : Ein `string`, das den Pfad des Cookies darstellt. Wenn weggelassen, ist dies standardmäßig der Pfadabschnitt des URL-Parameters.
    - `sameSite` {{optional_inline}}
      - : Ein {{WebExtAPIRef("cookies.SameSiteStatus")}}-Wert, der den SameSite-Status des Cookies angibt. Wenn weggelassen, ist der Standardwert `unspecified`.
    - `secure` {{optional_inline}}
      - : Ein `boolean`, das angibt, ob das Cookie als sicher (`true`) markiert ist oder nicht (false). Wenn weggelassen, ist der Standardwert false.
    - `storeId` {{optional_inline}}
      - : Ein `string`, das die ID des Cookie-Stores darstellt, in dem das Cookie gesetzt werden soll. Wenn weggelassen, wird das Cookie im Cookie-Store des aktuellen Ausführungskontexts gesetzt.
    - `url`
      - : Ein `string`, das die Anfrage-URI darstellt, die mit dem Cookie verknüpft ist. Dieser Wert kann die Standardwerte für Domain und Pfad des erstellten Cookies beeinflussen. Wenn für diese URL keine Host-Berechtigungen in der Manifestdatei angegeben sind, schlägt der Methodenaufruf fehl.
    - `value` {{optional_inline}}
      - : Ein `string`, das den Wert des Cookies darstellt. Wenn weggelassen, ist dies standardmäßig leer.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('cookies.Cookie')}}-Objekt erfüllt wird, das Details über das gesetzte Cookie enthält.

Wenn mehr als ein Cookie mit demselben Namen für eine URL existiert, wird das Cookie mit dem längsten Pfad zurückgegeben. Bei Cookies mit gleicher Pfadlänge wird das Cookie mit der frühesten Erstellungszeit zurückgegeben.

> [!NOTE]
> Vor Firefox 133, wenn es mehr als ein Cookie mit demselben Namen gab, gab Firefox das Cookie mit der frühesten Erstellungszeit zurück.

Wenn das angeforderte Cookie ungültig ist oder der Aufruf anderweitig fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

> [!NOTE]
> Vor Firefox 145 wurden ungültige Cookies erstellt.

## Beispiele

Dieses Beispiel setzt ein Cookie für das Dokument, das durch den aktiven Tab gehostet wird:

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
> Diese API basiert auf der [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-set)-API von Chromium. Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

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
