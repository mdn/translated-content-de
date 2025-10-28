---
title: "LanguageDetector: destroy()-Methode"
short-title: destroy()
slug: Web/API/LanguageDetector/destroy
l10n:
  sourceCommit: f91ff68767990aea89c9cb21fd8fc6b365cef3cb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`destroy()`**-Methode der [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Schnittstelle gibt die Ressourcen frei, die der `LanguageDetector`-Instanz zugewiesen sind, auf der sie aufgerufen wird, und stoppt jegliche weitere Aktivität darauf. Das bedeutet, dass alle laufenden und nachfolgenden Methodenaufrufe, die auf dem `LanguageDetector` ausgeführt werden, mit einem `AbortError` abgelehnt werden.

Es ist sinnvoll, `LanguageDetector`-Objekte zu zerstören, wenn sie nicht mehr verwendet werden, da sie erhebliche Ressourcen in ihrer Handhabung binden.

## Syntax

```js-nolint
destroy()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Nutzung von `destroy()`

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
