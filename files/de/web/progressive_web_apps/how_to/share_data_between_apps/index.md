---
title: Daten zwischen Apps teilen
slug: Web/Progressive_web_apps/How_to/Share_data_between_apps
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Das Teilen von Anwendungen ermöglicht es einer Anwendung, Informationen oder Daten an eine andere Anwendung auf demselben Gerät zu übermitteln. Diese Funktion ist für Benutzer nützlich, da sie Informationen zwischen zwei Anwendungen teilen können, ohne dass diese Anwendungen vorher voneinander wissen müssen.

Beispielsweise können Sie auf Ihrem Mobilgerät Fotos oder Videos aus Ihrer Foto-App mit einer anderen Anwendung teilen, die Bilder akzeptiert, wie zum Beispiel eine E-Mail-Anwendung. Dieses Sharing-Muster wird vom Betriebssystem (OS), auf dem die beiden Anwendungen installiert sind, orchestriert:

1. Wenn das Teilen des Fotos vom Benutzer initiiert wird, bereitet die Fotoanwendung die Daten für das ausgewählte Bild vor und übergibt sie dem Betriebssystem.
2. Das Betriebssystem wählt die Liste der Anwendungen aus, die die geteilten Bilddaten verarbeiten können und zeigt sie dem Benutzer an.
3. Sobald der Benutzer eine der Zielanwendungen auswählt, startet das Betriebssystem diese mit dem geteilten Bild.

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) haben ebenfalls die Möglichkeit, Informationen mithilfe desselben vom OS orchestrierten Musters zu teilen. PWAs können sowohl Daten teilen als auch geteilte Daten akzeptieren.

Beim Erstellen einer PWA kann das Akzeptieren geteilte Daten Ihre PWA vertrauter und natürlicher in die Geräte Ihrer Benutzer integrieren.

## Daten mit anderen Apps teilen

Um Benutzern das Teilen von Daten mit anderen Apps über Ihre PWA zu ermöglichen, verwenden Sie die [Web Share API](/de/docs/Web/API/Web_Share_API). Die Web Share API erlaubt Ihrer App, Text, Links oder Dateien mit anderen Apps über den zugrunde liegenden Freigabemechanismus des Betriebssystems zu teilen.

Um Daten zu teilen, verwenden Sie die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) als Reaktion auf eine Benutzeraktion, wie zum Beispiel das Klicken auf einen Button.

### Unterstützung prüfen

Bevor Sie eine Benutzeroberfläche zum Teilen von Inhalten in Ihrer Anwendung anzeigen, prüfen Sie, ob die Funktion der Web Share API unterstützt wird. Auch die Browser, die die Web Share API unterstützen, unterstützen nicht alle das Teilen aller Datentypen. Daher ist es eine gute Praxis, zuerst die Methode [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) zu verwenden, um zu validieren, ob die Daten, die Sie teilen möchten, tatsächlich vom Browser, in dem Ihre App läuft, geteilt werden können.

Dieses Beispiel zeigt, wie geprüft wird, ob die Web Share API unterstützt wird und ob die Daten geteilt werden können:

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

Die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) gibt ein {{jsxref("Promise")}} zurück, das in Fällen wie falschen geteilten Daten, Abbruch der Freigabeoperation durch den Benutzer oder fehlgeschlagene Datenübertragungen abgelehnt werden kann.

Es ist daher wichtig, die Ablehnung der Promise abzufangen, um Fehler im JavaScript-Code Ihrer App zu vermeiden.

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

