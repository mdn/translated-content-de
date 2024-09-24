---
title: SharedStorageWorklet
slug: Web/API/SharedStorageWorklet
l10n:
  sourceCommit: d484785e53cff16c020adc868415bb9b07b0f6af
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Das **`SharedStorageWorklet`**-Interface der {{domxref("Shared Storage API", "Shared Storage API", "", "nocode")}} repräsentiert das Shared Storage Worklet für den aktuellen Ursprung.

`SharedStorageWorklet` hat keine eigenen Eigenschaften oder Methoden. Stattdessen erbt es die {{domxref("Worklet.addModule", "addModule()")}}-Methode vom {{domxref("Worklet")}}-Interface. Diese Methode wird verwendet, um ein Modul hinzuzufügen.

Im Unterschied zu einem regulären {{domxref("Worklet")}}:

- Wenn die aufrufende Seite die Shared Storage API nicht in einem [Anmeldeverfahren für Datenschutz-Sandboxen](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) einbezogen hat, werden Aufrufe von `sharedStorageWorklet.addModule()` abgelehnt.
- `SharedStorageWorklet` erlaubt aus Datenschutzgründen nur das Hinzufügen eines einzelnen Moduls. Selbst bei erfolgreicher Anmeldung werden wiederholte Aufrufe von `addModule()` auf demselben Shared Storage Worklet abgelehnt.

Auf `SharedStorageWorklet` wird über {{domxref("WindowSharedStorage.worklet")}} zugegriffen.

{{InheritanceDiagram}}

## Beispiele

```js
// Weist einem Benutzer zufällig eine Gruppe 0 oder 1 zu
function getExperimentGroup() {
  return Math.round(Math.random());
}

async function injectContent() {
  // Fügen Sie das Modul zum Shared Storage Worklet hinzu
  await window.sharedStorage.worklet.addModule("ab-testing-worklet.js");

  // Weisen Sie dem Benutzer eine zufällige Gruppe (0 oder 1) zu und speichern Sie sie im Shared Storage
  window.sharedStorage.set("ab-testing-group", getExperimentGroup(), {
    ignoreIfPresent: true,
  });

  // Führen Sie den URL-Auswahlprozess aus
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

  // Rendern Sie die ausgewählte URL in einem fenced frame
  document.getElementById("content-slot").config = fencedFrameConfig;
}

injectContent();
```

Siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) Einstiegsseite für eine Schritt-für-Schritt-Anleitung zu diesem Beispiel und Links zu weiteren Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
