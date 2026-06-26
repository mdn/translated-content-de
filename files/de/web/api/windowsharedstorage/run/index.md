---
title: "WindowSharedStorage: Methode run()"
short-title: run()
slug: Web/API/WindowSharedStorage/run
l10n:
  sourceCommit: 0c906f7f464d8ff632baf8d25fa63eed3f03b632
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`run()`**-Methode der [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Schnittstelle führt eine [Ausführungsoperation](/de/docs/Web/API/SharedStorageRunOperation) aus, die in einem Modul registriert ist, das dem aktuellen Ursprung im [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) hinzugefügt wurde.

> [!NOTE]
> Das [Run Output Gate](/de/docs/Web/API/Shared_Storage_API#run) ist als generische Möglichkeit gedacht, einige gemeinsame Speicherungsdaten zu verarbeiten.

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
      - : Ein Objekt, das alle Daten darstellt, die zur Ausführung der Operation erforderlich sind.
    - `keepAlive` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, bleibt der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) des assoziierten Worklets aktiv, und die Operation kann erneut ausgeführt werden. Daher müssen Sie für jede Operation, die nicht die letzte sein soll, `keepAlive` auf `true` setzen. Der Standardwert `false` bedeutet, dass der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) nach der Ausführung der Operation beendet wird und nicht erneut ausgeführt werden kann.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.
    - Gemeinsame Speicherung deaktiviert ist (zum Beispiel über eine Browsereinstellung).
    - Die aufrufende Stelle die Shared Storage API nicht in einem erfolgreichen [Privatsphäre-Sandbox-Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) eingeschlossen hat.

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
