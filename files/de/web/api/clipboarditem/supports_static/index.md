---
title: "ClipboardItem: supports() statische Methode"
short-title: supports()
slug: Web/API/ClipboardItem/supports_static
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die statische Methode **`supports()`** der [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Schnittstelle gibt `true` zurück, wenn der angegebene [MIME-Typ](/de/docs/Glossary/MIME_type) von der Zwischenablage unterstützt wird, andernfalls `false`.

Beachten Sie, dass die [Clipboard API](/de/docs/Web/API/Clipboard_API) die Unterstützung für einfachen Text, HTML und PNG-Dateien vorschreibt.
Die `supports()`-Methode wird für diese MIME-Typen immer `true` zurückgeben, sodass ein Test nicht notwendig ist.

## Syntax

```js-nolint
supports(type)
```

### Parameter

- `type`

  - : Ein String, der den zu testenden [MIME-Typ](/de/docs/Glossary/MIME_type) angibt.

    Diese MIME-Typen werden immer unterstützt:

    - `text/plain`
    - `text/html`
    - `image/png`

    Diese MIME-Typen können unterstützt werden:

    - `image/svg+xml`
    - Benutzerdefinierte MIME-Typ-Formate, die mit `"web "` beginnen.
      Der benutzerdefinierte Typ (ohne das Präfix `"web "`) muss das korrekte Format für einen MIME-Typ haben.

### Rückgabewert

`true`, wenn der angegebene [MIME-Typ](/de/docs/Glossary/MIME_type) von der Zwischenablage unterstützt wird, andernfalls `false`.

## Beispiele

### Ein Bild in die Zwischenablage schreiben

Das folgende Beispiel lädt ein SVG-Bild als Blob herunter und schreibt es dann in die Zwischenablage.

Wir verwenden `supports()`, um zu überprüfen, ob der MIME-Typ `"image/svg+xml"` von der Zwischenablage unterstützt wird, bevor das Bild heruntergeladen und mit [`clipboard.write()`](/de/docs/Web/API/Clipboard/write) geschrieben wird.
Wir umschließen auch den gesamten Funktionskörper in einem [`try..catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um andere Fehler abzufangen, wie z.B. dass `ClipboardItem` selbst nicht unterstützt wird.

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
      console.log("Fetched image copied to clipboard.");
    } else {
      console.log("SVG image not supported by clipboard");
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
