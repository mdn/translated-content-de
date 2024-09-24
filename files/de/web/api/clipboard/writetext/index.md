---
title: "Zwischenablage: writeText() Methode"
short-title: writeText()
slug: Web/API/Clipboard/writeText
l10n:
  sourceCommit: fff3c2948f6eb9452568bb48e016bd199ce54b95
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`writeText()`**-Methode der {{domxref("Clipboard")}} Schnittstelle schreibt den angegebenen Text in die Systemzwischenablage und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Systemzwischenablage aktualisiert wurde.

## Syntax

```js-nolint
writeText(newClipText)
```

### Parameter

- `newClipText`
  - : Der zu schreibende String in die Zwischenablage.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, sobald der Inhalt der Zwischenablage aktualisiert wurde.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Schreiben in die Zwischenablage nicht erlaubt ist.

## Sicherheitsüberlegungen

Das Schreiben in die Zwischenablage kann nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) erfolgen.

Zusätzliche Sicherheitsanforderungen sind im Abschnitt [Sicherheitsüberlegung](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Überblicks behandelt.

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
- [Unterstützung von Bildern für den Artikel über asynchrone Zwischenablage](https://web.dev/articles/async-clipboard)
- {{domxref("Clipboard.write()")}}
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.readText()")}}
