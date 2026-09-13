---
title: "FencedFrameConfig: setSharedStorageContext() Methode"
short-title: setSharedStorageContext()
slug: Web/API/FencedFrameConfig/setSharedStorageContext
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("Fenced Frame API")}}

Die **`setSharedStorageContext()`** Methode der
[`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Schnittstelle übergibt kontextuelle Daten vom einbettenden Dokument an den `<fencedframe>` [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage).

## Syntax

```js-nolint
setSharedStorageContext(context)
```

### Parameter

- `context`
  - : Ein String, der die kontextuellen Daten darstellt, die in den Shared Storage übergeben werden sollen. Einmal gesetzt, werden diese im internen Konfigurationsobjekt der [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Instanz gespeichert.

### Rückgabewert

Keiner (`Undefined`).

## Beispiele

### Kontextuelle Daten über `setSharedStorageContext()` übergeben

Sie können die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die Ereignisdaten innerhalb von Fenced Frames mit kontextuellen Daten des einbettenden Dokuments kombinieren. `setSharedStorageContext()` kann verwendet werden, um kontextuelle Daten vom Einbettenden an Shared Storage Worklets zu übergeben, die von der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) initiiert werden.

Im folgenden Beispiel speichern wir Daten sowohl von der einbettenden Seite als auch vom Fenced Frame in [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage).

In der einbettenden Seite werden wir eine simulierte Ereignis-ID als Shared Storage Kontext mit `setSharedStorageContext()` festlegen:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Im Fenced Frame fügen wir das Worklet-Modul mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzu und senden dann die Ereignisdaten in das Shared Storage Worklet mit [`window.sharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) (dies steht nicht im Zusammenhang mit den kontextuellen Daten des einbettenden Dokuments):

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

Im `reporting-worklet.js` Worklet lesen wir die Ereignis-ID des einbettenden Dokuments von `sharedStorage.context` und die Ereignis-Level-Daten des Frames aus dem Datenobjekt und berichten sie über Private Aggregation:

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

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
