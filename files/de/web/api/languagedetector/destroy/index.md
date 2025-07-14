---
title: "LanguageDetector: destroy() Methode"
short-title: destroy()
slug: Web/API/LanguageDetector/destroy
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`destroy()`** Methode des [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) Interfaces zerstört die Instanz des `LanguageDetector`, auf die sie angewendet wird. Es ist sinnvoll, diese Objekte zu zerstören, wenn sie nicht mehr verwendet werden sollen, da sie erhebliche Ressourcen in ihrer Handhabung binden.

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
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});

// ...

detector.destroy();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
