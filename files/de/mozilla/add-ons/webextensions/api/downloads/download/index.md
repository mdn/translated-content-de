---
title: downloads.download()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/download
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die **`download()`** Funktion der {{WebExtAPIRef("downloads")}} API lädt eine Datei herunter, basierend auf ihrer URL und weiteren optionalen Präferenzen.

Wenn die URL das HTTP- oder HTTPS-Protokoll verwendet, beinhaltet die Anfrage alle relevanten Cookies, d.h. jene, die für den Hostnamen der URL, das Sicherheitskennzeichen, den Pfad und so weiter gesetzt wurden. Die Standard-Cookies, also die Cookies aus der normalen Browsersitzung, werden verwendet, es sei denn:

- die Option `incognito` wird verwendet, dann werden die Cookies des privaten Browsens verwendet.
- die Option `cookieStoreId` wird verwendet, dann werden die Cookies aus dem angegebenen Speicher verwendet.

Wenn sowohl `filename` als auch `saveAs` angegeben sind, wird der "Speichern unter"-Dialog angezeigt und mit dem `filename` ausgefüllt.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let downloading = browser.downloads.download(
  options                   // object
)
```

### Parameter

- `options`

  - : Ein `object`, das angibt, welche Datei Sie herunterladen möchten, und alle anderen Präferenzen, die Sie für den Download festlegen möchten. Es kann die folgenden Eigenschaften enthalten:

    - `allowHttpErrors` {{optional_inline}}

      - : Ein `boolean`-Flag, das Downloads ermöglicht, auch wenn sie auf HTTP-Fehler stoßen. Mit diesem Flag können beispielsweise Serverfehlermeldungen heruntergeladen werden. Standardwert ist `false`. Wenn gesetzt auf:

        - `false`, wird der Download abgebrochen, wenn ein HTTP-Fehler auftritt.
        - `true`, geht der Download weiter, wenn ein HTTP-Fehler auftritt, und der HTTP-Serverfehler wird nicht gemeldet. Wenn der Download jedoch aufgrund von datei-, netzwerk-, benutzerbezogenen oder anderen Fehlern fehlschlägt, wird dieser Fehler gemeldet.

    - `body` {{optional_inline}}
      - : Ein `string`, der den Post-Body der Anfrage darstellt.
    - `conflictAction` {{optional_inline}}
      - : Ein String, der die Aktion darstellt, die bei einem Dateinamenkonflikt durchgeführt werden soll, wie in der {{WebExtAPIRef('downloads.FilenameConflictAction')}}-Typ definiert (Standard ist "uniquify", wenn nicht angegeben).
    - `cookieStoreId` {{optional_inline}}
      - : Die Cookie-Store-ID der [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), mit der der Download verknüpft ist. Wenn weggelassen, wird der Standard-Cookie-Speicher verwendet. Die Verwendung erfordert die "cookies"-[API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions). Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
    - `filename` {{optional_inline}}
      - : Ein `string`, der einen Dateipfad relativ zum Standard-Download-Verzeichnis darstellt — dies gibt den Speicherort an, an dem die Datei gespeichert werden soll, und welchen Dateinamen Sie verwenden möchten. Absolute Pfade, leere Pfade, Pfadkomponenten, die mit einem Punkt (.) beginnen und/oder enden, und Pfade, die Rückverweise (`../`) enthalten, verursachen einen Fehler. Wenn weggelassen, wird dieser Wert standardmäßig auf den bereits gegebenen Dateinamen der herunterzuladenden Datei und einen Speicherort direkt im Download-Verzeichnis gesetzt.
    - `headers` {{optional_inline}}
      - : Wenn die URL das HTTP- oder HTTPS-Protokoll verwendet, ein `array` von `objects`, die zusätzliche HTTP-Header darstellen, die mit der Anfrage gesendet werden sollen. Jeder Header wird als ein Wörterbuchobjekt dargestellt, das die Schlüssel `name` und entweder `value` oder `binaryValue` enthält. Die Header, die von `XMLHttpRequest` und `fetch` ausgeschlossen sind, können nicht angegeben werden, allerdings ermöglicht Firefox 70 und später die Verwendung des `Referer`-Headers. Der Versuch, einen nicht erlaubten Header zu verwenden, führt zu einem Fehler.
    - `incognito` {{optional_inline}}
      - : Ein `boolean`: wenn vorhanden und auf true gesetzt, dann wird dieser Download mit einer privaten Browsersitzung verknüpft. Das bedeutet, dass er nur im Download-Manager für aktuell geöffnete private Fenster erscheint.
    - `method` {{optional_inline}}
      - : Ein `string`, der die HTTP-Methode darstellt, die verwendet werden soll, wenn die `url` das HTTP\[S]-Protokoll verwendet. Dies kann entweder "GET" oder "POST" sein.
    - `saveAs` {{optional_inline}}

      - : Ein `boolean`, der angibt, ob ein Dateiauswahldialog angezeigt werden soll, um dem Benutzer zu ermöglichen, einen Dateinamen auszuwählen (`true`) oder nicht (`false`).

        Wenn diese Option weggelassen wird, zeigt der Browser den Dateiauswahldialog entweder an oder nicht, basierend auf der allgemeinen Benutzereinstellung für dieses Verhalten (in Firefox ist diese Einstellung mit "Immer fragen, wo Dateien gespeichert werden sollen" unter about:preferences bezeichnet oder `browser.download.useDownloadDir` in about:config).

        > [!NOTE]
        > Firefox für Android erhöht einen Fehler, wenn `saveAs` auf `true` gesetzt ist. Der Parameter wird ignoriert, wenn `saveAs` `false` oder nicht eingeschlossen ist.

    - `url`
      - : Ein `string`, der die URL repräsentiert, die heruntergeladen werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn der Download erfolgreich gestartet wurde, wird das Promise mit der `id` des neuen {{WebExtAPIRef("downloads.DownloadItem")}} erfüllt. Andernfalls wird das Promise mit einer Fehlermeldung abgelehnt, die aus {{WebExtAPIRef("downloads.InterruptReason")}} entnommen wird.

Wenn Sie [URL.createObjectURL()](/de/docs/Web/API/URL/createObjectURL_static) verwenden, um in JavaScript erstellte Daten herunterzuladen, und Sie möchten die Objekt-URL später aufheben (mit [revokeObjectURL](/de/docs/Web/API/URL/revokeObjectURL_static)), wie es dringend empfohlen wird, müssen Sie das tun, nachdem der Download abgeschlossen ist. Dazu hören Sie auf das Ereignis [downloads.onChanged](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads/onChanged).

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Der folgende Codeabschnitt versucht, eine Beispieldatei herunterzuladen, außerdem wird ein Dateiname und Speicherort angegeben, in dem sie gespeichert werden soll, sowie `uniquify` als Wert der `conflictAction`-Option.

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
