---
title: "ClipboardItem: ClipboardItem() Konstruktor"
short-title: ClipboardItem()
slug: Web/API/ClipboardItem/ClipboardItem
l10n:
  sourceCommit: eaa5b39f80d5fac0e5bf182679dc658b7083d15b
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Der **`ClipboardItem()`** Konstruktor erstellt ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekt, das Daten darstellt, die über die [Clipboard API](/de/docs/Web/API/Clipboard_API) mithilfe der Methoden [`clipboard.write()`](/de/docs/Web/API/Clipboard/write) und [`clipboard.read()`](/de/docs/Web/API/Clipboard/read) gespeichert oder abgerufen werden sollen.

> [!NOTE]
> Die Methoden `read()` und `write()` können verwendet werden, um mit Textzeichenfolgen und beliebigen Datenelementen zu arbeiten, die durch [`Blob`](/de/docs/Web/API/Blob)-Instanzen dargestellt werden. Wenn Sie jedoch ausschließlich mit Text arbeiten, ist es bequemer, die Methoden [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) zu verwenden.

> [!NOTE]
> Der Bildformatsupport variiert je nach Browser. Sehen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/API/Clipboard#browser_compatibility) für die `Clipboard`-Schnittstelle an.

## Syntax

```js-nolint
new ClipboardItem(data)
new ClipboardItem(data, options)
```

### Parameter

- `data`
  - : Ein {{jsxref("Object")}} mit dem {{Glossary("MIME_type", "MIME-Typ")}} als Schlüssel und den Daten als Wert. Die Daten können wie folgt dargestellt werden:
    - ein [`Blob`](/de/docs/Web/API/Blob)
    - ein String
    - ein {{jsxref("Promise")}}, das entweder zu einem `Blob` oder String aufgelöst wird.
- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `presentationStyle` {{optional_inline}}

      - : Einer der drei Strings: `unspecified`, `inline` oder `attachment`. Der Standardwert ist `unspecified`.

        `inline` signalisiert den Empfängeranwendungen, dass das `ClipboardItem` an der Stelle des Einfügens inline eingefügt werden soll. `attachment` signalisiert den Empfängeranwendungen, dass das `ClipboardItem` als Anhang hinzugefügt werden soll. `unspecified` signalisiert den Empfängeranwendungen keine spezielle Information beim Einfügen.

## Beispiele

Das untenstehende Beispiel fordert ein PNG-Bild mit [`fetch()`](/de/docs/Web/API/Window/fetch) an und verwendet die Methode [`Response.blob()`](/de/docs/Web/API/Response/blob), um ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) zu erstellen. Dieses Element wird dann mithilfe der [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write)-Methode in die Zwischenablage geschrieben.

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
      console.log("image png is not supported");
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
- [Unterstützung von Bildern für asynchronen Clipboard-Artikel](https://web.dev/articles/async-clipboard)
