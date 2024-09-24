---
title: Arbeiten mit Dateien
slug: Mozilla/Add-ons/WebExtensions/Working_with_files
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Ihre Browsererweiterung muss möglicherweise mit Dateien arbeiten, um ihre volle Funktionalität zu bieten. Dieser Artikel betrachtet die fünf Mechanismen, die Sie zum Umgang mit Dateien haben:

- Herunterladen von Dateien in den vom Benutzer ausgewählten Download-Ordner.
- Öffnen von Dateien mit einem Dateiauswahldialog auf einer Webseite.
- Öffnen von Dateien durch Ziehen und Ablegen auf eine Webseite.
- Speichern von Dateien oder Blobs lokal mit IndexedDB unter Verwendung der idb-file-storage-Bibliothek.
- Übergeben von Dateien an eine native Anwendung auf dem Computer des Benutzers.

Für jeden dieser Mechanismen führen wir ihre Nutzung mit Verweisen auf die relevante API-Dokumentation, Anleitungen und Beispiele ein, die zeigen, wie die API verwendet wird.

## Dateien mit der Downloads-API herunterladen

Dieser Mechanismus ermöglicht es Ihnen, eine Datei von Ihrer Website (oder einem beliebigen Ort, den Sie als URL definieren können) auf den Computer des Benutzers zu übertragen. Die Hauptmethode ist {{WebExtAPIRef("downloads.download()")}}, die in ihrer einfachsten Form eine URL akzeptiert und die Datei von dieser URL in den Standard-Download-Ordner des Benutzers herunterlädt:

```js
browser.downloads.download({ url: "https://example.org/image.png" });
```

Sie können dem Benutzer erlauben, an einen Ort seiner Wahl herunterzuladen, indem Sie den `saveAs`-Parameter angeben.

> [!NOTE]
> Mit [URL.createObjectURL()](/de/docs/Web/API/URL/createObjectURL_static) können Sie auch Dateien und Blobs herunterladen, die in Ihrem JavaScript definiert sind, einschließlich lokalem Inhalt, der aus IndexedDB abgerufen wird.

Die Downloads-API bietet auch Funktionen zum Abbrechen, Pausieren, Fortsetzen, Löschen und Entfernen von Downloads; Suchen nach heruntergeladenen Dateien im Download-Manager; Anzeigen von heruntergeladenen Dateien im Dateimanager des Computers; und Öffnen einer Datei in einer zugeordneten Anwendung.

