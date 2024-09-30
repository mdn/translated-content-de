---
title: SharedStorageOperation
slug: Web/API/SharedStorageOperation
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Das **`SharedStorageOperation`**-Interface der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) stellt die Basisklasse für alle Output-Gate-Operationstypen dar.

Die Output-Gate-Typen sind nachfolgend aufgeführt:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Name</th>
      <th>Beschreibung</th>
      <th>Definiert durch</th>
      <th>Aufgerufen durch</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>URL-Auswahl</td>
      <td>Wird verwendet, um eine URL auszuwählen, die dem Nutzer basierend auf den Shared-Storage-Daten angezeigt werden soll.</td>
      <td>[`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation)</td>
      <td>[`selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL)</td>
    </tr>
    <tr>
      <td>Run</td>
      <td>Eine generische Möglichkeit, einige Shared-Storage-Daten zu verarbeiten. Wird beispielsweise von der <a href="https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation">Private Aggregation API</a> verwendet, um Shared-Storage-Daten zu verarbeiten und aggregierte Berichte zu erstellen.</td>
      <td>[`SharedStorageRunOperation`](/de/docs/Web/API/SharedStorageRunOperation)</td>
      <td>[`run()`](/de/docs/Web/API/WindowSharedStorage/run)</td>
    </tr>
  </tbody>
</table>

## Beispiele

### Definition einzelner Operationen

Viele Shared-Storage-Worklet-Modulscripte definieren und registrieren nur eine einzige Operation; Beispiele finden Sie auf den Seiten zu [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation) und [`SharedStorageRunOperation`](/de/docs/Web/API/SharedStorageRunOperation).

### Definition mehrerer Operationen

In fortgeschritteneren Fällen ist es möglich, mehrere Operationen im selben Shared-Storage-Worklet-Modulskript mit unterschiedlichen Namen zu definieren und zu registrieren. Im folgenden Worklet-Modulskript definieren wir eine URL-Auswahloperation namens `SelectURLOperation`, die eine URL für A/B-Tests auswählt, und eine Run-Operation namens `ExperimentGroupReportingOperation`, die einen Histogrammbericht basierend auf der A/B-Testgruppe des Nutzers ausführt:

```js
// ab-testing-worklet.js

class SelectURLOperation {
  async run(urls, data) {
    // Read the user's group from shared storage
    const experimentGroup = await sharedStorage.get("ab-testing-group");

    // Log to console for the demo
    console.log(`urls = ${JSON.stringify(urls)}`);
    console.log(`data = ${JSON.stringify(data)}`);
    console.log(`ab-testing-group in shared storage is ${experimentGroup}`);

    // Return the index of the group
    return data.indexOf(experimentGroup);
  }
}

function getBucketForTestingGroup(testingGroup) {
  switch (testingGroup) {
    case "control":
      return 0;
    case "experiment-a":
      return 1;
    case "experiment-b":
      return 2;
  }
}

class ExperimentGroupReportingOperation {
  async run() {
    const experimentGroup = await sharedStorage.get("ab-testing-group");

    const bucket = BigInt(getBucketForTestingGroup(experimentGroup));
    privateAggregation.contributeToHistogram({ bucket, value: 1 });
  }
}

// Register the operations
register("ab-testing", SelectURLOperation);
register("experiment-group-reporting", ExperimentGroupReportingOperation);
```

Im Hauptbrowsing-Kontext werden diese Operationen durch [`selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) und [`run()`](/de/docs/Web/API/WindowSharedStorage/run) aufgerufen. Die Operationen, die über diese Methoden aufgerufen werden sollen, werden anhand der Namen ausgewählt, mit denen sie registriert wurden, und sie müssen auch den Strukturen entsprechen, die von den Klassen [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation) und [`SharedStorageRunOperation`](/de/docs/Web/API/SharedStorageRunOperation) und deren `run()`-Methoden definiert werden.

```js
// For demo purposes. The hostname is used to determine the usage of
// development localhost URL vs production URL
const contentProducerUrl = window.location.host;

// Map the experiment groups to the URLs
const EXPERIMENT_MAP = [
  {
    group: "control",
    url: `https://${contentProducerUrl}/ads/default-ad.html`,
  },
  {
    group: "experiment-a",
    url: `https://${contentProducerUrl}/ads/experiment-ad-a.html`,
  },
  {
    group: "experiment-b",
    url: `https://${contentProducerUrl}/ads/experiment-ad-b.html`,
  },
];

// Choose a random group for the initial experiment
function getRandomExperiment() {
  const randomIndex = Math.floor(Math.random() * EXPERIMENT_MAP.length);
  return EXPERIMENT_MAP[randomIndex].group;
}

async function injectAd() {
  // Load the worklet module
  await window.sharedStorage.worklet.addModule("ab-testing-worklet.js");

  // Set the initial value in the storage to a random experiment group
  window.sharedStorage.set("ab-testing-group", getRandomExperiment(), {
    ignoreIfPresent: true,
  });

  const urls = EXPERIMENT_MAP.map(({ url }) => ({ url }));
  const groups = EXPERIMENT_MAP.map(({ group }) => group);

  // Resolve the selectURL call to a fenced frame config only when it exists on the page
  const resolveToConfig = typeof window.FencedFrameConfig !== "undefined";

  // Run the URL selection operation to select an ad based on the experiment group in shared storage
  const selectedUrl = await window.sharedStorage.selectURL("ab-testing", urls, {
    data: groups,
    resolveToConfig,
    keepAlive: true,
  });

  const adSlot = document.getElementById("ad-slot");

  if (resolveToConfig && selectedUrl instanceof FencedFrameConfig) {
    adSlot.config = selectedUrl;
  } else {
    adSlot.src = selectedUrl;
  }

  // Run the reporting operation
  await window.sharedStorage.run("experiment-group-reporting");
}

injectAd();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
