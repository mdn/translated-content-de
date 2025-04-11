---
title: Blob
slug: Web/API/Blob
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Das **`Blob`**-Interface repräsentiert ein Blob, ein Dateieähnliches Objekt mit unveränderlichen, rohen Daten; sie können als Text oder Binärdaten gelesen oder in einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) konvertiert werden, sodass dessen Methoden zur Verarbeitung der Daten genutzt werden können.

Blobs können Daten repräsentieren, die nicht notwendigerweise in einem JavaScript-nativen Format vorliegen. Das [`File`](/de/docs/Web/API/File)-Interface basiert auf `Blob`, erbt die Blob-Funktionalität und erweitert sie, um Dateien auf dem System des Benutzers zu unterstützen.

## Verwendung von Blobs

Um ein `Blob` aus anderen Nicht-Blob-Objekten und Daten zu erstellen, verwenden Sie den [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor. Um ein Blob zu erstellen, das einen Teil der Daten eines anderen Blobs enthält, verwenden Sie die [`slice()`](/de/docs/Web/API/Blob/slice)-Methode. Um ein `Blob`-Objekt für eine Datei im Dateisystem des Benutzers zu erhalten, siehe die [`File`](/de/docs/Web/API/File)-Dokumentation.

Die APIs, die `Blob`-Objekte akzeptieren, sind auch in der [`File`](/de/docs/Web/API/File)-Dokumentation aufgeführt.

## Konstruktor

- [`Blob()`](/de/docs/Web/API/Blob/Blob)
  - : Gibt ein neu erstelltes `Blob`-Objekt zurück, das eine Verkettung aller Daten im Array enthält, das dem Konstruktor übergeben wurde.

## Instanzeigenschaften

- [`Blob.size`](/de/docs/Web/API/Blob/size) {{ReadOnlyInline}}
  - : Die Größe in Bytes der im `Blob`-Objekt enthaltenen Daten.
- [`Blob.type`](/de/docs/Web/API/Blob/type) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die den MIME-Typ der im `Blob` enthaltenen Daten angibt. Ist der Typ unbekannt, ist diese Zeichenkette leer.

## Instanzmethoden

- [`Blob.arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer)
  - : Gibt ein Promise zurück, das mit einem {{jsxref("ArrayBuffer")}} aufgelöst wird, das den gesamten Inhalt des `Blob` als Binärdaten enthält.
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes)
  - : Gibt ein Promise zurück, das mit einem {{jsxref("Uint8Array")}} aufgelöst wird, das den Inhalt des `Blob` enthält.
- [`Blob.slice()`](/de/docs/Web/API/Blob/slice)
  - : Gibt ein neues `Blob`-Objekt zurück, das die Daten im angegebenen Bereich von Bytes des aufgerufenen Blobs enthält.
- [`Blob.stream()`](/de/docs/Web/API/Blob/stream)
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der zum Lesen des Inhalts des `Blob` verwendet werden kann.
- [`Blob.text()`](/de/docs/Web/API/Blob/text)
  - : Gibt ein Promise zurück, das mit einer Zeichenkette aufgelöst wird, die den gesamten Inhalt des `Blob` als UTF-8-Text interpretiert enthält.

## Beispiele

### Erstellen eines Blobs

Der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor kann Blobs aus anderen Objekten erstellen. Zum Beispiel, um ein Blob aus einem JSON-String zu konstruieren:

```js
const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});
```

### Erstellen einer URL, die den Inhalt eines typisierten Arrays darstellt

Das folgende Beispiel erstellt ein JavaScript- [Typed Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) und erstellt ein neues `Blob`, das die Daten des typisierten Arrays enthält. Es ruft dann [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) auf, um das Blob in eine {{Glossary("URL", "URL")}} zu konvertieren.

```html live-sample___url-from-array
<p>
  This example creates a typed array containing the ASCII codes for the space
  character through the letter Z, then converts it to an object URL. A link to
  open that object URL is created. Click the link to see the decoded object URL.
</p>
```

Das wichtigste Element dieses Codes für Beispielzwecke ist die Funktion `typedArrayToURL()`, die ein `Blob` vom gegebenen typisierten Array erstellt und eine Objekt-URL dafür zurückgibt. Nachdem die Daten in eine Objekt-URL umgewandelt wurden, können sie auf verschiedene Weise verwendet werden, einschließlich als Wert des [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attributs des {{HTMLElement("img")}}-Elements (vorausgesetzt, die Daten enthalten ein Bild).

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

Eine Möglichkeit, den Inhalt eines `Blob` zu lesen, besteht darin, einen [`FileReader`](/de/docs/Web/API/FileReader) zu verwenden. Der folgende Code liest den Inhalt eines `Blob` als typisiertes Array:

```js
const reader = new FileReader();
reader.addEventListener("loadend", () => {
  // reader.result contains the contents of blob as a typed array
});
reader.readAsArrayBuffer(blob);
```

Eine andere Möglichkeit, den Inhalt eines `Blob` zu lesen, besteht darin, einen [`Response`](/de/docs/Web/API/Response) zu verwenden. Der folgende Code liest den Inhalt eines `Blob` als Text:

```js
const text = await new Response(blob).text();
```

Oder durch Nutzung von [`Blob.text()`](/de/docs/Web/API/Blob/text):

```js
const text = await blob.text();
```

Durch die Verwendung anderer Methoden des `FileReader` ist es möglich, die Inhalte eines Blob als Zeichenkette oder Daten-URL zu lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FileReader`](/de/docs/Web/API/FileReader)
- [`File`](/de/docs/Web/API/File)
- [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)
- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
