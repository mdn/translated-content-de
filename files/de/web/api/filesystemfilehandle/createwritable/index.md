---
title: "FileSystemFileHandle: createWritable()-Methode"
short-title: createWritable()
slug: Web/API/FileSystemFileHandle/createWritable
l10n:
  sourceCommit: 1a7695e13c51d85a81e3e5d85feedbc5dbd2a379
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

Die **`createWritable()`**-Methode des {{domxref("FileSystemFileHandle")}}-Interfaces erstellt einen {{domxref('FileSystemWritableFileStream')}}, der verwendet werden kann, um in eine Datei zu schreiben. Die Methode gibt ein {{jsxref('Promise')}} zurück, das auf diesen erstellten Stream auflöst.

Alle Änderungen, die über den Stream vorgenommen werden, spiegeln sich erst in der Datei wider, die von dem Datei-Handle repräsentiert wird, nachdem der Stream geschlossen wurde. Dies wird typischerweise implementiert, indem Daten in eine temporäre Datei geschrieben werden und die von dem Datei-Handle repräsentierte Datei nur durch die temporäre Datei ersetzt wird, wenn der beschreibbare Dateistream geschlossen wird.

## Syntax

```js-nolint
createWritable()
createWritable(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `keepExistingData` {{optional_inline}}
      - : Ein {{jsxref('Boolean')}}. Standardwert ist `false`. Wenn auf `true` gesetzt, wird die vorhandene Datei, falls diese existiert, zunächst in die temporäre Datei kopiert. Andernfalls beginnt die temporäre Datei als leer.
    - `mode` {{optional_inline}} {{non-standard_inline}}
      - : Ein String, der den Sperrmodus für den beschreibbaren Dateistream spezifiziert. Der Standardwert ist `"siloed"`. Mögliche Werte sind:
        - `"exclusive"`
          - : Es kann nur ein `FileSystemWritableFileStream`-Schreiber geöffnet werden. Der Versuch, nachfolgende Schreiber zu öffnen, bevor der erste Schreiber geschlossen ist, führt zu einer `NoModificationAllowedError`-Ausnahme.
        - `"siloed"`
          - : Mehrere `FileSystemWritableFileStream`-Schreiber können zur gleichen Zeit geöffnet werden, jeder mit seiner eigenen Austauschdatei, beispielsweise wenn dieselbe App in mehreren Tabs verwendet wird. Der zuletzt geöffnete Schreiber hat seine Daten geschrieben, da die Daten geflusht werden, wenn jeder Schreiber geschlossen wird.

### Rückgabewert

Ein {{jsxref('Promise')}} das auf ein {{domxref('FileSystemWritableFileStream')}}-Objekt auflöst.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref('PermissionStatus.state')}}-Wert für das Handle nicht `'granted'` im `readwrite`-Modus ist.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Browser nicht in der Lage ist, einen Sperre auf die Datei zu erlangen, die mit dem Datei-Handle verbunden ist. Dies könnte daran liegen, dass `mode` auf `exclusive` gesetzt ist und versucht wird, mehrere Schreiber gleichzeitig zu öffnen.
- `AbortError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn vom Implementierung definierte Malware-Scans und Safe-Browsing-Überprüfungen fehlschlagen.

## Beispiele

### Grundlegende Verwendung

Die folgende asynchrone Funktion schreibt die angegebenen Inhalte in das Datei-Handle und somit auf die Festplatte.

```js
async function writeFile(fileHandle, contents) {
  // Erstellen Sie einen FileSystemWritableFileStream, um hineinzuschreiben.
  const writable = await fileHandle.createWritable();

  // Schreiben Sie den Inhalt der Datei in den Stream.
  await writable.write(contents);

  // Schließen Sie die Datei und schreiben Sie die Inhalte auf die Festplatte.
  await writable.close();
}
```

### Erweiterte Verwendung mit Optionen

