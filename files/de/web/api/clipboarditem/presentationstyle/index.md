---
title: "ClipboardItem: presentationStyle-Eigenschaft"
short-title: presentationStyle
slug: Web/API/ClipboardItem/presentationStyle
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die schreibgeschützte **`presentationStyle`**-Eigenschaft der [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Schnittstelle gibt einen String zurück, der angibt, wie ein Element präsentiert werden soll.

In einigen Kontexten könnte beispielsweise ein Bild inline angezeigt werden, während es in anderen als Anhang dargestellt wird.

## Wert

Einer der folgenden Werte: `"unspecified"`, `"inline"` oder `"attachment"`.

## Beispiele

Im untenstehenden Beispiel geben wir alle Elemente in der Zwischenablage über die [`clipboard.read()`](/de/docs/Web/API/Clipboard/read)-Methode zurück und protokollieren anschließend die `presentationStyle`-Eigenschaft.

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
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
