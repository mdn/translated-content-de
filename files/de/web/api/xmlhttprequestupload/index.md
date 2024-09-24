---
title: XMLHttpRequestUpload
slug: Web/API/XMLHttpRequestUpload
l10n:
  sourceCommit: b668655509b77be22798a816067859a51f77eb36
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`XMLHttpRequestUpload`**-Schnittstelle repräsentiert den Hochladeprozess für eine spezifische {{domxref("XMLHttpRequest")}}. Es ist ein _opakes_ Objekt, das den zugrunde liegenden, browserabhängigen Hochladeprozess darstellt. Es ist ein {{domxref("XMLHttpRequestEventTarget")}} und kann durch Aufrufen von {{domxref("XMLHttpRequest.upload")}} erhalten werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle hat keine spezifischen Eigenschaften, erbt jedoch die Eigenschaften von {{domxref("XMLHttpRequestEventTarget")}} und {{domxref("EventTarget")}}._

## Instanz-Methoden

_Diese Schnittstelle hat keine spezifischen Methoden, erbt jedoch die Methoden von {{domxref("XMLHttpRequestEventTarget")}} und {{domxref("EventTarget")}}._

## Ereignisse

- {{domxref("XMLHttpRequestUpload/abort_event", "abort")}}
  - : Wird ausgelöst, wenn eine Anfrage abgebrochen wurde, z.B. weil das Programm {{domxref("XMLHttpRequest.abort()")}} aufgerufen hat.
    Auch über die `onabort` Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XMLHttpRequestUpload/error_event", "error")}}
  - : Wird ausgelöst, wenn bei der Anfrage ein Fehler aufgetreten ist.
    Auch über die `onerror` Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XMLHttpRequestUpload/load_event", "load")}}
  - : Wird ausgelöst, wenn eine Anfrage erfolgreich abgeschlossen wurde.
    Auch über die `onload` Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XMLHttpRequestUpload/loadend_event", "loadend")}}
  - : Wird ausgelöst, wenn eine Anfrage abgeschlossen wurde, ob erfolgreich (nach {{domxref("XMLHttpRequest/load_event", "load")}}) oder erfolglos (nach {{domxref("XMLHttpRequestUpload/abort_event", "abort")}} oder {{domxref("XMLHttpRequest/error_event", "error")}}).
    Auch über die `onloadend` Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XMLHttpRequestUpload/loadstart_event", "loadstart")}}
  - : Wird ausgelöst, wenn eine Anfrage begonnen hat, Daten zu laden.
    Auch über die `onloadstart` Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XMLHttpRequestUpload/progress_event", "progress")}}
  - : Wird periodisch ausgelöst, wenn eine Anfrage mehr Daten erhält.
    Auch über die `onprogress` Ereignishandler-Eigenschaft verfügbar.
- {{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}
  - : Wird ausgelöst, wenn der Fortschritt wegen abgelaufener Zeitvorgabe beendet wird.
    Auch über die `ontimeout` Ereignishandler-Eigenschaft verfügbar.

## Beispiele

### Hochladen einer Datei mit einem Timeout

Dies ermöglicht es, eine Datei auf einen Server hochzuladen; es zeigt während des Hochladens eine Fortschrittsanzeige sowie eine Nachricht mit dem Fortschritt und den Ergebnissen an, ob erfolgreich oder fehlgeschlagen. Eine Abbruch-Schaltfläche ermöglicht das Stoppen eines Uploads.

#### HTML

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>XMLHttpRequestUpload test</title>
    <link rel="stylesheet" href="xhrupload_test.css" />
    <script src="xhrupload_test.js"></script>
  </head>
  <body>
    <main>
      <h1>Laden Sie eine Datei hoch</h1>
      <p>
        <label for="file">Hochzuladende Datei</label><input type="file" id="file" />
      </p>
      <p>
        <progress />
      </p>
      <p>
        <output></output>
      </p>
      <p>
        <button disabled id="abort">Abbrechen</button>
      </p>
    </main>
  </body>
</html>
```

#### CSS

```css
body {
  background-color: lightblue;
}

main {
  margin: 50px auto;
  text-align: center;
}

#file {
  display: none;
}

label[for="file"] {
  background-color: lightgrey;
  padding: 10px 10px;
}

progress {
  display: none;
}

progress.visible {
  display: inline;
}
```

#### JavaScript

```js
addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("file");
  const progressBar = document.querySelector("progress");
  const log = document.querySelector("output");
  const abortButton = document.getElementById("abort");

  fileInput.addEventListener("change", () => {
    const xhr = new XMLHttpRequest();
    xhr.timeout = 2000; // 2 seconds

    // Link abort button
    abortButton.addEventListener(
      "click",
      () => {
        xhr.abort();
      },
      { once: true },
    );

    // When the upload starts, we display the progress bar
    xhr.upload.addEventListener("loadstart", (event) => {
      progressBar.classList.add("visible");
      progressBar.value = 0;
      progressBar.max = event.total;
      log.textContent = "Uploading (0%)…";
      abortButton.disabled = false;
    });

    // Each time a progress event is received, we update the bar
    xhr.upload.addEventListener("progress", (event) => {
      progressBar.value = event.loaded;
      log.textContent = `Uploading (${(
        (event.loaded / event.total) *
        100
      ).toFixed(2)}%)…`;
    });

    // When the upload is finished, we hide the progress bar.
    xhr.upload.addEventListener("loadend", (event) => {
      progressBar.classList.remove("visible");
      if (event.loaded !== 0) {
        log.textContent = "Upload finished.";
      }
      abortButton.disabled = true;
    });

    // In case of an error, an abort, or a timeout, we hide the progress bar
    // Note that these events can be listened to on the xhr object too
    function errorAction(event) {
      progressBar.classList.remove("visible");
      log.textContent = `Upload failed: ${event.type}`;
    }
    xhr.upload.addEventListener("error", errorAction);
    xhr.upload.addEventListener("abort", errorAction);
    xhr.upload.addEventListener("timeout", errorAction);

    // Build the payload
    const fileData = new FormData();
    fileData.append("file", fileInput.files[0]);

    // Theoretically, event listeners could be set after the open() call
    // but browsers are buggy here
    xhr.open("POST", "upload_test.php", true);

    // Note that the event listener must be set before sending (as it is a preflighted request)
    xhr.send(fileData);
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XMLHttpRequest")}}
