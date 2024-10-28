---
title: "ClipboardItem: ClipboardItem() Konstruktor"
short-title: ClipboardItem()
slug: Web/API/ClipboardItem/ClipboardItem
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Der **`ClipboardItem()`** Konstruktor erstellt ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekt, das Daten repräsentiert, die über die [Clipboard API](/de/docs/Web/API/Clipboard_API) mit den Methoden [`clipboard.write()`](/de/docs/Web/API/Clipboard/write) und [`clipboard.read()`](/de/docs/Web/API/Clipboard/read) gespeichert oder abgerufen werden können.

> [!NOTE]
> Die Unterstützung für Bildformate variiert je nach Browser. Siehe die Tabelle zur Browser-Kompatibilität für das [`Clipboard`](/de/docs/Web/API/Clipboard) Interface.

## Syntax

```js-nolint
new ClipboardItem(data)
new ClipboardItem(data, options)
```

### Parameter

- `data`
  - : Ein {{jsxref("Object")}} mit dem {{Glossary("MIME_type", "MIME-Typ")}} als Schlüssel und den Daten als Wert.
    Die Daten können als [`Blob`](/de/docs/Web/API/Blob), als {{jsxref("String")}} oder als {{jsxref("Promise")}} dargestellt werden, die entweder in einem Blob oder String aufgelöst wird.
- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `presentationStyle` {{optional_inline}}

      - : Eines der drei Zeichenfolgen: `unspecified`, `inline` oder `attachment`.
        Der Standardwert ist `unspecified`.

        `inline` signalisiert den Apps, die den Einfügevorgang empfangen, dass das `ClipboardItem` an der Einfügestelle inline eingefügt werden soll. `attachment` signalisiert den empfängenden Apps, dass das `ClipboardItem` als Anhang hinzugefügt werden soll. `unspecified` übermittelt den empfangenden Apps keine Informationen.

> [!NOTE]
> Sie können auch mit Text über die Methoden [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) des [`Clipboard`](/de/docs/Web/API/Clipboard) Interfaces arbeiten.

## Beispiele

Im folgenden Beispiel wird ein PNG-Bild mit [`fetch()`](/de/docs/Web/API/Window/fetch) und der Methode [`Response.blob()`](/de/docs/Web/API/Response/blob) angefordert, um ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) zu erstellen.
Dieses Element wird dann mit der Methode [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write) in die Zwischenablage geschrieben.

> [!NOTE]
> Sie können nur jeweils ein Element in die Zwischenablage kopieren.

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
- [Bildunterstützung für Asynchronen Clipboard-Artikel](https://web.dev/articles/async-clipboard)
