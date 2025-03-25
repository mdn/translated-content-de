---
title: Mit Dateien arbeiten
slug: Mozilla/Add-ons/WebExtensions/Working_with_files
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{AddonSidebar}}

Ihre Browsererweiterung muss möglicherweise mit Dateien arbeiten, um ihre volle Funktionalität bereitzustellen. Dieser Artikel behandelt die fünf Mechanismen, die Sie zum Umgang mit Dateien haben:

- Herunterladen von Dateien in den vom Benutzer gewählten Download-Ordner.
- Öffnen von Dateien mithilfe eines Dateiauswahlers auf einer Webseite.
- Öffnen von Dateien durch Drag & Drop auf eine Webseite.
- Lokales Speichern von Dateien oder Blobs mit IndexedDB unter Verwendung der idb-file-storage-Bibliothek.
- Übertragen von Dateien an eine native Anwendung auf dem Computer des Benutzers.

Für jeden dieser Mechanismen stellen wir deren Verwendung mit Verweisen auf die relevanten API-Dokumentationen, Leitfäden und Beispielen vor, die zeigen, wie die API genutzt wird.

## Dateien mit der Downloads-API herunterladen

Dieser Mechanismus ermöglicht es Ihnen, eine Datei von Ihrer Website (oder einem beliebigen Standort, den Sie als URL definieren können) auf den Computer des Benutzers zu holen. Die Hauptmethode ist {{WebExtAPIRef("downloads.download()")}}, die in ihrer einfachsten Form eine URL akzeptiert und die Datei von dieser URL in den Standard-Download-Ordner des Benutzers herunterlädt:

```js
browser.downloads.download({ url: "https://example.org/image.png" });
```

Sie können dem Benutzer erlauben, an einen Speicherort seiner Wahl herunterzuladen, indem Sie den Parameter `saveAs` angeben.

> [!NOTE]
> Mithilfe von [URL.createObjectURL()](/de/docs/Web/API/URL/createObjectURL_static) können Sie auch Dateien und Blobs herunterladen, die in Ihrem JavaScript definiert sind, einschließlich lokaler Inhalte, die von IndexedDB abgerufen wurden.

Die Downloads-API bietet außerdem Funktionen zum Abbrechen, Pausieren, Fortsetzen, Löschen und Entfernen von Downloads; zum Suchen heruntergeladener Dateien im Download-Manager; zum Anzeigen heruntergeladener Dateien im Dateimanager des Computers; und zum Öffnen einer Datei in einer zugehörigen Anwendung.

Um diese API zu verwenden, müssen Sie in Ihrer Datei [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) die [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) `"downloads"` angeben.

