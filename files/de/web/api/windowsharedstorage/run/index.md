---
title: "WindowSharedStorage: run()-Methode"
short-title: run()
slug: Web/API/WindowSharedStorage/run
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`run()`**-Methode des [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Interfaces führt eine [run-Operation](/de/docs/Web/API/SharedStorageRunOperation) aus, die in einem Modul registriert ist, das dem aktuellen Ursprung des [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) hinzugefügt wurde.

> [!NOTE]
> Das [Run Output Gate](/de/docs/Web/API/Shared_Storage_API#run) ist als generische Methode zur Verarbeitung einiger gemeinsamer Speicherdaten gedacht.

## Syntax

```js-nolint
run(name)
run(name, options)
```

### Parameter

- `name`
  - : Ein String, der den registrierten Namen der Operation innerhalb des Shared-Storage-Worklet-Moduls darstellt. Er muss mit dem bei der Registrierung mit [`SharedStorageWorkletGlobalScope.register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) angegebenen Namen übereinstimmen.
- `options` {{optional_inline}}
  - : Ein Optionen-Objekt, das die folgenden Eigenschaften enthalten kann:
    - `data` {{optional_inline}}
      - : Ein Objekt, das alle Daten darstellt, die zur Ausführung der Operation erforderlich sind.
    - `keepAlive` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, bleibt der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) des zugehörigen Worklets aktiv, und die Operation kann erneut ausgeführt werden. Daher müssen Sie `keepAlive` auf `true` setzen für jede Operation, die nicht die letzte sein soll. Der Standardwert `false` bedeutet, dass der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) nach Ausführung der Operation beendet wird und nicht erneut ausgeführt werden kann.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit `undefined` erfüllt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.
    - Der gemeinsame Speicher deaktiviert ist (zum Beispiel über eine Browsereinstellung).
    - Die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Anmeldeprozess der Datenschutzerweiterung](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) eingeschlossen hat.

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

Siehe [Eindeutige Reichweitenmessung](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/unique-reach) für eine vollständige Erklärung dieses Beispiels. Weitere Beispiele finden Sie in der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
