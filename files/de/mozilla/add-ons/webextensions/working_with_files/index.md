---
title: Mit Dateien arbeiten
slug: Mozilla/Add-ons/WebExtensions/Working_with_files
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Ihre Browser-Erweiterung muss möglicherweise mit Dateien arbeiten, um ihre volle Funktionalität bereitzustellen. Dieser Artikel zeigt die fünf Mechanismen, die Sie zum Umgang mit Dateien haben:

- Herunterladen von Dateien in den vom Benutzer ausgewählten Download-Ordner.
- Öffnen von Dateien mit einem Dateiauswahl-Dialog auf einer Webseite.
- Öffnen von Dateien durch Ziehen und Ablegen auf eine Webseite.
- Speichern von Dateien oder Blobs lokal mit IndexedDB unter Verwendung der idb-file-storage-Bibliothek.
- Übergeben von Dateien an eine native Anwendung auf dem Computer des Benutzers.

Für jeden dieser Mechanismen stellen wir ihre Verwendung mit Verweisen auf die relevante API-Dokumentation, Leitfäden und Beispiele vor, die zeigen, wie man die API verwendet.

## Dateien mit der Downloads-API herunterladen

Dieser Mechanismus ermöglicht es Ihnen, eine Datei von Ihrer Website (oder einem Ort, den Sie als URL definieren können) auf den Computer des Benutzers zu bringen. Die Schlüsselmethode ist {{WebExtAPIRef("downloads.download()")}}, die in ihrer einfachsten Form eine URL akzeptiert und die Datei von dieser URL in den Standard-Downloads-Ordner des Benutzers herunterlädt:

```js
browser.downloads.download({ url: "https://example.org/image.png" });
```

Sie können dem Benutzer erlauben, an einen Ort seiner Wahl herunterzuladen, indem Sie den Parameter `saveAs` angeben.

> [!NOTE]
> Mit [URL.createObjectURL()](/de/docs/Web/API/URL/createObjectURL_static) können Sie auch Dateien und Blobs herunterladen, die in Ihrem JavaScript definiert sind, einschließlich lokaler Inhalte, die aus IndexedDB abgerufen wurden.

Die Downloads-API bietet auch Funktionen zum Abbrechen, Pausieren, Fortsetzen, Löschen und Entfernen von Downloads; zum Suchen nach heruntergeladenen Dateien im Download-Manager; zum Anzeigen heruntergeladener Dateien im Dateimanager des Computers; und zum Öffnen einer Datei in einer zugehörigen Anwendung.

