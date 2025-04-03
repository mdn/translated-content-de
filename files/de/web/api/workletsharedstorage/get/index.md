---
title: "WorkletSharedStorage: `get()` Methode"
short-title: get()
slug: Web/API/WorkletSharedStorage/get
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`get()`**-Methode der
[`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)-Schnittstelle ruft einen Wert aus dem gemeinsamen Speicher ab.

## Syntax

```js-nolint
get(key)
```

### Parameter

- `key`
  - : Ein String, der den Schlüssel des Schlüssel-Wert-Paares darstellt, das Sie abrufen möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das entweder mit einem String erfüllt wird, der dem Wert des abgerufenen Schlüssel-Wert-Paares entspricht, oder `undefined`, wenn der angegebene `key` im gemeinsamen Speicher nicht gefunden wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde.
    - `key` die vom Browser festgelegte maximale Länge überschreitet.
    - Die aufrufende Stelle die Shared Storage API nicht in einem erfolgreichen [Datenschutz-Sandbox-Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthalten hat.

## Beispiele

### Messung der K+-Frequenz

Im folgenden Beispiel wird die K+-Frequenz von Inhaltsaufrufen gemessen. Manchmal als "effektive Frequenz" beschrieben, bezieht sich die K-Frequenz auf die minimale Anzahl von Ansichten, die erforderlich sind, bevor ein Benutzer bestimmte Inhalte erkennt oder sich daran erinnert (oft im Kontext von Anzeigenaufrufen verwendet).

Das Hauptseiten-Skript:

```js
// k-frequency-measurement.js

async function injectContent() {
  // Load the Shared Storage worklet
  await window.sharedStorage.worklet.addModule("k-freq-measurement-worklet.js");

  // Run the K-frequency measurement operation
  await window.sharedStorage.run("k-freq-measurement", {
    data: { kFreq: 3, contentId: 123 },
  });
}

injectContent();
```

Das Worklet-Modul wird unten gezeigt:

```js
// k-frequency-measurement-worklet.js

// Scale factor for handling noise added to data
const SCALE_FACTOR = 65536;

/**
 * The bucket key must be a number, and in this case, it is simply the content
 * ID itself. For more complex bucket key construction, see other use cases in
 * this demo.
 */
function convertContentIdToBucket(contentId) {
  return BigInt(contentId);
}

class KFreqMeasurementOperation {
  async run(data) {
    const { kFreq, contentId } = data;

    // Read from Shared Storage
    const hasReportedContentKey = "has-reported-content";
    const impressionCountKey = "impression-count";
    const hasReportedContent =
      (await this.sharedStorage.get(hasReportedContentKey)) === "true";
    const impressionCount = parseInt(
      (await this.sharedStorage.get(impressionCountKey)) || 0,
    );

    // Do not report if a report has been sent already
    if (hasReportedContent) {
      return;
    }

    // Check impression count against frequency limit
    if (impressionCount < kFreq) {
      await this.sharedStorage.set(impressionCountKey, impressionCount + 1);
      return;
    }

    // Generate the aggregation key and the aggregatable value
    const bucket = convertContentIdToBucket(contentId);
    const value = 1 * SCALE_FACTOR;

    // Send an aggregatable report via the Private Aggregation API
    privateAggregation.sendHistogramReport({ bucket, value });

    // Set the report submission status flag
    await this.sharedStorage.set(hasReportedContentKey, "true");
  }
}

// Register the operation
register("k-freq-measurement", KFreqMeasurementOperation);
```

Für weitere Details zu diesem Beispiel siehe [K+ Frequenzmessung](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/k-freq-reach). Siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Startseite für Links zu weiteren Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
- [Rauschen und Skalierung](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/fundamentals#noise_and_scaling) auf developers.google.com (2023)
