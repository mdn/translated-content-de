---
title: Daten zwischen Apps teilen
slug: Web/Progressive_web_apps/How_to/Share_data_between_apps
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

Die Datenfreigabe zwischen Anwendungen ist die Fähigkeit einer Anwendung, Informationen oder Daten an eine andere Anwendung auf demselben Gerät weiterzugeben. Diese Funktion ist für Benutzer nützlich, da sie es ihnen ermöglicht, Informationen zwischen zwei Anwendungen auszutauschen, ohne dass diese Anwendungen vorher voneinander wissen müssen.

Beispielsweise können Sie auf Ihrem Mobilgerät Fotos oder Videos aus Ihrer Foto-App mit einer anderen Anwendung teilen, die Bilder akzeptiert, wie beispielsweise einer E-Mail-Anwendung. Dieses Freigabemuster wird vom Betriebssystem (OS) orchestriert, auf dem die beiden Anwendungen installiert sind:

1. Wenn der Nutzer die Fotofreigabe initiiert, bereitet die Fotoanwendung die Daten für das ausgewählte Bild vor und übergibt sie an das Betriebssystem.
2. Das Betriebssystem wählt die Liste der Anwendungen, die die freigegebenen Bilddaten verarbeiten können, und zeigt sie dem Nutzer an.
3. Sobald der Nutzer eine der Zielanwendungen auswählt, startet das Betriebssystem diese mit dem freigegebenen Bild.

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) haben ebenfalls die Fähigkeit, Informationen mit demselben, vom Betriebssystem orchestrierten Muster zu teilen. PWAs können sowohl Daten freigeben als auch freigegebene Daten akzeptieren.

Beim Erstellen einer PWA kann das Akzeptieren freigegebener Daten dazu beitragen, dass Ihre PWA vertrauter wirkt und sich natürlicher in die Geräte Ihrer Benutzer einfügt.

## Daten mit anderen Apps teilen

Um es Benutzern zu ermöglichen, Daten von Ihrer PWA aus mit anderen Apps zu teilen, verwenden Sie die [Web Share API](/de/docs/Web/API/Web_Share_API). Die Web Share API ermöglicht es Ihrer App, Text, Links oder Dateien mit anderen Apps über den zugrunde liegenden Betriebssystem-Freigabemechanismus zu teilen.

Um Daten zu teilen, verwenden Sie die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) als Reaktion auf eine Benutzeraktion, wie z. B. einen Tastendruck.

### Unterstützung prüfen

Bevor Sie eine UI zur Inhaltsfreigabe in Ihrer Anwendung anzeigen, prüfen Sie, ob die Funktion der Web Share API unterstützt wird. Selbst die Browser, die die Web Share API unterstützen, unterstützen nicht alle die Freigabe aller Datentypen. Daher ist es eine gute Praxis, zunächst die Methode [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) zu verwenden, um zu überprüfen, ob die Daten, die Sie teilen möchten, tatsächlich vom Browser, der Ihre App ausführt, geteilt werden können.

Dieses Beispiel zeigt, wie Sie prüfen können, ob die Web Share API unterstützt wird und ob die Daten geteilt werden können:

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

Die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) gibt ein {{jsxref("Promise")}} zurück, das in Fällen abgelehnt werden kann, wie z. B. wenn die freigegebenen Daten falsch sind, wenn der Benutzer den Teilvorgang abbricht oder wenn die Datenübertragung fehlgeschlagen ist.

Es ist daher wichtig, die Promise-Ablehnung abzufangen, um Fehler im JavaScript-Code Ihrer App zu vermeiden.

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

