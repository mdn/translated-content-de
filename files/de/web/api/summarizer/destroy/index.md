---
title: "Summarizer: destroy() Methode"
short-title: destroy()
slug: Web/API/Summarizer/destroy
l10n:
  sourceCommit: 683890a47fa52942b23dd4406c7f095bb70b1c59
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die **`destroy()`** Methode der [`Summarizer`](/de/docs/Web/API/Summarizer) Schnittstelle zerstört die `Summarizer`-Instanz, auf die sie aufgerufen wird. Es ist sinnvoll, `Summarizer`-Objekte zu zerstören, wenn sie nicht mehr verwendet werden sollen, da sie beträchtliche Ressourcen in ihrer Handhabung binden.

## Syntax

```js-nolint
destroy()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Verwendung von `destroy()`

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tl;dr",
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
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
