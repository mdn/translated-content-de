---
title: SharedStorageWorklet
slug: Web/API/SharedStorageWorklet
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Das **`SharedStorageWorklet`**-Interface der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert das geteilte Speicher-Worklet für den aktuellen Ursprung.

`SharedStorageWorklet` hat keine eigenen Eigenschaften oder Methoden. Es erbt vielmehr die Methode [`addModule()`](/de/docs/Web/API/Worklet/addModule) von der [`Worklet`](/de/docs/Web/API/Worklet)-Schnittstelle. Diese Methode wird verwendet, um ein Modul hinzuzufügen.

Anders als ein reguläres [`Worklet`](/de/docs/Web/API/Worklet):

- Wenn die aufrufende Stelle die Shared Storage API nicht in einem [Privacy Sandbox-Enrolment-Prozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) eingeschlossen hat, werden Aufrufe von `sharedStorageWorklet.addModule()` abgelehnt.
- `SharedStorageWorklet` erlaubt aus Datenschutzgründen nur das Hinzufügen eines einzelnen Moduls. Selbst bei erfolgreicher Registrierung werden wiederholte Aufrufe von `addModule()` auf demselben geteilten Speicher-Worklet abgelehnt.

Auf `SharedStorageWorklet` wird über [`WindowSharedStorage.worklet`](/de/docs/Web/API/WindowSharedStorage/worklet) zugegriffen.

{{InheritanceDiagram}}

## Beispiele

```js
// Randomly assigns a user to a group 0 or 1
function getExperimentGroup() {
  return Math.round(Math.random());
}

async function injectContent() {
  // Add the module to the shared storage worklet
  await window.sharedStorage.worklet.addModule("ab-testing-worklet.js");

  // Assign user to a random group (0 or 1) and store it in shared storage
  window.sharedStorage.set("ab-testing-group", getExperimentGroup(), {
    ignoreIfPresent: true,
  });

  // Run the URL selection operation
  const fencedFrameConfig = await window.sharedStorage.selectURL(
    "ab-testing",
    [
      { url: `https://your-server.example/content/default-content.html` },
      { url: `https://your-server.example/content/experiment-content-a.html` },
    ],
    {
      resolveToConfig: true,
    },
  );

  // Render the chosen URL into a fenced frame
  document.getElementById("content-slot").config = fencedFrameConfig;
}

injectContent();
```

Sehen Sie sich die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Einstiegsseite für eine ausführliche Anleitung zu diesem Beispiel und Links zu anderen Beispielen an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
