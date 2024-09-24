---
title: "ClipboardItem: ClipboardItem() Konstruktor"
short-title: ClipboardItem()
slug: Web/API/ClipboardItem/ClipboardItem
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Der **`ClipboardItem()`**-Konstruktor erstellt ein neues {{domxref("ClipboardItem")}}-Objekt, das Daten repräsentiert, die mittels der [Clipboard API](/de/docs/Web/API/Clipboard_API) über die Methoden {{domxref("clipboard.write()")}} und {{domxref("clipboard.read()")}} gespeichert oder abgerufen werden.

> [!NOTE]
> Die Unterstützung von Bildformaten variiert je nach Browser. Siehe die Kompatibilitätstabelle der {{domxref("Clipboard")}}-Schnittstelle.

## Syntax

```js-nolint
new ClipboardItem(data)
new ClipboardItem(data, options)
```

### Parameter

- `data`
  - : Ein {{jsxref("Object")}} mit dem {{Glossary("MIME type")}} als Schlüssel und den Daten als Wert.
    Die Daten können als {{domxref("Blob")}}, {{jsxref("String")}} oder {{jsxref("Promise")}}, die zu einem Blob oder String auflösen, dargestellt werden.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `presentationStyle` {{optional_inline}}
      - : Einer der drei Strings: `unspecified`, `inline` oder `attachment`.
        Der Standardwert ist `unspecified`.

> [!NOTE]
> Sie können auch mit Texten über die Methoden {{domxref("Clipboard.readText()")}} und {{domxref("Clipboard.writeText()")}} der {{domxref("Clipboard")}}-Schnittstelle arbeiten.

## Beispiele

Im folgenden Beispiel wird ein PNG-Bild mithilfe von {{domxref("Window/fetch", "fetch()")}} sowie der {{domxref("Response.blob()")}}-Methode abgefragt, um ein neues {{domxref("ClipboardItem")}} zu erstellen.
Dieses Element wird dann mithilfe der {{domxref("Clipboard.write()")}}-Methode in die Zwischenablage geschrieben.

> [!NOTE]
> Sie können jeweils nur ein Zwischenablage-Element übertragen.

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
