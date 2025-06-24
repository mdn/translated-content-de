---
title: "FileSystemFileHandle: createWritable() Methode"
short-title: createWritable()
slug: Web/API/FileSystemFileHandle/createWritable
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`createWritable()`** Methode der [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) Schnittstelle erstellt einen [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream), der verwendet werden kann, um in eine Datei zu schreiben. Die Methode gibt ein {{jsxref('Promise')}} zurück, das sich zu diesem erstellten Stream auflöst.

Jegliche Änderungen, die über den Stream vorgenommen werden, werden nicht in der Datei widergespiegelt, die durch den Dateihandle dargestellt wird, bis der Stream geschlossen wurde. Dies wird typischerweise implementiert, indem Daten in eine temporäre Datei geschrieben werden, und die Datei, die durch den Dateihandle repräsentiert wird, erst durch die temporäre Datei ersetzt wird, wenn der schreibfähige Dateistream geschlossen ist.

## Syntax

```js-nolint
createWritable()
createWritable(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `keepExistingData` {{optional_inline}}
      - : Ein {{jsxref('Boolean')}}. Standardwert ist `false`.
        Wenn auf `true` gesetzt, wird, falls die Datei existiert, die bestehende Datei zuerst in die temporäre Datei kopiert.
        Andernfalls ist die temporäre Datei zu Beginn leer.
    - `mode` {{optional_inline}} {{non-standard_inline}}
      - : Ein String, der den Sperrmodus für den schreibfähigen Dateistream angibt. Der Standardwert ist `"siloed"`.
        Mögliche Werte sind:
        - `"exclusive"`
          - : Nur ein `FileSystemWritableFileStream` Schreiber kann geöffnet werden. Der Versuch, nachfolgende Schreiber zu öffnen, bevor der erste Schreiber geschlossen ist, führt zu einer `NoModificationAllowedError` Ausnahme.
        - `"siloed"`
          - : Mehrere `FileSystemWritableFileStream` Schreiber können gleichzeitig geöffnet werden, jeder mit seiner eigenen Swap-Datei, zum Beispiel wenn dieselbe App in mehreren Tabs verwendet wird. Der zuletzt geöffnete Schreiber hat seine Daten geschrieben, da die Daten gespült werden, wenn jeder Schreiber geschlossen wird.

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich zu einem [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream) Objekt auflöst.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für den Handle im `readwrite` Modus nicht `'granted'` ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser nicht in der Lage ist, eine Sperre für die Datei zu erwerben, die mit dem Dateihandle verknüpft ist. Dies könnte geschehen, weil `mode` auf `exclusive` gesetzt ist und versucht wird, mehrere Schreiber gleichzeitig zu öffnen.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn implementation-definierte Malware-Scans und Safe-Browsing-Überprüfungen fehlschlagen.

## Beispiele

### Grundlegende Verwendung

Die folgende asynchrone Funktion schreibt die angegebenen Inhalte in den Dateihandle und somit auf die Festplatte.

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

Unser [Beispiel zum Testen des `createWritable()` Modus](https://createwritable-mode-test.glitch.me/) bietet einen {{htmlelement("button")}}, um eine Datei auszuwählen, in die geschrieben werden soll, ein Textfeld {{htmlelement("input")}}, in das Sie Text eingeben können, der in die Datei geschrieben werden soll, und einen zweiten `<button>`, um den Text in die Datei zu schreiben.

Versuchen Sie im obigen Demo, eine Textdatei auf Ihrem Dateisystem auszuwählen (oder einen neuen Dateinamen einzugeben), Text in das Eingabefeld einzugeben und den Text in die Datei zu schreiben. Öffnen Sie die Datei auf Ihrem Dateisystem, um zu überprüfen, ob das Schreiben erfolgreich war.

Versuchen Sie auch, die Seite gleichzeitig in zwei Browser-Tabs zu öffnen. Wählen Sie im ersten Tab eine Datei zum Schreiben aus, und versuchen Sie dann sofort, dieselbe Datei im zweiten Tab auszuwählen. Sie sollten eine Fehlermeldung erhalten, weil wir `mode: "exclusive"` in dem `createWritable()` Aufruf gesetzt haben.

Im Folgenden werden wir den Code untersuchen.

#### HTML

Die beiden {{htmlelement("button")}} Elemente und das Textfeld {{htmlelement("input")}} sehen wie folgt aus:

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

Das Texteingabefeld und der Schreibtext-Button sind anfangs über das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) Attribut deaktiviert — sie sollten erst verwendet werden, nachdem der Benutzer eine Datei zum Schreiben ausgewählt hat.

```css hidden
li {
  margin-bottom: 10px;
}
```

#### JavaScript

Wir beginnen damit, Verweise auf den Datei-Auswahl-Button, den Schreibtext-Button und das Texteingabefeld zu erfassen. Wir deklarieren auch eine globale Variable `writableStream`, die einen Verweis auf den schreibfähigen Stream speichert, um den Text in die Datei zu schreiben, sobald er erstellt wurde. Zunächst setzen wir sie auf `null`.

```js
const selectBtn = document.querySelector(".select");
const writeBtn = document.querySelector(".write");
const fileText = document.querySelector("#file-text");

