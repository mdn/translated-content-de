---
title: "Translator: destroy() Methode"
short-title: destroy()
slug: Web/API/Translator/destroy
l10n:
  sourceCommit: 19e7cdb9bbf52c909ba417c88e768fb287c38ad1
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

Die **`destroy()`**-Methode des [`Translator`](/de/docs/Web/API/Translator)-Interfaces zerstört die `Translator`-Instanz, auf der sie aufgerufen wird. Es ist sinnvoll, diese Objekte zu zerstören, wenn sie nicht mehr verwendet werden sollen, da sie bei ihrer Verarbeitung bedeutende Ressourcen binden.

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
