---
title: Blob
slug: Web/API/Blob
l10n:
  sourceCommit: de2ef1e9950eebbacdd55f072dfe03014d113bbd
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`Blob`**-Schnittstelle repräsentiert ein Blob, ein dateiähnliches Objekt aus unveränderlichen, rohen Daten. Sie können als Text oder Binärdaten gelesen oder in einen {{DOMxRef("ReadableStream")}} umgewandelt werden, sodass dessen Methoden zur Verarbeitung der Daten verwendet werden können.

Blobs können Daten darstellen, die nicht unbedingt im JavaScript-nativen Format vorliegen. Die {{DOMxRef("File")}}-Schnittstelle basiert auf `Blob`, erbt die Blob-Funktionalität und erweitert sie, um Dateien auf dem System des Benutzers zu unterstützen.

## Verwendung von Blobs

Um ein `Blob` aus anderen, nicht-Blob-Objekten und Daten zu erstellen, verwenden Sie den {{DOMxRef("Blob.Blob", "Blob()")}}-Konstruktor. Um ein Blob zu erstellen, das einen Teilbereich der Daten eines anderen Blobs enthält, verwenden Sie die {{DOMxRef("Blob.slice()", "slice()")}}-Methode. Um ein `Blob`-Objekt für eine Datei im Dateisystem des Benutzers zu erhalten, lesen Sie die {{DOMxRef("File")}}-Dokumentation.

Die APIs, die `Blob`-Objekte akzeptieren, sind auch in der {{DOMxRef("File")}}-Dokumentation aufgeführt.

## Konstruktor

- {{DOMxRef("Blob.Blob", "Blob()")}}
  - : Gibt ein neu erstelltes `Blob`-Objekt zurück, das eine Verkettung aller Daten im Array enthält, das in den Konstruktor übergeben wurde.

## Instanzeigenschaften

- {{DOMxRef("Blob.size")}} {{ReadOnlyInline}}
  - : Die Größe, in Bytes, der im `Blob`-Objekt enthaltenen Daten.
- {{DOMxRef("Blob.type")}} {{ReadOnlyInline}}
  - : Ein String, der den MIME-Typ der im `Blob` enthaltenen Daten angibt. Ist der Typ unbekannt, ist dieser String leer.

## Instanzmethoden

- {{DOMxRef("Blob.arrayBuffer()")}}
  - : Gibt ein Promise zurück, das mit einem {{jsxref("ArrayBuffer")}} aufgelöst wird, der den gesamten Inhalt des `Blob` als Binärdaten enthält.
- {{DOMxRef("Blob.bytes()")}}
  - : Gibt ein Promise zurück, das mit einem {{jsxref("Uint8Array")}} aufgelöst wird, das den Inhalt des `Blob` enthält.
- {{DOMxRef("Blob.slice()")}}
  - : Gibt ein neues `Blob`-Objekt zurück, das die Daten im angegebenen Bereich von Bytes des Blobs enthält, auf dem es aufgerufen wird.
- {{DOMxRef("Blob.stream()")}}
  - : Gibt einen {{DOMxRef("ReadableStream")}} zurück, der verwendet werden kann, um den Inhalt des `Blob` zu lesen.
- {{DOMxRef("Blob.text()")}}
  - : Gibt ein Promise zurück, das mit einem String aufgelöst wird, der den gesamten Inhalt des `Blob` enthält, interpretiert als UTF-8-Text.

## Beispiele

### Erstellen eines Blobs

Der {{DOMxRef("Blob.Blob", "Blob()")}}-Konstruktor kann Blobs aus anderen Objekten erstellen. Zum Beispiel, um ein Blob aus einem JSON-String zu erstellen:

```js
const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});
```

### Erstellen einer URL, die den Inhalt eines typisierten Arrays repräsentiert

Der folgende Code erstellt ein JavaScript- [Typed Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) und erstellt ein neues `Blob`, das die Daten des typelibierten Arrays enthält. Dann wird {{DOMxRef("URL/createObjectURL_static", "URL.createObjectURL()")}} aufgerufen, um das Blob in eine {{glossary("URL")}} umzuwandeln.

#### HTML

```html
<p>
  Dieses Beispiel erstellt ein typisiertes Array, das die ASCII-Codes für das
  Leerzeichen bis zum Buchstaben Z enthält, und wandelt es dann in eine
  Objekt-URL um. Ein Link, um diese Objekt-URL zu öffnen, wird erstellt.
  Klicken Sie auf den Link, um die dekodierte Objekt-URL zu sehen.
</p>
```

#### JavaScript

Das Hauptstück dieses Codes für Beispielzwecke ist die Funktion `typedArrayToURL()`, die ein `Blob` aus dem angegebenen typisierten Array erstellt und eine Objekt-URL dafür zurückgibt. Nachdem die Daten in eine Objekt-URL umgewandelt wurden, kann sie auf verschiedene Weise verwendet werden, einschließlich als Wert des [`src`](/de/docs/Web/HTML/Element/img#src)-Attributs des {{HTMLElement("img")}}-Elements (sofern die Daten ein Bild enthalten, natürlich).

```js
function showViewLiveResultButton() {
  if (window.self !== window.top) {
    // Sicherstellen, dass wenn unser Dokument in einem Frame geladen ist,
    // der Benutzer es zuerst in einem eigenen Tab oder Fenster öffnet.
    // Andernfalls funktioniert dieses Beispiel nicht.
    const p = document.querySelector("p");
    p.textContent = "";
    const button = document.createElement("button");
    button.textContent = "Live-Ergebnis des obigen Beispielcodes anzeigen";
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
  link.innerText = "Öffnen Sie die Array-URL";

  document.body.appendChild(link);
}
```

#### Ergebnis

{{EmbedLiveSample("Creating_a_URL_representing_the_contents_of_a_typed_array", 600, 200)}}

### Extrahieren von Daten aus einem Blob

Eine Möglichkeit, den Inhalt eines `Blob` zu lesen, ist die Verwendung eines {{DOMxRef("FileReader")}}. Der folgende Code liest den Inhalt eines `Blob` als typisiertes Array:

```js
const reader = new FileReader();
reader.addEventListener("loadend", () => {
  // reader.result enthält den Inhalt des Blobs als typisiertes Array
});
reader.readAsArrayBuffer(blob);
```

Eine andere Möglichkeit, den Inhalt eines `Blob` zu lesen, ist die Verwendung eines {{domxref("Response")}}. Der folgende Code liest den Inhalt eines `Blob` als Text:

```js
const text = await new Response(blob).text();
```

Oder durch Verwendung von {{DOMxRef("Blob.text()")}}:

```js
const text = await blob.text();
```

Durch die Verwendung anderer Methoden von `FileReader` ist es möglich, den Inhalt eines Blobs als String oder Daten-URL zu lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("FileReader")}}
- {{DOMxRef("File")}}
- {{DOMxRef("URL/createObjectURL_static", "URL.createObjectURL()")}}
- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
