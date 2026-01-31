---
title: "ClipboardChangeEvent: types-Eigenschaft"
short-title: types
slug: Web/API/ClipboardChangeEvent/types
l10n:
  sourceCommit: eb38a196911f92a7c99a1a2000fac1cd29d23db9
---

{{securecontext_header}}{{APIRef("Clipboard API")}}

Die **`types`** schreibgeschützte Eigenschaft der [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)-Schnittstelle gibt ein Array von Zeichenfolgen zurück, das die obligatorischen {{Glossary("MIME_type", "MIME-Typen")}} darstellt, die auf der Systemzwischenablage verfügbar sind, wenn das `ClipboardChangeEvent`-Ereignis ausgelöst wurde. Optionale Typen und benutzerdefinierte Formate sind nicht enthalten, um {{Glossary("fingerprinting", "Fingerabdrücke")}} einzuschränken.

## Wert

Ein Array von Zeichenfolgen.

## Beispiele

In diesem Beispiel protokolliert der Ereignislistener bei Änderungen der Zwischenablageinhalte jede Zeichenfolgenangabe eines [MIME-Typs](/de/docs/Web/HTTP/Guides/MIME_types) in der Konsole, die im Array, das von der `ClipboardChangeEvent.types`-Eigenschaft zurückgegeben wird, verfügbar ist.

```js
navigator.clipboard.addEventListener("clipboardchange", (event) => {
  event.types.forEach((value) => {
    console.log(value);
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ClipboardChangeEvent.changeId`](/de/docs/Web/API/ClipboardChangeEvent/changeId)
- [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)
- [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)
- [Clipboard API](/de/docs/Web/API/Clipboard_API)
