---
title: "ClipboardItem: ClipboardItem() Konstruktor"
short-title: ClipboardItem()
slug: Web/API/ClipboardItem/ClipboardItem
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Der **`ClipboardItem()`** Konstruktor erstellt ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekt, das Daten repräsentiert, die über die [Clipboard API](/de/docs/Web/API/Clipboard_API) mit den Methoden [`clipboard.write()`](/de/docs/Web/API/Clipboard/write) und [`clipboard.read()`](/de/docs/Web/API/Clipboard/read) gespeichert oder abgerufen werden können.

> [!NOTE]
> Die Methoden `read()` und `write()` können verwendet werden, um mit Textzeichenfolgen und beliebigen Datenelementen zu arbeiten, die durch [`Blob`](/de/docs/Web/API/Blob)-Instanzen dargestellt werden. Wenn Sie jedoch ausschließlich mit Text arbeiten, ist es bequemer, die Methoden [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) zu verwenden.

> [!NOTE]
> Die Unterstützung des Bildformats variiert je nach Browser. Siehe die [Browser-Kompatibilitätstabelle](/de/docs/Web/API/Clipboard#browser_compatibility) für das `Clipboard`-Interface.

## Syntax

```js-nolint
new ClipboardItem(data)
new ClipboardItem(data, options)
```

### Parameter

- `data`
  - : Ein {{jsxref("Object")}} mit dem {{Glossary("MIME_type", "MIME-Typ")}} als Schlüssel und den Daten als Wert.
    Die Daten können wie folgt dargestellt werden:
    - ein [`Blob`](/de/docs/Web/API/Blob)
    - eine Zeichenfolge
    - ein {{jsxref("Promise")}}, das entweder zu einem `Blob` oder einer Zeichenfolge aufgelöst wird.
- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `presentationStyle` {{optional_inline}}

      - : Einer der drei Zeichenfolgen: `unspecified`, `inline` oder `attachment`.
        Der Standardwert ist `unspecified`.

        `inline` bedeutet, dass Apps, die das Einfügen erhalten, den `ClipboardItem` an der Einfügestelle inline einfügen sollen. `attachment` bedeutet, dass Apps, die das Einfügen erhalten, den `ClipboardItem` als Anhang hinzufügen sollen. `unspecified` gibt keine Information zur Einfügung an die Apps weiter.

## Beispiele

Das folgende Beispiel fordert ein PNG-Bild an, indem [`fetch()`](/de/docs/Web/API/Window/fetch) und die Methode [`Response.blob()`](/de/docs/Web/API/Response/blob) verwendet werden, um ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) zu erstellen. Dieses Element wird dann mit der Methode [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write) in die Zwischenablage geschrieben.

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
- [Artikel zur Unterstützung von Bildern für die asynchrone Zwischenablage](https://web.dev/articles/async-clipboard)
