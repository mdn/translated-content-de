---
title: "ClipboardItem: types Eigenschaft"
short-title: types
slug: Web/API/ClipboardItem/types
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die schreibgeschützte **`types`**-Eigenschaft der [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Schnittstelle gibt ein {{jsxref("Array")}} verfügbarer [MIME-Typen](/de/docs/Glossary/MIME_type) innerhalb des [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) zurück.

## Wert

Ein {{jsxref("Array")}} verfügbarer [MIME-Typen](/de/docs/Glossary/MIME_type).

## Beispiele

Im untenstehenden Beispiel geben wir alle Elemente in der Zwischenablage über die [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read)-Methode zurück. Dann prüfen wir die `types`-Eigenschaft auf verfügbare Typen, bevor wir die [`ClipboardItem.getType()`](/de/docs/Web/API/ClipboardItem/getType)-Methode verwenden, um das [`Blob`](/de/docs/Web/API/Blob)-Objekt zurückzugeben. Wenn für den angegebenen Typ keine Inhalte in der Zwischenablage gefunden werden, wird ein Fehler zurückgegeben.

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
- [Artikel zu Bildunterstützung für das asynchrone Clipboard](https://web.dev/articles/async-clipboard)
