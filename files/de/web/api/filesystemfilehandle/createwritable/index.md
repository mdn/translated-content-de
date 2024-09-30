---
title: "FileSystemFileHandle: createWritable()-Methode"
short-title: createWritable()
slug: Web/API/FileSystemFileHandle/createWritable
l10n:
  sourceCommit: 1a7695e13c51d85a81e3e5d85feedbc5dbd2a379
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`createWritable()`**-Methode des [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Interfaces erstellt einen [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream), der verwendet werden kann, um in eine Datei zu schreiben.
Die Methode gibt ein {{jsxref('Promise')}} zurück, das sich zu diesem erstellten Stream auflöst.

Änderungen, die durch den Stream gemacht werden, spiegeln sich erst in der Datei wider, die durch den Datei-Handle repräsentiert wird, wenn der Stream geschlossen wurde.
Dies wird typischerweise implementiert, indem Daten in eine temporäre Datei geschrieben werden, und die durch den Datei-Handle repräsentierte Datei erst dann durch die temporäre Datei ersetzt wird, wenn der beschreibbare Dateistream geschlossen ist.

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
        Wird auf `true` gesetzt, falls die Datei existiert, wird die vorhandene Datei zuerst in die temporäre Datei kopiert.
        Andernfalls beginnt die temporäre Datei leer.
    - `mode` {{optional_inline}} {{non-standard_inline}}
      - : Ein String, der den Sperrmodus für den beschreibbaren Dateistream angibt. Der Standardwert ist `"siloed"`.
        Mögliche Werte sind:
        - `"exclusive"`
          - : Nur ein `FileSystemWritableFileStream`-Schreiber kann geöffnet werden. Der Versuch, weitere Schreiber zu öffnen, bevor der erste geschlossen wird, führt zu einer `NoModificationAllowedError`-Exception.
        - `"siloed"`
          - : Mehrere `FileSystemWritableFileStream`-Schreiber können gleichzeitig geöffnet werden, jeder mit seiner eigenen Swapping-Datei, beispielsweise beim Verwenden derselben App in mehreren Tabs. Der zuletzt geöffnete Schreiber hat seine Daten geschrieben, da die Daten gelöscht werden, wenn jeder Schreiber geschlossen wird.

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich zu einem [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)-Objekt auflöst.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für den Handle nicht `'granted'` im `readwrite`-Modus ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keine Sperre auf die Datei, die mit dem Datei-Handle verknüpft ist, erwerben kann. Dies könnte geschehen, weil `mode` auf `exclusive` gesetzt ist und ein Versuch gemacht wird, mehrere Schreiber gleichzeitig zu öffnen.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die implementierungsdefinierten Malware-Scans und Safe-Browsing-Checks fehlschlagen.

## Beispiele

### Grundlegende Verwendung

Die folgende asynchrone Funktion schreibt die gegebenen Inhalte in den Datei-Handle und somit auf die Festplatte.

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

Unser Beispiel [`createWritable()` Modus Test](https://createwritable-mode-test.glitch.me/) stellt einen {{htmlelement("button")}} bereit, um eine Datei zum Beschreiben auszuwählen, ein Textfeld {{htmlelement("input")}}, in das Sie Text zum Beschreiben der Datei eingeben können, und einen zweiten `<button>`, um den Text in die Datei zu schreiben.

Versuchen Sie im obigen Demo, eine Textdatei in Ihrem Dateisystem auszuwählen (oder einen neuen Dateinamen einzugeben), etwas Text in das Eingabefeld einzugeben und den Text in die Datei zu schreiben. Öffnen Sie die Datei in Ihrem Dateisystem, um zu überprüfen, ob das Schreiben erfolgreich war.

Versuchen Sie auch, die Seite gleichzeitig in zwei Browser-Tabs zu öffnen. Wählen Sie eine Datei zum Beschreiben im ersten Tab und versuchen Sie sofort, dieselbe Datei auch im zweiten Tab zum Beschreiben auszuwählen. Sie sollten eine Fehlermeldung erhalten, da wir `mode: "exclusive"` im `createWritable()`-Aufruf festgelegt haben.

Unten erkunden wir den Code.

#### HTML

Die beiden {{htmlelement("button")}}-Elemente und das Textfeld {{htmlelement("input")}} sehen so aus:

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

Das Texteingabefeld und die Schaltfläche zum Schreiben von Text sind zunächst über das [`disabled`](/de/docs/Web/HTML/Attributes/disabled)-Attribut deaktiviert — sie sollten nicht verwendet werden, bis der Benutzer eine Datei zum Beschreiben ausgewählt hat.

```css hidden
li {
  margin-bottom: 10px;
}
```

#### JavaScript

Wir beginnen mit dem Erfassen von Referenzen auf die Datei-Auswählen-Schaltfläche, die Text-Schreiben-Schaltfläche und das Texteingabefeld. Wir deklarieren auch eine globale Variable `writableStream`, die eine Referenz auf den beschreibbaren Strom speichern wird, um den Text in die Datei zu schreiben, sobald erstellt. Wir setzen sie anfänglich auf `null`.

```js
const selectBtn = document.querySelector(".select");
const writeBtn = document.querySelector(".write");
const fileText = document.querySelector("#filetext");

let writableStream = null;
```

Als nächstes erstellen wir eine asynchrone Funktion namens `selectFile()`, die wir aufrufen, wenn die Auswählen-Schaltfläche gedrückt wird. Diese Methode verwendet die [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)-Methode, um dem Benutzer einen Dateiauswahldialog anzuzeigen und einen Datei-Handle für die ausgewählte Datei zu erstellen. Auf diesem Handle rufen wir die `createWritable()`-Methode auf, um einen Stream zum Beschreiben des Textes in die ausgewählte Datei zu erstellen. Wenn der Aufruf fehlschlägt, protokollieren wir einen Fehler in der Konsole.

Wir übergeben `createWritable()` ein Optionsobjekt, das die folgenden Optionen enthält:

- `keepExistingData: true`: Wenn die ausgewählte Datei bereits existiert, und Daten darin werden in die temporäre Datei kopiert, bevor mit dem Schreiben begonnen wird.
- `mode: "exclusive"`: Gibt an, dass nur ein Schreiber gleichzeitig auf dem Datei-Handle geöffnet werden kann. Wenn ein zweiter Benutzer das Beispiel lädt und versucht, eine Datei auszuwählen, wird er eine Fehlermeldung erhalten.

Zuletzt aktivieren wir das Eingabefeld und die Text-Schreiben-Schaltfläche, da sie für den nächsten Schritt benötigt werden, und deaktivieren die Datei-Wählen-Schaltfläche (derzeit nicht benötigt).

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

Unsere nächste Funktion, `writeFile()`, schreibt den im Eingabefeld eingegebenen Text in die ausgewählte Datei unter Verwendung von [`FileSystemWritableFileStream.write()`](/de/docs/Web/API/FileSystemWritableFileStream/write) und leert dann das Eingabefeld. Anschließend schließen wir den beschreibbaren Stream mittels [`WritableStream.close()`](/de/docs/Web/API/WritableStream/close) und setzen das Demo zurück, sodass sie erneut ausgeführt werden kann — die `disabled`-Zustände der Bedienelemente werden auf ihre ursprünglichen Zustände zurückgesetzt, und die `writableStream`-Variable wird zurück auf `null` gesetzt.

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

Um das Demo zu starten, setzen wir Ereignislistener auf die Schaltflächen, sodass die entsprechende Funktion ausgeführt wird, wenn jede angeklickt wird.

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
