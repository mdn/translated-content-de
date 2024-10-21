---
title: "ClipboardItem: ClipboardItem() Konstruktor"
short-title: ClipboardItem()
slug: Web/API/ClipboardItem/ClipboardItem
l10n:
  sourceCommit: 46864cb727e633e083e531c42c666e039f5a8d17
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Der **`ClipboardItem()`** Konstruktor erstellt ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) Objekt, das Daten darstellt, die über die [Clipboard API](/de/docs/Web/API/Clipboard_API) Methoden [`clipboard.write()`](/de/docs/Web/API/Clipboard/write) und [`clipboard.read()`](/de/docs/Web/API/Clipboard/read) gespeichert oder abgerufen werden können.

> [!NOTE]
> Die Unterstützung von Bildformaten variiert je nach Browser. Siehe die Tabelle zur Browser-Kompatibilität für die [`Clipboard`](/de/docs/Web/API/Clipboard) Schnittstelle.

## Syntax

```js-nolint
new ClipboardItem(data)
new ClipboardItem(data, options)
```

### Parameter

- `data`
  - : Ein {{jsxref("Object")}} mit dem {{Glossary("MIME_type", "MIME-Typ")}} als Schlüssel und den Daten als Wert.
    Die Daten können als [`Blob`](/de/docs/Web/API/Blob), als {{jsxref("String")}} oder als {{jsxref("Promise")}} dargestellt werden, das sich entweder zu einem Blob oder einem String auflöst.
- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `presentationStyle` {{optional_inline}}

      - : Einer der drei Strings: `unspecified`, `inline` oder `attachment`.
        Der Standardwert ist `unspecified`.

        `inline` weist Apps, die das Einfügen erhalten, darauf hin, dass das `ClipboardItem` an der Einfügestelle inline eingefügt werden sollte. `attachment` weist Apps darauf hin, dass das `ClipboardItem` als Anhang hinzugefügt werden sollte. `unspecified` gibt keine Information an Apps, die das Einfügen erhalten.

> [!NOTE]
> Sie können auch mit Text über die Methoden [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) der [`Clipboard`](/de/docs/Web/API/Clipboard) Schnittstelle arbeiten.

## Beispiele

Das folgende Beispiel fordert ein PNG-Bild an, indem [`fetch()`](/de/docs/Web/API/Window/fetch) und in der Folge die [`Response.blob()`](/de/docs/Web/API/Response/blob) Methode verwendet werden, um ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) zu erstellen.
Dieses Element wird dann mit der [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write) Methode in die Zwischenablage geschrieben.

> [!NOTE]
> Sie können jeweils nur ein Zwischenablageelement übergeben.

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
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
