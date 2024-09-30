---
title: "ClipboardItem: ClipboardItem() Konstruktor"
short-title: ClipboardItem()
slug: Web/API/ClipboardItem/ClipboardItem
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Der **`ClipboardItem()`** Konstruktor erstellt ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) Objekt, das Daten repräsentiert, die über die Methoden [`clipboard.write()`](/de/docs/Web/API/Clipboard/write) und [`clipboard.read()`](/de/docs/Web/API/Clipboard/read) der [Clipboard API](/de/docs/Web/API/Clipboard_API) gespeichert oder abgerufen werden sollen.

> [!NOTE]
> Die Unterstützung für Bildformate variiert je nach Browser. Sehen Sie in der Browser-Kompatibilitätstabelle für das [`Clipboard`](/de/docs/Web/API/Clipboard) Interface nach.

## Syntax

```js-nolint
new ClipboardItem(data)
new ClipboardItem(data, options)
```

### Parameter

- `data`
  - : Ein {{jsxref("Object")}} mit dem [MIME-Typ](/de/docs/Glossary/MIME_type) als Schlüssel und Daten als Wert.
    Die Daten können als [`Blob`](/de/docs/Web/API/Blob), als {{jsxref("String")}} oder als {{jsxref("Promise")}} dargestellt werden, das sich entweder in einen Blob oder String auflöst.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `presentationStyle` {{optional_inline}}
      - : Einer der drei Strings: `unspecified`, `inline` oder `attachment`.
        Der Standardwert ist `unspecified`.

> [!NOTE]
> Sie können auch mit Text über die Methoden [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) des [`Clipboard`](/de/docs/Web/API/Clipboard) Interfaces arbeiten.

## Beispiele

Das folgende Beispiel fordert ein PNG-Bild mit [`fetch()`](/de/docs/Web/API/Window/fetch) und der Methode [`Response.blob()`](/de/docs/Web/API/Response/blob) an, um ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) zu erstellen.
Dieses Element wird dann mit der Methode [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write) in die Zwischenablage geschrieben.

> [!NOTE]
> Sie können jeweils nur ein Zwischenablageelement übergeben.

```js
async function writeClipImg() {
  try {
    if (ClipboardItem.supports("image/png")) {
      const imgURL = "/myimage.png";
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
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
