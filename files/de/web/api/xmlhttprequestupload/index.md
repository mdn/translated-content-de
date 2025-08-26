---
title: XMLHttpRequestUpload
slug: Web/API/XMLHttpRequestUpload
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Das **`XMLHttpRequestUpload`** Interface repräsentiert den Upload-Prozess für ein spezifisches [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Es ist ein _undurchsichtiges_ Objekt, das den zugrunde liegenden, browserabhängigen Upload-Prozess darstellt. Es ist ein [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget) und kann durch Aufruf von [`XMLHttpRequest.upload`](/de/docs/Web/API/XMLHttpRequest/upload) erhalten werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface hat keine spezifische Eigenschaft, erbt jedoch die Eigenschaften von [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget) und von [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanz-Methoden

_Dieses Interface hat keine spezifische Methode, erbt jedoch die Methoden von [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget) und von [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

_Dieses Interface hat keine spezifischen Ereignisse, erbt jedoch die Ereignisse von [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget)._

## Beispiele

### Hochladen einer Datei mit Timeout

Dies ermöglicht es Ihnen, eine Datei zu einem Server hochzuladen; es zeigt eine Fortschrittsleiste während des Uploads sowie eine Nachricht mit dem Fortschritt und den Ergebnissen, Erfolg oder Misserfolg an. Ein Abbruch-Button ermöglicht das Stoppen eines Uploads.

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
      <h1>Upload a file</h1>
      <p>
        <label for="file">File to upload</label><input type="file" id="file" />
      </p>
      <p>
        <progress></progress>
      </p>
      <p>
        <output></output>
      </p>
      <p>
        <button disabled id="abort">Abort</button>
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
  padding: 10px;
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

- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
