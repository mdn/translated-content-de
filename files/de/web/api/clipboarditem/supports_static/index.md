---
title: "ClipboardItem: supports() statische Methode"
short-title: supports()
slug: Web/API/ClipboardItem/supports_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`supports()`** statische Methode des [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Interfaces gibt `true` zurück, wenn der angegebene {{Glossary("MIME_type", "MIME-Typ")}} von der Zwischenablage unterstützt wird, und `false` andernfalls.

Beachten Sie, dass die [Clipboard API](/de/docs/Web/API/Clipboard_API) die Unterstützung für Klartext, HTML und PNG-Dateien vorschreibt. Die `supports()`-Methode wird für diese MIME-Typen immer `true` zurückgeben, sodass deren Prüfung unnötig ist.

## Syntax

```js-nolint
supports(type)
```

### Parameter

- `type`

  - : Ein String, der den zu testenden {{Glossary("MIME_type", "MIME-Typ")}} angibt.

    Diese MIME-Typen werden immer unterstützt:

    - `text/plain`
    - `text/html`
    - `image/png`

    Diese MIME-Typen können unterstützt werden:

    - `image/svg+xml`
    - Benutzerdefinierte MIME-Typ-Formate, die mit `"web "` beginnen.
      Der benutzerdefinierte Typ (ohne das Präfix `"web "`) muss das korrekte Format für einen MIME-Typ haben.

### Rückgabewert

`true`, wenn der angegebene {{Glossary("MIME_type", "MIME-Typ")}} von der Zwischenablage unterstützt wird, `false` andernfalls.

## Beispiele

### Ein Bild in die Zwischenablage schreiben

Das folgende Beispiel ruft ein SVG-Bild ab, stellt es als [`Blob`](/de/docs/Web/API/Blob) dar und schreibt es dann in die Zwischenablage.

Wir verwenden `supports()`, um zu prüfen, ob der MIME-Typ `"image/svg+xml"` von der Zwischenablage unterstützt wird, bevor wir das Bild abrufen und es mit [`clipboard.write()`](/de/docs/Web/API/Clipboard/write) schreiben. Wir umhüllen den gesamten Funktionskörper auch in eine [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung, um mögliche andere Fehler abzufangen, wie zum Beispiel, dass `ClipboardItem` selbst nicht unterstützt wird.

```js
async function writeClipImg() {
  try {
    if (ClipboardItem.supports("image/svg+xml")) {
      const imgURL = "/my-image.svg";
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
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
