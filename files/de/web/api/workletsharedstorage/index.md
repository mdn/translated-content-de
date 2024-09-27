---
title: WorkletSharedStorage
slug: Web/API/WorkletSharedStorage
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Das **`WorkletSharedStorage`**-Interface der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert den freigegebenen Speicher für einen bestimmten Ursprung innerhalb eines Worklet-Kontexts.

Auf `WorkletSharedStorage` wird über [`SharedStorageWorkletGlobalScope.sharedStorage`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage) zugegriffen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`context`](/de/docs/Web/API/WorkletSharedStorage/context) {{Experimental_Inline}} {{non-standard_inline}}
  - : Enthält kontextbezogene Daten, die über die Methode [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext) aus dem zugehörigen Browsingkontext in das geteilte Speicher-Worklet übergeben wurden.

## Instanzmethoden

_`WorkletSharedStorage` erbt Eigenschaften von seinem Eltern-Interface, [`SharedStorage`](/de/docs/Web/API/SharedStorage)._

- [`get()`](/de/docs/Web/API/WorkletSharedStorage/get) {{Experimental_Inline}}
  - : Ruft einen Wert aus dem freigegebenen Speicher ab.
- [`length()`](/de/docs/Web/API/WorkletSharedStorage/length) {{Experimental_Inline}}
  - : Gibt die Anzahl der derzeit gespeicherten Einträge im freigegebenen Speicher für den aktuellen Ursprung zurück.
- [`remainingBudget()`](/de/docs/Web/API/WorkletSharedStorage/remainingBudget) {{Experimental_Inline}}
  - : Gibt das verbleibende Navigationsbudget für den aktuellen Ursprung zurück.

`WorkletSharedStorage` beinhaltet auch die folgenden Methoden, da darauf ein [Asynchroner Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator) definiert ist:

- [`entries()`](/de/docs/Web/API/WorkletSharedStorage/entries) {{Experimental_Inline}}
  - : Gibt einen neuen asynchronen Iterator für die Schlüssel-Wert-Paare der aufzählbaren Eigenschaften einer `WorkletSharedStorage`-Objektinstanz zurück.
- [`keys()`](/de/docs/Web/API/WorkletSharedStorage/keys) {{Experimental_Inline}}
  - : Gibt einen neuen asynchronen Iterator zurück, der die Schlüssel für jedes Element in einer `WorkletSharedStorage`-Objektinstanz enthält.
- `WorkletSharedStorage[Symbol.asyncIterator]()` {{Experimental_Inline}}
  - : Gibt standardmäßig die [`entries()`](/de/docs/Web/API/WorkletSharedStorage/entries)-Funktion zurück.

## Beispiele

### Kontextbezogene Daten über `setSharedStorageContext()` übergeben

Sie können die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die ereignisbasierte Daten innerhalb eingefügter Frames mit kontextbezogenen Daten aus dem einbettenden Dokument kombinieren. `setSharedStorageContext()` kann verwendet werden, um kontextbezogene Daten vom Einbettungsdokument an freigegebene Speicher-Worklets zu übergeben, die von der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) initiiert wurden.

In diesem Beispiel speichern wir Daten sowohl von der einbettenden Seite als auch vom eingefügten Frame unter Verwendung von [shared storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage).

Auf der einbettenden Seite setzen wir eine fiktive Ereignis-ID als freigegebenen Speicherkontext mithilfe von `setSharedStorageContext()`:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Innerhalb des eingefügten Frames, nach dem Hinzufügen des Worklet-Moduls mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule), senden wir die ereignisbasierten Daten in das freigegebene Speicher-Worklet-Modul mit [`window.sharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) (dies ist nicht mit den kontextbezogenen Daten aus dem einbettenden Dokument verbunden):

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

Im `reporting-worklet.js`-Worklet lesen wir die Ereignis-ID des einbettenden Dokuments aus `sharedStorage.context` und die ereignisbasierten Daten des Frames aus dem Datenobjekt. Anschließend berichten wir sie über Private Aggregation:

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
