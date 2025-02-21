---
title: "WindowSharedStorage: run() Methode"
short-title: run()
slug: Web/API/WindowSharedStorage/run
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`run()`**-Methode des [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Interfaces führt eine [Run-Operation](/de/docs/Web/API/SharedStorageRunOperation) aus, die in einem Modul registriert ist und zum aktuellen Ursprung des [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) hinzugefügt wurde.

> [!NOTE]
> Das [Run-Ausgabegate](/de/docs/Web/API/Shared_Storage_API#run) ist als generische Methode gedacht, um einige gemeinsame Speicher daten zu verarbeiten.

## Syntax

```js-nolint
run(name)
run(name, options)
```

### Parameter

- `name`
  - : Ein String, der den Namen der registrierten Operation innerhalb des Shared-Storage-Worklet-Moduls repräsentiert. Er muss mit dem Namen übereinstimmen, der der Operation gegeben wird, wenn sie mit [`SharedStorageWorkletGlobalScope.register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) registriert wird.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `data` {{optional_inline}}
      - : Ein Objekt, das alle Daten repräsentiert, die für die Ausführung der Operation erforderlich sind.
    - `keepAlive` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, bleibt der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) des zugehörigen Worklets aktiv, und die Operation kann erneut ausgeführt werden. Daher muss `keepAlive` auf `true` gesetzt werden für jede Operation, die nicht die letzte sein soll. Der Standardwert `false` bedeutet, dass der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) nach der Ausführung der Operation beendet wird und nicht erneut ausgeführt werden kann.

### Rückgabewert

Ein {{jsxref("Promise")}} das sich mit `undefined` erfüllt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.
    - Shared Storage deaktiviert ist (zum Beispiel über eine Browsereinstellung).
    - Die aufrufende Stelle die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) eingeschlossen hat.

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

Sehen Sie sich die [Unique Reach Measurement](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/unique-reach) für eine vollständige Erklärung dieses Beispiels an. Weitere Beispiele finden Sie in der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
