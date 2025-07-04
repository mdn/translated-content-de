---
title: "FileSystemFileHandle: createWritable() Methode"
short-title: createWritable()
slug: Web/API/FileSystemFileHandle/createWritable
l10n:
  sourceCommit: ac7a39584dc77b42aac19473cc522bbedbf13717
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`createWritable()`** Methode der [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) Schnittstelle erstellt einen [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream), der zum Schreiben in eine Datei verwendet werden kann.
Die Methode gibt ein {{jsxref('Promise')}} zurück, das auf diesen erstellten Stream aufgelöst wird.

Jegliche Änderungen, die über den Stream vorgenommen werden, werden erst dann in der Datei, die vom Dateihandle repräsentiert wird, sichtbar, wenn der Stream geschlossen wurde.
Dies wird typischerweise implementiert, indem Daten in eine temporäre Datei geschrieben werden, und die von Dateihandle repräsentierte Datei nur durch die temporäre Datei ersetzt wird, wenn der beschreibbare Dateistream geschlossen ist.

## Syntax

```js-nolint
createWritable()
createWritable(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `keepExistingData` {{optional_inline}}
      - : Ein {{jsxref('Boolean')}}. Standardmäßig `false`.
        Wenn `true` gesetzt ist und die Datei existiert, wird die bestehende Datei zuerst in die temporäre Datei kopiert.
        Andernfalls beginnt die temporäre Datei leer.
    - `mode` {{optional_inline}} {{non-standard_inline}}
      - : Ein String, der den Sperrmodus für den beschreibbaren Dateistream angibt. Der Standardwert ist `"siloed"`.
        Mögliche Werte sind:
        - `"exclusive"`
          - : Nur ein `FileSystemWritableFileStream`-Schreiber kann geöffnet werden. Der Versuch, weitere Schreiber zu öffnen, bevor der erste Schreiber geschlossen ist, führt zu einer `NoModificationAllowedError` Ausnahme.
        - `"siloed"`
          - : Mehrere `FileSystemWritableFileStream`-Schreiber können gleichzeitig geöffnet werden, jeder mit einer eigenen Swap-Datei, zum Beispiel wenn dieselbe App in mehreren Tabs verwendet wird. Der zuletzt geöffnete Schreiber hat seine Daten geschrieben, da die Daten beim Schließen jedes Schreibers übertragen werden.

### Rückgabewert

Ein {{jsxref('Promise')}} das sich zu einem [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream) Objekt auflöst.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für das Handle nicht `'granted'` im `readwrite` Modus ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser das Sperren der Datei, die mit dem Dateihandle verbunden ist, nicht erreichen kann. Dies könnte passieren, weil `mode` auf `exclusive` gesetzt ist und der Versuch unternommen wird, mehrere Schreiber gleichzeitig zu öffnen.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn implementierungsdefinierte Malware-Scans und sichere Browserüberprüfungen fehlschlagen.

## Beispiele

### Grundlegende Nutzung

Die folgende asynchrone Funktion schreibt den angegebenen Inhalt in das Dateihandle und somit auf die Festplatte.

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

### Erweiterte Nutzung mit Optionen

Unser Beispiel [für den `createWritable()`-Modus](https://mdn.github.io/dom-examples/file-system-api/createwritable-mode/) (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/file-system-api/createwritable-mode)) bietet ein {{htmlelement("button")}}, um eine Datei auszuwählen, in die geschrieben werden soll, ein Text{{htmlelement("input")}}-Feld, in das Sie Text zum Schreiben in die Datei eingeben können, und einen zweiten `<button>`, um den Text in die Datei zu schreiben.

Im obigen Demo versuchen Sie, eine Textdatei in Ihrem Dateisystem auszuwählen (oder einen neuen Dateinamen einzugeben), Text in das Eingabefeld einzugeben und den Text in die Datei zu schreiben. Öffnen Sie die Datei in Ihrem Dateisystem, um zu überprüfen, ob das Schreiben erfolgreich war.

Versuchen Sie auch, die Seite gleichzeitig in zwei Browser-Tabs zu öffnen. Wählen Sie eine Datei im ersten Tab aus, und versuchen Sie dann sofort, dieselbe Datei im zweiten Tab auszuwählen. Sie sollten eine Fehlermeldung erhalten, da wir `mode: "exclusive"` im `createWritable()`-Aufruf eingestellt haben.

Im Folgenden werden wir den Code erkunden.

#### HTML

Die beiden {{htmlelement("button")}}-Elemente und das Text{{htmlelement("input")}}-Feld sehen folgendermaßen aus:

```html
<ol>
  <li>
    Select a file to write to: <button class="select">Select file</button>
  </li>
  <li>
    <label for="file-text">Enter text to write to the file:</label>
    <input type="text" id="file-text" name="file-text" disabled />
  </li>
  <li>
    Write your text to the file:
    <button class="write" disabled>Write text</button>
  </li>
