---
title: "ClipboardItem: Eigenschaft presentationStyle"
short-title: presentationStyle
slug: Web/API/ClipboardItem/presentationStyle
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die schreibgeschützte **`presentationStyle`**-Eigenschaft der [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Schnittstelle gibt einen String zurück, der angibt, wie ein Element dargestellt werden soll.

Zum Beispiel könnte ein Bild in einigen Kontexten inline angezeigt werden, während es in anderen als Anhang dargestellt wird.

## Wert

Einer von entweder `"unspecified"`, `"inline"` oder `"attachment"`.

## Beispiele

Im folgenden Beispiel geben wir alle Elemente in der Zwischenablage über die [`clipboard.read()`](/de/docs/Web/API/Clipboard/read)-Methode zurück und protokollieren dann die `presentationStyle`-Eigenschaft.

```js
async function getClipboardContents() {
  try {
    const clipboardItems = await navigator.clipboard.read();

    for (const clipboardItem of clipboardItems) {
      console.log(clipboardItem.presentationStyle);
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
- [Artikel über Bildunterstützung für die asynchrone Zwischenablage](https://web.dev/articles/async-clipboard)
