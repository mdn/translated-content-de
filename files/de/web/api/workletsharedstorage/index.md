---
title: WorkletSharedStorage
slug: Web/API/WorkletSharedStorage
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Das **`WorkletSharedStorage`** Interface der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert den gemeinsam genutzten Speicher für einen bestimmten Ursprung innerhalb eines Worklet-Kontexts.

`WorkletSharedStorage` wird über [`SharedStorageWorkletGlobalScope.sharedStorage`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage) aufgerufen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`context`](/de/docs/Web/API/WorkletSharedStorage/context) {{Experimental_Inline}} {{non-standard_inline}}
  - : Enthält kontextbezogene Daten, die über die Methode [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext) aus dem zugehörigen Browsing-Kontext in das Shared Storage Worklet übergeben wurden.

## Instanzmethoden

_`WorkletSharedStorage` erbt Eigenschaften von seinem Elterninterface, [`SharedStorage`](/de/docs/Web/API/SharedStorage)._

- [`get()`](/de/docs/Web/API/WorkletSharedStorage/get) {{Experimental_Inline}}
  - : Ruft einen Wert aus dem gemeinsam genutzten Speicher ab.
- [`length()`](/de/docs/Web/API/WorkletSharedStorage/length) {{Experimental_Inline}}
  - : Gibt die Anzahl der derzeit für den aktuellen Ursprung im Speicher abgelegten Einträge zurück.
- [`remainingBudget()`](/de/docs/Web/API/WorkletSharedStorage/remainingBudget) {{Experimental_Inline}}
  - : Gibt das verbleibende Navigationsbudget für den aktuellen Ursprung zurück.

`WorkletSharedStorage` umfasst auch die folgenden Methoden, da ein [asynchroner Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator) darauf definiert ist:

- [`entries()`](/de/docs/Web/API/WorkletSharedStorage/entries) {{Experimental_Inline}}
  - : Gibt einen neuen asynchronen Iterator für die Schlüssel-Wert-Paare der aufzählbaren Eigenschaften einer `WorkletSharedStorage`-Objektinstanz zurück.
- [`keys()`](/de/docs/Web/API/WorkletSharedStorage/keys) {{Experimental_Inline}}
  - : Gibt einen neuen asynchronen Iterator zurück, der die Schlüssel für jedes Element in einer `WorkletSharedStorage`-Objektinstanz enthält.
- `WorkletSharedStorage[Symbol.asyncIterator]()` {{Experimental_Inline}}
  - : Gibt standardmäßig die [`entries()`](/de/docs/Web/API/WorkletSharedStorage/entries)-Funktion zurück.

## Beispiele

### Kontextbezogene Daten über `setSharedStorageContext()` übergeben

Sie können die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die ereignisbasierte Daten innerhalb von eingefassten Rahmen mit kontextbezogenen Daten aus dem einbettenden Dokument kombinieren. `setSharedStorageContext()` kann verwendet werden, um kontextbezogene Daten vom Einbettungsobjekt an Shared Storage Worklets zu übermitteln, die von der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) initiiert werden.

In diesem Beispiel speichern wir Daten sowohl von der einbettenden Seite als auch von dem eingefassten Rahmen unter Verwendung des [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage).

Auf der einbettenden Seite setzen wir eine simulierte Ereignis-ID als Shared Storage Kontext mithilfe von `setSharedStorageContext()`:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Innerhalb des eingefassten Rahmens senden wir, nachdem wir das Worklet-Modul mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt haben, die ereignisbasierten Daten in das Shared Storage Worklet-Modul mithilfe von [`window.sharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) (dies steht in keinem Zusammenhang mit den kontextbezogenen Daten aus dem einbettenden Dokument):

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

Im `reporting-worklet.js` Worklet lesen wir die Ereignis-ID des einbettenden Dokuments aus `sharedStorage.context` und die ereignisbasierten Daten des Rahmens aus dem Datenobjekt. Wir berichten sie dann über die Private Aggregation:

```js
class ReportingOperation {
  convertEventIdToBucket(eventId) {
    // …
  }
  convertEventPayloadToValue(info) {
    // …
  }

  async run(data) {
    // Data from the embedder
    const eventId = sharedStorage.context;

    // Data from the fenced frame
    const eventPayload = data.frameData;

    privateAggregation.sendHistogramReport({
      bucket: convertEventIdToBucket(eventId),
      value: convertEventPayloadToValue(eventPayload),
    });
  }
}

register("send-report", ReportingOperation);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
