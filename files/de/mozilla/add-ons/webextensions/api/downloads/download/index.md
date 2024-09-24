---
title: downloads.download()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/download
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die **`download()`**-Funktion der {{WebExtAPIRef("downloads")}} API lädt eine Datei herunter, basierend auf ihrer URL und anderen optionalen Einstellungen.

Verwendet die URL das HTTP- oder HTTPS-Protokoll, so beinhaltet die Anfrage alle relevanten Cookies, das heißt, jene Cookies, die für den Hostnamen der URL, das Secure-Flag, den Pfad usw. gesetzt wurden. Die standardmäßigen Cookies, also die aus der regulären Browsersitzung, werden verwendet, es sei denn:

- die Option `incognito` wird verwendet, dann werden die Cookies des privaten Modus genutzt.
- die Option `cookieStoreId` wird verwendet, dann werden die Cookies aus dem angegebenen Speicher verwendet.

Wenn sowohl `filename` als auch `saveAs` spezifiziert sind, wird der Speichern-unter-Dialog angezeigt, gefüllt mit dem `filename`.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let downloading = browser.downloads.download(
  options                   // object
)
```

### Parameter

- `options`

  - : Ein `object`, das angibt, welche Datei Sie herunterladen möchten und welche anderen Präferenzen Sie bezüglich des Downloads festlegen möchten. Sie kann die folgenden Eigenschaften enthalten:

    - `allowHttpErrors` {{optional_inline}}

      - : Ein `boolean`-Flag, das ermöglicht, Downloads fortzusetzen, selbst wenn sie HTTP-Fehler antreffen. Mit diesem Flag kann zum Beispiel der Download von Serverfehlerseiten erlaubt werden. Standardwert ist `false`. Wenn gesetzt auf:

        - `false`, wird der Download abgebrochen, wenn ein HTTP-Fehler auftritt.
        - `true`, wird der Download fortgesetzt, wenn ein HTTP-Fehler auftritt und der HTTP-Serverfehler wird nicht gemeldet. Tritt der Fehler jedoch aufgrund von dateibezogenen, netzwerkbezogenen, benutzerbezogenen oder anderen Fehlern auf, wird dieser Fehler gemeldet.

    - `body` {{optional_inline}}
      - : Ein `string`, der den Post-Körper der Anfrage darstellt.
    - `conflictAction` {{optional_inline}}
      - : Ein String, der die Aktion beschreibt, die ausgeführt werden soll, wenn es einen Dateinamenkonflikt gibt, wie im {{WebExtAPIRef('downloads.FilenameConflictAction')}}-Typ definiert (Standard ist "uniquify", wenn nicht spezifiziert).
    - `cookieStoreId` {{optional_inline}}
      - : Die Cookie-Speicher-ID der [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), mit der der Download verbunden ist. Wenn nicht angegeben, wird der Standard-Cookie-Speicher verwendet. Die Nutzung erfordert die "cookies" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions). Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
    - `filename` {{optional_inline}}
      - : Ein `string`, der einen Dateipfad relativ zum Standard-Downloadverzeichnis darstellt – dies gibt den Ort an, an dem Sie die Datei speichern möchten, und welchen Dateinamen Sie verwenden möchten. Absolute Pfade, leere Pfade, Pfadkomponenten, die mit einem Punkt (.) beginnen und/oder enden, und Pfade, die Rückverweise (`../`) enthalten, verursachen einen Fehler. Wenn weggelassen, wird dieser Wert standardmäßig auf den bereits gegebenen Dateinamen gesetzt, und befindet sich direkt im Downloadverzeichnis.
    - `headers` {{optional_inline}}
      - : Wenn die URL das HTTP- oder HTTPS-Protokoll verwendet, ein `array` von `objects`, die zusätzliche HTTP-Header repräsentieren, die mit der Anfrage gesendet werden. Jeder Header wird als Wörterbuchobjekt dargestellt, das die Schlüssel `name` und entweder `value` oder `binaryValue` enthält. Die von `XMLHttpRequest` und `fetch` verbotenen Header können nicht spezifiziert werden, jedoch ermöglicht Firefox 70 und später die Verwendung des `Referer`-Headers. Der Versuch, einen verbotenen Header zu verwenden, führt zu einem Fehler.
    - `incognito` {{optional_inline}}
      - : Ein `boolean`: wenn vorhanden und auf true gesetzt, wird dieser Download mit einer privaten Browsersitzung verknüpft. Das bedeutet, dass er nur im Download-Manager für alle momentan geöffneten privaten Fenster erscheint.
    - `method` {{optional_inline}}
      - : Ein `string`, der die HTTP-Methode darstellt, die verwendet werden soll, wenn die `url` das HTTP[S]-Protokoll verwendet. Dies kann entweder "GET" oder "POST" sein.
    - `saveAs` {{optional_inline}}

      - : Ein `boolean`, der angibt, ob ein Datei-Auswahldialog angezeigt werden soll, um dem Benutzer zu ermöglichen, einen Dateinamen auszuwählen (`true`), oder nicht (`false`).

        Wenn diese Option weggelassen wird, zeigt der Browser den Datei-Auswahldialog basierend auf der allgemeinen Benutzereinstellung für dieses Verhalten an oder nicht (in Firefox wird diese Einstellung als "Immer fragen, wo Dateien gespeichert werden sollen" in about:preferences oder `browser.download.useDownloadDir` in about:config bezeichnet).

        > [!NOTE]
        > Firefox für Android gibt einen Fehler aus, wenn `saveAs` auf `true` gesetzt ist. Der Parameter wird ignoriert, wenn `saveAs` auf `false` gesetzt ist oder nicht enthalten ist.

    - `url`
      - : Ein `string`, der die herunterzuladende URL repräsentiert.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn der Download erfolgreich gestartet wurde, wird das Promise mit der `id` des neuen {{WebExtAPIRef("downloads.DownloadItem")}} erfüllt. Andernfalls wird das Promise mit einer Fehlermeldung aus {{WebExtAPIRef("downloads.InterruptReason")}} abgelehnt.

Wenn Sie [URL.createObjectURL()](/de/docs/Web/API/URL/createObjectURL_static) verwenden, um in JavaScript erstellte Daten herunterzuladen, und die Objekt-URL später widerrufen möchten (mit [revokeObjectURL](/de/docs/Web/API/URL/revokeObjectURL_static)), wie es dringend empfohlen wird, müssen Sie dies tun, nachdem der Download abgeschlossen wurde. Hören Sie dazu auf das [downloads.onChanged](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads/onChanged)-Ereignis.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Das folgende Snippet versucht, eine Beispieldatei herunterzuladen, wobei ebenfalls ein Dateiname und Speicherort angegeben werden, sowie `uniquify` als Wert der `conflictAction`-Option.

```js
function onStartedDownload(id) {
  console.log(`Started downloading: ${id}`);
}

function onFailed(error) {
  console.log(`Download failed: ${error}`);
}

let downloadUrl = "https://example.org/image.png";

let downloading = browser.downloads.download({
  url: downloadUrl,
  filename: "my-image-again.png",
  conflictAction: "uniquify",
});

downloading.then(onStartedDownload, onFailed);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-download) API.

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
