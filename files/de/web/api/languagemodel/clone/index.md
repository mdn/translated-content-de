---
title: "LanguageModel: clone() Methode"
short-title: clone()
slug: Web/API/LanguageModel/clone
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`clone()`** Methode der [`LanguageModel`](/de/docs/Web/API/LanguageModel) Schnittstelle erstellt eine Kopie des `LanguageModel`, auf dem sie aufgerufen wird, einschließlich seines vollständigen Kontextfensterzustands. Die geklonte Sitzung kann unabhängig verwendet werden, ohne das Original zu beeinflussen.

Das Original und der Klon teilen bis zum Zeitpunkt des Klonens dieselbe Kontextgeschichte, was es ermöglicht, mehrere Antwortpfade zu erkunden oder Variationen zu testen, ohne von vorne zu beginnen.

Zum Beispiel könnten Sie einen gemeinsamen Kontext durch [`append()`](/de/docs/Web/API/LanguageModel/append) oder frühe [`prompt()`](/de/docs/Web/API/LanguageModel/prompt) `prompt()`-Aufrufe erstellen, die Sitzung klonen und dann unterschiedliche Anschlussbefehle parallel an jeden Klon senden.

## Syntax

```js-nolint
clone()
clone(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die übergebenen Optionen darstellt. Wenn dieses Argument fehlt, werden die `options` der ursprünglichen Sitzung, wie etwa ihr Abort-Signal, verwendet.
    Eigenschaften umfassen:
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zur Stornierung des Klonvorgangs.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer geklonten [`LanguageModel`](/de/docs/Web/API/LanguageModel) Instanz aufgelöst wird.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Vorgang über die `signal`-Option abgebrochen wird.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Klonen aus einem anderen Grund fehlschlägt, der nicht in den anderen Ausnahmetypen aufgeführt ist.

## Beispiele

Siehe auch [Verwendung der Prompt API > Klonen einer Sitzung](/de/docs/Web/API/Prompt_API/Using#cloning_a_session).

### Erkundung mehrerer Antwortpfade

Das folgende Beispiel zeigt, wie verschiedene Antwortpfade untersucht werden können. Zuerst wird eine einzelne Sitzung mit dem Beginn einer Geschichte erstellt. Dann wird die ursprüngliche Sitzung zweimal geklont, bevor unterschiedliche Endungen abgefragt werden. Dieser Ansatz bewahrt die ursprüngliche Sitzung, falls weitere Erkundungen gewünscht sind.

```js
const session = await LanguageModel.create({
  initialPrompts: [
    { role: "system", content: "You are a creative writing assistant." },
  ],
});

await session.append(
  "The story begins in a small coastal town during a storm.",
);

const [clone1, clone2] = await Promise.all([session.clone(), session.clone()]);

const [ending1, ending2] = await Promise.all([
  clone1.prompt("Write a happy ending."),
  clone2.prompt("Write a mysterious ending."),
]);

console.log("Happy ending:", ending1);
console.log("Mysterious ending:", ending2);
```

### Klonen, um nach einem Kontextüberlauf neu zu versuchen

Dieses Beispiel verwendet ein Checkpoint- und Rollback-Muster, um den Zustand einer Sitzung zu speichern, bevor versucht wird, eine große Menge an Daten anzuhängen. Das Klonen der Sitzung vor dem Aufruf von `append()` ermöglicht es der App, den Zustand wiederherzustellen, wenn das Kontextfenster überschritten wird.

```js
const veryLargeDocument = "This is my very long story...";
let session = await LanguageModel.create();
const checkpoint = await session.clone();

try {
  await session.append(veryLargeDocument);
} catch (err) {
  if (err.name === "QuotaExceededError") {
    console.warn("Document too large.");
    session = checkpoint;
  }
}
```

### Klonen einer Sitzung mit einem Abbruchsignal

Das folgende Beispiel erstellt ein Timeout, um den Klonvorgang abzubrechen, wenn er länger als drei Sekunden dauert.

```js
const controller = new AbortController();
setTimeout(() => controller.abort(), 3000);

try {
  const clonedSession = await session.clone({
    signal: controller.signal,
  });
  console.log("Session cloned successfully.");
} catch (err) {
  if (err.name === "AbortError") {
    console.log("Clone operation was aborted.");
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append)
- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Verwendung der Prompt API](/de/docs/Web/API/Prompt_API/Using)
- [Hinzufügen von Kontext mit initialen und laufenden Eingaben](/de/docs/Web/API/Prompt_API/Adding_context)
