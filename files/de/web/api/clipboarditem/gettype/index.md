---
title: "ClipboardItem: getType()-Methode"
short-title: getType()
slug: Web/API/ClipboardItem/getType
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`getType()`**-Methode der {{domxref("ClipboardItem")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("Blob")}} des angeforderten {{Glossary("MIME type")}} oder einem Fehler, wenn der MIME-Typ nicht gefunden wird, aufgelöst wird.

## Syntax

```js-nolint
getType(type)
```

### Parameter

- `type`
  - : Ein gültiger {{Glossary("MIME type")}}.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("Blob")}}-Objekt aufgelöst wird.

### Ausnahmen

- `NotFoundError` {{domxref("DOMException")}}
  - : Der `type` stimmt nicht mit einem bekannten {{Glossary("MIME type")}} überein.
- {{jsxref("TypeError")}}
  - : Kein Parameter ist angegeben oder der `type` gehört nicht zum {{domxref("ClipboardItem")}}.

## Beispiele

Im folgenden Beispiel geben wir alle Elemente in der Zwischenablage über die {{domxref("clipboard.read()")}}-Methode zurück. Anschließend nutzen wir die {{domxref("ClipboardItem.types")}}-Eigenschaft, um das Argument für `getType()` festzulegen und das entsprechende Blob-Objekt zurückzugeben.

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
- [Artikel über Bildunterstützung für asynchrones Clipboard](https://web.dev/articles/async-clipboard)
