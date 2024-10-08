---
title: "WindowSharedStorage: worklet-Eigenschaft"
short-title: worklet
slug: Web/API/WindowSharedStorage/worklet
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`worklet`**-Schreibgeschützte Eigenschaft des [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Interfaces enthält die Instanz von [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet), die das Shared Storage Worklet für den aktuellen Ursprung darstellt.

`SharedStorageWorklet` enthält die Methode [`addModule()`](/de/docs/Web/API/Worklet/addModule), die verwendet wird, um ein Modul zum Shared Storage Worklet hinzuzufügen.

## Wert

Ein [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Objekt.

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

Siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Übersichtsseite für eine Anleitung zu diesem Beispiel und für Links zu weiteren Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
