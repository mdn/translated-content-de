---
title: Blob
slug: Web/API/Blob
l10n:
  sourceCommit: 1bfa4c3f7895d734df516d2bc61240313397a63c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Das **`Blob`**-Interface repräsentiert ein Blob, das ein dateiähnliches Objekt mit unveränderlichen, rohen Daten ist; sie können als Text oder Binärdaten gelesen oder in einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) umgewandelt werden, sodass dessen Methoden zur Verarbeitung der Daten verwendet werden können.

Blobs können Daten darstellen, die nicht unbedingt im JavaScript-eigenen Format vorliegen. Das [`File`](/de/docs/Web/API/File)-Interface basiert auf `Blob` und erbt dessen Funktionalität, während es erweitert wird, um Dateien auf dem System des Benutzers zu unterstützen.

## Verwendung von Blobs

Um ein `Blob` aus anderen Nicht-Blob-Objekten und Daten zu erstellen, verwenden Sie den [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor. Um ein Blob zu erstellen, das einen Teilbereich der Daten eines anderen Blobs enthält, verwenden Sie die [`slice()`](/de/docs/Web/API/Blob/slice)-Methode. Um ein `Blob`-Objekt für eine Datei auf dem Dateisystem des Benutzers zu erhalten, siehe die [`File`](/de/docs/Web/API/File)-Dokumentation.

Die APIs, die `Blob`-Objekte akzeptieren, sind ebenfalls in der [`File`](/de/docs/Web/API/File)-Dokumentation aufgeführt.

## Konstruktor

- [`Blob()`](/de/docs/Web/API/Blob/Blob)
  - : Gibt ein neu erstelltes `Blob`-Objekt zurück, das eine Verkettung aller Daten enthält, die im Konstruktor übergebenen Array enthalten sind.

## Instanzeigenschaften

- [`Blob.size`](/de/docs/Web/API/Blob/size) {{ReadOnlyInline}}
  - : Die Größe, in Bytes, der im `Blob`-Objekt enthaltenen Daten.
- [`Blob.type`](/de/docs/Web/API/Blob/type) {{ReadOnlyInline}}
  - : Ein String, der den MIME-Typ der im `Blob` enthaltenen Daten angibt. Wenn der Typ unbekannt ist, ist dieser String leer.

## Instanzmethoden

- [`Blob.arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer)
  - : Gibt ein Versprechen zurück, das mit einem {{jsxref("ArrayBuffer")}} aufgelöst wird, der den gesamten Inhalt des `Blob` als Binärdaten enthält.
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes)
  - : Gibt ein Versprechen zurück, das mit einem {{jsxref("Uint8Array")}} aufgelöst wird, der den Inhalt des `Blob` enthält.
- [`Blob.slice()`](/de/docs/Web/API/Blob/slice)
  - : Gibt ein neues `Blob`-Objekt zurück, das die Daten im angegebenen Bereich von Bytes des Blobs enthält, auf dem es aufgerufen wird.
- [`Blob.stream()`](/de/docs/Web/API/Blob/stream)
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der verwendet werden kann, um den Inhalt des `Blob` als Blöcke von rohen Bytes zu lesen.
- [`Blob.text()`](/de/docs/Web/API/Blob/text)
  - : Gibt ein Versprechen zurück, das mit einem String aufgelöst wird, der den gesamten Inhalt des `Blob` als UTF-8-Text interpretiert enthält.
- [`Blob.textStream()`](/de/docs/Web/API/Blob/textStream)
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der verwendet werden kann, um den Inhalt des `Blob` in Blöcken von UTF-8 zu lesen.

## Beispiele

### Erstellen eines Blobs

Der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor kann Blobs aus anderen Objekten erstellen. Zum Beispiel, um ein Blob aus einem JSON-String zu erstellen:

```js
const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});
```

### Erstellen einer URL, die den Inhalt eines typisierten Arrays darstellt

Das folgende Beispiel erstellt ein JavaScript-[typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) und erstellt ein neues `Blob`, das die Daten des typisierten Arrays enthält. Es ruft dann [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) auf, um das Blob in eine {{Glossary("URL", "URL")}} zu konvertieren.

```html live-sample___url-from-array
<p>
  This example creates a typed array containing the ASCII codes for the space
  character through the letter Z, then converts it to an object URL. A link to
  open that object URL is created. Click the link to see the decoded object URL.
</p>
```

Das Hauptstück dieses Codes zu Demonstrationszwecken ist die `typedArrayToURL()`-Funktion, die ein `Blob` aus dem gegebenen typisierten Array erstellt und eine Objekt-URL dafür zurückgibt. Nachdem die Daten in eine Objekt-URL konvertiert wurden, können sie auf verschiedene Weise verwendet werden, einschließlich als Wert des [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attributs des {{HTMLElement("img")}}-Elements (vorausgesetzt, die Daten enthalten ein Bild).

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

Oder durch die Verwendung von [`Blob.text()`](/de/docs/Web/API/Blob/text):

```js
const text = await blob.text();
```

Durch die Verwendung anderer Methoden von `FileReader` ist es möglich, die Inhalte eines Blobs als String oder als Daten-URL zu lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FileReader`](/de/docs/Web/API/FileReader)
- [`File`](/de/docs/Web/API/File)
- [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
