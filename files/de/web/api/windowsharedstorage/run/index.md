---
title: "WindowSharedStorage: run()-Methode"
short-title: run()
slug: Web/API/WindowSharedStorage/run
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Shared Storage API")}}

Die **`run()`**-Methode der [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Schnittstelle führt eine [Laufausführung](/de/docs/Web/API/SharedStorageRunOperation) aus, die in einem Modul registriert ist, das dem aktuellen Ursprung im [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) hinzugefügt wurde.

> [!NOTE]
> Das [Run-Ausgabegate](/de/docs/Web/API/Shared_Storage_API#run) ist als generische Methode gedacht, um einige gemeinsame Speicherdateien zu verarbeiten.

## Syntax

```js-nolint
run(name)
run(name, options)
```

### Parameter

- `name`
  - : Ein Zeichenfolgentext, der den Namen der registrierten Operation innerhalb des Shared Storage Worklet-Moduls darstellt. Er muss mit dem Namen übereinstimmen, der bei der Registrierung mit [`SharedStorageWorkletGlobalScope.register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) vergeben wurde.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `data` {{optional_inline}}
      - : Ein Objekt, das alle für die Ausführung der Operation benötigten Daten darstellt.
    - `keepAlive` {{optional_inline}}
      - : Ein Boolean-Wert. Wenn auf `true` gesetzt, bleibt der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) des zugehörigen Worklets aktiv, und die Operation kann erneut ausgeführt werden. Daher müssen Sie `keepAlive` auf `true` setzen für jede Operation, die nicht als letzte gedacht ist. Der Standardwert, `false`, bedeutet, dass der [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope) nach der Ausführung der Operation beendet wird und nicht erneut ausgeführt werden kann.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird mit `undefined`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.
    - Der gemeinsame Speicher deaktiviert ist (zum Beispiel über eine Browsereinstellung).
    - Der aufrufende Standort die Shared Storage API nicht als Teil eines erfolgreichen [Privacy Sandbox Einschreibungsprozesses](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) enthalten hat.

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

Sehen Sie sich [Unique reach measurement](https://privacysandbox.google.com/private-advertising/private-aggregation/unique-reach) für eine vollständige Erklärung dieses Beispiels an. Weitere Beispiele finden Sie in der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