Um diese API zu verwenden, müssen Sie in Ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei die API-Berechtigung `"downloads"` [anfordern](/de/docs/Web/API/Permissions#api_permissions).

Beispiel: [Neuester Download](https://github.com/mdn/webextensions-examples/tree/main/latest-download)
API-Referenz: [downloads API](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads)

## Dateien in einer Erweiterung mit einem Dateiauswahl-Dialog öffnen

Wenn Sie mit einer Datei vom Computer des Benutzers arbeiten möchten, besteht eine Möglichkeit darin, den Benutzer eine Datei mit dem Dateibrowser des Computers auswählen zu lassen. Erstellen Sie entweder eine neue Seite oder fügen Sie Code in eine bestehende Seite ein, um den Benutzern mit dem Typ `file` des HTML-`input`-Elements einen Dateiauswahl-Dialog anzubieten. Sobald der Benutzer eine Datei oder Dateien ausgewählt hat, kann das Skript, das mit der Seite verknüpft ist, auf den Inhalt der Datei unter Verwendung der [DOM File API](/de/docs/Web/API/File) zugreifen, genauso wie es eine Webanwendung tut.

Beispiel: [Imagify](https://github.com/mdn/webextensions-examples/tree/main/imagify)
Leitfaden: [Verwenden von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
API-Referenzen: [HTML input element](/de/docs/Web/HTML/Element/input/file) | [DOM File API](/de/docs/Web/API/File)

> [!NOTE]
> Wenn Sie auf alle Dateien in einem ausgewählten Ordner zugreifen oder diese verarbeiten möchten, können Sie `<input type="file" webkitdirectory="true"/>` verwenden, um den Ordner auszuwählen und alle darin enthaltenen Dateien zurückzugeben.

## Dateien in einer Erweiterung durch Ziehen und Ablegen öffnen

Die Web Drag and Drop API bietet eine Alternative zum Verwenden eines Dateiauswahl-Dialogs. Um diese Methode zu verwenden, richten Sie eine 'Abwurfzone' ein, die mit Ihrer Benutzeroberfläche übereinstimmt, und fügen Sie dann Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisse in das Element ein. In der Funktion Handler für das Drop-Ereignis kann Ihr Code auf jede vom Benutzer abgelegte Datei aus dem durch die `dataTransfer`-Eigenschaft angebotenen Objekt zugreifen, indem [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files) verwendet wird. Ihr Code kann dann die Dateien unter Verwendung der [DOM File API](/de/docs/Web/API/File) zugreifen und manipulieren.

Beispiel: [Imagify](https://github.com/mdn/webextensions-examples/tree/main/imagify)
Leitfäden: [Verwenden von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) | [Datei Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)
API-Referenzen: [DOM File API](/de/docs/Web/API/File)

## Dateidaten lokal speichern mit der IndexedDB File Storage Library

Wenn Ihre Erweiterung Dateien lokal speichern muss, bietet die [idb-file-storage library](https://www.npmjs.com/package/idb-file-storage) eine einfache, Promise-basierte Wrapper zur [IndexedDB API](/de/docs/Web/API/IndexedDB_API) zur Unterstützung der Speicherung und des Abrufs von Dateien und Blobs.

Die Hauptmerkmale der Bibliothek sind:

- [getFileStorage](https://rpl.github.io/idb-file-storage/function/index.html#static-function-getFileStorage)
  - : Gibt eine `IDBFileStorage`-Instanz zurück und erstellt den benannten Speicher, falls er nicht existiert.
- [IDBFileStorage](https://rpl.github.io/idb-file-storage/class/src/idb-file-storage.js~IDBFileStorage.html)

  - : Bietet die Methoden zum Speichern und Abrufen von Dateien, wie:

    - Liste, um eine optional gefilterte Liste von Dateien in der Datenbank zu erhalten.
    - put, um eine Datei oder ein Blob zur Datenbank hinzuzufügen.
    - get, um eine Datei oder ein Blob aus der Datenbank abzurufen.
    - remove, um eine Datei oder ein Blob aus der Datenbank zu löschen.

Das [Beispiel Store Collected Images](https://github.com/mdn/webextensions-examples/tree/main/store-collected-images/webextension-plain) zeigt, wie man die meisten dieser Funktionen verwendet.

Das Store Collected Images-Beispiel ermöglicht es Benutzern, Bilder zu einer Sammlung hinzuzufügen, indem sie eine Option im Kontextmenü des Bildes verwenden. Ausgewählte Bilder werden in einem Popup gesammelt und können in einer benannten Sammlung gespeichert werden. Eine Schaltfläche in der Symbolleiste ({{WebExtAPIRef("browserAction")}}) öffnet eine Sammelseite, auf der der Benutzer gespeicherte Bilder anzeigen und löschen kann, mit einer Filteroption, um die Auswahl einzugrenzen. [Sehen Sie sich das Beispiel in Aktion an](https://www.youtube.com/watch?v=t6aVqMMe2Rc&ab_channel=LucaGreco).

Das Funktionieren der Bibliothek kann durch das Ansehen von [image-store.js](https://github.com/mdn/webextensions-examples/blob/main/store-collected-images/webextension-plain/utils/image-store.js) in /utils/ verstanden werden:

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

Zuerst erstellt oder ruft `getFileStorage`, falls es bereits existiert, die IndexedDB-Datenbank `"stored-images"` für das Objekt `storedImages` ab. `storedImages.put()` fügt dann jedes gesammelte Bild unter dem Sammlungsnamen mithilfe der eindeutigen ID des Blobs (des Dateinamens) zur Datenbank hinzu.

Wenn das gespeicherte Bild denselben Namen wie ein bereits in der Datenbank enthaltenes hat, wird es überschrieben. Wenn Sie dies vermeiden möchten, fragen Sie zuerst die Datenbank ab, indem Sie `imagesStore.list()` mit einem Filter für den Dateinamen verwenden. Wenn die Liste eine Datei zurückgibt, fügen Sie dem Namen des zu speichernden neuen Bildes ein geeignetes Suffix hinzu, um ein separates Element zu speichern.

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

`loadStoredImages()` wird aufgerufen, wenn der Benutzer auf Anzeigen oder Laden auf der Sammelseite klickt. `getFileStorage()` öffnet die `"stored-images"`-Datenbank, dann erhält `imagesStore.list()` eine gefilterte Liste der gespeicherten Bilder. Diese Liste wird dann verwendet, um Bilder mit `imagesStore.get()` abzurufen und eine Liste zur Rückgabe an die Benutzeroberfläche zu erstellen.

Beachten Sie die Verwendung von [`URL.createObjectURL(blob)`](/de/docs/Web/API/URL/createObjectURL_static), um eine URL zu erstellen, die das Bild-Blob referenziert. Diese URL wird in der Benutzeroberfläche ([navigate-collection.js](https://github.com/mdn/webextensions-examples/blob/main/store-collected-images/webextension-plain/navigate-collection.js)) verwendet, um das Bild anzuzeigen.

### Löschen gesammelter Bilder

```js
async function removeStoredImages(storedImages) {
  const imagesStore = await getFileStorage({ name: "stored-images" });
  for (const storedImage of storedImages) {
    URL.revokeObjectURL(storedImage.blobUrl);
    await imagesStore.remove(storedImage.storedName);
  }
}
```

`removeStoredImages()` wird aufgerufen, wenn der Benutzer auf Löschen auf der Sammelseite klickt. Wieder öffnet `getFileStorage()` die `"stored-images"`-Datenbank, dann entfernt `imagesStore.remove()` jedes Bild aus der gefilterten Liste der Bilder.

Beachten Sie die Verwendung von [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static), um die Blob-URL explizit zu widerrufen. Dadurch kann der Garbage Collector den Speicher, der der URL zugewiesen ist, freigeben. Wenn dies nicht geschieht, wird der Speicher erst freigegeben, wenn die Seite, auf der er erstellt wurde, geschlossen wird. Wenn die URL in der Hintergrundseite einer Erweiterung erstellt wurde, wird diese nicht entladen, bis die Erweiterung deaktiviert, deinstalliert oder neu geladen wird, sodass die Beibehaltung dieses Speichers unnötig die Browserleistung beeinträchtigen könnte. Wenn die URL auf einer Seite der Erweiterung (neuer Tab, Popup oder Sidebar) erstellt wurde, wird der Speicher freigegeben, wenn die Seite geschlossen wird, aber es ist dennoch eine gute Praxis, die URL zu widerrufen, wenn sie nicht mehr benötigt wird.

Sobald die Blob-URL widerrufen wurde, führt jeder Versuch, sie zu laden, zu einem Fehler. Wenn die Blob-URL beispielsweise als `SRC`-Attribut eines `IMG`-Tags verwendet wurde, wird das Bild nicht geladen und nicht sichtbar sein. Es ist daher eine gute Praxis, widerrufene Blob-URLs aus erzeugten HTML-Elementen zu entfernen, wenn die Blob-URL widerrufen wird.

Beispiel: [Store Collected Images](https://github.com/mdn/webextensions-examples/tree/main/store-collected-images/webextension-plain)
API-Referenzen: [idb-file-storage library](https://rpl.github.io/idb-file-storage/)

> [!NOTE]
> Sie können auch die vollständige Web [IndexedDB API](/de/docs/Web/API/IndexedDB_API) verwenden, um Daten aus Ihrer Erweiterung zu speichern. Dies kann nützlich sein, wenn Sie Daten speichern müssen, die nicht gut mit den einfachen Schlüssel/Wert-Paaren verarbeitet werden können, die von der DOM [Storage API](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) angeboten werden.

## Dateien in einer lokalen Anwendung verarbeiten

Wenn Sie eine native Anwendung haben oder zusätzliche native Funktionen zur Datei-Verarbeitung bereitstellen möchten, verwenden Sie das native Messaging, um eine Datei zur Verarbeitung an eine native Anwendung zu übergeben.

Sie haben zwei Optionen:

- Verbindungsbasierte Nachrichtenübertragung
  - : Hier starten Sie den Prozess mit `runtime.connectNative()`, das ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt zurückgibt. Sie können dann mit der `postMessage()`-Funktion von `Port` eine JSON-Nachricht an die native Anwendung senden. Mit der `onMessage.addListener()`-Funktion von `Port` können Sie Nachrichten von der nativen Anwendung empfangen. Die native Anwendung wird gestartet, wenn sie nicht läuft, wenn `runtime.connectNative()` aufgerufen wird, und die Anwendung bleibt in Betrieb, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die die Verbindung hergestellt hat, geschlossen wird.
- Verbindungsloses Messaging
  - : Hierbei verwenden Sie `runtime.sendNativeMessage()`, um eine JSON-Nachricht an eine neue, temporäre Instanz der nativen Anwendung zu senden. Der Browser schließt die native Anwendung, nachdem er eine Nachricht von ihr erhalten hat.

Um die Datei oder das Blob hinzuzufügen, das die native Anwendung verarbeiten soll, verwenden Sie [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

Um diese Methode zu verwenden, muss die Erweiterung die Berechtigung `"nativeMessaging"` [anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in ihrer `manifest.json`-Datei anfordern. Wenn optionale Berechtigungen verwendet werden, denken Sie daran, zu überprüfen, ob die Berechtigung erteilt wurde, und falls erforderlich, die Berechtigung vom Benutzer mit der {{WebExtAPIRef("permissions")}} API zu beantragen. Gegenseitig muss die native Anwendung der Erweiterung die Berechtigung erteilen, indem sie ihre ID im `"allowed_extensions"`-Feld der App-Manifests einschließt.

Beispiel: [Native Messaging](https://github.com/mdn/webextensions-examples/tree/main/native-messaging) (illustriert nur einfaches Messaging)
Leitfäden: [Native Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
API-Referenzen: [runtime API](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime)
