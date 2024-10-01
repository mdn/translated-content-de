---
title: ClipboardItem
slug: Web/API/ClipboardItem
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

Das **`ClipboardItem`**-Interface der [Clipboard API](/de/docs/Web/API/Clipboard_API) repräsentiert ein einzelnes Datenformat, das beim Lesen oder Schreiben von Zwischenablagedaten mithilfe von [`clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`clipboard.write()`](/de/docs/Web/API/Clipboard/write) verwendet wird.

Der Vorteil des **`ClipboardItem`**-Interfaces zur Darstellung von Daten besteht darin, dass es Entwicklern ermöglicht, mit der unterschiedlichen Bandbreite der Dateitypen und Daten umzugehen.

> [!NOTE]
> Um mit Text zu arbeiten, sehen Sie sich die Methoden [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) des [`Clipboard`](/de/docs/Web/API/Clipboard)-Interfaces an.

## Konstruktor

- [`ClipboardItem()`](/de/docs/Web/API/ClipboardItem/ClipboardItem)
  - : Erstellt ein neues **`ClipboardItem`**-Objekt mit dem {{Glossary("MIME_type", "MIME-Typ")}} als Schlüssel und [`Blob`](/de/docs/Web/API/Blob) als Wert.

## Instanzeigenschaften

_Dieses Interface bietet die folgenden Eigenschaften._

- [`types`](/de/docs/Web/API/ClipboardItem/types) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Array")}} von MIME-Typen zurück, die im **`ClipboardItem`** verfügbar sind.
- [`presentationStyle`](/de/docs/Web/API/ClipboardItem/presentationStyle) {{ReadOnlyInline}}
  - : Gibt einen der folgenden Werte zurück: `"unspecified"`, `"inline"` oder `"attachment"`.

## Statische Methoden

_Dieses Interface definiert die folgenden Methoden._

- [`ClipboardItem.supports()`](/de/docs/Web/API/ClipboardItem/supports_static)
  - : Überprüft, ob ein gegebener {{Glossary("MIME_type", "MIME-Typ")}} von der Zwischenablage unterstützt wird. Dies ermöglicht es einer Website festzustellen, ob ein MIME-Typ von der Zwischenablage unterstützt wird, bevor versucht wird, Daten zu schreiben.

## Instanzmethoden

_Dieses Interface definiert die folgenden Methoden._

- [`getType()`](/de/docs/Web/API/ClipboardItem/getType)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) des angeforderten {{Glossary("MIME_type", "MIME-Typs")}} aufgelöst wird, oder einen Fehler, wenn der MIME-Typ nicht gefunden wird.

## Beispiele

### Schreiben in die Zwischenablage

Hier verwenden wir [`supports()`](/de/docs/Web/API/ClipboardItem/supports_static), um zu prüfen, ob der `image/svg+xml` MIME-Datentyp unterstützt wird. Falls ja, holen wir das Bild mit der ["Fetch API"](/de/docs/Web/API/Fetch_API) und lesen es in ein [`Blob`](/de/docs/Web/API/Blob) ein, das wir verwenden können, um ein `ClipboardItem` zu erstellen, das in die Zwischenablage geschrieben wird.

```js
async function writeClipImg() {
  try {
    if (ClipboardItem.supports("image/svg+xml")) {
      const imgURL = "/myimage.svg";
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

Hier geben wir alle Elemente auf der Zwischenablage über die [`clipboard.read()`](/de/docs/Web/API/Clipboard/read)-Methode zurück. Dann verwenden wir die [`ClipboardItem.types`](/de/docs/Web/API/ClipboardItem/types)-Eigenschaft, um das Argument von [`getType()`](/de/docs/Web/API/ClipboardItem/getType) festzulegen und das entsprechende Blob-Objekt zurückzugeben.

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
- [Artikel über Bildunterstützung für asynchrone Zwischenablage](https://web.dev/articles/async-clipboard)
