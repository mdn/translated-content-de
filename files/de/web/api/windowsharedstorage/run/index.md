---
title: "WindowSharedStorage: run()-Methode"
short-title: run()
slug: Web/API/WindowSharedStorage/run
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`run()`**-Methode der {{domxref("WindowSharedStorage")}}-Schnittstelle führt eine [Ausführungsoperation](/de/docs/Web/API/SharedStorageRunOperation) aus, die in einem Modul registriert ist, das dem aktuellen Ursprung des {{domxref("SharedStorageWorklet")}} hinzugefügt wurde.

> [!NOTE]
> Der [Ausgabe-Gate für die Ausführung](/de/docs/Web/API/Shared_Storage_API#run) ist als generische Möglichkeit gedacht, einige Shared-Storage-Daten zu verarbeiten.

## Syntax

```js-nolint
run(name)
run(name, options)
```

### Parameter

- `name`
  - : Ein String, der den Namen der registrierten Operation innerhalb des Shared-Storage-Worklet-Moduls darstellt. Er muss mit dem Namen übereinstimmen, der der Operation bei der Registrierung mit {{domxref("SharedStorageWorkletGlobalScope.register()")}} gegeben wurde.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthalten kann:
    - `data` {{optional_inline}}
      - : Ein Objekt, das alle für die Ausführung der Operation erforderlichen Daten darstellt.
    - `keepAlive` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, bleibt der {{domxref("SharedStorageWorkletGlobalScope")}} des zugehörigen Worklets aktiv, und die Operation kann erneut ausgeführt werden. Daher müssen Sie `keepAlive` auf `true` setzen für jede Operation, die nicht die letzte sein soll. Der Standardwert `false` bedeutet, dass der {{domxref("SharedStorageWorkletGlobalScope")}} nach der Durchführung der Operation beendet wird und nicht erneut ausgeführt werden kann.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit {{domxref("Worklet.addModule", "addModule()")}} hinzugefügt wurde.
    - Shared Storage deaktiviert ist (zum Beispiel über eine Browsereinstellung).
    - Die aufrufende Stelle die Shared Storage API nicht in einem erfolgreichen [Privacy-Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) enthalten hat.

## Beispiele

```js
async function measureUniqueReach() {
  // Laden des Shared Storage Worklets
  await window.sharedStorage.worklet.addModule("reach-measurement-worklet.js");

  // Ausführen der Reichweitenmessungsoperation
  await window.sharedStorage.run("reach-measurement", {
    data: { contentId: "1234" },
  });
}

measureUniqueReach();
```

Siehe [Einzigartige Reichweitenmessung](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/unique-reach) für eine vollständige Erklärung dieses Beispiels. Siehe [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
