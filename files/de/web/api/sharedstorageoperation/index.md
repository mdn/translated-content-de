---
title: SharedStorageOperation
slug: Web/API/SharedStorageOperation
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`SharedStorageOperation`** Schnittstelle der {{domxref("Shared Storage API", "Shared Storage API", "", "nocode")}} stellt die Basisklasse für alle Ausgabegate-Operationstypen dar.

Die Ausgabegatetypen sind unten aufgeführt:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Name</th>
      <th>Beschreibung</th>
      <th>Definiert von</th>
      <th>Aufgerufen von</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>URL-Auswahl</td>
      <td>Wird verwendet, um eine URL auszuwählen, die dem Benutzer basierend auf den geteilten Speicherdaten angezeigt wird.</td>
      <td>{{domxref("SharedStorageSelectURLOperation")}}</td>
      <td>{{domxref("WindowSharedStorage.selectURL()", "selectURL()")}}</td>
    </tr>
    <tr>
      <td>Ausführen</td>
      <td>Eine generische Methode, um einige geteilte Speicherdaten zu verarbeiten. Wird beispielsweise von der <a href="https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation">Private Aggregation API</a> verwendet, um geteilte Speicherdaten zu verarbeiten und aggregierte Berichte zu erstellen.</td>
      <td>{{domxref("SharedStorageRunOperation")}}</td>
      <td>{{domxref("WindowSharedStorage.run()", "run()")}}</td>
    </tr>
  </tbody>
</table>

## Beispiele

### Definition individueller Operationen

Viele Skripte von Shared-Storage-Worklet-Modulen definieren und registrieren nur eine einzige Operation; Beispiele finden Sie auf den Seiten {{domxref("SharedStorageSelectURLOperation")}} und {{domxref("SharedStorageRunOperation")}}.

### Definition mehrerer Operationen

In fortgeschritteneren Fällen ist es möglich, mehrere Operationen mit unterschiedlichen Namen im selben Shared-Storage-Worklet-Modulskript zu definieren und zu registrieren. Im folgenden Worklet-Modulskript definieren wir eine URL-Auswahloperation namens `SelectURLOperation`, die eine URL für A/B-Tests auswählt, und eine Ausführungsoperation namens `ExperimentGroupReportingOperation`, die einen Histogrammbericht basierend auf der A/B-Testgruppe des Benutzers erstellt:

```js
// ab-testing-worklet.js

class SelectURLOperation {
  async run(urls, data) {
    // Die Benutzergruppe aus dem geteilten Speicher lesen
    const experimentGroup = await sharedStorage.get("ab-testing-group");

    // Zur Demo in die Konsole loggen
    console.log(`urls = ${JSON.stringify(urls)}`);
    console.log(`data = ${JSON.stringify(data)}`);
    console.log(`ab-testing-group im geteilten Speicher ist ${experimentGroup}`);

    // Den Index der Gruppe zurückgeben
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

// Die Operationen registrieren
register("ab-testing", SelectURLOperation);
register("experiment-group-reporting", ExperimentGroupReportingOperation);
```

Im Haupt-Browsing-Kontext werden diese Operationen von {{domxref("WindowSharedStorage.selectURL()", "selectURL()")}} und {{domxref("WindowSharedStorage.run()", "run()")}}, jeweils aufgerufen. Die über diese Methoden aufzurufenden Operationen werden anhand der Namen ausgewählt, mit denen sie registriert wurden, und sie müssen auch den Strukturen entsprechen, die von den Klassen {{domxref("SharedStorageSelectURLOperation")}} und {{domxref("SharedStorageRunOperation")}} und deren `run()`-Methoden definiert werden.

```js
// Für Demozwecke. Der Hostname wird verwendet, um die Nutzung der
// Entwicklungs-Localhost-URL vs Produktions-URL zu bestimmen
const contentProducerUrl = window.location.host;

// Die Experimentgruppen mit den URLs zuordnen
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

// Eine zufällige Gruppe für das erste Experiment wählen
function getRandomExperiment() {
  const randomIndex = Math.floor(Math.random() * EXPERIMENT_MAP.length);
  return EXPERIMENT_MAP[randomIndex].group;
}

async function injectAd() {
  // Das Worklet-Modul laden
  await window.sharedStorage.worklet.addModule("ab-testing-worklet.js");

  // Den Anfangswert im Speicher auf eine zufällige Experimentgruppe setzen
  window.sharedStorage.set("ab-testing-group", getRandomExperiment(), {
    ignoreIfPresent: true,
  });

  const urls = EXPERIMENT_MAP.map(({ url }) => ({ url }));
  const groups = EXPERIMENT_MAP.map(({ group }) => group);

  // Die selectURL-Aufruf auf eine Fenced-Frame-Konfiguration auflösen, nur wenn diese auf der Seite vorhanden ist
  const resolveToConfig = typeof window.FencedFrameConfig !== "undefined";

  // Die URL-Auswahloperation ausführen, um eine Anzeige basierend auf der Experimentgruppe im geteilten Speicher auszuwählen
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

  // Die Berichtsoperation ausführen
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
