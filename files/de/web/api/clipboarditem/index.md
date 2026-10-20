---
title: ClipboardItem
slug: Web/API/ClipboardItem
l10n:
  sourceCommit: 7b8a3c0a4ab5b4b0c605641e8b64c8da42d8dd51
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

Die **`ClipboardItem`**-Schnittstelle der [Clipboard API](/de/docs/Web/API/Clipboard_API) repräsentiert ein einzelnes Datenelement, das in die Zwischenablage kopiert oder aus ihr gelesen wird. Sie wird mit [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write) beziehungsweise [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read) verwendet.

> [!NOTE]
> Mit den Methoden `read()` und `write()` können Sie Textzeichenfolgen und beliebige Datenelemente verarbeiten, die durch [`Blob`](/de/docs/Web/API/Blob)-Instanzen repräsentiert werden. Wenn Sie ausschließlich mit Text arbeiten, sind die Methoden [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) jedoch bequemer.

## Konstruktor

- [`ClipboardItem()`](/de/docs/Web/API/ClipboardItem/ClipboardItem)
  - : Erstellt ein neues **`ClipboardItem`**-Objekt mit einem oder mehreren {{Glossary("MIME_type", "MIME-Typen")}} als Schlüsseln und den zugehörigen Daten als Werten.

## Instanzeigenschaften

- [`types`](/de/docs/Web/API/ClipboardItem/types) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Array")}} von {{Glossary("MIME_type", "MIME-Typen")}} zurück, einen für jede Darstellung der Daten im `ClipboardItem`.
- [`presentationStyle`](/de/docs/Web/API/ClipboardItem/presentationStyle) {{ReadOnlyInline}}
  - : Gibt einen der folgenden Werte zurück: `"unspecified"`, `"inline"` oder `"attachment"`.

## Statische Methoden

- [`ClipboardItem.supports()`](/de/docs/Web/API/ClipboardItem/supports_static)
  - : Prüft, ob ein bestimmter {{Glossary("MIME_type", "MIME-Typ")}} von der Zwischenablage unterstützt wird. So kann eine Website feststellen, ob ein MIME-Typ unterstützt wird, bevor sie versucht, Daten zu schreiben.

## Instanzmethoden

- [`getType()`](/de/docs/Web/API/ClipboardItem/getType)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) des angeforderten {{Glossary("MIME_type", "MIME-Typs")}} erfüllt wird, oder einen Fehler, wenn der MIME-Typ nicht gefunden wird.

## Beschreibung

Ein einzelnes `ClipboardItem` kann mehrere Darstellungen derselben Daten enthalten, die jeweils durch einen anderen {{Glossary("MIME_type", "MIME-Typ")}} gekennzeichnet sind. Beispielsweise kann kopierter formatierter Text sowohl als `text/html` als auch als `text/plain` gespeichert sein.

Beim Erstellen eines `ClipboardItem` übergeben Sie diese Darstellungen als Eigenschaften eines einzelnen Objekts, deren Schlüssel MIME-Typen sind. Einzelheiten finden Sie unter [`ClipboardItem()`](/de/docs/Web/API/ClipboardItem/ClipboardItem).

Wenn Sie ein `ClipboardItem` lesen, finden Sie die verfügbaren Formate unter [`types`](/de/docs/Web/API/ClipboardItem/types) und können jede Darstellung einzeln mit [`getType()`](/de/docs/Web/API/ClipboardItem/getType) abrufen.

## Beispiele

### Text in die Zwischenablage schreiben

In diesem Beispiel definieren wir zunächst zwei Konstanten mit Referenzen auf ein {{htmlelement("p")}}-Element, das Text enthält, und ein {{htmlelement("button")}}-Element.

Anschließend definieren wir eine Funktion namens `copyToClipboard()`. Sie speichert zuerst den MIME-Typ `"text/plain"` in einer Konstanten und erstellt dann ein Objekt namens `clipboardItemData`. Dieses enthält eine Eigenschaft, deren Schlüssel dem MIME-Typ entspricht und deren Wert der Text ist, den wir in die Zwischenablage kopieren möchten – in diesem Fall der Inhalt des `<p>`-Elements. Da wir mit Text arbeiten, können wir ihn direkt übergeben, statt einen [`Blob`](/de/docs/Web/API/Blob) erstellen zu müssen.

Wir erstellen mit dem Konstruktor [`ClipboardItem()`](/de/docs/Web/API/ClipboardItem/ClipboardItem) ein neues `ClipboardItem`-Objekt und übergeben es an die Methode [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), um den Text in die Zwischenablage zu kopieren.

Zum Schluss fügen wir dem `<button>` einen Event-Listener hinzu, der die Funktion ausführt, wenn die Schaltfläche gedrückt wird.

```js
const textSource = document.querySelector("p");
const copyBtn = document.querySelector("button");

async function copyToClipboard() {
  const type = "text/plain";
  const clipboardItemData = {
    [type]: textSource.textContent,
  };
  const clipboardItem = new ClipboardItem(clipboardItemData);
  await navigator.clipboard.write([clipboardItem]);
}

copyBtn.addEventListener("click", copyToClipboard);
```

### Ein Bild in die Zwischenablage schreiben

Hier prüfen wir mit [`supports()`](/de/docs/Web/API/ClipboardItem/supports_static), ob der MIME-Datentyp `image/svg+xml` unterstützt wird.
Falls ja, rufen wir mit der [Fetch API](/de/docs/Web/API/Fetch_API) ein SVG-Bild ab und lesen es anschließend als [`Blob`](/de/docs/Web/API/Blob) ein. Damit können wir ein `ClipboardItem` erstellen, das in die Zwischenablage geschrieben wird.

```js
async function writeClipImg() {
  try {
    if (ClipboardItem.supports("image/svg+xml")) {
      const imgURL = "/my-image.svg";
      const data = await fetch(imgURL);
      const blob = await data.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      console.log("Fetched image copied.");
    } else {
      console.log("SVG images are not supported by the clipboard.");
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

### Aus der Zwischenablage lesen

Hier rufen wir mit der Methode [`clipboard.read()`](/de/docs/Web/API/Clipboard/read) alle Elemente aus der Zwischenablage ab.
Anschließend verwenden wir die Eigenschaft [`ClipboardItem.types`](/de/docs/Web/API/ClipboardItem/types), um den Parameter für [`getType()`](/de/docs/Web/API/ClipboardItem/getType) festzulegen und das entsprechende Blob-Objekt zurückzugeben.

Jedes `clipboardItem` kann unter `types` selbst mehrere MIME-Typen auflisten, da ein einzelner Eintrag in der Zwischenablage mehrere Formatdarstellungen zugleich enthalten kann.

```js
async function getClipboardContents() {
  try {
    const clipboardItems = await navigator.clipboard.read();

    for (const clipboardItem of clipboardItems) {
      const formats = {};
      for (const type of clipboardItem.types) {
        formats[type] = await clipboardItem.getType(type);
      }
      console.log(formats); // e.g. { "text/html": Blob, "text/plain": Blob }
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read)
- [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write)
- [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)
- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Artikel zur Bildunterstützung für die Async Clipboard API](https://web.dev/articles/async-clipboard)
