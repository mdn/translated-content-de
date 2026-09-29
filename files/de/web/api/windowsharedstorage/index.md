---
title: WindowSharedStorage
slug: Web/API/WindowSharedStorage
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{APIRef("Shared Storage API")}}

Das **`WindowSharedStorage`**-Interface der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert den gemeinsam genutzten Speicher für einen bestimmten Origin innerhalb eines Standard-Browsing-Kontexts.

Auf `WindowSharedStorage` wird über [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage) zugegriffen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`worklet`](/de/docs/Web/API/WindowSharedStorage/worklet) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Enthält die [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Instanz, die das Shared-Storage-Worklet für den aktuellen Origin repräsentiert. `SharedStorageWorklet` enthält die Methode [`addModule()`](/de/docs/Web/API/Worklet/addModule), mit der dem Shared-Storage-Worklet ein Modul hinzugefügt wird.

## Instanzmethoden

_`WindowSharedStorage` erbt Eigenschaften von seinem übergeordneten Interface [`SharedStorage`](/de/docs/Web/API/SharedStorage)._

- [`run()`](/de/docs/Web/API/WindowSharedStorage/run) {{Deprecated_Inline}}
  - : Führt eine [Run-Output-Gate](/de/docs/Web/API/Shared_Storage_API#run)-Operation aus, die in einem Modul registriert wurde, das dem [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) des aktuellen Origins hinzugefügt wurde.
- [`selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) {{Deprecated_Inline}}
  - : Führt eine [URL-Selection-Output-Gate](/de/docs/Web/API/Shared_Storage_API#url_selection)-Operation aus, die in einem Modul registriert wurde, das dem [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) des aktuellen Origins hinzugefügt wurde.

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

Eine Erläuterung dieses Beispiels und Links zu weiteren Beispielen finden Sie auf der Übersichtsseite zur [Shared Storage API](/de/docs/Web/API/Shared_Storage_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
