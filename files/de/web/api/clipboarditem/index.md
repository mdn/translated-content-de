---
title: ClipboardItem
slug: Web/API/ClipboardItem
l10n:
  sourceCommit: eaa5b39f80d5fac0e5bf182679dc658b7083d15b
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

Das **`ClipboardItem`** Interface der [Clipboard API](/de/docs/Web/API/Clipboard_API) repräsentiert ein einzelnes Datenformat, das beim Lesen oder Schreiben von Zwischenablagedaten mithilfe von [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write) verwendet wird.

Das **`ClipboardItem`** Interface ermöglicht es Entwicklern, einen einzigen Typ zu verwenden, um eine Reihe verschiedener Datenformate darzustellen.

> [!NOTE]
> Die Methoden `read()` und `write()` können verwendet werden, um mit Textzeichenfolgen und beliebigen Datenelementen zu arbeiten, die durch [`Blob`](/de/docs/Web/API/Blob)-Instanzen dargestellt werden. Wenn Sie jedoch ausschließlich mit Text arbeiten, ist es bequemer, die Methoden [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) zu verwenden.

## Konstruktor

- [`ClipboardItem()`](/de/docs/Web/API/ClipboardItem/ClipboardItem)
  - : Erstellt ein neues **`ClipboardItem`**-Objekt, mit dem {{Glossary("MIME_type", "MIME-Typ")}} als Schlüssel und den Daten als Wert.

## Instanz-Eigenschaften

- [`types`](/de/docs/Web/API/ClipboardItem/types) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Array")}} von MIME-Typen zurück, die im **`ClipboardItem`** verfügbar sind.
- [`presentationStyle`](/de/docs/Web/API/ClipboardItem/presentationStyle) {{ReadOnlyInline}}
  - : Gibt einen der folgenden Werte zurück: `"unspecified"`, `"inline"` oder `"attachment"`.

## Statische Methoden

- [`ClipboardItem.supports()`](/de/docs/Web/API/ClipboardItem/supports_static)
  - : Prüft, ob ein angegebener {{Glossary("MIME_type", "MIME-Typ")}} von der Zwischenablage unterstützt wird. Dies ermöglicht es einer Website zu erkennen, ob ein MIME-Typ unterstützt wird, bevor versucht wird, Daten zu schreiben.

## Instanz-Methoden

- [`getType()`](/de/docs/Web/API/ClipboardItem/getType)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) des angeforderten {{Glossary("MIME_type", "MIME-Typs")}} oder einem Fehler aufgelöst wird, wenn der MIME-Typ nicht gefunden wird.

## Beispiele

### Text in die Zwischenablage schreiben

In diesem Beispiel definieren wir zunächst zwei Konstanten mit Verweisen auf ein {{htmlelement("p")}}-Element, das etwas Text enthält, und ein {{htmlelement("button")}}-Element.

Als Nächstes definieren wir eine Funktion namens `copyToClipboard()`. Diese beginnt damit, einen `"text/plain"` MIME-Typ in einer Konstante zu speichern und ein Objekt namens `clipboardItemData` zu erstellen, das eine Eigenschaft mit einem Schlüssel gleich dem MIME-Typ und einem Wert des Textes enthält, den wir in die Zwischenablage kopieren möchten (in diesem Fall der Inhalt des `<p>` Elements). Da wir mit Text arbeiten, können wir ihn direkt übergeben, anstatt einen [`Blob`](/de/docs/Web/API/Blob) zu erstellen.

Wir erstellen ein neues `ClipboardItem` Objekt mit dem [`ClipboardItem()`](/de/docs/Web/API/ClipboardItem/ClipboardItem) Konstruktor und übergeben es der Methode [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write), um den Text in die Zwischenablage zu kopieren.

Schließlich fügen wir einen Ereignis-Listener zum `<button>` hinzu, damit die Funktion beim Drücken ausgeführt wird.

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

Hier verwenden wir [`supports()`](/de/docs/Web/API/ClipboardItem/supports_static), um zu überprüfen, ob der `image/svg+xml` MIME-Datentyp unterstützt wird. Falls dies der Fall ist, holen wir ein SVG-Bild mit der [Fetch API](/de/docs/Web/API/Fetch_API) und lesen es in ein [`Blob`](/de/docs/Web/API/Blob) ein, das wir verwenden können, um ein `ClipboardItem` zu erstellen, das in die Zwischenablage geschrieben wird.

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

Hier geben wir alle Elemente der Zwischenablage über die Methode [`clipboard.read()`](/de/docs/Web/API/Clipboard/read) zurück. Danach verwenden wir die Eigenschaft [`ClipboardItem.types`](/de/docs/Web/API/ClipboardItem/types), um das Argument von [`getType()`](/de/docs/Web/API/ClipboardItem/getType) festzulegen und das entsprechende Blob-Objekt zurückzugeben.

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

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Bildunterstützung für asynchrone Zwischenablage-Artikel](https://web.dev/articles/async-clipboard)
