---
title: "LanguageModel: destroy()-Methode"
short-title: destroy()
slug: Web/API/LanguageModel/destroy
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{APIRef("Prompt API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`destroy()`**-Methode der [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Schnittstelle gibt die Ressourcen frei, die der `LanguageModel`-Instanz zugewiesen sind, auf der sie aufgerufen wird, und stoppt jegliche weitere Aktivität darauf. Alle laufenden und nachfolgenden Methodenaufrufe auf dem `LanguageModel` schlagen mit einem `AbortError` fehl.

Es ist sinnvoll, `LanguageModel`-Objekte zu zerstören, wenn sie nicht mehr verwendet werden, da sie erhebliche Ressourcen in ihrer Handhabung binden.

## Syntax

```js-nolint
destroy()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} blockiert wird.

## Beispiele

### Grundlegende Verwendung von `destroy()`

```js
const session = await LanguageModel.create({
  expectedInputs: [{ type: "text", languages: ["en"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});

// ...

session.destroy();
```

Siehe auch [Verwendung der Prompt-API > Abbrechen von Vorgängen und Zerstören von Instanzen](/de/docs/Web/API/Prompt_API/Using#cancelling_operations_and_destroying_instances).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Verwendung der Prompt-API](/de/docs/Web/API/Prompt_API/Using)
