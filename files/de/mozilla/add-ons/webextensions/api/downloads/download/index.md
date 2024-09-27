---
title: downloads.download()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/download
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die **`download()`** Funktion der {{WebExtAPIRef("downloads")}} API lädt eine Datei herunter, basierend auf ihrer URL und anderen optionalen Einstellungen.

Wenn die URL das HTTP- oder HTTPS-Protokoll verwendet, enthält die Anfrage alle relevanten Cookies, das bedeutet jene, die für den Hostnamen der URL, das sichere Flag, den Pfad usw. gesetzt sind. Die Standard-Cookies der normalen Browsersitzung werden verwendet, es sei denn:

- die `incognito`-Option wird verwendet, dann werden die Cookies der privaten Sitzung verwendet.
- die `cookieStoreId`-Option wird verwendet, dann werden die Cookies aus dem angegebenen Speicher verwendet.

Wenn sowohl `filename` als auch `saveAs` angegeben sind, wird der Speichern-unter-Dialog angezeigt, der mit dem `filename` ausgefüllt ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let downloading = browser.downloads.download(
  options                   // object
)
```

### Parameter

- `options`

  - : Ein `object`, das die Datei spezifiziert, die Sie herunterladen möchten, sowie andere Einstellungen, die Sie für den Download festlegen möchten. Es kann die folgenden Eigenschaften enthalten:

    - `allowHttpErrors` {{optional_inline}}

      - : Ein `boolesches` Flag, das es ermöglicht, Downloads fortzusetzen, auch wenn HTTP-Fehler auftreten. Mit diesem Flag kann beispielsweise der Download von Server-Fehlerseiten ermöglicht werden. Standardwert ist `false`. Wenn gesetzt auf:

        - `false`, wird der Download abgebrochen, wenn ein HTTP-Fehler auftritt.
        - `true`, wird der Download fortgesetzt, wenn ein HTTP-Fehler auftritt und der HTTP-Serverfehler nicht gemeldet wird. Tritt jedoch ein anderer Fehler auf, z. B. dateibezogen, netzwerkbezogen oder benutzerbezogen, wird dieser Fehler gemeldet.

    - `body` {{optional_inline}}
      - : Ein `string`, der den Post-Body der Anfrage darstellt.
    - `conflictAction` {{optional_inline}}
      - : Ein String, der die Aktion angibt, die bei einem Dateinamenskonflikt ausgeführt werden soll, wie in der {{WebExtAPIRef('downloads.FilenameConflictAction')}}-Typ definiert (standardmäßig "uniquify", wenn nicht angegeben).
    - `cookieStoreId` {{optional_inline}}
      - : Die Cookie-Store-ID der [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), mit der der Download verknüpft ist. Wenn weggelassen, wird der Standard-Cookie-Store verwendet. Die Verwendung erfordert die "cookies" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions). Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für mehr Informationen.
    - `filename` {{optional_inline}}
      - : Ein `string`, der einen Dateipfad relativ zum Standard-Downloadverzeichnis darstellt — er gibt den Ort an, an dem Sie die Datei speichern möchten, und welchen Dateinamen Sie verwenden möchten. Absolute Pfade, leere Pfade, Pfadkomponenten, die mit einem Punkt (.) beginnen und/oder enden, und Pfade, die Rückverweise (`../`) enthalten, verursachen einen Fehler. Wenn weggelassen, wird dieser Wert standardmäßig dem der heruntergeladenen Datei bereits gegebenen Dateinamen und einem Standort direkt im Downloadverzeichnis zugewiesen.
    - `headers` {{optional_inline}}
      - : Wenn die URL die HTTP- oder HTTPS-Protokolle verwendet, ein `array` von `objects`, die zusätzliche HTTP-Header repräsentieren, die mit der Anfrage gesendet werden sollen. Jeder Header wird als ein Dictionary-Objekt dargestellt, das die Schlüssel `name` und entweder `value` oder `binaryValue` enthält. Die Header, die durch `XMLHttpRequest` und `fetch` verboten sind, können nicht spezifiziert werden. Allerdings ermöglicht Firefox ab Version 70 die Verwendung des `Referer`-Headers. Der Versuch, einen verbotenen Header zu verwenden, führt zu einem Fehler.
    - `incognito` {{optional_inline}}
      - : Ein `boolean`: Wenn vorhanden und auf true gesetzt, wird dieser Download mit einer privaten Browsersitzung verknüpft. Das bedeutet, dass er nur im Download-Manager von allen aktuell geöffneten privaten Fenstern angezeigt wird.
    - `method` {{optional_inline}}
      - : Ein `string`, der die zu verwendende HTTP-Methode angibt, wenn die `url` das HTTP\[S]-Protokoll verwendet. Dies kann entweder "GET" oder "POST" sein.
    - `saveAs` {{optional_inline}}

      - : Ein `boolean`, der angibt, ob ein Dateiauswahldialog bereitgestellt werden soll, um dem Benutzer zu ermöglichen, einen Dateinamen auszuwählen (`true`), oder nicht (`false`).

        Wenn diese Option weggelassen wird, zeigt der Browser den Dateiauswahldialog basierend auf der allgemeinen Benutzerpräferenz für dieses Verhalten an oder nicht (in Firefox ist diese Präferenz unter "Immer fragen, wo Dateien gespeichert werden sollen" in about:preferences zu finden oder `browser.download.useDownloadDir` in about:config).

        > [!NOTE]
        > Firefox für Android gibt einen Fehler aus, wenn `saveAs` auf `true` gesetzt ist. Der Parameter wird ignoriert, wenn `saveAs` auf `false` oder nicht enthalten ist.

    - `url`
      - : Ein `string`, der die zu herunterladende URL darstellt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn der Download erfolgreich gestartet wurde, wird das Versprechen mit der `id` des neuen {{WebExtAPIRef("downloads.DownloadItem")}} erfüllt. Andernfalls wird das Versprechen mit einer Fehlermeldung abgelehnt, die aus {{WebExtAPIRef("downloads.InterruptReason")}} entnommen wurde.

Wenn Sie [URL.createObjectURL()](/de/docs/Web/API/URL/createObjectURL_static) verwenden, um Daten herunterzuladen, die in JavaScript erstellt wurden, und Sie das Objekt-URL (mit [revokeObjectURL](/de/docs/Web/API/URL/revokeObjectURL_static)) später widerrufen möchten (wie es dringend empfohlen wird), müssen Sie dies tun, nachdem der Download abgeschlossen ist. Dazu hören Sie auf das [downloads.onChanged](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads/onChanged) Ereignis.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Das folgende Codefragment versucht, eine Beispieldatei herunterzuladen und gibt gleichzeitig einen Dateinamen und einen Speicherort an, sowie `uniquify` als Wert der `conflictAction`-Option.

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
