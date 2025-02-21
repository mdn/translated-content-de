---
title: SharedStorageWorklet
slug: Web/API/SharedStorageWorklet
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Das **`SharedStorageWorklet`**-Interface der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert das Shared Storage Worklet für die aktuelle Herkunft.

`SharedStorageWorklet` hat keine eigenen Eigenschaften oder Methoden. Stattdessen erbt es die [`addModule()`](/de/docs/Web/API/Worklet/addModule)-Methode aus dem [`Worklet`](/de/docs/Web/API/Worklet)-Interface. Diese Methode wird verwendet, um ein Modul hinzuzufügen.

Im Gegensatz zu einem normalen [`Worklet`](/de/docs/Web/API/Worklet):

- Wenn die aufrufende Seite die Shared Storage API nicht in einen [Privacy Sandbox-Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) einbezogen hat, werden Anrufe an `sharedStorageWorklet.addModule()` abgelehnt.
- `SharedStorageWorklet` erlaubt aus Datenschutzgründen nur, ein einziges Modul hinzuzufügen. Selbst bei erfolgreicher Einschreibung werden wiederholte Aufrufe von `addModule()` auf demselben Shared Storage Worklet abgelehnt.

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

Siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Übersichtsseite für eine Schritt-für-Schritt-Anleitung dieses Beispiels und Links zu anderen Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
