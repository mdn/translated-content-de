---
title: "LanguageModel: destroy() Methode"
short-title: destroy()
slug: Web/API/LanguageModel/destroy
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

{{APIRef("Prompt API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`destroy()`** Methode der [`LanguageModel`](/de/docs/Web/API/LanguageModel) Schnittstelle gibt die Ressourcen frei, die der `LanguageModel`-Instanz zugewiesen wurden, auf die sie angewendet wird, und stoppt jegliche weitere Aktivität darauf. Alle laufenden und nachfolgenden Methodenaufrufe auf dem `LanguageModel` werden mit einem `AbortError` abgelehnt.

Es ist sinnvoll, `LanguageModel`-Objekte zu zerstören, wenn sie nicht mehr verwendet werden, da sie in ihrer Handhabung erhebliche Ressourcen binden.

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

### Grundlegende `destroy()`-Verwendung

```js
const session = await LanguageModel.create({
  expectedInputs: [{ type: "text", languages: ["en"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});

// ...

session.destroy();
```

Siehe auch [Verwendung der Prompt API > Abbrechen von Operationen und Zerstören von Instanzen](/de/docs/Web/API/Prompt_API/Using#canceling_operations_and_destroying_instances).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Verwendung der Prompt API](/de/docs/Web/API/Prompt_API/Using)
