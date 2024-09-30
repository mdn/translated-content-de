---
title: "Clipboard: writeText() Methode"
short-title: writeText()
slug: Web/API/Clipboard/writeText
l10n:
  sourceCommit: fff3c2948f6eb9452568bb48e016bd199ce54b95
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`writeText()`** Methode der [`Clipboard`](/de/docs/Web/API/Clipboard) Schnittstelle schreibt den angegebenen Text in die System-Zwischenablage und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die System-Zwischenablage aktualisiert wurde.

## Syntax

```js-nolint
writeText(newClipText)
```

### Parameter

- `newClipText`
  - : Der String, der in die Zwischenablage geschrieben werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, sobald der Inhalt der Zwischenablage aktualisiert wurde.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Schreiben in die Zwischenablage nicht erlaubt ist.

## Sicherheitserwägungen

Das Schreiben in die Zwischenablage kann nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) erfolgen.

Weitere Sicherheitsanforderungen sind im Abschnitt [Sicherheitserwägungen](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Überblicks behandelt.

## Beispiele

Dieses Beispiel setzt den Inhalt der Zwischenablage auf den String "\<empty clipboard>".

```js
button.addEventListener("click", () => writeClipboardText("<empty clipboard>"));

async function writeClipboardText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error.message);
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
- [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write)
- [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read)
- [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText)
