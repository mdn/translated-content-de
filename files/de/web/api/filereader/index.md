---
title: FileReader
slug: Web/API/FileReader
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Das **`FileReader`**-Interface ermöglicht es Webanwendungen, den Inhalt von Dateien (oder Rohdatenpuffern), die auf dem Computer des Benutzers gespeichert sind, asynchron zu lesen. Dafür werden [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekte verwendet, um die Datei oder die zu lesenden Daten anzugeben.

Dateiobjekte können aus einem [`FileList`](/de/docs/Web/API/FileList)-Objekt gewonnen werden, das als Ergebnis einer Benutzerauswahl von Dateien über das {{HTMLElement("input")}}-Element oder aus einem `DataTransfer`-Objekt bei einem Drag-and-Drop-Vorgang zurückgegeben wird.

`FileReader` kann nur auf den Inhalt von Dateien zugreifen, die der Benutzer ausdrücklich ausgewählt hat, entweder über ein HTML-`<input type="file">`-Element oder per Drag-and-Drop. Es kann nicht verwendet werden, um eine Datei über ihren Pfadnamen aus dem Dateisystem des Benutzers zu lesen. Um Dateien im Dateisystem des Clients über den Pfadnamen zu lesen, verwenden Sie die [File System Access API](/de/docs/Web/API/File_System_API). Um serverseitige Dateien zu lesen, verwenden Sie [`fetch()`](/de/docs/Web/API/Window/fetch), mit [CORS](/de/docs/Web/HTTP/CORS)-Berechtigung, wenn Sie plattformübergreifend lesen.

{{InheritanceDiagram}}

## Konstruktor

- [`FileReader()`](/de/docs/Web/API/FileReader/FileReader)
  - : Gibt ein neues `FileReader`-Objekt zurück.

Siehe [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) für Details und Beispiele.

## Instanzeigenschaften

- [`FileReader.error`](/de/docs/Web/API/FileReader/error) {{ReadOnlyInline}}
  - : Ein [`DOMException`](/de/docs/Web/API/DOMException), das den aufgetretenen Fehler beim Lesen der Datei darstellt.
- [`FileReader.readyState`](/de/docs/Web/API/FileReader/readyState) {{ReadOnlyInline}}

  - : Eine Zahl, die den Zustand des `FileReader` angibt. Dies ist einer der folgenden Werte:

    | Name      | Wert | Beschreibung                                    |
    | --------- | ---- | ------------------------------------------------ |
    | `EMPTY`   | `0`  | Es wurden noch keine Daten geladen.              |
    | `LOADING` | `1`  | Daten werden gerade geladen.                     |
    | `DONE`    | `2`  | Der gesamte Lesevorgang wurde abgeschlossen.     |

- [`FileReader.result`](/de/docs/Web/API/FileReader/result) {{ReadOnlyInline}}
  - : Der Inhalt der Datei. Diese Eigenschaft ist nur nach Abschluss der Leseoperation gültig und das Datenformat hängt davon ab, welche Methoden zur Initiierung der Leseoperation verwendet wurden.

## Instanzmethoden

- [`FileReader.abort()`](/de/docs/Web/API/FileReader/abort)
  - : Bricht die Leseoperation ab. Nach der Rückkehr wird `readyState` auf `DONE` gesetzt.
- [`FileReader.readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer)
  - : Beginnt das Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob). Nach Abschluss enthält das `result`-Attribut ein {{jsxref("ArrayBuffer")}}, das die Daten der Datei darstellt.
- [`FileReader.readAsBinaryString()`](/de/docs/Web/API/FileReader/readAsBinaryString) {{deprecated_inline}}
  - : Beginnt das Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob). Nach Abschluss enthält das `result`-Attribut die Roh-Binärdaten der Datei als String.
- [`FileReader.readAsDataURL()`](/de/docs/Web/API/FileReader/readAsDataURL)
  - : Beginnt das Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob). Nach Abschluss enthält das `result`-Attribut eine `data:`-URL, die die Daten der Datei darstellt.
- [`FileReader.readAsText()`](/de/docs/Web/API/FileReader/readAsText)
  - : Beginnt das Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob). Nach Abschluss enthält das `result`-Attribut den Inhalt der Datei als Textstring. Ein optionaler Codierungsname kann angegeben werden.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen. Entfernen Sie die Event-Listener mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener), sobald `FileReader` nicht mehr verwendet wird, um Speicherverluste zu vermeiden.

- [`abort`](/de/docs/Web/API/FileReader/abort_event)
  - : Wird ausgelöst, wenn ein Lesevorgang abgebrochen wurde, zum Beispiel weil das Programm [`FileReader.abort()`](/de/docs/Web/API/FileReader/abort) aufgerufen hat.
- [`error`](/de/docs/Web/API/FileReader/error_event)
  - : Wird ausgelöst, wenn das Lesen aufgrund eines Fehlers fehlgeschlagen ist.
- [`load`](/de/docs/Web/API/FileReader/load_event)
  - : Wird ausgelöst, wenn ein Lesevorgang erfolgreich abgeschlossen wurde.
- [`loadend`](/de/docs/Web/API/FileReader/loadend_event)
  - : Wird ausgelöst, wenn ein Lesevorgang abgeschlossen wurde, unabhängig davon, ob erfolgreich oder nicht.
- [`loadstart`](/de/docs/Web/API/FileReader/loadstart_event)
  - : Wird ausgelöst, wenn ein Lesevorgang gestartet wurde.
- [`progress`](/de/docs/Web/API/FileReader/progress_event)
  - : Wird regelmäßig ausgelöst, während Daten gelesen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [`File`](/de/docs/Web/API/File)
- [`Blob`](/de/docs/Web/API/Blob)
- [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)
