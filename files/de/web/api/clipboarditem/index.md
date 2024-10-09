---
title: ClipboardItem
slug: Web/API/ClipboardItem
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

Die **`ClipboardItem`**-Schnittstelle der [Clipboard API](/de/docs/Web/API/Clipboard_API) repräsentiert ein einzelnes Datenformat, das beim Lesen oder Schreiben von Zwischenablagedaten mit [`clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`clipboard.write()`](/de/docs/Web/API/Clipboard/write) verwendet wird.

Der Vorteil der **`ClipboardItem`**-Schnittstelle zur Darstellung von Daten besteht darin, dass Entwickler mit der unterschiedlichen Bandbreite von Dateitypen und Daten umgehen können.

> [!NOTE]
> Um mit Text zu arbeiten, siehe die Methoden [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle.

## Konstruktor

- [`ClipboardItem()`](/de/docs/Web/API/ClipboardItem/ClipboardItem)
  - : Erstellt ein neues **`ClipboardItem`**-Objekt, mit dem {{Glossary("MIME_type", "MIME-Typ")}} als Schlüssel und [`Blob`](/de/docs/Web/API/Blob) als Wert.

## Instanz-Eigenschaften

_Diese Schnittstelle bietet die folgenden Eigenschaften._

- [`types`](/de/docs/Web/API/ClipboardItem/types) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Array")}} von MIME-Typen zurück, die im **`ClipboardItem`** verfügbar sind.
- [`presentationStyle`](/de/docs/Web/API/ClipboardItem/presentationStyle) {{ReadOnlyInline}}
  - : Gibt einen der folgenden Werte zurück: `"unspecified"`, `"inline"` oder `"attachment"`.

## Statische Methoden

_Diese Schnittstelle definiert die folgenden Methoden._

- [`ClipboardItem.supports()`](/de/docs/Web/API/ClipboardItem/supports_static)
  - : Prüft, ob ein gegebener {{Glossary("MIME_type", "MIME-Typ")}} von der Zwischenablage unterstützt wird. Dies ermöglicht es einer Website zu erkennen, ob ein MIME-Typ von der Zwischenablage unterstützt wird, bevor versucht wird, Daten zu schreiben.

## Instanz-Methoden

_Diese Schnittstelle definiert die folgenden Methoden._

- [`getType()`](/de/docs/Web/API/ClipboardItem/getType)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) des angeforderten {{Glossary("MIME_type", "MIME-Typs")}} aufgelöst wird, oder einen Fehler, wenn der MIME-Typ nicht gefunden wird.

## Beispiele

### Schreiben in die Zwischenablage

Hier verwenden wir [`supports()`](/de/docs/Web/API/ClipboardItem/supports_static), um zu überprüfen, ob der MIME-Datentyp `image/svg+xml` unterstützt wird. Wenn ja, laden wir das Bild mit der ["Fetch API"](/de/docs/Web/API/Fetch_API) herunter und lesen es in ein [`Blob`](/de/docs/Web/API/Blob) ein, mit dem wir ein `ClipboardItem` erstellen können, das in die Zwischenablage geschrieben wird.

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

### Lesen aus der Zwischenablage

Hier geben wir alle Elemente auf der Zwischenablage über die Methode [`clipboard.read()`](/de/docs/Web/API/Clipboard/read) zurück. Dann verwenden wir die Eigenschaft [`ClipboardItem.types`](/de/docs/Web/API/ClipboardItem/types), um das Argument für [`getType()`](/de/docs/Web/API/ClipboardItem/getType) festzulegen und das entsprechende Blob-Objekt zurückzugeben.

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
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
