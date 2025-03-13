---
title: Daten zwischen Apps teilen
slug: Web/Progressive_web_apps/How_to/Share_data_between_apps
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{PWASidebar}}

Anwendungsfreigabe ist die Fähigkeit einer Anwendung, Informationen oder Daten an eine andere Anwendung auf demselben Gerät zu übermitteln. Diese Funktion ist für Benutzer nützlich, da sie es ihnen ermöglicht, Informationen zwischen zwei Anwendungen auszutauschen, ohne dass diese Anwendungen zuvor Kenntnisse voneinander haben müssen.

Zum Beispiel können Sie auf Ihrem mobilen Gerät Fotos oder Videos von Ihrer Foto-App mit einer anderen Anwendung teilen, die Bilder akzeptiert, wie eine E-Mail-Anwendung. Dieses Freigabemuster wird vom Betriebssystem (OS) orchestriert, auf dem die beiden Anwendungen installiert sind:

1. Wenn die Foto-Freigabe vom Benutzer initiiert wird, bereitet die Fotoanwendung die Daten für das ausgewählte Bild vor und übergibt sie an das Betriebssystem.
2. Das Betriebssystem wählt die Liste der Anwendungen aus, die in der Lage sind, die freigegebenen Bilddaten zu verarbeiten, und zeigt sie dem Benutzer an.
3. Sobald der Benutzer eine der Zielanwendungen auswählt, startet das Betriebssystem diese mit dem freigegebenen Bild.

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) haben ebenfalls die Fähigkeit, Informationen mithilfe des gleichen, vom Betriebssystem orchestrierten Musters zu teilen. PWAs können sowohl Daten teilen als auch geteilte Daten akzeptieren.

Wenn Sie eine PWA entwickeln, kann das Akzeptieren geteilten Daten dazu beitragen, dass sich Ihre PWA für Benutzer vertrauter und natürlicher in ihre Geräte integriert anfühlt.

## Daten mit anderen Apps teilen

Um es Benutzern zu ermöglichen, Daten mit anderen Apps von Ihrer PWA aus zu teilen, verwenden Sie die [Web Share API](/de/docs/Web/API/Web_Share_API). Die Web Share API ermöglicht es Ihrer App, Text, Links oder Dateien über den Freigabemechanismus des zugrunde liegenden Betriebssystems mit anderen Apps zu teilen.

Um Daten zu teilen, verwenden Sie die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) als Antwort auf eine Benutzeraktion, wie zum Beispiel einen Klick auf einen Button.

### Auf Unterstützung prüfen

Bevor Sie eine Benutzeroberfläche zur Inhaltsfreigabe in Ihrer Anwendung anzeigen, überprüfen Sie, ob das Web Share API-Feature unterstützt wird. Selbst die Browser, die die Web Share API unterstützen, unterstützen nicht alle das Teilen aller Datentypen. Daher ist es eine gute Praxis, zunächst die Methode [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) zu verwenden, um zu überprüfen, ob die Daten, die Sie teilen möchten, tatsächlich vom Browser, der Ihre App ausführt, freigegeben werden können.

Dieses Beispiel zeigt, wie man überprüft, ob die Web Share API unterstützt wird und ob die Daten geteilt werden können:

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

### Ausnahmebehandlung

Die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) gibt ein {{jsxref("Promise")}} zurück, das in Fällen abgelehnt werden kann, in denen die geteilten Daten fehlerhaft sind, der Benutzer die Share-Operation abbricht oder die Datenübertragung fehlgeschlagen ist.

Es ist daher wichtig, die Ablehnung des Versprechens abzufangen, um Fehler im JavaScript-Code Ihrer App zu vermeiden.

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

