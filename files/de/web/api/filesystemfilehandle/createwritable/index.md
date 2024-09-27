---
title: "FileSystemFileHandle: Methode createWritable()"
short-title: createWritable()
slug: Web/API/FileSystemFileHandle/createWritable
l10n:
  sourceCommit: 1a7695e13c51d85a81e3e5d85feedbc5dbd2a379
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die Methode **`createWritable()`** der Schnittstelle [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) erstellt einen [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream), der zum Schreiben in eine Datei verwendet werden kann. Die Methode gibt ein {{jsxref('Promise')}} zurück, das sich zu diesem erstellten Stream auflöst.

Änderungen, die über den Stream vorgenommen werden, werden erst dann in der Datei, die durch das Datei-Handle repräsentiert wird, sichtbar, wenn der Stream geschlossen wurde. Dies wird typischerweise implementiert, indem Daten in eine temporäre Datei geschrieben werden und nur die durch das Datei-Handle repräsentierte Datei durch die temporäre Datei ersetzt wird, wenn der beschreibbare Datenstrom geschlossen wird.

## Syntax

```js-nolint
createWritable()
createWritable(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `keepExistingData` {{optional_inline}}
      - : Ein {{jsxref('Boolean')}}. Standardwert `false`.
        Wenn auf `true` gesetzt, wird die vorhandene Datei, falls sie existiert, zuerst in die temporäre Datei kopiert.
        Andernfalls beginnt die temporäre Datei leer.
    - `mode` {{optional_inline}} {{non-standard_inline}}
      - : Ein String, der den Sperrmodus für den beschreibbaren Datenstrom angibt. Der Standardwert ist `"siloed"`.
        Mögliche Werte sind:
        - `"exclusive"`
          - : Nur ein `FileSystemWritableFileStream`-Schreiber kann geöffnet werden. Der Versuch, weitere Schreiber zu öffnen, bevor der erste Schreiber geschlossen wird, führt zu einer `NoModificationAllowedError`-Ausnahme.
        - `"siloed"`
          - : Mehrere `FileSystemWritableFileStream`-Schreiber können gleichzeitig geöffnet werden, jeder mit seiner eigenen Austauschsdatei, zum Beispiel bei Verwendung derselben App in mehreren Tabs. Der zuletzt geöffnete Schreiber hat seine Daten geschrieben, da die Daten beim Schließen jedes Schreibers gesichert werden.

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich zu einem [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)-Objekt auflöst.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für das Handle im `readwrite`-Modus nicht `'granted'` ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keine Sperre für die Datei, die mit dem Datei-Handle verknüpft ist, erhalten kann. Dies könnte der Fall sein, wenn `mode` auf `exclusive` gesetzt ist und versucht wird, mehrere Schreiber gleichzeitig zu öffnen.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn implementierungsdefinierte Malware-Scans und sichere Browsing-Checks fehlschlagen.

## Beispiele

### Grundlegende Verwendung

Die folgende asynchrone Funktion schreibt den angegebenen Inhalt in das Datei-Handle und damit auf die Festplatte.

```js
async function writeFile(fileHandle, contents) {
  // Create a FileSystemWritableFileStream to write to.
  const writable = await fileHandle.createWritable();

  // Write the contents of the file to the stream.
  await writable.write(contents);

  // Close the file and write the contents to disk.
  await writable.close();
}
```

### Erweiterte Verwendung mit Optionen

Unser Beispiel [`createWritable()` mode test](https://createwritable-mode-test.glitch.me/) stellt einen {{htmlelement("button")}} zur Auswahl einer Datei zum Schreiben zur Verfügung, ein Text-{{htmlelement("input")}}-Feld, in das Sie Text zum Schreiben in die Datei eingeben können, und einen zweiten `<button>`, um den Text in die Datei zu schreiben.

In der obigen Demo können Sie versuchen, eine Textdatei auf Ihrem Dateisystem auszuwählen (oder einen neuen Dateinamen einzugeben), Text in das Eingabefeld einzugeben und den Text in die Datei zu schreiben. Öffnen Sie die Datei auf Ihrem Dateisystem, um zu prüfen, ob das Schreiben erfolgreich war.

Versuchen Sie auch, die Seite gleichzeitig in zwei Browser-Tabs zu öffnen. Wählen Sie im ersten Tab eine Datei zum Schreiben aus und versuchen Sie dann sofort, dieselbe Datei im zweiten Tab zum Schreiben auszuwählen. Sie sollten eine Fehlermeldung erhalten, weil wir `mode: "exclusive"` im `createWritable()`-Aufruf gesetzt haben.

Im Folgenden werden wir den Code näher betrachten.

#### HTML

Die zwei {{htmlelement("button")}}-Elemente und das Text-{{htmlelement("input")}}-Feld sehen so aus:

```html
<ol>
  <li>
    Select a file to write to: <button class="select">Select file</button>
  </li>
  <li>
    <label for="filetext">Enter text to write to the file:</label>
    <input type="text" id="filetext" name="filetext" disabled />
  </li>
  <li>
    Write your text to the file:
    <button class="write" disabled>Write text</button>
  </li>
