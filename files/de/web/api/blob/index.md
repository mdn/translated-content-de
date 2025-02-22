---
title: Blob
slug: Web/API/Blob
l10n:
  sourceCommit: 9b52765cefc649969574e722760cc90168c6b6df
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Das **`Blob`**-Interface repräsentiert ein Blob, ein dateiähnliches Objekt von unveränderlichen, rohen Daten; es kann als Text oder Binärdaten gelesen oder in einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) umgewandelt werden, sodass dessen Methoden zur Verarbeitung der Daten verwendet werden können.

Blobs können Daten repräsentieren, die nicht unbedingt im nativen JavaScript-Format vorliegen. Das [`File`](/de/docs/Web/API/File)-Interface basiert auf `Blob`, erbt die Blob-Funktionalität und erweitert sie, um Dateien auf dem System des Benutzers zu unterstützen.

## Verwendung von Blobs

Um ein `Blob` aus anderen Nicht-Blob-Objekten und Daten zu erstellen, verwenden Sie den [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor. Um ein Blob zu erstellen, das einen Teil der Daten eines anderen Blobs enthält, verwenden Sie die [`slice()`](/de/docs/Web/API/Blob/slice)-Methode. Um ein `Blob`-Objekt für eine Datei im Dateisystem des Benutzers zu erhalten, siehe die [`File`](/de/docs/Web/API/File)-Dokumentation.

Die APIs, die `Blob`-Objekte akzeptieren, sind ebenfalls in der [`File`](/de/docs/Web/API/File)-Dokumentation aufgelistet.

## Konstruktor

- [`Blob()`](/de/docs/Web/API/Blob/Blob)
  - : Gibt ein neu erstelltes `Blob`-Objekt zurück, das eine Verkettung aller Daten im Array enthält, das dem Konstruktor übergeben wird.

## Instanz-Eigenschaften

- [`Blob.size`](/de/docs/Web/API/Blob/size) {{ReadOnlyInline}}
  - : Die Größe in Bytes der im `Blob`-Objekt enthaltenen Daten.
- [`Blob.type`](/de/docs/Web/API/Blob/type) {{ReadOnlyInline}}
  - : Ein String, der den MIME-Typ der im `Blob` enthaltenen Daten angibt. Wenn der Typ unbekannt ist, ist dieser String leer.

## Instanz-Methoden

- [`Blob.arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer)
  - : Gibt ein Promise zurück, das mit einem {{jsxref("ArrayBuffer")}} aufgelöst wird, das den gesamten Inhalt des `Blob` als Binärdaten enthält.
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes)
  - : Gibt ein Promise zurück, das mit einem {{jsxref("Uint8Array")}} aufgelöst wird, das den Inhalt des `Blob` enthält.
- [`Blob.slice()`](/de/docs/Web/API/Blob/slice)
  - : Gibt ein neues `Blob`-Objekt zurück, das die Daten im angegebenen Bytebereich des Blobs enthält, auf dem es aufgerufen wird.
- [`Blob.stream()`](/de/docs/Web/API/Blob/stream)
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der verwendet werden kann, um den Inhalt des `Blob` zu lesen.
- [`Blob.text()`](/de/docs/Web/API/Blob/text)
  - : Gibt ein Promise zurück, das mit einem String aufgelöst wird, der den gesamten Inhalt des `Blob` als UTF-8-Text interpretiert enthält.

## Beispiele

### Erstellen eines Blobs

Der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor kann Blobs aus anderen Objekten erstellen. Zum Beispiel, um ein Blob aus einem JSON-String zu erstellen:

```js
const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});
```

### Erstellen einer URL, die den Inhalt eines getypten Arrays darstellt

Das folgende Beispiel erstellt ein JavaScript-[getyptes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) und erstellt ein neues `Blob`, das die Daten des getypten Arrays enthält. Anschließend wird [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) aufgerufen, um das Blob in eine {{Glossary("URL", "URL")}} zu konvertieren.

```html live-sample___url-from-array
<p>
  This example creates a typed array containing the ASCII codes for the space
  character through the letter Z, then converts it to an object URL. A link to
  open that object URL is created. Click the link to see the decoded object URL.
</p>
```

Das Hauptstück dieses Codes ist die Funktion `typedArrayToURL()`, die ein `Blob` aus dem gegebenen getypten Array erstellt und eine Objekt-URL dafür zurückgibt. Nachdem die Daten in eine Objekt-URL umgewandelt wurden, können sie auf verschiedene Weise verwendet werden, unter anderem als Wert des [`src`](/de/docs/Web/HTML/Element/img#src)-Attributes des {{HTMLElement("img")}}-Elements (vorausgesetzt, die Daten enthalten ein Bild, natürlich).

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

Eine Möglichkeit, den Inhalt eines `Blob` zu lesen, ist die Verwendung eines [`FileReader`](/de/docs/Web/API/FileReader). Der folgende Code liest den Inhalt eines `Blob` als getyptes Array:

```js
const reader = new FileReader();
reader.addEventListener("loadend", () => {
  // reader.result contains the contents of blob as a typed array
});
reader.readAsArrayBuffer(blob);
```

Eine andere Möglichkeit, den Inhalt eines `Blob` zu lesen, ist die Verwendung einer [`Response`](/de/docs/Web/API/Response). Der folgende Code liest den Inhalt eines `Blob` als Text:

```js
const text = await new Response(blob).text();
```

Oder indem [`Blob.text()`](/de/docs/Web/API/Blob/text) verwendet wird:

```js
const text = await blob.text();
```

Durch die Verwendung anderer Methoden des `FileReader` ist es möglich, den Inhalt eines Blobs als String oder Daten-URL zu lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FileReader`](/de/docs/Web/API/FileReader)
- [`File`](/de/docs/Web/API/File)
- [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
- [Verwenden von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
