---
title: Daten zwischen Apps teilen
slug: Web/Progressive_web_apps/How_to/Share_data_between_apps
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PWASidebar}}

Das Teilen zwischen Anwendungen ist die Fähigkeit einer Anwendung, Informationen oder Daten an eine andere Anwendung auf demselben Gerät zu übergeben. Diese Funktion ist für Benutzer nützlich, da sie Informationen zwischen zwei Anwendungen teilen können, ohne dass diese Anwendungen bereits voneinander wissen müssen.

Zum Beispiel können Sie auf Ihrem Mobilgerät Fotos oder Videos aus Ihrer Foto-App mit einer anderen Anwendung teilen, die Bilder akzeptiert, wie etwa einer E-Mail-Anwendung. Dieses Teilen wird durch das Betriebssystem (OS) orchestriert, auf dem die beiden Anwendungen installiert sind:

1. Wenn das Teilen eines Fotos vom Benutzer initiiert wird, bereitet die Fotoanwendung die Daten für das ausgewählte Bild vor und übergibt sie an das Betriebssystem.
2. Das Betriebssystem wählt die Liste von Anwendungen aus, die mit den geteilten Bilddaten umgehen können, und zeigt sie dem Benutzer an.
3. Sobald der Benutzer eine der Zielanwendungen auswählt, startet das Betriebssystem diese mit dem geteilten Bild.

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) haben ebenfalls die Fähigkeit, Informationen unter Verwendung des gleichen, vom Betriebssystem orchestrierten Musters zu teilen. PWAs können sowohl Daten teilen als auch geteilte Daten akzeptieren.

Wenn Sie eine PWA erstellen, kann das Akzeptieren geteilter Daten Ihre PWA vertrauter und natürlicher in die Geräte Ihrer Benutzer integrieren.

## Daten mit anderen Apps teilen

Um es Benutzern zu ermöglichen, Daten von Ihrer PWA mit anderen Apps zu teilen, verwenden Sie die [Web Share API](/de/docs/Web/API/Web_Share_API). Die Web Share API ermöglicht es Ihrer App, Text, Links oder Dateien über den zugrunde liegenden Betriebssystem-Sharing-Mechanismus mit anderen Apps zu teilen.

Um Daten zu teilen, verwenden Sie die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) als Reaktion auf eine Benutzeraktion, wie einen Button-Klick.

### Überprüfung der Unterstützung

Bevor Sie die Benutzeroberfläche für das Teilen von Inhalten in Ihrer Anwendung anzeigen, überprüfen Sie, ob das Feature der Web Share API unterstützt wird. Selbst in den Browsern, die die Web Share API unterstützen, werden nicht alle Datentypen unterstützt. Daher ist es empfehlenswert, zuerst die Methode [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) zu verwenden, um zu validieren, ob die Daten, die Sie teilen möchten, vom Browser, der Ihre App ausführt, teilbar sind.

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

### Umgang mit Ausnahmen

Die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) gibt ein {{jsxref("Promise")}} zurück, das in Fällen abgelehnt werden kann, in denen die geteilten Daten inkorrekt sind, der Benutzer den Sharing-Vorgang abbricht oder die Datenübertragung fehlschlägt.

Es ist daher wichtig, den Promise-Ablehnung zu behandeln, um Fehler im JavaScript-Code Ihrer App zu vermeiden.

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

### Teilen von Textdaten

