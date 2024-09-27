---
title: "ClipboardItem: getType() Methode"
short-title: getType()
slug: Web/API/ClipboardItem/getType
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`getType()`** Methode der [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) des angeforderten [MIME-Typs](/de/docs/Glossary/MIME_type) oder einem Fehler aufgelöst wird, wenn der MIME-Typ nicht gefunden wird.

## Syntax

```js-nolint
getType(type)
```

### Parameter

- `type`
  - : Ein gültiger [MIME-Typ](/de/docs/Glossary/MIME_type).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`Blob`](/de/docs/Web/API/Blob)-Objekt aufgelöst wird.

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der `type` entspricht keinem bekannten [MIME-Typ](/de/docs/Glossary/MIME_type).
- {{jsxref("TypeError")}}
  - : Es wurde kein Parameter angegeben oder der `type` entspricht nicht dem des [`ClipboardItem`](/de/docs/Web/API/ClipboardItem).

## Beispiele

Im folgenden Beispiel geben wir alle Elemente in der Zwischenablage über die Methode [`clipboard.read()`](/de/docs/Web/API/Clipboard/read) zurück. Anschließend nutzen wir die Eigenschaft [`ClipboardItem.types`](/de/docs/Web/API/ClipboardItem/types), um das Argument für `getType()` festzulegen und das entsprechende Blob-Objekt zurückzugeben.

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
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
