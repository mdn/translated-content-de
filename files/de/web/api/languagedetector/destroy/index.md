---
title: "LanguageDetector: destroy()-Methode"
short-title: destroy()
slug: Web/API/LanguageDetector/destroy
l10n:
  sourceCommit: 19e7cdb9bbf52c909ba417c88e768fb287c38ad1
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

Die **`destroy()`**-Methode der [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Schnittstelle zerstört die Instanz des `LanguageDetector`, auf der sie aufgerufen wird. Es ist sinnvoll, diese Objekte zu zerstören, wenn sie nicht mehr verwendet werden, da sie bei ihrer Handhabung erhebliche Ressourcen binden.

## Syntax

```js-nolint
destroy()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende `destroy()`-Nutzung

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

- [Verwendung der Translator- und Language Detector-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
