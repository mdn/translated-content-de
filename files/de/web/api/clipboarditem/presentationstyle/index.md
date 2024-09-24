---
title: "ClipboardItem: Eigenschaft presentationStyle"
short-title: presentationStyle
slug: Web/API/ClipboardItem/presentationStyle
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die schreibgeschützte Eigenschaft **`presentationStyle`** der {{domxref("ClipboardItem")}}-Schnittstelle gibt einen String zurück, der angibt, wie ein Element dargestellt werden soll.

Zum Beispiel kann ein Bild in einigen Kontexten inline angezeigt werden, während es in anderen als Anhang dargestellt werden kann.

## Wert

Einer der folgenden Werte: `"unspecified"`, `"inline"` oder `"attachment"`.

## Beispiele

Im folgenden Beispiel geben wir alle Elemente in der Zwischenablage über die {{domxref("clipboard.read()")}}-Methode zurück und protokollieren dann die `presentationStyle`-Eigenschaft.

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

- [Zwischenablage-API](/de/docs/Web/API/Clipboard_API)
- [Artikel zur Bildunterstützung für asynchrone Zwischenablage](https://web.dev/articles/async-clipboard)
