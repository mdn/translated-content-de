---
title: "ClipboardItem: types-Eigenschaft"
short-title: types
slug: Web/API/ClipboardItem/types
l10n:
  sourceCommit: eaa5b39f80d5fac0e5bf182679dc658b7083d15b
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die schreibgeschützte **`types`**-Eigenschaft der [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Schnittstelle gibt ein {{jsxref("Array")}} von {{Glossary("MIME_type", "MIME-Typen")}} zurück, die innerhalb des [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) verfügbar sind.

## Wert

Ein {{jsxref("Array")}} der verfügbaren {{Glossary("MIME_type", "MIME-Typen")}}.

## Beispiele

Im untenstehenden Beispiel geben wir alle Elemente in der Zwischenablage über die [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read)-Methode zurück, überprüfen dann die `types`-Eigenschaft auf verfügbare Typen, bevor wir die [`ClipboardItem.getType()`](/de/docs/Web/API/ClipboardItem/getType)-Methode verwenden, um jedes Datenelement als [`Blob`](/de/docs/Web/API/Blob) zurückzugeben. Wenn für den angegebenen Typ keine Inhalte in der Zwischenablage gefunden werden, wird ein Fehler zurückgegeben.

```js
async function getClipboardContents() {
  try {
    const clipboardItems = await navigator.clipboard.read();

    for (const clipboardItem of clipboardItems) {
      for (const type of clipboardItem.types) {
        const blob = await clipboardItem.getType(type);
        // we can now use blob here
      }
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
- [Artikel zur Bildunterstützung für Asynchrone Zwischenablage](https://web.dev/articles/async-clipboard)
