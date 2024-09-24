---
title: "WindowSharedStorage: Worklet-Eigenschaft"
short-title: worklet
slug: Web/API/WindowSharedStorage/worklet
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`worklet`**-Schreibgeschützte Eigenschaft des {{domxref("WindowSharedStorage")}}-Interfaces enthält die {{domxref("SharedStorageWorklet")}}-Instanz, die den gemeinsamen Speicher-Worklet für den aktuellen Ursprung darstellt.

`SharedStorageWorklet` enthält die {{domxref("Worklet.addModule", "addModule()")}}-Methode, die verwendet wird, um ein Modul zum gemeinsamen Speicher-Worklet hinzuzufügen.

## Wert

Ein {{domxref("SharedStorageWorklet")}}-Objekt.

## Beispiele

```js
// Weist einem Benutzer zufällig die Gruppe 0 oder 1 zu
function getExperimentGroup() {
  return Math.round(Math.random());
}

async function injectContent() {
  // Fügen Sie das Modul dem gemeinsamen Speicher-Worklet hinzu
  await window.sharedStorage.worklet.addModule("ab-testing-worklet.js");

  // Weisen Sie dem Benutzer zufällig eine Gruppe (0 oder 1) zu und speichern Sie diese im gemeinsamen Speicher
  window.sharedStorage.set("ab-testing-group", getExperimentGroup(), {
    ignoreIfPresent: true,
  });

  // Führen Sie den URL-Auswahlvorgang aus
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

  // Rendern Sie die ausgewählte URL in einem abgeschirmten Frame
  document.getElementById("content-slot").config = fencedFrameConfig;
}

injectContent();
```

Siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Einstiegsseite für eine schrittweise Anleitung zu diesem Beispiel und für Links zu weiteren Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
