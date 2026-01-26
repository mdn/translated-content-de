---
title: WindowSharedStorage
slug: Web/API/WindowSharedStorage
l10n:
  sourceCommit: 923adb616baa87402ca965ebd18a73380cc84d27
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Die **`WindowSharedStorage`**-Schnittstelle der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert den gemeinsamen Speicher für einen bestimmten Ursprung innerhalb eines Standard-Browsing-Kontexts.

`WindowSharedStorage` wird über [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage) aufgerufen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`worklet`](/de/docs/Web/API/WindowSharedStorage/worklet) {{deprecated_inline}}
  - : Beinhaltet die [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Instanz, die den gemeinsamen Speicher-Worklet für den aktuellen Ursprung darstellt. `SharedStorageWorklet` umfasst die Methode [`addModule()`](/de/docs/Web/API/Worklet/addModule), die verwendet wird, um ein Modul zum gemeinsamen Speicher-Worklet hinzuzufügen.

## Instanzmethoden

_`WindowSharedStorage` erbt Eigenschaften von seiner übergeordneten Schnittstelle, [`SharedStorage`](/de/docs/Web/API/SharedStorage)._

- [`run()`](/de/docs/Web/API/WindowSharedStorage/run) {{Deprecated_Inline}}
  - : Führt eine [Run Output Gate](/de/docs/Web/API/Shared_Storage_API#run)-Operation aus, die in einem hinzugefügten Modul im [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) des aktuellen Ursprungs registriert wurde.
- [`selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) {{Deprecated_Inline}}
  - : Führt eine [URL Selection Output Gate](/de/docs/Web/API/Shared_Storage_API#url_selection)-Operation aus, die in einem hinzugefügten Modul im [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) des aktuellen Ursprungs registriert wurde.

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

Sehen Sie sich die Übersichtsseite der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) für eine Schritt-für-Schritt-Anleitung zu diesem Beispiel und Links zu weiteren Beispielen an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
