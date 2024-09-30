---
title: Daten zwischen Apps teilen
slug: Web/Progressive_web_apps/How_to/Share_data_between_apps
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PWASidebar}}

Anwendungsfreigabe ist die Fähigkeit einer Anwendung, Informationen oder Daten an eine andere Anwendung auf demselben Gerät zu übergeben. Diese Funktion ist nützlich für Benutzer, da sie ermöglicht, Informationen zwischen zwei Anwendungen zu teilen, ohne dass diese Anwendungen vorher voneinander wissen müssen.

Zum Beispiel können Sie auf Ihrem mobilen Gerät Fotos oder Videos von Ihrer Foto-App mit einer anderen Anwendung, die Bilder akzeptiert, wie z.B. einer E-Mail-App, teilen. Dieses Freigabemuster wird vom Betriebssystem (OS) koordiniert, auf dem die beiden Anwendungen installiert sind:

1. Wenn der Benutzer das Teilen von Fotos einleitet, bereitet die Foto-App die Daten des ausgewählten Bildes vor und übergibt sie an das Betriebssystem.
2. Das Betriebssystem wählt die Liste der Anwendungen aus, die in der Lage sind, die geteilten Bilddaten zu verarbeiten, und zeigt sie dem Benutzer an.
3. Sobald der Benutzer eine der Zielanwendungen auswählt, startet das Betriebssystem diese Anwendung mit dem geteilten Bild.

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) haben ebenfalls die Fähigkeit, Informationen mithilfe des gleichen vom Betriebssystem orchestrierten Musters zu teilen. PWAs können sowohl Daten teilen als auch geteilte Daten akzeptieren.

Wenn Sie eine PWA entwickeln, kann das Akzeptieren geteilter Daten Ihre PWA vertrauter und nahtloser in die Geräte Ihrer Benutzer integrieren.

## Daten mit anderen Apps teilen

Um es Benutzern zu ermöglichen, Daten aus Ihrer PWA mit anderen Apps zu teilen, verwenden Sie die [Web Share API](/de/docs/Web/API/Web_Share_API). Die Web Share API ermöglicht es Ihrer App, Text, Links oder Dateien über den darunterliegenden Freigabemechanismus des Betriebssystems mit anderen Apps zu teilen.

Um Daten zu teilen, verwenden Sie die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) als Reaktion auf eine Benutzeraktion, wie z.B. einen Buttonklick.

### Unterstützung überprüfen

Bevor Sie eine Inhaltsfreigabe-Benutzeroberfläche in Ihrer Anwendung anzeigen, sollten Sie überprüfen, ob die Funktion der Web Share API unterstützt wird. Selbst die Browser, die die Web Share API unterstützen, unterstützen nicht alle immer alle Datentypen. Daher ist es eine gute Praxis, zuerst die Methode [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) zu verwenden, um zu validieren, ob die Daten, die Sie teilen möchten, tatsächlich von dem Browser, der Ihre App ausführt, teilbar sind.

Dieses Beispiel zeigt, wie Sie überprüfen können, ob die Web Share API unterstützt wird und ob die Daten geteilt werden können:

```js
function canBrowserShareData(data) {
  if (!navigator.share || !navigator.canShare) {
    return false;
  }

  return navigator.canShare(data);
}

const sharedDataSample = {
  title: "Some text title",
  text: "More text",
  url: "A url we want to share",
};

if (canBrowserShareData(sharedDataSample)) {
  // Enable the share button in the UI.
  renderAppSharingUI();
} else {
  // We can't share on this browser/operating system.
}
```

### Ausnahmen behandeln

Die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) gibt ein {{jsxref("Promise")}} zurück, das in Fällen wie bei inkorrekten geteilten Daten, wenn der Benutzer den Freigabevorgang abbricht oder wenn die Datenübertragung fehlgeschlagen ist, abgelehnt werden kann.

Es ist daher wichtig, die Promise-Zurückweisung abzufangen, um Fehler im JavaScript-Code Ihrer App zu vermeiden.

```js
async function shareData(data) {
  try {
    await navigator.share(data);
    // The data was shared successfully.
  } catch (e) {
    // The data could not be shared.
    console.error(`Error: ${e}`);
  }
}
```

### Textdaten teilen

