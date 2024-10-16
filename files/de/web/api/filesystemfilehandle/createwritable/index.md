---
title: "FileSystemFileHandle: createWritable() Methode"
short-title: createWritable()
slug: Web/API/FileSystemFileHandle/createWritable
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`createWritable()`**-Methode der [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Schnittstelle erstellt einen [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream), der verwendet werden kann, um in eine Datei zu schreiben. Die Methode gibt ein {{jsxref('Promise')}} zurück, das sich zu diesem erstellten Stream auflöst.

Änderungen, die über den Stream vorgenommen werden, spiegeln sich erst in der Datei wider, die durch den Dateihandle repräsentiert wird, wenn der Stream geschlossen wurde. Dies wird typischerweise dadurch implementiert, dass Daten in eine temporäre Datei geschrieben werden, und die Datei, die durch den Dateihandle repräsentiert wird, nur durch die temporäre Datei ersetzt wird, wenn der beschreibbare Dateistream geschlossen wird.

## Syntax

```js-nolint
createWritable()
createWritable(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit folgenden Eigenschaften:

    - `keepExistingData` {{optional_inline}}
      - : Ein {{jsxref('Boolean')}}. Standard `false`.
        Wenn auf `true` gesetzt, wird die existierende Datei, falls vorhanden, zuerst in die temporäre Datei kopiert. Ansonsten beginnt die temporäre Datei leer.
    - `mode` {{optional_inline}} {{non-standard_inline}}
      - : Ein String, der den Sperrmodus für den beschreibbaren Dateistream angibt. Der Standardwert ist `"siloed"`.
        Mögliche Werte sind:
        - `"exclusive"`
          - : Nur ein `FileSystemWritableFileStream`-Schreiber kann geöffnet werden. Der Versuch, weitere Schreiber zu öffnen, bevor der erste geschlossen ist, führt zu einer `NoModificationAllowedError`-Ausnahme.
        - `"siloed"`
          - : Mehrere `FileSystemWritableFileStream`-Schreiber können gleichzeitig geöffnet werden, jeder mit seiner eigenen Swap-Datei, zum Beispiel bei der Verwendung derselben App in mehreren Tabs. Der zuletzt geöffnete Schreiber hat seine Daten geschrieben, da die Daten beim Schließen jedes Schreibers gespült werden.

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich zu einem [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)-Objekt auflöst.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für den Handle im `readwrite`-Modus nicht `'granted'` ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keine Sperre für die mit dem Dateihandle verbundene Datei erwerben kann. Dies könnte passieren, weil `mode` auf `exclusive` gesetzt ist und gleichzeitig versucht wird, mehrere Schreiber zu öffnen.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die implementationsspezifischen Malware-Scans und Safe-Browsing-Überprüfungen fehlschlagen.

## Beispiele

### Grundlegende Verwendung

Die folgende asynchrone Funktion schreibt die gegebenen Inhalte in den Dateihandle und damit auf die Festplatte.

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

Unser Beispiel [`createWritable()` modus test](https://createwritable-mode-test.glitch.me/) stellt einen {{htmlelement("button")}} bereit, um eine Datei zum Schreiben auszuwählen, ein Text-{{htmlelement("input")}}-Feld, in das Sie etwas Text eingeben können, um es in die Datei zu schreiben, und einen zweiten `<button>`, um den Text in die Datei zu schreiben.

In der obigen Demo können Sie versuchen, eine Textdatei auf Ihrem Dateisystem auszuwählen (oder einen neuen Dateinamen einzugeben), Text in das Eingabefeld einzugeben und den Text in die Datei zu schreiben. Öffnen Sie die Datei auf Ihrem Dateisystem, um zu überprüfen, ob das Schreiben erfolgreich war.

Außerdem können Sie versuchen, die Seite gleichzeitig in zwei Browsertabs zu öffnen. Wählen Sie im ersten Tab eine Datei zum Schreiben aus und versuchen Sie dann sofort, dieselbe Datei zum Schreiben im zweiten Tab auszuwählen. Sie sollten eine Fehlermeldung erhalten, weil wir `mode: "exclusive"` im `createWritable()`-Aufruf festgelegt haben.

Nachfolgend gehen wir den Code durch.

#### HTML

Die beiden {{htmlelement("button")}}-Elemente und das Text-{{htmlelement("input")}}-Feld sehen wie folgt aus:

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

Das Texteingabefeld und der Schreibtext-Button sind anfangs über das [`disabled`](/de/docs/Web/HTML/Attributes/disabled)-Attribut deaktiviert — sie sollten nicht verwendet werden, bis der Benutzer eine Datei zum Schreiben ausgewählt hat.

```css hidden
li {
  margin-bottom: 10px;
}
```

#### JavaScript

Wir beginnen damit, Referenzen für den Datei-auswählen-Button, den Text-schreiben-Button und das Texteingabefeld zu erstellen. Wir deklarieren auch eine globale Variable `writableStream`, die eine Referenz auf den beschreibbaren Stream zum Schreiben des Textes in die Datei speichern wird, sobald dieser erstellt ist. Wir setzen sie anfangs auf `null`.

```js
const selectBtn = document.querySelector(".select");
const writeBtn = document.querySelector(".write");
const fileText = document.querySelector("#file-text");

let writableStream = null;
```

Als nächstes erstellen wir eine asynchrone Funktion namens `selectFile()`, die wir aufrufen, wenn der Auswählen-Button gedrückt wird. Diese verwendet die Methode [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker), um dem Benutzer einen Dateiauswahldialog anzuzeigen und einen Dateihandle für die von ihm gewählte Datei zu erstellen. An diesem Handle rufen wir die `createWritable()`-Methode auf, um einen Stream zu erstellen, der den Text in die ausgewählte Datei schreibt. Falls der Aufruf fehlschlägt, loggen wir einen Fehler in die Konsole.

Wir übergeben `createWritable()` ein Optionsobjekt mit folgenden Optionen:

- `keepExistingData: true`: Wenn die ausgewählte Datei bereits existiert, werden die darin enthaltenen Daten vor dem Schreiben in die temporäre Datei kopiert.
- `mode: "exclusive"`: Gibt an, dass nur ein Schreiber gleichzeitig an dem Dateihandle geöffnet sein kann. Wenn ein zweiter Benutzer das Beispiel lädt und versucht, eine Datei auszuwählen, erhält er einen Fehler.

Zuletzt aktivieren wir das Eingabefeld und den Text-schreiben-Button, da sie für den nächsten Schritt benötigt werden, und deaktivieren den Datei-auswählen-Button (dies ist derzeit nicht erforderlich).

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

Unsere nächste Funktion, `writeFile()`, schreibt den in das Eingabefeld eingegebenen Text mit [`FileSystemWritableFileStream.write()`](/de/docs/Web/API/FileSystemWritableFileStream/write) in die gewählte Datei und leert dann das Eingabefeld. Wir schließen den beschreibbaren Stream mit [`WritableStream.close()`](/de/docs/Web/API/WritableStream/close) und setzen die Demo zurück, damit sie erneut ausgeführt werden kann — die `disabled`-Zustände der Steuerelemente werden auf ihre ursprünglichen Zustände zurückgesetzt, und die Variable `writableStream` wird wieder auf `null` gesetzt.

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

Um die Demo zum Laufen zu bringen, setzen wir Ereignislistener auf die Buttons, so dass die jeweilige Funktion ausgeführt wird, wenn jeder von ihnen angeklickt wird.

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
