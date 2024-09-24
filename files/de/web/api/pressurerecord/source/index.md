---
title: "PressureRecord: source-Eigenschaft"
short-title: source
slug: Web/API/PressureRecord/source
l10n:
  sourceCommit: a251e34887530216e319fee73b5b859c8c943a53
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte **`source`**-Eigenschaft ist ein String, der die Ursprungsquelle angibt, von der der Datensatz stammt.

## Wert

Ein String, der die Ursprungsquelle angibt, von der der Datensatz stammt. Die aktuelle Version der Compute Pressure API-Spezifikation unterstützt zwei Hauptquellentypen:

- `"thermals"` repräsentiert den globalen thermischen Zustand des gesamten Systems.
- `"cpu"` repräsentiert den durchschnittlichen Druck der zentralen Verarbeitungseinheit (CPU) über alle ihre Kerne hinweg. Dieser Zustand kann von anderen Apps und Websites als der beobachtenden Website beeinflusst werden.

Verwenden Sie den statischen Hinweis {{domxref("PressureObserver.knownSources_static", "PressureObserver.knownSources")}}, um zu sehen, welche Quellentypen von Ihrem Browser unterstützt werden. Beachten Sie, dass die Verfügbarkeit auch von Ihrem Betriebssystem und Ihrer Hardware abhängen kann. Rufen Sie {{domxref("PressureObserver.observe()", "observe()")}} auf und prüfen Sie einen `NotSupportedError`, um festzustellen, ob eine Druckbeobachtung möglich ist.

## Beispiele

### Verwendung der `source`-Eigenschaft

Im folgenden Beispiel protokollieren wir den Wert der `source`-Eigenschaft im Rückruf des Druckbeobachters.

```js
function callback(records) {
  const lastRecord = records[records.length - 1];
  console.log(`Current pressure source: ${lastRecord.source}`);
}

try {
  const observer = new PressureObserver(callback);
  await observer.observe("cpu", {
    sampleInterval: 1000, // 1000ms
  });
} catch (error) {
  // report error setting up the observer
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
