---
title: ClipboardItem
slug: Web/API/ClipboardItem
l10n:
  sourceCommit: eb38a196911f92a7c99a1a2000fac1cd29d23db9
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

Das **`ClipboardItem`** Interface der [Clipboard API](/de/docs/Web/API/Clipboard_API) repräsentiert ein einzelnes Artikel-Format, das beim Lesen oder Schreiben von Zwischenspeicherdaten mit [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read) bzw. [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write) verwendet wird.

Das **`ClipboardItem`** Interface ermöglicht es Entwicklern, einen einzigen Typ zu verwenden, um eine Vielzahl unterschiedlicher Datenformate darzustellen.

> [!NOTE]
> Die `read()` und `write()` Methoden können verwendet werden, um sowohl Textzeichenfolgen als auch beliebige durch [`Blob`](/de/docs/Web/API/Blob) Instanzen repräsentierte Datenobjekte zu bearbeiten. Wenn Sie jedoch ausschließlich mit Text arbeiten, ist es bequemer die [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) Methoden zu nutzen.

## Konstruktor

- [`ClipboardItem()`](/de/docs/Web/API/ClipboardItem/ClipboardItem)
  - : Erstellt ein neues **`ClipboardItem`** Objekt, wobei der {{Glossary("MIME_type", "MIME-Typ")}} als Schlüssel und die Daten als Wert fungieren.

## Instanz-Eigenschaften

- [`types`](/de/docs/Web/API/ClipboardItem/types) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Array")}} von MIME-Typen zurück, die innerhalb des **`ClipboardItem`** verfügbar sind.
- [`presentationStyle`](/de/docs/Web/API/ClipboardItem/presentationStyle) {{ReadOnlyInline}}
  - : Gibt einen der folgenden Werte zurück: `"unspecified"`, `"inline"` oder `"attachment"`.

## Statische Methoden

- [`ClipboardItem.supports()`](/de/docs/Web/API/ClipboardItem/supports_static)
  - : Überprüft, ob ein gegebener {{Glossary("MIME_type", "MIME-Typ")}} von der Zwischenablage unterstützt wird. Dies ermöglicht es einer Website zu erkennen, ob ein MIME-Typ unterstützt wird, bevor versucht wird, Daten zu schreiben.

## Instanz-Methoden

- [`getType()`](/de/docs/Web/API/ClipboardItem/getType)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) des angeforderten {{Glossary("MIME_type", "MIME-Typs")}} oder einem Fehler aufgelöst wird, wenn der MIME-Typ nicht gefunden wird.

## Beispiele

### Schreiben von Text in die Zwischenablage

In diesem Beispiel definieren wir zunächst zwei Konstanten, die Verweise auf ein {{htmlelement("p")}}-Element mit etwas Text und ein {{htmlelement("button")}}-Element enthalten.

Als Nächstes definieren wir eine Funktion namens `copyToClipboard()`. Diese beginnt damit, einen `"text/plain"` MIME-Typ in einer Konstante zu speichern, dann ein Objekt namens `clipboardItemData` zu erstellen, das eine Eigenschaft mit einem Schlüssel gleich dem MIME-Typ und einem Wert des Textes enthält, den wir in die Zwischenablage kopieren möchten (in diesem Fall der Inhalt des `<p>` Elements). Da wir mit Text arbeiten, können wir ihn direkt übergeben, anstatt einen [`Blob`](/de/docs/Web/API/Blob) erstellen zu müssen.

Wir erstellen ein neues `ClipboardItem` Objekt mit dem [`ClipboardItem()`](/de/docs/Web/API/ClipboardItem/ClipboardItem) Konstruktor und übergeben es der [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write) Methode, um den Text in die Zwischenablage zu kopieren.

Zum Schluss fügen wir dem `<button>` einen Event-Listener hinzu, sodass die Funktion beim Drücken ausgeführt wird.

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

### Schreiben eines Bildes in die Zwischenablage

Hier verwenden wir [`supports()`](/de/docs/Web/API/ClipboardItem/supports_static), um zu überprüfen, ob der `image/svg+xml` MIME-Datentyp unterstützt wird. Falls ja, holen wir ein SVG-Bild mit der [Fetch API](/de/docs/Web/API/Fetch_API) und legen es dann in einem [`Blob`](/de/docs/Web/API/Blob) ab, den wir verwenden können, um ein `ClipboardItem` zu erstellen, das in die Zwischenablage geschrieben wird.

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

### Lesen von der Zwischenablage

Hier geben wir alle Elemente in der Zwischenablage über die [`clipboard.read()`](/de/docs/Web/API/Clipboard/read) Methode zurück. Anschließend nutzen wir die [`ClipboardItem.types`](/de/docs/Web/API/ClipboardItem/types) Eigenschaft, um das [`getType()`](/de/docs/Web/API/ClipboardItem/getType) Argument festzulegen und das entsprechende Blob-Objekt zurückzugeben.

```js
async function getClipboardContents() {
  try {
    const clipboardItems = await navigator.clipboard.read();

    for (const clipboardItem of clipboardItems) {
      for (const type of clipboardItem.types) {
        const blob = await clipboardItem.getType(type);
        // we can now use blob here
      }
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

- [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)
- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
