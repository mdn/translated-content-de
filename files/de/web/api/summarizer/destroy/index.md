---
title: "Summarizer: destroy()-Methode"
short-title: destroy()
slug: Web/API/Summarizer/destroy
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`destroy()`**-Methode der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle zerstört die `Summarizer`-Instanz, auf die sie angewendet wird. Es ist sinnvoll, `Summarizer`-Objekte zu zerstören, wenn sie nicht mehr verwendet werden sollen, da sie bedeutende Ressourcen in ihrer Handhabung beanspruchen.

## Syntax

```js-nolint
destroy()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Nutzung von `destroy()`

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

- [Verwendung der Summarizer-API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
