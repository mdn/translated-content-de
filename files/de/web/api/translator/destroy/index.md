---
title: "Translator: destroy() Methode"
short-title: destroy()
slug: Web/API/Translator/destroy
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}} {{securecontext_header}}

Die **`destroy()`** Methode der [`Translator`](/de/docs/Web/API/Translator) Schnittstelle zerstört die `Translator` Instanz, auf der sie aufgerufen wird. Es ist sinnvoll, diese Objekte zu zerstören, wenn sie nicht mehr verwendet werden, da sie erhebliche Ressourcen in ihrer Handhabung binden.

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
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

// ...

translator.destroy();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
