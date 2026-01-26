---
title: WorkletSharedStorage
slug: Web/API/WorkletSharedStorage
l10n:
  sourceCommit: 923adb616baa87402ca965ebd18a73380cc84d27
---

{{APIRef("Shared Storage API")}}{{deprecated_header}}

Das **`WorkletSharedStorage`**-Interface der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert den geteilten Speicher für einen bestimmten Ursprung innerhalb eines Worklet-Kontexts.

Auf `WorkletSharedStorage` wird über [`SharedStorageWorkletGlobalScope.sharedStorage`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage) zugegriffen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`context`](/de/docs/Web/API/WorkletSharedStorage/context) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Enthält kontextbezogene Daten, die mittels der Methode [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext) aus dem zugehörigen Browsing-Kontext in das geteilte Speicher-Worklet übergeben werden.

## Instanz-Methoden

_`WorkletSharedStorage` erbt Eigenschaften von seinem Eltern-Interface, [`SharedStorage`](/de/docs/Web/API/SharedStorage)._

- [`get()`](/de/docs/Web/API/WorkletSharedStorage/get) {{Deprecated_Inline}}
  - : Ruft einen Wert aus dem geteilten Speicher ab.
- [`length()`](/de/docs/Web/API/WorkletSharedStorage/length) {{Deprecated_Inline}}
  - : Gibt die Anzahl der aktuell im geteilten Speicher für den aktuellen Ursprung gespeicherten Einträge zurück.
- [`remainingBudget()`](/de/docs/Web/API/WorkletSharedStorage/remainingBudget) {{Deprecated_Inline}}
  - : Gibt das verbleibende Navigationsbudget für den aktuellen Ursprung zurück.

`WorkletSharedStorage` beinhaltet zusätzlich die folgenden Methoden, da ein [async Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator) darauf definiert ist:

- [`entries()`](/de/docs/Web/API/WorkletSharedStorage/entries) {{Deprecated_Inline}}
  - : Gibt einen neuen async Iterator für die Schlüssel-Wert-Paare der aufzählbaren Eigenschaften eines `WorkletSharedStorage`-Objektinstanzen zurück.
- [`keys()`](/de/docs/Web/API/WorkletSharedStorage/keys) {{Deprecated_Inline}}
  - : Gibt einen neuen async Iterator zurück, der die Schlüssel für jedes Element einer `WorkletSharedStorage`-Objektinstanz enthält.
- `WorkletSharedStorage[Symbol.asyncIterator]()` {{Deprecated_Inline}}
  - : Gibt standardmäßig die Funktion [`entries()`](/de/docs/Web/API/WorkletSharedStorage/entries) zurück.

## Beispiele

### Kontextbezogene Daten mit `setSharedStorageContext()` übergeben

Sie können die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die ereignisbezogene Daten innerhalb von Fenced Frames mit kontextuellen Daten aus dem Einbettungsdokument kombinieren. `setSharedStorageContext()` kann verwendet werden, um kontextbezogene Daten vom Einbettungsprogramm an geteilte Speicher-Worklets zu übermitteln, die von der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) initiiert werden.

In diesem Beispiel speichern wir Daten sowohl von der Einbettungsseite als auch vom Fenced Frame mithilfe von [geteiltem Speicher](https://privacysandbox.google.com/private-advertising/shared-storage).

Auf der Einbettungsseite setzen wir eine simulierte Ereignis-ID als geteilten Speicher-Kontext mit `setSharedStorageContext()`:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Innerhalb des Fenced Frames senden wir nach dem Hinzufügen des Worklet-Moduls mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) die ereignisbezogenen Daten in das geteilte Speicher-Worklet-Modul mit [`window.sharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) ein (dies steht in keinem Zusammenhang mit den kontextuellen Daten aus dem Einbettungsdokument):

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

Im `reporting-worklet.js`-Worklet lesen wir die Ereignis-ID des Einbettungsdokuments aus `sharedStorage.context` und die ereignisbezogenen Daten des Frames aus dem Datenobjekt aus. Dann berichten wir diese durch Private Aggregation:

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
