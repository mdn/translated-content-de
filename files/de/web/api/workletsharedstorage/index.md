---
title: WorkletSharedStorage
slug: Web/API/WorkletSharedStorage
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Das **`WorkletSharedStorage`**-Interface des {{domxref("Shared Storage API", "Shared Storage API", "", "nocode")}} repräsentiert den gemeinsamen Speicher für einen bestimmten Ursprung innerhalb eines Worklet-Kontexts.

Auf `WorkletSharedStorage` wird über {{domxref("SharedStorageWorkletGlobalScope.sharedStorage")}} zugegriffen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("WorkletSharedStorage.context", "context")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Enthält kontextuale Daten, die in das Shared Storage Worklet aus dem zugehörigen Browsing-Kontext über die Methode {{domxref("FencedFrameConfig.setSharedStorageContext()")}} übergeben wurden.

## Instanz-Methoden

_`WorkletSharedStorage` erbt Eigenschaften von seinem übergeordneten Interface, {{domxref("SharedStorage")}}._

- {{domxref("WorkletSharedStorage.get", "get()")}} {{Experimental_Inline}}
  - : Ruft einen Wert aus dem gemeinsamen Speicher ab.
- {{domxref("WorkletSharedStorage.length", "length()")}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Einträge zurück, die derzeit im gemeinsamen Speicher für den aktuellen Ursprung gespeichert sind.
- {{domxref("WorkletSharedStorage.remainingBudget", "remainingBudget()")}} {{Experimental_Inline}}
  - : Gibt das verbleibende Navigationsbudget für den aktuellen Ursprung zurück.

`WorkletSharedStorage` beinhaltet auch die folgenden Methoden, da es ein [asynchroner Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator) darauf definiert ist:

- {{domxref("WorkletSharedStorage.entries", "entries()")}} {{Experimental_Inline}}
  - : Gibt einen neuen asynchronen Iterator für die Schlüssel-Werte-Paare der aufzählbaren Eigenschaften einer `WorkletSharedStorage`-Objektinstanz zurück.
- {{domxref("WorkletSharedStorage.keys", "keys()")}} {{Experimental_Inline}}
  - : Gibt einen neuen asynchronen Iterator zurück, der die Schlüssel für jedes Element in einer `WorkletSharedStorage`-Objektinstanz enthält.
- `WorkletSharedStorage[Symbol.asyncIterator]()` {{Experimental_Inline}}
  - : Gibt standardmäßig die {{domxref("WorkletSharedStorage.entries", "entries()")}}-Funktion zurück.

## Beispiele

### Kontextuelle Daten über `setSharedStorageContext()` übergeben

Sie können die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) nutzen, um Berichte zu erstellen, die Ereignis-Ebenen-Daten innerhalb eingefasster Frames mit kontextuellen Daten aus dem eingebetteten Dokument kombinieren. `setSharedStorageContext()` kann verwendet werden, um kontextuelle Daten vom Einbettenden an Shared Storage Worklets zu übergeben, die von der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) initiiert wurden.

In diesem Beispiel speichern wir Daten sowohl von der einbettenden Seite als auch vom eingefassten Frame unter Verwendung von [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage).

Auf der einbettenden Seite setzen wir eine simulierte Ereignis-ID als Shared Storage-Kontext mit `setSharedStorageContext()`:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Daten vom Einbettenden, die Sie an das Shared Storage Worklet übergeben möchten
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Innerhalb des eingefassten Frames senden wir, nachdem das Worklet-Modul mit {{domxref("Worklet.addModule","window.sharedStorage.worklet.addModule()")}} hinzugefügt wurde, die Ereignis-Ebenen-Daten in das Shared Storage Worklet-Modul mit {{domxref("WindowSharedStorage.run","window.sharedStorage.run()")}} (dies ist unabhängig von den kontextuellen Daten aus dem eingebetteten Dokument):

```js
const frameData = {
  // Daten, die nur innerhalb des eingefassten Rahmens verfügbar sind
};

await window.sharedStorage.worklet.addModule("reporting-worklet.js");

await window.sharedStorage.run("send-report", {
  data: {
    frameData,
  },
});
```

Im `reporting-worklet.js` Worklet lesen wir die Ereignis-ID des einbettenden Dokuments aus `sharedStorage.context` und die Ereignis-Ebenen-Daten des Frames aus dem Datenobjekt. Wir berichten sie dann durch die Private Aggregation:

```js
class ReportingOperation {
  convertEventIdToBucket(eventId) { ... }
  convertEventPayloadToValue(info) { ... }

  async run(data) {
    // Daten vom Einbettenden
    const eventId = sharedStorage.context;

    // Daten vom eingefassten Frame
    const eventPayload = data.frameData;

    privateAggregation.sendHistogramReport({
      bucket: convertEventIdToBucket(eventId),
      value: convertEventPayloadToValue(eventPayload)
    });
  }
}

register('send-report', ReportingOperation);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