</ol>
```

Das Texteingabefeld und die Schaltfläche zum Schreiben von Text sind anfänglich über das [`disabled`](/de/docs/Web/HTML/Attributes/disabled)-Attribut deaktiviert — sie sollten erst verwendet werden, wenn der Benutzer eine Datei zum Schreiben ausgewählt hat.

```css hidden
li {
  margin-bottom: 10px;
}
```

#### JavaScript

Wir beginnen, indem wir Referenzen für die Schaltfläche zum Auswählen der Datei, die Schaltfläche zum Schreiben von Text und das Text-Eingabefeld abrufen. Wir deklarieren auch eine globale Variable `writableStream`, die eine Referenz auf den beschreibbaren Stream speichern wird, um den Text in die Datei zu schreiben, sobald dieser erstellt ist. Wir setzen ihn anfänglich auf `null`.

```js
const selectBtn = document.querySelector(".select");
const writeBtn = document.querySelector(".write");
const fileText = document.querySelector("#filetext");

let writableStream = null;
```

Als Nächstes erstellen wir eine asynchrone Funktion namens `selectFile()`, die wir aufrufen, wenn die Auswahlschaltfläche gedrückt wird. Diese verwendet die Methode [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker), um dem Benutzer einen Dateiauswahldialog anzuzeigen und ein Datei-Handle für die ausgewählte Datei zu erstellen. Auf diesem Handle rufen wir die Methode `createWritable()` auf, um einen Stream zu erstellen, der den Text in die ausgewählte Datei schreibt. Wenn der Aufruf fehlschlägt, protokollieren wir einen Fehler in die Konsole.

Wir übergeben `createWritable()` ein Optionsobjekt mit den folgenden Optionen:

- `keepExistingData: true`: Wenn die ausgewählte Datei bereits existiert und Daten darin enthalten sind, werden diese vor Beginn des Schreibens in die temporäre Datei kopiert.
- `mode: "exclusive"`: Gibt an, dass nur ein Schreiber gleichzeitig auf dem Datei-Handle geöffnet sein kann. Wenn ein zweiter Benutzer das Beispiel lädt und versucht, eine Datei auszuwählen, erhält er einen Fehler.

Zuletzt aktivieren wir das Eingabefeld und die Schaltfläche zum Schreiben von Text, da sie für den nächsten Schritt benötigt werden, und deaktivieren die Schaltfläche zum Auswählen der Datei (diese wird derzeit nicht benötigt).

```js
async function selectFile() {
  // Create a new handle
  const handle = await window.showSaveFilePicker();

  // Create a FileSystemWritableFileStream to write to
  try {
    writableStream = await handle.createWritable({
      keepExistingData: true,
      mode: "exclusive",
    });
  } catch (e) {
    if (e.name === "NoModificationAllowedError") {
      console.log(
        `You can't access that file right now; someone else is trying to modify it. Try again later.`,
      );
    } else {
      console.log(e.message);
    }
  }

  // Enable text field and write button, disable select button
  fileText.disabled = false;
  writeBtn.disabled = false;
  selectBtn.disabled = true;
}
```

Unsere nächste Funktion, `writeFile()`, schreibt den in das Eingabefeld eingegebenen Text in die ausgewählte Datei mit [`FileSystemWritableFileStream.write()`](/de/docs/Web/API/FileSystemWritableFileStream/write) und leert dann das Eingabefeld. Anschließend schließen wir den beschreibbaren Stream mit [`WritableStream.close()`](/de/docs/Web/API/WritableStream/close) und setzen die Demo zurück, sodass sie erneut ausgeführt werden kann — die `disabled`-Zustände der Steuerungen werden auf ihre ursprünglichen Zustände zurückgesetzt, und die Variable `writableStream` wird wieder auf `null` gesetzt.

```js
async function writeFile() {
  // Write text to our file and empty out the text field
  await writableStream.write(fileText.value);
  fileText.value = "";

  // Close the file and write the contents to disk.
  await writableStream.close();

  // Disable text field and write button, enable select button
  fileText.disabled = true;
  writeBtn.disabled = true;
  selectBtn.disabled = false;

  // Set writableStream back to null
  writableStream = null;
}
```

Um die Demo zum Laufen zu bringen, setzen wir Ereignislistener auf die Schaltflächen, sodass die relevante Funktion ausgeführt wird, wenn jede von ihnen angeklickt wird.

```js
selectBtn.addEventListener("click", selectFile);
writeBtn.addEventListener("click", writeFile);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
