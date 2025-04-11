---
title: Arbeiten mit Dateien
slug: Mozilla/Add-ons/WebExtensions/Working_with_files
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{AddonSidebar}}

Ihre Browser-Erweiterung muss möglicherweise mit Dateien arbeiten, um ihre volle Funktionalität bereitzustellen. Dieser Artikel behandelt die fünf Mechanismen, die Sie zum Umgang mit Dateien haben:

- Herunterladen von Dateien in den vom Benutzer ausgewählten Download-Ordner.
- Öffnen von Dateien mittels eines Dateiauswahlers auf einer Webseite.
- Öffnen von Dateien durch Drag-and-Drop auf eine Webseite.
- Lokales Speichern von Dateien oder Blobs mit IndexedDB unter Verwendung der idb-file-storage-Bibliothek.
- Übergeben von Dateien an eine native Anwendung auf dem Computer des Benutzers.

Für jeden dieser Mechanismen führen wir deren Verwendung mit Verweisen auf die relevante API-Dokumentation, Leitfäden und Beispiele ein, die zeigen, wie die API verwendet wird.

## Dateien mit der Downloads-API herunterladen

Dieser Mechanismus ermöglicht es Ihnen, eine Datei von Ihrer Webseite (oder einem beliebigen als URL definierbaren Ort) auf den Computer des Benutzers zu übertragen. Die Hauptmethode ist {{WebExtAPIRef("downloads.download()")}}, die in ihrer einfachsten Form eine URL akzeptiert und die Datei von dieser URL in den Standard-Download-Ordner des Benutzers herunterlädt:

```js
browser.downloads.download({ url: "https://example.org/image.png" });
```

Sie können dem Benutzer erlauben, an einen anderen Ort herunterzuladen, indem Sie den Parameter `saveAs` angeben.

> [!NOTE]
> Mit [URL.createObjectURL()](/de/docs/Web/API/URL/createObjectURL_static) können Sie auch Dateien und Blobs herunterladen, die in Ihrem JavaScript definiert sind, einschließlich lokaler Inhalte, die aus IndexedDB abgerufen wurden.

Die Downloads-API bietet außerdem Funktionen zum Abbrechen, Anhalten, Fortsetzen, Löschen und Entfernen von Downloads; Suchen nach heruntergeladenen Dateien im Download-Manager; Anzeigen heruntergeladener Dateien im Datei-Manager des Computers und Öffnen einer Datei in einer zugehörigen Anwendung.

