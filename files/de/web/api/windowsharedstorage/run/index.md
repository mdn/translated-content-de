---
title: "WindowSharedStorage: run() Methode"
short-title: run()
slug: Web/API/WindowSharedStorage/run
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`run()`**-Methode des [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Interfaces führt eine [Run-Operation](/de/docs/Web/API/SharedStorageRunOperation) aus, die in einem Modul registriert ist, das dem [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) des aktuellen Ursprungs hinzugefügt wurde.

> [!NOTE]
> Das [Ausgabe-Gate der Ausführung](/de/docs/Web/API/Shared_Storage_API#run) ist als generische Methode zur Verarbeitung einiger gemeinsamer Speicherungsdaten gedacht.

## Syntax

```js-nolint
run(name)
run(name, options)
```

### Parameter

- `name`
  - : Ein String, der den Namen der registrierten Operation innerhalb des Shared Storage Worklet-Moduls darstellt. Er muss mit dem Namen übereinstimmen, der der Operation gegeben wurde, als sie mit [`SharedStorageWorkletGlobalScope.register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) registriert wurde.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `data` {{optional_inline}}
      - : Ein Objekt, das alle Daten repräsentiert, die für die Ausführung der Operation erforderlich sind.
    - `keepAlive` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, bleibt der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) des zugehörigen Worklets aktiv, und die Operation kann erneut ausgeführt werden. Daher muss `keepAlive` für jede Operation, die nicht die letzte sein soll, auf `true` gesetzt werden. Der Standardwert `false` bedeutet, dass der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) nach der Ausführung der Operation beendet wird und nicht erneut ausgeführt werden kann.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn:
    - Das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.
    - Der gemeinsame Speicher deaktiviert ist (zum Beispiel über eine Browsereinstellung).
    - Die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox-Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthalten hat.

## Beispiele

```js
async function measureUniqueReach() {
  // Load the Shared Storage worklet
  await window.sharedStorage.worklet.addModule("reach-measurement-worklet.js");

  // Run the reach measurement operation
  await window.sharedStorage.run("reach-measurement", {
    data: { contentId: "1234" },
  });
}

measureUniqueReach();
```

Siehe [Messung der einzigartigen Reichweite](https://privacysandbox.google.com/private-advertising/private-aggregation/unique-reach) für eine vollständige Erklärung dieses Beispiels. Weitere Beispiele finden Sie in der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
