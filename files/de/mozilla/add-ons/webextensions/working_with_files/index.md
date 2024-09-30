---
title: Arbeiten mit Dateien
slug: Mozilla/Add-ons/WebExtensions/Working_with_files
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Ihre Browser-Erweiterung muss möglicherweise mit Dateien arbeiten, um ihre volle Funktionalität zu bieten. Dieser Artikel betrachtet die fünf Mechanismen, die Sie zum Umgang mit Dateien haben:

- Herunterladen von Dateien in den vom Benutzer ausgewählten Download-Ordner.
- Öffnen von Dateien mit einem Datei-Auswahldialog auf einer Webseite.
- Öffnen von Dateien durch Drag & Drop auf eine Webseite.
- Speichern von Dateien oder Blobs lokal mit IndexedDB unter Verwendung der idb-file-storage-Bibliothek.
- Übergeben von Dateien an eine native Anwendung auf dem Computer des Benutzers.

Für jeden dieser Mechanismen führen wir ihre Verwendung mit Verweisen auf die relevante API-Dokumentation, Leitfäden und Beispiele ein, die zeigen, wie die API genutzt wird.

## Dateien mit der downloads API herunterladen

Dieser Mechanismus ermöglicht es Ihnen, eine Datei von Ihrer Website (oder einem Ort, den Sie als URL definieren können) auf den Computer des Benutzers zu übertragen. Die zentrale Methode ist {{WebExtAPIRef("downloads.download()")}}, die in ihrer einfachsten Form eine URL akzeptiert und die Datei von dieser URL in den Standard-Download-Ordner des Benutzers herunterlädt:

```js
browser.downloads.download({ url: "https://example.org/image.png" });
```

Sie können dem Benutzer erlauben, an einen Ort seiner Wahl herunterzuladen, indem Sie den Parameter `saveAs` angeben.

> [!NOTE]
> Unter Verwendung von [URL.createObjectURL()](/de/docs/Web/API/URL/createObjectURL_static) können Sie auch Dateien und Blobs herunterladen, die in Ihrem JavaScript definiert sind, einschließlich lokalem Inhalt, der von IndexedDB abgerufen wurde.

Die downloads API bietet auch Funktionen, um Downloads abzubrechen, zu pausieren, fortzusetzen, zu löschen und zu entfernen; nach heruntergeladenen Dateien im Download-Manager zu suchen; heruntergeladene Dateien im Dateimanager des Computers anzuzeigen; und eine Datei in einer zugeordneten Anwendung zu öffnen.

