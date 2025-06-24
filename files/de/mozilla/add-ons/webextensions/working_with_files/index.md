---
title: Arbeiten mit Dateien
slug: Mozilla/Add-ons/WebExtensions/Working_with_files
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ihre Browsererweiterung benötigt möglicherweise den Umgang mit Dateien, um ihre volle Funktionalität zu entfalten. Dieser Artikel beschäftigt sich mit den fünf Mechanismen, die Sie zur Handhabung von Dateien haben:

- Herunterladen von Dateien in den vom Benutzer gewählten Download-Ordner.
- Öffnen von Dateien über einen Dateiauswähler auf einer Webseite.
- Öffnen von Dateien durch Drag & Drop auf eine Webseite.
- Speichern von Dateien oder Blobs lokal mit IndexedDB unter Verwendung der `idb-file-storage`-Bibliothek.
- Übergeben von Dateien an eine native Anwendung auf dem Computer des Benutzers.

Für jeden dieser Mechanismen führen wir in ihre Nutzung ein und verweisen auf die relevante API-Dokumentation, Leitfäden und mögliche Beispiele, die zeigen, wie die API verwendet wird.

## Dateien herunterladen mithilfe der Downloads-API

Dieser Mechanismus ermöglicht es Ihnen, eine Datei von Ihrer Website (oder einem beliebigen Ort, den Sie als URL definieren können) auf den Computer des Benutzers zu erhalten. Die zentrale Methode ist {{WebExtAPIRef("downloads.download()")}}, die in ihrer einfachsten Form eine URL akzeptiert und die Datei von dieser URL in den Standard-Download-Ordner des Benutzers herunterlädt:

```js
browser.downloads.download({ url: "https://example.org/image.png" });
```

Sie können dem Benutzer das Herunterladen an einen von ihm gewählten Ort ermöglichen, indem Sie den `saveAs`-Parameter angeben.

> [!NOTE]
> Mit [URL.createObjectURL()](/de/docs/Web/API/URL/createObjectURL_static) können Sie auch Dateien und Blobs herunterladen, die in Ihrem JavaScript definiert sind, einschließlich lokaler Inhalte, die aus dem IndexedDB abgerufen werden.

Die Downloads-API bietet auch Funktionen zum Abbrechen, Anhalten, Fortsetzen, Löschen und Entfernen von Downloads; zum Suchen nach heruntergeladenen Dateien im Download-Manager; zum Anzeigen heruntergeladener Dateien im Dateimanager des Computers und zum Öffnen einer Datei in einer zugeordneten Anwendung.

