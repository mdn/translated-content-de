---
title: "ClipboardItem: getType() Methode"
short-title: getType()
slug: Web/API/ClipboardItem/getType
l10n:
  sourceCommit: eaa5b39f80d5fac0e5bf182679dc658b7083d15b
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`getType()`** Methode des [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) des angeforderten {{Glossary("MIME_type", "MIME-Typs")}} oder einem Fehler aufgelöst wird, wenn der MIME-Typ nicht gefunden wird.

## Syntax

```js-nolint
getType(type)
```

### Parameter

- `type`
  - : Ein gültiger {{Glossary("MIME_type", "MIME-Typ")}}.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`Blob`](/de/docs/Web/API/Blob) Objekt aufgelöst wird.

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der `type` entspricht keinem bekannten {{Glossary("MIME_type", "MIME-Typ")}}.
- {{jsxref("TypeError")}}
  - : Kein Parameter ist angegeben oder der `type` entspricht nicht dem eines [`ClipboardItem`](/de/docs/Web/API/ClipboardItem).

## Beispiele

Im folgenden Beispiel geben wir alle Elemente in der Zwischenablage über die [`clipboard.read()`](/de/docs/Web/API/Clipboard/read) Methode zurück. Für jedes Element übergeben wir die [`ClipboardItem.types`](/de/docs/Web/API/ClipboardItem/types) Eigenschaft an die `getType()` Methode, die das entsprechende `Blob` Objekt zurückgibt.

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
- [Image support for Async Clipboard Artikel](https://web.dev/articles/async-clipboard)
