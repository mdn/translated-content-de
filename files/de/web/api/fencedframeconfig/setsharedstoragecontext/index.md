---
title: "FencedFrameConfig: setSharedStorageContext()-Methode"
short-title: setSharedStorageContext()
slug: Web/API/FencedFrameConfig/setSharedStorageContext
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Fenced Frame API")}}{{SeeCompatTable}}

Die **`setSharedStorageContext()`**-Methode der [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Schnittstelle übergibt kontextuelle Daten vom einbettenden Dokument an den `<fencedframe>`-[geteilten Speicher](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage).

## Syntax

```js-nolint
setSharedStorageContext(context)
```

### Parameter

- `context`
  - : Ein String, der die kontextuellen Daten darstellt, die in den geteilten Speicher übergeben werden sollen. Sobald dies festgelegt ist, wird es in der [internen Konfiguration](/de/docs/Web/API/FencedFrameConfig#internal_config) `storageContext`-Eigenschaft gespeichert.

### Rückgabewert

Keiner (`Undefined`).

## Beispiele

### Kontextuelle Daten über `setSharedStorageContext()` übergeben

Sie können die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die Ereignisdaten innerhalb von `fenced frames` mit kontextuellen Daten aus dem einbettenden Dokument kombinieren. `setSharedStorageContext()` kann verwendet werden, um kontextuelle Daten vom Einbettenden an geteilte Speicher-Worklets zu übergeben, die durch die [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) initiiert wurden.

Im folgenden Beispiel speichern wir Daten sowohl von der einbettenden Seite als auch vom `fenced frame` im [geteilten Speicher](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage).

Auf der einbettenden Seite setzen wir eine simulierte Ereignis-ID als Kontext für den geteilten Speicher mit `setSharedStorageContext()`:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Innerhalb des `fenced frame` fügen wir das Worklet-Modul mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzu und senden dann die Ereignisdaten in das geteilte Speicher-Worklet mit [`window.sharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) (dies ist unabhängig von den kontextuellen Daten aus dem einbettenden Dokument):

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

Im `reporting-worklet.js`-Worklet lesen wir die Ereignis-ID des einbettenden Dokuments aus `sharedStorage.context` und die Ereignisdaten des Frames aus dem Datenobjekt und berichten diese dann durch Private Aggregation:

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

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
