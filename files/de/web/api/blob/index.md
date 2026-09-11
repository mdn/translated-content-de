---
title: Blob
slug: Web/API/Blob
l10n:
  sourceCommit: ad1fac9d8dd0c9ab8f560e98c5c923559617ba54
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`Blob`**-Schnittstelle repräsentiert ein Blob, also ein dateiähnliches Objekt aus unveränderlichen Rohdaten; diese können als Text oder Binärdaten gelesen oder in einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) konvertiert werden, sodass dessen Methoden zur Verarbeitung der Daten verwendet werden können.

Blobs können Daten repräsentieren, die nicht unbedingt in einem JavaScript-nativen Format vorliegen. Die [`File`](/de/docs/Web/API/File)-Schnittstelle basiert auf `Blob`, erbt die Blob-Funktionalität und erweitert sie um die Unterstützung von Dateien auf dem System der Benutzerin bzw. des Benutzers.

## Blobs verwenden

Um ein `Blob` aus anderen Nicht-Blob-Objekten und Daten zu erstellen, verwenden Sie den Konstruktor [`Blob()`](/de/docs/Web/API/Blob/Blob). Um ein Blob zu erstellen, das eine Teilmenge der Daten eines anderen Blobs enthält, verwenden Sie die Methode [`slice()`](/de/docs/Web/API/Blob/slice). Informationen dazu, wie Sie ein `Blob`-Objekt für eine Datei im Dateisystem der Benutzerin bzw. des Benutzers erhalten, finden Sie in der Dokumentation zu [`File`](/de/docs/Web/API/File).

Die APIs, die `Blob`-Objekte akzeptieren, sind ebenfalls in der Dokumentation zu [`File`](/de/docs/Web/API/File) aufgeführt.

## Konstruktor

- [`Blob()`](/de/docs/Web/API/Blob/Blob)
  - : Gibt ein neu erstelltes `Blob`-Objekt zurück, das eine Verkettung aller Daten im an den Konstruktor übergebenen Array enthält.

## Instanzeigenschaften

- [`Blob.size`](/de/docs/Web/API/Blob/size) {{ReadOnlyInline}}
  - : Die Größe der im `Blob`-Objekt enthaltenen Daten in Bytes.
- [`Blob.type`](/de/docs/Web/API/Blob/type) {{ReadOnlyInline}}
  - : Ein String, der den MIME-Typ der im `Blob` enthaltenen Daten angibt. Ist der Typ unbekannt, ist dieser String leer.

## Instanzmethoden

- [`Blob.arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer)
  - : Gibt ein Promise zurück, das mit einem {{jsxref("ArrayBuffer")}} erfüllt wird, der den gesamten Inhalt des `Blob` als Binärdaten enthält.
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes)
  - : Gibt ein Promise zurück, das mit einem {{jsxref("Uint8Array")}} erfüllt wird, das den Inhalt des `Blob` enthält.
- [`Blob.slice()`](/de/docs/Web/API/Blob/slice)
  - : Gibt ein neues `Blob`-Objekt zurück, das die Daten im angegebenen Bytebereich des Blobs enthält, für das die Methode aufgerufen wird.
- [`Blob.stream()`](/de/docs/Web/API/Blob/stream)
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der verwendet werden kann, um den Inhalt des `Blob` als Abschnitte von Rohbytes zu lesen.
- [`Blob.text()`](/de/docs/Web/API/Blob/text)
  - : Gibt ein Promise zurück, das mit einem String erfüllt wird, der den gesamten als UTF-8-Text interpretierten Inhalt des `Blob` enthält.
- [`Blob.textStream()`](/de/docs/Web/API/Blob/textStream) {{experimental_inline}}
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der verwendet werden kann, um den Inhalt des `Blob` in UTF-8-Abschnitten zu lesen.

## Beispiele

### Ein Blob erstellen

Der Konstruktor [`Blob()`](/de/docs/Web/API/Blob/Blob) kann Blobs aus anderen Objekten erstellen. Beispielsweise können Sie ein Blob aus einem JSON-String erstellen:

```js
const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});
```

### Eine URL erstellen, die den Inhalt eines typisierten Arrays repräsentiert

Das folgende Beispiel erstellt ein JavaScript-[typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) und ein neues `Blob`, das die Daten des typisierten Arrays enthält. Anschließend ruft es [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) auf, um das Blob in eine {{Glossary("URL", "URL")}} zu konvertieren.

```html live-sample___url-from-array
<p>
  This example creates a typed array containing the ASCII codes for the space
  character through the letter Z, then converts it to an object URL. A link to
  open that object URL is created. Click the link to see the decoded object URL.
</p>
```

Der wichtigste Teil dieses Codes für Beispielzwecke ist die Funktion `typedArrayToURL()`, die aus dem angegebenen typisierten Array ein `Blob` erstellt und eine Object URL dafür zurückgibt. Nach der Konvertierung der Daten in eine Object URL kann diese auf verschiedene Arten verwendet werden, unter anderem als Wert des Attributs [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) des {{HTMLElement("img")}}-Elements (vorausgesetzt, die Daten enthalten natürlich ein Bild).

```js live-sample___url-from-array
function showViewLiveResultButton() {
  if (window.self !== window.top) {
    // Ensure that if our document is in a frame, we get the user
    // to first open it in its own tab or window. Otherwise, this
    // example won't work.
    const p = document.querySelector("p");
    p.textContent = "";
    const button = document.createElement("button");
    button.textContent = "View live result of the example code above";
    p.append(button);
    button.addEventListener("click", () => window.open(location.href));
    return true;
  }
  return false;
}

if (!showViewLiveResultButton()) {
  function typedArrayToURL(typedArray, mimeType) {
    return URL.createObjectURL(
      new Blob([typedArray.buffer], { type: mimeType }),
    );
  }
  const bytes = new Uint8Array(59);

  for (let i = 0; i < 59; i++) {
    bytes[i] = 32 + i;
  }

  const url = typedArrayToURL(bytes, "text/plain");
  const link = document.createElement("a");

  link.href = url;
  link.innerText = "Open the array URL";
  document.body.appendChild(link);
}
```

{{EmbedLiveSample('url-from-array', , , , , , , 'allow-popups')}}

### Daten aus einem Blob extrahieren

Eine Möglichkeit, Inhalte aus einem `Blob` zu lesen, ist die Verwendung eines [`FileReader`](/de/docs/Web/API/FileReader). Der folgende Code liest den Inhalt eines `Blob` als typisiertes Array:

```js
const reader = new FileReader();
reader.addEventListener("loadend", () => {
  // reader.result contains the contents of blob as a typed array
});
reader.readAsArrayBuffer(blob);
```

Eine weitere Möglichkeit, Inhalte aus einem `Blob` zu lesen, ist die Verwendung einer [`Response`](/de/docs/Web/API/Response). Der folgende Code liest den Inhalt eines `Blob` als Text:

```js
const text = await new Response(blob).text();
```

Oder durch Verwendung von [`Blob.text()`](/de/docs/Web/API/Blob/text):

```js
const text = await blob.text();
```

Durch die Verwendung anderer Methoden von `FileReader` ist es möglich, den Inhalt eines Blob als String oder Data URL zu lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FileReader`](/de/docs/Web/API/FileReader)
- [`File`](/de/docs/Web/API/File)
- [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
- [Dateien aus Webanwendungen verwenden](/de/docs/Web/API/File_API/Using_files_from_web_applications)
