---
title: "FencedFrameConfig: setSharedStorageContext() Methode"
short-title: setSharedStorageContext()
slug: Web/API/FencedFrameConfig/setSharedStorageContext
l10n:
  sourceCommit: 801556b40e45c735bf7f74e6db7d10864173e44a
---

{{APIRef("Fenced Frame API")}}{{SeeCompatTable}}

Die **`setSharedStorageContext()`** Methode der [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Schnittstelle übergibt kontextbezogene Daten aus dem einbettenden Dokument an den [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) des `<fencedframe>`.

## Syntax

```js-nolint
setSharedStorageContext(context)
```

### Parameter

- `context`
  - : Ein String, der die kontextbezogenen Daten darstellt, die in den Shared Storage übergeben werden. Einmal gesetzt, wird er in der internen Konfiguration der [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Instanz gespeichert.

### Rückgabewert

Kein (`Undefined`).

## Beispiele

### Kontextbezogene Daten mit `setSharedStorageContext()` übergeben

Sie können die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die Ereignis-Ebene-Daten innerhalb von fenced frames mit kontextbezogenen Daten aus dem einbettenden Dokument kombinieren. `setSharedStorageContext()` kann verwendet werden, um kontextbezogene Daten vom Einbettungsdokument an Shared Storage Worklets zu übergeben, die von der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) initiiert werden.

Im folgenden Beispiel speichern wir Daten sowohl von der einbettenden Seite als auch vom fenced frame im [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage).

Auf der einbettenden Seite setzen wir eine simulierte Ereignis-ID als Shared Storage Kontext mit `setSharedStorageContext()`:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Im fenced frame fügen wir das Worklet-Modul mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzu und senden dann die Ereignis-Ebene-Daten in das Shared Storage Worklet mit [`window.sharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) (dies steht nicht im Zusammenhang mit den kontextbezogenen Daten aus dem einbettenden Dokument):

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

Im `reporting-worklet.js` Worklet lesen wir die Ereignis-ID des einbettenden Dokuments von `sharedStorage.context` und die Ereignis-Ebene-Daten des Frames aus dem Datenobjekt aus und berichten sie dann durch Private Aggregation:

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