Das folgende Beispiel zeigt, wie man einen Link und einige Texte teilt, wenn ein Button in der App geklickt wird. Die Funktion `canBrowserShareData`, die im Beispiel verwendet wird, wird in [Auf Unterstützung prüfen](#auf_unterstützung_prüfen) beschrieben und hier nicht wiederholt.

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

Das folgende Codebeispiel zeigt, wie man eine Datei teilt, wenn ein Button in der App geklickt wird. Die Funktion `canBrowserShareFiles` wird verwendet, um den Share-Button nur anzuzeigen, wenn der Browser das Teilen von Dateien unterstützt.

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

Weitere Informationen finden Sie im [Beispiel zum Teilen von Dateien](/de/docs/Web/API/Navigator/share#sharing_files) auf der Seite zur `navigator.share()` Methode.

## Umgang mit geteilten Daten von anderen Apps

Um Ihre PWA als Ziel für die geteilten Daten anderer Apps zu registrieren, verwenden Sie die [Web Share Target API](https://developer.chrome.com/docs/capabilities/web-apis/web-share-target) und insbesondere das [`share_target`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target) Mitglied des Web-App-Manifests.

Das `share_target`-Manifestmitglied ermöglicht es einer installierten PWA, auf Betriebssystemebene als potenzielles Ziel für von anderen Apps geteilte Inhalte registriert zu werden. Das bedeutet, dass, wenn ein Benutzer Daten teilt, die mit Ihrer PWA kompatibel sind, aus einer anderen App heraus, das Betriebssystem Ihre PWA neben anderen typischen Freigabezielen wie E-Mail oder Messaging-Apps auflistet. Beachten Sie, dass die PWA installiert sein muss, um als potenzielles Ziel für den Empfang geteilten Daten angezeigt zu werden.

Die Informationen, die Sie mit dem `share_target`-Mitglied in Ihrer Manifestdatei bereitstellen, legen fest, für welche Daten Ihre App ein Ziel sein kann und wie das Betriebssystem Ihre App starten soll, wenn der Benutzer sie als Ziel auswählt.

### Textdaten handhaben

Hier ist ein Web-App-Manifestsbeispiel mit dem `share_target`-Mitglied:

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

Wenn Ihre App vom Benutzer ausgewählt wird, um den Inhalt einer anderen App zu behandeln, wird Ihre App gestartet und der geteilte Inhalt wird ihr in ähnlicher Weise übergeben, wie {{htmlelement("form")}}-Elemente übermittelt werden.

Im vorherigen Beispiel des Web-App-Manifests wird die ChattyBox-App als Ziel ausgewählt und wird durch einen HTTP [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfrage an die URL `/share-handler` mit den als Anforderungsparameter übergebenen geteilten Daten `description` und `link` gestartet.

Die `GET`-Anfrage sieht folgendermaßen aus: `/shared-handler?description=...&link=...`.

Der Haupt-JavaScript-Code Ihrer App kann dann die geteilten Daten mit der [URLSearchParams](/de/docs/Web/API/URLSearchParams)-Schnittstelle abrufen:

```js
const url = new URL(document.location);
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

Weitere Informationen finden Sie im Beispiel [Receive share data using GET](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target#receiving_share_data_using_get) auf der `share_target` Web-App-Manifestmitglied Seite.

### Geteilte Dateien behandeln

Im vorherigen Beispiel wurden Textdaten als `GET`-Anfrage behandelt. Wenn jedoch Dateien behandelt werden sollen, ist die Verwendung einer [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage mit einem `multipart/form-data` [Kodierungstyp](/de/docs/Web/API/HTMLFormElement/enctype) erforderlich.

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

Wie in diesem Beispiel gezeigt wird, muss jedes Dateiobjekt in der `files`-Eigenschaft eine `name`-Eigenschaft und eine `accept`-Eigenschaft haben. Die `accept`-Eigenschaft muss die akzeptierten [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) oder Dateierweiterungen spezifizieren.

Wenn die App vom Benutzer ausgewählt wird, um eine geteilte Datei (oder Dateien) zu behandeln, wird die App mit einer `POST`-Anfrage an die URL `/share-file-handler` mit kodierten Formulardaten gestartet.

Da es sich um eine `POST`-Anfrage handelt, kann der Haupt-JavaScript-Code Ihrer App nicht direkt auf die Formulardaten zugreifen. Sie können die übermittelten Dateien in Ihrem serverseitigen Code an dem `/share-file-handler` URL-Endpunkt empfangen. Für ein besseres Benutzererlebnis, das offline funktioniert, können Sie die Dateien jedoch in Ihrem Service Worker Code mit einem [`fetch`-Ereignishandler](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) behandeln, wie hier gezeigt:

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

In diesem Beispiel werden die geteilten Dateien aus den Formulardaten extrahiert und der Benutzer wird zu einer anderen Seite weitergeleitet. Es liegt an Ihnen, mit dem Code in Ihrem Service Worker die extrahierten Dateien nach Belieben zu handhaben. Zum Beispiel können Sie sie mit der Methode [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) an den Haupt-JavaScript-Code Ihrer App senden oder sie in einer [Indexed DB](/de/docs/Web/API/IndexedDB_API)-Datenbank speichern, auf die sowohl Ihr Service Worker als auch der Haupt-JavaScript-Code Ihrer App zugreifen können.

Weitere Informationen finden Sie im Beispiel [receiving shared files](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target#receiving_shared_files) auf der `share_target` Web-App-Manifestmitglied Seite.

## Siehe auch

- [Web Share API](/de/docs/Web/API/Web_Share_API)
- [`share_target` Manifestmitglied](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target)
- [Integration mit der OS-Freigabe-UI über die Web Share API](https://web.dev/articles/web-share) auf web.dev
- [Empfangen von geteilten Daten mit der Web Share Target API](https://developer.chrome.com/docs/capabilities/web-apis/web-share-target) auf developer.chrome.com
- [Teilen von Inhalten mit anderen Apps](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/share) auf microsoft.com
