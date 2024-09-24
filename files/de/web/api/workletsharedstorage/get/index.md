---
title: "WorkletSharedStorage: get()-Methode"
short-title: get()
slug: Web/API/WorkletSharedStorage/get
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`get()`**-Methode der {{domxref("WorkletSharedStorage")}}-Schnittstelle ruft einen Wert aus dem geteilten Speicher ab.

## Syntax

```js-nolint
get(key)
```

### Parameter

- `key`
  - : Ein String, der den Schlüssel des Schlüssel-Wert-Paares darstellt, das Sie abrufen möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem String erfüllt wird, der dem Wert des abgerufenen Schlüssel-Wert-Paares entspricht, oder `undefined`, wenn der angegebene `key` im geteilten Speicher nicht gefunden wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Das Worklet-Modul noch nicht mit {{domxref("Worklet.addModule", "addModule()")}} hinzugefügt wurde.
    - `key` die vom Browser definierte maximale Länge überschreitet.
    - Die aufrufende Seite die Shared Storage API nicht in einem erfolgreichen [Privacy Sandbox Enrollment-Prozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) aufgenommen hat.

## Beispiele

### Messung der K+-Frequenz

Das folgende Beispiel misst die K+-Frequenz von Inhaltsansichten. Manchmal als "effektive Frequenz" beschrieben, bezeichnet die K-Frequenz die minimale Anzahl von Ansichten, bevor ein Benutzer bestimmte Inhalte erkennt oder sich daran erinnert (häufig im Kontext von Anzeigenansichten verwendet).

Das Hauptseitenskript:

```js
// k-frequency-measurement.js

async function injectContent() {
  // Das Shared Storage Worklet laden
  await window.sharedStorage.worklet.addModule('k-freq-measurement-worklet.js');

  // Die K-Frequenz-Messoperation ausführen
  await window.sharedStorage.run('k-freq-measurement', { data: { kFreq: 3, contentId: 123 });
}

injectContent();
```

Das Worklet-Modul wird unten gezeigt:

```js
// k-frequency-measurement-worklet.js

// Skalierungsfaktor zum Umgang mit Rauschen, das den Daten hinzugefügt wird
const SCALE_FACTOR = 65536;

/**
 * Der Bucket-Schlüssel muss eine Zahl sein, und in diesem Fall ist er 
 * einfach die Inhalts-ID selbst. Für komplexere Bucket-Schlüsselkonstruktionen
 * siehe andere Anwendungsfälle in diesem Demo.
 */
function convertContentIdToBucket(contentId) {
  return BigInt(contentId);
}

class KFreqMeasurementOperation {
  async run(data) {
    const { kFreq, contentId } = data;

    // Aus dem geteilten Speicher lesen
    const hasReportedContentKey = "has-reported-content";
    const impressionCountKey = "impression-count";
    const hasReportedContent =
      (await this.sharedStorage.get(hasReportedContentKey)) === "true";
    const impressionCount = parseInt(
      (await this.sharedStorage.get(impressionCountKey)) || 0,
    );

    // Nicht berichten, wenn ein Bericht bereits gesendet wurde
    if (hasReportedContent) {
      return;
    }

    // Impressionenanzahl gegen Frequenzgrenze überprüfen
    if (impressionCount < kFreq) {
      await this.sharedStorage.set(impressionCountKey, impressionCount + 1);
      return;
    }

    // Den Aggregationsschlüssel und den aggregierbaren Wert generieren
    const bucket = convertContentIdToBucket(contentId);
    const value = 1 * SCALE_FACTOR;

    // Einen aggregierbaren Bericht über die Private Aggregation API senden
    privateAggregation.sendHistogramReport({ bucket, value });

    // Den Berichtsübermittlungsstatus setzen
    await this.sharedStorage.set(hasReportedContentKey, "true");
  }
}

// Die Operation registrieren
register("k-freq-measurement", KFreqMeasurementOperation);
```

Für weitere Details zu diesem Beispiel siehe [K+-Frequenzmessung](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/k-freq-reach). Siehe die [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)-Seite für Links zu weiteren Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
- [Rauschen und Skalierung](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation/fundamentals#noise_and_scaling) auf developers.google.com (2023)
