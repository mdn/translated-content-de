---
title: FileReader
slug: Web/API/FileReader
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Das **`FileReader`** Interface ermöglicht es Webanwendungen, die Inhalte von Dateien (oder Rohdatenpuffern), die auf dem Computer des Benutzers gespeichert sind, asynchron zu lesen, indem {{domxref("File")}} oder {{domxref("Blob")}} Objekte verwendet werden, um die zu lesende Datei oder Daten anzugeben.

Dateiobjekte können aus einem {{domxref("FileList")}} Objekt gewonnen werden, das als Ergebnis einer Dateiauswahl durch den Benutzer mit dem {{HTMLElement("input")}} Element oder durch ein Drag-and-Drop-Operations-{{domxref("DataTransfer")}} Objekt zurückgegeben wird.

`FileReader` kann nur auf den Inhalt von Dateien zugreifen, die der Benutzer explizit ausgewählt hat, entweder mit einem HTML `<input type="file">` Element oder durch Drag and Drop. Es kann nicht verwendet werden, um eine Datei per Pfadnamen aus dem Dateisystem des Benutzers zu lesen. Um Dateien im Dateisystem des Clients per Pfadnamen zu lesen, verwenden Sie die [File System Access API](/de/docs/Web/API/File_System_API). Um serverseitige Dateien zu lesen, verwenden Sie {{domxref("Window/fetch", "fetch()")}}, mit [CORS](/de/docs/Web/HTTP/CORS) Erlaubnis, wenn Sie Cross-Origin lesen.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("FileReader.FileReader", "FileReader()")}}
  - : Gibt ein neues `FileReader` Objekt zurück.

Siehe [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) für Details und Beispiele.

## Instanz-Eigenschaften

- {{domxref("FileReader.error")}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMException")}}, das den Fehler darstellt, der beim Lesen der Datei aufgetreten ist.
- {{domxref("FileReader.readyState")}} {{ReadOnlyInline}}

  - : Eine Zahl, die den Zustand des `FileReader` angibt. Dies ist einer der folgenden:

    | Name      | Wert | Beschreibung                                      |
    | --------- | ---- | ------------------------------------------------- |
    | `EMPTY`   | `0`  | Es wurden noch keine Daten geladen.               |
    | `LOADING` | `1`  | Daten werden derzeit geladen.                     |
    | `DONE`    | `2`  | Der gesamte Lesevorgang wurde abgeschlossen.      |

- {{domxref("FileReader.result")}} {{ReadOnlyInline}}
  - : Der Inhalt der Datei. Diese Eigenschaft ist nur gültig, nachdem der Lesevorgang abgeschlossen ist, und das Format der Daten hängt davon ab, welche der Methoden verwendet wurde, um den Lesevorgang zu starten.

## Instanz-Methoden

- {{domxref("FileReader.abort()")}}
  - : Bricht den Lesevorgang ab. Nach der Rückkehr wird `readyState` `DONE` sein.
- {{domxref("FileReader.readAsArrayBuffer()")}}
  - : Beginnt mit dem Lesen des Inhalts des angegebenen {{domxref("Blob")}}, nach Abschluss enthält das `result` Attribut einen {{jsxref("ArrayBuffer")}}, der die Daten der Datei darstellt.
- {{domxref("FileReader.readAsBinaryString()")}} {{deprecated_inline}}
  - : Beginnt mit dem Lesen des Inhalts des angegebenen {{domxref("Blob")}}, nach Abschluss enthält das `result` Attribut die rohen Binärdaten der Datei als String.
- {{domxref("FileReader.readAsDataURL()")}}
  - : Beginnt mit dem Lesen des Inhalts des angegebenen {{domxref("Blob")}}, nach Abschluss enthält das `result` Attribut eine `data:` URL, die die Daten der Datei darstellt.
- {{domxref("FileReader.readAsText()")}}
  - : Beginnt mit dem Lesen des Inhalts des angegebenen {{domxref("Blob")}}, nach Abschluss enthält das `result` Attribut den Textinhalt der Datei als String. Es kann ein optionaler Kodierungsname angegeben werden.

## Ereignisse

Hören Sie diese Ereignisse mit {{domxref("EventTarget/addEventListener", "addEventListener()")}} oder durch Zuweisen eines Ereignis-Listeners an die `oneventname` Eigenschaft dieses Interfaces. Entfernen Sie die Ereignis-Listener mit {{domxref("EventTarget.removeEventListener", "removeEventListener()")}}, sobald `FileReader` nicht mehr verwendet wird, um Speicherlecks zu vermeiden.

- {{domxref("FileReader/abort_event", "abort")}}
  - : Wird ausgelöst, wenn ein Lesevorgang abgebrochen wurde, zum Beispiel, weil das Programm {{domxref("FileReader.abort()")}} aufgerufen hat.
- {{domxref("FileReader/error_event", "error")}}
  - : Wird ausgelöst, wenn das Lesen aufgrund eines Fehlers fehlschlägt.
- {{domxref("FileReader/load_event", "load")}}
  - : Wird ausgelöst, wenn ein Lesevorgang erfolgreich abgeschlossen wurde.
- {{domxref("FileReader/loadend_event", "loadend")}}
  - : Wird ausgelöst, wenn ein Lesevorgang abgeschlossen wurde, ob erfolgreich oder nicht.
- {{domxref("FileReader/loadstart_event", "loadstart")}}
  - : Wird ausgelöst, wenn ein Lesevorgang gestartet wurde.
- {{domxref("FileReader/progress_event", "progress")}}
  - : Wird periodisch während des Lesens von Daten ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- {{domxref("File")}}
- {{domxref("Blob")}}
- {{domxref("FileReaderSync")}}
