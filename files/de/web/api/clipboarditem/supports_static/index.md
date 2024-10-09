---
title: "ClipboardItem: supports() statische Methode"
short-title: supports()
slug: Web/API/ClipboardItem/supports_static
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`supports()`** statische Methode der [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Schnittstelle gibt `true` zurück, wenn der angegebene {{Glossary("MIME_type", "MIME-Typ")}} von der Zwischenablage unterstützt wird, und `false` andernfalls.

Beachten Sie, dass die [Clipboard API](/de/docs/Web/API/Clipboard_API) die Unterstützung für Klartext, HTML und PNG-Dateien vorschreibt.
Die `supports()`-Methode gibt für diese MIME-Typen immer `true` zurück, sodass ein Test nicht notwendig ist.

## Syntax

```js-nolint
supports(type)
```

### Parameter

- `type`

  - : Ein String, der den zu prüfenden {{Glossary("MIME_type", "MIME-Typ")}} angibt.

    Diese MIME-Typen werden immer unterstützt:

    - `text/plain`
    - `text/html`
    - `image/png`

    Diese MIME-Typen können unterstützt werden:

    - `image/svg+xml`
    - Custom MIME-Type-Formate, die mit `"web "` beginnen.
      Der benutzerdefinierte Typ (ohne das Präfix `"web "`) muss die korrekte Formatierung für einen MIME-Typ haben.

### Rückgabewert

`true`, wenn der angegebene {{Glossary("MIME_type", "MIME-Typ")}} von der Zwischenablage unterstützt wird, `false` andernfalls.

## Beispiele

### Ein Bild in die Zwischenablage schreiben

Das folgende Beispiel ruft ein SVG-Bild in einen Blob ab und schreibt es dann in die Zwischenablage.

Wir verwenden `supports()`, um zu überprüfen, ob der `"image/svg+xml"` MIME-Typ von der Zwischenablage unterstützt wird, bevor wir das Bild abrufen und mit [`clipboard.write()`](/de/docs/Web/API/Clipboard/write) schreiben.
Wir wickeln auch den gesamten Funktionskörper in eine [`try..catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung ein, um andere Fehler abzufangen, wie z.B. wenn `ClipboardItem` selbst nicht unterstützt wird.

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
- [Unterstützung von Bildern für Artikel zur asynchronen Zwischenablage](https://web.dev/articles/async-clipboard)