Das folgende Beispiel zeigt, wie ein Link und etwas Text geteilt werden, wenn ein Button in der App geklickt wird. Die verwendete Funktion `canBrowserShareData` wird in [Unterstützung überprüfen](#unterstutzung_uberprufen) beschrieben und hier nicht wiederholt.

```js
// Retrieve the button from the DOM. The button is hidden for now.
const button = document.querySelector("#share");

if (canBrowserShareData({ text: "text", url: "https://example.com" })) {
  // Show the button.
  button.style.display = "inline";

  // Listen for click events on the button to share data.
  button.addEventListener("click", async () => {
    try {
      await navigator.share({
        text: "An MDN article to learn how to share data between apps",
        url: "https://developer.mozilla.org/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps",
      });

      console.log("The URL was successfully shared");
    } catch (err) {
      console.error(`The URL could not be shared: ${err}`);
    }
  });
}
```

### Dateien teilen

Das folgende Codebeispiel zeigt, wie eine Datei geteilt wird, wenn ein Button in der App geklickt wird. Die Funktion `canBrowserShareFiles` wird verwendet, um den Teilen-Button nur anzuzeigen, wenn der Browser das Teilen von Dateien unterstützt.

```js
function canBrowserShareFiles() {
  if (!navigator.share || !navigator.canShare) {
    return false;
  }

  // Create some test data with a file, to check if the browser supports
  // sharing it.
  const testFile = new File(["foo"], "foo.txt", { type: "text/plain" });
  const data = { files: [testFile] };

  return navigator.canShare(data);
}

// Retrieve the button from the DOM. The button is hidden for now.
const button = document.querySelector("#share");

if (canBrowserShareFiles()) {
  // The browser supports sharing files. Show the button.
  button.style.display = "inline";

  // Listen for clicks on the button and share a file.
  button.addEventListener("click", async () => {
    try {
      // Get the file to be shared. This function should return a File
      // object, perhaps by creating it dynamically, or retrieving it
      // from IndexedDB.
      const file = await getTheFileToShare();

      await navigator.share({
        title: "My shared file",
        files: [file],
      });

      console.log("The file was successfully shared");
    } catch (err) {
      console.error(`The file could not be shared: ${err}`);
    }
  });
}
```

Weitere Informationen finden Sie im Beispiel [Dateien teilen](/de/docs/Web/API/Navigator/share#sharing_files) auf der Seite zur Methode `navigator.share()`.

## Geteilte Daten von anderen Apps verarbeiten

Um Ihre PWA als Ziel für von anderen Apps geteilte Daten zu registrieren, verwenden Sie die [Web Share Target API](https://developer.chrome.com/docs/capabilities/web-apis/web-share-target) und insbesondere das [`share_target`](/de/docs/Web/Manifest/share_target) Mitglied im Web-App-Manifest.

Das `share_target` Manifest-Mitglied ermöglicht es einer installierten PWA, auf Betriebssystemebene als potenzielles Ziel für von anderen Apps geteilte Inhalte registriert zu werden. Dies bedeutet, dass, wenn ein Benutzer einige Daten teilt, die mit Ihrer PWA kompatibel sind, das Betriebssystem Ihre PWA zusammen mit anderen typischen Freigabezielen wie E-Mail- oder Messaging-Apps auflistet. Beachten Sie, dass die PWA installiert sein muss, um als potenzielles Ziel für empfangene geteilte Daten angezeigt zu werden.

Die Informationen, die Sie mit dem `share_target` Mitglied in Ihrer Manifestdatei bereitstellen, definieren, für welche Daten Ihre Anwendung ein Ziel sein kann und wie das Betriebssystem Ihre App starten soll, wenn der Benutzer sie als Ziel auswählt.

### Textdaten verarbeiten

Hier ist ein Beispiel für ein Web-App-Manifest, das das `share_target` Mitglied verwendet:

```json
{
  "name": "ChattyBox",
  "start_url": "/",
  "display": "standalone",
  "icons": [
    {
      "src": "images/icon-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "share_target": {
    "action": "/share-handler",
    "method": "GET",
    "params": {
      "text": "description",
      "url": "link"
    }
  }
}
```

Wenn Ihre App vom Benutzer ausgewählt wird, um von einer anderen Anwendung geteilte Inhalte zu verarbeiten, wird Ihre App gestartet und die geteilten Inhalte werden ihr auf ähnliche Weise übergeben wie {{htmlelement("form")}}-Elemente übermittelt werden.

Im vorherigen Web-App-Manifest-Codebeispiel wird die ChattyBox-App gestartet, indem eine HTTP [`GET`](/de/docs/Web/HTTP/Methods/GET) Anfrage an die URL `/share-handler` gesendet wird, wobei die geteilten Daten als Anfrageparameter mit den Namen `description` und `link` übergeben werden.

Die `GET`-Anfrage wird folgendermaßen aussehen: `/shared-handler?description=...&link=...`.

Der Haupt-JavaScript-Code Ihrer App kann dann die geteilten Daten mithilfe der [URLSearchParams](/de/docs/Web/API/URLSearchParams)-Schnittstelle abrufen:

```js
const url = new URL(document.location);
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

Weitere Informationen finden Sie im Beispiel [Geteilte Daten mit GET empfangen](/de/docs/Web/Manifest/share_target#receiving_share_data_using_get) auf der Seite des Mitglieds `share_target` im Web-App-Manifest.

### Geteilte Dateien verarbeiten

Im vorherigen Beispiel wurden Textdaten als `GET`-Anfrage verarbeitet. Das Verarbeiten von Dateien erfordert jedoch die Verwendung einer [`POST`](/de/docs/Web/HTTP/Methods/POST)-Anfrage mit einem `multipart/form-data` [Kodierungstyp](/de/docs/Web/API/HTMLFormElement/enctype).

Der folgende Codeausschnitt zeigt, wie eine PWA konfiguriert werden kann, um verschiedene Arten von geteilten Dateien zu akzeptieren:

```json
{
  "name": "ChattyBox",
  "start_url": "/",
  "display": "standalone",
  "icons": [
    {
      "src": "images/icon-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "share_target": {
    "action": "/share-file-handler",
    "method": "POST",
    "enctype": "multipart/form-data",
    "params": {
      "files": [
        {
          "name": "textFiles",
          "accept": ["text/plain", ".txt"]
        },
        {
          "name": "htmlFiles",
          "accept": ["text/html", ".html"]
        },
        {
          "name": "images",
          "accept": ["image/jpeg", "image/png", "image/webp", "image/gif"]
        }
      ]
    }
  }
}
```

Wie in diesem Beispiel gezeigt, muss jedes Dateiobjekt in der `files`-Eigenschaft eine `name`-Eigenschaft und eine `accept`-Eigenschaft haben. Die `accept`-Eigenschaft muss die akzeptierten [MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) oder Dateierweiterungen angeben.

Wenn die App vom Benutzer ausgewählt wird, um eine geteilte Datei (oder Dateien) zu verarbeiten, wird die App mit einer `POST`-Anfrage an die URL `/share-file-handler` gestartet, mit kodierten Formulardaten.

Da es sich um eine `POST`-Anfrage handelt, kann der Haupt-JavaScript-Code Ihrer App nicht direkt auf die Formulardaten zugreifen. Sie können die übermittelten Dateien in Ihrem serverseitigen Code verarbeiten, indem Sie sie an dem Endpunkt `/share-file-handler` empfangen. Für eine bessere Benutzererfahrung, die auch offline funktioniert, können Sie die Dateien in Ihrem Service-Worker-Code mit einem [`fetch`-Ereignishandler](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) verarbeiten, wie hier gezeigt:

```js
// service-worker.js

self.addEventListener("fetch", (event) => {
  // Only use this event listener for POST requests sent to /share-file-handler.
  const url = new URL(event.request.url);
  if (
    event.request.method !== "POST" ||
    url.pathname !== "/share-file-handler"
  ) {
    return;
  }

  event.respondWith(
    (async () => {
      // Get the data from the submitted form.
      const formData = await event.request.formData();

      // Get the submitted files.
      const textFiles = formData.getAll("textFiles");
      const htmlFiles = formData.getAll("htmlFiles");
      const imageFiles = formData.getAll("images");

      // Send the files to the frontend app.
      sendFilesToFrontend(textFiles, htmlFiles, imageFiles);

      // Redirect the user to a URL that shows the imported files.
      return Response.redirect("/display-new-files", 303);
    })(),
  );
});
```

In diesem Codebeispiel werden die geteilten Dateien aus den Formulardaten extrahiert und der Benutzer wird auf eine andere Seite umgeleitet. Es liegt an Ihnen, die extrahierten Dateien mit dem Code in Ihrem Service-Worker so zu verarbeiten, wie Sie möchten. Beispielsweise können Sie sie mit der Methode [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) an den Haupt-JavaScript-Code Ihrer App senden oder sie in einer [Indexed DB](/de/docs/Web/API/IndexedDB_API)-Datenbank speichern, auf die sowohl Ihr Service-Worker als auch der Haupt-JavaScript-Code Ihrer App zugreifen können.

Weitere Informationen finden Sie im Beispiel [Empfangen von geteilten Dateien](/de/docs/Web/Manifest/share_target#receiving_shared_files) auf der Seite des Mitglieds `share_target` im Web-App-Manifest.

## Siehe auch

- [Web Share API](/de/docs/Web/API/Web_Share_API)
- [`share_target` Manifest-Mitglied](/de/docs/Web/Manifest/share_target)
- [Integration mit der OS-Freigabe-Benutzeroberfläche mit der Web Share API](https://web.dev/articles/web-share) auf web.dev
- [Empfangen von geteilten Daten mit der Web Share Target API](https://developer.chrome.com/docs/capabilities/web-apis/web-share-target) auf developer.chrome.com
- [Inhalte mit anderen Apps teilen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/share) auf microsoft.com
