---
title: "FencedFrameConfig: setSharedStorageContext() Methode"
short-title: setSharedStorageContext()
slug: Web/API/FencedFrameConfig/setSharedStorageContext
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Fenced Frame API")}}{{SeeCompatTable}}

Die **`setSharedStorageContext()`** Methode der
{{domxref("FencedFrameConfig")}} Schnittstelle überträgt kontextuelle Daten vom einbettenden Dokument zum `<fencedframe>` [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage).

## Syntax

```js-nolint
setSharedStorageContext(context)
```

### Parameter

- `context`
  - : Ein String, der die kontextuellen Daten darstellt, die in den gemeinsamen Speicher übergeben werden sollen. Nach Festlegung wird dies in der [internen Konfiguration](/de/docs/Web/API/FencedFrameConfig#internal_config) Eigenschaft `storageContext` gespeichert.

### Rückgabewert

Keiner (`undefined`).

## Beispiele

### Kontextuelle Daten über `setSharedStorageContext()` übermitteln

Sie können die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die Ereignisdaten innerhalb von fenced frames mit kontextuellen Daten aus dem einbettenden Dokument kombinieren. `setSharedStorageContext()` kann verwendet werden, um kontextuelle Daten vom Einbettenden an Shared Storage Worklets, die durch die [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) initiiert werden, zu übermitteln.

Im folgenden Beispiel speichern wir Daten sowohl von der einbettenden Seite als auch vom fenced frame in [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage).

Auf der einbettenden Seite setzen wir eine simulierte Ereignis-ID als gemeinsamen Speicherkontext mit `setSharedStorageContext()`:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Daten vom Einbettenden, die an das Shared Storage Worklet übergeben werden sollen
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Innerhalb des fenced frames fügen wir das Worklet-Modul mit {{domxref("Worklet.addModule","window.sharedStorage.worklet.addModule()")}} hinzu und senden dann die Ereignisdaten in das Shared Storage Worklet mittels {{domxref("WindowSharedStorage.run","window.sharedStorage.run()")}} (dies ist nicht mit den kontextuellen Daten vom einbettenden Dokument verbunden):

```js
const frameData = {
  // Daten, die nur innerhalb des fenced frames verfügbar sind
};

await window.sharedStorage.worklet.addModule("reporting-worklet.js");

await window.sharedStorage.run("send-report", {
  data: {
    frameData,
  },
});
```

Im `reporting-worklet.js` Worklet lesen wir die Ereignis-ID des einbettenden Dokuments aus `sharedStorage.context` und die Ereignisdaten des frames aus dem Datenobjekt und berichten sie dann über Private Aggregation:

```js
class ReportingOperation {
  convertEventIdToBucket(eventId) { ... }
  convertEventPayloadToValue(info) { ... }

  async run(data) {
    // Daten vom Einbettenden
    const eventId = sharedStorage.context;

    // Daten vom fenced frame
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