Unser [Beispiel `createWritable()` Modustest](https://createwritable-mode-test.glitch.me/) bietet ein {{htmlelement("button")}} zum Auswählen einer Datei, in die geschrieben werden soll, ein Text-{{htmlelement("input")}}-Feld, in das Sie Text eingeben können, der in die Datei geschrieben werden soll, und einen zweiten `<button>`, um den Text in die Datei zu schreiben.

In der obigen Demo versuchen Sie, eine Textdatei auf Ihrem Dateisystem auszuwählen (oder einen neuen Dateinamen einzugeben), Text in das Eingabefeld einzugeben und den Text in die Datei zu schreiben. Öffnen Sie die Datei auf Ihrem Dateisystem, um zu überprüfen, ob der Schreibvorgang erfolgreich war.

Versuchen Sie auch, die Seite gleichzeitig in zwei Browser-Tabs zu öffnen. Wählen Sie eine Datei aus, in die Sie im ersten Tab schreiben möchten, und versuchen Sie dann sofort, dieselbe Datei im zweiten Tab auszuwählen, um hineinzuschreiben. Sie sollten eine Fehlermeldung erhalten, da wir `mode: "exclusive"` im `createWritable()`-Aufruf festgelegt haben.

Unten werden wir den Code näher untersuchen.

#### HTML

Die zwei {{htmlelement("button")}}-Elemente und das Text-{{htmlelement("input")}}-Feld sehen wie folgt aus:

```html
<ol>
  <li>
    Wählen Sie eine Datei zum Schreiben aus: <button class="select">Datei auswählen</button>
  </li>
  <li>
    <label for="filetext">Geben Sie den Text ein, der in die Datei geschrieben werden soll:</label>
    <input type="text" id="filetext" name="filetext" disabled />
  </li>
  <li>
    Schreiben Sie Ihren Text in die Datei:
    <button class="write" disabled>Text schreiben</button>
  </li>
</ol>
```

Das Texteingabefeld und die Schaltfläche zum Textschreiben sind anfänglich über das [`disabled`](/de/docs/Web/HTML/Attributes/disabled)-Attribut deaktiviert - sie sollten nicht verwendet werden, bevor der Benutzer eine Datei zum Schreiben ausgewählt hat.

```css hidden
li {
  margin-bottom: 10px;
}
```

#### JavaScript

Wir beginnen damit, Referenzen auf die Schaltfläche zum Datei auswählen, die Schaltfläche zum Text schreiben und das Texteingabefeld zu erfassen. Wir deklarieren außerdem eine globale Variable `writableStream`, die eine Referenz auf den beschreibbaren Stream speichern wird, um den Text in die Datei zu schreiben, sobald dieser erstellt wurde. Anfangs setzen wir ihn auf `null`.

```js
const selectBtn = document.querySelector(".select");
const writeBtn = document.querySelector(".write");
const fileText = document.querySelector("#filetext");

let writableStream = null;
```

Als nächstes erstellen wir eine asynchrone Funktion namens `selectFile()`, die wir aufrufen, wenn die Auswahlschaltfläche gedrückt wird. Diese verwendet die {{domxref("Window.showSaveFilePicker()")}}-Methode, um dem Benutzer einen Dateiauswahldialog anzuzeigen und ein Datei-Handle für die von ihm gewählte Datei zu erstellen. An diesem Handle rufen wir die `createWritable()`-Methode auf, um einen Stream zu erstellen, um den Text in die ausgewählte Datei zu schreiben. Wenn der Aufruf fehlschlägt, protokollieren wir einen Fehler in der Konsole.

Wir übergeben `createWritable()` ein Optionsobjekt mit den folgenden Optionen:

- `keepExistingData: true`: Wenn die ausgewählte Datei bereits existiert, werden die darin enthaltenen Daten in die temporäre Datei kopiert, bevor das Schreiben beginnt.
- `mode: "exclusive"`: Gibt an, dass nur ein Schreiber gleichzeitig auf dem Datei-Handle geöffnet sein kann. Wenn ein zweiter Benutzer das Beispiel lädt und versucht, eine Datei auszuwählen, erhält er einen Fehler.

Zuletzt aktivieren wir das Eingabefeld und die Schaltfläche zum Text schreiben, da sie für den nächsten Schritt benötigt werden, und deaktivieren die Schaltfläche zum Datei auswählen (diese wird derzeit nicht benötigt).

```js
async function selectFile() {
  // Erstellen Sie ein neues Handle
  const handle = await window.showSaveFilePicker();

  // Erstellen Sie einen FileSystemWritableFileStream, um hineinzuschreiben
  try {
    writableStream = await handle.createWritable({
      keepExistingData: true,
      mode: "exclusive",
    });
  } catch (e) {
    if (e.name === "NoModificationAllowedError") {
      console.log(
        `Sie können derzeit nicht auf diese Datei zugreifen; jemand anderes versucht, sie zu ändern. Versuchen Sie es später erneut.`,
      );
    } else {
      console.log(e.message);
    }
  }

  // Aktivieren Sie das Textfeld und die Schreibschaltfläche, deaktivieren Sie die Auswahlschaltfläche
  fileText.disabled = false;
  writeBtn.disabled = false;
  selectBtn.disabled = true;
}
```

Unsere nächste Funktion, `writeFile()`, schreibt den in das Eingabefeld eingegebenen Text in die ausgewählte Datei mit {{domxref("FileSystemWritableFileStream.write()")}}, und leert dann das Eingabefeld. Wir schließen dann den beschreibbaren Stream mit {{domxref("WritableStream.close()")}} und setzen die Demo zurück, sodass sie erneut ausgeführt werden kann — die `disabled`-Zustände der Steuerelemente werden auf ihren ursprünglichen Zustand zurückgeschaltet, und die `writableStream`-Variable wird zurück auf `null` gesetzt.

```js
async function writeFile() {
  // Schreiben Sie den Text in unsere Datei und leeren Sie das Texteingabefeld
  await writableStream.write(fileText.value);
  fileText.value = "";

  // Schließen Sie die Datei und schreiben Sie die Inhalte auf die Festplatte.
  await writableStream.close();

  // Deaktivieren Sie das Texteingabefeld und die Schreibschaltfläche, aktivieren Sie die Auswahlschaltfläche
  fileText.disabled = true;
  writeBtn.disabled = true;
  selectBtn.disabled = false;

  // Setzen Sie writableStream zurück auf null
  writableStream = null;
}
```

Um die Demo auszuführen, setzen wir Event-Listener auf die Schaltflächen, sodass die relevante Funktion ausgeführt wird, wenn jede angeklickt wird.

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
- [Das File System Access API: Vereinfachung des Zugriffs auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