Um diese API zu verwenden, müssen Sie die `"downloads"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei spezifiziert haben.

Beispiel: [Aktuellster Download](https://github.com/mdn/webextensions-examples/tree/main/latest-download)
API-Referenz: [downloads API](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads)

## Dateien in einer Erweiterung mit einem Dateiauswähler öffnen

Wenn Sie mit einer Datei vom Computer des Benutzers arbeiten möchten, besteht eine Möglichkeit darin, dem Benutzer die Auswahl einer Datei mithilfe des Datei-Browsers des Computers zu ermöglichen. Erstellen Sie entweder eine neue Seite oder injizieren Sie Code in eine vorhandene Seite, um dem Benutzer mit dem `file`-Typ des HTML-`input`-Elements einen Dateiauswähler anzubieten. Sobald der Benutzer eine Datei oder Dateien ausgewählt hat, kann das mit der Seite verbundene Skript auf den Inhalt der Datei mit der [DOM File API](/de/docs/Web/API/File) zugreifen, genauso wie es eine Webanwendung tut.

Beispiel: [Imagify](https://github.com/mdn/webextensions-examples/tree/main/imagify)
Leitfaden: [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
API-Referenzen: [HTML input Element](/de/docs/Web/HTML/Reference/Elements/input/file) | [DOM File API](/de/docs/Web/API/File)

> [!NOTE]
> Wenn Sie auf alle Dateien in einem ausgewählten Ordner zugreifen oder diese verarbeiten möchten, können Sie dies tun mit `<input type="file" webkitdirectory="true"/>`, um den Ordner auszuwählen und alle darin enthaltenen Dateien zurückzugeben.

## Dateien in einer Erweiterung mit Drag-and-Drop öffnen

Die Web Drag and Drop API bietet eine Alternative zur Verwendung eines Dateiauswählers. Um diese Methode zu nutzen, richten Sie eine 'Drop-Zone' ein, die zu Ihrer Benutzeroberfläche passt, und fügen Sie dann den Elementen Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignisse hinzu. Im Handler für das Drop-Ereignis kann Ihr Code auf jede vom Benutzer abgeworfene Datei aus dem von der `dataTransfer`-Eigenschaft bereitgestellten Objekt mit [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files) zugreifen. Ihr Code kann dann die Dateien mit der [DOM File API](/de/docs/Web/API/File) zugreifen und manipulieren.

Beispiel: [Imagify](https://github.com/mdn/webextensions-examples/tree/main/imagify)
Leitfäden: [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) | [Drag-and-Drop von Dateien](/de/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)
API-Referenzen: [DOM File API](/de/docs/Web/API/File)

## Dateidaten lokal mit der IndexedDB-Dateispeicherbibliothek speichern

Wenn Ihre Erweiterung Dateien lokal speichern muss, bietet die [idb-file-storage-Bibliothek](https://www.npmjs.com/package/idb-file-storage) eine einfache, auf Promises basierende Hülle für die [IndexedDB API](/de/docs/Web/API/IndexedDB_API), die die Speicherung und den Abruf von Dateien und Blobs unterstützt.

Die Hauptmerkmale der Bibliothek sind:

- [getFileStorage](https://rpl.github.io/idb-file-storage/function/index.html#static-function-getFileStorage)
  - : Gibt eine `IDBFileStorage`-Instanz zurück und erstellt den benannten Speicher, falls dieser nicht existiert.
- [IDBFileStorage](https://rpl.github.io/idb-file-storage/class/src/idb-file-storage.js~IDBFileStorage.html)

  - : Bietet Methoden zum Speichern und Abrufen von Dateien, wie:

    - list um eine optional gefilterte Liste von Dateien in der Datenbank zu erhalten.
    - put um eine Datei oder Blob in der Datenbank hinzuzufügen.
    - get um eine Datei oder Blob aus der Datenbank abzurufen.
    - remove um eine Datei oder Blob aus der Datenbank zu löschen.

Das [Store Collected Images](https://github.com/mdn/webextensions-examples/tree/main/store-collected-images/webextension-plain) Beispiel zeigt, wie die meisten dieser Funktionen verwendet werden.

Das Store Collected Images Beispiel erlaubt es Benutzern, Bilder zu einer Sammlung hinzuzufügen, indem sie eine Option im Bildkontextmenü verwenden. Ausgewählte Bilder werden in einem Popup gesammelt und können in einer benannten Sammlung gespeichert werden. Eine Toolbar-Schaltfläche ({{WebExtAPIRef("browserAction")}}) öffnet eine Navigationsseite, auf der der Benutzer gespeicherte Bilder ansehen und löschen kann, mit einer Filteroption, um die Auswahl einzugrenzen. [Sehen Sie das Beispiel in Aktion](https://www.youtube.com/watch?v=t6aVqMMe2Rc&ab_channel=LucaGreco).

Das Funktionieren der Bibliothek kann durch Betrachten von [image-store.js](https://github.com/mdn/webextensions-examples/blob/main/store-collected-images/webextension-plain/utils/image-store.js) in /utils/ verstanden werden:

### Den Speicher erstellen und die Bilder speichern

```js
async function saveCollectedBlobs(collectionName, collectedBlobs) {
  const storedImages = await getFileStorage({ name: "stored-images" });

  for (const item of collectedBlobs) {
    await storedImages.put(`${collectionName}/${item.uuid}`, item.blob);
  }
}
```

`saveCollectedBlobs` wird aufgerufen, wenn der Benutzer im Popup auf Speichern klickt und einen Namen für die Bildersammlung angegeben hat.

Zuerst erstellt `getFileStorage`, falls es nicht bereits existiert, die IndexedDB-Datenbank `"stored-images"` zum Objekt `storedImages`. `storedImages.put()` fügt dann jedes gesammelte Bild unter dem Sammlungsnamen mit der eindeutigen ID des Blobs (dem Dateinamen) zur Datenbank hinzu.

Wenn das zu speichernde Bild denselben Namen hat wie eines, das sich bereits in der Datenbank befindet, wird es überschrieben. Wenn Sie dies vermeiden möchten, fragen Sie die Datenbank zuerst mit `imagesStore.list()` ab und verwenden Sie einen Filter für den Dateinamen. Wenn die Liste eine Datei zurückgibt, fügen Sie dem Namen des neuen Bildes, das Sie speichern möchten, einen geeigneten Suffix hinzu, um ein separates Element zu speichern.

### Gespeicherte Bilder zur Anzeige abrufen

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

`loadStoredImages()` wird aufgerufen, wenn der Benutzer in der Navigationsseite die Ansicht oder das Nachladen klickt. `getFileStorage()` öffnet die `"stored-images"`-Datenbank und `imagesStore.list()` erhält eine gefilterte Liste der gespeicherten Bilder. Diese Liste wird dann verwendet, um Bilder mit `imagesStore.get()` abzurufen und eine Liste zur Rückgabe an die Benutzeroberfläche zu erstellen.

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

`removeStoredImages()` wird aufgerufen, wenn der Benutzer in der Navigationsseite auf Löschen klickt. Erneut öffnet `getFileStorage()` die `"stored-images"`-Datenbank und `imagesStore.remove()` entfernt jedes Bild aus der gefilterten Liste der Bilder.

Beachten Sie die Verwendung von [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static), um die Blob-URL explizit zu widerrufen. Dies ermöglicht es dem Garbage Collector, den der URL zugewiesenen Speicherplatz freizugeben. Wenn dies nicht getan wird, wird der Speicher erst zurückgegeben, wenn die Seite, auf der er erstellt wurde, geschlossen wird. Falls die URL auf einer Hintergrundseite einer Erweiterung erstellt wurde, wird diese nicht entladen, bis die Erweiterung deaktiviert, deinstalliert oder neu geladen wird. Das unnötige Halten dieses Speichers könnte die Browserleistung beeinträchtigen. Wird die URL auf einer Seite der Erweiterung erstellt (neuer Tab, Popup oder Sidebar), wird der Speicherplatz freigegeben, wenn die Seite geschlossen wird, aber es ist trotzdem eine gute Praxis, die URL zu widerrufen, wenn sie nicht mehr benötigt wird.

Sobald die Blob-URL widerrufen wurde, wird jeder Versuch, sie zu laden, zu einem Fehler führen. Beispielsweise, wenn die Blob-URL als `SRC`-Attribut eines `IMG`-Tags verwendet wurde, wird das Bild nicht geladen und nicht sichtbar. Daher ist es eine gute Praxis, alle widerrufenen Blob-URLs aus generierten HTML-Elementen zu entfernen, wenn die Blob-URL widerrufen wird.

Beispiel: [Store Collected Images](https://github.com/mdn/webextensions-examples/tree/main/store-collected-images/webextension-plain)
API-Referenzen: [idb-file-storage Bibliothek](https://rpl.github.io/idb-file-storage/)

> [!NOTE]
> Sie können auch die vollständige Web [IndexedDB API](/de/docs/Web/API/IndexedDB_API) verwenden, um Daten von Ihrer Erweiterung zu speichern. Dies kann nützlich sein, wenn Sie Daten speichern müssen, die nicht gut durch die einfachen Schlüssel/Wert-Paare der DOM [Storage API](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) verarbeitet werden.

## Dateien in einer lokalen App verarbeiten

Wenn Sie über eine native App verfügen oder zusätzliche native Funktionen zur Datei-Prozessierung bereitstellen möchten, verwenden Sie die native Messaging, um eine Datei zur Verarbeitung an eine native App zu übergeben.

Sie haben zwei Möglichkeiten:

- Verbindungsbasiertes Messaging
  - : Hierbei lösen Sie den Prozess mit `runtime.connectNative()` aus, das ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt zurückgibt. Sie können dann eine JSON-Nachricht mit der `postMessage()`-Funktion von `Port` an die native Anwendung senden. Mit der Funktion `onMessage.addListener()` von `Port` können Sie Nachrichten von der nativen Anwendung empfangen. Die native Anwendung wird geöffnet, wenn sie nicht ausgeführt wird, wenn `runtime.connectNative()` aufgerufen wird und die Anwendung weiterhin läuft, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die sie verbunden hat, geschlossen wird.
- Verbindungsfreies Messaging
  - : Hierbei verwenden Sie `runtime.sendNativeMessage()`, um eine JSON-Nachricht an eine neue, temporäre Instanz der nativen Anwendung zu senden. Der Browser schließt die native Anwendung, nachdem er eine Nachricht von der nativen Anwendung empfangen hat.

Um die Datei oder das Blob hinzuzufügen, das die native Anwendung verarbeiten soll, verwenden Sie [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

Um diese Methode zu verwenden, muss die Erweiterung die `"nativeMessaging"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in ihrer `manifest.json` Datei anfordern. Wenn eine optionale Berechtigung verwendet wird, denken Sie daran, zu überprüfen, ob die Berechtigung erteilt wurde und bei Bedarf die Berechtigung mit der {{WebExtAPIRef("permissions")}} API vom Benutzer anzufordern. Gegenseitig muss die native Anwendung der Erweiterung die Berechtigung erteilen, indem sie ihre ID im `"allowed_extensions"`-Feld des App-Manifests einfügt.

Beispiel: [Native Messaging](https://github.com/mdn/webextensions-examples/tree/main/native-messaging) (zeigt nur einfaches Messaging)
Leitfäden: [Native messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
API-Referenzen: [runtime API](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime)