Um diese API zu nutzen, müssen Sie die Berechtigung `"downloads"` [API permission](/de/docs/Web/API/Permissions#api_permissions) in Ihrer Datei [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) angeben.

Beispiel: [Latest download](https://github.com/mdn/webextensions-examples/tree/main/latest-download)
API-Referenz: [downloads API](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads)

## Dateien in einer Erweiterung mit einem Datei-Auswahldialog öffnen

Wenn Sie mit einer Datei vom Computer des Benutzers arbeiten möchten, ist eine Option, den Benutzer eine Datei mit dem Datei-Browser des Computers auswählen zu lassen. Entweder erstellen Sie eine neue Seite oder fügen Sie Code in eine bestehende Seite ein, um über den `file` Typ des HTML `input` Elements dem Benutzer einen Datei-Auswahldialog anzubieten. Sobald der Benutzer eine Datei oder Dateien ausgewählt hat, kann das mit der Seite verbundene Skript den Inhalt der Datei über die [DOM File API](/de/docs/Web/API/File) auf die gleiche Weise wie eine Webanwendung darauf zugreifen.

Beispiel: [Imagify](https://github.com/mdn/webextensions-examples/tree/main/imagify)
Leitfaden: [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
API-Referenzen: [HTML input element](/de/docs/Web/HTML/Element/input/file) | [DOM File API](/de/docs/Web/API/File)

> [!NOTE]
> Wenn Sie auf alle Dateien in einem ausgewählten Ordner zugreifen oder diese verarbeiten möchten, können Sie dies über `<input type="file" webkitdirectory="true"/>` tun, um den Ordner auszuwählen und alle darin enthaltenen Dateien zurückzugeben.

## Dateien in einer Erweiterung mit Drag and Drop öffnen

Die Web-Drag-and-Drop-API bietet eine Alternative zur Verwendung eines Datei-Auswahldialogs. Um diese Methode zu nutzen, richten Sie eine 'Ablagezone' ein, die zu Ihrer Benutzeroberfläche passt, und fügen Sie dann Listener für die Ereignisse [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) dem Element hinzu. Im Handler für das Drop-Ereignis kann Ihr Code auf jede vom Benutzer fallengelassene Datei über das Objekt zugreifen, das durch die `dataTransfer`-Eigenschaft bereitgestellt wird, indem `DataTransfer.files` verwendet wird. Ihr Code kann dann auf die Dateien zugreifen und diese mit der [DOM File API](/de/docs/Web/API/File) manipulieren.

Beispiel: [Imagify](https://github.com/mdn/webextensions-examples/tree/main/imagify)
Leitfäden: [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) | [File drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)
API-Referenzen: [DOM File API](/de/docs/Web/API/File)

## Dateidaten lokal speichern mit der IndexedDB-Dateispeicherbibliothek

Wenn Ihre Erweiterung Dateien lokal speichern muss, bietet die [idb-file-storage Bibliothek](https://www.npmjs.com/package/idb-file-storage) eine einfache, auf Promises basierende Schnittstelle zur [IndexedDB API](/de/docs/Web/API/IndexedDB_API), um das Speichern und Abrufen von Dateien und Blobs zu erleichtern.

Wichtige Merkmale der Bibliothek sind:

- [getFileStorage](https://rpl.github.io/idb-file-storage/function/index.html#static-function-getFileStorage)
  - : Gibt eine `IDBFileStorage`-Instanz zurück und erstellt den benannten Speicher, wenn er nicht existiert.
- [IDBFileStorage](https://rpl.github.io/idb-file-storage/class/src/idb-file-storage.js~IDBFileStorage.html)

  - : Bietet die Methoden zum Speichern und Abrufen von Dateien, wie z.B.:

    - list, um eine optional gefilterte Liste von Dateien in der Datenbank zu erhalten.
    - put, um eine Datei oder einen Blob zur Datenbank hinzuzufügen.
    - get, um eine Datei oder einen Blob aus der Datenbank abzurufen.
    - remove, um eine Datei oder einen Blob aus der Datenbank zu löschen.

Das Beispiel [Store Collected Images](https://github.com/mdn/webextensions-examples/tree/main/store-collected-images/webextension-plain) veranschaulicht, wie die meisten dieser Funktionen verwendet werden.

Das Beispiel Store Collected Images ermöglicht es Benutzern, Bilder zu einer Sammlung hinzuzufügen, indem sie eine Option im Bild-Kontextmenü auswählen. Ausgewählte Bilder werden in einem Popup gesammelt und können in einer benannten Sammlung gespeichert werden. Eine Symbolleistenschaltfläche ({{WebExtAPIRef("browserAction")}}) öffnet eine Seite zur Navigation in der Sammlung, auf der der Benutzer gespeicherte Bilder anzeigen und löschen kann, mit einer Filteroption zur Eingrenzung der Auswahl. [Sehen Sie sich das Beispiel in Aktion an](https://www.youtube.com/watch?v=t6aVqMMe2Rc&ab_channel=LucaGreco).

Wie die Bibliothek funktioniert, können Sie sich in [image-store.js](https://github.com/mdn/webextensions-examples/blob/main/store-collected-images/webextension-plain/utils/image-store.js) im Verzeichnis /utils/ ansehen:

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

Zuerst erstellt `getFileStorage`, falls es nicht schon existiert, oder ruft die IndexedDB-Datenbank `"stored-images"` zu dem Objekt `storedImages` ab. `storedImages.put()` fügt dann jedes gesammelte Bild der Datenbank unter dem Namen der Sammlung mit der eindeutigen ID des Blobs (dem Dateinamen) hinzu.

Wenn das zu speichernde Bild denselben Namen hat wie ein bereits in der Datenbank befindliches Bild, wird es überschrieben. Wenn Sie dies vermeiden möchten, fragen Sie zuerst die Datenbank ab, indem Sie `imagesStore.list()` mit einem Filter für den Dateinamen verwenden; und, wenn die Liste eine Datei zurückgibt, fügen Sie dem Namen des neuen Bildes einen geeigneten Suffix hinzu, um ein separates Element zu speichern.

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

`loadStoredImages()` wird aufgerufen, wenn der Benutzer im Navigationsbereich der Sammlung auf Ansicht oder Neuladen klickt. `getFileStorage()` öffnet die `"stored-images"`-Datenbank, dann erhält `imagesStore.list()` eine gefilterte Liste der gespeicherten Bilder. Diese Liste wird dann verwendet, um Bilder mit `imagesStore.get()` abzurufen und eine Liste zu erstellen, die an die Benutzeroberfläche zurückgegeben wird.

Beachten Sie die Verwendung von [`URL.createObjectURL(blob)`](/de/docs/Web/API/URL/createObjectURL_static), um eine URL zu erstellen, die den Bild-Blob referenziert. Diese URL wird dann in der Benutzeroberfläche ([navigate-collection.js](https://github.com/mdn/webextensions-examples/blob/main/store-collected-images/webextension-plain/navigate-collection.js)) verwendet, um das Bild anzuzeigen.

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

`removeStoredImages()` wird aufgerufen, wenn der Benutzer im Navigationsbereich der Sammlung auf Löschen klickt. Wiederum öffnet `getFileStorage()` die `"stored-images"`-Datenbank, dann entfernt `imagesStore.remove()` jedes Bild aus der gefilterten Liste der Bilder.

Beachten Sie die Verwendung von [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static), um die Blob-URL explizit aufzuheben. Dies ermöglicht es dem Garbage Collector, den der URL zugeordneten Speicher freizugeben. Wenn dies nicht getan wird, wird der Speicher erst freigegeben, wenn die Seite, auf der er erstellt wurde, geschlossen wird. Wenn die URL auf einer Hintergrundseite der Erweiterung erstellt wurde, wird diese nicht entladen, bis die Erweiterung deaktiviert, deinstalliert oder neu geladen wird, so dass das unnötige Behalten dieses Speichers die Browser-Performance beeinträchtigen könnte. Wenn die URL auf einer Seite der Erweiterung (Neuer Tab, Popup oder Sidebar) erstellt wird, wird der Speicher freigegeben, wenn die Seite geschlossen wird, aber es ist trotzdem eine gute Praxis, die URL aufzuheben, wenn sie nicht mehr benötigt wird.

Sobald die Blob-URL aufgehoben wurde, führt jeder Versuch, sie zu laden, zu einem Fehler. Zum Beispiel, wenn die Blob-URL als `SRC`-Attribut eines `IMG`-Tags verwendet wurde, wird das Bild nicht geladen und ist nicht sichtbar. Es ist daher eine gute Praxis, aufgehobene Blob-URLs von generierten HTML-Elementen zu entfernen, wenn die Blob-URL aufgehoben wird.

Beispiel: [Store Collected Images](https://github.com/mdn/webextensions-examples/tree/main/store-collected-images/webextension-plain)
API-Referenzen: [idb-file-storage Bibliothek](https://rpl.github.io/idb-file-storage/)

> [!NOTE]
> Sie können auch die vollständige Web [IndexedDB API](/de/docs/Web/API/IndexedDB_API) verwenden, um Daten aus Ihrer Erweiterung zu speichern. Dies kann nützlich sein, wenn Sie Daten speichern müssen, die nicht gut durch die einfachen Schlüssel/Wert-Paare der DOM [Storage API](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) gehandhabt werden.

## Dateien in einer lokalen Anwendung verarbeiten

Wenn Sie eine native App haben oder zusätzliche native Funktionen zur Dateiverarbeitung bereitstellen möchten, verwenden Sie native messaging, um eine Datei an eine native Anwendung zur Verarbeitung zu übergeben.

Sie haben zwei Optionen:

- Verbindungsbasierte Nachrichtenübermittlung
  - : Hier lösen Sie den Vorgang mit `runtime.connectNative()` aus, das ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port)-Objekt zurückgibt. Sie können dann eine JSON-Nachricht an die native Anwendung senden, indem Sie die `postMessage()`-Funktion von `Port` verwenden. Mit der `onMessage.addListener()`-Funktion von `Port` können Sie auf Nachrichten von der nativen Anwendung lauschen. Die native Anwendung wird geöffnet, wenn sie nicht läuft, sobald `runtime.connectNative()` aufgerufen wird, und die Anwendung bleibt aktiv, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die sich damit verbunden hat, geschlossen wird.
- Verbindungslos Nachrichtenübermittlung
  - : Hier verwenden Sie `runtime.sendNativeMessage()`, um eine JSON-Nachricht an eine neue, temporäre Instanz der nativen Anwendung zu senden. Der Browser schließt die native Anwendung nach Empfang einer Antwortnachricht von der nativen Anwendung.

Um die Datei oder den Blob hinzuzufügen, die die native Anwendung verarbeiten soll, verwenden Sie [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

Um diese Methode zu verwenden, muss die Erweiterung die Berechtigung `"nativeMessaging"` entweder als [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optional permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in ihrer `manifest.json`-Datei anfordern. Bei der Verwendung der optionalen Berechtigung denken Sie daran zu prüfen, ob die Berechtigung erteilt wurde, und falls nötig, die Berechtigung beim Benutzer über die API {{WebExtAPIRef("permissions")}} anzufordern. Reziprok muss die native Anwendung der Erweiterung die Berechtigung gewähren, indem sie ihre ID im `"allowed_extensions"`-Feld des Anwendungsmanifests einschließt.

Beispiel: [Native Messaging](https://github.com/mdn/webextensions-examples/tree/main/native-messaging) (illustriert einfache Nachrichtenübermittlung)
Leitfäden: [Native messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
API-Referenzen: [runtime API](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime)
