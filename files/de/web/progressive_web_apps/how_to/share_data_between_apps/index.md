---
title: Daten zwischen Apps teilen
slug: Web/Progressive_web_apps/How_to/Share_data_between_apps
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{PWASidebar}}

Anwendungsfreigabe ist die Fähigkeit einer Anwendung, Informationen oder Daten an eine andere Anwendung auf demselben Gerät weiterzugeben. Diese Funktion ist für Benutzer nützlich, da sie ihnen ermöglicht, Informationen zwischen zwei Anwendungen zu teilen, ohne dass diese Anwendungen vorher voneinander wissen müssen.

Beispielsweise können Sie auf Ihrem mobilen Gerät Fotos oder Videos aus Ihrer Foto-App mit einer anderen Anwendung teilen, die Bilder akzeptiert, wie beispielsweise eine E-Mail-Anwendung. Dieses Freigabemuster wird vom Betriebssystem (OS), auf dem die beiden Anwendungen installiert sind, orchestriert:

1. Wenn die Fotofreigabe vom Benutzer initiiert wird, bereitet die Fotoanwendung die Daten für das ausgewählte Bild vor und übergibt sie an das Betriebssystem.
2. Das Betriebssystem wählt die Liste der Anwendungen aus, die die freigegebenen Bilddaten verarbeiten können, und zeigt sie dem Benutzer an.
3. Sobald der Benutzer eine der Zielanwendungen auswählt, startet das Betriebssystem sie mit dem freigegebenen Bild.

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) können ebenfalls Informationen unter Verwendung desselben vom Betriebssystem orchestrierten Musters teilen. PWAs können sowohl Daten teilen als auch freigegebene Daten akzeptieren.

Wenn Sie eine PWA entwickeln, kann das Akzeptieren freigegebener Daten Ihre PWA vertrauter und natürlicher in die Geräte Ihrer Benutzer integrieren.

## Daten mit anderen Apps teilen

Um es Benutzern zu ermöglichen, Daten mit anderen Apps aus Ihrer PWA zu teilen, verwenden Sie die [Web Share API](/de/docs/Web/API/Web_Share_API). Die Web Share API erlaubt Ihrer App, Text, Links oder Dateien mit anderen Apps über den zugrunde liegenden Freigabemechanismus des Betriebssystems zu teilen.

Um Daten zu teilen, verwenden Sie die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) als Reaktion auf eine Benutzeraktion, wie z.B. einen Button-Klick.

### Überprüfen der Unterstützung

Bevor Sie eine Benutzeroberfläche für Inhaltsfreigaben in Ihrer Anwendung anzeigen, sollten Sie sicherstellen, dass die Funktion der Web Share API unterstützt wird. Auch die Browser, die die Web Share API unterstützen, unterstützen nicht alle das Teilen aller Datentypen. Deshalb ist es eine gute Praxis, zuerst die Methode [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) zu verwenden, um zu validieren, ob die Daten, die Sie teilen möchten, tatsächlich aus dem Browser, der Ihre App ausführt, teilbar sind.

Dieses Beispiel zeigt, wie überprüft wird, ob die Web Share API unterstützt wird und ob die Daten geteilt werden können:

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

### Umgang mit Ausnahmen

Die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) gibt ein {{jsxref("Promise")}} zurück, das abgelehnt werden kann, beispielsweise wenn die freigegebenen Daten falsch sind, der Benutzer die Freigabeoperation abbricht oder die Datenübertragung fehlgeschlagen ist.

Es ist daher wichtig, das Promise-Rejection abzufangen, um Fehler in Ihrem JavaScript-Code der App zu vermeiden.

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

