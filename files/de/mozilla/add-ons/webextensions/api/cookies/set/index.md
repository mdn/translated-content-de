---
title: cookies.set()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/set
l10n:
  sourceCommit: 32823bbafa2cb4112e4fa541b313d3cdca1a563c
---

Setzt ein Cookie. Diese Methode entspricht dem Senden eines HTTP `Set-Cookie`-Headers während einer Anfrage an eine URL.

Um diese Methode verwenden zu können, muss eine Erweiterung die Berechtigung `"cookies"` sowie relevante Host-Berechtigungen haben. Siehe [`cookie` Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#permissions) für weitere Details.

## Syntax

```js-nolint
let setting = browser.cookies.set(
  details               // object
)
```

### Parameter

- `details`
  - : Ein `object`, das die Details des zu setzenden Cookies enthält. Es kann diese Eigenschaften haben:
    - `domain` {{optional_inline}}
      - : Ein `string`, der die Domain des Cookies darstellt. Falls weggelassen, wird das Cookie zu einem Host-only-Cookie.
    - `expirationDate` {{optional_inline}}
      - : Ein `number`, der das Ablaufdatum des Cookies in Sekunden nach dem UNIX-Epoch angibt. Es kann Millisekunden im Bruchteil enthalten. Wenn weggelassen, wird das Cookie zu einem Sitzungs-Cookie.
    - `firstPartyDomain` {{optional_inline}}
      - : Ein `string`, das die First-Party-Domain darstellt, mit der das Cookie verknüpft ist. Diese Eigenschaft muss angegeben werden, wenn der Browser die First-Party-Isolation aktiviert hat. Siehe [First-Party-Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
    - `httpOnly` {{optional_inline}}
      - : Ein `boolean`, der angibt, ob das Cookie als HttpOnly (`true`) markiert ist oder nicht (`false`). Wenn weggelassen, ist der Standardwert `false`.
    - `name` {{optional_inline}}
      - : Ein `string`, der den Namen des Cookies darstellt. Falls weggelassen, ist der Name standardmäßig ein leerer String (`""`).
    - `partitionKey` {{optional_inline}}
      - : Ein `object`, das die [Speicherpartition](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) repräsentiert, in der das Cookie gesetzt werden soll. Schließen Sie dieses Objekt ein, um ein Cookie im partitionierten Speicher zu setzen. Dieses Objekt enthält:
        - `topLevelSite` {{optional_inline}}
          - : Ein `string`, das die First-Party-URL der obersten Site-Speicherpartition enthält, die das Cookie enthält.

    - `path` {{optional_inline}}
      - : Ein `string`, der den Pfad des Cookies darstellt. Wenn weggelassen, ist dies standardmäßig der Pfadanteil des URL-Parameters.
    - `sameSite` {{optional_inline}}
      - : Ein {{WebExtAPIRef("cookies.SameSiteStatus")}} Wert, der den SameSite-Zustand des Cookies angibt. Wenn weggelassen, ist der Standard `unspecified`.
    - `secure` {{optional_inline}}
      - : Ein `boolean`, der angibt, ob das Cookie als sicher (`true`) markiert ist oder nicht (`false`). Wenn weggelassen, ist der Standardwert `false`.
    - `storeId` {{optional_inline}}
      - : Ein `string`, der die ID des Cookie-Speichers darstellt, in dem das Cookie gesetzt werden soll. Wenn weggelassen, wird das Cookie im Cookiespeicher des aktuellen Ausführungskontexts gesetzt.
    - `url`
      - : Ein `string`, der die Request-URI darstellt, die mit dem Cookie verknüpft werden soll. Dieser Wert kann die standardmäßigen Domain- und Pfadwerte des erstellten Cookies beeinflussen. Falls für diese URL keine Host-Berechtigungen in der Manifest-Datei angegeben sind, schlägt der Methodenaufruf fehl.
    - `value` {{optional_inline}}
      - : Ein `string`, der den Wert des Cookies darstellt. Falls weggelassen, ist der Wert standardmäßig ein leerer String (`""`).

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('cookies.Cookie')}} Objekt erfüllt wird, das Details über das gesetzte Cookie enthält.

Wenn es mehr als ein Cookie mit demselben Namen für eine URL gibt, wird das Cookie mit dem längsten Pfad zurückgegeben. Für Cookies mit derselben Pfadlänge wird das Cookie mit der frühesten Erstellungszeit zurückgegeben.

> [!NOTE]
> Vor Firefox 133, wenn es mehr als ein Cookie mit demselben Namen gab, hat Firefox das Cookie mit der frühesten Erstellungszeit zurückgegeben.

Wenn das angeforderte Cookie ungültig ist oder der Aufruf aus anderen Gründen fehlschlägt, wird das Promise mit einer Fehlermeldung zurückgewiesen.

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
> Diese API basiert auf der Chromium-API [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-set). Diese Dokumentation stammt von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

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
