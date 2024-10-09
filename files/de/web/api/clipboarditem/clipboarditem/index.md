---
title: "ClipboardItem: ClipboardItem() Konstruktor"
short-title: ClipboardItem()
slug: Web/API/ClipboardItem/ClipboardItem
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Der **`ClipboardItem()`**-Konstruktor erstellt ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekt, das Daten repräsentiert, die über die [Clipboard API](/de/docs/Web/API/Clipboard_API) mithilfe der Methoden [`clipboard.write()`](/de/docs/Web/API/Clipboard/write) und [`clipboard.read()`](/de/docs/Web/API/Clipboard/read) gespeichert oder abgerufen werden.

> [!NOTE]
> Die Unterstützung von Bildformaten variiert je nach Browser. Siehe die Tabelle zur Browser-Kompatibilität für das [`Clipboard`](/de/docs/Web/API/Clipboard)-Interface.

## Syntax

```js-nolint
new ClipboardItem(data)
new ClipboardItem(data, options)
```

### Parameter

- `data`
  - : Ein {{jsxref("Object")}} mit dem {{Glossary("MIME_type", "MIME-Typ")}} als Schlüssel und den Daten als Wert.
    Die Daten können als [`Blob`](/de/docs/Web/API/Blob), {{jsxref("String")}} oder {{jsxref("Promise")}} dargestellt werden, die sich entweder zu einem Blob oder String auflöst.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `presentationStyle` {{optional_inline}}
      - : Einer der drei Strings: `unspecified`, `inline` oder `attachment`.
        Der Standardwert ist `unspecified`.

> [!NOTE]
> Sie können auch mit Text über die Methoden [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) des [`Clipboard`](/de/docs/Web/API/Clipboard)-Interfaces arbeiten.

## Beispiele

Das folgende Beispiel fordert ein PNG-Bild mit [`fetch()`](/de/docs/Web/API/Window/fetch) und in der Folge die Methode [`Response.blob()`](/de/docs/Web/API/Response/blob) an, um ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) zu erstellen.
Dieses Element wird dann mithilfe der Methode [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write) in die Zwischenablage geschrieben.

> [!NOTE]
> Sie können jeweils nur ein Zwischenablage-Element übergeben.

```js
async function writeClipImg() {
  try {
    if (ClipboardItem.supports("image/png")) {
      const imgURL = "/my-image.png";
      const data = await fetch(imgURL);
      const blob = await data.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      console.log("Fetched image copied.");
    } else {
      console.log("image png is not suported");
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
- [Artikel zur Bildunterstützung für asynchrone Zwischenablage](https://web.dev/articles/async-clipboard)
