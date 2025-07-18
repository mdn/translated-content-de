---
title: Mit Dateien arbeiten
slug: Mozilla/Add-ons/WebExtensions/Working_with_files
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ihre Browsererweiterung muss möglicherweise mit Dateien arbeiten, um ihre volle Funktionalität zu bieten. Dieser Artikel betrachtet die fünf Mechanismen, die Ihnen zur Verfügung stehen, um mit Dateien umzugehen:

- Herunterladen von Dateien in den vom Benutzer ausgewählten Download-Ordner.
- Öffnen von Dateien mittels eines Dateiauswählers auf einer Webseite.
- Öffnen von Dateien durch Ziehen und Ablegen auf eine Webseite.
- Lokales Speichern von Dateien oder Blobs mit IndexedDB unter Verwendung der idb-file-storage-Bibliothek.
- Übergeben von Dateien an eine native Anwendung auf dem Computer des Benutzers.

Für jeden dieser Mechanismen stellen wir ihre Nutzung mit Verweisen auf die relevante API-Dokumentation, Leitfäden und Beispiele vor, die zeigen, wie die API verwendet wird.

## Dateien mit der Downloads-API herunterladen

Dieser Mechanismus ermöglicht es Ihnen, eine Datei von Ihrer Website (oder einem beliebigen Ort, den Sie als URL definieren können) auf den Computer des Benutzers zu übertragen. Die Hauptmethode ist {{WebExtAPIRef("downloads.download()")}}, die in ihrer einfachsten Form eine URL akzeptiert und die Datei von dieser URL in den Standard-Download-Ordner des Benutzers herunterlädt:

```js
browser.downloads.download({ url: "https://example.org/image.png" });
```

Sie können dem Benutzer erlauben, an einen Ort seiner Wahl herunterzuladen, indem Sie den Parameter `saveAs` spezifizieren.

> [!NOTE]
> Mit [URL.createObjectURL()](/de/docs/Web/API/URL/createObjectURL_static) können Sie auch Dateien und Blobs herunterladen, die in Ihrem JavaScript definiert sind, einschließlich lokaler Inhalte, die von IndexedDB abgerufen wurden.

Die Downloads-API bietet auch Funktionen zum Abbrechen, Anhalten, Fortsetzen, Löschen und Entfernen von Downloads, zum Suchen nach heruntergeladenen Dateien im Download-Manager, zum Anzeigen von heruntergeladenen Dateien im Datei-Manager des Computers und zum Öffnen einer Datei in einer zugehörigen Anwendung.

