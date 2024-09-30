---
title: WorkletSharedStorage
slug: Web/API/WorkletSharedStorage
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Die **`WorkletSharedStorage`**-Schnittstelle der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert den gemeinsamen Speicher für einen bestimmten Ursprung innerhalb eines Worklet-Kontexts.

`WorkletSharedStorage` wird über [`SharedStorageWorkletGlobalScope.sharedStorage`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage) aufgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`context`](/de/docs/Web/API/WorkletSharedStorage/context) {{Experimental_Inline}} {{non-standard_inline}}
  - : Enthält kontextuelle Daten, die über die Methode [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext) in den gemeinsamen Speicher-Worklet aus dem zugehörigen Browserkontext übergeben wurden.

## Instanz-Methoden

_`WorkletSharedStorage` erbt Eigenschaften von seiner Elternschnittstelle, [`SharedStorage`](/de/docs/Web/API/SharedStorage)._

- [`get()`](/de/docs/Web/API/WorkletSharedStorage/get) {{Experimental_Inline}}
  - : Ruft einen Wert aus dem gemeinsamen Speicher ab.
- [`length()`](/de/docs/Web/API/WorkletSharedStorage/length) {{Experimental_Inline}}
  - : Gibt die Anzahl der Einträge zurück, die derzeit im gemeinsamen Speicher für den aktuellen Ursprung gespeichert sind.
- [`remainingBudget()`](/de/docs/Web/API/WorkletSharedStorage/remainingBudget) {{Experimental_Inline}}
  - : Gibt das verbleibende Navigationsbudget für den aktuellen Ursprung zurück.

`WorkletSharedStorage` beinhaltet auch die folgenden Methoden, da ein [asynchroner Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator) darauf definiert ist:

- [`entries()`](/de/docs/Web/API/WorkletSharedStorage/entries) {{Experimental_Inline}}
  - : Gibt einen neuen asynchronen Iterator für die Schlüssel-Wert-Paare der aufzählbaren Eigenschaften einer `WorkletSharedStorage`-Objektinstanz zurück.
- [`keys()`](/de/docs/Web/API/WorkletSharedStorage/keys) {{Experimental_Inline}}
  - : Gibt einen neuen asynchronen Iterator zurück, der die Schlüssel für jedes Element einer `WorkletSharedStorage`-Objektinstanz enthält.
- `WorkletSharedStorage[Symbol.asyncIterator]()` {{Experimental_Inline}}
  - : Gibt standardmäßig die [`entries()`](/de/docs/Web/API/WorkletSharedStorage/entries)-Funktion zurück.

## Beispiele

### Kontextuelle Daten mittels `setSharedStorageContext()` übergeben

Sie können die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die Ereignisleveldaten innerhalb eingezäunter Frames mit kontextuellen Daten aus dem eingebetteten Dokument kombinieren. `setSharedStorageContext()` kann verwendet werden, um kontextuelle Daten vom Einbettungsdokument an gemeinsam genutzte Speicher-Worklets zu übergeben, die von der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) initiiert wurden.

In diesem Beispiel speichern wir Daten sowohl von der einbettenden Seite als auch vom fenced frame mithilfe von [shared storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage).

Auf der einbettenden Seite setzen wir eine mock Event-ID als gemeinsam genutzten Speicherungskontext mit `setSharedStorageContext()`:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Innerhalb des fenced frames, nachdem das Worklet-Modul mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde, senden wir die Ereignisleveldaten in das Modul des gemeinsam genutzten Speichers mit [`window.sharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) (dies hat keinen Bezug zu den kontextuellen Daten aus dem Einbettungsdokument):

```js
const frameData = {
  // Data available only inside the fenced frame
};

await window.sharedStorage.worklet.addModule("reporting-worklet.js");

await window.sharedStorage.run("send-report", {
  data: {
    frameData,
  },
});
```

Im `reporting-worklet.js` Worklet lesen wir die Ereignis-ID des einbetteten Dokuments von `sharedStorage.context` und die Ereignisleveldaten des Frames aus dem Datenobjekt. Wir berichten sie dann durch Private Aggregation:

```js
class ReportingOperation {
  convertEventIdToBucket(eventId) { ... }
  convertEventPayloadToValue(info) { ... }

  async run(data) {
    // Data from the embedder
    const eventId = sharedStorage.context;

    // Data from the fenced frame
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
