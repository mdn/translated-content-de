---
title: "FencedFrameConfig: setSharedStorageContext()-Methode"
short-title: setSharedStorageContext()
slug: Web/API/FencedFrameConfig/setSharedStorageContext
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{APIRef("Fenced Frame API")}}{{SeeCompatTable}}

Die **`setSharedStorageContext()`**-Methode der [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Schnittstelle übergibt Kontextdaten aus dem eingebetteten Dokument an den [gemeinsamen Speicher](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) des `<fencedframe>`.

## Syntax

```js-nolint
setSharedStorageContext(context)
```

### Parameter

- `context`
  - : Ein String, der die Kontextdaten repräsentiert, die in den gemeinsamen Speicher übergeben werden sollen. Nachdem sie gesetzt sind, werden sie in der [internen Konfiguration](/de/docs/Web/API/FencedFrameConfig#internal_config) `storageContext`-Eigenschaft gespeichert.

### Rückgabewert

Nichts (`Undefined`).

## Beispiele

### Kontextdaten über `setSharedStorageContext()` übergeben

Sie können die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die Ereignis-Daten innerhalb von fenced frames mit Kontextdaten vom einbettenden Dokument kombinieren. `setSharedStorageContext()` kann verwendet werden, um Kontextdaten vom Einbettenden zu gemeinsamen Speicher-Worklets zu übergeben, die von der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) initiiert wurden.

Im folgenden Beispiel speichern wir Daten sowohl von der einbettenden Seite als auch vom fenced frame im [gemeinsamen Speicher](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage).

Auf der einbettenden Seite werden wir eine simulierte Ereignis-ID als gemeinsamen Speicher-Kontext mit `setSharedStorageContext()` setzen:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Innerhalb des fenced frames fügen wir das Worklet-Modul mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzu und senden dann die Ereignis-Daten in das gemeinsame Speicher-Worklet mit [`window.sharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) (dies ist nicht mit den Kontextdaten des eingebetteten Dokuments verbunden):

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

Im `reporting-worklet.js`-Worklet lesen wir die Ereignis-ID des eingebetteten Dokuments von `sharedStorage.context` und die Ereignis-Daten des frames aus dem Datenobjekt, um sie danach über Private Aggregation zu berichten:

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
