---
title: "Translator: destroy() Methode"
short-title: destroy()
slug: Web/API/Translator/destroy
l10n:
  sourceCommit: f91ff68767990aea89c9cb21fd8fc6b365cef3cb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}} {{securecontext_header}}

Die **`destroy()`**-Methode der [`Translator`](/de/docs/Web/API/Translator)-Schnittstelle gibt die Ressourcen frei, die der `Translator`-Instanz zugewiesen sind, auf der sie aufgerufen wird, und stoppt jegliche weitere Aktivität darauf. Das bedeutet, dass alle laufenden und nachfolgenden Methodenaufrufe, die am `Translator` vorgenommen werden, mit einem `AbortError` abgelehnt werden.

Es ist sinnvoll, `Translator`-Objekte zu zerstören, wenn sie nicht mehr verwendet werden, da sie erhebliche Ressourcen in ihrer Handhabung binden.

## Syntax

```js-nolint
destroy()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Nutzung der `destroy()`-Methode

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