Das folgende Beispiel demonstriert, wie ein Link und ein Text geteilt werden, wenn eine Schaltfläche in der App geklickt wird. Die im Beispiel verwendete Funktion `canBrowserShareData` wird im Abschnitt [Unterstützung prüfen](#unterstützung_prüfen) beschrieben und hier nicht wiederholt.

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

Das folgende Codebeispiel zeigt, wie eine Datei geteilt wird, wenn eine Schaltfläche in der App geklickt wird. Die Funktion `canBrowserShareFiles` wird verwendet, um die Schaltfläche nur anzuzeigen, wenn der Browser das Teilen von Dateien unterstützt.

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

Weitere Informationen finden Sie im Beispiel [Freigebeispiele für Dateien](/de/docs/Web/API/Navigator/share#sharing_files) auf der Seite der Methode `navigator.share()`.

## Freigegebene Daten von anderen Apps bearbeiten

Um Ihre PWA als Ziel für von anderen Apps freigegebene Daten zu registrieren, verwenden Sie die [Web Share Target API](https://developer.chrome.com/docs/capabilities/web-apis/web-share-target) und insbesondere das [`share_target`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target)-Mitglied im Web App Manifest.

Das `share_target`-Manifestmitglied ermöglicht es einer installierten PWA, auf Betriebssystemebene als potenzielles Ziel für von anderen Apps geteilte Inhalte registriert zu werden. Dies bedeutet, dass wenn ein Nutzer Daten freigibt, die mit Ihrer PWA kompatibel sind, von einer anderen App, das Betriebssystem Ihre PWA neben anderen typischen Freigabezielen wie E-Mail- oder Messaging-Apps auflistet. Beachten Sie, dass die PWA installiert sein muss, um als potenzielles Ziel für den Empfang freigegebener Daten angezeigt zu werden.

Die Informationen, die Sie mit dem `share_target`-Mitglied in Ihrer Manifestdatei bereitstellen, definieren, für welche Daten Ihre App ein Ziel sein kann und wie das Betriebssystem Ihre App starten sollte, wenn der Benutzer sie als Ziel auswählt.

### Textdaten bearbeiten

Hier ist ein Beispiel für ein Web App Manifest mit dem `share_target`-Mitglied:

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

Wenn Ihre App vom Nutzer ausgewählt wird, um die von einer anderen App freigegebenen Inhalte zu bearbeiten, wird Ihre App gestartet und der freigegebene Inhalt wird ihr in ähnlicher Weise übergeben, wie es bei der Übermittlung von {{htmlelement("form")}}-Elementen der Fall ist.

Im vorherigen Web App Manifest-Codebeispiel wird die ChattyBox-App, wenn sie als Ziel ausgewählt wird, durch Senden einer HTTP-[`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anforderung an die URL `/share-handler` gestartet, wobei die freigegebenen Daten als Anfrageparameter mit den Namen `description` und `link` übergeben werden.

Die `GET`-Anforderung wird in etwa so aussehen: `/shared-handler?description=...&link=...`.

Der Haupt-JavaScript-Code Ihrer App kann die freigegebenen Daten dann mithilfe der [URLSearchParams](/de/docs/Web/API/URLSearchParams)-Schnittstelle abrufen:

```js
const url = new URL(document.location);
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

Weitere Informationen finden Sie im Beispiel [Empfangen freigegebener Daten mit GET](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target#receiving_share_data_using_get) auf der Seite des Web App Manifests-Mitglieds `share_target`.

### Freigegebene Dateien bearbeiten

Im vorherigen Beispiel wurden Textdaten als `GET`-Anforderung behandelt. Das Bearbeiten von Dateien erfordert jedoch die Verwendung einer [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anforderung mit einem `multipart/form-data` [Kodierungstyp](/de/docs/Web/API/HTMLFormElement/enctype).

Der folgende Codeausschnitt zeigt, wie eine PWA konfiguriert werden kann, um verschiedene Arten freigegebener Dateien zu akzeptieren:

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

Wie in diesem Beispiel gezeigt, muss jedes Dateiobjekt in der Eigenschaft `files` eine Eigenschaft `name` und eine Eigenschaft `accept` haben. Die `accept`-Eigenschaft muss die akzeptierten [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) oder Dateierweiterungen spezifizieren.

Wenn die App vom Nutzer ausgewählt wird, um eine freigegebene Datei (oder Dateien) zu bearbeiten, wird die App mit einer `POST`-Anforderung an die URL `/share-file-handler` mit kodierten Formulardaten gestartet.

Da dies eine `POST`-Anforderung ist, kann der Haupt-JavaScript-Code Ihrer App nicht direkt auf die Formulardaten zugreifen. Sie können die übermittelten Dateien im serverseitigen Code bearbeiten, indem Sie sie an dem Endpunkt `/share-file-handler` empfangen. Für eine bessere Benutzererfahrung, die offline funktioniert, können Sie die Dateien jedoch im Code Ihres Service Workers mit einem [`fetch`-Event-Handler](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) bearbeiten, wie hier gezeigt wird:

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

In diesem Codebeispiel werden die freigegebenen Dateien aus den Formulardaten extrahiert und der Nutzer wird auf eine andere Seite umgeleitet. Es liegt an Ihnen, die extrahierten Dateien mit dem Code in Ihrem Service Worker nach Belieben zu bearbeiten. Beispielsweise können Sie sie mit der Methode [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) an den Haupt-JavaScript-Code Ihrer App senden oder sie in einer [Indexed DB](/de/docs/Web/API/IndexedDB_API)-Datenbank speichern, auf die sowohl Ihr Service Worker als auch der Haupt-JavaScript-Code Ihrer App zugreifen können.

Weitere Informationen finden Sie im Beispiel [Empfangen freigegebener Dateien](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target#receiving_shared_files) auf der Seite des Web App Manifests-Mitglieds `share_target`.

## Siehe auch

- [Web Share API](/de/docs/Web/API/Web_Share_API)
- [`share_target`-Manifestmitglied](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target)
- [Mit dem UI des Betriebssystems über die Web Share API interagieren](https://web.dev/articles/web-share) auf web.dev
- [Empfangen freigegebener Daten mit der Web Share Target API](https://developer.chrome.com/docs/capabilities/web-apis/web-share-target) auf developer.chrome.com
- [Inhalte mit anderen Apps teilen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/share) auf microsoft.com
