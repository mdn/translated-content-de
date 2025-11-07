---
title: Blob
slug: Web/API/Blob
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Das **`Blob`**-Interface repräsentiert einen Blob, ein dateiähnliches Objekt mit unveränderlichen Rohdaten; diese können als Text oder Binärdaten gelesen oder in einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) konvertiert werden, sodass dessen Methoden zur Verarbeitung der Daten verwendet werden können.

Blobs können Daten repräsentieren, die nicht unbedingt in einem JavaScript-eigenen Format vorliegen. Das [`File`](/de/docs/Web/API/File)-Interface basiert auf `Blob`, erbt die Funktionalität von Blobs und erweitert sie zur Unterstützung von Dateien auf dem System des Nutzers.

## Verwendung von Blobs

Um einen `Blob` aus anderen Nicht-Blob-Objekten und Daten zu erstellen, verwenden Sie den [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor. Um einen Blob zu erstellen, der einen Teil der Daten eines anderen Blobs enthält, verwenden Sie die [`slice()`](/de/docs/Web/API/Blob/slice)-Methode. Um ein `Blob`-Objekt für eine Datei auf dem Dateisystem des Nutzers zu erhalten, siehe die [`File`](/de/docs/Web/API/File)-Dokumentation.

Die APIs, die `Blob`-Objekte akzeptieren, sind ebenfalls in der [`File`](/de/docs/Web/API/File)-Dokumentation aufgelistet.

## Konstruktor

- [`Blob()`](/de/docs/Web/API/Blob/Blob)
  - : Gibt ein neu erstelltes `Blob`-Objekt zurück, das eine Verkettung aller Daten im an den Konstruktor übergebenen Array enthält.

## Instanzeigenschaften

- [`Blob.size`](/de/docs/Web/API/Blob/size) {{ReadOnlyInline}}
  - : Die Größe in Bytes der im `Blob`-Objekt enthaltenen Daten.
- [`Blob.type`](/de/docs/Web/API/Blob/type) {{ReadOnlyInline}}
  - : Ein String, der den MIME-Typ der im `Blob` enthaltenen Daten angibt. Wenn der Typ unbekannt ist, ist dieser String leer.

## Instanzmethoden

- [`Blob.arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer)
  - : Gibt ein Promise zurück, das mit einem {{jsxref("ArrayBuffer")}} aufgelöst wird, der den gesamten Inhalt des `Blob` als Binärdaten enthält.
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes)
  - : Gibt ein Promise zurück, das mit einem {{jsxref("Uint8Array")}} aufgelöst wird, der den Inhalt des `Blob` enthält.
- [`Blob.slice()`](/de/docs/Web/API/Blob/slice)
  - : Gibt ein neues `Blob`-Objekt zurück, das die Daten im angegebenen Bereich von Bytes des Blobs enthält, auf dem es aufgerufen wird.
- [`Blob.stream()`](/de/docs/Web/API/Blob/stream)
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der verwendet werden kann, um den Inhalt des `Blob` zu lesen.
- [`Blob.text()`](/de/docs/Web/API/Blob/text)
  - : Gibt ein Promise zurück, das mit einem String aufgelöst wird, der den gesamten Inhalt des `Blob` als UTF-8-Text interpretiert enthält.

## Beispiele

### Erstellen eines Blobs

Der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor kann Blobs aus anderen Objekten erstellen. Zum Beispiel, um einen Blob aus einem JSON-String zu erstellen:

```js
const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});
```

### Erstellen einer URL, die den Inhalt eines typisierten Arrays darstellt

Das folgende Beispiel erstellt ein JavaScript [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) und erzeugt einen neuen `Blob`, der die Daten des typisierten Arrays enthält. Anschließend wird [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) aufgerufen, um den Blob in eine {{Glossary("URL", "URL")}} zu konvertieren.

```html live-sample___url-from-array
<p>
  This example creates a typed array containing the ASCII codes for the space
  character through the letter Z, then converts it to an object URL. A link to
  open that object URL is created. Click the link to see the decoded object URL.
</p>
```

Das Hauptbeispiel dieser Codeberechnung ist die `typedArrayToURL()`-Funktion, die einen `Blob` aus dem gegebenen typisierten Array erstellt und eine Objekt-URL dafür zurückgibt. Nachdem die Daten in eine Objekt-URL konvertiert wurden, können sie auf verschiedene Weise verwendet werden, einschließlich als Wert des `src`-Attributs des {{HTMLElement("img")}}-Elements (vorausgesetzt, die Daten enthalten ein Bild, natürlich).

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

### Extrahieren von Daten aus einem Blob

Eine Möglichkeit, Inhalte aus einem `Blob` zu lesen, ist die Verwendung eines [`FileReader`](/de/docs/Web/API/FileReader). Der folgende Code liest den Inhalt eines `Blob` als typisiertes Array:

```js
const reader = new FileReader();
reader.addEventListener("loadend", () => {
  // reader.result contains the contents of blob as a typed array
});
reader.readAsArrayBuffer(blob);
```

Eine andere Möglichkeit, Inhalte aus einem `Blob` zu lesen, ist die Verwendung eines [`Response`](/de/docs/Web/API/Response). Der folgende Code liest den Inhalt eines `Blob` als Text:

```js
const text = await new Response(blob).text();
```

Oder durch Verwendung von [`Blob.text()`](/de/docs/Web/API/Blob/text):

```js
const text = await blob.text();
```

Durch die Verwendung anderer Methoden von `FileReader` ist es möglich, den Inhalt eines Blob als String oder als Daten-URL zu lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FileReader`](/de/docs/Web/API/FileReader)
- [`File`](/de/docs/Web/API/File)
- [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