Um diese API zu nutzen, müssen Sie die `"downloads"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei spezifizieren.

Beispiel: [Latest download](https://github.com/mdn/webextensions-examples/tree/main/latest-download)
API-Referenz: [Downloads-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads)

## Dateien in einer Erweiterung mit einem Dateiauswähler öffnen

Wenn Sie mit einer Datei vom Computer des Benutzers arbeiten möchten, besteht eine Möglichkeit darin, den Benutzer eine Datei mit dem Datei-Browser des Computers auswählen zu lassen. Erstellen Sie entweder eine neue Seite oder fügen Sie Code in eine bestehende Seite ein, um den `file`-Typ des HTML-`input`-Elements zu verwenden, um dem Benutzer einen Dateiauswähler anzubieten. Sobald der Benutzer eine Datei oder Dateien ausgewählt hat, kann das mit der Seite verbundene Skript auf den Inhalt der Datei zugreifen, indem die [DOM File API](/de/docs/Web/API/File) verwendet wird, so wie es eine Webanwendung tut.

Beispiel: [Imagify](https://github.com/mdn/webextensions-examples/tree/main/imagify)
Leitfaden: [Using files from web applications](/de/docs/Web/API/File_API/Using_files_from_web_applications)
API-Referenzen: [HTML input element](/de/docs/Web/HTML/Reference/Elements/input/file) | [DOM File API](/de/docs/Web/API/File)

> [!NOTE]
> Wenn Sie auf alle Dateien in einem ausgewählten Ordner zugreifen oder diese verarbeiten möchten, können Sie dies mit `<input type="file" webkitdirectory="true"/>` tun, um den Ordner auszuwählen und alle darin enthaltenen Dateien zurückzugeben.

## Dateien in einer Erweiterung durch Ziehen und Ablegen öffnen

Die Web Drag and Drop API bietet eine Alternative zur Verwendung eines Dateiauswählers. Um diese Methode zu verwenden, richten Sie eine "Drop-Zone" ein, die zu Ihrer Benutzeroberfläche passt, und fügen Sie dann Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignisse zu dem Element hinzu. In der Handler-Funktion des Drop-Ereignisses kann Ihr Code auf jede vom Benutzer abgelegte Datei zugreifen, die vom Objekt `dataTransfer` über die [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files) Eigenschaft angeboten wird. Ihr Code kann dann die Dateien mit der [DOM File API](/de/docs/Web/API/File) abrufen und verarbeiten.

Beispiel: [Imagify](https://github.com/mdn/webextensions-examples/tree/main/imagify)
Leitfäden: [Using files from web applications](/de/docs/Web/API/File_API/Using_files_from_web_applications) | [File drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)
API-Referenzen: [DOM File API](/de/docs/Web/API/File)

## Datei-Daten lokal mit der IndexedDB-Speicherbibliothek speichern

Wenn Ihre Erweiterung Dateien lokal speichern muss, bietet die [idb-file-storage library](https://www.npmjs.com/package/idb-file-storage) eine einfache Promise-basierte Umhüllung für die [IndexedDB API](/de/docs/Web/API/IndexedDB_API), um das Speichern und Abrufen von Dateien und Blobs zu erleichtern.

Die Schlüsselmerkmale der Bibliothek sind:

- [getFileStorage](https://rpl.github.io/idb-file-storage/function/index.html#static-function-getFileStorage)
  - : Gibt eine `IDBFileStorage`-Instanz zurück, die den benannten Speicher erstellt, falls dieser nicht existiert.
- [IDBFileStorage](https://rpl.github.io/idb-file-storage/class/src/idb-file-storage.js~IDBFileStorage.html)
  - : Bietet die Methoden zum Speichern und Abrufen von Dateien, wie:
    - list, um eine optional gefilterte Liste von Dateien in der Datenbank zu erhalten.
    - put, um eine Datei oder ein Blob zur Datenbank hinzuzufügen.
    - get, um eine Datei oder ein Blob aus der Datenbank abzurufen.
    - remove, um eine Datei oder ein Blob aus der Datenbank zu löschen.

Das [Store Collected Images](https://github.com/mdn/webextensions-examples/tree/main/store-collected-images/webextension-plain) Beispiel veranschaulicht, wie man die meisten dieser Funktionen verwendet.

Das Beispiel lässt Benutzer Bilder zu einer Sammlung hinzufügen, indem sie eine Option im Bild-Kontextmenü auswählen. Ausgewählte Bilder werden in einem Popup gesammelt und können in einer benannten Sammlung gespeichert werden. Eine Schaltfläche in der Symbolleiste ({{WebExtAPIRef("browserAction")}}) öffnet eine Navigationssammlungsseite, auf der der Benutzer gespeicherte Bilder anzeigen und löschen kann, mit einer Filteroption, um die Auswahl einzugrenzen. [Sehen Sie sich das Beispiel in Aktion an](https://www.youtube.com/watch?v=t6aVqMMe2Rc&ab_channel=LucaGreco).

Die Funktionsweise der Bibliothek kann durch das Betrachten von [image-store.js](https://github.com/mdn/webextensions-examples/blob/main/store-collected-images/webextension-plain/utils/image-store.js) in /utils/ verstanden werden:

### Erstellen des Speichers und Speichern der Bilder

```js
async function saveCollectedBlobs(collectionName, collectedBlobs) {
  const storedImages = await getFileStorage({ name: "stored-images" });

  for (const item of collectedBlobs) {
    await storedImages.put(`${collectionName}/${item.uuid}`, item.blob);
  }
}
```

`saveCollectedBlobs` wird aufgerufen, wenn der Benutzer im Popup auf Speichern klickt und einen Namen für die Bildsammlung angegeben hat.

Zuerst erstellt oder ruft `getFileStorage`, falls es nicht bereits existiert, die IndexedDB-Datenbank `"stored-images"` in das Objekt `storedImages` ab. Anschließend fügt `storedImages.put()` jedes gesammelte Bild unter dem Sammlungsnamen in die Datenbank ein, wobei die eindeutige ID des Blobs (der Dateiname) verwendet wird.

Wenn das zu speichernde Bild den gleichen Namen hat wie ein bereits in der Datenbank vorhandenes Bild, wird es überschrieben. Wenn Sie dies vermeiden möchten, fragen Sie zuerst die Datenbank mit `imagesStore.list()` und einem Filter für den Dateinamen ab; wenn die Liste eine Datei zurückgibt, fügen Sie dem Namen des neuen Bildes einen geeigneten Suffix hinzu, um ein separates Element zu speichern.

### Abrufen gespeicherter Bilder zur Anzeige

```js
export async function loadStoredImages(filter) {
  const imagesStore = await getFileStorage({ name: "stored-images" });
  let listOptions = filter ? { includes: filter } : undefined;
  const imagesList = await imagesStore.list(listOptions);
  let storedImages = [];
  for (const storedName of imagesList) {
    const blob = await imagesStore.get(storedName);
    storedImages.push({ storedName, blobUrl: URL.createObjectURL(blob) });
  }
  return storedImages;
}
```

`loadStoredImages()` wird aufgerufen, wenn der Benutzer auf der Navigationssammlungsseite auf Anzeigen oder Neu laden klickt. `getFileStorage()` öffnet die `"stored-images"` Datenbank, dann erhält `imagesStore.list()` eine gefilterte Liste der gespeicherten Bilder. Diese Liste wird dann verwendet, um Bilder mit `imagesStore.get()` abzurufen und eine Liste zur Rückgabe an die Benutzeroberfläche zu erstellen.

Beachten Sie die Verwendung von [`URL.createObjectURL(blob)`](/de/docs/Web/API/URL/createObjectURL_static), um eine URL zu erstellen, die auf das Bild-Blob verweist. Diese URL wird dann in der Benutzeroberfläche ([navigate-collection.js](https://github.com/mdn/webextensions-examples/blob/main/store-collected-images/webextension-plain/navigate-collection.js)) verwendet, um das Bild anzuzeigen.

### Gesammelte Bilder löschen

```js
async function removeStoredImages(storedImages) {
  const imagesStore = await getFileStorage({ name: "stored-images" });
  for (const storedImage of storedImages) {
    URL.revokeObjectURL(storedImage.blobUrl);
    await imagesStore.remove(storedImage.storedName);
  }
}
```

`removeStoredImages()` wird aufgerufen, wenn der Benutzer auf der Navigationssammlungsseite auf Löschen klickt. Auch hier öffnet `getFileStorage()` die `"stored-images"` Datenbank und `imagesStore.remove()` entfernt jedes Bild aus der gefilterten Liste der Bilder.

Beachten Sie die Verwendung von [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static), um die Blob-URL explizit zu widerrufen. Dies ermöglicht dem Garbage Collector, den der URL zugewiesenen Speicher freizugeben. Wenn dies nicht geschieht, wird der Speicher erst freigegeben, wenn die Seite, auf der er erstellt wurde, geschlossen wird. Wenn die URL auf einer Hintergrundseite einer Erweiterung erstellt wurde, wird diese nicht entladen, bis die Erweiterung deaktiviert, deinstalliert oder neu geladen wird. Daher könnte das unnötige Halten dieses Speichers die Leistung des Browsers beeinträchtigen. Wenn die URL auf einer Seite einer Erweiterung (neuer Tab, Popup oder Sidebar) erstellt wird, wird der Speicher freigegeben, wenn die Seite geschlossen wird, aber es ist dennoch eine gute Praxis, die URL zu widerrufen, wenn sie nicht mehr benötigt wird.

Einmal widerrufen, führt jeder Versuch, die Blob-URL zu laden, zu einem Fehler. Wenn die Blob-URL beispielsweise als `SRC`-Attribut eines `IMG`-Tags verwendet wurde, lädt das Bild nicht und ist daher nicht sichtbar. Es ist daher eine gute Praxis, alle widerrufenen Blob-URLs aus generierten HTML-Elementen zu entfernen, wenn die Blob-URL widerrufen wird.

Beispiel: [Store Collected Images](https://github.com/mdn/webextensions-examples/tree/main/store-collected-images/webextension-plain)
API-Referenzen: [idb-file-storage library](https://rpl.github.io/idb-file-storage/)

> [!NOTE]
> Sie können auch die vollständige Web [IndexedDB API](/de/docs/Web/API/IndexedDB_API) verwenden, um Daten aus Ihrer Erweiterung zu speichern. Dies kann nützlich sein, wenn Sie Daten speichern müssen, die nicht gut durch die einfachen Schlüssel/Wert-Paare der DOM [Storage API](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) behandelt werden.

## Dateien in einer lokalen App verarbeiten

Wenn Sie eine native App haben oder zusätzliche native Funktionen für die Dateiverarbeitung bereitstellen möchten, verwenden Sie das native Nachrichtenprotokoll, um eine Datei an eine native App zur Verarbeitung zu übergeben.

Sie haben zwei Optionen:

- Verbindungsbasiertes Nachrichtenprotokoll
  - : Hier starten Sie den Prozess mit `runtime.connectNative()`, das ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt zurückgibt. Sie können dann eine JSON-Nachricht an die native Anwendung senden, indem Sie die `postMessage()`-Funktion von `Port` verwenden. Mit der `onMessage.addListener()`-Funktion von `Port` können Sie auf Nachrichten von der nativen Anwendung lauschen. Die native Anwendung wird geöffnet, wenn sie nicht läuft, wenn `runtime.connectNative()` aufgerufen wird, und die Anwendung bleibt in Betrieb, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die die Verbindung hergestellt hat, geschlossen wird.
- Verbindungsloses Nachrichtenprotokoll
  - : Hier verwenden Sie `runtime.sendNativeMessage()`, um eine JSON-Nachricht an eine neue, temporäre Instanz der nativen Anwendung zu senden. Der Browser schließt die native Anwendung, nachdem er eine Nachricht von der nativen Anwendung erhalten hat.

Um die Datei oder das Blob hinzuzufügen, das die native Anwendung verarbeiten soll, verwenden Sie [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

Um diese Methode zu verwenden, muss die Erweiterung die `"nativeMessaging"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in ihrer `manifest.json` Datei anfordern. Wenn eine optionale Berechtigung verwendet wird, denken Sie daran, zu überprüfen, ob die Berechtigung erteilt wurde und, falls erforderlich, die Berechtigung vom Benutzer mit der {{WebExtAPIRef("permissions")}} API zu erfragen. Gegenseitig muss die native Anwendung die Berechtigung für die Erweiterung erteilen, indem sie ihre ID im `"allowed_extensions"` Feld des App-Manifests einfügt.

Beispiel: [Native Messaging](https://github.com/mdn/webextensions-examples/tree/main/native-messaging) (veranschaulicht nur einfaches Messaging)
Leitfäden: [Native messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
API-Referenzen: [runtime API](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime)
