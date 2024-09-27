---
title: "Clipboard: Methode readText()"
short-title: readText()
slug: Web/API/Clipboard/readText
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`readText()`**-Methode der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer Kopie des Textinhalts der Systemzwischenablage erfüllt wird.

> [!NOTE]
> Um nicht-textuelle Inhalte aus der Zwischenablage zu lesen, verwenden Sie statt dessen die [`read()`](/de/docs/Web/API/Clipboard/read)-Methode.
> Sie können Text in die Zwischenablage schreiben, indem Sie die [`writeText()`](/de/docs/Web/API/Clipboard/writeText)-Methode verwenden.

## Syntax

```js-nolint
readText()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem String, der den Textinhalt der Zwischenablage enthält, aufgelöst wird.

Gibt einen leeren String zurück, wenn die Zwischenablage leer ist, keinen Text enthält oder keine textuelle Darstellung unter den Objekten hat, die den Inhalt der Zwischenablage repräsentieren.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff zum Lesen der Zwischenablage nicht erlaubt ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Zwischenablage anzeigt, dass sie Daten enthält, die als Text dargestellt werden können, aber nicht in der Lage ist, eine textuelle Darstellung bereitzustellen.

## Sicherheitsüberlegungen

Das Lesen von der Zwischenablage kann nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) erfolgen.

Zusätzliche Sicherheitsanforderungen werden im Abschnitt [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Übersichtsthemas behandelt.

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
- [Unterstützung von Bildern für den Async Clipboard-Artikel](https://web.dev/articles/async-clipboard)
- [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read)
- [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)
- [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write)
