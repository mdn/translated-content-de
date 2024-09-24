---
title: WindowSharedStorage
slug: Web/API/WindowSharedStorage
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`WindowSharedStorage`**-Schnittstelle der {{domxref("Shared Storage API", "Shared Storage API", "", "nocode")}} repräsentiert den gemeinsamen Speicher für einen bestimmten Ursprung innerhalb eines standardmäßigen Browserkontexts.

`WindowSharedStorage` wird über {{domxref("Window.sharedStorage")}} aufgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("WindowSharedStorage.worklet", "worklet")}} {{Experimental_Inline}}
  - : Enthält die {{domxref("SharedStorageWorklet")}}-Instanz, die den gemeinsamen Speicherarbeitsprozess für den aktuellen Ursprung repräsentiert. `SharedStorageWorklet` beinhaltet die Methode {{domxref("Worklet.addModule", "addModule()")}}, die verwendet wird, um ein Modul zum gemeinsamen Speicherarbeitsprozess hinzuzufügen.

## Instanz-Methoden

_`WindowSharedStorage` erbt Eigenschaften von seiner Elternschnittstelle, {{domxref("SharedStorage")}}._

- {{domxref("WindowSharedStorage.run", "run()")}} {{Experimental_Inline}}
  - : Führt eine [Run output gate](/de/docs/Web/API/Shared_Storage_API#run)-Operation aus, die in einem zum {{domxref("SharedStorageWorklet")}} des aktuellen Ursprungs hinzugefügten Modul registriert wurde.
- {{domxref("WindowSharedStorage.selectURL", "selectURL()")}} {{Experimental_Inline}}
  - : Führt eine [URL Selection output gate](/de/docs/Web/API/Shared_Storage_API#url_selection)-Operation aus, die in einem zum {{domxref("SharedStorageWorklet")}} des aktuellen Ursprungs hinzugefügten Modul registriert wurde.

## Beispiele

```js
// Weist einem Benutzer zufällig eine Gruppe 0 oder 1 zu
function getExperimentGroup() {
  return Math.round(Math.random());
}

async function injectContent() {
  // Fügen Sie das Modul zum gemeinsamen Speicherarbeitsprozess hinzu
  await window.sharedStorage.worklet.addModule("ab-testing-worklet.js");

  // Weisen Sie den Benutzer einer zufälligen Gruppe (0 oder 1) zu und speichern Sie diese im gemeinsamen Speicher
  window.sharedStorage.set("ab-testing-group", getExperimentGroup(), {
    ignoreIfPresent: true,
  });

  // Führen Sie die URL-Auswahloperation aus
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

  // Rendern Sie die gewählte URL in einem umgrenzten Frame
  document.getElementById("content-slot").config = fencedFrameConfig;
}

injectContent();
```

Sehen Sie sich die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Startseite für eine Anleitung zu diesem Beispiel und Links zu weiteren Beispielen an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