Das folgende Beispiel zeigt, wie ein Link und Text geteilt werden können, wenn ein Button in der App geklickt wird. Die im Beispiel verwendete Funktion `canBrowserShareData` wird in [Überprüfen der Unterstützung](#überprüfen_der_unterstützung) beschrieben und hier nicht wiederholt.

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

Das folgende Codebeispiel zeigt, wie eine Datei geteilt werden kann, wenn ein Button in der App geklickt wird. Die Funktion `canBrowserShareFiles` wird verwendet, um den Teilen-Button nur anzuzeigen, wenn der Browser das Teilen von Dateien unterstützt.

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

Für weitere Informationen siehe das Beispiel [Dateien teilen](/de/docs/Web/API/Navigator/share#sharing_files) auf der Seite zur Methode `navigator.share()`.

## Umgang mit freigegebenen Daten von anderen Apps

Um Ihre PWA als Ziel für freigegebene Daten anderer Apps zu registrieren, verwenden Sie die [Web Share Target API](https://developer.chrome.com/docs/capabilities/web-apis/web-share-target) und insbesondere das [`share_target`](/de/docs/Web/Manifest/share_target)-Mitglied des Web-App-Manifests.

Das `share_target`-Manifestmitglied ermöglicht es einer installierten PWA, auf Betriebssystemebene als potenzielles Ziel für von anderen Apps freigegebene Inhalte registriert zu werden. Dies bedeutet, dass, wenn ein Benutzer einige Daten freigibt, die mit Ihrer PWA kompatibel sind, aus einer anderen App, das Betriebssystem Ihre PWA neben anderen typischen Freigabezielen wie E-Mail- oder Messaging-Apps auflisten wird. Beachten Sie, dass die PWA installiert sein muss, um als potenzielles Ziel für den Empfang freigegebener Daten angezeigt zu werden.

Die Informationen, die Sie mit dem `share_target`-Mitglied in Ihrer Manifestdatei bereitstellen, definieren, für welche Daten Ihre App ein Ziel sein kann und wie das Betriebssystem Ihre App starten soll, wenn der Benutzer sie als Ziel auswählt.

### Umgang mit Textdaten

Hier ein Beispiel eines Web-App-Manifests mit dem `share_target`-Mitglied:

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

Wenn Ihre App vom Benutzer ausgewählt wird, um freigegebene Inhalte anderer Apps zu behandeln, wird Ihre App gestartet und die freigegebenen Inhalte werden ihr auf ähnliche Weise übergeben, wie {{htmlelement("form")}}-Elemente übermittelt werden.

Im vorherigen Codebeispiel des Web-App-Manifests wird, wenn die ChattyBox-App als Ziel ausgewählt wird, diese durch das Stellen einer HTTP-`GET`-Anfrage an die `/share-handler`-URL gestartet, wobei die freigegebenen Daten als Anforderungsparameter mit den Namen `description` und `link` übergeben werden.

Die `GET`-Anfrage sieht folgendermaßen aus: `/share-handler?description=...&link=...`.

Der Haupt-JavaScript-Code Ihrer App kann dann die freigegebenen Daten über die Schnittstelle [URLSearchParams](/de/docs/Web/API/URLSearchParams) abrufen:

```js
const url = new URL(document.location);
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

Für weitere Informationen siehe das Beispiel [Empfangen freigegebener Daten mit GET](/de/docs/Web/Manifest/share_target#receiving_share_data_using_get) auf der Seite zum `share_target`-Mitglied des Web-App-Manifests.

### Umgang mit freigegebenen Dateien

Im vorherigen Beispiel wurden Textdaten als `GET`-Anfrage behandelt. Das Behandeln von Dateien erfordert jedoch die Verwendung einer [`POST`](/de/docs/Web/HTTP/Methods/POST)-Anfrage mit einem `multipart/form-data` [Kodierungstyp](/de/docs/Web/API/HTMLFormElement/enctype).

Der folgende Codeausschnitt zeigt, wie eine PWA konfiguriert werden kann, um verschiedene Typen freigegebener Dateien zu akzeptieren:

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

Wie dieses Beispiel zeigt, muss jedes Dateiobjekt in der `files`-Eigenschaft eine `name`-Eigenschaft und eine `accept`-Eigenschaft haben. Die `accept`-Eigenschaft muss die akzeptierten [MIME-Typen](/de/docs/Web/HTTP/MIME_types) oder Dateierweiterungen angeben.

Wenn die App vom Benutzer ausgewählt wird, um eine freigegebene Datei (oder Dateien) zu bearbeiten, wird die App mit einer `POST`-Anfrage an die `/share-file-handler`-URL gestartet, mit kodierten Formulardaten.

Da dies eine `POST`-Anfrage ist, kann der Haupt-JavaScript-Code Ihrer App nicht direkt auf die Formulardaten zugreifen. Sie können die übermittelten Dateien in Ihrem serverseitigen Code behandeln, indem Sie sie an den `/share-file-handler`-URL-Endpunkt empfangen. Für ein besseres Benutzererlebnis, das offline funktioniert, können Sie die Dateien jedoch in Ihrem Service Worker-Code mit einem [`fetch`-Ereignishandler](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) behandeln, wie hier gezeigt:

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

In diesem Codebeispiel werden die freigegebenen Dateien aus den Formulardaten extrahiert und der Benutzer wird auf eine andere Seite weitergeleitet. Es liegt an Ihnen, unter Verwendung des Codes in Ihrem Service Worker, die extrahierten Dateien nach Wunsch zu behandeln. Beispielsweise können Sie diese an den Haupt-JavaScript-Code Ihrer App senden, indem Sie die Methode [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) verwenden, oder sie in einer [Indexed DB](/de/docs/Web/API/IndexedDB_API)-Datenbank speichern, auf die sowohl Ihr Service Worker als auch der Haupt-JavaScript-Code Ihrer App zugreifen können.

Für weitere Informationen siehe das Beispiel [empfangene freigegebene Dateien](/de/docs/Web/Manifest/share_target#receiving_shared_files) auf der Seite zum `share_target`-Mitglied des Web-App-Manifests.

## Siehe auch

- [Web Share API](/de/docs/Web/API/Web_Share_API)
- [`share_target` Manifestmitglied](/de/docs/Web/Manifest/share_target)
- [Integration mit der OS-Freigabeoberfläche über die Web Share API](https://web.dev/articles/web-share) auf web.dev
- [Empfangen freigegebener Daten mit der Web Share Target API](https://developer.chrome.com/docs/capabilities/web-apis/web-share-target) auf developer.chrome.com
- [Inhalte mit anderen Apps teilen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/share) auf microsoft.com
