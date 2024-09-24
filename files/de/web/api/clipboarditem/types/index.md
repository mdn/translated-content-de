---
title: "ClipboardItem: types-Eigenschaft"
short-title: types
slug: Web/API/ClipboardItem/types
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die schreibgeschützte **`types`**-Eigenschaft der {{domxref("ClipboardItem")}}-Schnittstelle gibt ein {{jsxref("Array")}} von im {{domxref("ClipboardItem")}} verfügbaren {{Glossary("MIME type", 'MIME-Typen')}} zurück.

## Wert

Ein {{jsxref("Array")}} von verfügbaren {{Glossary("MIME type", 'MIME-Typen')}}.

## Beispiele

Im folgenden Beispiel geben wir alle Elemente in der Zwischenablage über die Methode {{domxref("Clipboard.read()")}} zurück. Dann überprüfen wir die `types`-Eigenschaft auf verfügbare Typen, bevor wir die Methode {{domxref("ClipboardItem.getType()")}} nutzen, um das {{domxref("Blob")}}-Objekt zurückzugeben. Wenn keine Inhalte für den angegebenen Typ in der Zwischenablage gefunden werden, wird ein Fehler zurückgegeben.

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

- [Clipboard-API](/de/docs/Web/API/Clipboard_API)
- [Artikel zur Bildunterstützung für die asynchrone Zwischenablage](https://web.dev/articles/async-clipboard)
