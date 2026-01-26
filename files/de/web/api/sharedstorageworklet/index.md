---
title: SharedStorageWorklet
slug: Web/API/SharedStorageWorklet
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Das **`SharedStorageWorklet`**-Interface der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert das Shared Storage Worklet für den aktuellen Ursprung.

`SharedStorageWorklet` besitzt keine eigenen Eigenschaften oder Methoden. Stattdessen erbt es die Methode [`addModule()`](/de/docs/Web/API/Worklet/addModule) vom [`Worklet`](/de/docs/Web/API/Worklet)-Interface. Diese Methode wird verwendet, um ein Modul hinzuzufügen.

Im Gegensatz zu einem normalen [`Worklet`](/de/docs/Web/API/Worklet):

- Wenn die aufrufende Seite die Shared Storage API nicht in einem [Privacy Sandbox Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) einbezogen hat, werden Aufrufe von `sharedStorageWorklet.addModule()` abgelehnt.
- `SharedStorageWorklet` erlaubt aus Datenschutzgründen nur das Hinzufügen eines einzelnen Moduls. Selbst mit einer erfolgreichen Einschreibung werden wiederholte Aufrufe von `addModule()` auf demselben Shared Storage Worklet abgelehnt.

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

Sehen Sie sich die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Startseite für eine Anleitung zu diesem Beispiel und Links zu anderen Beispielen an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
