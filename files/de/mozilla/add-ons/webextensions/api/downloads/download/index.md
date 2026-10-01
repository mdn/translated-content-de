---
title: downloads.download()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/download
l10n:
  sourceCommit: 8e08774dd1cf72dae3e8d1b118ac9ae76eeb1f92
---

Die Funktion **`download()`** der {{WebExtAPIRef("downloads")}} API lädt eine Datei von einer angegebenen URL herunter. Dabei können weitere Einstellungen festgelegt werden.

Wenn die URL das HTTP- oder HTTPS-Protokoll verwendet, enthält die Anfrage alle relevanten Cookies, also diejenigen, die zum Hostnamen der URL, zum Secure-Flag, zum Pfad usw. passen. Standardmäßig werden die Cookies der normalen Browsersitzung verwendet, es sei denn:

- Die Option `incognito` wird verwendet. Dann werden die Cookies der privaten Browsersitzung verwendet.
- Die Option `cookieStoreId` wird verwendet. Dann werden die Cookies aus dem angegebenen Speicher verwendet.

Wenn sowohl `filename` als auch `saveAs` angegeben sind, wird der Dialog „Speichern unter“ mit dem vorgegebenen `filename` angezeigt.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let downloading = browser.downloads.download(
  options                   // object
)
```

### Parameter

- `options`
  - : Ein `object`, das angibt, welche Datei Sie herunterladen möchten und welche weiteren Einstellungen für den Download gelten sollen. Es kann die folgenden Eigenschaften enthalten:
    - `allowHttpErrors` {{optional_inline}}
      - : Ein `boolean`-Flag, das bewirkt, dass Downloads auch bei HTTP-Fehlern fortgesetzt werden. Damit können beispielsweise Serverfehlerseiten heruntergeladen werden. Der Standardwert ist `false`. Bei folgenden Werten gilt:
        - `false`: Der Download wird abgebrochen, wenn ein HTTP-Fehler auftritt.
        - `true`: Der Download wird bei einem HTTP-Fehler fortgesetzt, und der HTTP-Serverfehler wird nicht gemeldet. Schlägt der Download jedoch aufgrund eines datei-, netzwerk- oder benutzerbezogenen Fehlers oder eines anderen Fehlers fehl, wird dieser Fehler gemeldet.

    - `body` {{optional_inline}}
      - : Ein `string`, der den Body der POST-Anfrage enthält.
    - `conflictAction` {{optional_inline}}
      - : Ein String, der die gewünschte Aktion bei einem Dateinamenskonflikt angibt, wie im Typ {{WebExtAPIRef('downloads.FilenameConflictAction')}} definiert. Wird kein Wert angegeben, ist der Standardwert „uniquify“.
    - `cookieStoreId` {{optional_inline}}
      - : Die ID des Cookie-Speichers der [kontextbezogenen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), der der Download zugeordnet ist. Wird sie weggelassen, wird der Standard-Cookie-Speicher verwendet. Für die Verwendung ist die [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) „cookies“ erforderlich. Weitere Informationen finden Sie unter [Mit kontextbezogenen Identitäten arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
    - `filename` {{optional_inline}}
      - : Ein `string`, der einen Dateipfad relativ zum standardmäßigen Downloadverzeichnis angibt. Er legt fest, wo die Datei gespeichert werden soll und welchen Dateinamen sie erhalten soll. Absolute oder leere Pfade, Pfadbestandteile, die mit einem Punkt (.) beginnen und/oder enden, sowie Pfade mit Verweisen auf übergeordnete Verzeichnisse (`../`) führen zu einem Fehler. Wird die Eigenschaft weggelassen, werden standardmäßig der bereits für die herunterzuladende Datei vorgesehene Dateiname und ein Speicherort direkt im Downloadverzeichnis verwendet.
    - `headers` {{optional_inline}}
      - : Wenn die URL das HTTP- oder HTTPS-Protokoll verwendet, ein `array` von `objects`, die zusätzliche HTTP-Header für die Anfrage angeben. Jeder Header wird durch ein Dictionary-Objekt mit den Schlüsseln `name` und entweder `value` oder `binaryValue` dargestellt. Header, die durch `XMLHttpRequest` und `fetch` verboten sind, können nicht angegeben werden. Firefox 70 und höher erlaubt jedoch die Verwendung des Headers `Referer`. Der Versuch, einen verbotenen Header zu verwenden, löst einen Fehler aus.
    - `incognito` {{optional_inline}}
      - : Ein `boolean`: Wenn die Eigenschaft vorhanden und auf true gesetzt ist, wird der Download einer privaten Browsersitzung zugeordnet. Das bedeutet, dass er nur im Download-Manager der derzeit geöffneten privaten Fenster angezeigt wird.
    - `method` {{optional_inline}}
      - : Ein `string`, der die zu verwendende HTTP-Methode angibt, wenn `url` das HTTP\[S]-Protokoll verwendet. Der Wert kann entweder „GET“ oder „POST“ sein.
    - `saveAs` {{optional_inline}}
      - : Ein `boolean`, der angibt, ob ein Dateiauswahldialog angezeigt werden soll, damit Benutzer einen Dateinamen auswählen können (`true`), oder nicht (`false`).

        Wird diese Option weggelassen, entscheidet der Browser anhand der allgemeinen Benutzereinstellung für dieses Verhalten, ob er den Dateiauswahldialog anzeigt. In Firefox heißt diese Einstellung unter about:preferences „Immer fragen, wo Dateien gespeichert werden sollen“ beziehungsweise `browser.download.useDownloadDir` unter about:config.

    - `url`
      - : Ein `string`, der die URL der herunterzuladenden Datei angibt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn der Download erfolgreich gestartet wurde, wird das Promise mit der `id` des neuen {{WebExtAPIRef("downloads.DownloadItem")}} erfüllt. Andernfalls wird das Promise mit einer Fehlermeldung aus {{WebExtAPIRef("downloads.InterruptReason")}} zurückgewiesen.

Wenn Sie mit [URL.createObjectURL()](/de/docs/Web/API/URL/createObjectURL_static) in JavaScript erzeugte Daten herunterladen und die Objekt-URL später mit [revokeObjectURL](/de/docs/Web/API/URL/revokeObjectURL_static) freigeben möchten – was dringend empfohlen wird –, müssen Sie dies nach Abschluss des Downloads tun. Registrieren Sie dazu einen Listener für das Ereignis [downloads.onChanged](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads/onChanged).

## Beispiele

Der folgende Codeausschnitt versucht, eine Beispieldatei herunterzuladen. Er gibt außerdem einen Dateinamen und einen Speicherort sowie `uniquify` als Wert der Option `conflictAction` an.

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
