---
title: WorkletSharedStorage
slug: Web/API/WorkletSharedStorage
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

Das **`WorkletSharedStorage`**-Interface der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert den gemeinsamen Speicher für einen bestimmten Ursprung innerhalb eines Worklet-Kontexts.

Auf `WorkletSharedStorage` wird über [`SharedStorageWorkletGlobalScope.sharedStorage`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage) zugegriffen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`context`](/de/docs/Web/API/WorkletSharedStorage/context) {{Experimental_Inline}} {{non-standard_inline}}
  - : Beinhaltet kontextbezogene Daten, die über die Methode [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext) vom zugehörigen Browsing-Kontext in das gemeinsame Speicher-Worklet übergeben werden.

## Instanz-Methoden

_`WorkletSharedStorage` erbt Eigenschaften von seinem übergeordneten Interface, [`SharedStorage`](/de/docs/Web/API/SharedStorage)._

- [`get()`](/de/docs/Web/API/WorkletSharedStorage/get) {{Experimental_Inline}}
  - : Ruft einen Wert aus dem gemeinsamen Speicher ab.
- [`length()`](/de/docs/Web/API/WorkletSharedStorage/length) {{Experimental_Inline}}
  - : Gibt die Anzahl der Einträge zurück, die derzeit im gemeinsamen Speicher für den aktuellen Ursprung gespeichert sind.
- [`remainingBudget()`](/de/docs/Web/API/WorkletSharedStorage/remainingBudget) {{Experimental_Inline}}
  - : Gibt das verbleibende Navigationsbudget für den aktuellen Ursprung zurück.

`WorkletSharedStorage` enthält auch die folgenden Methoden, da es einen [async iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator) definiert hat:

- [`entries()`](/de/docs/Web/API/WorkletSharedStorage/entries) {{Experimental_Inline}}
  - : Gibt einen neuen async iterator für die Schlüssel-Wert-Paare der aufzählbaren Eigenschaften eines `WorkletSharedStorage` Objekt-Instanzes zurück.
- [`keys()`](/de/docs/Web/API/WorkletSharedStorage/keys) {{Experimental_Inline}}
  - : Gibt einen neuen async iterator zurück, der die Schlüssel für jedes Element in einer `WorkletSharedStorage` Objekt-Instanz enthält.
- `WorkletSharedStorage[Symbol.asyncIterator]()` {{Experimental_Inline}}
  - : Gibt standardmäßig die Funktion [`entries()`](/de/docs/Web/API/WorkletSharedStorage/entries) zurück.

## Beispiele

### Kontextbezogene Daten über `setSharedStorageContext()` übermitteln

Sie können die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die Veranstaltungsdaten auf Ebene von Ereignissen innerhalb von geschützten Frames mit kontextbezogenen Daten aus dem einbettenden Dokument kombinieren. `setSharedStorageContext()` kann verwendet werden, um kontextbezogene Daten vom Einbettungselement an Worklets des gemeinsamen Speichers, die durch die [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) initiiert werden, zu übermitteln.

In diesem Beispiel speichern wir Daten sowohl von der einbettenden Seite als auch vom geschützten Frame mithilfe von [shared storage](https://privacysandbox.google.com/private-advertising/shared-storage).

Auf der einbettenden Seite setzen wir eine simulierte Ereignis-ID als gemeinsamen Speicher-Kontext mittels `setSharedStorageContext()`:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Innerhalb des geschützten Frames, nachdem das Worklet-Modul mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt wurde, senden wir die Ereignis-Level-Daten in das Worklet-Modul für den gemeinsamen Speicher mittels [`window.sharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) (dies ist unabhängig von den kontextbezogenen Daten des einbettenden Dokuments):

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

Im Worklet `reporting-worklet.js` lesen wir die Ereignis-ID des einbettenden Dokuments aus `sharedStorage.context` und die Ereignis-Level-Daten des Frames aus dem Datenobjekt. Wir berichten diese dann über Private Aggregation:

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
