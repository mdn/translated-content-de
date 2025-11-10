---
title: "Summarizer: destroy()-Methode"
short-title: destroy()
slug: Web/API/Summarizer/destroy
l10n:
  sourceCommit: f91ff68767990aea89c9cb21fd8fc6b365cef3cb
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`destroy()`**-Methode der [`Summarizer`](/de/docs/Web/API/Summarizer) Schnittstelle gibt die Ressourcen frei, die der `Summarizer`-Instanz zugewiesen sind, auf der sie aufgerufen wird, und stoppt jegliche weitere Aktivität auf dieser. Das bedeutet, dass alle laufenden und nachfolgenden Methodenaufrufe auf dem `Summarizer` mit einem `AbortError` abgelehnt werden.

Es ist sinnvoll, `Summarizer`-Objekte zu zerstören, wenn sie nicht mehr verwendet werden, da sie erhebliche Ressourcen in ihrer Handhabung binden.

## Syntax

```js-nolint
destroy()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Verwendung von `destroy()`

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tldr",
  length: "short",
});

// ...

summarizer.destroy();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
