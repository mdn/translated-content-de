---
title: WorkletSharedStorage
slug: Web/API/WorkletSharedStorage
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{APIRef("Shared Storage API")}}

Das Interface **`WorkletSharedStorage`** der [Shared Storage API](/de/docs/Web/API/Shared_Storage_API) repräsentiert den gemeinsam genutzten Speicher für einen bestimmten Ursprung innerhalb eines Worklet-Kontexts.

Auf `WorkletSharedStorage` wird über [`SharedStorageWorkletGlobalScope.sharedStorage`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage) zugegriffen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`context`](/de/docs/Web/API/WorkletSharedStorage/context) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Enthält Kontextdaten, die über die Methode [`FencedFrameConfig.setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext) aus dem zugehörigen Browsing-Kontext an das Shared-Storage-Worklet übergeben wurden.

## Instanzmethoden

_`WorkletSharedStorage` erbt Eigenschaften von seinem übergeordneten Interface [`SharedStorage`](/de/docs/Web/API/SharedStorage)._

- [`get()`](/de/docs/Web/API/WorkletSharedStorage/get) {{Deprecated_Inline}}
  - : Ruft einen Wert aus dem gemeinsam genutzten Speicher ab.
- [`length()`](/de/docs/Web/API/WorkletSharedStorage/length) {{Deprecated_Inline}}
  - : Gibt die Anzahl der Einträge zurück, die derzeit für den aktuellen Ursprung im gemeinsam genutzten Speicher gespeichert sind.
- [`remainingBudget()`](/de/docs/Web/API/WorkletSharedStorage/remainingBudget) {{Deprecated_Inline}}
  - : Gibt das verbleibende Navigationsbudget für den aktuellen Ursprung zurück.

`WorkletSharedStorage` umfasst außerdem die folgenden Methoden, da dafür ein [asynchroner Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator) definiert ist:

- [`entries()`](/de/docs/Web/API/WorkletSharedStorage/entries) {{Deprecated_Inline}}
  - : Gibt einen neuen asynchronen Iterator für die Schlüssel-Wert-Paare der aufzählbaren Eigenschaften einer `WorkletSharedStorage`-Objektinstanz zurück.
- [`keys()`](/de/docs/Web/API/WorkletSharedStorage/keys) {{Deprecated_Inline}}
  - : Gibt einen neuen asynchronen Iterator zurück, der die Schlüssel für jeden Eintrag einer `WorkletSharedStorage`-Objektinstanz enthält.
- `WorkletSharedStorage[Symbol.asyncIterator]()` {{Deprecated_Inline}}
  - : Gibt standardmäßig die Funktion [`entries()`](/de/docs/Web/API/WorkletSharedStorage/entries) zurück.

## Beispiele

### Kontextdaten über `setSharedStorageContext()` übergeben

Sie können die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die Ereignisdaten innerhalb von Fenced Frames mit Kontextdaten aus dem einbettenden Dokument kombinieren. Mit `setSharedStorageContext()` können Kontextdaten vom einbettenden Dokument an Shared-Storage-Worklets übergeben werden, die durch die [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) gestartet wurden.

In diesem Beispiel speichern wir sowohl Daten der einbettenden Seite als auch Daten des Fenced Frames im [gemeinsam genutzten Speicher](https://privacysandbox.google.com/private-advertising/shared-storage).

Auf der einbettenden Seite legen wir mit `setSharedStorageContext()` eine beispielhafte Ereignis-ID als Shared-Storage-Kontext fest:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Innerhalb des Fenced Frames senden wir, nachdem wir das Worklet-Modul mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt haben, die Ereignisdaten mit [`window.sharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) an das Shared-Storage-Worklet-Modul. Dies ist unabhängig von den Kontextdaten aus dem einbettenden Dokument:

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

Im Worklet `reporting-worklet.js` lesen wir die Ereignis-ID des einbettenden Dokuments aus `sharedStorage.context` und die Ereignisdaten des Frames aus dem Datenobjekt. Anschließend melden wir diese Daten über Private Aggregation:

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