Das folgende Beispiel zeigt, wie man einen Link und etwas Text teilt, wenn ein Button in der App geklickt wird. Die Funktion `canBrowserShareData`, die im Beispiel verwendet wird, wird in [Überprüfung der Unterstützung](#überprüfung_der_unterstützung) beschrieben und hier nicht wiederholt.

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

### Teilen von Dateien

Das folgende Codebeispiel zeigt, wie man eine Datei teilt, wenn ein Button in der App geklickt wird. Die Funktion `canBrowserShareFiles` wird verwendet, um den Teilen-Button nur anzuzeigen, wenn der Browser das Teilen von Dateien unterstützt.

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

Für weitere Informationen, siehe das [Beispiel zum Teilen von Dateien](/de/docs/Web/API/Navigator/share#sharing_files) auf der Seite der Methode `navigator.share()`.

## Umgehen mit geteilten Daten von anderen Apps

Um Ihre PWA als Ziel für die von anderen Apps geteilten Daten zu registrieren, verwenden Sie die [Web Share Target API](https://developer.chrome.com/docs/capabilities/web-apis/web-share-target) und insbesondere das `share_target`-Element im Web-App-Manifest.

Das `share_target`-Element im Manifest ermöglicht es einer installierten PWA, auf Betriebssystemebene als mögliches Ziel für von anderen Apps geteilte Inhalte registriert zu werden. Das bedeutet, wenn ein Benutzer einige Daten von einer anderen App teilt, die mit Ihrer PWA kompatibel sind, wird Ihr PWA vom Betriebssystem zusammen mit anderen typischen Zielen, wie E-Mail- oder Messaging-Apps, aufgeführt. Beachten Sie, dass die PWA installiert sein muss, um als potenzielles Ziel für den Empfang geteilter Daten angezeigt zu werden.

Die Informationen, die Sie mit dem `share_target`-Element in Ihrer Manifest-Datei bereitstellen, definieren, für welche Daten Ihre App ein Ziel sein kann und wie das Betriebssystem Ihre App starten soll, wenn der Benutzer sie als Ziel auswählt.

### Umgang mit Textdaten

Hier ist ein Web-App-Manifest-Beispiel, das das `share_target`-Element verwendet:

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

Wenn der Benutzer Ihre App auswählt, um die von anderen Apps geteilten Inhalte zu verarbeiten, wird Ihre App gestartet und die geteilten Inhalte werden in ähnlicher Weise an sie übergeben, wie {{htmlelement("form")}}-Elemente übermittelt werden.

Im vorherigen Web-App-Manifest-Codebeispiel, wenn die ChattyBox-App als Ziel ausgewählt wird, wird sie gestartet, indem eine HTTP-`GET`-Anfrage an die URL `/share-handler` gesendet wird, wobei die geteilten Daten als Anforderungsparameter mit den Namen `description` und `link` übergeben werden.

Die `GET`-Anfrage sieht folgendermaßen aus: `/shared-handler?description=...&link=...`.

Der Haupt-JavaScript-Code Ihrer App kann dann die geteilten Daten mithilfe der [URLSearchParams](/de/docs/Web/API/URLSearchParams)-Schnittstelle abrufen:

```js
const url = new URL(document.location);
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

Für weitere Informationen, siehe das Beispiel [Empfangen von geteilten Daten mit GET](/de/docs/Web/Manifest/share_target#receiving_share_data_using_get) auf der `share_target`-Seite des Web-App-Manifests.

### Umgang mit geteilten Dateien

Im vorherigen Beispiel wurden Textdaten als `GET`-Anfrage verarbeitet. Das Verarbeiten von Dateien erfordert jedoch die Verwendung einer `POST`-Anfrage mit einem `multipart/form-data` [Codierungstyp](/de/docs/Web/API/HTMLFormElement/enctype).

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

Wie aus diesem Beispiel ersichtlich ist, muss jedes Dateiobjekt in der `files`-Eigenschaft eine `name`-Eigenschaft und eine `accept`-Eigenschaft haben. Die `accept`-Eigenschaft muss die akzeptierten [MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) oder Dateierweiterungen spezifizieren.

Wenn der Benutzer die App auswählt, um eine geteilte Datei (oder Dateien) zu verarbeiten, wird die App mit einer `POST`-Anfrage an die URL `/share-file-handler` gestartet, mit codierten Formulardaten.

Da dies eine `POST`-Anfrage ist, kann der Haupt-JavaScript-Code Ihrer App nicht direkt auf die Formulardaten zugreifen. Sie können die übermittelten Dateien in Ihrem Server-seitigen Code verarbeiten, indem Sie sie am Endpunkt der URL `/share-file-handler` empfangen. Für ein besseres Nutzererlebnis, das auch offline funktioniert, können Sie die Dateien in Ihrem Service-Worker-Code mit einem [`fetch`-Event-Handler](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) behandeln, wie hier gezeigt:

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

In diesem Codebeispiel werden die geteilten Dateien aus den Formulardaten extrahiert und der Benutzer wird zu einer anderen Seite weitergeleitet. Es liegt an Ihnen, mithilfe des Codes in Ihrem Serviceworker die extrahierten Dateien nach Ihren Wünschen zu verarbeiten. Sie können sie z.B. mit der Methode [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) an den Haupt-JavaScript-Code Ihrer App senden oder in einer [Indexed DB](/de/docs/Web/API/IndexedDB_API)-Datenbank speichern, die sowohl von Ihrem Service-Worker als auch von dem Haupt-JavaScript-Code Ihrer App zugänglich ist.

Für weitere Informationen, siehe das Beispiel [Empfangen geteilte Dateien](/de/docs/Web/Manifest/share_target#receiving_shared_files) auf der `share_target`-Seite des Web-App-Manifests.

## Siehe auch

- [Web Share API](/de/docs/Web/API/Web_Share_API)
- [`share_target`-Manifestmitglied](/de/docs/Web/Manifest/share_target)
- [Integration mit dem OS-Sharing-UI mit der Web Share API](https://web.dev/articles/web-share) auf web.dev
- [Empfangen von geteilten Daten mit der Web Share Target API](https://developer.chrome.com/docs/capabilities/web-apis/web-share-target) auf developer.chrome.com
- [Inhalte mit anderen Apps teilen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/share) auf microsoft.com
