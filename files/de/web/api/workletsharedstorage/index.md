---
title: WorkletSharedStorage
slug: Web/API/WorkletSharedStorage
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Shared Storage API")}}

Die **`WorkletSharedStorage`**-Schnittstelle der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert den gemeinsamen Speicher für einen bestimmten Ursprung innerhalb eines Worklet-Kontexts.

Auf `WorkletSharedStorage` wird über [`SharedStorageWorkletGlobalScope.sharedStorage`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage) zugegriffen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`context`](/de/docs/Web/API/WorkletSharedStorage/context) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Enthält kontextbezogene Daten, die in den gemeinsamen Speicher-Worklet vom zugehörigen Browsing-Kontext über die Methode [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext) übergeben wurden.

## Instanz-Methoden

_`WorkletSharedStorage` erbt Eigenschaften von seiner übergeordneten Schnittstelle, [`SharedStorage`](/de/docs/Web/API/SharedStorage)._

- [`get()`](/de/docs/Web/API/WorkletSharedStorage/get) {{Deprecated_Inline}}
  - : Ruft einen Wert aus dem gemeinsamen Speicher ab.
- [`length()`](/de/docs/Web/API/WorkletSharedStorage/length) {{Deprecated_Inline}}
  - : Gibt die Anzahl der derzeit gespeicherten Einträge im gemeinsamen Speicher für den aktuellen Ursprung zurück.
- [`remainingBudget()`](/de/docs/Web/API/WorkletSharedStorage/remainingBudget) {{Deprecated_Inline}}
  - : Gibt das verbleibende Navigationsbudget für den aktuellen Ursprung zurück.

`WorkletSharedStorage` enthält auch die folgenden Methoden, da es einen [asynchronen Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator) darauf definiert hat:

- [`entries()`](/de/docs/Web/API/WorkletSharedStorage/entries) {{Deprecated_Inline}}
  - : Gibt einen neuen asynchronen Iterator für die Schlüssel-Wert-Paare der aufzählbaren Eigenschaften eines `WorkletSharedStorage`-Objektinstanzs zurück.
- [`keys()`](/de/docs/Web/API/WorkletSharedStorage/keys) {{Deprecated_Inline}}
  - : Gibt einen neuen asynchronen Iterator zurück, der die Schlüssel für jedes Element in einer `WorkletSharedStorage`-Objektinstanz enthält.
- `WorkletSharedStorage[Symbol.asyncIterator]()` {{Deprecated_Inline}}
  - : Gibt standardmäßig die [`entries()`](/de/docs/Web/API/WorkletSharedStorage/entries)-Funktion zurück.

## Beispiele

### Kontextbezogene Daten über `setSharedStorageContext()` übergeben

Sie können die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die Ereignis-Level-Daten innerhalb von geschützten Frames mit kontextbezogenen Daten aus dem einbettenden Dokument kombinieren. `setSharedStorageContext()` kann verwendet werden, um kontextbezogene Daten vom Einbettenden zu den von der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) initiierten gemeinsamen Speicher-Worklets zu übermitteln.

In diesem Beispiel speichern wir Daten sowohl von der einbettenden Seite als auch vom geschützten Frame mithilfe von [gemeinsamem Speicher](https://privacysandbox.google.com/private-advertising/shared-storage).

Auf der einbettenden Seite setzen wir eine Mock-Event-ID als Kontext für den gemeinsamen Speicher mit `setSharedStorageContext()`:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Innerhalb des geschützten Frames, nach dem Hinzufügen des Worklet-Moduls mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule), senden wir die Ereignis-Level-Daten in das gemeinsame Speicher-Worklet-Modul mit [`window.sharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) (dies steht nicht im Zusammenhang mit den kontextbezogenen Daten aus dem einbettenden Dokument):

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

Im `reporting-worklet.js`-Worklet lesen wir die Event-ID des einbettenden Dokuments aus `sharedStorage.context` und die Ereignis-Level-Daten des Frames aus dem Datenobjekt. Wir berichten sie dann durch Private Aggregation:

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
