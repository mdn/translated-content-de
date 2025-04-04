---
title: "FencedFrameConfig: Methode setSharedStorageContext()"
short-title: setSharedStorageContext()
slug: Web/API/FencedFrameConfig/setSharedStorageContext
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{APIRef("Fenced Frame API")}}{{SeeCompatTable}}

Die **`setSharedStorageContext()`**-Methode der [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Schnittstelle übergibt kontextuelle Daten vom einbettenden Dokument an den [geteilten Speicher](https://privacysandbox.google.com/private-advertising/shared-storage) des `<fencedframe>`.

## Syntax

```js-nolint
setSharedStorageContext(context)
```

### Parameter

- `context`
  - : Ein String, der die kontextuellen Daten repräsentiert, die in den geteilten Speicher übergeben werden sollen. Sobald festgelegt, wird dies in der internen Konfiguration der [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Instanz gespeichert.

### Rückgabewert

Keiner (`Undefined`).

## Beispiele

### Kontextuelle Daten via `setSharedStorageContext()` übergeben

Sie können die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) verwenden, um Berichte zu erstellen, die Ereignis-Level-Daten in eingeschlossenen Frames mit kontextuellen Daten des einbettenden Dokuments kombinieren. `setSharedStorageContext()` kann verwendet werden, um kontextuelle Daten vom Einbettungsdokument an die von der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) initiierte geteilte Speicher-Worklets zu übergeben.

Im folgenden Beispiel speichern wir Daten sowohl von der einbettenden Seite als auch vom eingeschlossenen Frame im [geteilten Speicher](https://privacysandbox.google.com/private-advertising/shared-storage).

Auf der einbettenden Seite setzen wir eine simulierte Ereignis-ID als Kontext des geteilten Speichers mithilfe von `setSharedStorageContext()`:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Im eingeschlossenen Frame fügen wir das Worklet-Modul mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzu und senden dann die Ereignis-Level-Daten in das geteilte Speicher-Worklet mithilfe von [`window.sharedStorage.run()`](/de/docs/Web/API/WindowSharedStorage/run) (dies ist nicht verwandt mit den kontextuellen Daten des einbettenden Dokuments):

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

Im `reporting-worklet.js`-Worklet lesen wir die Ereignis-ID des Einbettungsdokuments aus `sharedStorage.context` und die Ereignis-Level-Daten des Frames aus dem Datenobjekt, und berichten diese dann durch Private Aggregation:

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

- [Eingeschlossene Frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [Das Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
