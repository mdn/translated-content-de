---
title: FileReader
slug: Web/API/FileReader
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`FileReader`**-Schnittstelle ermöglicht es Webanwendungen, den Inhalt von Dateien (oder Rohdatenpuffern), die auf dem Computer des Benutzers gespeichert sind, asynchron zu lesen. Es werden [`File`](/de/docs/Web/API/File) oder [`Blob`](/de/docs/Web/API/Blob) Objekte verwendet, um die zu lesende Datei oder die Daten anzugeben.

Dateiobjekte können aus einem [`FileList`](/de/docs/Web/API/FileList) Objekt gewonnen werden, das als Ergebnis der Datei-Auswahl durch den Benutzer über das {{HTMLElement("input")}}-Element oder durch ein Drag-and-Drop-Verfahren des [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekts zurückgegeben wird.

`FileReader` kann nur auf den Inhalt von Dateien zugreifen, die der Benutzer ausdrücklich ausgewählt hat, entweder durch ein HTML `<input type="file">`-Element oder durch Drag-and-Drop. Es kann nicht verwendet werden, um eine Datei durch Pfadnamen aus dem Dateisystem des Benutzers zu lesen. Um Dateien auf dem Client-Dateisystem durch Pfadnamen zu lesen, verwenden Sie die [File System Access API](/de/docs/Web/API/File_System_API). Um serverseitige Dateien zu lesen, verwenden Sie [`fetch()`](/de/docs/Web/API/Window/fetch), mit [CORS](/de/docs/Web/HTTP/CORS)-Berechtigung, wenn domainübergreifend gelesen wird.

{{InheritanceDiagram}}

## Konstruktor

- [`FileReader()`](/de/docs/Web/API/FileReader/FileReader)
  - : Gibt ein neues `FileReader`-Objekt zurück.

Siehe [Verwendung von Dateien in Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) für Details und Beispiele.

## Instanz-Eigenschaften

- [`FileReader.error`](/de/docs/Web/API/FileReader/error) {{ReadOnlyInline}}
  - : Ein [`DOMException`](/de/docs/Web/API/DOMException), der den Fehler darstellt, der beim Lesen der Datei aufgetreten ist.
- [`FileReader.readyState`](/de/docs/Web/API/FileReader/readyState) {{ReadOnlyInline}}

  - : Eine Zahl, die den Zustand des `FileReader` anzeigt. Dies ist eine der folgenden:

    | Name      | Wert | Beschreibung                                 |
    | --------- | ---- | -------------------------------------------- |
    | `EMPTY`   | `0`  | Noch keine Daten geladen.                    |
    | `LOADING` | `1`  | Daten werden momentan geladen.               |
    | `DONE`    | `2`  | Der gesamte Lesevorgang wurde abgeschlossen. |

- [`FileReader.result`](/de/docs/Web/API/FileReader/result) {{ReadOnlyInline}}
  - : Der Inhalt der Datei. Diese Eigenschaft ist nur gültig, nachdem der Lesevorgang abgeschlossen ist und das Format der Daten hängt davon ab, welche der Methoden verwendet wurde, um den Lesevorgang zu starten.

## Instanz-Methoden

- [`FileReader.abort()`](/de/docs/Web/API/FileReader/abort)
  - : Bricht den Lesevorgang ab. Nach dem Aufruf wird `readyState` `DONE` sein.
- [`FileReader.readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer)
  - : Beginnt mit dem Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob). Nach Abschluss enthält das `result`-Attribut ein {{jsxref("ArrayBuffer")}}, das die Daten der Datei darstellt.
- [`FileReader.readAsBinaryString()`](/de/docs/Web/API/FileReader/readAsBinaryString) {{deprecated_inline}}
  - : Beginnt mit dem Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob). Nach Abschluss enthält das `result`-Attribut die rohen Binärdaten der Datei als String.
- [`FileReader.readAsDataURL()`](/de/docs/Web/API/FileReader/readAsDataURL)
  - : Beginnt mit dem Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob). Nach Abschluss enthält das `result`-Attribut eine `data:`-URL, die die Daten der Datei darstellt.
- [`FileReader.readAsText()`](/de/docs/Web/API/FileReader/readAsText)
  - : Beginnt mit dem Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob). Nach Abschluss enthält das `result`-Attribut den Inhalt der Datei als Text-String. Ein optionaler Codierungsname kann angegeben werden.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignislistener auf die `oneventname`-Eigenschaft dieser Schnittstelle zuweisen. Entfernen Sie die Ereignislistener mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener), sobald `FileReader` nicht mehr verwendet wird, um Speicherlecks zu vermeiden.

- [`abort`](/de/docs/Web/API/FileReader/abort_event)
  - : Wird ausgelöst, wenn ein Lesevorgang abgebrochen wurde, z. B. weil das Programm [`FileReader.abort()`](/de/docs/Web/API/FileReader/abort) aufgerufen hat.
- [`error`](/de/docs/Web/API/FileReader/error_event)
  - : Wird ausgelöst, wenn das Lesen aufgrund eines Fehlers fehlgeschlagen ist.
- [`load`](/de/docs/Web/API/FileReader/load_event)
  - : Wird ausgelöst, wenn das Lesen erfolgreich abgeschlossen wurde.
- [`loadend`](/de/docs/Web/API/FileReader/loadend_event)
  - : Wird ausgelöst, wenn ein Lesevorgang abgeschlossen ist, unabhängig davon, ob er erfolgreich war oder nicht.
- [`loadstart`](/de/docs/Web/API/FileReader/loadstart_event)
  - : Wird ausgelöst, wenn ein Lesevorgang begonnen hat.
- [`progress`](/de/docs/Web/API/FileReader/progress_event)
  - : Wird regelmäßig ausgelöst, während Daten gelesen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien in Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [`File`](/de/docs/Web/API/File)
- [`Blob`](/de/docs/Web/API/Blob)
- [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)
