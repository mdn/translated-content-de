---
title: "Zwischenablage: readText()-Methode"
short-title: readText()
slug: Web/API/Clipboard/readText
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`readText()`**-Methode der {{domxref("Clipboard")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer Kopie der Textinhalte der Systemzwischenablage erfüllt wird.

> [!NOTE]
> Um nicht-textuelle Inhalte aus der Zwischenablage zu lesen, verwenden Sie stattdessen die {{domxref("Clipboard.read", "read()")}}-Methode.
> Sie können Text in die Zwischenablage schreiben, indem Sie {{domxref("Clipboard.writeText", "writeText()")}} verwenden.

## Syntax

```js-nolint
readText()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem String aufgelöst wird, der die Textinhalte der Zwischenablage enthält.

Gibt einen leeren String zurück, wenn die Zwischenablage leer ist, keinen Text enthält oder keine Textdarstellung zu den Objekten gehört, die den Inhalt der Zwischenablage darstellen.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Zugriff zum Lesen der Zwischenablage nicht erlaubt ist.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Zwischenablage anzeigt, dass sie Daten enthält, die als Text dargestellt werden können, jedoch keine Textdarstellung bereitstellen kann.

## Sicherheitsüberlegungen

Das Lesen von der Zwischenablage kann nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) erfolgen.

Zusätzliche Sicherheitsanforderungen werden im Abschnitt [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Übersichtsthemas behandelt.

## Beispiele

Dieses Beispiel ruft die Textinhalte der Zwischenablage ab und fügt den zurückgegebenen Text in den Inhalt eines ausgewählten Elements ein.

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
- [Bildunterstützung für Async Clipboard Artikel](https://web.dev/articles/async-clipboard)
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Clipboard.write()")}}
