---
title: "FileSystemFileHandle: Methode createWritable()"
short-title: createWritable()
slug: Web/API/FileSystemFileHandle/createWritable
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`createWritable()`**-Methode der [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Schnittstelle erzeugt einen [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream), der zum Schreiben in eine Datei verwendet werden kann. Die Methode gibt ein {{jsxref('Promise')}} zurück, das zu diesem erstellten Stream aufgelöst wird.

Änderungen, die über den Stream vorgenommen werden, werden in der durch den File-Handle vertretenen Datei erst sichtbar, wenn der Stream geschlossen wurde. Dies wird typischerweise implementiert, indem Daten in eine temporäre Datei geschrieben werden, und erst wenn der schreibbare Dateistream geschlossen wird, wird die durch den File-Handle vertretene Datei durch die temporäre Datei ersetzt.

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
        Wenn auf `true` gesetzt, wird, falls die Datei existiert, die bestehende Datei zunächst in die temporäre Datei kopiert. Andernfalls beginnt die temporäre Datei leer.
    - `mode` {{optional_inline}} {{non-standard_inline}}
      - : Eine Zeichenkette, die den Sperrmodus für den schreibbaren Dateistream angibt. Der Standardwert ist `"siloed"`.
        Mögliche Werte sind:
        - `"exclusive"`
          - : Es kann nur ein `FileSystemWritableFileStream`-Schreiber geöffnet werden. Der Versuch, nachfolgende Schreiber zu öffnen, bevor der erste Schreiber geschlossen ist, führt zu einer `NoModificationAllowedError`-Ausnahme.
        - `"siloed"`
          - : Mehrere `FileSystemWritableFileStream`-Schreiber können gleichzeitig geöffnet werden, jeder mit seiner eigenen Swap-Datei, beispielsweise wenn dieselbe App in mehreren Tabs verwendet wird. Der zuletzt eröffnete Schreiber hat seine Daten geschrieben, da die Daten bei jedem Schließen eines Schreibers geflutet werden.

### Rückgabewert

Ein {{jsxref('Promise')}}, das zu einem [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)-Objekt aufgelöst wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für den Handle nicht `'granted'` im `readwrite`-Modus ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser nicht in der Lage ist, eine Sperre auf die dem File-Handle zugeordnete Datei zu erlangen. Dies könnte daran liegen, dass `mode` auf `exclusive` gesetzt ist und ein Versuch unternommen wird, mehrere Schreiber gleichzeitig zu öffnen.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn benutzerdefinierte Malware-Scans und Sicherheitsbrowser-Überprüfungen fehlschlagen.

## Beispiele

### Grundlegende Verwendung

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

### Erweiterte Verwendung mit Optionen

Unser Beispiel [`createWritable()` mode test](https://createwritable-mode-test.glitch.me/) bietet einen {{htmlelement("button")}}, um eine Datei zum Schreiben auszuwählen, ein Text-{{htmlelement("input")}}-Feld, in das Sie einen Text zum Schreiben in die Datei eingeben können, und einen zweiten `<button>`, um den Text in die Datei zu schreiben.

Im obigen Demo-Vorgang probieren Sie aus, eine Textdatei auf Ihrem Dateisystem auszuwählen (oder einen neuen Dateinamen einzugeben), einen Text in das Eingabefeld einzugeben und den Text in die Datei zu schreiben. Öffnen Sie die Datei auf Ihrem Dateisystem, um zu überprüfen, ob das Schreiben erfolgreich war.

Öffnen Sie auch die Seite gleichzeitig in zwei Browser-Tabs. Wählen Sie eine Datei zum Schreiben im ersten Tab aus und versuchen Sie dann sofort, dieselbe Datei im zweiten Tab zum Schreiben auszuwählen. Sie sollten eine Fehlermeldung erhalten, da wir `mode: "exclusive"` im `createWritable()`-Aufruf eingestellt haben.

Nachfolgend werden wir den Code erkunden.

#### HTML

Die zwei {{htmlelement("button")}}-Elemente und das Text-{{htmlelement("input")}}-Feld sehen folgendermaßen aus:

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

Das Texteingabefeld und der Schreibtext-Button sind anfänglich über das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-Attribut deaktiviert — sie sollen nicht verwendet werden, bis der Benutzer eine Datei zum Schreiben ausgewählt hat.

```css hidden
li {
  margin-bottom: 10px;
}
```

#### JavaScript

Wir beginnen mit dem Erfassen von Referenzen auf den Dateiauswahl-Button, den Schreibtext-Button und das Texteingabefeld. Wir deklarieren auch eine globale Variable `writableStream`, die eine Referenz auf den schreibbaren Stream speichern wird, um den Text in die Datei zu schreiben, sobald dieser erstellt wurde. Wir setzen ihn zunächst auf `null`.

```js
const selectBtn = document.querySelector(".select");
const writeBtn = document.querySelector(".write");
const fileText = document.querySelector("#file-text");

let writableStream = null;
```

Als nächstes erstellen wir eine asynchrone Funktion namens `selectFile()`, die wir aufrufen, wenn der Auswahl-Button gedrückt wird. Diese verwendet die [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)-Methode, um dem Benutzer einen Dateiauswahldialog anzuzeigen und ein Dateihandle für die von ihm gewählte Datei zu erstellen. An diesem Handle rufen wir die `createWritable()`-Methode auf, um einen Stream zu erstellen, um den Text in die ausgewählte Datei zu schreiben. Sollte der Aufruf fehlschlagen, protokollieren wir einen Fehler in der Konsole.

Wir übergeben `createWritable()` ein Optionsobjekt, das die folgenden Optionen enthält:

- `keepExistingData: true`: Wenn die ausgewählte Datei bereits existiert, werden die darin enthaltenen Daten vor Beginn des Schreibens in die temporäre Datei kopiert.
- `mode: "exclusive"`: Gibt an, dass nur ein Schreiber gleichzeitig auf das Dateihandle geöffnet sein kann. Wenn ein zweiter Benutzer das Beispiel lädt und versucht, eine Datei auszuwählen, erhält er eine Fehlermeldung.

Zuletzt aktivieren wir das Eingabefeld und den Schreibtext-Button, da diese für den nächsten Schritt benötigt werden, und deaktivieren den Dateiauswahl-Button (dies wird derzeit nicht benötigt).

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

Unsere nächste Funktion, `writeFile()`, schreibt den in das Eingabefeld eingegebenen Text mithilfe von [`FileSystemWritableFileStream.write()`](/de/docs/Web/API/FileSystemWritableFileStream/write) in die ausgewählte Datei und leert dann das Eingabefeld. Anschließend schließen wir den schreibbaren Stream mit [`WritableStream.close()`](/de/docs/Web/API/WritableStream/close) und setzen das Demo zurück, sodass es erneut ausgeführt werden kann — die `disabled`-Zustände der Steuerelemente werden auf ihre ursprünglichen Zustände zurückgeschaltet und die Variable `writableStream` wird wieder auf `null` gesetzt.

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

Um das Demo zum Laufen zu bringen, setzen wir Ereignis-Listener an den Buttons, sodass die entsprechende Funktion ausgeführt wird, wenn jeder von ihnen angeklickt wird.

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