Um diese API zu verwenden, müssen Sie die `"downloads"` [API-Berechtigung](/de/docs/Web/API/Permissions#api_permissions) in Ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei spezifizieren.

Beispiel: [Aktuellster Download](https://github.com/mdn/webextensions-examples/tree/main/latest-download)
API-Referenz: [downloads API](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads)

## Dateien in einer Erweiterung mit einem Dateiauswahldialog öffnen

Wenn Sie mit einer Datei vom Computer des Benutzers arbeiten möchten, ist eine Möglichkeit, den Benutzer eine Datei mit dem Dateiauswahldialog des Computers auswählen zu lassen. Erstellen Sie entweder eine neue Seite oder fügen Sie Code in eine bestehende Seite ein, um den Dateityp des HTML-`input`-Elements zu verwenden, um dem Benutzer eine Dateiauswahl zu bieten. Sobald der Benutzer eine Datei oder Dateien ausgewählt hat, kann das mit der Seite verknüpfte Skript auf den Inhalt der Datei mit der [DOM File API](/de/docs/Web/API/File) zugreifen, genauso wie es eine Webanwendung tun würde.

Beispiel: [Imagify](https://github.com/mdn/webextensions-examples/tree/main/imagify)
Anleitung: [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
API-Referenzen: [HTML-Input-Element](/de/docs/Web/HTML/Element/input/file) | [DOM File API](/de/docs/Web/API/File)

> [!NOTE]
> Wenn Sie auf alle Dateien in einem ausgewählten Ordner zugreifen oder diese verarbeiten möchten, können Sie dies mit `<input type="file" webkitdirectory="true"/>` tun, um den Ordner auszuwählen und alle darin enthaltenen Dateien zurückzugeben.

## Dateien in einer Erweiterung durch Ziehen und Ablegen öffnen

Die Web Drag and Drop API bietet eine Alternative zur Verwendung eines Dateiauswahldialogs. Um diese Methode zu nutzen, richten Sie eine "Dropzone" ein, die zu Ihrer Benutzeroberfläche passt, und fügen Sie dann Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignisse zum Element hinzu. Im Handler für das Drop-Ereignis kann Ihr Code auf jede vom Benutzer abgelegte Datei zugreifen, die vom Objekt in der `dataTransfer`-Eigenschaft angeboten wird, unter Verwendung von [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files). Anschließend kann Ihr Code die Dateien mit der [DOM File API](/de/docs/Web/API/File) manipulieren.

Beispiel: [Imagify](https://github.com/mdn/webextensions-examples/tree/main/imagify)
Anleitungen: [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) | [Datei ziehen und ablegen](/de/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)
API-Referenzen: [DOM File API](/de/docs/Web/API/File)

## Dateidaten lokal mit der IndexedDB-Dateispeicherbibliothek speichern

Wenn Ihre Erweiterung Dateien lokal speichern muss, bietet die [idb-file-storage Bibliothek](https://www.npmjs.com/package/idb-file-storage) eine einfache, auf Promises basierende Hülle für die [IndexedDB API](/de/docs/Web/API/IndexedDB_API), um die Speicherung und den Abruf von Dateien und Blobs zu unterstützen.

Die Hauptmerkmale der Bibliothek sind:

- [getFileStorage](https://rpl.github.io/idb-file-storage/function/index.html#static-function-getFileStorage)
  - : Gibt eine `IDBFileStorage`-Instanz zurück, die den benannten Speicher erstellt, falls er nicht existiert.

- [IDBFileStorage](https://rpl.github.io/idb-file-storage/class/src/idb-file-storage.js~IDBFileStorage.html)
  - : Bietet die Methoden zum Speichern und Abrufen von Dateien, wie:

    - list, um eine optional gefilterte Liste der Dateien in der Datenbank zu erhalten.
    - put, um eine Datei oder ein Blob zur Datenbank hinzuzufügen.
    - get, um eine Datei oder ein Blob aus der Datenbank abzurufen.
    - remove, um eine Datei oder ein Blob aus der Datenbank zu löschen.

Das [Store Collected Images](https://github.com/mdn/webextensions-examples/tree/main/store-collected-images/webextension-plain) Beispiel veranschaulicht, wie die meisten dieser Funktionen genutzt werden.

Das Beispiel „Store Collected Images“ ermöglicht es Benutzern, Bilder zu einer Sammlung hinzuzufügen, indem sie eine Option im Kontextmenü des Bildes verwenden. Ausgewählte Bilder werden in einem Popup gesammelt und können in einer benannten Sammlung gespeichert werden. Eine Symbolleistenschaltfläche ({{WebExtAPIRef("browserAction")}}) öffnet eine Navigationsseite, auf der der Benutzer gespeicherte Bilder anzeigen und löschen kann, mit einer Filteroption zur Begrenzung der Auswahl. [Das Beispiel in Aktion sehen](https://www.youtube.com/watch?v=t6aVqMMe2Rc&ab_channel=LucaGreco).

Die Funktionsweise der Bibliothek kann durch das Anschauen von [image-store.js](https://github.com/mdn/webextensions-examples/blob/main/store-collected-images/webextension-plain/utils/image-store.js) in /utils/ verstanden werden:

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

Zuerst erstellt `getFileStorage` (falls es noch nicht existiert) oder ruft die IndexedDB-Datenbank `"stored-images"` in das Objekt `storedImages` ab. `storedImages.put()` fügt dann jedes gesammelte Bild mit dem eindeutigen ID des Blob (dem Dateinamen) unter dem Sammlungsnamen zur Datenbank hinzu.

Wenn das gespeicherte Bild denselben Namen hat wie eines, das bereits in der Datenbank vorhanden ist, wird es überschrieben. Um dies zu vermeiden, können Sie die Datenbank zuerst mit `imagesStore.list()` abfragen und nach dem Dateinamen filtern. Wenn die Liste eine Datei zurückgibt, fügen Sie dem Namen des neuen Bildes einen geeigneten Suffix hinzu, um ein separates Element zu speichern.

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

`loadStoredImages()` wird aufgerufen, wenn der Benutzer auf Ansicht oder Neuladen auf der Navigationsseite klickt. `getFileStorage()` öffnet die `"stored-images"`-Datenbank, dann `imagesStore.list()` erhält eine gefilterte Liste der gespeicherten Bilder. Diese Liste wird dann verwendet, um Bilder mit `imagesStore.get()` abzurufen und eine Liste zur Rückgabe an die Benutzeroberfläche zu erstellen.

Beachten Sie die Verwendung von [`URL.createObjectURL(blob)`](/de/docs/Web/API/URL/createObjectURL_static), um eine URL zu erstellen, die auf das Bild-Blob verweist. Diese URL wird dann in der Benutzeroberfläche ([navigate-collection.js](https://github.com/mdn/webextensions-examples/blob/main/store-collected-images/webextension-plain/navigate-collection.js)) verwendet, um das Bild anzuzeigen.

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

`removeStoredImages()` wird aufgerufen, wenn der Benutzer auf der Navigationsseite auf Löschen klickt. Erneut öffnet `getFileStorage()` die `"stored-images"`-Datenbank, dann `imagesStore.remove()` entfernt jedes Bild aus der gefilterten Liste von Bildern.

Beachten Sie die Verwendung von [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static), um die Blob-URL explizit zu widerrufen. Dies ermöglicht es dem Garbage Collector, den der URL zugewiesenen Speicher freizugeben. Wenn dies nicht getan wird, wird der Speicher erst zurückgegeben, wenn die Seite, auf der sie erstellt wurde, geschlossen wird. Wenn die URL in einer Hintergrundseite einer Erweiterung erstellt wurde, wird diese nicht entladen, bis die Erweiterung deaktiviert, deinstalliert oder neu geladen wird, sodass das unnötige Halten dieses Speichers die Browserleistung beeinträchtigen könnte. Wenn die URL auf einer Seite der Erweiterung erstellt wird (neuer Tab, Popup oder Seitenleiste), wird der Speicher beim Schließen der Seite freigegeben, aber es ist immer noch eine gute Praxis, die URL zu widerrufen, wenn sie nicht mehr benötigt wird.

Sobald die Blob-URL widerrufen wurde, führt jeder Versuch, sie zu laden, zu einem Fehler. Zum Beispiel, wenn die Blob-URL als `SRC`-Attribut eines `IMG`-Tags verwendet wurde, wird das Bild nicht geladen und nicht sichtbar sein. Es ist daher gute Praxis, alle widerrufenen Blob-URLs von generierten HTML-Elementen zu entfernen, wenn die Blob-URL widerrufen wird.

Beispiel: [Store Collected Images](https://github.com/mdn/webextensions-examples/tree/main/store-collected-images/webextension-plain)
API-Referenzen: [idb-file-storage library](https://rpl.github.io/idb-file-storage/)

> [!NOTE]
> Sie können auch die vollständige Web [IndexedDB API](/de/docs/Web/API/IndexedDB_API) verwenden, um Daten aus Ihrer Erweiterung zu speichern. Dies kann nützlich sein, wenn Sie Daten speichern müssen, die nicht gut mit den einfachen Schlüssel/Wert-Paaren der DOM [Storage API](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) verarbeitet werden können.

## Dateien in einer lokalen Anwendung verarbeiten

Wenn Sie eine native Anwendung haben oder zusätzliche native Funktionen für die Dateiverarbeitung bereitstellen möchten, verwenden Sie native Messaging, um eine Datei zur Verarbeitung an eine native Anwendung zu übergeben.

Sie haben zwei Optionen:

- Nachrichtenübermittlung basierend auf Verbindungen
  - : Hierbei lösen Sie den Prozess mit `runtime.connectNative()` aus, das ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt zurückgibt. Sie können dann eine JSON-Nachricht an die native Anwendung mit der `postMessage()`-Funktion von `Port` übermitteln. Mit der `onMessage.addListener()`-Funktion von `Port` können Sie Nachrichten von der nativen Anwendung empfangen. Die native Anwendung wird geöffnet, wenn sie nicht läuft, wenn `runtime.connectNative()` aufgerufen wird und die Anwendung bleibt offen, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die sie verbunden hat, geschlossen wird.

- Nachrichtenübermittlung ohne Verbindung
  - : Hier verwenden Sie `runtime.sendNativeMessage()`, um eine JSON-Nachricht an eine neue, temporäre Instanz der nativen Anwendung zu senden. Der Browser schließt die native Anwendung, nachdem er eine Nachricht von der nativen Anwendung empfangen hat.

Um die Datei oder das Blob, das Sie von der nativen Anwendung bearbeiten lassen möchten, hinzuzufügen, verwenden Sie [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

Um diese Methode zu verwenden, muss die Erweiterung die `"nativeMessaging"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in ihrer `manifest.json`-Datei beantragen. Bei der Verwendung der optionalen Berechtigung, denken Sie daran zu überprüfen, dass die Berechtigung gewährt wurde und, falls nötig, die Berechtigung vom Benutzer mit der {{WebExtAPIRef("permissions")}} API zu beantragen. Im Gegenzug muss die native Anwendung der Erweiterung die Berechtigung erteilen, indem sie ihre ID im Feld `"allowed_extensions"` des App-Manifests einfügt.

Beispiel: [Native Messaging](https://github.com/mdn/webextensions-examples/tree/main/native-messaging) (veranschaulicht nur einfache Nachrichtenübermittlung)
Anleitungen: [Native Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
API-Referenzen: [runtime API](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime)