let writableStream = null;
```

Als Nächstes erstellen wir eine asynchrone Funktion namens `selectFile()`, die wir aufrufen, wenn der Auswahl-Button gedrückt wird. Diese verwendet die Methode [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker), um dem Benutzer einen Dateiauswahldialog anzuzeigen und einen Dateihandle für die von ihm gewählte Datei zu erstellen. Auf diesem Handle rufen wir die `createWritable()` Methode auf, um einen Stream zu erstellen, der den Text in die ausgewählte Datei schreibt. Wenn der Aufruf fehlschlägt, protokollieren wir einen Fehler in der Konsole.

Wir übergeben `createWritable()` ein Optionsobjekt mit folgenden Optionen:

- `keepExistingData: true`: Wenn die ausgewählte Datei bereits existiert, werden die darin enthaltenen Daten in die temporäre Datei kopiert, bevor das Schreiben beginnt.
- `mode: "exclusive"`: Gibt an, dass nur ein Schreiber gleichzeitig auf dem Dateihandle geöffnet sein kann. Wenn ein zweiter Benutzer das Beispiel lädt und versucht, eine Datei auszuwählen, erhält er einen Fehler.

Zuletzt aktivieren wir das Eingabefeld und den Schreibtext-Button, da sie für den nächsten Schritt benötigt werden, und deaktivieren den Datei-Auswahl-Button (dies wird derzeit nicht benötigt).

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

Unsere nächste Funktion, `writeFile()`, schreibt den in das Eingabefeld eingegebenen Text in die ausgewählte Datei mittels [`FileSystemWritableFileStream.write()`](/de/docs/Web/API/FileSystemWritableFileStream/write), und leert dann das Eingabefeld. Dann schließen wir den schreibfähigen Stream mit [`WritableStream.close()`](/de/docs/Web/API/WritableStream/close) und setzen die Demo zurück, sodass sie erneut ausgeführt werden kann — die `disabled` Zustände der Steuerelemente werden in ihre ursprünglichen Zustände zurückgesetzt, und die `writableStream` Variable wird wieder auf `null` gesetzt.

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

Um die Demo zum Laufen zu bringen, setzen wir Ereignislistener auf die Buttons, sodass die entsprechende Funktion ausgeführt wird, wenn jeder Button geklickt wird.

```js
selectBtn.addEventListener("click", selectFile);
writeBtn.addEventListener("click", writeFile);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Dateisystem-API](/de/docs/Web/API/File_System_API)
- [Die File System Access API: Zugriff auf lokale Dateien vereinfachen](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