Das folgende Beispiel zeigt, wie ein Link und ein Text geteilt werden, wenn ein Button in der App geklickt wird. Die im Beispiel verwendete Funktion `canBrowserShareData` wird unter [Unterstützung prüfen](#unterstützung_prüfen) beschrieben und hier nicht wiederholt.

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

Für weitere Informationen siehe das [Beispiel zum Teilen von Dateien](/de/docs/Web/API/Navigator/share#sharing_files) auf der Seite der Methode `navigator.share()`.

## Geteilte Daten von anderen Apps handhaben

Um Ihre PWA als Ziel für andere Apps geteilte Daten zu registrieren, verwenden Sie die [Web Share Target API](https://developer.chrome.com/docs/capabilities/web-apis/web-share-target) und insbesondere das [`share_target`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target) Mitglied des Web-App-Manifests.

Das `share_target` Manifestmitglied erlaubt es einer installierten PWA, auf Betriebssystemebene als potenzielles Ziel für von anderen Apps geteilte Inhalte registriert zu werden. Das bedeutet, dass wenn ein Benutzer einige Daten teilt, die mit Ihrer PWA kompatibel sind, von einer anderen App, wird Ihr PWA neben anderen typischen Ziel-Apps wie E-Mail oder Messaging-Apps aufgeführt. Beachten Sie, dass die PWA installiert sein muss, um als potenzielles Ziel für den Empfang geteilter Daten angezeigt zu werden.

Die Informationen, die Sie mit dem `share_target` Mitglied in Ihrer Manifestdatei bereitstellen, definieren, für welche Daten Ihre App ein Ziel sein kann und wie das Betriebssystem Ihre App starten soll, wenn der Benutzer sie als Ziel auswählt.

### Textdaten handhaben

Hier ist ein Beispiel eines Web-App-Manifests, das das `share_target` Mitglied verwendet:

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

Wenn Ihre App vom Benutzer ausgewählt wird, um geteilte Inhalte einer anderen Anwendung zu handhaben, wird Ihre App gestartet und die geteilten Inhalte werden auf ähnliche Weise an sie übergeben, wie {{htmlelement("form")}}-Elemente übermittelt werden.

Im vorhergehenden Web-App-Manifest-Codebeispiel, wenn die ChattyBox-App als Ziel ausgewählt wird, wird sie durch das Senden eines HTTP [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Requests an die URL `/share-handler` gestartet, mit den geteilten Daten als Anfrageparameter namens `description` und `link`.

Der `GET`-Request wird so aussehen: `/shared-handler?description=...&link=...`.

Der Haupt-JavaScript-Code Ihrer App kann dann die geteilten Daten mit Hilfe des [URLSearchParams](/de/docs/Web/API/URLSearchParams) Interface abrufen:

```js
const url = new URL(document.location);
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

Für weitere Informationen siehe das Beispiel [Geteilte Daten mit GET empfangen](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target#receiving_share_data_using_get) auf der `share_target` Web-App-Manifestmitgliedseite.

### Geteilte Dateien handhaben

Im vorhergehenden Beispiel wurden Textdaten als `GET`-Request behandelt. Das Handhaben von Dateien erfordert jedoch die Verwendung eines [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Requests mit einem `multipart/form-data` [Encoding-Typ](/de/docs/Web/API/HTMLFormElement/enctype).

Der folgende Codeausschnitt zeigt, wie eine PWA konfiguriert werden kann, um unterschiedliche Arten geteilter Dateien zu akzeptieren:

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

Wie dieses Beispiel zeigt, muss jedes Dateiobjekt in der `files`-Eigenschaft eine `name`-Eigenschaft und eine `accept`-Eigenschaft haben. Die `accept`-Eigenschaft muss die akzeptierten [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) oder Dateierweiterungen spezifizieren.

Wenn die App vom Benutzer ausgewählt wird, um eine geteilte Datei (oder Dateien) zu handhaben, wird die App mit einem `POST`-Request an die URL `/share-file-handler` gestartet, mit kodierten Formulardaten.

Da dies ein `POST`-Request ist, kann der Haupt-JavaScript-Code Ihrer App nicht direkt auf die Formulardaten zugreifen. Sie können die übermittelten Dateien in Ihrem serverseitigen Code behandeln, indem Sie sie an dem `/share-file-handler` URL-Endpunkt empfangen. Für eine bessere Benutzererfahrung, die offline funktioniert, können Sie die Dateien jedoch in Ihrem Service-Worker-Code mit einem [`fetch`-Event-Handler](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) behandeln, wie hier gezeigt wird:

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

In diesem Codebeispiel werden die geteilten Dateien aus den Formulardaten extrahiert und der Benutzer wird auf eine andere Seite weitergeleitet. Es liegt an Ihnen, wie Sie die extrahierten Dateien mit Ihrem Code im Service Worker handhaben. Zum Beispiel können Sie sie mit der Methode [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) an den Haupt-JavaScript-Code Ihrer App senden oder sie in einer [Indexed DB](/de/docs/Web/API/IndexedDB_API)-Datenbank speichern, die sowohl vom Service Worker als auch vom Haupt-JavaScript-Code Ihrer App aufgerufen werden kann.

Für weitere Informationen siehe das [Beispiel zum Empfangen geteilter Dateien](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target#receiving_shared_files) auf der `share_target` Web-App-Manifestmitgliedseite.

## Siehe auch

- [Web Share API](/de/docs/Web/API/Web_Share_API)
- [`share_target` Manifestmitglied](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target)
- [Integration mit der OS-Sharing-UI mit der Web Share API](https://web.dev/articles/web-share) auf web.dev
- [Empfangen geteilter Daten mit der Web Share Target API](https://developer.chrome.com/docs/capabilities/web-apis/web-share-target) auf developer.chrome.com
- [Inhalte mit anderen Apps teilen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/share) auf microsoft.com
