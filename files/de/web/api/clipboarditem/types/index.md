---
title: "ClipboardItem: types-Eigenschaft"
short-title: types
slug: Web/API/ClipboardItem/types
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die schreibgeschützte **`types`**-Eigenschaft des [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Interfaces gibt ein {{jsxref("Array")}} der im [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) verfügbaren {{Glossary("MIME_type", "MIME-Typen")}} zurück.

## Wert

Ein {{jsxref("Array")}} der verfügbaren {{Glossary("MIME_type", "MIME-Typen")}}.

## Beispiele

Im unten stehenden Beispiel geben wir alle Einträge in der Zwischenablage über die [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read)-Methode zurück. Dann prüfen wir die `types`-Eigenschaft auf verfügbare Typen, bevor wir die [`ClipboardItem.getType()`](/de/docs/Web/API/ClipboardItem/getType)-Methode nutzen, um das [`Blob`](/de/docs/Web/API/Blob)-Objekt zurückzugeben. Wenn keine Zwischenspeicherinhalte für den angegebenen Typ gefunden werden, wird ein Fehler zurückgegeben.

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
- [Bildunterstützung für asynchrone Zwischenablage-Artikel](https://web.dev/articles/async-clipboard)
