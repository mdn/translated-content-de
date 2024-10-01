---
title: "ClipboardItem: getType()-Methode"
short-title: getType()
slug: Web/API/ClipboardItem/getType
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`getType()`**-Methode der [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) des angeforderten {{Glossary("MIME_type", "MIME-Typs")}} aufgelöst wird, oder einen Fehler, falls der MIME-Typ nicht gefunden wird.

## Syntax

```js-nolint
getType(type)
```

### Parameter

- `type`
  - : Ein gültiger {{Glossary("MIME_type", "MIME-Typ")}}.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`Blob`](/de/docs/Web/API/Blob)-Objekt aufgelöst wird.

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der `type` stimmt nicht mit einem bekannten {{Glossary("MIME_type", "MIME-Typ")}} überein.
- {{jsxref("TypeError")}}
  - : Es wird kein Parameter angegeben oder der `type` entspricht nicht dem eines [`ClipboardItem`](/de/docs/Web/API/ClipboardItem).

## Beispiele

Im folgenden Beispiel geben wir alle Elemente der Zwischenablage über die [`clipboard.read()`](/de/docs/Web/API/Clipboard/read)-Methode zurück.
Anschließend wird die [`ClipboardItem.types`](/de/docs/Web/API/ClipboardItem/types)-Eigenschaft genutzt, um das `getType()`-Argument festzulegen und das entsprechende Blob-Objekt zurückzugeben.

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
