---
title: ClipboardItem
slug: Web/API/ClipboardItem
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

Die **`ClipboardItem`**-Schnittstelle der [Clipboard API](/de/docs/Web/API/Clipboard_API) repräsentiert ein einzelnes Format-Element, das beim Lesen oder Schreiben von Zwischenablagedaten mit [`clipboard.read()`](/de/docs/Web/API/Clipboard/read) und [`clipboard.write()`](/de/docs/Web/API/Clipboard/write) verwendet wird.

Der Vorteil der **`ClipboardItem`**-Schnittstelle zur Darstellung von Daten besteht darin, dass sie es Entwicklern ermöglicht, mit der unterschiedlichen Reichweite von Dateitypen und Daten umzugehen.

> [!NOTE]
> Um mit Text zu arbeiten, siehe die Methoden [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle.

## Konstruktor

- [`ClipboardItem()`](/de/docs/Web/API/ClipboardItem/ClipboardItem)
  - : Erstellt ein neues **`ClipboardItem`**-Objekt, wobei der [MIME-Typ](/de/docs/Glossary/MIME_type) als Schlüssel und [`Blob`](/de/docs/Web/API/Blob) als Wert dient.

## Instanz-Eigenschaften

_Diese Schnittstelle bietet die folgenden Eigenschaften._

- [`types`](/de/docs/Web/API/ClipboardItem/types) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Array")}} von MIME-Typen zurück, die im **`ClipboardItem`** verfügbar sind.
- [`presentationStyle`](/de/docs/Web/API/ClipboardItem/presentationStyle) {{ReadOnlyInline}}
  - : Gibt einen der folgenden Werte zurück: `"unspecified"`, `"inline"` oder `"attachment"`.

## Statische Methoden

_Diese Schnittstelle definiert die folgenden Methoden._

- [`ClipboardItem.supports()`](/de/docs/Web/API/ClipboardItem/supports_static)
  - : Überprüft, ob ein gegebener [MIME-Typ](/de/docs/Glossary/MIME_type) von der Zwischenablage unterstützt wird. Dies ermöglicht es einer Website zu erkennen, ob ein MIME-Typ von der Zwischenablage unterstützt wird, bevor versucht wird, Daten zu schreiben.

## Instanz-Methoden

_Diese Schnittstelle definiert die folgenden Methoden._

- [`getType()`](/de/docs/Web/API/ClipboardItem/getType)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) des angeforderten [MIME-Typs](/de/docs/Glossary/MIME_type) aufgelöst wird, oder einen Fehler, wenn der MIME-Typ nicht gefunden wird.

## Beispiele

### In die Zwischenablage schreiben

Hier verwenden wir [`supports()`](/de/docs/Web/API/ClipboardItem/supports_static), um zu überprüfen, ob der `image/svg+xml` MIME-Datentyp unterstützt wird.
Falls ja, holen wir das Bild mit der ["Fetch API"](/de/docs/Web/API/Fetch_API) und lesen es dann in einen [`Blob`](/de/docs/Web/API/Blob) ein, den wir zur Erstellung eines `ClipboardItem` verwenden können, das in die Zwischenablage geschrieben wird.

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

### Von der Zwischenablage lesen

Hier geben wir alle Elemente auf der Zwischenablage über die [`clipboard.read()`](/de/docs/Web/API/Clipboard/read)-Methode zurück.
Dann nutzen wir die [`ClipboardItem.types`](/de/docs/Web/API/ClipboardItem/types)-Eigenschaft, um das Argument von [`getType()`](/de/docs/Web/API/ClipboardItem/getType) festzulegen und das entsprechende Blob-Objekt zurückzugeben.

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
