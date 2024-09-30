---
title: WindowSharedStorage
slug: Web/API/WindowSharedStorage
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`WindowSharedStorage`**-Schnittstelle der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert den geteilten Speicher für einen bestimmten Ursprung innerhalb eines Standard-Browsing-Kontextes.

Auf `WindowSharedStorage` wird über [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage) zugegriffen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`worklet`](/de/docs/Web/API/WindowSharedStorage/worklet) {{Experimental_Inline}}
  - : Enthält die Instanz des [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet), die den geteilten Speicher-Arbeitsbereich für den aktuellen Ursprung repräsentiert. `SharedStorageWorklet` beinhaltet die Methode [`addModule()`](/de/docs/Web/API/Worklet/addModule), die verwendet wird, um ein Modul zum geteilten Speicher-Arbeitsbereich hinzuzufügen.

## Instanzmethoden

_`WindowSharedStorage` erbt Eigenschaften von seiner Elternschnittstelle, [`SharedStorage`](/de/docs/Web/API/SharedStorage)._

- [`run()`](/de/docs/Web/API/WindowSharedStorage/run) {{Experimental_Inline}}
  - : Führt eine [Run output gate](/de/docs/Web/API/Shared_Storage_API#run) Operation aus, die in einem Modul registriert wurde, das zum [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) des aktuellen Ursprungs hinzugefügt wurde.
- [`selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) {{Experimental_Inline}}
  - : Führt eine [URL Selection output gate](/de/docs/Web/API/Shared_Storage_API#url_selection) Operation aus, die in einem Modul registriert wurde, das zum [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet) des aktuellen Ursprungs hinzugefügt wurde.

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

Sehen Sie sich die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Startseite für eine Schritt-für-Schritt-Anleitung zu diesem Beispiel und Links zu weiteren Beispielen an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
