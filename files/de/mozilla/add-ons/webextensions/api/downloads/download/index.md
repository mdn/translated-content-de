---
title: downloads.download()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/download
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Die **`download()`** Funktion der {{WebExtAPIRef("downloads")}} API lädt eine Datei herunter, wenn ihre URL und andere optionale Präferenzen angegeben werden.

Wenn die URL das HTTP- oder HTTPS-Protokoll verwendet, enthält die Anforderung alle relevanten Cookies, d.h. jene Cookies, die für den Hostnamen der URL, das Sicherheitsflag, den Pfad usw. gesetzt sind. Die Standardcookies, d.h. die Cookies aus der normalen Browsersitzung, werden verwendet, es sei denn:

- die `incognito` Option wird verwendet, dann werden die Cookies des privaten Browsens verwendet.
- die `cookieStoreId` Option wird verwendet, dann werden die Cookies aus dem angegebenen Speicher verwendet.

Wenn sowohl `filename` als auch `saveAs` angegeben sind, wird der Speichern-unter-Dialog angezeigt und mit dem `filename` vorausgefüllt.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let downloading = browser.downloads.download(
  options                   // object
)
```

### Parameter

- `options`
  - : Ein `object`, das angibt, welche Datei Sie herunterladen möchten und welche anderen Präferenzen Sie in Bezug auf den Download festlegen möchten. Es kann die folgenden Eigenschaften enthalten:
    - `allowHttpErrors` {{optional_inline}}
      - : Ein `boolean` Flag, das Downloads ermöglicht, auch wenn HTTP-Fehler auftreten. Mit dieser Option können beispielsweise Serverfehlerseiten heruntergeladen werden. Standardwert ist `false`. Wenn gesetzt auf:
        - `false`, wird der Download abgebrochen, wenn ein HTTP-Fehler auftritt.
        - `true`, wird der Download fortgesetzt, wenn ein HTTP-Fehler auftritt und der HTTP-Serverfehler nicht gemeldet wird. Allerdings, wenn der Download aufgrund eines Dateifehlers, Netzwerkfehlers, Benutzerfehlers oder eines anderen Fehlers fehlschlägt, wird dieser Fehler gemeldet.

    - `body` {{optional_inline}}
      - : Ein `string`, der den Post-Body der Anforderung darstellt.
    - `conflictAction` {{optional_inline}}
      - : Eine Zeichenkette, die die Aktion darstellt, die Sie im Falle eines Dateinamenkonflikts durchführen möchten, wie sie im {{WebExtAPIRef('downloads.FilenameConflictAction')}} Typ definiert ist (Standard ist "uniquify" wenn nicht angegeben).
    - `cookieStoreId` {{optional_inline}}
      - : Die Cookie-Store-ID der [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), mit der der Download verknüpft ist. Wenn weggelassen, wird der Standard-Cookie-Store verwendet. Die Verwendung erfordert die "cookies" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions). Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
    - `filename` {{optional_inline}}
      - : Ein `string`, der einen Dateipfad relativ zum Standard-Download-Verzeichnis darstellt — dies gibt den Speicherort an, an dem Sie die Datei speichern und welchen Dateinamen Sie verwenden möchten. Absolute Pfade, leere Pfade, Pfadkomponenten, die mit einem Punkt (.) beginnen und/oder enden, und Pfade, die Rückverweise (`../`) enthalten, führen zu einem Fehler. Wenn nicht angegeben, wird dieser Wert standardmäßig auf den Dateinamen gesetzt, der bereits der heruntergeladenen Datei zugeordnet wurde, und auf einen Standort unmittelbar innerhalb des Download-Verzeichnisses.
    - `headers` {{optional_inline}}
      - : Wenn die URL die HTTP- oder HTTPS-Protokolle verwendet, ein `array` von `objects`, die zusätzliche HTTP-Header darstellen, die mit der Anforderung gesendet werden sollen. Jeder Header wird als Wörterbuchobjekt dargestellt, das die Schlüssel `name` und entweder `value` oder `binaryValue` enthält. Die Header, die von `XMLHttpRequest` und `fetch` verboten sind, können nicht spezifiziert werden. Firefox 70 und höher ermöglichen jedoch die Verwendung des `Referer` Headers. Der Versuch, einen verbotenen Header zu verwenden, führt zu einem Fehler.
    - `incognito` {{optional_inline}}
      - : Ein `boolean`: Wenn vorhanden und auf true gesetzt, wird dieser Download mit einer privaten Browsersitzung verknüpft. Das bedeutet, dass er nur im Download-Manager für alle derzeit geöffneten privaten Fenster angezeigt wird.
    - `method` {{optional_inline}}
      - : Ein `string`, der die HTTP-Methode darstellt, die verwendet werden soll, wenn die `url` das HTTP\[S] Protokoll verwendet. Dies kann entweder "GET" oder "POST" sein.
    - `saveAs` {{optional_inline}}
      - : Ein `boolean`, das angibt, ob ein Dateiauswahl-Dialog bereitgestellt werden soll, um dem Benutzer die Auswahl eines Dateinamens zu ermöglichen (`true`), oder nicht (`false`).

        Wenn diese Option nicht angegeben ist, zeigt der Browser den Dateiauswahldialog basierend auf der allgemeinen Benutzerpräferenz für dieses Verhalten an oder nicht an (in Firefox ist diese Präferenz als "Immer fragen, wo Dateien gespeichert werden sollen" in about:preferences gekennzeichnet, oder `browser.download.useDownloadDir` in about:config).

        > [!NOTE]
        > Firefox für Android führt einen Fehler aus, wenn `saveAs` auf `true` gesetzt ist. Der Parameter wird ignoriert, wenn `saveAs` `false` oder nicht enthalten ist.

    - `url`
      - : Ein `string`, der die zu ladende URL darstellt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn der Download erfolgreich gestartet wurde, wird das Versprechen mit der `id` des neuen {{WebExtAPIRef("downloads.DownloadItem")}} erfüllt. Andernfalls wird das Versprechen mit einer Fehlermeldung, die von {{WebExtAPIRef("downloads.InterruptReason")}} stammt, abgelehnt.

Wenn Sie [URL.createObjectURL()](/de/docs/Web/API/URL/createObjectURL_static) verwenden, um Daten herunterzuladen, die in JavaScript erstellt wurden, und Sie die Objekt-URL später (wie dringend empfohlen) mit [revokeObjectURL](/de/docs/Web/API/URL/revokeObjectURL_static) widerrufen möchten, müssen Sie dies tun, nachdem der Download abgeschlossen ist. Dazu hören Sie auf das [downloads.onChanged](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads/onChanged) Ereignis.

## Beispiele

Das folgende Snippet versucht, eine Beispieldatei herunterzuladen und gibt auch einen Dateinamen und Speicherort an, um sie zu speichern, sowie `uniquify` als den Wert der `conflictAction` Option.

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-download) API von Chromium.

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
