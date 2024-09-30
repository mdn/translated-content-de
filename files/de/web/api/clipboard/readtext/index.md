---
title: "Clipboard: readText() Methode"
short-title: readText()
slug: Web/API/Clipboard/readText
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`readText()`** Methode der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle liefert eine {{jsxref("Promise")}}, die mit einer Kopie der textuellen Inhalte der Systemzwischenablage erfüllt wird.

> [!NOTE]
> Um nicht-textuelle Inhalte aus der Zwischenablage zu lesen, verwenden Sie stattdessen die [`read()`](/de/docs/Web/API/Clipboard/read) Methode.
> Sie können Text in die Zwischenablage schreiben, indem Sie die [`writeText()`](/de/docs/Web/API/Clipboard/writeText) Methode verwenden.

## Syntax

```js-nolint
readText()
```

### Parameter

Keine.

### Rückgabewert

Eine {{jsxref("Promise")}}, die mit einem String aufgelöst wird, der die textuellen Inhalte der Zwischenablage enthält.

Gibt einen leeren String zurück, wenn die Zwischenablage leer ist, keinen Text enthält oder keine textuelle Darstellung unter den Objekten enthält, die die Inhalte der Zwischenablage repräsentieren.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff zum Lesen der Zwischenablage nicht erlaubt ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Zwischenablage angibt, dass sie Daten enthält, die als Text dargestellt werden können, aber nicht in der Lage ist, eine textuelle Darstellung bereitzustellen.

## Sicherheitsüberlegungen

Das Lesen aus der Zwischenablage kann nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) erfolgen.

Zusätzliche Sicherheitsanforderungen sind im Abschnitt [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Übersichtsthemas behandelt.

## Beispiele

Dieses Beispiel ruft die textuellen Inhalte der Zwischenablage ab und fügt den zurückgegebenen Text in die Inhalte eines ausgewählten Elements ein.

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
- [Bildunterstützung für den asynchronen Zwischenablage-Artikel](https://web.dev/articles/async-clipboard)
- [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read)
- [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)
- [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write)
