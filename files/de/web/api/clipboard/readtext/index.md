---
title: "Clipboard: readText() Methode"
short-title: readText()
slug: Web/API/Clipboard/readText
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`readText()`**-Methode der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer Kopie der Textinhalte der Systemzwischenablage erfüllt wird.

> [!NOTE]
> Um nicht-textuelle Inhalte aus der Zwischenablage zu lesen, verwenden Sie stattdessen die [`read()`](/de/docs/Web/API/Clipboard/read)-Methode.
> Sie können Text in die Zwischenablage schreiben, indem Sie [`writeText()`](/de/docs/Web/API/Clipboard/writeText) verwenden.

## Syntax

```js-nolint
readText()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem String aufgelöst wird, der die Textinhalte der Zwischenablage enthält.

Gibt einen leeren String zurück, wenn die Zwischenablage leer ist, keinen Text enthält oder keine textuelle Darstellung unter den Objekten besitzt, die den Inhalt der Zwischenablage repräsentieren.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff auf das Lesen der Zwischenablage nicht erlaubt ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Zwischenablage anzeigt, dass sie Daten enthält, die als Text dargestellt werden können, aber keine textuelle Darstellung bereitgestellt werden kann.

## Sicherheitserwägungen

Das Lesen von der Zwischenablage kann nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) erfolgen.

Zusätzliche Sicherheitsanforderungen werden im Abschnitt [Sicherheitserwägung](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Übersichtsthemas behandelt.

## Beispiele

Dieses Beispiel ruft die Textinhalte der Zwischenablage ab und fügt den zurückgegebenen Text in die Inhalte eines ausgewählten Elements ein.

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
- [Artikel zur Unterstützung von Bildern für Async Clipboard](https://web.dev/articles/async-clipboard)
- [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read)
- [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)
- [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write)
