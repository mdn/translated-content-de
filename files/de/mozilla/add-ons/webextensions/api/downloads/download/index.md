---
title: downloads.download()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/download
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Die Funktion **`download()`** der {{WebExtAPIRef("downloads")}} API lädt eine Datei herunter, basierend auf ihrer URL und anderen optionalen Einstellungen.

Wenn die URL das HTTP- oder HTTPS-Protokoll verwendet, umfasst die Anfrage alle relevanten Cookies, d.h. jene Cookies, die für den Hostnamen der URL, das Sicherheitskennzeichen, den Pfad usw. gesetzt sind. Die Standard-Cookies, die Cookies aus der normalen Browsersitzung, werden verwendet, es sei denn:

- die Option `incognito` wird verwendet, dann werden die Cookies aus dem privaten Browsen verwendet.
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

  - : Ein `object`, das angibt, welche Datei Sie herunterladen möchten und welche anderen Einstellungen Sie bezüglich des Downloads vornehmen möchten. Es kann die folgenden Eigenschaften enthalten:

    - `allowHttpErrors` {{optional_inline}}

      - : Ein `boolean`-Flag, das Downloads ermöglicht, auch wenn sie auf HTTP-Fehler stoßen. Mit diesem Flag lassen sich beispielsweise Serverfehlermeldungen herunterladen. Standardwert ist `false`. Wenn auf gesetzt:
        - `false`, wird der Download abgebrochen, wenn ein HTTP-Fehler auftritt.
        - `true`, wird der Download fortgesetzt, wenn ein HTTP-Fehler auftritt, und der HTTP-Serverfehler wird nicht gemeldet. Wenn der Download jedoch aufgrund eines Dateifehlers, Netzwerkfehlers, Benutzerfehlers oder eines anderen Fehlers fehlschlägt, wird dieser Fehler gemeldet.

    - `body` {{optional_inline}}
      - : Ein `string`, der den Post-Body der Anfrage darstellt.
    - `conflictAction` {{optional_inline}}
      - : Ein String, der die Aktion angibt, die bei einem Dateinamenkonflikt ausgeführt werden soll, wie in der {{WebExtAPIRef('downloads.FilenameConflictAction')}}-Typ definiert (Standard ist "uniquify" wenn nicht angegeben).
    - `cookieStoreId` {{optional_inline}}
      - : Die Cookie-Speicher-ID der [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), mit der der Download verknüpft ist. Wenn nicht angegeben, wird der Standard-Cookie-Speicher verwendet. Die Nutzung erfordert die "cookies" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions). Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
    - `filename` {{optional_inline}}
      - : Ein `string`, der einen Dateipfad relativ zum Standard-Downloads-Verzeichnis darstellt — dies gibt den Speicherort an, wo Sie die Datei speichern möchten, und welchen Dateinamen Sie verwenden möchten. Absolute Pfade, leere Pfade, Pfadkomponenten, die mit einem Punkt beginnen und/oder enden (.) und Pfade, die Rückverweise (`../`) enthalten, verursachen einen Fehler. Wenn nicht angegeben, wird dieser Wert standardmäßig auf den bereits dem Download zugewiesenen Dateinamen gesetzt und befindet sich unmittelbar innerhalb des Downloads-Verzeichnisses.
    - `headers` {{optional_inline}}
      - : Wenn die URL die HTTP- oder HTTPS-Protokolle verwendet, ein `array` von `objects`, das zusätzliche HTTP-Header darstellt, die mit der Anfrage gesendet werden sollen. Jeder Header wird als Wörterbuchobjekt dargestellt, das die Schlüssel `name` und entweder `value` oder `binaryValue` enthält. Die Header, die durch `XMLHttpRequest` und `fetch` untersagt sind, können nicht angegeben werden. Allerdings ermöglicht Firefox 70 und später die Verwendung des `Referer`-Headers. Der Versuch, einen verbotenen Header zu verwenden, führt zu einem Fehler.
    - `incognito` {{optional_inline}}
      - : Ein `boolean`: Wenn vorhanden und auf true gesetzt, dann wird dieser Download mit einer privaten Browsersitzung verknüpft. Dies bedeutet, dass er nur im Download-Manager für alle derzeit geöffneten privaten Fenster erscheint.
    - `method` {{optional_inline}}
      - : Ein `string`, der die HTTP-Methode darstellt, die verwendet werden soll, wenn die `url` das HTTP\[S]-Protokoll nutzt. Dies kann entweder "GET" oder "POST" sein.
    - `saveAs` {{optional_inline}}

      - : Ein `boolean`, der angibt, ob ein Dateiauswahldialog angezeigt werden soll, um dem Benutzer die Auswahl eines Dateinamens zu ermöglichen (`true`), oder nicht (`false`).

        Wenn diese Option nicht angegeben ist, zeigt der Browser je nach allgemeiner Benutzereinstellung für dieses Verhalten den Dateiauswahldialog an oder nicht (in Firefox wird diese Einstellung als "Immer nachfragen, wo Dateien gespeichert werden sollen" in about:preferences oder `browser.download.useDownloadDir` in about:config bezeichnet).

        > [!NOTE]
        > Firefox für Android gibt einen Fehler aus, wenn `saveAs` auf `true` gesetzt ist. Der Parameter wird ignoriert, wenn `saveAs` `false` ist oder nicht enthalten ist.

    - `url`
      - : Ein `string`, der die zu herunterladende URL darstellt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn der Download erfolgreich gestartet wurde, wird das Promise mit der `id` des neuen {{WebExtAPIRef("downloads.DownloadItem")}} erfüllt. Andernfalls wird das Promise mit einer Fehlermeldung abgelehnt, die von {{WebExtAPIRef("downloads.InterruptReason")}} stammt.

Wenn Sie [URL.createObjectURL()](/de/docs/Web/API/URL/createObjectURL_static) verwenden, um in JavaScript erstellte Daten herunterzuladen und Sie die Objekt-URL später (wie dringend empfohlen) mit [revokeObjectURL](/de/docs/Web/API/URL/revokeObjectURL_static) widerrufen möchten, müssen Sie das tun, nachdem der Download abgeschlossen ist. Um dies zu tun, können Sie das [downloads.onChanged](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads/onChanged)-Ereignis nutzen.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Das folgende Beispiel versucht, eine Beispieldatei herunterzuladen, wobei auch ein Dateiname und Speicherort angegeben wird und `uniquify` als Wert der Option `conflictAction` verwendet wird.

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
