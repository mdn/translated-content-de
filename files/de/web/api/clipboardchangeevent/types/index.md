---
title: "ClipboardChangeEvent: types-Eigenschaft"
short-title: types
slug: Web/API/ClipboardChangeEvent/types
l10n:
  sourceCommit: c534ba0cb925657de5e99ab8c540eae31afd9382
---

{{securecontext_header}}{{APIRef("Clipboard API")}}{{SeeCompatTable}}

Die **`types`**-Eigenschaft der [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)-Schnittstelle ist schreibgeschützt und gibt ein Array von Zeichenfolgen zurück, das die obligatorischen {{Glossary("MIME_type", "MIME-Typen")}} darstellt, die beim Auslösen des `ClipboardChangeEvent`-Ereignisses im System-Clipboard verfügbar sind. Optionale Typen und benutzerdefinierte Formate sind nicht enthalten, um das {{Glossary("fingerprinting", "Fingerprinting")}} zu begrenzen.

## Wert

Ein Array von Zeichenfolgen.

## Beispiele

In diesem Beispiel protokolliert der Ereignislistener, wenn sich der Inhalt der Zwischenablage ändert, in der Konsole jede Zeichenfolge, die einen [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) darstellt und im Array vorhanden ist, das von der `ClipboardChangeEvent.types`-Eigenschaft zurückgegeben wird.

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
