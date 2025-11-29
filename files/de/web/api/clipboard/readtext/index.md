---
title: "Clipboard: readText()-Methode"
short-title: readText()
slug: Web/API/Clipboard/readText
l10n:
  sourceCommit: eaa5b39f80d5fac0e5bf182679dc658b7083d15b
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`readText()`**-Methode der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer Kopie des Textinhalts der System-Zwischenablage erfüllt wird.

> [!NOTE]
> Um nicht-textuelle Inhalte aus der Zwischenablage zu lesen, verwenden Sie stattdessen die [`read()`](/de/docs/Web/API/Clipboard/read)-Methode.
> Sie können Text in die Zwischenablage schreiben, indem Sie die [`writeText()`](/de/docs/Web/API/Clipboard/writeText)-Methode verwenden.

## Syntax

```js-nolint
readText()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem String erfüllt wird, der den Textinhalt der Zwischenablage enthält.

Gibt einen leeren String zurück, wenn die Zwischenablage leer ist, keinen Text enthält oder keine Textdarstellung unter den Objekten, die den Inhalt der Zwischenablage repräsentieren, enthält.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff zum Lesen der Zwischenablage nicht erlaubt ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Zwischenablage angibt, dass sie Daten enthält, die als Text dargestellt werden können, aber keine Textdarstellung bereitstellen kann.

## Sicherheitsüberlegungen

Lesen von der Zwischenablage kann nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) erfolgen.

Zusätzliche Sicherheitsanforderungen werden im Abschnitt [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Überblicks behandelt.

## Beispiele

Dieses Beispiel ruft den Textinhalt der Zwischenablage ab und fügt den zurückgegebenen Text in den Inhalt eines ausgewählten Elements ein.

```js
const destination = document.getElementById("outbox");
destinationImage.addEventListener("click", () => {
  navigator.clipboard
    .readText()
    .then((clipText) => (destination.innerText = clipText));
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
- [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read)
- [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)
- [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write)
