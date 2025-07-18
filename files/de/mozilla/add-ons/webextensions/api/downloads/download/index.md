---
title: downloads.download()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/download
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die **`download()`** Funktion der {{WebExtAPIRef("downloads")}} API lädt eine Datei herunter, basierend auf ihrer URL und anderen optionalen Einstellungen.

Wenn die URL das HTTP- oder HTTPS-Protokoll verwendet, enthält die Anfrage alle relevanten Cookies, das heißt, jene Cookies, die für den Hostnamen, das Sicherheitsflag, den Pfad usw. der URL gesetzt sind. Die Standard-Cookies der normalen Browsing-Sitzung werden verwendet, sofern nicht:

- die Option `incognito` verwendet wird, dann werden die privaten Browsing-Cookies verwendet.
- die Option `cookieStoreId` verwendet wird, dann werden die Cookies aus dem angegebenen Store verwendet.

Wenn sowohl `filename` als auch `saveAs` angegeben sind, wird der Dialog "Speichern unter" angezeigt, der mit dem `filename` ausgefüllt ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let downloading = browser.downloads.download(
  options                   // object
)
```

### Parameter

- `options`
  - : Ein `object`, das angibt, welche Datei Sie herunterladen möchten, und alle anderen Einstellungen, die Sie bezüglich des Downloads festlegen möchten. Es kann die folgenden Eigenschaften enthalten:
    - `allowHttpErrors` {{optional_inline}}
      - : Ein `boolean` Flag, das es erlaubt, Downloads auch bei Auftreten von HTTP-Fehlern fortzusetzen. Mit diesem Flag können beispielsweise Server-Fehlerseiten heruntergeladen werden. Standardwert ist `false`. Wenn gesetzt auf:
        - `false`, wird der Download bei Auftreten eines HTTP-Fehlers abgebrochen.
        - `true`, wird der Download bei Auftreten eines HTTP-Fehlers fortgesetzt und der HTTP-Server-Fehler wird nicht gemeldet. Sollte der Download jedoch wegen dateibezogener, netzwerkbezogener, benutzerbezogener oder anderer Fehler fehlschlagen, wird dieser Fehler gemeldet.

    - `body` {{optional_inline}}
      - : Ein `string`, der den Post-Body der Anfrage darstellt.
    - `conflictAction` {{optional_inline}}
      - : Ein String, der die Aktion darstellt, die im Falle eines Dateinamenskonflikts durchgeführt werden soll, wie im {{WebExtAPIRef('downloads.FilenameConflictAction')}} Typ definiert (standardmäßig "uniquify", wenn nicht angegeben).
    - `cookieStoreId` {{optional_inline}}
      - : Die Cookie-Store-ID der [contextual identity](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), mit der der Download verknüpft ist. Wenn nicht angegeben, wird der Standard-Cookie-Store verwendet. Die Verwendung erfordert die "cookies" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions). Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
    - `filename` {{optional_inline}}
      - : Ein `string`, der einen Dateipfad relativ zum Standard-Downloads-Verzeichnis darstellt — das gibt den Ort an, an dem Sie die Datei speichern möchten, und den Dateinamen, den Sie verwenden möchten. Absolute Pfade, leere Pfade, Pfadkomponenten, die mit einem Punkt (.) beginnen und/oder enden, sowie Pfade, die Rückverweise (`../`) enthalten, verursachen einen Fehler. Wenn Sie diesen Wert weglassen, wird standardmäßig der bereits dem Download zugewiesene Dateiname und ein Ort unmittelbar im Downloads-Verzeichnis verwendet.
    - `headers` {{optional_inline}}
      - : Wenn die URL das HTTP- oder HTTPS-Protokoll verwendet, ein `array` von `objects`, das zusätzliche HTTP-Header darstellt, die mit der Anfrage gesendet werden sollen. Jeder Header wird als ein Wörterbuchobjekt dargestellt, das die Schlüssel `name` und entweder `value` oder `binaryValue` enthält. Die Header, die von `XMLHttpRequest` und `fetch` verboten sind, können nicht angegeben werden, jedoch erlaubt Firefox seit Version 70 die Verwendung des `Referer`-Headers. Der Versuch, einen verbotenen Header zu verwenden, führt zu einem Fehler.
    - `incognito` {{optional_inline}}
      - : Ein `boolean`: falls vorhanden und auf true gesetzt, wird dieser Download mit einer privaten Browsing-Sitzung verknüpft. Dies bedeutet, dass er nur im Download-Manager für alle derzeit geöffneten privaten Fenster erscheint.
    - `method` {{optional_inline}}
      - : Ein `string`, der die HTTP-Methode darstellt, die verwendet werden soll, wenn die `url` das HTTP\[S]-Protokoll verwendet. Dies kann entweder "GET" oder "POST" sein.
    - `saveAs` {{optional_inline}}
      - : Ein `boolean`, der angibt, ob ein Dateiauswahldialog zur Auswahl eines Dateinamens angezeigt werden soll (`true`) oder nicht (`false`).

        Wenn diese Option weggelassen wird, zeigt der Browser den Dateiauswahldialog je nach allgemeiner Benutzereinstellung für dieses Verhalten an oder nicht (in Firefox wird diese Einstellung als "Sie immer fragen, wo Dateien gespeichert werden sollen" in about:preferences oder `browser.download.useDownloadDir` in about:config bezeichnet).

        > [!NOTE]
        > Firefox für Android gibt einen Fehler aus, wenn `saveAs` auf `true` gesetzt ist. Der Parameter wird ignoriert, wenn `saveAs` auf `false` gesetzt oder nicht angegeben ist.

    - `url`
      - : Ein `string`, der die URL zum Herunterladen darstellt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn der Download erfolgreich gestartet wurde, wird das Promise mit der `id` des neuen {{WebExtAPIRef("downloads.DownloadItem")}} erfüllt. Andernfalls wird das Promise mit einer Fehlermeldung aus {{WebExtAPIRef("downloads.InterruptReason")}} abgelehnt.

Wenn Sie [URL.createObjectURL()](/de/docs/Web/API/URL/createObjectURL_static) verwenden, um in JavaScript erstellte Daten herunterzuladen, und Sie später die Objekt-URL (mit [revokeObjectURL](/de/docs/Web/API/URL/revokeObjectURL_static)) widerrufen möchten (was dringend empfohlen wird), müssen Sie das tun, nachdem der Download abgeschlossen ist. Um dies zu tun, hören Sie auf das [downloads.onChanged](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads/onChanged) Ereignis.

## Beispiele

Der folgende Schnipsel versucht, eine Beispieldatei herunterzuladen, wobei auch ein Dateiname und Speicherort angegeben werden sowie `uniquify` als Wert der Option `conflictAction`.

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