Um diese API zu verwenden, müssen Sie die Berechtigung `"downloads"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei angeben.

Beispiel: [Neuester Download](https://github.com/mdn/webextensions-examples/tree/main/latest-download)
API-Referenz: [Downloads API](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads)

## Dateien in einer Erweiterung mit einem Dateiauswähler öffnen

Wenn Sie mit einer Datei vom Computer des Benutzers arbeiten möchten, besteht eine Möglichkeit darin, dem Benutzer zu erlauben, eine Datei über den Dateibrowser des Computers auszuwählen. Erstellen Sie entweder eine neue Seite oder injizieren Sie Code in eine bestehende Seite, um das `file`-Attribut des HTML `input`-Elements zu verwenden und dem Benutzer einen Dateiauswähler anzubieten. Sobald der Benutzer eine Datei oder Dateien ausgewählt hat, kann das der Seite zugeordnete Skript auf den Inhalt der Datei mit der [DOM File API](/de/docs/Web/API/File) zugreifen, ähnlich wie es eine Webanwendung tut.

Beispiel: [Imagify](https://github.com/mdn/webextensions-examples/tree/main/imagify)
Leitfaden: [Verwendung von Dateien in Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
API-Referenzen: [HTML input Element](/de/docs/Web/HTML/Reference/Elements/input/file) | [DOM File API](/de/docs/Web/API/File)

> [!NOTE]
> Wenn Sie auf alle Dateien in einem ausgewählten Ordner zugreifen oder diese bearbeiten möchten, können Sie dies tun, indem Sie `<input type="file" webkitdirectory="true"/>` verwenden, um den Ordner auszuwählen und alle darin enthaltenen Dateien zurückzugeben.

## Dateien in einer Erweiterung mit Drag & Drop öffnen

Die Web Drag and Drop API bietet eine Alternative zur Verwendung eines Dateiauswählers. Um diese Methode zu verwenden, erstellen Sie eine "Drop-Zone", die zu Ihrer Benutzeroberfläche passt, und fügen Sie dann Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignisse zu dem Element hinzu. In der Handler-Funktion für das Drop-Ereignis kann Ihr Code auf jede vom Benutzer fallengelassene Datei aus dem Objekt zugreifen, das durch die `dataTransfer`-Eigenschaft bereitgestellt wird, und die Dateien mit [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files) zugreifen. Ihr Code kann dann die Dateien mit der [DOM File API](/de/docs/Web/API/File) bearbeiten.

Beispiel: [Imagify](https://github.com/mdn/webextensions-examples/tree/main/imagify)
Leitfäden: [Verwendung von Dateien in Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) | [Datei Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)
API-Referenzen: [DOM File API](/de/docs/Web/API/File)

## Dateien lokal speichern mit der IndexedDB File Storage Library

Wenn Ihre Erweiterung Dateien lokal speichern muss, bietet die [idb-file-storage Bibliothek](https://www.npmjs.com/package/idb-file-storage) eine einfache, auf Promises basierende Wrapper-Bibliothek für die [IndexedDB API](/de/docs/Web/API/IndexedDB_API), um das Speichern und Abrufen von Dateien und Blobs zu erleichtern.

Die Hauptmerkmale der Bibliothek sind:

- [getFileStorage](https://rpl.github.io/idb-file-storage/function/index.html#static-function-getFileStorage)
  - : Gibt eine `IDBFileStorage`-Instanz zurück, die den benannten Speicher erstellt, falls dieser nicht existiert.
- [IDBFileStorage](https://rpl.github.io/idb-file-storage/class/src/idb-file-storage.js~IDBFileStorage.html)
  - : Bietet die Methoden zum Speichern und Abrufen von Dateien, wie:
    - list, um eine optional gefilterte Liste von Dateien in der Datenbank zu erhalten.
    - put, um eine Datei oder ein Blob in der Datenbank hinzuzufügen.
    - get, um eine Datei oder ein Blob aus der Datenbank abzurufen.
    - remove, um eine Datei oder ein Blob aus der Datenbank zu löschen.

Das [Store Collected Images](https://github.com/mdn/webextensions-examples/tree/main/store-collected-images/webextension-plain) Beispiel veranschaulicht, wie die meisten dieser Funktionen genutzt werden.

Das Store Collected Images Beispiel lässt Benutzer Bilder zu einer Sammlung hinzufügen, indem eine Option im Bildkontextmenü verwendet wird. Ausgewählte Bilder werden in einem Popup gesammelt und können in einer benannten Sammlung gespeichert werden. Eine Symbolleisten-Schaltfläche ({{WebExtAPIRef("browserAction")}}) öffnet eine Navigationsseite der Sammlung, auf der der Benutzer gespeicherte Bilder anzeigen und löschen kann, mit einer Filteroption zur Eingrenzung der Auswahl. [Sehen Sie das Beispiel in Aktion](https://www.youtube.com/watch?v=t6aVqMMe2Rc&ab_channel=LucaGreco).

Das Funktionieren der Bibliothek kann durch das Betrachten von [image-store.js](https://github.com/mdn/webextensions-examples/blob/main/store-collected-images/webextension-plain/utils/image-store.js) in /utils/ verstanden werden:

### Erstellen des Speichers und Speichern der Bilder

```js
async function saveCollectedBlobs(collectionName, collectedBlobs) {
  const storedImages = await getFileStorage({ name: "stored-images" });

  for (const item of collectedBlobs) {
    await storedImages.put(`${collectionName}/${item.uuid}`, item.blob);
  }
}
```

`saveCollectedBlobs` wird aufgerufen, wenn der Benutzer im Popup auf Speichern klickt und einen Namen für die Bildersammlung angegeben hat.

Zunächst erstellt oder ruft `getFileStorage`, falls es noch nicht existiert, die IndexedDB-Datenbank `"stored-images"` zum Objekt `storedImages` ab. `storedImages.put()` fügt dann jedes gesammelte Bild unter dem Sammlungsnamen in die Datenbank hinzu, wobei die eindeutige Blob-ID (der Dateiname) verwendet wird.

Wenn das gespeicherte Bild denselben Namen wie ein bereits in der Datenbank vorhandenes Bild hat, wird es überschrieben. Wenn Sie dies vermeiden möchten, fragen Sie zunächst die Datenbank mit `imagesStore.list()` unter Verwendung eines Filters für den Dateinamen ab; und, wenn die Liste eine Datei zurückgibt, fügen Sie einen geeigneten Suffix zum Namen des neuen Bildes hinzu, um ein separates Element zu speichern.

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

`loadStoredImages()` wird aufgerufen, wenn der Benutzer in der Navigationsseite der Sammlung auf Anzeigen oder Neu laden klickt. `getFileStorage()` öffnet die `"stored-images"` Datenbank, dann erhält `imagesStore.list()` eine gefilterte Liste der gespeicherten Bilder. Diese Liste wird dann verwendet, um Bilder mit `imagesStore.get()` abzurufen und eine Liste zur Rückgabe an die Benutzeroberfläche zu erstellen.

Beachten Sie die Verwendung von [`URL.createObjectURL(blob)`](/de/docs/Web/API/URL/createObjectURL_static), um eine URL zu erstellen, die das Bild-Blob referenziert. Diese URL wird dann in der Benutzeroberfläche ([navigate-collection.js](https://github.com/mdn/webextensions-examples/blob/main/store-collected-images/webextension-plain/navigate-collection.js)) verwendet, um das Bild anzuzeigen.

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

`removeStoredImages()` wird aufgerufen, wenn der Benutzer in der Navigationsseite der Sammlung auf Löschen klickt. Wiederum öffnet `getFileStorage()` die `"stored-images"` Datenbank, dann entfernt `imagesStore.remove()` jedes Bild aus der gefilterten Liste der Bilder.

Beachten Sie die Verwendung von [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static), um die Blob-URL explizit zu widerrufen. Dies ermöglicht es dem Garbage Collector, den der URL zugewiesenen Speicher freizugeben. Wenn dies nicht getan wird, wird der Speicher erst zurückgegeben, wenn die Seite, auf der er erstellt wurde, geschlossen wird. Wenn die URL auf der Hintergrundseite einer Erweiterung erstellt wurde, wird diese erst entladen, wenn die Erweiterung deaktiviert, deinstalliert oder neu geladen wird, sodass ein unnötiges Behalten dieses Speichers die Browserleistung beeinträchtigen könnte. Wenn die URL auf einer Seite der Erweiterung (neuer Tab, Popup oder Sidebar) erstellt wird, wird der Speicher freigegeben, wenn die Seite geschlossen wird, aber es ist trotzdem eine gute Praxis, die URL zu widerrufen, wenn sie nicht mehr benötigt wird.

Sobald die Blob-URL widerrufen wurde, führt jeder Versuch, sie zu laden, zu einem Fehler. Wenn die Blob-URL beispielsweise als `SRC`-Attribut einer `IMG`-Marke verwendet wurde, wird das Bild nicht geladen und nicht sichtbar sein. Es ist daher eine gute Praxis, alle widerrufenen Blob-URLs aus generierten HTML-Elementen zu entfernen, wenn die Blob-URL widerrufen wird.

Beispiel: [Store Collected Images](https://github.com/mdn/webextensions-examples/tree/main/store-collected-images/webextension-plain)
API-Referenzen: [idb-file-storage-Bibliothek](https://rpl.github.io/idb-file-storage/)

> [!NOTE]
> Sie können auch die gesamte Web [IndexedDB API](/de/docs/Web/API/IndexedDB_API) verwenden, um Daten aus Ihrer Erweiterung zu speichern. Dies kann nützlich sein, wenn Sie Daten speichern müssen, die nicht gut durch die einfachen Schlüssel/Wert-Paare der DOM [Storage API](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) behandelt werden.

## Dateien in einer lokalen App verarbeiten

Wenn Sie eine native App haben oder zusätzliche native Funktionen zur Dateiverarbeitung bereitstellen möchten, verwenden Sie native Messaging, um eine Datei zur Verarbeitung an eine native App zu übergeben.

Sie haben zwei Möglichkeiten:

- Mit Verbindungen basierende Nachrichten
  - : Hier starten Sie den Prozess mit `runtime.connectNative()`, das ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt zurückgibt. Sie können dann eine JSON-Nachricht an die native Anwendung mit der Funktion `postMessage()` von `Port` übergeben. Mit der `onMessage.addListener()` Funktion von `Port` können Sie Nachrichten von der nativen Anwendung empfangen. Die native Anwendung wird geöffnet, wenn sie nicht läuft, wenn `runtime.connectNative()` aufgerufen wird, und die Anwendung bleibt so lange geöffnet, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die damit verbunden ist, geschlossen wird.
- Verbindungsloses Messaging
  - : Hier verwenden Sie `runtime.sendNativeMessage()`, um eine JSON-Nachricht an eine neue, temporäre Instanz der nativen Anwendung zu senden. Der Browser schließt die native Anwendung, nachdem er eine Nachricht von der nativen Anwendung empfängt.

Um die Datei oder das Blob hinzuzufügen, das von der nativen Anwendung verarbeitet werden soll, verwenden Sie [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

Um diese Methode zu verwenden, muss die Erweiterung die Berechtigung `"nativeMessaging"` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in ihrer `manifest.json` Datei anfordern. Wenn optionale Berechtigung verwendet wird, denken Sie daran, zu prüfen, ob die Berechtigung erteilt wurde und gegebenenfalls um eine Berechtigung vom Benutzer mit der {{WebExtAPIRef("permissions")}} API zu bitten. Gegenseitig muss die native Anwendung der Erweiterung die Berechtigung erteilen, indem sie ihre ID im Feld `"allowed_extensions"` des App-Manifests einfügt.

Beispiel: [Native Messaging](https://github.com/mdn/webextensions-examples/tree/main/native-messaging) (veranschaulicht nur einfaches Messaging)
Leitfäden: [Native Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
API-Referenzen: [Runtime API](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime)