</ol>
```

Das Text-Eingabefeld und der Schreibtext-Button sind anfänglich über das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) Attribut deaktiviert gesetzt - sie sollten nicht verwendet werden, bis der Benutzer eine Datei zum Schreiben ausgewählt hat.

```css hidden
li {
  margin-bottom: 10px;
}
```

#### JavaScript

Wir beginnen damit, Referenzen auf den Auswahldatei-Button, den Schreibtext-Button und das Text-Eingabefeld zu erfassen. Wir deklarieren auch eine globale Variable `writableStream`, die eine Referenz auf den beschreibbaren Stream speichern wird, um den Text in die Datei zu schreiben, sobald er erstellt wurde. Wir setzen ihn anfänglich auf `null`.

```js
const selectBtn = document.querySelector(".select");
const writeBtn = document.querySelector(".write");
const fileText = document.querySelector("#file-text");

let writableStream = null;
```

Als nächstes erstellen wir eine asynchrone Funktion namens `selectFile()`, die wir aufrufen, wenn der Auswahl-Button gedrückt wird. Diese verwendet die Methode [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker), um dem Benutzer einen Dateiauswahldialog anzuzeigen und ein Dateihandles für die von ihm gewählte Datei zu erstellen. Auf diesem Handle rufen wir die `createWritable()`-Methode auf, um einen Stream zu erstellen, der den Text in die ausgewählte Datei schreibt. Wenn der Aufruf fehlschlägt, protokollieren wir einen Fehler in der Konsole.

Wir übergeben `createWritable()` ein Optionen-Objekt mit den folgenden Optionen:

- `keepExistingData: true`: Wenn die ausgewählte Datei bereits existiert, werden die darin enthaltenen Daten in die temporäre Datei kopiert, bevor das Schreiben beginnt.
- `mode: "exclusive"`: Gibt an, dass nur ein Schreiber gleichzeitig auf das Dateihandle geöffnet sein kann. Wenn ein zweiter Benutzer das Beispiel lädt und versucht, eine Datei auszuwählen, erhält er einen Fehler.

Zuletzt aktivieren wir das Eingabefeld und den Schreibtext-Button, da diese für den nächsten Schritt benötigt werden, und deaktivieren den Auswahldatei-Button (dieser wird momentan nicht benötigt).

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

Unsere nächste Funktion, `writeFile()`, schreibt den in das Eingabefeld eingegebenen Text in die ausgewählte Datei, indem sie [`FileSystemWritableFileStream.write()`](/de/docs/Web/API/FileSystemWritableFileStream/write) verwendet, und leert dann das Eingabefeld. Wir schließen dann den beschreibbaren Stream mithilfe von [`WritableStream.close()`](/de/docs/Web/API/WritableStream/close) und setzen das Demo zurück, damit es erneut ausgeführt werden kann — die `disabled`-Zustände der Steuerelemente werden auf ihre ursprünglichen Zustände zurückgesetzt, und die `writableStream`-Variable wird auf `null` zurückgesetzt.

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

Um das Demo zum Laufen zu bringen, setzen wir Ereignislistener auf die Buttons, sodass die relevante Funktion ausgeführt wird, wenn jeder von ihnen angeklickt wird.

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
