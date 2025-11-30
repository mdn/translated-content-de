---
title: "Zwischenablage: writeText() Methode"
short-title: writeText()
slug: Web/API/Clipboard/writeText
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`writeText()`** Methode der [`Clipboard`](/de/docs/Web/API/Clipboard) Schnittstelle schreibt den angegebenen Text in die Systemzwischenablage und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Systemzwischenablage aktualisiert wurde.

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

## Sicherheitsüberlegungen

Das Schreiben in die Zwischenablage kann nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) durchgeführt werden.

Zusätzliche Sicherheitsanforderungen sind im Abschnitt [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Übersichtsthemas enthalten.

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
- [Bildunterstützung für asynchrone Zwischenablage Artikel](https://web.dev/articles/async-clipboard)
- [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write)
- [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read)
- [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText)
