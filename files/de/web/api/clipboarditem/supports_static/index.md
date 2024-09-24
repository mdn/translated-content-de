---
title: "ClipboardItem: static Methode supports()"
short-title: supports()
slug: Web/API/ClipboardItem/supports_static
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`supports()`** statische Methode der {{domxref("ClipboardItem")}} Schnittstelle gibt `true` zurück, wenn der angegebene {{Glossary("MIME type")}} vom Zwischenspeicher unterstützt wird, und `false` andernfalls.

Beachten Sie, dass die [Clipboard API](/de/docs/Web/API/Clipboard_API) die Unterstützung für Klartext, HTML und PNG-Dateien vorschreibt. Die Methode `supports()` wird für diese MIME-Typen immer `true` zurückgeben, sodass ein Testen nicht erforderlich ist.

## Syntax

```js-nolint
supports(type)
```

### Parameter

- `type`

  - : Ein String, der den zu testenden {{Glossary("MIME type")}} angibt.

    Diese MIME-Typen werden immer unterstützt:

    - `text/plain`
    - `text/html`
    - `image/png`

    Diese MIME-Typen könnten unterstützt werden:

    - `image/svg+xml`
    - Benutzerdefinierte MIME-Type-Formate, die mit `"web "` beginnen. Der benutzerdefinierte Typ (ohne das Präfix `"web "`) muss das korrekte Format für einen MIME-Typ haben.

### Rückgabewert

`true`, wenn der angegebene {{Glossary("MIME type")}} vom Zwischenspeicher unterstützt wird, andernfalls `false`.

## Beispiele

### Schreiben eines Bildes in den Zwischenspeicher

Das folgende Beispiel lädt ein SVG-Bild als Blob herunter und schreibt es dann in den Zwischenspeicher.

Wir verwenden `supports()`, um zu überprüfen, ob der MIME-Typ `"image/svg+xml"` vom Zwischenspeicher unterstützt wird, bevor das Bild geladen und mit {{domxref("clipboard.write()")}} geschrieben wird.
Wir fassen den gesamten Funktionskörper auch in eine [`try..catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Anweisung, um andere Fehler abzufangen, z. B. wenn `ClipboardItem` selbst nicht unterstützt wird.

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
- [Bildunterstützung für Async Clipboard Artikel](https://web.dev/articles/async-clipboard)
