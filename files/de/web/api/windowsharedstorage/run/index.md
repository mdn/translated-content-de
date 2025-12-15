---
title: "WindowSharedStorage: run()-Methode"
short-title: run()
slug: Web/API/WindowSharedStorage/run
l10n:
  sourceCommit: 923adb616baa87402ca965ebd18a73380cc84d27
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`run()`**-Methode der
[`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Schnittstelle führt eine [Run-Operation](/de/docs/Web/API/SharedStorageRunOperation) aus, die in einem Modul registriert ist, das zum aktuellen Ursprung in dem [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) hinzugefügt wurde.

> [!NOTE]
> Das [Run-Ausgabe-Gate](/de/docs/Web/API/Shared_Storage_API#run) ist als generischer Weg zur Verarbeitung einiger gemeinsam genutzter Speicher-Daten gedacht.

## Syntax

```js-nolint
run(name)
run(name, options)
```

### Parameter

- `name`
  - : Ein String, der den Namen der innerhalb des Shared Storage Worklet-Moduls registrierten Operation darstellt. Er muss mit dem Namen übereinstimmen, der der Operation beim Registrieren mit [`SharedStorageWorkletGlobalScope.register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) gegeben wurde.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `data` {{optional_inline}}
      - : Ein Objekt, das alle Daten darstellt, die für die Ausführung der Operation erforderlich sind.
    - `keepAlive` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, bleibt der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) des zugehörigen Worklets aktiv, und die Operation kann erneut ausgeführt werden. Daher müssen Sie `keepAlive` für jede Operation auf `true` setzen, die nicht die letzte sein soll. Der Standardwert `false` bedeutet, dass der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) nach der Ausführung der Operation beendet wird und nicht erneut ausgeführt werden kann.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.
    - Der gemeinsame Speicher (zum Beispiel über eine Browsereinstellung) deaktiviert ist.
    - Die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Privatsphäre-Sandbox-Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthalten hat.

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

Siehe [Messung der eindeutigen Reichweite](https://privacysandbox.google.com/private-advertising/private-aggregation/unique-reach) für eine vollständige Erklärung dieses Beispiels. Weitere Beispiele finden Sie in der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
