---
title: SharedStorageWorklet
slug: Web/API/SharedStorageWorklet
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Shared Storage API")}}{{non-standard_header}}

Das **`SharedStorageWorklet`** Interface der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert das gemeinsame Speicher-Worklet für die aktuelle Herkunft.

`SharedStorageWorklet` hat keine eigenen Eigenschaften oder Methoden. Stattdessen erbt es die Methode [`addModule()`](/de/docs/Web/API/Worklet/addModule) von der [`Worklet`](/de/docs/Web/API/Worklet) Schnittstelle. Diese Methode wird verwendet, um ein Modul hinzuzufügen.

Im Unterschied zu einem regulären [`Worklet`](/de/docs/Web/API/Worklet):

- Wenn die aufrufende Stelle die Shared Storage API nicht im Rahmen eines [Einschreibungsprozesses für den Datenschutz-Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) eingeschlossen hat, werden Aufrufe von `sharedStorageWorklet.addModule()` abgelehnt.
- `SharedStorageWorklet` erlaubt aus Datenschutzgründen nur das Hinzufügen eines einzigen Moduls. Auch bei erfolgreicher Einschreibung werden wiederholte Aufrufe von `addModule()` auf demselben gemeinsamen Speicher-Worklet abgelehnt.

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

Sehen Sie sich die Startseite der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) für eine Schritt-für-Schritt-Anleitung zu diesem Beispiel und Links zu weiteren Beispielen an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