Beispiel: [Letzter Download](https://github.com/mdn/webextensions-examples/tree/main/latest-download)
API-Referenz: [Downloads API](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads)

## Dateien in einer Erweiterung mit einem Dateiauswähler öffnen

Wenn Sie mit einer Datei vom Computer des Benutzers arbeiten möchten, ist eine Option, den Benutzer eine Datei mit dem Dateibrowser des Computers auswählen zu lassen. Erstellen Sie entweder eine neue Seite oder fügen Sie einer bestehenden Seite Code hinzu, um den Benutzern mit dem `file` Typ des HTML-`input` Elements einen Dateiauswähler anzubieten. Sobald der Benutzer eine Datei oder Dateien ausgewählt hat, kann das mit der Seite verknüpfte Skript auf den Inhalt der Datei mithilfe der [DOM File API](/de/docs/Web/API/File) zugreifen, genauso wie eine Webanwendung dies tut.

Beispiel: [Imagify](https://github.com/mdn/webextensions-examples/tree/main/imagify)
Leitfaden: [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
API-Referenzen: [HTML-Input-Element](/de/docs/Web/HTML/Element/input/file) | [DOM File API](/de/docs/Web/API/File)

> [!NOTE]
> Wenn Sie auf alle Dateien in einem ausgewählten Ordner zugreifen oder diese verarbeiten möchten, können Sie dies mit `<input type="file" webkitdirectory="true"/>` tun, um den Ordner auszuwählen und alle darin enthaltenen Dateien zurückzugeben.

## Dateien in einer Erweiterung mittels Drag & Drop öffnen

Die Web Drag and Drop API bietet eine Alternative zur Verwendung eines Dateiauswählers. Um diese Methode zu nutzen, richten Sie eine ‚Drop-Zone‘ ein, die zu Ihrem UI passt, und fügen Sie dann Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignisse für das Element hinzu. Im Handler für das Drop-Ereignis kann Ihr Code auf jede Datei zugreifen, die der Benutzer aus dem Objekt, das von der `dataTransfer` Eigenschaft angeboten wird, verwendet hat, durch Verwendung von [`DataTransfer.files`](/de/docs/Web/API/DataTransfer/files). Ihr Code kann dann die Dateien mithilfe der [DOM File API](/de/docs/Web/API/File) zugreifen und manipulieren.

Beispiel: [Imagify](https://github.com/mdn/webextensions-examples/tree/main/imagify)
Leitfäden: [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) | [Dateien per Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)
API-Referenzen: [DOM File API](/de/docs/Web/API/File)

## Dateidaten lokal mit der IndexedDB-Dateispeicher-Bibliothek speichern

Wenn Ihre Erweiterung Dateien lokal speichern muss, bietet die [idb-file-storage Bibliothek](https://www.npmjs.com/package/idb-file-storage) eine einfache auf Promises basierende Hülle für die [IndexedDB API](/de/docs/Web/API/IndexedDB_API), um die Speicherung und den Abruf von Dateien und Blobs zu erleichtern.

Die Hauptfunktionen der Bibliothek sind:

- [getFileStorage](https://rpl.github.io/idb-file-storage/function/index.html#static-function-getFileStorage)
  - : Gibt eine `IDBFileStorage` Instanz zurück und erstellt den benannten Speicher, falls er nicht existiert.
- [IDBFileStorage](https://rpl.github.io/idb-file-storage/class/src/idb-file-storage.js~IDBFileStorage.html)

  - : Stellt die Methoden zum Speichern und Abrufen von Dateien bereit, wie zum Beispiel:

    - list, um eine optional gefilterte Liste von Dateien in der Datenbank zu erhalten.
    - put, um eine Datei oder einen Blob zur Datenbank hinzuzufügen.
    - get, um eine Datei oder einen Blob aus der Datenbank abzurufen.
    - remove, um eine Datei oder einen Blob aus der Datenbank zu löschen.

Das [Store Collected Images](https://github.com/mdn/webextensions-examples/tree/main/store-collected-images/webextension-plain) Beispiel zeigt, wie die meisten dieser Funktionen verwendet werden.

Das Store Collected Images Beispiel lässt Benutzer Bilder mit einer Option im Kontextmenü des Bildes zu einer Sammlung hinzufügen. Ausgewählte Bilder werden in einem Popup gesammelt und können unter einem benannten Sammlung gespeichert werden. Eine Symbolleisten-Schaltfläche ({{WebExtAPIRef("browserAction")}}) öffnet eine Navigationsseite für die Sammlung, auf der der Benutzer gespeicherte Bilder ansehen und löschen kann, mit einer Filteroption zur Einschränkung der Auswahl. [Sehen Sie sich das Beispiel in Aktion an](https://www.youtube.com/watch?v=t6aVqMMe2Rc&ab_channel=LucaGreco).

Die Funktionsweise der Bibliothek kann durch Betrachten von [image-store.js](https://github.com/mdn/webextensions-examples/blob/main/store-collected-images/webextension-plain/utils/image-store.js) in /utils/ verstanden werden:

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

Zuerst erstellt oder ruft `getFileStorage` die IndexedDB-Datenbank `"stored-images"` zum Objekt `storedImages` auf, wenn sie nicht bereits existiert. `storedImages.put()` fügt dann jedes gesammelte Bild zur Datenbank hinzu, unter dem Sammlungsnamen, unter Verwendung der eindeutigen Id des Blobs (dem Dateinamen).

Wenn das Bild, das gespeichert wird, denselben Namen wie eines bereits in der Datenbank gespeichertes Bild hat, wird es überschrieben. Wenn Sie dies vermeiden möchten, durchsuchen Sie die Datenbank zuerst mit `imagesStore.list()` mit einem Filter für den Dateinamen; und falls die Liste eine Datei zurückgibt, fügen Sie dem Namen des neuen zu speichernden Bildes ein geeignetes Suffix hinzu, um einen separaten Eintrag zu speichern.

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

`loadStoredImages()` wird aufgerufen, wenn der Benutzer auf der Navigationsseite der Sammlung auf Ansehen oder Aktualisieren klickt. `getFileStorage()` öffnet die `"stored-images"` Datenbank, dann ruft `imagesStore.list()` eine gefilterte Liste der gespeicherten Bilder ab. Diese Liste wird dann verwendet, um die Bilder mit `imagesStore.get()` abzurufen und eine Liste zur Rückgabe an die Benutzeroberfläche zu erstellen.

Beachten Sie die Verwendung von [`URL.createObjectURL(blob)`](/de/docs/Web/API/URL/createObjectURL_static), um eine URL zu erstellen, die auf das Image-Blob verweist. Diese URL wird dann in der UI ([navigate-collection.js](https://github.com/mdn/webextensions-examples/blob/main/store-collected-images/webextension-plain/navigate-collection.js)) verwendet, um das Bild anzuzeigen.

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

`removeStoredImages()` wird aufgerufen, wenn der Benutzer auf der Navigationsseite der Sammlung auf Löschen klickt. Auch hier öffnet `getFileStorage()` die `"stored-images"` Datenbank und dann entfernt `imagesStore.remove()` jedes Bild aus der gefilterten Liste der Bilder.

Beachten Sie die Verwendung von [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static), um die Blob-URL explizit zu widerrufen. Dadurch kann der Garbage Collector den für die URL zugewiesenen Speicher freigeben. Wird dies nicht getan, wird der Speicher erst zurückgegeben, wenn die Seite, auf der sie erstellt wurde, geschlossen wird. Bei einer im Hintergrund der Erweiterung erstellten URL wird der Speicher erst freigegeben, wenn die Erweiterung deaktiviert, deinstalliert oder neu geladen wird, sodass die unnötige Belegung dieses Speichers die Leistung des Browsers beeinträchtigen könnte. Wird die URL auf einer Seite der Erweiterung (neuer Tab, Popup oder Seitenleiste) erstellt, wird der Speicher freigegeben, wenn die Seite geschlossen wird. Trotzdem ist es eine gute Praxis, die URL zu widerrufen, wenn sie nicht mehr benötigt wird.

Sobald die Blob-URL widerrufen wurde, führt jeder Versuch, sie zu laden, zu einem Fehler. Wenn die Blob-URL beispielsweise als `SRC`-Attribut eines `IMG`-Tags verwendet wurde, wird das Bild nicht geladen und nicht sichtbar sein. Es ist daher eine gute Praxis, widerrufene Blob-URLs aus generierten HTML-Elementen zu entfernen, wenn die Blob-URL widerrufen wird.

Beispiel: [Gesammelte Bilder speichern](https://github.com/mdn/webextensions-examples/tree/main/store-collected-images/webextension-plain)
API-Referenzen: [idb-file-storage Bibliothek](https://rpl.github.io/idb-file-storage/)

> [!NOTE]
> Sie können auch die vollständige Web [IndexedDB API](/de/docs/Web/API/IndexedDB_API) verwenden, um Daten aus Ihrer Erweiterung zu speichern. Dies kann nützlich sein, wenn Sie Daten speichern müssen, die nicht gut durch die einfachen Schlüssel/Wert-Paare der DOM [Storage API](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) verarbeitet werden.

## Dateien in einer lokalen App verarbeiten

Wo Sie eine native App haben oder zusätzliche native Funktionen für die Dateiverarbeitung bereitstellen möchten, verwenden Sie native Messaging, um eine Datei an eine native App zur Verarbeitung zu übergeben.

Sie haben zwei Optionen:

- Verbindungsgestütztes Messaging
  - : Hier lösen Sie den Prozess mit `runtime.connectNative()` aus, was ein [`runtime.Port`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) Objekt zurückgibt. Sie können dann eine JSON-Nachricht mit der Funktion `postMessage()` von `Port` an die native Anwendung übergeben. Mit der Funktion `onMessage.addListener()` von `Port` können Sie Nachrichten von der nativen Anwendung empfangen. Die native Anwendung wird geöffnet, wenn sie nicht läuft, wenn `runtime.connectNative()` aufgerufen wird, und die Anwendung bleibt laufen, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die sie verbunden hat, geschlossen wird.
- Nachrichten ohne Verbindung
  - : Hier verwenden Sie `runtime.sendNativeMessage()`, um eine JSON-Nachricht an eine neue, temporäre Instanz der nativen Anwendung zu senden. Der Browser schließt die native Anwendung, nachdem er eine Nachricht von der nativen Anwendung empfangen hat.

Um die Datei oder das Blob hinzuzufügen, das die native Anwendung verarbeiten soll, verwenden Sie [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

Um diese Methode zu verwenden, muss die Erweiterung in ihrer `manifest.json` Datei die `"nativeMessaging"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) anfordern. Wird eine optionale Berechtigung verwendet, denken Sie daran zu prüfen, ob die Berechtigung erteilt wurde, und wo nötig, um die Berechtigung vom Benutzer mit der {{WebExtAPIRef("permissions")}} API nachzufragen. Im Gegenzug muss die native Anwendung der Erweiterung die Berechtigung erteilen, indem deren ID im `"allowed_extensions"` Feld des App-Manifests enthalten ist.

Beispiel: [Native Messaging](https://github.com/mdn/webextensions-examples/tree/main/native-messaging) (zeigt nur einfaches Messaging)
Leitfäden: [Native Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
API-Referenzen: [Runtime API](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime)
